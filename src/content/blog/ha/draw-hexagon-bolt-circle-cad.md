---
title: "Yadda Ake Zana Hexagon ko Da'irar Bolt a CAD (Polygon da Polar Array)"
description: "Zana polygon na yau da kullum daga tsakiya da radius ko daga gefe ɗaya, sannan ka maimaita ramuka a kan da'irar bolt da polar array — kyauta a burauzarka, da ƙimomin da aka rubuta daidai."
keywords: [zana hexagon a CAD, polygon na yau da kullum CAD, polar array CAD, zanen da'irar bolt, tsarin ramuka CAD, tsarin zagaye CAD, zanen hex nut, zana octagon CAD, diamita na pitch circle PCD, kayan aikin polygon na CAD kyauta]
date: 2026-10-11
author: KulmanLab
tag: Jagora
---

Don zana polygon na yau da kullum a CAD, bayar da adadin gefuna, zaɓi tsakiya, sannan radius — ko ka zaɓi gefe ɗaya sauran su biyo. Don zana da'irar bolt, zana rami ɗaya ka maimaita shi a kewayen tsakiya da polar array. Wannan jagorar tana yin duka biyun, da lambobi daidai, a burauza a [app.kulmanlab.com](https://app.kulmanlab.com) — kyauta, ba tare da sanyawa ba, kuma fayil ɗin ba ya taɓa barin kwamfutarka.

Mu ne muke gina [KulmanLab](https://kulmanlab.com), don haka matakan da ke ƙasa suna amfani da umarninsa. Ra'ayoyin — faɗin tsakanin fuskoki da tsakanin kusurwoyi, diamitan pitch circle, ko kwafi suna juyawa yayin zagayawa — iri ɗaya ne a kowace manhajar CAD.

## Zana polygon na yau da kullum

Polygon na yau da kullum yana da gefuna da kusurwoyi daidai: hexagon don nut, octagon don alama, pentagon don yanke na ado. A KulmanLab shi ne umarnin **Polygon**.

1. Rubuta `Poligon` a tashar umarni, ko ka yi amfani da maɓallin Polygon a cikin kwamitin Shapes.
2. Shigar da **adadin gefuna** — kowace cikakkiyar lamba daga 3 zuwa 1024 — ka danna **Enter**. Umarnin yana zuwa da adadin da ka yi amfani da shi na ƙarshe.
3. **Danna tsakiya**, ko ka rubuta `X,Y` don ainihin wuri.
4. **Danna radius**, ko ka rubuta shi ka danna **Enter**.

Sakamakon polyline ɗaya ce a rufe, don haka duk abin da za ka iya yi da polyline — motsawa, juyawa, offset, sauya girma — yana aiki.

### Tsakanin fuskoki ko tsakanin kusurwoyi?

Nan ne mutane ke tuntuɓe. "Radius" na iya nufin nisa biyu daban-daban, kuma ana bayyana hexagon da ɗaya ko ɗayan dangane da abin da kake zana:

| | Ana aunawa zuwa | Amfani na yau da kullum |
|---|---|---|
| **Inside a kunne** (tsoho) | Kusurwoyi | Siffa da dole ta shiga cikin da'irar da aka bayar |
| **Inside a kashe** | Tsakiyar kowane gefe | Siffa mai faɗin tsakanin fuskoki da aka bayar — nut, kan bolt, girman spanner |

Danna `I` a umarnin radius don canjawa. Ana sayar da hex nut da faɗinsa tsakanin fuskoki, don haka yi amfani da **Inside a kashe** ka rubuta *rabin* sa. Don M8 nut mai 13 mm tsakanin fuskoki:

1. `Poligon`, sannan `6` don gefuna, sannan ka danna ko ka rubuta tsakiya.
2. Danna `I` don kashe Inside.
3. Rubuta `6.5` ka danna **Enter**.

Fuskokin suna da nisan 13 mm daidai; kusurwoyin suna kai 7.51 mm daga tsakiya, kusan 15 mm tsakanin kusurwoyi. Idan ka rubuta radius maimakon danna, polygon yana zama da gefensa na ƙasa a kwance, tsaye a ƙasa. Idan ka danna, yana ɗaukar alkibla daga inda ka danna.

### Daga gefe ɗaya

Wani lokaci ka san tsawon gefe, ba radius ba — misali, teburin octagon mai gefuna 20 mm. Danna `E` a umarnin wuri na farko don canjawa zuwa yanayin **Edge**, sannan ka zaɓi ƙarshen biyu na gefe ɗaya. Sauran kusurwoyin ana gina su gaba da agogo, a hagu na wannan gefe. Rubuta `0,0` sannan `20,0` yana sanya gefe na 20 mm a kan axis X da polygon a sama da shi.

## Zana da'irar bolt

Da'irar bolt — "PCD" a zane-zane — zobe ne na ramuka a nesa daidai a kewayen tsakiya. Kana zana rami ɗaya ka maimaita shi. A KulmanLab wannan shi ne **ArrayPolar**.

Ɗauki ramuka shida na 6.6 mm a kan diamitan pitch circle na 50 mm, a tsakiyar asali:

1. **Zana rami na farko.** Gudanar da `Dawafi`, rubuta tsakiya a matsayin `25` `,` `0` — rabin PCD a kan axis X —, danna **Enter**, sannan ka rubuta radius `3.3` ka danna **Enter**.
2. **Zaɓe shi** ta danna da'irar.
3. **Gudanar da polar array.** Rubuta `JerinPolar`, ko ka yi amfani da maɓallin ArrayPolar a kwamitin Edit.
4. **Zaɓi tsakiyar tsarin** — rubuta `0,0`.
5. Tashar umarni tana nuna array yadda yake — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — kuma ana ganin kwafi biyar kai tsaye. Danna **Enter** don karɓa.

Wannan shi ne cikakkiyar da'irar bolt. Don wani adadi daban, danna `I` kafin tabbatarwa ka rubuta adadin abubuwa — na asali yana ƙidaya a matsayin ɗaya, kuma ana lissafa kusurwar tsakaninsu maka. Ko ka danna `A` ka rubuta nisa a digiri maimakon haka; ana sake bayyana kusurwar cikawa don ta dace.

Wasu bayanai masu muhimmanci:

- **Fill** ita ce kusurwa daga abu na farko zuwa na ƙarshe. 360° na tsoho yana shimfiɗa abubuwa a kan cikakkiyar da'ira; ƙaramar lamba tana shimfiɗa su a kan baka — jeri na ramuka a kan kwata na juyi, misali. Kusurwa mara kyau tana bin agogo.
- **Rotate** yana yanke ko kowane kwafi yana juyawa yayin zagayawa. Ga ramuka masu zagaye ba shi da bambanci. Ga ramin tsayi, haƙori ko bracket yana da: a kunne — kowane kwafi yana fuskantar tsakiya kamar na asali; a kashe — kowane kwafi yana riƙe alkiblar na asali kuma kawai ana matsar da shi wurinsa. Danna `R` don canjawa kafin tabbatarwa.
- Array yana yin **kwafi** — na asali yana nan inda yake, kuma kowane abu abu ne na yau da kullum da za ka iya gyarawa daga baya.

## Haɗa su duka: flange

Zana hexagon don siffa ta waje, da'ira a tsakiya don bore, da da'irar bolt don ramukan ɗaurewa. Umarni uku, kowane ma'auni an rubuta daidai, kuma babu abin da za a auna daga allo.

Idan kayan zai tafi wurin mai yankan laser, share duk wata da'irar taimako da ka zana don samo pitch circle — za a yanke ta kamar komai — ka duba fayil ɗin da jagorarmu ta [shirya DXF don yankan laser](/ha/blog/prepare-dxf-for-laser-cutting/). Polygon hanya ce a rufe ta hanyar ginawa, wanda shi ne dalilin da ya fi yawa da ke sa hidimomin yankan ƙin fayiloli.

## Abin da wannan ba ya yi

- **Polygon na yau da kullum kawai.** Duk gefuna daidai suke. Siffa ta waje marar daidaito — siffa mai wasu gefuna masu tsawo — [polyline](/ha/docs/commands/polyline/) ce da kake zanawa wuri bayan wuri.
- **2D kawai.** Yana zana siffofi masu lebur. Ba zai ba ka nut da aka yi samfurinsa ko bolt mai zare ba.
- **Burauzar kwamfuta kawai** — Chrome, Firefox, Safari da Edge. Babu sigar waya.

---

*Masu alaƙa: [Polygon](/ha/docs/commands/polygon/) da [ArrayPolar](/ha/docs/commands/array-polar/) don duk zaɓuɓɓuka da maɓallai, [Circle](/ha/docs/commands/circle/) don rubuta radius daidai, da [ArrayGrid](/ha/docs/commands/array-grid/) don maimaita abubuwa a layuka da ginshiƙai maimakon kewayen tsakiya.*
