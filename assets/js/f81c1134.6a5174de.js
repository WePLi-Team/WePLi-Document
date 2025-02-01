"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"Apple Music API \uc0ac\uc6a9\uae30","metadata":{"permalink":"/blog/Apple Music API \uc0ac\uc6a9\uae30","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-29/2024-12-29.mdx","source":"@site/blog/2024-12-29/2024-12-29.mdx","title":"\uc74c\uc545 API\ub97c \ucc3e\uace0 \ud65c\uc6a9\ud558\uae30\uae4c\uc9c0\uc758 \uacfc\uc815","description":"\uc774 \uae00\uc5d0\uc11c\ub294 WePLi\uc5d0\uc11c \uc74c\uc545 API\ub97c \uc120\ud0dd\ud558\uace0 \ud65c\uc6a9\ud55c \uacfc\uc815\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.","date":"2024-12-29T00:00:00.000Z","tags":[{"inline":true,"label":"WePLi","permalink":"/blog/tags/we-p-li"},{"inline":true,"label":"Apple Music API","permalink":"/blog/tags/apple-music-api"},{"inline":true,"label":"Spotify API","permalink":"/blog/tags/spotify-api"},{"inline":true,"label":"MusicApp","permalink":"/blog/tags/music-app"}],"readingTime":6.595,"hasTruncateMarker":true,"authors":[{"name":"Donghyeon Kim","title":"Android Developer @Cashwalk","url":"https://github.com/dongx0915","page":{"permalink":"/blog/authors/donghyeon"},"socials":{"github":"https://github.com/donghyeon0915","blog":"https://dongx2.tistory.com/"},"imageURL":"https://avatars.githubusercontent.com/u/63500239?v=4","key":"donghyeon"}],"frontMatter":{"slug":"Apple Music API \uc0ac\uc6a9\uae30","title":"\uc74c\uc545 API\ub97c \ucc3e\uace0 \ud65c\uc6a9\ud558\uae30\uae4c\uc9c0\uc758 \uacfc\uc815","authors":["donghyeon"],"tags":["WePLi","Apple Music API","Spotify API","MusicApp"]},"unlisted":false,"nextItem":{"title":"WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720","permalink":"/blog/WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720"}},"content":"\x3c!-- truncate --\x3e\\n\\n\uc774 \uae00\uc5d0\uc11c\ub294 WePLi\uc5d0\uc11c \uc74c\uc545 API\ub97c \uc120\ud0dd\ud558\uace0 \ud65c\uc6a9\ud55c \uacfc\uc815\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.  \\n\ud2b9\ud788 Apple Music API\ub97c \uc120\ud0dd\ud55c \uc774\uc720\uc640 \ud65c\uc6a9 \uc608\uc2dc\ub97c \uc911\uc810\uc73c\ub85c \ub2e4\ub8f0 \uc608\uc815\uc785\ub2c8\ub2e4.\\n\\n### \uc74c\uc545 \ub370\uc774\ud130 \uad6c\ucd95\uc758 \ud544\uc694\uc131\\n\\n\uc74c\uc545 \uad00\ub828 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc74c\uc545 \uac80\uc0c9 \uae30\ub2a5\uc740 \ud544\uc218\uc801\uc778 \uc694\uc18c\uc785\ub2c8\ub2e4.  \\n\ud558\uc9c0\ub9cc \uac1c\uc778\uc774 1\uc5b5 \uac1c \uc774\uc0c1\uc758 \uace1\uacfc \uc9c0\uc18d\uc801\uc73c\ub85c \ucd94\uac00\ub418\ub294 \uc2e0\uace1 \ub370\uc774\ud130\ub97c \uc9c1\uc811 \uad6c\ucd95\ud558\ub294 \uac83\uc740 \ud604\uc2e4\uc801\uc73c\ub85c \uc5b4\ub835\uc2b5\ub2c8\ub2e4.\\n\\nWePLi\uc758 \ucd08\uae30 \ubc84\uc804(Java Swing)\uc5d0\uc11c\ub294 \uc5ec\ub7ec \uc74c\uc545 \ud50c\ub7ab\ud3fc\uc758 \uc778\uae30 \ucc28\ud2b8\ub97c \ud1b5\ud569\ud558\uc5ec \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc744 \uace0\ub824\ud588\uc5c8\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uad6d\ub0b4 \ud50c\ub7ab\ud3fc(\uba5c\ub860, \uc9c0\ub2c8, \ubc85\uc2a4 \ub4f1)\uc740 \uacf5\uc2dd\uc801\uc778 API\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544, \ud06c\ub864\ub9c1\uc744 \uc774\uc6a9\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4.\\n\\n<div align=\\"center\\">\\n    ![\uac80\uc0c9 \ud654\uba74 \uc608\uc2dc](./wepli_chart_screen.png)\\n    <p align=\\"center\\">\\n        WePLi(Java Swing) \ucc28\ud2b8 \ud654\uba74\\n    </p>\\n</div>\\n\\n\ub2f9\uc2dc\uc5d0\ub294 \uc11c\ube44\uc2a4 \ubc30\ud3ec \uacc4\ud68d\uc774 \uc5c6\uc5c8\uae30 \ub54c\ubb38\uc5d0 \ud06c\ub864\ub9c1 \ubc29\uc2dd\uc774 \ubb38\uc81c\uac00 \ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc, \ud604\uc7ac\uc758 WePLi \uc571\uc740 \uacf5\uc2dd\uc801\uc73c\ub85c \ubc30\ud3ec\ub420 \uc608\uc815\uc774\ubbc0\ub85c \uc548\uc815\uc801\uc774\uace0 \ubc95\uc801 \ubb38\uc81c\uac00 \uc5c6\ub294 \uacf5\uc2dd API\uac00 \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uc774 \uae00\uc5d0\uc11c\ub294 \uc74c\uc545 API\ub97c \uc120\ud0dd\ud558\ub294 \uacfc\uc815\uacfc \uace0\ub824 \uc0ac\ud56d\uc744 \uc815\ub9ac\ud558\uace0, Apple Music API\ub97c \uc5b4\ub5bb\uac8c \ud65c\uc6a9\ud588\ub294\uc9c0 \uc18c\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n### \uc74c\uc545 API \uc120\ud0dd \uc2dc \uace0\ub824\ud588\ub358 \uac83\ub4e4\\n\\nWePLi\ub294 \ub2e8\uc21c \uc74c\uc545 \uac80\uc0c9 \uae30\ub2a5\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc0ac\uc6a9\uc790 \uac04 \uacf5\uc720, \uac8c\uc2dc\uae00\uc5d0 \ub178\ub798 \ucca8\ubd80 \ub4f1 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\\n\uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574 \uc801\uc808\ud55c \uc74c\uc545 API\ub97c \ucc3e\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.\\n\\n![\uac80\uc0c9 \ud654\uba74 \uc608\uc2dc](./search_screen.png)\\n\\n\uc74c\uc545 API\ub97c \uc120\ud0dd\ud560 \ub54c \uace0\ub824\ud55c \uae30\uc900\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\\n\\n- **\ud544\uc218 \uc870\uac74**\\n   - \uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5  \\n   - \ud55c\uad6d \ub178\ub798 \uc9c0\uc6d0  \\n   - \ubb34\ub8cc \ub610\ub294 \uc800\ub834\ud55c \ube44\uc6a9\\n   <br/>\\n- **\ubd80\uac00 \uc870\uac74**\\n   - \ucd94\ucc9c \uc11c\ube44\uc2a4 \uc81c\uacf5(\uac80\uc0c9\uc5b4, \ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8 \ub4f1)  \\n\\n\\n\uc704 \uc870\uac74\uc73c\ub85c API\ub97c \ucc3e\ub358 \uc911, \uac00\uc7a5 \ud754\ud788 \uc0ac\uc6a9\ub418\ub294 API \uc11c\ube44\uc2a4 2\uac1c\uac00 \ub208\uc5d0 \ub4e4\uc5b4\uc654\uc2b5\ub2c8\ub2e4.\\n\\n- Spotify API [[\ub9c1\ud06c]](https://developer.spotify.com/terms)\\n- Apple Music API [[\ub9c1\ud06c]](https://developer.apple.com/documentation/applemusicapi)\\n\\n<br/>\\n\\n### Spotify API vs Apple Music API \ube44\uad50\\n\\n|                 |   Spotify   | Apple Music |\\n|-----------------|-------------|-------------|\\n| \uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5 \uc5ec\ubd80 | O            | O           |\\n| \uad6d\ub0b4 \ub178\ub798 \uc81c\uacf5 \uc5ec\ubd80 | X (\uc601\uc5b4\ub85c \uc81c\uacf5) | O           |\\n| \uac00\uaca9             | \ubb34\ub8cc          | \uc5f0 13\ub9cc\uc6d0     |\\n\\nSpotify API\ub294 \ubc29\ub300\ud55c \ub370\uc774\ud130\uc640 \ubb34\ub8cc\ub77c\ub294 \ud070 \uc7a5\uc810\uc774 \uc788\uc9c0\ub9cc, \uad6d\ub0b4 \ub178\ub798\uac00 \ud55c\uae00\ub85c \uc9c0\uc6d0 \ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \ud070 \ub2e8\uc810\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\uc544\ubb34\ub798\ub3c4 \uad6d\ub0b4\ubcf4\ub2e8 \ud574\uc678\uc5d0\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub294 \uc11c\ube44\uc2a4\uc774\uae30 \ub54c\ubb38\uc5d0 \uac00\uc218\ub4e4\uc774 \ub178\ub798\ub97c \ub4f1\ub85d\ud560 \ub54c \uc601\uc5b4\ub85c \ub4f1\ub85d\uc744 \ub9ce\uc774 \ud558\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\\n#### Spotify API\uc758 \ub2e8\uc810\\n1. \ud55c\uad6d \ub178\ub798\uac00 \uc601\uc5b4\ub85c \ub4f1\ub85d\ub418\uc5b4 \uc788\uc74c -> \uac80\uc0c9 \ubc0f \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uc800\ud558\\n2. Spotify \ub85c\uadf8\uc778\uc774 \ud544\uc218 -> Spotify\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc720\uc800\uc5d0\uac90 \ud5c8\ub4e4\ub85c \ub290\uaef4\uc9c8 \uc218 \uc788\uc74c\\n\\nWePLi\uc758 \uc8fc\uc694 \ud0c0\uae43\uce35\uc740 **\uad6d\ub0b4 \ud2b8\ub80c\ub4dc\uc5d0 \ubbfc\uac10\ud55c 10-20\ub300** \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4.  \\n10-20\ub300\uac00 \uc8fc \ud0c0\uae43\uce35\uc778 \uc571\uc5d0\uc11c \ub300\ubd80\ubd84\uc758 \ub178\ub798\uac00 \uc601\uc5b4\ub85c\ub9cc \uc81c\uacf5\uc774 \ub41c\ub2e4\uba74 **\uc571\uc758 \ub9e4\ub825\uc774 \ud06c\uac8c \uac10\uc18c\ud560 \uac83**\uc774\ub77c \ud310\ub2e8\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uacb0\uacfc\uc801\uc73c\ub85c **\uc870\uae08 \ub354 \uc644\uc131\ub3c4 \ub192\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574** \uc5f0 13\ub9cc\uc6d0\uc758 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud558\ub354\ub77c\ub3c4 Apple Music API\ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n### Apple Music API \ud65c\uc6a9\\n\\nWePLi\uc5d0\uc120 Apple Music API\ub97c \ud65c\uc6a9\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.\\n\\n1. **\uc74c\uc545 \uac80\uc0c9 \uae30\ub2a5**\\n   - \uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\ub294 \ub178\ub798\ub97c \uac80\uc0c9\ud558\uba74, Apple Music API\uc5d0\uc11c \uc81c\ubaa9, \uc544\ud2f0\uc2a4\ud2b8, \uc568\ubc94, \uc378\ub124\uc77c \uc774\ubbf8\uc9c0 \ub4f1\uc744 \uac00\uc838\uc635\ub2c8\ub2e4.\\n   - \uac80\uc0c9 \uacb0\uacfc\ub97c \uae30\ubc18\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 \uc27d\uac8c \uace1\uc744 \ucd94\uac00\ud558\uace0 \uacf5\uc720\ud560 \uc218 \uc788\ub3c4\ub85d UI\ub97c \uad6c\uc131\ud588\uc2b5\ub2c8\ub2e4.\\n   <br/>\\n2. **\uc778\uae30 \ucc28\ud2b8**\\n   - Apple Music\uc758 \uc778\uae30 \ucc28\ud2b8 \ub370\uc774\ud130\ub97c \uac00\uc838\uc640 \uc2e4\uc2dc\uac04\uc73c\ub85c \ud2b8\ub80c\ub4dc \uace1\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\\n   - \uc0ac\uc6a9\uc790\uac00 \ud604\uc7ac \uc778\uae30 \uc788\ub294 \uace1\uc744 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ud604\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n   <br/>\\n3. **\uc778\uae30 \uac80\uc0c9\uc5b4**\\n   - Apple Music API\ub97c \ud65c\uc6a9\ud574 \uc0ac\uc6a9\uc790\ub4e4\uc774 \ub9ce\uc774 \uac80\uc0c9\ud558\ub294 \ud0a4\uc6cc\ub4dc\ub97c \ubd84\uc11d\ud558\uc5ec \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.\\n   - \uc774\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ud604\uc7ac \uc720\ud589\ud558\ub294 \uc74c\uc545\uc744 \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n### \ub9c8\ubb34\ub9ac\\n\\nWePLi\ub294 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ucd5c\uc6b0\uc120\uc73c\ub85c \uace0\ub824\ud558\uc5ec Apple Music API\ub97c \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4.  \\n\ube44\uc6a9\uc801\uc778 \ubd80\ub2f4\uc740 \uc788\uc9c0\ub9cc, \ubcf4\ub2e4 \uc644\uc131\ub3c4 \ub192\uc740 \uc74c\uc545 \uac80\uc0c9 \ubc0f \uacf5\uc720 \uae30\ub2a5\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0\uc11c \ucda9\ubd84\ud788 \uac00\uce58 \uc788\ub294 \uc120\ud0dd\uc774\ub77c\uace0 \ud310\ub2e8\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uc55e\uc73c\ub85c\ub3c4 API\ub97c \ud65c\uc6a9\ud55c \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\uba74\uc11c, \ub354 \ub098\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4.  \\n\ub2e4\uc74c \uae00\uc5d0\uc11c\ub294 Apple Music API\ub97c \uc2e4\uc81c\ub85c \uc801\uc6a9\ud55c \ucf54\ub4dc \ubc0f \uad6c\ud604 \ubc29\ubc95\uc744 \uc0c1\uc138\ud788 \ub2e4\ub904\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n\uae34 \uae00 \uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4 \ud83c\udfb5"},{"id":"WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720","metadata":{"permalink":"/blog/WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-28-WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720.mdx","source":"@site/blog/2024-12-28-WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720.mdx","title":"WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720","description":"\uc74c\uc545\uc740 \ub2e8\uc21c\ud788 \ub4e3\ub294 \uac83\uc5d0\uc11c \uadf8\uce58\uc9c0 \uc54a\uace0, \uc0ac\ub78c\ub4e4\uacfc\uc758 \uc5f0\uacb0\uacfc \uac10\uc815\uc744 \uacf5\uc720\ud558\ub294 \ub9e4\uac1c\uccb4\ub85c\uc11c \uac15\ub825\ud55c \ud798\uc744 \uac00\uc9d1\ub2c8\ub2e4.","date":"2024-12-28T00:00:00.000Z","tags":[{"inline":true,"label":"WePLi","permalink":"/blog/tags/we-p-li"},{"inline":true,"label":"MusicApp","permalink":"/blog/tags/music-app"}],"readingTime":4.395,"hasTruncateMarker":true,"authors":[{"name":"Donghyeon Kim","title":"Android Developer @Cashwalk","url":"https://github.com/dongx0915","page":{"permalink":"/blog/authors/donghyeon"},"socials":{"github":"https://github.com/donghyeon0915","blog":"https://dongx2.tistory.com/"},"imageURL":"https://avatars.githubusercontent.com/u/63500239?v=4","key":"donghyeon"}],"frontMatter":{"slug":"WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720","title":"WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720","authors":["donghyeon"],"tags":["WePLi","MusicApp"]},"unlisted":false,"prevItem":{"title":"\uc74c\uc545 API\ub97c \ucc3e\uace0 \ud65c\uc6a9\ud558\uae30\uae4c\uc9c0\uc758 \uacfc\uc815","permalink":"/blog/Apple Music API \uc0ac\uc6a9\uae30"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"\uc74c\uc545\uc740 \ub2e8\uc21c\ud788 \ub4e3\ub294 \uac83\uc5d0\uc11c \uadf8\uce58\uc9c0 \uc54a\uace0, \uc0ac\ub78c\ub4e4\uacfc\uc758 \uc5f0\uacb0\uacfc \uac10\uc815\uc744 \uacf5\uc720\ud558\ub294 \ub9e4\uac1c\uccb4\ub85c\uc11c \uac15\ub825\ud55c \ud798\uc744 \uac00\uc9d1\ub2c8\ub2e4.  \\n\uadf8\ub807\uae30\uc5d0 \uc800\ub294 \uc74c\uc545\uacfc \uad00\ub828\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \uc774\ub7f0 \uac00\uce58\ub97c \ub2f4\uc544\ub0b4\uace0 \uc2f6\ub2e4\ub294 \uc5f4\ub9dd\uc744 \ud488\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc774 \uae00\uc5d0\uc11c\ub294 **WePLi**\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uacc4\uae30\uc640 \uacfc\uc815\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.\\n\\n\x3c!-- truncate --\x3e\\n\\n<br/>\\n\\n### \uc74c\uc545\uacfc \uad00\ub828\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uace0 \uc2f6\ub2e4\ub294 \uc5f4\ub9dd\\n\\n\uc74c\uc545\uc740 \ud56d\uc0c1 \uc81c \uc0b6\uc5d0\uc11c \ud070 \uc601\uac10\uc744 \uc8fc\ub294 \uc694\uc18c\uc600\uc2b5\ub2c8\ub2e4.   \\n\ud2b9\ud788 \uae30\uc874\uc758 \uc74c\uc545 \uc571\ub4e4\uc740 \ub2e8\uc21c\ud788 \uc74c\uc545\uc744 \ub4e3\ub294 \uac83\uc744 \ub118\uc5b4 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uacfc \ud2b8\ub80c\ub514\ud55c \ub514\uc790\uc778\uc73c\ub85c \uc800\ub97c \ub9e4\ub8cc\uc2dc\ucf30\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ub85c \uc778\ud574 **\\"\ub0b4\uac00 \ub9cc\ub4e0 \uc74c\uc545 \uc571\uc740 \uc5b4\ub5a4 \ubaa8\uc2b5\uc77c\uae4c?\\"** \ub77c\ub294 \uc0dd\uac01\uc774 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ub5a0\uc62c\ub790\uace0,   \\n**WePLi** \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\ub294 \uacc4\uae30\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n### \ub514\uc790\uc778\uc5d0 \ub300\ud55c \uc695\uc2ec\\n\\n\uc800\ub294 \uac1c\ubc1c\uc790\uc774\uc9c0\ub9cc, \ub298 \ub514\uc790\uc778\uc5d0\ub3c4 \uad00\uc2ec\uc774 \ub9ce\uc558\uc2b5\ub2c8\ub2e4.   \\n\uae30\ub2a5\uc801\uc778 \uc644\uc131\ub3c4\ub294 \uae30\ubcf8\uc774\uace0, \uc774\ub97c \ub4b7\ubc1b\uce68\ud558\ub294 \ub9e4\ub825\uc801\uc778 \ub514\uc790\uc778\uc774\uc57c\ub9d0\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \ub3cb\ubcf4\uc774\uac8c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.\\n\\n\ud558\uc9c0\ub9cc \ub300\ud559 \uc2dc\uc808 \ub514\uc790\uc774\ub108\uc640 \ud611\uc5c5\uc744 \ud558\uba74\uc11c \uc81c \ucde8\ud5a5\uc744 \ubc18\uc601\ud55c \uacb0\uacfc\ubb3c\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc5b4\ub824\uc6b4 \uc77c\uc778\uc9c0 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4.   \\n\uc6d0\ud558\ub294 \ub514\uc790\uc778\uc744 \ub9d0\ub85c \uc124\uba85\ud558\ub294 \uac83\ub3c4 \uc27d\uc9c0 \uc54a\uc558\uace0, \ud611\uc5c5\uc758 \ud2b9\uc131\uc0c1 \uc81c \uc758\uacac\ub9cc\uc744 \uace0\uc9d1\ud560 \uc218\ub294 \uc5c6\uc5c8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\\n\\n\uc774\ud6c4 \ud68c\uc0ac\uc5d0\uc11c\ub3c4 \uae30\ud68d\uc11c\uc640 \uae30\uc874 \ub514\uc790\uc778\uc5d0 \uae30\ubc18\ud558\uc5ec \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\ub2e4 \ubcf4\ub2c8, \uc81c\uac00 **\uc6d0\ud558\ub294 \uae30\ub2a5\uacfc \ub514\uc790\uc778\uc744 \uc628\uc804\ud788 \ub2f4\uc740 \uc571**\uc744 \ub9cc\ub4e4\uc5b4\uc57c\uaca0\ub2e4\ub294 \uc0dd\uac01\uc774 \ub354\uc6b1 \ucee4\uc838 **WePLi**\ub97c \uac1c\ubc1c\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n### \ub0b4 \ucde8\ud5a5\uc774 \ub2f4\uae34 \uc571, WePLi\uc758 \ud0c4\uc0dd\\n\\n\uc0ac\uc2e4 **WePLi**\ub77c\ub294 \uc571\uc740 \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \uc2dc\uc791\uc740 \uc544\ub2c8\uc5c8\uc2b5\ub2c8\ub2e4.   \\n\uacfc\uac70 Java Swing\uc744 \uc0ac\uc6a9\ud574 \ub3d9\uc77c\ud55c \uc8fc\uc81c\uc758 \ud504\ub85c\uadf8\ub7a8([Github](https://github.com/DeuWePLi/WePLi))\uc744 \ub9cc\ub4e4\uc5b4\ubcf8 \uc801\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\\n\ub2f9\uc2dc\uc5d0\ub3c4 \uc774 \ud504\ub85c\uc81d\ud2b8\ub294 \uc81c \ucde8\ud5a5\uc744 \uac00\ub4dd \ub2f4\uc544\ub0b8 \uacb0\uacfc\ubb3c\uc774\ub77c \ud070 \uc560\uc815\uc744 \uac00\uc84c\uc5c8\uc73c\ub098 \uae30\uc220\uc801 \ud55c\uacc4\ub85c \uc778\ud574 \ubbf8\uc644\uc131\uc73c\ub85c \ub0a8\uacbc\ub358 \uc544\uc26c\uc6c0\uc774 \ub298 \ub9c8\uc74c\uc5d0 \ub0a8\uc544 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ubc88\uc5d0\ub294 \uc131\uc7a5\ud55c \uc81c \uac1c\ubc1c \ub2a5\ub825\uacfc \ub514\uc790\uc778 \uac10\uac01\uc744 \ucd5c\ub300\ud55c\uc73c\ub85c \ub3d9\uc6d0\ud558\uc5ec, \uadf8\ub54c\uc758 \uc544\uc26c\uc6c0\uc744 \ud574\uc18c\ud558\uace0 \uc81c\uac00 \uc9c4\uc815\uc73c\ub85c \ub9cc\ub4e4\uace0 \uc2f6\uc5c8\ub358 \uc571\uc744 \uc644\uc131\ud558\uace0\uc790 WePLi\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n---\\n\\n**WePLi**\ub294 \ub2e8\uc21c\ud55c \uc571\uc774 \uc544\ub2c8\ub77c, \uc800\uc758 \uac1c\ubc1c \ucca0\ud559\uacfc \ub514\uc790\uc778\uc5d0 \ub300\ud55c \uc5f4\uc815\uc744 \ub2f4\uc740 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.    \\n\uc74c\uc545\uc774\ub77c\ub294 \uc8fc\uc81c\ub97c \ud1b5\ud574 \uc800\ub9cc\uc758 \ucde8\ud5a5\uc744 \ud45c\ud604\ud558\uba74\uc11c\ub3c4 \uc0ac\uc6a9\uc790\ub4e4\uc5d0\uac8c \uacf5\uac10\uacfc \uc7ac\ubbf8\ub97c \uc904 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uace0\uc790 \ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uc55e\uc73c\ub85c \uc774 \uc0ac\uc774\ud2b8\ub97c \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \uc644\uc131\ud558\uae30\uae4c\uc9c0\uc758 \uacfc\uc815\uacfc \uc2dc\ud589\ucc29\uc624 \uadf8\ub9ac\uace0 \ubc30\uc6b4 \uc810\ub4e4\uc744 \uae30\ub85d\ud558\uace0 \uacf5\uc720\ud558\uace0\uc790 \ud569\ub2c8\ub2e4.\\n\\n**WePLi**\uac00 \ub2e8\uc21c\ud788 \uac1c\uc778\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \ub118\uc5b4, \uc74c\uc545\uc744 \uc0ac\ub791\ud558\ub294 \uc0ac\ub78c\ub4e4\uc774 \uc11c\ub85c\uc758 \ucde8\ud5a5\uc744 \uacf5\uc720\ud558\uace0 \uacf5\uac10\ud560 \uc218 \uc788\ub294 \uacf5\uac04\uc774 \ub418\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.465,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720","permalink":"/blog/WePLi\ub97c \uac1c\ubc1c\ud558\uac8c \ub41c \uc774\uc720"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nHere are a few tips you might find useful.\\n\\n\x3c!-- truncate --\x3e\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.235,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n:::\\n\\n{/* truncate */}\\n\\nFor example, use JSX to create an interactive button:\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":2.06,"hasTruncateMarker":true,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"yangshun","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!-- truncate --\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);