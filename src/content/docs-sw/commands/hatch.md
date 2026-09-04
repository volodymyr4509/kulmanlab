---
title: Amri ya Hatch — Jaza Eneo kwa Muundo
description: Amri ya Hatch hujaza eneo linalozunguka nukta iliyobofya kwa muundo — mchanganyiko wowote wa mistari, archi, duaradufu, na spline ambao unafunga huzunguka eneo, na umbo lolote lililofungwa ndani yake hubaki kama kisiwa kisichojazwa.
keywords: [amri ya hatch CAD, jaza eneo CAD, muundo wa hatch CAD, ANSI31, ujazaji wa SOLID, ujazaji wa mpaka CAD, kiumbe cha DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

Amri ya `hatch` hujaza eneo linalozunguka nukta iliyobofya kwa muundo. Mpaka haujachorwa kwanza — unatokana na kilichopo tayari kwenye turubai, hivyo [Line](../line/) nne tofauti zinazokutana ncha kwa ncha huzunguka eneo sawa kabisa na [Polyline](../polyline/) iliyofungwa inavyofanya, na umbo lolote lililofungwa ndani hugeuka kuwa kisiwa ambacho ujazaji hukiacha bila kuguswa.

## Kujaza Eneo

1. Andika `hatch` kwenye terminal au bofya kitufe cha **Hatch** kwenye upau wa zana (aikoni ya sampuli).
2. **Bofya nukta** ndani ya eneo unalotaka kujaza.
3. Amri inabaki hai, hivyo endelea kubofya kujaza maeneo zaidi — kila bofyo huunda kiumbe chake cha `Hatch`.
4. Bonyeza **Enter**, **Space**, au **Escape** ukimaliza.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   bofya ndani ya mpaka
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   wa nje; duara hubaki
  └─────────────┘        └─────────────┘   kama kisiwa
```

## Marejeo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `Enter` / `Space` | Maliza amri ya Hatch |
| `Escape` | Maliza amri ya Hatch (sawa na Enter/Space) |

## Kinachoweza Kuunda Mpaka

Mchanganyiko wowote wa aina hizi za viumbe unaweza kuunda mpaka, katika mchanganyiko wowote, ilimradi wanaunganishwa ncha kwa ncha bila pengo lolote:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (mpaka wake mwenyewe uliofungwa)
- [Ellipse](../ellipse/) (iliyofungwa, au archi ya duaradufu iliyo wazi kama sehemu ya kitanzi kikubwa zaidi)
- [Polyline](../polyline/) (wazi au iliyofungwa) na [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Viumbe vya Text, Multileader, na Dimension havichukuliwi kamwe kama mipaka.

## Visiwa

Chochote kilichofungwa kikamilifu ndani ya eneo ulilobofya — duara, polyline iliyofungwa, mpaka wa hatch nyingine — hugeuka kuwa **kisiwa**: ujazaji husimama kwenye ukingo wake na kisiwa chenyewe hubaki tupu. Weka umbo lililofungwa ndani ya umbo lingine lililofungwa na ujazaji hubadilika, shimo ndani ya ujazaji ndani ya shimo, ukifuata sheria ile ile ya ndani/nje katika kila ngazi.

## Wakati Uchaguzi Unaposhindwa

Ikiwa nukta uliyobofya haijazungukwa, au mpaka una pengo, terminal huelezea sababu badala ya kutofanya chochote kimya kimya:

| Ujumbe | Maana |
|--------|-------|
| "no boundary found" | Hakuna kilichogunduliwa katika mwelekeo wowote kutoka kwa nukta iliyobofya — hakuna mpaka wowote karibu |
| "point is not enclosed" | Kuna mpaka karibu, lakini umbo linaloliunda halina nukta uliyobofya |
| "boundary is open" | Mpaka wa karibu una pengo mahali fulani — ufuatilie na uangalie kila muungano ni sahihi |
| "boundary too complex" | Kitanzi cha mpaka hakikuweza kufungwa ndani ya kikomo cha upitiaji — kwa kawaida ni mchanganyiko wa viumbe vinavyopishana |

Amri inabaki hai baada ya uchaguzi kushindwa — soma ujumbe, rekebisha mchoro au bofya mahali pengine, na ujaribu tena.

## Kuchagua Muundo

Kila hatch mpya huanza ikiwa imejazwa kwa `ANSI31` (au muundo wowote ambao hatch ya *mwisho* uliyoihariri ilitumia) — hakuna kichaguzi cha muundo kabla ya kuchora. Kutumia muundo tofauti:

1. Chagua hatch iliyopo na fungua uwanja wake wa **Pattern** kwenye paneli ya sifa — hii hufungua kichaguzi cha muundo, gridi ya sampuli zenye majina zilizopangwa kulingana na chanzo cha kila muundo.
2. Bofya muundo kuutumia — ujazaji husasishwa mara moja.

Uchaguzi huo pia huwa chaguo-msingi kwa hatch ya *ijayo* utakayounda kwa amri ya `hatch`, kwa njia ile ile ambavyo kuchagua tabaka au rangi hubebwa mbele. Hivyo kuweka hatch kwenye maeneo mapya kadhaa kwa muundo fulani: jaza eneo moja, weka muundo wake mara moja, kisha endelea kuweka hatch — kila ujazaji baada ya hapo huanza tayari ukiwa na muundo huo umetumika.

Angalia [Hatch Manager](../hatch-manager/) kupakia faili zako mwenyewe za muundo za `.pat` na kuvinjari maktaba nzima.

**SOLID** ni kiingilio cha kawaida kwenye orodha ya muundo, si kisanduku cha kuteua au hali tofauti — kichague kwa njia ile ile ungechagua ANSI31 au muundo mwingine wowote wenye jina.

## Sifa

| Sifa | Maana |
|------|-------|
| Pattern | Jina la muundo, kutoka msamiati wa muundo ulioshirikiwa (angalia [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Hupima nafasi kati ya mistari ya muundo — thamani kubwa zaidi husambaza mistari ya muundo mbali zaidi |
| Pattern Angle | Huzungusha muundo bila kutegemea mpaka |
| Origin X / Origin Y | Mahali marudio ya muundo wenyewe yalipowekwa nanga, katika kuratibu za mchoro |

Kusogeza, kuzungusha, kuakisi, au kupima hatch hubeba nafasi ya muundo wake pamoja nayo, hivyo ujazaji hubaki umepangiliwa na mpaka — huhitaji kuweka upya kipimo au pembe baada ya mabadiliko.

## Uhariri wa Vishikizo vya Mpaka

Hatch iliyochaguliwa hushika mpaka wake kwa njia ile ile ambayo Polyline inavyoshika ncha zake — kishikizo kimoja kwenye kila kona ambapo kingo mbili hukutana, na kimoja katikati ya kila ukingo (kitanzi kilichofungwa kama hatch ya duara au duaradufu badala yake hushika kwenye nukta zake nne za mhimili).

| Kishikizo | Kinachofanya |
|-----------|---------------|
| **Kona** | Husogeza kona hiyo. Ukingo wa moja kwa moja hufuata kwa usahihi; archi hujirekebisha upya ili kuendelea kupita kwenye majirani wake wote wawili; ukingo wa duaradufu au spline unaweza tu kutua mahali fulani kwenye mkunjo wake mwenyewe, hivyo kona hushikamana na nukta iliyo karibu zaidi juu yake |
| **Katikati ya ukingo — ukingo wa mstari, duaradufu, au spline** | Huteleza ukingo mzima; kingo za pande zote mbili hukatwa au kurefushwa ili kubaki zimeunganishwa nayo |
| **Katikati ya ukingo — ukingo wa archi** | **Hupinda** archi kupitia kishale badala ya kuiteleza — ncha zote mbili hubaki mahali zilipokuwa hasa, na hakuna kingine kwenye mpaka kinachosogea |
| **Katikati** (hatch nzima) | Huwasha [Move](../move/) kwa hatch nzima |

Muhtasari wa kuvuta huonyesha mpaka kama mstari uliokatika badala ya ujazaji thabiti wakati unavyovuta — ujazaji wa awali hubaki ukionekana chini hadi utakapoacha, kwani muhtasari unaweza tu kupaka rangi juu ya kilichopo tayari, kamwe kuondoa chochote kutoka kwake.

## DXF — Kiumbe cha HATCH

Hatch **huingizwa** kutoka kwa viumbe vya `HATCH`: KulmanLab husoma jiometri ya mpaka pamoja na jina, kipimo, na pembe ya muundo (misimbo ya kikundi cha DXF 70/41/52) — **haisomi** ufafanuzi wa mistari ya muundo wenyewe ambao huandikwa ndani ya faili. Badala yake, jina la muundo hutafutwa katika maktaba ya muundo ya KulmanLab yenyewe (chaguo-msingi zilizojengwa ndani pamoja na chochote ulichopakia katika [Hatch Manager](../hatch-manager/)). Jina ambalo halipo kwenye maktaba yako hurudi kwa ANSI31 ili mchoro uendelee kusomwa kama umewekwa hatch, na kumbukumbu huandikwa mara moja.

Vitanzi vilivyofungwa na spline vilivyoandikwa na programu nyingine (aina ya ukingo wa mpaka wa DXF 4) bado havisomwi.

Uwekaji mistari wa kujaza **huhamishwa** kwenda DXF kama vitu vya `HATCH`. Mizunguko ya mpaka hutoka pamoja na jina la muundo (msimbo wa kikundi 2), bendera ya ujazo kamili (70), na pembe na kipimo cha uwekaji huo wenyewe (52/41) — na tofauti na njia ya kuingiza, fasili za mistari ya muundo zilizotatuliwa pia huandikwa ndani (78, pamoja na 53/43/44/45/46/79/49). Tofauti hiyo ni ya makusudi: KulmanLab huweza kutafuta jina katika maktaba yake mwenyewe, lakini programu inayopokea faili huenda isiwe na muundo huo, hivyo mistari husafiri nayo.

## Amri Zinazohusiana

- [Hatch Manager](../hatch-manager/) — vinjari maktaba ya muundo na pakia faili za `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — zote hubeba nafasi ya muundo wa hatch pamoja nazo
- [Delete](../delete/) — hufuta hatch bila kuathiri viumbe vilivyounda mpaka wake
