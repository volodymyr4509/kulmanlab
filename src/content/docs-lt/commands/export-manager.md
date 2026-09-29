---
title: Export Manager — brėžinių atsisiuntimas kaip DXF ar JSON KulmanLab CAD
description: Atsisiųskite dabartinį brėžinį kaip DXF ar JSON, pažymėdami pagal objekto tipą, kas patenka į failą. Abu apima geometriją, tekstą, matmenis, išnašas ir brūkšniuotes, taip pat sluoksnius ir linijų tipus.
keywords: [eksportuoti DXF, CAD failo eksportas, atsisiųsti DXF naršyklėje, išsaugoti DXF internete, eksportuoti JSON CAD, KulmanLab eksportas, CAD failo atsisiuntimas, DXF eksportas, brėžinio išsaugojimas į failą, DXF atsisiuntimas]
group: file
order: 6
---

# Export Manager

Komanda `exportmanager` atsisiunčia dabartinį brėžinį į jūsų failų sistemą. Greta yra du formatai — **DXF** suderinamumui su kitais CAD įrankiais ir **JSON** išsaugojimui be praradimų KulmanLab CAD viduje — ir kiekvienas turi savo sąrašą, ką dėti į failą.

## Kaip eksportuoti

1. Spustelėkite mygtuką **Export** (atsisiuntimo piktograma) failų skydelyje arba terminale įveskite `exportmanager`.
2. Atsidaro **Export Manager** langas su dviem stulpeliais, **JSON** ir **DXF**, kiekvienas išvardija brėžinio objektų tipus su žymimuoju langeliu ir kiekiu.
3. Nuimkite žymėjimą nuo visko, ką norite praleisti. Pradžioje viskas pažymėta.
4. Spustelėkite **Export JSON** arba **Export DXF**. Failas atsisiunčiamas į numatytąjį atsisiuntimų aplanką ir langas užsidaro.

Paspauskite `Escape`, kad uždarytumėte langą neeksportavę.

## Ką eksportuoti pasirinkimas

Abu stulpeliai išvardija tuos pačius objektų tipus, kiekvieną su kiekiu, kiek jų yra brėžinyje:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Atidarius langą viskas pažymėta, todėl eksportavus iškart gaunamas visas brėžinys. Nuimkite tipo žymėjimą, kad jį praleistumėte tame vienoje faile.

Keturi dalykai, kuriuos verta žinoti:

- **Du stulpeliai nepriklausomi.** Hatches žymėjimo nuėmimas prie DXF neturi įtakos tam, ką sukuria **Export JSON**. Kiekvienas formatas išlaiko savo pasirinkimą.
- **Neturimas tipas pilkas.** Eilutės, kurios kiekis yra `0`, pažymėti negalima, todėl sąrašas kartu yra greita brėžinio turinio apžvalga.
- **Kiekiai yra momentinė nuotrauka.** Jie paimami atidarius langą ir neatsinaujina, jei brėžinys už jo pasikeičia. Uždarykite ir vėl atverkite, kad juos atnaujintumėte.
- **Nieko neištrinama.** Žymėjimo nuėmimas formuoja tik eksportuojamą failą — pats brėžinys lieka nepaliestas.

**Linear Dimensions** apima linijinius, lygiagrečius ir grandininius matmenis: tai vienas objekto tipas, sukuriamas trijų skirtingų komandų. Spindulio, skersmens ir kampiniai matmenys turi savo eilutes.

Būtent tai padaro pjovimo failo paruošimą paprastą. Nuimkite Text, keturių matmenų eilučių, Leaders ir Hatches žymėjimą, ir **Export DXF** duoda pjovimo geometriją ir nieko daugiau — žr. [DXF paruošimas lazeriniam pjovimui](/lt/blog/prepare-dxf-for-laser-cutting/).

## Formato pasirinkimas

| Formatas | Plėtinys | Geriausiai tinka | Apribojimai |
|----------|----------|------------------|-------------|
| **JSON** *(vietinis)* | `.json` | Darbo išsaugojimui, kad vėl atvertumėte KulmanLab CAD | Nesuderinamas su kitais CAD įrankiais |
| **DXF** | `.dxf` | Dalijimuisi su FreeCAD, LibreCAD, AutoCAD ir kt. | Kiek išlieka, priklauso nuo priimančios programos |

**Kada naudoti JSON:** kai tik norite išsaugoti pilną savo darbo kopiją. JSON yra vietinis KulmanLab formatas ir išsaugo kiekvieną objektą tiksliai — įskaitant matmenis, išnašas, brūkšniuotes ir visus sluoksnių duomenis.

**Kada naudoti DXF:** kai brėžinį reikia perduoti kam nors, naudojančiam kitą CAD programą. Eksportuotas failas naudoja AC1032 DXF formatą ir gali būti atvertas daugelyje DXF suderinamų įrankių.

## Kas eksportuojama kiekvienu formatu

### JSON eksportas

Įtraukiami visi objektų tipai:

- Lines, circles, arcs, ellipses, polylines, splines
- Text
- Matmenys (linijiniai, lygiagretūs, grandininiai, spindulio, skersmens, kampiniai)
- Leaders (daugiašakės išnašos)
- Brūkšniuotės, įskaitant jų raštą, mastelį, kampą ir pradžios tašką
- Sluoksniai ir linijų tipai

### DXF eksportas

Įtraukiami visi objektų tipai:

- Lines, circles, arcs, ellipses, polylines (eksportuojamos kaip `LWPOLYLINE`), splines
- Text, rašomas kaip `MTEXT` su formatavimu pagal atkarpas — šriftas, aukštis, pusjuodis, kursyvas, pabraukimas, perbraukimas
- Matmenys (linijiniai, lygiagretūs, grandininiai, spindulio, skersmens, kampiniai) kaip standartiniai `DIMENSION` objektai
- Leaders kaip `MULTILEADER`
- Brūkšniuotės su jų raštu, masteliu, kampu ir pradžios tašku
- Sluoksniai ir linijų tipai

Failas rašomas kaip AC1032 DXF, todėl iš KulmanLab eksportuotas brėžinys kituose DXF gebančiuose įrankiuose atsiveria su nepažeistomis anotacijomis, o ne kaip nuoga geometrija.

Ką su juo daro kiekviena priimanti programa, vis tiek skiriasi — DXF palaikymas įrankiuose nevienodas, o senesnis gali ignoruoti objektus, kuriuos naujesnis skaito. Jei brėžinys visur turi atrodyti vienodai, [Print Manager](../print-manager/) jį užfiksuoja kaip PDF ar vaizdą.

## Eksportuoto failo pavadinimas

Atsisiųstas failas pavadinamas pagal dabartinį brėžinio failą (pvz., `myplan.json`), su plėtiniu, pakeistu pagal pasirinktą formatą. Niekada nepavadintas brėžinys eksportuojamas kaip `drawing.dxf` arba `drawing.json`.

## Skirtumas tarp Export Manager ir Print Manager

| Savybė | Export Manager | Print Manager |
|--------|--------|-------|
| Išvestis | Vektorinis šaltinio failas (.dxf / .json) | Rastrinis vaizdas (.png / .jpeg / .webp / .pdf) |
| Redaguojama kituose įrankiuose | Taip (DXF) | Ne |
| Išsaugo sluoksnius ir linijų tipus | Taip | Ne (atvaizduojama plokščiai) |
| Užfiksuoja matmenis ir išnašas | Taip | Taip |

**Export Manager** naudokite, kai reikia redaguojamo failo. [Print Manager](../print-manager/) naudokite, kai reikia vizualios nuotraukos.

## Susijusios komandos

- [Import](../import/) — atverti DXF ar JSON failą
- [Print Manager](../print-manager/) — eksportuoti drobę kaip PNG, JPEG, WebP ar PDF vaizdą
- [File Manager](../file-manager/) — naršyti naršyklės saugykloje išsaugotus brėžinius
