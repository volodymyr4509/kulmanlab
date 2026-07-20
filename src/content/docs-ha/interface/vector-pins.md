---
title: Vector Pins — Snap Tare da Layukan Ƙaʼida ta Tabon da Aka Ɗora
description: Vector Pins suna barka ka ɗora tabon snap ta riƙe shi na rabin daƙiƙa, sannan ka bin mai nuni tare da layukan ƙaʼida a kwance da a tsaye masu ɗigo-ɗigo ta cikin tabon da aka ɗora — daidaita sabuwar geometry da tabon da ke akwai ba tare da layukan gini ba.
keywords: [vector pins, bin diddigin snap na abubuwa, layukan ƙaʼida, bin diddigin daidaita, bin diddigin snap CAD, layukan gini, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** taimako ne na zane wanda ke barka ka daidaita sabuwar geometry da tabon da ke akwai ba tare da zana layukan gini ba. Riƙe tabon snap na rabin daƙiƙa don *ɗora* ta — sinar tana kwaɓe layukan ƙaʼida a kwance da a tsaye marasa gani, kuma mai nuni yana snap zuwa gare su a kowane lokaci da ya kusa. Wannan shine kamancin KulmanLab CAD na bin diddigin snap na abu a manhajojin CAD na tebur.

Ana sarrafa fasalin da maɓallin **Pins** a control bar (kusa da Grid, Snap, da ANGL). Yana **an kunna ta tsoho**, kuma saitin yana wanzuwa tsakanin zaman.

## Ɗora tabo

1. Fara umarni da ke tambayar tabo — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), da sauransu.
2. Motsa mai nuni a kan tabon snap na geometry da ke akwai — alamar ƙarshe, tsakiya, ko tsakiyar da'ira.
3. **Riƙe mai nuni ba tare da motsi ba na milliseconds 500.** Alamar tana zama **murabbaʼi** cikakke mai launin accent — tabon yanzu an ɗora ta.
4. Sake maimaitawa don ɗora kowace tabo da kake bukata. Kowace sina tana ci gaba da kwaɓe layukan ƙaʼidarta.

Ɗorawa kuma tana aiki a waje na umarni: riƙewa a kan **grip** na abu da aka zaɓa yana ɗora ta a irin hanya ɗaya.

## Bin diddigi tare da layukan ƙaʼida

Kowace tabon da aka ɗora tana kwaɓe layukan ƙaʼida biyu marasa gani — ɗaya **a kwance** da ɗaya **a tsaye** — ta cikin daidaitawarta daidai. Yayin da kake motsa mai nuni:

- A cikin **12 px** na layin a tsaye na sina, mai nuni yana snap zuwa gare shi: ana zana layin accent mai ɗigo-ɗigo ta cikin sinar a fadin dukkan kallon, kuma **alamar X** tana nuna matsayin da aka snap. Daidaitawar X ɗinka yanzu *daidai* ce da X na sinar.
- Haka nan ga layin a kwance ga daidaitawar Y na sinar.
- Kusa da layi ɗaya na kowace shugabanci — ko da daga **sinoni biyu daban-daban** — mai nuni yana snap zuwa **mahaɗarsu**, kuma ana nuna layukan ɗigo-ɗigo biyun. Wannan yana sanya tabon daidai a (X na sina A, Y na sina B).

```
                    ┆ (mai ɗigo-ɗigo, layin a tsaye na sina ■)
                    ┆
   ■ sina A ┄┄┄┄┄┄┄┄ ✕ ← mai nuni an snap zuwa mahaɗar:
                    ┆    X daga sina B, Y daga sina A
                    ┆
                    ■ sina B
```

Ana ɗaukar daidaitawa da aka snap ta kai tsaye daga sinar, don haka daidaitawa madaidaici ce — babu zagaya ko ɓacewar floating-point.

## Fifikon snap

Snaps na geometry na yau da kullum — ƙarshe, tsakiya, tsakiyar da'ira, da mahaɗa — **suna da fifiko** fiye da layukan ƙaʼida na sinoni. Idan mai nuni ya fi kusa da snap na tabo fiye da layin ƙaʼida, snap na tabon yana nasara. Bin diddigin sina yana cika gibin tsakanin geometry, ba ya taɓa toshe snap zuwa geometry da kanta.

## Haɗuwa da kulle-kusurwa

Vector pins suna aiki tare da bin diddigin kusurwa (maɓallin **ANGL** a control bar). Idan umarni ya kulle mai nuni zuwa radiyo na bin diddigin kusurwa:

- Mai nuni yana ci gaba da kwaɓe zuwa shugabancin da aka kulle.
- Snap na sina yana canza zuwa niyya **mahaɗar radiyo da aka kulle da layukan ƙaʼida na sinoni** (kawai gaba na asalin radiyo).

Wannan yana amsa tambayoyi kamar *"ina shugabancin 45° daga tabona na ƙarshe ke haɗuwa da tsayin tsakiyar wannan da'irar?"* — kulle kusurwar, kuma mai nuni yana danna cikin tabon haɗuwar. Snap na radiyo yana aiki a kowace umarni tare da kulle-kusurwa: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader, da ViewportCopy.

## Rayuwar sina

Sinoni suna don aikin da ake yi a yanzu, ba a matsayin alamomi na dindindin ba. Ana wanke dukkan sinoni idan:

| Lamari | Me yasa |
|-------|-----|
| **Sabon umarni** ya kunna | Kowace aiki yana farawa da saiti mai tsabta na ƙaʼidoji |
| An danna **Escape** | Hali na soke-komai na yau da kullum |
| Maɓallin **Pins** an kashe | Kashe fasalin yana cire yanayinsa |
| Sauya tsakanin **model da paper space** | Daidaitawar sina takamaiman ce ga sarari ɗaya |

A cikin umarni guda ɗaya za ka iya ɗora, zana, sake ɗora, ka ci gaba — sinoni suna wanzuwa a kowace dannawa na umarni mai tabo da yawa kamar Polyline.

## Tsarin aiki na yau da kullum

Zana layi wanda ke farawa kai tsaye ƙasa da tsakiyar da'ira:

1. Rubuta `line` (ko danna maɓallin Line).
2. Riƙe **alamar tsakiya** na da'irar na rabin daƙiƙa — tana zama murabbaʼi na accent.
3. Motsa mai nuni ƙasa: kusa da axis a tsaye na da'irar, mai nuni yana kulle zuwa layin ƙaʼida mai ɗigo-ɗigo.
4. Danna — layin yana farawa daidai a daidaitawar X na da'irar.
5. Ci gaba da layin kamar yadda aka saba; sina tana ci gaba da samuwa ga tabon na gaba.

## Bayanan ƙari

- Riƙewar 500 ms yana aiki a kan kowace alamar snap da mai nuni zai iya kaiwa — ciki har da tabon snap da suke bayyana a tsakiyar umarni.
- Riƙewar tabon da an riga an ɗora ba ta yin komai; babu cire-ɗorawa ta riƙewa. Wanke sinoni da **Escape** ko ta kashe **Pins**.
- Nisa na snap ga layukan ƙaʼida iri ɗaya ce da pixels 12 na allo da ake amfani da su ga snap na tabo na yau da kullum, don haka ji yana daidaici a kowace matakin zoom.
- Tabon da aka ɗora ana rinda su a matsayin murabbaʼan accent a maimakon alamun snap ɗinsu na yau da kullum.
