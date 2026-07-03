---
sidebar_position: 1
title: IzolujWarstwę — Zamrażanie wszystkich warstw z wyjątkiem zaznaczonych w KulmanLab CAD
description: Polecenie IzolujWarstwę zamraża każdą warstwę z wyjątkiem tych, do których należą zaznaczone obiekty, pozwalając skupić się na konkretnej geometrii bez usuwania czegokolwiek.
keywords: [izolacja warstwy, zamrażanie warstw CAD, izolacja warstwy kulmanlab, zarządzanie warstwami CAD]
---

# IzolujWarstwę

Polecenie `LayerIsolate` zamraża każdą warstwę **oprócz** tych należących do zaznaczonych obiektów. Użyj go, aby szybko skupić się na konkretnej geometrii bez trwałego ukrywania lub usuwania czegokolwiek — odmroź za pomocą [OdmrózWszystkie](../layer-unfreeze-all/) po zakończeniu.

## Dwa sposoby uruchamiania

**Wstępne zaznaczenie, a następnie izolacja** — najpierw zaznacz elementy, a następnie aktywuj:

1. Zaznacz jeden lub więcej elementów na płótnie.
2. Wpisz `LayerIsolate` w terminalu lub kliknij przycisk **Izoluj warstwę** na pasku narzędzi.
3. Warstwy zaznaczonych elementów pozostają widoczne; wszystkie pozostałe są natychmiast zamrażane.

**Aktywuj, a następnie zaznacz**:

1. Wpisz `LayerIsolate` lub kliknij przycisk paska narzędzi.
2. **Wybierz obiekty** — kliknij poszczególne elementy lub przeciągnij, aby zaznaczyć obszarem.
3. Naciśnij **Enter** lub **Spację**, aby potwierdzić — izolacja jest stosowana.

## Skróty klawiaturowe

| Klawisz | Akcja |
|---------|-------|
| `Enter` / `Spacja` | Potwierdź zaznaczenie i zastosuj izolację |
| `Escape` | Anuluj i wyczyść zaznaczenie |

## Szczegóły zachowania

- Wszystkie warstwy, które **nie** są reprezentowane w zaznaczeniu, są ustawiane jako zamrożone.
- Warstwy, które **są** reprezentowane, pozostają odmrożone, nawet jeśli były wcześniej zamrożone.
- Zaznaczenie jest czyszczone po zastosowaniu izolacji.
- Polecenie kończy się automatycznie po zastosowaniu.

## Cofanie izolacji

Uruchom [OdmrózWszystkie](../layer-unfreeze-all/), aby jednym krokiem przywrócić wszystkie warstwy do widoczności.
