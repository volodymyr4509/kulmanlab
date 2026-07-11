---
title: ViewportRectangle-kommandot — Skapa en viewport i en layout i KulmanLab CAD
description: ViewportRectangle-kommandot skapar en viewport i ett papperslayout genom att välja två motstående hörn. Viewporten visar modellutrymmets entiteter i layoutets standardskala.
keywords: [viewport-rektangel, skapa viewport, layoutviewport, pappersviewport, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

`ViewportRectangle`-kommandot skapar en ny viewport i det aktiva papperslayoutet genom att välja två motstående hörn. Endast tillgängligt i layoututrymme.

## Skapa en viewport

1. Växla till ett papperslayout med hjälp av fliken längst ner på skärmen.
2. Skriv `ViewportRectangle` i terminalen eller klicka på verktygsfältsknappen **Viewport Rectangle**.
3. **Klicka på det första hörnet**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
4. **Klicka på det motstående hörnet** — viewporten placeras omedelbart. Koordinatinmatning fungerar även här.

Den nya viewporten visar hela modellen i layoutets standardskala. Använd scrollhjulet inuti viewporten för att zooma, eller mittenklicka och dra för att panorera modellvyn.

## Koordinatinmatning

Vid vart och ett av hörnstegen kan du skriva en exakt koordinat:

1. Skriv X-värdet.
2. Tryck `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera punkten.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning |
| `,` | Låser X och går vidare till Y-inmatning |
| `Enter` | Bekräftar den inskrivna koordinaten |
| `Escape` | Avbryter |

## Redigera en viewport

Efter att en viewport har placerats, klicka på den för att markera den:

- **Dra i kanterna eller hörnen** för att ändra storlek.
- **Dra i mittgreppet** för att flytta den.
- Använd **skalväljaren** i kontrollfältet för att ställa in en exakt skala (t.ex. 1:50). För att ange en skala som inte finns i listan, skriv den direkt i inmatningsfältet längst ner i listrutan — accepterar förhållandeformat (`1:200`, `5:1`) eller ett vanligt decimaltal (`0.005`), tryck sedan **Enter**.
- Högerklicka på en viewport och använd **Lås** för att förhindra oavsiktliga ändringar.

## Anteckningar

- ViewportRectangle är endast tillgängligt när en papperslayoutflik är aktiv. Att köra det i modellutrymme visar ett felmeddelande och avslutar kommandot.
- För att kopiera en befintlig viewport, använd [ViewportCopy](../viewport-copy/).
