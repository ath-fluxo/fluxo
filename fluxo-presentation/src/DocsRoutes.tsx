import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
    ContainerNeomorphic,
    NeomorphicButton,
    NeomorphicCard
} from './components/NeomorphicComponents';

import Markdown from 'react-markdown';
import CODES from './../../docs/CODES.md';
import CUSTOS from './../../docs/CUSTOS.md';
import DOCUMENTATION from './../../docs/DOCUMENTATION.md';
import FEATURES from './../../docs/FEATURES.md';
import INFRA from './../../docs/INFRA.md';
import MVP from './../../docs/MVP.md';
import ORCAMENTARIO from './../../docs/ORÇAMENTÁRIO.md';
import REGRAS from './../../docs/REGRAS.md';
import ROADMAP from './../../docs/ROADMAP.md';
import USABILIDADE from './../../docs/USABILIDADE.md';
import { DocsLayout } from './DocsLayout';
import Codes from './pages/docs/CODES';
import CustosMVP from './pages/docs/Custos';
import DocumentationMd from './pages/docs/doc';
import DocumentationPage from './pages/docs/DocumentationPage';
import Features from './pages/docs/FEATURES';
import Infra from './pages/docs/INFRA';
import IndexDoc from './pages/docs/init';
import Mvp from './pages/docs/MVP';
import Orcamentario from './pages/docs/Orcamentario';
import { RegrasPage } from './pages/docs/RegrasPage';
import Roadmap from './pages/docs/Roadmap';
import Usabilidade from './pages/docs/USABILIDADE';

interface DocEntry {
    path: string;
    title: string;
    content: string;
}

// function fileReader(file: Blob): Promise<string> {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => resolve(reader.result as string);
//         reader.onerror = reject;
//         reader.readAsText(file);
//     });
// }


const docs: DocEntry[] = [
    { path: '/docs', title: 'Sumário', content: DOCUMENTATION },
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
export const MarkdownPage: React.FC<{ title: string; content: string }> = ({ title, content }) => (
        <DocsLayout>
    <ContainerNeomorphic>

        <NeomorphicCard>
            <h1 className="text-2xl font-semibold mb-8">{title}</h1>
                <Markdown
                   children={content}
              
                />
            <div className="mt-6">
                <Link to="/docs">
                    <NeomorphicButton>Voltar ao Sumário</NeomorphicButton>
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
                            <NeomorphicButton>{title}</NeomorphicButton>
                        </Link>
                    </li>
                ))}
            </ul>
            <DocumentationMd />
        </NeomorphicCard>
    </ContainerNeomorphic>
);

export const DocsRoutes: React.FC = () => (
    <Router>
        <Routes>
            {/* <Route path="/" element={<Navigate to="/docs" replace />} /> */}
            <Route path="/" element={<IndexDoc />} />
            <Route path="/docs" element={<SummaryPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/regras" element={<RegrasPage />} />
            <Route path="/infraestrutura" element={<Infra />} />
            <Route path="/usabilidade" element={<Usabilidade />} />
            <Route path="/códigos" element={<Codes />} />
            <Route path="/mvp" element={<Mvp />} />
            <Route path="/custos" element={<CustosMVP />} />
            <Route path="/orçamentário" element={<Orcamentario />} />
            <Route path="/features" element={<Features />} />
            <Route path="/roadmap" element={<Roadmap />} />
            {/* adicione as rotas restantes */}
        </Routes>
    </Router>
);

/**
 * Para usar:
 * No seu App.tsx, importe e renderize <DocsRoutes />.
 * Garanta que seu bundler suporte import de .md como string.
 */
