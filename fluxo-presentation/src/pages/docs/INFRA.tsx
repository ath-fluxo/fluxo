import React from "react";

const Infra: React.FC = () => (
  <div>
    <h3>Implementação do Back End em .NET 9 e Modelos de Dados</h3>
    <p>
      Para a implementação do back end do aplicativo "Fluxo" usando .NET 9, vamos criar uma arquitetura que suporte a gestão de eventos públicos e privados, comentários, integração com mapas e funcionalidades de usuário. Além disso, forneceremos uma visão geral dos modelos de dados e um diagrama UML para ilustrar a estrutura.
    </p>

    <hr />

    <h4>1. Modelos de Dados</h4>
    <h5>1.1 Usuário (User)</h5>
    <pre>
      <code className="language-csharp">
{`public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public List<int> Friends { get; set; } = new List<int>();
}`}
      </code>
    </pre>

    <h5>1.2 Evento (Event)</h5>
    <pre>
      <code className="language-csharp">
{`public class Event
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DateTime { get; set; }
    public string Location { get; set; }
    public bool IsPublic { get; set; }
    public List<int> Participants { get; set; } = new List<int>();
    public List<Comment> Comments { get; set; } = new List<Comment>();
}`}
      </code>
    </pre>

    <h5>1.3 Comentário (Comment)</h5>
    <pre>
      <code className="language-csharp">
{`public class Comment
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public int UserId { get; set; }
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
}`}
      </code>
    </pre>

    <hr />

    <h4>2. Diagrama UML</h4>
    <h5>Diagrama de Classes (UML)</h5>
    <pre>
      <code>
{`+----------------+              +----------------+              +----------------+
|     User       |              |     Event      |              |    Comment     |
+----------------+              +----------------+              +----------------+
| - Id: int      |              | - Id: int      |              | - Id: int      |
| - Name: string |              | - Title: string|              | - EventId: int |
| - Email: string|              | - Description: |              | - UserId: int  |
| - Password: string|             | - DateTime: DateTime |         | - Content: string|
| - Friends: List<int> |           | - Location: string |          | - CreatedAt: DateTime |
+----------------+              | - IsPublic: bool |              +----------------+
                                | - Participants: List<int> |
                                +----------------+`}
      </code>
    </pre>

    <hr />

    <h4>3. Implementação do Back End com .NET 9</h4>
    <h5>3.1 Projeto de API</h5>
    <p>Usaremos ASP.NET Core para criar uma API RESTful que suportará as funcionalidades do aplicativo.</p>
    <h6>3.1.1 Configuração do Projeto</h6>
    <ol>
      <li>
        <b>Criar Projeto</b>:
        <pre>
          <code className="language-bash">
{`dotnet new webapi -n FluxoApi
cd FluxoApi`}
          </code>
        </pre>
      </li>
      <li>
        <b>Adicionar Pacotes</b>:
        <pre>
          <code className="language-bash">
{`dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools`}
          </code>
        </pre>
      </li>
    </ol>

    <h6>3.1.2 Configuração do DbContext</h6>
    <pre>
      <code className="language-csharp">
{`using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<Comment> Comments { get; set; }
}`}
      </code>
    </pre>

    <h6>3.1.3 Configuração de Serviços no Program.cs</h6>
    <pre>
      <code className="language-csharp">
{`var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();`}
      </code>
    </pre>

    <h6>3.1.4 Controllers e Rotas</h6>
    <p>Criaremos controllers para gerenciar usuários, eventos e comentários.</p>
    <h6>UserController</h6>
    <pre>
      <code className="language-csharp">
{`[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public UserController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
        return Ok(user);
    }

    [HttpGet]
    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _context.Users.ToListAsync();
        return Ok(users);
    }
}`}
      </code>
    </pre>
    <h6>EventController</h6>
    <pre>
      <code className="language-csharp">
{`[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EventController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateEvent([FromBody] Event @event)
    {
        await _context.Events.AddAsync(@event);
        await _context.SaveChangesAsync();
        return Ok(@event);
    }

    [HttpGet]
    public async Task<IActionResult> GetAllEvents()
    {
        var events = await _context.Events.ToListAsync();
        return Ok(events);
    }
}`}
      </code>
    </pre>

    <hr />

    <h4>1. Conceito de Federação de Usuários</h4>
    <p>
      A federação de usuários é um modelo onde os dados e a identidade dos usuários são distribuídos em múltiplas entidades independentes, ao invés de estarem concentrados em um único servidor centralizado. Assim como o sistema de e-mail, onde cada provedor gerencia seus próprios dados, mas ainda permite comunicação entre diferentes provedores.
    </p>

    <h4>2. Implementação de um Sistema Federado</h4>
    <h5>2.1 Autenticação Descentralizada</h5>
    <ul>
      <li><b>Identidade Digital</b>: Utilizar sistemas de identidade digital descentralizada (como o Ethereum ou outras blockchains) para autenticação de usuários.</li>
      <li><b>Autenticação Federada</b>: Permitir que usuários façam login usando contas de provedores externos confiáveis.</li>
    </ul>
    <h5>2.2 Armazenamento de Dados</h5>
    <ul>
      <li><b>Dados Locais e Descentralizados</b>: Armazenar dados dos usuários em seus próprios dispositivos ou em servidores descentralizados.</li>
      <li><b>Criptografia End-to-End</b>: Garantir que todos os dados sejam criptografados de ponta a ponta.</li>
    </ul>
    <h5>2.3 Proteção de Privacidade</h5>
    <ul>
      <li><b>Regulamentação de Dados</b>: Cumprir regulamentações de privacidade como a LGPD e o GDPR.</li>
      <li><b>Transparência</b>: Manter uma política de privacidade clara e acessível.</li>
    </ul>

    <h4>3. Evitando Problemas de Vigilância e Abuso de Dados</h4>
    <ul>
      <li><b>Uso Transparente de Dados</b>: Informar o usuário de maneira clara e transparente sobre como seus dados serão utilizados.</li>
      <li><b>Consentimento Explícito</b>: Pedir consentimento explícito do usuário antes de coletar ou compartilhar dados.</li>
      <li><b>Limitação da Coleta de Dados</b>: Coletar apenas os dados necessários para o funcionamento do aplicativo.</li>
      <li><b>Dados Sensíveis</b>: Evitar coletar dados sensíveis a menos que seja absolutamente necessário.</li>
      <li><b>Controle do Usuário sobre os Dados</b>: Permitir que o usuário acesse, edite, exclua e exporte seus dados.</li>
    </ul>

    <h4>4. Exemplo de Fluxo de Autenticação Federada</h4>
    <ol>
      <li>
        <b>Cadastro com Provedor Externo</b>:
        <ul>
          <li>O usuário se cadastra usando uma conta de um provedor confiável.</li>
          <li>A plataforma "Fluxo" apenas armazena uma referência ao provedor e ao ID do usuário.</li>
        </ul>
      </li>
      <li>
        <b>Login Federado</b>:
        <ul>
          <li>Na tela de login, o usuário escolhe seu provedor de autenticação.</li>
          <li>O provedor verifica a identidade do usuário e retorna um token de autenticação para a plataforma "Fluxo".</li>
          <li>A plataforma usa esse token para criar uma sessão, sem nunca ter acesso às senhas ou dados de login do usuário.</li>
        </ul>
      </li>
    </ol>

    <h4>5. Benefícios do Sistema Federado</h4>
    <ul>
      <li><b>Privacidade</b>: Os dados do usuário permanecem sob seu controle.</li>
      <li><b>Segurança</b>: A descentralização reduz o risco de ataques centralizados.</li>
      <li><b>Autonomia</b>: O usuário tem mais controle sobre suas informações.</li>
    </ul>

    <h4>6. Conclusão</h4>
    <p>
      Ao adotar um modelo federado de gestão de usuários, o aplicativo "Fluxo" pode oferecer uma experiência mais segura e privada, evitando os problemas de vigilância e abuso de dados que são comuns em redes sociais centralizadas. Isso não só protege os usuários, mas também constrói confiança e transparência na plataforma.
    </p>

    <h4>Solução com Blockchain para Carteiras de Usuário</h4>
    <h5>1. Utilização de Carteiras de Criptomoedas como Identidade do Usuário</h5>
    <ul>
      <li><b>Privacidade</b>: Os dados do usuário são criptografados e armazenados de forma descentralizada.</li>
      <li><b>Segurança</b>: As carteiras são não-custodiantes, ou seja, o usuário controla suas próprias chaves.</li>
      <li><b>Facilidade de Uso</b>: Existem várias carteiras gratuitas e de fácil uso, como MetaMask e Argent.</li>
    </ul>
    <h5>2. Implementação com Ferramentas Gratuitas</h5>
    <ul>
      <li><b>MetaMask</b>: Carteira não-custodiante baseada em Ethereum.</li>
      <li><b>Argent</b>: Carteira móvel não-custodiante.</li>
      <li><b>Mycelium</b>: Carteira gratuita e não-custodiante com foco em privacidade.</li>
    </ul>
    <h5>Funcionamento do Sistema</h5>
    <ol>
      <li>
        <b>Cadastro e Autenticação</b>:
        <ul>
          <li>O usuário se cadastra usando sua carteira MetaMask ou Argent.</li>
          <li>A carteira gera uma chave pública única que será usada como identidade do usuário na plataforma.</li>
          <li>O aplicativo "Fluxo" armazena apenas a chave pública e não tem acesso às chaves privadas do usuário.</li>
        </ul>
      </li>
      <li>
        <b>Armazenamento de Dados</b>:
        <ul>
          <li>Os dados do usuário são criptografados e armazenados em um sistema descentralizado, como IPFS.</li>
          <li>A plataforma "Fluxo" não armazena dados sensíveis diretamente, apenas referências aos dados criptografados.</li>
        </ul>
      </li>
      <li>
        <b>Privacidade e Segurança</b>:
        <ul>
          <li>Utilização de técnicas como Provas de Conhecimento Zero para verificar informações sem revelar dados sensíveis.</li>
          <li>O usuário pode gerenciar e excluir seus dados a qualquer momento.</li>
        </ul>
      </li>
    </ol>
    <h5>Benefícios da Solução</h5>
    <ul>
      <li><b>Privacidade</b>: Os dados do usuário permanecem criptografados e descentralizados.</li>
      <li><b>Segurança</b>: As carteiras não-custodiante garantem que o usuário controle suas próprias chaves.</li>
      <li><b>Custo Zero</b>: Todas as ferramentas mencionadas são gratuitas e de código aberto.</li>
    </ul>
    <h5>Conclusão</h5>
    <p>
      Utilizando carteiras de criptomoedas como base para a identidade dos usuários e armazenando dados de forma descentralizada e criptografada, podemos criar um sistema que garanta privacidade e segurança, sem comprometer a funcionalidade do aplicativo "Fluxo".
    </p>
  </div>
);

export default Infra;
