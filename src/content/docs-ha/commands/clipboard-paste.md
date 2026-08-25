---
title: Umarnin ClipboardPaste — Manna abubuwa daga allon kwafe na tsarin
description: Umarnin ClipboardPaste yana karanta daga allon kwafe na tsarin abubuwan da ClipboardCopy ya rubuta a baya sannan ya ajiye su a wurin shigarwa da ka zaɓa, tare da ƙara yadudduka da nau'ikan layi da suka ɓace a zanen da ake nufi.
keywords: [manna allon kwafe CAD, manna abubuwa tsakanin zane-zane, manna abubuwan CAD, Ctrl+V CAD, manna tsakanin shafuka, haɗa yadudduka lokacin mannawa, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Umarnin `ClipboardPaste` yana karanta abubuwan da [ClipboardCopy](../clipboard-copy/) ya rubuta a **allon kwafe na tsarin** sannan ya ajiye su a cikin zanen da ake kai a wurin da ka zaɓa. Tunda allon kwafen shi ne na gaske na tsarin, tushen na iya zama wani zane, wani shafin burauza, ko wani zama daga farkon rana.

## Yadda ake mannawa

1. Danna `Ctrl+V` (`Cmd+V` a macOS), ko ka rubuta `ClipboardPaste` a tashar umarni.
2. Umarnin yana nuna **reading clipboard…** yayin da burauza ke miƙa rubutun allon kwafe.
3. Bayan an ɗora shi, umarnin yana canjawa zuwa **pick insertion point** kuma samfurin siffofin yana bin alamar linzaminka.
4. **Danna** don ajiye abubuwan. Ana ƙara su cikin zanen kuma sun kasance a zaɓe.

Samfurin yana ɗaure da **wurin dubawa** na kwafin — kusurwar ƙasa ta hagu ta iyakar haɗaɗɗiya ta zaɓin asali. Wannan kusurwa tana ƙarƙashin alamar linzaminka, don haka tsarin abubuwan da aka kwafe dangane da juna yana kasancewa daidai.

## Abin da ke faruwa lokacin mannawa

| Mataki | Hali |
|--------|------|
| **Sabbin shaidu** | Kowane abu da aka manna yana samun sabon id, don haka mannawa sau biyu yana ba da saiti biyu masu zaman kansu |
| **Motsi** | Ana motsa abubuwan da nisan alamar linzami − wurin dubawa |
| **Haɗa yadudduka** | Duk yadudduka da aka ambata amma ba sa cikin zanen da ake nufi ana ƙara su bisa suna |
| **Haɗa nau'ikan layi** | Duk nau'ikan layi da aka ambata amma ba sa cikin zanen da ake nufi ana ƙara su bisa suna |
| **Zaɓi** | Ana share zaɓin da ya gabata kuma abubuwan da aka manna su ne suka zama zaɓi |

### Haɗa yadudduka da nau'ikan layi

Ana ƙara shigarwar tebur da suka ɓace; **wanda suke nan ana barin su haka**. Idan allon kwafe ya kawo yadudduka mai suna `WALLS` ja yayin da zanen da ake nufi tuni yana da yadudduka `WALLS` shuɗi, ma'anar zanen da ake nufi ce ta yi nasara kuma abubuwan da aka manna sun shiga cikinta — za su zama shuɗi. Mannawa ba ta sake ma'anar komai a cikin zanen da ake nufi.

Wannan yana da muhimmanci lokacin kwafe tsakanin zane-zane masu tsarin yadudduka daban-daban: duba [Layer Manager](../layer-manager/) bayan mannawa tsakanin zane-zane idan launuka ba su kasance kamar yadda ka zata ba.

## Idan allon kwafe ba shi da abin mannawa

ClipboardPaste yana karɓar abin da ClipboardCopy ya samar kawai. Duk wani abu a kan allon kwafe — rubutu talakawa, mahaɗi, hoto, JSON daga wata manhaja — ana ƙin sa kuma tashar umarni tana bayar da rahoto:

```
Clipboard has no copied entities
```

Idan burauza ta ƙi ba da damar shiga allon kwafe gaba ɗaya, saƙon zai zama **Clipboard access denied**. Dukansu suna ƙarasa umarnin ba tare da canja zanen ba.

## Jagorar madannai

| Maɓalli | Aiki |
|---------|------|
| `Ctrl+V` / `Cmd+V` | Kunna ClipboardPaste |
| `Escape` | Soke — ana jefar da abubuwan kuma ba a ƙara komai ba |

Soke yayin matakin karatu abu ne mai aminci: idan allon kwafe ya amsa bayan ka riga ka soke ko ka fara wani umarni, ana jefar da sakamakon da ya makara maimakon ya dagula abin da ke gudana a lokacin.

## Kwafe tsakanin shafuka

Tsarin aiki na yau da kullum tsakanin zane-zane:

1. Buɗe zanen tushe, zaɓi siffofi, danna `Ctrl+C`.
2. Koma zuwa ɗayan shafin — ko ka buɗe shafi na biyu na manhajar sannan ka ɗora wani fayil.
3. Danna `Ctrl+V` sannan ka danna wurin shigarwa.

Shafukan biyu suna da tushe ɗaya kuma suna raba allon kwafe na tsarin, don haka ba a ɗora komai kuma babu uwar garke da ta shiga ciki. Abin da ke ciki ya kasance rubutun JSON a kan allon kwafenka na kanka a duk lokacin.

## Abubuwan da ake goyon baya

Duk nau'in abu da ClipboardCopy zai iya rubutawa, ClipboardPaste zai iya karanta shi — da tsarin jerawa ɗaya da tsarin `.json` na asali ke amfani da shi.

## Duba kuma

- [ClipboardCopy](../clipboard-copy/) — rubuta zaɓin a allon kwafe
- [Copy](../copy/) — ninka abubuwa a cikin zanen da ake kai
- [Layer Manager](../layer-manager/) — duba yadudduka da mannawa ta kawo
