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
  function formatCPF(value) {
    const digits = String(value).replace(/\D/g, "").slice(0, 11);
    if (digits.length > 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
    if (digits.length > 6) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    if (digits.length > 3) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    return digits;
  }

  function calculateCheckoutTotals(subtotal, paymentMethod = "card", deliveryMethod = "free") {
    const subtotalCents = Math.round(subtotal * 100);
    const shippingCents = deliveryMethod === "pickup" || subtotalCents >= 5000 ? 0 : 2500;
    const pixDiscountCents = paymentMethod === "pix" ? Math.round(subtotalCents * 0.07) : 0;
    return {
      shipping: shippingCents / 100,
      pixDiscount: pixDiscountCents / 100,
      total: (subtotalCents + shippingCents - pixDiscountCents) / 100
    };
  }

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

  const defaultCatalog = [];
  CATS.forEach(cat => { for (let i = 0; i < 6; i++) defaultCatalog.push(makeProduct(cat, i)); });

  function isCatalogProduct(product) {
    if (!product || typeof product !== "object" || typeof product.title !== "string" ||
        !product.title.trim() || !CATS.includes(product.cat) || !Number.isFinite(product.price) || product.price <= 0 ||
        typeof product.imageUrl !== "string" ||
        (product.old != null && (!Number.isFinite(product.old) || product.old < product.price)) ||
        (product.discount != null && (!Number.isFinite(product.discount) || product.discount < 0)) ||
        !Number.isFinite(Number(product.rating)) || !Number.isInteger(product.reviews) || product.reviews < 0) {
      return false;
    }
    try {
      const imageURL = new URL(product.imageUrl);
      return imageURL.protocol === "https:" || imageURL.protocol === "http:";
    } catch {
      return false;
    }
  }

  function loadCatalog() {
    try {
      const savedCatalog = localStorage.getItem("catalog");
      if (savedCatalog === null) {
        localStorage.setItem("catalog", JSON.stringify(defaultCatalog));
        return [...defaultCatalog];
      }
      const parsedCatalog = JSON.parse(savedCatalog);
      if (!Array.isArray(parsedCatalog) || !parsedCatalog.every(isCatalogProduct)) {
        throw new TypeError("O formato salvo para o catálogo é inválido.");
      }
      return parsedCatalog;
    } catch (error) {
      console.error("Não foi possível carregar o catálogo salvo. O catálogo padrão será exibido.", error);
      return [...defaultCatalog];
    }
  }

  const catalog = loadCatalog();

  function cardHTML(p) {
    const title = escapeHTML(p.title);
    const category = escapeHTML(LABELS[p.cat] || "Automobilismo");
    const imageURL = escapeHTML(p.imageUrl || "");
    const rating = escapeHTML(p.rating || "0.0");
    const reviewCount = Number.isInteger(p.reviews) ? p.reviews : 0;
    const discount = Number.isFinite(p.discount) ? p.discount : null;
    const oldPrice = Number.isFinite(p.old) ? p.old : null;
    return `<article class="card" data-cat="${escapeHTML(p.cat)}" data-product="${title}" tabindex="0" aria-label="Ver detalhes de ${title}">
      <div class="card-media">
        ${discount ? `<span class="badge">-${discount}%</span>` : ""}
        <button class="fav" aria-label="Adicionar aos favoritos: ${title}" aria-pressed="false" data-favorite><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>
        ${imageURL ? `<img class="product-photo" src="${imageURL}" alt="${title}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="product-photo-fallback" hidden>${ICONS[p.cat]}</span>` : ICONS[p.cat]}
      </div>
      <div class="card-body">
        <div class="card-cat">${category}</div><div class="card-title">${title}</div>
        <div class="stars" role="img" aria-label="${rating} de 5 estrelas, ${reviewCount} avaliações"><span class="fill" aria-hidden="true">★★★★★</span> <span aria-hidden="true">${rating} (${reviewCount})</span></div>
        <div class="price-row">${oldPrice ? `<div class="price-old">R$ ${money(oldPrice)}</div>` : ""}<div class="price"><small>R$</small> ${money(p.price)}</div><div class="installment">em até 6x sem juros</div></div>
        <button class="add-btn" data-add>Adicionar ao carrinho</button>
      </div>
    </article>`;
  }

  function renderDeals() {
    const deals = catalog.filter(product => Number.isFinite(product.discount) && product.discount > 0).slice(0, 8);
    document.getElementById("dealsRow").innerHTML = deals.map(product => {
      const title = escapeHTML(product.title);
      const category = escapeHTML(LABELS[product.cat]);
      return `<article class="deal-card card" data-product="${title}" tabindex="0" aria-label="Ver detalhes de ${title}"><div class="deal-timer"><span>Termina em <b>04:12:36</b></span></div><div class="card-media"><span class="badge">-${product.discount}%</span><button class="fav" data-favorite aria-label="Adicionar aos favoritos: ${title}" aria-pressed="false"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1 1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>${ICONS[product.cat]}</div><div class="card-body"><div class="card-cat">${category}</div><div class="card-title">${title}</div><div class="price-row"><div class="price-old">R$ ${money(product.old)}</div><div class="price"><small>R$</small> ${money(product.price)}</div></div><button class="add-btn" data-add>Adicionar ao carrinho</button></div></article>`;
    }).join("");
    deals.forEach(product => {
      const card = [...document.querySelectorAll("#dealsRow .card")].find(item => item.dataset.product === product.title);
      if (card) addProductImage(card.querySelector(".card-media"), product);
    });
  }

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

  renderDeals();

  let activeCategory = "todos";
  let cartCount = 0;
  let searchTerm = "";
  function getRandomProducts(quantidade, source = catalog) {
    if (!Number.isInteger(quantidade) || quantidade < 0) {
      throw new RangeError("A quantidade de produtos deve ser um inteiro não negativo.");
    }
    if (!Array.isArray(source)) {
      throw new TypeError("A fonte de produtos deve ser um array.");
    }
    const products = [...source];
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
      if (!user || user.logado !== true || typeof user.nome !== "string" || !user.nome.trim()) return null;
      const normalizedUser = {
        nome: user.nome.trim(),
        email: typeof user.email === "string" ? user.email.trim().toLowerCase() : "",
        role: ["admin", "seller", "buyer"].includes(user.role) ? user.role : "buyer",
        logado: true
      };
      if (typeof user.cpf === "string" && user.cpf.replace(/\D/g, "").length === 11) {
        normalizedUser.cpf = formatCPF(user.cpf);
      }
      return normalizedUser;
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
  const recommendationReviews = [
    "Produto excelente, chegou antes do prazo!",
    "Muito melhor do que eu esperava, recomendo.",
    "Ótima qualidade, compraria novamente.",
    "Exatamente como no anúncio, perfeito.",
    "Material muito bom e acabamento caprichado.",
    "Atendeu muito bem às minhas expectativas.",
    "Fácil de usar e com ótimo custo-benefício.",
    "Gostei bastante, já estou usando nos treinos."
  ];
  const recommendationReviewers = ["João S.", "Maria O.", "Lucas R.", "Ana P.", "Rafael M.", "Camila T.", "Bruno F.", "Luiza C."];

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
        const orderStatus = order.status === "Pagamento Aprovado"
          ? "Simulação concluída (não pago)"
          : typeof order.status === "string" ? order.status : "Pedido registrado";
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
            <span class="order-status">${escapeHTML(orderStatus)}</span>
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
  const MARKETPLACE_STATUS_LABELS = {
    pendente: "Em análise",
    aprovado: "Aprovado",
    recusado: "Recusado"
  };

  function initializePendingProducts() {
    if (localStorage.getItem("pendingProducts") !== null) return;

    const sellerEmail = "vendedor@gmail.com";
    const sellerName = "Vendedor";
    const existingGloves = catalog.find(product => product.title.toLocaleLowerCase() === "luvas de chuva kart");
    const approvedProduct = {
      ...(existingGloves || makeProduct("indumentaria", 5)),
      id: "demo-approved-gloves",
      title: "Luvas de chuva Kart",
      sellerEmail,
      sellerName,
      description: "Luvas impermeáveis para manter a aderência e o conforto em treinos com chuva.",
      status: "aprovado",
      createdAt: new Date().toISOString()
    };
    const samples = [
      {
        id: "demo-pending-suit",
        title: "Macacão Sparco Azul",
        cat: "indumentaria",
        price: 1899.9,
        imageUrl: unsplashImage(PRODUCT_IMAGES.indumentaria[0]),
        old: null,
        discount: null,
        rating: "0.0",
        reviews: 0,
        description: "Macacão azul para kart, com tecido resistente e modelagem confortável para os treinos.",
        status: "pendente",
        sellerEmail,
        sellerName,
        createdAt: new Date().toISOString()
      },
      approvedProduct,
      {
        id: "demo-rejected-engine",
        title: "Motor 125cc Usado",
        cat: "kart",
        price: 2450,
        imageUrl: kartProducts[0].imageUrl,
        old: null,
        discount: null,
        rating: "0.0",
        reviews: 0,
        description: "Motor usado para kart, anunciado para demonstração de análise.",
        status: "recusado",
        rejectionReason: "Produtos usados requerem nota fiscal anexada na descrição.",
        sellerEmail,
        sellerName,
        createdAt: new Date().toISOString()
      }
    ];
    const catalogHasGloves = catalog.some(product =>
      product.title.toLocaleLowerCase() === approvedProduct.title.toLocaleLowerCase()
    );
    const nextCatalog = catalogHasGloves ? [...catalog] : [...catalog, approvedProduct];
    const previousCatalog = localStorage.getItem("catalog");
    try {
      localStorage.setItem("catalog", JSON.stringify(nextCatalog));
      localStorage.setItem("pendingProducts", JSON.stringify(samples));
      catalog.splice(0, catalog.length, ...nextCatalog);
    } catch (error) {
      try {
        localStorage.removeItem("pendingProducts");
        if (previousCatalog === null) localStorage.removeItem("catalog");
        else localStorage.setItem("catalog", previousCatalog);
      } catch (rollbackError) {
        console.error("Não foi possível restaurar os dados anteriores do marketplace.", rollbackError);
      }
      console.error("Não foi possível inicializar os anúncios de demonstração.", error);
    }
  }

  function readPendingProductsFromStorage() {
    const savedProducts = localStorage.getItem("pendingProducts");
    if (savedProducts === null) return [];
    const products = JSON.parse(savedProducts);
    if (!Array.isArray(products) || !products.every(product =>
      isCatalogProduct(product) &&
      typeof product.id === "string" &&
      typeof product.sellerEmail === "string" &&
      Object.prototype.hasOwnProperty.call(MARKETPLACE_STATUS_LABELS, product.status)
    )) {
      throw new TypeError("O formato salvo para os anúncios do marketplace é inválido.");
    }
    return products;
  }

  initializePendingProducts();

  function setMarketplaceMessage(element, message, isError = false) {
    element.textContent = message;
    element.classList.toggle("error", isError);
    element.hidden = !message;
  }

  function renderMarketplaceProduct(product, includeActions = false) {
    const status = MARKETPLACE_STATUS_LABELS[product.status] || "Pendente";
    const imageURL = escapeHTML(product.imageUrl);
    const title = escapeHTML(product.title);
    const sellerName = escapeHTML(product.sellerName || "Vendedor");
    const description = typeof product.description === "string" && product.description.trim()
      ? `<span class="marketplace-product-description">${escapeHTML(product.description)}</span>`
      : "";
    const rejectionReason = product.status === "recusado" && typeof product.rejectionReason === "string" && product.rejectionReason.trim()
      ? `<span class="marketplace-rejection-reason">Motivo da recusa: ${escapeHTML(product.rejectionReason)}</span>`
      : "";
    const actions = includeActions ? `
      <div class="marketplace-product-actions">
        <button class="marketplace-approve" type="button" data-approve-product="${escapeHTML(product.id)}">Aprovar</button>
        <button class="marketplace-reject" type="button" data-reject-product="${escapeHTML(product.id)}">Recusar</button>
      </div>` : `<span class="marketplace-status marketplace-status-${product.status}">${status}</span>`;
    return `<article class="marketplace-product-card">
      <div class="marketplace-product-image"><img src="${imageURL}" alt="" loading="lazy"></div>
      <div class="marketplace-product-info">
        <strong>${title}</strong>
        <span>${escapeHTML(LABELS[product.cat])} · R$ ${money(product.price)}</span>
        <span class="marketplace-seller">Vendedor: ${sellerName}</span>
        ${description}
        ${rejectionReason}
        ${includeActions ? `<span class="marketplace-status marketplace-status-pendente">${status}</span>` : ""}
      </div>
      ${actions}
    </article>`;
  }

  function renderSellerDashboard() {
    const list = document.getElementById("sellerProductsList");
    const message = document.getElementById("sellerFormMessage");
    document.getElementById("sellerDashboardName").textContent = currentUser?.nome || "Vendedor";
    setMarketplaceMessage(message, "");
    try {
      const products = readPendingProductsFromStorage()
        .filter(product => product.sellerEmail === currentUser.email)
        .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      list.innerHTML = products.length
        ? products.map(product => renderMarketplaceProduct(product)).join("")
        : `<p class="marketplace-empty">Você ainda não enviou anúncios.</p>`;
    } catch (error) {
      console.error("Não foi possível carregar os anúncios do vendedor.", error);
      list.innerHTML = `<p class="marketplace-empty">Não foi possível carregar seus anúncios. Revise os dados locais e tente novamente.</p>`;
      setMarketplaceMessage(message, "Erro ao ler os anúncios salvos.", true);
    }
  }

  function renderAdminDashboard() {
    const list = document.getElementById("adminProductList");
    const approvedList = document.getElementById("adminApprovedList");
    const rejectedList = document.getElementById("adminRejectedList");
    const message = document.getElementById("adminDashboardMessage");
    setMarketplaceMessage(message, "");
    try {
      const products = readPendingProductsFromStorage();
      const pendingProducts = products.filter(product => product.status === "pendente");
      const approvedProducts = products.filter(product => product.status === "aprovado");
      const rejectedProducts = products.filter(product => product.status === "recusado");
      document.getElementById("adminPendingCount").textContent = pendingProducts.length;
      document.getElementById("adminApprovedCount").textContent = approvedProducts.length;
      document.getElementById("adminRejectedCount").textContent = rejectedProducts.length;
      list.innerHTML = pendingProducts.length
        ? pendingProducts.map(product => renderMarketplaceProduct(product, true)).join("")
        : `<p class="marketplace-empty">Não há produtos aguardando aprovação.</p>`;
      approvedList.innerHTML = approvedProducts.length
        ? approvedProducts.map(product => renderMarketplaceProduct(product)).join("")
        : `<p class="marketplace-empty">Ainda não há anúncios aprovados.</p>`;
      rejectedList.innerHTML = rejectedProducts.length
        ? rejectedProducts.map(product => renderMarketplaceProduct(product)).join("")
        : `<p class="marketplace-empty">Ainda não há anúncios recusados.</p>`;
    } catch (error) {
      console.error("Não foi possível carregar a fila de aprovação.", error);
      document.getElementById("adminPendingCount").textContent = "—";
      document.getElementById("adminApprovedCount").textContent = "—";
      document.getElementById("adminRejectedCount").textContent = "—";
      list.innerHTML = `<p class="marketplace-empty">Não foi possível carregar a fila. Revise os dados locais e tente novamente.</p>`;
      approvedList.innerHTML = `<p class="marketplace-empty">Não foi possível carregar os anúncios aprovados.</p>`;
      rejectedList.innerHTML = `<p class="marketplace-empty">Não foi possível carregar os anúncios recusados.</p>`;
      setMarketplaceMessage(message, "Erro ao ler os anúncios salvos.", true);
    }
  }

  function persistMarketplaceChanges(nextPendingProducts, nextCatalog) {
    const previousPending = localStorage.getItem("pendingProducts");
    const previousCatalog = localStorage.getItem("catalog");
    try {
      if (nextCatalog) localStorage.setItem("catalog", JSON.stringify(nextCatalog));
      localStorage.setItem("pendingProducts", JSON.stringify(nextPendingProducts));
    } catch (error) {
      try {
        if (previousCatalog === null) localStorage.removeItem("catalog");
        else localStorage.setItem("catalog", previousCatalog);
        if (previousPending === null) localStorage.removeItem("pendingProducts");
        else localStorage.setItem("pendingProducts", previousPending);
      } catch (rollbackError) {
        console.error("Não foi possível restaurar o estado anterior do marketplace.", rollbackError);
      }
      throw error;
    }
    if (nextCatalog) catalog.splice(0, catalog.length, ...nextCatalog);
  }

  function reviewMarketplaceProduct(productId, nextStatus, rejectionReason = "") {
    const message = document.getElementById("adminDashboardMessage");
    setMarketplaceMessage(message, "");
    if (currentUser?.role !== "admin") {
      setMarketplaceMessage(message, "Apenas administradores podem revisar anúncios.", true);
      return false;
    }

    let products;
    try {
      products = readPendingProductsFromStorage();
    } catch (error) {
      console.error("Não foi possível ler a fila de aprovação.", error);
      setMarketplaceMessage(message, "Não foi possível acessar a fila de aprovação. Revise os dados locais.", true);
      return false;
    }
    const product = products.find(item => item.id === productId && item.status === "pendente");
    if (!product) {
      setMarketplaceMessage(message, "Este anúncio já foi revisado ou não está mais disponível.", true);
      renderAdminDashboard();
      return false;
    }

    let nextCatalog = null;
    if (nextStatus === "aprovado") {
      const duplicate = catalog.some(item =>
        item.id === product.id || item.title.toLocaleLowerCase() === product.title.toLocaleLowerCase()
      );
      if (duplicate) {
        setMarketplaceMessage(message, "Já existe um produto equivalente no catálogo. O anúncio não foi aprovado.", true);
        return false;
      }
      nextCatalog = [...catalog, { ...product, status: "aprovado" }];
    }
    const nextPendingProducts = products.map(item =>
      item.id === productId
        ? { ...item, status: nextStatus, rejectionReason: nextStatus === "recusado" ? rejectionReason : "" }
        : item
    );
    try {
      persistMarketplaceChanges(nextPendingProducts, nextCatalog);
    } catch (error) {
      console.error("Não foi possível salvar a revisão do anúncio.", error);
      setMarketplaceMessage(message, "Não foi possível salvar a revisão neste navegador. Tente novamente.", true);
      return false;
    }

    if (nextStatus === "aprovado") {
      renderDeals();
      renderCatalog();
      renderCategoryPage(activeCategory);
      syncFavoriteButtons();
    }
    renderAdminDashboard();
    setMarketplaceMessage(message, nextStatus === "aprovado"
      ? "Produto aprovado e publicado no catálogo."
      : "Anúncio recusado. O vendedor verá o status atualizado.");
    return true;
  }

  function updateUserHeader() {
    const loginButton = document.getElementById("loginOpen");
    const greeting = document.getElementById("userGreeting");
    const ordersButton = document.getElementById("ordersOpen");
    const isLoggedIn = Boolean(currentUser?.logado);
    const sellerButton = document.getElementById("sellerDashboardOpen");
    const adminButton = document.getElementById("adminDashboardOpen");
    loginButton.hidden = isLoggedIn;
    greeting.hidden = !isLoggedIn;
    ordersButton.hidden = !isLoggedIn;
    sellerButton.hidden = !isLoggedIn || currentUser.role !== "seller";
    adminButton.hidden = !isLoggedIn || currentUser.role !== "admin";
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
    if (page === "seller" && currentUser?.role !== "seller") page = "home";
    if (page === "admin" && currentUser?.role !== "admin") page = "home";
    const pageTargets = { home: "storeHome", category: "categoryPage", info: "infoPage", product: "productPage", orders: "ordersPage", user: "userPage", checkout: "checkoutPage", success: "successPage", register: "registerPage", seller: "sellerDashboard", admin: "adminDashboard" };
    document.getElementById("skipLink").href = `#${pageTargets[page] || pageTargets.home}`;
    document.getElementById("storeHome").hidden = page !== "home";
    document.getElementById("categoryPage").hidden = page !== "category";
    document.getElementById("infoPage").hidden = page !== "info";
    document.getElementById("productPage").hidden = page !== "product";
    const userPage = document.getElementById("userPage");
    userPage.hidden = page !== "user";
    userPage.classList.toggle("hidden", page !== "user");
    if (page === "user") {
      const name = currentUser?.nome || "piloto";
      document.getElementById("userPageName").textContent = name;
      document.getElementById("userSidebarName").textContent = name;
      document.getElementById("userPageError").hidden = true;
      renderRecommendations();
    }
    const registerPage = document.getElementById("registerPage");
    registerPage.hidden = page !== "register";
    registerPage.classList.toggle("hidden", page !== "register");
    ["ordersPage", "checkoutPage", "successPage"].forEach(id => {
      const pageElement = document.getElementById(id);
      const isHidden = page !== id.replace("Page", "").toLowerCase();
      pageElement.hidden = isHidden;
      pageElement.classList.toggle("hidden", isHidden);
    });
    const sellerDashboard = document.getElementById("sellerDashboard");
    const adminDashboard = document.getElementById("adminDashboard");
    sellerDashboard.hidden = page !== "seller";
    sellerDashboard.classList.toggle("hidden", page !== "seller");
    adminDashboard.hidden = page !== "admin";
    adminDashboard.classList.toggle("hidden", page !== "admin");
    if (page === "seller") renderSellerDashboard();
    if (page === "admin") renderAdminDashboard();
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
      seller: document.getElementById("sellerDashboardName"),
      admin: document.getElementById("adminProductsTitle"),
      register: document.getElementById("registerTitle"),
      user: document.getElementById("userPageTitle")
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
    const sellerProducts = products.filter(product => product.sellerEmail).reverse();
    const storefrontProducts = [...sellerProducts, ...products.filter(product => !product.sellerEmail)];
    document.getElementById("recTitle").textContent = searchTerm ? `Resultados para “${searchTerm}”` : activeCategory === "todos" ? "Mais vendidos" : activeCategory === "ofertas" ? "Todas as ofertas" : LABELS[activeCategory];
    document.getElementById("recSub").textContent = `${products.length} produtos encontrados`;
    document.getElementById("recGrid").innerHTML = products.length ? storefrontProducts.slice(0, 10).map(cardHTML).join("") : `<div class="empty-state"><strong>Nenhum produto encontrado</strong><span>Tente buscar por outro nome ou categoria.</span></div>`;
  }

  function renderRecommendations() {
    const grid = document.getElementById("recommendedGrid");
    const products = getRandomProducts(4);
    grid.innerHTML = products.map(product => {
      const title = escapeHTML(product.title);
      const imageUrl = escapeHTML(product.imageUrl || "");
      const category = escapeHTML(LABELS[product.cat] || "Automobilismo");
      const quotePool = [...recommendationReviews];
      const reviewCount = 2 + Math.floor(Math.random() * 2);
      const reviewsHTML = Array.from({ length: reviewCount }, () => {
        const quoteIndex = Math.floor(Math.random() * quotePool.length);
        const quote = escapeHTML(quotePool.splice(quoteIndex, 1)[0]);
        const reviewer = escapeHTML(recommendationReviewers[Math.floor(Math.random() * recommendationReviewers.length)]);
        return `<article class="user-review">
          <div class="user-review-meta">
            <span class="user-review-stars" aria-label="5 de 5 estrelas">★★★★★</span>
            <span class="user-review-demo-tag">Relato fictício</span>
          </div>
          <p class="user-review-author">${reviewer}</p>
          <p class="user-review-comment">“${quote}”</p>
        </article>`;
      }).join("");
      const imageHTML = imageUrl
        ? `<img class="user-rec-product-image" src="${imageUrl}" alt="${title}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="user-rec-product-image-fallback" hidden>${ICONS[product.cat] || ""}</span>`
        : `<span class="user-rec-product-image-fallback">${ICONS[product.cat] || ""}</span>`;

      return `<article class="card user-recommendation-card" data-product="${title}" tabindex="0" aria-label="Ver detalhes de ${title}">
        ${imageHTML}
        <div class="user-rec-product-info">
          <span class="user-rec-product-category">${category}</span>
          <h3 class="user-rec-product-title">${title}</h3>
          <p class="user-rec-product-price">R$ ${money(product.price)}</p>
        </div>
        <div class="user-review-list">${reviewsHTML}</div>
      </article>`;
    }).join("");
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
    const imageURL = escapeHTML(product.imageUrl || "");
    return `<article class="panel-item">
      <a class="panel-item-icon panel-item-link" href="#produto" data-panel-product="${title}" aria-label="Ver detalhes de ${title}">${imageURL ? `<img class="product-photo" src="${imageURL}" alt="" loading="lazy">` : ICONS[product.cat]}</a>
      <div class="panel-item-copy"><a class="panel-item-title panel-item-link" href="#produto" data-panel-product="${title}">${title}</a><div class="panel-item-price">R$ ${money(product.price)}</div></div>
      ${actions}
    </article>`;
  }

  function renderFavorites() {
    const list = [...favorites].map(title => catalog.find(product => product.title === title)).filter(Boolean);
    document.getElementById("favoritesCount").textContent = favorites.size;
    document.getElementById("favoritesList").innerHTML = list.length ? list.map(product => panelItem(product,
      `<button class="item-remove" type="button" data-remove-favorite="${escapeHTML(product.title)}" aria-label="Remover ${escapeHTML(product.title)} dos favoritos">&times;</button>`
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
    document.getElementById("cartList").innerHTML = products.length ? products.map(({ product, quantity }) => {
      const title = escapeHTML(product.title);
      return panelItem(product,
        `<div class="cart-quantity"><button type="button" data-cart-action="${title}" data-delta="down" aria-label="Diminuir quantidade de ${title}">−</button><span aria-live="polite">${quantity}</span><button type="button" data-cart-action="${title}" data-delta="up" aria-label="Aumentar quantidade de ${title}">+</button><button class="item-remove remove" type="button" data-cart-action="${title}" aria-label="Remover ${title} do carrinho">&times;</button></div>`
      );
    }).join("") : `<div class="panel-empty"><strong>Seu carrinho está vazio</strong><span>Adicione equipamentos e eles aparecerão aqui.</span></div>`;
    const subtotal = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const { shipping, total } = calculateCheckoutTotals(subtotal);
    const shippingLabel = shipping === 0 ? "Grátis" : `R$ ${money(shipping)}`;
    document.getElementById("cartSummary").innerHTML = products.length ? `
      <div class="cart-summary-line"><span>Subtotal</span><strong>R$ ${money(subtotal)}</strong></div>
      <div class="cart-summary-line"><span>Frete</span><strong class="${shipping === 0 ? "free-shipping" : ""}">${shippingLabel}</strong></div>
      <div class="cart-total"><span>Total</span><span>R$ ${money(total)}</span></div>
      <button class="panel-primary" type="button" data-open-checkout>Finalizar Compra</button>` : "";
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

  function openUserPage() {
    if (!currentUser) {
      document.getElementById("loginError").hidden = true;
      openScreen("loginScreen");
      return;
    }
    closeScreens();
    showAppPage("user");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("userGreeting").addEventListener("click", openUserPage);
  document.getElementById("userPage").addEventListener("click", e => {
    const action = e.target.closest("[data-user-action]");
    if (!action) return;

    document.querySelectorAll(".user-account-menu [data-user-action]").forEach(button => {
      button.classList.toggle("active", button === action);
    });

    if (action.dataset.userAction === "summary") {
      closeScreens();
      showAppPage("user");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (action.dataset.userAction === "orders") {
      navigateToOrders();
    } else if (action.dataset.userAction === "favorites") {
      openScreen("favoritesScreen");
    } else if (action.dataset.userAction === "logout") {
      const error = document.getElementById("userPageError");
      error.hidden = true;
      try {
        localStorage.removeItem("user");
      } catch (storageError) {
        console.error("Não foi possível encerrar a sessão neste navegador.", storageError);
        error.textContent = "Não foi possível encerrar a sessão neste navegador. Tente novamente.";
        error.hidden = false;
        return;
      }
      currentUser = null;
      updateUserHeader();
      showAppPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.getElementById("ordersOpen").addEventListener("click", navigateToOrders);
  document.getElementById("sellerDashboardOpen").addEventListener("click", () => {
    if (currentUser?.role !== "seller") return;
    showAppPage("seller");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("adminDashboardOpen").addEventListener("click", () => {
    if (currentUser?.role !== "admin") return;
    showAppPage("admin");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelectorAll(".marketplace-dashboard").forEach(dashboard => {
    dashboard.addEventListener("click", event => {
      const homeButton = event.target.closest("[data-marketplace-home]");
      if (homeButton) {
        event.preventDefault();
        showAppPage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const scrollButton = event.target.closest("[data-dashboard-scroll]");
      if (scrollButton) {
        document.getElementById(scrollButton.dataset.dashboardScroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const logoutButton = event.target.closest("[data-marketplace-logout]");
      if (!logoutButton) return;
      try {
        localStorage.removeItem("user");
      } catch (error) {
        console.error("Não foi possível encerrar a sessão neste navegador.", error);
        const message = dashboard.id === "sellerDashboard"
          ? document.getElementById("sellerFormMessage")
          : document.getElementById("adminDashboardMessage");
        setMarketplaceMessage(message, "Não foi possível encerrar a sessão. Tente novamente.", true);
        return;
      }
      currentUser = null;
      updateUserHeader();
      showAppPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
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

  function renderProductReviews() {
    const quotePool = [...recommendationReviews];
    document.getElementById("productReviews").innerHTML = Array.from({ length: 3 }, () => {
      const quoteIndex = Math.floor(Math.random() * quotePool.length);
      const quote = escapeHTML(quotePool.splice(quoteIndex, 1)[0]);
      const reviewer = escapeHTML(recommendationReviewers[Math.floor(Math.random() * recommendationReviewers.length)]);
      return `<article class="product-review">
        <div class="product-review-meta">
          <span class="product-review-stars" role="img" aria-label="5 de 5 estrelas">★★★★★</span>
          <span class="product-review-demo">Relato fictício</span>
        </div>
        <strong>${reviewer}</strong>
        <p>“${quote}”</p>
      </article>`;
    }).join("");
  }

  function renderRelatedProducts(currentProduct) {
    const products = getRandomProducts(4, catalog.filter(product => product.title !== currentProduct.title));
    document.getElementById("relatedProductsGrid").innerHTML = products.map(cardHTML).join("");
    syncFavoriteButtons();
  }

  function openProduct(title) {
    const product = catalog.find(item => item.title === title);
    if (!product) return;
    productOrigin = document.getElementById("categoryPage").hidden ? "home" : "category";
    document.getElementById("productDetailTitle").textContent = product.title;
    document.getElementById("productDetailPrice").textContent = money(product.price);
    document.getElementById("productBreadcrumbCategory").textContent = LABELS[product.cat] || "Produtos";
    document.getElementById("productInstallment").textContent = `em 10x de R$ ${money(product.price / 10)} sem juros`;
    document.getElementById("productDescription").textContent =
      `${product.title} é uma opção selecionada da categoria ${LABELS[product.cat] || "automobilismo"}, pensada para oferecer desempenho, qualidade e confiança nos seus treinos e competições. Confira as especificações do produto antes de finalizar seu pedido.`;
    document.getElementById("productQuantity").value = "1";
    const productGallery = document.getElementById("productGalleryMain");
    productGallery.innerHTML = ICONS[product.cat] || "";
    productGallery.classList.remove("zoomed");
    if (product.imageUrl) {
      addProductImage(productGallery, product);
      productGallery.setAttribute("role", "button");
      productGallery.setAttribute("tabindex", "0");
      productGallery.setAttribute("aria-label", `Ampliar imagem de ${product.title}`);
    }
    renderProductReviews();
    renderRelatedProducts(product);
    showAppPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const productGallery = document.getElementById("productGalleryMain");
  function toggleProductImageZoom() {
    if (!productGallery.querySelector(".product-photo")) return;
    const zoomed = productGallery.classList.toggle("zoomed");
    productGallery.setAttribute("aria-label", `${zoomed ? "Reduzir" : "Ampliar"} imagem do produto`);
  }
  productGallery.addEventListener("click", toggleProductImageZoom);
  productGallery.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    toggleProductImageZoom();
  });

  document.getElementById("productPageContent").addEventListener("click", e => {
    const add = e.target.closest("[data-detail-add]");
    const buy = e.target.closest("[data-detail-buy]");
    if (!add && !buy) return;
    const title = document.getElementById("productDetailTitle").textContent;
    const quantityInput = document.getElementById("productQuantity");
    if (!quantityInput.reportValidity()) return;
    const quantity = Number(quantityInput.value);
    cart.set(title, (cart.get(title) || 0) + quantity);
    updateCart();
    if (buy) openCheckout();
    else showCartToast(`${quantity} item(ns) adicionado(s) ao carrinho.`);
  });

  let cartToastTimer;
  function showCartToast(message) {
    const toast = document.getElementById("cartToast");
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(cartToastTimer);
    cartToastTimer = window.setTimeout(() => { toast.hidden = true; }, 2600);
  }

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

  function openCheckout() {
    closeScreens();
    const products = [...cart.entries()].map(([title, quantity]) => ({ product: catalog.find(item => item.title === title), quantity })).filter(item => item.product);
    const productList = document.getElementById("checkoutProductList");
    const summaryItems = document.getElementById("checkoutItems");
    productList.innerHTML = products.length ? products.map(({ product, quantity }) => `
      <article class="checkout-product">
        <div class="checkout-product-image">${product.imageUrl ? `<img src="${escapeHTML(product.imageUrl)}" alt="" loading="lazy">` : ICONS[product.cat]}</div>
        <div class="checkout-product-info"><strong>${escapeHTML(product.title)}</strong><span>Quantidade: ${quantity}</span></div>
        <strong class="checkout-product-price">R$ ${money(product.price * quantity)}</strong>
      </article>`).join("") : `<p class="checkout-empty">Seu carrinho está vazio. Adicione produtos antes de continuar.</p>`;
    summaryItems.innerHTML = products.map(({ product, quantity }) =>
      `<div class="checkout-item"><span>${quantity}x ${escapeHTML(product.title)}</span><strong>R$ ${money(product.price * quantity)}</strong></div>`
    ).join("");
    checkoutProductSubtotal = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    document.getElementById("checkoutSubtotal").textContent = `R$ ${money(checkoutProductSubtotal)}`;
    document.getElementById("checkoutBuyerName").textContent = currentUser?.nome || "Cliente demonstrativo";
    document.getElementById("checkoutBuyerCpf").textContent = currentUser?.cpf
      ? `CPF: ${currentUser.cpf}`
      : "CPF fictício: 000.000.000-00";
    document.getElementById("confirmPayment").disabled = false;
    checkoutError.hidden = true;
    document.getElementById("checkoutForm").reset();
    syncPaymentSelection();
    showAppPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.body.addEventListener("click", e => {
    if (e.target.closest("[data-open-checkout]")) openCheckout();
  });
  const checkoutForm = document.getElementById("checkoutForm");
  const cardFields = document.getElementById("cardFields");
  const checkoutError = document.getElementById("checkoutError");
  const pixModal = document.getElementById("pixModal");
  let checkoutProductSubtotal = 0;
  let pixSimulationTimeout;

  function syncPaymentSelection() {
    const selectedPayment = checkoutForm.querySelector('input[name="payment"]:checked')?.value;
    const isCardSelected = selectedPayment === "card";
    cardFields.hidden = !isCardSelected;
    cardFields.classList.toggle("hidden", !isCardSelected);
    cardFields.querySelectorAll("input").forEach(input => { input.required = isCardSelected; });
    checkoutForm.querySelectorAll(".payment-option").forEach(option => {
      option.classList.toggle("selected", option.querySelector('input[name="payment"]').checked);
    });
    checkoutForm.querySelectorAll(".delivery-option").forEach(option => {
      option.classList.toggle("selected", option.querySelector('input[name="delivery"]').checked);
    });
    const deliveryMethod = checkoutForm.querySelector('input[name="delivery"]:checked')?.value || "free";
    const totals = calculateCheckoutTotals(checkoutProductSubtotal, selectedPayment, deliveryMethod);
    const shippingLabel = totals.shipping === 0 ? "Grátis" : `R$ ${money(totals.shipping)}`;
    const standardShipping = calculateCheckoutTotals(checkoutProductSubtotal, selectedPayment, "free").shipping;
    document.getElementById("checkoutShipping").textContent = shippingLabel;
    document.getElementById("checkoutShipping").classList.toggle("free-shipping", totals.shipping === 0);
    document.getElementById("checkoutTotal").textContent = `R$ ${money(totals.total)}`;
    document.getElementById("checkoutPixDiscount").hidden = totals.pixDiscount === 0;
    document.getElementById("checkoutPixDiscountValue").textContent = `-R$ ${money(totals.pixDiscount)}`;
    document.getElementById("deliveryOptionTitle").textContent = standardShipping === 0 ? "Frete Grátis" : "Entrega";
    document.getElementById("deliveryOptionPrice").textContent = standardShipping === 0 ? "Grátis" : `R$ ${money(standardShipping)}`;
  }
  checkoutForm.addEventListener("change", syncPaymentSelection);
  document.getElementById("checkoutBack").addEventListener("click", () => {
    showAppPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function createDemoOrder(paymentMethod) {
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
    const subtotal = orderItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const deliveryMethod = checkoutForm.querySelector('input[name="delivery"]:checked')?.value || "free";
    const { shipping, pixDiscount, total } = calculateCheckoutTotals(subtotal, paymentMethod, deliveryMethod);
    const order = {
      id: orderId,
      date: new Date().toISOString(),
      items: orderItems,
      subtotal,
      shipping,
      pixDiscount,
      total,
      paymentMethod,
      delivery: deliveryMethod,
      status: "Simulação concluída (não pago)"
    };
    orders.unshift(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");
    cart.clear();
    updateCart(false);
    document.getElementById("successOrderId").textContent = `Pedido demonstrativo: ${order.id}`;
  }

  function completeDemoPayment(paymentMethod) {
    const confirmButton = document.getElementById("confirmPayment");
    const loading = document.getElementById("paymentLoading");
    try {
      createDemoOrder(paymentMethod);
    } catch (error) {
      console.error("Não foi possível registrar o pedido demonstrativo.", error);
      const detail = error instanceof SyntaxError
        ? "Os dados salvos do carrinho ou do histórico estão inválidos. Revise o armazenamento local e tente novamente."
        : error.message;
      checkoutError.textContent = `Não foi possível concluir a simulação: ${detail}`;
      checkoutError.hidden = false;
      confirmButton.disabled = false;
      loading.hidden = true;
      loading.classList.add("hidden");
      loading.setAttribute("aria-hidden", "true");
      hidePixModal();
      return;
    }
    loading.hidden = true;
    loading.classList.add("hidden");
    loading.setAttribute("aria-hidden", "true");
    hidePixModal();
    showAppPage("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showPixModal() {
    const alphabet = "0123456789abcdef";
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    const demoToken = Array.from(randomBytes, byte => alphabet[byte % alphabet.length]).join("");
    const nonPayablePayload = `DEMO-ONLY-NOT-PAYABLE-${demoToken}`;
    document.getElementById("pixQrCode").src =
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(nonPayablePayload)}`;
    document.getElementById("pixCopyCode").value = demoToken;
    document.getElementById("pixCopyStatus").textContent = "";
    pixModal.hidden = false;
    pixModal.classList.remove("hidden");
    pixModal.setAttribute("aria-hidden", "false");
    document.getElementById("cancelPix").focus();
    pixSimulationTimeout = window.setTimeout(() => completeDemoPayment("pix"), 7000);
  }

  function hidePixModal() {
    window.clearTimeout(pixSimulationTimeout);
    pixSimulationTimeout = undefined;
    pixModal.hidden = true;
    pixModal.classList.add("hidden");
    pixModal.setAttribute("aria-hidden", "true");
  }

  checkoutForm.addEventListener("submit", event => {
    event.preventDefault();
    const confirmButton = document.getElementById("confirmPayment");
    const loading = document.getElementById("paymentLoading");
    checkoutError.hidden = true;
    if (!cart.size) {
      checkoutError.textContent = "Seu carrinho está vazio. Adicione produtos antes de continuar.";
      checkoutError.hidden = false;
      return;
    }
    confirmButton.disabled = true;
    const paymentMethod = checkoutForm.querySelector('input[name="payment"]:checked')?.value;
    if (paymentMethod === "pix") {
      showPixModal();
      return;
    }
    if (paymentMethod !== "card") {
      checkoutError.textContent = "Selecione uma forma de pagamento para continuar.";
      checkoutError.hidden = false;
      confirmButton.disabled = false;
      return;
    }
    loading.hidden = false;
    loading.classList.remove("hidden");
    loading.setAttribute("aria-hidden", "false");
    window.setTimeout(() => {
      completeDemoPayment("card");
    }, 2000);
  });

  async function copyPixDemoCode() {
    const pixCopyCode = document.getElementById("pixCopyCode");
    const status = document.getElementById("pixCopyStatus");
    try {
      await navigator.clipboard.writeText(pixCopyCode.value);
    } catch (error) {
      pixCopyCode.focus();
      pixCopyCode.select();
      const copied = document.execCommand("copy");
      if (!copied) {
        status.textContent = "Não foi possível copiar automaticamente. Selecione e copie o código manualmente.";
        console.error("Não foi possível copiar o código Pix demonstrativo.", error);
        return;
      }
    }
    status.textContent = "Código demonstrativo copiado.";
  }

  document.getElementById("copyPixCode").addEventListener("click", copyPixDemoCode);
  document.getElementById("cancelPix").addEventListener("click", () => {
    hidePixModal();
    document.getElementById("confirmPayment").disabled = false;
    document.getElementById("confirmPayment").focus();
  });
  pixModal.addEventListener("click", event => {
    if (event.target === pixModal || event.target.closest("[data-cancel-pix]")) {
      hidePixModal();
      document.getElementById("confirmPayment").disabled = false;
      document.getElementById("confirmPayment").focus();
    }
  });
  document.getElementById("backToHome").addEventListener("click", () => {
    document.getElementById("confirmPayment").disabled = false;
    checkoutForm.reset();
    checkoutError.hidden = true;
    document.getElementById("successOrderId").textContent = "";
    document.getElementById("checkoutProductList").innerHTML = "";
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
  const sellerMediaInput = document.getElementById("sellerMediaInput");
  document.getElementById("sellerMediaButton").addEventListener("click", () => sellerMediaInput.click());
  sellerMediaInput.addEventListener("change", () => {
    const notice = document.getElementById("sellerMediaNotice");
    const selectedFiles = [...sellerMediaInput.files].map(file => file.name);
    notice.textContent = selectedFiles.length
      ? `${selectedFiles.length} arquivo(s) selecionado(s): ${selectedFiles.join(", ")}. Não serão enviados.`
      : "Seleção local para demonstração; os arquivos não serão enviados.";
  });
  document.getElementById("sellerProductForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.getElementById("sellerFormMessage");
    setMarketplaceMessage(message, "");
    if (currentUser?.role !== "seller" || !currentUser.email) {
      setMarketplaceMessage(message, "Entre com a conta de vendedor para publicar anúncios.", true);
      return;
    }

    const title = form.elements.title.value.trim();
    const category = form.elements.category.value;
    const price = Number(form.elements.price.value);
    const description = form.elements.description.value.trim();
    let imageURL;
    try {
      imageURL = new URL(form.elements.imageUrl.value.trim());
      if (!["http:", "https:"].includes(imageURL.protocol)) throw new TypeError("Protocolo de imagem inválido.");
    } catch (error) {
      setMarketplaceMessage(message, "Informe uma URL de imagem válida iniciada por http:// ou https://.", true);
      return;
    }
    if (!title || !CATS.includes(category) || !Number.isFinite(price) || price <= 0 || !description) {
      setMarketplaceMessage(message, "Preencha o título, a categoria, o preço e a descrição do anúncio.", true);
      return;
    }

    let products;
    try {
      products = readPendingProductsFromStorage();
    } catch (error) {
      console.error("Não foi possível ler os anúncios salvos.", error);
      setMarketplaceMessage(message, "Não foi possível acessar os anúncios salvos. Revise os dados locais.", true);
      return;
    }
    const normalizedTitle = title.toLocaleLowerCase();
    const titleAlreadyUsed = catalog.some(product => product.title.toLocaleLowerCase() === normalizedTitle) ||
      products.some(product => product.status !== "recusado" && product.title.toLocaleLowerCase() === normalizedTitle);
    if (titleAlreadyUsed) {
      setMarketplaceMessage(message, "Já existe um anúncio com esse título. Escolha um título diferente.", true);
      return;
    }

    const product = {
      id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `seller-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title,
      cat: category,
      price: Math.round(price * 100) / 100,
      imageUrl: imageURL.href,
      description,
      old: null,
      discount: null,
      rating: "0.0",
      reviews: 0,
      status: "pendente",
      sellerEmail: currentUser.email,
      sellerName: currentUser.nome,
      createdAt: new Date().toISOString()
    };
    try {
      persistMarketplaceChanges([...products, product], null);
    } catch (error) {
      console.error("Não foi possível salvar o novo anúncio.", error);
      setMarketplaceMessage(message, "Não foi possível salvar o anúncio neste navegador. Verifique o armazenamento e tente novamente.", true);
      return;
    }
    form.reset();
    document.getElementById("sellerMediaNotice").textContent = "Seleção local para demonstração; os arquivos não serão enviados.";
    renderSellerDashboard();
    setMarketplaceMessage(message, "Anúncio enviado e aguardando aprovação do administrador.");
  });

  let rejectionProductId = null;
  let rejectionTrigger = null;
  const rejectionModal = document.getElementById("rejectionModal");
  const rejectionReasonInput = document.getElementById("rejectionReason");
  function closeRejectionModal(restoreFocus = true) {
    rejectionModal.hidden = true;
    rejectionModal.classList.add("hidden");
    rejectionProductId = null;
    if (restoreFocus && rejectionTrigger?.isConnected) rejectionTrigger.focus();
    rejectionTrigger = null;
  }
  document.getElementById("adminProductList").addEventListener("click", event => {
    const approveButton = event.target.closest("[data-approve-product]");
    const rejectButton = event.target.closest("[data-reject-product]");
    if (approveButton) {
      reviewMarketplaceProduct(approveButton.dataset.approveProduct, "aprovado");
      return;
    }
    if (!rejectButton) return;
    if (currentUser?.role !== "admin") {
      setMarketplaceMessage(document.getElementById("adminDashboardMessage"), "Apenas administradores podem revisar anúncios.", true);
      return;
    }
    let product;
    try {
      product = readPendingProductsFromStorage().find(item =>
        item.id === rejectButton.dataset.rejectProduct && item.status === "pendente"
      );
    } catch (error) {
      console.error("Não foi possível ler a fila de aprovação.", error);
      setMarketplaceMessage(document.getElementById("adminDashboardMessage"), "Não foi possível acessar a fila de aprovação. Revise os dados locais.", true);
      return;
    }
    if (!product) {
      setMarketplaceMessage(document.getElementById("adminDashboardMessage"), "Este anúncio já foi revisado ou não está mais disponível.", true);
      renderAdminDashboard();
      return;
    }
    rejectionProductId = product.id;
    rejectionTrigger = rejectButton;
    document.getElementById("rejectionProductTitle").textContent = product.title;
    document.getElementById("rejectionModalError").hidden = true;
    rejectionReasonInput.value = "";
    rejectionModal.hidden = false;
    rejectionModal.classList.remove("hidden");
    rejectionReasonInput.focus();
  });
  document.getElementById("rejectionForm").addEventListener("submit", event => {
    event.preventDefault();
    const rejectionReason = rejectionReasonInput.value.trim();
    const error = document.getElementById("rejectionModalError");
    if (!rejectionReason) {
      error.textContent = "Informe um motivo para recusar o anúncio.";
      error.hidden = false;
      rejectionReasonInput.focus();
      return;
    }
    if (reviewMarketplaceProduct(rejectionProductId, "recusado", rejectionReason)) {
      closeRejectionModal(false);
    }
  });
  document.getElementById("cancelRejection").addEventListener("click", () => closeRejectionModal());
  rejectionModal.addEventListener("click", event => {
    if (event.target === rejectionModal) closeRejectionModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !rejectionModal.hidden) closeRejectionModal();
  });
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const loginError = document.getElementById("loginError");
    loginError.hidden = true;
    const email = e.currentTarget.querySelector('input[type="email"]').value.trim().toLowerCase();
    const isAdmin = ["admin@kart.com", "adm@gmail.com"].includes(email);
    const isSeller = ["vendedor@kart.com", "vendedor@gmail.com"].includes(email);
    const role = isAdmin ? "admin" : isSeller ? "seller" : "buyer";
    const nome = isAdmin ? "Administrador" : isSeller ? "Vendedor" : "Professor";
    try {
      currentUser = { nome, email, role, logado: true };
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
  const registerForm = document.getElementById("registerForm");
  const registerCpfInput = registerForm.querySelector('[name="cpf"]');
  registerCpfInput.addEventListener("input", () => {
    registerCpfInput.value = formatCPF(registerCpfInput.value);
  });
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.currentTarget;
    const registerError = document.getElementById("registerError");
    const nameInput = form.querySelector('[name="name"]');
    const nome = nameInput.value.trim();
    const email = form.querySelector('[name="email"]').value.trim().toLowerCase();
    const cpfDigits = registerCpfInput.value.replace(/\D/g, "");
    registerError.hidden = true;
    if (!nome) {
      registerError.textContent = "Informe seu nome para criar a conta.";
      registerError.hidden = false;
      nameInput.focus();
      return;
    }
    if (cpfDigits.length !== 11) {
      registerError.textContent = "Informe os 11 números do CPF.";
      registerError.hidden = false;
      registerCpfInput.focus();
      return;
    }

    const cpf = formatCPF(cpfDigits);
    registerCpfInput.value = cpf;
    const newUser = { nome, email, cpf, role: "buyer", logado: true };
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
