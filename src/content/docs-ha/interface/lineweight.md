---
title: Mai Zaɓen Nauyin Layi — Sarrafa Fadin Bugu a KulmanLab CAD
description: Mai zaɓen nauyin layi a kayan aikin KulmanLab CAD yana saita fadin bugu da ake amfani da shi ga dukkan abubuwan da aka zana sabo. Yana goyon bayan ƙima na yau da kullum na nauyin layi na DXF daga 0.00 mm zuwa 2.11 mm tare da yanayin ByLayer da Default.
keywords: [nauyin layi CAD, fadin bugu, fadin layi, nauyin layi na DXF, nauyin layi ByLayer, kulmanlab]
group: interface
order: 4
---

# Lineweight

Chip na **nauyin layi** a kayan aiki yana sarrafa fadin bugu da aka sanya ga kowace sabuwar abu da kake zana. Danna shi don buɗe dropdown na mai zaɓe.

## Zaɓuɓɓuka

| Ƙima | Ma'ana |
|-------|---------|
| **From Layer** | Abin yana gado nauyin layi da aka bayyana a layer ɗinsa. Fadin da ake gani a zahiri ya danganta da saitin layer. |
| **Default** | Yana amfani da fadin tsoho na manhajar — ana rinda shi a matsayin layi mara kauri (1 px). Ba ya canza saitin layer a DXF. |
| **0.00 mm – 2.11 mm** | Fadi tsayayye bayyananne. Abin yana ɗauke da wannan ƙima ba tare da la'akari da nauyin layin layer ɗinsa ba. |

Ƙima na yau da kullum na nauyin layi na DXF suna a samuwa: 0.00, 0.05, 0.09, 0.13, 0.15, 0.18, 0.20, 0.25, 0.30, 0.35, 0.40, 0.50, 0.53, 0.60, 0.70, 0.80, 0.90, 1.00, 1.06, 1.20, 1.40, 1.58, 2.00, da 2.11 mm.

## Yadda take shafarwa

Ana amfani da nauyin layi da aka zaɓa ga kowace abu da aka ƙirƙira bayan canjin. Ba ta shafar abubuwan da ke akwai ba a baya.

Don canza nauyin layi na abubuwan da ke akwai, zaɓi su ka gyara filin **Lineweight** a panel na abubuwa, ko yi amfani da [MatchProperties](../../commands/match-properties/) don kwafinsa daga wani abu.

## Rindawa

Ana rinda nauyin layi a girman **3.78 px ga kowace mm** (96 dpi). Layi na 0.25 mm kusan pixel ɗaya fadi ne a fuskar allo; layi na 1.00 mm kusan pixels 4 ne. Ƙima masu ƙaranci sosai (0.00 mm da marasa kyau) koyaushe ana rinda su a matsayin aƙalla 0.5 px don su ci gaba da bayyana a kowace matakin zoom.

## Dacewa da DXF

Ana ajiye ƙima na nauyin layi a matsayin lambobi cikakke a cikin ɗari na millimita (misali 25 = 0.25 mm) a rikodin abubuwa `LWPOLYLINE`, `LINE`, `CIRCLE`, da sauransu na DXF. Ana ajiye **From Layer** a matsayin `-1` da **Default** a matsayin `-3`, daidai da ma'aunin DXF. Fayiloli suna juyawa ba tare da asara ba a kowace manhaja mai dacewa da DXF.
