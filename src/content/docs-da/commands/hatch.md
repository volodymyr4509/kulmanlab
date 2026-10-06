---
title: Hatch-kommando — Udfyld et område med et mønster
description: Hatch-kommandoen udfylder området omkring et klikket punkt med et mønster — enhver kombination af linjer, buer, ellipser og splines, der lukker sig, omslutter et område, og enhver lukket form indeni efterlades som en ufyldt ø.
keywords: [CAD hatch-kommando, udfyld område CAD, hatch-mønster CAD, ANSI31, SOLID-udfyldning, grænseudfyldning CAD, DXF HATCH-entitet, kulmanlab]
group: shapes
order: 7
---

# Hatch

`Skravering`-kommandoen udfylder området omkring et klikket punkt med et mønster. Grænsen tegnes ikke først — den kommer fra det, der allerede er på lærredet, så fire separate [linjer](../line/), der mødes ende til ende, omslutter et område nøjagtigt som en lukket [polylinje](../polyline/) gør, og enhver lukket form indeni området bliver til en ø, som udfyldningen lader være.

## Udfylde et område

1. Skriv `Skravering` i terminalen, eller klik på **Hatch**-værktøjslinjeknappen (mønster-ikonet).
2. **Klik på et punkt** inde i det område, du vil udfylde.
3. Kommandoen forbliver aktiv, så bliv ved med at klikke for at udfylde flere områder — hvert klik opretter sin egen `Hatch`-entitet.
4. Tryk **Enter**, **Space** eller **Escape**, når du er færdig.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   klik inde i den ydre
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   grænse; cirklen efterlades
  └─────────────┘        └─────────────┘   som en ø
```

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Afslut Hatch-kommandoen |
| `Escape` | Afslut Hatch-kommandoen (samme som Enter/Space) |

## Hvad der kan danne en grænse

Enhver kombination af disse entitetstyper kan danne en grænse, i vilkårlig sammensætning, så længe de forbindes ende til ende uden mellemrum:

- [Linje](../line/)
- [Bue](../arc/)
- [Cirkel](../circle/) (sin egen lukkede grænse)
- [Ellipse](../ellipse/) (lukket, eller en åben elliptisk bue som del af en større løkke)
- [Polylinje](../polyline/) (åben eller lukket) og [Rektangel](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/) — hver sløjfe af en spline, der krydser sig selv, er et eget område

Tekst-, multileader- og målsætningsentiteter behandles aldrig som grænser.

## Øer

Alt, der er fuldstændig lukket inde i det område, du klikkede på — en cirkel, en lukket polylinje, en anden hatchs grænse — bliver til en **ø**: udfyldningen stopper ved dens kant, og øen selv efterlades tom. Placér en lukket form inde i en anden lukket form, og udfyldningen skifter, hul i en udfyldning i et hul, efter samme inde/ude-regel på hvert niveau.

## Når et klik mislykkes

Hvis punktet, du klikkede på, ikke er omsluttet, eller grænsen har et hul, forklarer terminalen hvorfor i stedet for stiltiende at gøre ingenting:

| Besked | Betydning |
|--------|-----------|
| "no boundary found" | Der blev ikke ramt noget i nogen retning fra det klikkede punkt — der er slet ingen grænse i nærheden |
| "point is not enclosed" | Der findes en grænse i nærheden, men den form, den danner, indeholder ikke det punkt, du klikkede på |
| "boundary is open" | Den nærmeste grænse har et hul et sted — spor den, og tjek at hver sammenføjning er præcis |
| "boundary too complex" | Grænsesløjfen kunne ikke lukkes inden for gennemløbsgrænsen — som regel et virvar af overlappende entiteter |

Kommandoen forbliver aktiv efter et mislykket klik — læs beskeden, ret tegningen eller klik et andet sted, og prøv igen.

## Vælge et mønster

Hver ny hatch starter udfyldt med `ANSI31` (eller hvilket mønster den *sidste* hatch, du redigerede, brugte) — der er ingen mønstervælger, før du tegner. For at bruge et andet mønster:

1. Vælg en eksisterende hatch, og åbn dens **Pattern**-felt i egenskabspanelet — dette åbner mønstervælgeren, et gitter af navngivne swatches grupperet efter, hvor hvert mønster kom fra.
2. Klik på et mønster for at anvende det — udfyldningen opdateres straks.

Det valg bliver også standard for den *næste* hatch, du opretter med `Skravering`-kommandoen, på samme måde som at vælge et lag eller en farve føres videre. Så for at hatche flere nye områder med et bestemt mønster: udfyld ét område, sæt dets mønster én gang, og bliv ved med at hatche — hver udfyldning derefter starter med det mønster allerede anvendt.

Se [Hatch Manager](../hatch-manager/) for at uploade dine egne `.pat`-mønsterfiler og gennemse hele biblioteket.

**SOLID** er en almindelig post i mønsterlisten, ikke et separat afkrydsningsfelt eller en tilstand — vælg den på samme måde, som du ville vælge ANSI31 eller ethvert andet navngivet mønster.

## Egenskaber

| Egenskab | Betydning |
|----------|-----------|
| Pattern | Mønsterets navn, fra det delte mønster-vokabular (se [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Skalerer mønsterlinjernes afstand — større værdier spreder mønsterlinjerne længere fra hinanden |
| Pattern Angle | Roterer mønsteret uafhængigt af grænsen |
| Origin X / Origin Y | Hvor mønsterets egen gentagelse er forankret, i tegningskoordinater |

At flytte, rotere, spejle eller skalere en hatch fører dens mønsterplacering med, så udfyldningen forbliver justeret med grænsen — du behøver ikke at genindstille skalering eller vinkel efter en transformation.

## Grebredigering af grænsen

En valgt hatch griber sin grænse på samme måde, som en polylinje griber sine hjørnepunkter — et greb ved hvert hjørne, hvor to kanter mødes, og et ved midten af hver kant (en lukket løkke som en hatchet cirkel eller ellipse griber i stedet ved sine fire akse-punkter).

| Greb | Hvad det gør |
|------|--------------|
| **Hjørne** | Flytter det hjørne. En lige kant følger præcist; en bue tilpasses igen for fortsat at gå gennem begge naboer; en ellipse- eller spline-kant kan kun lande et sted på sin egen kurve, så hjørnet snapper til det nærmeste punkt på den |
| **Kantmidte — linje-, ellipse- eller spline-kant** | Skubber hele kanten; kanterne på begge sider beskæres eller forlænges for at forblive forbundet til den |
| **Kantmidte — buekant** | **Bøjer** buen gennem markøren i stedet for at skubbe den — begge ender forbliver præcis, hvor de var, og intet andet i grænsen bevæger sig |
| **Centrum** (hele hatchen) | Aktiverer [Move](../move/) for hele hatchen |

En trækvisning viser grænsen som en stiplet kontur i stedet for en solid udfyldning, mens du trækker — den oprindelige udfyldning forbliver synlig nedenunder, indtil du slipper, da en visning kun kan male oven på det, der allerede er der, aldrig fjerne noget fra det.

## DXF — HATCH-entitet

Hatches **importeres** fra `HATCH`-entiteter: KulmanLab læser grænsegeometrien sammen med mønsterets navn, skalering og vinkel (DXF-gruppekoder 70/41/52) — den læser **ikke** mønsterets egne linjedefinitioner, der er indlejret i filen. I stedet slås mønsterets navn op i KulmanLabs eget mønsterbibliotek (indbyggede standarder plus alt, du har uploadet i [Hatch Manager](../hatch-manager/)). Et navn, der ikke findes i dit bibliotek, falder tilbage til ANSI31, så tegningen stadig fremstår hatchet, og en note logges én gang.

Spline-afgrænsede løkker skrevet af andre applikationer (DXF-grænsekant-type 4) læses endnu ikke.

Skraveringer **eksporteres** til DXF som `HATCH`-elementer. Grænseløkkerne følger med mønsternavnet (gruppekode 2), fyldfladeflaget (70) og denne skraverings egen vinkel og skala (52/41) — og modsat importvejen skrives mønstrets opløste linjedefinitioner også inline (78, med 53/43/44/45/46/79/49). Asymmetrien er tilsigtet: KulmanLab kan slå et navn op i sit eget bibliotek, men den modtagende applikation har måske ikke det mønster, så linjerne rejser med.

## Relaterede kommandoer

- [Hatch Manager](../hatch-manager/) — gennemse mønsterbiblioteket, og upload `.pat`-filer
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — fører alle hatchens mønsterplacering med sig
- [Delete](../delete/) — fjerner hatchen uden at påvirke de entiteter, der afgrænsede den
