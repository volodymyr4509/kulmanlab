---
title: "BlockCreate-kommando — Skapa ett block av objekt"
description: "BlockCreate-kommandot skapar ett namngivet block av de markerade objekten, med en baspunkt du väljer, och ersätter dem med en referens till det. Blocket kan sedan placeras om och om igen med BlockInsert."
keywords: ["skapa block CAD", "block av objekt CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Kommandot `SkapaBlock` skapar ett **block**: en namngiven grupp objekt som lagras en gång i ritningen och placeras så ofta du vill med [Block Insert](../block-insert/). De objekt du väljer blir blocket, och i ritningen ersätts de av en referens till det, så ingenting ser annorlunda ut.

## Skapa ett block

1. Markera gärna objekten först, och skriv sedan `SkapaBlock` eller klicka på **Skapa block** i panelen **Block**. En ruta öppnas med markeringen redan i.
2. Skriv ett **Namn**. Det får inte vara tomt, får inte innehålla något av tecknen `< > / \ " : ; ? * | , =` eller ett accenttecken, och får inte vara namnet på ett annat block.
3. Klicka på **Välj objekt** för att lägga till eller ta bort objekt: rutan döljs, och du klickar på objekt eller drar ett område. Tryck **Enter** eller **Space** för att gå tillbaka till rutan, där **Objekt** visar hur många som är med.
4. Ställ in **Baspunkt**, den punkt blocket placeras efter: skriv dess X och Y, eller klicka på **Välj punkt** och sedan på ritytan (eller skriv X,Y där). Den börjar på 0,0.
5. Klicka på **OK**. Blocket lagras, objekten ger plats åt en referens till det vid baspunkten, och terminalen loggar blockets namn och hur många objekt det innehåller.

## Bra att veta

- **OK** förblir inaktivt så länge något är fel, och meddelandet under fälten säger vad: ett tomt eller oanvändbart namn, ett namn som redan används, eller inga objekt.
- **Escape** under val av objekt eller baspunkt går tillbaka till rutan med blocket som det var. **Escape** i rutan avbryter kommandot.
- Blocket sparas med ritningen och skrivs till DXF tillsammans med sina referenser.

---

*Relaterat: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
