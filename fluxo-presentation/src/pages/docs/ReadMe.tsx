import {
    Card,
    H1,
    H2,
    H3,
    Spacer,
    Text,
} from "../../components/NeoUI";

export default function Readme() {
    return (
        <div>
            <H1>🌐 Fluxo – Onde está o fluxo?</H1>
            <Text>
                Fluxo é uma plataforma social geolocalizada que conecta pessoas a eventos públicos e privados através de um mapa interativo e fóruns comunitários. Inspirado nos antigos eventos do Facebook, mas com uma pegada descentralizada, moderna e segura. O objetivo é promover a <b>ocupação urbana</b>, a <b>liberdade digital</b> e a <b>privacidade do usuário</b>.
            </Text>
            <Spacer size="md" />

            <H2>📌 Visão Geral</H2>
            <Card>
                <ul className="list-disc pl-6">
                    <li><Text>Mapa interativo (estilo Mapbox) para visualizar eventos</Text></li>
                    <li><Text>Fóruns por evento para interação social e comentários</Text></li>
                    <li><Text>Criação de eventos públicos ou privados</Text></li>
                    <li><Text>Sistema de convites e RSVP com link compartilhável</Text></li>
                    <li><Text>Identidade digital única com base em blockchain (anti-fake)</Text></li>
                    <li><Text>Aplicativo mobile em <b>React Native</b>, backend em <b>.NET</b></Text></li>
                    <li><Text>Foco em descentralização, ética digital e uso de ferramentas gratuitas</Text></li>
                </ul>
            </Card>

            <H2>📄 Documentação</H2>
            <Card>
                <ul className="list-disc pl-6">
                    <li><Text><a href="./index.md">📘 Documentação Navegável (index.md)</a></Text></li>
                    <li><Text><a href="./DOCUMENTATION.md">DOCUMENTATION.md</a></Text></li>
                    <li><Text><a href="./REGRAS.md">REGRAS.md</a></Text></li>
                    <li><Text><a href="./INFRA.md">INFRA.md</a></Text></li>
                    <li><Text><a href="./USABILIDADE.md">USABILIDADE.md</a></Text></li>
                    <li><Text><a href="./CODES.md">CODES.md</a></Text></li>
                    <li><Text><a href="./MVP.md">MVP.md</a></Text></li>
                    <li><Text><a href="./CUSTOS.md">CUSTOS.md</a></Text></li>
                    <li><Text><a href="./ORÇAMENTÁRIO.md">ORÇAMENTÁRIO.md</a></Text></li>
                    <li><Text><a href="./FEATURES.md">FEATURES.md</a></Text></li>
                    <li><Text><a href="./ROADMAP.md">ROADMAP</a></Text></li>
                </ul>
            </Card>

            <H2>🧭 Telas e Fluxos do App</H2>
            <Card>
                <H3>1. Login e Autenticação Federada</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Conexão via carteira (MetaMask, etc) ou e-mail federado</Text></li>
                    <li><Text>Identidade descentralizada baseada em blockchain</Text></li>
                </ul>
                <H3>2. Mapa Interativo (Home)</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Eventos geolocalizados com filtros por categoria</Text></li>
                    <li><Text>Botão flutuante para criar novo evento</Text></li>
                </ul>
                <H3>3. Tela de Evento</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Título, descrição, data/hora e localização</Text></li>
                    <li><Text>Lista de participantes e comentários (fórum)</Text></li>
                </ul>
                <H3>4. Criação de Evento</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Público ou privado</Text></li>
                    <li><Text>Seleção de local, data e visibilidade</Text></li>
                    <li><Text>Link compartilhável se for privado</Text></li>
                </ul>
                <H3>5. Perfil do Usuário</H3>
                <ul className="list-disc pl-6">
                    <li><Text>Carteira, histórico de eventos, lista de amigos e identidade pública</Text></li>
                </ul>
            </Card>

            <H2>🛠️ Stack do Projeto</H2>
            <Card>
                <ul className="list-disc pl-6">
                    <li><Text><b>Frontend</b>: React Native (mobile), Expo</Text></li>
                    <li><Text><b>Mapa</b>: Mapbox</Text></li>
                    <li><Text><b>Backend</b>: .NET Core 9</Text></li>
                    <li><Text><b>Banco</b>: PostgreSQL (Google Cloud SQL ou AWS RDS)</Text></li>
                    <li><Text><b>Identidade</b>: Carteira blockchain (MetaMask, WalletConnect)</Text></li>
                    <li><Text><b>Infraestrutura</b>: Firebase + Cloud Run <i>(ou AWS Lambda + API Gateway)</i></Text></li>
                    <li><Text><b>CDN/Imagens</b>: S3 ou Firebase Storage</Text></li>
                </ul>
            </Card>

            <H2>📣 Missão do Fluxo</H2>
            <Card>
                <Text>
                    <i>
                        Ser uma rede social justa, ética e aberta, que reocupe as cidades, descentralize o poder das big techs e valorize conexões humanas reais.
                    </i>
                </Text>
            </Card>

            <Text>
                <b>Status</b>: Em fase de estruturação do MVP e captação de early-adopters.
            </Text>
            <Spacer size="md" />

            <Text>
                Para colaborar ou saber mais, explore os documentos acima ou entre em contato com o criador do projeto.
            </Text>
        </div>
    );
}
