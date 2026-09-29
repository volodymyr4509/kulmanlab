---
title: "Jak otevřít soubor DXF bez AutoCADu"
description: "Dostali jste soubor .dxf a nemáte AutoCAD? Otevřete jej zdarma v prohlížeči bez instalace — plus desktopové alternativy a řešení pro prázdné nebo špatně změřítkované výkresy."
keywords: [otevřít soubor DXF, jak otevřít DXF bez AutoCADu, prohlížeč DXF zdarma, zobrazit DXF online, otevřít DXF v prohlížeči, bezplatný prohlížeč DXF, otvírač souborů DXF, číst soubor DXF, DXF vs DWG, otevřít DXF na Macu]
date: 2026-08-31
author: KulmanLab
tag: Průvodce
---

Chcete-li otevřít soubor DXF bez AutoCADu, přetáhněte jej do CAD editoru v prohlížeči — není co instalovat ani jaký účet vytvářet. Bezplatné desktopové programy jako LibreCAD a QCAD také DXF otevřou. Tento průvodce pokrývá obě cesty a co dělat, když se výkres otevře prázdný, drobný nebo bez textu.

Jeden z níže uvedených nástrojů — [KulmanLab](https://kulmanlab.com) — vytváříme my, takže berte tuto část jako zaujatou a uvedená omezení jako to, u čeho jsme museli být upřímní.

## Co soubor DXF vlastně je

DXF znamená *Drawing Exchange Format*. Vytvořil jej Autodesk, aby si CAD programy mohly předávat výkresy, a je záměrně otevřený a textový — soubor `.dxf` můžete doslova otevřít v textovém editoru a přečíst.

Ta otevřenost je důvodem, proč máte možnosti. DXF není vázán na žádný jediný program a čte jej desítky nástrojů.

Je také důvodem, proč DXF není obrázek. Ukládá geometrii — úsečky, oblouky, kružnice, vrstvy, kóty — nikoli pixely. Přejmenování na `.jpg` jej v prohlížeči obrázků neotevře.

## Možnost 1: otevřít jej v prohlížeči

Nejrychlejší cesta, protože není co stahovat a k čemu se registrovat.

1. Přejděte na [app.kulmanlab.com](https://app.kulmanlab.com).
2. Přetáhněte svůj soubor `.dxf` přímo na plátno — nebo použijte tlačítko **Import** (ikona složky) v panelu souborů.
3. Výkres se načte a pohled se mu automaticky přizpůsobí.

Váš soubor váš počítač nikdy neopustí. KulmanLab běží celý v prohlížeči, takže se výkres zpracovává lokálně a nenahrává se na server.

Odtud můžete posouvat a přibližovat, přepínat vrstvy, měřit vzdálenosti a úhly, upravovat geometrii a exportovat do PDF, PNG, JPEG nebo WebP, pokud potřebujete jen něco k vytištění nebo odeslání.

**Co z DXF čte:** úsečky, kružnice, oblouky, elipsy, polyline, spliny, text, kóty, multileadery a šrafy, plus tabulky vrstev a typů čar souboru.

**Co zapisuje zpět:** stejný seznam. Upravte výkres a exportujte jej a geometrie, text s formátováním, kóty, odkazové čáry i šrafy se vrátí do DXF, s neporušenými tabulkami vrstev a typů čar — takže soubor projde cestou tam a zpět bez ztráty anotací.

**Kde nedosahuje — přečtěte si to, než se na něj spolehnete:**

- **Pouze 2D.** DXF obsahující 3D tělesa nebo sítě je pro tento nástroj špatný soubor.
- **Žádné bloky.** Odkazy na bloky (`INSERT`) se nezpracovávají, takže výkres sestavený z opakovaných blokových symbolů se načte neúplný.
- **DXF, nikoli DWG.** Viz část o DWG níže.
- **Pouze desktopové prohlížeče** — Chrome, Firefox, Safari a Edge. Mobilní verze neexistuje.

Pokud je některý z těchto bodů překážkou, poslouží vám lépe jeden z níže uvedených desktopových nástrojů.

## Možnost 2: bezplatné desktopové programy

Instalace se vyplatí, pokud to budete dělat pravidelně, nebo pokud váš soubor používá funkce, které nástroj v prohlížeči nezvládne.

**LibreCAD** — bezplatný a open source, pouze 2D, běží na Windows, macOS i Linuxu. Duchem nejblíže klasickému 2D rýsování a solidní editor DXF.

**QCAD** — jádro, z něhož LibreCAD vyrostl. Bezplatná komunitní edice plus placená verze Pro s dalšími funkcemi.

**FreeCAD** — bezplatný a open source, zaměřený na 3D parametrické modelování, ale schopný importovat DXF. Zbytečně mnoho, pokud se chcete jen podívat na 2D výkres, a má strmou křivku učení.

**Autodesk Viewer** — vlastní bezplatný webový prohlížeč Autodesku. Pouze pro zobrazení a vyžaduje přihlášení účtem Autodesk.

**Inkscape** — není to CAD, ale importuje DXF a je rozumnou volbou, pokud potřebujete jen zobrazit tvary nebo je převést do SVG.

## „Ono je to vlastně DWG, že?"

Velmi často ano. DXF i DWG jsou formáty Autodesku a lidé oba názvy zaměňují, ale nejsou to totéž:

| | DXF | DWG |
|---|---|---|
| Formát | Otevřený, textový | Proprietární, binární |
| Účel | Výměna mezi programy | Nativní formát AutoCADu |
| Podpora jinde | Široká | Omezená a často nedokonalá |

Než začnete hledat prohlížeč, zkontrolujte skutečnou příponu souboru. Pokud je `.dwg`, výše uvedené nástroje většinou nepomohou — včetně KulmanLab, který podporuje pouze DXF.

Spolehlivé řešení je získat místo toho DXF: ten, kdo soubor poslal, jej může otevřít ve svém CAD programu a exportovat nebo *Uložit jako* DXF. Zvládne to téměř každá desktopová CAD aplikace a zabere to asi deset sekund. Převod DWG vlastními silami pomocí převodníku třetí strany je možný, ale ztrátovější, a svěřujete cizí výkres neznámému nástroji.

## Když se výkres otevře, ale vypadá špatně

**Plátno je prázdné.** Obvykle je geometrie daleko od počátku, takže pohled míří do prázdna. Použijte příkaz *fit* nebo *zoom extents*, abyste skočili na výkres. Zkontrolujte také, zda nejsou vrstvy vypnuté — výkres může dorazit s většinou vrstev zmrazených.

**Všechno je mikroskopické, nebo absurdně obrovské.** DXF spolehlivě nezaznamenává své jednotky. Stejný výkres může být vytvořen v milimetrech, centimetrech, palcích nebo stopách a soubor často neříká, v jakých. Změřte něco, čí skutečnou velikost znáte, a změňte měřítko odtud.

**Text chybí nebo je nahrazen.** Písma se do DXF nevkládají. Pokud výkres používá písmo, které váš počítač nemá, text se vrátí k něčemu jinému nebo zmizí. Načtení původního písma to opraví.

**Části výkresu se nenačetly.** Něco v souboru používá typ objektu, který váš nástroj nečte — běžně bloky, 3D tělesa nebo proprietární rozšíření zapsaná programem, který soubor vytvořil. Než usoudíte, že je soubor rozbitý, zkuste druhý nástroj.

**Nic se neotevře vůbec.** Ověřte, že soubor opravdu je DXF: otevřete jej v prostém textovém editoru. Pravý DXF začíná čitelnými skupinovými kódy ASCII a názvy sekcí jako `SECTION` a `HEADER`. Pokud vidíte binární šum, jde o DWG nebo binární variantu DXF.

## Co zvolit

**Potřebujete se na to jen jednou podívat?** Otevřete jej v prohlížeči. Instalovat CAD sadu kvůli čtení jednoho souboru, který vám někdo poslal e-mailem, není dobrý obchod.

**Potřebujete měřit, značkovat nebo tisknout?** Nástroje v prohlížeči to zvládají dobře a tisk do PDF ve skutečném měřítku je obvykle to, co lidé skutečně chtějí.

**Děláte skutečnou rýsovací práci, opakovaně?** Nainstalujte LibreCAD nebo QCAD. Specializovaný desktopový software vám dlouhodobě poslouží lépe.

**Máte DWG?** Požádejte odesílatele o DXF. Je to rychlejší a bezpečnější než jakákoli cesta převodu.

---

*Související: [Import](/cs/docs/commands/import/) pro úplný seznam toho, co KulmanLab z DXF čte, [Export Manager](/cs/docs/commands/export-manager/) pro to, co který exportní formát nese, a [Print Manager](/cs/docs/commands/print-manager/) pro výstup do PDF ve skutečném fyzickém měřítku.*
