---
title: Import — KulmanLab CAD에서 DXF 또는 JSON 파일 열기
description: Import 명령어를 사용하여 KulmanLab CAD에서 DXF 또는 KulmanLab JSON 파일을 엽니다. 선, 원, 호, 폴리선, 스플라인, 텍스트, 치수, 지시선을 지원합니다.
keywords: [DXF 파일 가져오기, 브라우저에서 DXF 열기, CAD 파일 온라인 가져오기, DXF 파일 열기, DXF 뷰어 브라우저, JSON CAD 가져오기, KulmanLab 가져오기, 무료 CAD DXF 뷰어, 도면 불러오기, DXF to 브라우저]
group: file
order: 1
---

# Import

**Import** 명령어는 로컬 파일 시스템에서 기존 도면을 KulmanLab CAD로 불러옵니다. 표준 **DXF** 형식과 KulmanLab의 자체 **JSON** 형식 모두 지원됩니다.

## 파일 가져오기 방법

1. 화면 상단 파일 패널의 **Import** 도구 모음 버튼(폴더 아이콘)을 클릭합니다.
2. 브라우저의 파일 선택기가 열립니다. 도면 파일로 이동하여 선택합니다.
3. 도면이 즉시 캔버스에 로드됩니다. 뷰포트가 모든 객체에 자동으로 맞춰집니다.

또는 파일을 캔버스에 직접 드래그 앤 드롭할 수 있습니다.

## 지원되는 파일 형식

| 형식 | 확장자 | 사용 시기 |
|------|--------|----------|
| **DXF** | `.dxf` | FreeCAD, LibreCAD 또는 기타 CAD 도구에서의 도면 |
| **JSON** *(기본)* | `.json` | KulmanLab CAD에서 이전에 저장한 도면 — 완전한 충실도 |

## DXF에서 가져오는 내용

KulmanLab은 다음 DXF 객체 유형을 파싱합니다:

| 객체 유형 | DXF 코드 | 비고 |
|----------|----------|------|
| 선 | `LINE` | |
| 원 | `CIRCLE` | |
| 호 | `ARC` | |
| 타원 | `ELLIPSE` | |
| 폴리선 | `LWPOLYLINE` | |
| 스플라인 | `SPLINE` | |
| 텍스트 | `TEXT`, `MTEXT` | |
| 치수 | `DIMENSION` | |
| 다중 지시선 | `MULTILEADER` | |
| Hatch | `HATCH` | 패턴 이름, 스케일, 각도가 읽힙니다; 패턴 라이브러리에 없는 이름은 ANSI31로 대체됩니다. [Hatch](../hatch/) 참조 |

레이어 정의와 선종류 테이블도 DXF 파일에 있으면 가져옵니다.

지원되지 않는 DXF 유형을 사용하는 객체는 자동으로 건너뜁니다 — 나머지 도면은 여전히 로드됩니다.

## 파일 이름 지정 및 저장

가져온 파일은 원래 이름을 그대로 유지합니다. 그 이름이 다른 저장된 도면에서 이미 사용 중이면 Finder/탐색기 스타일의 접미사가 자동으로 붙습니다(`myplan (2)`, `myplan (3)`, …). 이렇게 하면 기존 항목이 절대 덮어쓰이지 않습니다. 나중에 [File Manager](../file-manager/#renaming-a-file)에서 파일 이름을 변경할 수 있습니다.

도면은 가져오기 후 자동으로 브라우저 저장소(IndexedDB)에 저장되므로 [File Manager](../file-manager/) 패널에 나타나고 페이지 새로고침 후에도 유지됩니다.

## 현재 도면에 일어나는 일

가져오기는 현재 캔버스를 대체합니다. 병합이나 추가가 없습니다. 저장되지 않은 변경 사항이 있으면 먼저 현재 도면을 [Export Manager](../export-manager/)하세요.

## 시작 시

KulmanLab CAD는 페이지가 로드될 때 저장소에서 가장 최근에 편집한 파일을 자동으로 다시 엽니다. 저장된 파일이 없으면 기본 샘플 도면이 로드됩니다.

## 문제 해결

| 문제 | 가능한 원인 | 해결 방법 |
|------|----------|----------|
| 가져오기 후 캔버스가 비어 있음 | DXF 객체가 지원되지 않는 유형(예: INSERT) 사용 | 객체가 건너뛰어졌습니다 — 터미널에 건너뛴 유형이 개수와 함께 나열됩니다. 예: `Could not read INSERT: 12`. 유효한 도면이 아닌 파일은 다음과 같이 표시됩니다: `Could not read <file>: not a valid drawing file` |
| 가져오기 버튼이 작동하지 않음 | 브라우저가 파일 선택기를 차단함 | 버튼을 한 번 더 클릭하세요; 일부 브라우저는 새로운 사용자 제스처 필요 |
| 치수가 이상하게 보임 | 비표준 치수 기하학을 기록하는 도구의 DXF | 현재 DXF 버전을 사용하여 소스 앱에서 다시 내보내기 |

## 관련 명령어

- [Export Manager](../export-manager/) — 현재 도면을 DXF 또는 JSON으로 다운로드
- [File Manager](../file-manager/) — 브라우저에 저장된 도면 탐색 및 복원
- [New File](../new-file/) — 빈 도면 시작
