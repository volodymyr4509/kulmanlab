---
title: "DXF ir DWG: kuo jie skiriasi?"
description: "DWG yra AutoCAD vietinis formatas, DXF — atviras keitimosi formatas. Kuo jie iš tikrųjų skiriasi, kurio jums reikia ir kaip gauti DXF, kai atsiuntė DWG."
keywords: [DXF ir DWG, skirtumas tarp DXF ir DWG, DWG ar DXF, kas yra DWG, kas yra DXF, DWG į DXF, DXF DWG kuris formatas, CAD failų formatai, DWG failo atvėrimas, DXF failo formatas]
date: 2026-09-02
author: KulmanLab
tag: Vadovas
---

DWG yra AutoCAD vietinis failo formatas — dvejetainis, uždaras ir Autodesk nedokumentuotas. DXF yra keitimosi formatas, kurį Autodesk skelbia, kad kitos programos galėtų skaityti tuos pačius brėžinius. Ta pati geometrija, kitas konteineris — ir tik vienas iš jų skirtas failams perduoti žmonėms už jūsų pačių programinės įrangos ribų.

Būtent tas paskutinis punktas yra visas praktinis skirtumas ir jis lemia, kurio formato turėtumėte prašyti.

## Trumpai

| | DXF | DWG |
|---|---|---|
| Ką reiškia santrumpa | Drawing Exchange Format | Drawing |
| Paskelbta specifikacija | Taip, iš Autodesk | Ne |
| Kodavimas | Tekstas (yra ir dvejetainis variantas) | Dvejetainis |
| Paskirtis | Brėžinių perkėlimas tarp programų | Paties AutoCAD darbinis formatas |
| Failo dydis | Didesnis | Mažesnis |
| Skaitomas kitos programinės įrangos | Labai plačiai | Nepatikimai, per atvirkštine inžinerija sukurtas bibliotekas |
| Neša viską, ką AutoCAD gali | Ne — dokumentuotą poaibį | Taip |

## Kodėl apskritai yra du formatai

Autodesk išleido AutoCAD 1982 m. su DWG kaip darbiniu formatu. Jis sukurtas vienos programos patogumui: kompaktiškas, dvejetainis ir laisvai keičiamas, kai tik AutoCAD to reikia.

Dėl to jis prastas dalykas kam nors siųsti. Todėl Autodesk taip pat paskelbė DXF — tą patį brėžinį, užrašytą dokumentuota, skaitoma forma, kurią gali įgyvendinti bet kuris programuotojas. Atverkite `.dxf` teksto redaktoriuje ir pamatysite grupių kodus ir sekcijų pavadinimus grynu ASCII.

Abu formatai versijuojami kartu. Kiekvienas AutoCAD leidimas atneša DWG reviziją ir atitinkamą DXF reviziją; žymė `AC1032`, kurią kartais pamatysite failo antraštėje, pavyzdžiui, žymi AutoCAD 2018 kartą.

Taigi DXF nėra nei senesnis, nei prastesnis formatas. Tai tas pats brėžinys, sąmoningai padarytas skaitomu.

## Kuo skiriasi praktiškai

**Atvirumas.** Autodesk dokumentuoja DXF ir nedokumentuoja DWG. Programos, skaitančios DWG — o jų daug — remiasi bibliotekomis, sukurtomis formatą išaiškinus atvirkštine inžinerija. Tai veikia gerai ir yra visiškai teisėta, tačiau reiškia, kad DWG palaikymas atsilieka nuo naujų leidimų ir skiriasi tarp programų, o DXF palaikymą gali įgyvendinti bet kas tiesiai pagal specifikaciją.

**Dydis.** Dvejetainis DWG paprastai yra daug mažesnis nei tas pats brėžinys kaip ASCII DXF. Dideliame projekte tai svarbu; vienoje detalėje — ne.

**Tikslumas.** DWG išlaiko viską, ką AutoCAD gali išreikšti, įskaitant objektų tipus, apie kuriuos kitos programos neturi supratimo. DXF apima dokumentuotą poaibį. Įprastai 2D braižybai — linijoms, lankams, apskritimams, polilinijoms, tekstui, matmenims, sluoksniams — tas poaibis yra viskas, ko reikia. Modeliui, besiremiančiam uždarais AutoCAD objektais, eksportas į DXF ką nors praranda.

**Palaikymo plotis.** Praktiškai kiekvienas CAD, CAM ir vektorinis įrankis skaito DXF. DWG skaito mažiau jų, o tie, kurie skaito, dažnai palaiko jį mažiau pilnai.

## Kurio jums iš tikrųjų reikia?

**Kažkas atsiuntė failą ir negalite jo atverti.** Pirmiausia patikrinkite tikrąjį plėtinį. Dauguma žmonių abiem formatams sako „DWG", ir pusę kartų failas jūsų atsisiuntimuose yra `.dxf`, kurį jau galėjote atverti. Žr. [kaip atverti DXF be AutoCAD](/lt/blog/open-dxf-file-without-autocad/).

**Siunčiate lazeriniam pjovimui, CNC dirbtuvei ar gamintojui.** DXF, beveik visada. Staklių programinė įranga ir pjovimo paslaugos sukurtos aplink jį, o 2D pjovimo geometrija patogiai telpa dokumentuotame poaibyje. Žr. [DXF paruošimas lazeriniam pjovimui](/lt/blog/prepare-dxf-for-laser-cutting/).

**Siunčiate architektui ar inžinieriui, dirbančiam su AutoCAD.** Paklauskite. Daugelis teikia pirmenybę DWG, nes to tikisi jų darbo eiga, o kitu atveju jie puikiai atveria ir DXF.

**Archyvuojate kažką ilgam laikui.** DXF. Dokumentuotas teksto formatas bus skaitomas ir po dvidešimties metų bet kam, turinčiam specifikaciją ir teksto redaktorių. Tas argumentas ir yra visa priežastis, kodėl egzistuoja keitimosi formatai.

**Kažkam tiesiog reikia į tai pažiūrėti.** Nė vienas — siųskite PDF. Žr. [DXF konvertavimas į PDF](/lt/blog/convert-dxf-to-pdf/).

## DXF gavimas, kai atsiuntė DWG

Patikimas kelias — paklausti. Failo siuntėjas atveria jį savo CAD programoje ir daro *Save As* arba *Export* → DXF. Tai užtrunka apie dešimt sekundžių, tai gali padaryti kiekviena darbalaukio CAD programa, o failas išeina iš jį sukūrusios programinės įrangos, o ne iš trečiosios šalies spėjimo apie jį.

Jei paklausti negalima, yra konverterių. Du dalykai, kuriuos verta apsvarstyti: konvertavimas yra vieta, kur prarandamas tikslumas, ir jūs įkeliate svetimą brėžinį į paslaugą, kurios nekontroliuojate. Hobio projektui tai gerai. Darbui klientui — paklauskite.

Kai prašote, verta nurodyti versiją. **DXF R12 yra saugiausias** — jis senovinis, visuotinai palaikomas, o jei brėžinys yra paprasta 2D geometrija, neprarandama nieko, kas svarbu. Ypač senesnė staklių programinė įranga su juo daug patenkintesnė.

## Du dalykai, kuriuose žmonės klysta

**„DXF yra su nuostoliais."** Tik ta prasme, kad jis neneša uždarų AutoCAD objektų tipų. Linijos, lankai, apskritimai, polilinijos, tekstas, matmenys ir sluoksniai išlieka nepažeisti. 2D braižybos darbui nuostolis paprastai lygus nuliui.

**„DXF yra senas formatas."** Jis versijuojamas kartu su DWG nuo 1982 m. ir vis dar yra. Painiava kyla iš to, kad R12 taip plačiai naudojamas kaip suderinamumo tikslas, jog žmonės mano, kad DXF ten ir sustojo.

## Kur šis įrankis telpa

[KulmanLab](https://kulmanlab.com) skaito **DXF, o ne DWG**, ir verta pasakyti kodėl, užuot laikius tai apsižiūrėjimu: DXF dokumentuotas, todėl įgyvendinimas gali būti teisingas tiesiog perskaičius specifikaciją. DWG reikštų priklausomybę nuo atvirkštine inžinerija sukurtos bibliotekos, naršyklėje, formatui, kuris keičiasi pagal Autodesk tvarkaraštį.

Jei turite `.dwg`, šis įrankis jo neatvers. Jei turite `.dxf`, galite atverti jį naršyklės skirtuke nieko neįdiegdami: [app.kulmanlab.com](https://app.kulmanlab.com).

Atgal jis įrašo visą brėžinį — linijas, apskritimus, lankus, elipses, polilinijas, splainus, tekstą su formatavimu, matmenis, išnašas ir brūkšniuotes, kartu su sluoksniais ir linijų tipais. Čia atvertas ir vėl eksportuotas failas išeina su savo anotacijomis, o ne nuluptas iki nuogos geometrijos.

---

*Susiję: [Import](/lt/docs/commands/import/) — kas tiksliai skaitoma iš DXF, ir [Export Manager](/lt/docs/commands/export-manager/) — ką neša kiekvienas eksporto formatas.*
