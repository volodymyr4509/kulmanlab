---
title: "Příkaz Point — umísťování bodů do výkresu v KulmanLab CAD"
description: "Příkaz Point umístí bod při každém kliknutí, zadaném X,Y nebo vzdálenosti po zamčeném směru, dokud nestisknete Enter, Space nebo Escape. Body se kreslí jako tečka, nesou aktuální hladinu a barvu a přenášejí se jako entity DXF POINT."
keywords: ["CAD příkaz bod", "umístit bod CAD", "entita DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Příkaz `Bod` umístí bod při každém výběru a zůstává aktivní, dokud nestisknete Enter, Space nebo Escape. Bod je poloha bez velikosti: kreslí se jako malá tečka a nese aktuální hladinu a barvu. Ukládá se jako entita `POINT`.

## Umístění bodů

1. Napište `Bod` do terminálu nebo klikněte na **Point**, poslední tlačítko v panelu Shapes.
2. **Klikněte** tam, kam bod patří, nebo napište `X,Y` a stiskněte **Enter** pro přesnou polohu. Každý výběr umístí bod a terminál zapíše jeho souřadnice; příkaz zůstane aktivní pro další.
3. Nebo zamkněte směr z [vektorového špendlíku](../../interface/vector-pins/) a napište vzdálenost — bod dopadne přesně tak daleko po něm.
4. Ukončíte stisknutím **Enter**, **Space** nebo **Escape**. Enter a Space ukončují jen tehdy, když se nic nepíše.

## Jak bod vypadá

Bod se kreslí jako tečka o poloměru 1,5 px při každém zvětšení, takže zůstává vidět při oddálení a při přiblížení nenaroste. Styl bodů výkresu (`$PDMODE` a `$PDSIZE`) se zatím nečte, takže každý bod je tečka, ať DXF říká cokoli.

## Úpravy bodů

Vybraný bod má jeden úchyt, který jej přesouvá. Výběr oknem vezme bod, leží-li uvnitř okna, při tažení libovolným směrem.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) a [Scale](../scale/) fungují na bodech jako na každém jiném objektu. Okno vlastností ukazuje Position X a Position Y, k tomu barvu a hladinu.

## DXF — entita POINT

Body se do DXF čtou a zapisují jako entity `POINT` s polohou, barvou a hladinou (skupinové kódy 10/20, 62 a 8) a přenášejí se i uloženým JSON. Dříve se při importu přeskakovaly. [Export Manager](../export-manager/) uvádí Points jako samostatný řádek, takže je lze z exportu vynechat.

---

*Související: [Line](../line/) pro stejné zadávání souřadnic a [Vector Pins](../../interface/vector-pins/) pro umístění bodu v dané vzdálenosti po směru.*
