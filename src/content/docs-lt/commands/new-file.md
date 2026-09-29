---
title: New File — tuščio brėžinio pradėjimas KulmanLab CAD
description: New File komanda išvalo drobę ir atveria naują tuščią brėžinį. Paprastas failo pavadinimas sugeneruojamas automatiškai ir išsaugomas naršyklės saugykloje.
keywords: [naujas CAD failas, naujas brėžinys, tuščia CAD drobė, naujo brėžinio kūrimas internete, pradėti naują DXF, KulmanLab naujas failas, drobės atstatymas, brėžinio išvalymas]
group: file
order: 2
---

# New File

Komanda **New File** išvalo drobę ir pradeda naują tuščią brėžinį. Unikalus failo pavadinimas sugeneruojamas automatiškai.

## Kaip sukurti naują failą

Spustelėkite įrankių juostos mygtuką **New File** (naujo puslapio piktograma) failų skydelyje. Drobė išvaloma iškart — jokių raginimų ar patvirtinimo dialogų.

## Ką turi naujas failas

Ką tik sukurtas failas prasideda su:

- **Jokių objektų** drobėje.
- **Vienu numatytuoju sluoksniu** pavadinimu `0` su balta spalva ir linijos tipu `Continuous`.
- **Sugeneruotu failo pavadinimu**, `kulman.dxf` — arba `kulman (2).dxf`, `kulman (3).dxf`, …, jei tas pavadinimas jau užimtas.

Failas automatiškai išsaugomas naršyklės saugykloje, pasirodo [File Manager](../file-manager/) ir bet kada gali būti [pervadintas](../file-manager/#failo-pervadinimas).

## Įspėjimas — neišsaugotas darbas atmetamas

Spustelėjus **New File**, visi dabartinės drobės objektai atmetami be įspėjimo. Jei norite išsaugoti dabartinį brėžinį, pirmiausia jį [eksportuokite](../export-manager/).

## Kada naudoti New File, o kada Import

| Situacija | Rekomenduojamas veiksmas |
|-----------|--------------------------|
| Brėžinio pradėjimas nuo nulio | **New File** |
| Esamo DXF ar JSON failo atvėrimas | [Import](../import/) |
| Brėžinio kopijavimas dirbti su variantu | [Export Manager](../export-manager/) dabartinio failo, tada [Import](../import/) kopijos |

## Susijusios komandos

- [Import](../import/) — atverti esamą DXF ar JSON brėžinį
- [Export Manager](../export-manager/) — atsisiųsti brėžinį prieš pradedant iš naujo
- [File Manager](../file-manager/) — atkurti ankstesnį brėžinį iš naršyklės saugyklos
