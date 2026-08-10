export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  repository: string;
  demo?: string;
};

export const projects: Project[] = [
  { name: "AcessaMapa", category: "Produto full stack", description: "Plataforma colaborativa para consultar e contribuir com informações de acessibilidade urbana, com filtros, moderação e permissões por perfil.", stack: ["React", "Express", "MongoDB", "JWT"], repository: "https://github.com/lucasppinheiro/mapa-acessibilidade", demo: "https://acessamapa.onrender.com" },
  { name: "Futebol Dashboard", category: "Dados e automação", description: "Dashboard editorial do Brasileirão com dados da CBF, gráficos, comparador de clubes e atualização automatizada com validação.", stack: ["Python", "Flask", "Chart.js", "CI/CD"], repository: "https://github.com/lucasppinheiro/futebol-dashboard", demo: "https://futebol-dashboard.vercel.app/" },
  { name: "Auditor de Documentos", category: "IA aplicada a GRC", description: "Ferramenta de apoio à revisão documental com parser determinístico, regras explicáveis, proveniência por campo e dados sintéticos.", stack: ["Next.js", "TypeScript", "Vitest", "Playwright"], repository: "https://github.com/lucasppinheiro/auditor-documentos-ia", demo: "https://auditor-documentos-ia.vercel.app" },
  { name: "Caderno de Receitas", category: "PWA acessível", description: "Catálogo de receitas brasileiras com busca, filtros, funcionamento offline e testes de acessibilidade.", stack: ["React", "TypeScript", "PWA", "axe"], repository: "https://github.com/lucasppinheiro/caderno-de-receitas", demo: "https://lucasppinheiro.github.io/caderno-de-receitas/" },
  { name: "CineSearch", category: "Aplicação web", description: "Busca e visualização de filmes e séries usando TMDB, com API .NET 8, Swagger e interface React com rotas de detalhes.", stack: [".NET 8", "C#", "React", "Docker"], repository: "https://github.com/lucasppinheiro/cinesearch" },
  { name: "Sales API", category: "API REST", description: "API para registrar vendas e consolidar desempenho de vendedores por período, organizada em camadas e coberta por testes.", stack: ["Java", "Spring Boot", "JPA", "JUnit"], repository: "https://github.com/lucasppinheiro/sales-api" },
];
