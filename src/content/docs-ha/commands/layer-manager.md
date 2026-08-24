---
title: LayerManager — Sarrafa Dukkan Layers a Tebur Guda
description: Umarnin LayerManager yana buɗe tebur na kowace layer a cikin zane, yana barin ka ƙara layers da gyara daskarewa, kullewa, bugawa, launi, kaurin layi da nau'in layi na kowanne a wurin.
keywords: [layer manager, tebur na layer CAD, sarrafa layers CAD, ƙara layer CAD, daskare kulle buga layer, sarrafa layer kulmanlab]
group: layer
order: 1
---

# LayerManager

Umarnin `LayerManager` yana buɗe tebur da ke lissafa kowace layer a cikin zane, tare da saitunanta na **Freeze**, **Lock**, **Plot**, **Color**, **Lineweight** da **Linetype** waɗanda ake iya gyara kai tsaye a jere. Shi ne babban wurin ƙara sabbin layers da daidaita yadda waɗanda suke akwai ke aiki — sauran umarnin layer ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) kowanne yana yin abu ɗaya takamaimai ba tare da buɗe shi ba.

## Buɗe Layer Manager

- Rubuta `LayerManager` a tasha, **ko**
- Danna maɓallin **Layer Manager** a cikin panel ɗin layer.

Akwatin yana buɗewa a matsayin panel mai iyo; ba a buƙatar zaɓar komai tukuna.

## Teburin layer

| Rukuni | Abin da yake sarrafawa |
|--------|-------------------|
| Name | Sunan layer, ana nuna shi don karantawa kawai a tebur (ana saita shi sau ɗaya, lokacin ƙirƙira) |
| Freeze | Yana ɓoye abubuwan layer kuma yana cire su daga zaɓi har sai an cire daskarewa |
| Lock | Yana hana gyara abubuwan da ke kan layer, ba tare da ɓoye su ba |
| Plot | Ko ana haɗa abubuwan layer lokacin bugawa ko fitarwa zuwa PDF |
| Color | Launin ACI na layer — danna samfurin launi don buɗe mai zaɓar launi |
| Lineweight | Kaurin layin layer — danna chip ɗin don buɗe mai zaɓar kaurin layi |
| Linetype | Tsarin ɗigo na layer — danna chip ɗin don buɗe mai zaɓar nau'in layi |

Canza Freeze, Lock ko Plot yana fara aiki nan take — babu wani mataki na ajiyewa daban. Abubuwan da aka saita zuwa **ByLayer** don launi, kaurin layi ko nau'in layi (tsoho) suna ɗaukar abin da ka saita a nan; abubuwan da ke da nasu ƙimar ba sa shafuwa.

## Ƙara layer

1. Danna **+ Add Layer** a ƙasan tebur.
2. Rubuta suna sannan ka danna **Enter** don tabbatarwa, ko **Escape** don sokewa.

Sunayen layer na iya ƙunsar haruffa, lambobi, sarari da `_`, `-`, `$`. Sunan da babu komai a ciki, wanda ake amfani da shi tuni, ko mai ɗauke da wani harafi dabam ana ƙi shi da kuskure a wurin, kuma jerin yana nan a buɗe don sake gwadawa.

Sabbin layers suna farawa **ba a daskare su ba, ba a kulle su ba, ana iya buga su**, tare da launi 7 (fari/baƙi), Lineweight na Default da Linetype na Continuous — tsoffin ƙimomi iri ɗaya da [Import](../import/) ke bai wa layer `0` a cikin zane mara komai.

## Abin da ba za ka iya yi a nan ba

Babu maɓallin gogewa — ba a taɓa cire layers bayan an ƙirƙira su ba, sai dai a daskare su ko a bar su ba a amfani da su. Haka kuma babu alama a tebur da ke nuna wace layer ce ta *yanzu*; ana saita hakan ta zaɓar daga jerin panel ɗin layer ko ta [LayerMakeCurrent](../layer-make-current/), ba daga wannan akwatin ba.

## Jagorar madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` | Tabbatar da sunan sabuwar layer (yayin ƙarawa) |
| `Escape` | Soke ƙara layer, ko rufe akwatin |

## Umarni masu alaƙa

| Umarni | Aikinsa |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Saita layer ta yanzu ta yi daidai da layer ɗin abin da aka danna |
| [LayerMatch](../layer-match/) | Sake sanya abubuwan da aka zaɓa su yi daidai da layer ɗin abin tushe |
| [LayerIsolate](../layer-isolate/) | Daskare dukkan layers sai waɗanda suke na abubuwan da aka zaɓa |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Cire daskarewa daga dukkan layers a mataki ɗaya |
