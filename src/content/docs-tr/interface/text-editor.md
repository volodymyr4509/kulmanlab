---
sidebar_position: 4
title: Metin Düzenleyici — KulmanLab CAD'de Rich ve Simple Modlar
description: KulmanLab CAD metin düzenleyicisinin iki modu vardır — rich (karakter başına biçimlendirme, çok satırlı, Text ve Multileader için kelime kaydırma) ve simple (tekdüze stil, ölçü nesneleri için tek satırlı). Başlıktaki mode chip hangi modun etkin olduğunu gösterir.
keywords: [CAD metin düzenleyici, MTEXT, kalın italik CAD, metin biçimlendirme CAD, çok satırlı metin CAD, kelime kaydırma CAD, rich metin düzenleyici, simple metin düzenleyici, ölçü metin düzenleyici, kulmanlab]
---

# Metin Düzenleyici

Metin düzenleyici, düzenlenebilir bir nesneye yerleştirdiğinizde veya çift tıkladığınızda açılır. Başlıktaki küçük **mode chip** — **rich** (vurgu rengi) veya **simple** (soluk) — mevcut nesne için hangi modun etkin olduğunu gösterir.

## Düzenleyici Modları

### Rich mode

Kullanan: **Text** (MTEXT etiketleri) ve **Multileader** ek açıklamaları.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Strikethrough | Karakter başına (seçime uygulanır; seçim yoksa tüm nesneye) |
| Font ve Height | Karakter başına geçersiz kılma veya tüm nesne varsayılanı |
| `Enter` | Sabit satır sonu ekler |
| `Shift+←/→` | Metin seçimini genişletir veya daraltır |
| `Home` / `End` | Geçerli sabit satırın başına / sonuna atlar |
| Kelime kaydırma | Referans genişliği yeniden boyutlandırma tutamaçları aracılığıyla desteklenir |

### Simple mode

Kullanan: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Düzenleyici, imleci konumlandırıp değeri doğrudan düzenleyebilmeniz için ölçünün mevcut görüntülenen etiketiyle önceden doldurulmuştur.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Font / Height | Mevcut — **tüm** etikete aynı anda uygulanır |
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

Araç çubuğu metnin sınırlayıcı kutusunun üzerinde yüzer ve kaydırma veya yakınlaştırma yapırken nesneye sabitlenmiş kalır.

### Kalın · İtalik · Üstü Çizili

| Düğme | Kısayol | Ne yapar |
|--------|----------|--------------|
| **K** | — | Kalın geçiş yap |
| *İ* | — | İtalik geçiş yap |
| ~~Ü~~ | — | Üstü çizili geçiş yap |

**Geçişin nasıl uygulandığı:**

- **Metin seçimiyle** — stil yalnızca seçilen karakterlere uygulanır.
- **Seçim yok, imleç mevcut metinde** — stili tüm nesne üzerinde (tüm segmentler) açar/kapatır.
- **Boş metin veya yeni nesne** — stil boş segmente kaydedilir ve o noktadan itibaren yazdığınız her karaktere uygulanır.

Geçerli seçimdeki — veya imleçin hemen solundaki karakterdeki — her karakter bu stil ayarlandığında düğme vurgulanmış (etkin) görünür.

### Yazı Tipi

Açılır menü, seçilmiş platformlar arası yazı tiplerini listeler (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). En üstteki seçenek **Arial** varsayılandır.

- **Seçimle** — yalnızca seçilen karakterler için yazı tipini geçersiz kılar.
- **Seçim yok** — yazı tipini tüm nesneye uygular.

Seçim yokken açılır menü, imleçin solundaki karakterin yazı tipini yansıtır.

### Yükseklik

Sayı alanı, çizim birimlerinde **büyük harf yüksekliğini** (bir büyük harfin yüksekliği) ayarlar.

- **Seçimle** — seçilen karakterler için yüksekliği, nesnenin temel yüksekliğinden bağımsız olarak geçersiz kılar.
- **Seçim yok** — nesnenin temel yüksekliğini değiştirir (ayrı yükseklik geçersiz kılması olmayan tüm karakterlere uygulanır).

Alan, imleçin solundaki karakterin yüksekliğini yansıtır. Nesne varsayılanını kullanmak için boş bırakın.

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

## Kelime Kaydırma

Bir metin nesnesinin **referans genişliği** ayarlandığında, uzun satırlar sözcük sınırlarında yumuşak kaydırma yapılarak bu genişliğe sığar.

Nesne seçiliyken referans genişliğini ayarlamak veya değiştirmek için **yeniden boyutlandırma tutamaçlarını** sürükleyin — kesik çizgili sınırlayıcı kutunun sol ve sağ kenarlarındaki ince dikdörtgenler. Sürükledikçe içerik gerçek zamanlı olarak yeniden düzenlenir.

Referans genişliğini sıfıra ayarlamak (tutamaçları birbirine sürüklemek veya özellikler panelindeki değeri silmek), kelime kaydırmayı kaldırır ve satırların serbestçe büyümesine izin verir.

## Çok Satırlı Metin

Sabit satır sonu eklemek için `Enter` tuşuna basın. Her sabit satır bağımsızdır — `Home` ve `End` yalnızca geçerli sabit satır içinde gezinir.

Sabit satır sonları ve karakter başına biçimlendirme, MTEXT formatı kullanılarak saklanır ve tam DXF round-trip'ten geçer.

## DXF Uyumluluğu

Metin nesneleri DXF dosyalarında **MTEXT** olarak saklanır. Kalın ve italik `\L`, `\K`, `\O` ve satır içi yazı tipi anahtarları (`\f`) olarak kodlanır. Karakter başına yükseklik `\H` olarak kodlanır. Tüm biçimlendirme dışa aktarmada korunur ve LibreCAD, FreeCAD ve diğer DXF uyumlu uygulamalar tarafından okunabilir.
