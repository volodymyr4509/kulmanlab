---
title: Export Manager — 도면을 DXF 또는 JSON으로 다운로드
description: 현재 도면을 DXF 또는 JSON으로 내려받으며, 엔티티 유형별로 무엇을 담을지 고를 수 있습니다. 두 형식 모두 형상, 문자, 치수, 지시선, 해치를 도면층·선종류와 함께 담습니다.
keywords: [CAD DXF 내보내기, CAD 파일 내보내기, 브라우저에서 DXF 다운로드, DXF 온라인 저장, JSON CAD 내보내기, KulmanLab 내보내기, CAD 파일 다운로드, DXF 내보내기, 도면을 파일로 저장, DXF 다운로드]
group: file
order: 6
---

# Export Manager

`exportmanager` 명령은 현재 도면을 파일 시스템으로 내려받습니다. 두 형식이 나란히 있습니다 — 다른 CAD 도구와의 호환을 위한 **DXF**, 그리고 KulmanLab CAD 안에서 온전히 저장하기 위한 **JSON** — 각각 파일에 무엇을 넣을지 고르는 목록을 갖습니다.

## 내보내는 방법

1. 파일 패널에서 툴바의 **Export** 버튼(다운로드 아이콘)을 클릭하거나 터미널에 `exportmanager`를 입력합니다.
2. **Export Manager** 팝업이 **JSON**과 **DXF** 두 열로 열리고, 각 열에 도면의 엔티티 유형이 체크박스와 개수와 함께 나열됩니다.
3. 빼고 싶은 항목의 체크를 해제하십시오. 처음에는 모두 체크되어 있습니다.
4. **Export JSON** 또는 **Export DXF**를 누르십시오. 파일이 기본 다운로드 폴더로 내려받아지고 팝업이 닫힙니다.

내보내지 않고 팝업을 닫으려면 `Escape`를 누르세요.

## 내보낼 대상 고르기

두 열은 같은 엔티티 유형을 나열하며, 각각 도면에 몇 개가 있는지 함께 보여 줍니다:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

팝업이 열릴 때는 모두 체크되어 있으므로 바로 내보내면 도면 전체가 나옵니다. 어떤 유형의 체크를 해제하면 그 파일에서만 빠집니다.

- **두 열은 서로 독립적입니다.** DXF 쪽에서 Hatches를 해제해도 **Export JSON** 결과는 달라지지 않습니다. 형식마다 선택을 따로 간직합니다.
- **없는 유형은 흐리게 표시됩니다.** 개수가 `0`인 행은 체크할 수 없으므로, 이 목록은 도면의 간단한 재고 목록 역할도 합니다.
- **개수는 그 시점의 값입니다.** 팝업을 열 때 집계되며 뒤에서 도면이 바뀌어도 갱신되지 않습니다. 닫았다 다시 열면 새로 집계됩니다.
- **삭제되는 것은 없습니다.** 체크 해제는 내보내는 파일만 다듬을 뿐, 도면 자체는 그대로입니다.

**Linear Dimensions**는 선형·정렬·연속 치수를 아우릅니다. 서로 다른 세 명령이 만드는 하나의 엔티티 유형이며, 반지름·지름·각도는 각각 별도의 행을 갖습니다.

절단용 파일을 만들려면 Text, 네 개의 치수 행, Leaders, Hatches의 체크를 해제한 뒤 **Export DXF**를 누르십시오 — [레이저 절단용 DXF 준비하기](/ko/blog/prepare-dxf-for-laser-cutting/) 참고.

## 형식 선택

| 형식 | 확장자 | 최적 용도 | 제한 사항 |
|------|--------|----------|-----------|
| **JSON**(기본) | `.json` | KulmanLab CAD에서 다시 열기 위한 작업 저장 | 다른 CAD 도구와 호환되지 않음 |
| **DXF** | `.dxf` | FreeCAD, LibreCAD 등과 공유 | 얼마나 남는지는 여는 응용 프로그램에 따라 다릅니다 |

**JSON을 사용해야 할 때:** 작업의 완전한 사본을 저장하고 싶을 때는 언제나. JSON은 KulmanLab의 기본 형식이며 치수, 지시선, hatch, 모든 레이어 데이터를 포함하여 모든 엔티티를 정확하게 보존합니다.

**DXF를 사용해야 할 때:** 다른 CAD 애플리케이션을 사용하는 사람에게 도면을 전달해야 할 때. 내보낸 파일은 AC1032 DXF 형식을 사용하며 대부분의 DXF 호환 도구에서 열 수 있습니다.

## 형식별로 내보내지는 항목

### JSON 내보내기

모든 엔티티 유형이 포함됩니다:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- 치수(linear, aligned, continued, radius, diameter, 각도)
- Leaders(멀티리더)
- Hatches(패턴, 스케일, 각도, 원점 포함)
- Layers 및 Linetypes

### DXF 내보내기

모든 엔티티 유형이 포함됩니다:

- Lines, Circles, Arcs, Ellipses, Polylines(`LWPOLYLINE`으로 내보내짐), Splines
- Text
- 치수(linear, aligned, continued, radius, diameter, 각도)
- Leaders(멀티리더)
- Hatches(패턴, 스케일, 각도, 원점 포함)
- Layers 및 Linetypes

파일은 AC1032 DXF로 작성되므로, KulmanLab에서 내보낸 도면은 맨 형상으로 도착하지 않고 다른 DXF 지원 도구에서도 주석이 온전한 상태로 열립니다.

받는 쪽 응용 프로그램이 그것을 어떻게 처리하는지는 여전히 제각각입니다 — DXF 지원 범위는 도구마다 다르고, 오래된 도구는 새 도구가 읽는 엔티티를 무시할 수 있습니다. 도면이 어디서나 똑같이 보여야 한다면 [Print Manager](../print-manager/)으로 PDF나 이미지로 담는 편이 낫습니다.

## 내보낸 파일 이름

다운로드된 파일은 현재 도면 파일의 이름을 따서 명명됩니다(예: `myplan.json`). 확장자는 선택한 형식에 맞게 변경됩니다. 한 번도 이름을 지정하지 않은 도면은 `drawing.dxf` 또는 `drawing.json`으로 내보내집니다.

## Export Manager와 Print Manager의 차이

| 기능 | Export Manager | Print Manager |
|------|-----------------|-----------------|
| 출력 | 벡터 소스 파일(.dxf / .json) | 래스터 이미지(.png / .jpeg / .webp / .pdf) |
| 다른 도구에서 편집 가능 | 예(DXF) | 아니오 |
| Layers 및 Linetypes 보존 | 예 | 아니오(평면으로 렌더링) |
| 치수 및 지시선 캡처 | 예 | 예 |

편집 가능한 파일이 필요할 때는 **Export Manager**를 사용하세요. 시각적 스냅샷이 필요할 때는 [Print Manager](../print-manager/)를 사용하세요.

## 관련 명령어

- [Import](../import/) — DXF 또는 JSON 파일 열기
- [Print Manager](../print-manager/) — 캔버스를 PNG, JPEG, WebP, 또는 PDF 이미지로 내보내기
- [File Manager](../file-manager/) — 브라우저 저장소에 저장된 도면 탐색
