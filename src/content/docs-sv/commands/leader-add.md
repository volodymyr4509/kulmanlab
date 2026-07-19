---
title: Leader+ — Lägg till en pilspetsarm på en befintlig multileader
description: Leader+-kommandot lägger till en ny pilspetsarm på en befintlig multileader. Den nya armen delar dogleg, text och all styling med den valda leadern. Två klick — välj leadern, placera den nya spetsen.
keywords: [CAD lägg till leader-arm, leader+-kommando, lägg till pil på leader, multileader-arm, kulmanlab]
group: markup
order: 2
---

# Leader+

`leader+`-kommandot lägger till en ny pilspetsarm på en befintlig multileader. Den nya armen pekar från leaderns befintliga dogleg-punkt till en ny pilspets du klickar på. All styling — dogleg-position, text, pilspetstyp och storlek — ärvs från den valda leadern.

## Lägga till en arm

1. Skriv `leader+` i terminalen.
2. **Klicka på en befintlig multileader** för att markera den.
3. **Klicka på den nya pilspetsen**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat. En förhandsvisningslinje visas från markören till leaderns dogleg-punkt.

Armen placeras och kommandot förblir aktivt — du kan omedelbart klicka på en annan leader för att lägga till fler armar. Tryck **Enter**, **Space** eller **Escape** för att avsluta.

```
  Före:                          Efter:
  ◄── arm 1                      ◄── arm 1
       \                               \
        ●──── dogleg ──── text          ●──── dogleg ──── text
                                       /
                                  arm 2 ──►  (ny spets du klickade på)
```

## Koordinatinmatning för spetsen

Istället för att klicka kan du skriva en exakt position:

1. Skriv X-värdet.
2. Tryck `,` — terminalen bekräftar att X är låst.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Börja skriva X-koordinat |
| `,` | Lås X och gå till Y-inmatning |
| `Enter` | Bekräfta inskriven koordinat och placera armen |
| `Enter` / `Space` | Avsluta (när ingen inmatning pågår) |
| `Escape` | Avbryt och återställ |

## Anteckningar

- Endast **Multileader**-entiteter kan väljas — att klicka på någon annan entitetstyp gör ingenting.
- Den nya armen utgår från den befintliga dogleg-punkten; du väljer bara var pilspetsen ska placeras.
- Det finns ingen gräns för hur många armar en multileader kan ha.

## Relaterade kommandon

| Kommando | Vad det gör |
|---------|-------------|
| [Leader](../leader/) | Skapa en helt ny multileader från grunden |
| [Leader−](../leader-remove/) | Ta bort en arm från en multileader som har två eller fler |
