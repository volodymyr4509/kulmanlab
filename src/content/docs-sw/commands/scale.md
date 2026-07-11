---
title: "Scale Command — Resize Entities Uniformly Around a Base Point in KulmanLab CAD"
description: "Amri ya Scale hubadilisha ukubwa wa vipande vilivyochaguliwa kwa usawa kwa kiwango kilichoandikwa karibu na nukta ya msingi iliyowekwa. Kiwango daima huingizwa kwa kibodi — hakuna kubonyeza-kuweka-kiwango. Kiwango zaidi ya 1 hukuza; chini ya 1 hupunguza. Kila aina ya kipande inasaidiwa."
keywords: [CAD scale command, resize entities CAD, scale objects CAD, uniform scale CAD, scale factor CAD, enlarge shrink CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Amri ya `scale` hubadilisha ukubwa wa vipande vilivyochaguliwa kwa usawa karibu na nukta ya msingi. Umbali wote kutoka kwa nukta ya msingi huzidishwa na kiwango cha pima — kiwango cha `2` hukuza vipimo vyote mara mbili, `0.5` hupunguza nusu. Kiwango daima huingizwa kwa kuandika; hakuna kubonyeza-kuweka-kiwango.

## Njia mbili za kuanza

**Chagua kwanza, kisha pima** — chagua vipande kwanza, kisha washa:

1. Chagua kipande kimoja au zaidi kwenye kanvasi.
2. Andika `scale` kwenye terminal au bonyeza kitufe cha **Scale** kwenye upau wa zana.
3. **Bonyeza nukta ya msingi** — nukta iliyowekwa isiyosogea wakati wa kupima. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
4. **Andika kiwango cha pima** na ubonyeze **Enter**.

**Washa kwanza, kisha chagua** — anza amri bila chochote kilichochaguliwa:

1. Andika `scale` au bonyeza kitufe cha upau wa zana.
2. **Chagua vitu** — bonyeza kubadilisha, au buruta kuchagua kwa eneo.
3. Bonyeza **Enter** au **Space** kuthibitisha uchaguzi.
4. **Bonyeza nukta ya msingi** (uingizaji wa kuratibu unapatikana), kisha andika kiwango.

```
  Msingi ●                Msingi ●
          [kipande]   →           [kipande kikubwa]
  kiwango = 2 → umbali kutoka ● unakuwa mara mbili
```

## Kuandika kiwango cha pima

Baada ya nukta ya msingi kuwekwa terminal inaonyesha `ingiza kiwango cha pima:` na kusubiri uingizaji wa kibodi:

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa kiwango |
| `-` | Kiwango hasi (herufi ya kwanza tu — huakisi kisha hupima) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Tekeleza upimaji kwa kiwango kilichoandikwa |

Kiwango lazima kisiwe sifuri. Thamani za kawaida:

| Kiwango | Athari |
|---------|--------|
| `2` | Hukuza vipimo vyote mara mbili |
| `0.5` | Hupunguza vipimo vyote nusu |
| `1.5` | Huongeza kwa 50% |
| `-1` | Huakisi kwenye nukta ya msingi (sawa na kuzungusha 180°) |

Hakuna hakiki ya moja kwa moja wakati wa kuandika — matokeo ya kupima yanaonekana tu baada ya kubonyeza **Enter**.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Enter` / `Space` | Thibitisha uchaguzi |
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X (awamu ya nukta ya msingi), au kiwango cha pima (awamu ya kiwango) |
| `,` | Funga X na nenda kwa uingizaji wa Y (awamu ya nukta ya msingi) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu au tekeleza upimaji |
| `Escape` | Futa na rejesha |

## Uchaguzi wakati wa amri

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Hubadilisha kipande chini ya kishale |
| **Buruta kulia** (mkali) | Huongeza vipande vilivyo ndani kabisa ya sanduku |
| **Buruta kushoto** (inayopita) | Huongeza vipande vinavyoingilia sanduku |
| **Enter** / **Space** | Huthibitisha uchaguzi |

## Kinachopimwa

Aina zote za vipande zinasaidiwa. Kila kipande hupima jiometri yake kulingana na nukta ya msingi:

| Kipande | Kinachobadilika |
|---------|----------------|
| Line | Nukta zote mbili za mwisho zimepimwa mbali na nukta ya msingi |
| Circle | Kitovu kimepimwa kutoka kwa nukta ya msingi; radi imezidishwa na kiwango |
| Arc | Kitovu kimepimwa; radi imezidishwa na kiwango; pembe hazibadiliki |
| Ellipse | Kitovu kimepimwa; urefu wa nusu-mhimili wote umezidishwa na kiwango |
| Polyline / Rectangle | Kila ncha imepimwa kutoka kwa nukta ya msingi |
| Text | Nukta ya nanga imepimwa; urefu umezidishwa na kiwango |
| Spline | Ncha zote za udhibiti / nukta za ulingano zimepimwa |
