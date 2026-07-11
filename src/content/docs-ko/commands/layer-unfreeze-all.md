---
title: LayerUnfreezeAll — KulmanLab CAD에서 모든 레이어 동결 해제
description: LayerUnfreezeAll 명령어는 도면의 모든 레이어에서 동결 플래그를 한 번에 지웁니다.
keywords: [레이어 동결 해제, 모든 레이어 동결 해제 CAD, kulmanlab 레이어 관리]
group: layer
order: 4
---

# LayerUnfreezeAll

`LayerUnfreezeAll` 명령어는 도면의 **모든 레이어**에서 동결 플래그를 즉시 지웁니다. 선택 또는 확인이 필요 없습니다 — 한 단계로 실행되고 완료됩니다.

## 사용 방법

터미널에 `LayerUnfreezeAll`을 입력하거나 **LayerUnfreezeAll** 도구 모음 버튼(태양 아이콘)을 클릭합니다. 모든 동결된 레이어가 즉시 표시됩니다.

## 사용 시기

일반적으로 [LayerIsolate](../layer-isolate/) 후 모든 레이어를 정상적인 표시 상태로 복원할 때 사용합니다.

## 동작 세부 정보

- 현재 상태에 관계없이 모든 레이어에 적용됩니다.
- 잠금 또는 플롯 플래그에는 영향을 주지 않습니다 — 동결 플래그만 변경됩니다.
- 명령어가 프롬프트 없이 즉시 완료됩니다.
