---
title: Align — Motsawa, Juyawa, da Canza Girman Abubuwa da Nauʼin Tabo
description: Umarnin Align yana sake matsayin abubuwan da aka zaɓa ta amfani da nauʼi ɗaya ko biyu na tabon tushe/manufa, yana haɗa motsawa, juyawa, da canza girma iri ɗaya na zaɓi zuwa aiki guda ɗaya. Yana aiki kamar haɗin Move + Rotate + Scale.
keywords: [umarnin align CAD, daidaita abubuwa CAD, motsawa juyawa canza girma, daidaitawar nauʼin tabo, kamanceceniyar AutoCAD ALIGN, kulmanlab]
group: edit
order: 6
---

# Align

Umarnin `align` yana sake matsayin abubuwan da aka zaɓa ta amfani da nauʼi ɗaya ko biyu na tabon tushe/manufa. Da nauʼi ɗaya yana aiki daidai kamar [Move](../move/) (motsawa kaɗai). Da nauʼi biyu kuma yana juya zaɓi don shugabancin tushe-zuwa-tushe ya dace da shugabancin manufa-zuwa-manufa, kuma zai iya, idan aka zaɓa, canza girma don tsawon sashen tushe ya dace da tsawon sashen manufa — motsawa, juyawa, da canza girma a aiki guda ɗaya.

## Hanyoyi biyu na farawa

**Zaɓi tukuna, sannan daidaita** — zaɓi abubuwa tukuna, sannan kunna:

1. Zaɓi wani abu ɗaya ko fiye a kan canvas.
2. Rubuta `align` a tashar umarni ko danna maɓallin kayan aiki na **Align**.
3. **Danna tabon tushe na farko (S1)**, sannan **danna tabon manufa na farko (D1)**.
4. **Danna tabon tushe na biyu (S2)**, ko danna **Enter** don yin daidaitawa ta motsawa-kaɗai yanzu.
5. **Danna tabon manufa na biyu (D2)**.
6. Amsa tambayar canza girma: danna **Y** don canza girma, ko **N** / **Enter** don kiyaye girman asali.

**Kunna, sannan zaɓi** — fara umarnin ba tare da zaɓi ba:

1. Rubuta `align` ko danna maɓallin kayan aiki.
2. **Zaɓi abubuwa** — danna don canza zaɓi na kowane abu, ko ja don zaɓi ta yanki.
3. Danna **Enter** ko **Space** don tabbatar da zaɓi.
4. Ci gaba da S1 → D1 → S2 → D2 → tambayar canza girma kamar yadda aka bayyana a sama.

> Tashar umarni tana bukatar harufa kaɗai da suka isa a fahimta — rubuta `al` ka danna **Enter** yana kunna Align kai tsaye, domin babu wani sunan umarni da ke farawa da waɗannan harufa biyu.

## Yanayin daidaitawa

```
  Tabon tushe (a kan abubuwan):         Tabon manufa:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Sakamako: an motsa zaɓin don S1 ya sauka a D1, sannan
  an juya shi a kewayen D1 don shugabancin S1→S2 ya dace da shugabancin D1→D2 —
  kuma, idan ka zaɓi canza girma, an sake girmarsa don |S1S2|
  ya zama |D1D2|.
```

Preview mai fatalwa yana bin mai nuni a kowane mataki: preview na motsawa yayin sanya D1, sannan preview mai juyawa (mai ɗigo-ɗigo) da zarar an fara sanya D2.

## Daidaitawa da tabo ɗaya (motsawa kaɗai)

Bayan an sanya D1, danna **Enter** maimakon danna tabon tushe na biyu. Za a motsa zaɓin ta vector na S1→D1 — babu juyawa ko canza girma — daidai da [Move](../move/) ta amfani da S1 a matsayin tabon tushe da D1 a matsayin manufa.

## Daidaitawa da tabo biyu (motsawa + juyawa + canza girma na zaɓi)

Da zarar S2 da D2 duka an sanya su:

- **Kusurwar juyawa** — bambancin da ke tsakanin shugabancin manufa (`D1 → D2`) da shugabancin tushe (`S1 → S2`).
- **Tambayar canza girma** — `scale objects to alignment points? [Yes/No] <N>` tana bayyana, tare da **No** a matsayin tsoho:
  - Danna **Y** don kuma canza girman zaɓin iri ɗaya a kewayen D1 don nisan `S1–S2` ya zama nisan `D1–D2`.
  - Danna **N** ko **Enter** don kiyaye girman asali — motsawa da juyawa kaɗai ake amfani da su.

Dannawa maɓalli a tambayar canza girma yana amfani da daidaitawar nan take — babu wani mataki na tabbatarwa daban bayan zaɓen Ee ko Aʼa.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Tabbatar da zaɓi ka ci gaba zuwa mataki na S1 |
| `Enter` (a mataki na S2) | Tsallake juyawa — yi daidaitawa ta motsawa-kaɗai ta amfani da S1 da D1 |
| `Y` | Yi daidaitawar tare da canza girma |
| `N` / `Enter` (a tambayar canza girma) | Yi daidaitawar ba tare da canza girma ba |
| `Escape` | Yayin zaɓen tabo: kawar da su ka koma mataki na zaɓi; ba tare da zaɓi ba: soke umarnin |

## Zaɓi a lokacin umarnin

Lokacin da umarnin ya fara a mataki na zaɓi:

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana canza zaɓi na abin da ke ƙarƙashin mai nuni |
| **Ja dama** (mai tsauri) | Yana ƙara abubuwan da suke cikakke cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Yana ƙara abubuwan da suke taɓa gefen akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓi ya matsa zuwa mataki na S1 |

## Bayan daidaitawa

Abubuwan da aka daidaita suna ci gaba da zama zaɓaɓɓu a sabon matsayinsu, kuma umarnin yana ƙarewa kai tsaye — sake kunna **Align**, ko sauya zuwa [Move](../move/), [Rotate](../rotate/), ko [Scale](../scale/) ba tare da sake zaɓi ba.

## Align da Move

| | Align | Move |
|---|-------|------|
| Nauʼin tabo | 1 (motsawa kaɗai) ko 2 (motsawa + juyawa + canza girma) | 1 (motsawa kaɗai) |
| Juyawa | Eh, tare da nauʼin tabo na biyu | Aʼa |
| Canza girma | Na zaɓi, tare da nauʼin tabo na biyu | Aʼa |
| Mafi kyau don | Daidaita sifa ɗaya a kan wata ta amfani da tabon ƙa'ida | Sake matsayi mai sauƙi |

## Abubuwan da ake goyon baya

Align yana aiki akan kowane nauʼin abu da Move, Rotate, da Scale ke goyon baya — ana amfani da ayyukan `translate`, `rotate`, da `scale` iri ɗaya waɗanda waɗannan umarni ke amfani da su, an aiwatar dasu a jere, don haka babu wanda aka bar shi.
