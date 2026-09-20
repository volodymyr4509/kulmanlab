---
title: ChangePrintArea — Print Manager çıktısını bir dikdörtgene kırpma
description: ChangePrintArea komutu, Print Manager'ın dışa aktardığı bölgeyi belirlemek için tuvalde iki karşıt köşe seçer. Yazılan X,Y koordinatlarını ve yakalamayı destekler; alanı Model uzayı ve her düzen için ayrı ayrı hatırlar.
keywords: [CAD baskı alanı, CAD dışa aktarım kırpma, change print area komutu, print manager kırpma, CAD dışa aktarım bölgesi, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

`YazdırmaAlanınıDeğiştir` komutu, [Print Manager](../print-manager/)'ın dışa aktardığı dikdörtgen bölgeyi belirler. Print Manager gizliyken boş tuvalde çalışır ve iki karşıt köşe alır — [Rectangle](../rectangle/) ile aynı iki tıklama, dolayısıyla yazılan koordinatlar ve yakalama orada olduğu gibi davranır.

## Alan seçme

1. Terminale `YazdırmaAlanınıDeğiştir` yazın veya Print Manager kenar çubuğundaki **Change Area** düğmesine tıklayın. Print Manager gizlenir ve tuval etkileşimli hale gelir.
2. **İlk köşeye tıklayın** veya tam koordinat için `X,Y` yazıp **Enter**'a basın.
3. **Karşıt köşeye tıklayın** veya yeniden `X,Y` yazın.

Print Manager, yeni alan önizlemede olacak şekilde yeniden açılır; önizleme o alanın tam en-boy oranına göre yeniden boyutlanır.

Köşeler, diğer tüm nokta seçimleri gibi tutamaçlara ve kesişimlere yakalanır; böylece göz kararı yerine çizili geometriye göre kırpabilirsiniz. İki köşenin sırası önemsizdir: karşıt köşeler aynı dikdörtgeni tanımlar.

İptal etmek için `Escape` tuşuna basın. Hiçbir şey yazılmaz, bu yüzden Print Manager zaten sahip olduğu alanla yeniden açılır.

## Alanın nerede hatırlandığı

Seçim genel olarak değil, bağlam başına saklanır:

| Bağlam | Yuva |
|---|---|
| Model uzayı | Tek bir ortak yuva |
| Her düzen | Ayrı tutulan kendi yuvası |

Print Manager'ı aynı düzende — veya Model'de — yeniden açmak, sıfırlamak yerine o bağlamın son kırpmasını geri yükler; düzenler arasında geçiş yapmak her birinin alanını bozmaz.

Bu yalnızca bellekte tutulur. Sayfayı yeniden yüklemek saklanan tüm alanları siler ve Print Manager aşağıdaki varsayılanlara döner.

## Varsayılan alan

Geçerli bağlam için hiçbir şey saklanmamışsa Print Manager şununla açılır:

| Bağlam | Varsayılan |
|---|---|
| Model uzayı | Tüm varlıkların sınırlayıcı kutusu — [Fit](../fit/) komutunun yakınlaştırdığı aynı kapsam |
| Her düzen | Sayfanın tamamı |

## İlgili komutlar

| Komut | Ne yapar |
|---|---|
| [Print Manager](../print-manager/) | Bu alanın uygulandığı dışa aktarma penceresi |
| [Rectangle](../rectangle/) | Aynı iki köşe seçimi, ancak bir polyline çizer |
| [Fit](../fit/) | Model uzayının varsayılan olarak kullandığı kapsama yakınlaştırır |
