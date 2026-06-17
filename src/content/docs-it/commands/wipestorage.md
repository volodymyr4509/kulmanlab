---
title: Comando WipeStorage — KulmanLab CAD
description: Cancella tutti i disegni salvati nell'archivio locale del browser in KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, wipe storage, cancella archivio, reset]
---

# WipeStorage

Cancella tutti i disegni dall'archivio locale del browser e avvia un nuovo disegno vuoto.

## Come usarlo

1. Attiva il comando **WipeStorage** dalla barra degli strumenti o digita `wipestorage` nel terminale.
2. Conferma l'operazione — tutti i disegni vengono eliminati definitivamente.

## Avviso

Questa operazione è **irreversibile**. Esporta con [Export](./export) tutti i disegni che vuoi conservare prima di procedere.

## Quando usarlo

- Quando l'applicazione si blocca all'avvio a causa di dati corrotti nell'archivio.
- Per liberare spazio nell'archivio del browser.

Se l'applicazione non si carica affatto, aggiungi `?resetKulmanLocalStorage` all'URL come alternativa di emergenza.
