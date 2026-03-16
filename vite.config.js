import { defineConfig } from 'vite'

export default defineConfig({
  base: './'
  import { resolve } from 'path'
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienes: resolve(__dirname, 'quienes-somos.html'),
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