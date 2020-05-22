<template>
  <layout class="bg-white flex h-screen flex-col">
    <header>
      <Header/>
    </header>
    <main class="flex-1">
      <div class="max-w-screen-xl mx-auto pt-20 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="content w-full md:w-11/12 lg:w-2/3">
          <h1 class="lg:text-5xl md:text-4xl text-3xl mb-5 font-bold leading-none text-gray-900">Hello! I'm Bryan
            Dugan,
            an interface designer & developer in beautiful Rochester Hills, Michigan.</h1>
          <div class="text-xl mb-10 text-gray-700">
            <p class="mb-5">Currently seeking full-time employment.</p>

            <p class="mb-5">Co-founder and developer at <a class="text-green-500 hover:underline"
                                                           href="https://spaceraycreative.com/"
                                                           target="_blank">Spaceray Creative.</a></p>

            <p class="mb-5">I design and build compelling websites and applications that are both elegant and
              functional. Creator of custom tailored presentations and demonstrations through the means of storytelling,
              visual design, content, development, information architecture, user research and branding.</p>
          </div>
          <span class="inline-flex rounded-md shadow-sm">
            <a href="https://spaceraycreative.com/work" target="_blank"
               class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-lg text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-green-700 transition ease-in-out duration-150">
              Spaceray Creative Portfolio
              <svg class="ml-3 -mr-1 h-5 w-5" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"><path d="M0 0h20v20H0z" fill="none"/><path
                d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            </a>
          </span>
        </div>
      </div>
      <div class="layout max-w-screen-xl mx-auto pt-20 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="content w-full">
          <hr/>
        </div>
      </div>
      <div class="layout max-w-screen-xl mx-auto pt-20 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="content w-full md:w-11/12 lg:w-1/2">
          <h3 class="text-gray-900 lg:text-3xl md:text-2xl text-xl font-bold leading-none mb-5">What I do:</h3>
          <div class="text-gray-700">
            <p>I am an interface designer with front-end development knowledge that can take a project from pre-sales to
              production.</p>
          </div>
        </div>
      </div>
      <div class="layout max-w-screen-xl mx-auto pt-12 pb-20 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="content w-full md:w-11/12 lg:w-1/2">
          <div class="flex mb-4">
            <div class="w-1/2">
              <ul class="text-gray-700 leading-loose md:pr-8">
                <li>Interface Design</li>
                <li>User Experience (UX)</li>
                <li>Conceptual Design</li>
                <li>Front-End Development</li>
                <li>Consulting</li>
                <li>Prototyping</li>
                <li>Presentations</li>
              </ul>
            </div>
            <div class="w-1/2">
              <ul class="text-gray-700 leading-loose md:pr-8">
                <li>Information Architecture</li>
                <li>Responsive Design</li>
                <li>Creatve Direction</li>
                <li>Content Strategy</li>
                <li>Branding</li>
                <li>Website Optimization</li>
                <li>Inbound Marketing</li>
              </ul>
            </div>
          </div>
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
