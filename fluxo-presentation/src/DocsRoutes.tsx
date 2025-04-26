import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
    ContainerNeomorphic,
    NeomorphicButton,
    NeomorphicCard
} from './components/NeomorphicComponents';

// Importação dos arquivos markdown
import CODES from './../../docs/CODES.md';
import CUSTOS from './../../docs/CUSTOS.md';
import DOCUMENTATION from './../../docs/DOCUMENTATION.md';
import FEATURES from './../../docs/FEATURES.md';
import indexMd from './../../docs/index.md';
import INFRA from './../../docs/INFRA.md';
import MVP from './../../docs/MVP.md';
import ORCAMENTARIO from './../../docs/ORÇAMENTÁRIO.md';
import REGRAS from './../../docs/REGRAS.md';
import ROADMAP from './../../docs/ROADMAP.md';
import USABILIDADE from './../../docs/USABILIDADE.md';
import { DocsLayout } from './DocsLayout';

interface DocEntry {
    path: string;
    title: string;
    content: string;
}

const docs: DocEntry[] = [
    { path: '/docs', title: 'Sumário', content: indexMd },
    { path: '/documentation', title: 'Documentação', content: DOCUMENTATION },
    { path: '/regras', title: 'Regras', content: REGRAS },
    { path: '/infraestrutura', title: 'Infraestrutura', content: INFRA },
    { path: '/usabilidade', title: 'Usabilidade', content: USABILIDADE },
    { path: '/códigos', title: 'Códigos', content: CODES },
    { path: '/mvp', title: 'MVP', content: MVP },
    { path: '/custos', title: 'Custos', content: CUSTOS },
    { path: '/orçamentário', title: 'Orçamentário', content: ORCAMENTARIO },
    { path: '/features', title: 'Features', content: FEATURES },
    { path: '/roadmap', title: 'Roadmap', content: ROADMAP }
];

// Componente genérico para renderizar markdown dentro do estilo neomórfico
const MarkdownPage: React.FC<{ title: string; content: string }> = ({ title, content }) => (
        <DocsLayout>
    <ContainerNeomorphic>

        <NeomorphicCard>
            <h1 className="text-2xl font-semibold mb-4">{title}</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
            <div className="mt-6">
                <Link to="/docs">
                    <NeomorphicButton label="Voltar ao Sumário" />
                </Link>
            </div>
        </NeomorphicCard>
    </ContainerNeomorphic>
        </DocsLayout>
);

// Página de Sumário com links para cada seção
const SummaryPage: React.FC = () => (
    <ContainerNeomorphic>
        <h1 className="text-3xl font-bold mb-6">Fluxo - Documentação</h1>
        <NeomorphicCard>
            <ul className="space-y-3">
                {docs.map(({ path, title }) => (
                    <li key={path}>
                        <Link to={path}>
                            <NeomorphicButton label={title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </NeomorphicCard>
    </ContainerNeomorphic>
);

export const DocsRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/docs" replace />} />
            <Route path="/docs" element={<SummaryPage />} />
            {docs.map(({ path, title, content }) => (
                <Route
                    key={path}
                    path={path}
                    element={<MarkdownPage title={title} content={content} />}
                />
            ))}
        </Routes>
    </Router>
);

/**
 * Para usar:
 * No seu App.tsx, importe e renderize <DocsRoutes />.
 * Garanta que seu bundler suporte import de .md como string.
 */
