import React from "react";

const Codes: React.FC = () => (
  <div>
    <h3>1. <b>Definindo as Funcionalidades</b></h3>
    <p>Primeiro, vamos listar as principais funcionalidades que o aplicativo deve ter:</p>
    <ul>
      <li><b>Tela Inicial com Mapa</b>: Exibir eventos em um mapa (usando Mapbox ou outra API de mapas).</li>
      <li><b>Tela de Eventos</b>: Mostrar detalhes dos eventos, comentários e fóruns, semelhante ao Facebook antigo.</li>
      <li><b>Criação de Eventos</b>: Possibilidade de criar eventos públicos ou privados.</li>
      <li><b>Gerenciamento de Eventos Privados</b>: Convidar pessoas pela lista de amigos ou link de convite.</li>
      <li><b>Eventos Públicos</b>: Visíveis para todos os usuários.</li>
      <li><b>Comentários e Postagens</b>: Funcionalidades de interação social.</li>
      <li><b>Versão Web para Testes</b>: Inicialmente, focar na versão web usando React Native.</li>
    </ul>

    <h3>2. <b>Arquitetura UML</b></h3>
    <p>Para começar a desenhar a arquitetura UML, podemos criar diagramas de classes e casos de uso. Aqui estão algumas sugestões:</p>
    <h4>Diagrama de Casos de Uso</h4>
    <ul>
      <li><b>Ator</b>: Usuário</li>
      <li><b>Caso de Uso</b>:
        <ul>
          <li>Visualizar eventos no mapa</li>
          <li>Criar evento público</li>
          <li>Criar evento privado</li>
          <li>Convidar amigos para evento privado</li>
          <li>Comentar em evento</li>
          <li>Visualizar detalhes do evento</li>
          <li>Participar de evento público</li>
        </ul>
      </li>
    </ul>
    <h4>Diagrama de Classes</h4>
    <ul>
      <li><b>Classe Usuário</b>: Nome, Email, Senha, Lista de Amigos, Eventos Criados, Eventos Participantes</li>
      <li><b>Classe Evento</b>: ID, Nome, Descrição, Data/Hora, Localização, Tipo (Público/Privado), Lista de Participantes, Comentários</li>
      <li><b>Classe Comentário</b>: ID, Autor, Conteúdo, Data/Hora</li>
    </ul>

    <h3>3. <b>Tela de Mapa (Mapbox)</b></h3>
    <ul>
      <li><b>React Native Mapbox Integration</b>: Você pode usar o pacote <code>react-native-mapbox-gl</code> para integrar o mapa na aplicação React Native.</li>
      <li><b>Exibir Marcadores</b>: Cada evento pode ser representado por um marcador no mapa.</li>
      <li><b>Informações ao Clicar</b>: Ao clicar em um marcador, exibir detalhes do evento.</li>
    </ul>

    <h3>4. <b>Tela de Eventos</b></h3>
    <ul>
      <li><b>Lista de Eventos</b>: Mostrar eventos públicos e privados do usuário.</li>
      <li><b>Detalhes do Evento</b>: Nome, descrição, localização, comentários, opção para participar ou convidar amigos.</li>
      <li><b>Comentários</b>: Usuários podem comentar e ver comentários de outros.</li>
    </ul>

    <h3>5. <b>Implementação Inicial com React Native</b></h3>
    <h4>Passos Iniciais</h4>
    <ol>
      <li>Configurar Projeto React Native: Inicializar um projeto React Native e configurar o ambiente de desenvolvimento.</li>
      <li>Integrar Mapbox: Adicionar o pacote <code>react-native-mapbox-gl</code> e configurar a chave de API.</li>
      <li>Criar Modelos de Dados: Definir classes para Usuário, Evento e Comentário.</li>
      <li>Desenvolver Tela de Mapa: Implementar a tela inicial com o mapa e marcadores.</li>
      <li>Desenvolver Tela de Eventos: Criar a tela que lista eventos e mostra detalhes.</li>
    </ol>
    <h4>Exemplo de Estrutura de Arquivos</h4>
    <pre>
      <code>
{`lib/
├── App.tsx
├── screens/
│   ├── map_screen.tsx
│   ├── event_screen.tsx
│   ├── event_details_screen.tsx
├── models/
│   ├── user.tsx
│   ├── event.tsx
│   ├── comment.tsx
├── services/
│   ├── mapbox_service.tsx
│   ├── event_service.tsx`}
      </code>
    </pre>

    <h3>6. <b>Regras de Negócio</b></h3>
    <ul>
      <li><b>Eventos Privados</b>: Somente participantes podem ver e comentar.</li>
      <li><b>Eventos Públicos</b>: Qualquer usuário pode ver e participar.</li>
      <li><b>Convites</b>: Usuários podem convidar amigos ou compartilhar links de convite.</li>
      <li><b>Comentários</b>: Usuários podem comentar e ver comentários de outros.</li>
    </ul>

    <h3>7. <b>Testes e Iterações</b></h3>
    <ul>
      <li><b>Versão Web</b>: Começar com a versão web para testar funcionalidades e coletar feedback.</li>
      <li><b>Iterações</b>: Melhorar com base no feedback e adicionar novas funcionalidades.</li>
    </ul>

    <h3>8. <b>Planejamento de Recursos</b></h3>
    <ul>
      <li><b>Captar Recursos</b>: Preparar um plano de negócios e apresentar a ideia para investidores ou patrocinadores.</li>
      <li><b>Expandir para Mobile</b>: Depois de testar a versão web, expandir para versões móveis (iOS e Android).</li>
    </ul>

    <hr />

    <h4>1. Design da Estrutura de Dados</h4>
    <p>A seguir estão os principais modelos de dados da aplicação:</p>

    <h5>1.1 Usuário (User)</h5>
    <pre>
      <code className="language-dart">
{`class User {
    final int? id; // ID do usuário, chave primária
    final String name; // Nome de usuário
    final String email; // Email
    final String password; // Senha (armazenada criptografada)
    final List<String> friends; // Lista de amigos (armazena IDs de usuários)

    User({
        this.id,
        required this.name,
        required this.email,
        required this.password,
        this.friends = const [],
    });

    Map<String, dynamic> toMap() {
        return {
            'id': id,
            'name': name,
            'email': email,
            'password': password,
            'friends': friends.join(','),
        };
    }

    factory User.fromMap(Map<String, dynamic> map) {
        return User(
            id: map['id'],
            name: map['name'],
            email: map['email'],
            password: map['password'],
            friends: map['friends']?.split(',') ?? [],
        );
    }
}`}
      </code>
    </pre>

    <h5>1.2 Evento (Event)</h5>
    <pre>
      <code className="language-dart">
{`class Event {
    final int? id; // ID do evento, chave primária
    final String title; // Título do evento
    final String description; // Descrição do evento
    final DateTime dateTime; // Data e hora do evento
    final String location; // Local do evento (latitude/longitude ou endereço)
    final bool isPublic; // Se é um evento público
    final List<String> participants; // Lista de participantes (armazena IDs de usuários)
    final List<Comment> comments; // Comentários do evento

    Event({
        this.id,
        required this.title,
        required this.description,
        required this.dateTime,
        required this.location,
        required this.isPublic,
        this.participants = const [],
        this.comments = const [],
    });

    Map<String, dynamic> toMap() {
        return {
            'id': id,
            'title': title,
            'description': description,
            'dateTime': dateTime.toIso8601String(),
            'location': location,
            'isPublic': isPublic ? 1 : 0,
            'participants': participants.join(','),
        };
    }

    factory Event.fromMap(Map<String, dynamic> map) {
        return Event(
            id: map['id'],
            title: map['title'],
            description: map['description'],
            dateTime: DateTime.parse(map['dateTime']),
            location: map['location'],
            isPublic: map['isPublic'] == 1,
            participants: map['participants']?.split(',') ?? [],
        );
    }
}`}
      </code>
    </pre>

    <h5>1.3 Comentário (Comment)</h5>
    <pre>
      <code className="language-dart">
{`class Comment {
    final int? id; // ID do comentário, chave primária
    final int eventId; // ID do evento relacionado
    final String userId; // ID do usuário que comentou
    final String content; // Conteúdo do comentário
    final DateTime createdAt; // Data/hora do comentário

    Comment({
        this.id,
        required this.eventId,
        required this.userId,
        required this.content,
        required this.createdAt,
    });

    Map<String, dynamic> toMap() {
        return {
            'id': id,
            'eventId': eventId,
            'userId': userId,
            'content': content,
            'createdAt': createdAt.toIso8601String(),
        };
    }

    factory Comment.fromMap(Map<String, dynamic> map) {
        return Comment(
            id: map['id'],
            eventId: map['eventId'],
            userId: map['userId'],
            content: map['content'],
            createdAt: DateTime.parse(map['createdAt']),
        );
    }
}`}
      </code>
    </pre>

    <hr />

    <h4>2. Design do Banco de Dados</h4>
    <h5>2.1 Inicialização do Banco de Dados</h5>
    <pre>
      <code className="language-dart">
{`Future<Database> _initDatabase() async {
    final databasesPath = await getDatabasesPath();
    final path = join(databasesPath, 'fluxo.db');
    return await openDatabase(path, version: 1, onCreate: (Database db, int version) async {
        await db.execute('''
            CREATE TABLE IF NOT EXISTS Users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                friends TEXT
            )
        ''');
        await db.execute('''
            CREATE TABLE IF NOT EXISTS Events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                dateTime TEXT NOT NULL,
                location TEXT NOT NULL,
                isPublic INTEGER NOT NULL,
                participants TEXT
            )
        ''');
        await db.execute('''
            CREATE TABLE IF NOT EXISTS Comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                eventId INTEGER NOT NULL,
                userId TEXT NOT NULL,
                content TEXT NOT NULL,
                createdAt TEXT NOT NULL
            )
        ''');
    });
}`}
      </code>
    </pre>

    <h5>2.2 Operações do Banco de Dados</h5>
    <p>Encapsulamento das operações CRUD do banco de dados para uso posterior.</p>
    <pre>
      <code className="language-dart">
{`class DatabaseHelper {
    Future<Database> get database async {
        return _initDatabase();
    }

    Future<int> insertUser(User user) async {
        final db = await database;
        return await db.insert('Users', user.toMap());
    }

    Future<int> insertEvent(Event event) async {
        final db = await database;
        return await db.insert('Events', event.toMap());
    }

    Future<int> insertComment(Comment comment) async {
        final db = await database;
        return await db.insert('Comments', comment.toMap());
    }

    Future<List<User>> getAllUsers() async {
        final db = await database;
        final List<Map<String, dynamic>> maps = await db.query('Users');
        return List.generate(maps.length, (i) => User.fromMap(maps[i]));
    }

    Future<List<Event>> getAllEvents() async {
        final db = await database;
        final List<Map<String, dynamic>> maps = await db.query('Events');
        return List.generate(maps.length, (i) => Event.fromMap(maps[i]));
    }

    Future<List<Comment>> getCommentsByEventId(int eventId) async {
        final db = await database;
        final List<Map<String, dynamic>> maps = await db.query('Comments', where: 'eventId = ?', whereArgs: [eventId]);
        return List.generate(maps.length, (i) => Comment.fromMap(maps[i]));
    }

    Future<int> updateEvent(Event event) async {
        final db = await database;
        return await db.update('Events', event.toMap(), where: 'id = ?', whereArgs: [event.id]);
    }

    Future<int> deleteEvent(int eventId) async {
        final db = await database;
        return await db.delete('Events', where: 'id = ?', whereArgs: [eventId]);
    }
}`}
      </code>
    </pre>

    <hr />

    <h4>3. Especificações do Banco de Dados</h4>
    <ol>
      <li><b>Tabela de Usuários (Users)</b>
        <ul>
          <li>Armazena informações básicas do usuário e lista de amigos.</li>
          <li>O campo <code>friends</code> armazena IDs de usuários separados por vírgula.</li>
        </ul>
      </li>
      <li><b>Tabela de Eventos (Events)</b>
        <ul>
          <li>Armazena informações básicas do evento, incluindo título, descrição, hora, localização, visibilidade e lista de participantes.</li>
          <li>O campo <code>participants</code> armazena IDs de usuários separados por vírgula.</li>
          <li>O campo <code>isPublic</code> é um booleano indicando se o evento é público.</li>
        </ul>
      </li>
      <li><b>Tabela de Comentários (Comments)</b>
        <ul>
          <li>Armazena informações de comentários do evento, incluindo ID do autor, conteúdo e hora.</li>
        </ul>
      </li>
      <li><b>Controle de Versão do Banco de Dados</b>
        <ul>
          <li>Versão atual é 1, futuras alterações estruturais podem ser feitas através do método <code>onUpgrade</code>.</li>
        </ul>
      </li>
    </ol>
  </div>
);

export default Codes;
