---
title: Afstandssporing — Skriv en præcis længde fra et fastgjort punkt
description: Dist-knappen lader den nyeste vektornål fungere som det anker, vinkelsporingen måler fra, så du kan skrive en præcis længde og placere et punkt i nøjagtig afstand og vinkel fra et eksisterende punkt — også formens første punkt.
keywords: [afstandsindtastning CAD, skrive præcis længde CAD, Dist-knap, afstandssporing fra nåle, polær sporing CAD, direkte afstandsindtastning, kulmanlab]
group: interface
order: 3
---

# Afstandssporing

**Afstandssporing** lader dig placere et punkt ved at skrive en præcis længde i stedet for at klikke. Den styres af knappen **Dist** i kontrollinjen, ved siden af [Pins](../vector-pins/) og ANGL, og er **slået til som standard**, hvor indstillingen bevares mellem sessioner.

Det, den tilføjer, er snævert, men nyttigt: den lader den **nyeste vektornål** fungere som det anker, vinkelsporingen måler fra. Uden den kan en kommando kun måle fra et punkt, den allerede selv har indsamlet — hvilket betyder, at formens *første* punkt slet intet har at måle fra.

## De tre knapper arbejder sammen

Afstandssporing står ikke alene. To andre knapper skal være i den rigtige tilstand, før du kan skrive en længde:

| Knap | Rolle |
|------|-------|
| **Pins** | Leverer referencepunktet. Hold markøren over et fangpunkt i 500 ms for at fastgøre det — se [Vector Pins](../vector-pins/). |
| **ANGL** | Leverer vinklen. Afstandssporing bliver først tilgængelig, når markøren er vinkellåst, så ANGL skal være sat til et trin (10°, 20°, 30°, 45°, 90°) og ikke til Off. |
| **Dist** | Tillader, at nålen bruges som anker i stedet for kun kommandoens eget punkt. |

Med Pins og Dist slået til, men ANGL på **Off**, sker der ingenting: der er ingen låst retning at måle en længde langs.

## Hvordan Pins og Dist hænger sammen

Afstandssporing er meningsløs med nålene slået fra, så de to knapper følges ad:

- **Slå Pins til** slår også **Dist til**.
- **Slå Pins fra** slår også **Dist fra**.
- **Slå Dist til** slår **Pins til**, hvis det ikke allerede var.
- **Slå Dist fra** lader **Pins forblive slået til**.

Dist kan altså aldrig være aktiv, mens Pins er inaktiv, men du kan beholde nålesporingen til opretning og slå afstandssporingen fra — praktisk, når du vil have referencelinjer uden at markøren låser til en nål, mens du sigtede efter dit eget seneste punkt.

## Placering af et punkt i præcis afstand

1. Slå **Pins** og **Dist** til, og sæt **ANGL** til et vinkeltrin.
2. Start en kommando, der beder om et punkt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) og så videre.
3. **Fastgør et referencepunkt**: hold markøren over et eksisterende fangpunkt, til markeringen bliver en udfyldt firkant.
4. Før markøren væk fra nålen, cirka i den ønskede vinkel. Når den nærmer sig et af ANGL-trinnene, **låses** retningen — der vises en sporingsindikator fra nålen.
5. **Skriv længden**, og tryk **Enter** eller **Space**. Punktet placeres præcis så langt fra nålen, langs den låste vinkel.

Prompten i terminalen fortæller, hvornår du kan skrive. I låst tilstand lyder den:

```
pick start point or enter length: [ ]
```

og den værdi, du skriver, vises inde i klammerne.

## Hvorfor det første punkt betyder noget

Det er tilfældet, som ellers ville være umuligt. Antag, at en linje skal begynde præcis 250 enheder til højre for et eksisterende hjørne:

1. Start [Line](../../commands/line/).
2. Fastgør det eksisterende hjørne.
3. Bevæg dig til højre, indtil retningen låser ved 0°.
4. Skriv `250`, og tryk **Enter**.

Linjen begynder nu 250 enheder fra hjørnet, uden hjælpegeometri og uden hovedregning. Uden Dist har kommandoen Line endnu ikke indsamlet noget punkt, så der er intet at måle en skrevet længde *fra* — du kunne kun klikke omtrentligt eller trække en hjælpelinje og slette den bagefter.

For det **andet og de følgende** punkter har kommandoen allerede sit eget anker (det foregående punkt), og det bruges først. Nålen tages kun i brug som alternativ, når dit eget anker ikke er låst, så det at fastgøre noget kaprer ikke en låsning, du allerede har.

## At skrive fryser låsningen

Så snart du begynder at taste cifre, holder ankeret op med at ændre sig. Uanset hvilket punkt der var låst, da det første ciffer kom, forbliver det ankeret, indtil du bekræfter eller tømmer feltet — at bevæge musen midt i indtastningen flytter ikke stille målingen til en anden nål eller til kommandoens eget punkt.

## Tastaturoversigt

| Tast | Handling |
|------|----------|
| `0`–`9`, `.` | Tilføj til længden |
| `-` | Negativ længde — vender retningen langs den låste vinkel (kun første tegn) |
| `Backspace` | Slet sidste tegn |
| `Enter` / `Space` | Placér punktet på den skrevne længde |
| `Escape` | Annullér kommandoen; låsning og skrevet værdi ryddes |

At skrive en længde er valgfrit. Med retningen låst kan du stadig klikke, og punktet projiceres på den låste vinkel.

## Hvor det virker

Afstandssporing er tilgængelig i alle kommandoer, der beder dig udpege punkter:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) og [ViewportCopy](../../commands/viewport-copy/).

## Se også

- [Vector Pins](../vector-pins/) — at fastgøre punkter og spore langs deres referencelinjer
- [Grid & Snap](../grid-snap/) — de øvrige præcisionshjælpemidler i kontrollinjen
- [Distance](../../commands/distance/) — at måle en eksisterende afstand i stedet for at skrive en ny
