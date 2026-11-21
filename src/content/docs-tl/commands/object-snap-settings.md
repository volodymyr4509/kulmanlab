---
title: "ObjectSnapSettings Command — Lahat ng setting ng control bar"
description: "Binubuksan ng ObjectSnapSettings command ang isang window na may bawat setting ng control bar — snap, tangent snap, angle tracking, pin, tina-type na input, lasso at display — bawat isa ay ipinaliwanag sa tabi ng listahan na may maliit na drowing."
keywords: ["object snap settings CAD", "tangent snap CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Binubuksan ng `MgaSettingNgDikit` command ang isang window na pinagsasama ang bawat setting ng control bar. Bawat setting ay ipinaliwanag sa tabi ng listahan, na may maliit na drowing. Buksan ito gamit ang gear button sa control bar, o i-type ang `MgaSettingNgDikit`. Ang pagpalit ng setting dito ay kapareho ng pag-toggle ng button nito sa bar.

## Ang mga setting

### Kung saan humihinto ang cursor

| Control bar | Ano ang ginagawa nito |
|---|---|
| `Snap` | Tumatalon ang cursor sa pinakamalapit na punto ng grid, kaya ang mga puntong pipiliin mo ay nasa buong coordinate. Nauuna pa rin ang pagdikit sa isang bagay na malapit sa cursor. Sumusunod sa zoom ang agwat ng grid. |
| `TANG` | Habang gumuguhit ng linya mula sa isang punto, ilapit ang cursor sa lugar kung saan saktong didikit ang linya sa bilog, arko, ellipse o spline at doon ito didikit. Gumagana sa Line, Polyline at iba pang utos, at kapag hinihila ang dulo ng linya o polyline. |

### Mga gabay habang gumuguhit

| Control bar | Ano ang ginagawa nito |
|---|---|
| `ANGL` | Kapag lumapit ang cursor sa isa sa mga anggulong ito mula sa huling punto, nakakandado ito sa direksyong iyon, na ipinapakita bilang putol-putol na sinag. Habang nakakandado, mag-type ng haba at pindutin ang Enter para ilagay ang punto sa layong iyon. |
| `Pins` | Ipahinga sandali ang cursor sa isang snap point para i-pin ito. Ang naka-pin na punto ay nagpapadala ng pahalang at patayong gabay na linya, at dumidikit ang cursor sa mga ito at sa kanilang mga tagpuan. |
| `Dist` | Ang huling naka-pin na punto ang nagiging simula: kapag nakakandado ang cursor sa isang anggulo mula sa pin, mag-type ng haba at pindutin ang Enter para ilagay ang punto sa layong iyon mula rito. Kailangan ang vector pins. |

### Input at pagpili

| Control bar | Ano ang ginagawa nito |
|---|---|
| `Rel` | Ang na-type na X,Y na punto ay sinusukat mula sa huling napiling punto, na parang nagsisimula sa @. Inaalis ng Backspace ang @ para sa punto sa sariling coordinate ng drawing. Kapag naka-off, i-type mo mismo ang @ para sa offset. |
| `Lasso` | Pindutin at hilahin sa bakanteng espasyo para gumuhit ng malayang loop sa paligid ng gusto mo, sa halip na parihaba. Napipili ang nasasakop ng loop. |

### Display

| Control bar | Ano ang ginagawa nito |
|---|---|
| `Grid` | Ipinapakita ang grid sa likod. Nagbabago ang agwat nito habang nagzo-zoom. Hindi napapatigil ng pag-off nito ang pagdikit sa grid. |
| `LWT` | Iginuguhit ang mga linya sa kanilang kapal, kaya mas makapal ang hitsura ng mas mabibigat na linya. Kapag naka-off, manipis ang bawat linya, na maaaring magpadali sa pagbasa ng siksik na drawing. |

May sariling hanay ang **ANGL** para sa hakbang: pumili ng 10°, 20°, 30°, 45° o 90°, o piliin ang **Custom** at mag-type ng anumang anggulo mula 1° hanggang 180°.

Naka-off bilang default ang tangent snap, relative input at lasso. Ibinabalik ng **Ibalik sa default** ang bawat setting sa panimulang kalagayan nito.

---

*Kaugnay: [Vector Pins](../../interface/vector-pins/), [Pagsubaybay sa distansya](../../interface/distance-tracking/), [Grid & Snap](../../interface/grid-snap/), [Pag-input ng coordinate](../../interface/coordinate-entry/)*
