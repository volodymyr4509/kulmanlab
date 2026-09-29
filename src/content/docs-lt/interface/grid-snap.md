---
title: Grid & Snap — brėžinių sulygiavimas su reguliariu tinkleliu KulmanLab CAD
description: KulmanLab CAD Grid ir Snap jungikliai uždeda drobei atskaitos tinklelį ir užrakina žymeklio judėjimą prie tinklelio taškų. Tinklelio žingsnis automatiškai prisitaiko prie dabartinio mastelio, todėl visada rodo apvalias modelio reikšmes.
keywords: [CAD tinklelis, prisitraukimas prie tinklelio, tinklelio žingsnis, braižymo priemonės, kulmanlab, tinklelio taškai, ortogonalus prisitraukimas]
group: interface
order: 1
---

# Grid & Snap

Du perjungiami mygtukai valdymo juostoje leidžia uždėti atskaitos tinklelį ir braižant užrakinti žymeklį prie jo sankirtų.

| Mygtukas | Ką daro |
|----------|---------|
| **Grid** | Rodo drobėje regimą taškų ar linijų tinklelį |
| **Snap** | Užrakina žymeklį prie artimiausio tinklelio taško, kai nėra artimesnio geometrijos prisitraukimo |

Abu jungikliai nepriklausomi — galite rodyti tinklelį be prisitraukimo, prisitraukti nerodydami tinklelio arba naudoti abu kartu.

## Tinklelio ir prisitraukimo įjungimas

Spustelėkite **Grid** arba **Snap** valdymo juostos įrankių juostoje. Aktyvi būsena paryškinama. Nustatymai išlieka tarp sesijų.

Kai įjungtas **Snap**, tinklelis automatiškai perjungia savo rodymą iš linijų į **taškus** — taškai žymi tikslias vietas, prie kurių prisitrauks žymeklis.

## Prisitaikantis tinklelio žingsnis

Tinklelio žingsnis automatiškai keičiasi artinant, kad tinklelio linijos ekrane visada būtų patogiu atstumu (~40 px). Žingsnis visada „gražus" skaičius — 1, 2 ar 5 kartotinis bet kokiu dešimties laipsniu:

| Pavyzdinis mastelis / modelio mastelis | Tinklelio žingsnis |
|----------------------------------------|--------------------|
| Nutolinta (didelė sritis) | 100, 500, 1000 … |
| Vidutinis mastelis | 10, 20, 50 … |
| Priartinta (smulkios detalės) | 1, 2, 5 … |
| Labai arti | 0,1, 0,2, 0,5 … |

Tai reiškia, kad kiekvienas prisitraukimo taškas nusileidžia ant apvalios koordinatės modelio erdvėje — nesikaupia slankiojo kablelio paklaidos.

## Prisitraukimo pirmenybė

**Prisitraukimas prie galų ir sankirtų visada turi pirmenybę prieš tinklelį.** Žymeklis prisitraukia prie tinklelio taško tik tada, kai nėra šalia jokio geometrijos prisitraukimo kandidato (galo, vidurio taško, centro ar sankirtos).

Tai reiškia, kad galite braižyti su įjungtu prisitraukimu prie tinklelio ir vis tiek tiksliai prisitraukti prie esamos geometrijos, kai žymeklis praeina pakankamai arti. Tinklelis yra atsarginė galimybė, o ne pakeitimas.

## Maketo režimas

- **Modelio erdvė** — taškai ar linijos užpildo visą matomą drobės sritį.
- **Maketo (popieriaus) erdvė** — taškai apkerpami iki popieriaus stačiakampio ir neišeina už jo.
- **Vaizdo lango viduje** — tinklelis seka modelio koordinačių sistemą vaizdo lango masteliu, todėl taškai sutampa su tais pačiais modelio vienetais nepriklausomai nuo vaizdo lango didinimo.

## Tipinė darbo eiga

1. Prieš pradėdami brėžinį, kuriam reikia reguliarių tarpų, įjunkite **Grid** ir **Snap**.
2. Priartinkite iki lygio, kur tinklelio žingsnis atitinka norimą žingsnį (pvz., priartinkite, kol taškai bus 10 vienetų vienas nuo kito).
3. Braižykite — žymeklis prisitraukia prie tinklelio taškų automatiškai. Esama geometrija vis tiek prisitraukia įprastai, kai esate arti jos.
4. **Snap** išjunkite, kai reikia laisvo žymeklio judėjimo arba norite prisitraukti tik prie geometrijos.
