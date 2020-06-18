<template>
  <layout class="bg-white flex h-screen flex-col">
    <header>
      <Header />
    </header>
    <main class="flex-1">
      <div class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 pb-20">
        <div class="about text-lg leading-normal text-gray-700">
          <g-image
            src="/images/bryan-dugan-8bit.jpg"
            class="mx-auto rounded-lg mt-8 w-40"
            alt="Bryan Dugan"
          />
          <h1>Hey, I'm Bryan Dugan</h1>

          <h2>Introduction</h2>

          <p>
            I'm an interface designer and front-end developer based out of
            Rochester Hills, Michigan. I've been passionate about designing and
            building digital experiences since 2003 while doing it
            professionally since 2010.
          </p>

          <p>
            I enjoy designing and building interfaces with Sketch, HTML, CSS,
            and JavaScript. My main focuses right now are designing a base set
            of custom components, creating a custom icon set, Vue.js, working
            with APIs, Tailwind CSS, Gridsome, and Craft CMS.
          </p>

          <p>
            I'm always learning about new technologies and trying out new
            applications or frameworks for each individual project's needs.
          </p>

          <g-image src="/images/bryan-dugan.jpg" class="mt-8 w-auto" alt="Bryan Dugan" />

          <h2>A little more...</h2>

          <p>
            I have a wide variety of skills with just about anything computer
            related. I've done Flash animation, graphic design, IT, networking,
            and development. Over the years I have started to focus more heavily
            on interface design, front-end development and managing design and
            development teams.
          </p>

          <p>
            <strong>I live</strong> in a cool apartment in Rochester Hills, with
            my girlfriend Kelly and our cat, Gorty.
          </p>

          <p>
            <strong>I have quite a few hobbies</strong> including biking (but
            have recently started mountain biking), traveling, collecting vinyl
            records, couch co-op video games, board games, ice hockey, hiking
            and camping.
          </p>

          <g-image
            src="/images/bryan-dugan-and-kelly-halloran.jpg"
            class="w-auto rounded-lg mt-8"
            alt="Bryan Dugan & Kelly Halloran"
          />
        </div>
      </div>
      <Instagram />
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
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        { name: "twitter:description", content: this.description },
        { name: "twitter:site", content: "@bryandugan" },
        { name: "twitter:creator", content: "@bryandugan" },
        { name: "twitter:image", content: this.ogImageUrl }
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