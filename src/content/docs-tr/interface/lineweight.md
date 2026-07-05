---
sidebar_position: 3
title: Çizgi Kalınlığı Araç Çubuğu Seçici — KulmanLab CAD'de Kontur Genişliğini Kontrol Et
description: KulmanLab CAD araç çubuğundaki çizgi kalınlığı seçici, yeni çizilen tüm nesnelere uygulanan kontur genişliğini ayarlar. 0,00 mm ile 2,11 mm arasındaki standart DXF çizgi kalınlığı değerlerinin yanı sıra Katmana Göre ve Varsayılan modları destekler.
keywords: [CAD çizgi kalınlığı, kontur genişliği, çizgi genişliği, DXF çizgi kalınlığı, Katmana Göre çizgi kalınlığı, kulmanlab]
---

# Çizgi Kalınlığı

Araç çubuğundaki **çizgi kalınlığı** çipi, çizdiğiniz her yeni nesneye atanan kontur genişliğini kontrol eder. Seçici açılır menüsünü açmak için tıklayın.

## Seçenekler

| Değer | Anlam |
|-------|---------|
| **Katmandan** | Nesne, katmanında tanımlanan çizgi kalınlığını devralır. Gösterilen gerçek genişlik, katman ayarına bağlıdır. |
| **Varsayılan** | Uygulama varsayılan genişliğini kullanır — ince çizgi (1 px) olarak oluşturulur. DXF'de katman ayarını geçersiz kılmaz. |
| **0,00 mm – 2,11 mm** | Açık sabit genişlik. Nesne, katmanının çizgi kalınlığından bağımsız olarak bu değeri taşır. |

Standart DXF çizgi kalınlığı değerleri mevcuttur: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 ve 2,11 mm.

## Nasıl Uygulanır

Seçilen çizgi kalınlığı, değişiklikten sonra oluşturulan her nesneye uygulanır. Mevcut nesneleri geriye dönük olarak etkilemez.

Mevcut nesnelerin çizgi kalınlığını değiştirmek için onları seçin ve özellikler panelindeki **Çizgi Kalınlığı** alanını düzenleyin ya da başka bir nesneden kopyalamak için [MatchProperties](../../commands/match-properties/) kullanın.

## Oluşturma

Çizgi kalınlıkları **mm başına 3,78 px** ölçeğinde oluşturulur (96 dpi). 0,25 mm'lik çizgi ekranda yaklaşık 1 px genişliğindedir; 1,00 mm'lik çizgi yaklaşık 4 px'dir. Çok ince değerler (0,00 mm ve negatifler) herhangi bir yakınlaştırma seviyesinde görünür kalmalarını sağlamak için her zaman en az 0,5 px olarak oluşturulur.

## DXF Uyumluluğu

Çizgi kalınlığı değerleri DXF `LWPOLYLINE`, `LINE`, `CIRCLE` ve diğer nesne kayıtlarında milimetrenin yüzde biri cinsinden tamsayılar olarak saklanır (örneğin 25 = 0,25 mm). **Katmandan** `-1` olarak, **Varsayılan** ise `-3` olarak saklanır; bu, DXF spesifikasyonuyla eşleşir. Dosyalar herhangi bir DXF uyumlu uygulamada kayıpsız round-trip yapar.
