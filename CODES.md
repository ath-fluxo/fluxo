

### 1. **Definindo as Funcionalidades**
Primeiro, vamos listar as principais funcionalidades que o aplicativo deve ter:
- **Tela Inicial com Mapa**: Exibir eventos em um mapa (usando Mapbox ou outra API de mapas).
- **Tela de Eventos**: Mostrar detalhes dos eventos, comentários e fóruns, semelhante ao Facebook antigo.
- **Criação de Eventos**: Possibilidade de criar eventos públicos ou privados.
- **Gerenciamento de Eventos Privados**: Convidar pessoas pela lista de amigos ou link de convite.
- **Eventos Públicos**: Visíveis para todos os usuários.
- **Comentários e Postagens**: Funcionalidades de interação social.
- **Versão Web para Testes**: Inicialmente, focar na versão web usando Flutter.

### 2. **Arquitetura UML**
Para começar a desenhar a arquitetura UML, podemos criar diagramas de classes e casos de uso. Aqui estão algumas sugestões:

#### **Diagrama de Casos de Uso**
- **Ator**: Usuário
- **Caso de Uso**:
    - Visualizar eventos no mapa
    - Criar evento público
    - Criar evento privado
    - Convidar amigos para evento privado
    - Comentar em evento
    - Visualizar detalhes do evento
    - Participar de evento público

#### **Diagrama de Classes**
- **Classe Usuário**: Nome, Email, Senha, Lista de Amigos, Eventos Criados, Eventos Participantes
- **Classe Evento**: ID, Nome, Descrição, Data/Hora, Localização, Tipo (Público/Privado), Lista de Participantes, Comentários
- **Classe Comentário**: ID, Autor, Conteúdo, Data/Hora

### 3. **Tela de Mapa (Mapbox)**
- **Flutter Mapbox Integration**: Você pode usar o pacote `flutter_mapbox` para integrar o mapa na aplicação Flutter.
- **Exibir Marcadores**: Cada evento pode ser representado por um marcador no mapa.
- **Informações ao Clicar**: Ao clicar em um marcador, exibir detalhes do evento.

### 4. **Tela de Eventos**
- **Lista de Eventos**: Mostrar eventos públicos e privados do usuário.
- **Detalhes do Evento**: Nome, descrição, localização, comentários, opção para participar ou convidar amigos.
- **Comentários**: Usuários podem comentar e ver comentários de outros.

### 5. **Implementação Inicial com Flutter**
#### **Passos Iniciais**
1. **Configurar Projeto Flutter**: Inicializar um projeto Flutter e configurar o ambiente de desenvolvimento.
2. **Integrar Mapbox**: Adicionar o pacote `flutter_mapbox` e configurar a chave de API.
3. **Criar Modelos de Dados**: Definir classes para Usuário, Evento e Comentário.
4. **Desenvolver Tela de Mapa**: Implementar a tela inicial com o mapa e marcadores.
5. **Desenvolver Tela de Eventos**: Criar a tela que lista eventos e mostra detalhes.

#### **Exemplo de Estrutura de Arquivos**
```
lib/
├── main.dart
├── screens/
│   ├── map_screen.dart
│   ├── event_screen.dart
│   ├── event_details_screen.dart
├── models/
│   ├── user.dart
│   ├── event.dart
│   ├── comment.dart
├── services/
│   ├── mapbox_service.dart
│   ├── event_service.dart
```

### 6. **Regras de Negócio**
- **Eventos Privados**: Somente participantes podem ver e comentar.
- **Eventos Públicos**: Qualquer usuário pode ver e participar.
- **Convites**: Usuários podem convidar amigos ou compartilhar links de convite.
- **Comentários**: Usuários podem comentar e ver comentários de outros.

### 7. **Testes e Iterações**
- **Versão Web**: Começar com a versão web para testar funcionalidades e coletar feedback.
- **Iterações**: Melhorar com base no feedback e adicionar novas funcionalidades.

### 8. **Planejamento de Recursos**
- **Captar Recursos**: Preparar um plano de negócios e apresentar a ideia para investidores ou patrocinadores.
- **Expandir para Mobile**: Depois de testar a versão web, expandir para versões móveis (iOS e Android).

---

#### **1. Design da Estrutura de Dados**

A seguir estão os principais modelos de dados da aplicação:

##### **1.1 Usuário (User)**
```dart
class User {
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
}
```

##### **1.2 Evento (Event)**
```dart
class Event {
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
}
```

##### **1.3 Comentário (Comment)**
```dart
class Comment {
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
}
```

---

#### **2. Design do Banco de Dados**

##### **2.1 Inicialização do Banco de Dados**
```dart
Future<Database> _initDatabase() async {
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
}
```

##### **2.2 Operações do Banco de Dados**
Encapsulamento das operações CRUD do banco de dados para uso posterior.

```dart
class DatabaseHelper {
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
}
```

---

#### **3. Especificações do Banco de Dados**

1. **Tabela de Usuários (Users)**
     - Armazena informações básicas do usuário e lista de amigos.
     - O campo `friends` armazena IDs de usuários separados por vírgula.

2. **Tabela de Eventos (Events)**
     - Armazena informações básicas do evento, incluindo título, descrição, hora, localização, visibilidade e lista de participantes.
     - O campo `participants` armazena IDs de usuários separados por vírgula.
     - O campo `isPublic` é um booleano indicando se o evento é público.

3. **Tabela de Comentários (Comments)**
     - Armazena informações de comentários do evento, incluindo ID do autor, conteúdo e hora.

4. **Controle de Versão do Banco de Dados**
     - Versão atual é 1, futuras alterações estruturais podem ser feitas através do método `onUpgrade`.

