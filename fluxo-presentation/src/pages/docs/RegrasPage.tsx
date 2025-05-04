// src/pages/docs/RegrasPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerNeomorphic, NeomorphicButton, NeomorphicSection } from './../../components/NeomorphicComponents';

import {
    Card,
    H1,
    H2,
    H3,
    Spacer,
    Text,
} from "../../components/NeoUI";

const sumario = [
    "Introdução",
    "Arquitetura do Sistema",
    "Componentes Principais",
    "Diagrama de Arquitetura",
    "Modelos de Dados",
    "Classe User",
    "Classe Event",
    "Classe Comment",
    "Interface Gráfica (UI/UX)",
    "Telas Principais",
    "Tecnologias e Ferramentas",
    "Frontend (React Native)",
    "Backend (.NET 9)",
    "Ferramentas Gratuitas",
    "Guia de Instalação e Configuração",
    "Frontend (React Native)",
    "Backend (.NET 9)",
    "Estratégia de Testes",
    "Plano de Deploy",
    "Futuras Melhorias",
    "Conclusão",
];

export const RegrasPage: React.FC = () => (
    <ContainerNeomorphic>
        <NeomorphicSection>
            <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Regras</h1>
            <p className="prose dark:prose-dark">
                <div>
                    <H1>Estratégia do Projeto "Fluxo"</H1>

                    <H2>Sumário</H2>
                    <Card>
                        <ul className="list-disc pl-6">
                            {sumario.map((item, idx) => (
                                <li key={idx}>
                                    <Text>{item}</Text>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Spacer size="md" />
                    <H2>Introdução</H2>
                    <Text>
                        O aplicativo "Fluxo" é um MVP (Produto Mínimo Viável) de uma rede social descentralizada, focada em eventos públicos e privados. Utiliza blockchain para autenticação de usuários e armazenamento descentralizado para garantir privacidade e segurança.
                    </Text>

                    <H2>Arquitetura do Sistema</H2>
                    <H3>Componentes Principais</H3>
                    <Card>
                        <ul className="list-disc pl-6">
                            <li><Text><b>Frontend</b>: Interface do usuário (React Native)</Text></li>
                            <li><Text><b>Backend</b>: API RESTful (.NET 9)</Text></li>
                            <li><Text><b>Blockchain</b>: Autenticação via carteiras (MetaMask, Argent)</Text></li>
                            <li><Text><b>Armazenamento</b>: IPFS (InterPlanetary File System)</Text></li>
                        </ul>
                    </Card>

                    <H3>Diagrama de Arquitetura</H3>
                    <Card>
                        <pre className="overflow-x-auto text-xs">
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
                    </Card>

                    <H2>Modelos de Dados</H2>
                    <H3>Classe <code>User</code></H3>
                    <Card>
                        <pre className="overflow-x-auto text-xs">
                            <code>
                                {`public class User
{
    public string WalletAddress { get; set; } // Endereço da carteira blockchain
    public string Name { get; set; }
    public string Email { get; set; }
    public List<string> Friends { get; set; } = new List<string>();
}`}
                            </code>
                        </pre>
                    </Card>

                    <H3>Classe <code>Event</code></H3>
                    <Card>
                        <pre className="overflow-x-auto text-xs">
                            <code>
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
                    </Card>

                    <H3>Classe <code>Comment</code></H3>
                    <Card>
                        <pre className="overflow-x-auto text-xs">
                            <code>
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
                    </Card>

                    <H2>Interface Gráfica (UI/UX)</H2>
                    <H3>Telas Principais</H3>
                    <Card>
                        <ol className="list-decimal pl-6">
                            <li>
                                <Text>
                                    <b>Tela de Login</b>
                                    <ul className="list-disc pl-6">
                                        <li><Text>Conectar carteira blockchain (MetaMask/Argent)</Text></li>
                                        <li><Text>Campo para endereço da carteira</Text></li>
                                        <li><Text>Botão "Conectar Carteira"</Text></li>
                                    </ul>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    <b>Tela de Mapa (Home)</b>
                                    <ul className="list-disc pl-6">
                                        <li><Text>Mapa interativo com marcadores de eventos</Text></li>
                                        <li><Text>Barra de pesquisa no topo</Text></li>
                                        <li><Text>Botão flutuante "+ Criar Evento"</Text></li>
                                    </ul>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    <b>Tela de Detalhes do Evento</b>
                                    <ul className="list-disc pl-6">
                                        <li><Text>Informações do evento (título, data, local)</Text></li>
                                        <li><Text>Lista de comentários</Text></li>
                                        <li><Text>Campo para adicionar novo comentário</Text></li>
                                    </ul>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    <b>Tela de Criar Evento</b>
                                    <ul className="list-disc pl-6">
                                        <li><Text>Campos: Título, Descrição, Data/Hora, Localização</Text></li>
                                        <li><Text>Opção de evento público ou privado</Text></li>
                                        <li><Text>Botão "Criar Evento"</Text></li>
                                    </ul>
                                </Text>
                            </li>
                        </ol>
                    </Card>

                    <H2>Tecnologias e Ferramentas</H2>
                    <H3>Frontend (React Native)</H3>
                    <Card>
                        <ul className="list-disc pl-6">
                            <li><Text><b>Mapa:</b> react-native-mapbox-gl (integração com Mapbox)</Text></li>
                            <li><Text><b>Blockchain:</b> ethers.js (com WalletConnect) (interação com carteiras)</Text></li>
                            <li><Text><b>Estado:</b> Zustand ou Context API (gerenciamento de estado)</Text></li>
                        </ul>
                    </Card>
                    <H3>Backend (.NET 9)</H3>
                    <Card>
                        <ul className="list-disc pl-6">
                            <li><Text><b>API RESTful:</b> Microsoft.AspNetCore.Mvc</Text></li>
                            <li><Text><b>Blockchain:</b> Nethereum (integração Ethereum)</Text></li>
                            <li><Text><b>Armazenamento:</b> IPFS.HttpClient (integração IPFS)</Text></li>
                        </ul>
                    </Card>
                    <H3>Ferramentas Gratuitas</H3>
                    <Card>
                        <ul className="list-disc pl-6">
                            <li><Text><b>Design:</b> Figma, Canva</Text></li>
                            <li><Text><b>Diagramas:</b> Visual Paradigm Online</Text></li>
                            <li><Text><b>CI/CD:</b> GitHub Actions</Text></li>
                        </ul>
                    </Card>

                    <H2>Guia de Instalação e Configuração</H2>
                    <H3>Frontend (React Native)</H3>
                    <Card>
                        <ol className="list-decimal pl-6">
                            <li>
                                <Text>
                                    Instale o React Native:{" "}
                                    <a href="https://reactnative.dev/docs/environment-setup" target="_blank" rel="noopener noreferrer">
                                        https://reactnative.dev/docs/environment-setup
                                    </a>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Clone o repositório:
                                    <pre className="bg-gray-100 rounded p-2 mt-1 mb-1">
                                        <code>git clone https://github.com/fluxo-mvp/frontend.git</code>
                                    </pre>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Instale dependências:
                                    <pre className="bg-gray-100 rounded p-2 mt-1 mb-1">
                                        <code>flutter npm install</code>
                                    </pre>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Configure arquivo <code>config.json</code> com chaves da Mapbox e IPFS.
                                </Text>
                            </li>
                        </ol>
                    </Card>
                    <H3>Backend (.NET 9)</H3>
                    <Card>
                        <ol className="list-decimal pl-6">
                            <li>
                                <Text>
                                    Instale o SDK .NET 9:{" "}
                                    <a href="https://dotnet.microsoft.com/download/dotnet/9.0" target="_blank" rel="noopener noreferrer">
                                        dotnet.microsoft.com/download/dotnet/9.0
                                    </a>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Clone o repositório:
                                    <pre className="bg-gray-100 rounded p-2 mt-1 mb-1">
                                        <code>git clone https://github.com/fluxo-mvp/backend.git</code>
                                    </pre>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Restaure pacotes:
                                    <pre className="bg-gray-100 rounded p-2 mt-1 mb-1">
                                        <code>dotnet restore</code>
                                    </pre>
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Configure <code>appsettings.json</code> com conexão IPFS e blockchain.
                                </Text>
                            </li>
                        </ol>
                    </Card>

                    <H2>Estratégia de Testes</H2>
                    <Card>
                        <ul className="list-disc pl-6">
                            <li><Text><b>Testes Unitários:</b> Backend (.NET) com xUnit</Text></li>
                            <li><Text><b>Testes de Integração:</b> Frontend (React Native) com React Native Testing Library</Text></li>
                            <li><Text><b>Testes de Usabilidade:</b> Feedback de usuários beta</Text></li>
                        </ul>
                    </Card>

                    <H2>Plano de Deploy</H2>
                    <Card>
                        <ul className="list-disc pl-6">
                            <li><Text><b>Frontend:</b> Deploy como web app (GitHub Pages)</Text></li>
                            <li><Text><b>Backend:</b> Docker container no AWS EC2 (grátis tier)</Text></li>
                            <li><Text><b>Blockchain:</b> Testnet Ethereum (Rinkeby)</Text></li>
                        </ul>
                    </Card>

                    <H2>Futuras Melhorias</H2>
                    <Card>
                        <ul className="list-disc pl-6">
                            <li><Text>Integração com mais carteiras (ex: Trust Wallet)</Text></li>
                            <li><Text>Criptografia end-to-end para comentários</Text></li>
                            <li><Text>Sistema de reputação baseado em blockchain</Text></li>
                        </ul>
                    </Card>

                    <H2>Conclusão</H2>
                    <Text>
                        O projeto "Fluxo" oferece uma solução descentralizada para gerenciamento de eventos, priorizando privacidade e segurança. Esta documentação serve como base para desenvolver o MVP usando ferramentas gratuitas e open-source.
                    </Text>
                </div>
            </p>
            <Link to="/docs">
                <NeomorphicButton variant="primary">Voltar ao Sumário</NeomorphicButton>
            </Link>
        </NeomorphicSection>
    </ContainerNeomorphic>
);


