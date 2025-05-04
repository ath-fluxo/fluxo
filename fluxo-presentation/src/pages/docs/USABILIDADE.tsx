import React from "react";
import {
    H1,
    H2,
    PageContainer,
    SectionContainer,
    Spacer,
    Text
} from "../../components/NeoUI";

const Usabilidade: React.FC = () => (
  <PageContainer>
    <SectionContainer>
      <H1>1. Exemplos de Desenhos de Tela (Wireframes)</H1>
      <H2>1.1 Tela de Login com Carteira de Blockchain</H2>
      <Text>
        <b>Ferramenta:</b> <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a> (grátis para protótipos básicos)<br />
        <b>Inspiração:</b> Exemplos de design de carteiras em <a href="https://dribbble.com/tags/wallet-ui" target="_blank" rel="noopener noreferrer">Dribbble</a>
      </Text>
      <ul>
        <li>Campo para conectar carteira (ex: MetaMask).</li>
        <li>Botão "Conectar Carteira".</li>
        <li>Mensagem de boas-vindas com endereço da carteira.</li>
      </ul>
      <img src="https://via.placeholder.com/300x500?text=Tela+de+Login+com+Carteira" alt="Wireframe Login" />
      <Spacer size="md" />

      <H2>1.2 Tela de Mapa (Home Screen)</H2>
      <Text>
        <b>Ferramenta:</b> <a href="https://www.adobe.com/br/products/xd.html" target="_blank" rel="noopener noreferrer">Adobe XD</a> (versão gratuita)<br />
        <b>Inspiração:</b> Mapas interativos com marcadores personalizados.
      </Text>
      <ul>
        <li>Mapa central com marcadores de eventos.</li>
        <li>Barra de pesquisa no topo.</li>
        <li>Botão flutuante "+ Criar Evento".</li>
      </ul>
      <img src="https://via.placeholder.com/300x500?text=Tela+de+Mapa+Interativo" alt="Wireframe Mapa" />
      <Spacer size="md" />

      <H2>1.3 Tela de Detalhes do Evento</H2>
      <Text>
        <b>Ferramenta:</b> <a href="https://www.canva.com" target="_blank" rel="noopener noreferrer">Canva</a> (grátis para designs básicos)<br />
        <b>Inspiração:</b> Layouts de eventos com comentários e interações.
      </Text>
      <ul>
        <li>Nome e descrição do evento.</li>
        <li>Lista de comentários com foto de perfil.</li>
        <li>Campo para adicionar novo comentário.</li>
      </ul>
      <img src="https://via.placeholder.com/300x500?text=Tela+de+Detalhes+do+Evento" alt="Wireframe Detalhes do Evento" />
      <Spacer size="lg" />
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H1>2. Documentação de Interface Gráfica (UI/UX)</H1>
      <H2>2.1 Diretrizes de Design</H2>
      <ul>
        <li><b>Padrão de Cores:</b> Uso de cores primárias (azul e verde) para botões principais.</li>
        <li><b>Tipografia:</b> Fonte sans-serif (ex: Roboto) para legibilidade.</li>
        <li><b>Componentes Reutilizáveis:</b> Botões, campos de texto e cards para eventos.</li>
      </ul>
      <H2>2.2 Especificação de Componentes</H2>
      <ul>
        <li>
          <b>Botão de Conectar Carteira:</b>
          <ul>
            <li>Cor de fundo: #4A90E2</li>
            <li>Texto: "Conectar Carteira"</li>
            <li>Ação: Abre popup para seleção de carteira (ex: MetaMask).</li>
          </ul>
        </li>
        <li>
          <b>Card de Evento:</b>
          <ul>
            <li>Tamanho: 300x200 px</li>
            <li>Informações: Título, data, localização.</li>
            <li>Ação: Redireciona para tela de detalhes.</li>
          </ul>
        </li>
      </ul>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H1>3. Diagrama UML (Diagrama de Classes)</H1>
      <Text>
        <b>Ferramenta Gratuita:</b> <a href="https://online.visual-paradigm.com/pt/" target="_blank" rel="noopener noreferrer">Visual Paradigm Online</a>
      </Text>
      <pre>
        <code>
{`+----------------+          +----------------+          +----------------+
|     User       |          |     Event      |          |    Comment     |
+----------------+          +----------------+          +----------------+
| - walletAddr   |          | - eventId      |          | - commentId    |
| - name         |          | - title        |          | - eventId      |
| - email        |          | - description  |          | - userId       |
| - friends      |          | - dateTime     |          | - content      |
+----------------+          | - location     |          | - createdAt    |
                          | - isPublic      |
                          | - participants  |
                          +----------------+`}
        </code>
      </pre>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H1>4. Ferramentas Gratuitas Recomendadas</H1>
      <ol>
        <li>
          <b>Design e Protótipo:</b>
          <ul>
            <li><a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a> (grátis para até 3 projetos).</li>
            <li><a href="https://www.canva.com" target="_blank" rel="noopener noreferrer">Canva</a> (templates de design gratuito).</li>
          </ul>
        </li>
        <li>
          <b>Diagramas UML:</b>
          <ul>
            <li><a href="https://online.visual-paradigm.com/pt/" target="_blank" rel="noopener noreferrer">Visual Paradigm Online</a> (criação de diagramas gratuitos).</li>
          </ul>
        </li>
        <li>
          <b>Integração com Carteiras:</b>
          <ul>
            <li><a href="https://metamask.io" target="_blank" rel="noopener noreferrer">MetaMask</a> (extensão para browsers).</li>
            <li><a href="https://argent.xyz" target="_blank" rel="noopener noreferrer">Argent</a> (carteira móvel não-custodiante).</li>
          </ul>
        </li>
        <li>
          <b>Armazenamento Descentralizado:</b>
          <ul>
            <li><a href="https://ipfs.io" target="_blank" rel="noopener noreferrer">IPFS</a> (sistema de arquivos descentralizado).</li>
          </ul>
        </li>
      </ol>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H1>5. Exemplo de Fluxo de Usuário</H1>
      <ol>
        <li>
          <b>Login:</b> O usuário conecta sua carteira (ex: MetaMask) para autenticação.<br />
          <b>Telas:</b> Login → Home.
        </li>
        <li>
          <b>Criar Evento:</b> O usuário preenche detalhes do evento e salva no IPFS.<br />
          <b>Telas:</b> Home → Criar Evento → Confirmação.
        </li>
        <li>
          <b>Comentar em Evento:</b> O usuário adiciona comentário criptografado, visível apenas para participantes.<br />
          <b>Telas:</b> Detalhes do Evento → Comentários.
        </li>
      </ol>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H1>6. Plano de Implementação com Ferramentas Gratuitas</H1>
      <ol>
        <li>
          <b>Frontend (React Native):</b>
          <ul>
            <li>Use <code>react-native-mapbox-gl</code> para integração com mapas.</li>
            <li>Use <code>ethers.js (com WalletConnect)</code> para interação com carteiras blockchain.</li>
          </ul>
        </li>
        <li>
          <b>Backend (.NET 9):</b>
          <ul>
            <li>Use <code>Entity Framework Core</code> para modelo de dados.</li>
            <li>Use <code>IPFS.HttpClient</code> para armazenamento descentralizado.</li>
          </ul>
        </li>
        <li>
          <b>CI/CD:</b>
          <ul>
            <li><a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a> para automação de build e testes.</li>
          </ul>
        </li>
      </ol>
    </SectionContainer>

    <Spacer size="lg" />

    <SectionContainer>
      <H1>Conclusão</H1>
      <Text>
        Este projeto utiliza ferramentas gratuitas e padrões descentralizados para garantir privacidade e segurança. A documentação acima fornece uma base sólida para o desenvolvimento do MVP, com exemplos visuais e estrutura UML.
      </Text>
    </SectionContainer>
  </PageContainer>
);

export default Usabilidade;
