module.exports = {
  siteName: "UX designer & developer",
  siteDescription:
    "UX design director creating user-centric digital experiences with a background in front-end development.",
  siteUrl: "https://bryandugan.com",
  titleTemplate: `%s | Bryan Dugan`,
  icon: "src/favicon.png",

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"]
    }
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          },
          author: {
            typeName: "Author",
            create: true
          }
        }
      }
    },
    {
      use: "@zefman/gridsome-source-instagram",
      options: {
        username: "bryan.dugan", // Instagram username
        typeName: "InstagramPhoto" // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      }
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        collections: [
          {
            typeName: "Post",
            indexName: "Post",
            fields: ["title", "description", "tags"]
          }
        ],
        searchFields: ["title", "description", "tags"]
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-42451631-1"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Bryan Dugan",
          feed_url: "https://bryandugan.com/feed.xml",
          site_url: "https://bryandugan.com"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: "https://bryandugan.com" + node.path,
          author: node.author,
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "feed.xml"
        }
      }
    }
  ],

  templates: {
    Post: "/:slug",
    Tag: "/tag/:id",
    Author: "/author/:id"
  },

  chainWebpack: config => {
    config.module
      .rule("css")
      .oneOf("normal")
      .use("postcss-loader")
      .tap(options => {
        options.plugins.unshift(
          ...[
            require("postcss-import"),
            require("postcss-nested"),
            require("tailwindcss")
          ]
        );

        return options;
      });
  }
};
