---
sidebar_position: 1
title: LayerUnfreezeAll — Odmrażanie wszystkich warstw w KulmanLab CAD
description: Polecenie LayerUnfreezeAll jednym krokiem usuwa flagę zamrożenia na każdej warstwie rysunku.
keywords: [odmrożenie warstwy, odmrożenie wszystkich warstw CAD, zarządzanie warstwami kulmanlab]
---

# LayerUnfreezeAll

Polecenie `LayerUnfreezeAll` natychmiast usuwa flagę zamrożenia na **każdej warstwie** w rysunku. Żadne zaznaczenie ani potwierdzenie nie jest potrzebne — uruchamia się i kończy w jednym kroku.

## Użytkowanie

Wpisz `LayerUnfreezeAll` w terminalu lub kliknij przycisk **Odmroź wszystkie** na pasku narzędzi (ikona słońca). Wszystkie zamrożone warstwy natychmiast stają się widoczne.

## Kiedy używać

Zazwyczaj używane po [LayerIsolate](../layer-isolate/), aby przywrócić wszystkie warstwy do normalnego widocznego stanu.

## Szczegóły zachowania

- Stosuje się do wszystkich warstw niezależnie od ich bieżącego stanu.
- Nie wpływa na flagi zablokowania lub wydruku — zmieniana jest tylko flaga zamrożenia.
- Polecenie kończy się natychmiast bez żadnych monitów.
