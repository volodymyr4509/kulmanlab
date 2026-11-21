---
title: "Komanda BlockCreate — bloko kūrimas iš objektų"
description: "Komanda BlockCreate iš pažymėtų objektų sukuria pavadintą bloką su jūsų pasirinktu bazės tašku ir pakeičia juos viena nuoroda į jį. Vėliau bloką galima pakartotinai talpinti komanda BlockInsert."
keywords: ["sukurti bloką CAD", "blokas iš objektų CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Komanda `SukurtiBloką` sukuria **bloką**: pavadintą objektų grupę, kuri brėžinyje saugoma vieną kartą ir talpinama tiek kartų, kiek norite, komanda [Block Insert](../block-insert/). Pasirinkti objektai tampa bloku, o brėžinyje juos pakeičia viena nuoroda į jį, todėl vaizdas nesikeičia.

## Bloko kūrimas

1. Jei norite, pirmiausia pažymėkite objektus, tada įveskite `SukurtiBloką` arba spustelėkite **Sukurti bloką** skydelyje **Blokai**. Atsidaro langas su jau įtrauktu pasirinkimu.
2. Įveskite **Pavadinimas**. Jis negali būti tuščias, negali turėti nė vieno iš simbolių `< > / \ " : ; ? * | , =` ar atvirkštinio kirčio ir negali būti kito bloko pavadinimu.
3. Spustelėkite **Pasirinkti objektus**, kad pridėtumėte ar pašalintumėte objektus: langas paslepiamas, o jūs spustelite objektus arba vilkite sritį. Paspauskite **Enter** arba **Space**, kad grįžtumėte į langą, kur **Objektai** rodo skaičių.
4. Nustatykite **Bazinis taškas** — tašką, pagal kurį blokas talpinamas: įveskite jo X ir Y arba spustelėkite **Nurodyti tašką** ir tada drobę (arba ten įveskite X,Y). Pradžioje jis yra 0,0.
5. Spustelėkite **Gerai**. Blokas išsaugomas, objektai užleidžia vietą vienai nuorodai į jį bazės taške, o terminalas užregistruoja bloko pavadinimą ir jo objektų skaičių.

## Verta žinoti

- **Gerai** lieka išjungtas, kol kas nors negerai, o pranešimas po laukais pasako, kas: tuščias ar netinkamas pavadinimas, jau naudojamas pavadinimas arba nėra objektų.
- **Escape** renkantis objektus ar bazės tašką grąžina į langą su bloku tokiu, koks buvo. **Escape** lange atšaukia komandą.
- Blokas išsaugomas kartu su brėžiniu ir įrašomas į DXF kartu su savo nuorodomis.

---

*Susiję: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
