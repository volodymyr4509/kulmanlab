---
title: Export Manager — 도면을 DXF 또는 JSON으로 다운로드
description: Export Manager는 현재 도면을 DXF 또는 JSON(기본) 파일로 다운로드합니다. 각 형식은 나란히 배치되어 정확히 어떤 엔티티 유형을 포함하는지 나열하므로, 다운로드하기 전에 DXF가 무엇을 제외하는지 확인할 수 있습니다 — 현재는 hatch, 치수, 지시선, 텍스트입니다.
keywords: [CAD DXF 내보내기, CAD 파일 내보내기, 브라우저에서 DXF 다운로드, DXF 온라인 저장, JSON CAD 내보내기, KulmanLab 내보내기, CAD 파일 다운로드, DXF 내보내기, 도면을 파일로 저장, DXF 다운로드]
group: file
order: 6
---

# Export Manager

`exportmanager` 명령은 현재 도면을 파일 시스템에 다운로드합니다. 나란히 배치된 카드 형태로 두 가지 형식을 사용할 수 있습니다 — 다른 CAD 도구와의 호환성을 위한 **DXF**와 KulmanLab CAD 내에서 완전한 충실도로 저장하기 위한 **JSON**입니다. 각 카드는 해당 형식이 정확히 어떤 엔티티 유형을 포함하는지 나열합니다.

## 내보내는 방법

1. 파일 패널에서 툴바의 **Export** 버튼(다운로드 아이콘)을 클릭하거나 터미널에 `exportmanager`를 입력합니다.
2. **Export Manager** 팝업이 열리며 JSON과 DXF 카드가 나란히 표시되고, 각 카드는 무엇이 내보내지는지(DXF의 경우 무엇이 제외되는지)를 나열합니다.
3. 카드를 클릭하여 형식을 선택합니다 — **JSON** 또는 **DXF**.
4. **Export \<FORMAT\>** 버튼을 클릭합니다. 파일이 기본 다운로드 폴더로 자동으로 다운로드됩니다.

내보내지 않고 팝업을 닫으려면 `Escape`를 누르세요.

## 형식 선택

| 형식 | 확장자 | 최적 용도 | 제한 사항 |
|------|--------|----------|-----------|
| **JSON**(기본) | `.json` | KulmanLab CAD에서 다시 열기 위한 작업 저장 | 다른 CAD 도구와 호환되지 않음 |
| **DXF** | `.dxf` | FreeCAD, LibreCAD 등과 공유 | hatch, 치수, 지시선, 텍스트는 내보내지지 않음 |

**JSON을 사용해야 할 때:** 작업의 완전한 사본을 저장하고 싶을 때는 언제나. JSON은 KulmanLab의 기본 형식이며 치수, 지시선, hatch, 모든 레이어 데이터를 포함하여 모든 엔티티를 정확하게 보존합니다.

**DXF를 사용해야 할 때:** 다른 CAD 애플리케이션을 사용하는 사람에게 도면을 전달해야 할 때. 내보낸 파일은 AC1032 DXF 형식을 사용하며 대부분의 DXF 호환 도구에서 열 수 있습니다.

## 형식별로 내보내지는 항목

### JSON 내보내기

모든 엔티티 유형이 포함됩니다:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- 치수(linear, aligned, continued, radius, diameter)
- Leaders(멀티리더)
- Hatches(패턴, 스케일, 각도, 원점 포함)
- Layers 및 Linetypes

### DXF 내보내기

기하학적 엔티티만 포함됩니다:

- Lines, Circles, Arcs, Ellipses, Polylines(`LWPOLYLINE`으로 내보내짐), Splines
- Layers 및 Linetypes

**DXF로 내보내지지 않음:** hatch, 치수, 지시선, 텍스트. 치수와 지시선은 표준 DXF에서 충실하게 표현할 수 없는 KulmanLab 전용 데이터 구조를 사용합니다. hatch는 DXF에서 가져오기는 되지만 DXF로 내보내기는 아직 전혀 지원되지 않습니다. 텍스트 내보내기 역시 아직 구현되지 않았습니다. 도면에 이들 중 하나라도 있다면, 이를 보존하기 위해 JSON 또는 [Print Manager](../print-manager/)를 사용하세요.

## 내보낸 파일 이름

다운로드된 파일은 현재 도면 파일의 이름을 따서 명명됩니다(예: `myplan.json`). 확장자는 선택한 형식에 맞게 변경됩니다.

## Export Manager와 Print Manager의 차이

| 기능 | Export Manager | Print Manager |
|------|-----------------|-----------------|
| 출력 | 벡터 소스 파일(.dxf / .json) | 래스터 이미지(.png / .jpeg / .webp / .pdf) |
| 다른 도구에서 편집 가능 | 예(DXF) | 아니오 |
| Layers 및 Linetypes 보존 | 예 | 아니오(평면으로 렌더링) |
| 치수 및 지시선 캡처 | JSON만 | 예 |

편집 가능한 파일이 필요할 때는 **Export Manager**를 사용하세요. 시각적 스냅샷이 필요할 때는 [Print Manager](../print-manager/)를 사용하세요.

## 관련 명령어

- [Import](../import/) — DXF 또는 JSON 파일 열기
- [Print Manager](../print-manager/) — 캔버스를 PNG, JPEG, WebP, 또는 PDF 이미지로 내보내기
- [File Manager](../file-manager/) — 브라우저 저장소에 저장된 도면 탐색
