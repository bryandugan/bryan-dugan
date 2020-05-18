<template>
  <Layout class="bg-white">
    <main>
      <header>
        <Header/>
      </header>
      <section>
        <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </section>
      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1"/>
      <site-footer class="py-8 sm:py-16"/>
    </main>
  </Layout>
</template>

<script>
  import config from '~/.temp/config.js'
  import SiteFooter from '@/components/Footer'
  import PostItem from '@/components/PostItem'
  import Pagination from '@/components/Pagination'
  import Header from '@/components/Header'


  export default {
    components: {
      PostItem,
      Pagination,
      SiteFooter,
      Header
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
