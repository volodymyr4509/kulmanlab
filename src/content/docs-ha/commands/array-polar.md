---
title: "Umarnin ArrayPolar — kwafi abubuwa a kewayen tsakiya a KulmanLab CAD"
description: "Umarnin ArrayPolar yana kwafar abubuwan da aka zaɓa a kewayen wurin tsakiya — adadin abubuwa da aka shimfiɗa a kan cikakken juyi ko ɓangare na shi, tare da kwafi da ke juyawa yayin zagayawa ko su riƙe alkiblarsu."
keywords: ["polar array CAD", "tsarin zagaye CAD", "kwafi abubuwa a kewayen wuri CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Umarnin `ArrayPolar` yana yin kwafin abubuwan da aka zaɓa a kewayen wurin tsakiya, a shimfiɗe daidai a kan cikakken juyi ko ɓangare na shi. Na asali shi ne abu na farko; kowane abu daban kwafi ne da aka juya a kewayen tsakiya — ko kuma kawai aka matsar a kewayensa, idan ka kashe Rotate.

## Zana polar array

1. Zaɓi abubuwan, sannan ka rubuta `JerinPolar` a tashar umarni ko ka danna maɓallin **Array Polar** na kayan aiki. Idan aka fara ba tare da zaɓi ba, yana tambayarka ka zaɓe su tukuna — danna **Enter** ko **Space** don tabbatarwa.
2. **Danna tsakiya** da kwafin za su zagaya, ko ka rubuta `X,Y` ka danna **Enter** don ainihin haɗin kai.
3. Duba array ɗin. Ana ganin duk kwafin kai tsaye, kuma tashar umarni tana nuna `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — danna harafin zaɓi don canja shi.
4. Danna **Enter** ko **Space** don ƙirƙirar kwafin. Na asali suna nan inda suke kuma ana share zaɓin.

## Zaɓuɓɓuka

| Zaɓi | Maɓalli | Tasiri |
|---|---|---|
| Items | `I` | Adadin abubuwa, tare da na asali — cikakkiyar lamba daga 2 zuwa 1024. Yana farawa daga 6. |
| Angle | `A` | Digiri daga abu ɗaya zuwa na gaba, gaba da agogo; kusurwa mara kyau tana bin agogo. Har 180°. |
| Fill | `F` | Digiri daga abu na farko zuwa na ƙarshe. 360 (tsoho) cikakken juyi ne; ƙaramar lamba tana shimfiɗa abubuwan a kan ɓangare. Mara kyau yana bin agogo. Har 360°. |
| Rotate | `R` | A kunne (tsoho): kowane kwafi yana juyawa yayin zagayawa. A kashe: ana matsar da kowane kwafi zuwa wurinsa kuma yana fuskantar inda na asali yake. Yana canjawa nan take — babu lamba da za a rubuta. |

- Angle da Fill hanyoyi biyu ne na faɗin abu ɗaya, don haka canja ɗaya yana sake bayyana ɗayan. A kan cikakken juyi abu na ƙarshe yana tsayawa mataki ɗaya kafin na farko; a kan ɓangaren juyi yana sauka daidai a kusurwar cikawa.
- Don canja lamba, danna harafin zaɓinta. Umarnin yana zuwa da ƙimar yanzu — rubuta don maye gurbinta, sannan ka danna **Enter** ko **Space**; tabbatar da ita ba tare da canji ba yana bar array kamar yadda yake.
- Items yana ɗaukar cikakkun lambobi kawai; Angle da Fill suna ɗaukar adadin ƙima da `-` a farko don bin agogo. Ana ƙin kusurwa ko cikawa 0, haka ma kusurwa fiye da 180° ko cikawa fiye da 360° — tashar umarni tana faɗa dalili.
- Angle da ya yi ƙanƙanta ba zai ɗauki duk abubuwa ba yana jefar da waɗanda ba su da wuri, kuma tashar umarni tana ba da sabon adadi.
- Yana aiki a kan kowane nau'in abu: kowane kwafi shi ne na asali da aka juya a kewayen tsakiya, ko aka matsar, daidai yadda [Rotate](../rotate/) da [Move](../move/) za su yi.

## Jagorar madannai

| Maɓalli | Aiki |
|---|---|
| `Enter` / `Space` | Tabbatar da zaɓi, array ko lambar da aka rubuta |
| `I` `A` `F` `R` | Canja Items, Angle ko Fill ta rubuta lamba; juya Rotate |
| `0`–`9`, `.`, `-` | Rubuta lamba (`.` da `-` don Angle da Fill kawai, `-` a farko) |
| `Backspace` | Share harafin ƙarshe da aka rubuta |
| `Escape` | Soke |
