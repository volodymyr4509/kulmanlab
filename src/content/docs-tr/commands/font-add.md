---
title: FontAdd — Terminalden Özel Bir TTF Yazı Tipi Yükleyin
description: FontAdd komutu, önce Font Manager iletişim kutusunu açmadan bir .ttf yazı tipi yüklemek için sistemin dosya seçicisini açar. Bu, Font Manager'daki "Add Font" düğmesinin tetiklediği yüklemenin aynısıdır; burada kendi başına bir terminal komutu olarak sunulur.
keywords: [font add komutu, fontadd komutu, ttf yükle terminal, özel yazı tipi CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

`YazıTipiEkle` komutu, önce [Font Manager](../font-manager/) iletişim kutusunu açmadan özel bir `.ttf` yazı tipi yüklemek için sistemin dosya seçicisini açar. Bu, Font Manager'daki **Add Font** düğmesinin tetiklediği yüklemenin aynısıdır — FontAdd sadece terminalden oraya doğrudan bir yoldur.

## Yazı tipi yükleme

1. Terminale `YazıTipiEkle` yazın veya [Font Manager](../font-manager/) iletişim kutusunun altındaki **Add Font**'a tıklayın.
2. Sistem seçicisinde bir `.ttf` dosyası seçin. Yalnızca TrueType yazı tipleri desteklenir — `.otf` ve `.woff`/`.woff2` desteklenmez.

Dosya seçici açılır açılmaz komut tamamlanır — ardından başka bir tıklama veya terminal girişi gelmez. Dosya seçilir seçilmez yazı tipi kaydedilir ve **User** grubunda görünür.

## Yüklerken ne olur

- Dosya adı (uzantısız) yazı tipinin adı olur. `MyFont.ttf` yüklemek, `MyFont` adlı bir yazı tipi ekler.
- Adı mevcut bir özel yazı tipiyle eşleşen bir dosya yüklemek onun yerini **alır**.
- Yazı tipi tarayıcıda (IndexedDB) kalıcı olarak kaydedilir ve KulmanLab CAD'i bir sonraki açışınızda otomatik olarak yeniden yüklenir — geçerli çizime bağlı değildir.

## Klavye Referansı

FontAdd'ın kendine ait bir klavye etkileşimi yoktur — komutun tamamı tarayıcının yerel dosya seçici iletişim kutusundan oluşur. Bu iletişim kutusunu iptal etmek (veya hiçbir dosya seçmemek) yazı tipi listesini değiştirmeden bırakır.

## İlgili Komutlar

| Komut | Ne yapar |
|-------|----------|
| [Font Manager](../font-manager/) | Kendi yüklemeleriniz dahil yazı tiplerine göz atın, önizleyin, seçin ve kaldırın |
| [Text](../text/) | Yazı tipi seçimlerinin uygulandığı metin etiketlerini yerleştirir |
