---
sidebar_position: 3
---

# Album

`Artist` 객체는 앨범의 아티스트를 나타내는 리소스 개체로, 아티스트는 한 명 이상의 사람이 될 수 있습니다.

:::note
WePLi 개발에 필요한 속성만 추출한 문서입니다.
자세한 내용은 Apple Music 공식 문서를 참고해주세요.
:::

<details>
  <summary>**전체 코드**</summary>
  ```kotlin
data class Album(
    val id: String,
    val type: String,
    val href: String,
) {
    data class Attributes(
        val name: String,
        val url: String,
        val genreNames: List<String>,
        val artistName: String,
        val artistUrl: String,
        val artwork: Artwork,
        val recordLabel: String,
        val releaseDate: String,
        val trackCount: Int,
        val copyright: String,
    )
}
  ```
</details>


## Album

```kotlin
data class Album(
    val id: String,
    val type: String,
    val href: String,
)
```

---

## Attributes

`Attributes` 객체는 아티스트에 대한 메타데이터를 포함합니다.

```kotlin
data class Attributes(
    val name: String, // 앨범 이름
    val url: String, // 앨범 url
    val genreNames: List<String>, // 장르
    val artistName: String, // 아티스트 이름
    val artistUrl: String, // 아티스트 URL
    val artwork: Artwork, // 앨범 이미지 정보
    val recordLabel: String, // 레코드 레이블
    val releaseDate: String, // 발매일
    val trackCount: Int, // 앨범 수록곡 수
    val copyright: String, // 저작권
)
```

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
