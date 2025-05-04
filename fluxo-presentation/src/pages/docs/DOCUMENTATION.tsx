import React from "react";

const Documentation: React.FC = () => (
  <div>
    <h3>Documentação Completa do Projeto "Fluxo"</h3>

    <h2>Sumário</h2>
    <ul>
      <li><a href="#sumário">Sumário</a></li>
      <li><a href="#introdução">Introdução</a></li>
      <li><a href="#arquitetura-do-sistema">Arquitetura do Sistema</a>
        <ul>
          <li><a href="#componentes-principais">Componentes Principais</a></li>
          <li><a href="#diagrama-de-arquitetura">Diagrama de Arquitetura</a></li>
        </ul>
      </li>
      <li><a href="#modelos-de-dados">Modelos de Dados</a>
        <ul>
          <li><a href="#classe-user">Classe <code>User</code></a></li>
          <li><a href="#classe-event">Classe <code>Event</code></a></li>
          <li><a href="#classe-comment">Classe <code>Comment</code></a></li>
        </ul>
      </li>
      <li><a href="#interface-gráfica-uiux">Interface Gráfica (UI/UX)</a>
        <ul>
          <li><a href="#telas-principais">Telas Principais</a></li>
        </ul>
      </li>
      <li><a href="#tecnologias-e-ferramentas">Tecnologias e Ferramentas</a>
        <ul>
          <li><a href="#frontend-react-native">Frontend (React Native)</a></li>
          <li><a href="#backend-net-9">Backend (.NET 9)</a></li>
          <li><a href="#ferramentas-gratuitas">Ferramentas Gratuitas</a></li>
        </ul>
      </li>
      <li><a href="#guia-de-instalação-e-configuração">Guia de Instalação e Configuração</a>
        <ul>
          <li><a href="#frontend-react-native-1">Frontend (React Native)</a></li>
          <li><a href="#backend-net-9-1">Backend (.NET 9)</a></li>
        </ul>
      </li>
      <li><a href="#estratégia-de-testes">Estratégia de Testes</a></li>
      <li><a href="#plano-de-deploy">Plano de Deploy</a></li>
      <li><a href="#futuras-melhorias">Futuras Melhorias</a></li>
      <li><a href="#conclusão">Conclusão</a></li>
    </ul>

    <hr />

    <h2 id="introdução">Introdução</h2>
    <p>
      O aplicativo "Fluxo" é um MVP (Produto Mínimo Viável) de uma rede social descentralizada, focada em eventos públicos e privados. Utiliza blockchain para autenticação de usuários e armazenamento descentralizado para garantir privacidade e segurança.
    </p>

    <h2 id="arquitetura-do-sistema">Arquitetura do Sistema</h2>
    <h3 id="componentes-principais">Componentes Principais</h3>
    <ul>
      <li><b>Frontend</b>: Interface do usuário (React Native)</li>
      <li><b>Backend</b>: API RESTful (.NET 9)</li>
      <li><b>Blockchain</b>: Autenticação via carteiras (MetaMask, Argent)</li>
      <li><b>Armazenamento</b>: IPFS (InterPlanetary File System)</li>
    </ul>

    <h3 id="diagrama-de-arquitetura">Diagrama de Arquitetura</h3>
    <pre>
      <code>
{`+------------------+      +------------------+      +------------------+
|   Frontend       |      |   Backend        |      |   Blockchain     |
| (React Native)   |      | (.NET 9)         |      | (Carteiras)      |
+------------------+      +------------------+      +------------------+
        |                           |                           |
        |                           |                           |
        |                           |                           |
        |                           |                           |
+-------v-------------------------+ +----------------------------v------------------+
|   API RESTful (Autenticação,   | |   IPFS (Armazenamento     |
|   Eventos, Comentários)        | |   Descentralizado)        |
+-------------------------------+ +----------------------------+------------------+`}
      </code>
    </pre>

    <hr />

    <h2 id="modelos-de-dados">Modelos de Dados</h2>
    <h3 id="classe-user">Classe <code>User</code></h3>
    <pre>
      <code className="language-csharp">
{`public class User
{
    public string WalletAddress { get; set; } // Endereço da carteira blockchain
    public string Name { get; set; }
    public string Email { get; set; }
    public List<string> Friends { get; set; } = new List<string>();
}`}
      </code>
    </pre>

    <h3 id="classe-event">Classe <code>Event</code></h3>
    <pre>
      <code className="language-csharp">
{`public class Event
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DateTime { get; set; }
    public string Location { get; set; }
    public bool IsPublic { get; set; }
    public List<string> Participants { get; set; } = new List<string>();
    public List<Comment> Comments { get; set; } = new List<Comment>();
}`}
      </code>
    </pre>

    <h3 id="classe-comment">Classe <code>Comment</code></h3>
    <pre>
      <code className="language-csharp">
{`public class Comment
{
    public string Id { get; set; }
    public string EventId { get; set; }
    public string UserId { get; set; } // Endereço da carteira do usuário
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
}`}
      </code>
    </pre>

    <hr />

    <h2 id="interface-gráfica-uiux">Interface Gráfica (UI/UX)</h2>
    <h3 id="telas-principais">Telas Principais</h3>
    <ol>
      <li>
        <b>Tela de Login</b>
        <ul>
          <li>Conectar carteira blockchain (MetaMask/Argent)</li>
          <li>Campo para endereço da carteira</li>
          <li>Botão "Conectar Carteira"</li>
        </ul>
      </li>
      <li>
        <b>Tela de Mapa (Home)</b>
        <ul>
          <li>Mapa interativo com marcadores de eventos</li>
          <li>Barra de pesquisa no topo</li>
          <li>Botão flutuante "+ Criar Evento"</li>
        </ul>
      </li>
      <li>
        <b>Tela de Detalhes do Evento</b>
        <ul>
          <li>Informações do evento (título, data, local)</li>
          <li>Lista de comentários</li>
          <li>Campo para adicionar novo comentário</li>
        </ul>
      </li>
      <li>
        <b>Tela de Criar Evento</b>
        <ul>
          <li>Campos: Título, Descrição, Data/Hora, Localização</li>
          <li>Opção de evento público ou privado</li>
          <li>Botão "Criar Evento"</li>
        </ul>
      </li>
    </ol>

    <hr />

    <h2 id="tecnologias-e-ferramentas">Tecnologias e Ferramentas</h2>
    <h3 id="frontend-react-native">Frontend (React Native)</h3>
    <ul>
      <li><b>Mapa</b>: <code>react-native-mapbox-gl</code> (integração com Mapbox)</li>
      <li><b>Blockchain</b>: <code>ethers.js (com WalletConnect)</code> (interação com carteiras)</li>
      <li><b>Estado</b>: <code>Zustand ou Context API</code> (gerenciamento de estado)</li>
    </ul>

    <h3 id="backend-net-9">Backend (.NET 9)</h3>
    <ul>
      <li><b>API RESTful</b>: <code>Microsoft.AspNetCore.Mvc</code></li>
      <li><b>Blockchain</b>: <code>Nethereum</code> (integração Ethereum)</li>
      <li><b>Armazenamento</b>: <code>IPFS.HttpClient</code> (integração IPFS)</li>
    </ul>

    <h3 id="ferramentas-gratuitas">Ferramentas Gratuitas</h3>
    <ul>
      <li><b>Design</b>: Figma, Canva</li>
      <li><b>Diagramas</b>: Visual Paradigm Online</li>
      <li><b>CI/CD</b>: GitHub Actions</li>
    </ul>

    <hr />

    <h2 id="guia-de-instalação-e-configuração">Guia de Instalação e Configuração</h2>
    <h3 id="frontend-react-native-1">Frontend (React Native)</h3>
    <ol>
      <li>
        Instale o React Native:{" "}
        <a href="https://reactnative.dev/docs/environment-setup" target="_blank" rel="noopener noreferrer">
          https://reactnative.dev/docs/environment-setup
        </a>
      </li>
      <li>
        Clone o repositório:
        <pre>
          <code className="language-bash">
{`git clone https://github.com/fluxo-mvp/frontend.git`}
          </code>
        </pre>
      </li>
      <li>
        Instale dependências:
        <pre>
          <code className="language-bash">
{`flutter npm install`}
          </code>
        </pre>
      </li>
      <li>
        Configure arquivo <code>config.json</code> com chaves da Mapbox e IPFS.
      </li>
    </ol>

    <h3 id="backend-net-9-1">Backend (.NET 9)</h3>
    <ol>
      <li>
        Instale o SDK .NET 9:{" "}
        <a href="https://dotnet.microsoft.com/download/dotnet/9.0" target="_blank" rel="noopener noreferrer">
          https://dotnet.microsoft.com/download/dotnet/9.0
        </a>
      </li>
      <li>
        Clone o repositório:
        <pre>
          <code className="language-bash">
{`git clone https://github.com/fluxo-mvp/backend.git`}
          </code>
        </pre>
      </li>
      <li>
        Restaure pacotes:
        <pre>
          <code className="language-bash">
{`dotnet restore`}
          </code>
        </pre>
      </li>
      <li>
        Configure <code>appsettings.json</code> com conexão IPFS e blockchain.
      </li>
    </ol>

    <hr />

    <h2 id="estratégia-de-testes">Estratégia de Testes</h2>
    <ul>
      <li><b>Testes Unitários</b>: Backend (.NET) com <code>xUnit</code></li>
      <li><b>Testes de Integração</b>: Frontend (React Native) com <code>React Native Testing Library</code></li>
      <li><b>Testes de Usabilidade</b>: Feedback de usuários beta</li>
    </ul>

    <hr />

    <h2 id="plano-de-deploy">Plano de Deploy</h2>
    <ul>
      <li><b>Frontend</b>: Deploy como web app (GitHub Pages)</li>
      <li><b>Backend</b>: Docker container no AWS EC2 (grátis tier)</li>
      <li><b>Blockchain</b>: Testnet Ethereum (Rinkeby)</li>
    </ul>

    <hr />

    <h2 id="futuras-melhorias">Futuras Melhorias</h2>
    <ul>
      <li>Integração com mais carteiras (ex: Trust Wallet)</li>
      <li>Criptografia end-to-end para comentários</li>
      <li>Sistema de reputação baseado em blockchain</li>
    </ul>

    <hr />

    <h2 id="conclusão">Conclusão</h2>
    <p>
      O projeto "Fluxo" oferece uma solução descentralizada para gerenciamento de eventos, priorizando privacidade e segurança. Esta documentação serve como base para desenvolver o MVP usando ferramentas gratuitas e open-source.
    </p>
  </div>
);

export default Documentation;
