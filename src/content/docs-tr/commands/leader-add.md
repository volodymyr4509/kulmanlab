---
sidebar_position: 24
title: Leader+ Komutu — KulmanLab CAD'de Mevcut Göstergeye Ok Kolu Ekle
description: Leader+ komutu, mevcut çok segmentli göstergeye yeni bir ok kolu ekler. Yeni kol, seçilen göstergenin geçiş bölgesini, metnini ve tüm stilini devralır. İki tıklama — göstergeyi seçin, yeni ok ucunu yerleştirin.
keywords: [CAD leader add komutu, gösterge kolu ekle CAD, MLEADER çoklu ok, kulmanlab]
---

# Leader+

`leader+` komutu, mevcut çok segmentli göstergeye yeni bir ok kolu ekler. Yeni kol, mevcut göstergenin geçiş bölgesinden tıkladığınız yeni ok ucuna uzanır. Tüm stil — geçiş bölgesi konumu, metin, ok tipi ve boyut — seçilen göstergeden devralınır.

## Kol Ekleme

1. Terminale `leader+` yazın.
2. Seçmek için **mevcut çok segmentli göstergeye tıklayın**.
3. **Yeni ok ucunu tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın. Önizleme çizgisi imleçten göstergenin geçiş bölgesine uzanır.

Kol yerleştirilir ve komut aktif kalır — hemen başka bir göstergeye tıklayarak daha fazla kol ekleyebilirsiniz. Tamamlamak için **Enter**, **Boşluk** veya **Escape** tuşuna basın.

```
  Önce:                                   Sonra:
  ◄── kol 1                           ◄── kol 1
       \                                      \
        ●──── geçiş ──── metin               ●──── geçiş ──── metin
                                              /
                                  kol 2 ──►  (tıkladığınız yeni uç)
```

## Ok Ucu Koordinatı Girişi

Tıklamak yerine kesin konum girebilirsiniz:

1. X değerini yazın.
2. `,` tuşuna basın — terminal X kilidini onaylar.
3. Y değerini yazın.
4. Yerleştirmek için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Enter` | Girilen koordinatı onaylar ve kolu yerleştirir |
| `Enter` / `Boşluk` | Tamamlar (devam eden giriş yokken) |
| `Escape` | İptal eder ve sıfırlar |

## Notlar

- Yalnızca **Çok Segmentli Gösterge** nesneleri seçilebilir — başka herhangi bir nesne türüne tıklamak hiçbir şey yapmaz.
- Yeni kol mevcut geçiş bölgesinden başlar; yalnızca ok ucunun nereye yerleşeceğini tanımlarsınız.
- Çok segmentli göstergenin kol sayısında sınır yoktur.

## İlgili Komutlar

| Komut | Ne yapar |
|-------|----------|
| [Leader](../leader/) | Sıfırdan yeni gösterge oluşturur |
| [Leader−](../leader-remove/) | İki veya daha fazla kollu göstergeden kol kaldırır |
