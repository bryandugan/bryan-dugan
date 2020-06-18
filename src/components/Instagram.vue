<template>
  <div class="max-w-xl md:max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-12 pt-12 pb-32">
    <h3 class="text-2xl mb-5 font-bold leading-none text-gray-900">
      Follow me on Instagram
      <a
        class="text-green-500 hover:underline"
        href="https://instagram.com/bryan.dugan"
        target="_blank"
      >@bryan.dugan</a>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <a
        v-for="edge in $page.photos.edges.slice(0, 6)"
        :key="edge.node.id"
        :href="'https://instagram.com/p/' + edge.node.shortcode"
        target="_blank"
        rel="noopener"
      >
        <g-image
          :src="edge.node.display_url"
          :alt="'Instagram Photo: ' + edge.node.edge_media_to_caption.edges[0].node.text"
          class="w-auto rounded-lg"
        />
      </a>
    </div>
  </div>
</template>