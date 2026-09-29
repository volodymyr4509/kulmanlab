---
title: Export Manager — stažení výkresů jako DXF nebo JSON v KulmanLab CAD
description: Stáhněte aktuální výkres jako DXF nebo JSON a zaškrtněte pro každý typ objektu, co se do souboru dostane. Oba formáty obsahují geometrii, text, kóty, odkazové čáry a šrafy, včetně hladin a typů čar.
keywords: [export DXF, export CAD souboru, stažení DXF v prohlížeči, uložení DXF online, export JSON CAD, export KulmanLab, stažení CAD souboru, DXF export, uložení výkresu do souboru, stažení DXF]
group: file
order: 6
---

# Export Manager

Příkaz `exportmanager` stáhne aktuální výkres do vašeho souborového systému. Vedle sebe jsou dva formáty — **DXF** pro kompatibilitu s jinými CAD nástroji a **JSON** pro uložení bez ztráty informací v rámci KulmanLab CAD — a každý má svůj vlastní seznam toho, co do souboru zařadit.

## Jak exportovat

1. Klikněte na tlačítko **Export** v panelu souborů (ikona stahování), nebo napište `exportmanager` do terminálu.
2. Otevře se vyskakovací okno **Export Manager** se dvěma sloupci, **JSON** a **DXF**, z nichž každý vypisuje typy objektů výkresu se zaškrtávacím políčkem a počtem.
3. Odškrtněte vše, co chcete vynechat. Na začátku je vše zaškrtnuto.
4. Klikněte na **Export JSON** nebo **Export DXF**. Soubor se stáhne do výchozí složky stahování a okno se zavře.

Stisknutím `Escape` okno zavřete bez exportu.

## Výběr toho, co exportovat

Oba sloupce vypisují stejné typy objektů, každý s počtem, kolik jich je ve výkresu:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Po otevření okna je vše zaškrtnuto, takže okamžitý export vám dá celý výkres. Odškrtnutím typu ho z daného souboru vynecháte.

Čtyři věci, které stojí za to vědět:

- **Oba sloupce jsou nezávislé.** Odškrtnutí Hatches u DXF nijak neovlivní to, co vytvoří **Export JSON**. Každý formát si drží vlastní výběr.
- **Typ, který ve výkresu nemáte, je zašedlý.** Řádek s počtem `0` nelze zaškrtnout, takže seznam slouží zároveň jako rychlý přehled toho, co výkres skutečně obsahuje.
- **Počty jsou momentka.** Zjišťují se při otevření okna a neaktualizují se, když se výkres za oknem změní. Zavřete a znovu otevřete pro jejich obnovení.
- **Nic se nemaže.** Odškrtnutí formuje pouze exportovaný soubor — samotný výkres zůstává nedotčen.

**Linear Dimensions** zahrnují lineární, zarovnané a navazující kóty: jde o jeden typ objektu vytvářený třemi různými příkazy. Kóty poloměru, průměru a úhlu mají každá svůj vlastní řádek.

Díky tomu je příprava řezného souboru snadná. Odškrtněte Text, čtyři řádky kót, Leaders a Hatches a **Export DXF** vám dá řezanou geometrii a nic jiného — viz [příprava DXF pro laserové řezání](/cs/blog/prepare-dxf-for-laser-cutting/).

## Výběr formátu

| Formát | Přípona | Nejvhodnější pro | Omezení |
|--------|---------|------------------|---------|
| **JSON** *(nativní)* | `.json` | Uložení práce pro pozdější otevření v KulmanLab CAD | Nekompatibilní s jinými CAD nástroji |
| **DXF** | `.dxf` | Sdílení s FreeCAD, LibreCAD, AutoCAD apod. | Kolik se zachová, závisí na přijímající aplikaci |

**Kdy použít JSON:** kdykoli chcete uložit úplnou kopii své práce. JSON je nativní formát KulmanLab a zachovává každý objekt přesně — včetně kót, odkazových čar, šraf a všech dat hladin.

**Kdy použít DXF:** když potřebujete výkres předat někomu, kdo používá jinou CAD aplikaci. Exportovaný soubor používá formát DXF AC1032 a lze jej otevřít ve většině nástrojů podporujících DXF.

## Co se exportuje v jednotlivých formátech

### Export JSON

Zahrnuty jsou všechny typy objektů:

- Lines, circles, arcs, ellipses, polylines, splines
- Text
- Kóty (lineární, zarovnané, navazující, poloměru, průměru, úhlové)
- Leaders (vícenásobné odkazové čáry)
- Hatches včetně vzoru, měřítka, úhlu a počátku
- Hladiny a typy čar

### Export DXF

Zahrnuty jsou všechny typy objektů:

- Lines, circles, arcs, ellipses, polylines (exportované jako `LWPOLYLINE`), splines
- Text zapsaný jako `MTEXT` s formátováním jednotlivých úseků — písmo, výška, tučné, kurzíva, podtržení, přeškrtnutí
- Kóty (lineární, zarovnané, navazující, poloměru, průměru, úhlové) jako standardní objekty `DIMENSION`
- Leaders jako `MULTILEADER`
- Hatches s jejich vzorem, měřítkem, úhlem a počátkem
- Hladiny a typy čar

Soubor se zapisuje jako DXF AC1032, takže výkres exportovaný z KulmanLab se v jiných nástrojích schopných číst DXF otevře s neporušenými poznámkami, místo aby dorazil jako holá geometrie.

Co s ním pak která přijímající aplikace udělá, se stále liší — podpora DXF se mezi nástroji liší a starší nástroj může ignorovat objekty, které novější přečte. Pokud musí výkres vypadat všude stejně, [Print Manager](../print-manager/) jej zachytí jako PDF nebo obrázek.

## Název exportovaného souboru

Stažený soubor nese název aktuálního souboru výkresu (např. `myplan.json`) s příponou změněnou podle zvoleného formátu. Výkres, který nikdy nebyl pojmenován, se exportuje jako `drawing.dxf` nebo `drawing.json`.

## Rozdíl mezi Export Manager a Print Manager

| Vlastnost | Export Manager | Print Manager |
|-----------|--------|-------|
| Výstup | Vektorový zdrojový soubor (.dxf / .json) | Rastrový obrázek (.png / .jpeg / .webp / .pdf) |
| Editovatelný v jiných nástrojích | Ano (DXF) | Ne |
| Zachovává hladiny a typy čar | Ano | Ne (vykresleno naplocho) |
| Zachycuje kóty a odkazové čáry | Ano | Ano |

**Export Manager** použijte, když potřebujete editovatelný soubor. [Print Manager](../print-manager/) použijte, když potřebujete vizuální snímek.

## Související příkazy

- [Import](../import/) — otevření souboru DXF nebo JSON
- [Print Manager](../print-manager/) — export plátna jako PNG, JPEG, WebP nebo PDF obrázku
- [File Manager](../file-manager/) — procházení výkresů uložených v úložišti prohlížeče
