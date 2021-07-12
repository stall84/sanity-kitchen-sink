export default {
  widgets: [
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
                  buildHookId: '60ec44e8dd0de606575877f6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ikudtc5o',
                  apiId: 'c80db0e3-cae7-4709-b920-cd9d5a300070'
                },
                {
                  buildHookId: '60ec44e95a2e0d09ccd6e186',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5nyx3bnc',
                  apiId: '08ce47ba-71cd-4cf0-a990-b59b639168a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stall84/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5nyx3bnc.netlify.app', category: 'apps'}
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
