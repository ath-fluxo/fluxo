import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ContainerNeomorphic,
    NeomorphicButton
} from './components/NeomorphicComponents';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/useTheme';

/**
 * Layout neomórfico para todo o site de documentação Fluxo
 */
export const DocsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme, } = useTheme();

    React.useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const { pathname } = useLocation();

    // Lista de rotas para navegação
    const navItems = [
        { path: '/docs', label: 'Sumário' },
        { path: '/documentation', label: 'Documentação' },
        { path: '/regras', label: 'Regras' },
        { path: '/infraestrutura', label: 'Infraestrutura' },
        { path: '/usabilidade', label: 'Usabilidade' },
        { path: '/códigos', label: 'Códigos' },
        { path: '/mvp', label: 'MVP' },
        { path: '/custos', label: 'Custos' },
        { path: '/orçamentário', label: 'Orçamentário' },
        { path: '/features', label: 'Features' },
        { path: '/roadmap', label: 'Roadmap' }
    ];

    return (
        <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <Link to="/docs">
                    <h1 className="text-3xl font-bold">Fluxo Docs</h1>
                </Link>
                <ThemeToggle />
            </div>

            <div className="flex space-x-6">
                {/* Sidebar */}
                <div className="w-60 flex-shrink-0">
                    <ContainerNeomorphic>
                        <nav className="space-y-4">
                            {navItems.map(({ path, label }) => (
                                <Link key={path} to={path}>
                                    <NeomorphicButton
                                        className={pathname == path ?  'bg-blue-400 dark:bg-blue-600' : ''}
                                    // Add a class to highlight the active link
                                    >
                                        {label}
                                    </NeomorphicButton>
                                </Link>
                            ))}
                        </nav>
                    </ContainerNeomorphic>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <ContainerNeomorphic>
                        {children}
                    </ContainerNeomorphic>
                </div>
            </div>
        </div>
    );
};
