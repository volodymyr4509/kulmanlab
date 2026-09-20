---
title: File Manager — Küçük Resimlerle Dosya Yönetimi | KulmanLab CAD
description: File Manager komutu, kaydedilmiş her çizimin küçük resim ızgarasını açar — bir küçük resme tıklayarak açabilir, yerinde yeniden adlandırabilir veya onay isteyerek silebilirsiniz.
keywords: [dosya yöneticisi CAD, son dosyalar CAD, çizimi yeniden adlandır, çizimi sil, küçük resim ızgarası CAD, çizimi geri yükle, DXF'yi yeniden aç, tarayıcı deposu CAD, KulmanLab dosyaları, kaydedilen çizimler, IndexedDB CAD, CAD çizimini yedekle]
group: file
order: 3
---

# File Manager

`DosyaYöneticisi` komutu, tarayıcınızın yerel deposuna kaydedilmiş her çizimin **küçük resim ızgarasını**, en son kaydedilme sırasına göre açar. Önceki bir çizimi yeniden açmak, yeniden adlandırmak veya silmek için bunu kullanın.

## File Manager'ı Açma

- Terminale `DosyaYöneticisi` yazın, **veya**
- Ekranın üstündeki Dosya panelindeki **File Manager** araç çubuğu düğmesine (geçmiş simgesi) tıklayın.

Panel tuvalin sol tarafında açılır ve başka bir komut başlatır başlatmaz ya da bir dosya [içe aktarır](../import/) aktarmaz otomatik olarak kapanır — böylece henüz listelemediği bir çizimin üzerinde asla asılı kalmaz. Her seferinde güncel bir listeyle yeniden açılır.

## Küçük resim ızgarası

Her kaydedilen çizim; anlık olarak oluşturulmuş bir küçük resim, adı ve en son ne zaman güncellendiğini gösteren bir kart olarak görünür. Küçük resimler panel her açıldığında o anda oluşturulur — hiçbir şey önceden işlenmiş veya saklanmış değildir — bu yüzden bir kart, küçük resmi çizilirken bir an için yer tutucu bir simge gösterir. Oluşturma başarısız olursa veya çizimde gerçekten henüz hiç nesne yoksa da aynı yer tutucu görünür.

| İşlem | Nasıl |
|--------|-----|
| Bir çizimi **açma** | Küçük resmine tıklayın — mevcut tuval içeriğinin yerini alır |
| **Yeniden adlandırma** | Kalem simgesine tıklayın veya ada çift tıklayın |
| **Silme** | Çöp kutusu simgesine tıklayın, ardından onaylayın |

Henüz kaydedilmiş dosya yoksa panelde "Kaydedilmiş dosya yok" gösterilir. Bir ekrana sığandan fazla dosya olduğunda ızgaranın altında **Sayfa 1 / N** kontrolleri görünür.

Düzenleyicide o anda açık olan dosyanın kartı vurgu renkli bir halkayla işaretlenir ve **silme düğmesi bulunmaz** — açık dosyayı silmek, tuval onu göstermeye devam ederken kaydedilmiş verisini silinmesine yol açar ve bir sonraki düzenleme onu hemen geri kaydeder. Yeniden adlandırma yine de kullanılabilir.

## Bir dosyayı silme

Çöp kutusu simgesine tıklamak dosyayı hemen silmez — bu kart üzerinde bir onay katmanını devreye sokar ("Bu dosya silinsin mi?" ile **Delete** / **Cancel** düğmeleri), çünkü silme kalıcıdır ve geri alınamaz. **Cancel**'a tıklamak, başka bir kartın çöp kutusu simgesine tıklamak veya kartın başka bir yerine tıklamak, hiçbir şey silmeden bekleyen onayı iptal eder.

## Bir dosyayı yeniden adlandırma

Kalem simgesine tıklayın (veya dosya adına çift tıklayın) ve adı yerinde düzenleyin, ardından onaylamak için **Enter**, iptal etmek için **Escape** tuşuna basın. Yeni ad şu durumlarda reddedilir:

- boşsa veya 100 karakterden uzunsa,
- zaten başka kaydedilmiş bir dosya tarafından kullanılıyorsa (büyük/küçük harf duyarsız),
- bir nokta ile bitiyorsa, veya
- `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9` veya `LPT1`–`LPT9` gibi Windows'a özel bir aygıt adıysa.

Bir dosya adında geçerli olmayan karakterler (`\ / : * ? " < > |`) yazarken otomatik olarak kaldırılır. Yeniden adlandırma yalnızca etiketi değiştirir — çizimin ızgaradaki konumunu etkilemez, çünkü bu, ada göre değil son kaydedilme zamanına göre sıralanır.

## Çalışmanızı yedekleyin — tarayıcı deposu kalıcı değildir

KulmanLab, çizimleri tarayıcınıza yerleşik bir veritabanı olan **IndexedDB**'ye kaydeder:

- Dosyalar yalnızca **cihazınızda yerel olarak** saklanır — hiçbir şey bir sunucuya yüklenmez.
- Her tarayıcı ve cihazın kendi bağımsız deposu vardır. Bir bilgisayarda Chrome'da kaydedilen bir çizim Firefox'ta veya başka bir makinede görünmez.
- Bu depo **uyarı vermeden temizlenebilir** — site verilerini veya tarama geçmişini temizleyerek, disk alanının azalmasıyla, gizli/gizli tarama penceresi kullanarak, tarayıcıyı veya işletim sistemini yeniden yükleyerek ya da cihaz değiştirerek. Bunların hiçbiri orada olanı kurtarma şansı vermez.

**Bir çizimi güvende tutmanın tek güvenilir yolu, onu kendi deponuza [dışa aktarmaktır](../export-manager/).** Mümkün olduğunda `.json` (KulmanLab'ın yerel formatı) kullanın — her nesneyi tam olarak korur; başka CAD araçlarıyla uyumluluk gerektiğinde `.dxf` kullanın. Kaybetmek istemeyeceğiniz her şey için bunu yapın; ayrıca tarayıcı verilerini temizlemeden, tarayıcı veya cihaz değiştirmeden ya da makineyi bir süreliğine bir kenara koymadan önce de yapın.

## Başlangıçta otomatik dosya yükleme

KulmanLab CAD'i açtığınızda uygulama, depodan **en son değiştirilen dosyayı** otomatik olarak yükler. Onu File Manager'dan her seferinde manuel olarak açmanıza gerek yoktur.

## Depoyu yönetme

Kaydedebileceğiniz çizim sayısında sabit bir sınır yoktur, ancak tarayıcı deposu sonludur. Depo uyarıları fark ederseniz, File Manager'dan eski dosyaları silin — veya daha iyisi, hiçbir şey kaybolmasın diye önce bunları dışa aktarın.

Tüm kaydedilen çizimleri tek seferde kaldırmak için [WipeStorage](../wipestorage/) komutunu kullanın.

## Dosya adları

Yeni ve içe aktarılan dosyalar sade bir ad alır — içine hiçbir zaman damgası gömülmez. Bu ad zaten kullanılıyorsa, hiçbir şeyin üzerine yazılmaması için otomatik olarak bir Finder/Explorer tarzı ek eklenir (`plan (2)`, `plan (3)`, …). Bir dosyaya daha sonra her zaman [yeniden adlandırma](#bir-dosyayı-yeniden-adlandırma) ile daha açık bir ad verebilirsiniz.

## İlgili Komutlar

- [Import](../import/) — dosya sisteminizden tarayıcı deposuna bir çizim yükler
- [Export Manager](../export-manager/) — bir çizimi dosya sisteminize indirir
- [New File](../new-file/) — boş bir çizim başlatır (ayrıca otomatik olarak kaydedilir)
- [WipeStorage](../wipestorage/) — tarayıcı deposundan tüm kaydedilen dosyaları temizler
