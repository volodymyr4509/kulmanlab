---
title: "Coördinaatinvoer — exacte, relatieve en polaire punten typen"
description: "Waar een opdracht om een punt vraagt, typt u het in plaats van te klikken: X,Y voor een exacte positie, @X,Y om vanaf het laatste punt te meten en afstand<hoek voor een polair punt. De knop Rel laat elk getypt punt relatief beginnen."
keywords: ["coördinaatinvoer CAD", "relatieve coördinaten CAD", "polaire coördinaten CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Coördinaatinvoer

Waar een opdracht om een punt vraagt — het begin van een [Line](../../commands/line/), een hoek van een [Rectangle](../../commands/rectangle/), het basispunt van een [Move](../../commands/move/) of een grip die u sleept — kunt u het typen in plaats van klikken. Begin een getal te typen en de terminal toont wat u typt; druk op **Enter** of **Space** om het punt te plaatsen.

## Vier manieren om een punt te schrijven

| U typt | Het punt ligt |
|---|---|
| `100,50` | Op X 100, Y 50 |
| `@100,50` | 100 in X en 50 in Y vanaf het laatste punt |
| `100<45` | 100 vanaf de oorsprong, onder 45° |
| `@100<45` | 100 vanaf het laatste punt, onder 45° |

Hoeken zijn in graden, tegen de klok in vanaf de X-as, dus `@50<90` is 50 recht omhoog en `@50<180` is 50 naar links. Beide waarden mogen negatief zijn.

## Het laatste punt

`@` meet vanaf het laatste punt dat in welke opdracht ook is aangeklikt of getypt — de laatste klik van de vorige opdracht telt, en ook een grip die u net hebt gesleept. Is er nog geen laatste punt, dan wordt `@100,50` gelezen als `100,50`. Het laatste punt wordt vergeten als u wisselt tussen modelruimte en een layout, en als een tekening wordt geopend.

## Rel: standaard relatief

De knop **Rel** in de besturingsbalk laat elk getypt punt relatief beginnen: zodra u het eerste cijfer typt, komt er een `@` voor, zodat `100,50` `@100,50` wordt. Druk op **Backspace** boven de `@` om dat ene punt absoluut te maken. Is er nog geen laatste punt, dan wordt geen `@` toegevoegd. Rel staat standaard uit en wordt onthouden met de andere knoppen van de besturingsbalk.

## Toetsen tijdens het typen

| Toets | Effect |
|---|---|
| `0`–`9`, `.`, `-` | Het getal typen; `-` alleen aan het begin |
| `@` | Het punt relatief maken, aan het begin van X |
| `,` of **Space** | X afsluiten en naar Y gaan |
| `<` | X als afstand afsluiten en naar de hoek gaan |
| **Enter** of **Space** | Het punt plaatsen zodra Y een waarde heeft |
| **←** **→** **Home** **End** | De cursor binnen de getypte waarde verplaatsen |
| **Backspace** | Wissen voor de cursor; aan het begin van een lege Y terug naar X |

Een punt dat niet als getallen te lezen is, blijft in de terminal staan zodat u het kunt verbeteren. Elk getypt punt laat een regel in de terminalgeschiedenis achter zoals u het typte — `Ingevoerd: @100<45` — vóór de regel van de opdracht met waar het terechtkwam.

## Getypte punten en hoektracering

Als de cursor aan een straal van hoektracering vastzit, geeft een getypt getal een afstand langs die straal in plaats van een X. Typt u eerst `@`, dan begint een volledig punt, zodat `@100,50` ook op een vastgezette straal werkt.

---

*Gerelateerd: [Afstandsvolging](../distance-tracking/) om een lengte langs een vastgezette richting te typen, en [Vector Pins](../vector-pins/) om vanaf een vastgepind punt te meten.*
