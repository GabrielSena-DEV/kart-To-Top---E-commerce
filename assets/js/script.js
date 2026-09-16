  // ---------- Dados de produtos (mock) ----------
  const ICONS = {
    kart: `<svg viewBox="0 0 100 70" fill="none" stroke="#36373a" stroke-width="3"><circle cx="22" cy="52" r="12"/><circle cx="78" cy="52" r="12"/><path d="M22 52h30l10-28h20"/><rect x="34" y="30" width="20" height="8" rx="2" fill="#b82325" stroke="none"/></svg>`,
    capacete: `<svg viewBox="0 0 100 90" fill="none" stroke="#36373a" stroke-width="3"><path d="M15 55a35 35 0 0 1 70 0v10H15z"/><path d="M15 60h70v6H15z" fill="#b82325" stroke="none"/></svg>`,
    pneu: `<svg viewBox="0 0 100 100" fill="none" stroke="#36373a" stroke-width="4"><circle cx="50" cy="50" r="38"/><circle cx="50" cy="50" r="16" fill="#93a2a7" stroke="none"/></svg>`,
    indumentaria: `<svg viewBox="0 0 100 100" fill="none" stroke="#36373a" stroke-width="3"><path d="M35 15 20 28v15h10v42h40V43h10V28L65 15l-5 8H40z" fill="#b82325" fill-opacity=".15"/></svg>`,
    eletronica: `<svg viewBox="0 0 100 80" fill="none" stroke="#36373a" stroke-width="3"><rect x="10" y="15" width="80" height="50" rx="6"/><path d="M30 65v10h40V65" /><circle cx="50" cy="40" r="14" fill="#927768" stroke="none"/></svg>`,
    oficina: `<svg viewBox="0 0 100 100" fill="none" stroke="#36373a" stroke-width="4"><path d="M60 20 40 40 20 60l-5 20 20-5 20-20 20-20z"/></svg>`
  };

  const NAMES = {
    kart: ["Chassi de kart rotax 125cc","Kit corrente e coroa reforçada","Assento anatômico kevlar","Radiador de kart competição","Escapamento homologado CBA","Volante alcantara 320mm"],
    capacete: ["Capacete integral SA2020","Capacete kart infantil","Viseira anti-embaçante","Capacete carbono full face","Forro interno termorregulável"],
    pneu: ["Jogo de pneus slick traseiro","Jogo de pneus chuva dianteiro","Roda aro 5 alumínio forjado","Câmara de ar reforçada","Pneu misto treino"],
    indumentaria: ["Macacão ignífugo nível 2","Luva de piloto tato fino","Bota de corrida em couro","Balaclava anti-chamas","Colete de proteção costelas"],
    eletronica: ["Cronômetro de volta GPS","Transponder de cronometragem","Sistema de intercomunicação","Câmera onboard 4K","Central eletrônica programável"],
    oficina: ["Kit de chaves combinadas","Torquímetro de precisão","Macaco hidráulico portátil","Compressor de ar 12V","Suporte de bancada para kart"]
  };

  function money(v){ return v.toLocaleString('pt-BR',{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function makeProduct(cat, i){
    const base = 89 + (i*37 % 900);
    const hasDiscount = i % 3 !== 0;
    const old = hasDiscount ? Math.round(base * 1.28) : null;
    return {
      cat, title: NAMES[cat][i % NAMES[cat].length] + (i > NAMES[cat].length-1 ? " — edição " + (Math.floor(i/NAMES[cat].length)+1) : ""),
      price: base, old, rating: (3.8 + (i % 12)/10).toFixed(1),
      reviews: 12 + (i*7 % 480), discount: old ? Math.round(100 - (base/old*100)) : null
    };
  }

  function cardHTML(p){
    return `
    <div class="card" data-cat="${p.cat}">
      <div class="card-media">
        ${p.discount ? `<span class="badge">-${p.discount}%</span>` : ''}
        <div class="fav"><svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></div>
        ${ICONS[p.cat]}
      </div>
      <div class="card-body">
        <div class="card-cat">${LABELS[p.cat]}</div>
        <div class="card-title">${p.title}</div>
        <div class="stars">★★★★★ <span style="color:var(--ink)">${p.rating}</span> (${p.reviews})</div>
        <div class="price-row">
          ${p.old ? `<div class="price-old">R$ ${money(p.old)}</div>` : ''}
          <div class="price"><small>R$</small> ${money(p.price)}</div>
          <div class="installment">em até 6x sem juros</div>
        </div>
        <button class="add-btn" data-add>Adicionar ao carrinho</button>
      </div>
    </div>`;
  }

  const LABELS = {
    kart:"Karts & Peças", capacete:"Capacetes", pneu:"Pneus & Rodas",
    indumentaria:"Indumentária", eletronica:"Cronometragem", oficina:"Oficina"
  };

  const CATS = Object.keys(LABELS);

  // gera catálogo simulado
  let CATALOG = [];
  CATS.forEach(cat=>{
    for(let i=0;i<6;i++) CATALOG.push(makeProduct(cat,i));
  });

  // ---------- Ofertas relâmpago ----------
  const deals = CATALOG.filter(p=>p.discount && p.discount >= 20).slice(0,8);
  document.getElementById('dealsRow').innerHTML = deals.map(p=>`
    <div class="deal-card card" data-cat="${p.cat}">
      <div class="deal-timer"><span>Termina em <b>04:12:36</b></span></div>
      <div class="card-media">
        <span class="badge">-${p.discount}%</span>
        ${ICONS[p.cat]}
      </div>
      <div class="card-body">
        <div class="card-cat">${LABELS[p.cat]}</div>
        <div class="card-title">${p.title}</div>
        <div class="price-row">
          <div class="price-old">R$ ${money(p.old)}</div>
          <div class="price"><small>R$</small> ${money(p.price)}</div>
        </div>
        <button class="add-btn" data-add>Adicionar</button>
      </div>
    </div>`).join('');

  // ---------- Estado de "buscas recentes" (em memória, sem localStorage) ----------
  let recentSearches = [];

  function renderRecommended(){
    const recTitle = document.getElementById('recTitle');
    const recSub = document.getElementById('recSub');
    let pool;
    if(recentSearches.length){
      pool = CATALOG.filter(p => recentSearches.includes(p.cat));
      recTitle.textContent = "Baseado nas suas últimas buscas";
      recSub.textContent = "Você pesquisou por: " + recentSearches.map(c=>LABELS[c]).join(', ');
    } else {
      pool = [...CATALOG].sort(()=>Math.random()-0.5);
      recTitle.textContent = "Sugestões para você";
      recSub.textContent = "Ainda não detectamos buscas recentes — aqui vai uma seleção variada";
    }
    document.getElementById('recGrid').innerHTML = pool.slice(0,10).map(cardHTML).join('');
  }

  function renderMore(){
    const shuffled = [...CATALOG].sort(()=>Math.random()-0.5);
    document.getElementById('moreGrid').innerHTML = shuffled.slice(0,10).map(cardHTML).join('');
  }

  renderRecommended();
  renderMore();

  // ---------- Interações ----------
  let cartCount = 0;
  document.body.addEventListener('click', (e)=>{
    if(e.target.closest('[data-add]')){
      cartCount++;
      document.getElementById('cartCount').textContent = cartCount;
    }
  });

  document.getElementById('catList').addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-cat]');
    if(!btn) return;
    document.querySelectorAll('#catList button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    if(cat !== 'todos' && cat !== 'ofertas'){
      recentSearches = [cat, ...recentSearches.filter(c=>c!==cat)].slice(0,3);
      renderRecommended();
      document.getElementById('recGrid').scrollIntoView({behavior:'smooth', block:'start'});
    }
  });

  document.getElementById('searchInput').addEventListener('keydown', (e)=>{
    if(e.key !== 'Enter') return;
    const q = e.target.value.toLowerCase();
    const match = CATS.find(c => LABELS[c].toLowerCase().includes(q) || c.includes(q));
    if(match){
      recentSearches = [match, ...recentSearches.filter(c=>c!==match)].slice(0,3);
      renderRecommended();
      document.getElementById('recGrid').scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
