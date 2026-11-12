---
title: "Shigar da coordinates — rubuta maki daidai, na dangi da na polar"
description: "Duk inda umarni ya nemi maki, rubuta shi maimakon dannawa: X,Y don wuri daidai, @X,Y don aunawa daga maki na ƙarshe, da nisa<kusurwa don maki na polar. Maɓallin Rel yana sa kowane maki da aka rubuta ya fara a matsayin na dangi."
keywords: ["shigar da coordinates CAD", "coordinates na dangi CAD", "coordinates na polar CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Shigar da coordinates

Duk inda umarni ya nemi maki — farkon [Line](../../commands/line/), kusurwar [Rectangle](../../commands/rectangle/), maki na tushe na [Move](../../commands/move/), ko grip da kake ja — za ka iya rubuta shi maimakon dannawa. Fara rubuta lamba kuma tashar umarni tana nuna abin da kake rubutawa; danna **Enter** ko **Space** don sanya maki.

## Hanyoyi huɗu na rubuta maki

| Kana rubutawa | Makin yana |
|---|---|
| `100,50` | A X 100, Y 50 |
| `@100,50` | 100 a X da 50 a Y daga maki na ƙarshe |
| `100<45` | 100 daga asali, a 45° |
| `@100<45` | 100 daga maki na ƙarshe, a 45° |

Kusurwoyi suna cikin digiri, saɓanin agogo daga ginshiƙin X, don haka `@50<90` shi ne 50 sama kai tsaye kuma `@50<180` 50 hagu. Kowace ƙima na iya zama mara kyau (negative).

## Maki na ƙarshe

`@` yana aunawa daga maki na ƙarshe da aka danna ko aka rubuta a kowane umarni — dannawa ta ƙarshe ta umarnin da ya gabata tana ƙidaya, haka ma grip da ka ja yanzu. Idan babu maki na ƙarshe tukuna, ana karanta `@100,50` a matsayin `100,50`. Ana manta maki na ƙarshe idan ka sauya tsakanin model space da layout, da kuma idan aka buɗe zane.

## Rel: na dangi a tsohuwar saiti

Maɓallin **Rel** a sandar sarrafawa yana sa kowane maki da aka rubuta ya fara a matsayin na dangi: da zarar ka rubuta lamba ta farko, ana sa `@` a gabanta, don haka `100,50` ya zama `@100,50`. Danna **Backspace** a kan `@` don mayar da wannan maki ɗaya cikakke. Idan babu maki na ƙarshe tukuna, ba a ƙara `@`. Rel a kashe yake a tsohuwar saiti kuma ana tuna shi tare da sauran maɓallan sandar sarrafawa.

## Maɓallai yayin rubutu

| Maɓalli | Tasiri |
|---|---|
| `0`–`9`, `.`, `-` | Rubuta lambar; `-` a farkonta kawai |
| `@` | Mayar da makin na dangi, a farkon X |
| `,` ko **Space** | Gama X ka koma Y |
| `<` | Gama X a matsayin nisa ka koma kusurwarsa |
| **Enter** ko **Space** | Sanya makin idan Y yana da ƙima |
| **←** **→** **Home** **End** | Matsar da kibiya cikin ƙimar da ake rubutawa |
| **Backspace** | Share kafin kibiya; a farkon Y mara komai, koma X |

Makin da ba za a iya karanta shi a matsayin lambobi ba yana zama a tashar umarni don ka gyara shi. Kowane maki da aka rubuta yana barin layi a tarihin tashar umarni kamar yadda ka rubuta shi — `An rubuta @100<45` — kafin layin umarnin da ke faɗin inda ya sauka.

## Makin da aka rubuta da bin diddigin kusurwa

Idan kibiya ta kulle a kan hasken bin diddigin kusurwa, rubuta lamba yana ba da nisa tare da wannan haske maimakon X. Rubuta `@` da farko yana fara cikakken maki, don haka `@100,50` yana aiki ko a kan haske da aka kulle.

---

*Masu alaƙa: [Binciken nisa](../distance-tracking/) don rubuta tsawo tare da hanyar da aka kulle, da [Vector Pins](../vector-pins/) don aunawa daga makin da aka maƙala.*
