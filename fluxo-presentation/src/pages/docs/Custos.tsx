import React from "react";
import {
    Card,
    H1,
    H2,
    H3,
    Spacer,
    Text,
} from "../../components/NeoUI";

const lojas = [
    {
        plataforma: "Google Play",
        servico: "Conta de Desenvolvedor",
        custo: "US$ 25 (único)",
        link: (
            <a href="https://play.google.com/console/about/" target="_blank" rel="noopener noreferrer">
                Google Play Console
            </a>
        ),
    },
    {
        plataforma: "Apple App Store",
        servico: "Apple Developer Program",
        custo: "US$ 99/ano",
        link: (
            <a href="https://developer.apple.com/programs/" target="_blank" rel="noopener noreferrer">
                Apple Developer
            </a>
        ),
    },
];

const gcp = [
    {
        servico: "Firebase Auth",
        descricao: "Até 10.000 usuários/mês",
        custo: "Grátis",
        link: (
            <a href="https://firebase.google.com/pricing" target="_blank" rel="noopener noreferrer">
                Firebase
            </a>
        ),
    },
    {
        servico: "Firebase Storage",
        descricao: "Até 5GB",
        custo: "Grátis",
        link: (
            <a href="https://firebase.google.com/products/storage" target="_blank" rel="noopener noreferrer">
                Firebase Storage
            </a>
        ),
    },
    {
        servico: "Cloud SQL (PostgreSQL)",
        descricao: "db-f1-micro (com 10GB)",
        custo: "US$ 10–15/mês",
        link: (
            <a href="https://cloud.google.com/sql/pricing" target="_blank" rel="noopener noreferrer">
                Cloud SQL
            </a>
        ),
    },
    {
        servico: "Cloud Run (API Backend)",
        descricao: "Serverless container",
        custo: "US$ 0–5/mês",
        link: (
            <a href="https://cloud.google.com/run" target="_blank" rel="noopener noreferrer">
                Cloud Run
            </a>
        ),
    },
    {
        servico: "Firebase Hosting",
        descricao: "Admin panel / frontend estático",
        custo: "Grátis",
        link: (
            <a href="https://firebase.google.com/products/hosting" target="_blank" rel="noopener noreferrer">
                Firebase Hosting
            </a>
        ),
    },
    {
        servico: "Cloud Functions",
        descricao: "Eventos / tarefas automáticas",
        custo: "Grátis até 2M chamadas",
        link: (
            <a href="https://cloud.google.com/functions" target="_blank" rel="noopener noreferrer">
                Cloud Functions
            </a>
        ),
    },
];

const aws = [
    {
        servico: "AWS Cognito",
        descricao: "Autenticação (50k MAU)",
        custo: "Grátis",
        link: (
            <a href="https://aws.amazon.com/cognito/pricing/" target="_blank" rel="noopener noreferrer">
                Cognito
            </a>
        ),
    },
    {
        servico: "S3",
        descricao: "Armazenamento de arquivos/imagens",
        custo: "Grátis até 5 GB",
        link: (
            <a href="https://aws.amazon.com/s3/pricing/" target="_blank" rel="noopener noreferrer">
                S3
            </a>
        ),
    },
    {
        servico: "RDS PostgreSQL (t3.micro)",
        descricao: "750h/mês por 12 meses",
        custo: "Grátis",
        link: (
            <a href="https://aws.amazon.com/rds/free/" target="_blank" rel="noopener noreferrer">
                RDS
            </a>
        ),
    },
    {
        servico: "Lambda + API Gateway",
        descricao: "Serverless API",
        custo: "Grátis até 1M req/mês",
        link: (
            <a href="https://aws.amazon.com/lambda/pricing/" target="_blank" rel="noopener noreferrer">
                Lambda
            </a>
        ),
    },
    {
        servico: "CloudWatch",
        descricao: "Monitoramento básico",
        custo: "Grátis",
        link: (
            <a href="https://aws.amazon.com/cloudwatch/pricing/" target="_blank" rel="noopener noreferrer">
                CloudWatch
            </a>
        ),
    },
];

const analytics = [
    {
        servico: "Firebase Analytics",
        descricao: "App analytics",
        custo: "Grátis",
        link: (
            <a href="https://firebase.google.com/products/analytics" target="_blank" rel="noopener noreferrer">
                Firebase Analytics
            </a>
        ),
    },
    {
        servico: "Sentry",
        descricao: "Log de erros (5k eventos/mês)",
        custo: "Grátis",
        link: (
            <a href="https://sentry.io/pricing/" target="_blank" rel="noopener noreferrer">
                Sentry
            </a>
        ),
    },
];

const emails = [
    {
        servico: "Resend",
        custo: "Grátis até 100 emails/dia",
        link: (
            <a href="https://resend.com/pricing" target="_blank" rel="noopener noreferrer">
                resend.com
            </a>
        ),
    },
    {
        servico: "SendGrid",
        custo: "Grátis até 100 emails/dia",
        link: (
            <a href="https://sendgrid.com/" target="_blank" rel="noopener noreferrer">
                sendgrid.com
            </a>
        ),
    },
];

const repositorio = [
    {
        servico: "GitHub",
        descricao: "Repositório do projeto",
        custo: "Grátis",
        link: (
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
        ),
    },
    {
        servico: "Cloudflare",
        descricao: "CDN + domínio opcional",
        custo: "Grátis",
        link: (
            <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer">
                Cloudflare
            </a>
        ),
    },
];

const resumo = [
    {
        categoria: "Lojas (Google + Apple)",
        inicial: "US$ 124",
        mensal: "US$ 8/mês",
        obs: "Apple é anual",
    },
    {
        categoria: "Infraestrutura GCP (Firebase + Cloud Run)",
        inicial: "US$ 0 (inicial)",
        mensal: "US$ 10–20/mês",
        obs: "Após créditos",
    },
    {
        categoria: "Infraestrutura AWS (alternativa)",
        inicial: "US$ 0 (12 meses)",
        mensal: "US$ 0–10/mês",
        obs: "Plano Free Tier",
    },
    {
        categoria: "Banco de dados (PostgreSQL)",
        inicial: "Incluído",
        mensal: "US$ 0–15/mês",
        obs: "conforme uso",
    },
    {
        categoria: "Autenticação",
        inicial: "Grátis",
        mensal: "Grátis",
        obs: "até 10k usuários",
    },
    {
        categoria: "Armazenamento",
        inicial: "Grátis",
        mensal: "Grátis",
        obs: "até 5GB",
    },
    {
        categoria: "E-mails + Analytics",
        inicial: "Grátis",
        mensal: "Grátis",
        obs: "suficiente para MVP",
    },
];

function SimpleTable({ columns, data }: { columns: string[]; data: any[] }) {
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

const InfoCard = ({ children }: { children: React.ReactNode }) => (
    <Card>
        <Text>{children}</Text>
    </Card>
);

export default function CustosMVP() {
    return (
        <div>
            <H1>💰 Plano de Orçamento Inicial – MVP Fluxo</H1>
            <Text>
                <b>Versão: Abril/2025</b>
                <br />
                Este documento apresenta um orçamento completo para o lançamento do MVP do aplicativo Fluxo, incluindo custos de publicação em lojas, infraestrutura, autenticação, banco de dados e serviços complementares.
            </Text>
            <Spacer size="md" />

            <H2>🛒 Publicação em Lojas</H2>
            <Card>
                <SimpleTable
                    columns={["Plataforma", "Serviço", "Custo", "Link"]}
                    data={lojas}
                />
            </Card>

            <H2>☁️ Infraestrutura: Google Cloud (via Firebase + Cloud Run)</H2>
            <Card>
                <SimpleTable
                    columns={["Serviço", "Descrição", "Custo estimado", "Link"]}
                    data={gcp}
                />
            </Card>
            <InfoCard>
                💡 <b>Crédito gratuito: US$ 300 por 90 dias</b> <br />
                <a href="https://cloud.google.com/free" target="_blank" rel="noopener noreferrer">
                    cloud.google.com/free
                </a>
            </InfoCard>

            <H2>☁️ Alternativa: AWS (Amazon Web Services – mais corporativa)</H2>
            <Card>
                <SimpleTable
                    columns={["Serviço", "Descrição", "Custo estimado", "Link"]}
                    data={aws}
                />
            </Card>
            <InfoCard>
                <a href="https://aws.amazon.com/free/" target="_blank" rel="noopener noreferrer">
                    aws.amazon.com/free
                </a>
            </InfoCard>

            <H2>📈 Monitoramento e Analytics</H2>
            <Card>
                <SimpleTable
                    columns={["Serviço", "Descrição", "Custo", "Link"]}
                    data={analytics}
                />
            </Card>

            <H2>📩 Envio de E-mail (Convites, notificações)</H2>
            <Card>
                <SimpleTable
                    columns={["Serviço", "Custo", "Link"]}
                    data={emails}
                />
            </Card>

            <H2>💻 Repositório e CDN</H2>
            <Card>
                <SimpleTable
                    columns={["Serviço", "Descrição", "Custo", "Link"]}
                    data={repositorio}
                />
            </Card>

            <H2>📦 Resumo de Custos Estimados</H2>
            <Card>
                <SimpleTable
                    columns={["Categoria", "Custo Inicial (único)", "Custo Mensal", "Observações"]}
                    data={resumo}
                />
            </Card>
            <H3>
                💡 Total estimado: <b>US$ 124 inicial</b> + até <b>US$ 20/mês</b>
            </H3>
            <Spacer size="md" />

            <InfoCard>
                <b>Recomendação:</b> Para agilidade no MVP, sugerimos começar com <b>Firebase + Cloud Run</b>, e migrar para AWS caso necessário em fases futuras do projeto.
            </InfoCard>
        </div>
    );
}

