---
title: File Manager — Gridi ya Thumbnail, Kubadilisha Jina na Kufuta
description: "Amri ya FileManager inafungua gridi ya thumbnail ya kila mchoro uliohifadhiwa — bofya thumbnail kuufungua, badilisha jina papo hapo, au ufute kwa uthibitisho."
keywords: [meneja wa faili CAD, faili za hivi karibuni CAD, badilisha jina la mchoro, futa mchoro, gridi ya thumbnail CAD, rudisha mchoro, fungua tena DXF, hifadhi ya kivinjari CAD, faili za KulmanLab, michoro iliyohifadhiwa, IndexedDB CAD, hifadhi nakala ya mchoro CAD]
group: file
order: 3
---

# File Manager

Amri ya `KidhibitiFaili` inafungua **gridi ya thumbnail** ya kila mchoro uliohifadhiwa kwenye hifadhi ya ndani ya kivinjari chako, iliyopangwa kulingana na wakati kila mmoja ulipohifadhiwa mwisho. Itumie kufungua upya mchoro uliopita, kubadilisha jina lake, au kuufuta.

## Kufungua File Manager

- Andika `KidhibitiFaili` kwenye terminal, **au**
- Bonyeza kitufe cha upau wa zana **File Manager** (ikoni ya historia) katika jopo la Faili juu ya skrini.

Jopo linafunguka upande wa kushoto wa turubai, na linafungwa kiotomatiki mara tu unapoanza amri nyingine au [kuingiza](../import/) faili — hivyo halibaki juu ya mchoro ambao bado haujaorodhesha. Linafunguka tena na orodha mpya kila wakati.

## Gridi ya thumbnail

Kila mchoro uliohifadhiwa ni kadi inayoonyesha thumbnail iliyotolewa moja kwa moja, jina lake, na wakati ulipobadilishwa mwisho. Thumbnail zinatengenezwa papo hapo kila wakati jopo linapofunguliwa — hakuna kinachotolewa au kuhifadhiwa mapema — hivyo kadi huonyesha ikoni ya nafasi ya muda mfupi wakati thumbnail yake inachorwa. Ikoni hiyo hiyo pia huonekana ikiwa utengenezaji utashindwa, au ikiwa mchoro haujawa na vitu kabisa.

| Hatua | Jinsi |
|--------|-----|
| **Fungua** mchoro | Bofya thumbnail yake — inabadilisha maudhui ya sasa ya turubai |
| **Badilisha jina** | Bofya ikoni ya penseli, au bofya mara mbili jina |
| **Futa** | Bofya ikoni ya pipa la taka, kisha uthibitishe |

Ikiwa hakuna faili zilizohifadhiwa bado, jopo linaonyesha "No files saved". Ikiwa kuna faili nyingi kuliko zinazoweza kutoshea kwenye skrini moja, vidhibiti vya **Page 1 of N** vinaonekana chini ya gridi.

Kadi ya faili ambayo kwa sasa iko wazi kwenye kihariri imewekwa alama kwa pete yenye rangi ya lafudhi, na **haina kitufe cha kufuta** — kufuta faili iliyo wazi kungefuta data yake iliyohifadhiwa wakati turubai bado inaionyesha, na uhariri unaofuata ungeihifadhi tu papo hapo. Kubadilisha jina lake bado kunapatikana.

## Kufuta faili

Kubofya ikoni ya pipa la taka hakufuti mara moja — inawasha safu ya uthibitisho kwenye kadi hiyo ("Delete this file?" ikiwa na vitufe vya **Delete** / **Cancel**), kwa sababu kufuta ni kwa kudumu na haiwezi kutenduliwa. Kubofya **Cancel**, kubofya ikoni ya pipa la taka la kadi nyingine, au kubofya mahali pengine kwenye kadi — vyote hufuta uthibitisho unaosubiri bila kufuta chochote.

## Kubadilisha jina la faili

Bofya ikoni ya penseli (au bofya mara mbili jina la faili) kuhariri papo hapo, kisha bonyeza **Enter** kuthibitisha au **Escape** kughairi. Kubadilisha jina kunakataliwa ikiwa jina jipya ni:

- tupu, au refu zaidi ya herufi 100,
- tayari linatumika na faili nyingine iliyohifadhiwa (bila kujali herufi kubwa/ndogo),
- linamalizika na nukta, au
- jina la kifaa lililohifadhiwa na Windows kama vile `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, au `LPT1`–`LPT9`.

Herufi ambazo si sahihi katika jina la faili (`\ / : * ? " < > |`) huondolewa kiotomatiki unapoandika. Kubadilisha jina hubadilisha lebo tu — haiathiri nafasi ya mchoro kwenye gridi, kwani imepangwa kulingana na wakati wa kuhifadhi wa mwisho, si jina.

## Hifadhi nakala ya kazi yako — hifadhi ya kivinjari si ya kudumu

KulmanLab inahifadhi michoro kwenye **IndexedDB**, hifadhidata iliyojengwa ndani ya kivinjari chako:

- Faili zimehifadhiwa **ndani ya kifaa chako pekee** — hakuna kinachopakuliwa kwenye seva.
- Kila kivinjari na kifaa kina hifadhi yake ya kujitegemea. Mchoro uliohifadhiwa kwenye Chrome katika kompyuta moja hautaonekana kwenye Firefox, au kwenye kifaa kingine.
- Hifadhi hii **inaweza kufutwa bila onyo** — kwa kufuta data ya tovuti au historia ya kuvinjari, kukosa nafasi ya diski, kutumia dirisha la faragha/incognito, kusakinisha upya kivinjari au mfumo wa uendeshaji, au kubadilisha kifaa. Hakuna hali yoyote kati ya hizi inayokupa nafasi ya kurejesha kilichokuwepo hapo.

**Njia pekee ya kuaminika ya kuweka mchoro salama ni [kuuhamisha](../export-manager/) kwenye hifadhi yako mwenyewe.** Tumia `.json` (muundo asili wa KulmanLab) inapowezekana — huhifadhi kila kitu kwa usahihi; tumia `.dxf` unapohitaji ulinganifu na zana nyingine za CAD. Fanya hivi kwa chochote ambacho ungehuzunika kukipoteza, na kabla ya kufuta data ya kivinjari, kubadilisha kivinjari au kifaa, au kuweka kando mashine kwa muda.

## Upakiaji wa faili kiotomatiki wakati wa kuanza

Unapofungua KulmanLab CAD, programu hupakia kiotomatiki **faili iliyobadilishwa hivi karibuni zaidi** kutoka kwa hifadhi. Huhitaji kuifungua kwa mkono kutoka kwa File Manager kila wakati.

## Kusimamia hifadhi

Hakuna kikomo maalum cha idadi ya michoro unayoweza kuhifadhi, lakini hifadhi ya kivinjari ina mipaka. Ikiwa utaona maonyo ya hifadhi, futa faili za zamani kutoka kwa File Manager — au bora zaidi, zihamishe kwanza ili kisipotee chochote.

Ili kuondoa michoro yote iliyohifadhiwa mara moja, tumia amri ya [WipeStorage](../wipestorage/).

## Majina ya faili

Faili mpya na zilizoingizwa hupata jina rahisi — hakuna muhuri wa wakati unaowekwa. Ikiwa jina hilo tayari linatumika, kiambatanisho cha mtindo wa Finder/Explorer huongezwa kiotomatiki (`plan (2)`, `plan (3)`, …) ili kusiwe na kinachobadilishwa. Unaweza daima kupa faili jina wazi zaidi baadaye kwa kutumia [kubadilisha jina](#kubadilisha-jina-la-faili).

## Amri zinazohusiana

- [Import](../import/) — pakia mchoro kutoka kwa mfumo wa faili wako kwenye hifadhi ya kivinjari
- [Export Manager](../export-manager/) — pakua mchoro kwenye mfumo wako wa faili
- [New File](../new-file/) — anza mchoro tupu (pia unahifadhiwa kiotomatiki)
- [WipeStorage](../wipestorage/) — futa faili zote zilizohifadhiwa kutoka kwa hifadhi ya kivinjari
