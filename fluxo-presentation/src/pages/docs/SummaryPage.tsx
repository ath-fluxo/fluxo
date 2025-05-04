import React from 'react';
import { Link } from 'react-router-dom';
import {
    ContainerNeomorphic,
    NeomorphicButton,
    NeomorphicCard,
} from './../../components/NeomorphicComponents';

const docs = [
    { path: '/docs', label: 'Sumário' },
    { path: '/documentation', label: 'Documentação' },
    { path: '/regras', label: 'Regras' },
    { path: '/infraestrutura', label: 'Infraestrutura' },
    { path: '/usabilidade', label: 'Usabilidade' },
    { path: '/codigos', label: 'Códigos' },
    { path: '/mvp', label: 'MVP' },
    { path: '/custos', label: 'Custos' },
    { path: '/orcamentario', label: 'Orçamentário' },
    { path: '/features', label: 'Features' },
    { path: '/roadmap', label: 'Roadmap' },
];

export const SummaryPage: React.FC = () => (
    <ContainerNeomorphic>
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Fluxo Docs
        </h1>
        <NeomorphicCard>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {docs.map(({ path, label }) => (
                    <li key={path}>
                        <Link to={path}>
                            <NeomorphicButton variant="secondary" size="md">{label}</NeomorphicButton>
                        </Link>
                    </li>
                ))}
            </ul>
        </NeomorphicCard>
    </ContainerNeomorphic>
);
