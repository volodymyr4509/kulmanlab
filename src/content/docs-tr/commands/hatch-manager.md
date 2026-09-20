---
title: Hatch Manager Komutu — .pat Desenlerine Göz Atın ve Yükleyin
description: Hatch Manager komutu, canlı örnek önizlemesiyle hatch desenlerine göz atmak ve kendi .pat desen dosyalarınızı yüklemek için bir iletişim kutusu açar. Yüklenen dosyalar tarayıcıda saklanır ve aynı ada sahip yerleşik desenlerin önüne geçer.
keywords: [hatch manager, özel hatch deseni CAD, pat dosyası yükleme, acad.pat, hatch desen kitaplığı, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

`TaramaYöneticisi` komutu, canlı örnek önizlemesiyle hatch desenlerine göz atmak ve [Hatch](../hatch/) ile kullanmak üzere kendi `.pat` desen dosyalarınızı yüklemek için bir iletişim kutusu açar.

## Hatch Manager'ı Açma

Terminale `TaramaYöneticisi` yazın. Bu, bir hatch'in **Pattern** çipine tıkladığınızda açılan desen seçiciden ayrıdır — seçici tek bir hatch için desen seçer, Hatch Manager ise `.pat` dosyaları eklediğiniz veya kaldırdığınız yerdir.

## Desen Grupları

| Grup | İçerik |
|------|--------|
| **User** | Kendi yüklediğiniz `.pat` dosyalarından gelen desenler, her desenin hangi dosyadan geldiğine göre alt gruplanmış (yalnızca birini yükledikten sonra gösterilir) |
| **Standard** | `SOLID` artı bu çizimin kendi desen tablosu — her yeni çizim, katmanları ve çizgi türleri gibi aynı yerleşik kitaplıkla başlar |

Listedeki herhangi bir desene tıklayın (veya `↑`/`↓` kullanın) sağda önizlemek için — tuvalin doldurulduğu aynı kodla çizilmiş bir örnek, bu yüzden çizimin göstereceği şey tam olarak budur, artı desenin adı, açıklaması ve çizgi sayısı.

## Özel Bir Desen Dosyası Yükleme

1. İletişim kutusunun alt bilgisinde **Add .pat File**'a tıklayın.
2. Bir `.pat` dosyası seçin — standart hatch desen formatı. Tek bir dosya genellikle birçok adlı deseni aynı anda tanımlar; hepsi o dosyanın adı altında gruplandırılmış ayrı girişler olarak görünür.
3. Yüklenen dosyalar tarayıcıda (IndexedDB) kalıcı olarak saklanır, en son eklenen önce sıralanır ve bir sonraki KulmanLab CAD'i açtığınızda otomatik olarak yeniden yüklenir.

Yerleşik bir desenle aynı ada sahip bir desen tanımlayan bir dosya yüklemek varsayılanın **önüne geçer** — bu, Autodesk'in yetkili desen tanımlarını almanın desteklenen yoludur: gerçek bir `acad.pat` yükleyin ve ANSI31'in ve diğer standart adların sürümleri KulmanLab'ın kendi yaklaşık değerlerinin yerini alır.

Bir çizim, kitaplığınızda olmayan bir desen adına atıfta bulunuyorsa — yüklemediğiniz bir `acad.pat`'ten gelen bir desen kullanan bir DXF'den içe aktarılmışsa — hatch, düz, desensiz bir dolguya geri dönmek yerine, yer tutucu olarak `ANSI31`'i kullanarak yine de işlenir.

## Bir Desen Dosyasını Kaldırma

**User** grubundaki bir dosya adının yanındaki **×**'e tıklayarak onu ve tanımladığı her deseni kaldırın. Bu desenlerden birini zaten kullanan herhangi bir hatch hemen `ANSI31`'e geri döner. Yerleşik **Standard** desenler kaldırılamaz.

## Klavye Referansı

| Tuş | Eylem |
|-----|-------|
| `↑` / `↓` | Seçimi desen listesinde yukarı veya aşağı taşır |
| `Escape` | Hatch Manager'ı kapatır |

## İlgili Komutlar

- [Hatch](../hatch/) — şu anda seçili deseni kullanarak tıklanan bir alanı doldurur
- [Font Manager](../font-manager/) — hatch desenleri yerine özel yazı tipleri için aynı yükleme/göz atma deseni
