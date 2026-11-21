---
title: "BlockCreate-kommando — Lav en blok af objekter"
description: "BlockCreate-kommandoen laver en navngivet blok af de valgte objekter, med et basispunkt du vælger, og erstatter dem med én reference til den. Blokken kan derefter placeres igen og igen med BlockInsert."
keywords: ["lav blok CAD", "blok af objekter CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Kommandoen `OpretBlok` laver en **blok**: en navngivet gruppe objekter, der gemmes én gang i tegningen og placeres så ofte, du vil, med [Block Insert](../block-insert/). De valgte objekter bliver blokken, og i tegningen erstattes de af én reference til den, så intet ser anderledes ud.

## Lav en blok

1. Vælg gerne objekterne først, og skriv derefter `OpretBlok` eller klik på **Opret blok** i panelet **Blokke**. Et vindue åbnes med udvalget allerede i.
2. Skriv et **Navn**. Det må ikke være tomt, ikke indeholde nogen af tegnene `< > / \ " : ; ? * | , =` eller et accent grave og ikke være navnet på en anden blok.
3. Klik på **Vælg objekter** for at tilføje eller fjerne objekter: vinduet skjules, og du klikker på objekter eller trækker et område. Tryk **Enter** eller **Space** for at gå tilbage til vinduet, hvor **Objekter** viser, hvor mange der er med.
4. Indstil **Basispunkt**, det punkt blokken placeres efter: skriv dets X og Y, eller klik på **Vælg punkt** og derefter på lærredet (eller skriv X,Y dér). Det starter på 0,0.
5. Klik på **OK**. Blokken gemmes, objekterne viger for én reference til den ved basispunktet, og terminalen logger blokkens navn og hvor mange objekter den rummer.

## Godt at vide

- **OK** forbliver deaktiveret, så længe noget er galt, og meddelelsen under felterne siger hvad: et tomt eller ubrugeligt navn, et navn der allerede er i brug, eller ingen objekter.
- **Escape** under valg af objekter eller basispunkt går tilbage til vinduet med blokken, som den var. **Escape** i vinduet annullerer kommandoen.
- Blokken gemmes med tegningen og skrives til DXF sammen med sine referencer.

---

*Relateret: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
