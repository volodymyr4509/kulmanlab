---
title: "Kaip paruošti DXF failą lazeriniam pjovimui"
description: "Kodėl pjovimo paslaugos atmeta DXF failus ir kaip ištaisyti jūsiškį — uždari keliai, vienetai, pjūvio plotis ir sluoksniai — nemokamai naršyklėje be diegimo."
keywords: [DXF lazeriniam pjovimui, DXF paruošimas lazeriniam pjaustytuvui, failo formatas lazeriniam pjovimui, DXF atmestas lazerinio pjovimo, uždari keliai DXF, pjūvio pločio priedas lazeris, lazerinio pjovimo failo paruošimas, DXF vienetai lazeris, sluoksniai pjovimas žymėjimas graviravimas, nemokamas DXF redaktorius lazeriui]
date: 2026-09-02
author: KulmanLab
tag: Vadovas
---

DXF lazeriniam pjovimui reikia keturių dalykų: uždarų kelių, teisingų vienetų, tik pjovimo geometrijos — jokių matmenų, pastabų ar brūkšniavimo — ir sluoksnių, kurie atskiria pjovimą nuo žymėjimo ir graviravimo. Šis vadovas apima kiekvieną iš jų ir kaip patikrinti savo failą, prieš jį atmetant paslaugai.

Viską tai galite padaryti nemokamai naršyklėje adresu [app.kulmanlab.com](https://app.kulmanlab.com) — be diegimo, be paskyros, o failas nepalieka jūsų kompiuterio. Tai darbo eiga, kuriai KulmanLab iš pradžių ir buvo sukurtas, todėl išlygos, taikomos kitoms CAD užduotims, čia dažniausiai netaikomos: lazerinis pjovimas yra 2D, o DXF yra tai, ko nori pjovimo paslaugos.

## Kodėl failai atmetami

Penkios priežastys paaiškina beveik viską.

**Atviri keliai.** Figūra, atrodanti uždara, bet turinti plaukelio storio tarpą viename kampe, nėra sritis — tai nesujungtų linijų rinkinys. Pjaustytuvams reikia žinoti, kas viduje ir kas išorėje, o atvira kontūras vidaus neturi. Tai vienintelė dažniausia atmetimo priežastis.

**Neteisingi ar dviprasmiški vienetai.** DXF patikimai neįrašo, ką reiškia jo skaičiai. Tas pats failas gali būti milimetrais, centimetrais, coliais ar pėdomis, ir dažnai failas to nesako. Detalė, atkeliaujanti 25,4× per didelė ar per maža, yra būtent tai.

**Ne geometrijos šiukšlės.** Matmenys, štampai, pastabos, brūkšniavimas, konstrukcinės linijos. Staklės mielai bandys išpjauti jūsų anotaciją.

**Pasikartojančios linijos.** Dvi identiškos linijos viena ant kitos reiškia, kad lazeris pjauna tą patį kelią du kartus — veltui prarastas laikas, apdegę kraštai, o plonai medžiagai ir gaisro rizika.

**Viskas viename sluoksnyje.** Jei pjovimas, žymėjimas ir graviravimas neatskirti, paslauga negali pasakyti, kas yra kas, ir paprašys pateikti iš naujo.

## Failo paruošimas

Nutempkite savo `.dxf` ant drobės adresu [app.kulmanlab.com](https://app.kulmanlab.com) arba naudokite mygtuką **Import** failų skydelyje. Brėžinys įkeliamas ir vaizdas jam pritaikomas.

**1. Pažiūrėkite, ką iš tikrųjų turite.** Įveskite `fit`, kad viskas būtų matoma. Priartinkite kiekvieną kiekvienos detalės kampą — tarpai nematomi viso brėžinio masteliu ir akivaizdūs 10× masteliu. Tai patikra, kuri sutaupo jums atmetimo laišką.

**2. Ištrinkite tai, ko nereikia pjauti.** Konstrukcines linijas, pastabas, rėmelius, matmenis. `layer-isolate` rodo po vieną sluoksnį, taip randami paklydę objektai, pasislėpę po tikra geometrija.

**3. Uždarykite tarpus.** `trim` nukerta išsikišusius galus, kur dvi linijos praeina viena pro kitą. Kur linijos nesiekia, nutempkite galo rankenėlę ant kaimyno — rankenėlės prisitraukia, todėl galai iš tikrųjų susitinka, o ne beveik susitinka.

**4. Patikrinkite dydžius.** `distance` matuoja tarp dviejų taškų, `area` matuoja apribotą sritį iš spustelėtų taškų. Išmatuokite vieną elementą, kurio tikrąjį matmenį žinote. Jei rodo 25,4 karto ne taip, jūsų failas yra netinkamoje vienetų sistemoje.

**5. Atskirkite pjovimą nuo žymėjimo ir graviravimo.** Kiekvieną operaciją padėkite į atskirą sluoksnį su aiškiu pavadinimu — `CUT`, `SCORE`, `ENGRAVE`. Dauguma paslaugų to arba prašo, arba prašo atskirų failų. `layer-manager` juos sukuria ir priskiria.

Tada eksportuokite: **Export** → **DXF**. KulmanLab rašo paprastą AC1032 DXF, kurio tikisi pjovimo paslaugos ir staklių programinė įranga.

## Pjūvio plotis (kerf)

Lazeris pjaudamas pašalina medžiagą — maždaug 0,1–0,3 mm, priklausomai nuo staklių, medžiagos ir storio. Išpjaukite 50 mm kvadratą ir gausite šiek tiek mažesnį nei 50 mm kvadratą, o detalė, skirta jam sandariai įsispausti, neįsispaus.

Du būdai tai išspręsti:

**Leiskite paslaugai tai tvarkyti.** Dauguma pjovimo paslaugų pačios taiko pjūvio pločio kompensavimą, ir jei taiko, jūsų pačių kompensavimas daro detales neteisingas kita kryptimi. Paklauskite, prieš ką nors koreguodami.

**Padarykite patys.** `offset` sukuria lygiagrečią figūros kopiją fiksuotu atstumu — pusė pjūvio pločio, į išorę detalėms, kurias norite palikti to dydžio, į vidų skylėms. Veikia su linijomis, apskritimais, lankais, elipsėmis ir polilinijomis. Tai vienas objektas vienu metu, todėl praktiška saujai kritinių elementų, o ne dviejų šimtų detalių lakštui.

Jei svarbus tolerancija, prieš įsipareigodami medžiagai, išpjaukite vieną bandomąjį gabalą.

## Ką patikrinti dėl DXF eksporto

Verta žinoti, prieš jį pasitikint:

- **Anotaciją atžymėkite, o ne trinkite.** Tekstas, matmenys, išnašos ir brūkšniuotės dabar visi eksportuojami, todėl viskas, kas lieka brėžinyje, patenka į failą. Jums nereikia jų trinti: Export Manager išvardija kiekvieną objekto tipą su savo žymimuoju langeliu, todėl nuėmus Text, keturių matmenų eilučių, Leaders ir Hatches žymėjimą, gaunate DXF su pjovimo geometrija ir nieko daugiau, o pats brėžinys lieka nepaliestas.
- **Tekstas patenka kaip `MTEXT`, kas nėra tas pats, kas graviruojama geometrija.** Užrašai eksportuojami su nepažeistu formatavimu, tačiau daug staklių programinės įrangos nori kontūrų, o ne gyvo teksto graviravimo sluoksnyje. Patikrinkite, ką priima jūsiškė, prieš planuodami graviruotus užrašus.
- **Bloko nuorodos neimportuojamos.** Brėžinys, sudarytas iš pasikartojančių blokų simbolių, atkeliauja nepilnas, todėl patikrinkite detalių kiekius pagal originalą.

Splainai *eksportuojami*. Kai kuri staklių programinė įranga juos tvarko prastai ir teikia pirmenybę polilinijoms — jei jūsiškė tokia, perbraižykite kreives kaip polilinijas ar lankus.

## Įspėjimas dėl automatizavimo

KulmanLab **neturi išankstinio patikrinimo įrankio**. Niekas neieško atvirų kontūrų, pasikartojančių linijų ar vienetų problemų ir apie jas nepraneša. Aukščiau pateikti patikrinimai atliekami rankiniu būdu: priartinti, išmatuoti, pažiūrėti.

Tai gerai saujai detalių ir nuobodu visam sukomponuotam lakštui. Jei gaminate lakštus reguliariai, jums geriau pasitarnaus įrankis su automatiniu tikrintuvu — o pavienėms detalėms, kas yra dauguma žmonių daugumą laiko, atidus failo peržiūrėjimas sugauna tas pačias problemas.

## Prieš siunčiant

- Kiekvienas pjovimo kelias uždaras — kampai patikrinti dideliu didinimu
- Vienas žinomas matmuo išmatuotas ir teisingas
- Nebeliko matmenų, pastabų, rėmelių ar konstrukcinės geometrijos
- Nėra pasikartojančių linijų viena ant kitos
- Pjovimas, žymėjimas ir graviravimas atskiruose, aiškiai pavadintuose sluoksniuose
- Pjūvio plotis: arba pritaikytas, arba sąmoningai paliktas paslaugai
- Eksportuota kaip DXF, vieną kartą vėl atverta patvirtinti, kad atrodo teisingai

Tas paskutinis punktas kainuoja dešimt sekundžių ir sugauna eksporto staigmenas, prieš jas sugaunant paslaugai.

---

*Susiję: [Import](/lt/docs/commands/import/) — ką KulmanLab skaito iš DXF, [Export Manager](/lt/docs/commands/export-manager/) — tiksliai ką neša kiekvienas formatas, [Offset](/lt/docs/commands/offset/) — pjūvio pločio kompensavimui ir [LayerManager](/lt/docs/commands/layer-manager/) — pjovimo ir graviravimo sluoksniams nustatyti.*
