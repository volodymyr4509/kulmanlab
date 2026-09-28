---
title: KulmanLab CAD — מדריך פקודות
description: מדריך הפקודות של KulmanLab CAD — מדריך מלא לכל פקודות השרטוט, העריכה, ההערות, השכבות, המדידה והקבצים ב-KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, פקודות CAD, CAD חינמי בדפדפן, עורך DXF מקוון, פקודות שרטוט, פקודות kulmanlab]
group: overview
order: 1
---

# KulmanLab CAD — מדריך פקודות

ברוכים הבאים למדריך הפקודות של **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) הוא כלי CAD חינמי מבוסס דפדפן לשרטוט, עריכה וייצוא קבצי DXF — ללא צורך בהתקנה. השתמשו בסרגל הצד כדי לעיין בכל הפקודות הזמינות מקובצות לפי פאנל.

## צורות

| פקודה | מה היא עושה |
|---------|-------------|
| [Line](./commands/line/) | שרטוט קו ישר בין שתי נקודות |
| [Polyline](./commands/polyline/) | שרטוט נתיב פתוח מרובה-קטעים |
| [Rectangle](./commands/rectangle/) | שרטוט מלבן מיושר-צירים |
| [Circle](./commands/circle/) | שרטוט מעגל לפי מרכז ורדיוס |
| [Arc](./commands/arc/) | שרטוט קשת דרך שלוש נקודות |
| [Ellipse](./commands/ellipse/) | שרטוט אליפסה לפי מרכז ושני צירים |
| [Hatch](./commands/hatch/) | מילוי האזור המקיף נקודה שנלחצה בדוגמה |
| [Text](./commands/text/) | מיקום תווית טקסט על הקנבס |
| [Spline CV](./commands/spline-cv/) | שרטוט ספליין על ידי מיקום נקודות בקרה |
| [Spline Fit](./commands/spline-fit/) | שרטוט ספליין העובר דרך נקודות שנלחצו |

## עריכה

| פקודה | מה היא עושה |
|---------|-------------|
| [Move](./commands/move/) | הזזת ישויות נבחרות למיקום חדש |
| [Copy](./commands/copy/) | העתקת ישויות נבחרות למיקום חדש |
| [Rotate](./commands/rotate/) | סיבוב ישויות נבחרות סביב נקודת בסיס |
| [Mirror](./commands/mirror/) | שיקוף ישויות נבחרות על פני קו |
| [Scale](./commands/scale/) | שינוי קנה מידה של ישויות נבחרות סביב נקודת בסיס |
| [Align](./commands/align/) | הזזה, סיבוב ובאופן אופציונלי שינוי קנה מידה של ישויות באמצעות זוגות נקודות |
| [Delete](./commands/delete/) | הסרת ישויות נבחרות מהשרטוט |
| [Trim](./commands/trim/) | גיזום קטע קו בחיתוכים שלו |
| [Extend](./commands/extend/) | הארכת קו לחיתוך הגבול הקרוב ביותר |
| [Offset](./commands/offset/) | יצירת עותק מקביל של ישות במרחק נתון |
| [Fillet](./commands/fillet/) | עיגול פינה בין שני קווים, קשתות או קטעי פוליליין בקשת משיקה |
| [Chamfer](./commands/chamfer/) | חיתוך פינה אלכסונית ישרה בין שני קווים או פוליליינים |
| [Explode](./commands/explode/) | מפרק פוליליין לקווים וקשתות נפרדים |
| [Undo](./commands/undo/) | ביטול הפעולה האחרונה |
| [Redo](./commands/redo/) | ביצוע חוזר של הפעולה האחרונה שבוטלה |
| [Array Grid](./commands/array-grid/) | חזרה על ישויות ברשת מלבנית של שורות ועמודות |

## הערות

| פקודה | מה היא עושה |
|---------|-------------|
| [Leader](./commands/leader/) | שרטוט הערת מולטי-לידר עם ראש חץ וטקסט |
| [LeaderAdd](./commands/leader-add/) | הוספת זרוע נוספת למולטי-לידר קיים |
| [LeaderRemove](./commands/leader-remove/) | הסרת זרוע ממולטי-לידר קיים |
| [Dimension Linear](./commands/dim-linear/) | הוספת מידה אופקית או אנכית |
| [Dimension Aligned](./commands/dim-aligned/) | הוספת מידה המיושרת לשתי נקודות |
| [Dimension Continue](./commands/dim-continue/) | שרשור מידה חדשה מהאחרונה |
| [Dimension Radius](./commands/dim-radius/) | הוספת מידת רדיוס למעגל או קשת |
| [Dimension Diameter](./commands/dim-diameter/) | הוספת מידת קוטר למעגל |
| [Dimension Angular](./commands/dim-angular/) | הוספת מידה זוויתית לשני קווים, קשת או מעגל |

## שכבה

| פקודה | מה היא עושה |
|---------|-------------|
| [LayerManager](./commands/layer-manager/) | הוספת שכבות ועריכת הקפאה, נעילה, הדפסה, צבע, עובי וסוג קו עבור כל אחת |
| [LayerMakeCurrent](./commands/layer-make-current/) | הגדרת השכבה הנוכחית כך שתתאים לשכבה של ישות שנלחצה |
| [LayerMatch](./commands/layer-match/) | שיוך מחדש של ישויות נבחרות כדי להתאים לשכבה של ישות מקור |
| [LayerIsolate](./commands/layer-isolate/) | הקפאת כל השכבות מלבד אלה של הישויות הנבחרות |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | הפשרת כל השכבות בשלב אחד |

## פריסות

| פקודה | מה היא עושה |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | יצירת חלון תצוגה בפריסת נייר על ידי בחירת שתי פינות |
| [ViewportCopy](./commands/viewport-copy/) | שכפול חלון תצוגה למיקום חדש |
| [PageManager](./commands/page-manager/) | עריכת גודל הנייר וקנה המידה עבור הפריסה הפעילה |

## ניווט

| פקודה | מה היא עושה |
|---------|-------------|
| [Pan](./commands/pan/) | לחיצה וגרירה כדי להזיז את חלון התצוגה |
| [Zoom In](./commands/zoom-in/) | הגדלת התצוגה של חלון התצוגה |
| [Zoom Out](./commands/zoom-out/) | הקטנת התצוגה של חלון התצוגה |
| [Fit](./commands/fit/) | התאמת כל הישויות לתוך חלון התצוגה |

## מדידה

| פקודה | מה היא עושה |
|---------|-------------|
| [Distance](./commands/distance/) | מדידת המרחק בין שתי נקודות |
| [Angle](./commands/angle/) | מדידת הזווית בין שלוש נקודות |
| [Area](./commands/area/) | מדידת השטח וההיקף של מצולע |

## סגנונות

| פקודה | מה היא עושה |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | העתקת צבע, שכבה ותכונות אחרות מישות אחת לאחרות |
| [Font Manager](./commands/font-manager/) | עיון, בחירה והעלאה של גופני TTF מותאמים אישית |
| [FontAdd](./commands/font-add/) | העלאת גופן TTF מותאם אישית ישירות מהמסוף |
| [Hatch Manager](./commands/hatch-manager/) | עיון בספריית דוגמאות ה-hatch והעלאת קבצי .pat |
| [סגנון טקסט](./commands/text-style/) | יצירה וניהול של סגנונות טקסט בעלי שם לטקסט חדש |
| [סגנון קו מוביל](./commands/leader-style/) | יצירה וניהול של סגנונות מוביל מרובה בעלי שם |

## קובץ

| פקודה | מה היא עושה |
|---------|-------------|
| [Import](./commands/import/) | פתיחת קובץ שרטוט DXF או JSON |
| [New File](./commands/new-file/) | התחלת שרטוט ריק חדש |
| [File Manager](./commands/file-manager/) | עיון, שינוי שם או מחיקה של שרטוטים השמורים בדפדפן שלכם |
| [Print Manager](./commands/print-manager/) | ייצוא אזור שרטוט כתמונה או PDF |
| [Export Manager](./commands/export-manager/) | הורדת השרטוט כ-DXF או JSON |
| [WipeStorage](./commands/wipestorage/) | ניקוי כל השרטוטים מאחסון הדפדפן |

## שחזור

אם האפליקציה קורסת בכל הפעלה (לדוגמה, לאחר עבודה עם קואורדינטות גדולות במיוחד), תוכלו לנקות את כל הנתונים השמורים מקומית על ידי הוספת `?reset` לכתובת ה-URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

פעולה זו מוחקת הכול ממסד הנתונים המקומי של הדפדפן ומתחילה שרטוט ריק חדש. הפרמטר `?reset` מוסר את עצמו מכתובת ה-URL אוטומטית. השתמשו בזה כמוצא אחרון כאשר [WipeStorage](./commands/wipestorage/) אינו נגיש כי האפליקציה לא נטענת כלל.

## איך פקודות עובדות

כל פקודה עוקבת אחר אותו דפוס:

1. **הפעלה** — לחצו על כפתור סרגל הכלים או הקלידו את שם הפקודה במסוף בתחתית המסך.
2. **מעקב אחר ההנחיה** — המסוף מציג איזה קלט צפוי הבא.
3. **סיום או ביטול** — רוב הפקודות מסתיימות אוטומטית לאחר הקלט האחרון. לחצו **Escape** בכל עת כדי לבטל.

## בחירת אובייקטים

מספר פקודות עריכה (Move, Copy, Rotate, Mirror, Scale, Delete) חולקות את אותו התנהגות בחירה:

- **לחיצה** על ישות כדי לבחור או לבטל את הבחירה שלה.
- **גרירה ימינה** (משמאל לימין) לבחירה קפדנית — רק ישויות שנמצאות במלואן בתוך התיבה נבחרות.
- **גרירה שמאלה** (מימין לשמאל) לבחירה חוצה — כל ישות שחותכת את התיבה נבחרת.
- לחצו **Enter** או **Space** כדי לאשר את הבחירה ולהמשיך לשלב הבא.
