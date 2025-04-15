## Roadmap Técnico - Projeto Fluxo

### Visão Geral
O Fluxo é uma rede social geolocalizada voltada para eventos culturais e urbanos. Seu foco está em permitir que usuários explorem e participem de eventos por meio de um mapa interativo, com uma arquitetura federada e segura, baseada em blockchain e carteiras digitais.

---

### 1. Módulo de Usuário (Identidade Federada)

**Backend (.NET Core)**
- Criar API RESTful com ASP.NET Core – **24h**
- Implementar autenticação com carteira digital (ex: Ethereum + Nethereum) – **32h**
- Gerenciar perfis com controle de permissão descentralizado – **16h**
- Integração com banco de dados (SQL Server / MongoDB) – **16h**

**Frontend (React Native)**
- Tela de login/cadastro com carteira digital – **16h**
- Visualização e edição de perfil – **12h**
- Conexão com carteira (ex: WalletConnect) – **16h**
- Integração com backend via Axios – **8h**

**Total Backend:** 88h  
**Total Frontend:** 52h

---

### 2. Módulo de Eventos com Mapa

**Tecnologia base**: Mapbox + React Native

**Frontend (React Native)**
- Exibir eventos geolocalizados em tempo real – **24h**
- Criar e editar eventos (formulário + UX) – **16h**
- Filtros de busca (categoria, distância, tribo) – **12h**
- Notificações push para eventos próximos – **8h**

**Backend (.NET Core)**
- CRUD de eventos e localização – **16h**
- Filtros e busca geográfica – **8h**
- Push notifications via Firebase – **8h**

**Total Backend:** 32h  
**Total Frontend:** 60h

---

### 3. Fórum de Interação nos Eventos

**Frontend (React Native)**
- UI de tópicos e comentários – **16h**
- Reações e curtidas em tempo real – **12h**
- Integração com autenticação – **8h**

**Backend (Realtime / WebSocket)**
- Estrutura de tópicos e comentários – **16h**
- WebSocket ou Firebase Realtime DB – **24h**
- Moderação com reputação/DAO – **20h**

**Total Backend:** 60h  
**Total Frontend:** 36h

---

### 4. Integrações Externas e Públicas

**Backend**
- APIs de cultura/governo – **16h**
- Parser/importador de dados – **12h**
- API pública para parceiros – **12h**

**Frontend**
- Visualização de eventos externos – **8h**
- Identificação de origem (evento público ou privado) – **4h**

**Total Backend:** 40h  
**Total Frontend:** 12h

---

### 5. Blockchain e Federação de Dados

**Blockchain / Web3 Dev**
- Registro de identidade on-chain – **16h**
- Registro de eventos e interações – **16h**
- Armazenamento descentralizado com IPFS – **12h**
- DAO e tokens de participação – **20h**

**Frontend**
- Integração com carteiras (WalletConnect) – **8h**
- Visualização de credenciais públicas (NFTs, reputação) – **8h**

**Total Web3:** 64h  
**Total Frontend:** 16h

---

### 6. Roadmap de Implementação

**Fase 1: MVP (3 meses)**
- Autenticação via carteira digital – **80h** (total)
- Mapa com eventos básicos – **56h**
- Cadastro e visualização de eventos – **40h**

**Fase 2: Expansão (3-6 meses)**
- Fórum por evento – **96h**
- Filtros avançados no mapa – **20h**
- Integrações com plataformas públicas – **52h**

**Fase 3: Descentralização completa (6-12 meses)**
- DAO para governança – **20h**
- Registro de dados em blockchain – **32h**
- Armazenamento de arquivos em IPFS – **12h**

---

### Resumo por Stack

| Stack            | Horas Totais |
|------------------|--------------|
| **Frontend**     | 176h         |
| **Backend**      | 220h         |
| **Web3/Blockchain** | 64h      |
| **Total Geral**  | **460h**     |

