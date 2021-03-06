import Vue from 'vue'

interface Device {
  isDesktop: boolean
  isIos: boolean
  isAndroid: boolean
  isMobile: boolean
  isMobileOrTablet: boolean
  isDesktopOrTablet: boolean
  isTablet: boolean
  isWindows: boolean
  isMacOS: boolean
}

declare module '@nuxt/vue-app' {
  interface Context {
    isDesktop: boolean
    isIos: boolean
    isAndroid: boolean
    isMobile: boolean
    isMobileOrTablet: boolean
    isDesktopOrTablet: boolean
    isTablet: boolean
    isWindows: boolean
    isMacOS: boolean
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    isDesktop: boolean
    isIos: boolean
    isAndroid: boolean
    isMobile: boolean
    isMobileOrTablet: boolean
    isDesktopOrTablet: boolean
    isTablet: boolean
    isWindows: boolean
    isMacOS: boolean
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $device: Device
  }
}
