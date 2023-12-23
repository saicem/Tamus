import {languageStore, themeStore} from "@/global/state.ts"

export {}

type theme = "light" | "dark"

declare global {
  interface Window {
    setTheme: (theme: theme) => void;
    getTheme: () => theme;
    setLanguage: (language: string) => void;
    getLanguage: () => string;
  }
}

window.setTheme = (theme: theme) => themeStore.setTheme(theme)
window.getTheme = () => "light"
window.setLanguage = (language: string) => languageStore.setLanguage(language)
window.getLanguage = () => "zh-CN"
