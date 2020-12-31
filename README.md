# [Xiang LI - Brainy is new sexy](https://magiciendecode.fr/)

## Dev

- dev deploy
  `npm start`

## How to add a category?

- 1. create a folder XX in src/data
- 2. copy an example of title.json
- 3. add an tiem in src/components/menu-item.tsx
- 4. add a couple in src/components/category.tsx
- 5. create a folder XX in src/pages and add index.tsx in it
- 6. add XXJson in src/components/header.tsx in allItems for search auto-complete

## How to add an article?

- 1. add XX.md in src/data/{category}
- 2. add infos in src/data/{category}/title.json
- 3. make sure (xx.md) path == (title.js) type/page

## Eslint check

run `npm run lint`

## Less for css

A global css file is in `src/layouts/gloable.less`

## Layout

A global layout file is in `src/layouts/index.tsx`
