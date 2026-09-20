---
title: Fillet — Zagaye Kusurwa da Baka Mai Taɓawa
description: Umarnin Fillet yana zagaya kusurwa tsakanin sassa biyu na Line, Arc ko Polyline da baka mai taɓawa na radius da aka bayyana. Zagaya kusurwar polyline da kanta yana sanya bakan kai tsaye a cikinta; zagayawa a ratsa polyline buɗaɗɗiya yana haɗa gefuna biyu zuwa sabuwar polyline.
keywords: [umarnin fillet CAD, zagaye kusurwa CAD, baka na fillet, baka mai taɓawa, fillet na polyline, fillet na baka, kulmanlab]
group: edit
order: 11
---

# Fillet

Umarnin `Zagaye` yana zagaya kusurwa tsakanin sassa biyu na [Line](../line/), [Arc](../arc/) ko [Polyline](../polyline/) ta sanya baka mai taɓawa na radius da aka bayar, sannan yana yanke (ko haɗa) abubuwan da aka zaɓa zuwa wannan tabo.

Fillet yana aiki akan abubuwan **Line, Arc, da Polyline** — har da sassa madaidaita ko na baka na polyline da kanta.

## Amfani da fillet

1. Rubuta `Zagaye` a tashar umarni ko danna maɓallin kayan aiki na **Fillet**.
2. **Rubuta radius ɗin fillet** ka danna **Enter**.
3. **Danna layi na farko, baka, ko sashin polyline** — sashen da ka danna yana bayyana wace gefen kowace mahaɗa ake ci gaba da shi.
4. **Riƙe mai nuni a kan abu na biyu** — preview na baka mai ɗigo-ɗigo yana nuna fillet ɗin da za a samu. Motsa mai nuni zuwa gefen da kake son ci gaba da shi.
5. **Danna** don aiwatarwa.

```
  Kafin:                        Bayan fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Zaɓen gefe ga abubuwan da suke haɗuwa

Idan abubuwa biyu suka haɗu da juna, ana amfani da fillet a kan kusurwar da matsayin dannawa ya bayyana — sashen kowane abu a **gefen iri ɗaya da mai nuni** ana ci gaba da shi.

- Danna kusa da wani ƙarshe na abu na farko don zaɓen wannan rabin.
- Motsa mai nuni zuwa rabin da ake so na abu na biyu — preview mai ɗigo-ɗigo yana sabuntawa nan take.

## Abin da umarnin ke ƙirƙira

Sakamako ya dogara da abin da ka zaɓa:

- **Abubuwa biyu masu zaman kansu na Line/Arc**, ko kowace nauʼi wanda ba ya ƙunshe da polyline buɗaɗɗiya: dukkansu biyu ana yanke su zuwa tabon taɓawa **T1**/**T2**, kuma ana sanya sabon abin Arc a tsakaninsu.
- **Sassa biyu na polyline guda ɗaya waɗanda ke raba tudun kusurwa**: babu sabon abu — fillet ɗin da kansa yana zama sashe na polyline. Ana maye gurbin tudun kusurwa da tabon taɓawa biyu, kuma bakan da ke tsakaninsu ana ajiye shi a matsayin ƙimar bulge na wannan gefe — daidai yadda kusurwar polyline mai zagaye ke tafiya ta cikin DXF.
- **Kowace irin yanayi da ke shafar polyline buɗaɗɗiya** — polylines biyu daban-daban da suke buɗaɗɗe, ko polyline buɗaɗɗiya da abu mai zaman kansa na Line/Arc: dukkansu ana haɗa su zuwa **sabuwar polyline**, inda kowace gefe ke ci gaba da tsaye zuwa tabon taɓawarsa kuma bakan fillet ana ƙarawa a matsayin ƙarin sashen bulge, wanda ke maye gurbin abubuwan asali.

Bakan da aka sanya ko wanda aka faɗaɗa yana gado nauyin layi, launi, layer, da saitunan nauʼin layi na yanzu (ko, idan ya haɗu da polyline, saitunan polyline da kanta).

## Kusurwoyi marasa kusurwa ta gaskiya don zagayawa

Idan sassa biyu da aka zaɓa sun riga sun haɗu ta hanyar taɓawa a tudu guda ɗaya — kusurwar polyline madaidaiciya, ko layi wanda ya canza sannu a hankali zuwa sashin baka mai ci gaba na taɓawa — babu kusurwa ta gaskiya wanda kowace da'ira za ta iya zagayawa. Fillet yana gano wannan yanayin kuma yana ƙi maimakon ƙirƙirar madauki mara kyau, yana nuna saƙon `cannot fillet: no tangent circle fits there`.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar radius |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` / `Space` | Tabbatar da radius da aka rubuta ka koma zaɓen abu |
| `Escape` | Soke ka sake saita |

## Abubuwan da ake goyon baya

| Abu | Ana Goyon Baya |
|--------|-----------|
| Line | Eh |
| Arc | Eh |
| Polyline (sashi madaidaici ko na baka) | Eh |
| Circle, Ellipse | Aʼa |
| Text, Spline, Dimension, Leader | Aʼa |

## Fillet da Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Nauʼin kusurwa | Baka mai zagaye | Yankewa madaidaiciya |
| Shigarwa | Radius ɗaya | Nisa biyu (d1, d2) |
| Abu da aka sanya | Arc | Line |
| Abubuwan da ake goyon baya | Line, Arc, da Polyline (sashi madaidaici ko na baka) | Line da Polyline (sassa madaidaita kaɗai) |
