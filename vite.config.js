import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienes: resolve(__dirname, 'quienes_somos.html'),
        aviso: resolve(__dirname, 'aviso_legal.html'),
        blog: resolve(__dirname, 'blog.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        login: resolve(__dirname, 'login.html'),
        registro: resolve(__dirname, 'registro.html'), 
      }
    }
  }
})