---
title: Metin Düzenleyici — KulmanLab CAD'de Rich ve Simple Modlar
description: KulmanLab CAD metin düzenleyicisinin iki modu vardır — rich (karakter başına biçimlendirme, çok satırlı, Text ve Multileader için kelime kaydırma) ve simple (tekdüze stil, ölçü nesneleri için tek satırlı). Başlıktaki mode chip hangi modun etkin olduğunu gösterir.
keywords: [CAD metin düzenleyici, MTEXT, kalın italik CAD, metin biçimlendirme CAD, çok satırlı metin CAD, kelime kaydırma CAD, rich metin düzenleyici, simple metin düzenleyici, ölçü metin düzenleyici, özel yazı tipi CAD, TTF yükleme CAD, kulmanlab]
group: interface
order: 6
---

# Metin Düzenleyici

Metin düzenleyici, düzenlenebilir bir nesneye yerleştirdiğinizde veya çift tıkladığınızda açılır. Başlıktaki küçük **mode chip** — **rich** (vurgu rengi) veya **simple** (soluk) — mevcut nesne için hangi modun etkin olduğunu gösterir.

## Düzenleyici Modları

### Rich mode

Kullanan: **Text** (MTEXT etiketleri) ve **Multileader** ek açıklamaları.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Underline / Strikethrough | Karakter başına (seçime uygulanır; seçim yoksa tüm nesneye) |
| Font ve Height | Karakter başına geçersiz kılma veya tüm nesne varsayılanı |
| Alignment (Left / Center / Right / Justify) | **Yalnızca metin** — Multileader için kullanılamaz |
| `Enter` | Sabit satır sonu ekler |
| `Shift+←/→` | Metin seçimini genişletir veya daraltır |
| `Home` / `End` | Geçerli sabit satırın başına / sonuna atlar |
| Kelime kaydırma | Referans genişliği yeniden boyutlandırma tutamaçları aracılığıyla desteklenir |

### Simple mode

Kullanan: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Düzenleyici, imleci konumlandırıp değeri doğrudan düzenleyebilmeniz için ölçünün mevcut görüntülenen etiketiyle önceden doldurulmuştur.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Underline / Strikethrough / Font / Height | Mevcut — **tüm** etikete aynı anda uygulanır |
| Karakter başına biçimlendirme | Desteklenmez |
| `Enter` | Değeri **kaydeder** ve düzenleyiciyi kapatır (satır sonu yok) |
| Çok satırlı | Desteklenmez |
| Kelime kaydırma | Desteklenmez |

## Düzenleyiciyi Açma

| İşlem | Sonuç |
|--------|--------|
| `text` komutu → konumu tıkla | Yeni bir metin nesnesi oluşturur ve düzenleyiciyi açar (**rich**) |
| Mevcut **Text** nesnesine çift tıkla | **rich** modda düzenleyiciyi yeniden açar |
| Mevcut **Multileader**'a çift tıkla | **rich** modda düzenleyiciyi açar |
| **Ölçü** nesnesine çift tıkla | **simple** modda düzenleyiciyi açar |
| Düzenleyici içinde `Escape` | Düzenleyiciyi kapatır ve tüm değişiklikleri saklar |

## Araç Çubuğu

Araç çubuğu metnin sınırlayıcı kutusunun üzerinde yüzer ve kaydırma veya yakınlaştırma yapırken nesneye sabitlenmiş kalır. Aşağıdaki klavye kısayolları Windows/Linux'ta **Ctrl**, Mac'te **Cmd** kullanır — her düğmenin ipucu platformunuz için doğru tuşu gösterir.

### Kalın · İtalik · Altı Çizili · Üstü Çizili

| Düğme | Kısayol | Ne yapar |
|--------|----------|--------------|
| **B** | `Ctrl+B` / `Cmd+B` | Kalın geçiş yap |
| *I* | `Ctrl+I` / `Cmd+I` | İtalik geçiş yap |
| <u>U</u> | `Ctrl+U` / `Cmd+U` | Altı çizili geçiş yap |
| ~~S~~ | `Ctrl+Shift+X` / `Cmd+Shift+X` | Üstü çizili geçiş yap |

**Geçişin nasıl uygulandığı:**

- **Metin seçimiyle** — stil yalnızca seçilen karakterlere uygulanır.
- **Seçim yok, imleç mevcut metinde** — stili tüm nesne üzerinde (tüm segmentler) açar/kapatır.
- **Boş metin veya yeni nesne** — stil boş segmente kaydedilir ve o noktadan itibaren yazdığınız her karaktere uygulanır.

Geçerli seçimdeki — veya imleçin hemen solundaki karakterdeki — her karakter bu stil ayarlandığında düğme vurgulanmış (etkin) görünür.

### Yazı Tipi

Açılır menü, kullanılabilir yazı tiplerini **Default** (yerleşik sans-serif yazı tipi), **User** (varsa kendi yüklediğiniz yazı tipleri), **Free** (birlikte gelen Google Fonts yazı tipleri seti) ve **System** (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console ve Impact gibi yaygın işletim sistemi yazı tipleri) olarak gruplar.

- **Seçimle** — yalnızca seçilen karakterler için yazı tipini geçersiz kılar.
- **Seçim yok** — yazı tipini tüm nesneye uygular.

Seçim yokken açılır menü, imleçin solundaki karakterin yazı tipini yansıtır.

Yerleşik listeyle sınırlı değilsiniz — kendi `.ttf` dosyanızı yüklemek ve **User** grubuna eklemek için araç çubuğundaki **Font Manager** düğmesine tıklayın. Ayrıntılar için bkz. [Font Manager](../../commands/font-manager/).

### Yükseklik

Sayı alanı, çizim birimlerinde **büyük harf yüksekliğini** (bir büyük harfin yüksekliği) ayarlar.

- **Seçimle** — seçilen karakterler için yüksekliği, nesnenin temel yüksekliğinden bağımsız olarak geçersiz kılar.
- **Seçim yok** — nesnenin temel yüksekliğini değiştirir (ayrı yükseklik geçersiz kılması olmayan tüm karakterlere uygulanır).

Alan, imleçin solundaki karakterin yüksekliğini yansıtır. Nesne varsayılanını kullanmak için boş bırakın.

### Hizalama

Dört düğme — **Align Left** (`Ctrl+Shift+L` / `Cmd+Shift+L`), **Align Center** (`Ctrl+Shift+E` / `Cmd+Shift+E`), **Align Right** (`Ctrl+Shift+R` / `Cmd+Shift+R`), **Justify** (`Ctrl+Shift+J` / `Cmd+Shift+J`) — paragraf hizalamasını ayarlar. Yalnızca **Text** nesneleri için kullanılabilir; Multileader ve ölçü etiketleri bu düğmeleri göstermez.

- Bir düğmeye tıklamak, nesnenin mevcut sınırlayıcı kutusu içinde her satırı yeniden hizalar — ekleme noktasını taşımaz veya kutuyu yeniden boyutlandırmaz.
- Zaten etkin olan düğmeye tıklamak geçersiz kılmayı temizler ve nesnenin tutturma noktasının ima ettiği sütuna geri döner.
- **Justify**, her satırın tam satır genişliğini doldurması için kelimeler arası boşluğu genişletir.

## İmleç ve Gezinti

| Tuş | İşlem |
|-----|--------|
| `←` / `→` | Giriş noktasını bir karakter sola veya sağa taşır |
| `Home` | Geçerli sabit satırın başına atlar |
| `End` | Geçerli sabit satırın sonuna atlar |
| `Shift` + `←` / `→` | Seçimi genişletir veya daraltır |
| `Backspace` | Soldaki karakteri (veya seçimi) siler |
| `Delete` | Sağdaki karakteri (veya seçimi) siler |
| `Enter` | Satır sonu ekler |
| `Escape` | Düzenleyiciyi kapatır |

İmleç yüksekliği, alt simge ve üst simge için kullanılan daha küçük boyut dahil olmak üzere komşu karakterin büyük harf yüksekliğiyle otomatik olarak eşleşir.

## Kopyalama, kesme ve yapıştırma

| Tuş | İşlem |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Seçili metni kopyala |
| `Ctrl+X` / `Cmd+X` | Seçili metni kes |
| `Ctrl+V` / `Cmd+V` | İmleç konumuna yapıştır |

Kopyalama ve kesme, etkin bir metin seçimi gerektirir. Yapıştırılan metin her zaman düz metindir — kopyalandığı andaki biçimlendirmeyi korumak yerine, imleç konumunda zaten bulunan biçimlendirmeyi (kalın, italik, yazı tipi, yükseklik) alır.

**Rich mode**'da, yapıştırılan metindeki satır sonları korunur. **Simple mode**'da, ölçü etiketleri tek satırlı olduğundan satır sonları kaldırılır.

## Kelime Kaydırma

Bir metin nesnesinin **referans genişliği** ayarlandığında, uzun satırlar sözcük sınırlarında yumuşak kaydırma yapılarak bu genişliğe sığar.

Nesne seçiliyken referans genişliğini ayarlamak veya değiştirmek için **yeniden boyutlandırma tutamaçlarını** sürükleyin — kesik çizgili sınırlayıcı kutunun sol ve sağ kenarlarındaki ince dikdörtgenler. Sürükledikçe içerik gerçek zamanlı olarak yeniden düzenlenir.

Referans genişliğini sıfıra ayarlamak (tutamaçları birbirine sürüklemek veya özellikler panelindeki değeri silmek), kelime kaydırmayı kaldırır ve satırların serbestçe büyümesine izin verir.

## Çok Satırlı Metin

Sabit satır sonu eklemek için `Enter` tuşuna basın. Her sabit satır bağımsızdır — `Home` ve `End` yalnızca geçerli sabit satır içinde gezinir.

Sabit satır sonları ve karakter başına biçimlendirme, MTEXT formatı kullanılarak saklanır ve tam DXF round-trip'ten geçer.

## DXF Uyumluluğu

Metin etiketleri **MTEXT** olarak saklanır. Kalın ve italik `\f`, altı çizili `\L`/`\l`, üstü çizili `\K`/`\k`, karakter başına yükseklik ise `\H` kullanır. Referans genişliği, satır aralığı, paragraf hizalaması, dönüş ve ek noktası da korunur. Çerçeve, MTEXT çerçeve bayrağı ve AutoCAD uyumlu kenarlık ölçeğiyle dışa aktarılır. Ayrıca [MetinStili](../text-style/) ve [FontManager](../font-manager/) sayfalarına bakın.
