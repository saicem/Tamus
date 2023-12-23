import {createApp} from "vue"
import "@/styles.css"
import App from "@/App.vue"
import * as Ant from "ant-design-vue"
import {themeStore} from "@/global/state.ts"
import "@/global/expose.ts"

themeStore.setTheme(window.getTheme())


createApp(App).use(Ant).mount("#app")
