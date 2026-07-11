---
title: "Zoom In Komutu — KulmanLab CAD'de Görünüm Penceresini Adım Başına 1,5× Büyüt"
description: "Zoom In komutu, mevcut yakınlaştırma seviyesini 1,5× ile çarpar ve hemen çıkar. Görünüm penceresi orta noktasına göre ortalanır. Yakınlaştırma aralığı 0,01–10.000. Bunun yerine imlece doğru yakınlaştırmak için kaydırma tekerleğini kullanın."
keywords: [CAD zoom in, görünümü büyüt, yakınlaştır CAD komutu, "1,5x yakınlaştırma adımı", kulmanlab]
group: navigate
order: 2
---

# Zoom In

`zoomin` komutu, mevcut yakınlaştırma seviyesini **1,5× ile çarpar** ve görünüm penceresi orta noktasına ortalanarak hemen çıkar. Ekran merkezine doğru yakınlaştıran bir kaydırma tekerleği tikine denk araç çubuğu eşdeğeridir.

## Yakınlaştırma

Araç çubuğundaki **Zoom In** düğmesine tıklayın veya terminale `zoomin` yazın. Yakınlaştırma anında uygulanır ve komut çıkar — tuvalde tıklama gerekmez.

## 1,5× Adımın Nasıl Çalıştığı

| Mevcut yakınlaştırma | Bir Zoom In sonrası |
|-------------|------------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6.667× | 10.000× (üst sınırda) |

Yakınlaştırma seviyesi her zaman tuvaldeki **sağ alt köşede** `zoom` etiketinin yanında gösterilir. Üst sınır **10.000×**'dir; sonraki adımlar hiçbir şey yapmaz.

## Araç Çubuğu Yakınlaştırma - Kaydırma Tekerleği Karşılaştırması

| | Zoom In düğmesi | Kaydırma tekerleği |
|---|--------------|-------------|
| Yakınlaştırma merkezi | Görünüm penceresi orta noktası | İmleç konumu |
| Adım boyutu | Tıklama başına 1,5× | Tik başına ~1,1× |
| Etkinleştirme gerekli | Hayır | Hayır — her zaman çalışır |
| En iyi | Kaba gezinme | Hassas, imlece hedeflenmiş yakınlaştırma |

## Klavye Referansı

Bu komut için klavye kısayolu yoktur. Bunun yerine kaydırma tekerleğini kullanın — herhangi bir komut etkinleştirmeden her zaman çalışır.

## İlgili Görünüm Komutları

| Komut | Ne yapar |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Yakınlaştırmayı adım başına 1,5× böler |
| [Fit](../fit/) | Tüm nesneleri göstermek için yakınlaştırmayı sıfırlar |
| [Pan](../pan/) | Yakınlaştırmadan görünüm penceresini kaydırır |
