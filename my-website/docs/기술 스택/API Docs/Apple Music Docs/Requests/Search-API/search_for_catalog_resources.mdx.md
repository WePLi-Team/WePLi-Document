---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 키워드로 노래 검색하기

### 설명
Apple Music API의 `Search for Catalog Resources` 엔드포인트는 입력된 검색어를 사용하여 Apple Music 카탈로그에서 리소스를 검색하는 기능을 제공합니다.

### Web Service Endpoint

**HTTP 메소드** : `GET`  

**엔드포인트** :
```http
https://api.music.apple.com/v1/catalog/{storefront}/search
```


<Tabs groupId="examples">
  <TabItem value="request" label="요청 예시" default>

  ```http
  GET https://api.music.apple.com/v1/catalog/us/search?types=songs,albums,artists&term=beach+bunny
  Authorization: Bearer {developer_token}
  ```

  </TabItem>
  <TabItem value="response" label="응답 형식">

  ```json
{
    "results": {
        "artists": {
            "href": "/v1/catalog/us/search?limit=5&term=beach+bunny&types=artists",
            "data": [
                {
                    "id": "1147783278",
                    "type": "artists",
                    "href": "/v1/catalog/us/artists/1147783278",
                    "attributes": {
                        "name": "Beach Bunny",
                        "genreNames": [
                            "Alternative"
                        ],
                        "artwork": {
                            "width": 2011,
                            "height": 2011,
                            "url": "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ee/38/80/ee3880eb-e996-8b35-887f-c71c8ad800ac/pr_source.png/{w}x{h}bb.jpg",
                            "bgColor": "19160f",
                            "textColor1": "f3949b",
                            "textColor2": "b08ff2",
                            "textColor3": "c77b7f",
                            "textColor4": "9277c5"
                        },
                        "url": "https://music.apple.com/us/artist/beach-bunny/1147783278"
                    },
                    "relationships": {
                        "albums": {
                            "href": "/v1/catalog/us/artists/1147783278/albums",
                            "data": [
                                {
                                    "id": "1482041821",
                                    "type": "albums",
                                    "href": "/v1/catalog/us/albums/1482041821"
                                },
                            ]
                        }
                    }
                }
            ]
        },
        "songs": {
            "href": "/v1/catalog/us/search?limit=5&term=beach+bunny&types=songs",
            "next": "/v1/catalog/us/search?offset=5&term=beach+bunny&types=songs",
            "data": [
                {
                    "id": "1482041830",
                    "type": "songs",
                    "href": "/v1/catalog/us/songs/1482041830",
                    "attributes": {
                        "albumName": "Honeymoon",
                        "genreNames": [
                            "Alternative",
                            "Music"
                        ],
                        "trackNumber": 9,
                        "releaseDate": "2020-02-14",
                        "durationInMillis": 147351,
                        "isrc": "USQE91600054",
                        "artwork": {
                            "width": 3000,
                            "height": 3000,
                            "url": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/0b/b2/52/0bb2524d-ecfc-1bae-9c1e-218c978d7072/Honeymoon_3K.jpg/{w}x{h}bb.jpg",
                            "bgColor": "fffaa9",
                            "textColor1": "030005",
                            "textColor2": "363240",
                            "textColor3": "353226",
                            "textColor4": "5e5a55"
                        },
                        "url": "https://music.apple.com/us/album/cloud-9/1482041821?i=1482041830",
                        "playParams": {
                            "id": "1482041830",
                            "kind": "song"
                        },
                        "discNumber": 1,
                        "isAppleDigitalMaster": false,
                        "hasLyrics": true,
                        "name": "Cloud 9",
                        "previews": [
                            {
                                "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5b/98/32/5b9832bb-5337-cd4f-5a7e-063709c465cc/mzaf_8852412892959276575.plus.aac.p.m4a"
                            }
                        ],
                        "artistName": "Beach Bunny"
                    }
                },
            ]
        }
    },
    "meta": {
        "results": {
            "order": [
                "artists",
                "songs",
                "albums"
            ],
            "rawOrder": [
                "artists",
                "songs",
                "albums"
            ]
        }
    }
}
  ```

  </TabItem>
</Tabs>

### Path Parameters

| 매개변수        | 타입    | 필수 여부 | 설명                                                                                         |
|-----------------|---------|------------|----------------------------------------------------------------------------------------------|
| **`storefront`**    | String  | Required   | iTunes Store의 국가 또는 지역 코드입니다. (ISO 3166 alpha-2 형식). 가능한 값은 Storefront 객체의 `id` 속성에서 확인할 수 있습니다. |

### Query Parameters

| 매개변수        | 타입      | 필수 여부 | 설명                                                                                         |
|-----------------|-----------|------------|----------------------------------------------------------------------------------------------|
| **`term`**      | String    | Required   | 검색어를 입력합니다. 단어 사이의 공백은 `+`로 대체해야 합니다. 예: `term=james+br`.             |
| **`l`**         | String    | Optional   | 사용할 언어를 지정하는 언어 태그입니다. 기본값은 해당 `Storefront` 객체의 `defaultLanguageTag`입니다. |
| **`limit`**     | Integer   | Optional   | 반환할 객체 수를 제한합니다. 기본값: 5, 최대값: 25.                                            |
| **`offset`**    | String    | Optional   | 다음 페이지 또는 가져올 객체 그룹을 지정합니다.                                                |
| **`types`**     | String[]  | Required   | 검색 결과에 포함할 리소스 유형 목록입니다. 가능한 값: `activities`, `albums`, `artists`, 등.    |
| **`with`**      | String[]  | Optional   | 요청에 적용할 수정 목록입니다. 예: `topResults`.                                               |


### Response Codes

- **`200 OK`**:  
  요청이 성공적으로 처리되었으며, `SearchResponse` 객체가 반환됩니다.

- **`401 Unauthorized`**:  
  올바르지 않은 Authorization 헤더가 사용되었음을 나타내는 응답입니다.

- **`500 Internal Server Error`**:  
  서버에서 오류가 발생했음을 나타내는 응답입니다.