<template>
  <layout class="flex flex-col h-screen">
    <header>
      <Header/>
    </header>
    <main class="flex-1 bg-gray-100">
      <div
        class="max-w-screen-xl px-4 mx-auto layout sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="pt-16 pb-16 md:pb-24 md:flex">
          <div class="w-full mb-12 md:w-1/3 md:mb-0 md:mr-12">
            <h2 class="text-3xl font-bold text-gray-900">Introduction</h2>
            <div class="text-gray-600">A little about who I am and what I do.</div>
          </div>
          <div class="w-full text-lg leading-normal text-gray-700 md:w-2/3 about">
            <g-image
              src="/images/bryan-dugan-8bit.jpg"
              class="w-24 my-8 rounded-lg md:mt-0"
              alt="Bryan Dugan"
            />
            <h1 class="mb-4 text-xl font-bold">Hey, I'm Bryan Dugan</h1>

            <p>
              I am a user experience(UX) and interface(UI) designer with a background in front-end development based out
              of Rochester Hills, Michigan. I have been creating digital experiences since 2003 while doing it full-time
              since 2010.
            </p>
            <g-image src="/images/bryan-dugan-process.jpg" class="w-auto mt-8 mb-8" alt="Bryan Dugan User Experience"/>

            <p>
              I enjoy designing and building interfaces with Sketch/Figma and managing design/development teams using
              tools such as Invision and Zeplin. I am passionate about designing practical, easy to use, and accessible
              digital experiences that make clients and their customers happy. When a client says, “wow this site is
              extremely easy to navigate” or hearing that I went “above & beyond expectations”, is what keeps me loving
              what I do. I’ve worked with clients ranging from small to enterprise businesses. I’ve also regularly
              collaborated with both, small and enterprise UI and UX teams.

            </p>


            <g-image src="/images/bryan-dugan.jpg" class="w-auto mt-8" alt="Bryan Dugan"/>

          </div>

        </div>
      </div>
      <div
        class="max-w-screen-xl px-4 mx-auto layout sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="pt-16 pb-16 border-t md:pt-24 md:pb-24 md:flex">
          <div class="w-full mb-12 md:w-1/3 md:mb-0 md:mr-12">
            <h2 class="text-3xl font-bold text-gray-900">A little more...</h2>
            <div class="text-gray-600">My passion for computers, design and development.</div>
          </div>
          <div class="w-full text-lg leading-normal text-gray-700 md:w-2/3 about">
            <p>
              Before working primarily with enterprise businesses, I have worked for smaller local agencies where I
              designed and developed numerous marketing websites for small and medium-sized businesses. On the side, I
              also am a co-founder of a small creative consulting agency that helps out small businesses. This allows me
              to keep up with the latest web-trends and keep my mind fresh.
            </p>

            <p>My background in front-end development has allowed me to design practical solutions and bridge the gap
              between design and development. When it comes to development, the main development stack I work with is
              Tailwind CSS, Craft CMS, and some Vue.js. As of right now, I am currently working on improving my
              knowledge
              of working with APIs using GraphQL, and Apollo. I also enjoy building user interfaces using HTML/CSS. I
              feel
              it’s important as an interface designer to know how complex building certain components can be and I like
              to
              think about the project as if I were to have to code it myself.
            </p>


            <p>
              I make it a point to try and learn something new every day. If I’m not in front of a computer pushing
              pixels, I am usually out mountain biking, or learning how to play golf (I just started playing during the
              pandemic). I also enjoy traveling, board games, reading, hiking, and camping. During the cold Michigan
              winters, I’m usually playing ice hockey, painting Dungeon’s & Dragon’s Miniatures, watching 80’s and 90’s
              movies, or playing couch co-op video games.
            </p>

            <p>
              <strong>I live</strong> in Rochester Hills, Michigan, with my girlfriend Kelly, and our cat Gorty.
            </p>

            <g-image
              src="/images/bryan-dugan-and-kelly-halloran.jpg"
              class="w-auto mt-8Ó rounded-lg"
              alt="Bryan Dugan & Kelly Halloran"
            />

          </div>
        </div>
      </div>
      <div
        class="max-w-screen-xl px-4 mx-auto layout sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="pt-16 pb-16 border-t md:pt-24 md:pb-24 md:flex">
          <div class="w-full mb-12 md:w-1/3 md:mb-0 md:mr-12">
            <h2 class="text-3xl font-bold text-gray-900">Fun tidbits...</h2>
            <div class="text-gray-600">What I like to do on the side and some other interesting facts.</div>
          </div>
          <div class="w-full text-lg leading-normal text-gray-700 md:w-2/3 about">
            <ul>
              <li>When traveling to a new city, I try and check out their local arcade/bar and local bookstores.</li>
              <li>I enjoy collecting and listening to vinyl records.</li>
              <li>I have realized that I have never been to any U.S. National Parks and have made it a goal to try and
                visit as many as possible.
              </li>
              <li>My first ever hiking trip, I climbed Mt. Washington in New Hampshire.</li>
              <li>The longest bike ride I’ve ever been on was about 70 miles round trip.</li>
            </ul>
          </div>
        </div>
      </div>
      <Instagram/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </layout>
</template>

<script>
import config from "~/.temp/config.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Instagram from "@/components/Instagram";

export default {
  components: {
    Header,
    Footer,
    Instagram
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description
        },
        {property: "og:type", content: "website"},
        {property: "og:title", content: this.title},
        {property: "og:description", content: this.description},
        {property: "og:url", content: this.$static.metadata.siteUrl},
        {property: "og:image", content: this.ogImageUrl},
        {name: "twitter:card", content: "summary_large_image"},
        {name: "twitter:title", content: this.$static.metadata.siteName},
        {name: "twitter:description", content: this.description},
        {name: "twitter:site", content: "@bryandugan"},
        {name: "twitter:creator", content: "@bryandugan"},
        {name: "twitter:image", content: this.ogImageUrl}
      ]
    };
  },
  mounted() {
    import("medium-zoom").then(mediumZoom => {
      this.zoom = mediumZoom.default(".about > img");
    });
  },
  computed: {
    config() {
      return config;
    },
    title() {
      return "About";
    },
    description() {
      return "I'm Bryan Dugan, an interface designer and front-end developer based out of Rochester Hills, Michigan.";
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/bryan-dugan.jpg`;
    }
  }
};
</script>
<style></style>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<page-query>
query {
  photos: allInstagramPhoto {
    edges {
      node {
        id
        shortcode
        display_url
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}
</page-query>
