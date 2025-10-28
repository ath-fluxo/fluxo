
# Fluxo — Identidade Federada (DID/VC) com baixo custo
**Versão:** 1.0 • **Data:** 2025-10-27 19:56 UTC

Este documento descreve a arquitetura, padrões, código e procedimentos para implementar uma camada de identidade **federada, verificável e barata** no app **Fluxo**, usando **DID/VC (W3C)**, `did:web` em **Firebase Hosting**, **StatusList2021** para revogação, emissão de VCs em **.NET 8**, **wallet RN/Expo** e um protocolo de **co-presença (GPS + BLE)** como prova de vida. Inclui ainda verificação de **evidência ICP‑Brasil** (assinatura PKCS#7 sobre challenge) sem a necessidade de credenciamento como AC/AR.

---

## Sumário
1. [Visão Geral](#visão-geral)
2. [Arquitetura & Padrões](#arquitetura--padrões)
3. [Fluxos Principais](#fluxos-principais)
4. [Esquemas de Credenciais (VCs)](#esquemas-de-credenciais-vcs)
5. [Publicação do `did:web` (Firebase Hosting)](#publicação-do-didweb-firebase-hosting)
6. [Revogação com StatusList2021](#revogação-com-statuslist2021)
7. [Transparência com Raiz Merkle](#transparência-com-raiz-merkle)
8. [Emissor .NET 8 — Endpoints e Código](#emissor-net-8--endpoints-e-código)
9. [Wallet RN/Expo — DID local, Armazenamento e BLE](#wallet-rnexpo--did-local-armazenamento-e-ble)
10. [Evidência ICP-Brasil (PKCS#7)](#evidência-icp-brasil-pkcs7)
11. [Segurança, Privacidade e Anti‑Sybil](#segurança-privacidade-e-anti-sybil)
12. [DevOps, CI e Publicação](#devops-ci-e-publicação)
13. [Testes — cURL e Fluxos](#testes--curl-e-fluxos)
14. [Roadmap](#roadmap)
15. [Glossário](#glossário)
16. [Licença & Avisos](#licença--avisos)

---

## Visão Geral
- **Usuário (Holder)**: possui um `did:key` e armazena **VCs (JWT/JWS)** localmente (Secure Enclave/KeyStore).
- **Emissor (Issuer)**: serviço .NET 8 assina VCs com ES256 e publica `did:web` (JWK pública) no **Firebase Hosting**.
- **Verificador (Verifier)**: checa assinatura, `credentialStatus` (StatusList) e, quando houver, **evidências** (ex.: ICP‑Brasil, co‑presença).
- **Transparência**: diariamente, publicar **raiz Merkle** dos IDs/HASHes das VCs num repositório público (commit assinado).

**Custos:** usar **Firebase Free Tier** para Hosting/Functions/Firestore + GitHub público. Âncoras em blockchain são **opcionais**.

---

## Arquitetura & Padrões
- **Identificadores**: `did:key` (usuário, Ed25519 local) e `did:web` (emissores/verificadores hospedados).
- **Credenciais**: **W3C Verifiable Credentials**, transportadas em **JWT/JWS** (ES256) para simplicidade e compatibilidade.
- **Revogação**: **StatusList2021** (bitstring compactado) hospedada no domínio do emissor (Firebase Hosting).
- **Provas seletivas**: quando necessário, **SD‑JWT** (ou BBS+ futuramente) para revelar apenas o mínimo (ex.: `over18=true`).

**Princípios:** nada de PII on‑chain; granularidade de localização; rotatividade de IDs BLE; chaves do usuário **no dispositivo**.

---

## Fluxos Principais
### Onboarding
1. Wallet gera `did:key` local (Secure Enclave/KeyStore).
2. Usuário verifica telefone via Firebase; backend .NET emite **PhoneVerifiedCredential**.

### Acesso 18+ (exemplo)
1. Verificador solicita prova `over18=true` via **SD‑JWT** (sem expor data de nascimento).
2. Emissor pode emitir **Over18Credential** tendo como evidência validações prévias (ICP‑Brasil, endossos, etc.).

### Presença e Co‑presença em Evento
- **PresenceCredential**: emitida pelo organizador quando o usuário entra em geofence/horário.
- **CoPresenceCredential**: apoiada em **testemunhos BLE** + GPS/Wi‑Fi e atestação de dispositivo; exige **quórum**.

---

## Esquemas de Credenciais (VCs)

### `schemas/phone_verified_vc.schema.json`
```json
{{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "PhoneVerifiedCredential",
  "type": "object",
  "properties": { "@context": { "type": "array" }, "type": { "type": "array" },
    "credentialSubject": { "type": "object",
      "properties": { "id": { "type": "string" }, "phone_hash": { "type": "string" },
                      "last2": { "type": "string", "pattern": "^[0-9]{2}$" }, "verified": { "type": "boolean" } },
      "required": ["id","phone_hash","verified"] },
    "credentialStatus": { "type": "object" } },
  "required": ["@context","type","credentialSubject"]
}}
```

### `schemas/over18_vc.schema.json`
```json
{{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Over18Credential",
  "type": "object",
  "properties": {{ "@context": { "type": "array" }, "type": { "type": "array" },
    "credentialSubject": {{ "type": "object", "properties": {{ "id": {{ "type": "string" }}, "over18": {{ "type": "boolean" }} }},
      "required": ["id","over18"] }},
    "evidence": {{ "type": "array", "items": {{ "type": "object" }} }},
    "credentialStatus": {{ "type": "object" }} }},
  "required": ["@context","type","credentialSubject"]
}}
```

### `schemas/presence_vc.schema.json`
```json
{{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "PresenceCredential",
  "type": "object",
  "properties": { "@context": { "type": "array" }, "type": { "type": "array" },
    "credentialSubject": { "type": "object",
      "properties": { "id": { "type": "string" }, "event": { "type": "string" },
                      "window": { "type": "string" }, "geohash": { "type": "string" } },
      "required": ["id","event","window"] },
    "evidence": { "type": "array", "items": { "type": "object" } },
    "credentialStatus": { "type": "object" } },
  "required": ["@context","type","credentialSubject"]
}}
```

### `schemas/copresence_vc.schema.json`
```json
{{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "CoPresenceCredential",
  "type": "object",
  "properties": {{ "@context": {{ "type": "array" }}, "type": {{ "type": "array" }},
    "credentialSubject": {{ "type": "object",
      "properties": {{ "id": {{ "type": "string" }}, "event": {{ "type": "string" }},
                      "window": {{ "type": "string" }}, "geohash": {{ "type": "string" }} }},
      "required": ["id","event","window"] }},
    "evidence": {{ "type": "array", "items": {{
      "type": "object",
      "properties": {{ "type": {{ "type": "string" }},
        "witnesses": {{ "type": "array", "items": {{ "type": "object" }} }},
        "deviceAttestation": {{ "type": "object" }} }},
      "required": ["type"] }} }},
    "credentialStatus": {{ "type": "object" }} }},
  "required": ["@context","type","credentialSubject"]
}}
```

---

## Publicação do `did:web` (Firebase Hosting)
1. Crie site no **Firebase Hosting** (ex.: `id.fluxo.app`).  
2. Publique `/.well-known/did.json` com a JWK pública (ES256) do emissor:

```json
{{
  "@context": ["https://www.w3.org/ns/did/v1"],
  "id": "did:web:fluxo.example",
  "verificationMethod": [{{"id":"did:web:fluxo.example#key-1","type":"JsonWebKey2020","controller":"did:web:fluxo.example",
  "publicKeyJwk":{{"kty":"EC","crv":"P-256","x":"...","y":"..."}}}}],
  "assertionMethod": ["did:web:fluxo.example#key-1"]
}}
```

---

## Revogação com StatusList2021
- Uma **StatusList** por família de VC, hospedada no Hosting.
```json
{{
  "@context": ["https://www.w3.org/2018/credentials/v1","https://w3id.org/vc/status-list/2021/v1"],
  "id": "https://status.fluxo.example/phone-2025.json",
  "type": ["VerifiableCredential","StatusList2021Credential"],
  "issuer": "did:web:fluxo.example",
  "credentialSubject": {{
    "id": "https://status.fluxo.example/phone-2025.json#list",
    "type": "StatusList2021",
    "statusPurpose": "revocation",
    "encodedList": "H4sIAAAAAAAAA/8AAAAAAAAAAA=="
  }}
}}
```

---

## Transparência com Raiz Merkle
- Agregue IDs/HASHes de VCs, compute a **raiz Merkle** e publique `root.json` (commit assinado).

**Console .NET (esqueleto):**
```csharp
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Linq;

static byte[] Hash(byte[] data) => SHA256.HashData(data);
static byte[] HashHex(string hex) => Hash(Encoding.UTF8.GetBytes(hex));
static byte[] MerkleRoot(List<byte[]> leaves) {{ /* combina folhas 2 a 2 até restar 1 */ }}

var lines = File.ReadAllLines("ids.txt").Where(l => !string.IsNullOrWhiteSpace(l)).ToList();
var leaves = lines.Select(HashHex).ToList();
var root = MerkleRoot(leaves);
var rootHex = Convert.ToHexString(root).ToLowerInvariant();
var obj = new {{ date = DateTime.UtcNow.ToString("O"), count = leaves.Count, merkleRoot = rootHex }};
File.WriteAllText("root.json", JsonSerializer.Serialize(obj, new JsonSerializerOptions{{ WriteIndented = true }}));
```

---

## Emissor .NET 8 — Endpoints e Código (trechos)
```csharp
app.MapPost("/vc/issue/phone", async (HttpRequest req) => {{ /* emite PhoneVerifiedCredential */ }});
app.MapPost("/vc/issue/over18", async (HttpRequest req) => {{ /* emite Over18Credential (com evidence) */ }});
app.MapPost("/vc/issue/presence", async (HttpRequest req) => {{ /* emite PresenceCredential */ }});
app.MapPost("/vc/issue/copresence", async (HttpRequest req) => {{ /* emite CoPresenceCredential */ }});
app.MapPost("/verify-icp", async (HttpRequest req) => {{
  // SignedCms.Decode + CheckSignature(true) + X509Chain (RevocationMode Online)
}});
```

**`.csproj`**
```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="System.IdentityModel.Tokens.Jwt" Version="7.5.2" />
  </ItemGroup>
</Project>
```

**Chaves (dev):**
```bash
openssl ecparam -name prime256v1 -genkey -noout -out issuer-ec256-private.pem
openssl ec -in issuer-ec256-private.pem -pubout -out issuer-ec256-public.pem
```

---

## Wallet RN/Expo — DID local, Armazenamento e BLE
**Gerar DID e guardar VCs (stub)**
```ts
import * as SecureStore from 'expo-secure-store';
import * as Random from 'expo-random';
import * as Crypto from 'expo-crypto';

export async function generateDidKey() {{
  const seed = await Random.getRandomBytesAsync(32);
  const seedB64 = Buffer.from(seed).toString('base64');
  await SecureStore.setItemAsync('did_seed', seedB64);
  const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, seedB64);
  const did = 'did:key:z6Mk' + digest.slice(0, 20);
  await SecureStore.setItemAsync('did', did);
  return did;
}}

export async function storeVC(jws: string) {{
  const list = (await SecureStore.getItemAsync('vcs')) ?? '[]';
  const arr = JSON.parse(list); arr.push(jws);
  await SecureStore.setItemAsync('vcs', JSON.stringify(arr));
}}
```

**Co‑presença BLE (estrutura)**
```ts
// requer @dotintent/react-native-ble-plx e Dev Client (expo prebuild)
import { BleManager } from '@dotintent/react-native-ble-plx';
const manager = new BleManager();
export async function scanWitnesses(timeoutMs = 10000) {{ /* coleta IDs próximos */ }}
```

**Boas práticas BLE/GPS**
- IDs efêmeros com rotação (≤5min); janela temporal curta; quórum de testemunhos; beacon oficial do evento.
- Arredonde geolocalização (**geohash**/granularidade). Nunca publique trilha crua.

---

## Evidência ICP-Brasil (PKCS#7)
1. Backend gera **challenge**; app assina com **e‑CPF** (ideal: certificado em nuvem).
2. `SignedCms.Decode()` + `CheckSignature(true)` e `X509Chain` até AC Raiz (RevocationMode Online).
3. Se ok, emitir VC com `evidence` descrevendo o veredito (sem PII).

---

## Segurança, Privacidade e Anti‑Sybil
- **Chaves do usuário** no dispositivo; backup criptografado.
- **Nada on‑chain** além de **hashes/raízes**; PII nunca on‑chain.
- **Co‑presença** com BLE + GPS + Wi‑Fi e **atestação de dispositivo**.
- **Web of Trust**: endossos sociais + presença real em eventos.
- **StatusList** e **expiração curta** para VCs sensíveis.

---

## DevOps, CI e Publicação
- **Firebase Hosting**: `/.well-known/did.json` e `status/*.json` (CI atualiza).
- **GitHub público**: publicar `root.json` (Merkle) diário com commit assinado.
- **Secrets**: chave ES256 do emissor em Secret Manager/KMS fora de dev.

---

## Testes — cURL e Fluxos
**Emitir Phone VC**
```bash
curl -X POST https://issuer.seu-dominio/vc/issue/phone \
  -H "content-type: application/json" \
  -d '{"subDid":"did:key:z6MkUser","phoneHash":"sha256:...","last2":"34"}'
```

**Verificar ICP**
```bash
curl -X POST https://issuer.seu-dominio/verify-icp \
  -H "content-type: application/json" \
  -d '{"challengeB64":"...","cmsB64":"..."}'
```

**Presença**
```bash
curl -X POST https://issuer.seu-dominio/vc/issue/presence \
  -H "content-type: application/json" \
  -d '{"subDid":"did:key:...","event":"evt_abc","window":"2025-10-27T01:00/2025-10-27T03:00Z","geohash":"6gkzwsp"}'
```

---

## Roadmap
- **Semana 1**: did:web publicado; emitir Phone VC; wallet salva JWS.
- **Semana 2**: StatusList funcional; PresenceCredential; gate 18+ via SD‑JWT.
- **Semana 3**: Merkle root diária; co‑presença com quórum BLE; DeviceCheck/Integrity.

---

## Glossário
**DID** (Decentralized Identifier), **VC** (Verifiable Credential), **StatusList2021**, **SD‑JWT**, **PKCS#7/CMS**.

---

## Licença & Avisos
Uso educacional e de prototipagem. Para produção com valor jurídico, siga ICP‑Brasil/LGPD e auditorias de segurança.
