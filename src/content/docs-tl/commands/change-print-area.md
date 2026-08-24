---
title: ChangePrintArea Command — I-crop ang export ng Print Manager sa isang rektanggulo
description: Ang ChangePrintArea command ay pumipili ng dalawang magkabilang sulok sa canvas para itakda ang rehiyong ine-export ng Print Manager. Sinusuportahan ang tinipang X,Y na koordinado at snapping, at hiwalay na naaalala ang area para sa Model space at para sa bawat layout.
keywords: [print area CAD, i-crop ang CAD export, change print area command, print manager crop, export region CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Itinatakda ng `ChangePrintArea` command ang rektanggulong rehiyon na ine-export ng [Print Manager](../print-manager/). Tumatakbo ito sa hubad na canvas habang nakatago ang Print Manager at kumukuha ng dalawang magkabilang sulok — ang parehong dalawang click ng [Rectangle](../rectangle/), kaya pareho ang kilos ng tinipang koordinado at snapping.

## Pagpili ng area

1. I-type ang `ChangePrintArea` sa terminal, o i-click ang **Change Area** sa sidebar ng Print Manager. Magtatago ang Print Manager at magiging interactive ang canvas.
2. **I-click ang unang sulok**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong koordinado.
3. **I-click ang kabilang sulok**, o i-type muli ang `X,Y`.

Muling bubukas ang Print Manager na nasa preview ang bagong area, at magre-resize ang preview sa eksaktong aspect ratio nito.

Sumasanib ang mga sulok sa grips at intersections tulad ng anumang ibang pagpili ng punto, kaya maaari kang mag-crop ayon sa nakaguhit na geometry sa halip na sa tantiya. Hindi mahalaga ang pagkakasunod-sunod ng dalawang sulok: pareho ang rektanggulong nabubuo ng magkabilang sulok.

Pindutin ang `Escape` para kanselahin. Walang naisusulat, kaya muling bubukas ang Print Manager sa area na mayroon na ito.

## Saan naaalala ang area

Nakaimbak ang pinili kada konteksto, hindi pangkalahatan:

| Konteksto | Slot |
|---|---|
| Model space | Isang ibinabahaging slot |
| Bawat layout | Sariling slot, hiwalay na iniingatan |

Ang muling pagbubukas ng Print Manager sa parehong layout — o sa Model — ay ibinabalik ang huling crop ng kontekstong iyon sa halip na i-reset ito, at ang paglipat-lipat sa mga layout ay hindi ginagalaw ang area ng bawat isa.

Nasa memorya lamang ito. Ang pag-reload ng pahina ay nagbubura sa lahat ng naka-imbak na area, at babalik ang Print Manager sa mga default sa ibaba.

## Default na area

Kung walang naka-imbak para sa kasalukuyang konteksto, bubukas ang Print Manager sa:

| Konteksto | Default |
|---|---|
| Model space | Ang bounding box ng lahat ng entity — ang parehong saklaw na sini-zoom ng [Fit](../fit/) |
| Bawat layout | Ang buong sheet |

## Kaugnay na command

| Command | Ano ang ginagawa |
|---|---|
| [Print Manager](../print-manager/) | Ang export window kung saan nalalapat ang area na ito |
| [Rectangle](../rectangle/) | Ang parehong dalawang-sulok na pagpili, ngunit gumuguhit ng polyline |
| [Fit](../fit/) | Nagsi-zoom sa saklaw na default na ginagamit ng Model space |
