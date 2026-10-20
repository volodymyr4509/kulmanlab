---
title: "Příkaz PointDivide — body ve stejných délkách podél objektu"
description: "Příkaz PointDivide rozdělí úsečku, polylinii, oblouk, kružnici, elipsu nebo spline na úseky stejné délky a do každého dělení umístí bod; při psaní počtu úseků je zobrazuje v náhledu."
keywords: ["CAD příkaz rozdělit", "rozdělit úsečku na stejné díly CAD", "body podél objektu CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Příkaz `RozdělitBody` umístí [body](../point/), které rozdělí objekt na úseky stejné délky. Samotný objekt se nemění: body jsou nové objekty na aktuální hladině a v aktuální barvě, vhodné pro přichycení.

## Rozdělení objektu

1. Napište `RozdělitBody` do terminálu nebo zvolte **Point Divide** z rozbalovací nabídky polí v panelu Edit.
2. **Klikněte na objekt** — úsečku, polylinii, oblouk, kružnici, elipsu nebo spline. Cokoli jiného se odmítne a můžete vybrat znovu.
3. **Napište počet úseků**, celé číslo od 2 do 32767. Body se při psaní zobrazují na objektu.
4. Stisknutím **Enter** nebo **Space** je umístíte. Příkaz skončí.

## Kam body padnou

- Rozestup se měří délkou podél objektu, ne úhlem, takže elipsa či spline se rozdělí na díly stejné délky. Obloukové segmenty polylinie se sledují po jejich křivce.
- Na otevřeném objektu — úsečce, otevřené polylinii, oblouku, části elipsy nebo otevřeném spline — body padnou mezi úseky, nikdy na konce: 5 úseků dá 4 body.
- Na uzavřeném objektu — kružnici, uzavřené polylinii, celé elipse nebo uzavřeném spline — body vedou dokola od jeho začátku, kde je také bod: kružnice začíná v úhlu 0, uzavřená polylinie v prvním vrcholu. 5 úseků dá 5 bodů.
- Číslo mimo rozsah 2–32767 se odmítne: terminál řekne proč a vymaže ho, abyste mohli psát znovu.

Backspace smaže poslední číslici. Escape začne znovu, takže můžete vybrat jiný objekt. Enter nebo Space před výběrem objektu příkaz ukončí.

---

*Související: [Point Interval](../point-interval/) pro body v pevném rozestupu, [Point](../point/) pro jednotlivé body a [ArrayPolar](../array-polar/) pro opakování objektů místo bodů.*
