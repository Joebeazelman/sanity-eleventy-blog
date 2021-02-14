export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60296ce24e84c7a85c803975',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-fhagrpui',
                  apiId: 'a715d3ae-eb1d-4793-926a-a4f53a965caa'
                },
                {
                  buildHookId: '60296ce237f509af1d48ed01',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ygksnfx1',
                  apiId: '9b8970b6-f54d-4020-8f9b-2b5e445d50fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Joebeazelman/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ygksnfx1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
