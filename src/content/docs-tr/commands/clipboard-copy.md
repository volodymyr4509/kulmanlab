---
title: ClipboardCopy Komutu — Nesneleri sistem panosuna kopyalama
description: ClipboardCopy komutu seçili nesneleri, referans verdikleri katman ve çizgi tipleriyle birlikte JSON metni olarak sistem panosuna yazar; böylece ClipboardPaste ile başka bir çizime veya başka bir tarayıcı sekmesine yapıştırılabilirler.
keywords: [CAD pano kopyalama, çizimler arası nesne kopyalama, CAD nesnelerini panoya kopyalama, Ctrl+C CAD, sekmeler arası kopyalama, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

`ClipboardCopy` komutu seçili nesneleri **sistem panonuza** JSON metni olarak yazar. Bellekteki bir arabellek yerine gerçek panoyu kullandığı için kopyalanan geometri çizimin dışında da yaşamaya devam eder: [ClipboardPaste](../clipboard-paste/) ile onu başka bir dosyaya, ikinci bir tarayıcı sekmesine veya daha sonra açacağınız bir pencereye yapıştırın.

[Copy](../copy/) ile farkı budur: Copy nesneleri tek hamlede geçerli çizimin içinde çoğaltır, ClipboardCopy ise onları tamamen başka bir çizimden geri alınabilecekleri bir yere koyar.

## Başlamanın iki yolu

**Önce seç, sonra kopyala** — hızlı yol:

1. Tuval üzerinde bir veya daha fazla nesne seçin.
2. `Ctrl+C` (macOS'ta `Cmd+C`) tuşlarına basın ya da terminale `ClipboardCopy` yazın.
3. Nesneler hemen panoya yazılır ve komut sona erer.

**Önce çalıştır, sonra seç** — hiçbir şey seçili değilken başlamak:

1. Seçim boşken `Ctrl+C` tuşlarına basın veya `ClipboardCopy` yazın.
2. İstem **pick objects to copy — Enter or Space to confirm** şeklinde görünür.
3. **Nesneleri seçin** — tek tek nesneleri seçime almak veya çıkarmak için tıklayın, alanla seçmek için sürükleyin.
4. Seçimi kopyalayıp çıkmak için **Enter** veya **Space** tuşuna basın.

Hiçbir şey seçili değilken **Enter** ya da **Space** tuşuna basmak, panoya dokunmadan komutu sonlandırır.

## Neler kopyalanır

Pano içeriği yalın geometriden fazlasını taşır; böylece yabancı bir çizime yapılan yapıştırma yine de doğru görünür:

| Bölüm | Amacı |
|-------|-------|
| **Nesneler** | Seçili her nesnenin tam serileştirilmiş hâli |
| **Referans noktası** | Seçimin birleşik sınırlarının sol alt köşesi — ClipboardPaste'in imlece bağladığı nokta |
| **Katmanlar** | Yalnızca kopyalanan nesnelerin gerçekten referans verdiği katmanlar, ada göre |
| **Çizgi tipleri** | Yalnızca kopyalanan nesnelerin gerçekten referans verdiği çizgi tipleri, ada göre |

Kopyayla birlikte yalnızca *referans verilen* tablo girdileri yolculuk eder; kaynak çizimin tüm katman ve çizgi tipi tabloları değil. Tarama desenleri hiç paketlenmez ve gerek de yoktur: bir çizimin desen tablosu yerleşik varsayılan kümedir, yüklediğiniz `.pat` dosyaları ise sekmeler arasında zaten paylaşılan kullanıcıya özel bir depoda durur; dolayısıyla yapıştırılan bir tarama kendi desenini kendisi bulur.

## Onay

İşlem başarılıysa terminal kaç nesnenin yazıldığını bildirir:

```
3 entities copied to clipboard
```

Tarayıcı pano erişimini reddederse terminal **Copy failed: clipboard access denied** gösterir ve hiçbir şey yazılmaz. Bu bir tarayıcı izin kararıdır, çizim hatası değil — aşağıdaki [Pano izinleri](#pano-izinleri) bölümüne bakın.

## Komut sırasında seçim

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi seçime alır veya seçimden çıkarır |
| **Sağa sürükleme** (katı) | Kutunun tamamen içinde kalan nesneleri ekler |
| **Sola sürükleme** (kesişen) | Kutu sınırını kesen nesneleri ekler |
| **Enter** / **Space** | Seçimi onaylar ve kopyalar |

## Klavye başvurusu

| Tuş | İşlem |
|-----|-------|
| `Ctrl+C` / `Cmd+C` | ClipboardCopy komutunu çalıştır |
| `Enter` / `Space` | Geçerli seçimi kopyala; seçim yoksa çık |
| `Escape` | Kopyalamadan iptal et |

## Pano izinleri

Sistem panosuna yazmak tarayıcı izni gerektirir. Uygulamada, bir tuş basımıyla tetiklenen kopyalama güncel masaüstü tarayıcılarında sorulmadan verilir; ancak odağını yitirmiş bir sayfa veya katı pano ayarlarına sahip bir tarayıcı bunu reddedebilir. Erişim reddi mesajını görürseniz sayfaya odak vermek için tuvale bir kez tıklayın ve yeniden deneyin.

İçerik sıradan bir JSON metni olduğundan, sonrasında kopyaladığınız her şey onun yerini alır — bir satır metin, bir bağlantı. Bu arada panoyu başka bir şey için kullandıysanız yapıştırmadan önce yeniden kopyalayın.

## Desteklenen nesneler

ClipboardCopy her nesne türüyle çalışır. Nesneler, yerel `.json` dışa aktarımının kullandığı mekanizmayla serileştirilir; bu yüzden yolda hiçbir şey kaybolmaz.

## Ayrıca bakınız

- [ClipboardPaste](../clipboard-paste/) — panoyu geri okuyup nesneleri yerleştirin
- [Copy](../copy/) — nesneleri geçerli çizimin içinde çoğaltın
- [Export Manager](../export-manager/) — bütün bir çizimi DXF veya JSON olarak kaydedin
