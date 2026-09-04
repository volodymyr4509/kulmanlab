---
title: "DXF a DWG: jaka jest różnica?"
description: "DWG to natywny format AutoCAD-a, DXF to otwarty format wymiany. Co naprawdę je różni, którego potrzebujesz i jak zdobyć DXF, gdy dostałeś DWG."
keywords: [DXF a DWG, różnica między DXF i DWG, DWG czy DXF, co to jest DWG, co to jest DXF, DWG na DXF, formaty plików CAD, otworzyć plik DWG, format DXF, który format CAD]
date: 2026-09-02
author: KulmanLab
tag: Poradnik
---

DWG to natywny format plików AutoCAD-a: binarny, zamknięty i nieudokumentowany przez Autodesk. DXF to format wymiany, który Autodesk publikuje, żeby inne programy mogły czytać te same rysunki. Ta sama geometria, inne opakowanie — i tylko jeden z nich został pomyślany do przekazywania plików ludziom spoza twojego własnego oprogramowania.

Ten ostatni punkt to cała praktyczna różnica i to on rozstrzyga, o co powinieneś prosić.

## W skrócie

| | DXF | DWG |
|---|---|---|
| Rozwinięcie | Drawing Exchange Format | Drawing |
| Opublikowana specyfikacja | Tak, przez Autodesk | Nie |
| Kodowanie | Tekst (jest też wariant binarny) | Binarne |
| Cel | Przenoszenie rysunków między programami | Własny format roboczy AutoCAD-a |
| Rozmiar pliku | Większy | Mniejszy |
| Odczyt przez inne programy | Bardzo szeroki | Nierówny, przez biblioteki odtworzone z analizy |
| Niesie wszystko, co potrafi AutoCAD | Nie — udokumentowany podzbiór | Tak |

## Dlaczego w ogóle są dwa formaty

Autodesk wypuścił AutoCAD-a w 1982 roku z DWG jako formatem roboczym. Jest zbudowany dla wygody jednego programu: zwarty, binarny i swobodnie zmieniany, kiedy AutoCAD tego potrzebuje.

To czyni go kiepską rzeczą do wysyłania komukolwiek. Autodesk opublikował więc dodatkowo DXF — ten sam rysunek zapisany w udokumentowanej, czytelnej postaci, pod którą każdy programista może się podpiąć. Otwórz `.dxf` w edytorze tekstu, a zobaczysz kody grup i nazwy sekcji zwykłym ASCII.

Oba są wersjonowane równolegle. Każde wydanie AutoCAD-a przynosi rewizję DWG i odpowiadającą jej rewizję DXF; znacznik `AC1032`, który czasem widać w nagłówku pliku, wskazuje na przykład generację AutoCAD 2018.

DXF nie jest więc formatem starszym ani gorszym. To ten sam rysunek, celowo uczyniony czytelnym.

## Co różni się w praktyce

**Otwartość.** Autodesk dokumentuje DXF i nie dokumentuje DWG. Programy czytające DWG — a jest ich wiele — opierają się na bibliotekach powstałych z odtworzenia formatu. Działa to dobrze i jest w pełni legalne, ale oznacza, że obsługa DWG pozostaje w tyle za nowymi wersjami i różni się między aplikacjami, podczas gdy obsługę DXF każdy może zaimplementować wprost ze specyfikacji.

**Rozmiar.** Binarny DWG jest zwykle znacznie mniejszy niż ten sam rysunek jako tekstowy DXF. Przy dużym projekcie to ma znaczenie; przy jednej części nie.

**Wierność.** DWG mieści wszystko, co AutoCAD potrafi wyrazić, łącznie z typami obiektów, o których inne programy nie mają pojęcia. DXF obejmuje udokumentowany podzbiór. Do zwykłego kreślenia 2D — linie, łuki, okręgi, polilinie, tekst, wymiary, warstwy — ten podzbiór to wszystko, czego potrzeba. W modelu opartym na zamkniętych obiektach AutoCAD-a eksport do DXF część z tego gubi.

**Zasięg wsparcia.** Praktycznie każde narzędzie CAD, CAM i wektorowe czyta DXF. Mniej czyta DWG, a te, które czytają, obsługują go często mniej kompletnie.

## Którego naprawdę potrzebujesz?

**Ktoś przysłał ci plik, a ty nie możesz go otworzyć.** Najpierw sprawdź prawdziwe rozszerzenie. Większość ludzi mówi „DWG" na oba, a w połowie przypadków w pobranych leży `.dxf`, który już mogłeś otworzyć. Zobacz [jak otworzyć DXF bez AutoCAD-a](/pl/blog/open-dxf-file-without-autocad/).

**Wysyłasz do cięcia laserem, warsztatu CNC albo wytwórcy.** DXF, praktycznie zawsze. Oprogramowanie maszyn i usługi cięcia są zbudowane wokół niego, a dwuwymiarowa geometria cięcia mieści się swobodnie w udokumentowanym podzbiorze. Zobacz [przygotowanie DXF do cięcia laserem](/pl/blog/prepare-dxf-for-laser-cutting/).

**Wysyłasz architektowi albo inżynierowi pracującemu w AutoCAD-zie.** Zapytaj. Wielu woli DWG, bo tego oczekuje ich proces pracy, a jeśli nie — bez trudu otworzą DXF.

**Archiwizujesz na długi czas.** DXF. Udokumentowany format tekstowy będzie czytelny za dwadzieścia lat dla kogoś ze specyfikacją i edytorem tekstu. To właśnie po to istnieją formaty wymiany.

**Ktoś chce tylko popatrzeć.** Ani jeden, ani drugi — wyślij PDF. Zobacz [konwersję DXF na PDF](/pl/blog/convert-dxf-to-pdf/).

## Jak zdobyć DXF, gdy dostałeś DWG

Pewna droga to poprosić. Osoba, która wysłała plik, otwiera go w swoim programie CAD i robi *Zapisz jako* albo *Eksportuj* → DXF. Zajmuje to jakieś dziesięć sekund, potrafi to każda desktopowa aplikacja CAD, a plik wychodzi z oprogramowania, które go stworzyło, a nie z domysłu osoby trzeciej na jego temat.

Jeśli pytanie nie wchodzi w grę, konwertery istnieją. Dwie rzeczy do rozważenia: to właśnie przy konwersji ginie wierność, a ty wysyłasz cudzy rysunek do usługi, której nie kontrolujesz. Przy projekcie hobbystycznym w porządku. Przy pracy dla klienta — zapytaj.

Prosząc, warto wskazać wersję. **DXF R12 jest najbezpieczniejszy** — jest wiekowy, wspierany wszędzie, a jeśli rysunek to zwykła geometria 2D, nie traci nic istotnego. Zwłaszcza starsze oprogramowanie maszyn radzi sobie z nim dużo lepiej.

## Dwie rzeczy, które ludzie mylą

**„DXF jest stratny."** Tylko w tym sensie, że nie niesie zamkniętych typów obiektów AutoCAD-a. Linie, łuki, okręgi, polilinie, tekst, wymiary i warstwy przechodzą nienaruszone. Przy pracy kreślarskiej 2D strata zwykle wynosi zero.

**„DXF to stary format."** Jest wersjonowany razem z DWG od 1982 roku i nadal jest. Zamieszanie bierze się stąd, że R12 tak powszechnie służy jako cel zgodności, iż ludzie zakładają, że DXF się na nim zatrzymał.

## Gdzie w tym wszystkim jest to narzędzie

[KulmanLab](https://kulmanlab.com/pl/) czyta **DXF, a nie DWG** — i warto powiedzieć dlaczego, zamiast traktować to jak przeoczenie: DXF jest udokumentowany, więc implementacja może być poprawna po samym przeczytaniu specyfikacji. DWG oznaczałby zależność od biblioteki odtworzonej z analizy, w przeglądarce, dla formatu zmieniającego się w rytmie Autodesku.

Jeśli masz `.dwg`, to tego nie otworzy. Jeśli masz `.dxf`, otworzysz go w karcie przeglądarki bez instalowania czegokolwiek: [app.kulmanlab.com](https://app.kulmanlab.com).

To, co zapisuje z powrotem, to cały rysunek — linie, okręgi, łuki, elipsy, polilinie, splajny, tekst wraz z formatowaniem, wymiary, odnośniki i kreskowania, wraz z warstwami i rodzajami linii. Plik otwarty tutaj i wyeksportowany ponownie wychodzi z opisami, a nie okrojony do samej geometrii.

---

*Powiązane: [Import](/pl/docs/commands/import/) — co dokładnie KulmanLab odczytuje z DXF, oraz [Export Manager](/pl/docs/commands/export-manager/) — co niesie każdy format eksportu.*
