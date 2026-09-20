---
title: Polyline — Gumuhit ng Multi-Segment na Path bilang Iisang Entity
description: Ginuguhit ng Polyline command ang anumang bilang ng magkakadugtong na segment na naka-save bilang isang LWPOLYLINE entity. Ang vertex at segment-midpoint grips ay nagbibigay-daan sa iyong baguhin ang hugis ng anumang bahagi ng path pagkatapos itong gawin. Sinusuportahan ang offset; hindi sinusuportahan ang trim o extend.
keywords: [CAD polyline command, gumuhit ng polyline CAD, multi-segment na path CAD, LWPOLYLINE DXF, baguhin ang hugis ng polyline, vertex grip CAD, offset polyline, kulmanlab]
group: shapes
order: 2
---

# Polyline

Ginuguhit ng `Polilinya` command ang magkakadugtong na path ng anumang bilang ng straight o arc segment, na lahat naka-save bilang iisang `LWPOLYLINE` entity. Dahil iisang object ang buong path, ang pagpili dito ay pumipili sa lahat ng segment nang sabay — ilipat, i-rotate, o i-scale ang buong hugis sa iisang operation. Ito ang pangunahing pagkakaiba mula sa kinadenang [Lines](../line/), kung saan independiyenteng entity ang bawat segment.

Puwede ring maging **closed** ang mga polyline: ginagamit ng [Rectangle](../rectangle/) command ang parehong `LWPOLYLINE` entity na may naka-set na close flag.

## Pagguhit ng Polyline

1. I-type ang `Polilinya` sa terminal o i-click ang **Polyline** button sa toolbar.
2. **I-click ang unang punto**, o i-type ang `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate.
3. **I-click ang bawat susunod na punto** — bawat click ay nagdaragdag ng segment. Gumagana ang coordinate entry sa bawat hakbang.
4. Pindutin ang **Enter** o **Space** para tapusin (nangangailangan ng hindi bababa sa 2 punto na nailagay na).

```
  ●──────●
  1st    2nd
          \
           \  segment 3 (in progress — cursor here)
            ●  ← click to add, Enter/Space to finish
```

Ang pagpindot ng **Escape** anumang oras ay nag-a-discard ng lahat ng nailagay na punto at lumalabas sa command.

## Pagguhit ng arc segment

Pindutin ang **A** anumang oras pagkatapos ng unang vertex para i-toggle ang Arc mode — ang parehong inline-option pattern na ginagamit ng Copy option ng Rotate. Ipinapakita ng prompt ang kasalukuyang estado bilang `[Arc=true]` / `[Arc=false]`; ang muling pagpindot ng **A** ay ibinabalik ito, kaya ang straight at arc segment ay puwedeng malayang paghaluin sa isang polyline.

Kapag naka-on ang Arc mode, ang bawat bagong segment ay isang tangent-continuation arc — nagsisimula itong tangent sa kung ano ang dumaan kaagad bago rito (ang direksyon ng naunang line segment, o ang end tangent ng naunang arc); ang pinakaunang segment ay default na pumupunta sa silangan, dahil wala itong dapat maging tangent.

## Coordinate Entry

Sa halip na mag-click, i-type ang eksaktong posisyon para sa alinmang vertex:

1. I-type ang X value.
2. Pindutin ang `,` — ipinapakita ng terminal ang `[X], [Y{cursor}]`.
3. I-type ang Y value.
4. Pindutin ang **Enter** para ilagay ang vertex.

## Angle Locking at Eksaktong Segment Length

Nalalapat ang parehong 45° snap logic ng [Line](../line/#angle-locking-and-exact-length-input) command sa pagitan ng anumang dalawang magkasunod na punto. Kapag naka-lock sa axis:

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idagdag ang digit sa segment length |
| `-` | Negative na length — binabaligtad ang direksyon sa axis (unang character lang) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Ilagay ang susunod na punto sa na-type na distansya |

Lumalabas nang real time ang kasalukuyang naipong length sa terminal prompt. Ang pag-click habang naka-lock ay naipoproject papunta sa axis kaya eksaktong napapadpad dito ang bagong vertex.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.`, `-` | Simulan ang X coordinate entry, o segment length kapag angle-locked |
| `,` | I-lock ang X at lumipat sa Y entry |
| `A` | I-toggle ang Arc mode para sa susunod na segment (pagkatapos ng unang vertex, walang isinasagawang input) |
| `Backspace` | Burahin ang huling na-type na character |
| `Enter` | Kumpirmahin ang na-type na coordinate o length, o tapusin ang polyline kung walang na-type at ≥ 2 na punto ang mayroon na |
| `Space` | Tapusin ang polyline (kapareho ng Enter kapag walang input na isinasagawa) |
| `Escape` | I-discard ang lahat ng punto at lumabas |

## Grip Editing — Vertex at Segment Midpoint

Nagpapakita ang napiling polyline ng dalawang uri ng grip:

| Grip | Posisyon | Ano ang ginagawa nito |
|------|----------|--------------|
| **Vertex** | Sa bawat nailagay na punto | I-drag para baguhin ang posisyon ng vertex na iyon; nag-sti-stretch ang lahat ng nakakonektang segment para sumunod |
| **Segment midpoint** | Gitna ng bawat segment | I-drag para ilipat nang sabay ang **parehong** endpoint ng segment na iyon, na nananatiling buo ang length at angle ng segment |

Ang segment-midpoint grip ay eksklusibo sa mga polyline — nagbibigay-daan ito na idausdos ang isang indibidwal na segment nang pahiga nang hindi binabago ang haba nito. Sa isang [Line](../line/), sa halip, ino-activate ng midpoint grip ang Move command para sa buong entity.

Walang iisang grip para "ilipat ang buong polyline". Para ilipat ang buong path, gamitin ang [Move](../move/) command.

## Pagpili ng mga Polyline

| Method | Kilos |
|--------|-----------|
| **Click** | Napipili ang polyline kung napapadpad ang click sa loob ng hit-test distance ng anumang segment |
| **Drag right** (strict) | Kailangang nasa loob ng box ang lahat ng vertex |
| **Drag left** (crossing) | Ang anumang segment na sumasalubong sa boundary ng box ay pumipili sa buong polyline |

Dahil iisang entity ang polyline, ang crossing selection na humihipo sa anumang segment ay pumipili sa lahat ng segment.

## Suportadong Edit Command

Sinusuportahan ng mga polyline ang bawat general na transformation, kasama ang offset, trim, extend, fillet, at chamfer (para sa chamfer, straight segment lang ang binibilang):

| Command | Ano ang mangyayari sa polyline |
|---------|------------------------------|
| [Move](../move/) | Inililipat ang lahat ng vertex sa parehong displacement |
| [Copy](../copy/) | Gumagawa ng kaparehong polyline sa bagong posisyon |
| [Rotate](../rotate/) | Ino-rotate ang lahat ng vertex sa paligid ng piniling base point |
| [Mirror](../mirror/) | Isinasalamin ang lahat ng vertex sa kabilang panig ng mirror axis |
| [Scale](../scale/) | Isina-scale ang lahat ng vertex nang pantay mula sa base point |
| [Offset](../offset/) | Gumagawa ng parallel na polyline sa fixed na perpendicular distance |
| [Trim](../trim/) | Inaalis ang bahagi sa pagitan ng dalawang intersection, sa straight man o arc segment |
| [Extend](../extend/) | Pinapahaba ang unang o huling segment hanggang sa susunod na boundary |
| [Fillet](../fillet/) | Ini-round ang sulok sa pagitan ng dalawang **katabing** segment, straight man o arc, gamit ang tangent arc na isinisingit sa polyline bilang bagong bulge segment |
| [Chamfer](../chamfer/) | Nag-be-bevel ng sulok sa pagitan ng dalawang katabing straight segment |
| [Explode](../explode/) | Naghihiwalay sa polyline tungo sa mga independiyenteng line at arc entity, isa kada segment |
| [Delete](../delete/) | Inaalis ang polyline sa drawing |

Kapag nag-fillet ka ng isang polyline segment laban sa iba na hindi ang sarili nitong katabing segment, hindi ito nananatiling simpleng in-place na pag-edit — tingnan ang [Fillet](../fillet/) para sa resulta (pagsasama sa iisang bagong polyline, na pinagdurugtong ng fillet arc).

## Properties

Kapag napili ang isang polyline, ipinapakita ng properties panel ang mga sumusunod:

**General**

| Property | Default | Kahulugan |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |
| Linetype | ByLayer | Named linetype pattern |
| Linetype Scale | 1 | Scale factor sa linetype pattern |
| Thickness | 0 | Extrusion thickness |

**Geometry**

| Property | Kahulugan |
|----------|---------|
| Closed | Kung ang huling vertex ay bumabalik-konekta sa una |
| Vertex Count | Kabuuang bilang ng vertex |
| Vertices | Listahan ng coordinate ng lahat ng vertex |

## Polyline kumpara sa Line — Kailan Gagamitin ang Alin

| | Polyline | Line |
|---|---------|------|
| Bilang ng entity | Isang `LWPOLYLINE` para sa buong path | Isang `LINE` bawat segment |
| Saradong hugis | Oo (close flag) | Hindi |
| Arc segment | Oo, kada segment sa pamamagitan ng `Arc` toggle | Hindi — kailangan ng hiwalay na [Arc](../arc/) entity ang isang kurbadong segment |
| Trim / Extend | Oo | Oo — segment by segment |
| Segment-midpoint grip | Inililipat ang buong segment | Ino-activate ang Move para sa entity |
| Pinakamainam para sa | Outlines, contours, hugis na pananatilihing buo | Construction lines, geometry na tri-trim mo |

## DXF — LWPOLYLINE Entity

Ang mga polyline ay naka-save bilang `LWPOLYLINE` entities sa DXF file. Lahat ng property — vertex coordinate, closed flag, color, layer, linetype, linetype scale, at thickness — ay nagro-round-trip nang walang loss. Ang mga rectangle na iginuhit gamit ang [Rectangle](../rectangle/) command ay naka-save din bilang `LWPOLYLINE` (closed, apat na vertex) at hindi makikilala ang pagkakaiba sa DXF level.

Ang mga `LWPOLYLINE` entity mula sa anumang DXF-compatible na application (LibreCAD, FreeCAD, atbp.) ay nababasa bilang ganap na na-e-edit na polyline sa editor.
