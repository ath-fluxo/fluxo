# Estratégia do Projeto "Fluxo"

## Sumário
- [Estratégia do Projeto "Fluxo"](#estratégia-do-projeto-fluxo)
  - [Sumário](#sumário)
  - [Introdução](#introdução)
  - [Arquitetura do Sistema](#arquitetura-do-sistema)
    - [Componentes Principais](#componentes-principais)
    - [Diagrama de Arquitetura](#diagrama-de-arquitetura)
  - [Modelos de Dados](#modelos-de-dados)
    - [Classe `User`](#classe-user)
    - [Classe `Event`](#classe-event)
    - [Classe `Comment`](#classe-comment)
  - [Interface Gráfica (UI/UX)](#interface-gráfica-uiux)
    - [Telas Principais](#telas-principais)
  - [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
    - [Frontend (React Native)](#frontend-react-native)
    - [Backend (.NET 9)](#backend-net-9)
    - [Ferramentas Gratuitas](#ferramentas-gratuitas)
  - [Guia de Instalação e Configuração](#guia-de-instalação-e-configuração)
    - [Frontend (React Native)](#frontend-react-native-1)
    - [Backend (.NET 9)](#backend-net-9-1)
  - [Estratégia de Testes](#estratégia-de-testes)
  - [Plano de Deploy](#plano-de-deploy)
  - [Futuras Melhorias](#futuras-melhorias)
  - [Conclusão](#conclusão)

---

## Introdução
O aplicativo "Fluxo" é um MVP (Produto Mínimo Viável) de uma rede social descentralizada, focada em eventos públicos e privados. Utiliza blockchain para autenticação de usuários e armazenamento descentralizado para garantir privacidade e segurança.

## Arquitetura do Sistema
### Componentes Principais
- **Frontend**: Interface do usuário (React Native)
- **Backend**: API RESTful (.NET 9)
- **Blockchain**: Autenticação via carteiras (MetaMask, Argent)
- **Armazenamento**: IPFS (InterPlanetary File System)

### Diagrama de Arquitetura
```plaintext
+------------------+      +------------------+      +------------------+
|   Frontend       |      |   Backend        |      |   Blockchain     |
| (React Native)        |      | (.NET 9)         |      | (Carteiras)      |
+------------------+      +------------------+      +------------------+
        |                           |                           |
        |                           |                           |
        |                           |                           |
        |                           |                           |
+-------v-------------------------+ +----------------------------v------------------+
|   API RESTful (Autenticação,   | |   IPFS (Armazenamento     |
|   Eventos, Comentários)        | |   Descentralizado)        |
+-------------------------------+ +----------------------------+------------------+
```

---

## Modelos de Dados
### Classe `User`
```csharp
public class User
{
    public string WalletAddress { get; set; } // Endereço da carteira blockchain
    public string Name { get; set; }
    public string Email { get; set; }
    public List<string> Friends { get; set; } = new List<string>();
}
```

### Classe `Event`
```csharp
public class Event
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DateTime { get; set; }
    public string Location { get; set; }
    public bool IsPublic { get; set; }
    public List<string> Participants { get; set; } = new List<string>();
    public List<Comment> Comments { get; set; } = new List<Comment>();
}
```

### Classe `Comment`
```csharp
public class Comment
{
    public string Id { get; set; }
    public string EventId { get; set; }
    public string UserId { get; set; } // Endereço da carteira do usuário
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

---

## Interface Gráfica (UI/UX)
### Telas Principais
1. **Tela de Login**
   - Conectar carteira blockchain (MetaMask/Argent)
   - Campo para endereço da carteira
   - Botão "Conectar Carteira"

2. **Tela de Mapa (Home)**
   - Mapa interativo com marcadores de eventos
   - Barra de pesquisa no topo
   - Botão flutuante "+ Criar Evento"

3. **Tela de Detalhes do Evento**
   - Informações do evento (título, data, local)
   - Lista de comentários
   - Campo para adicionar novo comentário

4. **Tela de Criar Evento**
   - Campos: Título, Descrição, Data/Hora, Localização
   - Opção de evento público ou privado
   - Botão "Criar Evento"

---

## Tecnologias e Ferramentas
### Frontend (React Native)
- **Mapa**: `react-native-mapbox-gl` (integração com Mapbox)
- **Blockchain**: `ethers.js (com WalletConnect)` (interação com carteiras)
- **Estado**: `Zustand ou Context API` (gerenciamento de estado)

### Backend (.NET 9)
- **API RESTful**: `Microsoft.AspNetCore.Mvc`
- **Blockchain**: `Nethereum` (integração Ethereum)
- **Armazenamento**: `IPFS.HttpClient` (integração IPFS)

### Ferramentas Gratuitas
- **Design**: Figma, Canva
- **Diagramas**: Visual Paradigm Online
- **CI/CD**: GitHub Actions

---

## Guia de Instalação e Configuração
### Frontend (React Native)
1. Instale o React Native: [https://reactnative.dev/docs/environment-setup](https://https://reactnative.dev/docs/environment-setup)
2. Clone o repositório:
   ```bash
   git clone https://github.com/fluxo-mvp/frontend.git
   ```
3. Instale dependências:
   ```bash
   flutter npm install
   ```
4. Configure arquivo `config.json` com chaves da Mapbox e IPFS.

### Backend (.NET 9)
1. Instale o SDK .NET 9: [dotnet.microsoft.com/download/dotnet/9.0](https://dotnet.microsoft.com/download/dotnet/9.0)
2. Clone o repositório:
   ```bash
   git clone https://github.com/fluxo-mvp/backend.git
   ```
3. Restaure pacotes:
   ```bash
   dotnet restore
   ```
4. Configure `appsettings.json` com conexão IPFS e blockchain.

---

## Estratégia de Testes
- **Testes Unitários**: Backend (.NET) com `xUnit`
- **Testes de Integração**: Frontend (React Native) com `React Native Testing Library`
- **Testes de Usabilidade**: Feedback de usuários beta

---

## Plano de Deploy
- **Frontend**: Deploy como web app (GitHub Pages)
- **Backend**: Docker container no AWS EC2 (grátis tier)
- **Blockchain**: Testnet Ethereum (Rinkeby)

---

## Futuras Melhorias
- Integração com mais carteiras (ex: Trust Wallet)
- Criptografia end-to-end para comentários
- Sistema de reputação baseado em blockchain

---

## Conclusão
O projeto "Fluxo" oferece uma solução descentralizada para gerenciamento de eventos, priorizando privacidade e segurança. Esta documentação serve como base para desenvolver o MVP usando ferramentas gratuitas e open-source.
```
