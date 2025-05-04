// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../layouts/root';
import Codes from '../pages/docs/CODES';
import CustosMVP from '../pages/docs/Custos';
import DocumentationMd from '../pages/docs/doc';
import DocumentationPage from '../pages/docs/DocumentationPage';
import Features from '../pages/docs/FEATURES';
import Infra from '../pages/docs/INFRA';
import IndexDoc from '../pages/docs/init';
import Mvp from '../pages/docs/MVP';
import Orcamentario from '../pages/docs/Orcamentario';
import Readme from '../pages/docs/ReadMe';
import { RegrasPage } from '../pages/docs/RegrasPage';
import Roadmap from '../pages/docs/Roadmap';
import Usabilidade from '../pages/docs/USABILIDADE';
import { pathRoutes } from './pathRoutes';

const createRoutes = createBrowserRouter([
  {
    path: pathRoutes.home,
    element: <RootLayout />,
    id: '1',
    children: [
      { path: pathRoutes.home, index: true, element: <IndexDoc /> },
      { path: pathRoutes.readme, element: <Readme />},
      { path: pathRoutes.docs, element: <DocumentationMd /> },
      { path: pathRoutes.documentation, element: <DocumentationPage /> },
      { path: pathRoutes.regras, element: <RegrasPage /> },

      { path: pathRoutes.infraestrutura, element: <Infra /> },
      { path: pathRoutes.usabilidade, element: <Usabilidade /> },
      { path: pathRoutes.codigos, element: <Codes /> },
      { path: pathRoutes.mvp, element: <Mvp /> },
      { path: pathRoutes.custos, element: <CustosMVP /> },
      { path: pathRoutes.orcamentario, element: <Orcamentario /> },
      { path: pathRoutes.features, element: <Features /> },
      {path: pathRoutes.roadmap, element: <Roadmap />},
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={createRoutes} />;
}
