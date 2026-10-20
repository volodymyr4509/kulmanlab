---
title: "Příkaz PointInterval — body v pevném rozestupu podél objektu"
description: "Příkaz PointInterval umístí body v zadaném rozestupu podél úsečky, polylinie, oblouku, kružnice, elipsy nebo spline, od konce, u kterého kliknete, a při psaní délky je zobrazuje v náhledu."
keywords: ["body v intervalu CAD", "body v pevné vzdálenosti po úsečce CAD", "CAD měření podél objektu", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Příkaz `BodyPoIntervalech` umístí [body](../point/) v pevném rozestupu podél objektu, jako když vyznačujete staničení na trase. Samotný objekt se nemění: body jsou nové objekty na aktuální hladině a v aktuální barvě, vhodné pro přichycení.

## Body v intervalu

1. Napište `BodyPoIntervalech` do terminálu nebo zvolte **Point Interval** z rozbalovací nabídky polí v panelu Edit.
2. **Klikněte na objekt u konce, od kterého se má začít** — úsečku, polylinii, oblouk, kružnici, elipsu nebo spline. Cokoli jiného se odmítne a můžete vybrat znovu.
3. **Napište délku intervalu.** Body se při psaní zobrazují na objektu.
4. Stisknutím **Enter** nebo **Space** je umístíte. Příkaz skončí.

## Kam body padnou

- První bod leží jeden interval od začátku a další následují po jednom intervalu, měřeno podél objektu včetně křivek. Na samotný začátek žádný bod nepadne.
- Na otevřeném objektu — úsečce, otevřené polylinii, oblouku, části elipsy nebo otevřeném spline — měří se od konce, u kterého jste klikli. Zbytek na vzdáleném konci zůstane neoznačený: vzdálený konec dostane bod, jen když interval vyjde přesně.
- Na uzavřeném objektu — kružnici, uzavřené polylinii, celé elipse nebo uzavřeném spline — měří se od vlastního začátku objektu, ať kliknete kamkoli: kružnice od úhlu 0 proti směru hodinových ručiček, uzavřená polylinie od prvního vrcholu. Body končí před začátkem.
- Délka 0 nebo menší, delší než objekt nebo taková, která by dala víc než 32767 bodů, se odmítne: terminál řekne proč a vymaže ji, abyste mohli psát znovu.

Backspace smaže poslední znak. Escape začne znovu, takže můžete vybrat jiný objekt. Enter nebo Space před výběrem objektu příkaz ukončí.

---

*Související: [Point Divide](../point-divide/) pro rozdělení objektu na daný počet stejných délek a [Point](../point/) pro jednotlivé body.*
