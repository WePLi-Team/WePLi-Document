---
sidebar_position: 1
---

# Songs

`Song` 객체는 Apple Music API에서 곡에 대한 정보를 제공합니다. 다음은 Song 객체의 속성과 그 설명입니다.

:::note
WePLi 개발에 필요한 속성만 추출한 문서입니다.
자세한 내용은 Apple Music 공식 문서를 참고해주세요.
:::

<details>
  <summary>**전체 코드**</summary>
  ```kotlin
data class Song(
    val id: String,
    val type: String,
    val href: String,
    val attributes: Attributes,
) {
    data class Attributes(
        val name: String,
        val albumName: String,
        val artistName: String,
        val hasLyrics: Boolean,
        val durationInMillis: Int,
        val genreNames: List<String>,
        val url: String,
        val playParams: PlayParams,
        val previews: List<Preview>,
        val releaseDate: String,
        val trackNumber: Int,
        val artwork: Artwork,

        /* 필요 없을 것 같은 값들 */
        val composerName: String,
        val discNumber: Int,
        val isAppleDigitalMaster: Boolean,
        val isrc: String,
    ) {
        data class Preview(
            val url: String
        )

        data class PlayParams(
            val id: String,
            val kind: String
        )
    }
}
  ```
</details>

## Song

```kotlin
data class Song(
    val id: String,
    val type: String,
    val href: String,
    val attributes: Attributes,
)
```

### 속성

- **`id`** (Required): 곡의 고유 식별자
- **`type`** (Required): 데이터 유형 (`songs`)
- **`href`** (Required): 리소스의 URL
- `attributes`: 곡에 대한 세부 정보, 아래 [Attributes](#attributes) 참조

---

## Attributes

`Attributes` 객체는 곡의 메타데이터를 포함합니다.

```kotlin
data class Attributes(
    val name: String, // 노래 제목
    val albumName: String, // 앨범 이름
    val artistName: String, // 가수 이름
    val hasLyrics: Boolean, // 가사 여부
    val durationInMillis: Int, // 노래 재생 시간
    val genreNames: List<String>, // 장르
    val url: String, // 노래 페이지 URL
    val playParams: PlayParams, // 플레이 파라미터 (노래 재생에 사용, 미리듣기 - 사용 가능, 풀버전 - 애플 뮤직 구독 필요)
    val previews: List<Preview>, // 미리듣기 m4a 파일 url
    val releaseDate: String, // 출시일
    val trackNumber: Int, // 앨범 내에서의 트랙 순서
    val artwork: Artwork, // 노래 이미지 정보

    /* 필요 없을 것 같은 값들 */
    val composerName: String, // 작곡가 이름
    val discNumber: Int, // 디스크 번호
    val isAppleDigitalMaster: Boolean, // Apple Digital Master 여부
    val isrc: String, // 국제 표준 레코딩 코드 (ISRC)
)
```

### 속성

- **`albumName`**: string (Required)  
  곡이 수록된 앨범의 이름입니다.

- **`artistName`**: string (Required)  
  아티스트의 이름입니다.

- `artistUrl`: string  
  콘텐츠의 아티스트 URL입니다.

- **`artwork`**: Artwork (Required)  
  앨범의 아트워크입니다.

- `attribution`: string  
  (클래식 음악 전용) 곡에 대한 아티스트 또는 작곡가의 이름입니다.

- `audioVariants`: [string]  
  곡의 특정 오디오 변형을 나타냅니다.

  가능한 값: `dolby-atmos`, `dolby-audio`, `hi-res-lossless`, `lossless`, `lossy-stereo`.

- `composerName`: string  
  곡의 작곡가 이름입니다.

- `contentRating`: string  
  콘텐츠의 녹음물 등급입니다. 값이 없으면 등급이 없음을 의미합니다.

  가능한 값: `clean`, `explicit`.

- `discNumber`: integer  
  곡이 수록된 앨범의 디스크 번호입니다.

- **`durationInMillis`**: integer (Required)  
  곡의 길이(밀리초)입니다.

- `editorialNotes`: EditorialNotes  
  Apple Music 카탈로그에 표시되는 곡에 대한 노트입니다.

- **`genreNames`**: [string] (Required)  
  곡과 연관된 장르 이름 목록입니다.

- **`hasLyrics`**: boolean (Required)  
  Apple Music 카탈로그에서 곡에 가사가 있는지 여부를 나타냅니다. `true`는 가사가 있음을, `false`는 가사가 없음을 의미합니다.

- **`isAppleDigitalMaster`**: boolean (Required)  
  응답이 Apple Digital Master로 곡을 제공하는지 여부를 나타냅니다.

- `isrc`: string  
  곡의 국제 표준 녹음 코드(ISRC)입니다.

- `movementCount`: integer  
  (클래식 음악 전용) 곡의 악장 수입니다.

- `movementName`: string  
  (클래식 음악 전용) 곡의 악장 이름입니다.

- `movementNumber`: integer  
  (클래식 음악 전용) 곡의 악장 번호입니다.

- **`name`**: string (Required)  
  곡의 현지화된 이름입니다.

- `playParams`: PlayParameters  
  Apple Music 구독으로 곡을 재생할 수 있는지 여부를 나타냅니다.

- **`previews`**: [Preview] (Required)  
  곡의 미리 듣기 자산입니다.

- `releaseDate`: string  
  곡의 출시일(알려져 있는 경우)입니다. 형식은 `YYYY-MM-DD` 또는 `YYYY`입니다.

- `trackNumber`: integer  
  앨범 트랙 목록에서 곡의 번호입니다.

- **`url`**: string (Required)  
  Apple Music에서 곡을 공유할 수 있는 URL입니다.

- `workName`: string  
  (클래식 음악 전용) 연관된 작품의 이름입니다.

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

- `width`: 이미지의 너비 (픽셀)
- `height`: 이미지의 높이 (픽셀)
- `url`: 앨범 커버 이미지 URL
- `bgColor`: 이미지의 배경색 (HEX 코드)
- `textColor1`: 주요 텍스트 색상 (HEX 코드)
- `textColor2`: 보조 텍스트 색상 (HEX 코드)

---

## PlayParams

`PlayParams` 객체는 곡 재생을 위한 파라미터를 포함합니다.  
Apple Music과 매핑되는 값입니다.

```kotlin
data class PlayParams(
    val id: String,
    val kind: String
)
```

### 속성

- `id`: 곡의 재생 ID
- `kind`: 리소스 유형 (`song`)

---

## Previews

`Previews` 객체는 미리듣기 m4a 파일의 url을 포함합니다

```kotlin
data class Preview(
    val url: String // https://example.com/preview.m4a
)
```

### 속성

- `url`: 미리 듣기 URL