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

이 섹션에서 자주 쓰이는 시멘틱 태그의 종류를 알아보면서 어떤 용도로 사용해야 하는지에 대한 사용법도 알아보겠습니다.

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

<a href="https://news.google.com/home?hl=ko&gl=KR&ceid=KR:ko" target="_blank">Google news</a>에서는 메인 페이지에서 각 글 목록을 article로 마크업했고,

<img src="/images/post/2025/pub/ep2/article03.png" alt=""/>

<a href="https://toss.tech/" target="_blank">토스 기술 블로그</a>에서는 내용 전체를 article로 마크업했습니다.

### &lt;section&gt;

`<section>` 은 콘텐츠를 주제 별로 그룹을 나누는 용도로 사용됩니다.

MDN에서는 사용 시 아래 사항들을 고려해보라고 하고 있습니다.

- 블로그 게시물, 댓글, 신문 기사와 같이 단독으로 쓰여도 의미를 알 수 있는 콘텐츠의 경우 `<article>`이 더 적절하다.
- 주요 콘텐츠에 대한 간접정보인경우 `<aside>`가 더 적절하다.
- 주요 콘텐츠 영역을 나타내는 경우 `<main>` 이 더 적절하다.
- 시멘틱 용도가 아닌 스타일 용도 (wrapper)로만 사용 되는경우 `<div>` 나 `<a>` 가 적절하다.

그리고 MDN에서는 `<section>` 안에는 가능한 경우 제목 요소 (h1 ~ h6) 를 포함하라고 강조하고 있습니다.

다음은 MDN에서 제공하는 `<section>` 사용 예시입니다.

#### 제목이 있는 경우 `<section>` 사용

```html
<!-- before -->
<div>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</div>

<!-- after -->
<section>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</section>
```

#### 제목이 없는 경우 `<section>` 사용

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>

<section>
  <button class="reply">Reply</button>
  <button class="reply-all">Reply to all</button>
  <button class="fwd">Forward</button>
  <button class="del">Delete</button>
</section>
```

<img src="/images/post/2025/pub/ep2/section.png" alt=""/>

위와 같은 영역을 section으로 마크업할 수 있습니다.

### &lt;div&gt;

문서에서 **각 영역을 정의하기위해** 사용됩니다. <br/>
주로 레이아웃을 만들 때 사용하며, CSS로 스타일을 지정하기 전까지는 콘텐츠에 아무런 영향을 미치지 않습니다.

<img src="/images/post/2025/pub/ep2/div.png" alt=""/>

또한 div는 블록 요소로, 너비를 100%로 차지합니다.

\*클릭과 같은 이벤트를 주려면 웬만해서는 `<div>` 대신 키보드로 포커싱이 가능한 `<button>` 이나 `<a>`와 같은 태그를 사용하는게 좋습니다.

### &lt;span&gt;, &lt;p&gt;, &lt;pre&gt;, &lt;code&gt;

- `<span>` 태그는 phrasing content로, 주로 텍스트 스타일 지정에 사용됩니다.
  또한 인라인 요소이기 때문에, 너비를 안에 들어간 콘텐츠만큼 차지합니다.

  \*span과 같은 인라인 요소는 안에 자식으로 `<div>`같은 블록 요소를 포함할 수 없습니다.

- `<p>` 태그는 단락을 나타냅니다. 콘텐츠에 대한 설명이나 텍스트를 적으면 됩니다.

  \*p는 인라인 콘텐츠 (phrasing content) 만 포함이 가능하기 때문에 `<div>`, `<section>`과 같은 블록 요소를 포함하면 안됩니다.

- `<pre>` 태그 안에서는 텍스트 입력 시 공백이나 줄바꿈, 들여쓰기 등이 그대로 표현됩니다.
  줄바꿈을 하기위해 `<br/>` 태그를 사용 할 필요가 없습니다.

  \*pre 태그 안에서는 다른 HTML 태그들도 넣을 수는 있지만, 특성 상 **의도하지 않은 레이아웃**이 발생할 수 있기 때문에 가능하면 **텍스트**만 넣는게 좋습니다.

- `<code>` 태그는 안에 프로그래밍 코드를 넣기위해 사용됩니다. 프로그래밍 코드는 들여쓰기가 중요하기 때문에, `<pre>` 태그 안에서 많이 사용됩니다.

#### 결과

```html
<!-- span -->
<p>오늘은 <span style="color: red;">중요한 날</span>입니다.</p>

<!-- p -->
<p>HTML은 웹 페이지의 구조를 정의하는 언어입니다.</p>
<p>CSS는 스타일을 지정하는 데 사용됩니다.</p>

<!-- pre -->
<pre>
function greet() {
    console.log("Hello, world!");
}
</pre>

<!-- pre + code -->
<pre>
  <code>
    const x = 10;
    console.log(x);
  </code>
</pre>
```

<img src="/images/post/2025/pub/ep2/span_p_pre_code.png" alt=""/>

### &lt;figure&gt;, &lt;figcaption&gt;

- `<figure>` 태그는 이미지, 차트, 코드 등의 미디어 콘텐츠의 묶음 (또는 그룹)을 나타냅니다.

  \*`<div>`대신 `<figure>`로 나타내면 검색엔진 또는 스크린 리더기가 **설명이 있는 콘텐츠 묶음**으로 이해할 수 있습니다.

- `<figcaption>` 태그는 해당 콘텐츠에 대한 설명을 제공합니다. `<table>`태그의 `<caption>` 태그랑 용도가 동일합니다.

#### 결과

```html
<figure>
  <img src="hallasan.jpg" alt="한라산 이미지" />
  <figcaption>한라산 정상에서 찍은 설경 사진</figcaption>
</figure>
```

<div class="resultArea">
  <figure class="resultFigure">
  <img class="resultFigureImage" src="/images/post/2025/pub/ep2/figure_figcaption_sample_image.jpg" alt=""/>
  <figcaption class="resultFigcaption">한라산 정상에서 찍은 설경 사진</figcaption>
</figure>
</div>

### &lt;b&gt;, &lt;strong&gt;, &lt;mark&gt;

이 3개의 태그는 모두 **볼드체 (굵은 글씨)** 를 나타내지만, 강조하는 의미가 조금씩 다릅니다.

- `<b>` 태그는 **시각적으로 굵은 글씨**를 표현하고 싶을 때 사용합니다. 태그가 가지는 의미는 없습니다.
  태그 대신 CSS로 `font-weight: bold`, 또는 `font-weight: 700`으로 같은 효과를 낼 수 있습니다.

- `<strong>` 태그는 **중요한 정보나 단어, 문장을 강조** 할 때 사용하며, 스크린 리더기는 해당 태그에 있는 정보를 강조해서 읽게됩니다.

- `<mark>` 태그는 주로 인용문을 나타내는 태그인 `<q>` 태그나 `<blockquote>`에서 특정 단어를 강조하는 용도로 사용됩니다.
  해당 태그로 둘러쌓인 텍스트는 우리가 책에서 형광펜을 그은 것처럼 주변에 배경 스타일이 추가됩니다.

  다음은 MDN에서의 사용 시 참고 사항입니다.

  - 해당 태그는 검색결과 하이라이트 기능을 구현하는 데 사용될 수 있습니다.
  - 해당 태그는 문맥을 강조하므로, `<strong>` 태그와는 다른 강조의 의미를 갖습니다. 서로 혼동하지마세요.

#### 결과

```html
<!-- 시각적인 강조, 의미 없음 -->
<p>구매 시 <b>무료배송</b> 혜택이 적용됩니다.</p>

<!-- 중요한 문장을 강조 -->
<p><strong>비밀번호는 절대 타인에게 공유하지 마세요.</strong></p>

<!-- 검색결과 하이라이트-->
<p>검색어 <mark>HTML</mark>에 대한 결과입니다.</p>

<!-- 또는 문맥 강조 -->
<p>
  주요 7개국(G7) 정상회의 참석을 위해 캐나다를 방문한 이재명 대통령이 17일
  오후(현지시간) 캐내내스키스에서 이시바 시게루 일본 총리와 정상회담을 가졌다.
  이 대통령과 이시바 총리는 양국의 관계 발전 방안 등을 중점적으로 논의했다.
  <mark
    >이번 회담은 이 대통령 취임 후 14일만(한국시간 기준)에 이뤄진 첫
    정상회담으로, 역대 사례와 비교해 새 정부 출범 후 매우 이른 시기에 성사된
    한일 정상회담이다.</mark
  >
  앞서 양 정상은 지난 9일 첫 정상 통화에서도 더욱 견고하고 성숙한 한일 관계를
  만들어 나가자는데 공감대를 이룬 바 있다. 윤석열 전 대통령의 경우 취임한 다음
  달인 2022년 6월 북대서양조약기구(NATO·나토) 정상회의에 참석해 기시다 후미오
  당시 일본 총리와 다자간 만찬에서 만나 짧게 대화했다. 정식 양자 회담은 취임 넉
  달 후인 2022년 9월 뉴욕에서 이뤄졌다.
</p>
```

<img src="/images/post/2025/pub/ep2/b_strong_mark.png" alt=""/>

### &lt;i&gt;, &lt;em&gt;

이 2개의 태그는 모두 **기울임체** 를 나타내지만, 다른 의미를 가지고 있습니다.

- `<i>` 태그는 **시각적으로 기울어진 글자**를 표현하고 싶을 때 사용합니다. 태그가 가지는 의미는 없습니다.

  외래어나 용어, 문학적 강조 등에 사용되며, 철자가 Icon의 I와 같다고 해서 `<i class="fa-solid fa-house"></i>` 이런식으로 <a href="https://fontawesome.com/icons/packs/classic" target="_blank">Font awesome</a>과 같은 아이콘 폰트에서도 자주 사용됩니다.<br/> (물론 그렇다고 해서, `<i>` 태그의 약자가 Icon 이라는 뜻은 아닙니다. 원래는 Italic의 i입니다.)

  태그 대신 css에서 `font-style: italic;` 으로 표현할 수도 있습니다.

- `<em>` 태그는 **기울임체를 적용**하고, **강조가 적용 된 텍스트**를 표시합니다. 스크린 리더기는 해당 태그에 있는 텍스트를 강조해서 읽게됩니다.
  `<strong>` 태그와 혼합하여 강조 중첩도 가능합니다. 강조가 중첩이 되면 강조의 세기가 높아집니다.

#### 결과

<img src="/images/post/2025/pub/ep2/i_em_strong.png" alt=""/>

```html
<!-- 시각적 스타일만 필요한 경우 -->
<i>오늘의 감성</i>

<!-- 의미적 강조가 필요한 경우 -->
<em>오늘은 꼭 마감해야 합니다.</em>

<!-- 강조 중첩 -->
<p>
  이건 <em><strong>정말로</strong></em> 중요한 문장입니다.
</p>
```

### &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;

### &lt;picture&gt;

### &lt;details&gt;, &lt;summary&gt;

### &lt;dialog&gt;

### &lt;menu&gt;

### &lt;search&gt;

==== 작성중.. ====
