---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 제안 검색어 조회하기

### 설명
입력된 검색어를 기반으로 검색 제안을 제공합니다.

### Web Service Endpoint

**HTTP 메소드** : `GET`  

**엔드포인트** :
```http
https://api.music.apple.com/v1/catalog/{storefront}/search/suggestions
```

<Tabs groupId="examples">
  <TabItem value="request" label="요청 예시" default>

  ```http
  GET https://api.music.apple.com/v1/catalog/us/search/suggestions?term=beach+bunny&kinds=terms
  Authorization: Bearer {developer_token}
  ```

  </TabItem>
  <TabItem value="response" label="응답 형식">

  ```json
{
    "results": {
        "suggestions": [
            {
                "kind": "terms",
                "searchTerm": "beach bunny",
                "displayTerm": "beach bunny"
            },
            {
                "kind": "terms",
                "searchTerm": "oxygen beach bunny",
                "displayTerm": "oxygen beach bunny"
            },
            {
                "kind": "terms",
                "searchTerm": "cloud 9 beach bunny",
                "displayTerm": "cloud 9 beach bunny"
            }
        ]
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
| **`kinds`**     | String[]  | Required   | 결과에 포함할 제안의 종류입니다. 가능한 값: `terms`, `topResults`.                             |
| **`l`**         | String    | Optional   | 사용할 언어를 지정하는 언어 태그입니다. 기본값은 해당 `Storefront` 객체의 `defaultLanguageTag`입니다. |
| **`limit`**     | Integer   | Optional   | 반환할 객체 수를 제한합니다. 기본값: 5, 최대값: 10.                                            |
| **`term`**      | String    | Required   | 검색 제안에 사용할 텍스트 입력입니다.                                                         |
| **`types`**     | String[]  | Optional   | `topResults`에 포함할 리소스 유형 목록입니다. 가능한 값: `activities`, `albums`, `artists`, 등. |

### Response Codes

- **`200 OK`**:  
  요청이 성공적으로 처리되었으며, `SearchSuggestionsResponse` 객체가 반환됩니다.

- **`401 Unauthorized`**:  
  올바르지 않은 Authorization 헤더가 사용되었음을 나타내는 응답입니다.

- **`500 Internal Server Error`**:  
  서버에서 오류가 발생했음을 나타내는 응답입니다.