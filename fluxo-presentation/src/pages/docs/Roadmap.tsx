import {
    Card,
    H1,
    H2,
    H3,
    Spacer,
    Text,
} from "../../components/NeoUI";

function SimpleTable<T extends Record<string, unknown>>({ columns, data }: { columns: string[]; data: T[] }) {
    return (
        <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm border-collapse">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col} className="px-3 py-2 text-left font-semibold border-b">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {Object.values(row).map((cell, j) => (
                                <td key={j} className="px-3 py-2 border-b">{cell as React.ReactNode}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const stackResumo = [
    { stack: "Frontend", horas: "176h" },
    { stack: "Backend", horas: "220h" },
    { stack: "Web3/Blockchain", horas: "64h" },
    { stack: "Total Geral", horas: "460h" },
];

export default function Roadmap() {
    return (
        <div>
            <H1>📊 Roadmap Técnico - Projeto Fluxo</H1>

            <H2>Visão Geral</H2>
            <Text>
                O Fluxo é uma rede social geolocalizada voltada para eventos culturais e urbanos. Seu foco está em permitir que usuários explorem e participem de eventos por meio de um mapa interativo, com uma arquitetura federada e segura, baseada em blockchain e carteiras digitais.
            </Text>
            <Spacer size="md" />

            <H2>1. Módulo de Usuário (Identidade Federada)</H2>
            <Card>
                <H3>Backend (.NET Core)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Criar API RESTful com ASP.NET Core – <b>24h</b></Text></li>
                    <li><Text>Implementar autenticação com carteira digital (ex: Ethereum + Nethereum) – <b>32h</b></Text></li>
                    <li><Text>Gerenciar perfis com controle de permissão descentralizado – <b>16h</b></Text></li>
                    <li><Text>Integração com banco de dados (SQL Server / MongoDB) – <b>16h</b></Text></li>
                </ul>
                <H3>Frontend (React Native)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Tela de login/cadastro com carteira digital – <b>16h</b></Text></li>
                    <li><Text>Visualização e edição de perfil – <b>12h</b></Text></li>
                    <li><Text>Conexão com carteira (ex: WalletConnect) – <b>16h</b></Text></li>
                    <li><Text>Integração com backend via Axios – <b>8h</b></Text></li>
                </ul>
                <Text><b>Total Backend:</b> 88h</Text>
                <Text><b>Total Frontend:</b> 52h</Text>
            </Card>

            <H2>2. Módulo de Eventos com Mapa</H2>
            <Card>
                <Text><b>Tecnologia base:</b> Mapbox + React Native</Text>
                <H3>Frontend (React Native)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Exibir eventos geolocalizados em tempo real – <b>24h</b></Text></li>
                    <li><Text>Criar e editar eventos (formulário + UX) – <b>16h</b></Text></li>
                    <li><Text>Filtros de busca (categoria, distância, tribo) – <b>12h</b></Text></li>
                    <li><Text>Notificações push para eventos próximos – <b>8h</b></Text></li>
                </ul>
                <H3>Backend (.NET Core)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>CRUD de eventos e localização – <b>16h</b></Text></li>
                    <li><Text>Filtros e busca geográfica – <b>8h</b></Text></li>
                    <li><Text>Push notifications via Firebase – <b>8h</b></Text></li>
                </ul>
                <Text><b>Total Backend:</b> 32h</Text>
                <Text><b>Total Frontend:</b> 60h</Text>
            </Card>

            <H2>3. Fórum de Interação nos Eventos</H2>
            <Card>
                <H3>Frontend (React Native)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>UI de tópicos e comentários – <b>16h</b></Text></li>
                    <li><Text>Reações e curtidas em tempo real – <b>12h</b></Text></li>
                    <li><Text>Integração com autenticação – <b>8h</b></Text></li>
                </ul>
                <H3>Backend (Realtime / WebSocket)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Estrutura de tópicos e comentários – <b>16h</b></Text></li>
                    <li><Text>WebSocket ou Firebase Realtime DB – <b>24h</b></Text></li>
                    <li><Text>Moderação com reputação/DAO – <b>20h</b></Text></li>
                </ul>
                <Text><b>Total Backend:</b> 60h</Text>
                <Text><b>Total Frontend:</b> 36h</Text>
            </Card>

            <H2>4. Integrações Externas e Públicas</H2>
            <Card>
                <H3>Backend</H3>
                <ul className="list-disc pl-6">
                    <li><Text>APIs de cultura/governo – <b>16h</b></Text></li>
                    <li><Text>Parser/importador de dados – <b>12h</b></Text></li>
                    <li><Text>API pública para parceiros – <b>12h</b></Text></li>
                </ul>
                <H3>Frontend</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Visualização de eventos externos – <b>8h</b></Text></li>
                    <li><Text>Identificação de origem (evento público ou privado) – <b>4h</b></Text></li>
                </ul>
                <Text><b>Total Backend:</b> 40h</Text>
                <Text><b>Total Frontend:</b> 12h</Text>
            </Card>

            <H2>5. Blockchain e Federação de Dados</H2>
            <Card>
                <H3>Blockchain / Web3 Dev</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Registro de identidade on-chain – <b>16h</b></Text></li>
                    <li><Text>Registro de eventos e interações – <b>16h</b></Text></li>
                    <li><Text>Armazenamento descentralizado com IPFS – <b>12h</b></Text></li>
                    <li><Text>DAO e tokens de participação – <b>20h</b></Text></li>
                </ul>
                <H3>Frontend</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Integração com carteiras (WalletConnect) – <b>8h</b></Text></li>
                    <li><Text>Visualização de credenciais públicas (NFTs, reputação) – <b>8h</b></Text></li>
                </ul>
                <Text><b>Total Web3:</b> 64h</Text>
                <Text><b>Total Frontend:</b> 16h</Text>
            </Card>

            <H2>6. Roadmap de Implementação</H2>
            <Card>
                <H3>Fase 1: MVP (3 meses)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Autenticação via carteira digital – <b>80h</b> (total)</Text></li>
                    <li><Text>Mapa com eventos básicos – <b>56h</b></Text></li>
                    <li><Text>Cadastro e visualização de eventos – <b>40h</b></Text></li>
                </ul>
                <H3>Fase 2: Expansão (3-6 meses)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Fórum por evento – <b>96h</b></Text></li>
                    <li><Text>Filtros avançados no mapa – <b>20h</b></Text></li>
                    <li><Text>Integrações com plataformas públicas – <b>52h</b></Text></li>
                </ul>
                <H3>Fase 3: Descentralização completa (6-12 meses)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>DAO para governança – <b>20h</b></Text></li>
                    <li><Text>Registro de dados em blockchain – <b>32h</b></Text></li>
                    <li><Text>Armazenamento de arquivos em IPFS – <b>12h</b></Text></li>
                </ul>
            </Card>

            <H2>Resumo por Stack</H2>
            <Card>
                <SimpleTable
                    columns={["Stack", "Horas Totais"]}
                    data={stackResumo}
                />
            </Card>
        </div>
    );
}

