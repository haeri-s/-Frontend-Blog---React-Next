# [Frontend] Blog

React, Next를 활용한 블로그입니다. 


<p>

  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" />

  <img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" />

  <img alt="Next" src="https://img.shields.io/badge/-Next-000000?style=flat-square&logo=Next.js&logoColor=white" />

  <img alt="SWR" src="https://img.shields.io/badge/-SWR-414141?style=flat-square" />

  <img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />

  <img alt="Google Cloud Platform" src="https://img.shields.io/badge/-Google_Cloud_Platform-4285F4?style=flat-square&logo=google-cloud&logoColor=white" />

</p>

<br/>


## Skill Stack

- React
- Next: 블로그인 만큼 SEO가 중요하기 때문에 서버 사이드 렌더링이 가능하도록 Next를 선택함.
- SWR: SWR은 Next팀이 만든 Data fetching library 임. 단순히 API를 요청하여 데이터를 가져온 후 Redux를 사용하여 데이터를 관리하는 것보다 캐시가 내장되어 있고 중복된 요청을 제거할 수 있는 SWR를 사용해보기로 함.
- Froala Editor: 블로그 글을 다양하게 편집할 수 있도록 Froala Editor를 사용함.
- Docker: GCP의 Cloud Run(Docker Container 기반임)로 서버를 운영하기 위해 Docker를 사용함.

<br/>


## 주요 기능

- 블로그 목록, 상세 가져오기
- 인기 블로그 글 가져오기
- 블로그 검색 기능
- 블로그 글 공유 기능(카카오톡, 카카오스토리, 네이버밴드, 페이스북, 트위터, 클립보드)

<br/>


## 실행

!! 실행을 위해서는 .env 파일을 만들어야 합니다.

- .env 파일

```
# .env
NEXT_PUBLIC_PUBLIC_URL="" # 기본 이미지 주소
NEXT_PUBLIC_KAKAO_KEY="" # 카카오톡 공유 기능을 위한 키
NEXT_PUBLIC_FROALA_KEY="" # froala editor 사용을 위한 키

```


- Develop 환경

```
npm run dev
```


- Production 환경

```
npm run start:production
```


## GCP 배포
```
# 1. GCP 에 컨테이너 빌드
gcloud builds submit --tag << GCP Container Registry 주소 >> 

# 2. GCP Cloud Run 새로운 이미지로 수정
gcloud run deploy --image << GCP Container Registry 주소 >> --platform managed
```
<br/>
