---
title: Comando WipeStorage — Cancellare Tutti i Dati del Browser in KulmanLab CAD
description: Il comando wipestorage elimina permanentemente tutti i file, livelli, tipi di linea e la cronologia di undo salvati nel browser. Richiede di digitare YES per confermare. Da usare quando si reimposta un database locale corrotto o pieno.
keywords: [CAD wipe storage, cancella dati browser CAD, reset applicazione CAD, elimina file locali CAD, kulmanlab wipestorage]
---

# WipeStorage

Il comando `wipestorage` elimina permanentemente **tutti i dati salvati nel browser** per KulmanLab CAD — ogni file salvato, tabella livelli e tipi di linea, e la cronologia di undo. La pagina si ricarica automaticamente dopo.

:::danger Irreversibile
Questa azione non può essere annullata. Tutti i file salvati nel browser vengono eliminati. Esporta i disegni che vuoi conservare come file `.json` o `.dxf` prima di eseguire questo comando.
:::

## Quando usarlo

- L'archiviazione del browser è corrotta e l'applicazione non riesce a caricare o salvare file.
- Vuoi reimpostare completamente l'applicazione a uno stato pulito.
- Stai cambiando browser o dispositivo e non hai più bisogno della copia locale.

## Come eseguirlo

1. Digita `wipestorage` nel terminale e premi **Invio**.
2. Il terminale mostra: *Vuoi cancellare tutto il local storage del browser? Digita YES per confermare*
3. Digita `YES` (qualsiasi capitalizzazione) e premi **Invio**.

L'applicazione elimina il database e ricarica la pagina. Se digiti qualcosa di diverso da `YES` e premi **Invio**, o premi **Esc**, il comando viene annullato e nulla viene eliminato.

## Cosa viene eliminato

| Dati | Eliminato |
|------|-----------|
| Tutti i file salvati nel browser | Sì |
| Tabelle livelli e tipi di linea per ogni file | Sì |
| Cronologia undo / redo per ogni file | Sì |

Solo i dati archiviati localmente **in questo browser** sono interessati. I file che hai già esportato come `.json` o `.dxf` non vengono toccati.
