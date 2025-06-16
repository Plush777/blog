---
title: "2. HTML 시멘틱 태그"
isWarning: false
description: "HTML 문서를 의미있는 문서로 만들어주는 시멘틱 태그에 대해 알아보자!"
pubDate: "2025-06-16"
heroImage: "/images/post/2025/pub/ep2/thumbnail.png"
category: "퍼블리싱"
---

## 시멘틱 태그 (Semantic tag)란?

시멘틱 태그에 대해 알아보기 전에, 시멘틱 (Semantic) 이라는 단어를 알고가면 더욱 쉽게 이해할 수 있습니다.

**Semantic**은 의미론적 이라는 뜻으로, 시멘틱 (Semantic) + 태그 (Tag) 라는건 태그 자체에 의미를 부여한다고 할 수 있습니다.
과거 HTML5가 나오기 이전에는 시멘틱 태그가 존재하지 않아 전부 `<div>`를 이용하여 구분할 수 있는 class나 id를 넣어서 작업을 했었는데, 이는 문서에 내용이 점점 많아지고 구조가 복잡해질수록 어느 영역인지 정확히 구분이 안되는 문제가 있었습니다.

이러한 문제를 HTML5 시멘틱 태그를 통해 해결할 수 있습니다.

<img src="/images/post/2025/pub/ep2/image02.jpg" alt=""/>

시멘틱 태그는 기본적인 `<header>`, `<nav>`, `<aside>`, `<main>`, `<footer>` 부터
`<article>`, `<figure>`, `<section>` 등. 이 외에도 수 없이 많은 태그가 존재하는데요.

위 이미지와 같이 복잡한 구조에서는 왼쪽처럼 `<div>`로만 구성한 것보다는 오른쪽이 확실히
어디가 무슨 영역인지 한눈에 들어오는 것을 알 수 있습니다. 모든 시멘틱 태그를 활용하여 구성하는게 좋긴하지만
그럴 시간이 안된다거나 혹은 아직 잘 모른다면 앞서 말했던 `<header>`, `<nav>`, `<aside>`, `<section>`, `<main>`, `<footer>` 정도만 사용해도 도움 될 것 입니다.

## 시멘틱 태그를 사용하면 어떤게 좋은가?

<img src="/images/post/2025/pub/ep2/image03.png" alt=""/>

구글에 HTML 시멘틱 태그에 대해 검색하면 위처럼 엄청나게 많은 글들이 나오는데요,
대체 어떤 점이 좋길래 이렇게나 많은 글들이 있을까요?

시멘틱 태그를 사용했을 때의 장점은 아래와 같습니다.

### 1. 가독성 증가

앞서 말했듯이, `<div>` 대신 `<header>`, `<nav>` 와 같이 의미를 가진 태그를 사용함으로써
영역을 쉽게 구분할 수 있어 한 프로젝트에 여러 사람이 작업하거나 추후 유지보수 시에도 덜 헷갈릴 수 있습니다.

### 2. 접근성 향상

<video class="articleVideo" controls muted>
    <source src="/videos/video01.mp4" type="video/mp4">
</video>

시멘틱 요소로 웹을 구성하면, 위처럼 NVDA와 같은 스크린 리더기를 사용하는 유저에게 키보드 조작만으로도
해당 부분이 어느 정보를 제공하는지, 내가 사이트 어디에 위치 해있는지 자세히 알 수 있습니다.

### 3. 검색엔진최적화 (Search Engine Optimization)

검색엔진최적화 (SEO) 는 Googlebot과 같은 검색엔진 크롤러가 자료를 수집하는 방식에 맞게 웹 페이지를 구성하여
자연적으로 사이트 트래픽을 높이는 마케팅 방법입니다.

구글, 네이버, 다음과 같은 사이트들은 기본적으로 검색엔진 가이드를 제공하는데요, 시멘틱 태그와 각 검색엔진 사이트들에서 요구하는
자료들 (사이트맵, 메타태그 등) 을 추가하면 검색했을 때 상위 페이지에 결과가 노출 될 확률이 높아지게 되는 것입니다.

구글의 경우 <a href="https://search.google.com/search-console/about?hl=ko" target="_blank">구글 서치 콘솔</a>, 네이버의 경우 <a href="https://searchadvisor.naver.com/" target="_blank">네이버 서치 어드바이저</a>, 다음의 경우 <a href="https://register.search.daum.net/index.daum" target="_blank">다음 검색등록</a> 과 같은 서비스들을 제공하고 있습니다.

=== 작성중 ===
