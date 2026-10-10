---
title: Arc — Zana Baka na Tabo Uku ta Hanyar Circumcircle
description: Umarnin Arc yana zana baka mai zagaye ta tabo uku da aka danna daidai, ta amfani da geometry na circumcircle. Grips na farko da ƙarshe suna barka ka ja ƙarshen bakan zuwa sabuwar kusurwa da radius bayan sanya shi. Cikakken juyawa a DXF a matsayin abubuwan ARC.
keywords: [umarnin arc CAD, baka tabo uku CAD, baka na circumcircle, zana baka CAD, abin ARC na DXF, gyaran grip na baka, kulmanlab]
group: shapes
order: 5
---

# Arc

Umarnin `Baka` yana zana baka mai zagaye ta tabo uku da ka danna. Ana lissafa bakan a matsayin circumcircle na musamman wanda ya wuce ta dukkan tabo uku — babu bukatar bayyana tsakiya ko radius kai tsaye. Bakan yana gudana daga dannawa ta farko zuwa dannawa ta uku, yana wucewa ta ta biyu.

## Zana baka

1. Rubuta `Baka` a tashar umarni ko danna maɓallin kayan aiki na **Arc**.
2. **Danna tabo na farko** — ƙarshe ɗaya na bakan. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna tabo na biyu** — tabon da bakan dole ne ya wuce ta ciki (yana sarrafa curvature da shugabanci). Shigar da daidaitawa yana aiki a nan ma.
4. **Danna tabo na uku** — ƙarshen dayan na bakan. Ana sanya bakan kuma umarnin yana fita. Shigar da daidaitawa yana aiki a nan ma.

```
           ● (dannawa ta 2 — tsakiyar hanyar curve)
          / \
         /   \
        ●     ●
     na 1     na 3
```

Preview na layi yana haɗa dannawa biyun farko yayin da kake matsar da ta uku. Daga dannawa ta biyu gaba, preview na baka mai rai yana bin mai nuni.

> **Tabo masu haɗuwa a layi ɗaya**: idan dukkan tabo uku suna a layi madaidaici ba za a iya lissafa bakan ba kuma babu abin da za a sanya. Motsa tabo na biyu daga layin ka sake gwadawa.

## Wasu hanyoyin zana arc

Maki uku shi ne tsoho. A wasu umarni tashar umarni tana nuna zaɓuɓɓuka a cikin ƙusoshi, kamar `[Center=false]` — rubuta harafin zaɓin don kunna shi (`[Center=true]`) kuma sake rubutawa don kashe shi. Idan aka haɗa su, suna zana arc ta wasu hanyoyi shida:

| Hanya | Kunna | Mataki na ƙarshe |
|---|---|---|
| Start, Center, End | `C` | wurin ƙarshe |
| Start, Center, Angle | `C`, `A` | kusurwa |
| Start, Center, Length | `C`, `L` | tsawon chord |
| Start, End, Angle | `E` | kusurwa |
| Start, End, Direction | `E`, `D` | alkiblar tangent |
| Start, End, Radius | `E`, `R` | radius |

- A mataki na ƙarshe na kowace hanya sai Start, Center, End, ko dai ka rubuta lamba ka danna **Enter** ko **Space**, ko ka motsa siginar ka danna — ana karanta siginar a matsayin wannan lamba (alkibla ga kusurwa ko alkiblar tangent, nisa ga tsawon chord ko radius).
- Kusurwa mai kyau tana tafiya gaba da agogo daga farko, mara kyau tana bin agogo. Kusurwar 0° ko cikakkun juyi ba sa yin arc kuma tashar umarni tana faɗa.
- Tsawon chord ko radius mai kyau yana bin gajeriyar hanya, mara kyau yana bin doguwa. Ana ƙin chord da ya fi diamita tsawo ko radius da bai kai rabin chord ba, kuma tashar umarni tana faɗin iyaka.
- Start, Center, End yana amfani da alkiblar wurin ƙarshe daga tsakiya kawai: arc yana tafiya gaba da agogo daga farko zuwa inda alkiblar ta haɗu da da'ira. Alkiblar tangent ita ce hanyar da arc ke barin farkonsa, a digiri daga axis X.
- Don zaɓar tsakiya kafin wurin farawa, rubuta `C` a umarni na farko.
- Haruffan zaɓuɓɓuka suna bin yaren mu'amala; waɗanda aka nuna a nan na Turanci ne.

## Shigar da daidaitawa

A kowane ɗaya daga cikin matakai uku za ka iya rubuta madaidaicin matsayi maimakon dannawa:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya tabon.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawar da aka rubuta |
| `C` `E` `A` `L` `D` `R` | Kunna ko kashe zaɓi: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Kawar da dukkan tabon da aka sanya ka fita |

## Gyaran grip — daidaita ƙarshe da radius

Baka da aka zaɓa yana nuna grips guda uku:

| Grip | Matsayi | Aikinsa |
|------|----------|--------------|
| **Tsakiya** | Tsakiyar geometric na circumcircle | Yana motsa dukkan bakan; radius da kusurwa ba su canza ba |
| **Farko** | Ƙarshe na farko a kan bakan | Ja don motsa farko a kan circumcircle — yana canza duka kusurwar farko da radius |
| **Ƙarshe** | Ƙarshe na ƙarshe a kan bakan | Ja don motsa ƙarshe a kan circumcircle — yana canza duka kusurwar ƙarshe da radius |

Jan grip na farko ko ƙarshe yana sake matsayinsa zuwa wurin jan kuma yana sake lissafa duka kusurwar da radius daga wannan sabon matsayin dangane da tsakiya. Ƙarshen dayan yana ci gaba da zama a tsaye.

## Zaɓen baka

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓe idan dannawa ta sauka kusa da curve ɗin bakan (ba chord ba) |
| **Ja dama** (mai tsauri) | Tabon dubawa da aka rarraba a kan bakan dole ne dukkansu su kasance cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Kowane tabo na dubawa a kan bakan da ya faɗi cikin akwatin yana zaɓen sa |

## Umarnin gyara da ake goyon baya

| Umarni | Abin da ke faruwa da bakan |
|---------|------------------------|
| [Move](../move/) | Yana motsa tsakiya; radius da kusurwa ba su canza ba |
| [Copy](../copy/) | Yana ƙirƙirar bakan iri ɗaya a sabon matsayi |
| [Rotate](../rotate/) | Yana juya tsakiya kuma yana canza kusurwar farko/ƙarshe da yawan juyawa |
| [Mirror](../mirror/) | Yana yin madubi na tsakiya kuma yana juya kusurwar farko/ƙarshe a kan axis na madubi |
| [Scale](../scale/) | Yana canza girman matsayin tsakiya kuma yana ninka radius da abin da aka canza girmarsa |
| [Offset](../offset/) | Yana ƙirƙirar bakan concentric a babban ko ƙaramin radius, iri ɗaya na kusurwar |
| [Delete](../delete/) | Yana cire bakan |

## Abubuwan

**Gaba ɗaya**

| Abu | Tsoho | Ma'ana |
|----------|---------|---------|
| Launi | 256 (ByLayer) | Alamar launi ta ACI |
| Layer | `0` | Sanya layer |
| Nauʼin layi | ByLayer | Tsarin nauʼin layi mai suna |
| Girman nauʼin layi | 1 | Abin da aka canza girman tsarin nauʼin layi |
| Kauri | 0 | Kaurin extrusion |

**Geometry**

| Abu | Ma'ana |
|----------|---------|
| Center X / Center Y | Tsakiyar circumcircle |
| Radius | Radius na circumcircle |
| Start Angle | Kusurwa a digiri inda bakan ke farawa (an auna daga axis na X mai kyau) |
| End Angle | Kusurwa a digiri inda bakan ke ƙarewa |

## Arc da Circle — yaushe za a yi amfani da wanne

| | Arc | Circle |
|---|-----|--------|
| Zango | Sashi — daga dannawa ta farko zuwa ta uku | 360° cikakke |
| Hanyar shigarwa | Tabo uku a kan curve | Tsakiya + radius (danna ko rubuta) |
| Shigarwar rubutu | Daidaitawar X,Y ga kowane tabo | Ƙimar radius (tsakiya kuma yana karɓar X,Y) |
| Sake girma bayan sanyawa | Ja grips na farko/ƙarshe | Ja kowace grip na cardinal |
| Mafi kyau don | Fillets, kusurwoyi masu zagaye, hanyoyi masu lanƙwasa | Ramuka cikakke, fasaloli masu zagaye |

## DXF — Abin ARC

Ana ajiye baka a matsayin abubuwan `ARC` a fayil ɗin DXF, suna ajiye daidaitawar tsakiya, radius, kusurwar farko, da kusurwar ƙarshe. Dukkan abubuwan — ciki har da launi, layer, nauʼin layi, girman nauʼin layi, da kauri — suna juyawa ba tare da asara ba. Kowace manhaja mai dacewa da DXF (LibreCAD, FreeCAD, da sauransu) tana karanta waɗannan a matsayin baka na yau da kullum.
