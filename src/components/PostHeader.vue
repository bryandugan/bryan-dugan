<template>
  <header>
    <div class="flex flex-wrap pt-16 mx-auto md:max-w-2xl xl:max-w-4xl">
      <div class="flex-col">
        <div v-if="post.cover" class="px-6 mx-auto sm:px-12">
          <g-image
            class="w-full mb-8 rounded-lg"
            :src="post.cover"
            :alt="post.title"
          />
        </div>
        <div class="px-6 pt-8 sm:px-12">
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
              >
              &bull;
            </span>
            <time :datetime="post.datetime" class="text-gray-700 capitalize"
              >{{ formattedPublishDate }}
            </time>
            &bull;
            <span>{{ post.timeToRead }} min read</span>
          </p>
          <div v-if="$page.post.tags" class="pt-4">
            <g-link
              v-for="tag in $page.post.tags"
              :key="tag.id"
              :to="`${tag.path}/`"
              class="inline-block px-4 py-2 mb-2 mr-4 font-sans text-sm font-bold text-green-800 transition-colors duration-300 border border-green-800 rounded-full hover:text-white hover:bg-green-800 sm:text-sm"
            >
              {{ tag.title }}
            </g-link>
          </div>
        </div>
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
