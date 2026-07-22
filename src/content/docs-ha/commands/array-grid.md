---
title: Umarnin Array Grid — Maimaita Abubuwa a Layuka da Ginshiƙai
description: Umarnin Array Grid yana ƙirƙirar grid mai kusurwa huɗu na kwafi daga abubuwan da aka zaɓa — rubuta adadin layuka, ginshiƙai, da tazara tsakaninsu kai tsaye a tashar umarni, ba tare da bukatar danna kowane tabo ba.
keywords: [umarnin array CAD, arraygrid, array mai kusurwa huɗu CAD, tsarin grid CAD, maimaita abubuwa CAD, kwafin array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Umarnin `ArrayGrid` yana ƙirƙirar grid mai kusurwa huɗu na kwafi daga abubuwan da aka zaɓa — shigar da adadin layuka, adadin ginshiƙai, da tazara tsakaninsu, duk ana rubuta su a tashar umarni. Zaɓin asali yana zama a cikin sel layi 0, ginshiƙi 0; kowane sel dabam kwafi ne mai motsawa.

## Hanyoyi biyu na farawa

**Zaɓi tukuna, sannan array** — zaɓi abubuwa tukuna, sannan kunna:

1. Zaɓi wani abu ɗaya ko fiye a kan canvas.
2. Rubuta `arraygrid` a tashar umarni (`arr` kaɗai ya isa — babu shakku) ko danna maɓallin kayan aiki na **Array Grid**.
3. Rubuta adadin **layuka** ka danna **Enter**.
4. Rubuta adadin **ginshiƙai** ka danna **Enter**.
5. Rubuta **tazara tsakanin layuka** ka danna **Enter**.
6. Rubuta **tazara tsakanin ginshiƙai** ka danna **Enter** — ana ƙirƙirar grid nan take.

**Kunna, sannan zaɓi** — fara umarnin ba tare da zaɓi ba:

1. Rubuta `arraygrid` ko danna maɓallin kayan aiki.
2. **Zaɓi abubuwa** — danna don canza zaɓi na kowane abu, ko ja don zaɓi ta yanki.
3. Danna **Enter** ko **Space** don tabbatar da zaɓi.
4. Ci gaba da layuka → ginshiƙai → tazarar layi → tazarar ginshiƙi kamar yadda ke sama.

```
  Layuka 2 x ginshiƙai 3:

  [B] [B] [B]   <- layi 1 (kwafi masu motsawa)
  [A] [A] [A]   <- layi 0: zaɓin asali, kwafi zuwa dama
```

> Tashar umarni tana bukatar haruffa kaɗan kawai da suka isa su zama babu shakku — rubuta `arr` ka danna **Enter** yana kunna Array Grid kai tsaye, domin babu wani sunan umarni da ya fara da waɗannan haruffa uku (Arc, Area, Align, da Angle duk sun bambanta tun farko).

## Layuka, ginshiƙai, da tazara

| Tambaya | Yana karɓa | Bayanai |
|---------|-----------|---------|
| Layuka | Lambobi masu kyau gaba ɗaya (1, 2, 3…) | Lambobi kaɗai — babu tabon ƙima ko alama |
| Ginshiƙai | Lambobi masu kyau gaba ɗaya (1, 2, 3…) | Lambobi kaɗai — babu tabon ƙima ko alama |
| Tazarar layi | Lamba mai alama (misali `10`, `-5.5`) | Nisa tsakanin layuka; korau yana juya shugabanci |
| Tazarar ginshiƙi | Lamba mai alama (misali `10`, `-5.5`) | Nisa tsakanin ginshiƙai; korau yana juya shugabanci |

Da layi 1 da ginshiƙi 1, ba a ƙirƙirar kwafi ba — umarnin yana fita ba tare da canza zanen ba.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Tabbatar da zaɓi ka ci gaba zuwa tambayar layuka |
| `0`–`9` | Shigar da lambobi don layuka ko ginshiƙai |
| `0`–`9`, `.`, `-` | Shigar da lambobi don tazarar layi/ginshiƙi (`-` kawai a matsayin harafi na farko) |
| `Backspace` | Share harafin ƙarshe da aka rubuta na tambayar yanzu |
| `Enter` | Tabbatar da tambayar yanzu ka ci gaba zuwa ta gaba |
| `Escape` | Share ƙimomin layuka/ginshiƙai/tazara da aka rubuta ka koma zuwa mataki na zaɓi |

## Zaɓi a lokacin umarnin

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana canza zaɓi na abin da ke ƙarƙashin mai nuni |
| **Ja dama** (mai tsauri) | Yana ƙara abubuwan da suke cikakke cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Yana ƙara abubuwan da suke taɓa gefen akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓi ya ci gaba zuwa tambayar layuka |

## Bayan array

Ana ƙara sabbin kwafin zuwa zanen kuma umarnin yana fita — ana wanke zaɓin asali. Gudanar da **Array Grid** kuma, ko fara sabon umarni.

## Array Grid da Copy

| | Array Grid | Copy |
|---|-----------|------|
| Zaɓen tabo | Babu — ana rubuta layuka, ginshiƙai, da tazara | Ana danna (ko rubuta) tabon tushe da manufa |
| Kwafin da aka ƙirƙira | Layuka × Ginshiƙai − 1 | Daidai 1 ga kowane aikin kwafi |
| Tsari | Grid mai kusurwa huɗu na yau da kullum | Ko'ina, a kowane nisa |
| Mafi kyau don | Maimaita naúra ɗaya a cikin tsari na yau da kullum (ramuka, tayal, na'urorin haɗi) | Kwafi ɗaya kaɗai a matsayi na bazata |

## Abubuwan da ake goyon baya

Array Grid yana aiki akan kowane nauʼin abu. Dukkan abubuwa suna aiwatar da `translate(dx, dy)` a ciki — aikin da [Copy](../copy/) da [Move](../move/) ke amfani da shi — don haka babu wanda aka bari.
