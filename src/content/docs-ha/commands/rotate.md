---
title: Rotate — Juya Abubuwa a Kewayen Tabon Tushe
description: Umarnin Rotate yana juya abubuwan da aka zaɓa a kewayen tabon tushe da aka zaɓa. Ana iya rubuta kusurwa daidai ko a saita ta danna — shugabancin mai nuni daga tabon tushe zuwa dannawa yana bayyana kusurwar. Kusurwoyi masu kyau suna nufin nagaba-da-kusurwar-agogo a daidaitawar DXF.
keywords: [umarnin rotate CAD, juya abubuwa CAD, juya abubuwa da kusurwa, juyawa nagaba-da-agogo CAD, kusurwa da aka rubuta juya, kulmanlab]
group: edit
order: 3
---

# Rotate

Umarnin `Juya` yana juya abubuwan da aka zaɓa a kewayen tabon tushe. Ka bayyana kusurwar juyawa ko dai ta rubuta lamba a digiri ko ta danna — ana lissafa kusurwar daga shugabanci tsakanin tabon tushe da matsayin dannawa.

## Hanyoyi biyu na farawa

**Zaɓi tukuna, sannan juya** — zaɓi abubuwa tukuna, sannan kunna:

1. Zaɓi wani abu ɗaya ko fiye a kan canvas.
2. Rubuta `Juya` a tashar umarni ko danna maɓallin kayan aiki na **Rotate**.
3. **Danna tabon tushe** — tsakiyar juyawa. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
4. **Rubuta kusurwa ka danna Enter**, ko **danna** don saita kusurwar daga shugabancin mai nuni.

**Kunna, sannan zaɓi** — fara umarnin ba tare da zaɓi ba:

1. Rubuta `Juya` ko danna maɓallin kayan aiki.
2. **Zaɓi abubuwa** — danna don canza zaɓi, ko ja don zaɓi ta yanki.
3. Danna **Enter** ko **Space** don tabbatar da zaɓi.
4. **Danna tabon tushe** (shigar da daidaitawa ana samu), sannan saita kusurwar.

```
  Kafin:            Bayan (juyawa na 90° a kewayen ●):
                        ╔══╗
  ●  [abu]      →   ● ║    ║
                        ╚══╝
```

Preview mai fatalwa mai rai na abubuwan da aka juya yana bin kusurwar mai nuni bayan an saita tabon tushe.

## Saita kusurwar

**Kusurwa da aka rubuta** — rubuta lamba (a digiri) a kowane lokaci bayan an sanya tabon tushe. Preview yana snap zuwa kusurwar da aka rubuta yayin da kake ci gaba da daidaitawa kafin danna Enter.

**Kusurwa ta danna** — idan babu ƙima da aka rubuta, dannawa yana saita kusurwar daidai da `atan2(cursorY − baseY, cursorX − baseX)` — shugabancin daga tabon tushe zuwa dannawa, a digiri.

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar kusurwar |
| `-` | Kusurwa mara kyau (haruf na farko kaɗai) |
| `C` | Sauya yanayin Copy (kafin rubuta wani lamba) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Yi amfani da juyawa a kusurwar da aka rubuta |

## Juya kwafi

Danna **C** a tambayar kusurwa — kafin rubuta wani lamba — don sauya yanayin **Copy**, irin salon zaɓi na cikin layi ɗaya wanda zaɓin Arc na [Polyline](../polyline/) ke amfani da shi. Tambayar tana nuna yanayin yanzu a matsayin `[Copy=true]` / `[Copy=false]`, kuma sake danna **C** yana mayar da shi.

Idan an kunna Copy, yin amfani da juyawa yana barin zaɓin asali ba tare da canzawa a wurinsa ba kuma a maimako yana ƙara sabbin kwafi, waɗanda aka juya na kowane abu da aka zaɓa. Idan an kashe Copy (tsohuwar), zaɓin yana juyawa a wurinsa kamar yadda aka saba.

## Shugabancin kusurwa

Kusurwoyi suna bin **ka'idar DXF**:

- Ƙimar **kyau** suna juyawa **nagaba-da-kusurwar-agogo** a daidaitawar zane (Y-sama).
- A fuskar allo, inda axis na Y an juya shi (Y-ƙasa), kusurwoyi masu kyau suna bayyana **cikin-kusurwar-agogo**.

Ƙima gama gari: `90` = kwata juyawa, `180` = rabin juyawa, `-90` = kwata juyawa mai adawa.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Tabbatar da zaɓi |
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X (mataki na tabon tushe), ko ƙimar kusurwa (mataki na kusurwa) |
| `,` | Kulle X ka koma shigar da Y (mataki na tabon tushe) |
| `C` | Sauya yanayin Copy (mataki na kusurwa, kafin rubuta wani lamba) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko yin amfani da juyawa |
| `Escape` | Soke ka sake saita |

## Zaɓi a lokacin umarnin

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana canza zaɓi na abin da ke ƙarƙashin mai nuni |
| **Ja dama** (mai tsauri) | Yana ƙara abubuwan da suke cikakke cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Yana ƙara abubuwan da suke taɓa akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓi |

## Abubuwan da ake goyon baya

Rotate yana aiki akan kowane nauʼin abu. Ana juya geometry na kowane abu a kewayen tabon tushe — misali, Circle yana motsa tsakiyarsa yayin da radius ke ci gaba da zama iri ɗaya; Arc yana motsa tsakiyarsa kuma yana canza kusurwoyin farko da ƙarshe da yawan juyawar; abin Text yana motsa tabon anchor kuma yana ƙara kusurwar zuwa abin Rotation Degree.
