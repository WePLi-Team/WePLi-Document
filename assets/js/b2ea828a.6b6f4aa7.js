"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9730],{1991:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"wepli-tech-blog-composable-to-bitmap","metadata":{"permalink":"/techblog/wepli-tech-blog-composable-to-bitmap","editUrl":"https://github.com/facebook/docusaurus/edit/master/website/my-blog/techblog/2025-02-22/wepli-tech-blog-bitmap.mdx","source":"@site/techblog/2025-02-22/wepli-tech-blog-bitmap.mdx","title":"Composable\uc744 Bitmap\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\ubc95","description":"Composable\uc744 Bitmap\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc774\uc288\uc640 \ud574\uacb0 \uacfc\uc815\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4.","date":"2025-02-22T00:00:00.000Z","tags":[{"inline":true,"label":"WePLi","permalink":"/techblog/tags/we-p-li"},{"inline":true,"label":"MusicApp","permalink":"/techblog/tags/music-app"}],"readingTime":10.525,"hasTruncateMarker":true,"authors":[{"name":"Donghyeon Kim","title":"Android Developer @Cashwalk","url":"https://github.com/dongx0915","page":{"permalink":"/techblog/authors/donghyeon"},"socials":{"github":"https://github.com/donghyeon0915","blog":"https://dongx2.tistory.com/"},"imageURL":"https://avatars.githubusercontent.com/u/63500239?v=4","key":"donghyeon"}],"frontMatter":{"slug":"wepli-tech-blog-composable-to-bitmap","title":"Composable\uc744 Bitmap\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\ubc95","authors":["donghyeon"],"date":"2025-02-22","tags":["WePLi","MusicApp"]},"unlisted":false,"nextItem":{"title":"Supabase Json\uc73c\ub85c \uacc4\uce35 \uad6c\ud604\ud558\uae30","permalink":"/techblog/wepli-tech-blog-supabase-json"}},"content":"import NameCardFlow from \'./namecard_flow.png\';\\nimport NameCardDesign from \'./namecard_design.png\';\\nimport NameCardBlur from \'./namecard_blur.png\';\\n\\nComposable\uc744 Bitmap\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc774\uc288\uc640 \ud574\uacb0 \uacfc\uc815\uc5d0 \ub300\ud574 \uc18c\uac1c\ud569\ub2c8\ub2e4.\\n\\n{/* truncate */}\\n\\n\uc544\ub798 \uae00\uc740 Jetpack Compose\ub85c \uc791\uc131\ud55c \uba85\ud568(\ub610\ub294 \uce74\ub4dc) UI\ub97c \uc774\ubbf8\uc9c0\ub85c \uc800\uc7a5\ud558\uace0 \uacf5\uc720\ud558\ub294 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uba74\uc11c \uacaa\uc740 \ubb38\uc81c\uc640 \ud574\uacb0 \uacfc\uc815\uc744 \uc815\ub9ac\ud55c \uae00\uc785\ub2c8\ub2e4.\\n\\nComposable \u2192 Bitmap \ubcc0\ud658 \uacfc\uc815\uacfc, \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d / isLaidOut / \ube14\ub7ec \ub4f1\uc758 \uc774\uc288\uc5d0 \ub300\ud574 \uc815\ub9ac\ud558\uc600\uc2b5\ub2c8\ub2e4.\\n\\n### \uae30\ub2a5 \uc18c\uac1c\\n\\n<img src={NameCardFlow} alt=\\"Loading\\"/>\\n\\n<br/>\\n\\n\ud604\uc7ac \uc0ac\uc6a9\uc790\uc758 \uc74c\uc545 \ucde8\ud5a5\uc774 \ub4dc\ub7ec\ub098\ub294 \uba85\ud568\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\uc571\uc5d0\uc11c \uc0dd\uc131\ud55c \uba85\ud568\uc740 \uc774\ubbf8\uc9c0\ub85c \ubcc0\ud658 \ub418\uc5b4 \uac24\ub7ec\ub9ac\uc5d0 \uc800\uc7a5\ud558\uac70\ub098, SNS\ub85c \uacf5\uc720\ud560 \uc218 \uc788\ub3c4\ub85d \ud560 \uc608\uc815\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uae30\uc874 View \uc2dc\uc808\uc5d0\ub294 drawToBitmap() \ub4f1\uc73c\ub85c \uc27d\uac8c \ucc98\ub9ac\ud588\uc9c0\ub9cc, Jetpack Compose\ub85c UI\ub97c \uc791\uc131\ud558\uba74 \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc774 \ubc14\ub85c \uc801\uc6a9\ub418\uc9c0 \uc54a\uc544, \uc5ec\ub7ec \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n### drawToBitmap()\uc744 \ud65c\uc6a9\ud55c \ubc29\uc2dd\\n\\n#### \ucd08\uae30 \uc544\uc774\ub514\uc5b4 \ud83d\udcad \\n\\n\ucc98\uc74c\uc5d4 Compose \ub0b4\uc5d0 \uc788\ub294 Composable\uc744 \ubcc4\ub3c4\uc758 `ComposeView`\uc5d0 \uadf8\ub9b0 \ub4a4, `drawToBitmap()`\uc744 \ud638\ucd9c\ud574\uc11c Bitmap\uc744 \uc5bb\ub294 \ubc29\uc2dd\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc774 \ubc29\ubc95\uc73c\ub85c \uac04\ub2e8\ud558\uac8c Composable\uc744 Bitmap\uc73c\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\uc5c8\uc73c\ub098 \uc5ec\ub7ec\uac00\uc9c0 \uc774\uc288\uac00 \uc874\uc7ac\ud588\uc2b5\ub2c8\ub2e4.\\n\\n#### \ucf54\ub4dc \uc608\uc2dc\\n\\n```kotlin\\n@Composable\\nfun convertToBitmap(\\n    targetContent: @Composable () -> Unit\\n): () -> Bitmap? {\\n    val context = LocalContext.current\\n    val composeView = remember { ComposeView(context) }\\n\\n    fun captureBitmap(): Bitmap? {\\n        // composeView\uac00 \uc544\uc9c1 \ub808\uc774\uc544\uc6c3\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74 null\uc744 \ubc18\ud658\\n        return if (composeView.isLaidOut) {\\n            composeView.drawToBitmap()\\n        } else {\\n            null\\n        }\\n    }\\n\\n    AndroidView(\\n        factory = {\\n            composeView.apply {\\n                // \uc5ec\uae30\uc5d0\uc11c targetContent\ub97c \uc2e4\uc81c\ub85c \uadf8\ub824\uc8fc\uae30\\n                setContent { targetContent() }\\n            }\\n        }\\n    )\\n\\n    // \ud544\uc694\ud55c \uc2dc\uc810\uc5d0 captureBitmap()\uc744 \ud638\ucd9c\ud574 Bitmap\uc744 \uc5bb\uc74c\\n    return ::captureBitmap\\n}\\n```\\n- convertToBitmap \ud568\uc218\ub294 \ubcc4\ub3c4 ComposeView\ub97c \uc0dd\uc131\ud574, \uc6d0\ud558\ub294 Composable(targetContent)\ub97c \uadf8\ub9bd\ub2c8\ub2e4.\\n- \uc2e4\uc81c \ubdf0\uac00 \ub808\uc774\uc544\uc6c3\uc744 \ub9c8\uccd0\uc57c drawToBitmap()\uc744 \uc548\uc804\ud558\uac8c \ud638\ucd9c\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c, isLaidOut \uccb4\ud06c\ub97c \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n:::info\\n  **isLaidOut** \uc740 View(\ub610\ub294 ComposeView)\uac00 \ub808\uc774\uc544\uc6c3 \uacfc\uc815\uc744 \ubaa8\ub450 \ub9c8\uccd0\uc11c \uc2e4\uc81c \ud654\uba74 \ud06c\uae30\uac00 \ud655\uc815\ub418\uc5c8\ub294\uc9c0\ub97c \uc54c\ub824\uc8fc\ub294 \ud50c\ub798\uadf8\uc785\ub2c8\ub2e4.\\n\\n  \uc774 \uac12\uc774 true\uc5ec\uc57c drawToBitmap() \ub4f1\uc744 \ud1b5\ud574 \uc548\uc804\ud558\uac8c \ubdf0\ub97c Bitmap\uc73c\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\uc73c\uba70, \uc544\uc9c1 \ub808\uc774\uc544\uc6c3\uc774 \uacb0\uc815\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc5d0\uc11c \ucea1\ucc98\ub97c \uc2dc\ub3c4\ud558\uba74 **IllegalStateException**\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n:::\\n\\n<br/>\\n\\n\uc774\ub294 \uc544\ub798\uc640 \uac19\uc774 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```kotlin\\nval nameCardBitmapGenerator = convertToBitmap {\\n    // Bitmap\uc73c\ub85c \ubcc0\ud658\ud560 Composable\\n    NameCardComponent(nameCardInfo = state.nameCardInfo)\\n}\\n\\n// \ud544\uc694\ud55c \uc2dc\uc810(\uc608: \ubc84\ud2bc \ud074\ub9ad \ub4f1)\uc5d0 \ud638\ucd9c\\nval bitmap: Bitmap? = nameCardBitmapGenerator.invoke()\\n```\\n\\nBitmap \ubcc0\ud658\uc740 \uc798 \ub418\ub294 \ub4ef \ud588\uc73c\ub098 \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d \uc0ac\uc6a9\uc2dc \ubcc0\ud658 \ubd88\uac00\ud55c \uc774\uc288, Blur \ubbf8\uc801\uc6a9 \uc774\uc288 \ub4f1 \uc5ec\ub7ec \ubb38\uc81c\uac00 \ub4a4\ub530\ub790\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n\\n#### 1\ufe0f\u20e3 \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d \uc0ac\uc6a9\uc2dc \ubcc0\ud658 \ubd88\uac00\ud55c \uc774\uc288\\n  \\nCoil\uc744 \uc0ac\uc6a9\ud574\uc11c \uc774\ubbf8\uc9c0\ub97c \ub85c\ub4dc\ud558\uba74 \uae30\ubcf8\uc801\uc73c\ub85c \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n:::info\\n```kotlin\\nclass DefaultRequestOptions(\\n    /*...*/\\n    val allowHardware: Boolean = true,\\n) \\n```\\nCoil\uc758 DefaultRequestOptions \ud074\ub798\uc2a4\ub97c \ubcf4\uba74 allowHardware \uc635\uc158\uc758 \uae30\ubcf8 \uac12\uc774 true\uc778 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n:::\\n\\n\ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc744 \uc0ac\uc6a9\ud558\ub294 \uc0c1\ud0dc\uc5d0\uc11c drawToBitmap()\uc744 \ud638\ucd9c\ud558\uba74, \uc18c\ud504\ud2b8\uc6e8\uc5b4 Bitmap\uc73c\ub85c \uc9c1\uc811 \ubcf5\uc0ac\ud558\uae30\uac00 \ubd88\uac00\ub2a5\ud574\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\\n\\n**\ud574\uacb0** :   \\n\uba85\ud568 \uc0dd\uc131 \uae30\ub2a5\uc5d0\uc11c\ub294 \uc774\ubbf8\uc9c0\ub97c \ub300\ub7c9\uc73c\ub85c \ub85c\ub4dc\ud560 \ud544\uc694\uac00 \uc5c6\uc5c8\uae30\uc5d0, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac00\uc18d\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\uc744 \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.  \\n\uc131\ub2a5 \uc800\ud558\uac00 \uc788\uc744 \uc218 \uc788\uc9c0\ub9cc, \uc2e4\uc81c \uba85\ud568 UI\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c 1~2\uc7a5 \uc815\ub3c4\ub9cc \ub2e4\ub918\uc73c\ubbc0\ub85c \uc601\ud5a5\uc774 \ud06c\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n<br/>\\n\\n#### 2\ufe0f\u20e3 Blur\uac00 Bitmap\uc73c\ub85c \ubcc0\ud658\uc774 \ub418\uc9c0 \uc54a\ub294 \uc774\uc288\\n\\n\ub450 \ubc88\uc9f8 \uc774\uc288\ub294 Blur\uac00 \uc801\uc6a9\ub41c Composable\uc744 \ucea1\uccd0\ud558\uba74, Blur\uac00 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\ub85c Bitmap\uc774 \ucd94\ucd9c\ub41c\ub2e4\ub294 \uc810\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n<div align=\\"center\\">\\n  <img src={NameCardBlur} alt=\\"Loading\\" style={{width: 400}}/>\\n</div>\\n\\n<br/>\\n\\n\\n\uc544\ub798\uc640 \uac19\uc774 \uc5ec\ub7ec \uba85\ud568 \ub514\uc790\uc778 \uc911 Blur\ub97c \uc0ac\uc6a9\ud558\ub294 \ucf00\uc774\uc2a4\uac00 \ub9ce\uc558\ub294\ub370, \ucea1\uccd0 \uacb0\uacfc\ubb3c\uc5d0\ub294 \uadf8 \ube14\ub7ec \ud6a8\uacfc\uac00 \uc804\ud600 \ub098\ud0c0\ub098\uc9c0 \uc54a\uc544 \ub09c\uac10\ud588\uc2b5\ub2c8\ub2e4.\\n\\n<img src={NameCardDesign} alt=\\"Loading\\"/>\\n<br/>\\n\\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 Modifier.blur() \ub300\uc2e0 \ub2e4\ub978 Blur \ub77c\uc774\ube0c\ub7ec\ub9ac(cloudy, haze) \ub4f1\uc744 \uc0ac\uc6a9\ud574\ubd24\ub294\ub370\ub3c4 \ubb38\uc81c\ub294 \ub3d9\uc77c\ud588\uc2b5\ub2c8\ub2e4.\\n\uacb0\uad6d Blur \uc790\uccb4\uc758 \ubb38\uc81c\ub77c\uae30\ubcf4\ub2e4\ub294, \ucea1\uccd0 \ubc29\ubc95\uc758 \ubb38\uc81c\uc784\uc744 \uc54c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n<br/>\\n\\n### graphicsLayer\ub97c \uc774\uc6a9\ud55c \uc0c8\ub85c\uc6b4 \ub85c\uc9c1\\n\\n\uc704 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574, \uacf5\uc2dd \ubb38\uc11c\uc5d0\uc11c \uc548\ub0b4\ud55c graphicsLayer \uae30\ubc18\uc758 \ucea1\uccd0 \ubc29\uc2dd\uc744 \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4.\\n\\ngraphicsLayer.toImageBitmap()\ub97c \uc0ac\uc6a9\ud558\uba74, Blur\uac00 GPU\uc5d0\uc11c \ucc98\ub9ac\ub418\ub294 \uacfc\uc815\uc744 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubc84\ud37c\ub85c \uae30\ub85d\ud560 \uc218 \uc788\uc5b4 Blur\uac00 \uc801\uc6a9\ub41c \uc0c1\ud0dc\ub97c \ubcf4\ub2e4 \uc548\uc815\uc801\uc73c\ub85c \ucea1\uccd0\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n```kotlin\\nval graphicsLayer = rememberGraphicsLayer()\\n\\nNameCardComponent3(\\n    nameCardInfo = state.nameCardInfo,\\n    modifier = Modifier\\n        .align(Alignment.CenterHorizontally)\\n        .drawWithContent {\\n            graphicsLayer.record {\\n                this@drawWithContent.drawContent()\\n            }\\n            drawLayer(graphicsLayer)\\n        }\\n)\\n\\ngraphicsLayer.toImageBitmap()\\n```\\n\\n#### Bitmap \ubcc0\ud658\\n\\ngraphicsLayer.toImageBitmap()\ub294 **ImageBitmap**\uc744 \ubc18\ud658\ud558\ub294\ub370, \uc774\ub97c \uace7\ubc14\ub85c \ud30c\uc77c\ub85c \uc800\uc7a5\ud558\uac70\ub098 \uacf5\uc720\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.\\n\\n\ub530\ub77c\uc11c \uc544\ub798\uc640 \uac19\uc740 \ud655\uc7a5 \ud568\uc218\ub97c \ub9cc\ub4e4\uc5b4, ImageBitmap \u2192 Bitmap \ubcc0\ud658 \uacfc\uc815\uc744 \uac70\ucce4\uc2b5\ub2c8\ub2e4.\\n\\n```kotlin\\nfun ImageBitmap.toAndroidBitmap(): Bitmap {\\n    // 1. Compose\uc758 PixelMap \uac00\uc838\uc624\uae30\\n    val pixelMap = this.toPixelMap()\\n\\n    // 2. PixelMap \ud06c\uae30\uc5d0 \ub9de\ub294 \ube48 Bitmap \uc0dd\uc131\\n    val bitmap = Bitmap.createBitmap(pixelMap.width, pixelMap.height, Bitmap.Config.ARGB_8888)\\n\\n    // 3. PixelMap\uc744 \uc21c\ud68c\ud558\uba70 Bitmap\uc5d0 \ud53d\uc140 \uc4f0\uae30\\n    for (y in 0 until pixelMap.height) {\\n        for (x in 0 until pixelMap.width) {\\n            val color: Color = pixelMap[x, y]\\n            bitmap.setPixel(x, y, color.toArgb())\\n        }\\n    }\\n    return bitmap\\n}\\n```\\n\\n\uc774\ub807\uac8c \ucd5c\uc885\uc801\uc73c\ub85c Blur\uac00 \uc801\uc6a9\ub41c Bitmap\uc744 \uc5bb\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n:::info\\ngraphicsLayer.toImageBitmap()\ub294 suspend \ud568\uc218\uc774\ubbc0\ub85c, Coroutine \ub0b4\uc5d0\uc11c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4.   \\n\ub610\ud55c UI\uac00 \uc644\uc804\ud788 \ub80c\ub354\ub9c1\ub41c \ub4a4\uc5d0 \ud638\ucd9c\ud574\uc57c \uc62c\ubc14\ub978 \uacb0\uacfc\ubb3c\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n:::\\n\\n/* \ub3d9\uc791 GIF \ucd94\uac00\ud558\uae30 */\\n\\n\\n### BottomSheet\uc5d0\uc11c Bitmap \ubcf4\uc5ec\uc8fc\uae30\\n\\n\ub9c8\uc9c0\ub9c9\uc73c\ub85c, \uc0dd\uc131\ub41c Bitmap\uc744 BottomSheet\uc5d0 \ud45c\uc2dc\ud560 \uc218 \uc788\uac8c \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4.\\n\\n#### \ubb38\uc81c\uc810\\n- graphicsLayer.toImageBitmap()\uc740 \ube44\ub3d9\uae30(suspend) \ub85c\uc9c1\uc785\ub2c8\ub2e4.\\n- \ub530\ub77c\uc11c, \uace7\ubc14\ub85c BottomSheet\ub97c \uc5f4\uc5b4\ubc84\ub9ac\uba74, Bitmap\uc774 \uc900\ube44\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n#### \ud574\uacb0 \ubc29\ubc95\\n1. \uacf5\uc720\ud558\uae30 \ubc84\ud2bc \ud074\ub9ad \uc2dc -> Bitmap \uc0dd\uc131 (graphicsLayer.toImageBitmap())\\n2. Bitmap \uc0dd\uc131\uc774 \uc644\ub8cc\ub418\uba74 state\ub85c \uc800\uc7a5\\n3. BottomSheet\uc5d0\uc11c\ub294 \ubbf8\ub9ac \uc900\ube44\ub41c Bitmap\uc744 \uc548\uc804\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c\\n\\n```kotlin\\nvar nameCardBitmap by remember { mutableStateOf<ImageBitmap?>(null) }\\n\\nWepliBasicButton(\\n    /*...*/\\n    onClick = {\\n        coroutineScope.launch {\\n            // \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad\ud55c \uc2dc\uc810\uc5d0 Bitmap\uc744 \ucea1\uccd0\\n            nameCardBitmap = captureNameCard(graphicsLayer)\\n            sendAction(NameCardResultIntent.ShowShareBottomSheet(true))\\n        }\\n    },\\n)\\n\\nif (state.isShownShareBottomSheet) {\\n    nameCardBitmap?.let {\\n        NameCardShareBottomSheet(nameCardBitmap = it, sendAction = sendAction)\\n    }\\n}\\n```\\n\\n\\n\\n### \ub9c8\ubb34\ub9ac\\n\\n\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 Composable\uc744 Bitamp\uc73c\ub85c \ubcc0\ud658\ud558\uace0, \uc774\ub97c \uc800\uc7a5\ud558\uac70\ub098 \uacf5\uc720\ud558\ub294 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uba74\uc11c \ub9c8\uc8fc\ud55c \ub2e4\uc591\ud55c \uc774\uc288\ub4e4\uc744 \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.\\n\\n- \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc774 \ucf1c\uc9c4 \uc774\ubbf8\uc9c0\ub97c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ube44\ud2b8\ub9f5\uc73c\ub85c \ubcc0\ud658\ud560 \uc218 \uc5c6\ub294 \ubb38\uc81c\\n- isLaidOut \ud50c\ub798\uadf8\ub97c \uc774\uc6a9\ud574 \ub808\uc774\uc544\uc6c3\uc774 \uc644\ub8cc\ub41c \ub4a4\uc5d0\ub9cc \ucea1\ucc98\ud574\uc57c \ud558\ub294 \uc774\uc288\\n- Blur\uac00 \uc804\ud600 \ubc18\uc601\ub418\uc9c0 \uc54a\uace0 \uc6d0\ubcf8 \uc0c1\ud0dc\ub85c \ucea1\ucc98\ub418\ub294 \ubb38\uc81c\\n- graphicsLayer.toImageBitmap()\uac00 suspend \ud568\uc218\uc774\ubbc0\ub85c, UI \ud750\ub984(\uc608: BottomSheet)\uacfc\uc758 \ud0c0\uc774\ubc0d\uc744 \uc798 \ub9de\ucdb0\uc57c \ud558\ub294 \uc810\\n\\n\\n\uc774\ub7ec\ud55c \ubb38\uc81c\ub4e4\uc744 \ud574\uacb0\ud558\ub294 \uacfc\uc815\uc5d0\uc11c,\\n\\n1. \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac00\uc18d \uc0ac\uc6a9\\n2. isLaidOut \uccb4\ud06c \ud6c4 \uc548\uc804\ud55c \uc2dc\uc810\uc5d0 drawToBitmap() \ud638\ucd9c\\n3. Blur \ud6a8\uacfc\ub97c \uc0b4\ub9ac\uae30 \uc704\ud55c graphicsLayer \ud65c\uc6a9\\n4. \ucf54\ub8e8\ud2f4\uc744 \ud1b5\ud55c \ube44\ub3d9\uae30 \ucc98\ub9ac\uc640 UI \uc81c\uc5b4(\uc608: BottomSheet \uc5f4\uae30 \uc2dc\uc810 \uc870\uc815)\\n\\n\ub4f1\uc744 \uc801\uc6a9\ud588\uc2b5\ub2c8\ub2e4.\\n\\nCompose\uac00 \ubc18\ubcf5 \ub80c\ub354\ub9c1(Recomposition)\uc744 \ud1b5\ud574 UI\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uadf8\ub824\uc8fc\ub294 \uc7a5\uc810\uc774 \uc788\uc9c0\ub9cc, \uc774\ubbf8\uc9c0 \ucea1\uccd0\ucc98\ub7fc **\uc815\ud655\ud55c \uc2dc\uc810**\uacfc **\ub80c\ub354\ub9c1 \ud0c0\uc785**\uc744 \uc81c\uc5b4\ud574\uc57c \ud558\ub294 \uae30\ub2a5\uc740 \uae30\uc874 View \ub300\ube44 \uace0\ub824\ud574\uc57c \ud560 \uc694\uc18c\ub4e4\uc774 \ub9ce\uc740 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ubc88 \uacbd\ud5d8\uc744 \ud1b5\ud574 \uc313\uc740 \ub178\ud558\uc6b0\uac00, \uc55e\uc73c\ub85c \ub2e4\uc591\ud55c UI \uac1c\ubc1c\uc5d0 \uc788\uc5b4 \ud070 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc774\ub77c \uae30\ub300\ud569\ub2c8\ub2e4.\\n\\n\ub05d\uae4c\uc9c0 \uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud558\uba70, \uc55e\uc73c\ub85c\ub3c4 Compose \uae30\ubc18 \uc571 \uac1c\ubc1c\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc774\uc288\ub4e4\uc744 \uacf5\uc720\ud558\uc5ec, \uac19\uc740 \ubb38\uc81c\ub85c \uace0\ubbfc\ud558\ub294 \ubd84\ub4e4\uaed8 \ub3c4\uc6c0\uc774 \ub418\uae38 \ubc14\ub78d\ub2c8\ub2e4."},{"id":"wepli-tech-blog-supabase-json","metadata":{"permalink":"/techblog/wepli-tech-blog-supabase-json","editUrl":"https://github.com/facebook/docusaurus/edit/master/website/my-blog/techblog/2025-02-01/wepli-tech-blog-supabase-json.mdx","source":"@site/techblog/2025-02-01/wepli-tech-blog-supabase-json.mdx","title":"Supabase Json\uc73c\ub85c \uacc4\uce35 \uad6c\ud604\ud558\uae30","description":"Supabase\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c View\ub97c \uc0ac\uc6a9\ud588\uc744 \ub54c\uc758 \ubb38\uc81c\uc810\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.","date":"2025-02-01T00:00:00.000Z","tags":[{"inline":true,"label":"WePLi","permalink":"/techblog/tags/we-p-li"},{"inline":true,"label":"MusicApp","permalink":"/techblog/tags/music-app"}],"readingTime":7.3,"hasTruncateMarker":true,"authors":[{"name":"Donghyeon Kim","title":"Android Developer @Cashwalk","url":"https://github.com/dongx0915","page":{"permalink":"/techblog/authors/donghyeon"},"socials":{"github":"https://github.com/donghyeon0915","blog":"https://dongx2.tistory.com/"},"imageURL":"https://avatars.githubusercontent.com/u/63500239?v=4","key":"donghyeon"}],"frontMatter":{"slug":"wepli-tech-blog-supabase-json","title":"Supabase Json\uc73c\ub85c \uacc4\uce35 \uad6c\ud604\ud558\uae30","authors":["donghyeon"],"date":"2025-02-01","tags":["WePLi","MusicApp"]},"unlisted":false,"prevItem":{"title":"Composable\uc744 Bitmap\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\ubc95","permalink":"/techblog/wepli-tech-blog-composable-to-bitmap"},"nextItem":{"title":"WePLi \uae30\uc220 \ube14\ub85c\uadf8 \uc18c\uac1c","permalink":"/techblog/wepli-tech-blog"}},"content":"Supabase\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c View\ub97c \uc0ac\uc6a9\ud588\uc744 \ub54c\uc758 \ubb38\uc81c\uc810\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.\\n\\n<br/>\\n<br/>\\n{/* truncate */}\\n\\nWePLi\ub294 \ud604\uc7ac \uc11c\ubc84 \ud504\ub808\uc784\uc6cc\ud06c \uc5c6\uc774 Supabase\ub9cc\uc744 \ud65c\uc6a9\ud574 \uac1c\ubc1c \uc911\uc785\ub2c8\ub2e4.  \\n\\nSupabase\ub294 \uc11c\ubc84\uac00 \uc5c6\ub294 \ub3d9\uc548 \uc784\uc2dc \ub300\uccb4\uc81c\ub85c \uc0ac\uc6a9\ub418\uace0 \uc788\uc73c\uba70, \ucd94\ud6c4 \uc2e4\uc81c \uc11c\ubc84\ub85c \uc804\ud658\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.  \\n**Supabase\ub97c \uc11c\ubc84\ub85c \uc804\ud658\ud560 \ub54c \uc571\uc5d0\ub294 \ucd5c\ub300\ud55c \uc601\ud5a5\uc774 \uc5c6\uc5b4\uc57c\ud55c\ub2e4\ub294 \ubaa9\ud45c**\ub97c \uac00\uc9c0\uace0 \uac1c\ubc1c\uc5d0 \uc784\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uc571\uc5d0 \uc601\ud5a5\uc774 \uc5c6\uc73c\ub824\uba74 Supabae\uc5d0\uc11c \uc2e4\uc81c \uc11c\ubc84\uc758 \uc751\ub2f5 \uad6c\uc870\uc640 \ube44\uc2b7\ud558\uac8c \uad6c\uc131\uc744 \ud574\uc57c\ud558\ub294\ub370,  \\n\uc5ec\uae30\uc11c \ud55c \uac00\uc9c0 \ubb38\uc81c\uc810\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.  \\n\\n\uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uae30\ubcf8\uc801\uc73c\ub85c **\ud3c9\uba74\uc801\uc778 \ud14c\uc774\ube14 \uad6c\uc870**\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 **\uacc4\uce35 \ub370\uc774\ud130\ub97c \ud45c\ud604\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.**  \\n\uc774\ub85c \uc778\ud574 Supabase\uc758 \uc751\ub2f5 \ud615\uc2dd\uacfc \uc2e4\uc81c \uc11c\ubc84\uc758 \uc751\ub2f5 \uad6c\uc870 \uc0ac\uc774\uc5d0 \ucc28\uc774\uac00 \ubc1c\uc0dd\ud558\uba70, \uc774 \ucc28\uc774\uac00 \ud074\uc218\ub85d \uc2e4\uc81c \uc11c\ubc84 \uc804\ud658 \uc2dc \uc571 \ucf54\ub4dc \uc218\uc815 \uc0ac\ud56d\uc774 \ub9ce\uc544\uc9d1\ub2c8\ub2e4.\\n\\n\uc774 \uae00\uc5d0\uc11c\ub294 \uae30\uc874 View \ubc29\uc2dd\uc758 \ud55c\uacc4\uc640, **PostgreSQL**\uc758 ***JSON Aggregation*** \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\uc5ec \uacc4\uce35\ud615 \ub370\uc774\ud130 \ubdf0\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.\\n\\n\\n### \uae30\uc874 View \uc0dd\uc131 \ubc29\uc2dd\uacfc \uadf8 \ud55c\uacc4\\n\\n\uc77c\ubc18\uc801\uc73c\ub85c View\ub97c \uc0dd\uc131\ud560 \ub54c\ub294 \uc5ec\ub7ec \ud14c\uc774\ube14\uc744 JOIN\ud558\uc5ec \ub2e8\uc21c\ud55c \ud3c9\uba74(Flat) \uad6c\uc870\uc758 \ub370\uc774\ud130\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\\n\\n\uc608\ub97c \ub4e4\uc5b4, **\uac8c\uc2dc\uae00(post)** \uc5d0 **\uc791\uc131\uc790(user)** \uc640 **\uc218\ub85d\uace1(song)** \uc815\ubcf4\ub97c \ud568\uaed8 \ud3ec\ud568\uc2dc\ud0a4\ub294 \uacbd\uc6b0, \uc544\ub798\uc640 \uac19\uc774 View\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```sql\\nCREATE VIEW post_view AS\\n  SELECT\\n    p.id AS post_id,\\n    p.title AS post_title,\\n    p.contents AS post_contents,\\n    u.id AS post_author_id,\\n    u.email AS post_author_email,\\n    u.username AS post_author_nickname,\\n    u.profile_img AS post_author_profile_img,\\n    s.song_id AS song_id,\\n    s.title AS song_title,\\n    s.artist_name AS song_artist,\\n    s.album AS song_album,\\n    s.cover_img AS song_cover,\\n    s.href AS song_href,\\n    s.duration_millis AS song_duration\\nFROM posts p\\n  LEFT JOIN public.user u ON p.author = u.id\\n  LEFT JOIN post_bside_track pbt ON p.id = pbt.post_id\\n  LEFT JOIN song s ON pbt.song_id = s.id;\\n```\\n\\n<br/>\\n\\n### \uc8fc\uc694 \ubb38\uc81c\uc810\\n\\n1. \uacc4\uce35\uc801 \ub370\uc774\ud130 \ud45c\ud604\uc758 \ubd80\uc7ac\\n\\n    ![image](./image_1.png)\\n\\n    - \uac8c\uc2dc\uae00 \ud558\ub098\uc5d0 \uc5ec\ub7ec \uc218\ub85d\uace1(song)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\uba74, \uac01\uac01\uc758 \uc218\ub85d\uace1\ub9c8\ub2e4 \uac8c\uc2dc\uae00 \uc815\ubcf4\uac00 \ubc18\ubcf5\ub418\uc5b4 \ubc18\ud658\ub429\ub2c8\ub2e4.  \\n      \uc608\uc2dc) \uac8c\uc2dc\uae00 1\uc5d0 \uc218\ub85d\uace1 3\uac1c\uac00 \uc788\ub2e4\uba74, \ub3d9\uc77c\ud55c \uac8c\uc2dc\uae00 \uc815\ubcf4\uac00 3\ubc88 \ubc18\ubcf5\ub428\\n\\n\\n2. \ub124\ud2b8\uc6cc\ud06c \uc0ac\uc6a9\ub7c9 \uc99d\uac00\\n    - \ub370\uc774\ud130\uac00 \uc911\ubcf5\ub418\uc5b4 \uc804\uc1a1\ub418\ubbc0\ub85c, \ub124\ud2b8\uc6cc\ud06c \uc0ac\uc6a9\ub7c9\uacfc \ud074\ub77c\uc774\uc5b8\ud2b8 \uba54\ubaa8\ub9ac \ubd80\ub2f4\uc774 \uc99d\uac00\ud558\uba70, \uc548\ub4dc\ub85c\uc774\ub4dc \uc571\uc5d0\uc11c \ud30c\uc2f1 \ubc0f \uac00\uacf5\ud558\ub294 \uacfc\uc815\uc774 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4.\\n\\n3. \uc11c\ubc84 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ubc0f API \ubcc0\uacbd \uc2dc \ucd94\uac00 \uacf5\uc218 \ubc1c\uc0dd\\n    - \uc11c\ubc84 API\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uacc4\uce35\uc801 \uad6c\uc870\ub85c \ub370\uc774\ud130\ub97c \uc81c\uacf5\ud558\ubbc0\ub85c, \uc774\ud6c4 \uc2e4\uc81c \uc11c\ubc84\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc2dc \uc218\uc815\uc774 \ubd88\uac00\ud53c\ud569\ub2c8\ub2e4.\\n\\n\\n### Json Aggregation\uc744 \ud65c\uc6a9\ud55c \uacc4\uce35\ud615 View \uc0dd\uc131 \ubc29\uc2dd\\n\\n\uad00\uacc4\ud615 DB\uc5d0\uc11c \uacc4\uce35 \uad6c\uc870\ub85c \ub370\uc774\ud130\ub97c \ud45c\ud604\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 JSON\uc744 \uc774\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.\\n\\nPostgreSQL\uc758 JSON \ud568\uc218(json_agg, json_build_object)\ub97c \ud65c\uc6a9\ud558\uba74 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ubbf8\ub9ac \uacc4\uce35\ud615 \uad6c\uc870\uc758 \ub370\uc774\ud130\ub97c \ub9cc\ub4e4\uc5b4 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n#### \uad6c\ud604 \uc608\uc2dc\\n\\n\uc544\ub798 \ucf54\ub4dc\ub294 \uac01 \uac8c\uc2dc\uae00\uc5d0 \ud3ec\ud568\ub41c \uc218\ub85d\uace1 \uc815\ubcf4\ub97c JSON \ubc30\uc5f4\ub85c \uc9d1\uacc4\ud558\uc5ec, \uac8c\uc2dc\uae00\uacfc \uc791\uc131\uc790 \uc815\ubcf4\uc640 \ud568\uaed8 \uacc4\uce35\ud615 \ub370\uc774\ud130\ub97c \ubc18\ud658\ud558\ub294 View\ub97c \uc0dd\uc131\ud558\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4.\\n\\n```sql\\nCREATE OR REPLACE VIEW post_tree_view as\\n  WITH song_agg AS (\\n    SELECT\\n      pbt.post_id,\\n      json_agg(\\n        json_build_object(\\n          \'song_id\', s.id,\\n          \'title\', s.title,\\n          \'artist_name\', s.artist_name,\\n          \'album\', s.album,\\n          \'cover_img\', s.cover_img,\\n          \'href\', s.href,\\n          \'duration_millis\', s.duration_millis\\n        )\\n      ) AS song_list\\n    FROM post_bside_track pbt\\n    LEFT JOIN song s ON pbt.song_id = s.id\\n    GROUP BY pbt.post_id\\n  )\\n  SELECT\\n    p.id AS post_id,\\n    p.title AS post_title,\\n    p.contents AS post_contents,\\n    json_build_object(\\n      \'id\', u.id,\\n      \'email\', u.email,\\n      \'username\', u.username,\\n      \'profile_img\', u.profile_img\\n    ) AS \\"user\\",\\n    COALESCE(s.song_list, \'[]\'::json) AS song_list\\n  FROM posts p\\n  LEFT JOIN public.user u ON p.author = u.id\\n  LEFT JOIN song_agg s ON p.id = s.post_id;\\n\\n```\\n\\n\\n**\uc2e4\uc81c \ucd9c\ub825 \uacb0\uacfc**\\n\\n![image.png](./image_2.png)\\n\\n\ub9ac\uc2a4\ud2b8 \ud615\ud0dc\uc758 \ub370\uc774\ud130\uac00 Json\uc73c\ub85c \ud558\ub098\uc758 \ud544\ub4dc\uc5d0 \ud3ec\ud568\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.  \\n\uc774\ub807\uac8c \ubd88\ud544\uc694\ud55c \ub370\uc774\ud130 \ubc18\ubcf5\uc744 \uc904\uc774\uace0 \ud544\uc694\ud55c \ub370\uc774\ud130\ub9cc \ucd9c\ub825\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.\\n\\n**\uc608\uc2dc \uc751\ub2f5 \uacb0\uacfc**\\n\\n```json\\n{\\n  \\"post_id\\": 1,\\n  \\"post_title\\": \\"\uac8c\uc2dc\uae00 \uc81c\ubaa9\\",\\n  \\"post_contents\\": \\"\uac8c\uc2dc\uae00 \ub0b4\uc6a9\\",\\n  \\"user\\": {\\n     \\"id\\": 123,\\n     \\"email\\": \\"user@example.com\\",\\n     \\"username\\": \\"\uc791\uc131\uc790\ub2c9\ub124\uc784\\",\\n     \\"profile_img\\": \\"\uc774\ubbf8\uc9c0 URL\\"\\n  },\\n  \\"song_list\\": [\\n     {\\n       \\"song_id\\": 10,\\n       \\"title\\": \\"\ub178\ub798 \uc81c\ubaa9\\",\\n       \\"artist_name\\": \\"\uc544\ud2f0\uc2a4\ud2b8 \uc774\ub984\\",\\n       \\"album\\": \\"\uc568\ubc94\uba85\\",\\n       \\"cover_img\\": \\"\ucee4\ubc84 \uc774\ubbf8\uc9c0 URL\\",\\n       \\"href\\": \\"\ub178\ub798 \ub9c1\ud06c\\",\\n       \\"duration_millis\\": 210000\\n     },\\n     ...\\n  ]\\n}\\n```\\n\\n\\n### \uc548\ub4dc\ub85c\uc774\ub4dc \uc785\uc7a5\uc5d0\uc11c\uc758 Json \uae30\ubc18 View \ud65c\uc6a9 \uc7a5\uc810\\n\\n1. \ub124\ud2b8\uc6cc\ud06c \ud6a8\uc728\uc131 (\ub370\uc774\ud130 \uc804\uc1a1 \ucd5c\uc801\ud654)\\n    - \uc911\ubcf5 \ub370\uc774\ud130 \uc804\uc1a1\uc774 \uc904\uc5b4\ub4e4\uc5b4 \ub370\uc774\ud130 \uc0ac\uc6a9\ub7c9\uc774 \uc808\uac10\ub428\\n    - \ub124\ud2b8\uc6cc\ud06c \ube44\uc6a9 \uce21\uba74(\ub370\uc774\ud130 \uc0ac\uc6a9\ub7c9)\uc5d0\uc11c\ub3c4 \ud6a8\uc728\uc801\\n\\n2. \uc751\ub2f5 \ub9e4\ud551 \ub85c\uc9c1 \uac04\uc18c\ud654\\n    - Domain \ubaa8\ub378\uc758 \uad6c\uc870\uc640 API \uc751\ub2f5 \uad6c\uc870\uac00 \ube44\uc2b7\ud560\uc218\ub85d \ub9e4\ud551 \ub85c\uc9c1\uc774 \uac04\uc18c\ud654 \ub428\\n    - \ud3c9\uba74 \ub370\uc774\ud130\uc5d0\uc11c \uacc4\uce35 \uad6c\uc870\ub85c\uc758 \uc7ac\uad6c\uc131\uc774 \ud544\uc694 \uc5c6\uc73c\ubbc0\ub85c \uac1c\ubc1c \uc0dd\uc0b0\uc131\uc774 \ud5a5\uc0c1\ub428\\n\\n3. \uc720\uc9c0\ubcf4\uc218 \ubc0f \ud655\uc7a5\uc131\\n\\t- \uc11c\ubc84 API \ubcc0\uacbd\uc774\ub098 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc2dc, \uacc4\uce35\ud615 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uc720\uc9c0\ud568\uc73c\ub85c\uc368 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc \ubcc0\uacbd \ubd80\ub2f4\uc774 \uc904\uc5b4\ub4e6\\n\\n\\n\\n### \uacb0\ub860\\n\\nSupabase\uc640 PostgreSQL\uc758 JSON Aggregation \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\uc5ec \uacc4\uce35\ud615 \ub370\uc774\ud130\ub97c \ubbf8\ub9ac \uad6c\uc131\ud568\uc73c\ub85c\uc368, \uc548\ub4dc\ub85c\uc774\ub4dc \uc571 \uac1c\ubc1c\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c \ucd5c\uc801\ud654 \ubc0f \ud074\ub77c\uc774\uc5b8\ud2b8 \ub85c\uc9c1 \ub2e8\uc21c\ud654\ub77c\ub294 \uc774\uc810\uc744 \uc5bb\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc11c\ubc84 \ub300\uc2e0 Supabase\ub97c \uc774\uc6a9\ud574\uc11c \uac1c\ubc1c\uc744 \ud558\uc2dc\ub294 \ubd84\ub4e4\uc774 \uc788\ub2e4\uba74 \ud574\ub2f9 \uae00\uc744 \ucc38\uace0\ud574\uc11c \ud65c\uc6a9\ud574\ubcf4\uc2dc\uba74 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."},{"id":"wepli-tech-blog","metadata":{"permalink":"/techblog/wepli-tech-blog","editUrl":"https://github.com/facebook/docusaurus/edit/master/website/my-blog/techblog/intro.mdx","source":"@site/techblog/intro.mdx","title":"WePLi \uae30\uc220 \ube14\ub85c\uadf8 \uc18c\uac1c","description":"\ud574\ub2f9 \ube14\ub85c\uadf8\ub294 WePLi \uac1c\ubc1c \uacfc\uc815 \uc911 \uae30\uc220\uc801\uc778 \ubd80\ubd84\uc5d0 \ub300\ud574\uc11c \uc791\uc131\ud558\uae30 \uc704\ud55c \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.","date":"2024-12-31T00:00:00.000Z","tags":[{"inline":true,"label":"WePLi","permalink":"/techblog/tags/we-p-li"},{"inline":true,"label":"MusicApp","permalink":"/techblog/tags/music-app"}],"readingTime":0.18,"hasTruncateMarker":true,"authors":[{"name":"Donghyeon Kim","title":"Android Developer @Cashwalk","url":"https://github.com/dongx0915","page":{"permalink":"/techblog/authors/donghyeon"},"socials":{"github":"https://github.com/donghyeon0915","blog":"https://dongx2.tistory.com/"},"imageURL":"https://avatars.githubusercontent.com/u/63500239?v=4","key":"donghyeon"}],"frontMatter":{"slug":"wepli-tech-blog","title":"WePLi \uae30\uc220 \ube14\ub85c\uadf8 \uc18c\uac1c","authors":["donghyeon"],"date":"2024-12-31","tags":["WePLi","MusicApp"]},"unlisted":false,"prevItem":{"title":"Supabase Json\uc73c\ub85c \uacc4\uce35 \uad6c\ud604\ud558\uae30","permalink":"/techblog/wepli-tech-blog-supabase-json"}},"content":"\ud574\ub2f9 \ube14\ub85c\uadf8\ub294 WePLi \uac1c\ubc1c \uacfc\uc815 \uc911 \uae30\uc220\uc801\uc778 \ubd80\ubd84\uc5d0 \ub300\ud574\uc11c \uc791\uc131\ud558\uae30 \uc704\ud55c \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.\\n\\n{/* truncate */}"}]}}')}}]);