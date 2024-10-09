---
sidebar_position: 1
---

# 1. Introduction

### 1.1 Purpose
이 문서는 **WePLi** 서비스의 소프트웨어 요구사항 명세서입니다. 본 SRS 문서의 목적은 WePLi의 기능적 및 비기능적 요구사항을 정의하고, 프로젝트 이해 관계자들에게 명확한 시스템 사양을 제공하는 것입니다. 이 문서는 WePLi 개발 팀이 일관되게 시스템을 설계, 구현, 테스트하고, 유지보수할 수 있도록 기준을 제시합니다.

### 1.2 Scope
WePLi는 사용자가 개인 또는 공동으로 플레이리스트를 생성하고, 노래를 추천 및 투표하며, 이를 통해 음악 취향을 공유하고 발견하는 소셜 음악 서비스입니다. 본 프로젝트의 범위는 다음과 같습니다:
- 사용자가 자신의 플레이리스트를 만들고, 공유하며, 관리할 수 있는 시스템
- 협업 플레이리스트 기능을 통해 특정 주제에 맞는 곡을 추천하고 투표할 수 있는 기능
- 음악 스트리밍 플랫폼(예: Spotify, Apple Music)과의 연동
- 커뮤니티 기반의 피드와 소셜 기능 제공

### 1.3 Definitions, Acronyms, and Abbreviations
- **SRS**: Software Requirements Specification
- **WePLi**: 음악 취향 공유 및 협업 플레이리스트 소셜 플랫폼
- **API**: Application Programming Interface
- **UI/UX**: User Interface / User Experience

### 1.4 References
- WePLi 프로젝트 기획서
- Spotify 및 Apple Music API 문서
- React, Kotlin, Compose, Firebase 사용 문서

## 2. Overall Description

### 2.1 Product Perspective
WePLi는 기존 음악 스트리밍 플랫폼에서 제공하지 않는 소셜 협업 기능을 중심으로 개발된 애플리케이션입니다. 사용자는 자신만의 음악 취향을 반영한 플레이리스트를 생성하고, 커뮤니티와 공유하며, 서로의 선호 곡을 바탕으로 새로운 플레이리스트를 공동으로 제작할 수 있습니다.

- **기존 시스템과의 관계**: WePLi는 독립적인 서비스이지만, Spotify 및 Apple Music과 같은 음악 스트리밍 플랫폼과 API를 통해 연동하여 사용자 경험을 확장합니다.
- **인터페이스**: 모바일 앱(Android, iOS) 및 웹 플랫폼으로 제공되며, RESTful API 및 GraphQL을 통해 데이터 통신을 수행합니다.

### 2.2 Product Functions
- **사용자 등록 및 로그인**: 사용자 인증을 위한 소셜 로그인(Google, Apple ID) 및 이메일 기반의 로그인 기능.
- **플레이리스트 관리**: 사용자는 새로운 플레이리스트를 생성하고, 곡을 추가 및 삭제하며, 개인 설정을 통해 공개/비공개 여부를 지정할 수 있음.
- **협업 플레이리스트**: 특정 주제에 대해 다수의 사용자가 곡을 추천하고 투표하여 최종 플레이리스트를 완성.
- **피드 및 소셜 기능**: 사용자는 다른 사용자의 플레이리스트를 피드를 통해 확인하고, 댓글 및 좋아요를 통해 상호작용 가능.
- **음악 스트리밍 연동**: Spotify, Apple Music 등의 음악 스트리밍 서비스와 연동하여 곡을 재생하거나 추가할 수 있는 기능.

### 2.3 User Characteristics
- **일반 사용자**: 음악 감상과 공유에 관심이 있는 개인 사용자.
- **커뮤니티 사용자**: 특정 음악 장르나 취향을 공유하고, 함께 플레이리스트를 제작하고 싶은 사용자.
- **플랫폼 관리자**: 서비스의 관리 및 유지보수를 담당하는 관리자.

### 2.4 Constraints
- API 사용 제한: Spotify 및 Apple Music API의 사용량 제한 및 정책에 따라 기능 구현이 제약될 수 있음.
- 데이터 보호 및 개인정보 처리: 사용자의 데이터와 개인 정보 보호를 위한 법적 및 규제 요구사항 준수 필요.

### 2.5 Assumptions and Dependencies
- Spotify, Apple Music 등의 음악 스트리밍 서비스의 API가 지속적으로 제공됨을 전제로 함.
- 안정적인 네트워크 연결을 통한 스트리밍 서비스의 접근이 가능할 것.
- 최신 버전의 Android, iOS, 및 주요 브라우저를 사용하는 사용자들을 주 대상으로 함.

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 사용자 관리
- 사용자는 이메일, Google, 또는 Apple ID를 사용하여 계정을 생성하고 로그인할 수 있다.
- 사용자는 프로필 정보를 설정하고 수정할 수 있다.
- 사용자는 비밀번호를 재설정하거나 계정을 삭제할 수 있다.

#### 3.1.2 플레이리스트 기능
- 사용자는 개인 플레이리스트를 생성하고 관리할 수 있다.
- 각 플레이리스트에는 제목, 설명, 태그, 공개/비공개 여부를 지정할 수 있다.
- 사용자는 다른 사용자의 공개 플레이리스트를 즐겨찾기에 추가할 수 있다.

#### 3.1.3 협업 플레이리스트
- 사용자는 협업 플레이리스트의 주제를 설정하고, 다른 사용자들을 초대할 수 있다.
- 모든 참여자는 곡을 추천하고, 다른 사용자가 추천한 곡에 투표할 수 있다.
- 최종적으로 투표 수에 따라 플레이리스트의 순서가 결정된다.

#### 3.1.4 피드 및 소셜 기능
- 사용자는 다른 사용자의 플레이리스트에 댓글을 작성하고 좋아요를 남길 수 있다.
- 사용자는 피드를 통해 새로운 플레이리스트와 음악을 탐색할 수 있다.

### 3.2 Non-Functional Requirements

#### 3.2.1 성능 요구사항
- 페이지 로딩 시간: 주요 화면은 2초 이내에 로드되어야 한다.
- 서버 응답 시간: API 요청에 대한 응답은 1초 이내에 이루어져야 한다.

#### 3.2.2 보안 요구사항
- 모든 데이터 전송은 HTTPS를 통해 암호화되어야 한다.
- 사용자 인증 및 세션 관리는 JWT(JSON Web Token) 기반으로 수행된다.

#### 3.2.3 확장성
- 시스템은 사용자가 급증할 경우(예: 동시 사용자 10,000명 이상)에도 안정적으로 작동해야 한다.
- 새로운 음악 스트리밍 서비스가 추가될 경우, 쉽게 연동할 수 있도록 API 구조가 유연해야 한다.

## 4. Interface Requirements

### 4.1 User Interfaces
- **모바일 UI**: 직관적이고 반응형 디자인을 사용하여, 사용자가 쉽게 플레이리스트를 탐색하고 관리할 수 있도록 함.
- **웹 UI**: 모바일과 동일한 기능을 제공하되, 데스크탑 환경에 맞춘 레이아웃을 적용.

### 4.2 API Interfaces
- **Spotify API**: 곡 검색, 추가, 재생 기능을 포함하여 플레이리스트와 통신.
- **Apple Music API**: 사용자 인증 및 곡 추가 기능 제공.

### 4.3 Hardware Interfaces
- 안정적인 서버 인프라와 클라우드 환경을 기반으로 구축되며, AWS 또는 GCP(Google Cloud Platform)을 사용하여 글로벌 사용자에게 빠른 응답성을 제공.

## 5. Appendices
- [Spotify API Documentation](https://developer.spotify.com/documentation/web-api/)
- [Apple Music API Documentation](https://developer.apple.com/documentation/applemusicapi/)
- [WePLi 프로젝트 기획서](#)