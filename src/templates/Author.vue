<template>
  <layout class="flex flex-col h-screen">
    <header>
      <Header />
    </header>
    <main>
      <div
        class="flex flex-col max-w-xl px-6 pt-24 pb-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-32"
      >
        <figure class="w-full h-auto px-2 mx-auto sm:mb-0 sm:w-1/5">
          <img
            :src="avatar"
            :alt="$page.author.title"
            @error="imageLoadError"
            width="100"
            class="object-cover p-4 rounded-full sm:p-0 md:w-full"
          />
        </figure>
        <p class="mb-4 text-base text-gray-700 uppercase">Posts by</p>
        <h1
          class="mb-5 text-3xl font-bold leading-none text-gray-900 lg:text-4xl md:text-4xl"
        >
          {{ titleCase($page.author.title) }}
        </h1>
      </div>
      <section>
        <post-item
          v-for="edge in $page.author.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      <pagination
        :base="`${$page.author.path}`"
        :info="$page.author.belongsTo.pageInfo"
        v-if="$page.author.belongsTo.pageInfo.totalPages > 1"
      />
      <Footer />
    </main>
  </layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import PostItem from "@/components/PostItem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";

export default {
  components: {
    PostItem,
    Pagination,
    Header,
    Footer
  },
  metaInfo() {
    return {
      title: `Posts written by ${this.titleCase(this.$page.author.title)}`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Browse posts written by ${this.titleCase(
            this.$page.author.title
          )}`
        },

        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: `Posts written by ${this.titleCase(this.$page.author.title)}`
        },
        {
          property: "og:description",
          content: `Browse posts written by ${this.titleCase(
            this.$page.author.title
          )}`
        },
        {
          property: "og:url",
          content: `${this.config.siteUrl}${this.$page.author.path}`
        },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `Posts written by ${this.titleCase(this.$page.author.title)}`
        },
        {
          name: "twitter:description",
          content: `Browse posts written by ${this.titleCase(
            this.$page.author.title
          )}`
        },
        { name: "twitter:site", content: "@bryandugan" },
        { name: "twitter:creator", content: "@bryandugan" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    config() {
      return config;
    },
    avatar() {
      return `/images/authors/${this.$page.author.id}.png`;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/sharing-card.png`;
    }
  }
};
</script>

<page-query>
query Author ($path: String!, $page: Int) {
  author (path: $path) {
    id
    title
    path
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            datetime: date (format: "YYYY-MM-DD HH:mm:ss")
            path
            content
            excerpt
            description
            timeToRead
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>
