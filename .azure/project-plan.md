# Project Plan

**Status**: Planning
**Created**: 2026-11-05
**Mode**: AUGMENT

---

## 1. Project Overview

**Goal**: Preservar, aprimorar e apresentar a loja estática Kart to Top em português, mantendo o catálogo existente, a navegação por categorias, a busca, os favoritos, o carrinho em memória, promoções e newsletter em uma experiência responsiva. O projeto foi planejado para que cada módulo possa ser validado separadamente.

**App Type**: Static + API

**API Login**: No

**Mode**: AUGMENT

**Deployment Plan**: No deployment plan found

---

## 2. Frontend — Web App

| Component | Technology |
|-----------|-----------|
| **Language** | JavaScript |
| **Framework** | HTML5 + CSS3 + JavaScript vanilla |
| **Package Manager** | none |
| **Test Runner** | Node.js built-in test runner |
| **Mocking Library** | none |
| **Test Command** | node --test |

---

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| Azure Static Web Apps | Host and serve the static storefront and assets worldwide | — | http://localhost:8080 | Essential |

---

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|-----------|-----------|---------|
| Git | * | ✅ | 2.54.0.windows.1 |
| Node.js | Frontend — Web App | ✅ | v24.16.0 |
| Azure Static Web Apps CLI | Azure Static Web Apps | ❓ | Not detected |
| Modern web browser | Frontend — Web App | ❓ | Not detected |

### Debug

| Tool | Service(s) | Installed | Version |
|------|-----------|-----------|---------|
| VS Code | Frontend — Web App | ✅ | 1.143.1 |

---

## 5. Design System & UI

**Component Library**: Pico.css
**Style Direction**: Technical motorsport retail with an asphalt-dark foundation, competition-red accents, off-white surfaces, sharp 2px geometry, strong condensed headlines, and compact high-density product cards.
**Typography**: Rajdhani, Inter, system-ui

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#b82325` | Primary calls to action, active category tabs, brand accents, and promotion emphasis |
| `accent` | `#927768` | Warm secondary highlights for telemetry and racing-inspired details |
| `surface` | `#eaebec` | Main storefront background and quiet neutral regions |
| `text` | `#36373a` | Primary copy, navigation, and product names |
| `muted` | `#93a2a7` | Secondary copy, captions, inactive navigation, and metadata |
| `border` | `#c9cdcf` | Product card borders, separators, inputs, and controls |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Loja | `/` | Present the complete Kart to Top storefront, filtered catalog, promotions, and shopping interactions | header, nav, hero, grid, card-list, action-bar, footer |

### Sample Content

Loja — Produto:
| Produto | Categoria | Preço | Estado |
|---------|-----------|-------|--------|
| Chassi CRG Competição | Karts & Peças | R$ 4.890,00 | Em estoque |
| Capacete integral SA2020 | Capacetes | R$ 1.799,00 | 18% OFF |
| Jogo pneus slick traseiro | Pneus & Rodas | R$ 689,00 | Em estoque |
| Macacão ignífugo nível 2 | Indumentária | R$ 1.249,00 | Últimas unidades |
| Cronômetro de volta GPS | Cronometragem | R$ 999,00 | Em estoque |

Loja — Promoções: Capacete integral SA2020 · R$ 1.799,00 · Relâmpago
Loja — Newsletter: Frete grátis Sudeste acima de R$ 299 · Categorias disponíveis: Karts, Capacetes, Pneus, Indumentária, Cronometragem, Oficina

---

## 6. Project Structure

```
kart-To-Top---E-commerce/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── .azure/
│   └── project-plan.md
└── staticwebapp.config.json
```

---

## 7. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Render the complete static storefront | — | HTML storefront | 200 |
| 2 | GET | `/assets/css/style.css` | Serve the storefront stylesheet | — | CSS | 200, 404 |
| 3 | GET | `/assets/js/script.js` | Serve catalog and interaction logic | — | JavaScript | 200, 404 |

---

## 8. Next Steps

1. Run **azure-project-scaffold** to execute this plan
2. Run **azure-project-integrate** to wire the frontend to live data, smoke-test the backend, and create the migrations
3. Run **azure-debug-plan** → **azure-debug-generate** for Docker emulators and VS Code debugging
4. Run the **azure-deploy** agent when ready; it uses **azure-app-onboard** for architecture, cost estimation, IaC generation, provisioning, and health verification
