# Pokédex Gabriella

Uma Pokédex construída com **React + Vite**, consumindo a [PokéAPI](https://pokeapi.co/) para exibir listagem, busca, detalhes e filtragem de Pokémon por tipo elemental.

> Coded by Gabriella Muller Borges

---

## ✨ Funcionalidades

- **Home (`/`)** — lista os Pokémon principais em um grid de cards (imagem, nome e número da Pokédex), com carregamento assíncrono ("Carregando...") enquanto os dados da API chegam.
- **Busca (`/search?query=:nome`)** — barra de busca no topo que retorna o(s) resultado(s) correspondentes ao termo digitado, reaproveitando o card padrão da Home.
- **Detalhes do Pokémon (`/pokemon/:nome`)** — página individual com imagem em destaque, altura, peso, tipos (badges) e estatísticas base (HP, Ataque, Defesa, Especial Ataque, Especial Defesa, Velocidade).
- **Elementos (`/elements`)** — grade com todos os tipos de Pokémon (Fire, Water, Grass, Electric, Psychic, Dragon, Fairy, Stellar, etc.).
- **Pokémon por tipo (`/elements/:tipo`)** — ao clicar em um tipo, lista todos os Pokémon daquele elemento (ex: `/elements/fire` retorna Charmander, Charmeleon, Charizard, Vulpix...).

---

## 🧱 Stack Técnica

- **React** (via `react-jsx-dev-runtime`)
- **Vite** como bundler/dev server (com HMR/`@react-refresh`)
- **React Router DOM** para as rotas (`/`, `/search`, `/pokemon/:name`, `/elements`, `/elements/:type`)
- **styled-components** para toda a estilização (CSS-in-JS)
- **react-icons** (`md`, `cg`, `io5`) para ícones de navegação e UI
- **PokéAPI** (`https://pokeapi.co/api/v2`) como fonte de dados
- Sprites oficiais servidos via `raw.githubusercontent.com/PokeAPI/sprites`

---

## 📂 Estrutura de Pastas (conforme mapeado)

```
src/
├── main.jsx
├── App.jsx
├── index.css
├── pages/
│   ├── Home.jsx
│   ├── Search.jsx
│   ├── PokemonDetails.jsx
│   ├── Elements.jsx
│   └── ElementPokemons.jsx
└── components/
    ├── Nav/
    │   ├── Nav.jsx
    │   └── navStyle.js
    ├── Footer/
    │   ├── Footer.jsx
    │   └── FooterStyle.js
    ├── Cards/
    │   ├── PokemonCard.jsx
    │   ├── PokemonGrid.js
    │   └── detailsStyle.js
    └── Search/
        ├── searchForm.jsx
        └── FormStyle.js
```

---

## 🔌 Integração com a API

O projeto consome a PokéAPI diretamente no client (via `fetch`), usando uma variável de ambiente para a base da URL:

```
VITE_API_BASE_URL=https://pokeapi.co/api/v2/
```

Principais endpoints utilizados:
- `GET /pokemon/{name}` — detalhes de um Pokémon específico
- `GET /pokemon?limit=10000&offset=0` — listagem completa (usada para popular busca/filtragem)
- `GET /pokemon/{id}` — dados usados no grid da Home

Imagens: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`

---

## 🚀 Rodando o projeto localmente

```bash
# instalar dependências
npm install

# subir o servidor de desenvolvimento (Vite)
npm run dev
```

A aplicação sobe por padrão em:

```
http://localhost:5174
```

---

## 🗺️ Rotas

| Rota | Descrição |
|---|---|
| `/` | Home — grid com os Pokémon principais |
| `/search?query=:nome` | Resultado da busca por nome |
| `/pokemon/:nome` | Página de detalhes de um Pokémon |
| `/elements` | Lista de todos os tipos elementais |
| `/elements/:tipo` | Pokémon filtrados por tipo |

---

## 👤 Autoria

Projeto desenvolvido por **Gabriella Muller Borges**.
