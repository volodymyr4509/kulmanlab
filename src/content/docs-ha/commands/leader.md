---
title: Leader — Zana Bayanin Multileader tare da Kibiya da Rubutu
description: "Umarnin Leader yana zana bayanin multileader a matakai huɗu: ƙarshen kibiya, gwiwar dogleg, matsayin rubutu, da alamar rubutu da aka rubuta. Shugabancin rubutu yana daidaita kansa kai tsaye bisa matsayin dogleg. Ana shigo da shi kawai a DXF — ba a rubuta leaders a ajiyewa."
keywords: [umarnin leader CAD, bayanin multileader, leader CAD, bayanin alamar kibiya, dogleg leader, shugabancin rubutu CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Umarnin `leader` yana zana bayanin multileader a matakai huɗu: kibiya wanda ke taɓa fasali, layin leader wanda ke lanƙwasawa a dogleg, tabon rubutu, da alamar rubutu da aka rubuta. Daga dukkan umarnin bayani, Leader shine kaɗai wanda ke ƙunshe da mataki na shigar da rubutu mai hulɗa tare da preview na mai nuni mai walƙiya.

## Yanayin multileader

```
  ◄── ƙarshen kibiya  (mataki na 2 — yana taɓa fasali)
      \
       \  layin leader
        \
         ●──── dogleg (mataki na 3) ──── tabon rubutu (mataki na 4)
                                    Rubutun alama  (mataki na 5)
```

- **Ƙarshen kibiya** — ƙarshen mai kaifi da aka sanya a fasalin da ake bayyanawa.
- **Dogleg** — gwiwar inda layin leader ke lanƙwasawa zuwa rubutu.
- **Tabon rubutu** — inda alamar take zaune. Rubutu yana daidaita hagu ko dama kai tsaye.

## Zana leader

1. Rubuta `leader` a tashar umarni ko danna maɓallin kayan aiki na **Leader**.
2. **Danna ƙarshen kibiya**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna dogleg** — lanƙwasar a leader. Kusurwa tana kulle zuwa matakan 45°; rubuta tsawo ka danna **Enter** don sanya wuri madaidaici. Ko rubuta `X,Y` don shigar da daidaitawa cikakke.
4. **Danna matsayin rubutu** — inda alamar take kwaɓewa. Zaɓuɓɓuka iri ɗaya suna aiki: danna, kulle-kusurwa + tsawo, ko `X,Y`.
5. **Rubuta rubutun alama** — preview na canvas yana sabuntawa a lokaci na rai tare da mai nuni mai walƙiya. Danna **Enter** don sanyawa.

## Shigar da daidaitawa (dukkan matakan tabo)

A kowane mataki na zaɓen tabo (ƙarshe, dogleg, matsayin rubutu) za ka iya rubuta daidaitawa madaidaiciya maimakon dannawa:

1. Rubuta ƙimar X (lambobi, `.`, ko `-`).
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]` tana tabbatar da an kulle X.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya tabon.

## Kulle-kusurwa (matakai 3 da 4)

Bayan kowace tabo da aka sanya, umarnin yana snap zuwa axes na 45° idan mai nuni ya kai nisa da ya isa. Yayin an kulle:
- Preview yana snap zuwa axis.
- Rubuta tsawo ka danna **Enter** don sanya tabon na gaba a wannan nisan daidai.

Kulle-kusurwa da shigar da daidaitawa ba za su iya kasancewa tare ba — da zarar ka rubuta lamba ba tare da `,` a baya ba, umarnin yana fassara shi a matsayin nisa (kulle-kusurwa dole ne ta kasance a aiki). Don shigar da daidaitawa cikakke maimakon haka, fara da lambar X ka bi da wakafi.

## Gyara alamar rubutu

Yayin rubuta alamar a mataki na 5, za ka iya kewaya da gyara rubutun kafin sanyawa:

| Maɓalli | Aiki |
|-----|--------|
| Kowane haruf mai buga | Sanya a matsayin mai nuni |
| `←` / `→` | Motsa mai nuni hagu ko dama |
| `Backspace` | Share haruf zuwa hagu na mai nuni |
| `Delete` | Share haruf zuwa dama na mai nuni |
| `Enter` | Sanya leader |

## Shugabancin rubutu kai tsaye

Daidaiton rubutu yana daidaita kansa da matsayin mai nuni dangane da dogleg:

| Matsayin mai nuni | Shugabancin rubutu |
|-----------------|---------------|
| Zuwa **dama** na dogleg | Hagu-zuwa-dama daga tabon rubutu |
| Zuwa **hagu** na dogleg | Dama-zuwa-hagu (an kwaɓe a gefen dama) |

Babu bukatar daidaitawa da hannu — motsa mai nuni zuwa gefen da kake son alamar ta kasance kuma tana daidaitawa daidai.

## Marfe na maɓallan madannai

**Matakan tabo (ƙarshe, dogleg, matsayin rubutu)**

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara rubuta daidaitawar X (sannan `,` don kulle X ka shigar da Y) |
| `,` | Tabbatar da X ka koma shigar da Y |
| `0`–`9`, `.`, `-` | Gina nisa yayin kulle-kusurwa |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko nisa da aka rubuta |

**Mataki na shigar da rubutu**

| Maɓalli | Aiki |
|-----|--------|
| Haruf mai buga | Sanya a mai nuni |
| `←` / `→` | Motsa mai nuni |
| `Backspace` | Share hagu |
| `Delete` | Share dama |
| `Enter` | Sanya leader |

| Maɓalli | Aiki |
|-----|--------|
| `Escape` | Soke ka koma mataki na 2 |

## Gyara leader da ke akwai

**Danna sau biyu** multileader da aka sanya don sake buɗe naʼurar gyaran rubutu a **rich** mode. A rich mode za ka iya amfani da bold, italic, da abubuwan da aka canza na font ko tsayi ga kowane harafi, da sanya karyewar layi da `Enter`. Danna **Escape** don tabbatarwa ka rufe.

Duba [Naʼurar Gyaran Rubutu — rich mode](../../interface/text-editor/#rich-mode) don cikakken bayani.

## Ƙarawa da cirewa na hannaye

- Don ƙara ƙarin hannu na kibiya zuwa leader da ke akwai: [Leader+](../leader-add/)
- Don cire hannu daga leader wanda yake da biyu ko fiye: [Leader−](../leader-remove/)

## DXF — shigo da shi kawai

**Leaders ana shigo da su kawai.** Ana karanta abubuwan `MLEADER` daga fayilolin DXF ana nuna su daidai, amma leaders da aka zana a editan **ba a rubuta su** ba yayin ajiye fayil na DXF. Yi amfani da leaders don bayani na hoto; ka guji dogaro da su ga tsarin aiki na juyawa.
