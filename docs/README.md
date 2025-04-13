
# 🌐 Fluxo – Onde está o fluxo?

Fluxo é uma plataforma social geolocalizada que conecta pessoas a eventos públicos e privados através de um mapa interativo e fóruns comunitários. Inspirado nos antigos eventos do Facebook, mas com uma pegada descentralizada, moderna e segura. O objetivo é promover a **ocupação urbana**, a **liberdade digital** e a **privacidade do usuário**.

---

## 📌 Visão Geral

- Mapa interativo (estilo Mapbox) para visualizar eventos
- Fóruns por evento para interação social e comentários
- Criação de eventos públicos ou privados
- Sistema de convites e RSVP com link compartilhável
- Identidade digital única com base em blockchain (anti-fake)
- Aplicativo mobile em **React Native**, backend em **.NET**
- Foco em descentralização, ética digital e uso de ferramentas gratuitas

---

## 📄 Documentação

- [📘 Documentação Navegável (index.md)](../index.md)
- [DOCUMENTATION.md](./DOCUMENTATION.md)
- [REGRAS.md](./REGRAS.md)
- [STRUCTBACK.md](./INFRA.md)
- [USABILIDADE.md](./USABILIDADE.md)
- [CODES.md](./CODES.md)
- [MVP.md](./MVP.md)
- [plano_orcamento_mvp_fluxo.md](./CUSTOS.md)

---

## 🧭 Telas e Fluxos do App

**1. Login e Autenticação Federada**
- Conexão via carteira (MetaMask, etc) ou e-mail federado
- Identidade descentralizada baseada em blockchain

**2. Mapa Interativo (Home)**
- Eventos geolocalizados com filtros por categoria
- Botão flutuante para criar novo evento

**3. Tela de Evento**
- Título, descrição, data/hora e localização
- Lista de participantes e comentários (fórum)

**4. Criação de Evento**
- Público ou privado
- Seleção de local, data e visibilidade
- Link compartilhável se for privado

**5. Perfil do Usuário**
- Carteira, histórico de eventos, lista de amigos e identidade pública

---

## 🛠️ Stack do Projeto

- **Frontend**: React Native (mobile), Expo
- **Mapa**: Mapbox
- **Backend**: .NET Core 9
- **Banco**: PostgreSQL (Google Cloud SQL ou AWS RDS)
- **Identidade**: Carteira blockchain (MetaMask, WalletConnect)
- **Infraestrutura**: Firebase + Cloud Run **(ou AWS Lambda + API Gateway)**
- **CDN/Imagens**: S3 ou Firebase Storage

---

## 📣 Missão do Fluxo

> Ser uma rede social justa, ética e aberta, que reocupe as cidades, descentralize o poder das big techs e valorize conexões humanas reais.

---

**Status**: Em fase de estruturação do MVP e captação de early-adopters.

---

Para colaborar ou saber mais, explore os documentos acima ou entre em contato com o criador do projeto.
