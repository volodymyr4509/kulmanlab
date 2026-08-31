---
title: LayerManager Komutu — Tüm Katmanları Tek Tabloda Yönetin
description: LayerManager komutu çizimdeki tüm katmanların bulunduğu bir tablo açar; katman eklemenize, kullanılmayanları silmenize ve her katmanın dondurma, kilitleme, çizdirme, renk, çizgi kalınlığı ve çizgi tipi ayarlarını yerinde düzenlemenize olanak tanır.
keywords: [katman yöneticisi, CAD katman tablosu, katman yönetimi CAD, katman ekleme CAD, katman silme CAD, kullanılmayan katmanı kaldırma, dondur kilitle çizdir katman, kulmanlab katman yönetimi]
group: layer
order: 1
---

# LayerManager

`LayerManager` komutu, çizimdeki her katmanı listeleyen ve **Freeze**, **Lock**, **Plot**, **Renk**, **Çizgi kalınlığı** ile **Çizgi tipi** ayarlarının doğrudan satır içinde düzenlenebildiği bir tablo açar. Katman eklemek, kullanılmayanları silmek ve mevcutların davranışını ayarlamak için merkezi yerdir — diğer katman komutları ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) bunu açmadan tek bir odaklı işi yapar.

## Layer Manager'ı Açma

- Terminale `LayerManager` yazın, **veya**
- Katman panelindeki **Layer Manager** düğmesine tıklayın.

İletişim kutusu yüzen bir panel olarak açılır; önceden hiçbir şey seçili olması gerekmez.

## Katman Tablosu

| Sütun | Neyi kontrol eder |
|-------|----------------------|
| Name | Katmanın adı, tabloda salt okunur gösterilir (yalnızca oluşturulurken bir kez ayarlanır) |
| Freeze | Katmanın nesnelerini gizler ve çözülene kadar seçimden hariç tutar |
| Lock | Katmandaki nesnelerin gizlenmeden düzenlenmesini engeller |
| Plot | Katmanın nesnelerinin yazdırma veya PDF dışa aktarmaya dahil edilip edilmeyeceği |
| Color | Katmanın ACI rengi — renk seçiciyi açmak için örneğe tıklayın |
| Lineweight | Katmanın çizgi kalınlığı — kalınlık seçiciyi açmak için çipe tıklayın |
| Linetype | Katmanın çizgi deseni — çizgi türü seçiciyi açmak için çipe tıklayın |
| ✕ | Hiçbir şey kullanmıyorsa katmanı siler — bkz. [Katman silme](#katman-silme) |

Freeze, Lock veya Plot'u değiştirmek anında etkili olur — ayrı bir kaydetme adımı yoktur. Renk, çizgi kalınlığı veya çizgi türü için **ByLayer** (varsayılan) olarak ayarlanmış nesneler burada belirlediğinizi alır; kendi açık geçersiz kılmasına sahip nesneler etkilenmez.

## Katman Ekleme

1. Tablonun altındaki **+ Add Layer**'a tıklayın.
2. Bir ad yazın ve onaylamak için **Enter**'a, iptal etmek için **Escape**'e basın.

Katman adları harf, rakam, boşluk ve `_`, `-`, `$` içerebilir. Boş, zaten kullanımda olan veya başka bir karakter içeren bir ad, satır içi bir hatayla reddedilir ve satır yeni bir deneme için açık kalır.

Yeni katmanlar **çözülmüş, kilitlenmemiş, yazdırılabilir** olarak başlar; renk 7 (beyaz/siyah), çizgi kalınlığı Default ve çizgi türü Continuous ile — [Import](../import/)'un boş bir çizimde `0` katmanına atadığı varsayılanlarla aynıdır.

## Katman silme

Her satır, katmanı çizimden kaldıran bir **✕** düğmesiyle biter. Silme anında gerçekleşir — onay adımı yoktur — ancak yalnızca hiçbir şeyin bağlı olmadığı katmanlar için sunulur:

| Durum | Düğmenin durumu |
|-------|------------------|
| Katman boş | Etkin — *Delete layer* |
| Katman en az bir nesneye atanmış | Devre dışı — *Cannot delete: assigned to at least one entity* |
| Katman `0` | Düğme hiç yok |

**"Kullanımda" ifadesi çizimin tamamını kapsar**, yalnızca baktığınız yeri değil. Bir yerleşimde (kâğıt alanında) duran bir nesne, model alanındaki bir nesneyle tamamen aynı şekilde sayılır; dolayısıyla bir katman ekranda boş görünüp yine de silinmeyi reddedebilir. Dondurulmuş katmanlar farklı değildir: dondurmak nesneleri gizler ama atamalarını kaldırmaz, bu yüzden nesne barındıran dondurulmuş bir katman silinemez olarak kalır.

Katman `0` asla silinemez. Her çizimin sahip olması güvence altına alınmış yedek katman olduğundan, düğme onun için devre dışı gösterilmek yerine hiç çizilmez.

### "…is now in use and can't be deleted"

Bazen ✕ kullanılabilir görünür ama tıklama, panelin üstündeki bir şeritle reddedilir:

```
"WALLS" is now in use and can't be deleted
```

Bu bir çelişki değildir. Hangi katmanların kullanımda olduğunu bulmak, çizimdeki her nesneyi dolaşmayı gerektirir; bu yüzden sonuç önbelleğe alınır ve yalnızca nesne sayısı değiştiğinde yeniden kurulur — yüzlerce nesnede ucuz, yüz binlercesinde değil. Mevcut bir nesneyi bir katmana taşımak bu sayıyı değiştirmez, bu nedenle satırın devre dışı durumu bir an için eskimiş olabilir. Tıklama, herhangi bir şeyi silmeden önce sıfırdan yeniden denetler; reddin katman hâlâ referans alınırken kaybolması yerine tıklama anında gerçekleşmesinin sebebi budur.

Şeridi kendi **✕** düğmesiyle kapatın. Katmana dokunulmamıştır.

## Burada yapamayacaklarınız

Tabloda hangi katmanın *geçerli* olduğunu gösteren bir işaret yoktur; bu, katman panelinin açılır listesinden veya [LayerMakeCurrent](../layer-make-current/) ile belirlenir, bu iletişim kutusundan değil. Katman adları da oluşturulurken sabitlenir — bir katman silinip yeniden oluşturulabilir, ancak yeniden adlandırılamaz.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` | Yeni bir katmanın adını onayla (eklerken) |
| `Escape` | Katman eklemeyi iptal et, veya iletişim kutusunu kapat |

## İlgili Komutlar

| Komut | Ne yapar |
|-------|----------|
| [LayerMakeCurrent](../layer-make-current/) | Tıklanan nesneye göre geçerli katmanı ayarlar |
| [LayerMatch](../layer-match/) | Seçili nesneleri kaynak nesnenin katmanına yeniden atar |
| [LayerIsolate](../layer-isolate/) | Seçili nesnelerin katmanları dışındaki tüm katmanları dondurur |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Tüm katmanları tek adımda çözer |
