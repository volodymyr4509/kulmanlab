---
title: "Jak připravit soubor DXF pro laserové řezání"
description: "Proč řezací služby odmítají soubory DXF a jak opravit ten váš — uzavřené cesty, jednotky, řezná spára a hladiny — zdarma v prohlížeči bez instalace."
keywords: [DXF pro laserové řezání, příprava DXF pro laserový řezač, formát souboru pro laserové řezání, DXF odmítnut laserové řezání, uzavřené cesty DXF, přídavek na řeznou spáru laser, nastavení souboru pro laserové řezání, jednotky DXF laser, hladiny řezání rytí gravírování, bezplatný editor DXF laser]
date: 2026-09-02
author: KulmanLab
tag: Průvodce
---

DXF pro laserové řezání potřebuje čtyři věci: uzavřené cesty, správné jednotky, pouze řeznou geometrii — žádné kóty, poznámky ani šrafování — a hladiny, které oddělují řez od rýhování a gravírování. Tento průvodce probírá každou z nich a jak svůj soubor zkontrolovat dřív, než ho služba odmítne.

Všechno to zvládnete zdarma v prohlížeči na [app.kulmanlab.com](https://app.kulmanlab.com) — bez instalace, bez účtu a soubor váš počítač neopustí. Pro tento postup jsme KulmanLab původně vytvořili, takže výhrady platné pro jiné CAD úlohy se zde většinou neuplatňují: laserové řezání je 2D a DXF je to, co řezací služby chtějí.

## Proč se soubory odmítají

Pět důvodů vysvětluje téměř všechno.

**Otevřené cesty.** Tvar, který vypadá uzavřený, ale má v jednom rohu vlásečnicovou mezeru, není oblast — je to soubor nespojených úseček. Řezače potřebují vědět, co je uvnitř a co vně, a otevřená kontura nemá žádný vnitřek. To je zdaleka nejčastější důvod odmítnutí.

**Špatné nebo nejednoznačné jednotky.** DXF spolehlivě nezaznamenává, co jeho čísla znamenají. Stejný soubor může být v milimetrech, centimetrech, palcích nebo stopách a soubor to často neříká. Díl, který dorazí 25,4× příliš velký nebo malý, je právě tohle.

**Nepotřebný balast mimo geometrii.** Kóty, razítka, poznámky, šrafování, konstrukční čáry. Stroj se vaši anotaci rád pokusí vyřezat.

**Duplicitní čáry.** Dvě stejné úsečky přes sebe znamenají, že laser řeže tutéž dráhu dvakrát — ztracený čas, spálené hrany a u tenkého materiálu riziko požáru.

**Všechno na jedné hladině.** Pokud nejsou řez, rýhování a gravírování odděleny, služba nepozná, co je co, a požádá vás o opětovné odeslání.

## Příprava souboru

Přetáhněte svůj `.dxf` na plátno na [app.kulmanlab.com](https://app.kulmanlab.com), nebo použijte tlačítko **Import** v panelu souborů. Výkres se načte a pohled se mu přizpůsobí.

**1. Podívejte se, co skutečně máte.** Napište `fit`, čímž vše zobrazíte. Přibližte každý roh každého dílu — mezery jsou při zobrazení celého výkresu neviditelné a při 10× zvětšení zřejmé. To je kontrola, která vám ušetří e-mail s odmítnutím.

**2. Smažte, co se nemá řezat.** Konstrukční čáry, poznámky, okraje, kóty. `layer-isolate` zobrazí jednu hladinu po druhé, čímž najdete zbloudilé prvky ukryté pod skutečnou geometrií.

**3. Zavřete mezery.** `trim` ořízne přečnívající konce tam, kde se dvě úsečky míjejí za průsečíkem. Kde úsečky nedosahují, přetáhněte úchyt koncového bodu na souseda — úchyty se přichytávají, takže se konce skutečně setkají, místo aby se jen téměř setkaly.

**4. Zkontrolujte rozměry.** `distance` měří mezi dvěma body, `area` měří uzavřenou oblast z kliknutých bodů. Změřte jeden prvek, jehož skutečný rozměr znáte. Pokud vychází 25,4krát vedle, je váš soubor ve špatném systému jednotek.

**5. Oddělte řez od rýhování a gravírování.** Každou operaci dejte na vlastní hladinu s jasným názvem — `CUT`, `SCORE`, `ENGRAVE`. Většina služeb to buď požaduje, nebo chce samostatné soubory. `layer-manager` je vytvoří a přiřadí.

Poté exportujte: **Export** → **DXF**. KulmanLab zapisuje prostý DXF AC1032, což je to, co řezací služby a software strojů očekávají.

## Řezná spára

Laser při řezání odebírá materiál — zhruba 0,1–0,3 mm podle stroje, materiálu a tloušťky. Vyřežete čtverec 50 mm a dostanete čtverec o něco menší než 50 mm a díl, který do něj má zapadnout natěsno, nezapadne.

Dva způsoby, jak to vyřešit:

**Nechte to na službě.** Většina řezacích služeb kompenzaci řezné spáry aplikuje sama, a pokud ano, vaše vlastní kompenzace udělá díly špatně na druhou stranu. Než cokoli upravíte, zeptejte se.

**Udělejte to sami.** `offset` vytvoří rovnoběžnou kopii tvaru v pevné vzdálenosti — polovina šířky řezné spáry, směrem ven u dílů, které chcete ponechat v rozměru, dovnitř u otvorů. Funguje na úsečkách, kružnicích, obloucích, elipsách a polyline. Jde o jeden objekt po druhém, takže je praktický pro hrstku kritických prvků, ne pro plech o dvou stech dílech.

Pokud záleží na toleranci, vyřežte jeden zkušební kus, než se pustíte do materiálu.

## Co ověřit u exportu DXF

Stojí za to vědět, než se na něj spolehnete:

- **Anotace odškrtněte, nemažte.** Text, kóty, odkazové čáry i šrafy se nyní exportují, takže cokoli zbyde ve výkresu, skončí v souboru. Nemusíte to mazat: Export Manager vypisuje každý typ objektu s vlastním zaškrtávacím políčkem, takže odškrtnutím Text, čtyř řádků kót, Leaders a Hatches dostanete DXF s řeznou geometrií a ničím jiným, přičemž samotný výkres zůstane nedotčen.
- **Text se zapíše jako `MTEXT`, což není totéž jako gravírovatelná geometrie.** Písmo se exportuje s neporušeným formátováním, ale řada softwarů strojů chce obrysy místo živého textu na hladině gravírování. Zjistěte, co ten váš přijímá, než kolem toho naplánujete gravírované nápisy.
- **Odkazy na bloky se neimportují.** Výkres sestavený z opakovaných blokových symbolů dorazí neúplný, takže zkontrolujte počty dílů proti originálu.

Spliny se exportují *ano*. Některý software strojů s nimi zachází špatně a dává přednost polyline — pokud to platí i pro ten váš, překreslete křivky jako polyline nebo oblouky.

## Upozornění na automatizaci

KulmanLab **nemá žádnou předletovou kontrolu**. Nic nehledá otevřené kontury, duplicitní čáry ani problémy s jednotkami a nehlásí je. Výše uvedené kontroly jsou ruční: přiblížit, změřit, podívat se.

To je v pořádku pro hrstku dílů a únavné u celého nestovaného plechu. Pokud vyrábíte plechy pravidelně, poslouží vám lépe nástroj s automatickým validátorem — a u jednotlivých dílů, což je většina lidí většinu času, pečlivé prohlédnutí souboru zachytí stejné problémy.

## Než to odešlete

- Každá řezná cesta uzavřená — rohy zkontrolovány při velkém zvětšení
- Jeden známý rozměr změřen a správný
- Žádné kóty, poznámky, okraje ani konstrukční geometrie nezbyly
- Žádné duplicitní čáry přes sebe
- Řez, rýhování a gravírování na samostatných, jasně pojmenovaných hladinách
- Řezná spára: buď aplikována, nebo záměrně ponechána službě
- Exportováno jako DXF, jednou znovu otevřeno pro ověření, že vypadá správně

Ten poslední bod stojí deset sekund a zachytí překvapení z exportu dřív, než je zachytí služba.

---

*Související: [Import](/cs/docs/commands/import/) pro to, co KulmanLab z DXF čte, [Export Manager](/cs/docs/commands/export-manager/) pro přesně to, co který formát nese, [Offset](/cs/docs/commands/offset/) pro kompenzaci řezné spáry a [LayerManager](/cs/docs/commands/layer-manager/) pro nastavení hladin řezání a gravírování.*
