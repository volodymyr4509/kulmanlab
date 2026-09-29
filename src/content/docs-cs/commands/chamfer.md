---
title: Příkaz Chamfer — zkosení rohu mezi dvěma úsečkami
description: Příkaz Chamfer spojí dva objekty Line nebo Polyline přímým šikmým řezem. Zadáte dvě vzdálenosti — jednu podél každého objektu — a příkaz oba ořízne k těmto bodům a vloží spojovací úsečku.
keywords: [CAD příkaz chamfer, zkosení úsečky CAD, šikmé oříznutí rohu, zkosení hrany CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Příkaz `chamfer` vytvoří přímý šikmý roh mezi dvěma objekty [Line](../line/) nebo [Polyline](../polyline/). Zadáte, jak daleko zpět se má podél každého objektu řezat (d1 a d2), a příkaz oba objekty ořízne k těmto bodům a vloží mezi ně spojovací úsečku.

Shodné vzdálenosti vytvoří souměrný řez pod 45°; různé vzdálenosti vytvoří nesouměrné zkosení.

Chamfer funguje na objektech **Line a Polyline**.

## Použití chamfer

1. Napište `chamfer` do terminálu nebo klikněte na tlačítko **Chamfer** v panelu nástrojů.
2. **Napište první vzdálenost zkosení** (d1 — vzdálenost podél prvního objektu) a stiskněte **Enter**.
3. **Napište druhou vzdálenost zkosení** (d2 — vzdálenost podél druhého objektu) a stiskněte **Enter**.
4. **Klikněte na první objekt** — část, na kterou kliknete, určuje, která strana od průsečíku se zachová.
5. **Najeďte na druhý objekt** — čárkovaný náhled ukazuje výsledný řez zkosení. Přesuňte kurzor na stranu, kterou chcete zachovat.
6. **Klikněte** pro použití. Oba objekty se ořízou a vloží se zkosená úsečka.

```
  Před (d1=5, d2=8):          Po:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Volba strany

Když se dvě úsečky protínají, zkosení se použije na roh určený polohami kliknutí — zachová se část každého objektu na **stejné straně jako kurzor**.

- Kliknutím poblíž jednoho konce prvního objektu vyberete tuto polovinu.
- Přesuňte kurzor na požadovanou polovinu druhého objektu — čárkovaný náhled se živě aktualizuje.

U Polylinií určuje poloha kliknutí, který **segment** polylinie se účastní, a ořízne se nejbližší vrchol na straně průsečíku. Když oba výběry dopadnou na stejnou polylinii, musí být druhý výběr segment, který je skutečným sousedem prvního — sdílejícím mezi nimi rohový vrchol — jinak se výběr odmítne; dva nesousedící segmenty nemají žádný společný roh, který by mohl zkosení zkosit.

**Obloukový segment** polylinie se pro zkosení nikdy nevybírá — počítají se jen přímé segmenty, takže při najetí poblíž obloukové části se přejde na nejbližší přímý segment.

## Co příkaz vytváří

- Koncový bod prvního objektu (nebo vrchol polylinie) nejblíže průsečíku se přesune do bodu **T1**, který leží ve vzdálenosti d1 podél prvního objektu od průsečíku.
- Koncový bod druhého objektu (nebo vrchol polylinie) nejblíže průsečíku se přesune do bodu **T2**, který leží ve vzdálenosti d2 podél druhého objektu od průsečíku.
- Vloží se nový objekt Line z **T1** do **T2**.

Vložená úsečka zdědí aktuální nastavení tloušťky čáry, barvy, hladiny a typu čáry.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k aktuální hodnotě vzdálenosti |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí zadanou vzdálenost a pokračuje |
| `Escape` | Zruší a resetuje |

## Podporované objekty

| Objekt | Podporováno |
|--------|-------------|
| Line | Ano |
| Polyline / Rectangle | Ano |
| Arc, Circle, Ellipse | Ne |
| Text, Spline, Dimension, Leader | Ne |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Typ rohu | Přímý řez | Zaoblený oblouk |
| Vstup | Dvě vzdálenosti (d1, d2) | Jeden poloměr |
| Vložený objekt | Line | Arc |
| Podporované objekty | Úsečky a Polyline (pouze přímé segmenty) | Úsečky, oblouky a Polyline (přímé i obloukové segmenty) |
