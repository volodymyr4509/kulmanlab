---
title: Trim — Yanke Sassa a Mahaɗai
description: Umarnin Trim yana cire sashen Line, Arc, Circle, Ellipse ko Polyline tsakanin tabon mahaɗa biyu makwabta mafi kusa da mai nuni. Preview yana nuna daidai wace sashe za a yanke kafin ka danna.
keywords: [umarnin trim CAD, yanke layi CAD, yanke da'ira CAD, yanke baka CAD, yanke ellipse CAD, yanke polyline CAD, yanke mahaɗar layi, preview trim na riƙe, kulmanlab]
group: edit
order: 8
---

# Trim

Umarnin `Yanke` yana cire sashen [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) ko [Polyline](../polyline/) wanda ke tsakanin tabon mahaɗa biyu makwabta, yana rabe abu zuwa sashi ɗaya ko fiye da suka rage. Ana tantance sashen da za a yanke ta matsayin mai nuni — riƙe a kan sashen da kake son cirewa ka danna don yanke ta.

## Yanke abu

1. Rubuta `Yanke` a tashar umarni ko danna maɓallin kayan aiki na **Trim**.
2. **Riƙe a kan sashen** da kake son cirewa — preview yana haskaka daidai sashen da za a yanke.
3. **Danna** don cire wannan sashi.

Umarnin yana ci gaba da zama a aiki bayan kowace yankewa, don haka za ka iya ci gaba da riƙe da dannawa don yanke ƙarin sassa — a kan abu ɗaya ko wani daban. Danna **Enter**, **Space**, ko **Escape** don fita.

```
  Kafin:                     Bayan yanke sashen tsakiya:

  ──────●──────●──────        ──────●          ●──────
      mahaɗa    mahaɗa       (bangaren hagu)  (bangaren dama)
                              (sashen tsakiya an cire)
```

## Yadda ake tantance sashen yankewa

Umarnin yana projekta matsayin mai nuni a kan abin da aka riƙe kuma yana samun dukkan tabon mahaɗa da abin ke da su tare da wasu abubuwa. Waɗannan mahaɗai suna rabe abin zuwa sassa — ga Line, Arc, ko Polyline mai buɗewa, ƙarshen abin kansa yana aiki a matsayin iyakoki na ƙari da aka gyara. Cikakken Circle ko Ellipse, ko Polyline rufaffiya (ciki har da Rectangle), ba shi da nasa ƙarshe, don haka ana buƙatar aƙalla tabon mahaɗa biyu kafin a iya yanke shi ko kaɗan. Ana haskaka sashin da tsakaninsa ke ɗauke da projeciyar mai nuni kuma za a cire shi a dannawa.

- **Line, Arc, da Polyline mai buɗewa** — sashen da aka cire zai iya zama bangaren farko (kafin mahaɗa na farko), bangaren tsakiya (tsakanin mahaɗai biyu, yana rabe abin zuwa biyu), ko bangaren ƙarshe (bayan mahaɗa na ƙarshe).
- **Circle, Ellipse da Polyline rufaffiya/Rectangle** — tunda babu farawa ko ƙarewa da aka gyara, kawai baka tsakanin tabon *mahaɗa biyu* za a iya cirewa. Idan mahaɗai sun kasa biyu, babu preview da ke bayyana kuma dannawa ba ya yin komai. Sauran siffar yana zama kaɗai sashin da ya rage.

## Abin da yankewa ke haifarwa

| Abu | Sakamako bayan yankewa |
|--------|------------------------|
| Line | Har zuwa abubuwan Line guntu biyu |
| Arc | Har zuwa abubuwan Arc guntu biyu |
| Circle | Abu ɗaya na [Arc](../arc/) — siffar rufaffiyar da'ira tana ɓacewa, don haka ana adana sashin da ya rage a matsayin baka |
| Ellipse | Abu ɗaya na Ellipse mai kusurwar farawa da ƙarewa — sashin da ya rage yana ci gaba da zama Ellipse, yanzu na sashi |
| Polyline (mai buɗewa) | Har zuwa abubuwan Polyline guntu biyu |
| Polyline (rufaffiya) / Rectangle | Abu ɗaya na Polyline mai buɗewa — siffar rufaffiya tana ɓacewa, don haka ana adana sashin da ya rage a buɗe |
| Spline | Har zuwa abubuwan Spline gajeru biyu — kowane yanki shi ne lanƙwasa ɗaya a ƙaramin ɓangare, ana adana shi da kusurwoyin sarrafawa (ana jefar da wuraren fit na spline na Fit); rufaffen spline yana barin yanki ɗaya buɗaɗɗe |

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Fita daga yanayin trim |
| `Escape` | Fita daga yanayin trim |

## Abubuwan da ake goyon baya

| Abu | Ana Iya Yankewa? |
|--------|----------------|
| Line | Eh |
| Arc | Eh |
| Circle | Eh — yana buƙatar tabon mahaɗa 2 ko fiye |
| Ellipse | Eh — yana buƙatar tabon mahaɗa 2 ko fiye |
| Polyline (mai buɗewa) | Eh |
| Polyline (rufaffiya) / Rectangle | Eh — yana buƙatar tabon mahaɗa 2 ko fiye |
| Spline | Eh — rufaffen spline yana buƙatar wuraren giciye 2 ko fiye |
| Text, Dimension, Leader | Aʼa |

Abubuwan da ake amfani da su a matsayin **iyakokin yankewa** na iya zama Line, Arc, Circle, Ellipse, Polyline, ko Spline. Abubuwan Text, Dimension da Leader ba sa rajistar giciye ko kaɗan, don haka ba za su iya zama iyaka ba.

**Sassan baka** na Polyline (waɗanda aka zana da sauyawa Arc, ko aka shigo da su) suna yankewa daidai kamar sassansa madaidaita — riƙe da kai kan sashin baka tsakanin mahaɗai biyu sannan ka danna. Gefen da aka yanke yana ci gaba da lanƙwasarsa; tsawonsa kaɗai ke canjawa.

## Trim da Extend

| | Trim | Extend |
|---|------|--------|
| Abin da yake yi | Yana cire sashen abu | Yana tsawaita ƙarshen layi zuwa iyaka |
| Kunnawa | Riƙe a kan sashen don yanke | Riƙe kusa da ƙarshen don tsawaita |
| Sakamako | Abu yana rabuwa ko guntuwa | Ƙarshen layi yana motsawa zuwa iyaka |
| Abubuwan da ake goyon baya | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
