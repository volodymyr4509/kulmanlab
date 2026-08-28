---
title: Seçim filtresi — Çoklu seçimi özelliğe göre daraltma
description: Çok sayıda nesne seçiliyken özellik panelinin başlığındaki filtre simgesi, Tür, Katman, Renk, Çizgi kalınlığı ve Çizgi tipi için seçimin içinde gerçekten bulunanlardan oluşturulan canlı onay listelerini içeren bir pencere açar; böylece büyük ve karışık bir seçim toplu düzenlemeden önce daraltılabilir.
keywords: [seçim filtresi, seçimi filtreleme CAD, faset filtre, seçimi daraltma, toplu düzenleme CAD, özellik paneli filtresi, kulmanlab]
group: interface
order: 7
---

# Seçim filtresi

Çok sayıda nesneyi aynı anda seçmek, özellik panelini çoklu seçim görünümünde açar ("Selection (N)"). Kapat düğmesinin yanındaki **filtre simgesi**, bu seçimi toplu düzenlemeden önce özelliğe göre daraltmanızı sağlar.

## Filtreyi açma

1. Birkaç nesne seçin — bir seçim çerçevesi sürükleyin, Shift ile tıklayın ya da Ctrl+A'ya basın.
2. Özellik panelinin başlığındaki **filtre simgesine** (huni) tıklayın.
3. Düğmenin altında, seçim içinde gerçekten değişkenlik gösteren her özellik için bir onay listesi içeren pencere açılır.

## Fasetler

Pencere, her biri geçerli seçimden canlı olarak oluşturulan en fazla beş faset gösterebilir:

| Faset | Gösterilen değerler |
|-------|---------------------|
| **Tür** | Nesne türünün adı (Line, Circle, Hatch, …) |
| **Katman** | Katman adı ve o katmana uyan renk örneği |
| **Renk** | ACI renk dizini |
| **Çizgi kalınlığı** | Çizgi kalınlığı değeri |
| **Çizgi tipi** | Çizgi tipinin adı |

Bir faset yalnızca seçim onun için gerçekten birden fazla farklı değer içeriyorsa görünür — hepsi aynı katmandaki on çizgiyi seçmek Katman fasetini göstermez, çünkü orayı işaretlemek hiçbir şeyi daraltmaz. Belirli bir özelliği hiç taşımayan nesneler (örneğin Hatch ve Text'in çizgi kalınlığı ya da çizgi tipi yoktur) o fasette basitçe sayılmaz — o faset yüzünden hiçbir zaman dışarıda da bırakılmazlar.

## Seçimi daraltma

Seçimi, **işaretlenmiş tüm** fasetlere uyan nesnelere daraltmak için herhangi bir fasette bir veya daha fazla değeri işaretleyin (bir nesnenin, yalnızca birinde değil, dokunduğunuz *her* fasette en az bir işaretli değere uyması gerekir). Her fasetin kendi kutuları ve sayıları, *diğer* işaretli fasetlerin halihazırda neye daralttığını yansıtır; böylece bir faset kendi işaretlenmiş seçeneklerini asla gizlemez — fasetli aramanın olağan davranışı.

Sonuç sayısı siz kutuları işaretleyip kaldırdıkça canlı güncellenir ve tuvaldeki seçim de buna göre daralır: bu yalnızca bir görüntü filtresi değildir; artık uymayan nesneler gerçekten seçimden çıkarılır ve süzdüğünüz alt kümeyi tam olarak toplu düzenlemeye hazır hale gelir.

## Filtreleri temizleme

Tüm işaretleri kaldırıp özgün seçimin tamamına dönmek için pencerenin sıfırlama denetimini kullanın ya da pencereyi kapatın (bir sonraki seçimde filtre simgesine tıkladığınızda taze bir başlangıçla yeniden açılır).

## İlgili

- [Match Properties](../../commands/match-properties/) — hangileri olduğunu daralttıktan sonra bir nesnenin özelliklerini diğerlerine kopyalayın
- [LayerIsolate](../../commands/layer-isolate/) — yalnızca katmana göre yalıtmak istediğinizde, o an seçili olandan bağımsız bir katman düzeyi alternatifi
