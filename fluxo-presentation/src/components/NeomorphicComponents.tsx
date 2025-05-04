/** src/components/NeomorphicComponents.tsx **/
import classNames from 'classnames';
import React, { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { pathRoutes } from '../routes/pathRoutes';
import { ThemeToggle } from './ThemeToggle';

/** Container principal com padding e background do tema */
export interface ContainerNeomorphicProps {
    children: React.ReactNode;
    className?: string;
}
export const ContainerNeomorphic: React.FC<ContainerNeomorphicProps> = ({ children, className = '' }) => (
    <div className={classNames('min-h-screen p-8 bg-lightBg dark:bg-darkBg', className)}>
        {children}
    </div>
);

/** Botão neomórfico com variantes de cor e tamanho */
export interface NeomorphicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'highlight';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export const NeomorphicButton: React.FC<NeomorphicButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
}) => {
    const bgColor = {
        primary: 'inset-shadow-sm inset-shadow-purple-500/100 bg-primary text-white hover:bg-primary/90 dark:bg-primary/90 dark:text-white hover:dark:bg-primary',
        secondary: 'bg-secondary text-darkBg hover:bg-secondary/90',
        highlight: 'bg-highlight text-darkBg hover:bg-highlight/90'
    }[variant];
    const sizeClass = {
        sm: 'py-1 px-2 text-sm',
        md: 'py-2 px-4 text-base',
        lg: 'py-3 px-6 text-lg'
    }[size];
    return (
        <button
            type="button"
            className={classNames(
                bgColor,
                sizeClass,
                'font-medium rounded-lg shadow-neo dark:shadow-neo active:shadow-neo-inset transition-all',
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

/** Card neomórfico para agrupar conteúdo */
export interface NeomorphicCardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export const NeomorphicCard: React.FC<NeomorphicCardProps> = ({ children, className = '', ...rest }) => (
    <div
        className={classNames(
            'bg-lightBg dark:bg-darkBg rounded-xl shadow-neo dark:shadow-neo',
            className
        )}
        {...rest}
    >
        {children}
    </div>
);

/** Tile neomórfico para ícones/atalhos */
export interface NeomorphicTileProps extends HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    label?: string;
    href?: string;
}
export const NeomorphicTile: React.FC<NeomorphicTileProps> = ({ icon, label, href, className = '', ...rest }) => {
    const content = (
        <div
            className={classNames(
                'flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg rounded-lg p-4 shadow-neo hover:shadow-neo-inset transition',
                className
            )}
            {...rest}
        >
            {icon && <div className="text-3xl mb-2">{icon}</div>}
            {label && <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</div>}
        </div>
    );
    return href ? <a href={href} className="no-underline hover:underline">{content}</a> : content;
};

/** Campo de texto neomórfico (entalhado) */
export interface NeomorphicTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: React.ReactNode;
    className?: string;
}
export const NeomorphicTextField: React.FC<NeomorphicTextFieldProps> = ({ label, icon, className = '', ...rest }) => (
    <div className={classNames('flex flex-col mb-4', className)}>
        {label && <label className="mb-2 text-gray-700 dark:text-gray-300">{label}</label>}
        <div className="relative">
            <input
                className="w-full bg-lightBg dark:bg-darkBg shadow-neo-inset dark:shadow-neo-inset rounded-lg py-2 px-4 pr-10 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none"
                {...rest}
            />
            {icon && (
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-600 dark:text-gray-400">
                    {icon}
                </span>
            )}
        </div>
    </div>
);

/** Navbar neomórfica com logo, título e links */
export interface NeomorphicNavbarProps {
    logo?: React.ReactNode;
    title?: string;
    links?: { label: string; href: string }[];
    onToggleTheme?: () => void;
}
export const NeomorphicNavbar: React.FC<NeomorphicNavbarProps> = ({ logo, title, links = [],  }) => (
    <header className="bg-lightBg dark:bg-darkBg py-3 px-6 shadow-neo dark:shadow-neo">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to={pathRoutes.home}>
            <div className="flex items-center space-x-3">
                {logo}
                {title && <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</span>}
            </div>
            </Link>
            <ul className="hidden md:flex space-x-6">
                {links.map(link => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li>
                    <ThemeToggle></ThemeToggle>
                </li>
            </ul>
            <div className="md:hidden">
                {/* TODO: implementar menu mobile */}
            </div>
        </nav>
    </header>
);

/** Footer neomórfico com sombra interna */
export interface NeomorphicFooterProps {
    children?: React.ReactNode;
}
export const NeomorphicFooter: React.FC<NeomorphicFooterProps> = ({ children }) => (
    <footer className="bg-lightBg dark:bg-darkBg py-4 px-6 shadow-neo-inset dark:shadow-neo-inset text-center text-sm text-gray-600 dark:text-gray-400">
        {children || '© 2025 Fluxo - Documentação. Todos os direitos reservados.'}
    </footer>
);

/** Seção neomórfica ampla para agrupar conteúdo */
export interface NeomorphicSectionProps {
    children: React.ReactNode;
    className?: string;
}
export const NeomorphicSection: React.FC<NeomorphicSectionProps> = ({ children, className = '' }) => (
    <section
        className={classNames(
            'bg-lightBg dark:bg-darkBg rounded-2xl p-8 mb-8 shadow-neo dark:shadow-neo',
            className
        )}
    >
        {children}
    </section>
);

/** Fim de src/components/NeomorphicComponents.tsx */