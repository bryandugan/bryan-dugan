<template>
  <Layout class="bg-green-500">
    <main class="flex items-center h-screen">
      <div
        class="w-full sm:w-3/4 md:w-3/5 lg:w-2/5 max-w-xs mx-auto px-6 md:px-0 relative"
      >
        <span
          class="absolute -mt-10 text-5xl inset-x-0 text-center pointer-events-none"
        >🧐</span
        >
        <section
          class="bg-gray-100 mx-auto px-8 py-6 rounded shadow-xl relative"
        >
          <h1 class="text-2xl font-sans font-bold mb-4">Page Not Found</h1>
          <p class="font-sans mb-4 leading-normal text-gray-700">
            The page you are looking for has either been moved, or doesn't
            exist.
          </p>
          <g-link
            to="/"
            class="text-sm text-green-500 hover:text-green-600 font-sans transition-color duration-300"
          >&larr; Back to Home
          </g-link
          >
        </section>
      </div>
    </main>
  </Layout>
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: `Page Not Found (404)`
      };
    }
  };
</script>
