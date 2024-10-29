import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D0DKOIa7.mjs';
import { manifest } from './manifest_CB-B9kaH.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/components.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["../AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/components.astro", _page1],
    ["src/pages/index.astro", _page2]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "78677bf5-27dc-420c-97bf-610d4a51d976",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
