---
title: LayerManager — Sarrafa Dukkan Layers a Tebur Guda
description: Umarnin LayerManager yana buɗe tebur na dukan yadudduka a cikin zane, yana ba ka damar ƙara yadudduka, share waɗanda ba a amfani da su, da gyara daskarewa, kullewa, bugawa, launi, kaurin layi da nau'in layi na kowanne a nan take.
keywords: [mai sarrafa yadudduka, teburin yadudduka CAD, sarrafa yadudduka CAD, ƙara yadudduka CAD, share yadudduka CAD, cire yadudduka marar amfani, daskare kulle buga yadudduka, sarrafa yadudduka kulmanlab]
group: layer
order: 1
---

# LayerManager

Umarnin `LayerManager` yana buɗe tebur da ke lissafa kowane yadudduka a cikin zane, tare da saitunan **Freeze**, **Lock**, **Plot**, **Launi**, **Kaurin layi** da **Nau'in layi** waɗanda ake gyarawa kai tsaye a cikin layin. Shi ne babbar wurin ƙara yadudduka, share waɗanda ba a amfani da su, da daidaita halayen waɗanda suke nan — sauran umarnin yadudduka ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) kowanne yana yin abu ɗaya kaɗai ba tare da buɗe shi ba.

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
| ✕ | Yana share yadudduka idan babu abin da yake amfani da shi — duba [Share yadudduka](#share-yadudduka) |

Canza Freeze, Lock ko Plot yana fara aiki nan take — babu wani mataki na ajiyewa daban. Abubuwan da aka saita zuwa **ByLayer** don launi, kaurin layi ko nau'in layi (tsoho) suna ɗaukar abin da ka saita a nan; abubuwan da ke da nasu ƙimar ba sa shafuwa.

## Ƙara layer

1. Danna **+ Add Layer** a ƙasan tebur.
2. Rubuta suna sannan ka danna **Enter** don tabbatarwa, ko **Escape** don sokewa.

Sunayen layer na iya ƙunsar haruffa, lambobi, sarari da `_`, `-`, `$`. Sunan da babu komai a ciki, wanda ake amfani da shi tuni, ko mai ɗauke da wani harafi dabam ana ƙi shi da kuskure a wurin, kuma jerin yana nan a buɗe don sake gwadawa.

Sabbin layers suna farawa **ba a daskare su ba, ba a kulle su ba, ana iya buga su**, tare da launi 7 (fari/baƙi), Lineweight na Default da Linetype na Continuous — tsoffin ƙimomi iri ɗaya da [Import](../import/) ke bai wa layer `0` a cikin zane mara komai.

## Share yadudduka

Kowane layi yana ƙarewa da maɓallin **✕** wanda yake cire yadudduka daga zane. Sharewa tana faruwa nan take — babu matakin tabbatarwa — amma ana bayar da ita ne kawai ga yadudduka waɗanda babu abin da ya dogara da su:

| Yanayi | Halin maɓalli |
|--------|----------------|
| Yadudduka babu komai | Yana aiki — *Delete layer* |
| An sanya yadudduka ga aƙalla abu ɗaya | An kashe — *Cannot delete: assigned to at least one entity* |
| Yadudduka `0` | Babu maɓalli ko kaɗan |

**"Ana amfani da shi" ya shafi dukan zanen**, ba kawai abin da kake gani ba. Abu da yake kan wani shimfiɗa (sararin takarda) ana ƙidaya shi daidai kamar wanda yake sararin samfuri, don haka yadudduka na iya bayyana babu komai a allo amma har yanzu ya ƙi a share shi. Yadudduka da aka daskare ba su bambanta ba: daskarewa tana ɓoye abubuwa amma ba ta cire sanya su ba, don haka yadudduka daskararre mai ɗauke da abubuwa ya kasance ba mai yiwuwar sharewa.

Yadudduka `0` ba za a taɓa share shi ba. Shi ne yadudduka na madadin da kowane zane yake da tabbacin samu, don haka ba a zana masa maɓalli ko kaɗan maimakon a nuna shi a kashe.

### "…is now in use and can't be deleted"

Wani lokaci ✕ yana bayyana kamar ana iya amfani da shi amma ana ƙin dannawa da wani saƙo a saman faifan:

```
"WALLS" is now in use and can't be deleted
```

Wannan ba saɓani ba ne. Gano waɗanne yadudduka ake amfani da su yana buƙatar bin kowane abu a cikin zane, don haka ana adana sakamakon kuma ana sake gina shi ne kawai idan adadin abubuwa ya canja — mai arha a ɗaruruwan abubuwa, ba a ɗaruruwan dubbai ba. Motsa abu da yake nan zuwa wani yadudduka ba ya canja adadin, don haka halin kashewa na layin zai iya tsufa na ɗan lokaci. Dannawa tana sake dubawa daga farko kafin share komai — shi ya sa ƙin yake faruwa lokacin dannawa maimakon yadudduka ya ɓace alhali wani abu yana nuni gare shi.

Rufe saƙon da **✕** nasa. Yadudduka bai canja ba.

## Abin da ba za ka iya yi a nan ba

Teburin ba ya nuna wane yadudduka ne na *yanzu*; ana saita hakan daga jerin saukewa na faifan yadudduka ko da [LayerMakeCurrent](../layer-make-current/), ba daga wannan taga ba. Har ila yau sunayen yadudduka suna ƙayyade lokacin ƙirƙira — ana iya share yadudduka a sake ƙirƙira shi, amma ba a iya canja masa suna ba.

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
