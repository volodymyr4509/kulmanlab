---
title: Hatch Command — Punan ang Isang Area ng Pattern
description: Pinupuno ng Hatch command ang region na nakapaligid sa isang na-click na punto ng isang pattern — anumang kombinasyon ng lines, arcs, ellipses, at splines na nagsasara ay pumapalibot sa isang region, at anumang saradong hugis sa loob nito ay nananatiling isang hindi napunang isla.
keywords: [hatch command CAD, punan ang area CAD, hatch pattern CAD, ANSI31, SOLID fill, boundary fill CAD, DXF HATCH entity, kulmanlab]
group: shapes
order: 7
---

# Hatch

Pinupuno ng `hatch` command ang region na nakapaligid sa isang na-click na punto ng isang pattern. Hindi muna ginuguhit ang boundary — nanggagaling ito sa kung ano na ang nasa canvas, kaya apat na hiwalay na [Line](../line/) na nagkikita sa dulo-hanggang-dulo ay pumapalibot sa isang region eksaktong tulad ng ginagawa ng saradong [Polyline](../polyline/), at anumang saradong hugis sa loob ay nagiging isla na hindi hinihipo ng fill.

## Pagpuno ng Isang Area

1. I-type ang `hatch` sa terminal o i-click ang **Hatch** toolbar button (ang swatch icon).
2. **I-click ang isang punto** sa loob ng region na gusto mong punan.
3. Nananatiling aktibo ang command, kaya patuloy na mag-click para punan ang mas maraming area — bawat click ay gumagawa ng sariling `Hatch` entity nito.
4. Pindutin ang **Enter**, **Space**, o **Escape** kapag tapos na.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   i-click sa loob ng
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   panlabas na boundary; ang
  └─────────────┘        └─────────────┘   circle ay nananatiling isla
```

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Tapusin ang Hatch command |
| `Escape` | Tapusin ang Hatch command (kapareho ng Enter/Space) |

## Ano ang Puwedeng Bumuo ng Boundary

Anumang kombinasyon ng mga entity types na ito ay puwedeng bumuo ng boundary, sa anumang kombinasyon, hangga't magkakakonekta sila dulo-hanggang-dulo nang walang puwang:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (sariling saradong boundary nito)
- [Ellipse](../ellipse/) (saradong, o bukas na elliptical arc bilang bahagi ng mas malaking loop)
- [Polyline](../polyline/) (bukas o sarado) at [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Ang mga Text, Multileader, at Dimension entities ay hindi kailanman itinuturing na boundaries.

## Mga Isla

Anumang bagay na ganap na sarado sa loob ng region na na-click mo — isang circle, isang saradong polyline, ang boundary ng ibang hatch — ay nagiging isang **isla**: humihinto ang fill sa gilid nito at ang isla mismo ay nananatiling walang laman. Maglagay ng saradong hugis sa loob ng ibang saradong hugis at nag-aalternate ang fill, butas sa loob ng fill sa loob ng butas, sinusunod ang parehong loob/labas na patakaran sa bawat antas.

## Kapag Nabigo ang Isang Click

Kung ang punto na na-click mo ay hindi nakapaloob, o may puwang ang boundary, ipinapaliwanag ng terminal kung bakit sa halip na tahimik na walang ginagawa:

| Mensahe | Kahulugan |
|---------|-----------|
| "no boundary found" | Walang natamaan sa anumang direksyon mula sa na-click na punto — walang boundary sa malapit |
| "point is not enclosed" | May boundary na malapit, pero ang hugis na binubuo nito ay hindi kasama ang punto na na-click mo |
| "boundary is open" | May puwang sa isang lugar ang pinakamalapit na boundary — subaybayan ito at tingnan kung eksakto ang bawat pagkakadugtong |
| "boundary too complex" | Hindi naisara ang boundary loop sa loob ng traversal limit — karaniwang isang gusot ng magkakapatong na entities |

Nananatiling aktibo ang command pagkatapos ng nabigong click — basahin ang mensahe, ayusin ang drawing o mag-click sa ibang lugar, at subukan muli.

## Pagpili ng Pattern

Ang bawat bagong hatch ay nagsisimulang napuno ng `ANSI31` (o kung anong pattern ang ginamit ng *huling* hatch na in-edit mo) — walang pattern picker bago maggambar. Para gumamit ng ibang pattern:

1. Piliin ang isang existing hatch at buksan ang **Pattern** field nito sa properties panel — bubuksan nito ang pattern picker, isang grid ng mga pinangalanang swatch na naka-grupo ayon sa pinagmulan ng bawat pattern.
2. I-click ang isang pattern para i-apply ito — agad na ina-update ang fill.

Ang pagpiling iyon ay nagiging default din para sa *susunod* na hatch na gagawin mo gamit ang `hatch` command, sa parehong paraan na nagpapatuloy ang pagpili ng layer o kulay. Kaya para mag-hatch ng ilang bagong area gamit ang isang partikular na pattern: punan ang isang area, itakda ang pattern nito nang isang beses, pagkatapos ay patuloy na mag-hatch — nagsisimula na ang bawat fill pagkatapos noon nang naka-apply na ang pattern na iyon.

Tingnan ang [Hatch Manager](../hatch-manager/) para mag-upload ng sarili mong `.pat` pattern files at mag-browse sa buong library.

Ang **SOLID** ay isang normal na entry sa listahan ng pattern, hindi isang hiwalay na checkbox o mode — piliin ito sa parehong paraan na pipiliin mo ang ANSI31 o ibang pinangalanang pattern.

## Mga Katangian

| Katangian | Kahulugan |
|-----------|-----------|
| Pattern | Ang pangalan ng pattern, mula sa shared pattern vocabulary (tingnan ang [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Nag-i-scale sa pagitan ng mga linya ng pattern — mas malalaking value ang nagpapalayo sa mga linya ng pattern sa isa't isa |
| Pattern Angle | Ipinapaikot ang pattern nang hiwalay sa boundary |
| Origin X / Origin Y | Kung saan naka-anchor ang sariling pag-uulit ng pattern, sa drawing coordinates |

Ang paggalaw, pag-ikot, pag-mirror, o pag-scale ng hatch ay dinadala rin ang placement ng pattern nito, kaya nananatiling naka-align ang fill sa boundary — hindi mo kailangang i-set ulit ang scale o angle pagkatapos ng transformation.

## Grip Editing ng Boundary

Ang isang napiling hatch ay hinahawakan ang boundary nito sa parehong paraan na hinahawakan ng Polyline ang mga vertex nito — isang grip sa bawat corner kung saan nagkikita ang dalawang edge, at isa sa gitna ng bawat edge (isang saradong loop tulad ng hatch ng circle o ellipse ay humahawak sa halip sa apat na axis point nito).

| Grip | Ano ang Ginagawa |
|------|--------------------|
| **Corner** | Inililipat ang corner na iyon. Eksaktong sumusunod ang tuwid na edge; nag-a-adjust ulit ang arc para patuloy na dumaan sa parehong kapitbahay nito; ang edge ng ellipse o spline ay puwede lang dumapo sa isang lugar sa sarili nitong curve, kaya kumakapit ang corner sa pinakamalapit na punto dito |
| **Gitna ng edge — line, ellipse, o spline edge** | Isinasalansang ang buong edge; pinuputol o pinapahaba ang mga edge sa magkabilang panig para manatiling konektado dito |
| **Gitna ng edge — arc edge** | **Yumuyuko** ang arc sa cursor sa halip na isalansang ito — nananatili ang parehong dulo sa eksaktong kinaroroonan nila, at walang ibang gumagalaw sa boundary |
| **Center** (buong hatch) | Ina-activate ang [Move](../move/) para sa buong hatch |

Ipinapakita ng drag preview ang boundary bilang isang dashed outline sa halip na solid fill habang kumakaladkad ka — nananatiling nakikita ang orihinal na fill sa ilalim hanggang sa mabitawan mo, dahil ang preview ay puwede lamang mag-paint sa ibabaw ng kung ano na ang nariyan, hindi kailanman mag-alis ng kahit ano mula rito.

## DXF — HATCH Entity

Ang mga hatch ay **na-i-import** mula sa `HATCH` entities: binabasa ng KulmanLab ang boundary geometry kasama ang pangalan, scale, at angle ng pattern (DXF group codes 70/41/52) — **hindi** nito binabasa ang sariling line definitions ng pattern na naka-inline sa file. Sa halip, hinahanap ang pangalan ng pattern sa sariling pattern library ng KulmanLab (built-in defaults kasama ang anumang in-upload mo sa [Hatch Manager](../hatch-manager/)). Ang pangalan na wala sa library mo ay babalik sa ANSI31 para mababasa pa rin ang drawing bilang hatched, at ang isang note ay naitatala nang minsan.

Ang mga loop na naka-bound ng spline na isinulat ng ibang applications (DXF boundary edge type 4) ay hindi pa nababasa.

Ang hatch ay **nae-export** sa DXF bilang mga entity na `HATCH`. Lumalabas ang mga loop ng hangganan kasama ang pangalan ng pattern (group code 2), ang solid-fill flag (70), at ang sariling anggulo at eskala ng hatch na iyon (52/41) — at hindi tulad ng landas ng pag-import, isinusulat din sa loob ang nalutas nang mga depinisyon ng linya ng pattern (78, kasama ang 53/43/44/45/46/79/49). Sinadya ang di-pagkakatugmang ito: kayang hanapin ng KulmanLab ang pangalan sa sarili nitong aklatan, ngunit maaaring wala sa tumatanggap na aplikasyon ang pattern na iyon, kaya sumasama ang mga linya.

## Mga Kaugnay na Command

- [Hatch Manager](../hatch-manager/) — mag-browse sa pattern library at mag-upload ng `.pat` files
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — dinadala lahat ang placement ng pattern ng hatch
- [Delete](../delete/) — binubura ang hatch nang hindi naaapektuhan ang mga entity na bumuo ng boundary nito
