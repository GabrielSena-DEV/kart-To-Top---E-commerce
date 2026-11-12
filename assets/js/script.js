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

  const kartProducts = [
    { id: "kart-001", name: "Kart de competição CRG", price: 12490, imageUrl: "https://images.unsplash.com/photo-1594507905944-a2c8c4050850?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: "kart-002", name: "Kit corrente e coroa reforçado", price: 389.9, imageUrl: "https://images.unsplash.com/photo-1684166472907-e17eec7e9475?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: "kart-003", name: "Assento anatômico Kevlar", price: 549.9, imageUrl: "https://images.unsplash.com/photo-1779263449928-575a82e73c53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: "kart-004", name: "Radiador de kart", price: 1290, imageUrl: "https://images.unsplash.com/photo-1760804462190-82832c8eb582?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: "kart-005", name: "Escapamento homologado", price: 779.9, imageUrl: "https://images.unsplash.com/photo-1771252297207-eca148228341?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: "kart-006", name: "Volante de alumínio 320mm", price: 229.9, imageUrl: "https://images.unsplash.com/photo-1700246070061-11fecfe94ffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }
  ];

  const PRODUCT_IMAGES = {
    capacete: [
      "photo-1658245142848-905b755354b3", "photo-1611004061856-ccc3cbe944b2",
      "photo-1770349694206-5d7adcbe9a8b", "photo-1761335284674-0fb01d5bb4cd",
      "photo-1537735107257-b0fec32b0ee2", "photo-1552255440-ac1fa0a5b2a3"
    ],
    pneu: [
      "photo-1594819043707-5067b5f45fe1", "photo-1578844251758-2f71da64c96f",
      "photo-1601411101851-ea0e07766235", "photo-1693441466798-cd56329c4377",
      "photo-1698237506482-7cc3bd1653d8", "photo-1645420526410-66448b1ee37c"
    ],
    indumentaria: [
      "photo-1778183074885-4bf83006899a", "photo-1771920800290-53f22e5ac3f8",
      "photo-1781470053209-795af7e93761", "photo-1791137885711-f99ee7d5ef42",
      "photo-1746637835836-8917488f772d", "photo-1642850470069-769d2dcc85f8"
    ],
    eletronica: [
      "photo-1677456868094-5da64833186f", "photo-1653219912556-e6af85f0e1a3",
      "photo-1558530755-e4785fddbe89", "photo-1716738547734-fb7cb39c5b2e",
      "photo-1621217873309-2046fa41d06f", "photo-1580609229748-1aba83600c5b"
    ],
    oficina: [
      "photo-1613206485381-b028e578e791", "photo-1581166397057-235af2b3c6dd",
      "photo-1760310936486-4dd450aab2a8", "photo-1671040690726-b78261eff126",
      "photo-1530124566582-a618bc2615dc", "photo-1637640125496-31852f042a60"
    ]
  };
  const unsplashImage = photoId => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=900&q=80&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`;

  const money = value => value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function makeProduct(cat, i) {
    if (cat === "kart") {
      const kartProduct = kartProducts[i];
      const old = i % 3 !== 1 ? Math.round(kartProduct.price * 1.22 / 5) * 5 : null;
      return {
        id: kartProduct.id,
        cat,
        title: kartProduct.name,
        price: kartProduct.price,
        imageUrl: kartProduct.imageUrl,
        old,
        rating: (4 + (i % 9) / 10).toFixed(1),
        reviews: 18 + i * 37,
        discount: old ? Math.round((old - kartProduct.price) / old * 100) : null
      };
    }
    const price = 89 + ((i * 137 + cat.length * 21) % 1900);
    const hasDiscount = i % 3 !== 1;
    const old = hasDiscount ? Math.round(price * 1.22 / 5) * 5 : null;
    return { cat, title: NAMES[cat][i % NAMES[cat].length], price, old, imageUrl: unsplashImage(PRODUCT_IMAGES[cat][i]),
      rating: (4 + (i % 9) / 10).toFixed(1), reviews: 18 + i * 37,
      discount: old ? Math.round((old - price) / old * 100) : null };
  }

  const catalog = [];
  CATS.forEach(cat => { for (let i = 0; i < 6; i++) catalog.push(makeProduct(cat, i)); });

  function cardHTML(p) {
    return `<article class="card" data-cat="${p.cat}" data-product="${p.title}" tabindex="0" aria-label="Ver detalhes de ${p.title}">
      <div class="card-media">
        ${p.discount ? `<span class="badge">-${p.discount}%</span>` : ""}
        <button class="fav" aria-label="Adicionar aos favoritos: ${p.title}" aria-pressed="false" data-favorite><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>
        ${p.imageUrl ? `<img class="product-photo" src="${p.imageUrl}" alt="${p.title}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="product-photo-fallback" hidden>${ICONS[p.cat]}</span>` : ICONS[p.cat]}
      </div>
      <div class="card-body">
        <div class="card-cat">${LABELS[p.cat]}</div><div class="card-title">${p.title}</div>
        <div class="stars" role="img" aria-label="${p.rating} de 5 estrelas, ${p.reviews} avaliações"><span class="fill" aria-hidden="true">★★★★★</span> <span aria-hidden="true">${p.rating} (${p.reviews})</span></div>
        <div class="price-row">${p.old ? `<div class="price-old">R$ ${money(p.old)}</div>` : ""}<div class="price"><small>R$</small> ${money(p.price)}</div><div class="installment">em até 6x sem juros</div></div>
        <button class="add-btn" data-add>Adicionar ao carrinho</button>
      </div>
    </article>`;
  }

  const deals = catalog.filter(p => p.discount).slice(0, 8);
  document.getElementById("dealsRow").innerHTML = deals.map(p => `<article class="deal-card card" data-product="${p.title}" tabindex="0" aria-label="Ver detalhes de ${p.title}"><div class="deal-timer"><span>Termina em <b>04:12:36</b></span></div><div class="card-media"><span class="badge">-${p.discount}%</span><button class="fav" data-favorite aria-label="Adicionar aos favoritos: ${p.title}" aria-pressed="false"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>${ICONS[p.cat]}</div><div class="card-body"><div class="card-cat">${LABELS[p.cat]}</div><div class="card-title">${p.title}</div><div class="price-row"><div class="price-old">R$ ${money(p.old)}</div><div class="price"><small>R$</small> ${money(p.price)}</div></div><button class="add-btn" data-add>Adicionar ao carrinho</button></div></article>`).join("");

  function addProductImage(container, product) {
    if (!container || !product.imageUrl) return;
    const image = document.createElement("img");
    image.className = "product-photo";
    image.src = product.imageUrl;
    image.alt = product.name || product.title;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      image.hidden = true;
      const fallback = document.createElement("span");
      fallback.className = "product-photo-fallback";
      fallback.innerHTML = ICONS[product.cat];
      container.append(fallback);
    }, { once: true });
    const existingIcon = [...container.children].find(child => child.tagName.toLowerCase() === "svg");
    container.insertBefore(image, existingIcon || null);
    if (existingIcon) existingIcon.remove();
  }

  deals.forEach(product => {
    const card = [...document.querySelectorAll("#dealsRow .card")].find(item => item.dataset.product === product.title);
    if (card) addProductImage(card.querySelector(".card-media"), product);
  });

  let activeCategory = "todos";
  let cartCount = 0;
  let searchTerm = "";
  function getRandomProducts(quantidade) {
    if (!Number.isInteger(quantidade) || quantidade < 0) {
      throw new RangeError("A quantidade de produtos deve ser um inteiro não negativo.");
    }
    const products = [...catalog];
    for (let index = products.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [products[index], products[randomIndex]] = [products[randomIndex], products[index]];
    }
    return products.slice(0, Math.min(quantidade, products.length));
  }
  function loadFavorites() {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      if (!savedFavorites) return new Set();
      const parsedFavorites = JSON.parse(savedFavorites);
      if (!Array.isArray(parsedFavorites)) {
        throw new TypeError("O formato salvo para os favoritos é inválido.");
      }
      const productTitles = new Set(catalog.map(product => product.title));
      return new Set(parsedFavorites.map(product => typeof product === "string" ? product : product?.title)
        .filter(title => productTitles.has(title)));
    } catch (error) {
      console.error("Não foi possível carregar os favoritos salvos.", error);
      return new Set();
    }
  }
  const favorites = loadFavorites();
  function saveFavorites() {
    try {
      const products = [...favorites].map(title => catalog.find(product => product.title === title)).filter(Boolean);
      localStorage.setItem("favorites", JSON.stringify(products));
    } catch (error) {
      console.error("Não foi possível salvar os favoritos neste navegador.", error);
    }
  }
  function loadUser() {
    try {
      const savedUser = localStorage.getItem("user");
      if (!savedUser) return null;
      const user = JSON.parse(savedUser);
      return user && user.logado === true && typeof user.nome === "string" && user.nome.trim()
        ? { nome: user.nome.trim(), logado: true }
        : null;
    } catch (error) {
      console.error("Não foi possível carregar o usuário salvo.", error);
      return null;
    }
  }
  let currentUser = loadUser();

  function loadCart() {
    try {
      const savedCart = localStorage.getItem("cart");
      if (!savedCart) return new Map();
      const parsedCart = JSON.parse(savedCart);
      if (!parsedCart || typeof parsedCart !== "object") {
        throw new TypeError("O formato salvo para o carrinho é inválido.");
      }
      const productTitles = new Set(catalog.map(product => product.title));
      const entries = Array.isArray(parsedCart)
        ? parsedCart.map(product => [product?.title, product?.quantity ?? 1])
        : Object.entries(parsedCart);
      return new Map(entries.filter(([title, quantity]) =>
        productTitles.has(title) && Number.isInteger(quantity) && quantity > 0
      ));
    } catch (error) {
      console.error("Não foi possível carregar o carrinho salvo.", error);
      return new Map();
    }
  }
  const cart = loadCart();

  function readOrdersFromStorage() {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders === null) return [];
    const orders = JSON.parse(savedOrders);
    if (!Array.isArray(orders)) {
      throw new TypeError("O formato salvo para o histórico de pedidos é inválido.");
    }
    return orders;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function renderOrders() {
    const ordersList = document.getElementById("ordersList");
    try {
      const orders = readOrdersFromStorage();
      if (!orders.length) {
        ordersList.innerHTML = `<section class="orders-empty"><h2>Você ainda não possui pedidos</h2><p>Quando fizer uma compra, ela aparecerá aqui.</p><button class="confirm-payment" type="button" data-orders-shop>Explorar produtos</button></section>`;
        return;
      }

      ordersList.innerHTML = orders.map(order => {
        if (!order || typeof order.id !== "string" || !Number.isFinite(order.total) || !Array.isArray(order.items)) {
          throw new TypeError("Há um pedido inválido no histórico salvo.");
        }
        const orderDate = new Date(order.date);
        if (Number.isNaN(orderDate.getTime())) {
          throw new TypeError("A data de um pedido salvo é inválida.");
        }
        const formattedDate = new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "long",
          timeStyle: "short"
        }).format(orderDate);
        const itemsHTML = order.items.map(item => {
          if (!item || typeof item.title !== "string" || !Number.isInteger(item.quantity) || item.quantity < 1 ||
              !Number.isFinite(item.unitPrice) || item.unitPrice < 0) {
            throw new TypeError("Há um item inválido em um pedido salvo.");
          }
          return `<div class="order-item"><span>${item.quantity}x ${escapeHTML(item.title)}</span><strong>R$ ${money(item.unitPrice * item.quantity)}</strong></div>`;
        }).join("");
        return `<article class="order-card">
          <header class="order-card-head">
            <div><h2>Pedido ${escapeHTML(order.id)}</h2><p class="order-card-date">${escapeHTML(formattedDate)}</p></div>
            <span class="order-status">Pagamento Aprovado</span>
          </header>
          <div class="order-items">${itemsHTML}</div>
          <div class="order-total"><span>Total</span><strong>R$ ${money(order.total)}</strong></div>
        </article>`;
      }).join("");
    } catch (error) {
      console.error("Não foi possível carregar o histórico de pedidos.", error);
      ordersList.innerHTML = `<p class="orders-error" role="alert">Não foi possível carregar seus pedidos salvos. Verifique os dados locais do navegador e tente novamente.</p>`;
    }
  }

  function productsFor(category, query = "") {
    let products = category === "todos" ? [...catalog] : category === "ofertas" ? catalog.filter(p => p.discount) : catalog.filter(p => p.cat === category);
    if (query) products = products.filter(p => `${p.title} ${LABELS[p.cat]}`.toLowerCase().includes(query.toLowerCase()));
    return products;
  }

  const categoryNames = { todos: "Todos", kart: "Karts & Peças", capacete: "Capacetes", pneu: "Pneus & Rodas", indumentaria: "Indumentária", eletronica: "Cronometragem", oficina: "Oficina & Ferramentas", ofertas: "Ofertas" };

  function updateUserHeader() {
    const loginButton = document.getElementById("loginOpen");
    const greeting = document.getElementById("userGreeting");
    const ordersButton = document.getElementById("ordersOpen");
    const isLoggedIn = Boolean(currentUser?.logado);
    loginButton.hidden = isLoggedIn;
    greeting.hidden = !isLoggedIn;
    ordersButton.hidden = !isLoggedIn;
    greeting.classList.toggle("logged-in", isLoggedIn);
    greeting.querySelector("[data-user-name]").textContent = isLoggedIn ? `Olá, ${currentUser.nome}` : "";
  }

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
    const pageTargets = { home: "storeHome", category: "categoryPage", info: "infoPage", product: "productPage", orders: "ordersPage", checkout: "checkoutPage", success: "successPage", register: "registerPage" };
    document.getElementById("skipLink").href = `#${pageTargets[page] || pageTargets.home}`;
    document.getElementById("storeHome").hidden = page !== "home";
    document.getElementById("categoryPage").hidden = page !== "category";
    document.getElementById("infoPage").hidden = page !== "info";
    document.getElementById("productPage").hidden = page !== "product";
    const registerPage = document.getElementById("registerPage");
    registerPage.hidden = page !== "register";
    registerPage.classList.toggle("hidden", page !== "register");
    ["ordersPage", "checkoutPage", "successPage"].forEach(id => {
      const pageElement = document.getElementById(id);
      const isHidden = page !== id.replace("Page", "").toLowerCase();
      pageElement.hidden = isHidden;
      pageElement.classList.toggle("hidden", isHidden);
    });
    const sharedSections = [document.querySelector(".newsletter"), document.querySelector("footer")];
    sharedSections.forEach(section => {
      section.toggleAttribute("hidden", page !== "home");
      section.hidden = page !== "home";
    });
    const pageHeadings = {
      home: document.querySelector("#storeHome .hero-slide.active h1"),
      category: document.getElementById("categoryPageTitle"),
      info: document.getElementById("infoPageTitle"),
      product: document.getElementById("productDetailTitle"),
      orders: document.getElementById("ordersTitle"),
      checkout: document.getElementById("checkoutTitle"),
      success: document.getElementById("successTitle"),
      register: document.getElementById("registerTitle")
    };
    const heading = pageHeadings[page];
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
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
    const panelProductLink = e.target.closest("[data-panel-product]");
    if (panelProductLink) {
      e.preventDefault();
      const title = panelProductLink.dataset.panelProduct;
      closeScreens();
      openProduct(title);
      return;
    }

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
      saveFavorites();
      syncFavoriteButtons();
      renderFavorites();
    }

    const removeFavorite = e.target.closest("[data-remove-favorite]");
    if (removeFavorite) {
      favorites.delete(removeFavorite.dataset.removeFavorite);
      saveFavorites();
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
  document.body.addEventListener("keydown", e => {
    const card = e.target.closest(".card[data-product]");
    if (!card || e.target !== card || (e.key !== "Enter" && e.key !== " ")) return;
    e.preventDefault();
    openProduct(card.dataset.product);
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
      const button = card.querySelector("[data-favorite]");
      if (!button) return;
      const isFavorite = favorites.has(card.dataset.product);
      button.classList.toggle("active", isFavorite);
      button.setAttribute("aria-pressed", String(isFavorite));
      button.setAttribute("aria-label", `${isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}: ${card.dataset.product}`);
    });
  }

  function panelItem(product, actions) {
    const title = escapeHTML(product.title);
    return `<article class="panel-item">
      <a class="panel-item-icon panel-item-link" href="#produto" data-panel-product="${title}" aria-label="Ver detalhes de ${title}">${product.imageUrl ? `<img class="product-photo" src="${product.imageUrl}" alt="" loading="lazy">` : ICONS[product.cat]}</a>
      <div class="panel-item-copy"><a class="panel-item-title panel-item-link" href="#produto" data-panel-product="${title}">${title}</a><div class="panel-item-price">R$ ${money(product.price)}</div></div>
      ${actions}
    </article>`;
  }

  function renderFavorites() {
    const list = [...favorites].map(title => catalog.find(product => product.title === title)).filter(Boolean);
    document.getElementById("favoritesCount").textContent = favorites.size;
    document.getElementById("favoritesList").innerHTML = list.length ? list.map(product => panelItem(product,
      `<button class="item-remove" type="button" data-remove-favorite="${product.title}" aria-label="Remover ${product.title} dos favoritos">&times;</button>`
    )).join("") : `<div class="panel-empty"><strong>Sua lista está vazia</strong><span>Escolha um produto com o coração para guardar aqui.</span></div>`;
  }

  function updateCart(persist = true) {
    if (persist) {
      try {
        localStorage.setItem("cart", JSON.stringify(Object.fromEntries(cart)));
      } catch (error) {
        console.error("Não foi possível salvar o carrinho neste navegador.", error);
      }
    }
    cartCount = [...cart.values()].reduce((total, quantity) => total + quantity, 0);
    document.getElementById("cartCount").textContent = cartCount;
    const products = [...cart.entries()].map(([title, quantity]) => ({ product: catalog.find(item => item.title === title), quantity })).filter(item => item.product);
    document.getElementById("cartList").innerHTML = products.length ? products.map(({ product, quantity }) => panelItem(product,
      `<div class="cart-quantity"><button type="button" data-cart-action="${product.title}" data-delta="down" aria-label="Diminuir quantidade de ${product.title}">−</button><span aria-live="polite">${quantity}</span><button type="button" data-cart-action="${product.title}" data-delta="up" aria-label="Aumentar quantidade de ${product.title}">+</button><button class="item-remove remove" type="button" data-cart-action="${product.title}" aria-label="Remover ${product.title} do carrinho">&times;</button></div>`
    )).join("") : `<div class="panel-empty"><strong>Seu carrinho está vazio</strong><span>Adicione equipamentos e eles aparecerão aqui.</span></div>`;
    const total = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    document.getElementById("cartSummary").innerHTML = products.length ? `<div class="cart-total"><span>Total</span><span>R$ ${money(total)}</span></div><button class="panel-primary" type="button" data-open-checkout>Finalizar Compra</button>` : "";
    renderFavorites();
  }

  let lastScreenTrigger = null;
  let pendingOrdersNavigation = false;
  function openScreen(id) {
    const screen = document.getElementById(id);
    lastScreenTrigger = document.activeElement;
    screen.classList.add("open");
    screen.setAttribute("aria-hidden", "false");
    document.body.classList.add("screen-open");
    window.setTimeout(() => {
      screen.querySelector("[data-close], [data-close-product], input, button")?.focus({ preventScroll: true });
    }, 0);
  }

  function closeScreens() {
    const hadOpenScreen = document.querySelector(".screen-overlay.open");
    document.querySelectorAll(".screen-overlay.open").forEach(screen => {
      screen.classList.remove("open");
      screen.setAttribute("aria-hidden", "true");
    });
    document.body.classList.remove("screen-open");
    if (hadOpenScreen && lastScreenTrigger instanceof HTMLElement && lastScreenTrigger.isConnected) {
      lastScreenTrigger.focus({ preventScroll: true });
    }
    lastScreenTrigger = null;
  }

  function navigateToOrders() {
    closeScreens();
    if (!currentUser) {
      pendingOrdersNavigation = true;
      const loginError = document.getElementById("loginError");
      loginError.textContent = "Entre na sua conta para consultar seus pedidos.";
      loginError.hidden = false;
      openScreen("loginScreen");
      return;
    }
    pendingOrdersNavigation = false;
    renderOrders();
    showAppPage("orders");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("ordersOpen").addEventListener("click", navigateToOrders);
  document.getElementById("ordersBack").addEventListener("click", () => {
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("ordersList").addEventListener("click", e => {
    if (!e.target.closest("[data-orders-shop]")) return;
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.addEventListener("click", e => {
    if (!e.target.closest("[data-open-orders]")) return;
    e.preventDefault();
    navigateToOrders();
  });

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
    document.getElementById("productPageContent").innerHTML = `<section class="market-product-main"><div class="product-gallery"><div class="product-gallery-main">${ICONS[product.cat]}</div><div class="gallery-thumbs"><button class="active" type="button">${ICONS[product.cat]}</button><button type="button">${ICONS[product.cat]}</button><button type="button">${ICONS[product.cat]}</button></div></div><div class="product-information"><span class="product-detail-category">Novo · ${LABELS[product.cat]}</span><h1 id="productDetailTitle">${product.title}</h1><div class="product-rating" role="img" aria-label="${product.rating} de 5 estrelas, ${product.reviews} avaliações"><span aria-hidden="true">★★★★★</span> ${product.rating} (${product.reviews} avaliações)</div><div class="market-price"><small>R$</small> ${money(product.price)}</div><div class="market-installment">em até 6x de R$ ${money(product.price / 6)} sem juros</div><p class="product-detail-copy">Equipamento selecionado para pilotos amadores e profissionais, com estrutura voltada a segurança, desempenho e facilidade de manutenção.</p><div class="product-benefit"><strong>Chegará grátis</strong><span>entrega estimada para toda região Sudeste</span></div><div class="product-benefit"><strong>Devolução grátis</strong><span>até 30 dias após receber o produto</span></div></div></section><aside class="market-buy-box"><span class="stock-status">Estoque disponível</span><div class="buy-quantity">Quantidade: <strong>1 unidade</strong></div><button class="buy-primary" type="button" data-detail-add="${product.title}">Adicionar ao carrinho</button><button class="buy-secondary" type="button" data-detail-buy="${product.title}">Comprar agora</button><p>Compra demonstrativa · pagamento seguro</p></aside>`;
    if (product.imageUrl) {
      const productGallery = document.querySelector(".product-gallery-main");
      addProductImage(productGallery, product);
      productGallery.setAttribute("role", "button");
      productGallery.setAttribute("tabindex", "0");
      productGallery.setAttribute("aria-label", `Ampliar imagem de ${product.title}`);
      const toggleImageZoom = () => {
        const zoomed = productGallery.classList.toggle("zoomed");
        productGallery.setAttribute("aria-label", `${zoomed ? "Reduzir" : "Ampliar"} imagem de ${product.title}`);
      };
      productGallery.addEventListener("click", toggleImageZoom);
      productGallery.addEventListener("keydown", event => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        toggleImageZoom();
      });
      document.querySelector(".gallery-thumbs").hidden = true;
    }
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
    heroSlides.forEach((slide, i) => {
      const isCurrent = i === heroIndex;
      slide.classList.toggle("active", isCurrent);
      slide.setAttribute("aria-hidden", String(!isCurrent));
    });
    document.querySelectorAll(".hero-dot").forEach((dot, i) => {
      const isCurrent = i === heroIndex;
      dot.classList.toggle("active", isCurrent);
      dot.setAttribute("aria-pressed", String(isCurrent));
    });
  }
  heroSlides.forEach((_, index) => document.getElementById("heroDots").insertAdjacentHTML("beforeend", `<button class="hero-dot${index === 0 ? " active" : ""}" type="button" aria-label="Mostrar banner ${index + 1}" aria-pressed="${index === 0}"></button>`));
  document.getElementById("heroDots").addEventListener("click", e => { const dot = e.target.closest(".hero-dot"); if (dot) showHero([...dot.parentElement.children].indexOf(dot)); });
  document.getElementById("heroPrev").addEventListener("click", () => showHero(heroIndex - 1));
  document.getElementById("heroNext").addEventListener("click", () => showHero(heroIndex + 1));
  const hero = document.querySelector(".hero");
  const heroToggle = document.getElementById("heroToggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let heroPaused = reducedMotion.matches;
  let heroHovered = false;
  let heroFocused = false;
  let heroInterval;
  function updateHeroRotation() {
    window.clearInterval(heroInterval);
    heroToggle.setAttribute("aria-pressed", String(heroPaused));
    heroToggle.setAttribute("aria-label", `${heroPaused ? "Retomar" : "Pausar"} troca automática dos banners`);
    heroToggle.textContent = heroPaused ? "Retomar" : "Pausar";
    if (!heroPaused) {
      heroInterval = window.setInterval(() => {
        if (!heroHovered && !heroFocused) showHero(heroIndex + 1);
      }, 6000);
    }
  }
  hero.addEventListener("mouseenter", () => { heroHovered = true; });
  hero.addEventListener("mouseleave", () => { heroHovered = false; });
  hero.addEventListener("focusin", () => { heroFocused = true; });
  hero.addEventListener("focusout", event => {
    if (!hero.contains(event.relatedTarget)) heroFocused = false;
  });
  heroToggle.addEventListener("click", () => {
    heroPaused = !heroPaused;
    updateHeroRotation();
  });
  reducedMotion.addEventListener("change", event => {
    if (event.matches) heroPaused = true;
    updateHeroRotation();
  });
  updateHeroRotation();
  document.querySelectorAll("[data-carousel-category]").forEach(button => button.addEventListener("click", () => openCategoryPage(button.dataset.carouselCategory)));

  document.body.addEventListener("click", e => {
    if (!e.target.closest("[data-open-checkout]")) return;
    closeScreens();
    const products = [...cart.entries()].map(([title, quantity]) => ({ product: catalog.find(item => item.title === title), quantity })).filter(item => item.product);
    document.getElementById("checkoutItems").innerHTML = products.map(({ product, quantity }) => `<div class="checkout-item"><span>${quantity}x ${product.title}</span><strong>R$ ${money(product.price * quantity)}</strong></div>`).join("");
    document.getElementById("checkoutTotal").textContent = `R$ ${money(products.reduce((sum, item) => sum + item.product.price * item.quantity, 0))}`;
    document.getElementById("checkoutForm").reset();
    syncPaymentSelection();
    showAppPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const checkoutForm = document.getElementById("checkoutForm");
  const cardFields = document.getElementById("cardFields");
  const checkoutError = document.getElementById("checkoutError");
  function syncPaymentSelection() {
    const selectedPayment = checkoutForm.querySelector('input[name="payment"]:checked')?.value;
    const isCardSelected = selectedPayment === "card";
    cardFields.hidden = !isCardSelected;
    cardFields.classList.toggle("hidden", !isCardSelected);
    cardFields.querySelectorAll("input").forEach(input => { input.required = isCardSelected; });
    checkoutForm.querySelectorAll(".payment-option").forEach(option => {
      option.classList.toggle("selected", option.querySelector('input[name="payment"]').checked);
    });
  }
  checkoutForm.addEventListener("change", syncPaymentSelection);
  document.getElementById("checkoutBack").addEventListener("click", () => {
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  checkoutForm.addEventListener("submit", e => {
    e.preventDefault();
    const confirmButton = document.getElementById("confirmPayment");
    const loading = document.getElementById("paymentLoading");
    checkoutError.hidden = true;
    confirmButton.disabled = true;
    loading.hidden = false;
    loading.classList.remove("hidden");
    loading.setAttribute("aria-hidden", "false");
    window.setTimeout(() => {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart === null) {
          throw new Error("O carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        }
        const storedCart = JSON.parse(savedCart);
        if (!storedCart || typeof storedCart !== "object") {
          throw new TypeError("O formato salvo para o carrinho é inválido.");
        }
        const cartEntries = Array.isArray(storedCart)
          ? storedCart.map(product => [product?.title, product?.quantity ?? 1])
          : Object.entries(storedCart);
        const orderItems = cartEntries.map(([title, quantity]) => {
          const product = catalog.find(item => item.title === title);
          if (!product || !Number.isInteger(quantity) || quantity < 1) {
            throw new TypeError("Há um item inválido no carrinho salvo.");
          }
          return { title: product.title, quantity, unitPrice: product.price };
        });
        if (!orderItems.length) {
          throw new Error("O carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        }
        const orders = readOrdersFromStorage();
        if (orders.some(order => !order || typeof order.id !== "string")) {
          throw new TypeError("Há um pedido inválido no histórico salvo.");
        }
        let orderId;
        let attempts = 0;
        do {
          orderId = `#PED-${Math.floor(1000 + Math.random() * 9000)}`;
          attempts += 1;
        } while (orders.some(order => order.id === orderId) && attempts < 9000);
        if (orders.some(order => order.id === orderId)) {
          throw new Error("Não foi possível gerar um número de pedido exclusivo.");
        }
        const order = {
          id: orderId,
          date: new Date().toISOString(),
          items: orderItems,
          total: orderItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
          status: "Pagamento Aprovado"
        };
        orders.unshift(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.removeItem("cart");
        cart.clear();
        updateCart(false);
        document.getElementById("successOrderId").textContent = `Número do pedido: ${order.id}`;
      } catch (error) {
        console.error("Não foi possível registrar o pedido.", error);
        const detail = error instanceof SyntaxError
          ? "Os dados salvos do carrinho ou do histórico estão inválidos. Revise o armazenamento local e tente novamente."
          : error.message;
        checkoutError.textContent = `Não foi possível concluir a compra: ${detail}`;
        checkoutError.hidden = false;
        confirmButton.disabled = false;
        loading.hidden = true;
        loading.classList.add("hidden");
        loading.setAttribute("aria-hidden", "true");
        return;
      }
      loading.hidden = true;
      loading.classList.add("hidden");
      loading.setAttribute("aria-hidden", "true");
      showAppPage("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2500);
  });
  document.getElementById("backToHome").addEventListener("click", () => {
    document.getElementById("confirmPayment").disabled = false;
    checkoutForm.reset();
    checkoutError.hidden = true;
    document.getElementById("successOrderId").textContent = "";
    syncPaymentSelection();
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("loginOpen").addEventListener("click", () => {
    pendingOrdersNavigation = false;
    document.getElementById("loginError").hidden = true;
    openScreen("loginScreen");
  });
  function openRegisterPage() {
    pendingOrdersNavigation = false;
    closeScreens();
    document.getElementById("registerError").hidden = true;
    document.getElementById("registerForm").reset();
    showAppPage("register");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.querySelector(".create-account").addEventListener("click", openRegisterPage);
  document.getElementById("registerLoginOpen").addEventListener("click", e => {
    e.preventDefault();
    showAppPage("home");
    document.getElementById("loginError").hidden = true;
    openScreen("loginScreen");
  });
  document.getElementById("favoritesOpen").addEventListener("click", () => openScreen("favoritesScreen"));
  document.getElementById("cartOpen").addEventListener("click", () => openScreen("cartScreen"));
  document.querySelectorAll("[data-close], [data-close-product]").forEach(button => button.addEventListener("click", closeScreens));
  document.querySelectorAll(".screen-overlay").forEach(screen => screen.addEventListener("click", e => { if (e.target === screen) closeScreens(); }));
  document.addEventListener("keydown", e => {
    const screen = document.querySelector(".screen-overlay.open");
    if (!screen) return;
    if (e.key === "Escape") {
      closeScreens();
      return;
    }
    if (e.key !== "Tab") return;
    const focusable = [...screen.querySelectorAll('a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])')]
      .filter(element => element.getClientRects().length);
    if (!focusable.length) {
      e.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const loginError = document.getElementById("loginError");
    loginError.hidden = true;
    try {
      currentUser = { nome: "Professor", logado: true };
      localStorage.setItem("user", JSON.stringify(currentUser));
    } catch (error) {
      console.error("Não foi possível salvar o usuário neste navegador.", error);
      currentUser = null;
      loginError.textContent = "Não foi possível salvar a sessão neste navegador. Verifique as configurações de armazenamento e tente novamente.";
      loginError.hidden = false;
      return;
    }
    updateUserHeader();
    closeScreens();
    if (pendingOrdersNavigation) {
      navigateToOrders();
    }
  });
  document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = e.currentTarget;
    const registerError = document.getElementById("registerError");
    const nameInput = form.querySelector('[name="name"]');
    const nome = nameInput.value.trim();
    registerError.hidden = true;
    if (!nome) {
      registerError.textContent = "Informe seu nome para criar a conta.";
      registerError.hidden = false;
      nameInput.focus();
      return;
    }

    const newUser = { nome, logado: true };
    let seededFavorites;
    let seededCart;
    try {
      seededFavorites = getRandomProducts(5);
      seededCart = getRandomProducts(2);
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("favorites", JSON.stringify(seededFavorites));
      localStorage.setItem("cart", JSON.stringify(seededCart));
    } catch (error) {
      console.error("Não foi possível concluir o cadastro neste navegador.", error);
      registerError.textContent = "Não foi possível salvar sua conta neste navegador. Verifique as configurações de armazenamento e tente novamente.";
      registerError.hidden = false;
      return;
    }

    currentUser = newUser;
    favorites.clear();
    seededFavorites.forEach(product => favorites.add(product.title));
    cart.clear();
    seededCart.forEach(product => cart.set(product.title, 1));
    updateUserHeader();
    syncFavoriteButtons();
    updateCart(false);
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  updateUserHeader();
  syncFavoriteButtons();
  renderFavorites();
  updateCart();
