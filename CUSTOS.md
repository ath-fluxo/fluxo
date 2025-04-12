
# 💰 Plano de Orçamento Inicial – MVP Fluxo

**Versão: Abril/2025**  
Este documento apresenta um orçamento completo para o lançamento do MVP do aplicativo Fluxo, incluindo custos de publicação em lojas, infraestrutura, autenticação, banco de dados e serviços complementares.

---

## 🛒 Publicação em Lojas

| Plataforma      | Serviço                     | Custo         | Link                                   |
|-----------------|-----------------------------|---------------|----------------------------------------|
| Google Play     | Conta de Desenvolvedor      | **US$ 25** (único) | [Google Play Console](https://play.google.com/console/about/) |
| Apple App Store | Apple Developer Program     | **US$ 99/ano**     | [Apple Developer](https://developer.apple.com/programs/) |

---

## ☁️ Infraestrutura: Google Cloud (via Firebase + Cloud Run)

| Serviço                   | Descrição                          | Custo estimado | Link |
|---------------------------|------------------------------------|----------------|------|
| Firebase Auth             | Até 10.000 usuários/mês            | Grátis         | [Firebase](https://firebase.google.com/pricing) |
| Firebase Storage          | Até 5GB                            | Grátis         | [Firebase Storage](https://firebase.google.com/products/storage) |
| Cloud SQL (PostgreSQL)    | db-f1-micro (com 10GB)             | US$ 10–15/mês  | [Cloud SQL](https://cloud.google.com/sql/pricing) |
| Cloud Run (API Backend)   | Serverless container               | US$ 0–5/mês    | [Cloud Run](https://cloud.google.com/run) |
| Firebase Hosting          | Admin panel / frontend estático    | Grátis         | [Firebase Hosting](https://firebase.google.com/products/hosting) |
| Cloud Functions           | Eventos / tarefas automáticas      | Grátis até 2M chamadas | [Cloud Functions](https://cloud.google.com/functions) |

💡 **Crédito gratuito: US$ 300 por 90 dias**  
🔗 [cloud.google.com/free](https://cloud.google.com/free)

---

## ☁️ Alternativa: AWS (Amazon Web Services – mais corporativa)

| Serviço                   | Descrição                          | Custo estimado | Link |
|---------------------------|------------------------------------|----------------|------|
| AWS Cognito               | Autenticação (50k MAU)             | Grátis         | [Cognito](https://aws.amazon.com/cognito/pricing/) |
| S3                        | Armazenamento de arquivos/imagens  | Grátis até 5 GB| [S3](https://aws.amazon.com/s3/pricing/) |
| RDS PostgreSQL (t3.micro) | 750h/mês por 12 meses              | Grátis         | [RDS](https://aws.amazon.com/rds/free/) |
| Lambda + API Gateway      | Serverless API                     | Grátis até 1M req/mês | [Lambda](https://aws.amazon.com/lambda/pricing/) |
| CloudWatch                | Monitoramento básico               | Grátis         | [CloudWatch](https://aws.amazon.com/cloudwatch/pricing/) |

🔗 [aws.amazon.com/free](https://aws.amazon.com/free/)

---

## 📈 Monitoramento e Analytics

| Serviço             | Descrição                        | Custo         | Link |
|---------------------|----------------------------------|---------------|------|
| Firebase Analytics  | App analytics                    | Grátis        | [Firebase Analytics](https://firebase.google.com/products/analytics) |
| Sentry              | Log de erros (5k eventos/mês)    | Grátis        | [Sentry](https://sentry.io/pricing/) |

---

## 📩 Envio de E-mail (Convites, notificações)

| Serviço     | Custo         | Link                                  |
|-------------|---------------|---------------------------------------|
| Resend      | Grátis até 100 emails/dia | [resend.com](https://resend.com/pricing) |
| SendGrid    | Grátis até 100 emails/dia | [sendgrid.com](https://sendgrid.com/)   |

---

## 💻 Repositório e CDN

| Serviço     | Descrição                | Custo     | Link |
|-------------|--------------------------|-----------|------|
| GitHub      | Repositório do projeto   | Grátis    | [GitHub](https://github.com) |
| Cloudflare  | CDN + domínio opcional   | Grátis    | [Cloudflare](https://cloudflare.com) |

---

## 📦 Resumo de Custos Estimados

| Categoria                  | Custo Inicial (único) | Custo Mensal | Observações |
|----------------------------|------------------------|--------------|-------------|
| Lojas (Google + Apple)     | US$ 124                | US$ 8/mês    | Apple é anual |
| Infraestrutura GCP (Firebase + Cloud Run) | US$ 0 (inicial)        | US$ 10–20/mês | Após créditos |
| Infraestrutura AWS (alternativa)         | US$ 0 (12 meses)       | US$ 0–10/mês | Plano Free Tier |
| Banco de dados (PostgreSQL) | Incluído              | US$ 0–15/mês | conforme uso |
| Autenticação               | Grátis                 | Grátis       | até 10k usuários |
| Armazenamento              | Grátis                 | Grátis       | até 5GB |
| E-mails + Analytics        | Grátis                 | Grátis       | suficiente para MVP |

### 💡 Total estimado: **US$ 124 inicial** + até **US$ 20/mês**

---

**Recomendação:** Para agilidade no MVP, sugerimos começar com **Firebase + Cloud Run**, e migrar para AWS caso necessário em fases futuras do projeto.

