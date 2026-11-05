  const ICONS = {
    kart: `<svg viewBox="0 0 100 70" fill="none" stroke="#36373a" stroke-width="3"><circle cx="22" cy="52" r="12"/><circle cx="78" cy="52" r="12"/><path d="M22 52h30l10-28h20"/><rect x="34" y="30" width="20" height="8" rx="2" fill="#b82325" stroke="none"/></svg>`,
    capacete: `<svg viewBox="0 0 100 90" fill="none" stroke="#36373a" stroke-width="3"><path d="M15 55a35 35 0 0 1 70 0v10H15z"/><path d="M15 60h70v6H15z" fill="#b82325" stroke="none"/></svg>`,
    pneu: `<svg viewBox="0 0 100 100" fill="none" stroke="#36373a" stroke-width="4"><circle cx="50" cy="50" r="38"/><circle cx="50" cy="50" r="16" fill="#93a2a7" stroke="none"/></svg>`,
    indumentaria: `<svg viewBox="0 0 100 100" fill="none" stroke="#36373a" stroke-width="3"><path d="M35 15 20 28v15h10v42h40V43h10V28L65 15l-5 8H40z" fill="#b82325" fill-opacity=".15"/></svg>`,
    eletronica: `<svg viewBox="0 0 100 80" fill="none" stroke="#36373a" stroke-width="3"><rect x="10" y="15" width="80" height="50" rx="6"/><path d="M30 65v10h40V65"/><circle cx="50" cy="40" r="14" fill="#927768" stroke="none"/></svg>`,
    oficina: `<svg viewBox="0 0 100 100" fill="none" stroke="#36373a" stroke-width="4"><path d="M60 20 40 40 20 60l-5 20 20-5 20-20 20-20z"/></svg>`
  };

  const LABELS = {
    kart: "Karts & Peças", capacete: "Capacetes", pneu: "Pneus & Rodas",
    indumentaria: "Indumentária", eletronica: "Cronometragem", oficina: "Oficina & Ferramentas"
  };
  const CATS = Object.keys(LABELS);
  const HERO = {
    todos: ["Toda a pista começa aqui", "Equipamentos, peças e tecnologia para você acelerar com segurança."],
    kart: ["Karts & peças de competição", "Chassis, componentes e upgrades para uma pilotagem mais rápida e confiável."],
    capacete: ["Proteção para ir além", "Capacetes homologados, visores e acessórios para todos os níveis."],
    pneu: ["Adesão em cada curva", "Pneus, rodas, câmaras e soluções para qualquer condição de pista."],
    indumentaria: ["Vista o espírito da corrida", "Macacões, luvas, botas e proteção homologada para sua equipe."],
    eletronica: ["Milésimos fazem a diferença", "Cronômetros, transponders, câmeras e telemetria para evoluir cada volta."],
    oficina: ["Prepare-se para vencer", "Ferramentas, equipamentos de bancada e manutenção para sua oficina."],
    ofertas: ["Preços que aceleram", "Aproveite ofertas especiais em equipamentos selecionados. Estoque limitado."]
  };

  const NAMES = {
    kart: ["Chassi CRG Competição", "Kit corrente e coroa reforçado", "Assento anatômico Kevlar", "Radiador de kart", "Escapamento homologado", "Volante de alumínio 320mm"],
    capacete: ["Capacete integral SA2020", "Capacete kart infantil", "Viseira antiembaçante", "Capacete carbono", "Forro termorregulável", "Kit balaclava premium"],
    pneu: ["Jogo pneus slick traseiro", "Pneu chuva dianteiro", "Roda aro 5 forjada", "Câmara reforçada", "Pneu misto de treino", "Jogo de roda leve"],
    indumentaria: ["Macacão ignífugo nível 2", "Luva piloto tato fino", "Bota de corrida em couro", "Balaclava anti-chamas", "Colete proteção costelas", "Luvas de chuva kart"],
    eletronica: ["Cronômetro de volta GPS", "Transponder de cronometragem", "Intercom kit equipe", "Câmera onboard 4K", "Central eletrônica", "Módulo de telemetria"],
    oficina: ["Kit chaves combinadas", "Torquímetro de precisão", "Macaco hidráulico", "Compressor portátil 12V", "Suporte de bancada", "Carrinho para oficina"]
  };

  const money = value => value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function makeProduct(cat, i) {
    const price = 89 + ((i * 137 + cat.length * 21) % 1900);
    const hasDiscount = i % 3 !== 1;
    const old = hasDiscount ? Math.round(price * 1.22 / 5) * 5 : null;
    return { cat, title: NAMES[cat][i % NAMES[cat].length], price, old,
      rating: (4 + (i % 9) / 10).toFixed(1), reviews: 18 + i * 37,
      discount: old ? Math.round((old - price) / old * 100) : null };
  }

  const catalog = [];
  CATS.forEach(cat => { for (let i = 0; i < 6; i++) catalog.push(makeProduct(cat, i)); });

  function cardHTML(p) {
    return `<article class="card" data-cat="${p.cat}">
      <div class="card-media">
        ${p.discount ? `<span class="badge">-${p.discount}%</span>` : ""}
        <button class="fav" aria-label="Favoritar ${p.title}" data-favorite><svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>
        ${ICONS[p.cat]}
      </div>
      <div class="card-body">
        <div class="card-cat">${LABELS[p.cat]}</div><div class="card-title">${p.title}</div>
        <div class="stars"><span class="fill">★★★★★</span> <span>${p.rating} (${p.reviews})</span></div>
        <div class="price-row">${p.old ? `<div class="price-old">R$ ${money(p.old)}</div>` : ""}<div class="price"><small>R$</small> ${money(p.price)}</div><div class="installment">em até 6x sem juros</div></div>
        <button class="add-btn" data-add>Adicionar ao carrinho</button>
      </div>
    </article>`;
  }

  const deals = catalog.filter(p => p.discount).slice(0, 8);
  document.getElementById("dealsRow").innerHTML = deals.map(p => `<article class="deal-card card"><div class="deal-timer"><span>Termina em <b>04:12:36</b></span></div><div class="card-media"><span class="badge">-${p.discount}%</span><button class="fav" data-favorite aria-label="Favoritar"><svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>${ICONS[p.cat]}</div><div class="card-body"><div class="card-cat">${LABELS[p.cat]}</div><div class="card-title">${p.title}</div><div class="price-row"><div class="price-old">R$ ${money(p.old)}</div><div class="price"><small>R$</small> ${money(p.price)}</div></div><button class="add-btn" data-add>Adicionar</button></div></article>`).join("");

  let activeCategory = "todos";
  let cartCount = 0;
  let searchTerm = "";

  function productsFor(category, query = "") {
    let products = category === "todos" ? [...catalog] : category === "ofertas" ? catalog.filter(p => p.discount) : catalog.filter(p => p.cat === category);
    if (query) products = products.filter(p => `${p.title} ${LABELS[p.cat]}`.toLowerCase().includes(query.toLowerCase()));
    return products;
  }

  function selectCategory(category) {
    activeCategory = category;
    document.querySelectorAll("#catList button[data-cat]").forEach(button => button.classList.toggle("active", button.dataset.cat === category));
    document.querySelectorAll(".tile[data-cat]").forEach(tile => tile.classList.toggle("active", tile.dataset.cat === category));
    const hero = HERO[category];
    document.querySelector(".hero h1").innerHTML = hero[0].replace(" ", "<br>");
    document.querySelector(".hero p").textContent = hero[1];
    searchTerm = "";
    document.getElementById("searchInput").value = "";
    renderCatalog();
    document.getElementById("recommended").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderCatalog() {
    const products = productsFor(activeCategory, searchTerm);
    document.getElementById("recTitle").textContent = searchTerm ? `Resultados para “${searchTerm}”` : activeCategory === "todos" ? "Mais vendidos" : activeCategory === "ofertas" ? "Todas as ofertas" : LABELS[activeCategory];
    document.getElementById("recSub").textContent = `${products.length} produtos encontrados`;
    document.getElementById("recGrid").innerHTML = products.length ? products.slice(0, 10).map(cardHTML).join("") : `<div class="empty-state"><strong>Nenhum produto encontrado</strong><span>Tente buscar por outro nome ou categoria.</span></div>`;
  }

  document.getElementById("catList").addEventListener("click", e => {
    const button = e.target.closest("button[data-cat]");
    if (button) selectCategory(button.dataset.cat);
  });
  document.querySelector(".tiles").addEventListener("click", e => {
    const tile = e.target.closest(".tile[data-cat]");
    if (tile) { e.preventDefault(); selectCategory(tile.dataset.cat); }
  });

  document.body.addEventListener("click", e => {
    if (e.target.closest("[data-add]")) { cartCount++; document.getElementById("cartCount").textContent = cartCount; }
    const favorite = e.target.closest("[data-favorite]");
    if (favorite) favorite.classList.toggle("active");
  });

  const search = document.getElementById("searchInput");
  search.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    searchTerm = e.target.value.trim();
    renderCatalog();
    document.getElementById("recommended").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("moreGrid").innerHTML = [...catalog].sort(() => Math.random() - .5).slice(0, 10).map(cardHTML).join("");
  renderCatalog();
