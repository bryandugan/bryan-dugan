<template>
  <div class="max-w-screen-xl px-4 mx-auto layout sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
    <div class="md:flex pt-24 pb-32 border-t">
      <div class="w-full mb-12 md:w-1/3 lg:w-1/3 lg:mb-0 md:mr-12">
        <h3 class="mb-4 text-3xl font-bold text-gray-900">
          Follow me on Instagram
        </h3>
        <div class="text-gray-600">Follow my profile <a
          class="text-green-800 underline hover:text-green-500"
          href="https://instagram.com/bryan.dugan"
          target="_blank"
        >@bryan.dugan</a> for cat pictures, board games, vinyl collecting, bike adventures and every once in a while,
          some design tips.
        </div>
      </div>
      <div class="grid w-full grid-cols-2 gap-8 md:w-2/3 lg:w-2/3 md:grid-cols-2 lg:grid-cols-3">
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
  </div>
</template>
