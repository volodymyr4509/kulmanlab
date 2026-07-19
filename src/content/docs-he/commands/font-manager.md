---
title: Font Manager — העלאה וניהול גופני TTF מותאמים אישית
description: פקודת Font Manager פותחת דיאלוג לעיון, תצוגה מקדימה ובחירה של גופנים, ולהעלאת קבצי .ttf משלכם. גופנים שהועלו נשמרים בדפדפן ומוטמעים לפי שם בייצוא DXF.
keywords: [font manager, גופן מותאם אישית CAD, העלאת ttf, גופן מותאם אישית CAD, google fonts CAD, גופן טקסט CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

הפקודה `FontManager` פותחת דיאלוג לעיון ובחירה של גופנים, ולהעלאת קבצי `.ttf` משלכם לשימוש בישויות [Text](../text/) ו-[Multileader](../leader/).

## פתיחת Font Manager

- הקלידו `FontManager` במסוף, **או**
- לחצו על כפתור **Font Manager** בסרגל הכלים של [עורך הטקסט](../../interface/text-editor/).

## קבוצות גופנים

| קבוצה | תוכן |
|-------|----------|
| **Default** | הגופן הסאנס-סריף המובנה — זמין תמיד |
| **User** | הגופנים `.ttf` שהעליתם בעצמכם (מוצג רק לאחר שהוספתם אחד) |
| **Free** | 15 גופני Google Fonts מובנים (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | גופני מערכת הפעלה נפוצים (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

לחצו על כל גופן ברשימה כדי לצפות בתצוגה מקדימה שלו מימין — שם, דוגמת אלפבית, פנגרם וספרות.

## העלאת גופן מותאם אישית

1. לחצו **Add Font** בכותרת התחתונה של הדיאלוג (או הקלידו `Font+` במסוף כדי לפתוח את בורר הקבצים ישירות).
2. בחרו קובץ `.ttf`. רק גופני TrueType נתמכים — `.otf` ו-`.woff`/`.woff2` אינם נתמכים.
3. שם הקובץ (ללא הסיומת) הופך לשם הגופן בקבוצת **User**. לדוגמה, העלאת `MyFont.ttf` מוסיפה גופן בשם `MyFont`.

גופנים שהועלו נשמרים לצמיתות בדפדפן (IndexedDB) ונטענים מחדש אוטומטית בפעם הבאה שתפתחו את KulmanLab CAD.

## הסרת גופן מותאם אישית

רחפו מעל גופן בקבוצת **User** ולחצו על כפתור **×** לצידו. גופנים מובנים (Default, Free, System) לא ניתנים להסרה.

## מרגע לוח המקשים

| מקש | פעולה |
|-----|--------|
| `↑` / `↓` | הזזת הבחירה למעלה או למטה ברשימת הגופנים |
| `Escape` | סגירת Font Manager |

## תאימות DXF

שם הגופן מוטמע בישויות **MTEXT** מיוצאות כקוד עיצוב מוטבע, כך ש-DXF שעובר הלוך ושוב דרך KulmanLab CAD שומר על שיוך הגופן שלו. *קבצי* הגופן המותאמים אישית אינם מוטמעים ב-DXF — רק *שם* הגופן. אם אתם מייבאים מחדש שרטוט שמפנה לגופן מותאם אישית שלא העליתם במכשיר זה, הטקסט מוצג בגופן ברירת המחדל עד שתעלו גופן באותו שם.

## פקודות קשורות

- [Text](../text/) — ממקמת את תוויות הטקסט שבחירות הגופן חלות עליהן
- [Match Properties](../match-properties/) — מעתיקה גובה טקסט, אך לא גופן, בין ישויות
