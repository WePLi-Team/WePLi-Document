import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '08f'),
    exact: true
  },
  {
    path: '/blog/Apple Music API 사용기',
    component: ComponentCreator('/blog/Apple Music API 사용기', '144'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '5be'),
    exact: true
  },
  {
    path: '/blog/authors/donghyeon',
    component: ComponentCreator('/blog/authors/donghyeon', 'fee'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'f79'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/apple-music-api',
    component: ComponentCreator('/blog/tags/apple-music-api', '0c5'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b5c'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/music-app',
    component: ComponentCreator('/blog/tags/music-app', 'b62'),
    exact: true
  },
  {
    path: '/blog/tags/spotify-api',
    component: ComponentCreator('/blog/tags/spotify-api', 'bee'),
    exact: true
  },
  {
    path: '/blog/tags/we-p-li',
    component: ComponentCreator('/blog/tags/we-p-li', '3a7'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/blog/WePLi를 개발하게 된 이유',
    component: ComponentCreator('/blog/WePLi를 개발하게 된 이유', 'c33'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '758'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '03f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '10e'),
            routes: [
              {
                path: '/docs/category/1-api',
                component: ComponentCreator('/docs/category/1-api', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/2-1-requests',
                component: ComponentCreator('/docs/category/2-1-requests', '59a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/2-2-responses',
                component: ComponentCreator('/docs/category/2-2-responses', '857'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/2-apple-music-api-docs',
                component: ComponentCreator('/docs/category/2-apple-music-api-docs', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/search',
                component: ComponentCreator('/docs/category/search', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/song',
                component: ComponentCreator('/docs/category/song', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/기술-스택',
                component: ComponentCreator('/docs/category/기술-스택', 'e14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/소프트웨어-요구사항-명세서-srs',
                component: ComponentCreator('/docs/category/소프트웨어-요구사항-명세서-srs', '9bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-introduce',
                component: ComponentCreator('/docs/service-introduce', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Softwrare Requirements Specification/appendices',
                component: ComponentCreator('/docs/Softwrare Requirements Specification/appendices', '9d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Softwrare Requirements Specification/interface-requirements',
                component: ComponentCreator('/docs/Softwrare Requirements Specification/interface-requirements', 'b39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Softwrare Requirements Specification/introduction',
                component: ComponentCreator('/docs/Softwrare Requirements Specification/introduction', 'd6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Softwrare Requirements Specification/overall-description',
                component: ComponentCreator('/docs/Softwrare Requirements Specification/overall-description', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Softwrare Requirements Specification/specific-requirements',
                component: ComponentCreator('/docs/Softwrare Requirements Specification/specific-requirements', '0e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Requests/Song-API/get_a_catalog_song.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Requests/Song-API/get_a_catalog_song.mdx', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Requests/Song-API/get_multiple_catalog_songs_by_id.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Requests/Song-API/get_multiple_catalog_songs_by_id.mdx', '120'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Responses/album-response.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Responses/album-response.mdx', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Responses/artist-response.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Responses/artist-response.mdx', 'a3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Responses/search-response.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Responses/search-response.mdx', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/Apple Music Docs/Responses/song-response.mdx',
                component: ComponentCreator('/docs/기술 스택/API Docs/Apple Music Docs/Responses/song-response.mdx', '8c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/API Docs/tech-stack',
                component: ComponentCreator('/docs/기술 스택/API Docs/tech-stack', 'd9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/database-scheme',
                component: ComponentCreator('/docs/기술 스택/database-scheme', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/기술 스택/versions',
                component: ComponentCreator('/docs/기술 스택/versions', 'be8'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
