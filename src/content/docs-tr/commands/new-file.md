---
sidebar_position: 47
title: New File Komutu — KulmanLab CAD'de Yeni Boş Çizim Başlat
description: New File komutu, kaydetme istemi olmadan hemen yeni boş çizim başlatır. Kaydedilmemiş değişiklikler uyarısız kaybolur. Yeni dosya adı otomatik oluşturulur.
keywords: [CAD new file komutu, yeni çizim CAD, yeni dosya başlat CAD, kulmanlab]
---

# New File

`new file` komutu anında yeni boş çizim başlatır. Araç çubuğundaki **yeni sayfa** simgesine tıklayın veya terminale `new file` yazın.

> **Uyarı:** New File **onay istemez** ve geçerli çizimi otomatik **kaydetmez**. Kaydedilmemiş çalışmalar kaybolur. Geçerli çizimi kaydetmeniz gerekiyorsa önce [Export](./export) kullanın.

## Yeni Dosyanın İçeriği

| Konu | Değer |
|------|-------|
| Nesneler | Hiç yok — boş tuval |
| Katmanlar | Yalnızca varsayılan katman (Katman 0) |
| Dosya adı | Otomatik oluşturulur: `kulman-Mon01_HH:MM:SS.dxf` |

## New File - Import Karşılaştırması

| | New File | Import |
|---|----------|--------|
| İçerik | Boş tuval | Seçilen dosyanın içeriği |
| Önceki çizim | Değiştirilir (uyarısız) | Değiştirilir (uyarısız) |
| En iyi | Yeni çizim başlatma | Mevcut DXF veya JSON açma |

## İlgili Komutlar

- [Files](./files) — kaydedilen çizimleri görüntüler ve geri yükler
- [Export](./export) — yeni başlamadan önce geçerli çizimi indirir
- [Import](./import) — sıfırdan başlamak yerine mevcut dosyayı açar
