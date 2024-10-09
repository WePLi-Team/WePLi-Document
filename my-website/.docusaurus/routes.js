import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/WePLi-Document/blog',
    component: ComponentCreator('/WePLi-Document/blog', '740'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/archive',
    component: ComponentCreator('/WePLi-Document/blog/archive', 'cb5'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/authors',
    component: ComponentCreator('/WePLi-Document/blog/authors', '8aa'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/WePLi-Document/blog/authors/all-sebastien-lorber-articles', '2ff'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/authors/yangshun',
    component: ComponentCreator('/WePLi-Document/blog/authors/yangshun', 'f6e'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/first-blog-post',
    component: ComponentCreator('/WePLi-Document/blog/first-blog-post', 'f6f'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/long-blog-post',
    component: ComponentCreator('/WePLi-Document/blog/long-blog-post', '596'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/mdx-blog-post',
    component: ComponentCreator('/WePLi-Document/blog/mdx-blog-post', 'eec'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags',
    component: ComponentCreator('/WePLi-Document/blog/tags', 'dc7'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/docusaurus',
    component: ComponentCreator('/WePLi-Document/blog/tags/docusaurus', 'a57'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/facebook',
    component: ComponentCreator('/WePLi-Document/blog/tags/facebook', 'e16'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/hello',
    component: ComponentCreator('/WePLi-Document/blog/tags/hello', '949'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/tags/hola',
    component: ComponentCreator('/WePLi-Document/blog/tags/hola', '984'),
    exact: true
  },
  {
    path: '/WePLi-Document/blog/welcome',
    component: ComponentCreator('/WePLi-Document/blog/welcome', '19e'),
    exact: true
  },
  {
    path: '/WePLi-Document/markdown-page',
    component: ComponentCreator('/WePLi-Document/markdown-page', 'd40'),
    exact: true
  },
  {
    path: '/WePLi-Document/docs',
    component: ComponentCreator('/WePLi-Document/docs', '4ac'),
    routes: [
      {
        path: '/WePLi-Document/docs',
        component: ComponentCreator('/WePLi-Document/docs', '7eb'),
        routes: [
          {
            path: '/WePLi-Document/docs',
            component: ComponentCreator('/WePLi-Document/docs', '2c9'),
            routes: [
              {
                path: '/WePLi-Document/docs/category/tutorial---basics',
                component: ComponentCreator('/WePLi-Document/docs/category/tutorial---basics', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/category/tutorial---extras',
                component: ComponentCreator('/WePLi-Document/docs/category/tutorial---extras', '132'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/intro',
                component: ComponentCreator('/WePLi-Document/docs/intro', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-basics/congratulations', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-basics/create-a-blog-post', 'af6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-basics/create-a-document', '1f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-basics/create-a-page', 'd54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-basics/deploy-your-site', 'c60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-basics/markdown-features', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-extras/manage-docs-versions', '8d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WePLi-Document/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/WePLi-Document/docs/tutorial-extras/translate-your-site', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/WePLi-Document/',
    component: ComponentCreator('/WePLi-Document/', 'bcb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
