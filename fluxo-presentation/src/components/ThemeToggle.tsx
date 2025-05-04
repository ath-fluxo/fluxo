import { LightBulbIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/useTheme';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button type="button" className="p-2 rounded-full bg-lightBg dark:bg-darkBg shadow-neo dark:shadow-neo"
            onClick={toggleTheme}>
            
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};
