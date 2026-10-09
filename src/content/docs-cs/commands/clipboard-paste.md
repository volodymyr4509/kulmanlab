---
title: Příkaz ClipboardPaste — vkládání objektů ze systémové schránky
description: Příkaz ClipboardPaste načte ze systémové schránky objekty dříve zapsané příkazem ClipboardCopy a umístí je do zvoleného vkládacího bodu, přičemž doplní hladiny a typy čar, které cílovému výkresu chybějí.
keywords: [CAD vložení ze schránky, vkládání objektů mezi výkresy, vložení CAD objektů, Ctrl+V CAD, kopírování mezi kartami CAD, vložení mezi kartami prohlížeče, sloučení hladin při vložení, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Příkaz `ClipboardPaste` načte objekty, které [ClipboardCopy](../clipboard-copy/) zapsal do **systémové schránky**, a umístí je do aktuálního výkresu v bodě, který zvolíte. Protože schránka je skutečná systémová, může být zdrojem jiný výkres, jiná karta prohlížeče nebo relace z dřívějšího dne.

## Jak vložit

1. Stiskněte `Ctrl+V` (`Cmd+V` v macOS), nebo napište `ClipboardPaste` do terminálu.
2. Výzva zní **reading clipboard…**, zatímco prohlížeč předává text schránky.
3. Po načtení se výzva změní na **pick insertion point** a za kurzorem se pohybuje náhled vkládané geometrie.
4. **Klikněte** pro umístění objektů. Přidají se do výkresu a zůstanou vybrané.

Náhled je ukotven **referenčním bodem** kopie — levým dolním rohem společných hranic původního výběru. Tento roh je pod kurzorem, takže se vzájemné uspořádání zkopírovaných objektů zachová přesně.

## Co se při vložení stane

| Krok | Chování |
|------|---------|
| **Nové identity** | Každý vložený objekt dostane nové id, takže dvojí vložení vytvoří dvě nezávislé sady |
| **Posun** | Objekty se posunou o kurzor − referenční bod |
| **Sloučení hladin** | Každá odkazovaná hladina, která v cílovém výkresu chybí, se přidá podle názvu |
| **Sloučení typů čar** | Každý odkazovaný typ čáry, který v cílovém výkresu chybí, se přidá podle názvu |
| **Výběr** | Předchozí výběr se zruší a vložené objekty se stanou výběrem |

### Sloučení hladin a typů čar

Chybějící položky tabulek se přidají; **existující zůstanou beze změny**. Pokud schránka nese hladinu `WALLS` v červené a cíl už má hladinu `WALLS` v modré, vyhrává definice cíle a vložené objekty se k ní připojí — budou modré. Vložením se nic v cílovém výkresu nepředefinuje.

To je důležité při kopírování mezi výkresy s odlišnými konvencemi hladin: pokud barvy nejsou takové, jaké jste čekali, zkontrolujte po vložení mezi výkresy [Layer Manager](../layer-manager/).

## Když schránka nemá co vložit

ClipboardPaste přijímá pouze obsah, který vytvořil ClipboardCopy. Cokoli jiného ve schránce — prostý text, URL, obrázek, JSON z jiné aplikace — se odmítne a terminál oznámí:

```
Clipboard has no copied entities
```

Pokud prohlížeč přístup ke schránce odmítne úplně, hlášení zní místo toho **Blocked by the browser: allow clipboard in site settings, by the address bar**. Obojí příkaz ukončí bez změny výkresu.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Ctrl+V` / `Cmd+V` | Aktivuje ClipboardPaste |
| `Escape` | Zruší — objekty se zahodí a nic se nepřidá |

Stisknutí Escape během fáze čtení je bezpečné: pokud se schránka vyřeší až poté, co jste už zrušili nebo spustili jiný příkaz, pozdní výsledek se zahodí, místo aby přerušil to, co je do té doby aktivní.

## Kopírování mezi kartami

Typický postup mezi výkresy:

1. Otevřete zdrojový výkres, vyberte geometrii a stiskněte `Ctrl+C`.
2. Přepněte na druhou kartu — nebo otevřete druhou kartu s aplikací a načtěte jiný soubor.
3. Stiskněte `Ctrl+V` a klikněte na vkládací bod.

Obě karty mají stejný původ a sdílejí systémovou schránku, takže se nic nenahrává a nezapojuje se žádný server. Obsah je po celou dobu text JSON ve vaší vlastní schránce.

## Podporované objekty

Každý typ objektu, který ClipboardCopy umí zapsat, umí ClipboardPaste načíst zpět — stejná serializace, jakou používá nativní formát `.json`.

## Viz také

- [ClipboardCopy](../clipboard-copy/) — zapíše výběr do schránky
- [Copy](../copy/) — duplikuje objekty v aktuálním výkresu
- [Layer Manager](../layer-manager/) — zkontroluje hladiny, které vložení přineslo
