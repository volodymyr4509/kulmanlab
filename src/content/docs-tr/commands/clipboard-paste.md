---
title: ClipboardPaste Komutu — Nesneleri sistem panosundan yapıştırma
description: ClipboardPaste komutu, daha önce ClipboardCopy tarafından yazılan nesneleri sistem panosundan okur ve seçtiğiniz ekleme noktasına yerleştirir; hedef çizimde eksik olan katman ve çizgi tiplerini de ekler.
keywords: [CAD pano yapıştırma, çizimler arası nesne yapıştırma, CAD nesnelerini yapıştırma, Ctrl+V CAD, sekmeler arası yapıştırma, yapıştırırken katman birleştirme, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

`PanodanYapıştır` komutu, [ClipboardCopy](../clipboard-copy/) komutunun **sistem panosuna** yazdığı nesneleri okur ve geçerli çizimde sizin seçtiğiniz bir noktaya yerleştirir. Pano gerçek sistem panosu olduğu için kaynak başka bir çizim, başka bir tarayıcı sekmesi veya günün erken saatlerinden kalma bir oturum olabilir.

## Nasıl yapıştırılır

1. `Ctrl+V` (macOS'ta `Cmd+V`) tuşlarına basın ya da terminale `PanodanYapıştır` yazın.
2. Tarayıcı pano metnini aktarırken istem **reading clipboard…** şeklinde görünür.
3. Yükleme bitince istem **pick insertion point** olur ve yapıştırılacak geometrinin önizlemesi imleci izler.
4. Nesneleri yerleştirmek için **tıklayın**. Çizime eklenirler ve seçili kalırlar.

Önizleme, kopyanın **referans noktasına** — özgün seçimin birleşik sınırlarının sol alt köşesine — bağlıdır. O köşe imlecinizin altındadır, böylece kopyalanan nesnelerin birbirlerine göre düzeni bire bir korunur.

## Yapıştırınca ne olur

| Adım | Davranış |
|------|----------|
| **Yeni kimlikler** | Yapıştırılan her nesneye yeni bir kimlik verilir; iki kez yapıştırmak birbirinden bağımsız iki küme oluşturur |
| **Öteleme** | Nesneler imleç − referans noktası kadar kaydırılır |
| **Katman birleştirme** | Hedef çizimde bulunmayan, referans verilen her katman ada göre eklenir |
| **Çizgi tipi birleştirme** | Hedef çizimde bulunmayan, referans verilen her çizgi tipi ada göre eklenir |
| **Seçim** | Önceki seçim temizlenir ve yapıştırılan nesneler seçim hâline gelir |

### Katman ve çizgi tipi birleştirme

Eksik tablo girdileri eklenir; **var olanlara dokunulmaz**. Pano kırmızı renkte `WALLS` adlı bir katman taşıyorsa ve hedef çizimde zaten mavi bir `WALLS` katmanı varsa, hedefin tanımı geçerli olur ve yapıştırılan nesneler ona katılır — mavi olurlar. Yapıştırma, hedef çizimde hiçbir şeyi yeniden tanımlamaz.

Bu, farklı katman düzenlerine sahip çizimler arasında kopyalarken önemlidir: çizimler arası bir yapıştırmadan sonra renkler beklediğiniz gibi değilse [Layer Manager](../layer-manager/) bölümüne bakın.

## Panoda yapıştırılacak bir şey yoksa

ClipboardPaste yalnızca ClipboardCopy'nin ürettiği içeriği kabul eder. Panodaki diğer her şey — düz metin, bir bağlantı, bir görsel, başka bir uygulamadan gelen JSON — reddedilir ve terminal şunu bildirir:

```
Clipboard has no copied entities
```

Tarayıcı pano erişimini tümüyle reddederse mesaj bunun yerine **Clipboard access denied** olur. Her ikisi de çizimi değiştirmeden komutu sonlandırır.

## Klavye başvurusu

| Tuş | İşlem |
|-----|-------|
| `Ctrl+V` / `Cmd+V` | ClipboardPaste komutunu çalıştır |
| `Escape` | İptal — nesneler atılır ve hiçbir şey eklenmez |

Okuma aşamasında iptal etmek güvenlidir: pano, siz çoktan iptal ettikten veya başka bir komut başlattıktan sonra yanıt verirse, geç gelen sonuç o an etkin olanı bozmak yerine atılır.

## Sekmeler arası kopyalama

Çizimler arası tipik iş akışı:

1. Kaynak çizimi açın, geometriyi seçin, `Ctrl+C` tuşlarına basın.
2. Diğer sekmeye geçin — ya da uygulamanın ikinci bir sekmesini açıp farklı bir dosya yükleyin.
3. `Ctrl+V` tuşlarına basın ve bir ekleme noktasına tıklayın.

Her iki sekme de aynı kökene sahiptir ve sistem panosunu paylaşır; bu yüzden hiçbir şey yüklenmez ve hiçbir sunucu devreye girmez. İçerik, baştan sona kendi panonuzdaki JSON metni olarak kalır.

## Desteklenen nesneler

ClipboardCopy'nin yazabildiği her nesne türünü ClipboardPaste geri okuyabilir — yerel `.json` biçiminin kullandığı serileştirmenin aynısıyla.

## Ayrıca bakınız

- [ClipboardCopy](../clipboard-copy/) — seçimi panoya yazın
- [Copy](../copy/) — nesneleri geçerli çizimin içinde çoğaltın
- [Layer Manager](../layer-manager/) — bir yapıştırmanın getirdiği katmanları inceleyin
