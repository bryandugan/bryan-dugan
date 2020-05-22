<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between">
        <div class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <g-link to="/">
              <g-image alt="Bryan Dugan Logo" src="/images/logo.svg" class="block lg:hidden h-12 w-auto"/>
              <g-image alt="Bryan Dugan Logo" src="/images/logo.svg" class="hidden lg:block h-12 w-auto"/>
            </g-link>
          </div>
          <div class="hidden lg:ml-6 lg:flex">
            <g-link to="/blog/" active-class="border-green-500 hover:border-green-500 text-gray-900 hover:text-gray-900"
                    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-600 hover:text-gray-700 hover:border-gray-300 focus:outline-none hover:border-gray-300 transition duration-150 ease-in-out">
              Blog
            </g-link>
            <g-link to="/about/"
                    exact-active-class="border-green-500 hover:border-green-500 text-gray-900 hover:text-gray-900"
                    class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-600 hover:text-gray-700 hover:border-gray-300 focus:outline-none hover:border-gray-300 transition duration-150 ease-in-out">
              About
            </g-link>
            <g-link to="/uses/" active-class="border-green-500 hover:border-green-500 text-gray-900 hover:text-gray-900"
                    class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-600 hover:text-gray-700 hover:border-gray-300 focus:outline-none hover:border-gray-300 transition duration-150 ease-in-out">
              Uses
            </g-link>
            <a href="/files/Bryan-Dugan_Resume.pdf" target="_blank"
               active-class="border-green-500 hover:border-green-500 text-gray-900 hover:text-gray-900"
               class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-600 hover:text-gray-700 hover:border-gray-300 focus:outline-none hover:border-gray-300 transition duration-150 ease-in-out">
              Resume
            </a>
          </div>
        </div>
        <div class="flex-1 flex px-2 py-4 lg:ml-6 lg:justify-end">
            <Search />
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <button @click="isOpen = !isOpen"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out rounded-lg"
                  aria-label="Main menu" aria-expanded="false">
            <svg :class="isOpen ? 'hidden' : 'block'" class="block h-6 w-6" stroke="currentColor" fill="none"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg :class="isOpen ? 'block' : 'hidden'" class="h-6 w-6" stroke="currentColor" fill="none"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="isOpen ? 'block' : 'hidden'" class="lg:hidden border-gray-300 border-t bg-gray-100 shadow-inner">
      <div class="pt-2 pb-3">
        <g-link to="/blog/" active-class="border-green-500 hover:border-green-500 text-gray-900 hover:text-gray-900"
                class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          Blog
        </g-link>
        <g-link to="/about/" active-class="border-green-500 hover:border-green-500 text-gray-900 hover:text-gray-900"
                class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          About
        </g-link>
        <g-link to="/uses/" active-class="border-green-500 hover:border-green-500 text-gray-900 hover:text-gray-900"
                class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          Uses
        </g-link>
        <a href="/files/Bryan-Dugan_Resume.pdf" target="_blank"
           class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
          Resume
        </a>
      </div>

    </div>
  </nav>

</template>

<script>
  import Search from "@/components/Search";

  export default {
    name: "Header",
    components: {
      Search
    },
    data: () => ({
      isOpen: false,
      searchTerm: ''
    })
  }
</script>

<style scoped>

</style>
