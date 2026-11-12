---
title: "Koordinatinndata — skriv eksakte, relative og polare punkter"
description: "Der en kommando ber om et punkt, kan du skrive det i stedet for å klikke: X,Y for en eksakt posisjon, @X,Y for å måle fra siste punkt og avstand<vinkel for et polart punkt. Bryteren Rel lar hvert inntastet punkt starte som relativt."
keywords: ["koordinatinndata CAD", "relative koordinater CAD", "polare koordinater CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Koordinatinndata

Der en kommando ber om et punkt — starten på en [Line](../../commands/line/), et hjørne av en [Rectangle](../../commands/rectangle/), basispunktet for en [Move](../../commands/move/) eller et grep du drar — kan du skrive det i stedet for å klikke. Begynn å skrive et tall, så viser terminalen det du skriver; trykk **Enter** eller **Space** for å plassere punktet.

## Fire måter å skrive et punkt på

| Du skriver | Punktet ligger |
|---|---|
| `100,50` | Ved X 100, Y 50 |
| `@100,50` | 100 i X og 50 i Y fra siste punkt |
| `100<45` | 100 fra origo, i 45° |
| `@100<45` | 100 fra siste punkt, i 45° |

Vinkler er i grader, mot klokken fra X-aksen, så `@50<90` er 50 rett opp og `@50<180` er 50 mot venstre. Begge verdiene kan være negative.

## Siste punkt

`@` måler fra det siste punktet som ble klikket eller skrevet i en hvilken som helst kommando — forrige kommandos siste klikk teller, og det samme gjør et grep du nettopp dro. Finnes det ikke noe siste punkt ennå, leses `@100,50` som `100,50`. Siste punkt glemmes når du bytter mellom modellrom og layout, og når en tegning åpnes.

## Rel: relativt som standard

Bryteren **Rel** i kontrollinjen lar hvert inntastet punkt starte som relativt: så snart du skriver første siffer, settes en `@` foran, så `100,50` blir `@100,50`. Trykk **Backspace** over `@` for å gjøre akkurat det punktet absolutt. Finnes det ikke noe siste punkt ennå, legges ingen `@` til. Rel er av som standard og huskes sammen med kontrollinjens andre brytere.

## Taster mens du skriver

| Tast | Virkning |
|---|---|
| `0`–`9`, `.`, `-` | Skriv tallet; `-` bare i starten |
| `@` | Gjør punktet relativt, i starten av X |
| `,` eller **Space** | Avslutt X og gå til Y |
| `<` | Avslutt X som avstand og gå til vinkelen |
| **Enter** eller **Space** | Plasser punktet når Y har en verdi |
| **←** **→** **Home** **End** | Flytt markøren i verdien du skriver |
| **Backspace** | Slett foran markøren; i starten av en tom Y, gå tilbake til X |

Et punkt som ikke kan leses som tall, blir stående i terminalen så du kan rette det. Hvert inntastet punkt legger igjen en linje i terminalhistorikken slik du skrev det — `Skrevet inn @100<45` — foran kommandoens linje med hvor det havnet.

## Inntastede punkter og vinkelsporing

Når markøren er låst til en vinkelsporingsstråle, gir et inntastet tall en avstand langs strålen i stedet for en X. Skriver du `@` først, starter et fullt punkt, så `@100,50` fungerer også på en låst stråle.

---

*Relatert: [Avstandssporing](../distance-tracking/) for å skrive en lengde langs en låst retning, og [Vector Pins](../vector-pins/) for å måle fra et festet punkt.*
