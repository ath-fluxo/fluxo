// src/pages/DocsIndex.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerNeomorphic, NeomorphicButton, NeomorphicCard } from '../components/NeomorphicComponents';
import { DocsLayout } from '../DocsLayout';

export const DocsIndex: React.FC = () => {
    const navigate = useNavigate();
    const links = [
        { title: 'Resumo e Interface', path: '/docs/readme' },
        { title: 'Visão Técnica Geral', path: '/docs/documentation' },
        { title: 'Regras e Estratégia', path: '/docs/regras' },
        { title: 'Infraestrutura', path: '/docs/infraestrutura' },
        { title: 'Funcionalidades e Modelos de Dados', path: '/docs/codigos' },
        { title: 'Design, Usabilidade e UI', path: '/docs/usabilidade' },
        { title: 'Roadmap e MVP', path: '/docs/mvp' },
        { title: 'Plano de Orçamento', path: '/docs/custos' },
        { title: 'Levantamento Orçamentário', path: '/docs/orcamentario' },
        { title: 'Funcionalidades e Ideias', path: '/docs/features' },
        { title: 'Roadmap Técnico', path: '/docs/roadmap' },
    ];

    return (
        <DocsLayout>
            <ContainerNeomorphic className="p-8">
                <h1 className="text-4xl font-bold mb-6 text-primary">📘 Documentação Oficial do Fluxo</h1>
                <p className="mb-8 text-secondary">
                    Bem-vindo à central de documentação do <strong>Fluxo</strong>, o aplicativo de eventos com mapa interativo, fórum e identidade descentralizada via blockchain. index.md](file-service://file-XVZubDiJMzsjawdNo3bpt7)
                </p>

                <NeomorphicCard className="p-6 space-y-4">
                    {links.map(({ title, path }) => (
                        <NeomorphicButton
                            key={path}
                            onClick={() => navigate(path)}
                            className="w-full text-left"
                        >
                            {title}
                        </NeomorphicButton>
                    ))}
                </NeomorphicCard>
            </ContainerNeomorphic>
        </DocsLayout>
    );
};