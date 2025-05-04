import React from 'react';
import { ContainerNeomorphic, NeomorphicButton, NeomorphicCard } from '../../components/NeomorphicComponents';

const DocumentationPage: React.FC = () => {
    return (
        <ContainerNeomorphic className=" space-y-2">
            <NeomorphicCard>
                <h1 className="text-primary text-3xl font-bold mb-6">Documentação Completa do Projeto "Fluxo"</h1>
                <h2 id="sumário" className="text-primary text-2xl font-bold mb-4">Sumário</h2>
                <ul className="text-secondary mb-4">
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('sumário')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Sumário
                        </NeomorphicButton>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('introdução')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Introdução
                        </NeomorphicButton>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('arquitetura-do-sistema')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Arquitetura do Sistema
                        </NeomorphicButton>
                        <ul className="ml-4">
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('componentes-principais')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Componentes Principais
                                </NeomorphicButton>
                            </li>
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('diagrama-de-arquitetura')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Diagrama de Arquitetura
                                </NeomorphicButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('modelos-de-dados')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Modelos de Dados
                        </NeomorphicButton>
                        <ul className="ml-4">
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('classe-user')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Classe <code className="font-mono">User</code>
                                </NeomorphicButton>
                            </li>
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('classe-event')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Classe <code className="font-mono">Event</code>
                                </NeomorphicButton>
                            </li>
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('classe-comment')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Classe <code className="font-mono">Comment</code>
                                </NeomorphicButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('interface-gráfica-uiux')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Interface Gráfica (UI/UX)
                        </NeomorphicButton>
                        <ul className="ml-4">
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('telas-principais')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Telas Principais
                                </NeomorphicButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('tecnologias-e-ferramentas')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Tecnologias e Ferramentas
                        </NeomorphicButton>
                        <ul className="ml-4">
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('frontend-react-native')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Frontend (React Native)
                                </NeomorphicButton>
                            </li>
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('backend-net-9')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Backend (.NET 9)
                                </NeomorphicButton>
                            </li>
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('ferramentas-gratuitas')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Ferramentas Gratuitas
                                </NeomorphicButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('guia-de-instalação-e-configuração')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Guia de Instalação e Configuração
                        </NeomorphicButton>
                        <ul className="ml-4">
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('frontend-react-native-1')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Frontend (React Native)
                                </NeomorphicButton>
                            </li>
                            <li>
                                <NeomorphicButton
                                    onClick={() => document.getElementById('backend-net-9-1')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left mb-2 text-primary"
                                >
                                    Backend (.NET 9)
                                </NeomorphicButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('estratégia-de-testes')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Estratégia de Testes
                        </NeomorphicButton>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('plano-de-deploy')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Plano de Deploy
                        </NeomorphicButton>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('futuras-melhorias')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left mb-2 text-primary"
                        >
                            Futuras Melhorias
                        </NeomorphicButton>
                    </li>
                    <li>
                        <NeomorphicButton
                            onClick={() => document.getElementById('conclusão')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full text-left text-primary"
                        >
                            Conclusão
                        </NeomorphicButton>
                    </li>
                </ul>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="introdução" className="text-primary text-2xl font-bold mb-2">Introdução</h2>
                <p className="text-secondary mb-4">
                    O aplicativo "Fluxo" é um MVP (Produto Mínimo Viável) de uma rede social
                    descentralizada, focada em eventos públicos e privados. Utiliza blockchain para
                    autenticação de usuários e armazenamento descentralizado para garantir
                    privacidade e segurança.
                </p>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="arquitetura-do-sistema" className="text-primary text-2xl font-bold mb-2">Arquitetura do Sistema</h2>
                <h3 id="componentes-principais" className="text-primary text-xl font-bold mb-2">Componentes Principais</h3>
                <ul className="list-disc list-inside ml-4 text-secondary mb-4">
                    <li><span className="font-bold">Frontend</span>: Interface do usuário (React Native)</li>
                    <li><span className="font-bold">Backend</span>: API RESTful (.NET 9)</li>
                    <li><span className="font-bold">Blockchain</span>: Autenticação via carteiras (MetaMask, Argent)</li>
                    <li><span className="font-bold">Armazenamento</span>: IPFS (InterPlanetary File System)</li>
                </ul>
                <h3 id="diagrama-de-arquitetura" className="text-primary text-xl font-bold mb-2">Diagrama de Arquitetura</h3>
                <pre className="text-secondary mb-4"><code>{`+------------------+      +------------------+      +------------------+
|   Frontend       |      |   Backend        |      |   Blockchain     |
| (React Native)        |      | (.NET 9)         |      | (Carteiras)      |
+------------------+      +------------------+      +------------------+
        |                           |                           |
        |                           |                           |
        |                           |                           |
        |                           |                           |
+-------v-------------------------+          +----------------------------v------------------+
|   API RESTful (Autenticação,   |          |   IPFS (Armazenamento     |
|   Eventos, Comentários)        |          |   Descentralizado)        |
+-------------------------------+          +----------------------------+------------------+`}</code></pre>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="modelos-de-dados" className="text-primary text-2xl font-bold mb-2">Modelos de Dados</h2>
                <h3 id="classe-user" className="text-primary text-xl font-bold mb-2">
                    Classe <code className="font-mono">User</code>
                </h3>
                <pre className="text-secondary mb-4"><code>{`public class User
{
    public string WalletAddress { get; set; } // Endereço da carteira blockchain
    public string Name { get; set; }
    public string Email { get; set; }
    public List<string> Friends { get; set; } = new List<string>();
}`}</code></pre>
                <h3 id="classe-event" className="text-primary text-xl font-bold mb-2">
                    Classe <code className="font-mono">Event</code>
                </h3>
                <pre className="text-secondary mb-4"><code>{`public class Event
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DateTime { get; set; }
    public string Location { get; set; }
    public bool IsPublic { get; set; }
    public List<string> Participants { get; set; } = new List<string>();
    public List<Comment> Comments { get; set; } = new List<Comment>();
}`}</code></pre>
                <h3 id="classe-comment" className="text-primary text-xl font-bold mb-2">
                    Classe <code className="font-mono">Comment</code>
                </h3>
                <pre className="text-secondary mb-4"><code>{`public class Comment
{
    public string Id { get; set; }
    public string EventId { get; set; }
    public string UserId { get; set; } // Endereço da carteira do usuário
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
}`}</code></pre>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="interface-gráfica-uiux" className="text-primary text-2xl font-bold mb-2">Interface Gráfica (UI/UX)</h2>
                <h3 id="telas-principais" className="text-primary text-xl font-bold mb-2">Telas Principais</h3>
                <ol className="list-decimal list-inside ml-4 text-secondary mb-4">
                    <li>
                        <span className="font-bold">Tela de Login</span>
                        <ul className="list-disc list-inside ml-4">
                            <li>Conectar carteira blockchain (MetaMask/Argent)</li>
                            <li>Campo para endereço da carteira</li>
                            <li>Botão "Conectar Carteira"</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">Tela de Mapa (Home)</span>
                        <ul className="list-disc list-inside ml-4">
                            <li>Mapa interativo com marcadores de eventos</li>
                            <li>Barra de pesquisa no topo</li>
                            <li>Botão flutuante "+ Criar Evento"</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">Tela de Detalhes do Evento</span>
                        <ul className="list-disc list-inside ml-4">
                            <li>Informações do evento (título, data, local)</li>
                            <li>Lista de comentários</li>
                            <li>Campo para adicionar novo comentário</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">Tela de Criar Evento</span>
                        <ul className="list-disc list-inside ml-4">
                            <li>Campos: Título, Descrição, Data/Hora, Localização</li>
                            <li>Opção de evento público ou privado</li>
                            <li>Botão "Criar Evento"</li>
                        </ul>
                    </li>
                </ol>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="tecnologias-e-ferramentas" className="text-primary text-2xl font-bold mb-2">Tecnologias e Ferramentas</h2>
                <h3 id="frontend-react-native" className="text-primary text-xl font-bold mb-2">Frontend (React Native)</h3>
                <ul className="list-disc list-inside ml-4 text-secondary mb-4">
                    <li><span className="font-bold">Mapa</span>: <code className="font-mono">react-native-mapbox-gl</code> (integração com Mapbox)</li>
                    <li><span className="font-bold">Blockchain</span>: <code className="font-mono">ethers.js (com WalletConnect)</code> (interação com carteiras)</li>
                    <li><span className="font-bold">Estado</span>: <code className="font-mono">Zustand ou Context API</code> (gerenciamento de estado)</li>
                </ul>
                <h3 id="backend-net-9" className="text-primary text-xl font-bold mb-2">Backend (.NET 9)</h3>
                <ul className="list-disc list-inside ml-4 text-secondary mb-4">
                    <li><span className="font-bold">API RESTful</span>: <code className="font-mono">Microsoft.AspNetCore.Mvc</code></li>
                    <li><span className="font-bold">Blockchain</span>: <code className="font-mono">Nethereum</code> (integração Ethereum)</li>
                    <li><span className="font-bold">Armazenamento</span>: <code className="font-mono">IPFS.HttpClient</code> (integração IPFS)</li>
                </ul>
                <h3 id="ferramentas-gratuitas" className="text-primary text-xl font-bold mb-2">Ferramentas Gratuitas</h3>
                <ul className="list-disc list-inside ml-4 text-secondary mb-4">
                    <li><span className="font-bold">Design</span>: Figma, Canva</li>
                    <li><span className="font-bold">Diagramas</span>: Visual Paradigm Online</li>
                    <li><span className="font-bold">CI/CD</span>: GitHub Actions</li>
                </ul>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="guia-de-instalação-e-configuração" className="text-primary text-2xl font-bold mb-2">Guia de Instalação e Configuração</h2>
                <h3 id="frontend-react-native-1" className="text-primary text-xl font-bold mb-2">Frontend (React Native)</h3>
                <ol className="list-decimal list-inside ml-4 text-secondary mb-4">
                    <li>
                        Instale o React Native: <a href="https://reactnative.dev/docs/environment-setup" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://reactnative.dev/docs/environment-setup</a>
                    </li>
                    <li>
                        Clone o repositório:
                        <pre className="ml-4"><code>{`git clone https://github.com/fluxo-mvp/frontend.git`}</code></pre>
                    </li>
                    <li>
                        Instale dependências:
                        <pre className="ml-4"><code>{`npm install`}</code></pre>
                    </li>
                    <li>
                        Configure arquivo <code className="font-mono">config.json</code> com chaves da Mapbox e IPFS.
                    </li>
                </ol>
                <h3 id="backend-net-9-1" className="text-primary text-xl font-bold mb-2">Backend (.NET 9)</h3>
                <ol className="list-decimal list-inside ml-4 text-secondary mb-4">
                    <li>
                        Instale o SDK .NET 9: <a href="https://dotnet.microsoft.com/download/dotnet/9.0" target="_blank" rel="noopener noreferrer" className="text-primary underline">dotnet.microsoft.com/download/dotnet/9.0</a>
                    </li>
                    <li>
                        Clone o repositório:
                        <pre className="ml-4"><code>{`git clone https://github.com/fluxo-mvp/backend.git`}</code></pre>
                    </li>
                    <li>
                        Restaure pacotes:
                        <pre className="ml-4"><code>{`dotnet restore`}</code></pre>
                    </li>
                    <li>
                        Configure <code className="font-mono">appsettings.json</code> com conexão IPFS e blockchain.
                    </li>
                </ol>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="estratégia-de-testes" className="text-primary text-2xl font-bold mb-2">Estratégia de Testes</h2>
                <ul className="list-disc list-inside ml-4 text-secondary mb-4">
                    <li><span className="font-bold">Testes Unitários</span>: Backend (.NET) com <code className="font-mono">xUnit</code></li>
                    <li><span className="font-bold">Testes de Integração</span>: Frontend (React Native) com <code className="font-mono">React Native Testing Library</code></li>
                    <li><span className="font-bold">Testes de Usabilidade</span>: Feedback de usuários beta</li>
                </ul>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="plano-de-deploy" className="text-primary text-2xl font-bold mb-2">Plano de Deploy</h2>
                <ul className="list-disc list-inside ml-4 text-secondary mb-4">
                    <li><span className="font-bold">Frontend</span>: Deploy como web app (GitHub Pages)</li>
                    <li><span className="font-bold">Backend</span>: Docker container no AWS EC2 (grátis tier)</li>
                    <li><span className="font-bold">Blockchain</span>: Testnet Ethereum (Rinkeby)</li>
                </ul>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="futuras-melhorias" className="text-primary text-2xl font-bold mb-2">Futuras Melhorias</h2>
                <ul className="list-disc list-inside ml-4 text-secondary mb-4">
                    <li>Integração com mais carteiras (ex: Trust Wallet)</li>
                    <li>Criptografia end-to-end para comentários</li>
                    <li>Sistema de reputação baseado em blockchain</li>
                </ul>
            </NeomorphicCard>

            <NeomorphicCard>
                <h2 id="conclusão" className="text-primary text-2xl font-bold mb-2">Conclusão</h2>
                <p className="text-secondary mb-4">
                    O projeto "Fluxo" oferece uma solução descentralizada para gerenciamento de
                    eventos, priorizando privacidade e segurança. Esta documentação serve como base
                    para desenvolver o MVP usando ferramentas gratuitas e open-source.
                </p>
            </NeomorphicCard>
        </ContainerNeomorphic>
    );
};

export default DocumentationPage;