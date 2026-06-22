---
sidebar_position: 47
title: New File — KulmanLab CAD'de Boş Çizim Başlat
description: New File komutu, tuvali temizler ve yeni boş çizim açar. Zaman damgalı bir dosya adı otomatik oluşturulur ve tarayıcı deposuna kaydedilir.
keywords: [yeni CAD dosyası, yeni çizim, boş tuval CAD, çevrimiçi yeni çizim oluştur, yeni DXF başlat, KulmanLab new file, tuvali sıfırla, çizimi temizle]
---

# New File

**New File** komutu, tuvali temizler ve yeni boş çizim başlatır. Zaman damgalı benzersiz bir dosya adı otomatik oluşturulur.

## Yeni Dosya Nasıl Oluşturulur

Dosya panelindeki **New File** araç çubuğu düğmesine (yeni sayfa simgesi) tıklayın. Tuval anında temizlenir — istem veya onay iletişim kutusu yoktur.

## Yeni Dosyanın İçeriği

Yeni oluşturulan bir dosya şunlarla başlar:

- Tuvalde **nesne yok**.
- Rengi beyaz ve çizgi türü `Continuous` olan `0` adında **bir varsayılan katman**.
- `kulman-Mon01_HH:MM:SS.dxf` biçiminde **oluşturulmuş bir dosya adı** (örneğin `kulman-May22_14:30:00.dxf`).

Dosya tarayıcı deposuna otomatik olarak kaydedilir ve [Son Dosyalar](./files) bölümünde görünür.

## Uyarı — Kaydedilmemiş Çalışma Silinir

**New File**'a tıklamak, geçerli tuvaldeki tüm nesneleri uyarı vermeden atar. Geçerli çizimi saklamak istiyorsanız, önce [dışa aktarın](./export).

## New File - Import Karşılaştırması

| Durum | Önerilen işlem |
|-----------|-------------------|
| Sıfırdan çizim başlatma | **New File** |
| Mevcut DXF veya JSON dosyası açma | [Import](./import) |
| Bir varyant üzerinde çalışmak için çizimi kopyalama | Mevcut dosyayı [Export](./export) edin, ardından kopyayı [Import](./import) edin |

## İlgili Komutlar

- [Import](./import) — mevcut DXF veya JSON çizimini açar
- [Export](./export) — sıfırdan başlamadan önce çizimi indirir
- [Files](./files) — tarayıcı deposundan önceki çizimi geri yükler
