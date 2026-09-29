---
title: Align — přesun, otočení a změna měřítka objektů pomocí dvojic bodů
description: Příkaz Align přemístí vybrané objekty pomocí jedné nebo dvou dvojic zdrojových/cílových bodů a spojí přesun, otočení a volitelné rovnoměrné změnění měřítka do jedné operace. Funguje jako kombinace Move + Rotate + Scale.
keywords: [CAD příkaz align, zarovnání objektů CAD, přesun otočení měřítko, zarovnání pomocí dvojic bodů, kulmanlab]
group: edit
order: 6
---

# Align

Příkaz `align` přemístí vybrané objekty pomocí jedné nebo dvou dvojic zdrojových/cílových bodů. S jednou dvojicí se chová přesně jako [Move](../move/) (pouze přesun). Se dvěma dvojicemi výběr také otočí tak, aby směr zdroj–zdroj odpovídal směru cíl–cíl, a volitelně změní měřítko tak, aby délka zdrojového úseku odpovídala délce cílového úseku — přesun, otočení a změna měřítka v jediné operaci.

## Dva způsoby spuštění

**Nejdřív vybrat, pak zarovnat** — nejprve vyberte objekty a potom příkaz spusťte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `align` do terminálu nebo klikněte na tlačítko **Align** v panelu nástrojů.
3. **Klikněte na první zdrojový bod (S1)**, poté **na první cílový bod (D1)**.
4. **Klikněte na druhý zdrojový bod (S2)**, nebo stisknutím **Enter** či **Space** ihned použijte zarovnání pouze s přesunem.
5. **Klikněte na druhý cílový bod (D2)**.
6. Odpovězte na dotaz o měřítku: stisknutím **Y** změníte měřítko, stisknutím **N** / **Enter** ponecháte původní velikost.

**Nejdřív spustit, pak vybrat** — příkaz spusťte bez výběru:

1. Napište `align` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — kliknutím přepínáte jednotlivé objekty, tažením vybíráte podle oblasti.
3. Výběr potvrďte stisknutím **Enter** nebo **Space**.
4. Pokračujte S1 → D1 → S2 → D2 → dotaz na měřítko jako výše.

> Terminál potřebuje jen tolik písmen, aby byl příkaz jednoznačný — napsáním `al` a stisknutím **Enter** se Align spustí přímo, protože žádný jiný příkaz nezačíná těmito dvěma písmeny.

## Anatomie zarovnání

```
  Zdrojové body (na objektech):        Cílové body:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Výsledek: výběr se posune tak, aby S1 dosedl na D1, poté
  se otočí kolem D1, aby směr S1→S2 odpovídal směru D1→D2
  — a pokud zvolíte změnu měřítka, upraví se velikost tak,
  aby |S1S2| odpovídalo |D1D2|.
```

V každém kroku sleduje kurzor živý náhled: při umísťování D1 náhled přesunu, poté otočený (čárkovaný) náhled při umísťování D2.

## Zarovnání jedním bodem (pouze přesun)

Po umístění D1 stiskněte **Enter** nebo **Space** místo kliknutí na druhý zdrojový bod. Výběr se posune o vektor S1→D1 — bez otočení a změny měřítka — shodně s [Move](../move/), kde S1 je základní bod a D1 cíl.

## Zarovnání dvěma body (přesun + otočení + volitelná změna měřítka)

Po umístění S2 i D2:

- **Úhel otočení** — rozdíl mezi cílovým směrem (`D1 → D2`) a zdrojovým směrem (`S1 → S2`).
- **Dotaz na měřítko** — zobrazí se `scale objects to alignment points? [Yes/No] <N>`, s výchozí volbou **No**:
  - Stisknutím **Y** se výběr navíc rovnoměrně zvětší/zmenší kolem D1 tak, aby vzdálenost `S1–S2` odpovídala vzdálenosti `D1–D2`.
  - Stisknutím **N** nebo **Enter** ponecháte původní velikost — použije se jen přesun a otočení.

Stisknutí klávesy u dotazu na měřítko použije zarovnání okamžitě — po zvolení Yes nebo No už žádné další potvrzení nenásleduje.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr a přejde do fáze S1 |
| `Enter` / `Space` (v kroku S2) | Přeskočí otočení — použije zarovnání pouze s přesunem pomocí S1 a D1 |
| `Y` | Použije zarovnání se změnou měřítka |
| `N` / `Enter` (u dotazu na měřítko) | Použije zarovnání bez změny měřítka |
| `Escape` | Při výběru bodů: zahodí je a vrátí se do fáze výběru; bez výběru: zruší příkaz |

## Výběr během příkazu

Když příkaz začíná ve fázi výběru:

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepíná objekt pod kurzorem do výběru / z výběru |
| **Tažení doprava** (přísný výběr) | Přidá objekty, které leží celé uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Přidá objekty, které protínají hranici rámečku |
| **Enter** / **Space** | Potvrdí výběr a přejde do fáze S1 |

## Po zarovnání

Zarovnané objekty zůstanou vybrané na nové pozici a příkaz se automaticky ukončí — spusťte **Align** znovu, nebo přepněte na [Move](../move/), [Rotate](../rotate/) či [Scale](../scale/) bez nového výběru.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Dvojice bodů | 1 (jen přesun) nebo 2 (přesun + otočení + měřítko) | 1 (jen přesun) |
| Otočení | Ano, s druhou dvojicí bodů | Ne |
| Změna měřítka | Volitelně, s druhou dvojicí bodů | Ne |
| Nejvhodnější pro | Nasazení jednoho tvaru na druhý pomocí referenčních bodů | Jednoduché přemístění |

## Podporované objekty

Align funguje na všech typech objektů podporovaných příkazy Move, Rotate a Scale — postupně se použijí stejné operace `translate`, `rotate` a `scale`, které tyto příkazy používají, takže nic není vyloučeno.
