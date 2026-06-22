---
sidebar_position: 4
title: Metin Düzenleyici — KulmanLab CAD'de Zengin Metin Biçimlendirme
description: KulmanLab CAD metin düzenleyicisi, kalın, italik, üstü çizili, karakter başına yazı tipi ve yükseklik geçersiz kılmaları, kelime kaydırma ve tam imleç gezintisiyle çok satırlı, zengin biçimli MTEXT etiketleri yerleştirmenizi sağlar.
keywords: [CAD metin düzenleyici, MTEXT, kalın italik CAD, metin biçimlendirme CAD, çok satırlı metin CAD, kelime kaydırma CAD, kulmanlab]
---

# Metin Düzenleyici

Metin düzenleyici, `text` komutuyla yeni bir metin etiketi yerleştirdiğinizde veya mevcut bir metin nesnesine çift tıkladığınızda açılır. Çok satırlı içeriği, karakter başına biçimlendirmeyi ve kelime kaydırmayı destekler.

## Düzenleyiciyi Açma

| İşlem | Sonuç |
|--------|--------|
| `text` komutu → konumu tıkla | Yeni bir metin nesnesi oluşturur ve düzenleyiciyi açar |
| Mevcut bir metin nesnesine çift tıkla | O nesne için düzenleyiciyi yeniden açar |
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
