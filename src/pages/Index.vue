<template>
  <layout class="flex flex-col h-screen">
    <header>
      <Header />
    </header>
    <main class="flex-1 bg-gray-100">
      <div
        class="container max-w-screen-xl px-4 pt-16 pb-16 mx-auto md:pb-24 md:px-8 md:flex md:items-center md:justify-between"
      >
        <div class="w-full content md:w-11/12 lg:w-2/3">
          <h1
            class="mb-5 text-3xl font-bold leading-none text-gray-900 lg:text-4xl md:text-4xl"
          >
            Hello! I'm Bryan Dugan, a UX design director with a background in
            front-end development
          </h1>
          <div class="mb-10 text-gray-700">
            <p class="text-xl">
              UX Designer at
              <a
                class="text-green-800 underline hover:underline hover:text-green-600"
                href="https://clearfirestudios.com/"
                target="_blank"
                >Clearfire.
              </a>
            </p>
            <p class="mb-5 text-xl">
              Co-founder of a small web consulting and branding agency,
              <a
                class="text-green-800 underline hover:underline hover:text-green-600"
                href="https://spaceraycreative.com/"
                target="_blank"
                >Spaceray Creative</a
              >. I also write about my design and development experiences on my
              <g-link
                to="/blog/"
                class="text-green-800 underline hover:underline hover:text-green-600"
                >Blog.</g-link
              >
            </p>

            <p class="mb-5">
              I help design and build compelling websites and applications that
              are both elegant and functional for enterprise businesses. I have
              two years of experience managing design and development teams,
              with ten years of industry experience. I have worked primarily in
              the automotive sector, designing and building proof of concepts
              and production IoT/IDM dashboards and applications.
            </p>
          </div>
          <div class="sm:flex">
            <a
              href="https://spaceraycreative.com/work"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-4 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-800 border border-transparent rounded-lg sm:text-base md:text-lg sm:mr-4 sm:w-auto md:mb-0 hover:bg-green-600 focus:outline-none focus:border-green-800 focus:shadow-outline-green active:bg-green-700"
            >
              Spaceray Creative Work
              <svg
                class="w-5 h-5 ml-3"
                role="img"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h20v20H0z" fill="none" />
                <path
                  d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                />
              </svg>
            </a>
            <a
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-4 text-lg font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-gray-300 border border-transparent rounded-lg sm:text-base md:text-lg sm:mr-4 sm:w-auto md:mb-0 hover:bg-gray-200 focus:outline-none focus:border-gray-700 focus:shadow-outline-green active:bg-gray-700"
              href="mailto:bryan@bryandugan.com?subject=Let's%20build%20something%20together"
            >
              Request PDF Portfolio ⟶
            </a>
          </div>
        </div>
      </div>
      <div
        class="container max-w-screen-xl px-4 mx-auto layout sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="pt-24 border-t lg:flex">
          <div class="w-full mb-12 md:w-2/3 lg:w-1/3 lg:mb-0 lg:mr-12">
            <h2
              class="mb-4 text-xl font-bold text-gray-900 lg:text-3xl md:text-2xl"
            >
              Clients
            </h2>
            <div class="text-gray-600">
              <p>
                Some companies I've worked with, ranging from small to
                enterprise.
              </p>
            </div>
          </div>
          <div
            class="grid w-full grid-cols-2 gap-8 lg:w-2/3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5"
          >
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                class="h-24"
                src="/images/logos/falcon.png"
                alt="Falcon Motorsports"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                class="h-24"
                src="/images/logos/arcelormittal.svg"
                alt="Arcelor Mittal Tailored Blanks"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                class="h-24"
                src="/images/logos/mastercard.svg"
                alt="Mastercard"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                src="/images/logos/general-motors.svg"
                class="h-24"
                alt="General Motors"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                src="/images/logos/jaguar-land-rover.png"
                class="h-24"
                alt="Jaguar Land Rover"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                src="/images/logos/mod.svg"
                class="h-24"
                alt="Ministry of Defence"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                src="/images/logos/orthopedic-spine-sports-therapy.svg"
                class="h-24"
                alt="Orthopedic Spine & Sports Therapy"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                src="/images/logos/groupe-psa.svg"
                class="h-24"
                alt="PSA Groupe"
              />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image src="/images/logos/aaa.svg" class="h-24" alt="AAA" />
            </div>
            <div
              class="flex justify-center col-span-1 mb-8 md:mb-8 lg:col-span-1"
            >
              <g-image
                src="/images/logos/adient.svg"
                class="h-24"
                alt="Adient"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="max-w-screen-xl px-4 pt-24 mx-auto layout sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex flex-wrap pt-24 pb-32 border-t">
          <div class="w-full mb-12 md:w-2/3 lg:w-1/3 lg:mb-0 md:mr-12">
            <h3
              class="mb-4 text-xl font-bold leading-none text-gray-900 lg:text-3xl md:text-2xl"
            >
              What I do
            </h3>
            <div class="text-gray-600">
              <p>
                I am an interface design director with front-end development
                knowledge that creates user-centric digital experiences.
              </p>
            </div>
          </div>

          <div class="w-1/2 md:1/2 lg:w-1/4">
            <ul
              class="pr-4 leading-loose text-gray-700 list-disc list-inside md:mr-8 sm:list-none"
            >
              <li>Interface Design</li>
              <li>User Experience (UX)</li>
              <li>Front-End Development</li>
              <li>Low Code Environments</li>
              <li>Consulting</li>
              <li>Prototyping</li>
              <li>Presentations</li>
            </ul>
          </div>
          <div class="w-1/2 md:1/2 lg:w-1/4">
            <ul
              class="pr-4 leading-loose text-gray-700 list-disc list-inside md:mr-8 sm:list-none md:list-inside"
            >
              <li>Information Architecture</li>
              <li>Responsive Design</li>
              <li>Creative Direction</li>
              <li>Content Strategy</li>
              <li>Branding</li>
              <li>Website Optimization</li>
              <li>Inbound Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </layout>
</template>

<script>
import config from "~/.temp/config.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription
        },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription
        },
        { name: "twitter:site", content: "@bryandugan" },
        { name: "twitter:creator", content: "@bryandugan" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/sharing-card.png`;
    }
  }
};
</script>
<style></style>

<page-query>
query Home ($page: Int) {
  posts: allPost (page: $page, perPage: 6) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        timeToRead
        datetime: date (format: "YYYY-MM-DD HH:mm:ss")
        content
        excerpt
        description
        path
        cover
        tags {
          id
          title
          path
        }
        author {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
