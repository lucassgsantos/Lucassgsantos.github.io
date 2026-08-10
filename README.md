# Portfólio — Lucas Pinheiro

Portfólio de Lucas Pinheiro construído com **Next.js**, **TypeScript** e **Tailwind CSS**. O site é exportado estaticamente e reúne aplicações web, APIs, automações e projetos de dados.

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

## Estrutura

```text
src/
  app/          rotas, layout e estilos globais
  components/   componentes reutilizáveis da interface
  data/         conteúdo tipado dos projetos
```

## Projetos destacados

AcessaMapa, Futebol Dashboard, Auditor de Documentos, Caderno de Receitas, CineSearch e Sales API.
