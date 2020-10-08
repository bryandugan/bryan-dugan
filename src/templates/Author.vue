<template>
  <Layout>
    <main>
      <header>
        <div
          class="flex flex-col-reverse max-w-xl px-6 pt-24 pb-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-32"
        >
          <h1
            class="mb-2 font-sans text-4xl font-bold capitalize sm:text-5xl md:text-6xl"
          >
            {{ titleCase($page.author.title) }}
          </h1>
          <svg
            class="w-5 mx-auto mb-1 text-gray-600 fill-current sm:w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            role="img"
          >
            <title id="authorIcon">Author posts</title>
            <path
              d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"
            />
          </svg>
        </div>
        <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
          <g-link
            to="/"
            class="px-4 py-2 text-sm text-gray-900 transition-opacity duration-300 border border-gray-400 rounded-full opacity-75 hover:opacity-100"
          >&larr; Home
          </g-link
          >
        </nav>
      </header>
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
      <site-footer/>
    </main>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import PostItem from "@/components/PostItem";
import SiteFooter from "@/components/Footer";
import Pagination from "@/components/Pagination";

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter
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

        {property: "og:type", content: "website"},
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
        {property: "og:image", content: this.ogImageUrl},

        {name: "twitter:card", content: "summary_large_image"},
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
        {name: "twitter:site", content: "@bryandugan"},
        {name: "twitter:creator", content: "@bryandugan"},
        {name: "twitter:image", content: this.ogImageUrl}
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
