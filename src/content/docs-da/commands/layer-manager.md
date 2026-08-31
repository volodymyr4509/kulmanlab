---
title: LayerManager — Administrer Alle Lag i Én Tabel
description: Kommandoen LayerManager åbner en tabel over alle lag i tegningen, hvor du kan tilføje lag, slette ubrugte og redigere hvert lags frysning, låsning, plotning, farve, linjetykkelse og linjetype direkte i rækken.
keywords: [lagstyring, CAD lagtabel, håndtere lag CAD, tilføje lag CAD, slette lag CAD, fjerne ubrugt lag, frys lås plot lag, kulmanlab laghåndtering]
group: layer
order: 1
---

# LayerManager

Kommandoen `LayerManager` åbner en tabel med alle lag i tegningen, hvor indstillingerne **Freeze**, **Lock**, **Plot**, **Farve**, **Linjetykkelse** og **Linjetype** kan redigeres direkte i rækken. Det er det centrale sted til at tilføje lag, slette ubrugte og justere, hvordan eksisterende opfører sig — de øvrige lagkommandoer ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) gør hver især én afgrænset ting uden at åbne den.

## Åbne Layer Manager

- Skriv `LayerManager` i terminalen, **eller**
- Klik på knappen **Layer Manager** i lagpanelet.

Dialogen åbner som et flydende panel; intet behøver at være markeret på forhånd.

## Lagtabellen

| Kolonne | Hvad den styrer |
|---------|--------------------|
| Name | Lagets navn, vist som skrivebeskyttet i tabellen (angivet én gang, ved oprettelse) |
| Freeze | Skjuler lagets entiteter og udelukker dem fra markering, indtil det ophæves |
| Lock | Forhindrer redigering af entiteter på laget, uden at skjule dem |
| Plot | Om lagets entiteter medtages ved udskrivning eller PDF-eksport |
| Color | Lagets ACI-farve — klik på farveprøven for at åbne farvevælgeren |
| Lineweight | Lagets linjetykkelse — klik på chippen for at åbne tykkelsesvælgeren |
| Linetype | Lagets stregmønster — klik på chippen for at åbne linjetypevælgeren |
| ✕ | Sletter laget, når intet bruger det — se [Sletning af et lag](#sletning-af-et-lag) |

At slå Freeze, Lock eller Plot til/fra virker med det samme — der er intet separat gemme-trin. Entiteter, der er sat til **ByLayer** for farve, linjetykkelse eller linjetype (standardværdien), følger det, du angiver her; entiteter med deres egen eksplicitte tilsidesættelse påvirkes ikke.

## Tilføje et lag

1. Klik på **+ Add Layer** nederst i tabellen.
2. Skriv et navn, og tryk på **Enter** for at bekræfte, eller **Escape** for at annullere.

Lagnavne må indeholde bogstaver, tal, mellemrum samt `_`, `-`, `$`. Et navn, der er tomt, allerede i brug, eller indeholder et andet tegn, afvises med en indbygget fejlmeddelelse, og rækken forbliver åben til endnu et forsøg.

Nye lag starter som **ufrosne, ulåste, plotbare**, med farve 7 (hvid/sort), linjetykkelse Default og linjetype Continuous — de samme standardværdier, som [Import](../import/) tildeler lag `0` i en tom tegning.

## Sletning af et lag

Hver række slutter med en **✕**-knap, der fjerner laget fra tegningen. Sletningen sker med det samme — der er ikke noget bekræftelsestrin — men tilbydes kun for lag, som intet afhænger af:

| Situation | Knappens tilstand |
|-----------|-------------------|
| Laget er tomt | Aktiv — *Delete layer* |
| Laget er tildelt mindst én entitet | Deaktiveret — *Cannot delete: assigned to at least one entity* |
| Lag `0` | Slet ingen knap |

**"I brug" gælder hele tegningen**, ikke kun det, du kigger på. En entitet, der ligger på et layout (papirrum), tæller præcis lige så meget som en i modelrum, så et lag kan se tomt ud på skærmen og alligevel nægte at blive slettet. Frosne lag er ingen undtagelse: frysning skjuler entiteter, men ophæver ikke deres tildeling, så et frossent lag med entiteter forbliver usletteligt.

Lag `0` kan aldrig slettes. Det er reservelaget, som enhver tegning med sikkerhed har, så knappen tegnes slet ikke for det i stedet for at blive vist deaktiveret.

### "…is now in use and can't be deleted"

Nu og da ser ✕ tilgængelig ud, men klikket afvises med et banner øverst i panelet:

```
"WALLS" is now in use and can't be deleted
```

Det er ingen modsigelse. At finde ud af, hvilke lag der er i brug, kræver en gennemgang af hver entitet i tegningen, så resultatet caches og bygges kun om, når antallet af entiteter ændrer sig — billigt ved hundredvis af entiteter, ikke ved hundredtusinder. At flytte en eksisterende entitet til et lag ændrer ikke det antal, så rækkens deaktiverede tilstand kan et øjeblik være forældet. Klikket kontrollerer forfra, før noget slettes, og derfor sker afvisningen ved klikket i stedet for, at laget forsvinder, mens noget stadig henviser til det.

Luk banneret med dets eget **✕**. Laget er urørt.

## Hvad du ikke kan her

Tabellen viser ikke, hvilket lag der er *aktuelt*; det sættes fra lagpanelets rullemenu eller med [LayerMakeCurrent](../layer-make-current/), ikke fra denne dialog. Lagnavne ligger desuden fast ved oprettelsen — et lag kan slettes og oprettes igen, men ikke omdøbes.

## Tastaturreference

| Tast | Handling |
|------|----------|
| `Enter` | Bekræft navnet på et nyt lag (mens du tilføjer) |
| `Escape` | Annullér tilføjelse af et lag, eller luk dialogen |

## Relaterede kommandoer

| Kommando | Hvad den gør |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Sæt aktuelt lag til at matche en klikket entitets lag |
| [LayerMatch](../layer-match/) | Tildel markerede entiteter på ny til laget for en kildeentitet |
| [LayerIsolate](../layer-isolate/) | Frys alle lag undtagen de markerede entiteters |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Fjern frysning af alle lag i ét trin |
