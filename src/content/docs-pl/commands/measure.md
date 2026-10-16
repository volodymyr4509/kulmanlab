---
title: "Polecenie Measure — odczyt odległości, długości, kątów i pól wokół kursora"
description: "Polecenie Measure odczytuje rysunek wokół kursora podczas jego ruchu — odległość do najbliższej geometrii, długość lub promień tego, co napotka, kąt, pod którym spotykają się linie — a kliknięciem podaje pole i obwód obszaru zamkniętego. Nic w rysunku się nie zmienia."
keywords: ["polecenie pomiaru CAD", "pomiar pola i obwodu CAD", "pomiar odległości na żywo CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Polecenie `measure` odczytuje rysunek wokół kursora podczas jego ruchu, bez wskazywania punktów: jak daleko jest do najbliższej geometrii, jak jest długa lub okrągła i pod jakim kątem spotykają się linie. Kliknięcie wewnątrz obszaru zamkniętego daje jego pole i obwód. Nic w rysunku się nie zmienia.

## Pomiar

1. Wpisz `measure` w terminalu albo kliknij **Measure**, pierwszy przycisk w panelu Measure.
2. **Poruszaj kursorem.** Stamtąd polecenie patrzy w prawo, w górę, w lewo i w dół w poszukiwaniu najbliższej geometrii i pokazuje, co znajdzie.
3. **Kliknij wewnątrz obszaru zamkniętego**, aby go wypełnić i odczytać jego pole i obwód — patrz niżej.
4. Naciśnij **Enter**, **Space** lub **Escape**, aby zakończyć.

## Co pokazuje

- **Odległość w poprzek** — od tego, co kursor napotyka po jednej stronie, do tego, co napotyka po drugiej, poziomo i pionowo. Jeśli coś jest tylko po jednej stronie, odległość liczona jest od kursora. Każdy koniec, który coś napotyka, ma mały wypełniony punkt; koniec przy kursorze go nie ma.
- **Długość lub promień** — każdy obiekt, do którego sięgnie polecenie, jest wyróżniony swoją długością, a jeśli jest częścią okręgu — promieniem.
- **Kąt** — gdzie spotykają się dwie osiągnięte proste, zapisywany jest kąt między nimi; kąt prosty oznaczony jest małym kwadracikiem.

Długości i kąty zapisywane są tak, jak zapisuje je bieżący [DimensionStyle](../dimension-style/), w jego formacie jednostek i z jego dokładnością.

## Pole i obwód

Kliknięcie wewnątrz obszaru zamkniętego wypełnia go i umieszcza jego pole i obwód w monicie i historii. Obszar znajdowany jest tak jak w [Hatch](../hatch/): osobne linie łączące się końcami zamykają obszar tak jak polilinia, a wszystko, co zamknięte w środku, pomijane jest jako wyspa — jej krawędź wlicza się do obwodu, a jej pole jest odejmowane.

Pole to zwykła liczba w kwadratowych jednostkach rysunku — stopy i cale nie potrafią zapisać pola — natomiast obwód podąża za formatem jednostek. Kliknij wewnątrz innego obszaru, aby go zmierzyć. Jeśli punkt nie jest otoczony niczym zamkniętym, terminal podaje powód tymi samymi komunikatami co Hatch: no boundary found, point is not enclosed lub boundary is open.

## Warto wiedzieć

- Mierzy względem linii, łuków, okręgów, elips, polilinii i splajnów; długości i pola są dokładne, także dla elips i splajnów.
- Obiekty na zamrożonych warstwach są pomijane; obiekty na zablokowanych warstwach są mierzone.
- W dużym rysunku patrzy tylko na to, co jest blisko kursora, więc pozostaje responsywne.

---

*Powiązane: [Distance](../distance/), [Angle](../angle/) i [Area](../area/) do pomiarów między wskazanymi punktami oraz [Hatch](../hatch/) — jak znajdowane są obszary zamknięte.*
