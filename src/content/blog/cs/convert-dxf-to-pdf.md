---
title: "Jak převést DXF do PDF (ve správném měřítku)"
description: "Převeďte DXF do PDF zdarma v prohlížeči — včetně přesného měřítka, například 1:50 na A3, což převodní weby neumějí. Bez instalace, bez účtu."
keywords: [převod DXF do PDF, DXF do PDF zdarma, DXF do PDF online, DXF do PDF měřítko, tisk DXF v měřítku, převodník DXF do PDF, CAD výkres do PDF, DXF PDF A3, PDF v měřítku 1:50, DXF do PDF bez AutoCADu]
date: 2026-09-03
author: KulmanLab
tag: Průvodce
---

Chcete-li převést DXF do PDF, otevřete jej v CAD editoru v prohlížeči a exportujte — bez instalace, bez účtu a soubor zůstane na vašem počítači. Pokud má PDF při tisku správně měřit, potřebujete papírové rozvržení a přesné měřítko, což je část, kterou většina převodníků úplně přeskakuje.

Právě tento rozdíl je smyslem celého průvodce. Univerzální převodník souborů vám dá obrázek vašeho výkresu. PDF v měřítku vám dá výkres, ke kterému lze přiložit pravítko.

## Rychlá cesta: prostě vytvořit PDF

Když potřebujete jen něco čitelného k odeslání e-mailem nebo přiložení:

1. Otevřete [app.kulmanlab.com](https://app.kulmanlab.com) a přetáhněte svůj `.dxf` na plátno, nebo použijte tlačítko **Import** v panelu souborů.
2. Klikněte na tlačítko **Print**, nebo napište `printmanager`.
3. Nastavte **Format** na **PDF**.
4. Klikněte na **Export**. Soubor se stáhne.

To je vše. Panel náhledu se vykresluje stejným kódem a ve stejném rozlišení jako exportovaný soubor, takže to, co vidíte, je to, co dostanete, a ne pouhé přiblížení.

Jedna věc stojí za zmínku: **PDF zachová vše na obrazovce** — kóty, text, šrafování, odkazové čáry — rozložené přesně tak, jak jsou nakresleny. Export do DXF to všechno nese také, takže volba mezi nimi není o tom, co přežije. Je o tom, co příjemce potřebuje: PDF, pokud jej má jen číst nebo tisknout, DXF, pokud jej má upravovat.

## Správný způsob: převod v přesném měřítku

Pokud podle toho bude někdo měřit nebo stavět, „vejde se na stránku" nestačí. Výkres v měřítku 1:50 znamená, že 1 mm na papíře je 50 mm ve skutečnosti, a to platí, jen když to nastavíte záměrně.

1. **Přepněte na papírové rozvržení.** Klikněte na záložku rozvržení ve spodní části obrazovky — tlačítko **+** jedno přidá. Rozvržení je papírový prostor; modelový prostor nemá stránku, na kterou by se měřítko dalo převést.
2. **Nastavte list.** Napište `pagemanager`, nebo klikněte pravým tlačítkem na záložku rozvržení a zvolte **Page Manager**. Vyberte formát papíru (A4, A3, A2, Letter…) a orientaci.
3. **Umístěte výřez.** Napište `viewportrectangle` a vyberte dva protilehlé rohy. Výřez je okno do vašeho modelu.
4. **Nastavte měřítko.** S aktivním výřezem použijte **výběr měřítka** v ovládací liště. Vyberte standardní poměr, nebo napište vlastní — přijímá formát poměru (`1:200`, `5:1`) nebo prosté desetinné číslo (`0.005`), poté Enter.
5. **Exportujte.** Print Manager → PDF → Export.

PDF je dimenzováno tak, aby se stránka tiskla ve skutečném fyzickém měřítku. Tiskněte na 100 % — bez „přizpůsobit stránce", které tiše všechno přeškáluje a vaši práci zruší — a rozměry na papíře budou správné.

Pokud později změníte velikost papíru nebo měřítko, existující výřezy se proporcionálně přeškálují, takže se rozvržení nerozpadne.

## Volba nastavení Quality

Rozbalovací nabídka **Quality** nastavuje DPI, ve kterém se PDF vykresluje:

| Quality | DPI | Použití |
|---|---|---|
| Draft | 72 | Rychlá kontrola, nejmenší soubor |
| Normal | 150 | Výchozí — postačí pro přílohy e-mailů ve formátu A4 |
| Presentation | 300 | Tisk něčeho, co si lidé prohlédnou zblízka |
| Max | 600 | Velké formáty, jemné detaily |

Tloušťky čar se mění spolu s rozlišením, takže čára si na papíře při každém nastavení zachovává stejnou *fyzickou* tloušťku — vyšší Quality vám dá ostřejší čáru, nikoli tenčí. Výjimkou je vlásečnice (tloušťka čáry `0`), která podle konvence zůstává jedním pixelem na každé úrovni.

## Styly tisku

Rozbalovací nabídka **Style** mění inkoust i stránku:

- **Monochrome** — plná černá na bílé, a výchozí volba. To chcete pro cokoli, co jde na papír: barevné hladiny, které se dobře čtou na obrazovce, se na laserové tiskárně změní v kalné šedi.
- **Default** — vlastní barva každého objektu, bílá stránka.
- **Blueprint** — bílé linky na tmavé pruské modři ve stylu tradičního kyanotypu. Pro prezentaci, ne pro dílnu.

## Převod jen části výkresu

**Change Area** ořízne export na obdélník, který vyberete na plátně. Ořízne skutečný exportovaný soubor, nejen náhled, a funguje jak na rozvržení, tak v modelovém prostoru.

Rohy se přichytávají k úchytům a průsečíkům jako u každého jiného výběru bodu, takže můžete ořezat podle nakreslené geometrie místo odhadem od oka — užitečné, když list obsahuje čtyři detaily a vy chcete jen třetí.

## Co tento nástroj nedělá

Upřímná omezení, než se na něj spolehnete:

- **PDF je rastrový obrázek uvnitř kontejneru PDF, nikoli vektor.** U A4 a kvality Normal je to neviditelné. U A1, nebo pro toho, kdo si detail hodně přiblíží, bude vektorové PDF z desktopového CAD balíku ostřejší. Pro velké formáty zvyšte Quality na Presentation nebo Max — vektorové se však nestane.
- **Nic se neodesílá na fyzickou tiskárnu.** Dostanete soubor; jeho vytištění je práce vaší tiskárny.
- **Pouze desktopové prohlížeče** — Chrome, Firefox, Safari, Edge. Mobilní verze neexistuje.
- **Pouze 2D, DXF, nikoli DWG.** Pokud je váš soubor `.dwg`, požádejte odesílatele o export do DXF.

## Kdy použít něco jiného

**Univerzální převodník souborů** (CloudConvert, Zamzar a podobné) je v pořádku, pokud skutečně potřebujete jen obrázek a nezáleží vám na tom, v jaké velikosti se vytiskne. Jsou rychlé a zvládají formáty, které nikdo jiný. Neposkytnou vám 1:50 na A3.

**Desktopový CAD** — LibreCAD, QCAD, nebo AutoCAD, pokud jej máte — vytváří vektorová PDF a je správnou odpovědí pro velkoformátové technické výkresy, které se budou řádně tisknout a pečlivě prověřovat.

**Tento nástroj** pro velký střed: DXF, který dnes potřebujete jako správně změřítkované, anotované PDF, bez instalace čehokoli.

## Než to odešlete

- Měřítko nastavené záměrně ve výřezu, ne ponechané na tom, co se vešlo
- Formát papíru odpovídá tomu, na co bude příjemce skutečně tisknout
- Quality zvýšená nad Normal, pokud jde o cokoli většího než A4
- Styl Monochrome, pokud výslovně nechcete barvy
- PDF jednou otevřené a zkontrolované před přiložením
- Příjemci řečeno, aby tiskl na 100 %, ne „přizpůsobit stránce"

Ten poslední řádek zachrání víc výkresů v měřítku než cokoli jiného na tomto seznamu.

---

*Související: [Print Manager](/cs/docs/commands/print-manager/) pro každé exportní nastavení, [Page Manager](/cs/docs/commands/page-manager/) pro velikost papíru a měřítko rozvržení, [ViewportRectangle](/cs/docs/commands/viewport-rectangle/) pro umístění a změnu měřítka výřezů a [Import](/cs/docs/commands/import/) pro to, co KulmanLab z DXF čte.*
