---
sidebar_position: 2
---

# 2. 데이터베이스

WePLi 서비스는 사용자가 자신만의 음악 플레이리스트를 만들고, 다른 사용자와 공유할 수 있는 플랫폼입니다.  
이 문서에서는 데이터베이스 스키마와 설계 시의 명명 규칙, 그리고 사용된 도구에 대해 설명합니다.

<img src="/img/database_scheme.svg" alt="WePLi Database Schema" width="100%" />

### 1. **사용자 테이블**
> **Users**

| **컬럼명**       | **데이터 타입**    | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `id`             | `INTEGER`        | 사용자 고유 ID                             | Primary Key    |
| `email`          | `VARCHAR`        | 사용자의 이메일 주소                       | Not Null, Unique |
| `username`       | `VARCHAR`        | 사용자 이름                                | Not Null       |
| `profile_img`    | `VARCHAR`        | 프로필 이미지 URL                          |                |
| `tendency`       | `Tendency`       | 사용자 성향                                 | Enum           |
| `created_at`     | `TIMESTAMP`      | 사용자 등록 시각                            | Default Now()  |
| `updated_at`     | `TIMESTAMP`      | 사용자 정보 수정 시각                       |                |

---

### 2. **게시글 테이블**
> **Posts**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `id`             | `INTEGER`        | 게시글 고유 ID                             | Primary Key    |
| `title`          | `VARCHAR`        | 게시글 제목                                |                |
| `contents`       | `TEXT`           | 게시글 내용                                |                |
| `user_id`        | `INTEGER`        | 작성자 ID                                  | Foreign Key    |
| `like_cnt`       | `INTEGER`        | 좋아요 수                                   | Default 0      |
| `comment_cnt`    | `INTEGER`        | 댓글 수                                     | Default 0      |
| `created_at`     | `TIMESTAMP`      | 게시글 생성 시각                            | Default Now()  |
| `updated_at`     | `TIMESTAMP`      | 게시글 수정 시각                            |                |

---

### 3. **게시글 좋아요 테이블**
> **PostLike**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `user_id`        | `INTEGER`        | 좋아요를 누른 사용자 ID                     | Foreign Key    |
| `post_id`        | `INTEGER`        | 좋아요가 눌린 게시글 ID                     | Foreign Key    |

---

### 4. **게시글 스크랩 테이블**
> **PostScrap**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `user_id`        | `INTEGER`        | 스크랩한 사용자 ID                          | Foreign Key    |
| `post_id`        | `INTEGER`        | 스크랩된 게시글 ID                          | Foreign Key    |

---

### 5. **댓글 테이블**
> **Comments**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `id`             | `INTEGER`        | 댓글 고유 ID                               | Primary Key    |
| `parent_id`      | `INTEGER`        | 부모 댓글 ID                                |                |
| `post_id`        | `INTEGER`        | 댓글이 속한 게시글 ID                        | Foreign Key    |
| `user_id`        | `INTEGER`        | 댓글 작성자 ID                               | Foreign Key    |
| `contents`       | `VARCHAR`        | 댓글 내용                                    |                |
| `like_cnt`       | `INTEGER`        | 댓글의 좋아요 수                              | Default 0      |
| `created_at`     | `TIMESTAMP`      | 댓글 생성 시각                               | Default Now()  |
| `updated_at`     | `TIMESTAMP`      | 댓글 수정 시각                               |                |

---

### 6. **댓글 좋아요 테이블**
> **CommentLike**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `user_id`        | `INTEGER`        | 댓글에 좋아요를 누른 사용자 ID               | Foreign Key    |
| `comment_id`     | `INTEGER`        | 좋아요가 눌린 댓글 ID                        | Foreign Key    |

---

### 7. **플레이리스트 테이블**
> **Playlist**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `id`             | `INTEGER`        | 플레이리스트 고유 ID                        | Primary Key    |
| `title`          | `VARCHAR`        | 플레이리스트 제목                           | Not Null       |
| `subscription`   | `VARCHAR`        | 구독자 수                                   |                |
| `thumbnail`      | `VARCHAR`        | 썸네일 이미지 URL                            |                |
| `user_id`        | `VARCHAR`        | 생성자 사용자 ID                             | Foreign Key    |
| `song_cnt`       | `INTEGER`        | 포함된 노래 수                                | Default 0      |
| `vote_cnt`       | `INTEGER`        | 투표 수                                       | Default 0      |
| `created_at`     | `TIMESTAMP`      | 플레이리스트 생성 시각                         | Default Now()  |
| `updated_at`     | `TIMESTAMP`      | 플레이리스트 수정 시각                         |                |

---

### 8. **릴레이 리스트 테이블**
> **Relaylist**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `id`             | `INTEGER`        | 릴레이 리스트의 고유 ID                     | Primary Key    |
| `title`          | `VARCHAR`        | 릴레이 리스트 제목                          |                |
| `subscription`   | `VARCHAR`        | 구독자 수                                    |                |
| `thumbnail`      | `VARCHAR`        | 썸네일 이미지 URL                            |                |
| `user_id`        | `VARCHAR`        | 생성자 사용자 ID                             | Foreign Key    |
| `song_cnt`       | `INTEGER`        | 포함된 노래 수                                 | Default 0      |
| `vote_cnt`       | `INTEGER`        | 투표 수                                       | Default 0      |
| `end_date`       | `TIMESTAMP`      | 종료 날짜                                     |                |
| `created_at`     | `TIMESTAMP`      | 릴레이 리스트 생성 시각                         | Default Now()  |
| `updated_at`     | `TIMESTAMP`      | 릴레이 리스트 수정 시각                         |                |

---

### 9. **노래 테이블**
> **Songs**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `id`             | `INTEGER`        | 노래 고유 ID                               | Primary Key    |
| `title`          | `VARCHAR`        | 노래 제목                                   |                |
| `singer`         | `VARCHAR`        | 가수                                         |                |
| `album`          | `VARCHAR`        | 앨범 이름                                    |                |
| `cover_img`      | `VARCHAR`        | 커버 이미지 URL                              |                |

---

### 10. **차트 테이블**
> **Chart**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `id`             | `INTEGER`        | 차트 고유 ID                                | Primary Key    |
| `title`          | `VARCHAR`        | 차트 제목                                   |                |
| `singer`         | `VARCHAR`        | 가수                                         |                |
| `album`          | `VARCHAR`        | 앨범 이름                                    |                |
| `cover_img`      | `VARCHAR`        | 커버 이미지 URL                              |                |



### 11. **플레이리스트 수록곡 테이블**
> **PlaylistBsideTrack**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `playlist_id`    | `INTEGER`        | 해당 플레이리스트의 ID                     | Foreign Key    |
| `song_id`        | `INTEGER`        | 플레이리스트에 포함된 노래의 ID             | Foreign Key    |
| `vote_cnt`       | `INTEGER`        | 해당 트랙에 대한 투표 수                    | Default 0      |

---

### 12. **릴레이리스트 수록곡 테이블**
> **RelaylistBsideTrack**

| **컬럼명**       | **데이터 타입**   | **설명**                                  | **제약 조건**  |
| ---------------- | ---------------- | ----------------------------------------- | -------------- |
| `relaylist_id`   | `INTEGER`        | 해당 릴레이 리스트의 ID                    | Foreign Key    |
| `song_id`        | `INTEGER`        | 릴레이 리스트에 포함된 노래의 ID            | Foreign Key    |
| `vote_cnt`       | `INTEGER`        | 해당 트랙에 대한 투표 수                    | Default 0      |