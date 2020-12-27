<template>
  <article>
    <div class="max-w-4xl px-6 mx-auto">
      <div class="py-8 border-b border-gray-300 sm:py-16">
        <h2
          class="px-2 mb-1 font-sans text-2xl leading-tight sm:mb-2 sm:px-4 md:px-10"
        >
          <g-link
            :to="`${post.slug}/`"
            class="font-bold text-black hover:text-gray-700 hover:underline"
            >{{ post.title }} ⟶</g-link
          >
        </h2>
        <p
          class="px-2 text-sm leading-normal text-gray-700 sm:text-base sm:px-4 md:px-10"
        >
          <time :datetime="post.datetime" class="text-gray-700">
            {{ formatPublishDate(post.datetime) }}
          </time>
          <span>·</span>
          <span v-if="post.author">
            by
            <g-link
              :to="`${post.author.path}/`"
              class="text-gray-700 capitalize transition-colors duration-300 border-b border-transparent hover:border-gray-400"
              v-if="post.author"
              >{{ titleCase(post.author.title) }}</g-link
            >
          </span>
          <span v-if="post.tags && post.tags.length > 0">
            in
            <g-link
              :to="`${post.tags[0].path}/`"
              class="text-gray-700 capitalize transition-colors duration-300 border-b border-transparent hover:border-gray-400"
            >
              {{ titleCase(post.tags[0].title) }}
            </g-link>
          </span>

          <span v-if="post.author || (post.tags && post.tags.length > 0)"
            >·</span
          >
          <span> {{ post.timeToRead }} min read</span>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from "moment";

export default {
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    }
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format("DD MMMM, YYYY");
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
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
  }
};
</script>
