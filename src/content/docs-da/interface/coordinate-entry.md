---
title: "Koordinatindtastning — skriv præcise, relative og polære punkter"
description: "Hvor en kommando beder om et punkt, kan du skrive det i stedet for at klikke: X,Y for en præcis position, @X,Y for at måle fra det sidste punkt og afstand<vinkel for et polært punkt. Knappen Rel lader hvert indtastet punkt starte som relativt."
keywords: ["koordinatindtastning CAD", "relative koordinater CAD", "polære koordinater CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Koordinatindtastning

Hvor en kommando beder om et punkt — starten på en [Line](../../commands/line/), et hjørne af en [Rectangle](../../commands/rectangle/), basispunktet for en [Move](../../commands/move/) eller et greb, du trækker — kan du skrive det i stedet for at klikke. Begynd at skrive et tal, så viser terminalen, hvad du skriver; tryk **Enter** eller **Space** for at placere punktet.

## Fire måder at skrive et punkt på

| Du skriver | Punktet ligger |
|---|---|
| `100,50` | Ved X 100, Y 50 |
| `@100,50` | 100 i X og 50 i Y fra det sidste punkt |
| `100<45` | 100 fra origo, i 45° |
| `@100<45` | 100 fra det sidste punkt, i 45° |

Vinkler er i grader, mod uret fra X-aksen, så `@50<90` er 50 lige op og `@50<180` 50 til venstre. Begge værdier må være negative.

## Det sidste punkt

`@` måler fra det sidste punkt, der er klikket eller skrevet i en hvilken som helst kommando — den forrige kommandos sidste klik tæller, og det samme gør et greb, du lige har trukket. Er der endnu intet sidste punkt, læses `@100,50` som `100,50`. Det sidste punkt glemmes, når du skifter mellem modelrum og layout, og når en tegning åbnes.

## Rel: relativt som standard

Knappen **Rel** i kontrollinjen lader hvert indtastet punkt starte som relativt: så snart du skriver det første ciffer, sættes et `@` foran, så `100,50` bliver til `@100,50`. Tryk **Backspace** over `@` for at gøre netop det punkt absolut. Er der endnu intet sidste punkt, tilføjes intet `@`. Rel er slået fra som standard og huskes sammen med kontrollinjens øvrige knapper.

## Taster mens du skriver

| Tast | Virkning |
|---|---|
| `0`–`9`, `.`, `-` | Skriv tallet; `-` kun i starten |
| `@` | Gør punktet relativt, i starten af X |
| `,` eller **Space** | Afslut X og gå til Y |
| `<` | Afslut X som afstand og gå til dens vinkel |
| **Enter** eller **Space** | Placér punktet, når Y har en værdi |
| **←** **→** **Home** **End** | Flyt markøren i den værdi, du skriver |
| **Backspace** | Slet før markøren; i starten af et tomt Y, gå tilbage til X |

Et punkt, der ikke kan læses som tal, bliver stående i terminalen, så du kan rette det. Hvert indtastet punkt efterlader en linje i terminalhistorikken, som du skrev det — `Indtastet @100<45` — før kommandoens linje med, hvor det landede.

## Indtastede punkter og vinkelsporing

Når markøren er låst til en vinkelsporingsstråle, giver et indtastet tal en afstand langs strålen i stedet for et X. Skriver du `@` først, starter et fuldt punkt, så `@100,50` virker også på en låst stråle.

---

*Relateret: [Afstandssporing](../distance-tracking/) til at skrive en længde langs en låst retning, og [Vector Pins](../vector-pins/) til at måle fra et fastgjort punkt.*
