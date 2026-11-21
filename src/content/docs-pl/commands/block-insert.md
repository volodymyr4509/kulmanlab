---
title: "Polecenie BlockInsert — umieszczenie bloku spośród bloków rysunku"
description: "Polecenie BlockInsert otwiera paletę podglądów bloków rysunku. Wybierz jeden, ustaw skalę i obrót, po czym kliknij lub wpisz punkt, aby umieścić go raz lub wielokrotnie."
keywords: ["wstaw blok CAD", "paleta bloków CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Polecenie `WstawBlok` otwiera paletę podglądów wszystkich bloków rysunku i umieszcza wybrany. Twórz bloki poleceniem [Block Create](../block-create/) albo otwórz plik DXF, który je zawiera.

## Umieszczanie bloku

1. Wpisz `WstawBlok` albo kliknij **Wstaw blok** w panelu **Bloki**. Paleta dokuje się po lewej, z kafelkiem podglądu dla każdego bloku, po dwanaście na stronę; strzałki pod kafelkami przewracają strony.
2. Wpisz w **Szukaj bloków**, aby zawęzić kafelki według nazwy.
3. Ustaw **Skala** (musi być większa niż 0) i **Obrót** w stopniach. **Powtarzaj wstawianie** jest domyślnie włączone.
4. Kliknij kafelek bloku. Blok podąża za kursorem: kliknij, aby umieścić go za punkt bazowy, albo wpisz X,Y dla dokładnego położenia. Gdy kursor jest zablokowany na kącie, możesz wpisać długość.
5. Przy włączonym **Powtarzaj wstawianie** blok nadal podąża za kursorem dla kolejnej kopii, aż naciśniesz **Escape**. Przy wyłączonym polecenie kończy się po jednej kopii.

## Warto wiedzieć

- Aby usunąć blok, kliknij kosz na jego kafelku i potwierdź. Bloku, do którego są odniesienia w rysunku, nie można usunąć: jego kafelek pokazuje **W użyciu, nie można usunąć**.
- Rysunek bez bloków pokazuje w palecie **Rysunek nie zawiera bloków**.
- **Escape** zamyka paletę, gdy nic nie jest umieszczane. To jeden z zadokowanych paneli, z których po lewej widoczny jest naraz tylko jeden.

---

*Powiązane: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
