---
title: Undo — Koma Baya ta Tarihin Zane a KulmanLab CAD
description: Umarnin Undo yana juya aikin zane na ƙarshe mataki ɗaya a lokaci guda. Ana ajiye har zuwa matakai 20 ga kowace fayil kuma ana ajiye su a burauza bayan rananan-shafi. Yin sabon aiki bayan sokewa yana wanke tarin redo.
keywords: [umarnin undo CAD, tarihin undo CAD, juya aiki CAD, matakan undo CAD, undo mai dorewa a burauza, kulmanlab]
group: edit
order: 13
---

# Undo

Umarnin `undo` yana juya canjin ƙarshe zuwa zanen — mataki ɗaya ga kowace kunnawa. Ana rikoda kowace ƙarawa, sharewa, ko gyara na abubuwa a matsayin shigarwa ta tarihi daban. Undo tana matakai baya ta cikin waɗannan shigarwar a tsari mai juyawa.

## Yadda za a yi undo

- Rubuta `undo` a tashar umarni, ko
- Danna maɓallin kayan aiki na **Undo**.

Kowace kunnawa yana juya aiki ɗaya da aka rikoda. Kunna shi sau da yawa don matsawa baya ƙari.

## Halin tarihi

| Bayani | Ƙima |
|--------|-------|
| Matakai ga kowace fayil | Har zuwa **20** |
| Ajiya | Burauza (IndexedDB / localStorage), ga kowane sunan fayil |
| Yana wanzuwa bayan rananan-shafi | Eh — ana mayar da tarihi idan ka sake buɗe fayil |
| Sabon aiki bayan undo | Yana wanke dukkan shigarwar redo da ke gaba na matsayin yanzu |
| Shigarwa mafi tsufa idan ya cika | An cire shi don yin sarari ga sabon canjin |

Ana rikoda kowace canjin abu: zana sabbin abubuwa, share abubuwa, gyaran ƙarshe da grip, amfani da Move, Rotate, Scale, Mirror, Trim, Extend, da Offset — duk suna ƙirƙirar shigarwar tarihi.

## Undo da Redo

| | Undo | Redo |
|---|------|------|
| Shugabanci | Matakai **baya** ta cikin tarihi | Matakai **gaba** ta cikin shigarwar da aka soke |
| Yana samuwa idan | Aƙalla aiki ɗaya da aka rikoda ya kasance | An yi aƙalla Undo ɗaya kuma babu sabon aiki da aka yi |
| An wanke ta | Babu komai — tarihi yana tarawa har zuwa iyakar matakai 20 | Kowace sabon aikin zane |

Yi amfani da [Redo](../redo/) don sake yin aikin da aka soke. Maɓallan kayan aiki suna mai launin toka idan shugabancin da ya dace bai samuwa ba.
