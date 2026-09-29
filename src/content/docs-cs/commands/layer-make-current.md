---
title: LayerMakeCurrent — nastavení vrstvy objektu jako aktuální
description: Příkaz LayerMakeCurrent nastaví aktuální kreslicí vrstvu podle vrstvy objektu, na který kliknete.
keywords: [nastavit vrstvu jako aktuální, aktuální vrstva CAD, správa vrstev kulmanlab]
group: layer
order: 2
---

# LayerMakeCurrent

Příkaz `LayerMakeCurrent` nastaví **aktuální kreslicí vrstvu** na vrstvu, do které patří objekt, na který kliknete. Nové objekty se pak budou automaticky kreslit na této vrstvě.

## Použití

1. Napište `LayerMakeCurrent` do terminálu nebo klikněte na tlačítko **Make Current** v panelu nástrojů (ikona kapátka).
2. **Klikněte na libovolný objekt** na plátně.
3. Aktuální vrstva se změní podle vrstvy tohoto objektu. Příkaz okamžitě skončí.

## Podrobnosti chování

- Pokud kliknete na prázdné plátno (nezasáhnete žádný objekt), terminál zobrazí `no object found` a příkaz zůstane aktivní, takže to můžete zkusit znovu.
- Mění se pouze nastavení aktuální vrstvy — žádné objekty se neupravují.
- Aktualizovaná vrstva se odráží ve výběru vrstvy v panelu nástrojů.
