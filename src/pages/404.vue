<template>
  <Layout class="bg-gray-100">
    <main class="flex items-center h-screen">
      <div
        class="relative w-full max-w-xs px-6 mx-auto sm:w-3/4 md:w-3/5 lg:w-2/5 md:px-0"
      >
        >
        <section
          class="relative px-8 py-6 mx-auto bg-white rounded shadow-xl"
        >
          <h1 class="mb-4 font-sans text-2xl font-bold">Page Not Found</h1>
          <p class="mb-4 font-sans leading-normal text-gray-700">
            The page you are looking for has either been moved, or doesn't
            exist.
          </p>
          <g-link
            to="/"
            class="font-sans text-sm text-green-800 duration-300 hover:text-green-500 transition-color"
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
