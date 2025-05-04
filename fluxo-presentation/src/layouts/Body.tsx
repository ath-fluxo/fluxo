import React from 'react';
import { Link } from 'react-router-dom';
import { NeomorphicButton } from '../components/NeomorphicComponents';

interface BodyProps {
    children: React.ReactNode;
}

export const Body = (params: BodyProps) => {
    return (
        <div>
                    <p className="prose dark:prose-dark">
                        <div>
                            {params.children}
                        </div>
                    </p>
                    <Link to="/docs">
                        <NeomorphicButton variant="primary">Voltar ao Sumário</NeomorphicButton>
                    </Link>
        </div>
    )
}