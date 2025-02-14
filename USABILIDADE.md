### **1. Exemplos de Desenhos de Tela (Wireframes)**

#### **1.1 Tela de Login com Carteira de Blockchain**
**Ferramenta**: [Figma](https://www.figma.com) (grátis para protótipos básicos)  
**Inspiração**: Exemplos de design de carteiras em [Dribbble](https://dribbble.com/tags/wallet-ui) [^18^]  

**Elementos**:
- Campo para conectar carteira (ex: MetaMask).
- Botão "Conectar Carteira".
- Mensagem de boas-vindas com endereço da carteira.

![Wireframe Login](https://via.placeholder.com/300x500?text=Tela+de+Login+com+Carteira)

#### **1.2 Tela de Mapa (Home Screen)**
**Ferramenta**: [Adobe XD](https://www.adobe.com/br/products/xd.html) (versão gratuita)  
**Inspiração**: Mapas interativos com marcadores personalizados.

**Elementos**:
- Mapa central com marcadores de eventos.
- Barra de pesquisa no topo.
- Botão flutuante "+ Criar Evento".

![Wireframe Mapa](https://via.placeholder.com/300x500?text=Tela+de+Mapa+Interativo)

#### **1.3 Tela de Detalhes do Evento**
**Ferramenta**: [Canva](https://www.canva.com) (grátis para designs básicos)  
**Inspiração**: Layouts de eventos com comentários e interações.

**Elementos**:
- Nome e descrição do evento.
- Lista de comentários com foto de perfil.
- Campo para adicionar novo comentário.

![Wireframe Detalhes do Evento](https://via.placeholder.com/300x500?text=Tela+de+Detalhes+do+Evento)

---

### **2. Documentação de Interface Gráfica (UI/UX)**

#### **2.1 Diretrizes de Design**
- **Padrão de Cores**: Uso de cores primárias (azul e verde) para botões principais.
- **Tipografia**: Fonte sans-serif (ex: Roboto) para legibilidade.
- **Componentes Reutilizáveis**: Botões, campos de texto e cards para eventos.

#### **2.2 Especificação de Componentes**
- **Botão de Conectar Carteira**:  
  - Cor de fundo: #4A90E2  
  - Texto: "Conectar Carteira"  
  - Ação: Abre popup para seleção de carteira (ex: MetaMask).

- **Card de Evento**:  
  - Tamanho: 300x200 px  
  - Informações: Título, data, localização.  
  - Ação: Redireciona para tela de detalhes.

---

### **3. Diagrama UML (Diagrama de Classes)**

**Ferramenta Gratuita**: [Visual Paradigm Online](https://online.visual-paradigm.com/pt/) [^17^]  

```plaintext
+----------------+          +----------------+          +----------------+
|     User       |          |     Event      |          |    Comment     |
+----------------+          +----------------+          +----------------+
| - walletAddr   |          | - eventId      |          | - commentId    |
| - name         |          | - title        |          | - eventId      |
| - email        |          | - description  |          | - userId       |
| - friends      |          | - dateTime     |          | - content      |
+----------------+          | - location     |          | - createdAt    |
                          | - isPublic      |
                          | - participants  |
                          +----------------+
```

---

### **4. Ferramentas Gratuitas Recomendadas**

1. **Design e Protótipo**:
   - [Figma](https://www.figma.com) (grátis para até 3 projetos).
   - [Canva](https://www.canva.com) (templates de design gratuito).

2. **Diagramas UML**:
   - [Visual Paradigm Online](https://online.visual-paradigm.com/pt/) [^17^] (criação de diagramas gratuitos).

3. **Integração com Carteiras**:
   - [MetaMask](https://metamask.io) (extensão para browsers).
   - [Argent](https://argent.xyz) (carteira móvel não-custodiante).

4. **Armazenamento Descentralizado**:
   - [IPFS](https://ipfs.io) (sistema de arquivos descentralizado).

---

### **5. Exemplo de Fluxo de Usuário**

1. **Login**:  
   O usuário conecta sua carteira (ex: MetaMask) para autenticação.  
   **Telas**: Login → Home.

2. **Criar Evento**:  
   O usuário preenche detalhes do evento e salva no IPFS.  
   **Telas**: Home → Criar Evento → Confirmação.

3. **Comentar em Evento**:  
   O usuário adiciona comentário criptografado, visível apenas para participantes.  
   **Telas**: Detalhes do Evento → Comentários.

---

### **6. Plano de Implementação com Ferramentas Gratuitas**

1. **Frontend (Flutter)**:
   - Use `flutter_mapbox` para integração com mapas.
   - Use `web3dart` para interação com carteiras blockchain.

2. **Backend (.NET 9)**:
   - Use `Entity Framework Core` para modelo de dados.
   - Use `IPFS.HttpClient` para armazenamento descentralizado.

3. **CI/CD**:  
   - [GitHub Actions](https://github.com/features/actions) para automação de build e testes.

---

### **Conclusão**
Este projeto utiliza ferramentas gratuitas e padrões descentralizados para garantir privacidade e segurança. A documentação acima fornece uma base sólida para o desenvolvimento do MVP, com exemplos visuais e estrutura UML.
