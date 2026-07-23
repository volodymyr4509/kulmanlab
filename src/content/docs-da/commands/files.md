---
title: Files — Panel for Nylige Filer i KulmanLab CAD
description: Files-kommandoen åbner panelet for Nylige filer — gennemse alle tegninger gemt i din browser, gendan en af dem til lærredet, eller slet dem du ikke længere har brug for.
keywords: [nylige filer CAD, filhistorik browser CAD, gendan tegning, genåbn DXF, browserlagring CAD, KulmanLab filer, gemte tegninger, IndexedDB CAD, administrér tegninger]
group: file
order: 3
---

# Files

Kommandoen **Files** åbner panelet **Nylige filer** — en liste over alle tegninger, der er gemt i din browsers lokale lagring. Brug det til at genåbne en tidligere tegning eller fjerne filer, du ikke længere har brug for.

## Sådan åbner du panelet for Nylige filer

Klik på **Files**-knappen (historikikon) i File-panelet øverst på skærmen. Panelet åbnes på venstre side af lærredet.

## Panelet for Nylige filer

Hver post i listen viser filnavnet og to handlingsknapper:

| Knap | Handling |
|--------|--------|
| ✓ **Restore** | Indlæs tegningen på lærredet — erstatter det aktuelle indhold |
| ✕ **Delete** | Fjern filen fra browserlagringen permanent |

Hvis ingen filer er gemt endnu, viser panelet "No files saved".

## Hvordan filer gemmes

KulmanLab gemmer tegninger i **IndexedDB** — en vedvarende database i browseren. Det betyder:

- Filer overlever sideindlæsninger og genstart af browseren.
- Filer gemmes **lokalt på din enhed** — de uploades ikke til nogen server.
- Hver browser og enhed har sin egen uafhængige lagring. En tegning gemt i Chrome på én computer er ikke tilgængelig i Firefox eller på en anden maskine.
- At rydde browserens webstedsdata sletter alle gemte filer.

## Automatisk filindlæsning ved opstart

Når du åbner KulmanLab CAD, indlæser appen automatisk den **senest redigerede fil** fra lagringen. Du behøver ikke manuelt åbne den fra Files-panelet hver gang.

## Administrere lagerplads

Der er ingen fast grænse for antallet af tegninger, du kan gemme, men browserlagring er begrænset. Hvis du bemærker lagringsadvarsler, slet ældre filer fra Files-panelet.

For at fjerne alle gemte tegninger på én gang, brug [WipeStorage](../wipestorage/)-kommandoen.

## Filnavne og versionering

Hver fil har et tidsstempel i sit navn (f.eks. `myplan_May22_14:30:00.dxf`). Dette tidsstempel tilføjes automatisk, når du [importerer](../import/) en fil, hvilket sikrer, at re-import af samme kildefil opretter en ny post i stedet for at overskrive den forrige version.

## Relaterede kommandoer

- [Import](../import/) — indlæs en tegning fra dit filsystem i browserlagring
- [Export](../export/) — download en tegning til dit filsystem
- [New File](../new-file/) — start en tom tegning (gemmes også automatisk)
- [WipeStorage](../wipestorage/) — ryd alle gemte filer fra browserlagring
