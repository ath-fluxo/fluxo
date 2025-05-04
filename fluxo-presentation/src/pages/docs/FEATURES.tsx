import React from "react";

const Features: React.FC = () => (
  <div>
    <h1>📱 Explicação Profunda das Funcionalidades do Fluxo</h1>
    <p>
      Fluxo é uma rede social geolocalizada desenhada para promover ocupação urbana, conexões reais e experiências sociais imersivas por meio de um mapa interativo. Ele combina a exploração urbana com interações digitais em tempo real. Abaixo está uma explicação aprofundada de cada funcionalidade central da plataforma, incluindo aspectos de privacidade, descentralização e interface.
    </p>
    <hr />

    <h2>🗺️ 1. Mapa Interativo como Interface Central</h2>
    <p>
      O mapa, inspirado em soluções como Mapbox, é a tela inicial e principal do aplicativo. Nele, o usuário:
    </p>
    <ul>
      <li>Descobre eventos públicos e privados próximos com base em geolocalização.</li>
      <li>Visualiza perfis públicos, tribos, artistas e comunidades.</li>
      <li>Vê stories associados a locais e eventos, que surgem como ícones contextuais.</li>
      <li>Navega pela cidade em busca do "fluxo" social – onde está acontecendo algo agora.</li>
    </ul>
    <p>
      O mapa é vivo e sensível ao contexto: quando há eventos ao vivo, eles são sinalizados com animações e destaques visuais.
    </p>

    <h2>📍 2. Compartilhamento de Rotas e Navegação Social</h2>
    <p>
      Ao confirmar presença em um evento:
    </p>
    <ul>
      <li>O usuário pode compartilhar sua rota com amigos próximos.</li>
      <li>É possível combinar pontos de encontro ou fazer caronas espontâneas.</li>
      <li>As rotas sociais aparecem sobrepostas no mapa, fortalecendo o aspecto coletivo do deslocamento urbano.</li>
    </ul>
    <p>
      Essa funcionalidade transforma o deslocamento em parte da experiência social.
    </p>

    <h2>📦 3. Criação de Eventos Públicos e Privados</h2>
    <p>
      Usuários podem criar eventos com as seguintes opções:
    </p>
    <ul>
      <li>Definir título, descrição, data e local</li>
      <li>Escolher entre evento <b>público</b> (visível no mapa) ou <b>privado</b> (acessível por link ou convite de amigo)</li>
      <li>Personalizar a página do evento com imagem, regras, e espaço para postagens</li>
    </ul>
    <p>
      Em eventos privados:
    </p>
    <ul>
      <li>É possível convidar amigos diretamente ou enviar um link exclusivo</li>
      <li>Os eventos não aparecem no mapa nem nas sugestões</li>
    </ul>

    <h2>🧑‍🤝‍🧑 4. Página de Evento com Comunidade Integrada</h2>
    <ul>
      <li>Fórum de discussão (feed de postagens e comentários)</li>
      <li>Stories colaborativos</li>
      <li>Lista de participantes e confirmados</li>
      <li>Botão “Estou indo” que adiciona à agenda e inscreve automaticamente na comunidade do evento</li>
      <li>Chat ao vivo ativado quando o evento está acontecendo</li>
    </ul>
    <p>
      Essas comunidades continuam vivas mesmo após o fim do evento.
    </p>

    <h2>👤 5. Perfis de Artistas com Comunidades Próprias</h2>
    <ul>
      <li>Criadores e artistas têm perfis públicos onde podem:</li>
      <ul>
        <li>Criar e hospedar eventos</li>
        <li>Gerar comunidades permanentes para seus seguidores</li>
        <li>Divulgar conteúdos, lives, eventos passados e futuros</li>
        <li>Promover suas tribos e coletivos culturais</li>
      </ul>
      <li>Cada artista funciona como um hub de atividades.</li>
    </ul>

    <h2>🗂️ 6. Comunidades dentro de Comunidades</h2>
    <p>
      Eventos criados por artistas ou tribos alimentam comunidades que se conectam entre si. Exemplo:
    </p>
    <ul>
      <li>Uma artista cria um festival</li>
      <li>Cada show do festival é um evento</li>
      <li>Os participantes dos shows pertencem à comunidade do festival automaticamente</li>
    </ul>
    <p>
      Essa hierarquia favorece a imersão em múltiplas camadas sociais.
    </p>

    <h2>📽️ 7. Stories no Mapa</h2>
    <ul>
      <li>Stories são publicados por usuários ou comunidades e aparecem:</li>
      <ul>
        <li>No mapa (em locais geográficos específicos)</li>
        <li>Dentro da página do evento ou tribo</li>
        <li>Em tempo real durante eventos</li>
      </ul>
      <li>Esse recurso serve como expressão pessoal e como termômetro do fluxo social.</li>
    </ul>

    <h2>📆 8. Agenda com Inteligência Contextual</h2>
    <ul>
      <li><b>Eventos confirmados</b>: aparecem com destaque, possibilidade de lembrete e compartilhamento de rota</li>
      <li><b>Eventos sugeridos</b>: recomendados com base em localização, comportamento, amigos e interesses</li>
      <li>Diferenciação visual clara entre os dois tipos de evento</li>
    </ul>

    <h2>🧭 9. Amigos nos Eventos</h2>
    <ul>
      <li>No card de cada evento:</li>
      <ul>
        <li>São exibidas fotos de amigos confirmados</li>
        <li>É possível ver quem do seu círculo está envolvido</li>
        <li>Aumenta o senso de pertencimento e motivação para ir</li>
      </ul>
    </ul>

    <h2>👫 10. Tribos (Grupos Sociais)</h2>
    <ul>
      <li>Tribos são como grupos do Facebook, mas com foco em:</li>
      <ul>
        <li>Organização de eventos temáticos</li>
        <li>Criação de comunidades urbanas ativas</li>
        <li>Bate-papo interno, agenda e histórias compartilhadas</li>
      </ul>
      <li>Inspiradas nas tribos culturais dos anos 90, funcionam como grupos dinâmicos e participativos.</li>
    </ul>

    <h2>🗣️ 11. Interação em Evento ao Vivo</h2>
    <ul>
      <li>Quando o evento está ocorrendo:</li>
      <ul>
        <li>O app ativa modo “ao vivo” com banner na tela e destaque nos comentários</li>
        <li>Os comentários de usuários presentes aparecem com <b>flag especial</b></li>
        <li>Stories ao vivo têm prioridade</li>
        <li>Sistema de "curtidas presenciais" entre usuários, similar ao Tinder, ativado apenas localmente</li>
      </ul>
      <li>Essa funcionalidade intensifica a interação presencial com uma camada digital.</li>
    </ul>

    <h2>💬 12. Comunicação e Rede</h2>
    <ul>
      <li>É possível adicionar amigos por proximidade, eventos ou tribos</li>
      <li>Chat individual ou em grupo</li>
      <li>Fórum por evento e tribo</li>
      <li>Convites por link ou QR code</li>
      <li>A comunicação é descentralizada e fluida.</li>
    </ul>

    <h2>🔐 13. Privacidade e Federalização da Identidade</h2>
    <ul>
      <li>Pensando na segurança e privacidade dos usuários:</li>
      <ul>
        <li>O Fluxo adotará <b>identidade federada</b>, semelhante ao conceito do e-mail</li>
        <li>Usuários não são obrigados a ter um só provedor centralizado (como Facebook)</li>
        <li>Dados são criptografados e controlados pelos próprios usuários</li>
      </ul>
    </ul>

    <h2>⛓️ 14. Blockchain para Identidade Única</h2>
    <ul>
      <li>Cada usuário terá uma carteira (wallet) ligada à sua conta</li>
      <li>A wallet será utilizada para garantir unicidade (anti-fake), reputação e interações públicas confiáveis</li>
      <li>Sistema de login com carteira (MetaMask, WalletConnect)</li>
      <li>Potencial para criar credenciais sociais e selos de participação (eventos, tribos, artistas)</li>
    </ul>

    <h2>🎨 15. Interface Neomórfica</h2>
    <ul>
      <li>Layout com relevos suaves e sombras realistas</li>
      <li>Paleta cromática baseada em <b>roxo escuro</b>, <b>verde-claro</b> e <b>laranja queimado</b></li>
      <li>Botões convexos e campos de entrada côncavos</li>
      <li>Tipografia delicada, refinada e responsiva</li>
      <li>A estética reforça o caráter urbano e orgânico da aplicação.</li>
    </ul>

    <h2>💡 Conclusão</h2>
    <p>
      O Fluxo é mais do que uma rede de eventos – é um sistema social geolocalizado, dinâmico e ético. Cada recurso foi pensado para ativar a cidade como espaço de interação e a tecnologia como ferramenta de pertencimento e autenticidade.
    </p>
    <p>
      O mapa é a interface, o evento é o ponto de partida, e o usuário é o vetor do fluxo.
    </p>
  </div>
);

export default Features;
