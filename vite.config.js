import { defineConfig } from 'vite'
import dfxJson from "./dfx.json"
import path from "path"
import nodePolyfills from 'rollup-plugin-polyfill-node'

// List of all aliases for canisters
const aliases = Object.entries(dfxJson.canisters).reduce(
  (acc, [name, _value]) => {
    // Get the network name, or `local` by default.
    const networkName = process.env["DFX_NETWORK"] || "local"
    const outputRoot = path.join(
      __dirname,
      ".dfx",
      networkName,
      "canisters",
      name,
    )

    return {
      ...acc,
      ["dfx-generated/" + name]: path.join(outputRoot, name + ".js"),
    }
  },
  {},
)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy /api requests to your Express server
      '/create-checkout-session': {
        target: 'https://www.scoge.co/',  
        changeOrigin: true,
        secure: false,
      },
      '/session-status': {
        target: 'https://www.scoge.co/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      ...aliases,
    },
  },
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        oge: new URL('oge.html', import.meta.url).pathname,
        order: new URL('order.html', import.meta.url).pathname
      },
      output: {
        dir: "dist/",
        format: "esm"
      },
      plugins: [
        nodePolyfills(),
      ],
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
    chunkSizeWarningLimit: 1000000,
  }
})
