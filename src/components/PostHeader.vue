<template>
  <header>
    <div class="pt-16">
      <div
        v-if="post.cover"
        class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12"
      >
        <g-image
          class="mb-16 rounded-lg w-full"
          :src="post.cover"
          :alt="post.title"
        />
      </div>
      <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto px-6">
        <h1
          class="text-3xl sm:text-5xl leading-tight font-sans font-bold mb-2 text-black"
        >
          {{ post.title }}
        </h1>
        <p class="text-gray-700">
          <span v-if="post.author">
            <g-link
              :to="`${post.author.path}/`"
              class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >{{ titleCase(post.author.title) }}</g-link
            >&bull;
          </span>
          <time :datetime="post.datetime" class="text-gray-700 capitalize">{{
            formattedPublishDate
            }}
          </time>
          &bull;
          <span>{{ post.timeToRead }} min read</span>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
  import moment from "moment";

  export default {
    props: ["post"],
    components: {},
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
      formattedPublishDate() {
        return moment(this.post.datetime).format("DD MMMM, YYYY");
      }
    }
  };
</script>
