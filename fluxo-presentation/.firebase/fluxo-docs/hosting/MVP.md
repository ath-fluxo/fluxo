### Documentação do MVP do Projeto "Fluxo"

#### **1. Estrutura do Projeto**
A estrutura do projeto "Fluxo" segue os princípios de um Produto Mínimo Viável (MVP) para garantir foco e eficiência no desenvolvimento inicial. A estrutura de diretórios e arquivos é organizada da seguinte forma:

```
fluxo-mvp/
├── README.md
├── docs/
│   ├── index.md
│   ├── architecture.md
│   ├── data-models.md
│   ├── features.md
│   ├── tech-stack.md
│   ├── design-guidelines.md
│   ├── development-timeline.md
│   ├── testing-qa.md
│   └── deployment-plan.md
├── src/
│   ├── frontend/
│   │   ├── lib/
│   │   ├── assets/
│   │   └── App.tsx
│   └── backend/
│       ├── controllers/
│       ├── models/
│       ├── services/
│       └── appsettings.json
├── tests/
└── config/
    └── _config.yml
```

#### **2. Arquitetura do Sistema**

##### **2.1 Visão Geral**
A arquitetura do "Fluxo" é baseada em uma abordagem federada e descentralizada, utilizando blockchain para gerenciar identidades de usuário e garantir privacidade. O sistema é dividido em dois componentes principais: frontend e backend[^16^].

##### **2.2 Frontend**
- **Tecnologia**: React Native para desenvolvimento cross-platform (web e mobile).
- **Responsabilidade**: Interface do usuário, interação com carteiras de usuário (ex: MetaMask) e comunicação com o backend.

##### **2.3 Backend**
- **Tecnologia**: .NET 9 para API RESTful.
- **Responsabilidade**: Autenticação federada, gestão de eventos e comentários, integração com blockchain e armazenamento descentralizado (ex: IPFS).

#### **3. Modelos de Dados**

##### **3.1 Usuário**
```csharp
public class User
{
    public string WalletAddress { get; set; } // Endereço da carteira
    public string Name { get; set; }
    public string Email { get; set; }
    public List<int> Friends { get; set; } = new List<int>();
}
```

##### **3.2 Evento**
```csharp
public class Event
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DateTime { get; set; }
    public string Location { get; set; }
    public bool IsPublic { get; set; }
    public List<int> Participants { get; set; } = new List<int>();
    public List<Comment> Comments { get; set; } = new List<Comment>();
}
```

##### **3.3 Comentário**
```csharp
public class Comment
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public string UserId { get; set; } // Endereço da carteira do usuário
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

#### **4. Tabelas do Banco de Dados**

##### **4.1 Tabela de Usuários**
| Campo            | Tipo          | Descrição                          |
|------------------|---------------|------------------------------------|
| WalletAddress    | VARCHAR(255)  | Endereço da carteira do usuário    |
| Name             | VARCHAR(255)  | Nome do usuário                     |
| Email            | VARCHAR(255)  | Email do usuário                    |
| Friends          | TEXT          | Lista de amigos (IDs separados por vírgula) |

##### **4.2 Tabela de Eventos**
| Campo            | Tipo          | Descrição                          |
|------------------|---------------|------------------------------------|
| Id               | INT           | ID do evento                       |
| Title            | VARCHAR(255)  | Título do evento                    |
| Description      | TEXT          | Descrição do evento                 |
| DateTime         | DATETIME      | Data e hora do evento               |
| Location         | VARCHAR(255)  | Localização do evento               |
| IsPublic         | BOOLEAN       | Indica se o evento é público        |
| Participants     | TEXT          | Lista de participantes (IDs separados por vírgula) |

##### **4.3 Tabela de Comentários**
| Campo            | Tipo          | Descrição                          |
|------------------|---------------|------------------------------------|
| Id               | INT           | ID do comentário                    |
| EventId          | INT           | ID do evento relacionado           |
| UserId           | VARCHAR(255)  | Endereço da carteira do usuário    |
| Content          | TEXT          | Conteúdo do comentário              |
| CreatedAt        | DATETIME      | Data e hora de criação             |

#### **5. Pacotes e Dependências**

##### **5.1 Frontend (React Native)**
- **React Native SDK**: Versão 3.10 ou superior.
- **Dependências**:
  - `react-native-mapbox-gl`: Para integração com mapas.
  - `ethers.js (com WalletConnect)`: Para interação com carteiras e blockchain[^14^].
  - `firebase_auth`: Autenticação federada.
  - `Zustand ou Context API`: Gerenciamento de estado.

##### **5.2 Backend (.NET 9)**
- **Entity Framework Core**: Para ORM e acesso ao banco de dados.
- **Microsoft.AspNetCore.Mvc**: Para criação de APIs RESTful.
- **NuGet Packages**:
  - `Microsoft.EntityFrameworkCore.SqlServer`
  - `Microsoft.EntityFrameworkCore.Tools`
  - `System.IdentityModel.Tokens.Jwt` (para autenticação JWT)

#### **6. Desenvolvimento e Testes**

##### **6.1 Cronograma de Desenvolvimento**
- **Fase 1**: Planejamento e design (1 semana)
- **Fase 2**: Desenvolvimento do frontend e backend (3 semanas)
- **Fase 3**: Integração e testes (2 semanas)
- **Fase 4**: Deploy e feedback dos usuários (1 semana)

##### **6.2 Estratégia de Testes**
- **Testes Unitários**: Testar funções críticas do backend.
- **Testes de Integração**: Verificar a comunicação entre frontend e backend.
- **Testes de Usabilidade**: Coletar feedback dos usuários sobre a interface.

##### **6.3 Plano de Deploy**
- **Ambientes**: Desenvolvimento, Staging e Produção.
- **Ferramentas**: GitHub Actions para CI/CD.
- **Plataformas**: Deploy inicial em um servidor Linux com Docker.

---

### Conclusão
Este MVP do "Fluxo" visa oferecer uma experiência segura e privada aos usuários, utilizando tecnologias descentralizadas e ferramentas gratuitas. A documentação acima fornece uma visão geral da estrutura, arquitetura, modelos de dados e planos de desenvolvimento e deploy[^15^][^16^].
