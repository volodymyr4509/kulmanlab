---
title: Wipe Storage-commando — Wis alle browsergegevens (KulmanLab CAD)
description: Het wipestorage-commando verwijdert permanent alle bestanden, lagen, lijntypen en de geschiedenis van ongedaan maken die in de browser zijn opgeslagen. Vereist het typen van YES ter bevestiging. Gebruik dit bij het resetten van een beschadigde of overvolle lokale database.
keywords: [CAD opslag wissen, browsergegevens wissen CAD, CAD-app resetten, lokale bestanden verwijderen CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

Het `wipestorage`-commando verwijdert permanent **alle gegevens die in de browser zijn opgeslagen** voor KulmanLab CAD — elk opgeslagen bestand, elke laag- en lijntypetabel, en de geschiedenis van ongedaan maken. De pagina wordt daarna automatisch opnieuw geladen.

:::danger Onomkeerbaar
Deze actie kan niet ongedaan worden gemaakt. Alle bestanden die in de browser zijn opgeslagen, worden verwijderd. Exporteer tekeningen die u wilt behouden als `.json`- of `.dxf`-bestanden voordat u dit commando uitvoert.
:::

## Wanneer te gebruiken

- De browseropslag is beschadigd en de app kan geen bestanden laden of opslaan.
- U wilt de app volledig terugzetten naar een schone staat.
- U wisselt van browser of apparaat en heeft de lokale kopie niet meer nodig.

## Zo voert u het uit

1. Typ `wipestorage` in de terminal en druk op **Enter**.
2. De terminal vraagt: *Alle lokale browseropslag wissen? Typ YES om te bevestigen*
3. Typ `YES` (elke schrijfwijze qua hoofdletters) en druk op **Enter**.

De app verwijdert de database en herlaadt de pagina. Als u iets anders dan `YES` typt en op **Enter** drukt, of op **Escape** drukt, wordt het commando geannuleerd en wordt er niets verwijderd.

## Wat wordt verwijderd

| Gegevens | Verwijderd |
|------|---------|
| Alle bestanden opgeslagen in de browser | Ja |
| Laag- en lijntypetabellen voor elk bestand | Ja |
| Geschiedenis van ongedaan maken/opnieuw voor elk bestand | Ja |

Alleen gegevens die lokaal in **deze browser** zijn opgeslagen, worden beïnvloed. Bestanden die u al hebt geëxporteerd als `.json` of `.dxf` blijven ongewijzigd.
