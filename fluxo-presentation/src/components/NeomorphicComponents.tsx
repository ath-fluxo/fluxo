import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * NeomorphicComponents.tsx
 * Biblioteca de componentes neomórficos para o site do Fluxo.
 * Usa Tailwind CSS com utilitários customizados para sombras e cores dinâmicas.
 */

// Tipagem para props comuns
interface ChildrenProps {
    children: React.ReactNode;
}

/**
 * ContainerNeomorphic: wrapper principal com estilo neomórfico.
 */
export const ContainerNeomorphic: React.FC<ChildrenProps> = ({ children }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div
            className={`rounded-2xl p-6 bg-gray-100 dark:bg-gray-800 ${isDark ? 'shadow-neu-dark' : 'shadow-neu-light'
                }`}
        >
            {children}
        </div>
    );
};

/**
 * NeomorphicCard: bloco de conteúdo com padding e espaçamento.
 */
export const NeomorphicCard: React.FC<ChildrenProps> = ({ children }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div
            className={`rounded-xl p-4 bg-gray-100 dark:bg-gray-800 ${isDark ? 'shadow-neu-dark' : 'shadow-neu-light'
                } hover:${isDark ? 'shadow-neu-inset-dark' : 'shadow-neu-inset-light'} transition-shadow`}
        >
            {children}
        </div>
    );
};

/**
 * NeomorphicButton: botão com relevo e estado pressionado.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}
export const NeomorphicButton: React.FC<ButtonProps> = ({ label, ...rest }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            {...rest}
            className={`rounded-lg px-5 py-2 font-medium bg-gray-100 dark:bg-gray-800 ${isDark ? 'shadow-neu-dark' : 'shadow-neu-light'
                } active:${isDark ? 'shadow-neu-inset-dark' : 'shadow-neu-inset-light'} transition-shadow focus:outline-none`}
        >
            {label}
        </button>
    );
};

/**
 * NeomorphicInput: campo de texto com estilo neomórfico.
 */
export const NeomorphicInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <input
            {...props}
            className={`w-full rounded-lg p-3 bg-gray-100 dark:bg-gray-800 ${isDark ? 'shadow-neu-dark' : 'shadow-neu-light'
                } focus:${isDark ? 'shadow-neu-inset-dark' : 'shadow-neu-inset-light'} transition-shadow focus:outline-none`}
        />
    );
};

/**
 * Usage Example:
 *
 * <ContainerNeomorphic>
 *   <h2 className="text-xl mb-4">Documentação Fluxo</h2>
 *   <NeomorphicCard>
 *     <p>Conteúdo do card...</p>
 *     <NeomorphicInput placeholder="Pesquisar..." />
 *     <NeomorphicButton label="Enviar" />
 *   </NeomorphicCard>
 * </ContainerNeomorphic>
 */
