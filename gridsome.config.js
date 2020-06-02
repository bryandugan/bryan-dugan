module.exports = {
  siteName: 'Interface designer & front-end developer',
  siteDescription: "Interface designer & front-end web developer that builds professional websites and applications that are both elegant and functional.",
  siteUrl: 'https://bryandugan.com',
  titleTemplate: `%s | Bryan Dugan`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'Material-Theme-Ocean'
        }]
      ]
    }
  },


  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'description', 'tags']
          }
        ],
        searchFields: ['title', 'description', 'tags']
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-42451631-1',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Bryan Dugan',
          feed_url: 'https://bryandugan.com/feed.xml',
          site_url: 'https://bryandugan.com',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://bryandugan.com' + node.path,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    },
    // {
    //   use: 'gridsome-plugin-blog-cover',
    //   options: {
    //     typeName: 'Post',
    //     outputDir: './content/images',
    //     domain: 'https://bryandugan.com',
    //     coverField: 'cover',
    //     cloud_name: 'bryan-dugan',
    //     api_key: '326459642982776',
    //     api_secret: 'EGe4HVJr4tL3Un_K27WKXfeGX44'
    //   }
    // },
  ],

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        return options
      })
  },
}
