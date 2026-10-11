---
title: "ArrayPolar-kommando — kopier objekter rundt om et centrum i KulmanLab CAD"
description: "ArrayPolar-kommandoen kopierer de valgte objekter rundt om et centrum — et bestemt antal elementer fordelt over en hel omgang eller en del af den, med kopier der drejer med rundt eller bevarer deres egen retning."
keywords: ["CAD polært array", "cirkulært mønster CAD", "kopier objekter omkring et punkt CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Kommandoen `ArrayPolar` laver kopier af de valgte objekter rundt om et centrum, jævnt fordelt over en hel omgang eller en del af den. Originalen er det første element; alle andre er kopier, drejet om centrum — eller kun flyttet rundt om det, hvis du slår Rotate fra.

## Lav et polært array

1. Vælg objekterne, og skriv derefter `arraypolar` i terminalen eller klik på knappen **Array Polar** på værktøjslinjen. Startes den uden valg, beder den dig først vælge dem — tryk **Enter** eller **Space** for at bekræfte.
2. **Klik på centrum**, som kopierne går rundt om, eller skriv `X,Y` og tryk **Enter** for en nøjagtig koordinat.
3. Gennemse arrayet. Alle kopier vises live, og terminalen viser `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — tryk på et valgs bogstav for at ændre det.
4. Tryk **Enter** eller **Space** for at oprette kopierne. Originalerne bliver, hvor de er, og valget ryddes.

## Valg

| Valg | Tast | Virkning |
|---|---|---|
| Items | `I` | Hvor mange elementer der er, originalen medregnet — et helt tal fra 2 til 1024. Starter på 6. |
| Angle | `A` | Grader fra ét element til det næste, mod uret; en negativ vinkel går med uret. Op til 180°. |
| Fill | `F` | Grader fra det første element til det sidste. 360 (standard) er en hel omgang; et mindre tal fordeler elementerne over en del af den. Negativ går med uret. Op til 360°. |
| Rotate | `R` | Til (standard): hver kopi drejer med rundt. Fra: hver kopi flyttes på plads og vender samme vej som originalen. Skifter på stedet — der er intet tal at skrive. |

- Angle og Fill er to måder at sige det samme på, så ændres den ene, omformuleres den anden. Over en hel omgang stopper det sidste element ét skridt før det første; over en del af en omgang lander det præcis på fyldvinklen.
- For at ændre et tal trykker du på valgets bogstav. Prompten er forudfyldt med den nuværende værdi — skriv for at erstatte den, og tryk **Enter** eller **Space**; bekræftes den uændret, forbliver arrayet, som det var.
- Items tager kun hele tal; Angle og Fill tager decimaler og et indledende `-` for med uret. En vinkel eller fyld på 0 afvises, ligesom en vinkel over 180° eller et fyld over 360° — terminalen siger hvorfor.
- En Angle, der er for lille til alle elementer, fjerner dem uden plads, og terminalen melder det nye antal.
- Virker på alle objekttyper: hver kopi er originalen drejet om centrum eller flyttet, præcis som [Rotate](../rotate/) og [Move](../move/) ville gøre det.

## Tastaturoversigt

| Tast | Handling |
|---|---|
| `Enter` / `Space` | Bekræft valget, arrayet eller et skrevet tal |
| `I` `A` `F` `R` | Ændr Items, Angle eller Fill ved at skrive et tal; skift Rotate |
| `0`–`9`, `.`, `-` | Skriv tallet (`.` og `-` kun for Angle og Fill, `-` først) |
| `Backspace` | Slet det sidst skrevne tegn |
| `Escape` | Annuller |
