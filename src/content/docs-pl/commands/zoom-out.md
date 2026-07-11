---
title: "Polecenie Zoom Out — Zmniejszanie powiększenia widoku o 1,5× na krok w KulmanLab CAD"
description: "Polecenie Zoom Out dzieli bieżący poziom powiększenia o 1,5× i natychmiast kończy się, wyśrodkowane na środku widoku. Użyj kółka myszy, aby płynniej pomniejszać w kierunku kursora."
keywords: [CAD pomniejsz, zmniejsz powiększenie widoku, polecenie pomniejsz, przegląd CAD, krok powiększenia 1,5x, kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Polecenie `zoomout` dzieli bieżący poziom powiększenia przez **1,5×** (odpowiednik mnożenia przez ~0,667) i natychmiast kończy się, wyśrodkowane na środku widoku. Jest to odwrotność polecenia [Zoom In](../zoom-in/).

## Pomniejszanie

Kliknij przycisk **Pomniejsz** na pasku narzędzi lub wpisz `zoomout` w terminalu. Powiększenie jest stosowane natychmiast i polecenie kończy się — żadne kliknięcie na płótnie nie jest wymagane.

## Jak działa krok 1,5×

| Bieżące powiększenie | Po jednym Pomniejsz |
|---------------------|-------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (dolny limit) |

Poziom powiększenia jest zawsze wyświetlany w **prawym dolnym rogu** płótna. Dolny limit to **0,01×**; dalsze kroki nic nie robią.

## Pomniejszenie przez pasek narzędzi a kółko myszy

| | Przycisk Pomniejsz | Kółko myszy |
|---|----------------|-------------|
| Środek powiększenia | Środek widoku | Pozycja kursora |
| Rozmiar kroku | 1,5× na kliknięcie | ~1,1× na krok |
| Wymagana aktywacja | Nie | Nie — działa zawsze |
| Najlepsze do | Cofanie się, aby zobaczyć więcej kontekstu | Płynne pomniejszanie zakotwiczone na kursorze |

## Skróty klawiaturowe

Dla tego polecenia nie ma skrótów klawiaturowych. Zamiast tego użyj kółka myszy — działa w dowolnym momencie bez aktywowania żadnego polecenia.

## Powiązane polecenia widoku

| Polecenie | Co robi |
|-----------|---------|
| [Zoom In](../zoom-in/) | Mnoży powiększenie o 1,5× na krok |
| [Fit](../fit/) | Resetuje powiększenie, aby pokazać wszystkie elementy |
| [Pan](../pan/) | Przesuwa widok bez powiększania |
