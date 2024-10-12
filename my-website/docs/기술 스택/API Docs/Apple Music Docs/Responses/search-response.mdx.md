---
sidebar_position: 4
---

# Search

`Artist` 객체는 앨범의 아티스트를 나타내는 리소스 개체로, 아티스트는 한 명 이상의 사람이 될 수 있습니다.

:::note
WePLi 개발에 필요한 속성만 추출한 문서입니다.
자세한 내용은 Apple Music 공식 문서를 참고해주세요.
:::

<details>
  <summary>**전체 코드**</summary>
  ```kotlin
package wepli.domain.search

import wepli.domain.album.Album
import wepli.domain.artist.Artist
import wepli.domain.song.Song

/**
 * https://api.music.apple.com/v1/catalog/us/search?types=songs,albums,artists&term=beach+bunny
 * - type에 검색할 타입을 넣어주면 됨
 */
data class Search(
    val artists: ArtistsSearchResult,
    val songs: SongsSearchResult,
    val albums: AlbumSearchResult,
) {

    data class SongsSearchResult(
        val data: List<Song>,
        val href: String,
        val next: String,
    )

    data class ArtistsSearchResult(
        val data: List<Artist>,
        val href: String,
        val next: String,
    )

    data class AlbumSearchResult(
        val data: List<Album>,
        val href: String,
        val next: String,
    )
}


  ```
</details>


## Search

```kotlin
data class Search(
    val artists: ArtistsSearchResult,
    val songs: SongsSearchResult,
    val albums: AlbumSearchResult,
)
```

---

## ArtistSearchResult

```kotlin
data class ArtistsSearchResult(
    val data: List<Artist>,
    val href: String,
    val next: String, // 다음 페이지를 가져오기 위한 커서(url) (더 많은 항목이 있는 경우)
)
```

---

## SongsSearchResult

```kotlin
data class SongsSearchResult(
    val data: List<Song>,
    val href: String,
    val next: String, // 다음 페이지를 가져오기 위한 커서(url) (더 많은 항목이 있는 경우)
)
```

---

## AlbumSearchResult

```kotlin
data class AlbumSearchResult(
    val data: List<Album>,
    val href: String,
    val next: String,
)

```

---