---
title: "ViewportRectangle Command — Create a Viewport in a Layout in KulmanLab CAD"
description: "Amri ya ViewportRectangle huunda mwonekano katika mpangilio wa karatasi kwa kuchagua kona mbili zilizo kinyume. Mwonekano unaonyesha vipande vya nafasi ya mfano kwa kiwango cha chaguo-msingi cha mpangilio."
keywords: [viewport rectangle, create viewport, layout viewport, paper space viewport, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Amri ya `ViewportRectangle` huunda mwonekano mpya katika mpangilio wa karatasi unaofaa kwa kuchagua kona mbili zilizo kinyume. Inapatikana tu katika nafasi ya mpangilio (layout space).

## Kuunda mwonekano

1. Badilisha kwenye mpangilio wa karatasi ukitumia kichupo chini ya skrini.
2. Andika `ViewportRectangle` kwenye terminal au bonyeza kitufe cha **Viewport Rectangle** kwenye upau wa zana.
3. **Bonyeza kona ya kwanza**, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
4. **Bonyeza kona iliyo kinyume** — mwonekano huwekwa mara moja. Uingizaji wa kuratibu unafanya kazi hapa pia.

Mwonekano mpya unaonyesha mfano wote kwa kiwango cha chaguo-msingi cha mpangilio. Tumia gurudumu la skrolini ndani ya mwonekano kupanua, au kokota kati kuhamisha mwonekano wa mfano.

## Uingizaji wa kuratibu

Katika hatua yoyote ya kona unaweza kuandika kuratibu sahihi:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka nukta.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Enter` | Thibitisha kuratibu iliyoandikwa |
| `Escape` | Futa |

## Kuhariri mwonekano

Baada ya kuweka mwonekano, bonyeza kuuchagua:

- **Kokota kingo au kona** kubadilisha ukubwa.
- **Kokota kishiko cha katikati** kuihamisha.
- Tumia **kichaguo cha kiwango** kwenye upau wa udhibiti kuweka kiwango sahihi (mfano 1:50). Kuingiza kiwango ambacho hakiko kwenye orodha, kiandike moja kwa moja kwenye uga wa uingizaji chini ya menyu — inakubali muundo wa uwiano (`1:200`, `5:1`) au desimali ya kawaida (`0.005`), kisha ubonyeze **Enter**.
- Bonyeza kulia mwonekano na utumie **Lock** kuzuia mabadiliko yasiyokusudiwa.

## Maelezo

- ViewportRectangle inapatikana tu wakati kichupo cha mpangilio wa karatasi kiko hai. Kuiendeshea katika nafasi ya mfano inaonyesha ujumbe wa hitilafu na kutoka.
- Kuiga mwonekano uliopo, tumia [ViewportCopy](../viewport-copy/).
