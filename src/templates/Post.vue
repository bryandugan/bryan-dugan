<template>
  <Layout>
    <Header />
    <main>
      <post-header :post="$page.post" />

      <!--        <alert v-if="postIsOlderThanOneYear" class="text-orange-900 bg-orange-100 border-l-4 border-orange-500">-->
      <!--          This post is over a year old, some of this information may be out of date.-->
      <!--        </alert>-->

      <article
        class="flex flex-col max-w-xl px-6 pt-16 mx-auto leading-normal text-gray-700 md:max-w-2xl xl:max-w-3xl sm:px-12"
        :class="{
          'border-b border-grey-lighter pb-10 mb-16': !$page.post.author
        }"
      >
        <div class="pb-12 markdown" v-html="$page.post.content"></div>
        <div
          class="flex flex-col pt-12 pb-12 text-sm leading-normal text-gray-700 border-t border-gray-300"
        >
          <strong>Note:</strong> Any links leading you to products or services
          are most likely affiliate links that I will receive compensation from.
          I only promote products or services that I own/use myself and truly
          feel will deliver value to you. By purchasing products or services
          through these links, you will help support me in creating awesome
          ad-free content.
        </div>

        <footer v-if="$page.post.author" class="pb-10 sm:pb-16">
          <div
            v-if="$page.post.author"
            class="flex items-center justify-center py-10 border-t border-gray-300 justify-left"
          >
            <figure class="w-1/3 h-auto mx-8 sm:mx-4 sm:mb-0 sm:w-1/5">
              <g-link :to="`${$page.post.author.path}/`">
                <img
                  :src="avatar"
                  :alt="$page.post.author.title"
                  @error="imageLoadError"
                  class="object-cover m-4 border border-gray-300 rounded-full sm:m-0 md:w-full"
                />
              </g-link>
            </figure>
            <div class="px-4 text-left sm:w-4/5">
              <h4 class="mb-2 font-sans text-lg font-bold sm:mb-4">
                <g-link
                  :to="`${$page.post.author.path}/`"
                  class="text-black capitalize transition-colors duration-300 border-b-2 border-transparent hover:text-gray-700"
                  >{{ titleCase($page.post.author.title) }}
                </g-link>
              </h4>
              <p class="mb-4 text-sm leading-normal md:text-base">
                UX/UI design director with a background in front-end
                development.
              </p>
              <p class="leading-normal">
                <g-link
                  :to="`${$page.post.author.path}/`"
                  class="text-sm text-green-800 transition-colors duration-300 md:text-base hover:text-green-500 hover:underline"
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
