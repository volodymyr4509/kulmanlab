---
title: Dimension Continue — řetězení kót z existující základní kóty
description: Příkaz Dimension Continue prodlužuje řetěz kót od druhé rozměrové čáry naposledy umístěné kóty. Automaticky dědí úhel, odsazení, velikost šipky a výšku textu základní kóty. Funguje s lineárními i zarovnanými základnami.
keywords: [CAD navazující kóta, dimcontinue, řetězení kót CAD, základní kóta, série navazujících kót, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Příkaz `dimcontinue` řetězí nové kóty od **druhé rozměrové čáry** existující kóty. Každý nový segment se umístí podél stejné měřicí osy a se stejným odsazením kótovací čáry jako základ. Všechny vlastnosti stylu — velikost šipky, výška textu, délky rozměrových čar — se ze základu zkopírují automaticky.

## Jak vypadají zřetězené kóty

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (základ   p3           p4
           ext2 → nový začátek)
```

Každý obdélník je samostatný objekt `DIMENSION`. Sdílejí stejnou polohu kótovací čáry a směr měření.

## Zahájení řetězu

1. Napište `dimcontinue` do terminálu nebo klikněte na tlačítko **Dimension Continue** v panelu nástrojů.
2. **Pokud byla právě umístěna kóta** — příkaz ji automaticky převezme jako základ (kliknutí není potřeba).
3. **Pokud žádná nedávná kóta neexistuje** — klikněte na libovolnou existující kótu a použijte ji jako základ.
4. **Klikněte na počátek další rozměrové čáry** — při pohybu kurzoru náhled ukazuje novou kótu. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
5. Dalším klikáním (nebo psaním) řetěz prodlužujete. Každá umístěná kóta se automaticky stane novým základem.
6. Řetěz dokončíte stisknutím **Enter**, **Space** nebo **Escape**.

## Co se dědí ze základní kóty

| Vlastnost | Dědí se ze základu |
|-----------|--------------------|
| Směr / úhel měření | Ano — zamčeno pro celý řetěz |
| Odsazení kótovací čáry (vzdálenost od měřených bodů) | Ano |
| Velikost šipky | Ano |
| Výška textu | Ano |
| Odsazení a přesah rozměrových čar | Ano |
| Zarovnání textu | Ano |
| Název stylu | Ano |
| Barva, hladina | Nedědí se — použije se aktuální hladina |

## Zamčení směru měření

Směr měření řetězu je **pevně dán úhlem základní kóty**:

- Lineární základ (H) → všechna pokračování měří vodorovnou vzdálenost (Δ X).
- Lineární základ (V) → všechna pokračování měří svislou vzdálenost (Δ Y).
- Zarovnaný základ v libovolném úhlu → všechna pokračování měří podél téhož úhlu.

Uprostřed řetězu směr změnit nelze. Chcete-li kótovat v jiném směru, zahajte novou [Dimension Linear](../dim-linear/) nebo [Dimension Aligned](../dim-aligned/).

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí zadanou souřadnici, nebo dokončí řetěz, pokud není rozepsané žádné zadání |
| `Space` / `Escape` | Dokončí řetěz |

## Dimension Continue vs nový začátek

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Výchozí bod | Pevně v ext2 posledního základu | Klik kamkoli |
| Úhel | Zamčen k základu | Volný |
| Odsazení | Zděděno ze základu | Nastaveno kurzorem nebo zadáním |
| Styl | Zděděn ze základu | Aktuální styl |
| Nejvhodnější pro | Kumulativní měření podél řady | První kótu nebo změnu směru |

## Úprava popisků po umístění — jednoduchý režim

**Dvojitým kliknutím** na libovolnou kótu v řetězu otevřete textový editor v **jednoduchém** režimu. Každý segment je nezávislý a lze jej upravovat samostatně.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Font / Height | Použijí se na **celý** popisek najednou |
| Formátování jednotlivých znaků | Nepodporováno |
| `Enter` | Potvrdí hodnotu a zavře editor |
| Víceřádkový text | Nepodporováno |

Úplný přehled najdete v [Textový editor — jednoduchý režim](../../interface/text-editor/#jednoduchý-režim).

## DXF — objekty DIMENSION

Každý segment řetězu se v souboru DXF ukládá jako samostatný objekt `DIMENSION`. V souboru nejsou propojeny — sdílejí vlastnosti proto, že vznikly ze stejného základu, ale každý lze po umístění upravovat jednotlivě.
