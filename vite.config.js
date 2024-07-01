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
      '/create-checkout-session': 'https://www.scoge.co',
      '/session-status': 'https://www.scoge.co',
    },
  },
  resolve: {
    alias: {
      ...aliases,
    },
  },
  assetsInclude: ['**/*.glb','**/test.json'],
  build: {
    rollupOptions: {
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        oge: new URL('oge.html', import.meta.url).pathname,
        order: new URL('order.html', import.meta.url).pathname,
        i1: new URL('assets/images/items/scoge_blel-bite.jpg', import.meta.url).pathname,
        i2: new URL('assets/images/items/scoge_blel.jpg', import.meta.url).pathname,
        i3: new URL('assets/images/items/scoge_blue-ssand.jpg', import.meta.url).pathname,
        i4: new URL('assets/images/items/scoge_classic-thread.jpg', import.meta.url).pathname,
        i5: new URL('assets/images/items/scoge_clel-bite.jpg', import.meta.url).pathname,
        i6: new URL('assets/images/items/scoge_clel.jpg', import.meta.url).pathname,
        i7: new URL('assets/images/items/scoge_clim-leaf.jpg', import.meta.url).pathname,
        i8: new URL('assets/images/items/scoge_combat-glove.jpg', import.meta.url).pathname,
        i9: new URL('assets/images/items/scoge_cylinder.jpg', import.meta.url).pathname,
        i10: new URL('assets/images/items/scoge_digiGel-case.jpg', import.meta.url).pathname,
        i12: new URL('assets/images/items/scoge_digisette-ring.jpg', import.meta.url).pathname,
        i13: new URL('assets/images/items/scoge_flex-knife.jpg', import.meta.url).pathname,
        i14: new URL('assets/images/items/scoge_food-1.jpg', import.meta.url).pathname,
        i15: new URL('assets/images/items/scoge_food-2.jpg', import.meta.url).pathname,
        i16: new URL('assets/images/items/scoge_food-3.jpg', import.meta.url).pathname,
        i17: new URL('assets/images/items/scoge_grel-bite.jpg', import.meta.url).pathname,
        i18: new URL('assets/images/items/scoge_grel.jpg', import.meta.url).pathname,
        i19: new URL('assets/images/items/scoge_magna-case-1.jpg', import.meta.url).pathname,
        i20: new URL('assets/images/items/scoge_magna-case-2.jpg', import.meta.url).pathname,
        i21: new URL('assets/images/items/scoge_nylonic-fabric.jpg', import.meta.url).pathname,
        i22: new URL('assets/images/items/scoge_red-ssand.jpg', import.meta.url).pathname,
        i23: new URL('assets/images/items/scoge_rel-bite.jpg', import.meta.url).pathname,
        i24: new URL('assets/images/items/scoge_rel.jpg', import.meta.url).pathname,
        i25: new URL('assets/images/items/scoge_sateen-fabric.jpg', import.meta.url).pathname,
        i26: new URL('assets/images/items/scoge_satin-fabric.jpg', import.meta.url).pathname,
        i27: new URL('assets/images/items/scoge_seal-case.jpg', import.meta.url).pathname,
        i28: new URL('assets/images/items/scoge_sonic-baiter.jpg', import.meta.url).pathname,
        i29: new URL('assets/images/items/scoge_ssand.jpg', import.meta.url).pathname,
        i30: new URL('assets/images/items/scoge_taos-fabric.jpg', import.meta.url).pathname,
        i31: new URL('assets/images/items/scoge_unknown-glass-2.jpg', import.meta.url).pathname,
        i32: new URL('assets/images/items/scoge_unknown-glass.jpg', import.meta.url).pathname,
        i33: new URL('assets/images/items/scoge_unknown-metal.jpg', import.meta.url).pathname,
        i34: new URL('assets/images/items/scoge_unknown-rubber.jpg', import.meta.url).pathname,
        i35: new URL('assets/images/items/scoge_unknown-stone.jpg', import.meta.url).pathname,
        i36: new URL('assets/images/items/scoge_unknown-wood.jpg', import.meta.url).pathname,
        i37: new URL('assets/images/items/scoge_vortex-stone-pot.jpg', import.meta.url).pathname,
        i38: new URL('assets/images/items/scoge_yel-bite.jpg', import.meta.url).pathname,
        i39: new URL('assets/images/items/scoge_yel.jpg', import.meta.url).pathname,
        i40: new URL('assets/images/items/scoge_yellow-ssand.jpg', import.meta.url).pathname,
        i41: new URL('assets/images/items/scoge_zv-coil.jpg', import.meta.url).pathname,
        i42: new URL('assets/images/items/scoge_zv-fabric.jpg', import.meta.url).pathname,
        i43: new URL('assets/images/items/scoge_zv-plasma.jpg', import.meta.url).pathname,
        i44: new URL('assets/images/items/scoge_red-ss-vile.jpg', import.meta.url).pathname,
        i45: new URL('assets/images/items/scoge_blue-ss-vile.jpg', import.meta.url).pathname,
        i46: new URL('assets/images/items/scoge_yellow-ss-vile.jpg', import.meta.url).pathname,
        i47: new URL('assets/images/items/scoge_forge-5.jpg', import.meta.url).pathname,
        i48: new URL('assets/images/items/scoge_ss-vile.jpg', import.meta.url).pathname,
        i49: new URL('assets/images/items/scoge-missing-cloak.jpg', import.meta.url).pathname,
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
