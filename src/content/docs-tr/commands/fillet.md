---
title: Fillet Komutu — KulmanLab CAD'de Çizgiler Arasındaki Köşeleri Yuvarla
description: Fillet komutu, iki çizgi veya bitişik çoklu çizgi segmentleri arasına teğet yay ekler, çizgileri dokunma noktasına kadar kırpar veya uzatır. Kesişen çizgilerde korunacak köşe tarafını tıklayın.
keywords: [CAD fillet komutu, köşe yuvarlama CAD, çizgiler arası yay ekle, yuvarlama yarıçapı CAD, kulmanlab]
group: edit
order: 11
---

# Fillet

`fillet` komutu, iki çizgi veya segment arasına pürüzsüz teğet yay ekler ve bunları pürüzsüz şekilde birleşecek şekilde kırpar veya uzatır.

## Nasıl Kullanılır

1. Terminale `fillet` yazın veya araç çubuğundaki **Fillet** düğmesine basın.
2. **Yarıçapı girin** ve **Enter** tuşuna basın.
3. **Birinci çizgiyi tıklayın** — **korumak istediğiniz tarafa** daha yakın.
4. **İkinci çizgiyi tıklayın** — aynı şekilde kalan tarafa daha yakın. Yay eklenir, çizgiler kırpılır.

## Kesişen Çizgiler için Taraf Seçimi

İki çizgi önceden kesiştiğinde, her çizgide tıklama yeri kesişimin **hangi tarafının** korunacağını belirler:

```
  Önce:                    Fillet sonrası (R=5):
  |   |                  |   |
  | × |   ← kesişim      |   |
  |   |                       ╮
  ────┼────              ─────╯
```

Yatay çizgide ×'in soluna ve dikey çizgide ×'in altına tıklamak — sol-alt köşeyi korur ve köşeye yay ekler.

## Komutun Oluşturduğu

| | Değer |
|---|-------|
| **T1** | Birinci çizgideki dokunma noktası — birinci çizginin kırpıldığı yer |
| **T2** | İkinci çizgideki dokunma noktası — ikinci çizginin kırpıldığı yer |
| **Yay** | T1 ve T2 arasına eklenir, birinci çizginin rengini ve katmanını devralır |

Çizgiler kesişmiyorsa, yay eklenmeden önce dokunma noktasına kadar **uzatılırlar**.

## 0 Yarıçapı

Yarıçap 0 olduğunda köşe keskinleşir — çizgiler yay eklenmeden kesişim noktasına kadar kırpılır veya uzatılır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Yarıçap girer |
| `Backspace` | Son karakteri siler |
| `Enter` | Yarıçapı onaylar |
| `Escape` | İptal eder |

## Desteklenen Nesneler

- [Line](../line/) — tam desteklenir
- Bitişik [Polyline](../polyline/) segmentleri — çoklu çizgi içinde yuvarlama

## Fillet - Chamfer Karşılaştırması

| | Fillet | Chamfer |
|---|--------|---------|
| Ne eklenir | Teğet yay | Düz çizgi (pah) |
| Giriş | Tek yarıçap | İki mesafe (farklı olabilir) |
| En iyi | Pürüzsüz geçişler | Köşegen kesikler |
