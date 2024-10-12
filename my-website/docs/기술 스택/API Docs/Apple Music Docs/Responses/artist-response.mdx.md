---
sidebar_position: 2
---

# Artist

`Artist` 객체는 Apple Music API에서 아티스트에 대한 정보를 제공합니다. 다음은 Artist 객체의 속성과 그 설명입니다.

:::note
WePLi 개발에 필요한 속성만 추출한 문서입니다.
자세한 내용은 Apple Music 공식 문서를 참고해주세요.
:::

<details>
  <summary>**전체 코드**</summary>
  ```kotlin
data class Artist(
    val id: String,
    val type: String,
    val href: String,
    val attributes: Attributes,
) {
    data class Attributes(
        val name: String,
        val url: String,
        val genreNames: List<String>,
        val artwork: Artwork
    )
}
  ```
</details>


## Artist

```kotlin
data class Artist(
    val id: String,
    val type: String,
    val href: String,
    val attributes: Attributes,
)
```

### 속성

- **`id`**: `String` (Required)  
  아티스트의 고유 식별자입니다.
  
- **`type`**: `String` (Required)  
  데이터 유형입니다. 여기서는 항상 `artists`입니다.

- **`href`**: `String` (Required)  
  아티스트 리소스의 고유 URL입니다.

- **[`attributes`](#attributes)**: `Attributes`  
  아티스트에 대한 세부 정보 객체입니다.

- **[`relationships`](#relationships)**: `Relationships`  
  아티스트와 연결된 다른 리소스들에 대한 관계 객체입니다. (예: 앨범, 노래)

- **[`views`](#views)**: `Views`  
  아티스트와 관련된 뷰 및 추가 콘텐츠를 포함하는 객체입니다.

---

## Attributes

`Attributes` 객체는 아티스트에 대한 메타데이터를 포함합니다.

```kotlin
data class Attributes(
    val name: String, // 아티스트 이름
    val url: String, // 아티스트 url
    val genreNames: List<String>, // 장르
    val artwork: Artwork // 커버 이미지 정보
)
```

### 속성

- **`name`**: String (Required)  
  아티스트의 이름입니다.

- **`genreNames`**: List&lt;String&gt; (Required)  
  아티스트가 속한 장르의 배열입니다.

- **`url`**: String (Required)  
  Apple Music에서 아티스트의 페이지 URL입니다.

- `artwork`: [Artwork](#artwork)  
  아티스트 이미지에 대한 정보입니다.

- `editorialNotes`: [EditorialNotes](#editorialnotes)  
  Apple Music 편집자가 작성한 아티스트에 대한 설명입니다.

---

## Artwork

`Artwork` 객체는 커버 이미지의 정보를 포함합니다. (앨범 커버, 가수 이미지 등)

```kotlin
data class Artwork(
    val bgColor: String, // 이미지의 평균 배경색 (주요 색상)
    val width: Int, // 이미지 너비
    val height: Int, // 이미지 높이
    val textColor1: String, // 배경색이 표시되는 경우 사용되는 기본 텍스트 색상
    val textColor2: String, // 배경색이 표시되는 경우 사용되는 보조 텍스트 색상
    val textColor3: String, // 배경색이 표시되는 경우 사용되는 세 번째 텍스트 색상
    val textColor4: String, // 배경색이 표시되는 경우 최종 텍스트
    val url: String, // 이미지 url ({w}x{h} 부분에 width, height 대입)
)
```


### 속성

- `bgColor`: string  
  이미지의 평균 배경색.

- **`height`**: number (Required)  
  이미지의 최대 높이(픽셀).

- **`width`**: number (Required)  
  이미지의 최대 너비(픽셀).

- `textColor1`: string  
  배경색이 표시될 때 사용할 주 텍스트 색상.

- `textColor2`: string  
  배경색이 표시될 때 사용할 보조 텍스트 색상.

- `textColor3`: string  
  배경색이 표시될 때 사용할 3차 텍스트 색상.

- `textColor4`: string  
  배경색이 표시될 때 사용할 4차 텍스트 색상.

- **`url`**: string (Required)  
  이미지 자산을 요청할 URL. `{w}x{h}`는 이미지의 너비와 높이 값을 위한 플레이스홀더로 사용됩니다. 예시: `https://example.com/{w}x{h}bb.jpeg`.

---

## Relationships

`Artists.Relationships` 객체는 아티스트 리소스와 관련된 관계들을 나타냅니다.

### 속성

- **`albums`**: ArtistsAlbumsRelationship  
  아티스트와 연관된 앨범들입니다. 기본적으로 앨범에는 식별자만 포함됩니다.  
  Fetch limits: 기본 25개, 최대 100개.

- **`genres`**: ArtistsGenresRelationship  
  아티스트와 연관된 장르들입니다. 기본적으로 장르는 포함되지 않습니다.  
  Fetch limits: 없음.

- **`music-videos`**: ArtistsMusicVideosRelationship  
  아티스트와 연관된 뮤직 비디오들입니다. 기본적으로 뮤직 비디오는 포함되지 않습니다.  
  Fetch limits: 기본 25개, 최대 100개.

- **`playlists`**: ArtistsPlaylistsRelationship  
  아티스트와 연관된 플레이리스트들입니다. 기본적으로 플레이리스트는 포함되지 않습니다.  
  Fetch limits: 기본 10개, 최대 10개.

- **`station`**: ArtistsStationRelationship  
  아티스트와 연관된 스테이션입니다. 기본적으로 스테이션은 포함되지 않습니다.  
  Fetch limits: 없음 (하나의 스테이션).

---

## Views

`Artists.Views` 객체는 아티스트와 다른 리소스 간의 관계를 나타내는 뷰를 제공합니다.

### 속성

- **`appears-on-albums`**: ArtistsAppearsOnAlbumsView  
  이 아티스트가 참여한 다른 아티스트의 앨범 목록.

- **`compilation-albums`**: ArtistsCompilationAlbumsView  
  "컴필레이션"으로 분류된 아티스트와 관련된 앨범 목록.

- **`featured-albums`**: ArtistsFeaturedAlbumsView  
  아티스트를 위해 선정된 대표 앨범들의 모음.

- **`featured-music-videos`**: ArtistsFeaturedMusicVideosView  
  아티스트를 위해 선정된 대표 뮤직 비디오들의 모음.

- **`featured-playlists`**: ArtistsFeaturedPlaylistsView  
  아티스트와 연관된 관련 플레이리스트.

- **`full-albums`**: ArtistsFullAlbumsView  
  아티스트와 연관된 전체 발매 앨범 목록.

- **`latest-release`**: ArtistsLatestReleaseView  
  아티스트의 최신 릴리즈로, 여전히 최근으로 간주되는 항목.

- **`live-albums`**: ArtistsLiveAlbumsView  
  라이브 공연으로 분류된 아티스트와 관련된 앨범 목록.

- **`similar-artists`**: ArtistsSimilarArtistsView  
  이 아티스트와 유사한 다른 아티스트들.

- **`singles`**: ArtistsSinglesView  
  "싱글"로 분류된 아티스트와 관련된 앨범 목록.

- **`top-music-videos`**: ArtistsTopMusicVideosView  
  아티스트와 관련된 인기 뮤직 비디오.

- **`top-songs`**: ArtistsTopSongsView  
  현재 스토어프런트에서 인기 있는 아티스트와 관련된 곡들.

---

## EditorialNotes

`EditorialNotes` 객체는 편집 노트 속성을 나타냅니다.

### 속성

- `short`: string  
  다른 콘텐츠와 함께 표시될 때 줄임말로 표시되는 노트.

- `standard`: string  
  콘텐츠가 두드러지게 표시될 때 나타나는 노트.

- `name`: string  
  편집 노트의 이름.

- `tagline`: string  
  편집 노트의 태그 라인.