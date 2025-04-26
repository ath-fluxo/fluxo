import ReactMarkdown from 'react-markdown';
import docContent from './../../../docs/DOCUMENTATION.md';

const Documentation: React.FC = () => {
    return <ReactMarkdown>{docContent}</ReactMarkdown>;
};

export default Documentation;