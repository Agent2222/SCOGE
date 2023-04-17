import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import dfxJson from "./dfx.json"
import path from "path"
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import commonjs from '@rollup/plugin-commonjs'
import { socket } from 'socket.io'
// import commonjs from '@rollup/plugin-commonjs'

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
  resolve: {
    alias: {
      ...aliases,
    },
    // Added below to fix BabylonJS
    plugins:[
      // esbuildCommonjs(['babylonjs']),
      nodePolyfills({
        // Whether to polyfill `node:` protocol imports.
        global: 'global',
        protocolImports: true,
      }),
    ]
  },
  define: {
    global: {},
  },
  build: {
    rollupOptions: {
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        records: new URL('records.html', import.meta.url).pathname,
      },
      output: {
        dir: "dist/",
        format: "esm"
      },
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
    chunkSizeWarningLimit: 1000000,
  }
})
