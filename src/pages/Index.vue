<template>
  <div class="md:h-screen">
    <div class="md:flex md:min-h-full md:items-center">
      <div class="layout p-5 md:p-10 w-full md:w-11/12 lg:w-2/3">
        <header class="header">
          <g-image alt="Bryan Dugan Logo" src="/images/logo.svg" class="w-24 mb-10"/>
        </header>
        <div class="content">
          <h1 class="lg:text-5xl md:text-4xl text-3xl mb-5 font-bold leading-none text-gray-900">Hello! I'm Bryan Dugan,
            a UX designer & front-end developer in beautiful Rochester Hills, Michigan.</h1>
          <div class="md:text-2xl text-xl mb-10 text-gray-600">
            <p class="mb-5">Currently seeking full-time employment.</p>

            <p class="mb-5">Co-founder and developer at Spaceray Creative.</p>

            <p class="mb-5">I design and build compelling Vue.js applications and Craft CMS
              websites that are both elegant and functional. Creator of custom tailored presentations and demonstrations
              through the means of storytelling, visual design, content, development, information architecture, user
              research and branding.</p>

            <p>In my free time, I enjoy mountain biking, ice
              hockey, reading and craft beer.</p>
          </div>
        </div>
        <footer>
          <contact-info></contact-info>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '~/.temp/config.js'
  import ContactInfo from '@/components/ContactInfo'

  export default {
    components: {
      ContactInfo
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