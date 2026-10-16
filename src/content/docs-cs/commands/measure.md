---
title: "Příkaz Measure — čtení vzdáleností, délek, úhlů a ploch kolem kurzoru"
description: "Příkaz Measure čte výkres kolem kurzoru při jeho pohybu — vzdálenost k nejbližší geometrii, délku nebo poloměr toho, co potká, a úhel, kde se čáry setkávají — a kliknutím dá plochu a obvod uzavřené oblasti. Nic ve výkresu se nemění."
keywords: ["CAD příkaz měření", "měření plochy a obvodu CAD", "živé měření vzdálenosti CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Příkaz `Měření` čte výkres kolem kurzoru při jeho pohybu, bez výběru bodů: jak daleko je to k nejbližší geometrii, jak je tato geometrie dlouhá nebo kulatá a jaký je úhel, kde se čáry setkávají. Kliknutí uvnitř uzavřené oblasti dá její plochu a obvod. Nic ve výkresu se nemění.

## Měření

1. Napište `Měření` do terminálu nebo klikněte na **Measure**, první tlačítko v panelu Measure.
2. **Pohybujte kurzorem.** Příkaz se z něj dívá doprava, nahoru, doleva a dolů po nejbližší geometrii a ukazuje, co najde.
3. **Klikněte uvnitř uzavřené oblasti**, aby se vyplnila a zobrazila se její plocha a obvod — viz níže.
4. Ukončíte stisknutím **Enter**, **Space** nebo **Escape**.

## Co ukazuje

- **Vzdálenost napříč** — od toho, co kurzor potká na jedné straně, k tomu, co potká na druhé, vodorovně i svisle. Je-li něco jen na jedné straně, vzdálenost vede od kurzoru. Každý konec, který něco potkává, má malou plnou tečku; konec u kurzoru ji nemá.
- **Délka nebo poloměr** — každý objekt, ke kterému příkaz dosáhne, se zvýrazní s jeho délkou, nebo poloměrem, je-li součástí kružnice.
- **Úhel** — kde se setkají dvě dosažené přímé čáry, napíše se úhel mezi nimi; pravý úhel je označen malým čtverečkem.

Délky a úhly se píší tak, jak je píše aktuální [DimensionStyle](../dimension-style/), v jeho formátu jednotek a přesnosti.

## Plocha a obvod

Kliknutí uvnitř uzavřené oblasti ji vyplní a plochu s obvodem uvede ve výzvě a v historii. Oblast se hledá stejně jako u [Hatch](../hatch/): samostatné čáry navazující konec na konec uzavřou oblast stejně jako polylinie a vše uzavřené uvnitř se vynechá jako ostrov — jeho hrana se počítá do obvodu a jeho plocha se odečte.

Plocha je prosté číslo ve čtverečních jednotkách výkresu — stopy a palce ji zapsat neumějí — zatímco obvod se řídí formátem jednotek. Kliknutím do jiné oblasti ji změříte. Pokud bod nic uzavřeného neobklopuje, terminál řekne proč stejnými hláškami jako Hatch: no boundary found, point is not enclosed nebo boundary is open.

## Dobré vědět

- Měří vůči úsečkám, obloukům, kružnicím, elipsám, polyliniím a splinům; délky a plochy jsou přesné, i u elips a splinů.
- Objekty na zmrazených hladinách se ignorují; objekty na zamčených hladinách se měří.
- Ve velkém výkresu se dívá jen na to, co je blízko kurzoru, takže zůstává svižný.

---

*Související: [Distance](../distance/), [Angle](../angle/) a [Area](../area/) pro měření mezi body, které zvolíte, a [Hatch](../hatch/) pro způsob hledání uzavřených oblastí.*
