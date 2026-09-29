---
title: Příkaz ClipboardCopy — kopírování objektů do systémové schránky
description: Příkaz ClipboardCopy zapíše vybrané objekty do systémové schránky jako text JSON spolu s hladinami a typy čar, na které odkazují, takže je lze příkazem ClipboardPaste vložit do jiného výkresu nebo jiné karty prohlížeče.
keywords: [CAD kopírování do schránky, kopírování objektů mezi výkresy, kopírování CAD objektů do schránky, Ctrl+C CAD, kopírování mezi kartami CAD, kopírování mezi kartami prohlížeče, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Příkaz `ClipboardCopy` zapíše vybrané objekty do vaší **systémové schránky** jako text JSON. Protože používá skutečnou schránku, a ne paměťovou vyrovnávací paměť, zkopírovaná geometrie přežije i mimo výkres: vložte ji do jiného souboru, do druhé karty prohlížeče nebo do okna, které otevřete později, pomocí [ClipboardPaste](../clipboard-paste/).

To je rozdíl oproti [Copy](../copy/): Copy duplikuje objekty uvnitř aktuálního výkresu jediným gestem, zatímco ClipboardCopy je uloží někam, odkud je lze načíst z úplně jiného výkresu.

## Dva způsoby spuštění

**Nejdřív vybrat, pak kopírovat** — rychlá cesta:

1. Vyberte na plátně jeden nebo více objektů.
2. Stiskněte `Ctrl+C` (`Cmd+C` v macOS), nebo napište `ClipboardCopy` do terminálu.
3. Objekty se okamžitě zapíší do schránky a příkaz se ukončí.

**Nejdřív spustit, pak vybrat** — začněte bez výběru:

1. Stiskněte `Ctrl+C` nebo napište `ClipboardCopy` s prázdným výběrem.
2. Výzva zní **pick objects to copy — Enter or Space to confirm**.
3. **Vyberte objekty** — kliknutím přepínáte jednotlivé objekty, tažením vybíráte podle oblasti.
4. Stisknutím **Enter** nebo **Space** výběr zkopírujete a příkaz ukončíte.

Stisknutí **Enter** nebo **Space** při prázdném výběru příkaz jednoduše ukončí, aniž by se dotklo schránky.

## Co se kopíruje

Obsah schránky nese víc než holou geometrii, takže vložení do nesouvisejícího výkresu stále vypadá správně:

| Část | Účel |
|------|------|
| **Objekty** | Úplná serializovaná podoba každého vybraného objektu |
| **Referenční bod** | Levý dolní roh společných hranic výběru — to, co ClipboardPaste ukotví ke kurzoru |
| **Hladiny** | Pouze hladiny, na které zkopírované objekty skutečně odkazují, podle názvu |
| **Typy čar** | Pouze typy čar, na které zkopírované objekty skutečně odkazují, podle názvu |

S kopií putují pouze *odkazované* položky tabulek — ne celé tabulky hladin a typů čar zdrojového výkresu. Vzorky šrafování se nepřibalují vůbec a nemusejí: tabulka vzorků výkresu je vestavěná výchozí sada a všechny soubory `.pat`, které jste nahráli, žijí v úložišti pro jednotlivého uživatele, které je již sdíleno mezi kartami, takže vložené šrafování si svůj vzorek najde samo.

## Potvrzení

Při úspěchu terminál oznámí, kolik objektů bylo zapsáno:

```
3 entities copied to clipboard
```

Pokud prohlížeč odmítne přístup ke schránce, terminál zobrazí **Copy failed: clipboard access denied** a nic se nezapíše. Je to rozhodnutí prohlížeče o oprávnění, ne chyba výkresu — viz [Oprávnění schránky](#oprávnění-schránky) níže.

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepíná objekt pod kurzorem do výběru / z výběru |
| **Tažení doprava** (přísný výběr) | Přidá objekty, které leží celé uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Přidá objekty, které protínají hranici rámečku |
| **Enter** / **Space** | Potvrdí výběr a zkopíruje |

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Ctrl+C` / `Cmd+C` | Aktivuje ClipboardCopy |
| `Enter` / `Space` | Zkopíruje aktuální výběr, nebo příkaz ukončí, pokud nic není vybráno |
| `Escape` | Zruší bez kopírování |

## Oprávnění schránky

Zápis do systémové schránky vyžaduje oprávnění prohlížeče. V praxi se kopírování vyvolané stiskem klávesy v současných desktopových prohlížečích povolí bez dotazu, ale stránka, která ztratila fokus, nebo prohlížeč se striktním nastavením schránky může odmítnout. Pokud uvidíte hlášení o odepřeném přístupu, jednou klikněte na plátno, aby stránka dostala fokus, a zkuste to znovu.

Protože obsah je běžný text JSON, cokoli jiného, co potom zkopírujete — řádek textu, URL — jej nahradí. Pokud jste mezitím schránku použili k něčemu jinému, před vložením zkopírujte znovu.

## Podporované objekty

ClipboardCopy funguje na všech typech objektů. Objekty se serializují stejným mechanismem, jaký používá nativní export `.json`, takže se při odchodu nic neztratí.

## Viz také

- [ClipboardPaste](../clipboard-paste/) — načte schránku zpět a umístí objekty
- [Copy](../copy/) — duplikuje objekty v aktuálním výkresu
- [Export Manager](../export-manager/) — uloží celý výkres do DXF nebo JSON
