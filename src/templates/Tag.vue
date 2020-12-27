<template>
  <Layout>
    <main>
      <header>
        <div
          class="flex flex-col-reverse max-w-xl px-6 pt-24 pb-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-32"
        >
          <p class="leading-normal text-gray-700">
            {{ $page.tag.belongsTo.totalCount }} posts in total
          </p>
          <h1
            class="mb-2 font-sans text-4xl font-bold capitalize sm:text-5xl md:text-6xl"
          >
            {{ titleCase($page.tag.title) }}
          </h1>
          <svg
            class="w-5 mx-auto mb-1 text-gray-600 fill-current sm:w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            role="img"
          >
            <title id="tagIcon">Posts tagged</title>
            <path
              d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            />
          </svg>
        </div>
        <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
          <g-link
            to="/blog"
            class="px-4 py-2 text-sm text-gray-900 transition-opacity duration-300 border border-gray-400 rounded-full opacity-75 hover:opacity-100"
            >&larr; Blog
          </g-link>
        </nav>
      </header>
      <section>
        <post-item
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      <pagination
        :base="`${$page.tag.path}`"
        :info="$page.tag.belongsTo.pageInfo"
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
      />
      <site-footer />
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
      title: `Posts tagged "${this.titleCase(this.$page.tag.title)}"`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Browse posts tagged "${this.titleCase(
            this.$page.tag.title
          )}"`
        },

        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: `Posts tagged "${this.titleCase(this.$page.tag.title)}"`
        },
        {
          property: "og:description",
          content: `Browse posts tagged "${this.titleCase(
            this.$page.tag.title
          )}"`
        },
        {
          property: "og:url",
          content: `${this.config.siteUrl}${this.$page.tag.path}`
        },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `Posts tagged "${this.titleCase(this.$page.tag.title)}"`
        },
        {
          name: "twitter:description",
          content: `Browse posts tagged "${this.titleCase(
            this.$page.tag.title
          )}"`
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
    ogImageUrl() {
      return `${this.config.siteUrl}/images/sharing-card.png`;
    }
  }
};
</script>

<page-query>
query Tag ($path: String!, $page: Int) {
  tag (path: $path) {
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
            author {
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
