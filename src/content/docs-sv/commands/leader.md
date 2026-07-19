---
title: Leader — Rita Multileader-annotationer med pilspets och text
description: "Leader-kommandot ritar en fyrfasig multileader-annotation: pilspets, dogleg-armbåge, textposition och inskriven etikett. Textriktningen justeras automatiskt baserat på dogleg-positionen. Endast import i DXF — leaders skrivs inte vid sparande."
keywords: [CAD leader-kommando, multileader-annotation, leader CAD, pil-etikett-annotation, dogleg leader, textriktning CAD, kulmanlab]
group: markup
order: 1
---

# Leader

`leader`-kommandot ritar en multileader-annotation i fyra steg: en pilspets som berör en detalj, en leader-linje som böjer vid en dogleg, ett textankare och en inskriven etikett. Av alla annotationskommandon är Leader det enda som inkluderar en interaktiv textinmatningsfas med en blinkande markörförhandsvisning.

## Anatomin hos en multileader

```
  ◄── pilspets  (steg 2 — berör detaljen)
      \
       \  leader-linje
        \
         ●──── dogleg (steg 3) ──── textankare (steg 4)
                                    Etikettext  (steg 5)
```

- **Pilspets** — den spetsiga änden placerad vid detaljen som annoteras.
- **Dogleg** — armbågen där leader-linjen böjer mot texten.
- **Textankare** — där etiketten placeras. Texten justeras automatiskt vänster eller höger.

## Rita en leader

1. Skriv `leader` i terminalen eller klicka på **Leader**-knappen i verktygsfältet.
2. **Klicka på pilspetsen**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på dogleg-punkten** — böjen i leadern. Vinkeln låses i 45°-steg; skriv en längd och tryck **Enter** för exakt placering. Eller skriv `X,Y` för att ange en absolut koordinat.
4. **Klicka på textpositionen** — där etiketten ankras. Samma alternativ gäller: klicka, vinkellås + längd, eller `X,Y`.
5. **Skriv etikettexten** — förhandsvisningen på arbetsytan uppdateras live med en blinkande markör. Tryck **Enter** för att placera.

## Koordinatinmatning (alla punktfaser)

I vilket punktvalssteg som helst (spets, dogleg, textposition) kan du skriva en exakt koordinat istället för att klicka:

1. Skriv X-värdet (siffror, `.` eller `-`).
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]` som bekräftar att X är låst.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera punkten.

## Vinkellåsning (steg 3 och 4)

Efter varje placerad punkt fäster kommandot mot 45°-axlar när markören är tillräckligt långt bort. Medan låst:
- Förhandsvisningen fäster mot axeln.
- Skriv en längd och tryck **Enter** för att placera nästa punkt på exakt det avståndet.

Vinkellåsning och koordinatinmatning utesluter varandra — så snart du skriver en siffra utan föregående `,`, tolkar kommandot det som ett avstånd (vinkellås måste vara aktivt). För att i stället ange en absolut koordinat, börja med X-talet följt av ett kommatecken.

## Redigering av textetikett

Medan du skriver etiketten i steg 5 kan du navigera och redigera texten innan du placerar den:

| Tangent | Åtgärd |
|-----|--------|
| Valfritt skrivbart tecken | Infoga vid markörpositionen |
| `←` / `→` | Flytta markören åt vänster eller höger |
| `Backspace` | Ta bort tecknet till vänster om markören |
| `Delete` | Ta bort tecknet till höger om markören |
| `Enter` | Placera leadern |

## Automatisk textriktning

Textjusteringen anpassas efter markörens position i förhållande till dogleg-punkten:

| Markörposition | Textriktning |
|-----------------|---------------|
| Till **höger** om dogleg-punkten | Vänster till höger från textankaret |
| Till **vänster** om dogleg-punkten | Höger till vänster (ankrad på höger sida) |

Ingen manuell justering behövs — flytta markören till den sida där du vill ha etiketten så justeras den korrekt.

## Tangentbordsreferens

**Punktfaser (spets, dogleg, textposition)**

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Börja skriva X-koordinat (sedan `,` för att låsa X och ange Y) |
| `,` | Bekräfta X och gå till Y-inmatning |
| `0`–`9`, `.`, `-` | Bygg upp avstånd vid vinkellås |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inskriven koordinat eller avstånd |

**Textinmatningsfas**

| Tangent | Åtgärd |
|-----|--------|
| Skrivbart tecken | Infoga vid markören |
| `←` / `→` | Flytta markören |
| `Backspace` | Ta bort till vänster |
| `Delete` | Ta bort till höger |
| `Enter` | Placera leadern |

| Tangent | Åtgärd |
|-----|--------|
| `Escape` | Avbryt och återställ till steg 2 |

## Redigera en befintlig leader

**Dubbelklicka** på en placerad multileader för att öppna textredigeraren igen i **rikt** läge. I rikt läge kan du tillämpa fet stil, kursiv och teckenspecifika typsnitts- eller höjdöverskridningar, samt infoga radbrytningar med `Enter`. Tryck **Escape** för att bekräfta och stänga.

Se [Textredigerare — rikt läge](../../interface/text-editor/#rich-mode) för fullständig referens.

## Lägga till och ta bort armar

- För att lägga till en extra pilspetsarm på en befintlig leader: [Leader+](../leader-add/)
- För att ta bort en arm från en leader som har två eller fler: [Leader−](../leader-remove/)

## DXF — endast import

**Leaders är endast för import.** `MLEADER`-entiteter från DXF-filer läses in och visas korrekt, men leaders ritade i redigeraren **skrivs inte** vid sparande av en DXF-fil. Använd leaders för visuell annotation; undvik att förlita dig på dem för rundturs-arbetsflöden.
