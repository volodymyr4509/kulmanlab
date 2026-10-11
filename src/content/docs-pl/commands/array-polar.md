---
title: "Polecenie ArrayPolar — kopiowanie obiektów wokół środka w KulmanLab CAD"
description: "Polecenie ArrayPolar kopiuje wybrane obiekty wokół punktu środkowego — określoną liczbę elementów rozmieszczonych na pełnym obrocie lub jego części, z kopiami, które obracają się podczas obiegu lub zachowują własną orientację."
keywords: ["szyk kołowy CAD", "wzór kołowy CAD", "kopiowanie obiektów wokół punktu CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Polecenie `ArrayPolar` tworzy kopie wybranych obiektów wokół punktu środkowego, równomiernie rozmieszczone na pełnym obrocie lub jego części. Oryginał jest pierwszym elementem; każdy inny element to kopia obrócona względem środka — albo tylko przesunięta wokół niego, jeśli wyłączysz Rotate.

## Tworzenie szyku kołowego

1. Zaznacz obiekty, a następnie wpisz `arraypolar` w terminalu lub kliknij przycisk **Array Polar** na pasku narzędzi. Uruchomione bez zaznaczenia, najpierw prosi o ich wybranie — potwierdź **Enter** lub **Space**.
2. **Kliknij środek**, wokół którego biegną kopie, albo wpisz `X,Y` i naciśnij **Enter**, aby podać dokładną współrzędną.
3. Sprawdź szyk. Wszystkie kopie są podglądane na żywo, a terminal pokazuje `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — naciśnij literę opcji, aby ją zmienić.
4. Naciśnij **Enter** lub **Space**, aby utworzyć kopie. Oryginały zostają na miejscu, a zaznaczenie jest czyszczone.

## Opcje

| Opcja | Klawisz | Skutek |
|---|---|---|
| Items | `I` | Ile jest elementów, wliczając oryginał — liczba całkowita od 2 do 1024. Zaczyna od 6. |
| Angle | `A` | Stopnie od jednego elementu do następnego, przeciwnie do ruchu wskazówek zegara; kąt ujemny biegnie zgodnie z nimi. Do 180°. |
| Fill | `F` | Stopnie od pierwszego elementu do ostatniego. 360 (domyślnie) to pełny obrót; mniejsza liczba rozmieszcza elementy na jego części. Ujemna biegnie zgodnie ze wskazówkami zegara. Do 360°. |
| Rotate | `R` | Włączona (domyślnie): każda kopia obraca się podczas obiegu. Wyłączona: każda kopia jest przesuwana na swoje miejsce i patrzy tak jak oryginał. Przełącza się od razu — nie ma liczby do wpisania. |

- Angle i Fill to dwa sposoby powiedzenia tego samego, więc zmiana jednego przelicza drugie. Przy pełnym obrocie ostatni element zatrzymuje się o krok przed pierwszym; przy części obrotu ląduje dokładnie na kącie wypełnienia.
- Aby zmienić liczbę, naciśnij literę jej opcji. Monit jest wstępnie wypełniony bieżącą wartością — wpisz, aby ją zastąpić, i naciśnij **Enter** lub **Space**; zatwierdzenie bez zmian zostawia szyk bez zmian.
- Items przyjmuje tylko liczby całkowite; Angle i Fill przyjmują ułamki i początkowy `-` dla ruchu zgodnego ze wskazówkami zegara. Kąt lub wypełnienie 0 jest odrzucane, podobnie kąt powyżej 180° lub wypełnienie powyżej 360° — terminal podaje powód.
- Zbyt mały Angle, w którym nie mieszczą się wszystkie elementy, pomija te bez miejsca, a terminal podaje nową liczbę.
- Działa na każdym typie obiektu: każda kopia to oryginał obrócony wokół środka lub przesunięty, dokładnie tak, jak zrobiłyby to [Rotate](../rotate/) i [Move](../move/).

## Skróty klawiszowe

| Klawisz | Działanie |
|---|---|
| `Enter` / `Space` | Zatwierdzenie zaznaczenia, szyku lub wpisanej liczby |
| `I` `A` `F` `R` | Zmiana Items, Angle lub Fill przez wpisanie liczby; przełączenie Rotate |
| `0`–`9`, `.`, `-` | Wpisanie liczby (`.` i `-` tylko dla Angle i Fill, `-` na początku) |
| `Backspace` | Usunięcie ostatnio wpisanego znaku |
| `Escape` | Anulowanie |
