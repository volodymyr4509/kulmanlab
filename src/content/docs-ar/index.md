---
title: KulmanLab CAD — مرجع الأوامر
description: مرجع أوامر KulmanLab CAD — دليل شامل لكل أوامر الرسم والتحرير والتوصيف والطبقات والقياس والملفات في KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, أوامر CAD, برنامج CAD مجاني في المتصفح, محرر DXF عبر الإنترنت, أوامر الرسم, kulmanlab]
---

# KulmanLab CAD — مرجع الأوامر

مرحباً بك في مرجع أوامر **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) أداة CAD مجانية تعمل في المتصفح لرسم الملفات وتحريرها وتصدير ملفات DXF — دون الحاجة إلى أي تثبيت. استخدم الشريط الجانبي لتصفح جميع الأوامر المتاحة مجمّعةً حسب اللوحة.

## الأشكال

| الأمر | ما يفعله |
|-------|----------|
| [Line](./commands/line/) | رسم خط مستقيم بين نقطتين |
| [Polyline](./commands/polyline/) | رسم مسار مفتوح متعدد المقاطع |
| [Rectangle](./commands/rectangle/) | رسم مستطيل موازٍ للمحاور |
| [Circle](./commands/circle/) | رسم دائرة بالمركز والنصف قطر |
| [Arc](./commands/arc/) | رسم قوس يمر بثلاث نقاط |
| [Ellipse](./commands/ellipse/) | رسم قطع ناقص بالمركز ومحورين |
| [Text](./commands/text/) | وضع تسمية نصية على اللوحة |
| [Spline CV](./commands/spline-cv/) | رسم منحنى بوضع نقاط التحكم |
| [Spline Fit](./commands/spline-fit/) | رسم منحنى يمر بالنقاط المنقورة |

## التحرير

| الأمر | ما يفعله |
|-------|----------|
| [Move](./commands/move/) | نقل العناصر المحددة إلى موضع جديد |
| [Copy](./commands/copy/) | نسخ العناصر المحددة إلى موضع جديد |
| [Rotate](./commands/rotate/) | تدوير العناصر المحددة حول نقطة أساس |
| [Mirror](./commands/mirror/) | قلب العناصر المحددة عبر خط |
| [Scale](./commands/scale/) | تغيير مقياس العناصر المحددة حول نقطة أساس |
| [Delete](./commands/delete/) | حذف العناصر المحددة من الرسم |
| [Trim](./commands/trim/) | قص مقطع خط عند تقاطعاته |
| [Extend](./commands/extend/) | تمديد خط إلى أقرب تقاطع حدودي |
| [Offset](./commands/offset/) | إنشاء نسخة متوازية لعنصر على مسافة محددة |
| [Fillet](./commands/fillet/) | تقريب زاوية بين خطين بقوس مماسي |
| [Chamfer](./commands/chamfer/) | شطب زاوية مائلة بين خطين أو خطوط متعددة |
| [Undo](./commands/undo/) | تراجع عن الإجراء الأخير |
| [Redo](./commands/redo/) | إعادة الإجراء الأخير الذي تم التراجع عنه |

## التوصيف

| الأمر | ما يفعله |
|-------|----------|
| [Leader](./commands/leader/) | رسم خط إشارة متعدد الرأس مع سهم ونص |
| [Leader+](./commands/leader-add/) | إضافة ذراع إضافية إلى خط إشارة موجود |
| [Leader−](./commands/leader-remove/) | حذف ذراع من خط إشارة موجود |
| [Dimension Linear](./commands/dim-linear/) | إضافة بُعد أفقي أو رأسي |
| [Dimension Aligned](./commands/dim-aligned/) | إضافة بُعد محاذٍ لنقطتين |
| [Dimension Continue](./commands/dim-continue/) | تسلسل بُعد جديد من آخر بُعد |
| [Dimension Radius](./commands/dim-radius/) | إضافة بُعد نصف قطر لدائرة أو قوس |
| [Dimension Diameter](./commands/dim-diameter/) | إضافة بُعد القطر لدائرة |
| [Dimension Angular](./commands/dim-angular/) | إضافة بُعد زاوي بين خطين أو قوس أو دائرة |

## الطبقة

| الأمر | ما يفعله |
|-------|----------|
| [LayerMakeCurrent](./commands/layer-make-current/) | تعيين الطبقة الحالية لتطابق طبقة عنصر منقور |
| [LayerMatch](./commands/layer-match/) | إعادة تعيين العناصر المحددة لتطابق طبقة عنصر مصدر |
| [LayerIsolate](./commands/layer-isolate/) | تجميد جميع الطبقات باستثناء طبقات العناصر المحددة |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | إلغاء تجميد جميع الطبقات في خطوة واحدة |

## التخطيطات

| الأمر | ما يفعله |
|-------|----------|
| [ViewportRectangle](./commands/viewport-rectangle/) | إنشاء إطار عرض في تخطيط ورقي باختيار زاويتين |
| [ViewportCopy](./commands/viewport-copy/) | تكرار إطار عرض إلى موضع جديد |
| [PageManager](./commands/page-manager/) | تحرير حجم الورقة والمقياس للتخطيط النشط |

## التنقل

| الأمر | ما يفعله |
|-------|----------|
| [Pan](./commands/pan/) | النقر والسحب لتحريك إطار العرض |
| [Zoom In](./commands/zoom-in/) | تكبير إطار العرض |
| [Zoom Out](./commands/zoom-out/) | تصغير إطار العرض |
| [Fit](./commands/fit/) | احتواء جميع العناصر في إطار العرض |

## القياس

| الأمر | ما يفعله |
|-------|----------|
| [Distance](./commands/distance/) | قياس المسافة بين نقطتين |
| [Angle](./commands/angle/) | قياس الزاوية بين ثلاث نقاط |

## النمط

| الأمر | ما يفعله |
|-------|----------|
| [Match Properties](./commands/match-properties/) | نسخ اللون والطبقة وخصائص أخرى من عنصر إلى عناصر أخرى |
| [Font Manager](./commands/font-manager/) | تصفح واختر الخطوط، وارفع خطوط TTF مخصصة |

## الملف

| الأمر | ما يفعله |
|-------|----------|
| [Import](./commands/import/) | فتح ملف رسم DXF أو JSON |
| [New File](./commands/new-file/) | بدء رسم فارغ جديد |
| [Files](./commands/files/) | تصفح الرسومات الأخيرة واستعادتها |
| [Print](./commands/print/) | تصدير منطقة رسم كصورة أو PDF |
| [Export](./commands/export/) | تنزيل الرسم بصيغة DXF أو JSON |
| [Wipe Storage](./commands/wipestorage/) | مسح جميع الرسومات من تخزين المتصفح |

## الاسترداد

إذا تعطّل التطبيق عند كل بدء تشغيل (مثلاً بعد العمل مع إحداثيات كبيرة جداً)، يمكنك مسح جميع البيانات المحفوظة محلياً بإضافة `?reset` إلى عنوان URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

يؤدي هذا إلى حذف كل شيء من قاعدة بيانات المتصفح المحلية وبدء رسم فارغ جديد. تُزيل معامل `?reset` نفسه من عنوان URL تلقائياً. استخدم هذا كملاذ أخير عندما يتعذّر الوصول إلى [Wipe Storage](./commands/wipestorage/) لأن التطبيق لا يُحمَّل أصلاً.

## كيف تعمل الأوامر

تتبع كل أمر النمط نفسه:

1. **التفعيل** — انقر على زر شريط الأدوات أو اكتب اسم الأمر في محطة الأوامر أسفل الشاشة.
2. **اتبع التوجيه** — تُظهر المحطة ما يُتوقع إدخاله بعد ذلك.
3. **الإنهاء أو الإلغاء** — تنتهي معظم الأوامر تلقائياً بعد آخر إدخال. اضغط **Escape** في أي وقت للإلغاء.

## تحديد العناصر

تشترك عدة أوامر تحرير (Move وCopy وRotate وMirror وScale وDelete) في سلوك التحديد نفسه:

- **انقر** على عنصر لتحديده أو إلغاء تحديده.
- **اسحب يميناً** (من اليسار إلى اليمين) للتحديد الصارم — تُحدَّد فقط العناصر الواقعة بالكامل داخل المربع.
- **اسحب يساراً** (من اليمين إلى اليسار) للتحديد المتقاطع — يُحدَّد أي عنصر يتقاطع مع المربع.
- اضغط **Enter** أو **Space** لتأكيد التحديد والمتابعة إلى الخطوة التالية.
