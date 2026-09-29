---
title: File Manager — mřížka náhledů, přejmenování a mazání v KulmanLab CAD
description: Příkaz File Manager otevře mřížku náhledů všech uložených výkresů — kliknutím na náhled výkres otevřete, přejmenujete jej přímo na místě, nebo smažete s potvrzením.
keywords: [správce souborů CAD, poslední soubory CAD, přejmenování výkresu, smazání výkresu, mřížka náhledů CAD, obnovení výkresu, znovuotevření DXF, úložiště prohlížeče CAD, soubory KulmanLab, uložené výkresy, IndexedDB CAD, záloha CAD výkresu]
group: file
order: 3
---

# File Manager

Příkaz `FileManager` otevře **mřížku náhledů** všech výkresů uložených v místním úložišti vašeho prohlížeče, seřazených podle času posledního uložení. Použijte jej k opětovnému otevření předchozího výkresu, jeho přejmenování nebo smazání.

## Otevření File Manageru

- Napište `FileManager` do terminálu, **nebo**
- klikněte na tlačítko **File Manager** (ikona historie) v panelu souborů v horní části obrazovky.

Panel se otevře na levé straně plátna a automaticky se zavře, jakmile spustíte jiný příkaz nebo [importujete](../import/) soubor — nezůstává tedy viset nad výkresem, který ještě nevypisuje. Pokaždé se otevře s čerstvým seznamem.

## Mřížka náhledů

Každý uložený výkres je karta s živě vykresleným náhledem, názvem a časem poslední aktualizace. Náhledy se generují na místě při každém otevření panelu — nic se předem nevykresluje ani neukládá — takže karta chvíli zobrazuje zástupnou ikonu, než se její náhled nakreslí. Stejná ikona se zobrazí i tehdy, když generování selže, nebo když výkres opravdu ještě nemá žádné objekty.

| Akce | Jak |
|------|-----|
| **Otevřít** výkres | Klikněte na jeho náhled — nahradí aktuální obsah plátna |
| **Přejmenovat** | Klikněte na ikonu tužky, nebo dvakrát klikněte na název |
| **Smazat** | Klikněte na ikonu koše a potvrďte |

Pokud ještě nebyly uloženy žádné soubory, panel zobrazí „No files saved". Když je souborů víc, než se vejde na jednu obrazovku, pod mřížkou se objeví ovládání **Page 1 of N**.

Karta souboru, který je právě otevřen v editoru, je označena zvýrazněným kroužkem a **nemá tlačítko smazání** — smazání otevřeného souboru by vymazalo jeho uložená data, zatímco by ho plátno dál zobrazovalo, a další úprava by ho okamžitě uložila zpět. Přejmenování je stále dostupné.

## Smazání souboru

Kliknutí na ikonu koše nesmaže okamžitě — na dané kartě se zobrazí potvrzovací překrytí („Delete this file?" s tlačítky **Delete** / **Cancel**), protože smazání je trvalé a nelze je vrátit. Kliknutí na **Cancel**, na ikonu koše jiné karty nebo kamkoli jinam na kartě zruší čekající potvrzení bez smazání čehokoli.

## Přejmenování souboru

Klikněte na ikonu tužky (nebo dvakrát na název souboru) a upravte jej přímo na místě, poté stiskněte **Enter** pro potvrzení nebo **Escape** pro zrušení. Přejmenování je zamítnuto, pokud nový název:

- je prázdný nebo delší než 100 znaků,
- už používá jiný uložený soubor (bez ohledu na velikost písmen),
- končí tečkou, nebo
- je názvem zařízení rezervovaným ve Windows, jako `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9` nebo `LPT1`–`LPT9`.

Znaky, které nejsou v názvu souboru platné (`\ / : * ? " < > |`), se během psaní automaticky odstraňují. Přejmenování mění pouze popisek — nemá vliv na pozici výkresu v mřížce, protože ta se řadí podle času posledního uložení, nikoli podle názvu.

## Zálohujte svou práci — úložiště prohlížeče není trvalé

KulmanLab ukládá výkresy do **IndexedDB**, databáze zabudované ve vašem prohlížeči:

- Soubory jsou uloženy **pouze lokálně na vašem zařízení** — na žádný server se nic nenahrává.
- Každý prohlížeč a zařízení má své vlastní nezávislé úložiště. Výkres uložený v Chrome na jednom počítači se neobjeví ve Firefoxu ani na jiném stroji.
- Toto úložiště **lze bez varování vymazat** — smazáním dat webu nebo historie prohlížení, nedostatkem místa na disku, použitím anonymního okna, přeinstalováním prohlížeče či systému, nebo přechodem na jiné zařízení. Žádná z těchto situací vám nedá šanci obnovit, co tam bylo.

**Jediný spolehlivý způsob, jak výkres ochránit, je [exportovat](../export-manager/) ho do vlastního úložiště.** Používejte `.json` (nativní formát KulmanLab), kdykoli je to možné — zachovává každý objekt přesně; `.dxf` použijte, když potřebujete kompatibilitu s jinými CAD nástroji. Dělejte to u všeho, o co byste nechtěli přijít, a před vymazáním dat prohlížeče, změnou prohlížeče či zařízení nebo odložením počítače na delší dobu.

## Automatické načtení souboru při spuštění

Když otevřete KulmanLab CAD, aplikace automaticky načte z úložiště **naposledy upravený soubor**. Nemusíte jej pokaždé ručně otevírat z File Manageru.

## Správa úložiště

Počet výkresů, které můžete uložit, není pevně omezen, ale úložiště prohlížeče je konečné. Pokud si všimnete varování o úložišti, smažte starší soubory z File Manageru — nebo ještě lépe, nejdřív je exportujte, aby se nic neztratilo.

Chcete-li najednou odstranit všechny uložené výkresy, použijte příkaz [WipeStorage](../wipestorage/).

## Názvy souborů

Nové i importované soubory dostanou prostý název — bez vloženého časového razítka. Pokud je tento název už obsazený, automaticky se připojí přípona ve stylu Finderu/Průzkumníka (`plan (2)`, `plan (3)`, …), aby se nic nepřepsalo. Souboru můžete později kdykoli dát srozumitelnější název pomocí [přejmenování](#přejmenování-souboru).

## Související příkazy

- [Import](../import/) — načtení výkresu ze souborového systému do úložiště prohlížeče
- [Export Manager](../export-manager/) — stažení výkresu do souborového systému
- [New File](../new-file/) — zahájení prázdného výkresu (také se ukládá automaticky)
- [WipeStorage](../wipestorage/) — vymazání všech uložených souborů z úložiště prohlížeče
