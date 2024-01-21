import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Military Maritime Encyclopedia',
  description: 'Because US Navy Factbook is already taken',
  theme: defaultTheme({
    logo: './assets/mmelogo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Ships', link: '/ships/' },
      { text: 'Aircraft', link: '/aircraft/' },
      { text: 'Subs', link: '/subs/' },
      { text: 'Personnel', link: '/regulations/' },
      { text: 'About', link: '/about/' }
    ],
  }),
  head: [['link', { rel: 'icon', href: './assets/MMEFavIco.ico' }]],
})