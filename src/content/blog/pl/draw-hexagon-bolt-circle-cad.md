---
title: "Jak narysować sześciokąt lub okrąg podziałowy otworów w CAD (Polygon i szyk kołowy)"
description: "Narysuj wielokąt foremny ze środka i promienia lub z jednego boku, a potem powtórz otwory na okręgu podziałowym szykiem kołowym — za darmo w przeglądarce, z dokładnie wpisanymi wartościami."
keywords: [narysować sześciokąt w CAD, wielokąt foremny CAD, szyk kołowy CAD, okrąg podziałowy otworów rysunek, rozmieszczenie otworów CAD, wzór kołowy CAD, rysunek nakrętki sześciokątnej, narysować ośmiokąt CAD, średnica podziałowa PCD, darmowe narzędzie wielokąt CAD]
date: 2026-10-11
author: KulmanLab
tag: Poradnik
---

Aby narysować w CAD wielokąt foremny, podaj liczbę boków, wybierz środek, a potem promień — albo wybierz jeden bok, a resztę program dopowie. Aby narysować okrąg podziałowy otworów, narysuj jeden otwór i powtórz go wokół środka szykiem kołowym. Ten poradnik robi jedno i drugie, z dokładnymi liczbami, w przeglądarce pod adresem [app.kulmanlab.com](https://app.kulmanlab.com) — za darmo, bez instalacji, a plik nigdy nie opuszcza Twojego komputera.

Tworzymy [KulmanLab](https://kulmanlab.com), więc poniższe kroki korzystają z jego poleceń. Same zagadnienia — rozmiar pod klucz kontra wymiar po narożach, średnica okręgu podziałowego, czy kopie obracają się podczas obiegu — są takie same w każdym programie CAD.

## Rysowanie wielokąta foremnego

Wielokąt foremny ma równe boki i równe kąty: sześciokąt dla nakrętki, ośmiokąt dla znaku, pięciokąt dla ozdobnego wycięcia. W KulmanLab służy do tego polecenie **Polygon**.

1. Wpisz `polygon` w terminalu albo użyj przycisku Polygon w panelu Shapes.
2. Podaj **liczbę boków** — dowolną liczbę całkowitą od 3 do 1024 — i naciśnij **Enter**. Monit jest wstępnie wypełniony liczbą użytą ostatnio.
3. **Kliknij środek** albo wpisz `X,Y` dla dokładnego punktu.
4. **Kliknij promień** albo wpisz go i naciśnij **Enter**.

Wynikiem jest jedna zamknięta polilinia, więc działa na niej wszystko, co można robić z polilinią — przesuwanie, obracanie, odsunięcie, skalowanie.

### Pod klucz czy po narożach?

Tu najłatwiej o pomyłkę. „Promień” może oznaczać dwie różne odległości, a sześciokąt określa się jedną z nich, zależnie od tego, co rysujesz:

| | Mierzony do | Typowe zastosowanie |
|---|---|---|
| **Inside włączona** (domyślnie) | Narożników | Kształt, który ma zmieścić się w danym kole |
| **Inside wyłączona** | Środka każdego boku | Kształt o zadanej szerokości pod klucz — nakrętki, łby śrub, rozmiary kluczy |

Naciśnij `I` przy monicie promienia, aby przełączyć. Nakrętkę sześciokątną kupuje się według rozmiaru pod klucz, więc użyj **Inside wyłączona** i wpisz *połowę* tej wartości. Dla nakrętki M8 o 13 mm pod klucz:

1. `polygon`, potem `6` boków, potem kliknij lub wpisz środek.
2. Naciśnij `I`, aby wyłączyć Inside.
3. Wpisz `6.5` i naciśnij **Enter**.

Boki są oddalone dokładnie o 13 mm; narożniki sięgają 7,51 mm od środka, czyli około 15 mm po narożach. Jeśli wpiszesz promień zamiast klikać, wielokąt leży najniższym bokiem poziomo, płasko. Jeśli klikniesz, orientację przejmuje z miejsca kliknięcia.

### Z jednego boku

Czasem znasz długość boku, a nie promień — na przykład ośmiokątny blat o boku 20 mm. Naciśnij `E` przy monicie pierwszego punktu, aby przejść do trybu **Edge**, i wskaż dwa końce jednego boku. Pozostałe wierzchołki powstają przeciwnie do ruchu wskazówek zegara, na lewo od tego boku. Wpisanie `0,0`, a potem `20,0` daje bok 20 mm wzdłuż osi X z wielokątem nad nim.

## Rysowanie okręgu podziałowego otworów

Okrąg podziałowy otworów — na rysunkach „PCD” — to pierścień równo rozmieszczonych otworów wokół środka. Rysujesz jeden otwór i go powtarzasz. W KulmanLab służy do tego **ArrayPolar**.

Weźmy sześć otworów 6,6 mm na okręgu podziałowym o średnicy 50 mm, ze środkiem w początku układu:

1. **Narysuj pierwszy otwór.** Uruchom `circle`, wpisz środek jako `25` `,` `0` — połowa PCD wzdłuż osi X — naciśnij **Enter**, potem wpisz promień `3.3` i naciśnij **Enter**.
2. **Zaznacz go**, klikając okrąg.
3. **Uruchom szyk kołowy.** Wpisz `arraypolar` albo użyj przycisku ArrayPolar w panelu Edit.
4. **Wskaż środek wzoru** — wpisz `0,0`.
5. Terminal pokazuje szyk w obecnym stanie — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — a pięć kopii jest podglądanych na żywo. Naciśnij **Enter**, aby zaakceptować.

To cały okrąg podziałowy. Aby uzyskać inną liczbę, naciśnij przed zatwierdzeniem `I` i wpisz liczbę elementów — oryginał liczy się jako jeden, a kąt między nimi zostanie wyliczony. Albo naciśnij `A` i wpisz zamiast tego odstęp w stopniach; kąt wypełnienia zostanie przeliczony.

Kilka istotnych szczegółów:

- **Fill** to kąt od pierwszego elementu do ostatniego. Domyślne 360° rozmieszcza elementy na całym okręgu; mniejsza liczba rozmieszcza je na łuku — na przykład rząd otworów na ćwierć obrotu. Kąt ujemny biegnie zgodnie z ruchem wskazówek zegara.
- **Rotate** decyduje, czy każda kopia obraca się podczas obiegu. Dla okrągłych otworów nie ma to znaczenia. Dla rowka, zęba czy wspornika ma: włączona — każda kopia jest zwrócona ku środkowi tak jak oryginał; wyłączona — każda kopia zachowuje orientację oryginału i jest tylko przesuwana na miejsce. Naciśnij `R`, aby przełączyć przed zatwierdzeniem.
- Szyk tworzy **kopie** — oryginał zostaje na miejscu, a każdy element jest zwykłym obiektem, który możesz później edytować.

## Wszystko razem: kołnierz

Narysuj sześciokąt jako obrys, okrąg pośrodku jako otwór i okrąg podziałowy dla otworów montażowych. Trzy polecenia, każdy wymiar wpisany dokładnie i nic do odmierzania z ekranu.

Jeśli część trafia do wycinarki laserowej, usuń pomocniczy okrąg narysowany do znalezienia okręgu podziałowego — zostałby wycięty jak wszystko inne — i sprawdź plik według naszego poradnika o [przygotowaniu pliku DXF do cięcia laserem](/pl/blog/prepare-dxf-for-laser-cutting/). Wielokąt jest ścieżką zamkniętą z konstrukcji, a to najczęstszy powód odrzucania plików przez usługi cięcia.

## Czego to nie robi

- **Tylko wielokąty foremne.** Wszystkie boki są równe. Nieregularny obrys — kształt z kilkoma dłuższymi bokami — to [polilinia](/pl/docs/commands/polyline/), którą rysujesz punkt po punkcie.
- **Tylko 2D.** Rysuje płaskie obrysy. Nie da modelowanej nakrętki ani śruby z gwintem.
- **Tylko przeglądarki komputerowe** — Chrome, Firefox, Safari i Edge. Nie ma wersji mobilnej.

---

*Powiązane: [Polygon](/pl/docs/commands/polygon/) i [ArrayPolar](/pl/docs/commands/array-polar/) — wszystkie opcje i klawisze, [Circle](/pl/docs/commands/circle/) — wpisywanie dokładnych promieni oraz [ArrayGrid](/pl/docs/commands/array-grid/) — powtarzanie obiektów w wierszach i kolumnach zamiast wokół środka.*
