---
title: Import — DXF ar JSON failų atvėrimas KulmanLab CAD
description: Naudokite Import komandą, kad atvertumėte DXF ar KulmanLab JSON failus KulmanLab CAD. Palaiko linijas, apskritimus, lankus, polilinijas, splainus, tekstą, matmenis ir išnašas.
keywords: [DXF failo importas, DXF atvėrimas naršyklėje, CAD failo importas internete, DXF failo atvėrimas, DXF peržiūros programa naršyklėje, JSON CAD importas, KulmanLab importas, nemokama CAD DXF peržiūros programa, brėžinio įkėlimas, DXF į naršyklę]
group: file
order: 1
---

# Import

Komanda **Import** įkelia esamą brėžinį iš jūsų vietinės failų sistemos į KulmanLab CAD. Palaikomas ir standartinis **DXF** formatas, ir vietinis KulmanLab **JSON** formatas.

## Kaip importuoti failą

1. Spustelėkite mygtuką **Import** (aplanko piktograma) failų skydelyje ekrano viršuje.
2. Atsidaro jūsų naršyklės failų pasirinkiklis. Suraskite savo brėžinio failą ir jį pasirinkite.
3. Brėžinys iškart įkeliamas į drobę. Vaizdas automatiškai pritaikomas visiems objektams.

Arba galite failą tiesiog nutempti ant drobės.

## Palaikomi failų formatai

| Formatas | Plėtinys | Kada naudoti |
|----------|----------|--------------|
| **DXF** | `.dxf` | Brėžiniai iš FreeCAD, LibreCAD ar kitų CAD įrankių |
| **JSON** *(vietinis)* | `.json` | Brėžiniai, anksčiau išsaugoti iš KulmanLab CAD — be praradimų |

## Kas importuojama iš DXF

KulmanLab apdoroja šiuos DXF objektų tipus:

| Objekto tipas | DXF kodas | Pastabos |
|---------------|-----------|----------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |
| Hatch | `HATCH` | Skaitomas rašto pavadinimas, mastelis ir kampas; pavadinimas, kurio nėra jūsų raštų bibliotekoje, grįžta prie ANSI31. Žr. [Hatch](../hatch/) |

Sluoksnių apibrėžimai ir linijų tipų lentelės taip pat importuojamos iš DXF failo, kai jos yra.

Objektai, naudojantys nepalaikomus DXF tipus, tyliai praleidžiami — likusi brėžinio dalis vis tiek įkeliama.

## Failų pavadinimai ir saugykla

Importuotas failas išlaiko savo pradinį pavadinimą. Jei tas pavadinimas jau naudojamas kito išsaugoto brėžinio, automatiškai pridedamas Finder/Explorer stiliaus priedas (`myplan (2)`, `myplan (3)`, …), kad esamas įrašas niekada nebūtų perrašytas. Failą vėliau galite pervadinti iš [File Manager](../file-manager/#failo-pervadinimas).

Brėžinys po importo automatiškai išsaugomas naršyklės saugykloje (IndexedDB), todėl jis pasirodo [File Manager](../file-manager/) skydelyje ir išlieka perkraunant puslapį.

## Kas nutinka dabartiniam brėžiniui

Importas pakeičia dabartinę drobę. Sujungimo ar pridėjimo nėra. Jei turite neišsaugotų pakeitimų, pirmiausia [eksportuokite](../export-manager/) dabartinį brėžinį.

## Paleidžiant

KulmanLab automatiškai vėl atveria paskutinį redaguotą failą įkėlus puslapį. Jei išsaugotų failų nėra, įkeliamas numatytasis pavyzdinis brėžinys.

## Trikčių šalinimas

| Problema | Tikėtina priežastis | Sprendimas |
|----------|--------------------|-----------|
| Drobė po importo tuščia | DXF objektai naudoja nepalaikomus tipus (pvz., INSERT) | Objektai praleisti — terminalas išvardija kiekvieną praleistą tipą su skaičiumi, pavyzdžiui `Could not read INSERT: 12`. Failas, kuris apskritai nėra tinkamas brėžinys, pateikia `Could not read <file>: not a valid drawing file` |
| Import mygtukas nieko nedaro | Naršyklė užblokavo failų pasirinkiklį | Spustelėkite mygtuką dar kartą; kai kurioms naršyklėms reikia naujo naudotojo veiksmo |
| Matmenys atrodo neteisingai | DXF iš įrankio, rašančio nestandartinę matmenų geometriją | Iš naujo eksportuokite iš šaltinio programos naudodami dabartinę DXF versiją |

## Susijusios komandos

- [Export Manager](../export-manager/) — atsisiųsti dabartinį brėžinį kaip DXF ar JSON
- [File Manager](../file-manager/) — naršyti ir atkurti naršyklėje išsaugotus brėžinius
- [New File](../new-file/) — pradėti tuščią brėžinį
