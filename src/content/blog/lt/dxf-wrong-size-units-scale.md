---
title: "Kodėl jūsų DXF atsidarė netinkamo dydžio (ir kaip tai ištaisyti)"
description: "DXF, kuris atsidaro 25,4× per mažas ar 1000× per didelis, yra vienetų neatitikimas, o ne sugadintas failas. Kaip nustatyti santykį, pakeisti brėžinio mastelį ir patikrinti pataisymą."
keywords: [DXF neteisingas mastelis, DXF neteisingas dydis, DXF vienetai, DXF mm ar coliai, DXF importuotas per mažas, DXF mastelio koeficientas, "DXF 25,4", DXF mastelio taisymas, DXF vienetų neatitikimas, DXF mastelio keitimas]
date: 2026-09-04
author: KulmanLab
tag: Vadovas
---

DXF atsidaro ir detalė, kuri turėtų būti 40 mm skersmens, matuojasi 1,575. Arba planas atkeliauja miesto kvartalo dydžio. Failas nesugadintas ir niekas nieko nepadarė blogai — brėžinys yra tvarkoje, o su juo susietas skaičius pakeliui pasimetė.

Tai verta suprasti prieš keičiant bet kokį mastelį, nes pataisymas užtrunka dešimt sekundžių, kai žinote, kokį santykį matote, o spėliojimas yra būdas dukart išpjauti netinkamą dydį.

## DXF vienetų beveik nenešioja

DXF saugo koordinates kaip paprastus skaičius. Linija nuo `0,0` iki `40,0` yra keturiasdešimties *kažko* ilgio. Formatas neprijungia vieneto prie koordinatės ir neturi kur — skaičius yra geometrija.

Arčiausiai to yra antraštės kintamasis `$INSUNITS`, vienas kodas visam failui: `1` coliams, `4` milimetrams, `6` metrams ir taip toliau. Du dalykai daro jį silpnesnį, nei skamba. Tai viena reikšmė visam brėžiniui, todėl ji negali apibūdinti failo, surinkto iš mišrių šaltinių. Ir jis tik patariamasis: daug programų skaito jį tik *įterpdamos* vieną brėžinį į kitą ir visiškai ignoruoja, kai tiesiog atveriate failą, pagrįstai manydamos, kad brėžinį atveriantis žmogus paprastai žino, ką nubraižė.

Taigi „40" keliauja nepažeistas, o „milimetrai" — ne. Kiekvienas neteisingo dydžio DXF, kurį kada gausite, yra šis sakinys.

## Pirmiausia nustatykite santykį

Išmatuokite vieną elementą, kurio tikrąjį dydį iš tikrųjų žinote — skylės skersmenį, lapo kraštą, standartinį tvirtinimo atstumą. Padalykite dydį, kokio jis turėtų būti, iš dydžio, kurį jis matuojasi. Rezultatas beveik visada yra vienas iš šių:

| Santykis | Kas atsitiko |
|---|---|
| **25,4** | Nubraižyta coliais, skaitoma kaip milimetrai |
| **0,03937** | Nubraižyta milimetrais, skaitoma kaip coliai |
| **1000** | Nubraižyta metrais, skaitoma kaip milimetrai |
| **0,001** | Nubraižyta milimetrais, skaitoma kaip metrai |
| **12** | Pėdos skaitomos kaip coliai |
| **304,8** | Pėdos skaitomos kaip milimetrai |

Jei jūsų skaičius yra vienas iš šių, turite vienetų neatitikimą ir nieko daugiau, o likusi šio vadovo dalis užtrunka minutę.

Jei ne — pavyzdžiui, 1,37 ar 3,2 — sustokite. Tai ne vienetų problema, o mastelio keitimas sukurs brėžinį, kuris klaidingas sunkiau pastebimu būdu. Peršokite į paskutinę dalį.

## Ištaisykite

Jums reikia kažko, kas matuoja, ir kažko, kas keičia mastelį. Tai daro bet kuris CAD įrankis; štai [KulmanLab](https://kulmanlab.com/), kuris atveria DXF naršyklės skirtuke nieko neįdiegus:

1. Atverkite failą — nutempkite jį ant puslapio arba naudokite [Import](/lt/docs/commands/import/).
2. Paleiskite [Distance](/lt/docs/commands/distance/) ir pasirinkite abu savo žinomo elemento galus. Prisitraukimas čia svarbus: rinkitės tikrus galinius taškus, o ne kažką šalia, kitaip įkepsite savo pačių paklaidą į koeficientą.
3. Padalykite. Žinomas dydis ÷ išmatuotas dydis. 40 mm skylė, rodanti 1,575, duoda 40 ÷ 1,575 ≈ **25,4**.
4. Pasirinkite viską, paleiskite [Scale](/lt/docs/commands/scale/), pasirinkite bazinį tašką ir įveskite koeficientą.

Bazinis taškas lieka nejudamas, kol viskas kita juda, todėl padėkite jį kur nors, apie ką galite samprotauti — detalės kampe arba ties koordinačių pradžia. Brėžiniui, kurį rengiatės siųsti pjovimui, paprastai prasmingiausias pasirinkimas yra koordinačių pradžia.

Padeda tai, kad KulmanLab neturi savo vienetų nustatymo. Koordinatės yra tiesiog skaičiai, o tai yra būtent ta būsena, kokioje norite turėti brėžinį, kol išsiaiškinate, ką jo skaičiai reiškia. Už jūsų nugaros nevyksta jokio vienetų konvertavimo ir nėra su kuo kovoti.

## Patikrinkite pataisymą, prieš juo patikėdami

Išmatuokite *antrą* elementą kitoje brėžinio vietoje, kurio tikrąjį dydį taip pat žinote. Tada patikrinkite.

Tai žingsnis, kurį žmonės praleidžia, ir vienintelis, kuris sugauna blogą atvejį. Jei antras matavimas dabar išeina teisingas, brėžinys buvo vienodai netinkamais vienetais, o dabar vienodai tinkamais. Baigta.

Jei antras matavimas *vis dar* klaidingas, ir klaidingas kita reikšme, brėžinys niekada nebuvo paprastas vienetų neatitikimas. Ką tik pakeitėte nenuoseklaus brėžinio mastelį, o tai blogiau nei ten, kur pradėjote, nes klaida nebėra švarus santykis, kurį kas nors pastebėtų.

[Area](/lt/docs/commands/area/) čia yra naudinga antra nuomonė, ypač lakštinėms medžiagoms. Plotas keičiasi koeficiento *kvadratu*, todėl 25,4× ilgio klaida pasirodo kaip 645× ploto klaida — neatitikimas, kurį sunku sau paaiškinti.

## Kaip to išvengti kitą kartą

Vienetai prarandami tarp žmonių, todėl ir sprendimas gyvena ten.

**Nurodykite vienetą siųsdami failą.** Viena eilutė žinutėje. „Visi matmenys mm." Tai nieko nekainuoja ir pašalina visą problemą.

**Pridėkite kartu atskaitos matmenį.** Pasakykite jiems vieną tikrą matavimą — „išorinė plokštė 300 mm pločio". Dabar gavėjas gali patikrinti failą, o ne daryti prielaidą, ir jei kas nors nutiko, gali per minutę pataisyti negrįžęs pas jus.

**Klauskite, kai gaunate jūs.** Jei failas atkeliauja be nurodytų vienetų, o jūs ruošiatės pjauti medžiagą pagal jį, viena žinutė pigesnė nei vienas sugadintas lakštas.

**Braižykite vienetais, kurių tikisi jūsų išvestis.** Lazerinis pjovimas, CNC ir dauguma gamybos procesų tikisi milimetrų. Jei failas keliauja ten, braižykite jį milimetrais ir nebelieka ką konvertuoti, o kartu ir ką sugadinti. Žr. [DXF paruošimas lazeriniam pjovimui](/lt/blog/prepare-dxf-for-laser-cutting/).

## Kai tai ne vienetų problema

Jei jūsų santykis nebuvo švarus vienetų konvertavimas, tikėtinos priežastys yra kitokio pobūdžio:

- **Brėžinys maišo mastelius.** Kažkas nubraižė dalį 1:1 masteliu ir įklijavo detalę 1:5 masteliu, arba blokas buvo įterptas su mastelio koeficientu ir niekada nepataisytas. Taisykite probleminę geometriją, o ne visą failą.
- **Matavote popieriaus erdvės geometriją.** Kampinis štampas ar anotacijos rėmelis nubraižytas lapo, o ne modelio dydžio. Matuokite kažką, kas yra tikrojo objekto dalis.
- **Matavote ne tą dalyką.** Nominali 40 mm skylė gali būti nubraižyta 39,8 dėl sandarumo, o „300 mm" plokštė gali būti 300 iki išorinės grioveliu, kurio nematote. Rinkitės elementą su nedviprasmišku kraštu.

Kiekvienu iš šių atvejų atsakymas yra išsiaiškinti, kas brėžinys iš tikrųjų yra, o ne keisti jo mastelį. Brėžinys, kurio dalys nesutampa tarpusavyje, ir toliau kainuos jums medžiagą, kol kas nors jį atvers ir pažiūrės.

---

*Susiję: [Distance](/lt/docs/commands/distance/) — matavimui, [Scale](/lt/docs/commands/scale/) — pataisymui, [Area](/lt/docs/commands/area/) — antrai nuomonei ir [Export Manager](/lt/docs/commands/export-manager/) — ką neša kiekvienas formatas siunčiant failą atgal.*
