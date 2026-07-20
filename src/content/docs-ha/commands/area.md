---
title: Area — Auna Fili da Kewayen Polygon
description: Umarnin Area yana auna fili da kewaye na polygon da aka bayyana ta tabo 3 ko fiye da aka danna, ta amfani da shoelace formula. Yana goyon bayan shigarwa mai kwatance kusurwa-kulle da alama mai dorewa a kan canvas na sakamakon.
keywords: [auna fili CAD, umarnin area, ma'aunin fili na polygon, auna kewaye, shoelace formula, awo na CAD kulmanlab]
group: measure
order: 3
---

# Area

Umarnin `area` yana auna fili da kewaye na polygon da aka bayyana ta tabo uku ko fiye da aka danna, kuma yana buga sakamako biyu a tashar umarni har zuwa lambobi 4 bayan digit. Shine umarnin awo na uku, tare da [Distance](../distance/) (tsawon layi madaidaici) da [Angle](../angle/) (kusurwar ciki a wata kusurwa).

## Yanayin auna fili

```
  ● tabo na farko
   \
    \
     ● tabo na biyu
      \
       \             (mai ɗigo-ɗigo) preview na gefen rufewa
        ●───────────────┐
      tabo na uku       │  (mai ɗigo-ɗigo) preview na gefe na gaba zuwa mai nuni
                         ✕ mai nuni  →  tashar umarni: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vertices** — kowane tabo da aka danna (ko rubuta) yana zama vertex na polygon; gefunan da aka tabbatar ana zana su cikakke kuma cikin an cika shi da alama mai bayyanawa.
- **Preview na gefuna** — layukan ɗigo-ɗigo suna nuna gefen da ke jira daga vertex na ƙarshe zuwa mai nuni, da gefen rufewa daga mai nuni komawa vertex na farko, don ka iya ganin sifa kafin tabbatar da ita.
- **Gefen rufewa** — ba ka taɓa danna tabo na farko sake ba; dannawa Enter yana rufe polygon kai tsaye.

## Auna fili

1. Rubuta `area` a tashar umarni ko danna maɓallin kayan aiki na **Area** (jere na ƙasa na panel na Measure).
2. **Danna tabo na farko**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna kowace vertex ƙari** a tsari a kewayen sifar. Shigar da daidaitawa yana aiki a kowane mataki.
4. Da zarar an sanya aƙalla **tabo 3**, danna **Enter** (ba tare da wata shigarwar daidaitawa ko nisa da ke jira ba) don rufe polygon ka lissafa sakamakon.
5. Tashar umarni tana buga `Area: <ƙima>  Perimeter: <ƙima>`, kuma polygon da aka rufe — cikawa, waje, da grips na vertex — yana ci gaba da bayyana a kan canvas.
6. **Danna a ko'ina, danna wani maɓalli, ko danna `Escape`** don kawar da sakamakon ka kammala umarnin.

## Kulle-kusurwa da nisa madaidaici

Bayan an sanya vertex na farko, motsawa zuwa ɗaya daga cikin matakan bin diddigin kusurwa da aka saita (10°, 15°, 20°, 30°, 45°, ko 90°, an saita ta dropdown a kayan aiki) yana kulle gefen na gaba zuwa wannan shugabanci:

- Preview na gefen yana snap zuwa shugabancin da aka kulle, kuma ana zana alamar bin diddigin kusurwa a vertex na tushe.
- Rubuta tsawo ka danna **Enter** don sanya vertex na gaba a nisan da aka bayyana daidai a kan shugabancin da aka kulle.
- Danna yayin an kulle (ba tare da tsawo da aka rubuta ba) yana sanya vertex a wurin da mai nuni ya faɗi a kan shugabancin da aka kulle.

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara zuwa ƙimar tsawon gefe |
| `-` | Tsawo mara kyau (haruf na farko kaɗai) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Sanya vertex na gaba a tsawon da aka rubuta |

## Rufe polygon

- Enter yana rufe sifa ne kawai bayan an sanya **3 ko fiye** vertices — da ƙasa da haka, babu tasiri.
- Ana ƙara gefen daga vertex na ƙarshe komawa na farko kai tsaye kuma ana ƙidaya shi a fili da kewaye duka.
- Za a iya sanya tabo a kowace tsari (clockwise ko counterclockwise) — sakamako iri ɗaya ne a kowace hanya.

## Area da Distance da Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Abin da yake aunawa | Fili da kewayen polygon da aka rufe | Tsawon layi madaidaici | Kusurwar ciki a wata kusurwa |
| Adadin dannawa | 3 ko fiye, an rufe da Enter | 2 | 3 |
| Tsarin sakamako | `12.3456  Perimeter: 45.6789` | `12.3456` (unit) | `45.0000°` |
| Preview na canvas | Polygon da aka cika tare da gefen rufewa mai ɗigo-ɗigo | Layi daga tabo na farko zuwa mai nuni | Layi biyu daga kusurwa zuwa ƙarshen biyu |
| Bayan sakamako | Kawar da shi da kowace shigarwa, sannan umarnin ya fita | Danna don sarƙa sabon awo | Danna don sarƙa sabon awo |
| Mafi kyau don | Yankuna da aka rufe, fili na ɗaki ko panel | Tsawon gibi ko sashi | Buɗewar kusurwa tsakanin fasaloli biyu |

## Shigar da daidaitawa

Maimakon dannawa, rubuta madaidaicin matsayi ga kowace vertex:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don tabbatarwa.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X, ko shigarwar tsawon gefe yayin kulle-kusurwa |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko tsawo da aka rubuta; da vertices 3+ ba tare da shigarwar da ke jira ba, yana rufe polygon |
| `Escape` | Yayin zaɓen vertices, kawar da su ka sake farawa a tabo na farko; da zarar an nuna sakamako, kawar da shi ka fita |

## Bayanan ƙari

- Ana lissafa fili da [shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula) kuma koyaushe ana bayar da rahoto a matsayin ƙima mai kyau, ba tare da la'akari da tsarin dannawa ba.
- Polygons masu haɗuwa da kansu (gefuna da suke haɗuwa) har yanzu suna samar da sakamako na lamba, amma ƙimar ba za ta iya dacewa da yankin da aka gani ba — ka riƙe tsarin dannawa mai rashin haɗuwa don fili mai ma'ana.
- Ana nuna sakamako a **tashar umarni da kuma a matsayin alama na wucin gadi a kan canvas kaɗai** — babu abin da aka ƙara zuwa zanen a matsayin abu na dindindin.
- Ba kamar Distance da Angle ba, Area **ba** ta sarƙa zuwa sabon awo kai tsaye — bayan ka kawar da sakamakon, sake gudanar da `area` don auna wani polygon.
- Daidaito koyaushe lambobi 4 ne bayan digit ga fili da kewaye duka, a irin unit ɗin da kanana coordinates na zane (babu canjin unit).
