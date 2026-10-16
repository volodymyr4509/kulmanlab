---
title: "Sådan tegner du en sekskant eller en hulcirkel i CAD (Polygon og polært array)"
description: "Tegn en regulær polygon ud fra et centrum og en radius eller ud fra en kant, og gentag derefter huller på en hulcirkel med et polært array — gratis i din browser, med nøjagtigt indtastede værdier."
keywords: [tegn sekskant i CAD, regulær polygon CAD, polært array CAD, hulcirkel tegning, hulmønster CAD, cirkulært mønster CAD, tegn sekskantmøtrik, tegn ottekant CAD, delediameter PCD, gratis polygonværktøj CAD]
date: 2026-10-11
author: KulmanLab
tag: Guide
---

For at tegne en regulær polygon i CAD angiver du antallet af sider, vælger centrum og derefter en radius — eller du vælger en kant, og resten følger. For at tegne en hulcirkel tegner du ét hul og gentager det rundt om centrum med et polært array. Denne guide gør begge dele, med nøjagtige tal, i en browser på [app.kulmanlab.com](https://app.kulmanlab.com) — gratis, uden installation, og filen forlader aldrig din computer.

Vi bygger [KulmanLab](https://kulmanlab.com), så trinene nedenfor bruger dets kommandoer. Ideerne — nøglevidde kontra hjørnemål, delediameter, om kopier drejer med rundt — er de samme i ethvert CAD-program.

## Tegn en regulær polygon

En regulær polygon har lige store sider og vinkler: en sekskant til en møtrik, en ottekant til et skilt, en femkant til et dekorativt udsnit. I KulmanLab er det kommandoen **Polygon**.

1. Skriv `polygon` i terminalen, eller brug knappen Polygon i panelet Shapes.
2. Indtast **antal sider** — et vilkårligt helt tal fra 3 til 1024 — og tryk **Enter**. Prompten er forudfyldt med det antal, du brugte sidst.
3. **Klik på centrum**, eller skriv `X,Y` for et nøjagtigt punkt.
4. **Klik på radius**, eller skriv den og tryk **Enter**.

Resultatet er én lukket polylinje, så alt, hvad du kan gøre med en polylinje — flytte, dreje, offset, skalere — virker.

### Nøglevidde eller hjørnemål?

Her snubler mange. "Radius" kan betyde to forskellige afstande, og en sekskant angives med den ene eller den anden afhængigt af, hvad du tegner:

| | Målt til | Typisk brug |
|---|---|---|
| **Inside til** (standard) | Hjørnerne | En form, der skal passe inden i en given cirkel |
| **Inside fra** | Midten af hver kant | En form med en given nøglevidde — møtrikker, skruehoveder, nøglestørrelser |

Tryk `I` ved radiusprompten for at skifte. En sekskantmøtrik sælges efter nøglevidde, så brug **Inside fra** og skriv *halvdelen*. For en M8-møtrik med 13 mm nøglevidde:

1. `polygon`, derefter `6` for siderne, derefter klik eller skriv centrum.
2. Tryk `I` for at slå Inside fra.
3. Skriv `6.5` og tryk **Enter**.

Fladerne ligger præcis 13 mm fra hinanden; hjørnerne når 7,51 mm fra centrum, cirka 15 mm hjørnemål. Skriver du radius i stedet for at klikke, ligger polygonen med sin laveste kant vandret, fladt nedad. Klikker du, tager den sin retning fra det sted, du klikker.

### Ud fra én kant

Nogle gange kender du en sidelængde, ikke en radius — for eksempel en ottekantet bordplade med sider på 20 mm. Tryk `E` ved prompten for første punkt for at skifte til tilstanden **Edge**, og vælg de to ender af én kant. De øvrige hjørner bygges mod uret, til venstre for den kant. Skriver du `0,0` og derefter `20,0`, lægges en kant på 20 mm langs X-aksen med polygonen over den.

## Tegn en hulcirkel

En hulcirkel — "PCD" på tegninger — er en ring af jævnt fordelte huller rundt om et centrum. Du tegner ét hul og gentager det. I KulmanLab er det **ArrayPolar**.

Tag seks huller på 6,6 mm på en delediameter på 50 mm, centreret i origo:

1. **Tegn det første hul.** Kør `Cirkel`, skriv centrum som `25` `,` `0` — halvdelen af PCD langs X-aksen —, tryk **Enter**, skriv derefter radius `3.3` og tryk **Enter**.
2. **Vælg det** ved at klikke på cirklen.
3. **Kør det polære array.** Skriv `Cirkelmønster`, eller brug knappen ArrayPolar i panelet Edit.
4. **Vælg mønsterets centrum** — skriv `0,0`.
5. Terminalen viser arrayet, som det står — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — og de fem kopier forhåndsvises live. Tryk **Enter** for at acceptere.

Det er hele hulcirklen. For et andet antal trykker du `I` før bekræftelsen og skriver antal elementer — originalen tæller som ét, og vinklen imellem dem udregnes. Eller tryk `A` og skriv i stedet afstanden i grader; fyldvinklen omformuleres, så den passer.

Nogle detaljer, der betyder noget:

- **Fill** er vinklen fra første til sidste element. Standardværdien 360° fordeler elementerne over hele cirklen; et mindre tal fordeler dem over en bue — en række huller over en kvart omgang, for eksempel. En negativ vinkel går med uret.
- **Rotate** afgør, om hver kopi drejer med rundt. For runde huller gør det ingen forskel. For en slids, en tand eller en vinkelbeslag gør det: til — hver kopi vender mod centrum, som originalen gjorde; fra — hver kopi beholder originalens retning og flyttes bare på plads. Tryk `R` for at skifte før bekræftelsen.
- Arrayet laver **kopier** — originalen bliver, hvor den er, og hvert element er en almindelig entitet, du kan redigere bagefter.

## Alt samlet: en flange

Tegn en sekskant som kontur, en cirkel i midten til boringen og en hulcirkel til monteringshullerne. Tre kommandoer, hvert mål indtastet nøjagtigt, og intet at måle af på skærmen.

Skal delen til en laserskærer, så slet en hjælpecirkel, du tegnede for at finde delecirklen — den ville blive skåret som alt andet — og tjek filen efter vores guide til at [forberede en DXF til laserskæring](/da/blog/prepare-dxf-for-laser-cutting/). Polygonen er en lukket bane af konstruktion, hvilket er den hyppigste grund til, at skæretjenester afviser filer.

## Hvad dette ikke gør

- **Kun regulære polygoner.** Alle sider er lige store. En uregelmæssig kontur — en form med nogle længere sider — er en [polylinje](/da/docs/commands/polyline/), du tegner punkt for punkt.
- **Kun 2D.** Det tegner flade konturer. Du får hverken en modelleret møtrik eller en gevindskåret bolt.
- **Kun desktop-browsere** — Chrome, Firefox, Safari og Edge. Der er ingen mobilversion.

---

*Relateret: [Polygon](/da/docs/commands/polygon/) og [ArrayPolar](/da/docs/commands/array-polar/) for alle valg og taster, [Circle](/da/docs/commands/circle/) til at indtaste nøjagtige radier og [ArrayGrid](/da/docs/commands/array-grid/) til at gentage objekter i rækker og kolonner i stedet for rundt om et centrum.*
