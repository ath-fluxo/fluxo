import {
    Card,
    H1,
    H2,
    Spacer,
    Text,
} from "../../components/NeoUI";
import { pathRoutes } from "../../routes/pathRoutes";

export default function IndexDoc() {
    return (
        <div>
            <H1>📘 Documentação Oficial do Fluxo</H1>
            <Text>
                Bem-vindo à central de documentação do <b>Fluxo</b>, o aplicativo de eventos com mapa interativo, fórum de eventos e identidade descentralizada via blockchain.
            </Text>
            <Spacer size="md" />

            <H2>🧭 Comece por aqui</H2>
            <Card>
                <ul className="list-disc pl-6">
                    <li><Text><a href={pathRoutes.readme}>Resumo e Interface (README)</a></Text></li>
                    <li><Text><a href={pathRoutes.documentation}>Visão Técnica Geral (DOCUMENTATION)</a></Text></li>
                    <li><Text><a href={pathRoutes.regras}>Regras e Estratégia (REGRAS)</a></Text></li>
                    <li><Text><a href={pathRoutes.infraestrutura}>Estrutura do Backend (.NET) (INFRA)</a></Text></li>
                    <li><Text><a href={pathRoutes.codigos}>Funcionalidades e Modelos de Dados (CODES)</a></Text></li>
                    <li><Text><a href={pathRoutes.usabilidade}>Design, Usabilidade e UI (USABILIDADE)</a></Text></li>
                    <li><Text><a href={pathRoutes.mvp}>Roadmap e MVP (MVP)</a></Text></li>
                    <li><Text><a href={pathRoutes.custos}>Plano de Orçamento (CUSTOS)</a></Text></li>
                    <li><Text><a href={pathRoutes.orcamentario}>Levantamento Orçamentário (ORÇAMENTÁRIO)</a></Text></li>
                    <li><Text><a href={pathRoutes.features}>Funcionalidades e ideias (FEATURES)</a></Text></li>
                    <li><Text><a href={pathRoutes.roadmap}>Roadmap Técnico (ROADMAP)</a></Text></li>
                </ul>
            </Card>

            <Spacer size="md" />
            <H2>📌 Sobre o Fluxo</H2>
            <Card>
                <Text>
                    Fluxo é uma rede social federada e geolocalizada para eventos, com base em:
                </Text>
                <ul className="list-disc pl-6">
                    <li>
                        <Text>Interação via mapa e fóruns como nos antigos eventos do Facebook</Text>
                    </li>
                    <li>
                        <Text>Identidade única e antifraude via blockchain</Text>
                    </li>
                    <li>
                        <Text>Criação e descoberta de eventos públicos e privados</Text>
                    </li>
                    <li>
                        <Text>Incentivo à ocupação urbana e à descentralização digital</Text>
                    </li>
                </ul>
            </Card>

            <Spacer size="md" />
            <Card>
                <Text>
                    <b>Para sugestões ou contribuição</b>, abra uma <a href="https://github.com/AmoreiraT/fluxo/issues" target="_blank" rel="noopener noreferrer">Issue</a> ou envie um Pull Request.
                </Text>
            </Card>
        </div>
    );
}
