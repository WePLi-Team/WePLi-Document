---
sidebar_position: 1
---

# Songs

`Song` 객체는 Apple Music API에서 곡에 대한 정보를 제공합니다. 다음은 Song 객체의 속성과 그 설명입니다.

## Song

```json
{
  "id": "1234567890",
  "type": "songs",
  "href": "/v1/catalog/us/songs/1234567890",
  "attributes": { ... }
}
```

### 속성

- **`id`** (Required): 곡의 고유 식별자
- **`type`** (Required): 데이터 유형 (`songs`)
- **`href`** (Required): 리소스의 URL
- `attributes`: 곡에 대한 세부 정보, 아래 [Attributes](#attributes) 참조

---

## Attributes

`Attributes` 객체는 곡의 메타데이터를 포함합니다.

```json
{
  "albumName": "Reputation",
  "artistName": "Taylor Swift",
  "artistUrl": "https://music.apple.com/us/artist/taylor-swift/159260351",
  "artwork": {
    "width": 1200,
    "height": 1200,
    "url": "https://example.com/{w}x{h}bb.jpeg",
    "bgColor": "f0f0f0",
    "textColor1": "000000",
    "textColor2": "ffffff"
  },
  "attribution": "Taylor Swift",
  "audioVariants": ["dolby-atmos", "lossless"],
  "composerName": "Taylor Swift",
  "contentRating": "explicit",
  "discNumber": 1,
  "durationInMillis": 231000,
  "editorialNotes": {
    "short": "A standout track from Taylor's 'Reputation'.",
    "standard": "This track is a part of the critically acclaimed 'Reputation' album."
  },
  "genreNames": ["Pop"],
  "hasLyrics": true,
  "isAppleDigitalMaster": true,
  "isrc": "USUM71703089",
  "movementCount": 0,
  "movementName": null,
  "movementNumber": 0,
  "name": "Delicate",
  "playParams": {
    "id": "1440761880",
    "kind": "song"
  },
  "previews": [
    {
      "url": "https://example.com/preview.m4a"
    }
  ],
  "releaseDate": "2017-11-10",
  "trackNumber": 5,
  "url": "https://music.apple.com/us/album/1440761880?i=1440761880",
  "workName": null
}
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

`Artwork` 객체는 앨범 커버 이미지의 정보를 포함합니다.

```json
{
  "width": 1200,
  "height": 1200,
  "url": "https://example.com/album_artwork.png",
  "bgColor": "f0f0f0",
  "textColor1": "000000",
  "textColor2": "ffffff"
}
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

```json
{
  "id": "1234567890",
  "kind": "song"
}
```

### 속성

- `id`: 곡의 재생 ID
- `kind`: 리소스 유형 (`song`)

---

## Previews

`Previews` 객체는 곡의 미리 듣기 정보입니다.

```json
{
  "url": "https://example.com/preview.m4a"
}
```

### 속성

- `url`: 미리 듣기 URL