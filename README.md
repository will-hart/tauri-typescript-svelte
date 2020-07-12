# Tauri, Typescript, Svelte Template Repository

This repo provides a simple template for building a cross-platform app
using [tauri](https://github.com/tauri-apps/tauri), typescript and
[svelte](https://github.com/sveltejs/svelte). Stores are provided using
[immer](https://github.com/immerjs/immer) (see `stores/testStore.ts`).

The repo is not configured to use typescript in `.svelte` files. The
suggested approach here is to define the majority of logic in imported
`.ts` files. In particular, type-safe logic can be developed in `stores`
built using the `buildImmerActionStore` found in `immerActionStore.ts`.

## Getting started

1. Create a repo from the template repo.
2. Follow the steps to get started on the [tauri docs](https://tauri.studio/docs/getting-started/intro).
   In particular, node, Rust and `tauri-builder` must be installed.
3. in the repo directory run `yarn` to install dependencies.
4. Run `yarn dev` to build the app with hot reloading.
5. Run `yarn dev:client` to work on the client app in the browser
6. Run `yarn build` to bundle the app.

Refer to the [tauri docs](https://tauri.studio/docs) for more information
on configuring the application.

## Tailwind CSS

The `tailwind` branch tracks the master branch but with `tailwind CSS`
integrated. Start from this branch of the template if you want Tailwind
CSS integration.

## License

MIT, contributions welcome.
