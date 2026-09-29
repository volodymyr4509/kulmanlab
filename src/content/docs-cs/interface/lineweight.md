---
title: Výběr tloušťky čáry v panelu nástrojů — ovládání šířky tahu v KulmanLab CAD
description: Výběr tloušťky čáry v panelu nástrojů KulmanLab CAD nastavuje šířku tahu použitou na všechny nově nakreslené objekty. Podporuje standardní hodnoty tloušťky čáry DXF od 0,00 mm do 2,11 mm plus režimy ByLayer a Default.
keywords: [CAD tloušťka čáry, šířka tahu, šířka čáry, tloušťka čáry DXF, ByLayer tloušťka čáry, kulmanlab]
group: interface
order: 5
---

# Lineweight

Čip **lineweight** v panelu nástrojů řídí šířku tahu přiřazenou každému novému objektu, který nakreslíte. Kliknutím na něj otevřete rozbalovací výběr.

## Možnosti

| Hodnota | Význam |
|---------|--------|
| **From Layer** | Objekt zdědí tloušťku čáry definovanou na jeho hladině. Skutečná zobrazená šířka závisí na nastavení hladiny. |
| **Default** | Používá výchozí šířku aplikace — vykresluje se jako tenká čára (1 px). V DXF nepřepisuje nastavení hladiny. |
| **0.00 mm – 2.11 mm** | Explicitní pevná šířka. Objekt nese tuto hodnotu bez ohledu na tloušťku čáry své hladiny. |

K dispozici jsou standardní hodnoty tloušťky čáry DXF: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 a 2,11 mm.

## Jak se použije

Vybraná tloušťka čáry se použije na každý objekt vytvořený po změně. Nemění zpětně existující objekty.

Chcete-li změnit tloušťku čáry existujících objektů, vyberte je a upravte pole **Lineweight** v panelu vlastností, nebo použijte [MatchProperties](../../commands/match-properties/) ke zkopírování z jiného objektu.

## Vykreslování

Tloušťky čar se vykreslují v měřítku **3,78 px na mm** (96 dpi). Čára 0,25 mm je na obrazovce široká přibližně 1 px; čára 1,00 mm přibližně 4 px. Velmi tenké hodnoty (0,00 mm a záporné) se vždy vykreslují jako alespoň 0,5 px, aby zůstaly viditelné při jakémkoli zvětšení.

## Kompatibilita s DXF

Hodnoty tloušťky čáry se v záznamech `LWPOLYLINE`, `LINE`, `CIRCLE` a dalších objektů DXF ukládají jako celá čísla v setinách milimetru (např. 25 = 0,25 mm). **From Layer** se ukládá jako `-1` a **Default** jako `-3`, v souladu se specifikací DXF. Soubory se přenášejí beze ztráty v jakékoli aplikaci kompatibilní s DXF.
