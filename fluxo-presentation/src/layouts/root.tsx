import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ContainerNeomorphic, NeomorphicButton, NeomorphicFooter, NeomorphicNavbar } from '../components/NeomorphicComponents';
import { pathRoutes } from '../routes/pathRoutes';
import { Body } from './Body';
// import { Header } from './header';

export function RootLayout() {
  // const pathRouter = useLocation().pathname;

  // const pathname = window.location.pathname;
  const pathname = useLocation().pathname;

  const navItems = Object.entries(pathRoutes).map(([key, value]) => (
    {
      path: value,
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }
  ));


  // const shouldShowHeader = () => {
  //   const regexForArcosWithPageId = /^\/arcos\/[^/]+\/[^/]+\/[^/]+$/;
  //   return !regexForArcosWithPageId.test(pathRouter);
  // };
  // ------------- bottom back to top circle
  const calcScrollValue = () => {
    const scrollProgress = document.getElementById(
      'progress'
    ) as HTMLElement | null; // Tipando scrollProgress
    if (scrollProgress) {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollValue = Math.round((pos * 100) / calcHeight);

      if (pos > 100) {
        scrollProgress.style.display = 'grid';
      } else {
        scrollProgress.style.display = 'none';
      }

      scrollProgress.style.background = `conic-gradient(#7f00ff ${scrollValue}%, #9094a6 ${scrollValue}%`;
    }
  };

  // ------------- button hover effect
  const buttonHover = () => {
    const mainBtn: NodeListOf<HTMLElement> =
      document.querySelectorAll('.main-btn');
    Array.from(mainBtn).forEach((e) => {
      e.addEventListener('mouseenter', (event: MouseEvent) => {
        const rect = e.getBoundingClientRect();
        const offset = {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        };
        const relX = event.pageX - offset.left;
        const relY = event.pageY - offset.top;
        const span = e.querySelector('span') as HTMLElement | null;
        if (span) {
          span.style.top = `${relY}px`;
          span.style.left = `${relX}px`;
        }
      });
    });
  };

  useEffect(() => {
    const scrollProgress = document.getElementById(
      'progress'
    ) as HTMLElement | null;
    if (scrollProgress) {
      scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });
    }

    buttonHover();

    const handleScroll = () => {
      requestAnimationFrame(calcScrollValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollProgress) {
        scrollProgress.removeEventListener('click', () => {
          document.documentElement.scrollTop = 0;
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen p-2 bg-gray-100 dark:bg-gray-900">
      <NeomorphicNavbar
        title="Fluxo Docs"

        links={[
          { label: "Sumário", href: "#sumário" },
          { label: "Modelos", href: "#modelos-de-dados" },
          { label: "UI/UX", href: "#interface-gráfica-uiux" },
          { label: "Tecnologias", href: "#tecnologias-e-ferramentas" },
        ]}
      />
      <div className="flex w-dvw h-full">
        {/* Sidebar */}
        <div className="w-50 flex-shrink-0">
          <ContainerNeomorphic>
            <nav className="space-y-2 nav-styles gap-0.5 flex flex-col">
              {navItems.map(({ path, label }) => (
                <Link key={path} to={path}>
                  <NeomorphicButton
                    className={pathname == path ? 'bg-blue-400 dark:bg-blue-600' : ''}
                    // Add a class to highlight the active link
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '0.5rem 1rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: '#000',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      borderRadius: '0.5rem',
                      backgroundColor: pathname == path ? '#491CA1FF' : '#B6ACCEC5',
                    }}
                  >
                    {label}
                  </NeomorphicButton>
                </Link>
              ))}
            </nav>
          </ContainerNeomorphic>
        </div>

        {/* Content */}
        <div className="w-max">
          <ContainerNeomorphic>
            <Body>
              <Outlet />
            </Body>
          </ContainerNeomorphic>
        </div>
      </div>

      <NeomorphicFooter />

    </div>
  );
}
