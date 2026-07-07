---
title: KulmanLab CAD — 명령어 참고서
description: KulmanLab CAD 명령어 참고서 — 도면 그리기, 편집, 마크업, 레이어, 측정, 파일 명령어를 포함한 KulmanLab CAD의 모든 명령어에 대한 완전한 가이드.
keywords: [KulmanLab, KulmanLab CAD, CAD 명령어, 무료 브라우저 CAD, DXF 온라인 편집기, 도면 명령어, kulmanlab 명령어]
---

# KulmanLab CAD — 명령어 참고서

**KulmanLab CAD** 명령어 참고서에 오신 것을 환영합니다. [KulmanLab CAD](https://kulmanlab.com)는 DXF 파일을 그리고, 편집하고, 내보내기 위한 무료 브라우저 기반 CAD 도구입니다 — 설치가 필요 없습니다. 사이드바를 이용해 패널별로 그룹화된 모든 명령어를 탐색하세요.

## 도형

| 명령어 | 기능 |
|--------|------|
| [Line](./commands/line/) | 두 점 사이에 직선 그리기 |
| [Polyline](./commands/polyline/) | 여러 선분으로 이루어진 열린 경로 그리기 |
| [Rectangle](./commands/rectangle/) | 축 정렬 직사각형 그리기 |
| [Circle](./commands/circle/) | 중심점과 반지름으로 원 그리기 |
| [Arc](./commands/arc/) | 세 점을 통과하는 호 그리기 |
| [Ellipse](./commands/ellipse/) | 중심점과 두 축으로 타원 그리기 |
| [Text](./commands/text/) | 캔버스에 텍스트 레이블 배치 |
| [Spline CV](./commands/spline-cv/) | 제어 꼭짓점을 배치하여 스플라인 그리기 |
| [Spline Fit](./commands/spline-fit/) | 클릭한 점을 통과하는 스플라인 그리기 |

## 편집

| 명령어 | 기능 |
|--------|------|
| [Move](./commands/move/) | 선택한 객체를 새 위치로 이동 |
| [Copy](./commands/copy/) | 선택한 객체를 새 위치에 복사 |
| [Rotate](./commands/rotate/) | 선택한 객체를 기준점을 중심으로 회전 |
| [Mirror](./commands/mirror/) | 선택한 객체를 선에 대해 대칭 복사 |
| [Scale](./commands/scale/) | 선택한 객체를 기준점을 중심으로 축척 |
| [Delete](./commands/delete/) | 선택한 객체를 도면에서 제거 |
| [Trim](./commands/trim/) | 교차점에서 선 세그먼트 자르기 |
| [Extend](./commands/extend/) | 선을 가장 가까운 경계 교차점까지 연장 |
| [Offset](./commands/offset/) | 지정한 거리만큼 객체의 평행 복사본 생성 |
| [Fillet](./commands/fillet/) | 두 선 사이의 모서리를 접선 호로 라운딩 |
| [Chamfer](./commands/chamfer/) | 두 선 또는 폴리선 사이의 모서리를 직선으로 경사지게 자르기 |
| [Undo](./commands/undo/) | 마지막 작업 취소 |
| [Redo](./commands/redo/) | 마지막으로 취소한 작업 다시 실행 |

## 마크업

| 명령어 | 기능 |
|--------|------|
| [Leader](./commands/leader/) | 화살표와 텍스트가 있는 다중 지시선 주석 그리기 |
| [Leader+](./commands/leader-add/) | 기존 다중 지시선에 화살표 팔 추가 |
| [Leader−](./commands/leader-remove/) | 기존 다중 지시선에서 팔 제거 |
| [Dimension Linear](./commands/dim-linear/) | 수평 또는 수직 치수 추가 |
| [Dimension Aligned](./commands/dim-aligned/) | 두 점에 정렬된 치수 추가 |
| [Dimension Continue](./commands/dim-continue/) | 마지막 치수에서 새 치수를 연속으로 추가 |
| [Dimension Radius](./commands/dim-radius/) | 원 또는 호에 반지름 치수 추가 |
| [Dimension Diameter](./commands/dim-diameter/) | 원에 지름 치수 추가 |
| [Dimension Angular](./commands/dim-angular/) | 두 선, 호 또는 원에 각도 치수 추가 |

## 레이어

| 명령어 | 기능 |
|--------|------|
| [LayerMakeCurrent](./commands/layer-make-current/) | 클릭한 객체의 레이어를 현재 레이어로 설정 |
| [LayerMatch](./commands/layer-match/) | 선택한 객체의 레이어를 원본 객체의 레이어에 맞게 재지정 |
| [LayerIsolate](./commands/layer-isolate/) | 선택한 객체의 레이어를 제외한 모든 레이어 동결 |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | 한 번에 모든 레이어 동결 해제 |

## 레이아웃

| 명령어 | 기능 |
|--------|------|
| [ViewportRectangle](./commands/viewport-rectangle/) | 두 모서리를 선택하여 용지 레이아웃에 뷰포트 생성 |
| [ViewportCopy](./commands/viewport-copy/) | 뷰포트를 새 위치에 복제 |
| [PageManager](./commands/page-manager/) | 활성 레이아웃의 용지 크기와 축척 편집 |

## 탐색

| 명령어 | 기능 |
|--------|------|
| [Pan](./commands/pan/) | 클릭하고 드래그하여 뷰포트 이동 |
| [Zoom In](./commands/zoom-in/) | 뷰포트 확대 |
| [Zoom Out](./commands/zoom-out/) | 뷰포트 축소 |
| [Fit](./commands/fit/) | 모든 객체가 뷰포트에 맞게 조정 |

## 측정

| 명령어 | 기능 |
|--------|------|
| [Distance](./commands/distance/) | 두 점 사이의 거리 측정 |
| [Angle](./commands/angle/) | 세 점 사이의 각도 측정 |

## 스타일

| 명령어 | 기능 |
|--------|------|
| [Match Properties](./commands/match-properties/) | 한 객체에서 다른 객체로 색상, 레이어 및 기타 특성 복사 |
| [Font Manager](./commands/font-manager/) | 글꼴 찾아보기, 선택 및 사용자 지정 TTF 글꼴 업로드 |

## 파일

| 명령어 | 기능 |
|--------|------|
| [Import](./commands/import/) | DXF 또는 JSON 도면 파일 열기 |
| [New File](./commands/new-file/) | 새 빈 도면 시작 |
| [Files](./commands/files/) | 최근 도면 찾아보기 및 복원 |
| [Print](./commands/print/) | 도면 영역을 이미지 또는 PDF로 내보내기 |
| [Export](./commands/export/) | 도면을 DXF 또는 JSON으로 다운로드 |
| [Wipe Storage](./commands/wipestorage/) | 브라우저 저장소에서 모든 도면 지우기 |

## 복구

앱이 시작할 때마다 충돌하는 경우(예: 매우 큰 좌표로 작업한 후), URL에 `?reset`을 추가하여 로컬에 저장된 모든 데이터를 지울 수 있습니다:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

이 명령은 브라우저의 로컬 데이터베이스에서 모든 것을 삭제하고 새 빈 도면으로 시작합니다. `?reset` 매개변수는 URL에서 자동으로 제거됩니다. 앱이 전혀 로드되지 않아 [Wipe Storage](./commands/wipestorage/)에 접근할 수 없을 때 최후의 수단으로 사용하세요.

## 명령어 작동 방식

모든 명령어는 동일한 패턴을 따릅니다:

1. **활성화** — 도구 모음 버튼을 클릭하거나 화면 하단의 터미널에 명령어 이름을 입력합니다.
2. **프롬프트 따르기** — 터미널이 다음에 필요한 입력을 표시합니다.
3. **완료 또는 취소** — 대부분의 명령어는 마지막 입력 후 자동으로 완료됩니다. 언제든지 **Escape**를 눌러 취소할 수 있습니다.

## 객체 선택

여러 편집 명령어(Move, Copy, Rotate, Mirror, Scale, Delete)는 동일한 선택 동작을 공유합니다:

- **클릭** — 객체를 선택하거나 선택 해제합니다.
- **오른쪽으로 드래그** (엄격 선택) — 박스 내부에 완전히 포함된 객체만 선택됩니다.
- **왼쪽으로 드래그** (교차 선택) — 박스 경계와 교차하는 모든 객체가 선택됩니다.
- **Enter** 또는 **Space**를 눌러 선택을 확인하고 다음 단계로 진행합니다.
