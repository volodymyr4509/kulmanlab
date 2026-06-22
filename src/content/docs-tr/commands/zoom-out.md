---
sidebar_position: 44
title: "Zoom Out Komutu — KulmanLab CAD'de Görünüm Penceresi Yakınlaştırmasını Adım Başına 1,5× Azalt"
description: "Zoom Out komutu, mevcut yakınlaştırma seviyesini 1,5× böler ve hemen çıkar. Görünüm penceresi orta noktasına göre ortalanır. Daha iyi kontrol için imlece doğru uzaklaştırmak üzere kaydırma tekerleğini kullanın."
keywords: [CAD zoom out, görünüm yakınlaştırmasını azalt, uzaklaştır komutu, genel bakış CAD, 1,5x yakınlaştırma adımı, kulmanlab]
---

# Zoom Out

`zoomout` komutu, mevcut yakınlaştırma seviyesini **1,5× böler** (~0,667 ile çarpmaya eşdeğer) ve görünüm penceresi orta noktasına ortalanarak hemen çıkar. [Zoom In](./zoom-in)'in tersidir.

## Uzaklaştırma

Araç çubuğundaki **Zoom Out** düğmesine tıklayın veya terminale `zoomout` yazın. Yakınlaştırma anında uygulanır ve komut çıkar — tuvalde tıklama gerekmez.

## 1,5× Adımın Nasıl Çalıştığı

| Mevcut yakınlaştırma | Bir Zoom Out sonrası |
|-------------|-------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (alt sınırda) |

Yakınlaştırma seviyesi her zaman tuvalde gösterilir. Alt sınır **0,01×**'dir; sonraki adımlar hiçbir şey yapmaz.

## Araç Çubuğu Uzaklaştırma - Kaydırma Tekerleği Karşılaştırması

| | Zoom Out düğmesi | Kaydırma tekerleği |
|---|----------------|-------------|
| Yakınlaştırma merkezi | Görünüm penceresi orta noktası | İmleç konumu |
| Adım boyutu | Tıklama başına 1,5× | Tik başına ~1,1× |
| Etkinleştirme gerekli | Hayır | Hayır — her zaman çalışır |
| En iyi | Daha fazla bağlam görmek için geri adım atma | Pürüzsüz, imlece çıpalı uzaklaştırma |

## Klavye Referansı

Bu komut için klavye kısayolu yoktur. Bunun yerine kaydırma tekerleğini kullanın — herhangi bir komut etkinleştirmeden her zaman çalışır.

## İlgili Görünüm Komutları

| Komut | Ne yapar |
|---------|-------------|
| [Zoom In](./zoom-in) | Yakınlaştırmayı adım başına 1,5× ile çarpar |
| [Fit](./fit) | Tüm nesneleri göstermek için yakınlaştırmayı sıfırlar |
| [Pan](./pan) | Yakınlaştırmadan görünüm penceresini kaydırır |
