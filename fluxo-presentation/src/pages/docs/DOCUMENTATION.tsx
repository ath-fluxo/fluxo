import React from "react";
import {
  NeomorphicCard,
} from "../../components/NeomorphicComponents";
import { Card, H2, H3, Text } from "../../components/NeoUI";

const Documentation: React.FC = () => (
  <>
    <div>
      <H3>Documentação Completa do Projeto "Fluxo"</H3>

      <H2>Sumário</H2>
      <Card>
        <ul className="list-disc pl-6">
          <li><Text><a href="#sumário">Sumário</a></Text></li>
          <li><Text><a href="#introdução">Introdução</a></Text></li>
          <li><Text>
            <a href="#arquitetura-do-sistema">Arquitetura do Sistema</a>
            <ul>
              <li><Text><a href="#componentes-principais">Componentes Principais</a></Text></li>
              <li><Text><a href="#diagrama-de-arquitetura">Diagrama de Arquitetura</a></Text></li>
            </ul>
          </Text></li>
          <li><Text>
            <a href="#modelos-de-dados">Modelos de Dados</a>
            <ul>
              <li><Text><a href="#classe-user">Classe <code>User</code></a></Text></li>
              <li><Text><a href="#classe-event">Classe <code>Event</code></a></Text></li>
              <li><Text><a href="#classe-comment">Classe <code>Comment</code></a></Text></li>
            </ul>
          </Text></li>
          <li><Text>
            <a href="#interface-gráfica-uiux">Interface Gráfica (UI/UX)</a>
            <ul>
              <li><Text><a href="#telas-principais">Telas Principais</a></Text></li>
            </ul>
          </Text></li>
          <li><Text>
            <a href="#tecnologias-e-ferramentas">Tecnologias e Ferramentas</a>
            <ul>
              <li><Text><a href="#frontend-react-native">Frontend (React Native)</a></Text></li>
              <li><Text><a href="#backend-net-9">Backend (.NET 9)</a></Text></li>
              <li><Text><a href="#ferramentas-gratuitas">Ferramentas Gratuitas</a></Text></li>
            </ul>
          </Text></li>
          <li><Text>
            <a href="#guia-de-instalação-e-configuração">Guia de Instalação e Configuração</a>
            <ul>
              <li><Text><a href="#frontend-react-native-1">Frontend (React Native)</a></Text></li>
              <li><Text><a href="#backend-net-9-1">Backend (.NET 9)</a></Text></li>
            </ul>
          </Text></li>
          <li><Text><a href="#estratégia-de-testes">Estratégia de Testes</a></Text></li>
          <li><Text><a href="#plano-de-deploy">Plano de Deploy</a></Text></li>
          <li><Text><a href="#futuras-melhorias">Futuras Melhorias</a></Text></li>
          <li><Text><a href="#conclusão">Conclusão</a></Text></li>
        </ul>
      </Card>
    </div>

    <Card>
      <div id="introdução">
        <H2>Introdução</H2>
      </div>
      <Text>
        O aplicativo "Fluxo" é um MVP (Produto Mínimo Viável) de uma rede social descentralizada, focada em eventos públicos e privados. Utiliza blockchain para autenticação de usuários e armazenamento descentralizado para garantir privacidade e segurança.
      </Text>
    </Card>

    <Card>
      <div id="arquitetura-do-sistema">
        <H2>Arquitetura do Sistema</H2>
      </div>
      <div id="componentes-principais">
        <H3>Componentes Principais</H3>
      </div>
      <NeomorphicCard>
        <ul>
          <li><b>Frontend</b>: Interface do usuário (React Native)</li>
          <li><b>Backend</b>: API RESTful (.NET 9)</li>
          <li><b>Blockchain</b>: Autenticação via carteiras (MetaMask, Argent)</li>
          <li><b>Armazenamento</b>: IPFS (InterPlanetary File System)</li>
        </ul>
      </NeomorphicCard>
      <div id="diagrama-de-arquitetura">
        <H3>Diagrama de Arquitetura</H3>
      </div>
      <NeomorphicCard>
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
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="modelos-de-dados">
        <H2>Modelos de Dados</H2>
      </div>
      <div id="classe-user">
        <H3>Classe <code>User</code></H3>
      </div>
      <NeomorphicCard>
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
      </NeomorphicCard>
      <div id="classe-event">
        <H3>Classe <code>Event</code></H3>
      </div>
      <NeomorphicCard>
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
      </NeomorphicCard>
      <div id="classe-comment">
        <H3>Classe <code>Comment</code></H3>
      </div>
      <NeomorphicCard>
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
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="interface-gráfica-uiux">
        <H2>Interface Gráfica (UI/UX)</H2>
      </div>
      <div id="telas-principais">
        <H3>Telas Principais</H3>
      </div>
      <NeomorphicCard>
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
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="tecnologias-e-ferramentas">
        <H2>Tecnologias e Ferramentas</H2>
      </div>
      <div id="frontend-react-native">
        <H3>Frontend (React Native)</H3>
      </div>
      <NeomorphicCard>
        <ul>
          <li><b>Mapa</b>: <code>react-native-mapbox-gl</code> (integração com Mapbox)</li>
          <li><b>Blockchain</b>: <code>ethers.js (com WalletConnect)</code> (interação com carteiras)</li>
          <li><b>Estado</b>: <code>Zustand ou Context API</code> (gerenciamento de estado)</li>
        </ul>
      </NeomorphicCard>
      <div id="backend-net-9">
        <H3>Backend (.NET 9)</H3>
      </div>
      <NeomorphicCard>
        <ul>
          <li><b>API RESTful</b>: <code>Microsoft.AspNetCore.Mvc</code></li>
          <li><b>Blockchain</b>: <code>Nethereum</code> (integração Ethereum)</li>
          <li><b>Armazenamento</b>: <code>IPFS.HttpClient</code> (integração IPFS)</li>
        </ul>
      </NeomorphicCard>
      <div id="ferramentas-gratuitas">
        <H3>Ferramentas Gratuitas</H3>
      </div>
      <NeomorphicCard>
        <ul>
          <li><b>Design</b>: Figma, Canva</li>
          <li><b>Diagramas</b>: Visual Paradigm Online</li>
          <li><b>CI/CD</b>: GitHub Actions</li>
        </ul>
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="guia-de-instalação-e-configuração">
        <H2>Guia de Instalação e Configuração</H2>
      </div>
      <div id="frontend-react-native-1">
        <H3>Frontend (React Native)</H3>
      </div>
      <NeomorphicCard>
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
      </NeomorphicCard>
      <div id="backend-net-9-1">
        <H3>Backend (.NET 9)</H3>
      </div>
      <NeomorphicCard>
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
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="estratégia-de-testes">
        <H2>Estratégia de Testes</H2>
      </div>
      <NeomorphicCard>
        <ul>
          <li><b>Testes Unitários</b>: Backend (.NET) com <code>xUnit</code></li>
          <li><b>Testes de Integração</b>: Frontend (React Native) com <code>React Native Testing Library</code></li>
          <li><b>Testes de Usabilidade</b>: Feedback de usuários beta</li>
        </ul>
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="plano-de-deploy">
        <H2>Plano de Deploy</H2>
      </div>
      <NeomorphicCard>
        <ul>
          <li><b>Frontend</b>: Deploy como web app (GitHub Pages)</li>
          <li><b>Backend</b>: Docker container no AWS EC2 (grátis tier)</li>
          <li><b>Blockchain</b>: Testnet Ethereum (Rinkeby)</li>
        </ul>
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="futuras-melhorias">
        <H2>Futuras Melhorias</H2>
      </div>
      <NeomorphicCard>
        <ul>
          <li>Integração com mais carteiras (ex: Trust Wallet)</li>
          <li>Criptografia end-to-end para comentários</li>
          <li>Sistema de reputação baseado em blockchain</li>
        </ul>
      </NeomorphicCard>
    </Card>

    <Card>
      <div id="conclusão">
        <H2>Conclusão</H2>
      </div>
      <Text>
        O projeto "Fluxo" oferece uma solução descentralizada para gerenciamento de eventos, priorizando privacidade e segurança. Esta documentação serve como base para desenvolver o MVP usando ferramentas gratuitas e open-source.
      </Text>
    </Card>
  </>
);

export default Documentation;
