# 🏎️ Kart to Top

**Kart to Top** é uma interface front-end para um e-commerce especializado em equipamentos de automobilismo e kartismo. O projeto simula uma loja virtual completa, oferecendo desde karts e peças até vestuário, eletrônica e ferramentas de oficina.

O desenvolvimento foi focado na criação de um catálogo dinâmico, responsividade e em uma experiência de usuário (UX) fluida utilizando apenas tecnologias nativas da web (Vanilla).

## 🚀 Funcionalidades

- **Catálogo Dinâmico:** Os cards de produtos (com preços, descontos e avaliações) são gerados e injetados dinamicamente no DOM através de JavaScript a partir de dados simulados (mock).
- **Filtro Inteligente de Categorias:** Navegação entre categorias (Capacetes, Pneus, Indumentária, etc.) que memoriza o estado das "buscas recentes" para atualizar a seção de recomendações do usuário.
- **Busca Simulada:** Barra de pesquisa que reage a termos (ex: "capacete", "pneu") pressionando o botão `Enter`.
- **Ofertas Relâmpago:** Seção de destaque filtrando produtos com mais de 20% de desconto, acompanhada de um timer visual simulado.
- **Carrinho Interativo:** O contador do carrinho de compras é atualizado em tempo real quando o usuário clica em "Adicionar ao carrinho".
- **Design Responsivo (Mobile First):** Layout adaptável para desktops, tablets e smartphones utilizando CSS Grid, Flexbox e Media Queries.
- **UI/UX Moderna:** Ícones inline em SVG, animações suaves (`hover`, ticker tape no topo da página) e padronização visual com Variáveis CSS.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Estilização (Grid, Flexbox, Custom Properties/Variables e `@keyframes`).
- **JavaScript (ES6+):** Lógica de renderização de componentes, manipulação de arrays/objetos, e delegação de eventos (Event Delegation) no DOM.

## 📁 Estrutura de Arquivos

```text
/
├── index.html   # Estrutura principal, cabeçalho, rodapé e containers.
├── style.css    # Estilos globais, sistema de cores e responsividade.
└── script.js    # Geração dos produtos, lógica de filtros e eventos.