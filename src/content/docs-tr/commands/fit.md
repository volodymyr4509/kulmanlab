---
sidebar_position: 45
title: Fit Komutu — KulmanLab CAD'de Tüm Çizimi Pencereye Sığdır
description: Fit komutu, tüm nesnelerin sınırlayıcı kutusunu hesaplar ve tüm çizimi görüntülemek için görünüm ölçeğini ve konumunu ayarlar. Orta fare düğmesine çift tıklama kısayoldur.
keywords: [CAD fit komutu, tüm çizimi sığdır, hepsini göster CAD, boyuta göre ölçek, kulmanlab]
---

# Fit

`fit` komutu, tüm nesnelerin sınırlayıcı kutusunu hesaplar ve tüm çizimin pencerede görünür olması için görünüm ölçeğini ve konumunu ayarlar.

## Nasıl Çalıştırılır

- Araç çubuğundaki **Fit** düğmesine basın, veya
- **Orta fare düğmesine çift tıklayın** (hızlı kısayol).

> Not: klavye kısayolu yoktur — orta düğmeye çift tıklamayı kullanın.

## Sınırlayıcı Kutu Algoritması

1. Çizimdeki tüm nesneleri toplar.
2. Tüm köşeleri/merkezleri kapsayan **minimum dikdörtgeni** hesaplar.
3. Dikdörtgen + kenar boşluğu penceresine sığacak şekilde görünümü ölçekler.
4. Görünümü dikdörtgenin merkezinde ortalar.

| Çizim durumu | Davranış |
|--------------|---------|
| Genişlikten fazla yükseklik | Pencere genişliğine göre ölçeklenir |
| Yükseklikten fazla genişlik | Pencere yüksekliğine göre ölçeklenir |
| Tek nesne | Etrafında kenar boşluğuyla ölçeklenir |
| Boş çizim | Görünüm değişmez |

## Fit - Manuel Zoom Kontrolleri Karşılaştırması

| | Fit | Zoom In / Zoom Out | Tekerlek kaydırma |
|---|-----|--------------------|-------------------|
| Hassasiyet | Otomatik | 1.5× adımlar | 1.5× adımlar |
| Konum | Otomatik ortalanır | İmleç etrafında zoom | İmleç etrafında zoom |
| En iyi | Tam çizime genel bakış | Belirli alana gitme | Pürüzsüz gezinme |

## İlgili Görünüm Komutları

| Komut | İşlem |
|-------|-------|
| [Zoom In](./zoom-in) | 1.5× yakınlaştırır |
| [Zoom Out](./zoom-out) | 1.5× uzaklaştırır |
| [Pan](./pan) | Ölçeklendirmeden görünümü kaydırır |
