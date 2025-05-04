import React from "react";
import {
  Card,
  H1,
  H2,
  H3,
  PageContainer,
  SectionContainer,
  Spacer,
  Text,
} from "../../components/NeoUI";

const Mvp: React.FC = () => (
  <PageContainer>
    <SectionContainer>
      <H1>Documentação do MVP do Projeto "Fluxo"</H1>

      <H2>1. Estrutura do Projeto</H2>
      <Text>
        A estrutura do projeto "Fluxo" segue os princípios de um Produto Mínimo Viável (MVP) para garantir foco e eficiência no desenvolvimento inicial. A estrutura de diretórios e arquivos é organizada da seguinte forma:
      </Text>
      <pre>
        <code>
{`fluxo-mvp/
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
    └── _config.yml`}
        </code>
      </pre>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H2>2. Arquitetura do Sistema</H2>
      <H3>2.1 Visão Geral</H3>
      <Text>
        A arquitetura do "Fluxo" é baseada em uma abordagem federada e descentralizada, utilizando blockchain para gerenciar identidades de usuário e garantir privacidade. O sistema é dividido em dois componentes principais: frontend e backend.
      </Text>
      <H3>2.2 Frontend</H3>
      <ul>
        <li><b>Tecnologia:</b> React Native para desenvolvimento cross-platform (web e mobile).</li>
        <li><b>Responsabilidade:</b> Interface do usuário, interação com carteiras de usuário (ex: MetaMask) e comunicação com o backend.</li>
      </ul>
      <H3>2.3 Backend</H3>
      <ul>
        <li><b>Tecnologia:</b> .NET 9 para API RESTful.</li>
        <li><b>Responsabilidade:</b> Autenticação federada, gestão de eventos e comentários, integração com blockchain e armazenamento descentralizado (ex: IPFS).</li>
      </ul>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H2>3. Modelos de Dados</H2>
      <H3>3.1 Usuário</H3>
      <pre>
        <code className="language-csharp">
{`public class User
{
    public string WalletAddress { get; set; } // Endereço da carteira
    public string Name { get; set; }
    public string Email { get; set; }
    public List<int> Friends { get; set; } = new List<int>();
}`}
        </code>
      </pre>
      <H3>3.2 Evento</H3>
      <pre>
        <code className="language-csharp">
{`public class Event
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DateTime { get; set; }
    public string Location { get; set; }
    public bool IsPublic { get; set; }
    public List<int> Participants { get; set; } = new List<int>();
    public List<Comment> Comments { get; set; } = new List<Comment>();
}`}
        </code>
      </pre>
      <H3>3.3 Comentário</H3>
      <pre>
        <code className="language-csharp">
{`public class Comment
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public string UserId { get; set; } // Endereço da carteira do usuário
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
}`}
        </code>
      </pre>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H2>4. Tabelas do Banco de Dados</H2>
      <H3>4.1 Tabela de Usuários</H3>
      <Card>
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>WalletAddress</td>
              <td>VARCHAR(255)</td>
              <td>Endereço da carteira do usuário</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>VARCHAR(255)</td>
              <td>Nome do usuário</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>VARCHAR(255)</td>
              <td>Email do usuário</td>
            </tr>
            <tr>
              <td>Friends</td>
              <td>TEXT</td>
              <td>Lista de amigos (IDs separados por vírgula)</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <H3>4.2 Tabela de Eventos</H3>
      <Card>
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>INT</td>
              <td>ID do evento</td>
            </tr>
            <tr>
              <td>Title</td>
              <td>VARCHAR(255)</td>
              <td>Título do evento</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>TEXT</td>
              <td>Descrição do evento</td>
            </tr>
            <tr>
              <td>DateTime</td>
              <td>DATETIME</td>
              <td>Data e hora do evento</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>VARCHAR(255)</td>
              <td>Localização do evento</td>
            </tr>
            <tr>
              <td>IsPublic</td>
              <td>BOOLEAN</td>
              <td>Indica se o evento é público</td>
            </tr>
            <tr>
              <td>Participants</td>
              <td>TEXT</td>
              <td>Lista de participantes (IDs separados por vírgula)</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <H3>4.3 Tabela de Comentários</H3>
      <Card>
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>INT</td>
              <td>ID do comentário</td>
            </tr>
            <tr>
              <td>EventId</td>
              <td>INT</td>
              <td>ID do evento relacionado</td>
            </tr>
            <tr>
              <td>UserId</td>
              <td>VARCHAR(255)</td>
              <td>Endereço da carteira do usuário</td>
            </tr>
            <tr>
              <td>Content</td>
              <td>TEXT</td>
              <td>Conteúdo do comentário</td>
            </tr>
            <tr>
              <td>CreatedAt</td>
              <td>DATETIME</td>
              <td>Data e hora de criação</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H2>5. Pacotes e Dependências</H2>
      <H3>5.1 Frontend (React Native)</H3>
      <ul>
        <li><b>React Native SDK</b>: Versão 3.10 ou superior.</li>
        <li><b>Dependências:</b>
          <ul>
            <li><code>react-native-mapbox-gl</code>: Para integração com mapas.</li>
            <li><code>ethers.js (com WalletConnect)</code>: Para interação com carteiras e blockchain.</li>
            <li><code>firebase_auth</code>: Autenticação federada.</li>
            <li><code>Zustand</code> ou <code>Context API</code>: Gerenciamento de estado.</li>
          </ul>
        </li>
      </ul>
      <H3>5.2 Backend (.NET 9)</H3>
      <ul>
        <li><b>Entity Framework Core</b>: Para ORM e acesso ao banco de dados.</li>
        <li><b>Microsoft.AspNetCore.Mvc</b>: Para criação de APIs RESTful.</li>
        <li><b>NuGet Packages:</b>
          <ul>
            <li><code>Microsoft.EntityFrameworkCore.SqlServer</code></li>
            <li><code>Microsoft.EntityFrameworkCore.Tools</code></li>
            <li><code>System.IdentityModel.Tokens.Jwt</code> (para autenticação JWT)</li>
          </ul>
        </li>
      </ul>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H2>6. Desenvolvimento e Testes</H2>
      <H3>6.1 Cronograma de Desenvolvimento</H3>
      <ul>
        <li><b>Fase 1</b>: Planejamento e design (1 semana)</li>
        <li><b>Fase 2</b>: Desenvolvimento do frontend e backend (3 semanas)</li>
        <li><b>Fase 3</b>: Integração e testes (2 semanas)</li>
        <li><b>Fase 4</b>: Deploy e feedback dos usuários (1 semana)</li>
      </ul>
      <H3>6.2 Estratégia de Testes</H3>
      <ul>
        <li><b>Testes Unitários</b>: Testar funções críticas do backend.</li>
        <li><b>Testes de Integração</b>: Verificar a comunicação entre frontend e backend.</li>
        <li><b>Testes de Usabilidade</b>: Coletar feedback dos usuários sobre a interface.</li>
      </ul>
      <H3>6.3 Plano de Deploy</H3>
      <ul>
        <li><b>Ambientes</b>: Desenvolvimento, Staging e Produção.</li>
        <li><b>Ferramentas</b>: GitHub Actions para CI/CD.</li>
        <li><b>Plataformas</b>: Deploy inicial em um servidor Linux com Docker.</li>
      </ul>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H2>Conclusão</H2>
      <Text>
        Este MVP do "Fluxo" visa oferecer uma experiência segura e privada aos usuários, utilizando tecnologias descentralizadas e ferramentas gratuitas. A documentação acima fornece uma visão geral da estrutura, arquitetura, modelos de dados e planos de desenvolvimento e deploy.
      </Text>
    </SectionContainer>
  </PageContainer>
);

export default Mvp;
