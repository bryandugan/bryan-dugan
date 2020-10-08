import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = {lang: 'en', class: 'h-full'}
  head.bodyAttrs = {class: 'antialiased font-sans bg-gray-100'}

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400'
  })
}
