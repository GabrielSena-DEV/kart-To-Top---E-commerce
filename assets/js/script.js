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
    return `<article class="card" data-cat="${p.cat}" data-product="${p.title}">
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
  document.getElementById("dealsRow").innerHTML = deals.map(p => `<article class="deal-card card" data-product="${p.title}"><div class="deal-timer"><span>Termina em <b>04:12:36</b></span></div><div class="card-media"><span class="badge">-${p.discount}%</span><button class="fav" data-favorite aria-label="Favoritar"><svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>${ICONS[p.cat]}</div><div class="card-body"><div class="card-cat">${LABELS[p.cat]}</div><div class="card-title">${p.title}</div><div class="price-row"><div class="price-old">R$ ${money(p.old)}</div><div class="price"><small>R$</small> ${money(p.price)}</div></div><button class="add-btn" data-add>Adicionar</button></div></article>`).join("");

  let activeCategory = "todos";
  let cartCount = 0;
  let searchTerm = "";
  const favorites = new Set();
  const cart = new Map();

  function productsFor(category, query = "") {
    let products = category === "todos" ? [...catalog] : category === "ofertas" ? catalog.filter(p => p.discount) : catalog.filter(p => p.cat === category);
    if (query) products = products.filter(p => `${p.title} ${LABELS[p.cat]}`.toLowerCase().includes(query.toLowerCase()));
    return products;
  }

  const categoryNames = { todos: "Todos", kart: "Karts & Peças", capacete: "Capacetes", pneu: "Pneus & Rodas", indumentaria: "Indumentária", eletronica: "Cronometragem", oficina: "Oficina & Ferramentas", ofertas: "Ofertas" };

  function renderCategoryPage(category) {
    let products = productsFor(category);
    const sort = document.getElementById("sortProducts")?.value || "featured";
    if (sort === "low") products.sort((a, b) => a.price - b.price);
    if (sort === "high") products.sort((a, b) => b.price - a.price);
    document.getElementById("categoryPageTitle").textContent = categoryNames[category];
    document.getElementById("categoryCount").textContent = `${products.length} produto${products.length === 1 ? "" : "s"}`;
    document.getElementById("categoryGrid").innerHTML = products.length ? products.map(cardHTML).join("") : `<div class="empty-state"><strong>Nenhum produto encontrado</strong><span>Escolha outra categoria.</span></div>`;
  }

  function showAppPage(page) {
    document.getElementById("storeHome").hidden = page !== "home";
    document.getElementById("categoryPage").hidden = page !== "category";
    document.getElementById("infoPage").hidden = page !== "info";
    document.getElementById("productPage").hidden = page !== "product";
    const sharedSections = [document.querySelector(".newsletter"), document.querySelector("footer")];
    sharedSections.forEach(section => {
      section.toggleAttribute("hidden", page !== "home");
      section.hidden = page !== "home";
    });
  }

  function openCategoryPage(category) {
    activeCategory = category;
    searchTerm = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("categorySelect").value = category;
    document.querySelectorAll("#catList button[data-cat]").forEach(button => button.classList.toggle("active", button.dataset.cat === category));
    document.querySelectorAll(".tile[data-cat]").forEach(tile => tile.classList.toggle("active", tile.dataset.cat === category));
    renderCategoryPage(category);
    showAppPage("category");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectCategory(category) {
    openCategoryPage(category);
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
    const card = e.target.closest(".card[data-product]");
    const title = card?.dataset.product;

    if (!e.target.closest("button") && card && title) openProduct(title);

    if (e.target.closest("[data-add]") && title) {
      cart.set(title, (cart.get(title) || 0) + 1);
      updateCart();
    }

    const favorite = e.target.closest("[data-favorite]");
    if (favorite && title) {
      favorites.has(title) ? favorites.delete(title) : favorites.add(title);
      syncFavoriteButtons();
      renderFavorites();
    }

    const removeFavorite = e.target.closest("[data-remove-favorite]");
    if (removeFavorite) {
      favorites.delete(removeFavorite.dataset.removeFavorite);
      syncFavoriteButtons();
      renderFavorites();
    }

    const cartAction = e.target.closest("[data-cart-action]");
    if (cartAction) {
      const productTitle = cartAction.dataset.cartAction;
      if (cartAction.classList.contains("remove")) cart.delete(productTitle);
      else cart.set(productTitle, Math.max(0, (cart.get(productTitle) || 0) + (cartAction.dataset.delta === "up" ? 1 : -1)));
      if (cart.get(productTitle) === 0) cart.delete(productTitle);
      updateCart();
    }
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

  function syncFavoriteButtons() {
    document.querySelectorAll(".card[data-product]").forEach(card => {
      card.querySelector("[data-favorite]")?.classList.toggle("active", favorites.has(card.dataset.product));
    });
  }

  function panelItem(product, actions) {
    return `<article class="panel-item">
      <div class="panel-item-icon">${ICONS[product.cat]}</div>
      <div><div class="panel-item-title">${product.title}</div><div class="panel-item-price">R$ ${money(product.price)}</div>${actions}</div>
    </article>`;
  }

  function renderFavorites() {
    const list = [...favorites].map(title => catalog.find(product => product.title === title)).filter(Boolean);
    document.getElementById("favoritesList").innerHTML = list.length ? list.map(product => panelItem(product,
      `<button class="item-remove" type="button" data-remove-favorite="${product.title}" aria-label="Remover dos favoritos">&times;</button>`
    )).join("") : `<div class="panel-empty"><strong>Sua lista está vazia</strong><span>Escolha um produto com o coração para guardar aqui.</span></div>`;
  }

  function updateCart() {
    cartCount = [...cart.values()].reduce((total, quantity) => total + quantity, 0);
    document.getElementById("cartCount").textContent = cartCount;
    const products = [...cart.entries()].map(([title, quantity]) => ({ product: catalog.find(item => item.title === title), quantity })).filter(item => item.product);
    document.getElementById("cartList").innerHTML = products.length ? products.map(({ product, quantity }) => panelItem(product,
      `<div class="cart-quantity"><button type="button" data-cart-action="${product.title}" data-delta="down">−</button><span>${quantity}</span><button type="button" data-cart-action="${product.title}" data-delta="up">+</button><button class="item-remove remove" type="button" data-cart-action="${product.title}" aria-label="Remover do carrinho">&times;</button></div>`
    )).join("") : `<div class="panel-empty"><strong>Seu carrinho está vazio</strong><span>Adicione equipamentos e eles aparecerão aqui.</span></div>`;
    const total = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    document.getElementById("cartSummary").innerHTML = products.length ? `<div class="cart-total"><span>Total</span><span>R$ ${money(total)}</span></div><button class="panel-primary" type="button" data-open-checkout>Ir para o checkout</button>` : "";
    renderFavorites();
  }

  function openScreen(id) {
    const screen = document.getElementById(id);
    screen.classList.add("open");
    screen.setAttribute("aria-hidden", "false");
    document.body.classList.add("screen-open");
  }

  function closeScreens() {
    document.querySelectorAll(".screen-overlay.open").forEach(screen => {
      screen.classList.remove("open");
      screen.setAttribute("aria-hidden", "true");
    });
    document.body.classList.remove("screen-open");
  }

  document.getElementById("categorySelect").addEventListener("change", e => openCategoryPage(e.target.value));
  document.getElementById("sortProducts").addEventListener("change", () => renderCategoryPage(document.getElementById("categorySelect").value));
  document.getElementById("backHome").addEventListener("click", () => {
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("homeCategorySelect").addEventListener("change", e => {
    activeCategory = e.target.value;
    searchTerm = "";
    renderCatalog();
  });

  let productOrigin = "home";

  function openProduct(title) {
    const product = catalog.find(item => item.title === title);
    if (!product) return;
    productOrigin = document.getElementById("categoryPage").hidden ? "home" : "category";
    document.getElementById("productPageContent").innerHTML = `<section class="market-product-main"><div class="product-gallery"><div class="product-gallery-main">${ICONS[product.cat]}</div><div class="gallery-thumbs"><button class="active" type="button">${ICONS[product.cat]}</button><button type="button">${ICONS[product.cat]}</button><button type="button">${ICONS[product.cat]}</button></div></div><div class="product-information"><span class="product-detail-category">Novo · ${LABELS[product.cat]}</span><h1 id="productDetailTitle">${product.title}</h1><div class="product-rating"><span>★★★★★</span> ${product.rating} (${product.reviews} avaliações)</div><div class="market-price"><small>R$</small> ${money(product.price)}</div><div class="market-installment">em até 6x de R$ ${money(product.price / 6)} sem juros</div><p class="product-detail-copy">Equipamento selecionado para pilotos amadores e profissionais, com estrutura voltada a segurança, desempenho e facilidade de manutenção.</p><div class="product-benefit"><strong>Chegará grátis</strong><span>entrega estimada para toda região Sudeste</span></div><div class="product-benefit"><strong>Devolução grátis</strong><span>até 30 dias após receber o produto</span></div></div></section><aside class="market-buy-box"><span class="stock-status">Estoque disponível</span><div class="buy-quantity">Quantidade: <strong>1 unidade</strong></div><button class="buy-primary" type="button" data-detail-add="${product.title}">Adicionar ao carrinho</button><button class="buy-secondary" type="button" data-detail-buy="${product.title}">Comprar agora</button><p>Compra demonstrativa · pagamento seguro</p></aside>`;
    showAppPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("productPageContent").addEventListener("click", e => {
    const add = e.target.closest("[data-detail-add]");
    const buy = e.target.closest("[data-detail-buy]");
    if (!add && !buy) return;
    const title = add ? add.dataset.detailAdd : buy.dataset.detailBuy;
    cart.set(title, (cart.get(title) || 0) + 1);
    updateCart();
    if (buy) document.getElementById("cartOpen").click();
  });

  document.getElementById("productBack").addEventListener("click", () => showAppPage(productOrigin));

  document.querySelectorAll(".brand").forEach(brand => brand.addEventListener("click", e => {
    e.preventDefault();
    closeScreens();
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));

  let heroIndex = 0;
  const heroSlides = [...document.querySelectorAll(".hero-slide")];
  function showHero(index) {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, i) => slide.classList.toggle("active", i === heroIndex));
    document.querySelectorAll(".hero-dot").forEach((dot, i) => dot.classList.toggle("active", i === heroIndex));
  }
  heroSlides.forEach((_, index) => document.getElementById("heroDots").insertAdjacentHTML("beforeend", `<button class="hero-dot${index === 0 ? " active" : ""}" type="button" aria-label="Banner ${index + 1}"></button>`));
  document.getElementById("heroDots").addEventListener("click", e => { const dot = e.target.closest(".hero-dot"); if (dot) showHero([...dot.parentElement.children].indexOf(dot)); });
  document.getElementById("heroPrev").addEventListener("click", () => showHero(heroIndex - 1));
  document.getElementById("heroNext").addEventListener("click", () => showHero(heroIndex + 1));
  setInterval(() => showHero(heroIndex + 1), 6000);
  document.querySelectorAll("[data-carousel-category]").forEach(button => button.addEventListener("click", () => openCategoryPage(button.dataset.carouselCategory)));

  document.body.addEventListener("click", e => {
    if (!e.target.closest("[data-open-checkout]")) return;
    closeScreens();
    const products = [...cart.entries()].map(([title, quantity]) => ({ product: catalog.find(item => item.title === title), quantity })).filter(item => item.product);
    document.getElementById("checkoutItems").innerHTML = products.map(({ product, quantity }) => `<div class="checkout-item"><span>${quantity}x ${product.title}</span><strong>R$ ${money(product.price * quantity)}</strong></div>`).join("");
    document.getElementById("checkoutTotal").textContent = `R$ ${money(products.reduce((sum, item) => sum + item.product.price * item.quantity, 0))}`;
    openScreen("checkoutScreen");
  });
  document.getElementById("checkoutClose").addEventListener("click", closeScreens);
  document.getElementById("checkoutScreen").addEventListener("click", e => { if (e.target.id === "checkoutScreen") closeScreens(); });
  document.getElementById("checkoutForm").addEventListener("submit", e => { e.preventDefault(); closeScreens(); alert("Pedido de demonstração registrado com sucesso."); });

  const infoGroups = {
    institucional: {
      title: "Institucional",
      topics: {
        sobre: ["Sobre o Kart to Top", "A Kart to Top reúne equipamentos, peças e soluções para automobilismo e kartismo em uma experiência simples. Esta área apresenta um modelo de como seriam as informações institucionais da empresa."],
        trabalhe: ["Trabalhe conosco", "Veja oportunidades, envie seu currículo e acompanhe vagas para diferentes áreas da Kart to Top. Em uma versão futura, candidatos poderão criar perfis e acompanhar processos seletivos."],
        sustentabilidade: ["Sustentabilidade", "Nossa proposta valoriza embalagens responsáveis, parceiros conscientes e práticas de descarte adequadas. Projetos futuros poderão apresentar metas ambientais e relatórios de impacto."],
        imprensa: ["Imprensa", "Esta página reúne comunicados, materiais de marca e informações de contato para imprensa. Um canal futuro permitirá solicitar entrevistas e baixar kits oficiais."]
      }
    },
    ajuda: {
      title: "Ajuda",
      topics: {
        central: ["Central de ajuda", "Encontre orientações sobre compras, pagamentos, entregas, trocas e uso da sua conta. Esta tela demonstra como uma central de atendimento poderá organizar os principais assuntos."],
        trocas: ["Trocas e devoluções", "O cliente poderá consultar prazos, requisitos e status das solicitações de troca ou devolução. Produtos devem permanecer sem uso e com os itens originais da embalagem."],
        rastrear: ["Rastrear pedido", "Digite o código do pedido para acompanhar a preparação, coleta e entrega dos produtos. Nesta demonstração, o rastreamento não está conectado a uma transportadora real."],
        fale: ["Fale conosco", "Nos canais oficiais de atendimento poderão ser enviados pedidos, dúvidas e sugestões. Em uma próxima etapa, esta área poderá incluir chat e formulário de contato."]
      }
    },
    conta: {
      title: "Minha conta",
      topics: {
        pedidos: ["Meus pedidos", "Consulte pedidos realizados, acompanhe entregas e acesse notas fiscais. Também poderá haver detalhes de pagamento e opção de solicitar suporte."],
        favoritos: ["Lista de favoritos", "Revise os equipamentos que você marcou com o coração. Os favoritos ajudam a encontrar novamente produtos de interesse entre as categorias da loja."],
        vender: ["Vender no Kart to Top", "Conheça como lojistas e fabricantes poderão anunciar produtos na plataforma. A área futura incluirá cadastro de vendedor, estoque e acompanhamento das vendas."],
        cupons: ["Cupons", "Gerencie cupons disponíveis, códigos promocionais e benefícios da sua conta. Na versão completa, cada cupom informará regras de validade e categorias elegíveis."]
      }
    },
    politicas: {
      title: "Políticas",
      topics: {
        termos: ["Termos de uso", "Os termos de uso definem as regras para navegar e realizar compras na Kart to Top. A versão completa apresentará responsabilidades da plataforma, do usuário e das partes envolvidas."],
        privacidade: ["Política de privacidade", "Esta política explica como dados poderão ser utilizados para oferecer e melhorar os serviços. Nenhum dado real é armazenado nesta demonstração sem banco de dados."],
        entrega: ["Política de entrega", "Os prazos e custos dependem do endereço, da modalidade de envio e da disponibilidade do produto. A área poderá mostrar opções de retirada e acompanhamento de transportadoras."],
        seguranca: ["Segurança homologada", "Equipamentos de proteção apresentados na loja devem possuir características e certificações adequadas ao uso. Consulte sempre os dados do fabricante e as exigências da modalidade esportiva."]
      }
    }
  };

  function openInfoPage(group, topic) {
    const section = infoGroups[group];
    if (!section) return;
    const topicKey = topic || Object.keys(section.topics)[0];
    const selected = section.topics[topicKey];
    if (!selected) return;
    showAppPage("info");
    document.getElementById("infoPageTitle").textContent = section.title;
    document.getElementById("infoTopicKicker").textContent = section.title;
    document.getElementById("infoTopicTitle").textContent = selected[0];
    document.getElementById("infoTopicText").innerHTML = `<p>${selected[1]}</p>`;
    document.getElementById("infoMenu").innerHTML = Object.entries(section.topics).map(([key, value]) => `<button type="button" data-info-menu="${group}" data-info-menu-topic="${key}" class="${key === topicKey ? "active" : ""}">${value[0]}</button>`).join("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll("[data-info-group]").forEach(link => link.addEventListener("click", e => {
    e.preventDefault();
    openInfoPage(link.dataset.infoGroup, link.dataset.infoTopic);
  }));
  document.getElementById("infoMenu").addEventListener("click", e => {
    const button = e.target.closest("[data-info-menu-topic]");
    if (button) openInfoPage(button.dataset.infoMenu, button.dataset.infoMenuTopic);
  });
  document.getElementById("infoBackHome").addEventListener("click", () => {
    document.getElementById("infoPage").hidden = true;
    document.getElementById("storeHome").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("loginOpen").addEventListener("click", () => openScreen("loginScreen"));
  document.getElementById("favoritesOpen").addEventListener("click", () => openScreen("favoritesScreen"));
  document.getElementById("cartOpen").addEventListener("click", () => openScreen("cartScreen"));
  document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", closeScreens));
  document.querySelectorAll(".screen-overlay").forEach(screen => screen.addEventListener("click", e => { if (e.target === screen) closeScreens(); }));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeScreens(); });
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    closeScreens();
    document.getElementById("loginOpen").lastChild.textContent = " Olá, piloto";
    document.getElementById("loginOpen").classList.add("logged-in");
  });

  renderFavorites();
  updateCart();
