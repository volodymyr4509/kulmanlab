---
title: Textový editor — rozšířený a jednoduchý režim v KulmanLab CAD
description: Textový editor KulmanLab CAD má dva režimy — rozšířený (formátování po znacích, víceřádkový, zalamování slov pro Text a Multileader) a jednoduchý (jednotný styl, jeden řádek pro kóty). Klávesové zkratky pokrývají tučné, kurzívu, podtržení, přeškrtnutí a zarovnání.
keywords: [CAD textový editor, MTEXT, tučné kurzíva podtržení CAD, klávesové zkratky textového editoru, formátování textu CAD, víceřádkový text CAD, zalamování slov CAD, editor formátovaného textu, jednoduchý textový editor, editor textu kót, vlastní písmo CAD, nahrání ttf CAD, kulmanlab]
group: interface
order: 6
---

# Textový editor

Textový editor se otevře, když umístíte nebo dvakrát kliknete na upravitelný objekt. Malý **čip režimu** v záhlaví — **rich** (zvýrazněná barva) nebo **simple** (tlumená) — ukazuje, který režim je pro aktuální objekt aktivní.

## Režimy editoru

### Rozšířený režim

Používá se pro: **Text** (popisky MTEXT) a anotace **Multileader**.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Underline / Strikethrough | Po jednotlivých znacích (použije se na výběr, nebo na celý objekt, není-li žádný výběr) |
| Font a Height | Přepsání po jednotlivých znacích, nebo výchozí hodnota celého objektu |
| Zarovnání (Left / Center / Right / Justify) | **Pouze Text** — pro Multileader není dostupné |
| `Enter` | Vloží pevné zalomení řádku |
| `Shift+←/→` | Rozšíří nebo zúží výběr textu |
| `Home` / `End` | Skočí na začátek / konec aktuálního pevného řádku |
| Zalamování slov | Podporováno pomocí úchytů změny referenční šířky |

### Jednoduchý režim

Používá se pro: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Editor je předvyplněn aktuálně vykresleným popiskem kóty, takže můžete umístit kurzor a hodnotu přímo upravit.

| Funkce | Chování |
|--------|---------|
| Bold / Italic / Underline / Strikethrough / Font / Height | Dostupné — použije se na **celý** popisek najednou |
| Formátování po jednotlivých znacích | Nepodporováno |
| `Enter` | **Potvrdí** hodnotu a zavře editor (žádné zalomení řádku) |
| Víceřádkový text | Nepodporováno |
| Zalamování slov | Nepodporováno |

## Otevření editoru

| Akce | Výsledek |
|------|----------|
| Příkaz `text` → kliknutí na pozici | Vytvoří nový textový objekt a otevře editor (**rich**) |
| Dvojité kliknutí na existující objekt **Text** | Znovu otevře editor v režimu **rich** |
| Dvojité kliknutí na existující **Multileader** | Otevře editor v režimu **rich** |
| Dvojité kliknutí na objekt **kóty** | Otevře editor v režimu **simple** |
| `Escape` uvnitř editoru | Zavře editor a zachová všechny změny |

## Panel nástrojů

Panel nástrojů se vznáší nad obalovým obdélníkem textu a zůstává ukotven k objektu při posunu nebo zvětšení. Níže uvedené klávesové zkratky používají **Ctrl** ve Windows/Linuxu a **Cmd** na Macu — popisek každého tlačítka ukazuje správnou klávesu pro vaši platformu.

### Bold · Italic · Underline · Strikethrough

| Tlačítko | Zkratka | Co dělá |
|----------|---------|---------|
| **B** | `Ctrl+B` / `Cmd+B` | Přepne tučné |
| *I* | `Ctrl+I` / `Cmd+I` | Přepne kurzívu |
| <u>U</u> | `Ctrl+U` / `Cmd+U` | Přepne podtržení |
| ~~S~~ | `Ctrl+Shift+X` / `Cmd+Shift+X` | Přepne přeškrtnutí |

**Jak se přepínání použije:**

- **S výběrem textu** — styl se použije pouze na přesně vybrané znaky.
- **Bez výběru, kurzor v existujícím textu** — přepne styl na celém objektu (všechny segmenty).
- **Prázdný text nebo nový objekt** — styl se uloží na prázdný segment a použije se na každý znak, který od tohoto okamžiku napíšete.

Tlačítko se zobrazí zvýrazněné (aktivní), pokud má daný styl nastaven každý znak v aktuálním výběru — nebo znak bezprostředně vlevo od kurzoru.

### Font

Rozbalovací nabídka seskupuje dostupná písma do skupin **Default** (vestavěné bezpatkové písmo), **User** (vaše vlastní nahraná písma, pokud nějaká máte), **Free** (sada přibalených Google Fonts) a **System** (běžná systémová písma jako Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console a Impact).

- **S výběrem** — přepíše písmo pouze u vybraných znaků.
- **Bez výběru** — použije písmo na celý objekt.

Bez výběru rozbalovací nabídka odráží písmo znaku vlevo od kurzoru.

Nejste omezeni vestavěným seznamem — kliknutím na tlačítko **Font Manager** v panelu nástrojů nahrajete vlastní soubor `.ttf` a přidáte jej do skupiny **User**. Podrobnosti viz [Font Manager](../../commands/font-manager/).

### Height

Číselné pole nastavuje **výšku verzálek** (výšku velkého písmene) v jednotkách výkresu.

- **S výběrem** — přepíše výšku u vybraných znaků, nezávisle na základní výšce objektu.
- **Bez výběru** — změní základní výšku objektu (platí pro všechny znaky, které nemají vlastní přepsání výšky).

Pole odráží výšku znaku vlevo od kurzoru. Ponecháte-li je prázdné, použije se výchozí hodnota objektu.

### Zarovnání

Čtyři tlačítka — **Align Left** (`Ctrl+Shift+L` / `Cmd+Shift+L`), **Align Center** (`Ctrl+Shift+E` / `Cmd+Shift+E`), **Align Right** (`Ctrl+Shift+R` / `Cmd+Shift+R`), **Justify** (`Ctrl+Shift+J` / `Cmd+Shift+J`) — nastavují zarovnání odstavce. Dostupné pouze pro objekty **Text**; Multileader a popisky kót tato tlačítka nezobrazují.

- Kliknutí na tlačítko znovu zarovná každý řádek v rámci stávajícího obalového obdélníku objektu — nepřesouvá vkládací bod ani nemění velikost obdélníku.
- Kliknutí na již aktivní tlačítko zruší přepsání a vrátí se ke sloupci daném bodem uchycení objektu.
- **Justify** roztáhne mezery mezi slovy tak, aby každý řádek vyplnil celou šířku řádku.

## Kurzor a navigace

| Klávesa | Akce |
|---------|------|
| `←` / `→` | Posune kurzor o jeden znak doleva nebo doprava |
| `Home` | Skočí na začátek aktuálního pevného řádku |
| `End` | Skočí na konec aktuálního pevného řádku |
| `Shift` + `←` / `→` | Rozšíří nebo zúží výběr |
| `Backspace` | Smaže znak vlevo (nebo výběr) |
| `Delete` | Smaže znak vpravo (nebo výběr) |
| `Enter` | Vloží zalomení řádku |
| `Escape` | Zavře editor |

Výška kurzoru se automaticky shoduje s výškou verzálek sousedního znaku, včetně menší velikosti používané u dolních a horních indexů.

## Kopírování, vyjmutí a vložení

| Klávesa | Akce |
|---------|------|
| `Ctrl+A` / `Cmd+A` | Vybrat veškerý text v aktivním editoru |
| `Ctrl+C` / `Cmd+C` | Zkopíruje vybraný text |
| `Ctrl+X` / `Cmd+X` | Vyjme vybraný text |
| `Ctrl+V` / `Cmd+V` | Vloží na pozici kurzoru |

Kopírování a vyjmutí vyžadují aktivní výběr textu. Vložený text je vždy prostý — převezme formátování (tučné, kurzíva, písmo, výška), které je již na místě kurzoru, místo aby si nesl formátování, které měl při kopírování.

V **rozšířeném režimu** se zalomení řádků ve vloženém textu zachovají. V **jednoduchém režimu** se zalomení řádků odstraní, protože popisky kót jsou jednořádkové.

## Zalamování slov

Když má textový objekt nastavenu **referenční šířku**, dlouhé řádky se zalomí na hranicích slov tak, aby se do této šířky vešly.

Referenční šířku nastavíte nebo změníte při vybraném objektu tažením **úchytů změny velikosti** — tenkých obdélníčků na levém a pravém okraji přerušovaného obalového obdélníku. Obsah se při tažení přeskládává v reálném čase.

Nastavením referenční šířky na nulu (přetažením úchytů k sobě nebo smazáním hodnoty v panelu vlastností) se zalamování slov vypne a řádky mohou volně růst.

## Víceřádkový text

Stisknutím `Enter` vložíte pevné zalomení řádku. Každý pevný řádek je nezávislý — `Home` a `End` se pohybují pouze v rámci aktuálního pevného řádku.

Pevná zalomení řádků a formátování po jednotlivých znacích se ukládají ve formátu MTEXT a přežijí kompletní výměnu přes DXF.

## Kompatibilita s DXF

Textové popisky se v souboru DXF ukládají jako objekty **MTEXT**. Tučné a kurzíva používají vložené kódy přepnutí písma (`\f`), podtržení používá `\L`/`\l`, přeškrtnutí používá `\K`/`\k` a přepsání výšky po jednotlivých znacích používá `\H`. Referenční šířka, řádkování, zarovnání odstavce, otočení a uchycení se také přenášejí. Rámeček textu se exportuje s příznakem rámečku MTEXT a měřítkem okraje kompatibilním s AutoCADem.
