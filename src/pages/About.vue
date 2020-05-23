<template>
  <layout class="bg-white flex h-screen flex-col">
    <header>
      <Header/>
    </header>
    <main class="flex-1">
      <div class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 pb-20">
        <div class="about text-lg leading-normal text-gray-700">
          <p>Hey, I'm Bryan Dugan</p>

          <h2>Introduction</h2>

          <p>I'm an interface designer and front-end developer based out of Rochester Hills, Michigan. I've been
            passionate about designing and building digital experiences since 2003 while doing it professionally since
            2010.</p>

          <p>I enjoy designing and building interfaces with Sketch, HTML, CSS and JavaScript. My main focuses right now
            are designing a base set of custom components, creating a custom icon set, Vue.js, working with APIs,
            Tailwind CSS, Gridsome and Craft CMS.</p>

          <p>I'm always learning about new technologies and trying out new applications or frameworks for each
            individual project's needs.</p>

          <h2>A little more...</h2>

          <p>I have a wide variety of skills with just about anything computer related. I've done Flash animation,
            graphic design, IT, networking, and development. Over the years I have started to focus more heavily on
            interface design, front-end development and managing design and development teams.</p>

          <p><strong>I live</strong> in a cool apartment in Rochester Hills, with my girlfriend Kelly and our cat,
            Gorty.</p>

          <p><strong>I have quite a few hobbies</strong> including biking (but have recently started mountain biking),
            traveling, collecting vinyl records, couch co-op video games, board games, ice hockey, hiking and camping.
          </p>

          <g-image src="/images/bryan-and-kelly.jpg" class="w-auto rounded-lg mt-8" alt="Bryan & Kelly"/>
        </div>
      </div>
    </main>
    <footer>
      <Footer/>
    </footer>
  </layout>
</template>

<script>
  import config from '~/.temp/config.js'
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    components: {
      Header,
      Footer
    },
    metaInfo() {
      return {
        title: this.$static.metadata.siteName,
        meta: [
          {property: "og:type", content: 'website'},
          {property: "og:title", content: this.$static.metadata.siteName},
          {property: "og:description", content: this.$static.metadata.siteDescription},
          {property: "og:url", content: this.$static.metadata.siteUrl},
          {property: "og:image", content: this.ogImageUrl},
          {name: "twitter:card", content: "summary_large_image"},
          {name: "twitter:title", content: this.$static.metadata.siteName},
          {name: "twitter:description", content: this.$static.metadata.siteDescription},
          {name: "twitter:site", content: "@bryandugan"},
          {name: "twitter:creator", content: "@bryandugan"},
          {name: "twitter:image", content: this.ogImageUrl},
        ],
      }
    },
    mounted() {
      import('medium-zoom').then(mediumZoom => {
        this.zoom = mediumZoom.default('.about > img')
      })
    },
    computed: {
      config() {
        return config
      },
      ogImageUrl() {
        return `${this.config.siteUrl}/images/sharing-card.png`
      }
    },
  }
</script>
<style>


</style>

<page-query>
  query Home ($page: Int) {
  posts: allPost (page: $page, perPage: 6) @paginate {
  totalCount
  pageInfo {
  totalPages
  currentPage
  }
  edges {
  node {
  id
  title
  timeToRead
  datetime: date (format: "YYYY-MM-DD HH:mm:ss")
  content
  excerpt
  description
  path
  cover
  tags {
  id
  title
  path
  }
  author {
  id
  title
  path
  }
  }
  }
  }
  }
</page-query>

<static-query>
  query {
  metadata {
  siteName
  siteUrl
  siteDescription
  }
  }
</static-query>
