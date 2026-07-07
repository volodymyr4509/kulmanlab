---
title: Font Manager 명령어 — KulmanLab CAD에서 사용자 지정 TTF 폰트 업로드 및 관리
description: Font Manager 명령어는 폰트를 찾아보고 미리 보고 선택하며, 자신의 .ttf 파일을 업로드할 수 있는 대화 상자를 엽니다. 업로드된 폰트는 브라우저에 저장되며 DXF 내보내기에 이름으로 포함됩니다.
keywords: [폰트 관리자, 사용자 지정 폰트 CAD, TTF 업로드, 사용자 지정 서체 CAD, Google Fonts CAD, 텍스트 폰트 CAD, kulmanlab]
---

# Font Manager

`FontManager` 명령어는 폰트를 찾아보고 선택하며, [Text](../text/) 및 [Multileader](../leader/) 객체에 사용할 자신의 `.ttf` 파일을 업로드할 수 있는 대화 상자를 엽니다.

## Font Manager 열기

- 터미널에 `FontManager`를 입력하거나, **또는**
- [텍스트 편집기](../../interface/text-editor/) 도구 모음에서 **Font Manager** 버튼을 클릭합니다.

## 폰트 그룹

| 그룹 | 내용 |
|------|------|
| **Default** | 내장 산세리프 폰트 — 항상 사용 가능 |
| **User** | 직접 업로드한 `.ttf` 폰트(하나를 추가해야 표시됨) |
| **Free** | 번들로 제공되는 Google Fonts 15종(EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | 일반적인 OS 폰트(Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

목록에서 폰트를 클릭하면 오른쪽에 미리보기가 표시됩니다 — 이름, 알파벳 샘플, 팬그램, 숫자.

## 사용자 지정 폰트 업로드

1. 대화 상자 하단의 **Add Font**를 클릭합니다(또는 터미널에 `Font+`를 입력하여 파일 선택 창을 바로 엽니다).
2. `.ttf` 파일을 선택합니다. TrueType 폰트만 지원됩니다 — `.otf` 및 `.woff`/`.woff2`는 지원되지 않습니다.
3. 파일 이름(확장자 제외)이 **User** 그룹에서 폰트 이름이 됩니다. 예를 들어 `MyFont.ttf`를 업로드하면 `MyFont`라는 이름의 폰트가 추가됩니다.

업로드한 폰트는 브라우저(IndexedDB)에 영구적으로 저장되며, 다음에 KulmanLab CAD를 열 때 자동으로 다시 로드됩니다.

## 사용자 지정 폰트 제거

**User** 그룹에서 폰트 위에 마우스를 올리고 옆에 있는 **×** 버튼을 클릭합니다. 내장 폰트(Default, Free, System)는 제거할 수 없습니다.

## 키보드 참고

| 키 | 동작 |
|----|------|
| `↑` / `↓` | 폰트 목록에서 선택 항목을 위아래로 이동 |
| `Escape` | Font Manager 닫기 |

## DXF 호환성

폰트 이름은 내보낸 **MTEXT** 객체에 인라인 서식 코드로 포함되므로, KulmanLab CAD를 거쳐 왕복한 DXF도 폰트 지정을 유지합니다. 사용자 지정 폰트 *파일* 자체는 DXF에 포함되지 않습니다 — 포함되는 것은 폰트 *이름*뿐입니다. 이 기기에 업로드하지 않은 사용자 지정 폰트를 참조하는 도면을 다시 가져오면, 같은 이름의 폰트를 업로드할 때까지 텍스트가 기본 폰트로 표시됩니다.

## 관련 명령어

- [Text](../text/) — 폰트 선택이 적용되는 텍스트 레이블을 배치합니다
- [Match Properties](../match-properties/) — 객체 간에 텍스트 높이는 복사하지만 폰트는 복사하지 않습니다
