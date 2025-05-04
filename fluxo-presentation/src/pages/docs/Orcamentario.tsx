import {
    Card,
    H1,
    H2,
    H3,
    Text
} from "../../components/NeoUI";

function SimpleTable({ columns, data }: { columns: string[]; data: Record<string, string | number>[] }) {
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
                                <td key={j} className="px-3 py-2 border-b">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const fase1 = [
    {
        item: "Backend (API REST)",
        ferramenta: ".NET no Azure App Service",
        custo: "Grátis",
        pros: "Alta integração, confiável, plano gratuito disponível",
        contras: "Escalabilidade limitada no plano gratuito",
    },
    {
        item: "Banco de Dados",
        ferramenta: "Azure SQL / Supabase",
        custo: "Grátis até 500MB",
        pros: "Fácil de usar, escalável depois do MVP",
        contras: "Limite de armazenamento",
    },
    {
        item: "Blockchain",
        ferramenta: "Polygon testnet",
        custo: "Grátis",
        pros: "Alta segurança, carteiras padrão",
        contras: "Testnet não serve para produção, taxas futuras em mainnet",
    },
    {
        item: "Armazenamento de Mídia",
        ferramenta: "Firebase Storage / IPFS",
        custo: "Grátis até 1GB",
        pros: "IPFS descentralizado, Firebase fácil de integrar",
        contras: "IPFS pode ser lento sem pinning pago",
    },
    {
        item: "Mapa",
        ferramenta: "Mapbox",
        custo: "Grátis (50k req)",
        pros: "SDK completo, ótimo suporte para eventos",
        contras: "Limite gratuito pode ser atingido rapidamente",
    },
    {
        item: "Autenticação por carteira",
        ferramenta: "WalletConnect / RainbowKit",
        custo: "Grátis",
        pros: "Sem custo, padrão Web3",
        contras: "UX pode ser confusa para iniciantes",
    },
    {
        item: "Frontend",
        ferramenta: "React Native + Expo",
        custo: "Grátis",
        pros: "Rápido para prototipar, multiplataforma",
        contras: "Performance limitada no Expo Go",
    },
    {
        item: "Push Notifications",
        ferramenta: "Expo Push / Firebase",
        custo: "Grátis",
        pros: "Fácil integração com RN",
        contras: "Limitação com muitos usuários",
    },
];

const fase2 = [
    {
        item: "Realtime Chat / Fórum",
        ferramenta: "Firebase / Supabase Realtime",
        custo: "Grátis",
        pros: "Baixa latência, fácil integração",
        contras: "Crescimento pode gerar custos",
    },
    {
        item: "Integrações públicas",
        ferramenta: "APIs governamentais",
        custo: "Grátis",
        pros: "Amplia alcance com dados reais",
        contras: "Manutenção constante",
    },
    {
        item: "Filtro e recomendação",
        ferramenta: "Algolia / Fuse.js",
        custo: "Grátis (iniciais)",
        pros: "Busca rápida e personalizável",
        contras: "Algolia pode ter custos altos",
    },
    {
        item: "Mapbox Premium",
        ferramenta: "Mapbox",
        custo: "~R$ 250/mês",
        pros: "Escala melhor",
        contras: "Custo relevante para projeto gratuito",
    },
    {
        item: "Infraestrutura dedicada",
        ferramenta: "DigitalOcean / Railway",
        custo: "R$ 25-100/mês",
        pros: "Maior controle da infra",
        contras: "Requer configuração",
    },
];

const fase3 = [
    {
        item: "Blockchain pública",
        ferramenta: "Ethereum / L2s",
        custo: "Variável",
        pros: "Segurança e auditabilidade máximas",
        contras: "Taxas de transação",
    },
    {
        item: "DAO para governança",
        ferramenta: "Snapshot.org + Gnosis Safe",
        custo: "Grátis",
        pros: "Governança comunitária",
        contras: "Requer coordenação",
    },
    {
        item: "Armazenamento descentralizado",
        ferramenta: "IPFS / Pinata",
        custo: "~R$ 50/mês",
        pros: "Resistente à censura",
        contras: "Performance inferior",
    },
    {
        item: "Publicação em lojas",
        ferramenta: "Google Play + Apple Store",
        custo: "R$ 154 anual",
        pros: "Necessário para distribuição",
        contras: "Pagamento obrigatório",
    },
    {
        item: "Analytics",
        ferramenta: "Firebase / Sentry / Amplitude",
        custo: "Grátis (limite)",
        pros: "Diagnóstico e uso",
        contras: "Plano pago para grandes volumes",
    },
];

const resumoFases = [
    {
        fase: "Fase 1 - MVP",
        duracao: "3 meses",
        mensal: "R$ 0 ~ R$ 100",
        total: "R$ 0 ~ R$ 300",
    },
    {
        fase: "Fase 2 - Expansão",
        duracao: "3-6 meses",
        mensal: "R$ 100 ~ R$ 500",
        total: "R$ 600 ~ R$ 3.000",
    },
    {
        fase: "Fase 3 - Descentralização",
        duracao: "6-12 meses",
        mensal: "R$ 250 ~ R$ 800",
        total: "R$ 1.500 ~ R$ 9.600",
    },
];

const financiamento = [
    "Recursos Próprios",
    "Editais de Cultura (ProAC, Lei Paulo Gustavo)",
    "Crowdfunding (Catarse, Benfeitoria)",
    "Investidor Anjo / Pré-Seed",
    "Patrocínio Institucional (Prefeituras, Festivais)",
];

const simulacao = [
    {
        fonte: "Crowdfunding (Catarse)",
        meta: "R$ 15.000",
        pct: "~50%",
        aplicacao: "Fase 1 + início Fase 2",
    },
    {
        fonte: "Edital Público (ProAC)",
        meta: "R$ 30.000",
        pct: "~100%",
        aplicacao: "Todas as fases",
    },
    {
        fonte: "Investidor Anjo",
        meta: "R$ 50.000",
        pct: "100%+",
        aplicacao: "Equipe e crescimento",
    },
    {
        fonte: "Recursos Próprios",
        meta: "R$ 2.000",
        pct: "~15%",
        aplicacao: "MVP",
    },
];

const cronograma = [
    { mes: "1", acao: "MVP + levantamento inicial" },
    { mes: "2", acao: "Início de crowdfunding" },
    { mes: "3", acao: "Submissão a editais" },
    { mes: "4", acao: "Busca por investidor" },
    { mes: "6", acao: "Lançamento da Fase 2" },
    { mes: "9", acao: "DAO e descentralização" },
    { mes: "12", acao: "Consolidação e monetização" },
];

export default function Orcamentario() {
    return (
        <div>
            <H1>📊 Levantamento Orçamentário por Fase - Projeto Fluxo</H1>

            <H2>Fase 1: MVP (3 meses)</H2>
            <Card>
                <SimpleTable
                    columns={[
                        "Item",
                        "Ferramenta / Serviço",
                        "Custo Mensal",
                        "Prós",
                        "Contras",
                    ]}
                    data={fase1}
                />
                <Text>
                    <b>Total estimado: R$ 0 a R$ 100/mês</b>
                </Text>
            </Card>

            <H2>Fase 2: Expansão (3-6 meses)</H2>
            <Card>
                <SimpleTable
                    columns={[
                        "Item",
                        "Ferramenta / Serviço",
                        "Custo Estimado",
                        "Prós",
                        "Contras",
                    ]}
                    data={fase2}
                />
                <Text>
                    <b>Total estimado: R$ 100 a R$ 500/mês</b>
                </Text>
            </Card>

            <H2>Fase 3: Descentralização (6-12 meses)</H2>
            <Card>
                <SimpleTable
                    columns={[
                        "Item",
                        "Ferramenta / Serviço",
                        "Custo Estimado",
                        "Prós",
                        "Contras",
                    ]}
                    data={fase3}
                />
                <Text>
                    <b>Total estimado: R$ 250 a R$ 800/mês</b>
                </Text>
            </Card>

            <H2>Plano de Financiamento - Fluxo</H2>
            <H3>Resumo Geral das Fases e Custos</H3>
            <Card>
                <SimpleTable
                    columns={[
                        "Fase",
                        "Duração",
                        "Custo Mensal Estimado",
                        "Investimento Total",
                    ]}
                    data={resumoFases}
                />
            </Card>

            <H3>Fontes de Financiamento Sugeridas</H3>
            <Card>
                <ul className="list-disc pl-6">
                    {financiamento.map((f, i) => (
                        <li key={i}>
                            <Text>
                                <b>{f}</b>
                            </Text>
                        </li>
                    ))}
                </ul>
            </Card>

            <H3>Simulação de Financiamento por Canal (12 meses)</H3>
            <Card>
                <SimpleTable
                    columns={[
                        "Fonte",
                        "Meta de Arrecadação",
                        "% do Total",
                        "Aplicação",
                    ]}
                    data={simulacao}
                />
            </Card>

            <H3>Cronograma de Captação</H3>
            <Card>
                <SimpleTable columns={["Mês", "Ação"]} data={cronograma} />
            </Card>

            <H3>Projeções de Monetização Futuras</H3>
            <Card>
                <ul className="list-disc pl-6">
                    <li>
                        <Text>Funcionalidades Premium (R$ 9,90 ~ R$ 29,90/mês)</Text>
                    </li>
                    <li>
                        <Text>Eventos patrocinados</Text>
                    </li>
                    <li>
                        <Text>NFTs e ingressos exclusivos</Text>
                    </li>
                    <li>
                        <Text>Marketplace de produtos em eventos</Text>
                    </li>
                </ul>
            </Card>
        </div>
    );
}
