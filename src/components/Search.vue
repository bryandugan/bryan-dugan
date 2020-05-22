<template>
  <div class="relative max-w-lg w-full lg:max-w-xs">
    <label for="search" class="sr-only">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"/>
        </svg>
      </div>
      <input @focusin="isOpen = !isOpen" @focusout="isOpen = false" id="search" v-model="searchTerm"
             class="input block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg  text-sm leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-green-500 focus:shadow-outline-green transition duration-150 ease-in-out"
             placeholder="Search" type="search"/>
    </div>
    <ul v-if="isOpen" class="absolute w-full pt-2 pb-4 shadow-md text-xs bg-white rounded-lg border-0">
      <li>
        <g-link
          v-for="result in searchResults"
          :key="result.id"
          :to="result.path"
          class="block px-4 py-2 text-gray-700 hover:bg-green-800 hover:text-white">
          {{ result.title }}
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Search",
      data: () => ({
        isOpen: false,
        searchTerm: ''
      }),
      computed: {
        searchResults() {
          const searchTerm = this.searchTerm
          if (searchTerm.length < 3) return []
          return this.$search.search({query: searchTerm, limit: 5})
        }
      },
    }
</script>

<style scoped>

</style>
