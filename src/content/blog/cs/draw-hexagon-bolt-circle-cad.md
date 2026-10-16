---
title: "Jak nakreslit šestiúhelník nebo kruh děr v CADu (Polygon a polární pole)"
description: "Nakreslete pravidelný mnohoúhelník ze středu a poloměru nebo z jedné hrany a pak rozmístěte otvory po roztečné kružnici polárním polem — zdarma v prohlížeči, s přesně zadanými hodnotami."
keywords: [nakreslit šestiúhelník v CADu, pravidelný mnohoúhelník CAD, polární pole CAD, kruh děr výkres, rozmístění otvorů CAD, kruhový vzor CAD, výkres šestihranné matice, nakreslit osmiúhelník CAD, roztečná kružnice PCD, bezplatný nástroj mnohoúhelník CAD]
date: 2026-10-11
author: KulmanLab
tag: Průvodce
---

Chcete-li v CADu nakreslit pravidelný mnohoúhelník, zadejte počet stran, určete střed a pak poloměr — nebo určete jednu hranu a zbytek se dopočítá. Chcete-li nakreslit kruh děr, nakreslete jeden otvor a zopakujte ho kolem středu polárním polem. Tento průvodce dělá obojí, s přesnými čísly, v prohlížeči na [app.kulmanlab.com](https://app.kulmanlab.com) — zdarma, bez instalace a soubor nikdy neopustí váš počítač.

Vytváříme [KulmanLab](https://kulmanlab.com), takže kroky níže používají jeho příkazy. Myšlenky — přes plochy versus přes rohy, průměr roztečné kružnice, zda se kopie při obíhání otáčejí — jsou ve všech CAD programech stejné.

## Nakreslení pravidelného mnohoúhelníku

Pravidelný mnohoúhelník má stejné strany i úhly: šestiúhelník pro matici, osmiúhelník pro značku, pětiúhelník pro dekorativní výřez. V KulmanLab k tomu slouží příkaz **Polygon**.

1. Napište `Mnohoúhelník` do terminálu, nebo použijte tlačítko Polygon v panelu Shapes.
2. Zadejte **počet stran** — libovolné celé číslo od 3 do 1024 — a stiskněte **Enter**. Výzva je předvyplněna počtem, který jste použili naposledy.
3. **Klikněte na střed**, nebo napište `X,Y` pro přesný bod.
4. **Klikněte na poloměr**, nebo ho napište a stiskněte **Enter**.

Výsledkem je jediná uzavřená polylinie, takže na ni funguje vše, co lze dělat s polylinií — přesun, otočení, odsazení, změna měřítka.

### Přes plochy, nebo přes rohy?

Tady lidé klopýtají nejčastěji. „Poloměr" může znamenat dvě různé vzdálenosti a šestiúhelník se zadává tou či onou podle toho, co kreslíte:

| | Měřeno k | Typické použití |
|---|---|---|
| **Inside zapnuto** (výchozí) | Rohům | Tvar, který se musí vejít do dané kružnice |
| **Inside vypnuto** | Středu každé hrany | Tvar s danou šířkou přes plochy — matice, hlavy šroubů, velikosti klíčů |

Přepnete stisknutím `I` u výzvy k poloměru. Šestihranná matice se prodává podle šířky přes plochy, proto použijte **Inside vypnuto** a napište *polovinu* této hodnoty. Pro matici M8 s 13 mm přes plochy:

1. `Mnohoúhelník`, pak `6` jako počet stran, pak klikněte nebo napište střed.
2. Stisknutím `I` vypněte Inside.
3. Napište `6.5` a stiskněte **Enter**.

Plochy jsou od sebe přesně 13 mm; rohy sahají 7,51 mm od středu, tedy asi 15 mm přes rohy. Napíšete-li poloměr místo kliknutí, mnohoúhelník leží nejnižší hranou vodorovně, plochou dolů. Klikněte-li na něj, převezme orientaci z místa, kam kliknete.

### Z jedné hrany

Někdy znáte délku strany, ne poloměr — třeba osmiúhelníkovou desku stolu se stranami 20 mm. U výzvy k prvnímu bodu stiskněte `E` pro režim **Edge** a určete dva konce jedné hrany. Zbylé vrcholy se sestrojí proti směru hodinových ručiček, vlevo od této hrany. Napsáním `0,0` a pak `20,0` vznikne hrana 20 mm podél osy X s mnohoúhelníkem nad ní.

## Nakreslení kruhu děr

Kruh děr — nebo roztečná kružnice, na výkresech „PCD" — je prstenec rovnoměrně rozmístěných otvorů kolem středu. Nakreslíte jeden otvor a pak ho zopakujete. V KulmanLab k tomu slouží **ArrayPolar**.

Vezměte šest otvorů 6,6 mm na roztečné kružnici o průměru 50 mm se středem v počátku:

1. **Nakreslete první otvor.** Spusťte `Kružnice`, napište střed jako `25` `,` `0` — polovina PCD podél osy X — stiskněte **Enter**, pak napište poloměr `3.3` a stiskněte **Enter**.
2. **Vyberte ho** kliknutím na kružnici.
3. **Spusťte polární pole.** Napište `KruhovéPole`, nebo použijte tlačítko ArrayPolar v panelu Edit.
4. **Určete střed vzoru** — napište `0,0`.
5. Terminál ukáže pole, jak právě je — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — a pět kopií se živě zobrazí. Stisknutím **Enter** je přijmete.

To je celý kruh děr. Pro jiný počet stiskněte před potvrzením `I` a napište počet položek — originál se počítá jako jedna a úhel mezi nimi se dopočítá. Nebo stiskněte `A` a napište místo toho rozestup ve stupních; úhel výplně se přepočítá.

Několik podrobností, na kterých záleží:

- **Fill** je úhel od první položky k poslední. Výchozích 360° rozmístí položky po celé kružnici; menší číslo je rozmístí po oblouku — třeba řadu otvorů po čtvrtině kruhu. Záporný úhel jde po směru hodinových ručiček.
- **Rotate** rozhoduje, zda se každá kopie při obíhání otáčí. U kruhových otvorů to nehraje roli. U drážky, zubu nebo držáku ano: zapnuto — každá kopie je otočena ke středu jako originál; vypnuto — každá kopie si drží orientaci originálu a jen se přesune na místo. Stisknutím `R` to před potvrzením přepnete.
- Pole vytváří **kopie** — originál zůstává na místě a každá položka je běžný objekt, který můžete dál upravovat.

## Dejte to dohromady: příruba

Nakreslete šestiúhelník jako obrys, kružnici uprostřed jako otvor a kruh děr pro montážní otvory. Tři příkazy, každý rozměr zadaný přesně a nic k odměřování z obrazovky.

Pokud díl míří na laserový řezač, smažte pomocnou kružnici, kterou jste nakreslili k nalezení roztečné kružnice — řezala by se jako všechno ostatní — a zkontrolujte soubor podle našeho průvodce [přípravou DXF pro řezání laserem](/cs/blog/prepare-dxf-for-laser-cutting/). Mnohoúhelník je uzavřená cesta už svou konstrukcí, což je nejčastější důvod, proč řezné služby soubory odmítají.

## Co tohle nedokáže

- **Jen pravidelné mnohoúhelníky.** Všechny strany jsou stejné. Nepravidelný obrys — tvar, kde jsou některé strany delší — je [polylinie](/cs/docs/commands/polyline/), kterou kreslíte bod po bodu.
- **Jen 2D.** Kreslí ploché obrysy. Nedá vám modelovanou matici ani závitový šroub.
- **Jen desktopové prohlížeče** — Chrome, Firefox, Safari a Edge. Mobilní verze neexistuje.

---

*Související: [Polygon](/cs/docs/commands/polygon/) a [ArrayPolar](/cs/docs/commands/array-polar/) pro všechny volby a klávesy, [Circle](/cs/docs/commands/circle/) pro zadávání přesných poloměrů a [ArrayGrid](/cs/docs/commands/array-grid/) pro opakování objektů v řádcích a sloupcích místo kolem středu.*
