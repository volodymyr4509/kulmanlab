---
sidebar_position: 1
title: UstawAktywneWarstwy — Ustawianie warstwy elementu jako bieżącej w KulmanLab CAD
description: Polecenie UstawAktywneWarstwy ustawia bieżącą warstwę rysunkową na warstwę klikniętego elementu.
keywords: [ustaw bieżącą warstwę, ustaw bieżącą warstwę CAD, zarządzanie warstwami kulmanlab]
---

# UstawAktywneWarstwy

Polecenie `LayerMakeCurrent` ustawia **bieżącą warstwę rysunkową** na warstwę, do której należy kliknięty element. Nowe elementy będą następnie rysowane automatycznie na tej warstwie.

## Użytkowanie

1. Wpisz `LayerMakeCurrent` w terminalu lub kliknij przycisk **Ustaw bieżącą** na pasku narzędzi (ikona pipety).
2. **Kliknij dowolny element** na płótnie.
3. Bieżąca warstwa jest aktualizowana, aby odpowiadać warstwie tego elementu. Polecenie kończy się natychmiast.

## Szczegóły zachowania

- Jeśli klikniesz na pustym płótnie (bez trafionego elementu), terminal pokazuje `nie znaleziono obiektu` i polecenie pozostaje aktywne, abyś mógł spróbować ponownie.
- Zmieniane jest tylko ustawienie bieżącej warstwy — żadne elementy nie są modyfikowane.
- Zaktualizowana warstwa jest odzwierciedlona w selektorze warstw na pasku narzędzi.
