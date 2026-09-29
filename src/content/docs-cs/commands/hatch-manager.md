---
title: Příkaz Hatch Manager — procházení a nahrávání vzorů .pat
description: Příkaz Hatch Manager otevře dialog pro procházení vzorů šraf se živým náhledem vzorku a pro nahrávání vlastních souborů vzorů .pat. Nahrané soubory se ukládají v prohlížeči a překryjí vestavěné vzory téhož názvu.
keywords: [správce šraf, vlastní vzor šrafy CAD, nahrání pat souboru, acad.pat, knihovna vzorů šraf, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Příkaz `HatchManager` otevře dialog pro procházení vzorů šraf se živým náhledem vzorku a pro nahrávání vlastních souborů vzorů `.pat` k použití s příkazem [Hatch](../hatch/).

## Otevření Hatch Manageru

Napište `HatchManager` do terminálu. Není to totéž co výběr vzoru, který se otevře po kliknutí na políčko **Pattern** u šrafy — výběr vzoru vybírá vzor pro jednu šrafu, kdežto Hatch Manager je místo, kde přidáváte nebo odebíráte soubory `.pat`.

## Skupiny vzorů

| Skupina | Obsah |
|---------|-------|
| **User** | Vzory z vašich vlastních nahraných souborů `.pat`, rozdělené do podskupin podle toho, z kterého souboru pocházejí (zobrazí se, až nějaký nahrajete) |
| **Standard** | `SOLID` plus vlastní tabulka vzorů tohoto výkresu — každý nový výkres začíná se stejnou vestavěnou knihovnou, stejně jako jeho hladiny a typy čar |

Kliknutím na libovolný vzor v seznamu (nebo pomocí `↑`/`↓`) jej zobrazíte v náhledu vpravo — vzorek vykreslený stejným kódem, jakým plátno vyplňuje, takže je to přesně to, co výkres ukáže, spolu s názvem vzoru, popisem a počtem čar.

## Nahrání vlastního souboru vzorů

1. Klikněte na **Add .pat File** v patičce dialogu.
2. Vyberte soubor `.pat` — standardní formát vzorů šraf. Jeden soubor běžně definuje mnoho pojmenovaných vzorů najednou; všechny se objeví jako samostatné položky seskupené pod názvem tohoto souboru.
3. Nahrané soubory se trvale ukládají v prohlížeči (IndexedDB), řadí se od naposledy přidaného a při dalším otevření KulmanLab CAD se automaticky načtou.

Nahráním souboru, který definuje vzor téhož názvu jako vestavěný, se výchozí vzor **překryje** — je to podporovaný způsob, jak získat autoritativní definice vzorů od Autodesku: nahrajte skutečný `acad.pat` a jeho verze ANSI31 a dalších standardních názvů převezmou vládu od vlastních aproximací KulmanLab.

Pokud výkres odkazuje na název vzoru, který ve vaší knihovně není — importovaný z DXF, který použil vzor z `acad.pat`, jenž jste nenahráli — šrafa se přesto vykreslí, s `ANSI31` jako zástupem, místo aby se vrátila k plochému výplňovému stylu bez vzoru.

## Odstranění souboru vzorů

Klikněte na **×** vedle názvu souboru ve skupině **User**, čímž jej odstraníte spolu se všemi vzory, které definoval. Každá šrafa, která už některý z těchto vzorů používá, se okamžitě vrátí k `ANSI31`. Vestavěné vzory skupiny **Standard** odstranit nelze.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `↑` / `↓` | Posune výběr nahoru nebo dolů v seznamu vzorů |
| `Escape` | Zavře Hatch Manager |

## Související příkazy

- [Hatch](../hatch/) — vyplní vybranou oblast právě zvoleným vzorem
- [Font Manager](../font-manager/) — stejný princip nahrávání/procházení, ale pro vlastní písma místo vzorů šraf
