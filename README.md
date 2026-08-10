# Portfólio — Lucas Pinheiro

Portfólio de Lucas Pinheiro construído com **Next.js**, **TypeScript** e **Tailwind CSS**. O site é exportado estaticamente e reúne aplicações web, APIs, automações e projetos de dados.

## Site

[Acesse o portfólio publicado](https://lucasppinheiro.github.io/portfolio/)

## Objetivo

Apresentar projetos full stack, APIs e automações, com contexto técnico suficiente para facilitar a avaliação por recrutadores e pessoas desenvolvedoras.

## Destaques

- Interface responsiva e navegação por seções.
- Projetos apresentados com contexto, stack e links para demonstração ou código.
- Export estático otimizado para publicação no GitHub Pages.

## Stack

- Next.js 16 com App Router e export estático
- React 19 e TypeScript
- Tailwind CSS 4
- Lucide React
- GitHub Pages via workflow manual/automático no push da branch `main`

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
```

O resultado é gerado em `out/`. Para o GitHub Pages, a configuração aplica automaticamente o caminho `/portfolio` durante o build do workflow.

## Deploy

O deploy é executado pelo GitHub Actions a cada push na branch `main` e publica a versão estática no [GitHub Pages](https://lucasppinheiro.github.io/portfolio/).

## Estrutura

```text
src/
  app/          rotas, layout e estilos globais
  components/   componentes reutilizáveis da interface
  data/         conteúdo tipado dos projetos
```

## Projetos em destaque

- [AcessaMapa](https://acessamapa.onrender.com) — plataforma colaborativa de acessibilidade urbana. [Código](https://github.com/lucasppinheiro/mapa-acessibilidade)
- [Futebol Dashboard](https://futebol-dashboard.vercel.app/) — dashboard do Brasileirão com atualização automatizada. [Código](https://github.com/lucasppinheiro/futebol-dashboard)
- [Auditor de Documentos](https://auditor-documentos-ia.vercel.app) — revisão documental com regras explicáveis e proveniência por campo. [Código](https://github.com/lucasppinheiro/auditor-documentos-ia)
- [Caderno de Receitas](https://lucasppinheiro.github.io/caderno-de-receitas/) — PWA acessível com busca, filtros e suporte offline. [Código](https://github.com/lucasppinheiro/caderno-de-receitas)
- [CineSearch](https://github.com/lucasppinheiro/cinesearch) — aplicação de filmes e séries com API .NET 8 e interface React.
- [Sales API](https://github.com/lucasppinheiro/sales-api) — API REST em Java e Spring Boot para registros e indicadores de vendas.
