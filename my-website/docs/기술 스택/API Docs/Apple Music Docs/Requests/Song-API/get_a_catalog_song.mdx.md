---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 노래 정보 조회하기

### 설명
Apple Music API의 `Get a Catalog Song` 엔드포인트는 곡의 고유 식별자를 사용하여 Apple Music 카탈로그에서 특정 곡을 가져오는 기능을 제공합니다.

### Web Service Endpoint

**HTTP 메소드** : `GET`  

**엔드포인트** :
```http
https://api.music.apple.com/v1/catalog/{storefront}/songs/{id}
```

<Tabs groupId="examples">
  <TabItem value="request" label="요청 예시" default>

  ```http
  GET https://api.music.apple.com/v1/catalog/us/songs/1440761880
  Authorization: Bearer {developer_token}
  ```

  </TabItem>
  <TabItem value="response" label="응답 형식">

  ```json
{
    "data": [
        {
            "id": "1613600188",
            "type": "songs",
            "href": "/v1/catalog/us/songs/1613600188",
            "attributes": {
                "albumName": "Emotional Creature",
                "genreNames": [
                    "Alternative",
                    "Music"
                ],
                "trackNumber": 1,
                "durationInMillis": 221000,
                "releaseDate": "2022-06-09",
                "isrc": "USQE92100257",
                "artwork": {
                    "width": 3000,
                    "height": 3000,
                    "url": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/df/4e/68/df4e6833-9828-51d7-cdeb-71ecf6d3a23d/810090090962.png/{w}x{h}bb.jpg",
                    "bgColor": "202020",
                    "textColor1": "aea6f6",
                    "textColor2": "b68ef6",
                    "textColor3": "918bcb",
                    "textColor4": "9878cb"
                },
                "composerName": "Anthony Vaccaro, Jon Alvarado, Lili Trifilio & Matt Henkels",
                "playParams": {
                    "id": "1613600188",
                    "kind": "song"
                },
                "url": "https://music.apple.com/us/album/entropy/1613600183?i=1613600188",
                "discNumber": 1,
                "hasLyrics": true,
                "isAppleDigitalMaster": true,
                "name": "Entropy",
                "previews": [
                    {
                        "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/72/a3/ab/72a3ab79-0066-f773-6618-7a53adc250b3/mzaf_17921540907592750976.plus.aac.p.m4a"
                    }
                ],
                "artistName": "Beach Bunny"
            },
            "relationships": {
                "artists": {
                    "href": "/v1/catalog/us/songs/1613600188/artists",
                    "data": [
                        {
                            "id": "1147783278",
                            "type": "artists",
                            "href": "/v1/catalog/us/artists/1147783278"
                        }
                    ]
                },
                "albums": {
                    "href": "/v1/catalog/us/songs/1613600188/albums",
                    "data": [
                        {
                            "id": "1613600183",
                            "type": "albums",
                            "href": "/v1/catalog/us/albums/1613600183"
                        }
                    ]
                }
            }
        }
    ]
}
  ```

  </TabItem>
</Tabs>

### Path Parameters

| 매개변수        | 타입    | 필수 여부 | 설명                                                                                         |
|-----------------|---------|------------|----------------------------------------------------------------------------------------------|
| **`id`**        | String  | Required   | 조회할 곡의 고유 식별자입니다.                                                                 |
| **`storefront`**| String  | Required   | 국가 또는 지역 코드입니다. (ISO 3166 alpha-2 형식) 가능한 값은 Storefront 객체의 `id` 속성에서 확인할 수 있습니다. |

### Query Parameters

| 매개변수        | 타입      | 필수 여부 | 설명                                                                                         |
|-----------------|-----------|------------|----------------------------------------------------------------------------------------------|
| **`l`**         | String    | Optional   | 사용할 언어를 지정하는 언어 태그입니다. 기본값은 해당 `Storefront` 객체의 `defaultLanguageTag`입니다. |
| **`include`**   | String[]  | Optional   | 추가적으로 가져올 관계(Relationships)를 지정합니다.                                            |
| **`extend`**    | String[]  | Optional   | 응답에서 리소스에 적용할 속성 확장 목록입니다.                                                |

### Response Codes

- **`200 OK`**:  
  요청이 성공적으로 처리되었으며, `SongsResponse` 객체가 반환됩니다.

- **`401 Unauthorized`**:  
  올바르지 않은 Authorization 헤더가 사용되었음을 나타내는 응답입니다.

- **`500 Internal Server Error`**:  
  서버에서 오류가 발생했음을 나타내는 응답입니다.