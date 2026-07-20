---
title: Circle — Zana Da'ira ta Tsakiya da Radius
description: Umarnin Circle yana sanya da'ira ta danna tabon tsakiya sannan ta danna ko rubuta radius. Grips huɗu na cardinal suna barka ka sake girman radius ta ja ba tare da sake gudanar da umarnin ba. Cikakken juyawa a DXF a matsayin abubuwan CIRCLE.
keywords: [umarnin circle CAD, zana da'ira CAD, shigar da radius na da'ira, sake girman grip na da'ira, abin CIRCLE na DXF, dimradius circle, kulmanlab]
group: shapes
order: 4
---

# Circle

Umarnin `circle` yana zana da'ira wanda aka bayyana ta tabon tsakiya da radius. Bayan an danna tsakiya za ka iya saita radius ko dai ta danna tabo na biyu a kan canvas ko ta rubuta lamba madaidaiciya — dukkan zaɓuɓɓukan biyu suna aiki a lokaci guda.

## Zana da'ira

1. Rubuta `circle` a tashar umarni ko danna maɓallin kayan aiki na **Circle**.
2. **Danna tabon tsakiya**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. Saita radius — ko dai:
   - **Danna kowane tabo** a kan canvas — nisan daga tsakiya ya zama radius, ko
   - **Rubuta radius** ka danna **Enter** don ƙima madaidaiciya.

Ana sanya da'ira nan take kuma umarnin yana fita.

```
  tsakiya ●
          \  preview na layin radius
           \
            ● ← danna nan, ko rubuta lamba
```

Yayin da ake a mataki na radius, preview mai rai yana nuna da'ira a nisan mai nuni na yanzu kuma yana kuma zana layin radius daga tsakiya zuwa tabon yanzu.

## Shigar da daidaitawar tsakiya

Maimakon dannawa, za ka iya rubuta matsayin tsakiya:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya tsakiya ka ci gaba zuwa shigar da radius.

## Shigar da radius ta rubutu

Bayan an sanya tsakiya, rubuta yana nan take gina ƙimar radius:

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar radius |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Sanya da'ira a radius da aka rubuta |

Ana nuna ƙimar da aka tara a tambayar tashar umarni (misali `enter radius of circle: 25`). Preview yana sabuntawa don nuna radius da aka rubuta yayin da mai nuni ke sarrafa shugabancin alamar layin radius.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X (mataki na tsakiya), ko lamba na radius (mataki na radius) |
| `,` | Kulle X ka koma shigar da Y (mataki na tsakiya) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko radius da aka rubuta |
| `Escape` | Soke ka sake saita |

## Gyaran grip — sake girman radius

Da'ira da aka zaɓa yana nuna grips guda biyar:

| Grip | Matsayi | Aikinsa |
|------|----------|--------------|
| **Tsakiya** | Tabon tsakiya | Yana motsa dukkan da'ira; radius ba ya canzawa |
| **Hagu** | Tabon hagu-hagu (tsakiya − radius) | Ja don saita sabon radius = nisa zuwa tsakiya |
| **Dama** | Tabon dama-dama (tsakiya + radius) | Ja don saita sabon radius = nisa zuwa tsakiya |
| **Sama** | Tabon sama-sama | Ja don saita sabon radius = nisa zuwa tsakiya |
| **Ƙasa** | Tabon ƙasa-ƙasa | Ja don saita sabon radius = nisa zuwa tsakiya |

Dukkan grips na cardinal huɗu suna aiki iri ɗaya — sabon radius yana daidai da nisan daga tsakiya zuwa matsayin jan. Tsakiya yana ci gaba da zama a tsaye.

## Zaɓen da'ira

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓe idan dannawa ta sauka kusa da circumference |
| **Ja dama** (mai tsauri) | Dukkan murabbaʼin dubawa (tsakiya ± radius) dole ne ya kasance cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Kowane sashe na circumference da ya taɓa gefen akwatin yana zaɓen da'ira |

## Umarnin gyara da ake goyon baya

| Umarni | Abin da ke faruwa da da'ira |
|---------|---------------------------|
| [Move](../move/) | Yana motsa tsakiya; radius ba ya canzawa |
| [Copy](../copy/) | Yana ƙirƙirar da'ira iri ɗaya a sabon tsakiya |
| [Rotate](../rotate/) | Yana juya tsakiya a kewayen tabon tushe; radius ba ya canzawa |
| [Mirror](../mirror/) | Yana yin madubi na tsakiya a kan axis na madubi; radius ba ya canzawa |
| [Scale](../scale/) | Yana canza girman matsayin tsakiya kuma yana ninka radius da abin da aka canza girmarsa |
| [Offset](../offset/) | Yana ƙirƙirar da'ira concentric a babban ko ƙaramin radius |
| [Delete](../delete/) | Yana cire da'ira |

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
| Center X / Center Y | Daidaitawar tabon tsakiya |
| Radius | Radius na da'ira a unit na zane |

## Circle da Arc — yaushe za a yi amfani da wanne

| | Circle | Arc |
|---|--------|-----|
| Zango | 360° cikakke | Sashi — an bayyana ta kusurwar farko da ƙarshe |
| Yadda ake zanawa | Tsakiya + radius | Tabo uku a kan curve |
| Shigarwar rubutu | Ƙimar radius | Babu — danna kaɗai |
| Grip na sake girma | Tabo 4 na cardinal | Tabo na farko da ƙarshe (kusurwa + radius) |
| Girma-girma | Radius: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Mafi kyau don | Ramuka cikakke, da'irar bolt, fasaloli masu zagaye | Fillets, curves na sashi, hanyoyi masu lanƙwasa |

## DXF — Abin CIRCLE

Ana ajiye da'irori a matsayin abubuwan `CIRCLE` a fayil ɗin DXF. Daidaitawar tsakiya, radius, launi, layer, nauʼin layi, girman nauʼin layi, da kauri duka suna juyawa ba tare da asara ba. Kowace manhaja mai dacewa da DXF tana karanta waɗannan a matsayin da'irori na yau da kullum.
