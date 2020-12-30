<template>
  <layout>
    <header>
      <Header />
    </header>
    <main class="flex-1 bg-gray-100">
      <div
        class="flex flex-col max-w-xl px-6 pt-24 pb-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-32"
      >
        <p class="mb-4 text-base text-gray-700 uppercase">
          {{ $page.tag.belongsTo.totalCount }} posts tagged
        </p>
        <h1
          class="mb-5 text-3xl font-bold leading-none text-gray-900 lg:text-4xl md:text-4xl"
        >
          {{ titleCase($page.tag.title) }}
        </h1>
      </div>
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
