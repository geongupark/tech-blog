---
title: 'Tistory 블로그 폰트 쉽게 변경하기'
date: 2023-02-12 00:00:01
description:
  'Tistory 블로그의 폰트를 손쉽게 변경해보자.'
image: 
tags: ['blog', 'font', 'tistory']
---

# 📌 What?
---

-   Tistory 블로그 폰트 변경

# 💡 Why?

---

폰트는 아주 중요하다. 스티브잡스가 학창시절 가장 재미있게 들었던 수업이 캘리그라피였다고 한다. 스티브잡스는 `글씨는 단순 정보 전달의 목적 뿐만아니라 '사고'가 담겨있다고 생각했다.`

# 🔑 How?

---

Tistory 블로그 폰트 바꾸는 방법은 크게 2가지다. 첫째는 구글 폰트 사이트를 연동하여 바꾸는 방법이고 두번째는 직접 폰트를 업로드해서 css코드를 수정하는 것이다.

## 1) ttf보다 용량이 작은 woff 파일 구하기

-   ttf파일이 아닌 Web font 전용인 woff2나 woff 파일을 구해야함
-   ttf가 woff에 비해 월등히 사이즈가 커서 웹사이트 성능에 영향을 미치기 때문
-   [눈누](https://noonnu.cc/) 사이트에서 cdn을 제공해줘서 손쉽게 css에 추가 가능
-   사용하고 싶은 글꼴 검색 후 웹폰트로 사용 부분을 복사하면 됨  

![image](https://user-images.githubusercontent.com/66377511/210564906-d379da80-18be-4db9-974a-7323e5bdd6d0.png)

## 2) Tistory 블로그의 CSS에 폰트 적용

-   `블로그 관리자 > 꾸미기탭 > 스킨편집 > html편집 > 파일업로드 > +추가` 경로에 가서 위 1)에서 복사한 `@font-face~`를 붙여 넣기
-   `/* Web Font Load */` 주석 부분에 추가해주면 됨
-   배민 글씨체와 D2Coding 추가해서 사용

## 3) 내 입맛대로 selector 별 style의 font-family 변경

-   아래 코드처럼 특정 tag나 class의 font-family 스타일을 내 입맛대로 변경

``` css

/* Web Font Load */
@import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo:800&subset=korean');
@import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
@font-face {
	font-family: 'BMHANNAPro';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}

...

nav li, .sidebar-2 .count, h1, h2, h3, h4 {
	font-family: 'BMHANNAPro';
}
```
