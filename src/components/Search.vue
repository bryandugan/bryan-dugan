<template>
  <div class="relative w-full max-w-lg lg:max-w-xs">
    <label for="search" class="sr-only">Search</label>
    <div @click="searchOpen = !searchOpen" class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        id="search"
        v-model="searchTerm"
        class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-700 transition duration-150 ease-in-out bg-gray-200 border border-gray-300 rounded-lg input focus:outline-none focus:bg-white focus:placeholder-gray-700 focus:shadow-outline-green focus:rounded-b-none"
        placeholder="Search"
        type="search"
        autocomplete="off"
      />
    </div>

    <button
      v-if="searchOpen && searchResults.length"
      @click="searchOpen = false"
      tabindex="-1"
      class="fixed inset-0 w-full h-full bg-transparent cursor-default"
    ></button>
    <ul
      v-if="searchOpen && searchResults.length"
      @keydown.up.exact="focusPrevious"
      @keydown.down.exact="focusNext"
      @keydown.esc.exact="hideDropdown"
      class="absolute w-full pt-2 pb-4 text-xs bg-white border-0 rounded-lg shadow-md"
    >
      <li>
        <g-link
          v-for="result in searchResults"
          :key="result.id"
          :to="result.path"
          class="block px-4 py-2 text-gray-700 hover:bg-green-800 hover:text-white"
          >{{ result.title }}
        </g-link>
      </li>
    </ul>
    <ul
      v-else-if="
        searchOpen && searchResults.length === 0 && searchTerm.length > 3
      "
      class="absolute w-full pt-2 pb-4 text-xs bg-white border-0 rounded-lg shadow-md"
    >
      <li>
        <p class="block px-4 py-2 text-gray-900">
          No results for '<strong>{{ searchTerm }}</strong
          >'
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    searchTerm: "",
    searchOpen: false
  }),
  mounted() {
    // Add event to close window with escape key
    const handleEscape = e => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.searchOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);

    // remove event listener
    this.$once("hook:beforeDestory", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      return this.$search.search({ query: searchTerm, limit: 5 });
    }
  }
};
</script>

<style scoped></style>
