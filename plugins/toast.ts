import { defineNuxtPlugin } from '#app';
import { createApp, h } from 'vue';
import Toast from '~/components/ui/Toast.vue';

export default defineNuxtPlugin((nuxtApp) => {
    
  nuxtApp.provide('toast', (message: string, status: 'success' | 'error') => {
    const mountElement = document.createElement('div');
    document.body.appendChild(mountElement);

    const toastApp = createApp({
      render() {
        return h(Toast, { message, status });
      },
    });

    toastApp.mount(mountElement);

    setTimeout(() => {
      toastApp.unmount();
      document.body.removeChild(mountElement);
    }, 3500); // 3 seconds + transition time
  });
});
