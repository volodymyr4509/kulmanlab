---
title: Příkaz Dimension Linear — vodorovné a svislé kóty
description: Příkaz Dimension Linear měří vodorovnou nebo svislou vzdálenost mezi dvěma body. Kótovací čára je vždy zarovnaná s osou — stisknutím H nebo V zamknete orientaci, nebo ji nechte určit automaticky polohou kurzoru. Plná výměna dat s DXF jako objekty DIMENSION.
keywords: [CAD lineární kóta, vodorovná kóta CAD, svislá kóta CAD, dimlinear, zámek orientace H V, odsazení kóty, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Příkaz `dimlinear` umístí vodorovnou nebo svislou kótu mezi dva počátky rozměrových čar. Kótovací čára vede vždy dokonale vodorovně nebo dokonale svisle — nelze ji umístit pod libovolným úhlem. Potřebujete-li kótu rovnoběžnou s šikmou úsečkou, použijte [Dimension Aligned](../dim-aligned/).

## Anatomie lineární kóty

```
  |←————— 5.00 —————→|
  |                   |
  ●  (rozm. čára 1)   ●  (rozm. čára 2)
  p1                  p2
```

- **Rozměrové čáry** — spouštějí se z každého měřeného bodu kolmo na kótovací čáru.
- **Kótovací čára** — vodorovná (měří vzdálenost X) nebo svislá (měří vzdálenost Y).
- **Hodnota** — promítnutá vzdálenost podél zvolené osy, nikoli skutečná vzdálenost mezi body.

## Umístění lineární kóty

1. Napište `dimlinear` do terminálu nebo klikněte na tlačítko **Dimension Linear** v panelu nástrojů.
2. **Klikněte na počátek první rozměrové čáry** (p1), nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na počátek druhé rozměrové čáry** (p2). Zadávání souřadnic funguje i zde.
4. **Přesuňte kurzor** a umístěte kótovací čáru. Orientace se určí automaticky podle polohy kurzoru.
5. **Klikněte** pro umístění, nebo napište vzdálenost odsazení a stiskněte **Enter** pro přesné umístění.

## Automatické určení orientace

Když není orientace vynucena, příkaz čte polohu kurzoru vzhledem ke dvěma měřeným bodům:

| Poloha kurzoru | Zjištěná orientace | Co se měří |
|----------------|-------------------|------------|
| Nad nebo pod body | Vodorovná | Δ X mezi p1 a p2 |
| Vlevo nebo vpravo od bodů | Svislá | Δ Y mezi p1 a p2 |

Stisknutím **H** zamknete vodorovnou nebo **V** svislou orientaci kdykoli během fáze umístění. Po zamknutí se orientace při pohybu kurzoru nemění.

## Zadání vzdálenosti odsazení

Napište během umísťování číslo, abyste kótovací čáru zafixovali v přesné vzdálenosti od měřených bodů:

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici ke vzdálenosti odsazení |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Umístí kótu na zadanou vzdálenost |

Strana kurzoru (nad/pod pro vodorovnou, vlevo/vpravo pro svislou) určuje znaménko — kótovací čára se objeví na té straně, na které se kurzor právě nachází.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X (fáze p1/p2), nebo vzdálenosti odsazení (fáze umístění) |
| `,` | Zamkne X a přejde na zadávání Y (fáze p1/p2) |
| `H` | Zamkne vodorovnou orientaci (pouze fáze umístění) |
| `V` | Zamkne svislou orientaci (pouze fáze umístění) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Potvrdí zadanou souřadnici nebo odsazení |
| `Escape` | Zruší |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Osa | Vždy H nebo V | Rovnoběžná s měřenou spojnicí |
| Měří | Pouze složku X nebo Y | Skutečnou euklidovskou vzdálenost |
| Klávesy H/V | Ano — zamykají orientaci | Ne — vždy sleduje p1→p2 |
| Nejvhodnější pro | Ortogonální rozvržení, půdorysy | Šikmé prvky, šikmé řezy |

## Úprava popisku — jednoduchý režim

**Dvojitým kliknutím** na umístěnou lineární kótu otevřete textový editor v **jednoduchém** režimu. Editor je předvyplněn aktuální vykreslenou hodnotou, takže kurzor umístíte a hodnotu upravíte přímo.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Font / Height | Použijí se na **celý** popisek najednou |
| Formátování jednotlivých znaků | Nepodporováno |
| `Enter` | Potvrdí hodnotu a zavře editor |
| Víceřádkový text | Nepodporováno |

Úplný přehled najdete v [Textový editor — jednoduchý režim](../../interface/text-editor/#jednoduchý-režim).

## Řetězení kót

Chcete-li přidat další kóty navazující od poslední rozměrové čáry, použijte [Dimension Continue](../dim-continue/) ihned po umístění této.

## DXF — objekt DIMENSION

Lineární kóty se ukládají jako objekty `DIMENSION` s `rotationDeg` nastaveným na `0` (vodorovná) nebo `90` (svislá). Počátky rozměrových čar, poloha kótovací čáry, poloha textu, naměřená hodnota, styl šipek, výška textu i všechny příznaky zobrazení se přenášejí beze ztráty.
