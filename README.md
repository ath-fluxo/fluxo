# FLUXO
Onde está o fluxo?

- [Documentação](./docs/DOCUMENTATION.md)
- [Regras](./docs/REGRAS.md)
- [MVP](./docs/MVP.md)
- [Estrutura](./docs/INFRA.md)
- [Usabilidade](./docs/USABILIDADE.md)
- [Codes](./docs/CODES.md)
- [Custos](./docs/CUSTOS.md)



### **1. Tela de Login / Cadastro**

#### **Descrição:**
Tela inicial do aplicativo onde o usuário pode fazer login ou se cadastrar. A tela deve ser simples e intuitiva.

#### **Elementos:**
- **Logo do aplicativo** no topo.
- **Campo de Email**: Campo de texto para inserir o email.
- **Campo de Senha**: Campo de texto para inserir a senha.
- **Botão de Login**: Botão para realizar o login.
- **Link para Cadastro**: "Não tem uma conta? Cadastre-se aqui".
- **Link para Redefinir Senha**: "Esqueceu a senha?".

#### **Esboço:**
```
-----------------------------------------------------
|                                                   |
|                LOGO FLUXO                          |
|                                                   |
|  [_________________________]                      |
|  | Email:                |                       |
|                                                   |
|  [_________________________]                      |
|  | Senha:                 |                       |
|                                                   |
|  [Login]                [Esqueceu a senha?]       |
|                                                   |
|  [Não tem uma conta? Cadastre-se aqui]            |
-----------------------------------------------------
```

---

### **2. Tela de Mapa (Home Screen)**

#### **Descrição:**
Tela principal do aplicativo onde os eventos são exibidos em um mapa interativo.

#### **Elementos:**
- **Mapa Interativo**: Exibe eventos como marcadores no mapa.
- **Botão Flutuante**: "+ Adicionar Evento".
- **Barra de Pesquisa**: Para pesquisar eventos por localização ou nome.
- **Botão de Menu**: Acesso ao menu lateral com opções de perfil e configurações.

#### **Esboço:**
```
-----------------------------------------------------
|  [Menu]    [_______________________] [+]          |
|            | Pesquisar eventos    |               |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
|                                                   |
-----------------------------------------------------
```

---

### **3. Tela de Detalhes do Evento**

#### **Descrição:**
Tela que exibe detalhes completos de um evento, incluindo descrição, comentários e opções de participação.

#### **Elementos:**
- **Nome do Evento**: Título do evento.
- **Localização e Data**: Informações sobre o local e horário.
- **Descrição**: Detalhes sobre o evento.
- **Botão de Participação**: "Participar" ou "Cancelar Participação".
- **Comentários**: Lista de comentários e campo para adicionar novo comentário.
- **Botão de Voltar**: Voltar para a tela anterior.

#### **Esboço:**
```
-----------------------------------------------------
|  [Voltar]                                                   |
|  Nome do Evento                                            |
|  Local: Rua X, São Paulo | Data: 15/10/2025                |
|                                                   |
|  Descrição:                                                |
|  Lorem ipsum dolor sit amet, consectetur adipiscing elit.   |
|                                                   |
|  [Participar] [Cancelar Participação]                      |
|                                                   |
|  Comentários:                                              |
|  [_________________________]                              |
|  | Adicionar comentário |                                 |
|                                                   |
|  Usuário 1: Comentário 1                                 |
|  Usuário 2: Comentário 2                                 |
-----------------------------------------------------
```

---

### **4. Tela de Criação de Evento**

#### **Descrição:**
Tela onde o usuário pode criar um novo evento, preenchendo detalhes como título, descrição, localização e horário.

#### **Elementos:**
- **Campo de Título**: Nome do evento.
- **Campo de Descrição**: Detalhes sobre o evento.
- **Campo de Localização**: Endereço ou coordenadas.
- **Campo de Data e Hora**: Seleção de data e hora do evento.
- **Botão de Criar Evento**: Salvar e criar o evento.
- **Botão de Voltar**: Voltar para a tela anterior.

#### **Esboço:**
```
-----------------------------------------------------
|  [Voltar]                                                   |
|  Criar Novo Evento                                         |
|                                                   |
|  [_________________________]                              |
|  | Título:                |                               |
|                                                   |
|  [_________________________]                              |
|  | Descrição:             |                               |
|                                                   |
|  [_________________________]                              |
|  | Localização:           |                               |
|                                                   |
|  [_________________________]                              |
|  | Data e Hora:           |                               |
|                                                   |
|  [Criar Evento]                                      |
-----------------------------------------------------
```

---

### **5. Tela de Perfil do Usuário**

#### **Descrição:**
Tela onde o usuário pode visualizar e editar suas informações de perfil.

#### **Elementos:**
- **Foto de Perfil**: Imagem do perfil do usuário.
- **Nome do Usuário**: Nome completo.
- **Email**: Endereço de email.
- **Lista de Amigos**: Amigos conectados.
- **Botão de Editar**: Editar informações do perfil.
- **Botão de Logout**: Sair da conta.

#### **Esboço:**
```
-----------------------------------------------------
|  Foto de Perfil          Nome do Usuário           |
|                                                   |
|  Email: usuario@email.com                         |
|                                                   |
|  Amigos:                                            |
|  - Amigo 1                                         |
|  - Amigo 2                                         |
|                                                   |
|  [Editar Perfil] [Logout]                          |
-----------------------------------------------------
```

---

### **6. Tela de Lista de Eventos**

#### **Descrição:**
Tela que lista todos os eventos públicos e privados em que o usuário está participando ou criou.

#### **Elementos:**
- **Lista de Eventos**: Cada evento com título, data e hora.
- **Botão de Participação**: Opção de participar ou cancelar participação.
- **Botão de Voltar**: Voltar para a tela anterior.

#### **Esboço:**
```
-----------------------------------------------------
|  [Voltar]                                                   |
|  Lista de Eventos                                          |
|                                                   |
|  [Evento 1]                                                |
|  Data: 15/10/2025 | Participar [X]                        |
|                                                   |
|  [Evento 2]                                                |
|  Data: 20/10/2025 | Participar [X]                        |
|                                                   |
|  [Evento 3]                                                |
|  Data: 25/10/2025 | Participar [X]                        |
-----------------------------------------------------
```

---

### **Ferramentas de Prototipagem**
Para criar protótipos visuais dessas telas, você pode usar ferramentas como:
1. **Figma**: Ótima para colaboração e prototipagem interativa.
2. **Adobe XD**: Interface amigável e recursos avançados de design.
3. **Sketch**: Especializada em design de interfaces para web e mobile.

### **Dicas de Design**
- **Consistência**: Use cores e fontes consistentes em todas as telas.
- **Usabilidade**: Mantenha a interface simples e intuitiva.
- **Feedback**: Adicione animações e feedbacks visuais para melhorar a experiência do usuário.

Espero que esses esboços e descrições ajudem a visualizar a interface do aplicativo "Fluxo"!
