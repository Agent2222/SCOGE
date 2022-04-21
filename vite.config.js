import { defineConfig } from 'vite'
import dfxJson from "./dfx.json"
import path from "path"
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import commonjs from '@rollup/plugin-commonjs'
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
    // plugins:[
    //   esbuildCommonjs(['babylonjs']),
    // ]
  },
  build: {
    rollupOptions: {
      output: {
        dir: "dist/",
        format: "esm"
      }
      // https://rollupjs.org/guide/en/#big-list-of-options
    }
  }
})
