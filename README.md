<div align="center">

# 📍 VivaBem

### Quanto custa morar aqui?

Descubra quanto custa viver em diferentes cidades do Brasil e encontre o lugar que melhor combina com o seu perfil e o seu orçamento.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-2fd9a8?style=for-the-badge)
![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0%20MVP-0a1220?style=for-the-badge)
![Licença](https://img.shields.io/badge/uso-educacional-101a2c?style=for-the-badge)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

<br />

> **Mais do que um número, é sobre o seu estilo de vida.**

</div>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Objetivo](#-objetivo)
- [Funcionalidades](#-funcionalidades)
- [Telas](#-telas)
- [Tecnologias](#-tecnologias)
- [Como executar](#-como-executar)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como o cálculo funciona](#-como-o-cálculo-funciona)
- [Autenticação](#-autenticação-versão-de-demonstração)
- [Roadmap](#-roadmap)
- [Sobre os dados](#-sobre-os-dados)
- [Contexto acadêmico](#-contexto-acadêmico)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 📌 Sobre o projeto

O **VivaBem** facilita a decisão de quem está pensando em se mudar de cidade. O usuário informa a **cidade desejada**, o **perfil** e o **tipo de moradia**, e recebe uma **estimativa de custo de vida mensal** dividida em categorias como moradia, alimentação, transporte, contas e lazer.

A proposta é transformar informações de custo de vida em uma experiência **simples, visual e personalizada**.

## 🎯 Objetivo

Ajudar o usuário a responder perguntas como:

- Quanto eu gastaria para morar em determinada cidade?
- Qual cidade cabe melhor no meu orçamento?
- Quanto eu precisaria ganhar para viver sozinho?
- Onde seria mais barato morar?
- Como meus gastos mudam de acordo com o meu estilo de vida?

## ✨ Funcionalidades

| Recurso | Descrição |
| --- | --- |
| 🧮 **Simulação de custo de vida** | Escolha cidade, perfil e tipo de moradia e receba a estimativa mensal. |
| 🏠 **Gastos por categoria** | Moradia, alimentação, transporte, energia e água, internet e celular, lazer e outros. |
| 👤 **Perfis personalizados** | Estudante, pessoa solteira, casal, família e aposentado. |
| 🏘️ **Tipos de moradia** | Quarto compartilhado, kitnet, apartamento e casa. |
| 🏙️ **Cidades em destaque** | Cards com a média mensal e a comparação com a média nacional. |
| 🔐 **Login e cadastro** | Telas de acesso com validação de formulário e sessão de usuário. |
| 📱 **Design responsivo** | Funciona em desktop, notebook, tablet e smartphone. |

## 🖼️ Telas

> Adicione as capturas de tela na pasta `docs/screenshots/` para que elas apareçam aqui.

| Login | Cadastro |
| :---: | :---: |
| ![Tela de login](docs/screenshots/login.png) | ![Tela de cadastro](docs/screenshots/cadastro.png) |

| Página inicial | Resultado da simulação |
| :---: | :---: |
| ![Página inicial](docs/screenshots/home.png) | ![Resultado da simulação](docs/screenshots/resultado.png) |

## 🛠️ Tecnologias

**Front-end**

- [React 18](https://react.dev/) — biblioteca de interface
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Vite](https://vite.dev/) — ambiente de desenvolvimento e build
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização
- [Lucide React](https://lucide.dev/) — ícones

**Planejadas para as próximas versões**

Node.js · PostgreSQL · APIs externas · autenticação real · mapas interativos · dados reais de custo de vida

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/JoseGoncalves0/vivabem.git

# 2. Entre na pasta do projeto
cd vivabem

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica os tipos (`tsc`) e gera a versão de produção em `dist/`. |
| `npm run preview` | Executa localmente a versão de produção gerada. |

### Rotas

A navegação usa o hash da URL, sem dependências adicionais.

| Rota | Tela |
| --- | --- |
| `#/` | Página inicial e simulador |
| `#/login` | Login |
| `#/cadastro` | Cadastro |

### Imagem de fundo (opcional)

As telas de login e cadastro exibem uma paisagem de cidade ao entardecer desenhada em SVG. Para usar uma foto sua, salve-a como `public/bg-cidade.jpg` e ela será exibida automaticamente por cima do desenho.

## 🗂️ Estrutura do projeto

```text
vivabem/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx              # Ponto de entrada
    ├── App.tsx               # Seleção de tela conforme a rota
    ├── index.css             # Tailwind e tokens de tema (cores e fontes)
    ├── components/
    │   ├── Header.tsx        # Cabeçalho com Entrar / Cadastrar / Sair
    │   ├── Hero.tsx          # Seção principal da página inicial
    │   ├── Simulator.tsx     # Formulário de simulação
    │   ├── CostResult.tsx    # Resultado e gastos por categoria
    │   ├── CityCard.tsx      # Cards de cidades em destaque
    │   ├── FeatureCard.tsx   # Cards de funcionalidades
    │   ├── BrazilMap.tsx     # Mapa do Brasil
    │   ├── AuthLayout.tsx    # Layout compartilhado de login e cadastro
    │   ├── AuthField.tsx     # Campo de formulário com ícone e validação
    │   ├── AuthBackdrop.tsx  # Fundo da cidade ao entardecer
    │   ├── AuthParts.tsx     # Divisor "ou", botão do Google e avisos
    │   ├── Logo.tsx          # Logo do VivaBem
    │   └── GoogleIcon.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Login.tsx
    │   └── Register.tsx
    ├── data/
    │   ├── cities.ts         # Cidades, custos-base e fatores (dados fictícios)
    │   ├── calculate.ts      # Lógica de cálculo da estimativa
    │   └── auth.ts           # Autenticação de demonstração
    ├── lib/
    │   └── router.ts         # Roteador baseado em hash
    └── types/
        └── index.ts          # Tipos compartilhados
```

## 🧮 Como o cálculo funciona

A estimativa parte de um **custo-base de uma pessoa solteira em São Paulo** e aplica fatores de **cidade** e de **perfil**. Todos os valores são arredondados para a dezena mais próxima.

```text
moradia   = aluguel da cidade para o tipo de moradia × fator de moradia do perfil
demais    = custo-base da categoria × fator da cidade × fator de custo de vida do perfil
total     = soma de todas as categorias
```

**Custos-base (sem moradia)**

| Categoria | Valor-base |
| --- | ---: |
| Alimentação | R$ 650 |
| Transporte | R$ 280 |
| Contas (energia e água) | R$ 250 |
| Internet e celular | R$ 120 |
| Lazer | R$ 200 |
| Outros | R$ 120 |

**Fatores por perfil**

| Perfil | Custo de vida | Moradia |
| --- | :---: | :---: |
| Estudante | 0,80 | 0,85 |
| Pessoa solteira | 1,00 | 1,00 |
| Casal | 1,70 | 1,15 |
| Família | 2,60 | 1,40 |
| Aposentado | 0,90 | 1,00 |

**Cidades disponíveis na versão atual**

São Paulo (SP), Curitiba (PR), Belo Horizonte (MG), Rio de Janeiro (RJ), Porto Alegre (RS), Recife (PE) e Florianópolis (SC).

Para adicionar uma cidade ou trocar os dados por uma API, edite `src/data/cities.ts` mantendo o formato `City[]`.

## 🗺️ Roadmap

### ✅ Versão 1.0 — MVP

- [x] Landing page
- [x] Tela de login
- [x] Tela de cadastro
- [x] Seleção de cidade
- [x] Seleção de perfil
- [x] Seleção de tipo de moradia
- [x] Cálculo de estimativa
- [x] Exibição dos gastos
- [x] Interface responsiva

### 🔄 Versão 2.0

- [ ] Comparação entre cidades
- [ ] Gráficos mais completos
- [ ] Histórico de simulações
- [ ] Sistema de favoritos
- [ ] Perfil do usuário
- [ ] Mais cidades e bairros

### 🚀 Versão 3.0

- [ ] Banco de dados real
- [ ] Autenticação com backend (incluindo login com Google)
- [ ] Dados atualizados automaticamente
- [ ] Mapa interativo do Brasil
- [ ] Comparação por bairros
- [ ] Sistema de recomendação de cidades
- [ ] Estimativa baseada na renda do usuário
- [ ] Painel administrativo

## ⚠️ Sobre os dados

Os valores da versão atual são **dados fictícios, usados apenas para demonstração**. As estimativas **não representam** o custo real de vida de nenhuma cidade. Em versões futuras, o projeto poderá utilizar fontes de dados públicas e atualizadas para melhorar a precisão.

## 🎓 Contexto acadêmico

O VivaBem é um **projeto pessoal e acadêmico**, criado para aplicar na prática conceitos de desenvolvimento web, criação de interfaces, organização de componentes, manipulação de dados e experiência do usuário. Além do aprendizado técnico, a ideia é construir uma solução útil para quem está planejando uma mudança de cidade.

## 👨‍💻 Autor

**José Gonçalves Pereira Neto**

[![GitHub](https://img.shields.io/badge/GitHub-JoseGoncalves0-181717?style=flat-square&logo=github)](https://github.com/JoseGoncalves0)


---

<div align="center">

Feito com 💚 por [José Gonçalves](https://github.com/JoseGoncalves0)

</div>
