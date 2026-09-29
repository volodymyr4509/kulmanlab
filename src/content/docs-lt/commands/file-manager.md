---
title: File Manager — miniatiūrų tinklelis, pervadinimas ir ištrynimas KulmanLab CAD
description: File Manager komanda atveria kiekvieno išsaugoto brėžinio miniatiūrų tinklelį — spustelėkite miniatiūrą, kad atvertumėte, pervadinkite vietoje arba ištrinkite su patvirtinimu.
keywords: [failų tvarkytuvė CAD, paskutiniai failai CAD, brėžinio pervadinimas, brėžinio ištrynimas, miniatiūrų tinklelis CAD, brėžinio atkūrimas, DXF atvėrimas iš naujo, naršyklės saugykla CAD, KulmanLab failai, išsaugoti brėžiniai, IndexedDB CAD, CAD brėžinio atsarginė kopija]
group: file
order: 3
---

# File Manager

Komanda `FileManager` atveria **miniatiūrų tinklelį** kiekvieno brėžinio, išsaugoto jūsų naršyklės vietinėje saugykloje, surikiuotą pagal tai, kada kiekvienas paskutinį kartą išsaugotas. Naudokite ją ankstesniam brėžiniui atverti, pervadinti ar ištrinti.

## File Manager atvėrimas

- Terminale įveskite `FileManager`, **arba**
- spustelėkite mygtuką **File Manager** (istorijos piktograma) failų skydelyje ekrano viršuje.

Skydelis atsidaro kairėje drobės pusėje ir užsidaro automatiškai, kai tik pradedate kitą komandą arba [importuojate](../import/) failą — todėl jis niekada nekabo virš brėžinio, kurio dar neišvardijo. Kiekvieną kartą jis atsidaro su nauju sąrašu.

## Miniatiūrų tinklelis

Kiekvienas išsaugotas brėžinys yra kortelė, rodanti gyvai atvaizduotą miniatiūrą, pavadinimą ir paskutinio atnaujinimo laiką. Miniatiūros generuojamos vietoje kiekvieną kartą atveriant skydelį — nieko iš anksto neatvaizduojama ir nesaugoma — todėl kortelė trumpam rodo vietos žymos piktogramą, kol nupiešiama jos miniatiūra. Ta pati vietos žyma rodoma ir jei generavimas nepavyksta arba jei brėžinys tikrai dar neturi objektų.

| Veiksmas | Kaip |
|----------|------|
| **Atverti** brėžinį | Spustelėkite jo miniatiūrą — pakeičia dabartinį drobės turinį |
| **Pervadinti** | Spustelėkite pieštuko piktogramą arba dukart spustelėkite pavadinimą |
| **Ištrinti** | Spustelėkite šiukšliadėžės piktogramą, tada patvirtinkite |

Jei dar nebuvo išsaugota jokių failų, skydelis rodo „No files saved". Kai failų daugiau, nei telpa viename ekrane, po tinkleliu atsiranda valdikliai **Page 1 of N**.

Kortelė to failo, kuris šiuo metu atidarytas redaktoriuje, pažymima akcento spalvos žiedu ir **neturi ištrynimo mygtuko** — atidaryto failo ištrynimas išvalytų jo saugomus duomenis, kol drobė toliau jį rodytų, o kitas redagavimas jį tiesiog išsaugotų atgal. Pervadinti jį vis tiek galima.

## Failo ištrynimas

Spustelėjus šiukšliadėžės piktogramą, ištrinama ne iškart — toje kortelėje įjungiamas patvirtinimo perdanga („Delete this file?" su mygtukais **Delete** / **Cancel**), nes ištrynimas nuolatinis ir jo negalima atšaukti. Spustelėjus **Cancel**, kitos kortelės šiukšliadėžės piktogramą ar bet kur kitur toje kortelėje, laukiantis patvirtinimas atmetamas nieko neištrynus.

## Failo pervadinimas

Spustelėkite pieštuko piktogramą (arba dukart spustelėkite failo pavadinimą), kad jį redaguotumėte vietoje, tada paspauskite **Enter**, kad patvirtintumėte, arba **Escape**, kad atšauktumėte. Pervadinimas atmetamas, jei naujas pavadinimas:

- tuščias arba ilgesnis nei 100 simbolių,
- jau naudojamas kito išsaugoto failo (neatsižvelgiant į raidžių dydį),
- baigiasi tašku, arba
- yra Windows rezervuotas įrenginio pavadinimas, pavyzdžiui, `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9` ar `LPT1`–`LPT9`.

Simboliai, netinkami failo pavadinime (`\ / : * ? " < > |`), renkant automatiškai pašalinami. Pervadinimas keičia tik etiketę — jis neturi įtakos brėžinio padėčiai tinklelyje, nes ji rikiuojama pagal paskutinio išsaugojimo laiką, o ne pagal pavadinimą.

## Sukurkite atsarginę darbo kopiją — naršyklės saugykla nėra nuolatinė

KulmanLab išsaugo brėžinius **IndexedDB** — jūsų naršyklėje įtaisytoje duomenų bazėje:

- Failai saugomi **tik vietoje jūsų įrenginyje** — nieko neįkeliama į serverį.
- Kiekviena naršyklė ir įrenginys turi savo nepriklausomą saugyklą. Brėžinys, išsaugotas Chrome viename kompiuteryje, nepasirodo Firefox ar kitame įrenginyje.
- Ši saugykla **gali būti išvalyta be įspėjimo** — išvalius svetainės duomenis ar naršymo istoriją, pritrūkus vietos diske, naudojant privatų/inkognito langą, perinstaliavus naršyklę ar OS arba pakeitus įrenginį. Nė vienas iš šių atvejų nesuteikia galimybės atkurti to, kas ten buvo.

**Vienintelis patikimas būdas apsaugoti brėžinį — [eksportuoti](../export-manager/) jį į savo saugyklą.** Kai įmanoma, naudokite `.json` (vietinis KulmanLab formatas) — jis išsaugo kiekvieną objektą tiksliai; `.dxf` naudokite, kai reikia suderinamumo su kitais CAD įrankiais. Darykite tai visam, ko būtų gaila prarasti, ir prieš valydami naršyklės duomenis, keisdami naršykles ar įrenginius arba paliekdami kompiuterį ilgesniam laikui.

## Automatinis failo įkėlimas paleidžiant

Atvėrus KulmanLab CAD, programa automatiškai įkelia iš saugyklos **paskutinį pakeistą failą**. Kiekvieną kartą jo atverti rankiniu būdu iš File Manager nereikia.

## Saugyklos valdymas

Brėžinių, kuriuos galite išsaugoti, skaičius nėra fiksuotai apribotas, tačiau naršyklės saugykla yra baigtinė. Jei pastebėjote saugyklos įspėjimus, ištrinkite senesnius failus iš File Manager — arba dar geriau, pirmiausia juos eksportuokite, kad nieko neprarastumėte.

Norėdami visus išsaugotus brėžinius pašalinti iš karto, naudokite komandą [WipeStorage](../wipestorage/).

## Failų pavadinimai

Nauji ir importuoti failai gauna paprastą pavadinimą — be įtaisyto laiko žymos. Jei tas pavadinimas jau užimtas, automatiškai pridedamas Finder/Explorer stiliaus priedas (`plan (2)`, `plan (3)`, …), kad niekas nebūtų perrašyta. Failui vėliau visada galite suteikti aiškesnį pavadinimą naudodami [pervadinimą](#failo-pervadinimas).

## Susijusios komandos

- [Import](../import/) — įkelti brėžinį iš failų sistemos į naršyklės saugyklą
- [Export Manager](../export-manager/) — atsisiųsti brėžinį į failų sistemą
- [New File](../new-file/) — pradėti tuščią brėžinį (taip pat išsaugomas automatiškai)
- [WipeStorage](../wipestorage/) — išvalyti visus išsaugotus failus iš naršyklės saugyklos
