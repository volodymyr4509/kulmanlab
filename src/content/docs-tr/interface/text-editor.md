---
sidebar_position: 4
title: Metin Düzenleyici — KulmanLab CAD Arayüz Referansı
description: Metin Düzenleyici, yazı tipi, metin yüksekliği, hizalama, dönme açısı ve satır aralığını kontrol eder. Seçili metne uygulanır veya yeni metin için varsayılanları ayarlar. DXF TABLES→STYLE ve TEXT/MTEXT nesneleri.
keywords: [CAD metin düzenleyici, text editor CAD, CAD yazı tipi, metin hizalama CAD, MTEXT DXF, kulmanlab]
---

# Metin Düzenleyici

**Metin Düzenleyici** paneli, mevcut metin nesnelerinin özelliklerini değiştirmenizi veya yeni metin eklemeden önce varsayılan değerleri belirlemenizi sağlar.

## Erişim

- Tuval üzerindeki bir metin nesnesini seçin — panel özelliklerini göstermek için güncellenir.
- Seçim yoksa — panel yeni metin için varsayılan değerleri gösterir.

## Yazı Tipi

| Seçenek | Açıklama |
|---------|----------|
| **Standard** | Varsayılan CAD yazı tipi |
| **Arial / Helvetica** | Sans-serif yazı tipi |
| **Times / Serif** | Serif yazı tipi |
| **Monospace** | Sabit genişlikli yazı tipi |

## Metin Yüksekliği

Metin yüksekliği dünya koordinatlarındaki birimlerle belirtilir (mm, m, inç vb. — birimi siz belirlersiniz).

## Hizalama

| Seçenek | Açıklama |
|---------|----------|
| **Sol** | Metin sol kenardan başlar |
| **Orta** | Metin yatay olarak ortalanır |
| **Sağ** | Metin sağ kenardan biter |

## Dönme Açısı

Metin bloğunun dönme açısı derece cinsindendir. DXF açı kuralını takip eder: pozitif değer saat yönünün tersine döner.

## Satır Aralığı

Çok satırlı metinlerde satırlar arası boşluk katsayısı. 1,0 = tek aralık; 2,0 = çift aralık.

## DXF'te Depolama

- Yazı tipleri DXF dosyasında `TABLES → STYLE` bölümünde tanımlanır.
- Metin nesneleri `MTEXT` (çok satırlı metin) veya `TEXT` (tek satır) olarak dışa aktarılır.
- KulmanLab CAD, yazar ve okuma sırasında bu biçimleri destekler.
