---
title: "DXF vs DWG: v čem je rozdíl?"
description: "DWG je nativní formát AutoCADu, DXF je otevřený výměnný formát. Co se skutečně liší, který z nich potřebujete a jak získat DXF, když vám poslali DWG."
keywords: [DXF vs DWG, rozdíl mezi DXF a DWG, DWG nebo DXF, co je DWG, co je DXF, DWG do DXF, DXF DWG který formát, formáty CAD souborů, otevřít soubor DWG, formát souboru DXF]
date: 2026-09-02
author: KulmanLab
tag: Průvodce
---

DWG je nativní formát souboru AutoCADu — binární, proprietární a Autodeskem nedokumentovaný. DXF je výměnný formát, který Autodesk zveřejňuje, aby mohly stejné výkresy číst i jiné programy. Stejná geometrie, jiný kontejner — a jen jeden z nich je určen k předávání souborů lidem mimo váš vlastní software.

Právě ten poslední bod je celý praktický rozdíl a rozhoduje o tom, o který formát byste měli žádat.

## Stručně

| | DXF | DWG |
|---|---|---|
| Význam zkratky | Drawing Exchange Format | Drawing |
| Zveřejněná specifikace | Ano, od Autodesku | Ne |
| Kódování | Text (existuje i binární varianta) | Binární |
| Účel | Přenos výkresů mezi programy | Vlastní pracovní formát AutoCADu |
| Velikost souboru | Větší | Menší |
| Čtení jiným softwarem | Velmi rozšířené | Nespolehlivé, přes knihovny získané reverzním inženýrstvím |
| Nese vše, co AutoCAD umí | Ne — zdokumentovanou podmnožinu | Ano |

## Proč vůbec existují dva formáty

Autodesk vydal AutoCAD v roce 1982 s DWG jako pracovním formátem. Je vytvořen pro pohodlí jediného programu: kompaktní, binární a volně měnitelný, kdykoli to AutoCAD potřebuje.

Proto je špatnou volbou pro odesílání komukoli jinému. Autodesk tedy zveřejnil také DXF — stejný výkres zapsaný v zdokumentované, čitelné podobě, kterou může implementovat kterýkoli vývojář. Otevřete `.dxf` v textovém editoru a uvidíte skupinové kódy a názvy sekcí v čistém ASCII.

Oba formáty se verzují společně. Každé vydání AutoCADu přináší revizi DWG a odpovídající revizi DXF; značka `AC1032`, kterou někdy uvidíte v záhlaví souboru, například označuje generaci AutoCADu 2018.

DXF tedy není starší ani horší formát. Je to tentýž výkres, záměrně učiněný čitelným.

## V čem se v praxi opravdu liší

**Otevřenost.** Autodesk DXF dokumentuje a DWG nedokumentuje. Programy, které DWG čtou — a je jich mnoho — spoléhají na knihovny vytvořené reverzním inženýrstvím formátu. Funguje to dobře a je to zcela legitimní, ale znamená to, že podpora DWG zaostává za novými verzemi a mezi aplikacemi se liší, zatímco podporu DXF může kdokoli implementovat přímo podle specifikace.

**Velikost.** Binární DWG je obvykle mnohem menší než tentýž výkres jako ASCII DXF. U velkého projektu to záleží; u jediné součásti ne.

**Věrnost.** DWG drží vše, co AutoCAD dokáže vyjádřit, včetně typů objektů, o nichž jiné programy nemají tušení. DXF pokrývá zdokumentovanou podmnožinu. Pro běžné 2D rýsování — úsečky, oblouky, kružnice, polyline, text, kóty, vrstvy — je tato podmnožina vším, co potřebujete. U modelu spoléhajícího na proprietární objekty AutoCADu se exportem do DXF něco ztratí.

**Šíře podpory.** Prakticky každý CAD, CAM a vektorový nástroj čte DXF. DWG čte méně z nich a ty, které ano, ho často podporují méně úplně.

## Který z nich skutečně potřebujete?

**Někdo vám poslal soubor a nemůžete ho otevřít.** Nejprve zkontrolujte skutečnou příponu. Většina lidí říká „DWG" pro oba formáty a v polovině případů je soubor ve stažených souborech `.dxf`, který jste už mohli otevřít. Viz [jak otevřít DXF bez AutoCADu](/cs/blog/open-dxf-file-without-autocad/).

**Posíláte to na laserový řezač, CNC dílnu nebo k výrobci.** DXF, téměř vždy. Software strojů a řezné služby jsou na něm postavené a 2D řezná geometrie se pohodlně vejde do zdokumentované podmnožiny. Viz [příprava DXF pro laserové řezání](/cs/blog/prepare-dxf-for-laser-cutting/).

**Posíláte to architektovi nebo inženýrovi, který pracuje v AutoCADu.** Zeptejte se. Mnozí preferují DWG, protože to jejich pracovní postup očekává, a DXF si v opačném případě bez problémů otevřou.

**Archivujete něco dlouhodobě.** DXF. Zdokumentovaný textový formát bude čitelný i za dvacet let pro každého, kdo má specifikaci a textový editor. Právě tento argument je celým důvodem, proč výměnné formáty existují.

**Někdo se na to jen potřebuje podívat.** Ani jeden — pošlete PDF. Viz [převod DXF do PDF](/cs/blog/convert-dxf-to-pdf/).

## Jak získat DXF, když vám poslali DWG

Spolehlivá cesta je zeptat se. Ten, kdo soubor poslal, jej otevře ve svém CAD programu a zvolí *Uložit jako* nebo *Exportovat* → DXF. Zabere to asi deset sekund, zvládne to každá desktopová CAD aplikace a soubor vyjde ze softwaru, který jej vytvořil, nikoli z odhadu třetí strany.

Pokud se zeptat nelze, existují převodníky. Dvě věci k zvážení: převod je místo, kde se ztrácí věrnost, a nahráváte cizí výkres službě, kterou nekontrolujete. Pro hobby projekt to nevadí. U práce pro klienta se zeptejte.

Když o něj žádáte, vyplatí se uvést verzi. **DXF R12 je nejbezpečnější** — je prastarý, univerzálně podporovaný, a pokud jde o prostou 2D geometrii, neztratí nic, na čem záleží. Zejména starší software strojů je s ním mnohem spokojenější.

## Dvě věci, ve kterých se lidé mýlí

**„DXF je ztrátový."** Jen v tom smyslu, že nenese proprietární typy objektů AutoCADu. Úsečky, oblouky, kružnice, polyline, text, kóty a vrstvy přežijí beze změny. Při 2D rýsování je ztráta obvykle nulová.

**„DXF je starý formát."** Verzuje se spolu s DWG od roku 1982 a stále tomu tak je. Zmatek vzniká tím, že R12 je tak široce používaný jako cíl kompatibility, že lidé předpokládají, že DXF tam skončilo.

## Kam patří tento nástroj

[KulmanLab](https://kulmanlab.com) čte **DXF, nikoli DWG**, a stojí za to říct proč, místo abychom to považovali za přehlédnutí: DXF je zdokumentované, takže implementace může být správná pouhým přečtením specifikace. DWG by znamenalo záviset na knihovně získané reverzním inženýrstvím, v prohlížeči, u formátu, který se mění podle rozvrhu Autodesku.

Pokud máte `.dwg`, tento nástroj jej neotevře. Pokud máte `.dxf`, můžete jej otevřít v záložce prohlížeče bez čehokoli k instalaci: [app.kulmanlab.com](https://app.kulmanlab.com).

Zpět vypisuje celý výkres — úsečky, kružnice, oblouky, elipsy, polyline, spliny, text s formátováním, kóty, odkazové čáry a šrafy, spolu s vrstvami a typy čar. Soubor otevřený zde a znovu exportovaný odchází se svými anotacemi, nikoli oholený na holou geometrii.

---

*Související: [Import](/cs/docs/commands/import/) pro přesné informace o tom, co KulmanLab z DXF čte, a [Export Manager](/cs/docs/commands/export-manager/) pro to, co který exportní formát nese.*
