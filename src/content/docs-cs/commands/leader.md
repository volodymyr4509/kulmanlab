---
title: Leader — kreslení anotací multileader se šipkou a textem
description: "Příkaz Leader nakreslí anotaci multileader se šipkou, zalomením a popiskem s formátovaným textem. Nové odkazové čáry používají aktuální LeaderStyle a přenášejí se přes DXF."
keywords: [CAD příkaz leader, anotace multileader, odkazová čára CAD, popisek se šipkou, zalomení odkazové čáry, směr textu CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Příkaz `leader` nakreslí anotaci multileader ve čtyřech krocích: šipka dotýkající se prvku, odkazová čára zalomená v zalomení, kotva textu a napsaný popisek. Ze všech příkazů pro anotace je Leader jediný, který obsahuje interaktivní fázi zadávání textu s náhledem blikajícího kurzoru.

## Anatomie multileaderu

```
  ◄── špička šipky  (krok 2 — dotýká se prvku)
      \
       \  odkazová čára
        \
         ●──── zalomení (krok 3) ──── kotva textu (krok 4)
                                      Text popisku  (krok 5)
```

- **Špička šipky** — špičatý konec umístěný na anotovaném prvku.
- **Zalomení (dogleg)** — koleno, kde se odkazová čára láme směrem k textu.
- **Kotva textu** — kde je popisek umístěn. Text se automaticky zarovná doleva nebo doprava.

## Kreslení odkazové čáry

1. Napište `leader` do terminálu nebo klikněte na tlačítko **Leader** v panelu nástrojů.
2. **Klikněte na špičku šipky**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na zalomení** — ohyb odkazové čáry. Úhel se zamyká na násobky 45°; napište délku a stiskněte **Enter** pro přesné umístění. Nebo napište `X,Y` pro zadání absolutní souřadnice.
4. **Klikněte na pozici textu** — kde se popisek ukotví. Platí stejné možnosti: kliknutí, zámek úhlu + délka, nebo `X,Y`.
5. **Napište text popisku** — náhled na plátně se živě aktualizuje s blikajícím kurzorem. Stisknutím **Enter** umístíte.

## Zadávání souřadnic (všechny fáze bodů)

V kterémkoli kroku výběru bodu (špička, zalomení, pozice textu) můžete místo klikání napsat přesnou souřadnici:

1. Napište hodnotu X (číslice, `.` nebo `-`).
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`, čímž potvrdí zamčené X.
3. Napište hodnotu Y.
4. Stisknutím **Enter** bod umístíte.

## Zamykání úhlu (kroky 3 a 4)

Po každém umístěném bodu příkaz přichytává k osám po 45°, pokud je kurzor dostatečně daleko. Při zamknutí:
- Náhled přiskočí k ose.
- Napište délku a stiskněte **Enter**, čímž další bod umístíte přesně na tuto vzdálenost.

Zamykání úhlu a zadávání souřadnic se vzájemně vylučují — jakmile napíšete číslici bez předchozí `,`, příkaz ji chápe jako vzdálenost (zámek úhlu musí být aktivní). Chcete-li místo toho zadat absolutní souřadnici, začněte číslem X následovaným čárkou.

## Úprava textu popisku

Při psaní popisku v kroku 5 můžete text před umístěním procházet a upravovat:

| Klávesa | Akce |
|---------|------|
| Jakýkoli tisknutelný znak | Vloží na pozici kurzoru |
| `←` / `→` | Posune kurzor doleva nebo doprava |
| `Backspace` | Smaže znak vlevo od kurzoru |
| `Delete` | Smaže znak vpravo od kurzoru |
| `Enter` | Umístí odkazovou čáru |

## Automatický směr textu

Zarovnání textu se přizpůsobuje poloze kurzoru vůči zalomení:

| Poloha kurzoru | Směr textu |
|----------------|-----------|
| **Vpravo** od zalomení | Zleva doprava od kotvy textu |
| **Vlevo** od zalomení | Zprava doleva (ukotveno na pravé straně) |

Není třeba nic ručně upravovat — přesuňte kurzor na stranu, kde chcete popisek, a zarovná se správně.

## Přehled kláves

**Fáze bodů (špička, zalomení, pozice textu)**

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí psaní souřadnice X (pak `,` pro zamknutí X a zadání Y) |
| `,` | Potvrdí X a přejde na zadávání Y |
| `0`–`9`, `.`, `-` | Sestavuje vzdálenost při zamknutém úhlu |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí napsanou souřadnici nebo vzdálenost |

**Fáze zadávání textu**

| Klávesa | Akce |
|---------|------|
| Tisknutelný znak | Vloží na pozici kurzoru |
| `←` / `→` | Posune kurzor |
| `Backspace` | Smaže vlevo |
| `Delete` | Smaže vpravo |
| `Enter` | Umístí odkazovou čáru |

| Klávesa | Akce |
|---------|------|
| `Escape` | Zruší a vrátí se ke kroku 2 |

## Úprava existující odkazové čáry

**Dvojitým kliknutím** na umístěný multileader znovu otevřete textový editor v **rozšířeném** režimu. V rozšířeném režimu můžete použít tučné, kurzívu, podtržení a přeškrtnutí spolu s přepsáním písma nebo výšky u jednotlivých znaků a vkládat zalomení řádků klávesou `Enter`. Stisknutím **Escape** potvrdíte a zavřete.

Úplný přehled najdete v [Textový editor — rozšířený režim](../../interface/text-editor/#rozšířený-režim).

## Přidávání a odebírání ramen

- Přidání dalšího ramene se šipkou k existující odkazové čáře: [LeaderAdd](../leader-add/)
- Odebrání ramene z odkazové čáry, která má dvě nebo více ramen: [LeaderRemove](../leader-remove/)
- Volba výchozí šipky, zalomení, uchycení a textu pro nové odkazové čáry: [LeaderStyle](../leader-style/)

## Kompatibilita s DXF

KulmanLab čte a zapisuje objekty `MLEADER` a jejich pojmenované záznamy `MLEADERSTYLE`. Šipky, ramena, geometrie zalomení, obsah a formátování textu, uchycení, otočení, rámeček i přidružený styl se zachovávají tam, kde to DXF podporuje.
