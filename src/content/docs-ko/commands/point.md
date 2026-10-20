---
title: "Point 명령 — KulmanLab CAD에서 도면에 점 배치하기"
description: "Point 명령은 클릭, 입력한 X,Y, 또는 고정한 방향을 따른 거리마다 점을 배치하며 Enter, Space 또는 Escape를 누를 때까지 계속됩니다. 점은 작은 점으로 그려지고, 현재 레이어와 색을 가지며, DXF POINT 객체로 오갑니다."
keywords: ["CAD 점 명령", "점 배치 CAD", "DXF POINT 객체", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

`point` 명령은 지정할 때마다 점을 배치하며 Enter, Space 또는 Escape를 누를 때까지 활성 상태로 남습니다. 점은 크기가 없는 위치이며 작은 점으로 그려지고 현재 레이어와 색을 가집니다. `POINT` 객체로 저장됩니다.

## 점 배치하기

1. 터미널에 `point`를 입력하거나 Shapes 패널의 마지막 버튼인 **Point**를 클릭합니다.
2. 점을 놓을 곳을 **클릭**하거나 `X,Y`를 입력하고 **Enter**를 눌러 정확한 위치에 놓습니다. 지정할 때마다 점이 놓이고 터미널에 좌표가 기록되며, 명령은 다음 점을 위해 활성 상태로 남습니다.
3. 또는 [벡터 핀](../../interface/vector-pins/)에서 방향을 고정하고 거리를 입력하면, 그 방향을 따라 정확히 그만큼 떨어진 곳에 점이 놓입니다.
4. 끝내려면 **Enter**, **Space** 또는 **Escape**를 누릅니다. Enter와 Space는 아무것도 입력하지 않을 때만 끝냅니다.

## 점의 모양

점은 모든 줌 수준에서 반지름 1.5 px의 점으로 그려지므로 축소해도 보이고 확대해도 커지지 않습니다. 도면의 점 스타일(`$PDMODE`와 `$PDSIZE`)은 아직 읽지 않으므로 DXF가 무엇이라 하든 모든 점은 작은 점입니다.

## 점 편집

선택한 점에는 이동용 그립이 하나 있습니다. 상자 선택은 점이 상자 안에 있으면 어느 방향으로 드래그해도 그 점을 선택합니다.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/)는 다른 객체와 똑같이 점에도 동작합니다. 속성 창에는 Position X와 Position Y, 그리고 색과 레이어가 표시됩니다.

## DXF — POINT 객체

점은 위치, 색, 레이어(그룹 코드 10/20, 62, 8)를 가진 `POINT` 객체로 DXF에 읽고 쓰이며, 저장된 JSON으로도 오갑니다. 예전에는 가져올 때 건너뛰었습니다. [Export Manager](../export-manager/)는 Points를 별도의 행으로 보여 주므로 내보내기에서 제외할 수 있습니다.

---

*관련: 같은 좌표 입력은 [Line](../line/), 방향을 따라 정해진 거리에 점을 놓으려면 [Vector Pins](../../interface/vector-pins/)를 참조하세요.*
