---
title: "Bakit Bumukas ang DXF Mo sa Maling Sukat (at Paano Ito Ayusin)"
description: "Ang DXF na bumubukas nang 25.4 beses na mas maliit o 1000 beses na mas malaki ay hindi sirang file kundi hindi tugmang yunit. Paano ito tukuyin at ayusin."
keywords: [DXF maling scale, DXF maling sukat, yunit ng DXF, DXF mm o pulgada, DXF na-import na masyadong maliit, DXF scale factor, DXF 25.4, ayusin ang scale ng DXF, hindi tugmang yunit ng DXF, i-scale muli ang DXF]
date: 2026-09-04
author: KulmanLab
tag: Gabay
---

Bumukas ang isang DXF at ang piyesang dapat 40 mm ang lapad ay 1.575 ang sukat. O dumating ang isang floor plan na kasinlaki ng isang buong bloke. Hindi sira ang file at walang nagkamali — tama ang guhit, at ang nawala sa daan ay ang numerong kasama nito.

Sulit itong maintindihan bago ka mag-scale ng kahit ano, dahil sampung segundo lang ang pag-ayos kapag alam mo na kung anong ratio ang hinaharap mo — at ang panghuhula ang paraan para dalawang beses kang makaputol sa maling sukat.

## Halos hindi nagdadala ng yunit ang DXF

Iniimbak ng DXF ang mga coordinate bilang hubad na numero. Ang linyang mula `0,0` hanggang `40,0` ay apatnapung *kung ano* ang haba. Hindi nagdidikit ang pormat ng yunit sa isang coordinate, at wala rin namang mailalagyan — ang numero mismo ang heometriya.

Ang pinakamalapit dito ay isang header variable na tinatawag na `$INSUNITS`, iisang code para sa buong file: `1` para sa pulgada, `4` para sa milimetro, `6` para sa metro, at iba pa. Dalawang bagay ang nagpapahina rito kaysa sa dating nito. Iisa itong halaga para sa buong guhit, kaya hindi nito mailalarawan ang isang file na pinagtagpi mula sa magkakahalong pinagmulan. At payo ito, hindi pangako: marami sa mga aplikasyon ang bumabasa nito kapag *ipinapasok* ang isang guhit sa loob ng iba, at buong-buong binabalewala ito kapag basta mo lang binuksan ang file — sa makatuwirang batayan na alam naman karaniwan ng bumubukas ng guhit kung ano ang iginuhit niya.

Kaya ang "40" ay dumarating nang buo at ang "milimetro" ay hindi. Bawat DXF na maling sukat na matatanggap mo sa buhay mo ay ang pangungusap na iyon.

## Tukuyin muna ang ratio

Sukatin ang isang bagay na talagang alam mo ang tunay na sukat — diyametro ng butas, gilid ng plantsa, isang estandard na agwat ng pagkakabit. Hatiin ang sukat na dapat ay ganoon sa sukat na lumalabas. Halos palaging isa ito sa mga sumusunod:

| Ratio | Ang nangyari |
|---|---|
| **25.4** | Iginuhit sa pulgada, binabasa bilang milimetro |
| **0.03937** | Iginuhit sa milimetro, binabasa bilang pulgada |
| **1000** | Iginuhit sa metro, binabasa bilang milimetro |
| **0.001** | Iginuhit sa milimetro, binabasa bilang metro |
| **12** | Talampakan na binasa bilang pulgada |
| **304.8** | Talampakan na binasa bilang milimetro |

Kung nasa listahan ang numero mo, hindi tugmang yunit lang ang problema at wala nang iba, at isang minuto na lang ang natitira.

Kung wala — sabihin nating 1.37, o 3.2 — huminto ka. Hindi iyon problema sa yunit, at ang pag-scale ay gagawa ng guhit na mali sa paraang mas mahirap mapansin. Lumaktaw sa huling bahagi.

## Ang pag-aayos

Kailangan mo ng pansukat at ng pang-scale. Kaya ito ng kahit anong kasangkapang CAD; narito ito sa [KulmanLab](https://kulmanlab.com/tl/), na nagbubukas ng DXF sa isang tab ng browser nang walang ini-install:

1. Buksan ang file — i-drag ito sa pahina, o gamitin ang [Import](/tl/docs/commands/import/).
2. Patakbuhin ang [Distance](/tl/docs/commands/distance/) at piliin ang dalawang dulo ng bagay na alam mo. Mahalaga ang snap dito: hulihin ang tunay na dulong punto, hindi ang malapit lang doon, kung hindi ay ihuhurno mo ang sarili mong mali sa loob ng factor.
3. Hatiin. Alam na sukat ÷ sinukat na sukat. Ang butas na 40 mm na nagpapakita ng 1.575 ay nagbibigay ng 40 ÷ 1.575 ≈ **25.4**.
4. Piliin ang lahat, patakbuhin ang [Scale](/tl/docs/commands/scale/), pumili ng base point, at i-type ang factor.

Nananatiling nakapirmi ang base point habang gumagalaw ang lahat ng iba, kaya ilagay ito kung saan mo kayang isipin — isang sulok ng piyesa, o ang origin. Para sa guhit na paalis na sa pagputol, ang origin ang karaniwang matinong pili.

Nakakatulong na walang sariling setting ng yunit ang KulmanLab. Numero lang ang mga coordinate, at iyon mismo ang kalagayang gusto mo sa isang guhit habang inaalam mo kung ano ang ibig sabihin ng mga numero nito. Walang conversion na nangyayari sa likod mo at wala kang kalabanin.

## Suriin ang pag-aayos bago ka magtiwala

Sukatin ang *pangalawang* bagay, sa ibang bahagi ng guhit, na alam mo rin ang tunay na sukat. Tapos suriin ito.

Ito ang hakbang na nilalaktawan ng mga tao, at ito lang ang nakakahuli sa masamang kaso. Kung tama na ngayon ang pangalawang sukat, pantay-pantay ang guhit sa maling yunit noon at pantay-pantay na sa tama ngayon. Tapos na.

Kung *mali pa rin* ang pangalawang sukat, at mali sa ibang halaga, hindi ito kailanman simpleng hindi pagkakatugma ng yunit. Kaka-scale mo lang ng isang guhit na hindi magkatugma sa sarili, mas masahol pa iyon kaysa sa pinagsimulan mo, dahil hindi na malinis na ratio ang mali na kayang mapansin ng kahit sino.

Magandang pangalawang opinyon dito ang [Area](/tl/docs/commands/area/), lalo na sa mga plantsang materyales. Nag-scale ang lawak ayon sa *parisukat* ng factor, kaya ang maling haba na 25.4 ay lumilitaw bilang maling lawak na 645 — isang agwat na mahirap pagtakpan.

## Para hindi na maulit

Nawawala ang yunit sa pagitan ng mga tao, kaya naroon din ang solusyon.

**Sabihin ang yunit kapag nagpapadala ka ng file.** Isang linya sa mensahe. "Lahat ng sukat ay nasa mm." Walang gastos at nawawala ang buong problema.

**Magpadala ng isang sanggunian na sukat kasama nito.** Sabihin ang isang tunay na sukat — "ang panlabas na plato ay 300 mm ang lapad". Ngayon ay kayang beripikahin ng tatanggap ang file sa halip na hulaan, at kung may nagkamali man ay maaayos niya sa isang minuto nang hindi na babalik sa iyo.

**Magtanong, kapag ikaw ang tumatanggap.** Kung dumating ang file nang walang nakasaad na yunit at malapit ka nang pumutol ng materyales, mas mura ang isang mensahe kaysa sa isang nasirang plantsa.

**Gumuhit sa yunit na inaasahan ng iyong output.** Ang laser cutting, CNC at karamihan sa daloy ng paggawa ay umaasang milimetro. Kung doon papunta ang file, gumuhit sa milimetro at wala nang natitirang conversion na pwedeng magkamali. Tingnan ang [paghahanda ng DXF para sa laser cutting](/tl/blog/prepare-dxf-for-laser-cutting/).

## Kapag hindi ito problema sa yunit

Kung hindi malinis na conversion ng yunit ang ratio mo, ibang-iba ang malamang na sanhi:

- **Naghahalo ng scale ang guhit.** May gumuhit ng bahagi sa 1:1 at nagdikit ng detalye sa 1:5, o may block na ipinasok nang may scale factor at hindi na naitama. Ayusin ang may salang heometriya, hindi ang buong file.
- **Heometriya ng paper space ang sinukat mo.** Ang title block o annotation frame ay iginuguhit sa sukat ng sheet, hindi ng modelo. Sumukat ng bagay na bahagi ng tunay na obheto.
- **Mali ang sinukat mo.** Ang nominal na 40 mm na butas ay maaaring nakaguhit sa 39.8 para sa kasyahan, at ang "300 mm" na panel ay maaaring 300 hanggang sa labas ng isang rebate na hindi mo nakikita. Pumili ng bagay na malinaw ang gilid.

Sa bawat isa niyan, ang sagot ay alamin kung ano talaga ang guhit, hindi ang i-scale ito. Ang guhit na nagkakasalungatan ang mga bahagi ay patuloy na kakain ng materyales mo hanggang may magbukas nito at tumingin.

---

*Kaugnay: [Distance](/tl/docs/commands/distance/) para sumukat, [Scale](/tl/docs/commands/scale/) para sa pag-aayos, [Area](/tl/docs/commands/area/) para sa pangalawang opinyon, at [Export Manager](/tl/docs/commands/export-manager/) para sa dala ng bawat pormat kapag ibinabalik mo ito.*
