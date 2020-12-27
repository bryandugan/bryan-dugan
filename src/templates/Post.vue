<template>
  <Layout>
    <Header />
    <main>
      <post-header :post="$page.post" />

      <article
        class="max-w-xl px-6 pt-16 mx-auto md:max-w-2xl xl:max-w-4xl sm:px-12"
        :class="{
          'border-b border-grey-lighter pb-10 mb-16': !$page.post.author
        }"
      >
        <!--        <alert v-if="postIsOlderThanOneYear" class="text-orange-900 bg-orange-100 border-l-4 border-orange-500">-->
        <!--          This post is over a year old, some of this information may be out of date.-->
        <!--        </alert>-->

        <div
          class="leading-normal text-gray-700 markdown"
          v-html="$page.post.content"
        />

        <div class="pt-12 pb-12 text-sm leading-normal text-gray-700 font-sm">
          <strong>Note:</strong> Any links leading you to products or services
          are most likely affiliate links that I will receive compensation from.
          I only promote products or services that I own/use myself and truly
          feel will deliver value to you. By purchasing products or service
          through these links, you will help support me to keep creating awesome
          ad-free content.
        </div>

        <footer
          v-if="$page.post.author || $page.post.tags"
          class="flex flex-wrap pb-10 sm:pb-16"
        >
          <div>
            <g-link
              v-for="tag in $page.post.tags"
              :key="tag.id"
              :to="`${tag.path}/`"
              class="inline-block px-4 py-2 mb-2 mr-4 font-sans text-xs font-bold text-green-800 transition-colors duration-300 border border-green-800 rounded-full hover:text-white hover:bg-green-800 sm:text-sm"
            >
              <svg
                class="inline w-3 mr-1 align-middle fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                role="img"
              >
                <path
                  d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                />
              </svg>
              {{ tag.title }}
            </g-link>
          </div>
          <div
            v-if="$page.post.author"
            class="flex flex-wrap items-center w-full py-10 mt-10 border-t border-b border-gray-300 sm:justify-left sm:px-16"
          >
            <figure class="flex px-2 mb-1 sm:mb-0 sm:w-1/5">
              <g-link :to="`${$page.post.author.path}/`">
                <img
                  :src="avatar"
                  :alt="$page.post.author.title"
                  @error="imageLoadError"
                  width="100"
                  class="object-cover w-1/3 p-4 rounded-full h-1/3 sm:p-0 md:w-full"
                />
              </g-link>
            </figure>
            <div class="px-4 text-left sm:w-4/5">
              <h4 class="mb-2 font-sans text-lg font-bold sm:text-xl sm:mb-4">
                <g-link
                  :to="`${$page.post.author.path}/`"
                  class="text-black capitalize transition-colors duration-300 border-b-2 border-transparent hover:text-gray-700"
                  >{{ titleCase($page.post.author.title) }}
                </g-link>
              </h4>
              <p class="leading-normal">
                <g-link
                  :to="`${$page.post.author.path}/`"
                  class="text-green-800 transition-colors duration-300 hover:text-green-500 hover:underline"
                >
                  See all posts by
                  {{ titleCase($page.post.author.title) }} &rarr;
                </g-link>
              </p>
            </div>
          </div>
        </footer>
      </article>

      <Footer />
    </main>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import Alert from "@/components/Alert";
import slugify from "@sindresorhus/slugify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostHeader from "~/components/PostHeader";

export default {
  components: {
    Alert,
    PostHeader,
    Header,
    Footer
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description(this.$page.post)
        },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        {
          property: "og:description",
          content: this.description(this.$page.post)
        },
        { property: "og:url", content: this.postUrl },
        {
          property: "article:published_time",
          content: moment(this.$page.post.date).format("YYYY-MM-DD")
        },
        { property: "og:image", content: this.ogImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:description",
          content: this.description(this.$page.post)
        },
        { name: "twitter:site", content: "@bryandugan" },
        { name: "twitter:creator", content: "@bryandugan" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  mounted() {
    import("medium-zoom").then(mediumZoom => {
      this.zoom = mediumZoom.default(".markdown p > img");
    });
  },
  methods: {
    imageLoadError(e) {
      e.target.src = `/images/authors/default.png`;
    },
    description(post, length, clamp) {
      if (post.description) {
        return post.description;
      }
      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
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
      return `/images/authors/${this.$page.post.author.id}.png`;
    },
    postIsOlderThanOneYear() {
      let postDate = moment(this.$page.post.datetime);
      return moment().diff(postDate, "years") > 0 ? true : false;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postPath = this.$page.post.slug;
      return postPath
        ? `${siteUrl}/${postPath}/`
        : `${siteUrl}/${slugify(this.$page.post.path)}/`;
    },
    ogImageUrl() {
      let coverObj = this.$page.post.cover;
      if (coverObj) {
        return `${this.config.siteUrl + coverObj.src}`;
      } else {
        return `${this.config.siteUrl}/static/images/sharing-card.png`;
      }
    }
  }
};
</script>

<page-query>
  query Post ($path: String) {
    post (path: $path) {
      title
      path
      slug
      datetime: date (format: "YYYY-MM-DD HH:mm:ss")
      content
      description
      timeToRead
      cover
      author {
        id
        title
        path
      }
      tags {
        id
        title
        path
      }
    }
  }
</page-query>
