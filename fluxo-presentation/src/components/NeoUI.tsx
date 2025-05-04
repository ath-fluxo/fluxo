import React from 'react';
import { useTheme } from '../context/useTheme';

/**
 * NeoUI.tsx
 * Componentes básicos de UI neomórfica para o Fluxo Docs.
 * Inclui botões (Primary, Secondary, Text), Card, Container e tipografia.
 */

// Props comuns
interface ChildrenProps {
    children: React.ReactNode;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

/**
 * PageContainer: container principal para páginas, com padding e fundo neomórfico.
 */
export const PageContainer: React.FC<ChildrenProps> = ({ children }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`min-h-screen p-8 ${isDark ? 'bg-fluxo-bg-dark' : 'bg-fluxo-bg-light'}`}>
            {children}
        </div>
    );
};

/**
 * SectionContainer: seções agrupadas com bordas suaves e sombras.
 */
export const SectionContainer: React.FC<ChildrenProps> = ({ children }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800 shadow-neu-dark' : 'bg-white shadow-neu-light'}`}>{children}</div>
    );
};

/**
 * Card: cartão de conteúdo com padding e espaçamento neomórfico.
 */
export const Card: React.FC<ChildrenProps> = ({ children }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <div className={`rounded-xl p-4 mb-6 ${isDark ? 'bg-gray-800 shadow-neu-dark' : 'bg-white shadow-neu-light'}`}>{children}</div>
    );
};

/**
 * PrimaryButton: botão de ação principal.
 */
export const PrimaryButton: React.FC<ButtonProps> = ({ label, className = '', ...rest }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <button
            {...rest}
            className={`rounded-lg px-6 py-3 font-semibold text-white ${isDark ? 'bg-fluxo-primary-dark shadow-neu-dark active:shadow-neu-inset-dark' : 'bg-fluxo-primary-light shadow-neu-light active:shadow-neu-inset-light'} transition-shadow ${className}`}
        >
            {label}
        </button>
    );
};

/**
 * SecondaryButton: botão de ação secundária.
 */
export const SecondaryButton: React.FC<ButtonProps> = ({ label, className = '', ...rest }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <button
            {...rest}
            className={`rounded-lg px-6 py-3 font-medium ${isDark ? 'bg-gray-700 text-white shadow-neu-dark active:shadow-neu-inset-dark' : 'bg-gray-100 text-gray-800 shadow-neu-light active:shadow-neu-inset-light'} transition-shadow ${className}`}
        >
            {label}
        </button>
    );
};

/**
 * TextButton: botão estilo link ou texto.
 */
export const TextButton: React.FC<ButtonProps> = ({ label, className = '', ...rest }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <button
            {...rest}
            className={`text-sm font-medium underline ${isDark ? 'text-fluxo-primary-dark' : 'text-fluxo-primary-light'} ${className}`}
        >
            {label}
        </button>
    );
};

/**
 * Typography
 */
export const H1: React.FC<ChildrenProps> = ({ children }) => (
    <h1 className="text-4xl font-bold mb-4">{children}</h1>
);
export const H2: React.FC<ChildrenProps> = ({ children }) => (
    <h2 className="text-2xl font-semibold mb-3">{children}</h2>
);
export const H3: React.FC<ChildrenProps> = ({ children }) => (
    <h3 className="text-xl font-medium mb-2">{children}</h3>
);
export const Text: React.FC<ChildrenProps> = ({ children }) => (
    <p className="text-base leading-relaxed mb-4">{children}</p>
);

/**
 * Spacer: componente para espaçamento vertical.
 */
export const Spacer: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
    const heights = { sm: 'h-2', md: 'h-4', lg: 'h-8' };
    return <div className={heights[size]} />;
};
