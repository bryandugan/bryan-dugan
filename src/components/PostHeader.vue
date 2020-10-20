<template>
  <header>
    <div class="pt-16">
      <div
        v-if="post.cover"
        class="max-w-xl px-6 mx-auto md:max-w-2xl xl:max-w-3xl sm:px-12"
      >
        <g-image
          class="w-full mb-8 rounded-lg"
          :src="post.cover"
          :alt="post.title"
        />
      </div>
      <div class="max-w-xl px-6 pt-8 mx-auto md:max-w-2xl xl:max-w-4xl sm:px-12">
        <h1
          class="mb-2 font-sans text-3xl font-bold leading-tight text-black sm:text-5xl"
        >
          {{ post.title }}
        </h1>
        <p class="text-gray-700">
          <span v-if="post.author">
            <g-link
              :to="`${post.author.path}/`"
              class="text-gray-700 capitalize transition-colors duration-300 border-b border-transparent hover:border-gray-400"
            >{{ titleCase(post.author.title) }}</g-link
            > &bull;
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
