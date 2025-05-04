import React from "react";
import { Card, H2 } from "../../components/NeoUI";

const DocumentationMd: React.FC = () => (
  <div>
   
    <Card
    >
      <H2 >Documentação Completa do Projeto "Fluxo"</H2>
      <div className="mb-4">
        <h2 id="sumário" className="text-xl font-semibold text-highlight mb-2">Sumário</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
          <li><a href="#sumário" className="text-primary hover:underline">Sumário</a></li>
          <li><a href="#introdução" className="text-primary hover:underline">Introdução</a></li>
          <li><a href="#arquitetura-do-sistema" className="text-primary hover:underline">Arquitetura do Sistema</a>
            <ul className="list-disc pl-6">
              <li><a href="#componentes-principais" className="text-primary hover:underline">Componentes Principais</a></li>
              <li><a href="#diagrama-de-arquitetura" className="text-primary hover:underline">Diagrama de Arquitetura</a></li>
            </ul>
          </li>
          <li><a href="#modelos-de-dados" className="text-primary hover:underline">Modelos de Dados</a>
            <ul className="list-disc pl-6">
              <li><a href="#classe-user" className="text-primary hover:underline">Classe <code>User</code></a></li>
              <li><a href="#classe-event" className="text-primary hover:underline">Classe <code>Event</code></a></li>
              <li><a href="#classe-comment" className="text-primary hover:underline">Classe <code>Comment</code></a></li>
            </ul>
          </li>
          <li><a href="#interface-gráfica-uiux" className="text-primary hover:underline">Interface Gráfica (UI/UX)</a>
            <ul className="list-disc pl-6">
              <li><a href="#telas-principais" className="text-primary hover:underline">Telas Principais</a></li>
            </ul>
          </li>
          <li><a href="#tecnologias-e-ferramentas" className="text-primary hover:underline">Tecnologias e Ferramentas</a>
            <ul className="list-disc pl-6">
              <li><a href="#frontend-react-native" className="text-primary hover:underline">Frontend (React Native)</a></li>
              <li><a href="#backend-net-9" className="text-primary hover:underline">Backend (.NET 9)</a></li>
              <li><a href="#ferramentas-gratuitas" className="text-primary hover:underline">Ferramentas Gratuitas</a></li>
            </ul>
          </li>
          <li><a href="#guia-de-instalação-e-configuração" className="text-primary hover:underline">Guia de Instalação e Configuração</a>
            <ul className="list-disc pl-6">
              <li><a href="#frontend-react-native-1" className="text-primary hover:underline">Frontend (React Native)</a></li>
              <li><a href="#backend-net-9-1" className="text-primary hover:underline">Backend (.NET 9)</a></li>
            </ul>
          </li>
          <li><a href="#estratégia-de-testes" className="text-primary hover:underline">Estratégia de Testes</a></li>
          <li><a href="#plano-de-deploy" className="text-primary hover:underline">Plano de Deploy</a></li>
          <li><a href="#futuras-melhorias" className="text-primary hover:underline">Futuras Melhorias</a></li>
          <li><a href="#conclusão" className="text-primary hover:underline">Conclusão</a></li>
        </ul>
      </div>
    </Card>

    <div>
      <Card >
        <h2 id="introdução" className="text-2xl font-semibold text-primary mb-2">Introdução</h2>
        <p className="text-gray-800 dark:text-gray-100">
          O aplicativo "Fluxo" é um MVP (Produto Mínimo Viável) de uma rede social descentralizada, focada em eventos públicos e privados. Utiliza blockchain para autenticação de usuários e armazenamento descentralizado para garantir privacidade e segurança.
        </p>
      </Card>

      <Card >
        <h2 id="arquitetura-do-sistema" className="text-2xl font-semibold text-primary mb-2">Arquitetura do Sistema</h2>
        <h3 id="componentes-principais" className="text-lg font-semibold text-highlight mb-1">Componentes Principais</h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 mb-4">
          <li><b>Frontend</b>: Interface do usuário (React Native)</li>
          <li><b>Backend</b>: API RESTful (.NET 9)</li>
          <li><b>Blockchain</b>: Autenticação via carteiras (MetaMask, Argent)</li>
          <li><b>Armazenamento</b>: IPFS (InterPlanetary File System)</li>
        </ul>
        <h3 id="diagrama-de-arquitetura" className="text-lg font-semibold text-highlight mb-1">Diagrama de Arquitetura</h3>
        <div className="bg-lightBg dark:bg-darkBg rounded-lg p-4 shadow-neo-inset dark:shadow-neo-inset overflow-x-auto">
          <pre className="text-xs text-gray-700 dark:text-gray-200">
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
        </div>
      </Card>

      <Card >
        <h2 id="modelos-de-dados" className="text-2xl font-semibold text-primary mb-2">Modelos de Dados</h2>
        <h3 id="classe-user" className="text-lg font-semibold text-highlight mb-1">Classe <code>User</code></h3>
        <div className="bg-lightBg dark:bg-darkBg rounded-lg p-4 shadow-neo-inset dark:shadow-neo-inset mb-4">
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
        </div>
        <h3 id="classe-event" className="text-lg font-semibold text-highlight mb-1">Classe <code>Event</code></h3>
        <div className="bg-lightBg dark:bg-darkBg rounded-lg p-4 shadow-neo-inset dark:shadow-neo-inset mb-4">
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
        </div>
        <h3 id="classe-comment" className="text-lg font-semibold text-highlight mb-1">Classe <code>Comment</code></h3>
        <div className="bg-lightBg dark:bg-darkBg rounded-lg p-4 shadow-neo-inset dark:shadow-neo-inset">
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
        </div>
      </Card>

      <Card >
        <h2 id="interface-gráfica-uiux" className="text-2xl font-semibold text-primary mb-2">Interface Gráfica (UI/UX)</h2>
        <h3 id="telas-principais" className="text-lg font-semibold text-highlight mb-1">Telas Principais</h3>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200">
          <li>
            <b>Tela de Login</b>
            <ul className="list-disc pl-6">
              <li>Conectar carteira blockchain (MetaMask/Argent)</li>
              <li>Campo para endereço da carteira</li>
              <li>Botão "Conectar Carteira"</li>
            </ul>
          </li>
          <li>
            <b>Tela de Mapa (Home)</b>
            <ul className="list-disc pl-6">
              <li>Mapa interativo com marcadores de eventos</li>
              <li>Barra de pesquisa no topo</li>
              <li>Botão flutuante "+ Criar Evento"</li>
            </ul>
          </li>
          <li>
            <b>Tela de Detalhes do Evento</b>
            <ul className="list-disc pl-6">
              <li>Informações do evento (título, data, local)</li>
              <li>Lista de comentários</li>
              <li>Campo para adicionar novo comentário</li>
            </ul>
          </li>
          <li>
            <b>Tela de Criar Evento</b>
            <ul className="list-disc pl-6">
              <li>Campos: Título, Descrição, Data/Hora, Localização</li>
              <li>Opção de evento público ou privado</li>
              <li>Botão "Criar Evento"</li>
            </ul>
          </li>
        </ol>
      </Card>

      <Card >
        <h2 id="tecnologias-e-ferramentas" className="text-2xl font-semibold text-primary mb-2">Tecnologias e Ferramentas</h2>
        <h3 id="frontend-react-native" className="text-lg font-semibold text-highlight mb-1">Frontend (React Native)</h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 mb-2">
          <li><b>Mapa</b>: <code>react-native-mapbox-gl</code> (integração com Mapbox)</li>
          <li><b>Blockchain</b>: <code>ethers.js (com WalletConnect)</code> (interação com carteiras)</li>
          <li><b>Estado</b>: <code>Zustand ou Context API</code> (gerenciamento de estado)</li>
        </ul>
        <h3 id="backend-net-9" className="text-lg font-semibold text-highlight mb-1">Backend (.NET 9)</h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 mb-2">
          <li><b>API RESTful</b>: <code>Microsoft.AspNetCore.Mvc</code></li>
          <li><b>Blockchain</b>: <code>Nethereum</code> (integração Ethereum)</li>
          <li><b>Armazenamento</b>: <code>IPFS.HttpClient</code> (integração IPFS)</li>
        </ul>
        <h3 id="ferramentas-gratuitas" className="text-lg font-semibold text-highlight mb-1">Ferramentas Gratuitas</h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
          <li><b>Design</b>: Figma, Canva</li>
          <li><b>Diagramas</b>: Visual Paradigm Online</li>
          <li><b>CI/CD</b>: GitHub Actions</li>
        </ul>
      </Card>

      <Card >
        <h2 id="guia-de-instalação-e-configuração" className="text-2xl font-semibold text-primary mb-2">Guia de Instalação e Configuração</h2>
        <h3 id="frontend-react-native-1" className="text-lg font-semibold text-highlight mb-1">Frontend (React Native)</h3>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 mb-4">
          <li>
            Instale o React Native:{" "}
            <a href="https://reactnative.dev/docs/environment-setup" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              https://reactnative.dev/docs/environment-setup
            </a>
          </li>
          <li>
            Clone o repositório:
            <div className="bg-lightBg dark:bg-darkBg rounded p-2 shadow-neo-inset dark:shadow-neo-inset my-2">
              <pre>
                <code className="language-bash">
{`git clone https://github.com/fluxo-mvp/frontend.git`}
                </code>
              </pre>
            </div>
          </li>
          <li>
            Instale dependências:
            <div className="bg-lightBg dark:bg-darkBg rounded p-2 shadow-neo-inset dark:shadow-neo-inset my-2">
              <pre>
                <code className="language-bash">
{`flutter npm install`}
                </code>
              </pre>
            </div>
          </li>
          <li>
            Configure arquivo <code>config.json</code> com chaves da Mapbox e IPFS.
          </li>
        </ol>
        <h3 id="backend-net-9-1" className="text-lg font-semibold text-highlight mb-1">Backend (.NET 9)</h3>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200">
          <li>
            Instale o SDK .NET 9:{" "}
            <a href="https://dotnet.microsoft.com/download/dotnet/9.0" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              https://dotnet.microsoft.com/download/dotnet/9.0
            </a>
          </li>
          <li>
            Clone o repositório:
            <div className="bg-lightBg dark:bg-darkBg rounded p-2 shadow-neo-inset dark:shadow-neo-inset my-2">
              <pre>
                <code className="language-bash">
{`git clone https://github.com/fluxo-mvp/backend.git`}
                </code>
              </pre>
            </div>
          </li>
          <li>
            Restaure pacotes:
            <div className="bg-lightBg dark:bg-darkBg rounded p-2 shadow-neo-inset dark:shadow-neo-inset my-2">
              <pre>
                <code className="language-bash">
{`dotnet restore`}
                </code>
              </pre>
            </div>
          </li>
          <li>
            Configure <code>appsettings.json</code> com conexão IPFS e blockchain.
          </li>
        </ol>
      </Card>

      <Card >
        <h2 id="estratégia-de-testes" className="text-2xl font-semibold text-primary mb-2">Estratégia de Testes</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
          <li><b>Testes Unitários</b>: Backend (.NET) com <code>xUnit</code></li>
          <li><b>Testes de Integração</b>: Frontend (React Native) com <code>React Native Testing Library</code></li>
          <li><b>Testes de Usabilidade</b>: Feedback de usuários beta</li>
        </ul>
      </Card>

      <Card >
        <h2 id="plano-de-deploy" className="text-2xl font-semibold text-primary mb-2">Plano de Deploy</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
          <li><b>Frontend</b>: Deploy como web app (GitHub Pages)</li>
          <li><b>Backend</b>: Docker container no AWS EC2 (grátis tier)</li>
          <li><b>Blockchain</b>: Testnet Ethereum (Rinkeby)</li>
        </ul>
      </Card>

      <Card >
        <h2 id="futuras-melhorias" className="text-2xl font-semibold text-primary mb-2">Futuras Melhorias</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
          <li>Integração com mais carteiras (ex: Trust Wallet)</li>
          <li>Criptografia end-to-end para comentários</li>
          <li>Sistema de reputação baseado em blockchain</li>
        </ul>
      </Card>

      <Card>
        <h2 id="conclusão" className="text-2xl font-semibold text-primary mb-2">Conclusão</h2>
        <p className="text-gray-800 dark:text-gray-100">
          O projeto "Fluxo" oferece uma solução descentralizada para gerenciamento de eventos, priorizando privacidade e segurança. Esta documentação serve como base para desenvolver o MVP usando ferramentas gratuitas e open-source.
        </p>
      </Card>
    </div>
  </div>
);

export default DocumentationMd;
