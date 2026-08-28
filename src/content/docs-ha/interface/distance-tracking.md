---
title: Binciken nisa — Rubuta tsayi daidai daga wurin da aka ɗora fil
description: Maɓallin Dist yana barin filin vector na baya-bayan nan ya zama sandar da binciken kusurwa yake awo daga gare ta, don ka rubuta tsayi daidai kuma ka ajiye wuri a nisa da kusurwa madaidaita daga wurin da yake nan — har da wuri na farko na siffa.
keywords: [shigar da nisa CAD, rubuta tsayi daidai CAD, maɓallin Dist, binciken nisa daga fil, binciken polar CAD, shigar da nisa kai tsaye, kulmanlab]
group: interface
order: 3
---

# Binciken nisa

**Binciken nisa** yana ba ka damar ajiye wuri ta hanyar rubuta tsayi daidai maimakon dannawa. Ana sarrafa shi da maɓallin **Dist** a kan sandar sarrafawa, kusa da [Pins](../vector-pins/) da ANGL, kuma yana **kunne ta asali**, saitin kuwa yana ci gaba tsakanin zaman aiki.

Abin da yake ƙarawa ƙunci ne amma mai amfani: yana barin **filin vector na baya-bayan nan** ya zama sandar da binciken kusurwa yake awo daga gare ta. Ba tare da shi ba, umarni na iya awo daga wurin da shi kansa ya riga ya tara kaɗai — ma'ana wuri na *farko* na siffa ba shi da komai da zai auna daga gare shi.

## Maɓallai uku suna aiki tare

Binciken nisa ba ya tsayawa shi kaɗai. Sauran maɓallai biyu dole su kasance a daidai yanayi kafin ka iya rubuta tsayi:

| Maɓalli | Aikinsa |
|---------|---------|
| **Pins** | Yana ba da wurin ishara. Ka sa alamar linzami a kan wurin kama na daƙiƙa 500 don ɗora fil — duba [Vector Pins](../vector-pins/). |
| **ANGL** | Yana ba da kusurwa. Binciken nisa yana samuwa ne kawai idan alamar linzami ta kulle a kan kusurwa, don haka dole ANGL ta kasance a wani mataki (10°, 20°, 30°, 45°, 90°) ba a Off ba. |
| **Dist** | Yana ba da izinin amfani da fil a matsayin sanda maimakon wurin umarnin kansa kawai. |

Idan Pins da Dist suna kunne amma ANGL tana **Off**, ba abin da zai faru: babu wata hanya da aka kulle da za a auna tsayi a kanta.

## Yadda Pins da Dist suke haɗe

Binciken nisa ba shi da ma'ana idan fil ɗin a kashe suke, don haka maɓallan biyu suna tafiya tare:

- **Kunna Pins** yana kuma **kunna Dist**.
- **Kashe Pins** yana kuma **kashe Dist**.
- **Kunna Dist** yana kunna **Pins** idan bai riga ya kasance a kunne ba.
- **Kashe Dist** yana barin **Pins a kunne**.

Don haka Dist ba zai taɓa yin aiki ba yayin da Pins yake a kashe, amma za ka iya riƙe binciken fil don daidaitawa sannan ka kashe binciken nisa — abu mai amfani idan kana son layukan ishara ba tare da alamar linzami ta kulle a kan fil ba alhali kana nufin kulle a kan wurinka na ƙarshe.

## Ajiye wuri a nisa daidai

1. Kunna **Pins** da **Dist**, sannan ka saita **ANGL** a wani matakin kusurwa.
2. Fara umarnin da yake neman wuri — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) da makamantansu.
3. **Ɗora fil a wurin ishara**: sa alamar linzami a kan wurin kama da yake nan har alamar ta zama murabba'i cikakke.
4. Kai alamar linzami nesa da fil, kusan a kusurwar da kake so. Idan ta kusanci ɗaya daga cikin matakan ANGL, hanyar takan **kulle** — alamar bincike takan bayyana daga filin.
5. **Rubuta tsayin** sannan ka danna **Enter** ko **Space**. Za a ajiye wurin daidai a wannan nisa daga filin, a kan kusurwar da aka kulle.

Umarnin da ke tashar yana gaya maka lokacin da za ka iya rubutawa. Idan an kulle, yana karantawa:

```
pick start point or enter length: [ ]
```

kuma darajar da ka rubuta takan bayyana cikin madauri.

## Me ya sa wuri na farko yake da muhimmanci

Wannan ita ce yanayin da in ba haka ba zai kasance ba mai yiwuwa. A ce ana son layi ya fara daidai naúrar 250 zuwa dama daga wani lungu da yake nan:

1. Fara [Line](../../commands/line/).
2. Ɗora fil a lungun da yake nan.
3. Ka nufi dama har hanyar ta kulle a 0°.
4. Rubuta `250`, danna **Enter**.

Yanzu layin yana farawa daga wurin da yake nisan naúrar 250 daga lungun — babu jiometri na taimako, babu lissafi. Ba tare da Dist ba, umarnin Line bai riga ya tara wani wuri ba, don haka babu abin da za a *auna daga gare shi* don tsayin da aka rubuta — za ka iya dannawa kusan-kusan kawai, ko ka zana layin taimako sannan ka goge shi daga baya.

Ga wuri na **biyu da na gaba**, umarnin ya riga yana da nasa sandar (wurin da ya gabata), kuma ita ce ake amfani da ita da farko. Ana duba filin a matsayin madadin ne kawai idan sandarka ba ta kulle ba, don haka ɗora fil ba ya ƙwace kullen da ka riga ka samu.

## Rubutawa yana daskarar da kullen

Da zarar ka fara buga lambobi, sandar takan daina canjawa. Duk wurin da yake kulle sa'ad da lamba ta farko ta shigo shi ne zai kasance sanda har sai ka tabbatar ko ka share filin — motsa linzami tsakiyar rubutawa ba zai matsar da awon a shiru zuwa wani fil ko zuwa wurin umarnin kansa ba.

## Jagorar madannai

| Maɓalli | Aiki |
|---------|------|
| `0`–`9`, `.` | Ƙara a kan tsayin |
| `-` | Tsayi mara kyau — yana juya hanya a kan kusurwar da aka kulle (harafi na farko kawai) |
| `Backspace` | Share harafi na ƙarshe |
| `Enter` / `Space` | Ajiye wurin a tsayin da aka rubuta |
| `Escape` | Soke umarnin; ana share kullen da darajar da aka rubuta |

Rubuta tsayi zaɓi ne. Idan hanyar ta kulle, har yanzu za ka iya dannawa, kuma za a saka wurin a kan kusurwar da aka kulle.

## Inda yake aiki

Binciken nisa yana samuwa a kowane umarni da yake neman ka zaɓi wurare:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) da [ViewportCopy](../../commands/viewport-copy/).

## Duba kuma

- [Vector Pins](../vector-pins/) — ɗora fil a wurare da bincike a kan layukan ishararsu
- [Grid & Snap](../grid-snap/) — sauran abubuwan taimakon daidaito a sandar sarrafawa
- [Distance](../../commands/distance/) — auna nisan da yake nan maimakon rubuta sabo
