# [Systentando WebPage UI](https://systentando.com) ![version](https://img.shields.io/badge/version-0.0.1-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/marcelio911/site-systentando.svg?maxAge=2592000)](https://github.com/marcelio911/site-systentando/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/marcelio911/site-systentando.svg?maxAge=2592000)](https://github.com/marcelio911/site-systentando/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://discord.gg/mp5nT6AY) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/2XEykJuJ)

![Site Systentando](https://github.com/marcelio911/site-systentando/blob/develop/src/assets/img/opt_pk_react_thumbnail.jpg?raw=true)

Bem-vindo ao repositório do projeto Systentando! Este projeto é uma landing page moderna para o ecossistema Systentando, focado em conectar desenvolvedores, promover o empreendedorismo e melhorar o equilíbrio entre produtividade, bem-estar e crescimento pessoal.

## Visão Geral

O Systentando é um HUB de desenvolvedores com visão empreendedora que acredita que o empreendedorismo pode transformar vidas. Nosso ecossistema inclui diversos produtos integrados:

- **ZEN Launcher**: Reimagine sua experiência digital com foco no bem-estar
- **Meu Nutri**: Assistente nutricional inteligente com análise por imagem
- **Saúde e Bem-estar**: Programa integrado para desenvolvimento físico e mental
- **Momento do Investimento**: Simulações e trilhas de aprendizado sobre investimentos
- **Empreenda4Devs**: Transforme seus conhecimentos técnicos em produtos

## Tecnologias Principais

1. **React:**
   - O frontend do site é desenvolvido utilizando a biblioteca React, permitindo a criação de interfaces de usuário interativas e reativas.
   - Utilizamos componentes modernos e práticas de UI/UX para uma experiência agradável.

2. **Typescript:**
   - Optamos por usar Typescript para garantir um código mais robusto e escalável, proporcionando tipagem estática e facilitando a manutenção do código.

3. **Google Functions:**
   - As funções serverless do Google Cloud Platform (Google Functions) serão implementadas para processar lógica de servidor, garantindo escalabilidade e eficiência.

4. **Tailwind CSS:**
   - Utilizamos o Tailwind para estilização eficiente e responsiva, garantindo uma interface moderna e adaptável.

## Pré-requisitos

- Node.js 16+ instalado para gerenciar as dependências do projeto.
- É necessário uma conta no Google Cloud Platform para utilizar as Google Functions (somente para deploy).
- Preferencialmente usar o gerenciador de pacotes Yarn.

## Estrutura do Projeto

- **`/src`**: Contém todo o código-fonte do frontend React.
  - **`/components`**: Componentes reutilizáveis da interface.
  - **`/utils`**: Utilitários e funções helpers.
- **`/public`**: Arquivos estáticos como imagens e favicons.

## Como Iniciar o Desenvolvimento

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/marcelio911/site-systentando.git
   cd site-systentando
   ```

2. **Instalação de Dependências:**
   ```bash
   yarn install
   ```

3. **Executar o Projeto Localmente:**
   ```bash
   yarn start
   ```
   O site estará disponível em `http://localhost:3000`

4. **Build do Projeto:**
   ```bash
   yarn build
   ```

5. **Deploy para Google Cloud:**
   ```bash
   yarn run deploy
   ```
   (Requer configuração prévia do `.firebaserc` e `firebase.json`)

## Design e Features

- **Design Moderno**: Interface escura com acentos de cores vibrantes
- **Altamente Responsivo**: Adaptado para todos os dispositivos e tamanhos de tela
- **Interativo**: Elementos de UI que respondem ao usuário para maior engajamento
- **Acessível**: Seguindo as melhores práticas de acessibilidade web

## Componentes Principais

- **HeroSection**: Seção principal com mensagem de impacto e chamada para ação
- **EcossistemaSolucoes**: Visão geral dos produtos do ecossistema
- **ValuationSection**: Informações sobre o valor projetado do ecossistema
- **ImpactoSocialSection**: Como o projeto afeta positivamente seus usuários

## Contribuição

Agradecemos seu interesse em contribuir para o Systentando! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

Por favor, certifique-se de seguir nossas diretrizes de código e padrões de commit.

## Contato

- **Desenvolvedor**: [@marcelio911](https://github.com/marcelio911)
- **Discord**: [Entre em nosso servidor](https://discord.gg/2XEykJuJ)
- **Email**: [contato@systentando.com](mailto:contato@systentando.com)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

---

**Desenvolvido com 💚 pela equipe Systentando, com assistência de Claude AI**
