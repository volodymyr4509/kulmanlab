---
title: "Proč se váš DXF otevřel ve špatné velikosti (a jak to opravit)"
description: "DXF, který se otevře 25,4× menší nebo 1000× větší, je nesoulad jednotek, nikoli poškozený soubor. Jak zjistit poměr, změnit měřítko výkresu a ověřit opravu."
keywords: [DXF špatné měřítko, DXF špatná velikost, jednotky DXF, DXF mm nebo palce, DXF importován příliš malý, činitel měřítka DXF, "DXF 25,4", oprava měřítka DXF, nesoulad jednotek DXF, změna měřítka DXF]
date: 2026-09-04
author: KulmanLab
tag: Průvodce
---

DXF se otevře a součást, která by měla být 40 mm široká, naměří 1,575. Nebo dorazí půdorys velký jako městský blok. Soubor není poškozený a nikdo neudělal nic špatně — výkres je v pořádku a číslo, které k němu patří, se cestou ztratilo.

Než cokoli přeškálujete, stojí za to tomu porozumět, protože oprava zabere deset sekund, jakmile víte, na jaký poměr se díváte, a hádání je způsob, jak nakonec dvakrát vyřežete špatnou velikost.

## DXF jednotky téměř vůbec nenese

DXF ukládá souřadnice jako prosté číslo. Úsečka z `0,0` do `40,0` je dlouhá čtyřicet *něčeho*. Formát k souřadnici jednotku nepřipojuje a ani nemá kam — číslo je geometrie.

Nejblíž tomu je proměnná záhlaví `$INSUNITS`, jediný kód pro celý soubor: `1` pro palce, `4` pro milimetry, `6` pro metry a tak dále. Dvě věci ji činí slabší, než zní. Je to jedna hodnota pro celý výkres, takže nemůže popsat soubor sestavený ze smíšených zdrojů. A je pouze doporučující: mnoho aplikací ji čte jen při *vkládání* jednoho výkresu do druhého a při prostém otevření souboru ji zcela ignoruje, z rozumného důvodu, že ten, kdo výkres otevírá, obvykle ví, co nakreslil.

„40" tedy cestuje neporušené a „milimetry" ne. Každý DXF se špatnou velikostí, který kdy obdržíte, je tato věta.

## Nejprve zjistěte poměr

Změřte jeden prvek, jehož skutečnou velikost opravdu znáte — průměr otvoru, hranu listu, standardní rozteč upevnění. Vydělte velikost, kterou by měl mít, velikostí, kterou naměří. Výsledek je téměř vždy jeden z těchto:

| Poměr | Co se stalo |
|---|---|
| **25,4** | Nakresleno v palcích, čteno jako milimetry |
| **0,03937** | Nakresleno v milimetrech, čteno jako palce |
| **1000** | Nakresleno v metrech, čteno jako milimetry |
| **0,001** | Nakresleno v milimetrech, čteno jako metry |
| **12** | Stopy čtené jako palce |
| **304,8** | Stopy čtené jako milimetry |

Pokud je vaše číslo jedním z nich, máte nesoulad jednotek a nic jiného a zbytek tohoto průvodce zabere minutu.

Pokud není — řekněme 1,37 nebo 3,2 — zastavte se. To není problém jednotek a přeškálování vytvoří výkres, který je špatně hůře odhalitelným způsobem. Přeskočte na poslední část.

## Oprava

Potřebujete něco, co měří, a něco, co mění měřítko. Dělá to každý CAD nástroj; zde je to v [KulmanLab](https://kulmanlab.com/), který otevře DXF v záložce prohlížeče bez čehokoli k instalaci:

1. Otevřete soubor — přetáhněte jej na stránku, nebo použijte [Import](/cs/docs/commands/import/).
2. Spusťte [Distance](/cs/docs/commands/distance/) a vyberte oba konce svého známého prvku. Přichycení zde záleží: vybírejte skutečné koncové body, ne něco poblíž, jinak si do činitele zapečete vlastní chybu.
3. Vydělte. Známá velikost ÷ naměřená velikost. Otvor 40 mm, který ukazuje 1,575, dává 40 ÷ 1,575 ≈ **25,4**.
4. Vyberte vše, spusťte [Scale](/cs/docs/commands/scale/), vyberte základní bod a napište činitel.

Základní bod zůstává pevný, zatímco vše ostatní se pohybuje, takže jej umístěte někam, o čem lze uvažovat — roh součásti, nebo počátek. U výkresu, který se chystáte poslat k řezání, je rozumnou volbou obvykle počátek.

Pomáhá, že KulmanLab nemá vlastní nastavení jednotek. Souřadnice jsou prostě čísla, což je přesně stav, v jakém chcete mít výkres, když zjišťujete, co jeho čísla znamenají. Za vašimi zády neprobíhá žádný převod jednotek a není s čím bojovat.

## Ověřte opravu, než jí uvěříte

Změřte *druhý* prvek někde jinde ve výkresu, jehož skutečnou velikost také znáte. Poté ji zkontrolujte.

To je krok, který lidé přeskakují, a je to jediný, který zachytí špatný případ. Pokud druhé měření nyní vyjde správně, výkres byl jednotně ve špatných jednotkách a nyní je jednotně ve správných. Hotovo.

Pokud je druhé měření *stále* špatně, a to o jinou hodnotu, výkres nikdy nebyl prostým nesouladem jednotek. Právě jste změnili měřítko nekonzistentního výkresu, což je horší než tam, kde jste začali, protože chyba už není čistým poměrem, který by kdokoli odhalil.

[Area](/cs/docs/commands/area/) je zde užitečný druhý názor, zejména u plošných materiálů. Plocha se mění se *druhou mocninou* činitele, takže chyba délky 25,4× se projeví jako chyba plochy 645× — rozdíl, který je těžké si vymluvit.

## Aby se to příště nestalo

Jednotky se ztrácejí mezi lidmi, takže i oprava sídlí tam.

**Uveďte jednotku při odeslání souboru.** Jeden řádek ve zprávě. „Všechny rozměry v mm." Nic to nestojí a odstraní to celý problém.

**Pošlete s ním referenční rozměr.** Řekněte jim jedno skutečné měření — „vnější deska je široká 300 mm". Příjemce pak může soubor ověřit, místo aby předpokládal, a pokud se něco pokazilo, opraví to za minutu, aniž by se musel vracet za vámi.

**Zeptejte se, když soubor přijímáte vy.** Pokud soubor dorazí bez uvedených jednotek a chystáte se z něj řezat materiál, jedna zpráva je levnější než jeden zničený plech.

**Kreslete v jednotkách, které očekává váš výstup.** Laserové řezání, CNC a většina výrobních postupů očekává milimetry. Pokud soubor míří tam, kreslete jej v milimetrech a není co převádět, a tedy ani co pokazit. Viz [příprava DXF pro laserové řezání](/cs/blog/prepare-dxf-for-laser-cutting/).

## Když nejde o problém jednotek

Pokud váš poměr nebyl čistým převodem jednotek, pravděpodobné příčiny jsou jiného druhu:

- **Výkres míchá měřítka.** Někdo nakreslil část v měřítku 1:1 a vložil detail v měřítku 1:5, nebo byl blok vložen s činitelem měřítka a nikdy nebyl opraven. Opravte problematickou geometrii, nikoli celý soubor.
- **Měřili jste geometrii papírového prostoru.** Razítko nebo anotační rámeček je nakreslen ve velikosti listu, nikoli ve velikosti modelu. Měřte něco, co je součástí skutečného objektu.
- **Měřili jste špatnou věc.** Nominálně 40mm otvor může být nakreslen na 39,8 kvůli toleranci a „300mm" panel může mít 300 po vnější stranu drážky, kterou nevidíte. Vyberte prvek s jednoznačnou hranou.

V každém z těchto případů je odpovědí zjistit, čím výkres skutečně je, ne měnit měřítko. Výkres, jehož části se navzájem neshodují, vás bude dál stát materiál, dokud jej někdo neotevře a nepodívá se.

---

*Související: [Distance](/cs/docs/commands/distance/) pro měření, [Scale](/cs/docs/commands/scale/) pro opravu, [Area](/cs/docs/commands/area/) pro druhý názor a [Export Manager](/cs/docs/commands/export-manager/) pro to, co který formát nese, když soubor posíláte zpět.*
