<template>
  <nav class="bg-gray-100 border-b">

    <div class="max-w-screen-xl mx-auto">
      <div class="flex justify-between px-4 lg:px-8">
        <div class="flex px-2 lg:px-0">
          <div class="flex items-center flex-shrink-0">
            <g-link to="/">
              <g-image
                alt="Bryan Dugan Logo"
                src="/images/logo.svg"
                class="block w-auto h-12 lg:hidden"
              />
              <g-image
                alt="Bryan Dugan Logo"
                src="/images/logo.svg"
                class="hidden w-auto h-12 lg:block"
              />
            </g-link>
          </div>
          <div class="hidden lg:ml-6 lg:flex">
            <g-link
              to="/blog/"
              active-class="text-gray-900 border-green-500 hover:border-green-500 hover:text-gray-900"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-800 hover:border-gray-300 focus:outline-none"
            >Blog
            </g-link
            >
            <g-link
              to="/about/"
              exact-active-class="text-gray-900 border-green-500 hover:border-green-500 hover:text-gray-900"
              class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-800 hover:border-gray-300 focus:outline-none"
            >About
            </g-link
            >
            <g-link
              to="/uses/"
              active-class="text-gray-900 border-green-500 hover:border-green-500 hover:text-gray-900"
              class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-800 hover:border-gray-300 focus:outline-none"
            >Uses
            </g-link
            >
            <a
              href="/files/Bryan-Dugan_Resume.pdf"
              target="_blank"
              active-class="text-gray-900 border-green-500 hover:border-green-500 hover:text-gray-900"
              class="inline-flex items-center px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-800 hover:border-gray-300 focus:outline-none"
            >Resume</a
            >
          </div>
        </div>
        <div class="flex flex-1 px-2 py-4 lg:ml-6 lg:justify-end">
          <Search/>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <button
            @click="navOpen = !navOpen"
            class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md rounded-lg hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <svg
              :class="navOpen ? 'hidden' : 'block'"
              class="block w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="navOpen ? 'block' : 'hidden'"
              class="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

      </div>

      <div
        :class="navOpen ? 'block' : 'hidden'"
        class="bg-gray-300 border-t border-gray-300 shadow-inner lg:hidden"
      >
        <div class="pt-2 pb-3">
          <g-link
            to="/blog/"
            active-class="text-gray-900 border-green-500 hover:border-green-500 hover:text-gray-900"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >Blog
          </g-link>
          <g-link
            to="/about/"
            active-class="text-gray-900 border-green-500 hover:border-green-500 hover:text-gray-900"
            class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >About
          </g-link
          >
          <g-link
            to="/uses/"
            active-class="text-gray-900 border-green-500 hover:border-green-500 hover:text-gray-900"
            class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >Uses
          </g-link
          >
          <a
            href="/files/Bryan-Dugan_Resume.pdf"
            target="_blank"
            class="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >Resume</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Search from "@/components/Search";

export default {
  components: {
    Search
  },
  data: () => ({
    navOpen: false
  })
};
</script>

<style scoped></style>
