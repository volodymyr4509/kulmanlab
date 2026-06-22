---
sidebar_position: 51
title: WipeStorage Komutu — KulmanLab CAD'de Tarayıcı Deposundan Tüm Çizimleri Temizle
description: WipeStorage komutu, tarayıcının yerel deposunda kaydedilen tüm çizimleri siler. İşlem geri alınamaz — temizlemeden önce önemli çizimleri Export ile kaydedin.
keywords: [CAD wipestorage komutu, tarayıcı deposunu temizle CAD, tüm çizimleri sil, CAD verilerini sıfırla, kulmanlab]
---

# WipeStorage

`wipestorage` komutu, tarayıcının yerel deposundaki tüm çizimleri ve kaydedilen verileri siler. İşlem **geri alınamaz** — kullanmadan önce önemli çizimleri [Export](./export) ile kaydedin.

## Depoyu Temizleme

1. Terminale `wipestorage` yazın veya **WipeStorage** düğmesine basın.
2. Görüntülenen iletişim kutusunda onaylayın — tüm çizimler silinir ve yeni boş çizim başlatılır.

## Ne Zaman Kullanılır

- Tarayıcı deposu doldu ve uygulama uyarı veriyor.
- Cihazı başka bir kullanıcıya devretmek için durumu tamamen sıfırlamanız gerekiyor.
- Bozuk veri sorunlarını giderme.

> **Acil durum alternatifi**: Uygulama her başlatmada çöküyorsa (örneğin çok büyük koordinatlar nedeniyle) ve WipeStorage kullanılamıyorsa — düzenleyiciyi başlatmadan sıfırlamak için `https://kulmanlab.com/?resetKulmanLocalStorage` adresini açın.

## WipeStorage - New File Karşılaştırması

| | WipeStorage | New File |
|---|-------------|----------|
| Ne siler | Depodan tüm çizimleri | Hiçbir şey — sadece boş tuval açar |
| Geçerli çizim | Silinir | Depoda korunur |
| Geri alınabilir | Hayır | Evet değil, ama silmez |
