---
title: "2. HTML 시멘틱 태그"
isWarning: false
description: "HTML 문서를 의미있는 문서로 만들어주는 시멘틱 태그에 대해 알아보자!"
pubDate: "2025-06-16"
heroImage: "/images/post/2025/pub/ep2/thumbnail.png"
category: "퍼블리싱"
ref:
  [
    "https://seo.tbwakorea.com/blog/what-is-semantic-tag/",
    "https://wikidocs.net/160892",
    "https://mailchimp.com/resources/html-semantic-elements-and-webflow-the-essential-guide/",
    "https://www.semrush.com/blog/semantic-html5-guide/",
    "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
  ]
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

## 시멘틱 태그의 종류 및 사용 방법

시멘틱 태그는 **무작정 많이 쓴다**고 해서 좋은 것은 아닙니다. 콘텐츠 용도에 맞게 사용해야하며, 이에 맞게 적절히 사용하려면
콘텐츠가 가지는 의미에 대해 다시 생각해보아야 합니다. 용도에 맞지않게 쓴다고 브라우저에서 따로 오류를 출력해주는 것도 아니기 때문에 생각보다 어려운 작업이 될 수도 있구요.

이 섹션에서 시멘틱 태그의 종류를 알아보면서 어떤 용도로 사용해야 하는지에 대한 사용법도 알아보겠습니다.

### &lt;header&gt;

`<header>`는 제목, 사이트를 대표하는 로고, 검색 바, 메뉴와 같은 콘텐츠들이 들어갈 수 있습니다.

<img src="/images/post/2025/pub/ep2/header.png" alt=""/>

위 <a href="https://programmers.co.kr/" target="_blank">프로그래머스</a> 사이트를 기준으로 보면,
맨 위에 로고 있는 부분이 헤더라고 할 수 있습니다. <br/>
사이트 성격에 따라 헤더에 메뉴 (`<nav>`) 가 들어갈 수도 있고 안들어갈 수도 있습니다.

### &lt;nav&gt;

`<nav>`는 말 그대로 navigation 콘텐츠를 포함합니다. <br/>
즉, 현재 페이지에서 다른 페이지로 이동하는 메뉴나 목차 (BreadCrumb) 가 들어갈 수 있습니다.

<img src="/images/post/2025/pub/ep2/nav.png" alt=""/>

위와 같이 헤더 안에 `<nav>`가 들어갈 수도 있습니다.

<img src="/images/post/2025/pub/ep2/nav02.png" alt=""/>

혹은 이런 경우에도 `<nav>`라고할 수 있습니다. (bootstrap 페이지는 총 nav가 2개인 것!)

### &lt;main&gt;

`<main>`은 주요 콘텐츠 (본문) 를 나타냅니다. <br/>
그렇기 때문에, `<main>`은 페이지 안에 1개만 존재해야 합니다. 중복으로 제공되면 안됩니다.

<img src="/images/post/2025/pub/ep2/main.png" alt=""/>

### &lt;footer&gt;

`<footer>` 는 작성자나 저작권 정보, 개인정보처리방침, 연락처, 사이트 관련 문서 링크 (패밀리 사이트, SNS 등) 와 같은 정보를 포함할 수 있습니다.

<img src="/images/post/2025/pub/ep2/footer01.png" alt=""/>

푸터 안에 포함되어야 할 내용이 많은경우 위와 같이 영역을 크게 잡을 수도 있고,

<img src="/images/post/2025/pub/ep2/footer02.png" alt=""/>

<a href="https://programmers.co.kr/" target="_blank">네이버 치지직</a> 처럼 간단히 표시할 수도 있습니다.

### &lt;aside&gt;

`<aside>` 는 주요 콘텐츠 (main) 과는 직접적으로 연관은 없지만 부가적이거나 관련된 정보를 제공할 때 사용합니다. <br/>
aside 안에는 내비게이션 (`<nav>`), 글 목록, 광고와 같은 콘텐츠들이 포함될 수 있습니다.

여기서 중요한 것은, 위치가 양쪽 (사이드) 에 있다고 aside가 아니라 **주요 콘텐츠에 대한 보조적인 정보**를 나타내는지가 중요합니다.

<img src="/images/post/2025/pub/ep2/aside01.png" alt=""/>

<a href="https://www.daangn.com/kr" target="_blank">당근</a> 에서는 위 영역을 aside로 칭하고 있습니다.

<img src="/images/post/2025/pub/ep2/aside02.png" alt=""/>

<a href="https://getbootstrap.com/docs/5.3/components/offcanvas/#how-it-works" target="_blank">Bootstrap offcanvas</a> 컴포넌트와 같은 경우도 aside 태그로 나타낼 수 있습니다.

<img src="/images/post/2025/pub/ep2/aside03.png" alt=""/>

<a href="https://zum.com/" target="_blank">ZUM</a> 에서는 위와 같은 광고 영역을 aside로 설정했습니다.

### &lt;article&gt;

`<article>`은 내용만 따로 복사해서 다른 곳에 붙여놔도 의미가 통하는 콘텐츠에 사용할 수 있습니다. <br/>
예를 들면 기사나 게시물, 제품 카드, 댓글 등이 여기에 포함됩니다.<br/>
article을 처음 본다면 `<section>` 이랑 의미가 헷갈릴 수 있는데요, 설명을 쉽게 풀어쓰면 다음과 같습니다.

신문으로 예시를 들었을 때,

- 한 개의 기사는 내용만 따로 오려내서 보여줘도 어떤 이야기 인지 알 수 있는데,<br/>
  이게 바로 `<article>` 입니다.

- 신문 전체에서 "정치", "경제", "스포츠" 처럼 그룹 형식으로 내용을 나누는건 `<section>` 입니다.

<div class="mdImageContainer">
    <img class="mdImage mdImage-h-500" src="/images/post/2025/pub/ep2/article01.png" alt=""/>
    <img class="mdImage mdImage-h-500" src="/images/post/2025/pub/ep2/article02.png" alt=""/>
</div>

<img src="/images/post/2025/pub/ep2/article03.png" alt=""/>

==== 작성중 ====
