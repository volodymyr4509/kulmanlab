---
title: LayerMakeCurrent — nastavení hladiny objektu jako aktuální
description: Příkaz LayerMakeCurrent nastaví aktuální kreslicí hladinu podle hladiny objektu, na který kliknete.
keywords: [nastavit hladinu jako aktuální, aktuální hladina CAD, správa hladin kulmanlab]
group: layer
order: 2
---

# LayerMakeCurrent

Příkaz `LayerMakeCurrent` nastaví **aktuální kreslicí hladinu** na hladinu, do které patří objekt, na který kliknete. Nové objekty se pak budou automaticky kreslit na této hladině.

## Použití

1. Napište `LayerMakeCurrent` do terminálu nebo klikněte na tlačítko **Make Current** v panelu nástrojů (ikona kapátka).
2. **Klikněte na libovolný objekt** na plátně.
3. Aktuální hladina se změní podle hladiny tohoto objektu. Příkaz okamžitě skončí.

## Podrobnosti chování

- Pokud kliknete na prázdné plátno (nezasáhnete žádný objekt), terminál zobrazí `no object found` a příkaz zůstane aktivní, takže to můžete zkusit znovu.
- Mění se pouze nastavení aktuální hladiny — žádné objekty se neupravují.
- Aktualizovaná hladina se odráží ve výběru hladiny v panelu nástrojů.
