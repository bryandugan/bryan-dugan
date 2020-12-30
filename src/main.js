import DefaultLayout from '~/layouts/Default.vue'
import '../src/assets/css/prism-theme.css'
// Prism default CSS about line numbers
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = {lang: 'en', class: 'h-full'}
  head.bodyAttrs = {class: 'antialiased font-sans bg-gray-100'}

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,800;1,500&display=swap'
  })
}
