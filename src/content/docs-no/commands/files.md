---
title: Files — Panel for Nylige Filer i KulmanLab CAD
description: Files-kommandoen åpner panelet for Nylige filer — bla gjennom alle tegninger lagret i nettleseren din, gjenopprett en av dem til lerretet, eller slett de du ikke lenger trenger.
keywords: [nylige filer CAD, filhistorikk nettleser CAD, gjenopprett tegning, åpne DXF på nytt, nettleserlagring CAD, KulmanLab filer, lagrede tegninger, IndexedDB CAD, administrer tegninger]
group: file
order: 3
---

# Files

Kommandoen **Files** åpner panelet **Nylige filer** — en liste over alle tegninger som er lagret i nettleserens lokale lagring. Bruk det til å åpne en tidligere tegning på nytt eller fjerne filer du ikke lenger trenger.

## Slik åpner du panelet for Nylige filer

Klikk på **Files**-knappen (historikkikon) i File-panelet øverst på skjermen. Panelet åpnes på venstre side av lerretet.

## Panelet for Nylige filer

Hver oppføring i listen viser filnavnet og to handlingsknapper:

| Knapp | Handling |
|--------|--------|
| ✓ **Restore** | Last tegningen inn på lerretet — erstatter gjeldende innhold |
| ✕ **Delete** | Fjern filen fra nettleserlagringen permanent |

Hvis ingen filer er lagret ennå, viser panelet "No files saved".

## Hvordan filer lagres

KulmanLab lagrer tegninger i **IndexedDB** — en vedvarende database i nettleseren. Dette betyr:

- Filer overlever sideinnlastinger og omstart av nettleseren.
- Filer lagres **lokalt på enheten din** — de lastes ikke opp til noen server.
- Hver nettleser og enhet har sin egen uavhengige lagring. En tegning lagret i Chrome på én datamaskin er ikke tilgjengelig i Firefox eller på en annen maskin.
- Å tømme nettleserens nettstedsdata vil slette alle lagrede filer.

## Automatisk filinnlasting ved oppstart

Når du åpner KulmanLab CAD, laster appen automatisk den **sist endrede filen** fra lagringen. Du trenger ikke å åpne den manuelt fra Files-panelet hver gang.

## Administrere lagringsplass

Det er ingen fast grense for antall tegninger du kan lagre, men nettleserlagringen er begrenset. Hvis du merker lagringsadvarsler, slett eldre filer fra Files-panelet.

For å fjerne alle lagrede tegninger på en gang, bruk [WipeStorage](../wipestorage/)-kommandoen.

## Filnavn og versjonering

Hver fil har et tidsstempel i navnet sitt (f.eks. `myplan_May22_14:30:00.dxf`). Dette tidsstempelet legges til automatisk når du [importerer](../import/) en fil, slik at re-import av samme kildefil oppretter en ny oppføring i stedet for å overskrive den forrige versjonen.

## Relaterte kommandoer

- [Import](../import/) — last en tegning fra filsystemet ditt inn i nettleserlagring
- [Export](../export/) — last ned en tegning til filsystemet ditt
- [New File](../new-file/) — start en tom tegning (lagres også automatisk)
- [WipeStorage](../wipestorage/) — fjern alle lagrede filer fra nettleserlagring
