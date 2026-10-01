---
title: Teksto redaktorius — išplėstinis ir paprastasis režimai KulmanLab CAD
description: KulmanLab CAD teksto redaktorius turi du režimus — išplėstinį (formatavimas pagal simbolius, daugiaeilis, žodžių lūžis Text ir Multileader) ir paprastąjį (vienodas stilius, viena eilutė matmenų objektams). Spartieji klavišai apima pusjuodį, kursyvą, pabraukimą, perbraukimą ir lygiavimą.
keywords: [CAD teksto redaktorius, MTEXT, pusjuodis kursyvas pabraukimas CAD, teksto redaktoriaus spartieji klavišai, teksto formatavimas CAD, daugiaeilis tekstas CAD, žodžių lūžis CAD, formatuoto teksto redaktorius, paprastas teksto redaktorius, matmenų teksto redaktorius, nuosavas šriftas CAD, ttf įkėlimas CAD, kulmanlab]
group: interface
order: 6
---

# Teksto redaktorius

Teksto redaktorius atsidaro, kai padedate arba dukart spustelite redaguojamą objektą. Mažas **režimo ženkliukas** antraštėje — **rich** (akcento spalva) arba **simple** (blanki) — rodo, kuris režimas aktyvus dabartiniam objektui.

## Redaktoriaus režimai

### Išplėstinis režimas

Naudojamas: **Text** (MTEXT užrašai) ir **Multileader** anotacijoms.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Underline / Strikethrough | Pagal simbolį (taikoma pasirinkimui arba visam objektui, jei pasirinkimo nėra) |
| Font ir Height | Pakeitimas pagal simbolį arba viso objekto numatytoji reikšmė |
| Lygiavimas (Left / Center / Right / Justify) | **Tik Text** — Multileader nepasiekiama |
| `Enter` | Įterpia kietą eilutės lūžį |
| `Shift+←/→` | Pratęsia arba sutrumpina teksto pasirinkimą |
| `Home` / `End` | Peršoka į dabartinės kietos eilutės pradžią / pabaigą |
| Žodžių lūžis | Palaikomas per referencinio pločio dydžio keitimo rankenėles |

### Paprastasis režimas

Naudojamas: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Redaktorius iš anksto užpildomas dabartiniu matmens atvaizduotu užrašu, todėl galite padėti žymeklį ir reikšmę tiesiogiai redaguoti.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Underline / Strikethrough / Font / Height | Prieinama — taikoma **visam** užrašui iš karto |
| Formatavimas pagal simbolius | Nepalaikoma |
| `Enter` | **Patvirtina** reikšmę ir uždaro redaktorių (be eilutės lūžio) |
| Daugiaeilis tekstas | Nepalaikoma |
| Žodžių lūžis | Nepalaikoma |

## Redaktoriaus atvėrimas

| Veiksmas | Rezultatas |
|----------|------------|
| Komanda `text` → spustelėti padėtį | Sukuria naują teksto objektą ir atveria redaktorių (**rich**) |
| Dukart spustelėti esamą **Text** objektą | Vėl atveria redaktorių **rich** režimu |
| Dukart spustelėti esamą **Multileader** | Atveria redaktorių **rich** režimu |
| Dukart spustelėti **matmens** objektą | Atveria redaktorių **simple** režimu |
| `Escape` redaktoriaus viduje | Uždaro redaktorių ir išsaugo visus pakeitimus |

## Įrankių juosta

Įrankių juosta plūduriuoja virš teksto apribojančio stačiakampio ir lieka ankeruota prie objekto slenkant ar keičiant mastelį. Žemiau esantys spartieji klavišai naudoja **Ctrl** Windows/Linux ir **Cmd** Mac — kiekvieno mygtuko paaiškinimas rodo tinkamą klavišą jūsų platformai.

### Bold · Italic · Underline · Strikethrough

| Mygtukas | Spartusis klavišas | Ką daro |
|----------|--------------------|---------|
| **B** | `Ctrl+B` / `Cmd+B` | Perjungia pusjuodį |
| *I* | `Ctrl+I` / `Cmd+I` | Perjungia kursyvą |
| <u>U</u> | `Ctrl+U` / `Cmd+U` | Perjungia pabraukimą |
| ~~S~~ | `Ctrl+Shift+X` / `Cmd+Shift+X` | Perjungia perbraukimą |

**Kaip taikomas perjungimas:**

- **Su teksto pasirinkimu** — stilius taikomas tik tiksliai pasirinktiems simboliams.
- **Be pasirinkimo, žymeklis esamame tekste** — perjungia stilių visam objektui (visoms atkarpoms).
- **Tuščias tekstas ar naujas objektas** — stilius saugomas tuščioje atkarpoje ir taikomas kiekvienam simboliui, kurį įvesite nuo to momento.

Mygtukas atrodo paryškintas (aktyvus), kai kiekvienas simbolis dabartiniame pasirinkime — arba simbolis iškart kairėje nuo žymeklio — turi tą stilių.

### Font

Išskleidžiamasis meniu sugrupuoja prieinamus šrifto tipus į **Default** (įtaisytasis be užraitų šriftas), **User** (jūsų pačių įkelti šriftai, jei tokių yra), **Free** (pridėtų Google Fonts rinkinys) ir **System** (įprasti OS šriftai, pavyzdžiui, Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console ir Impact).

- **Su pasirinkimu** — pakeičia šriftą tik pasirinktiems simboliams.
- **Be pasirinkimo** — pritaiko šriftą visam objektui.

Be pasirinkimo išskleidžiamasis meniu atspindi šriftą simbolio, esančio kairėje nuo žymeklio.

Neapsiribojama įtaisytuoju sąrašu — spustelėkite įrankių juostos mygtuką **Font Manager**, kad įkeltumėte savo `.ttf` failą ir pridėtumėte jį į grupę **User**. Išsamiau žr. [Font Manager](../../commands/font-manager/).

### Height

Skaičiaus laukas nustato **didžiosios raidės aukštį** (didžiosios raidės aukštį) brėžinio vienetais.

- **Su pasirinkimu** — pakeičia aukštį pasirinktiems simboliams nepriklausomai nuo objekto bazinio aukščio.
- **Be pasirinkimo** — keičia objekto bazinį aukštį (taikoma visiems simboliams, neturintiems atskiro aukščio pakeitimo).

Laukas atspindi simbolio, esančio kairėje nuo žymeklio, aukštį. Palikite jį tuščią, kad būtų naudojama objekto numatytoji reikšmė.

### Lygiavimas

Keturi mygtukai — **Align Left** (`Ctrl+Shift+L` / `Cmd+Shift+L`), **Align Center** (`Ctrl+Shift+E` / `Cmd+Shift+E`), **Align Right** (`Ctrl+Shift+R` / `Cmd+Shift+R`), **Justify** (`Ctrl+Shift+J` / `Cmd+Shift+J`) — nustato pastraipos lygiavimą. Prieinami tik **Text** objektams; Multileader ir matmenų užrašai šių mygtukų nerodo.

- Mygtuko spustelėjimas iš naujo suvienodina kiekvieną eilutę esamo objekto apribojančio stačiakampio ribose — jis neperkelia įterpimo taško ir nekeičia stačiakampio dydžio.
- Jau aktyvaus mygtuko spustelėjimas panaikina pakeitimą, grįžtant prie stulpelio, numanomo objekto prisegimo taško.
- **Justify** ištempia tarpus tarp žodžių, kad kiekviena eilutė užpildytų visą eilutės plotį.

## Žymeklis ir naršymas

| Klavišas | Veiksmas |
|----------|----------|
| `←` / `→` | Perkelia žymeklį vienu simboliu kairėn ar dešinėn |
| `Home` | Peršoka į dabartinės kietos eilutės pradžią |
| `End` | Peršoka į dabartinės kietos eilutės pabaigą |
| `Shift` + `←` / `→` | Pratęsia arba sutrumpina pasirinkimą |
| `Backspace` | Ištrina simbolį kairėje (arba pasirinkimą) |
| `Delete` | Ištrina simbolį dešinėje (arba pasirinkimą) |
| `Enter` | Įterpia eilutės lūžį |
| `Escape` | Uždaro redaktorių |

Žymeklio aukštis automatiškai atitinka gretimo simbolio didžiosios raidės aukštį, įskaitant mažesnį dydį, naudojamą apatiniams ir viršutiniams indeksams.

## Kopijavimas, iškirpimas ir įklijavimas

| Klavišas | Veiksmas |
|----------|----------|
| `Ctrl+A` / `Cmd+A` | Pažymėti visą tekstą aktyviame redaktoriuje |
| `Ctrl+C` / `Cmd+C` | Nukopijuoja pasirinktą tekstą |
| `Ctrl+X` / `Cmd+X` | Iškerpa pasirinktą tekstą |
| `Ctrl+V` / `Cmd+V` | Įklijuoja žymeklio vietoje |

Kopijavimui ir iškirpimui reikia aktyvaus teksto pasirinkimo. Įklijuotas tekstas visada paprastas — jis perima formatavimą (pusjuodis, kursyvas, šriftas, aukštis), jau esantį žymeklio vietoje, užuot nešęs formatavimą, kurį turėjo kopijuojant.

**Išplėstiniu režimu** eilučių lūžiai įklijuotame tekste išsaugomi. **Paprastuoju režimu** eilučių lūžiai pašalinami, nes matmenų užrašai yra vienos eilutės.

## Žodžių lūžis

Kai teksto objektas turi nustatytą **referencinį plotį**, ilgos eilutės minkštai lūžta ties žodžių ribomis, kad tilptų į tą plotį.

Norėdami nustatyti ar pakeisti referencinį plotį, kol objektas pasirinktas, tempkite **dydžio keitimo rankenėles** — plonus stačiakampėlius kairiajame ir dešiniajame brūkšninio apribojančio stačiakampio kraštuose. Turinys persitvarko realiuoju laiku tempiant.

Nustačius referencinį plotį į nulį (suvedus rankenėles kartu arba ištrynus reikšmę savybių skydelyje), žodžių lūžis pašalinamas ir eilutės gali augti laisvai.

## Daugiaeilis tekstas

Paspauskite `Enter`, kad įterptumėte kietą eilutės lūžį. Kiekviena kieta eilutė nepriklausoma — `Home` ir `End` naršo tik dabartinės kietos eilutės viduje.

Kieti eilučių lūžiai ir formatavimas pagal simbolius saugomi naudojant MTEXT formatą ir išlieka per pilną DXF kelionę tam ir atgal.

## DXF suderinamumas

Teksto užrašai DXF faile saugomi kaip **MTEXT** objektai. Pusjuodis ir kursyvas naudoja įterptuosius šrifto perjungimo kodus (`\f`), pabraukimas naudoja `\L`/`\l`, perbraukimas naudoja `\K`/`\k`, o atskirų simbolių aukščio pakeitimai naudoja `\H`. Referencinis plotis, eilučių tarpas, pastraipos lygiavimas, pasukimas ir prijungimas taip pat keliauja. Teksto rėmelis eksportuojamas su MTEXT rėmelio vėliavėle ir AutoCAD suderinamu krašto masteliu.
