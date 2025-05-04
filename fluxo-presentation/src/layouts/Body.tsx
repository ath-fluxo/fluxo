import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerNeomorphic, NeomorphicButton, NeomorphicSection } from '../components/NeomorphicComponents';

interface BodyProps {
    children: React.ReactNode;
}

export const Body = (params: BodyProps) => {
    return (
        <div>
            <ContainerNeomorphic>
                <NeomorphicSection>
                    <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Regras</h1>
                    <p className="prose dark:prose-dark">
                        <div>
                            {params.children}
                        </div>
                    </p>
                    <Link to="/docs">
                        <NeomorphicButton variant="primary">Voltar ao Sumário</NeomorphicButton>
                    </Link>
                </NeomorphicSection>
            </ContainerNeomorphic>
        </div>
    )
}