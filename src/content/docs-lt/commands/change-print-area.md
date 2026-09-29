---
title: ChangePrintArea komanda — Print Manager eksporto apkirpimas iki stačiakampio
description: ChangePrintArea komanda pasirenka du priešingus kampus drobėje, kad nustatytų sritį, kurią eksportuoja Print Manager. Palaiko įvestas X,Y koordinates ir prisitraukimą, o sritį prisimena atskirai modelio erdvei ir kiekvienam maketui.
keywords: [CAD spausdinimo sritis, CAD eksporto apkirpimas, change print area komanda, print manager apkirpimas, eksporto sritis CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Komanda `ChangePrintArea` nustato stačiakampę sritį, kurią eksportuoja [Print Manager](../print-manager/). Ji veikia ant tuščios drobės, kai Print Manager paslėptas, ir ima du priešingus kampus — tuos pačius du pasirinkimus kaip [Rectangle](../rectangle/), todėl įvestos koordinatės ir prisitraukimas elgiasi lygiai taip pat.

## Srities pasirinkimas

1. Terminale įveskite `ChangePrintArea` arba spustelėkite **Change Area** Print Manager šoninėje juostoje. Print Manager paslepiamas ir drobė tampa interaktyvi.
2. **Spustelėkite pirmą kampą** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite priešingą kampą** arba vėl įveskite `X,Y`.

Print Manager vėl atsidaro su nauja sritimi peržiūroje, kuri pakeičia dydį pagal tikslų tos srities kraštinių santykį.

Kampai prisitraukia prie rankenėlių ir sankirtų kaip ir bet kuriame kitame taško pasirinkime, todėl galite apkirpti pagal nubrėžtą geometriją, o ne iš akies. Du kampus galima nurodyti bet kokia tvarka — priešingi kampai apibrėžia tą patį stačiakampį, kurį bepasirinktumėte pirmą.

Paspauskite `Escape`, kad atšauktumėte. Nieko neįrašoma, todėl Print Manager vėl atsidaro su ta sritimi, kurią jau turėjo.

## Kur sritis prisimenama

Pasirinkimas saugomas pagal kontekstą, o ne globaliai:

| Kontekstas | Vieta |
|------------|-------|
| Modelio erdvė | Viena bendra vieta |
| Kiekvienas maketas | Sava vieta, saugoma atskirai |

Vėl atvėrus Print Manager tame pačiame makete — ar Model — atkuriamas to konteksto paskutinis apkirpimas, o ne atstatoma, o perjungiant maketus kiekvieno sritis lieka nepaliesta.

Tai laikoma tik atmintyje. Perkrovus puslapį, kiekviena saugota sritis išvaloma, o Print Manager grįžta prie žemiau nurodytų numatytųjų.

## Numatytoji sritis

Kai dabartiniam kontekstui nieko neišsaugota, Print Manager atsidaro su:

| Kontekstas | Numatytoji |
|------------|------------|
| Modelio erdvė | Visų objektų apribojantis stačiakampis — tas pats užimamas plotas, prie kurio artina [Fit](../fit/) |
| Maketas | Visas lapas |

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [Print Manager](../print-manager/) | Eksporto langas, kuriam ši sritis taikoma |
| [Rectangle](../rectangle/) | Tas pats dviejų kampų pasirinkimas, tik nubrėžia polilinija |
| [Fit](../fit/) | Priartina iki užimamo ploto, kuris yra numatytasis modelio erdvei |
