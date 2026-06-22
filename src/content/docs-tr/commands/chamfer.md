---
sidebar_position: 20
title: Chamfer Komutu — KulmanLab CAD'de Çizgiler Arasında Düz Pah Kes
description: Chamfer komutu, iki çizgi veya bitişik çoklu çizgi segmentleri arasındaki köşede düz köşegen pah kesar. İki köşe mesafesi girin, ardından korunacak tarafları tıklayın.
keywords: [CAD chamfer komutu, çizgiler arası pah CAD, köşe kes CAD, pah mesafesi CAD, kulmanlab]
---

# Chamfer

`chamfer` komutu, iki çizgi veya bitişik [çoklu çizgi](./polyline) segmentleri arasındaki köşede düz köşegen pah keser — [Fillet](./fillet) komutuna benzer, ancak yay yerine düz çizgi eklenir.

## Nasıl Kullanılır

1. Terminale `chamfer` yazın veya araç çubuğundaki **Chamfer** düğmesine basın.
2. **Birinci pah mesafesini girin** (köşeden birinci çizgi boyunca olan mesafe) ve **Enter** tuşuna basın.
3. **İkinci pah mesafesini girin** (köşeden ikinci çizgi boyunca olan mesafe) ve **Enter** tuşuna basın. Simetrik pah için aynı değeri girin.
4. **Birinci çizgiyi tıklayın** — **korumak istediğiniz tarafa** daha yakın.
5. **İkinci çizgiyi tıklayın** — aynı şekilde kalan tarafa daha yakın. Pah eklenir.

## Taraf Seçimi

[Fillet](./fillet) komutuna benzer şekilde, **önceden kesişen** çizgiler için tıklama konumu kesişimin hangi tarafının korunacağını belirler. Her çizginin kırpmadan sonra kalacak kısmını tıklayın.

## Komutun Oluşturduğu

| | Değer |
|---|-------|
| **T1** | Birinci çizgi boyunca ölçüm noktası — kırpıldığı yer |
| **T2** | İkinci çizgi boyunca ölçüm noktası — kırpıldığı yer |
| **Düz çizgi** | T1 ve T2 arasına eklenir, birinci çizginin rengini ve katmanını devralır |

## Simetrik - Asimetrik Pah Karşılaştırması

- **Simetrik** (her iki mesafe eşit): dik çizgiler için 45° pah.
- **Asimetrik** (farklı mesafeler): daha keskin veya daha geniş açılı pah.

## 0 Mesafesi

Her iki mesafe de 0 olduğunda — çizgiler keskin köşeye kadar kırpılır veya uzatılır (R=0 ile Fillet ile aynı), pah eklenmez.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Mesafe girer |
| `Backspace` | Son karakteri siler |
| `Enter` | Mesafeyi onaylar |
| `Escape` | İptal eder |

## Desteklenen Nesneler

- [Line](./line) — tam desteklenir
- Bitişik [Polyline](./polyline) segmentleri — çoklu çizgi içinde pah

## Chamfer - Fillet Karşılaştırması

| | Chamfer | Fillet |
|---|---------|--------|
| Ne eklenir | Düz çizgi (pah) | Teğet yay |
| Giriş | İki mesafe | Tek yarıçap |
| En iyi | Makine pahları, kesikler | Düzgün köşeler, yuvarlamalar |
