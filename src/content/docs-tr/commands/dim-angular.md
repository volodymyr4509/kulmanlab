---
title: Dimension Angular — Çizgi, Yay ve Daireler Arasındaki Açıları Ölç
description: DimensionAngular komutu, çizgiler, yaylar veya daireler üzerine açısal ölçü ek açıklaması yerleştirir. İki çizgi açısı, yay kapsamı ve daire sektörü modlarını destekler.
keywords: [açısal ölçü CAD, açı ölçüsü, çizgiler arasındaki açıyı ölç, DimensionAngular, yay ölçüsü, açı ek açıklaması, CAD açı işareti, kulmanlab açısal ölçü]
group: markup
order: 9
---

# Dimension Angular

`DimensionAngular` komutu, çizime **açısal ölçü** yay ek açıklaması yerleştirir. İki çizgi arasındaki açıyı, bir yayın kapsamını veya bir dairenin sektörünü ölçer ve etiketler.

## Nasıl Etkinleştirilir

İşaretleme panelindeki **Dimension Angular** araç çubuğu düğmesine tıklayın veya terminale `DimensionAngular` yazın.

## Üç Giriş Modu

İlk tıklama hangi modun kullanılacağını belirler:

### İki Çizgi

1. **Birinci çizgiyi tıklayın.** İmleç konumu çizginin hangi tarafının kullanıldığını belirler.
2. **İkinci çizgiyi tıklayın.** İki çizgi kesişmelidir (kesişim otomatik olarak hesaplanır; ekranda görünmesi gerekmez).
3. **Ölçü yayını yerleştirmek için tıklayın.** İmleci hareket ettirerek yarıçapı ve hangi açısal sektörün etiketleneceğini seçin — ek açıklama, köşenin hangi tarafında olduğunuza bağlı olarak imleci takip eder.

Paralel çizgiler açısal ölçü oluşturamaz; çizgiler kesişmiyorsa komut ikinci tıklamayı yoksayar.

### Yay

1. **Bir yayı tıklayın.** Ölçü, yayın başlangıç açısından bitiş açısına kadar, yayın merkezini köşe olarak kullanarak hemen oluşturulur.
2. **İstenen yarıçapta ölçü yayını yerleştirmek için tıklayın.**

### Daire

1. **Bir daireyi tıklayın.** Birinci açı uç noktası daire üzerindeki en yakın noktaya yakalanır.
2. **Daire üzerinde ikinci noktayı tıklayın** — ikinci açı uç noktasını tanımlamak için.
3. **Ölçü yayını yerleştirmek için tıklayın.**

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Escape` | İptal eder ve birinci seçime döner |

## Davranış Ayrıntıları

- Ölçü yayı her zaman yerleştirdiğiniz köşenin tarafında çizilir — imleci köşe üzerinden geçirerek tamamlayıcı açıya geçin.
- Ölçülen açı derece cinsinden gösterilir ve yerleştirme sırasında imleci hareket ettirdikçe canlı olarak güncellenir.
- Elde edilen ek açıklama, mevcut katmanda saklanan tam bir `DimensionAngular` nesnesidir. Görünüm özellikleri (ok boyutu, metin yüksekliği, uzatma çizgisi uzunluğu) Özellikler panelinden ayarlanabilir.
- Açısal ölçüler JSON dışa aktarımına dahil edilir ancak DXF dışa aktarıcı tarafından desteklenmez.

## Etiketi Düzenleme — simple mode

Yerleştirilen açısal ölçüye **çift tıklayarak** metin düzenleyiciyi **simple** modda açın. Düzenleyici, imleci konumlandırıp doğrudan düzenleyebilmeniz için geçerli görüntülenen değerle önceden doldurulmuştur.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Font / Height | **Tüm** etikete aynı anda uygulanır |
| Karakter başına biçimlendirme | Desteklenmez |
| `Enter` | Değeri kaydeder ve düzenleyiciyi kapatır |
| Çok satırlı | Desteklenmez |

Tam referans için [Metin Düzenleyici — simple mode](../../interface/text-editor/#simple-mode) sayfasına bakın.

## İlgili Komutlar

- [Dimension Linear](../dim-linear/) — yatay veya dikey ölçü
- [Dimension Aligned](../dim-aligned/) — iki noktaya hizalı ölçü
- [Dimension Radius](../dim-radius/) — yay ve daireler için yarıçap ölçüsü
- [Dimension Diameter](../dim-diameter/) — daireler için çap ölçüsü
