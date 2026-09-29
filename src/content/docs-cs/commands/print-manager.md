---
title: Print Manager — export výkresu jako PNG, JPEG, WebP nebo PDF
description: Příkaz PrintManager otevře Print Manager — samostatné exportní okno se živým náhledem, který přesně odpovídá exportovanému souboru, nastavením Quality/DPI, výběrem formátu, stylem tisku Default/Monochrome/Blueprint a volitelným ořezem oblasti. Podporuje PNG, JPEG, WebP a PDF.
keywords: [export CAD do PNG, export CAD do PDF, tisk CAD výkresu, správce tisku, kvalita tisku DPI, monochromatický export, styl tisku blueprint, export kulmanlab]
group: file
order: 4
---

# Print Manager

Příkaz `PrintManager` otevře **Print Manager** — samostatné exportní okno se živým náhledovým plátnem, výběrem formátu (PNG / JPEG / WebP / PDF), výběrem stylu tisku Style (Default / Monochrome / Blueprint) a volitelným ořezem oblasti. Nic se neodesílá na fyzickou tiskárnu; výstup se stáhne jako soubor.

## Otevření Print Manageru

Klikněte na tlačítko **Print** v panelu nástrojů nebo napište `PrintManager` do terminálu. Print Manager se okamžitě otevře s náhledem aktuálního okna.

Náhled se vykresluje stejným kódem a ve stejném rozlišení v pixelech jako soubor, který nakonec exportujete — změna Quality, Style nebo exportované oblasti okamžitě znovu vykreslí náhled, takže to, co vidíte, je to, co se stáhne, nikoli jeho přiblížení.

## Rozvržení Print Manageru

Okno má dva panely:
- **Levý postranní panel** — všechny exportní ovládací prvky.
- **Pravý panel** — živé náhledové plátno, které se aktualizuje při změně nastavení.

### Ovládací prvky postranního panelu

| Ovládací prvek | Popis |
|----------------|-------|
| **Change Area** | Ořez na vlastní obdélník na plátně (viz níže) — skutečně ořízne exportovaný obrázek, včetně rozvržení s papírovým prostorem, nejen náhled na obrazovce |
| Rozbalovací nabídka **Quality** | Nastavuje rozlišení exportu (viz níže) |
| Rozbalovací nabídka **Style** | Default, Monochrome nebo Blueprint — viz *Styly tisku* níže. Ve výchozím stavu Monochrome pro čistý tištěný výstup |
| Rozbalovací nabídka **Format** | PNG, JPEG, WebP nebo PDF |
| Tlačítko **Export** | Vygeneruje a stáhne soubor |

## Styly tisku

Rozbalovací nabídka **Style** řídí jak barvu inkoustu, kterým se objekty kreslí, tak pozadí stránky:

| Styl | Inkoust | Pozadí stránky |
|------|---------|----------------|
| **Default** | Vlastní barva každého objektu | Bílá |
| **Monochrome** *(výchozí)* | Plná černá bez ohledu na barvu objektu/vrstvy | Bílá |
| **Blueprint** | Plná bílá bez ohledu na barvu objektu/vrstvy | Tmavá pruská modř se slabou referenční mřížkou |

Blueprint napodobuje vzhled tradičního kyanotypického architektonického tisku — bílé linky na tmavě modrém listu. Jeho referenční mřížka je dimenzována vzhledem ke stránce, nikoli k DPI, takže vypadá stejně hustě při každém nastavení Quality, místo aby s rostoucím rozlišením houstla.

## Kvalita a rozlišení

Rozbalovací nabídka **Quality** nastavuje DPI, ve kterém se export vykresluje:

| Kvalita | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(výchozí)* | 150 |
| Presentation | 300 |
| Max | 600 |

Vyšší Quality vytváří větší, ostřejší obrázek při stejné fyzické velikosti — tloušťky čar rostou spolu s rozlišením, takže čára si na papíře zachovává stejnou *fyzickou* tloušťku při jakémkoli nastavení Quality, místo aby s rostoucím DPI vypadala tenčeji. Jedinou výjimkou je vlásečnice (tloušťka čáry `0`), konvenčně definovaná jako „nejtenčí čára, jakou výstupní zařízení dokáže nakreslit" — zůstává při každé úrovni Quality pevnou šířkou 1 pixel místo měnění měřítka, stejně jako se chová na živém plátně.

Změna Quality okamžitě znovu vykreslí náhled, takže před exportem vidíte skutečnou ostrost (a kompromis ve velikosti souboru).

## Výběr vlastní exportní oblasti

Ve výchozím stavu náhled zobrazuje obalový obdélník všech objektů v modelovém prostoru — stejný rozsah, na který přibližuje [Fit](../fit/) — nebo celý list v rozvržení. Chcete-li exportovat konkrétní oblast:

1. Klikněte na **Change Area**, nebo napište [`ChangePrintArea`](../change-print-area/) do terminálu — Print Manager se skryje a plátno se stane interaktivním.
2. **Klikněte na první roh**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na protilehlý roh** — Print Manager se znovu otevře s vybranou oblastí v náhledu.

Rohy se přichytávají k úchytům a průsečíkům jako u každého jiného výběru bodu, takže můžete ořezat podle nakreslené geometrie, ne od oka.

Stisknutím `Escape` během výběru oblasti zrušíte a obnovíte předchozí oblast.

Náhledové plátno se dynamicky přizpůsobuje **přesnému poměru stran** vybrané oblasti, takže náhled je přesný na pixel.

Zvolená oblast se pamatuje zvlášť pro modelový prostor a pro každé rozvržení až do opětovného načtení stránky — viz [ChangePrintArea](../change-print-area/).

## Exportní formáty

| Formát | Nejvhodnější pro | Poznámky |
|--------|------------------|----------|
| **PNG** | Bezztrátové, ostré čáry | Pozadí stránky podle Style vtištěné do obrázku, bez průhlednosti |
| **JPEG** | Menší soubor pro sdílení | 95% kvalita, mírná komprese |
| **WebP** | Nejmenší soubor pro web | Stejná 95% kvalita, lepší komprese než JPEG |
| **PDF** | Dokumenty připravené k tisku | Obrázek vložený do kontejneru PDF v DPI zvolené Quality, dimenzovaný tak, aby se stránka tiskla ve skutečném fyzickém měřítku |

Exportovaný soubor se jmenuje `kulman-<timestamp>.<ext>` a stáhne se automaticky.

## Rozlišení exportu a pozadí

- **Export modelového prostoru / výřezu**: omezen na 2000 × 2000 pixelů při výchozí kvalitě Normal (150 DPI), proporcionálně škálováno podle vybrané oblasti; limit se mění i s Quality — Draft omezuje níže, Presentation a Max výše (až 8000 × 8000 při Max/600 DPI).
- **Export rozvržení (papírový prostor)**: dimenzován přímo podle rozměrů papíru rozvržení při zvoleném DPI — např. list A4 (210 × 297 mm) při kvalitě Normal se exportuje zhruba v 1240 × 1754 px — takže se na něj limit 2000 px pro výřez nevztahuje.
- Pozadí se řídí zvoleným **Style** tisku — bílé pro Default a Monochrome, tmavá pruská modř pro Blueprint (viz *Styly tisku* výše).
- Vrstvy označené jako **netisknuté** se z exportu vylučují.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Escape` (během výběru oblasti) | Zruší výběr oblasti, obnoví předchozí oblast |
| `Escape` (v Print Manageru) | Zavře Print Manager |
