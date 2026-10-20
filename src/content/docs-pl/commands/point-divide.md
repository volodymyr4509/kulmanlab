---
title: "Polecenie PointDivide — punkty w równych odstępach wzdłuż obiektu"
description: "Polecenie PointDivide dzieli linię, polilinię, łuk, okrąg, elipsę lub splajn na odcinki równej długości i umieszcza punkt w każdym miejscu podziału, pokazując je w podglądzie podczas wpisywania liczby odcinków."
keywords: ["polecenie podziel CAD", "podział linii na równe części CAD", "punkty wzdłuż obiektu CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Polecenie `PodzielPunktami` umieszcza [punkty](../point/), które dzielą obiekt na odcinki równej długości. Sam obiekt się nie zmienia: punkty to nowe obiekty na bieżącej warstwie i w bieżącym kolorze, przydatne do przyciągania.

## Dzielenie obiektu

1. Wpisz `PodzielPunktami` w terminalu albo wybierz **Point Divide** z rozwijanego menu szyków w panelu Edit.
2. **Kliknij obiekt** — linię, polilinię, łuk, okrąg, elipsę lub splajn. Wszystko inne jest odrzucane i można wybrać ponownie.
3. **Wpisz liczbę odcinków**, liczbę całkowitą od 2 do 32767. Punkty pojawiają się na obiekcie w podglądzie podczas pisania.
4. Naciśnij **Enter** lub **Space**, aby je umieścić. Polecenie się kończy.

## Gdzie trafiają punkty

- Odstęp mierzony jest długością wzdłuż obiektu, nie kątem, więc elipsa czy splajn jest cięty na kawałki równej długości. Łukowe segmenty polilinii są śledzone wzdłuż ich krzywizny.
- Na obiekcie otwartym — linii, otwartej polilinii, łuku, części elipsy lub otwartym splajnie — punkty trafiają między odcinki, nigdy na końce: 5 odcinków daje 4 punkty.
- Na obiekcie zamkniętym — okręgu, zamkniętej polilinii, pełnej elipsie lub zamkniętym splajnie — punkty biegną dookoła od jego początku, który też dostaje punkt: okrąg zaczyna się pod kątem 0, zamknięta polilinia w pierwszym wierzchołku. 5 odcinków daje 5 punktów.
- Liczba spoza 2–32767 jest odrzucana: terminal podaje powód i ją czyści, aby można było wpisać ponownie.

Backspace usuwa ostatnią cyfrę. Escape zaczyna od nowa, by wybrać inny obiekt. Enter lub Space przed wybraniem obiektu kończy polecenie.

---

*Powiązane: [Point Interval](../point-interval/) — punkty w stałym odstępie, [Point](../point/) — pojedyncze punkty, oraz [ArrayPolar](../array-polar/) — powtarzanie obiektów zamiast punktów.*
