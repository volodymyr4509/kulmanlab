---
title: Distance Tracking — tikslaus ilgio įvedimas nuo prisegto taško
description: Dist jungiklis leidžia paskutiniam vektoriniam smeigtukui veikti kaip inkarui, nuo kurio matuoja kampo sekimas, todėl galite įvesti tikslų ilgį ir padėti tašką tiksliu atstumu bei kampu nuo esamo taško — įskaitant pirmąjį figūros tašką.
keywords: [atstumo sekimas CAD, tikslaus atstumo įvedimas CAD, dist jungiklis, atstumo sekimas nuo smeigtukų, polinis sekimas CAD, tikslaus ilgio įvedimas, tiesioginis atstumo įvedimas, kulmanlab]
group: interface
order: 3
---

# Distance Tracking

**Distance Tracking** leidžia padėti tašką įvedant tikslų ilgį vietoj spustelėjimo. Jis valdomas **Dist** jungikliu valdymo juostoje, šalia [Pins](../vector-pins/) ir ANGL, ir yra **pagal numatytuosius nustatymus įjungtas**, o nustatymas išlieka tarp sesijų.

Jis prideda siaurą, bet naudingą galimybę: leidžia **paskutiniam vektoriniam smeigtukui** veikti kaip inkarui, nuo kurio matuoja kampo sekimas. Be jo komanda gali matuoti tik nuo taško, kurį jau pati surinko — o tai reiškia, kad *pirmasis* figūros taškas neturi nuo ko matuoti apskritai.

## Trys jungikliai veikia kartu

Distance Tracking nėra savarankiškas. Prieš galint įvesti ilgį, du kiti jungikliai turi būti tinkamos būsenos:

| Jungiklis | Vaidmuo |
|-----------|---------|
| **Pins** | Pateikia atskaitos tašką. Užveskite žymeklį ant prisitraukimo taško 500 ms, kad jį prisegtumėte — žr. [Vector Pins](../vector-pins/). |
| **ANGL** | Pateikia kampą. Atstumo sekimas tampa prieinamas tik kai žymeklis užrakintas kampu, todėl ANGL turi būti nustatytas į žingsnį (10°, 20°, 30°, 45°, 90°), o ne Off. |
| **Dist** | Leidžia naudoti smeigtuką kaip inkarą, o ne tik pačios komandos tašką. |

Jei Pins ir Dist įjungti, bet ANGL nustatytas **Off**, nieko neįvyks: nėra užrakintos krypties, išilgai kurios matuoti ilgį.

## Kaip Pins ir Dist susieti

Atstumo sekimas neturi prasmės su išjungtais smeigtukais, todėl abu jungikliai laikomi suderintais:

- **Pins** įjungimas įjungia ir **Dist**.
- **Pins** išjungimas išjungia ir **Dist**.
- **Dist** įjungimas įjungia **Pins**, jei jis nebuvo įjungtas.
- **Dist** išjungimas palieka **Pins** įjungtą.

Taigi Dist niekada negali būti aktyvus, kai Pins neaktyvūs, tačiau galite palikti smeigtukų sekimą lygiavimui, o atstumo sekimą išjungti — naudinga, jei norite atskaitos linijų, bet nenorite, kad žymeklis užsirakintų prie smeigtuko, kai norėjote užsirakinti prie savo paties paskutinio taško.

## Taško padėjimas tiksliu atstumu

1. Įjunkite **Pins**, **Dist** ir nustatykite **ANGL** į kampo žingsnį.
2. Paleiskite komandą, kuri prašo taško — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) ir taip toliau.
3. **Prisekite atskaitos tašką**: užveskite žymeklį ant esamo prisitraukimo taško, kol žymė virs užpildytu kvadratu.
4. Perkelkite žymeklį nuo smeigtuko maždaug norimu kampu. Kai jis priartėja prie vieno iš ANGL žingsnių, kryptis **užsirakina** — nuo smeigtuko pasirodo sekimo indikatorius.
5. **Įveskite ilgį** ir paspauskite **Enter** arba **Space**. Taškas padedamas tiksliai tokiu atstumu nuo smeigtuko užrakintu kampu.

Terminalo raginimas praneša, kada galite rinkti. Užrakinus jis skamba:

```
pick start point or enter length: [ ]
```

o jūsų įvesta reikšmė atsiranda skliausteliuose.

## Kodėl pirmasis taškas svarbus

Tai atvejis, kuris kitaip būtų neįmanomas. Įsivaizduokite, kad norite pradėti liniją tiksliai 250 vienetų į dešinę nuo esamo kampo:

1. Paleiskite [Line](../../commands/line/).
2. Prisekite esamą kampą.
3. Judėkite į dešinę, kol kryptis užsirakins ties 0°.
4. Įveskite `250`, paspauskite **Enter**.

Linija dabar prasideda taške 250 vienetų nuo kampo, be konstrukcinės geometrijos ir be aritmetikos. Be Dist Line komanda dar nebūtų surinkusi jokių taškų, todėl nebūtų nuo ko *matuoti* įvesto ilgio — galėtumėte tik apytiksliai spustelėti arba nubrėžti konstrukcinę liniją ir vėliau ją ištrinti.

**Antram ir tolesniems** taškams komanda jau turi savo inkarą (ankstesnį tašką) ir jis naudojamas pirmiausia. Smeigtukas svarstomas kaip alternatyva tik kai jūsų paties inkaras neužrakintas, todėl kažko prisegimas neperima užrakto, kurį jau turite.

## Rinkimas užšaldo užraktą

Kai pradedate rinkti skaitmenis, inkaras nustoja keistis. Taškas, buvęs užrakintas tuo metu, kai nukrito pirmas skaitmuo, lieka inkaru, kol patvirtinsite ar išvalysite lauką — pelės judinimas įvedimo viduryje tyliai nepakeis matavimo į kitą smeigtuką ar pačios komandos tašką.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda prie ilgio |
| `-` | Neigiamas ilgis — apverčia kryptį išilgai užrakinto kampo (tik pirmas simbolis) |
| `Backspace` | Ištrina paskutinį simbolį |
| `Enter` / `Space` | Padeda tašką įvestu ilgiu |
| `Escape` | Atšaukia komandą; užraktas ir įvesta reikšmė išvalomi |

Ilgio įvedimas nebūtinas. Su užrakinta kryptimi vis tiek galite spustelėti, ir taškas projektuojamas į užrakintą kampą.

## Kur veikia

Atstumo sekimas prieinamas kiekvienoje komandoje, kuri prašo pasirinkti taškus:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) ir [ViewportCopy](../../commands/viewport-copy/).

## Taip pat žr.

- [Vector Pins](../vector-pins/) — taškų prisegimas ir sekimas jų atskaitos linijomis
- [Grid & Snap](../grid-snap/) — kitos tikslumo priemonės valdymo juostoje
- [Distance](../../commands/distance/) — esamo atstumo matavimas, o ne naujo įvedimas
