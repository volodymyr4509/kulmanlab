export type PrivacyBlock =
  | { t: 'p'; html: string }
  | { t: 'ul'; items: string[] };
export type PrivacySection = { h: string; blocks: PrivacyBlock[] };
export type PrivacyContent = {
  title: string;
  desc: string;
  heading: string;
  updated: string;
  summaryHeading: string;
  summary: string[];
  sections: PrivacySection[];
};

// HTML in strings may use <a>, <strong>, <code> — styled by the privacy page wrapper.
export const privacyContent: Record<string, PrivacyContent> = {
  en: {
    title: 'Privacy Policy — KulmanLab',
    desc: 'How KulmanLab handles your data: drawings stay on your device, no accounts. Google Analytics for anonymous usage metrics; ads in the app via Google AdSense.',
    heading: 'Privacy Policy',
    updated: 'Last updated: July 14, 2026',
    summaryHeading: 'The short version',
    summary: [
      'Your drawings are stored in your browser and never leave your device. All your work belongs to you.',
      'There are no accounts, no sign-up, and no email. We do not know who you are.',
      'We use Google Analytics to count visits and understand which features are used. It never sees your drawing content.',
      'The app is free and funded by ads (Google AdSense). Your drawings are never used for advertising, and we never sell your data.',
    ],
    sections: [
      {
        h: 'Your drawings stay on your device',
        blocks: [
          { t: 'p', html: "Everything you draw in KulmanLab CAD is saved to your browser's local storage (IndexedDB) on your own device. Drawings are never uploaded, transmitted, or stored on any server. After the first load the app works fully offline — no server is involved in opening, editing, or saving your files." },
          { t: 'p', html: 'Because your files exist only in your browser, you are in full control of them. You can delete individual drawings from the <a href="/docs/commands/files/">Files panel</a>, erase everything at once with the <a href="/docs/commands/wipestorage/">wipestorage</a> command, or clear the site data in your browser settings. We cannot access, restore, or delete your files for you — we never have them.' },
        ],
      },
      {
        h: 'No accounts, no personal data',
        blocks: [
          { t: 'p', html: 'KulmanLab has no login, no registration, and no email collection. We do not collect your name, email address, or any other information that identifies you personally, and we have nothing to sell or share.' },
        ],
      },
      {
        h: 'Analytics',
        blocks: [
          { t: 'p', html: 'This website (kulmanlab.com) and the app (app.kulmanlab.com) use <strong>Google Analytics 4</strong> to collect anonymous usage metrics. This tells us things like how many people visit, which pages they read, what country they are in (approximate, derived from the IP address — Google Analytics 4 does not store IP addresses), and what browser and device type they use.' },
          { t: 'p', html: 'On the website we also record a few anonymous interaction events:' },
          { t: 'ul', items: [
            'clicks on "Launch App" and similar buttons,',
            'clicks on outbound links (the destination address of the link),',
            'how far down a page you scroll, and the interface language you use.',
          ] },
          { t: 'p', html: 'None of this includes your drawing content, file names, or anything you create in the app. Analytics data is processed by Google under the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.' },
        ],
      },
      {
        h: 'Advertising',
        blocks: [
          { t: 'p', html: 'The app (app.kulmanlab.com) is free to use and is funded by ads served through <strong>Google AdSense</strong>. This website (kulmanlab.com) does not show ads.' },
          { t: 'p', html: "Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this or other websites. Google's use of advertising cookies enables it and its partners to show you ads based on your visits to the app and/or other sites on the Internet. Ads are selected by Google — they never see your drawing content, file names, or anything you create in the app." },
          { t: 'p', html: "You can opt out of personalized advertising in Google's <a href=\"https://adssettings.google.com\" target=\"_blank\" rel=\"noopener\">Ads Settings</a>, or opt out of third-party advertising cookies more broadly at <a href=\"https://www.aboutads.info/choices\" target=\"_blank\" rel=\"noopener\">aboutads.info</a> (or <a href=\"https://www.youronlinechoices.eu\" target=\"_blank\" rel=\"noopener\">youronlinechoices.eu</a> in Europe). How Google uses data from sites that show its ads is described at <a href=\"https://policies.google.com/technologies/partner-sites\" target=\"_blank\" rel=\"noopener\">policies.google.com/technologies/partner-sites</a>." },
        ],
      },
      {
        h: 'Cookies and local storage',
        blocks: [
          { t: 'p', html: 'Two kinds of cookies are used. Google Analytics sets <code>_ga</code> and <code>_ga_*</code> on both the website and the app — they contain a random identifier that distinguishes browsers so that repeat visits are not counted as new visitors, expire after up to two years, and cannot be used to identify you personally. In the app, Google AdSense and its advertising partners set additional advertising cookies to serve and measure ads, as described in the Advertising section above. There are no social-media cookies, and the website itself sets no advertising cookies.' },
          { t: 'p', html: 'In addition, the website remembers your language preference and the app stores your drawings and undo history in browser local storage. This data never leaves your device.' },
        ],
      },
      {
        h: 'Third-party services',
        blocks: [
          { t: 'p', html: 'Besides Google Analytics and Google AdSense, KulmanLab relies on two infrastructure services:' },
          { t: 'ul', items: [
            "<strong>Google Fonts</strong> — the Inter font is loaded from Google's servers. Your browser sends a standard web request (including your IP address) to Google to fetch the font files.",
            '<strong>Firebase Hosting (Google)</strong> — serves this website and the app. Like any web server, it processes standard request logs (IP address, requested URL, user agent) to deliver the pages.',
          ] },
        ],
      },
      {
        h: 'Your choices',
        blocks: [
          { t: 'p', html: 'If you prefer not to be counted in analytics, you can block the Google Analytics cookies in your browser, use a content blocker, or install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics opt-out add-on</a>. The website and the app work exactly the same without analytics.' },
          { t: 'p', html: 'For advertising, you can turn off ad personalization in <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ads Settings</a> — you will still see ads in the app, but they will not be based on your interests or browsing history.' },
        ],
      },
      {
        h: 'Changes to this policy',
        blocks: [
          { t: 'p', html: 'If our data practices change — for example, if a new third-party service is added — this page will be updated and the date at the top revised.' },
        ],
      },
      {
        h: 'Contact',
        blocks: [
          { t: 'p', html: 'Questions about privacy? Open an issue on <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> or ask in the <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit community</a>.' },
        ],
      },
    ],
  },

  he: {
    title: 'מדיניות פרטיות — KulmanLab',
    desc: 'כיצד KulmanLab מטפל בנתונים שלכם: השרטוטים נשארים במכשיר שלכם, ללא חשבונות. Google Analytics למדדי שימוש אנונימיים; פרסומות באפליקציה דרך Google AdSense.',
    heading: 'מדיניות פרטיות',
    updated: 'עודכן לאחרונה: 14 ביולי 2026',
    summaryHeading: 'הגרסה הקצרה',
    summary: [
      'השרטוטים שלכם נשמרים בדפדפן שלכם ולעולם לא עוזבים את המכשיר. כל העבודה שלכם שייכת לכם.',
      'אין חשבונות, אין הרשמה ואין דוא"ל. אנחנו לא יודעים מי אתם.',
      'אנחנו משתמשים ב-Google Analytics כדי לספור ביקורים ולהבין אילו תכונות בשימוש. הוא לעולם לא רואה את תוכן השרטוט שלכם.',
      'האפליקציה חינמית וממומנת על ידי פרסומות (Google AdSense). השרטוטים שלכם לעולם לא משמשים לפרסום, ואנחנו לעולם לא מוכרים את הנתונים שלכם.',
    ],
    sections: [
      {
        h: 'השרטוטים שלכם נשארים במכשיר שלכם',
        blocks: [
          { t: 'p', html: 'כל מה ששרטטתם ב-KulmanLab CAD נשמר באחסון המקומי של הדפדפן שלכם (IndexedDB) על המכשיר שלכם. שרטוטים לעולם לא מועלים, משודרים או נשמרים בשום שרת. לאחר הטעינה הראשונה האפליקציה פועלת במלואה במצב אופליין — שום שרת לא מעורב בפתיחה, עריכה או שמירה של הקבצים שלכם.' },
          { t: 'p', html: 'מכיוון שהקבצים שלכם קיימים רק בדפדפן שלכם, אתם בשליטה מלאה עליהם. תוכלו למחוק שרטוטים בודדים מ<a href="/he/docs/commands/files/">פאנל הקבצים</a>, למחוק הכול בבת אחת עם הפקודה <a href="/he/docs/commands/wipestorage/">wipestorage</a>, או לנקות את נתוני האתר בהגדרות הדפדפן שלכם. אנחנו לא יכולים לגשת לקבצים שלכם, לשחזר אותם או למחוק אותם עבורכם — הם מעולם לא נמצאו אצלנו.' },
        ],
      },
      {
        h: 'ללא חשבונות, ללא נתונים אישיים',
        blocks: [
          { t: 'p', html: 'ל-KulmanLab אין התחברות, אין הרשמה ואין איסוף דוא"ל. אנחנו לא אוספים את שמכם, כתובת הדוא"ל שלכם או כל מידע אחר המזהה אתכם באופן אישי, ואין לנו דבר למכור או לשתף.' },
        ],
      },
      {
        h: 'אנליטיקה',
        blocks: [
          { t: 'p', html: 'אתר זה (kulmanlab.com) והאפליקציה (app.kulmanlab.com) משתמשים ב<strong>Google Analytics 4</strong> לאיסוף מדדי שימוש אנונימיים. זה מספר לנו דברים כמו כמה אנשים מבקרים, אילו עמודים הם קוראים, באיזו מדינה הם נמצאים (משוער, נגזר מכתובת ה-IP — Google Analytics 4 אינו שומר כתובות IP), ובאיזה דפדפן וסוג מכשיר הם משתמשים.' },
          { t: 'p', html: 'באתר אנחנו גם רושמים כמה אירועי אינטראקציה אנונימיים:' },
          { t: 'ul', items: [
            'לחיצות על "פתיחת האפליקציה" וכפתורים דומים,',
            'לחיצות על קישורים יוצאים (כתובת היעד של הקישור),',
            'עד כמה גללתם בעמוד, ושפת הממשק שבה אתם משתמשים.',
          ] },
          { t: 'p', html: 'שום דבר מכל זה לא כולל את תוכן השרטוט שלכם, שמות הקבצים, או כל דבר שאתם יוצרים באפליקציה. נתוני האנליטיקה מעובדים על ידי Google בהתאם ל<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">מדיניות הפרטיות של Google</a>.' },
        ],
      },
      {
        h: 'פרסום',
        blocks: [
          { t: 'p', html: 'האפליקציה (app.kulmanlab.com) ניתנת לשימוש בחינם וממומנת על ידי פרסומות המוגשות דרך <strong>Google AdSense</strong>. אתר זה (kulmanlab.com) אינו מציג פרסומות.' },
          { t: 'p', html: 'ספקים חיצוניים, כולל Google, משתמשים בעוגיות כדי להגיש פרסומות בהתבסס על ביקורים קודמים שלכם באתר זה או באתרים אחרים. השימוש של Google בעוגיות פרסום מאפשר לה ולשותפיה להציג לכם פרסומות בהתבסס על הביקורים שלכם באפליקציה ו/או באתרים אחרים באינטרנט. הפרסומות נבחרות על ידי Google — הם לעולם לא רואים את תוכן השרטוט שלכם, שמות הקבצים, או כל דבר שאתם יוצרים באפליקציה.' },
          { t: 'p', html: 'תוכלו לבטל את ההסכמה לפרסום מותאם אישית ב<a href="https://adssettings.google.com" target="_blank" rel="noopener">הגדרות הפרסומות של Google</a>, או לבטל את ההסכמה לעוגיות פרסום של צד שלישי באופן רחב יותר ב<a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (או <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> באירופה). כיצד Google משתמשת בנתונים מאתרים המציגים את הפרסומות שלה מתואר ב<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'עוגיות ואחסון מקומי',
        blocks: [
          { t: 'p', html: 'נעשה שימוש בשני סוגי עוגיות. Google Analytics קובע <code>_ga</code> ו-<code>_ga_*</code> הן באתר והן באפליקציה — הן מכילות מזהה אקראי המבחין בין דפדפנים כך שביקורים חוזרים לא נספרים כמבקרים חדשים, פגות תוקף לאחר עד שנתיים, ולא ניתן להשתמש בהן כדי לזהות אתכם באופן אישי. באפליקציה, Google AdSense ושותפיה הפרסומיים קובעים עוגיות פרסום נוספות כדי להגיש ולמדוד פרסומות, כפי שתואר בסעיף הפרסום לעיל. אין עוגיות רשתות חברתיות, והאתר עצמו אינו קובע עוגיות פרסום.' },
          { t: 'p', html: 'בנוסף, האתר זוכר את העדפת השפה שלכם והאפליקציה שומרת את השרטוטים והיסטוריית הביטול שלכם באחסון המקומי של הדפדפן. נתונים אלה לעולם לא עוזבים את המכשיר שלכם.' },
        ],
      },
      {
        h: 'שירותי צד שלישי',
        blocks: [
          { t: 'p', html: 'מלבד Google Analytics ו-Google AdSense, KulmanLab מסתמך על שני שירותי תשתית:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — הגופן Inter נטען משרתי Google. הדפדפן שלכם שולח בקשת אינטרנט סטנדרטית (כולל כתובת ה-IP שלכם) ל-Google כדי לאחזר את קובצי הגופן.',
            '<strong>Firebase Hosting (Google)</strong> — מגיש אתר זה ואת האפליקציה. כמו כל שרת אינטרנט, הוא מעבד יומני בקשה סטנדרטיים (כתובת IP, כתובת URL מבוקשת, סוכן משתמש) כדי לספק את העמודים.',
          ] },
        ],
      },
      {
        h: 'הבחירות שלכם',
        blocks: [
          { t: 'p', html: 'אם אתם מעדיפים שלא להיספר באנליטיקה, תוכלו לחסום את עוגיות Google Analytics בדפדפן שלכם, להשתמש בחוסם תוכן, או להתקין את <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">תוסף ההשבתה של Google Analytics</a>. האתר והאפליקציה פועלים באופן זהה לחלוטין ללא אנליטיקה.' },
          { t: 'p', html: 'לגבי פרסום, תוכלו לכבות התאמה אישית של פרסומות ב<a href="https://adssettings.google.com" target="_blank" rel="noopener">הגדרות הפרסומות של Google</a> — עדיין תראו פרסומות באפליקציה, אך הן לא יתבססו על תחומי העניין או היסטוריית הגלישה שלכם.' },
        ],
      },
      {
        h: 'שינויים במדיניות זו',
        blocks: [
          { t: 'p', html: 'אם נוהלי הנתונים שלנו ישתנו — לדוגמה, אם יתווסף שירות צד שלישי חדש — עמוד זה יעודכן והתאריך בראש העמוד יתוקן.' },
        ],
      },
      {
        h: 'יצירת קשר',
        blocks: [
          { t: 'p', html: 'שאלות לגבי פרטיות? פתחו issue ב<a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> או שאלו ב<a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">קהילת Reddit</a>.' },
        ],
      },
    ],
  },

  de: {
    title: 'Datenschutzerklärung — KulmanLab',
    desc: 'Wie KulmanLab mit Ihren Daten umgeht: Zeichnungen bleiben auf Ihrem Gerät, keine Konten. Google Analytics für anonyme Nutzungsmetriken; Werbung in der App über Google AdSense.',
    heading: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: 14. Juli 2026',
    summaryHeading: 'Die Kurzfassung',
    summary: [
      'Ihre Zeichnungen werden in Ihrem Browser gespeichert und verlassen niemals Ihr Gerät. Ihre gesamte Arbeit gehört Ihnen.',
      'Es gibt keine Konten, keine Registrierung und keine E-Mail. Wir wissen nicht, wer Sie sind.',
      'Wir verwenden Google Analytics, um Besuche zu zählen und zu verstehen, welche Funktionen genutzt werden. Ihre Zeichnungsinhalte sieht es nie.',
      'Die App ist kostenlos und wird durch Werbung finanziert (Google AdSense). Ihre Zeichnungen werden niemals für Werbung verwendet, und wir verkaufen niemals Ihre Daten.',
    ],
    sections: [
      {
        h: 'Ihre Zeichnungen bleiben auf Ihrem Gerät',
        blocks: [
          { t: 'p', html: 'Alles, was Sie in KulmanLab CAD zeichnen, wird im lokalen Speicher Ihres Browsers (IndexedDB) auf Ihrem eigenen Gerät gespeichert. Zeichnungen werden niemals hochgeladen, übertragen oder auf einem Server gespeichert. Nach dem ersten Laden funktioniert die App vollständig offline — kein Server ist am Öffnen, Bearbeiten oder Speichern Ihrer Dateien beteiligt.' },
          { t: 'p', html: 'Da Ihre Dateien nur in Ihrem Browser existieren, haben Sie die volle Kontrolle über sie. Sie können einzelne Zeichnungen im <a href="/de/docs/commands/files/">Dateien-Panel</a> löschen, mit dem Befehl <a href="/de/docs/commands/wipestorage/">wipestorage</a> alles auf einmal entfernen oder die Websitedaten in Ihren Browsereinstellungen löschen. Wir können nicht auf Ihre Dateien zugreifen, sie wiederherstellen oder für Sie löschen — wir haben sie nie.' },
        ],
      },
      {
        h: 'Keine Konten, keine personenbezogenen Daten',
        blocks: [
          { t: 'p', html: 'KulmanLab hat kein Login, keine Registrierung und keine E-Mail-Erfassung. Wir erfassen weder Ihren Namen noch Ihre E-Mail-Adresse oder andere Informationen, die Sie persönlich identifizieren — und wir haben nichts zu verkaufen oder weiterzugeben.' },
        ],
      },
      {
        h: 'Analyse (Analytics)',
        blocks: [
          { t: 'p', html: 'Diese Website (kulmanlab.com) und die App (app.kulmanlab.com) verwenden <strong>Google Analytics 4</strong>, um anonyme Nutzungsmetriken zu erfassen. So erfahren wir z. B., wie viele Personen die Seite besuchen, welche Seiten sie lesen, aus welchem Land sie kommen (ungefähr, abgeleitet aus der IP-Adresse — Google Analytics 4 speichert keine IP-Adressen) und welchen Browser und Gerätetyp sie verwenden.' },
          { t: 'p', html: 'Auf der Website erfassen wir außerdem einige anonyme Interaktionsereignisse:' },
          { t: 'ul', items: [
            'Klicks auf „App starten" und ähnliche Schaltflächen,',
            'Klicks auf ausgehende Links (die Zieladresse des Links),',
            'wie weit Sie eine Seite nach unten scrollen und welche Oberflächensprache Sie verwenden.',
          ] },
          { t: 'p', html: 'Nichts davon umfasst Ihre Zeichnungsinhalte, Dateinamen oder irgendetwas, das Sie in der App erstellen. Analysedaten werden von Google gemäß der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google-Datenschutzerklärung</a> verarbeitet.' },
        ],
      },
      {
        h: 'Werbung',
        blocks: [
          { t: 'p', html: 'Die App (app.kulmanlab.com) ist kostenlos nutzbar und wird durch Anzeigen über <strong>Google AdSense</strong> finanziert. Diese Website (kulmanlab.com) zeigt keine Werbung.' },
          { t: 'p', html: 'Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen auf Grundlage Ihrer früheren Besuche dieser oder anderer Websites zu schalten. Durch die Verwendung von Werbe-Cookies können Google und seine Partner Ihnen Anzeigen auf Grundlage Ihrer Besuche der App und/oder anderer Websites im Internet anzeigen. Die Anzeigen werden von Google ausgewählt — Ihre Zeichnungsinhalte, Dateinamen oder irgendetwas, das Sie in der App erstellen, sehen sie nie.' },
          { t: 'p', html: 'Sie können personalisierte Werbung in den <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google-Einstellungen für Werbung</a> deaktivieren oder Werbe-Cookies von Drittanbietern generell unter <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (bzw. <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> in Europa) ablehnen. Wie Google Daten von Websites verwendet, die seine Anzeigen zeigen, ist unter <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a> beschrieben.' },
        ],
      },
      {
        h: 'Cookies und lokaler Speicher',
        blocks: [
          { t: 'p', html: 'Es werden zwei Arten von Cookies verwendet. Google Analytics setzt <code>_ga</code> und <code>_ga_*</code> sowohl auf der Website als auch in der App — sie enthalten eine zufällige Kennung, die Browser unterscheidet, damit wiederholte Besuche nicht als neue Besucher gezählt werden. Sie laufen nach spätestens zwei Jahren ab und können nicht zu Ihrer persönlichen Identifizierung verwendet werden. In der App setzen Google AdSense und seine Werbepartner zusätzliche Werbe-Cookies zum Ausliefern und Messen von Anzeigen, wie im Abschnitt „Werbung" beschrieben. Es gibt keine Social-Media-Cookies, und die Website selbst setzt keine Werbe-Cookies.' },
          { t: 'p', html: 'Darüber hinaus merkt sich die Website Ihre Spracheinstellung, und die App speichert Ihre Zeichnungen und den Rückgängig-Verlauf im lokalen Browserspeicher. Diese Daten verlassen niemals Ihr Gerät.' },
        ],
      },
      {
        h: 'Dienste von Drittanbietern',
        blocks: [
          { t: 'p', html: 'Neben Google Analytics und Google AdSense nutzt KulmanLab zwei Infrastrukturdienste:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — die Schriftart Inter wird von Google-Servern geladen. Ihr Browser sendet eine Standard-Webanfrage (einschließlich Ihrer IP-Adresse) an Google, um die Schriftdateien abzurufen.',
            '<strong>Firebase Hosting (Google)</strong> — liefert diese Website und die App aus. Wie jeder Webserver verarbeitet es Standard-Anfrageprotokolle (IP-Adresse, angeforderte URL, User-Agent), um die Seiten bereitzustellen.',
          ] },
        ],
      },
      {
        h: 'Ihre Wahlmöglichkeiten',
        blocks: [
          { t: 'p', html: 'Wenn Sie nicht in der Analyse gezählt werden möchten, können Sie die Google-Analytics-Cookies in Ihrem Browser blockieren, einen Content-Blocker verwenden oder das <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Deaktivierungs-Add-on für Google Analytics</a> installieren. Website und App funktionieren ohne Analyse genau gleich.' },
          { t: 'p', html: 'Bei der Werbung können Sie die Personalisierung in den <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google-Einstellungen für Werbung</a> ausschalten — Sie sehen weiterhin Anzeigen in der App, aber sie basieren nicht auf Ihren Interessen oder Ihrem Browserverlauf.' },
        ],
      },
      {
        h: 'Änderungen an dieser Erklärung',
        blocks: [
          { t: 'p', html: 'Wenn sich unsere Datenpraktiken ändern — zum Beispiel wenn ein neuer Drittanbieterdienst hinzukommt — wird diese Seite aktualisiert und das Datum oben angepasst.' },
        ],
      },
      {
        h: 'Kontakt',
        blocks: [
          { t: 'p', html: 'Fragen zum Datenschutz? Öffnen Sie ein Issue auf <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> oder fragen Sie in der <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit-Community</a>.' },
        ],
      },
    ],
  },

  es: {
    title: 'Política de privacidad — KulmanLab',
    desc: 'Cómo KulmanLab trata tus datos: los dibujos permanecen en tu dispositivo, sin cuentas. Google Analytics para métricas de uso anónimas; anuncios en la app mediante Google AdSense.',
    heading: 'Política de privacidad',
    updated: 'Última actualización: 14 de julio de 2026',
    summaryHeading: 'La versión corta',
    summary: [
      'Tus dibujos se guardan en tu navegador y nunca salen de tu dispositivo. Todo tu trabajo te pertenece.',
      'No hay cuentas, ni registro, ni correo electrónico. No sabemos quién eres.',
      'Usamos Google Analytics para contar visitas y entender qué funciones se usan. Nunca ve el contenido de tus dibujos.',
      'La app es gratuita y se financia con anuncios (Google AdSense). Tus dibujos nunca se usan para publicidad y nunca vendemos tus datos.',
    ],
    sections: [
      {
        h: 'Tus dibujos permanecen en tu dispositivo',
        blocks: [
          { t: 'p', html: 'Todo lo que dibujas en KulmanLab CAD se guarda en el almacenamiento local de tu navegador (IndexedDB), en tu propio dispositivo. Los dibujos nunca se suben, se transmiten ni se almacenan en ningún servidor. Tras la primera carga, la app funciona completamente sin conexión — ningún servidor interviene al abrir, editar o guardar tus archivos.' },
          { t: 'p', html: 'Como tus archivos existen solo en tu navegador, tienes control total sobre ellos. Puedes eliminar dibujos individuales desde el <a href="/es/docs/commands/files/">panel de Archivos</a>, borrarlo todo de una vez con el comando <a href="/es/docs/commands/wipestorage/">wipestorage</a>, o limpiar los datos del sitio en la configuración de tu navegador. No podemos acceder a tus archivos, restaurarlos ni eliminarlos por ti — nunca los tenemos.' },
        ],
      },
      {
        h: 'Sin cuentas, sin datos personales',
        blocks: [
          { t: 'p', html: 'KulmanLab no tiene inicio de sesión, ni registro, ni recopilación de correos electrónicos. No recopilamos tu nombre, tu dirección de correo ni ninguna otra información que te identifique personalmente, y no tenemos nada que vender ni compartir.' },
        ],
      },
      {
        h: 'Analítica',
        blocks: [
          { t: 'p', html: 'Este sitio web (kulmanlab.com) y la app (app.kulmanlab.com) usan <strong>Google Analytics 4</strong> para recopilar métricas de uso anónimas. Esto nos dice, por ejemplo, cuántas personas nos visitan, qué páginas leen, en qué país están (aproximado, derivado de la dirección IP — Google Analytics 4 no almacena direcciones IP) y qué navegador y tipo de dispositivo usan.' },
          { t: 'p', html: 'En el sitio web también registramos algunos eventos de interacción anónimos:' },
          { t: 'ul', items: [
            'clics en «Abrir la app» y botones similares,',
            'clics en enlaces salientes (la dirección de destino del enlace),',
            'hasta dónde te desplazas en una página y el idioma de la interfaz que usas.',
          ] },
          { t: 'p', html: 'Nada de esto incluye el contenido de tus dibujos, los nombres de archivo ni nada de lo que crees en la app. Los datos analíticos los procesa Google conforme a la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de privacidad de Google</a>.' },
        ],
      },
      {
        h: 'Publicidad',
        blocks: [
          { t: 'p', html: 'La app (app.kulmanlab.com) es de uso gratuito y se financia con anuncios servidos a través de <strong>Google AdSense</strong>. Este sitio web (kulmanlab.com) no muestra anuncios.' },
          { t: 'p', html: 'Proveedores externos, incluido Google, usan cookies para mostrar anuncios basados en tus visitas anteriores a este u otros sitios web. El uso de cookies publicitarias por parte de Google le permite a él y a sus socios mostrarte anuncios basados en tus visitas a la app y/u otros sitios de Internet. Los anuncios los selecciona Google — nunca ven el contenido de tus dibujos, los nombres de archivo ni nada de lo que crees en la app.' },
          { t: 'p', html: 'Puedes desactivar la publicidad personalizada en la <a href="https://adssettings.google.com" target="_blank" rel="noopener">Configuración de anuncios de Google</a>, o rechazar las cookies publicitarias de terceros de forma más amplia en <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (o <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> en Europa). Cómo usa Google los datos de los sitios que muestran sus anuncios se describe en <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookies y almacenamiento local',
        blocks: [
          { t: 'p', html: 'Se usan dos tipos de cookies. Google Analytics establece <code>_ga</code> y <code>_ga_*</code> tanto en el sitio web como en la app — contienen un identificador aleatorio que distingue navegadores para que las visitas repetidas no se cuenten como visitantes nuevos, caducan como máximo a los dos años y no pueden usarse para identificarte personalmente. En la app, Google AdSense y sus socios publicitarios establecen cookies publicitarias adicionales para servir y medir anuncios, como se describe en la sección Publicidad. No hay cookies de redes sociales, y el sitio web en sí no establece cookies publicitarias.' },
          { t: 'p', html: 'Además, el sitio web recuerda tu preferencia de idioma y la app guarda tus dibujos y el historial de deshacer en el almacenamiento local del navegador. Estos datos nunca salen de tu dispositivo.' },
        ],
      },
      {
        h: 'Servicios de terceros',
        blocks: [
          { t: 'p', html: 'Además de Google Analytics y Google AdSense, KulmanLab depende de dos servicios de infraestructura:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — la fuente Inter se carga desde los servidores de Google. Tu navegador envía una solicitud web estándar (incluida tu dirección IP) a Google para obtener los archivos de la fuente.',
            '<strong>Firebase Hosting (Google)</strong> — sirve este sitio web y la app. Como cualquier servidor web, procesa registros de solicitudes estándar (dirección IP, URL solicitada, agente de usuario) para entregar las páginas.',
          ] },
        ],
      },
      {
        h: 'Tus opciones',
        blocks: [
          { t: 'p', html: 'Si prefieres no ser contado en la analítica, puedes bloquear las cookies de Google Analytics en tu navegador, usar un bloqueador de contenido o instalar el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">complemento de inhabilitación de Google Analytics</a>. El sitio web y la app funcionan exactamente igual sin analítica.' },
          { t: 'p', html: 'En cuanto a la publicidad, puedes desactivar la personalización de anuncios en la <a href="https://adssettings.google.com" target="_blank" rel="noopener">Configuración de anuncios de Google</a> — seguirás viendo anuncios en la app, pero no se basarán en tus intereses ni en tu historial de navegación.' },
        ],
      },
      {
        h: 'Cambios en esta política',
        blocks: [
          { t: 'p', html: 'Si nuestras prácticas de datos cambian — por ejemplo, si se añade un nuevo servicio de terceros — esta página se actualizará y se revisará la fecha de arriba.' },
        ],
      },
      {
        h: 'Contacto',
        blocks: [
          { t: 'p', html: '¿Preguntas sobre privacidad? Abre un issue en <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> o pregunta en la <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">comunidad de Reddit</a>.' },
        ],
      },
    ],
  },

  fr: {
    title: 'Politique de confidentialité — KulmanLab',
    desc: "Comment KulmanLab traite vos données : les dessins restent sur votre appareil, aucun compte. Google Analytics pour des statistiques anonymes ; publicités dans l'app via Google AdSense.",
    heading: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : 14 juillet 2026',
    summaryHeading: 'La version courte',
    summary: [
      'Vos dessins sont stockés dans votre navigateur et ne quittent jamais votre appareil. Tout votre travail vous appartient.',
      "Il n'y a ni compte, ni inscription, ni e-mail. Nous ne savons pas qui vous êtes.",
      "Nous utilisons Google Analytics pour compter les visites et comprendre quelles fonctionnalités sont utilisées. Il ne voit jamais le contenu de vos dessins.",
      "L'app est gratuite et financée par la publicité (Google AdSense). Vos dessins ne sont jamais utilisés à des fins publicitaires, et nous ne vendons jamais vos données.",
    ],
    sections: [
      {
        h: 'Vos dessins restent sur votre appareil',
        blocks: [
          { t: 'p', html: "Tout ce que vous dessinez dans KulmanLab CAD est enregistré dans le stockage local de votre navigateur (IndexedDB), sur votre propre appareil. Les dessins ne sont jamais téléversés, transmis ni stockés sur un serveur. Après le premier chargement, l'app fonctionne entièrement hors ligne — aucun serveur n'intervient pour ouvrir, modifier ou enregistrer vos fichiers." },
          { t: 'p', html: 'Comme vos fichiers n\'existent que dans votre navigateur, vous en avez le contrôle total. Vous pouvez supprimer des dessins individuellement depuis le <a href="/fr/docs/commands/files/">panneau Fichiers</a>, tout effacer d\'un coup avec la commande <a href="/fr/docs/commands/wipestorage/">wipestorage</a>, ou vider les données du site dans les réglages de votre navigateur. Nous ne pouvons ni accéder à vos fichiers, ni les restaurer, ni les supprimer à votre place — nous ne les avons jamais.' },
        ],
      },
      {
        h: 'Pas de compte, pas de données personnelles',
        blocks: [
          { t: 'p', html: "KulmanLab n'a ni connexion, ni inscription, ni collecte d'e-mails. Nous ne collectons ni votre nom, ni votre adresse e-mail, ni aucune autre information permettant de vous identifier personnellement — et nous n'avons rien à vendre ni à partager." },
        ],
      },
      {
        h: 'Statistiques',
        blocks: [
          { t: 'p', html: "Ce site web (kulmanlab.com) et l'app (app.kulmanlab.com) utilisent <strong>Google Analytics 4</strong> pour collecter des statistiques d'utilisation anonymes. Cela nous indique par exemple combien de personnes nous visitent, quelles pages elles lisent, dans quel pays elles se trouvent (approximatif, déduit de l'adresse IP — Google Analytics 4 ne stocke pas les adresses IP), et quel navigateur et type d'appareil elles utilisent." },
          { t: 'p', html: "Sur le site web, nous enregistrons aussi quelques événements d'interaction anonymes :" },
          { t: 'ul', items: [
            'les clics sur « Lancer l\'app » et les boutons similaires,',
            "les clics sur les liens sortants (l'adresse de destination du lien),",
            "jusqu'où vous faites défiler une page, et la langue d'interface que vous utilisez.",
          ] },
          { t: 'p', html: 'Rien de tout cela n\'inclut le contenu de vos dessins, les noms de fichiers ni quoi que ce soit que vous créez dans l\'app. Les données statistiques sont traitées par Google conformément aux <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Règles de confidentialité de Google</a>.' },
        ],
      },
      {
        h: 'Publicité',
        blocks: [
          { t: 'p', html: "L'app (app.kulmanlab.com) est gratuite et financée par des annonces diffusées via <strong>Google AdSense</strong>. Ce site web (kulmanlab.com) n'affiche pas de publicité." },
          { t: 'p', html: "Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites antérieures sur ce site ou d'autres sites web. L'utilisation de cookies publicitaires permet à Google et à ses partenaires de vous montrer des annonces en fonction de vos visites sur l'app et/ou d'autres sites Internet. Les annonces sont sélectionnées par Google — elles ne voient jamais le contenu de vos dessins, les noms de fichiers ni quoi que ce soit que vous créez dans l'app." },
          { t: 'p', html: 'Vous pouvez désactiver la publicité personnalisée dans les <a href="https://adssettings.google.com" target="_blank" rel="noopener">Paramètres des annonces de Google</a>, ou refuser plus largement les cookies publicitaires tiers sur <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (ou <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> en Europe). La façon dont Google utilise les données des sites qui affichent ses annonces est décrite sur <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookies et stockage local',
        blocks: [
          { t: 'p', html: "Deux types de cookies sont utilisés. Google Analytics dépose <code>_ga</code> et <code>_ga_*</code> sur le site web comme dans l'app — ils contiennent un identifiant aléatoire qui distingue les navigateurs afin que les visites répétées ne soient pas comptées comme de nouveaux visiteurs ; ils expirent au bout de deux ans maximum et ne peuvent pas servir à vous identifier personnellement. Dans l'app, Google AdSense et ses partenaires publicitaires déposent des cookies publicitaires supplémentaires pour diffuser et mesurer les annonces, comme décrit dans la section Publicité ci-dessus. Il n'y a pas de cookies de réseaux sociaux, et le site web lui-même ne dépose aucun cookie publicitaire." },
          { t: 'p', html: "En outre, le site web mémorise votre préférence de langue et l'app stocke vos dessins et l'historique d'annulation dans le stockage local du navigateur. Ces données ne quittent jamais votre appareil." },
        ],
      },
      {
        h: 'Services tiers',
        blocks: [
          { t: 'p', html: 'Outre Google Analytics et Google AdSense, KulmanLab repose sur deux services d\'infrastructure :' },
          { t: 'ul', items: [
            "<strong>Google Fonts</strong> — la police Inter est chargée depuis les serveurs de Google. Votre navigateur envoie une requête web standard (incluant votre adresse IP) à Google pour récupérer les fichiers de police.",
            "<strong>Firebase Hosting (Google)</strong> — héberge ce site web et l'app. Comme tout serveur web, il traite des journaux de requêtes standard (adresse IP, URL demandée, user agent) pour livrer les pages.",
          ] },
        ],
      },
      {
        h: 'Vos choix',
        blocks: [
          { t: 'p', html: "Si vous préférez ne pas être compté dans les statistiques, vous pouvez bloquer les cookies Google Analytics dans votre navigateur, utiliser un bloqueur de contenu, ou installer le <a href=\"https://tools.google.com/dlpage/gaoptout\" target=\"_blank\" rel=\"noopener\">module de désactivation de Google Analytics</a>. Le site web et l'app fonctionnent exactement pareil sans statistiques." },
          { t: 'p', html: "Pour la publicité, vous pouvez désactiver la personnalisation des annonces dans les <a href=\"https://adssettings.google.com\" target=\"_blank\" rel=\"noopener\">Paramètres des annonces de Google</a> — vous verrez toujours des annonces dans l'app, mais elles ne seront pas basées sur vos centres d'intérêt ni votre historique de navigation." },
        ],
      },
      {
        h: 'Modifications de cette politique',
        blocks: [
          { t: 'p', html: "Si nos pratiques en matière de données changent — par exemple si un nouveau service tiers est ajouté — cette page sera mise à jour et la date en haut sera révisée." },
        ],
      },
      {
        h: 'Contact',
        blocks: [
          { t: 'p', html: 'Des questions sur la confidentialité ? Ouvrez un ticket sur <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> ou demandez à la <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">communauté Reddit</a>.' },
        ],
      },
    ],
  },

  it: {
    title: 'Informativa sulla privacy — KulmanLab',
    desc: "Come KulmanLab gestisce i tuoi dati: i disegni restano sul tuo dispositivo, nessun account. Google Analytics per metriche d'uso anonime; annunci nell'app tramite Google AdSense.",
    heading: 'Informativa sulla privacy',
    updated: 'Ultimo aggiornamento: 14 luglio 2026',
    summaryHeading: 'La versione breve',
    summary: [
      'I tuoi disegni sono salvati nel tuo browser e non lasciano mai il tuo dispositivo. Tutto il tuo lavoro appartiene a te.',
      'Non ci sono account, registrazioni né e-mail. Non sappiamo chi sei.',
      'Usiamo Google Analytics per contare le visite e capire quali funzioni vengono usate. Non vede mai il contenuto dei tuoi disegni.',
      "L'app è gratuita e finanziata dalla pubblicità (Google AdSense). I tuoi disegni non vengono mai usati per la pubblicità e non vendiamo mai i tuoi dati.",
    ],
    sections: [
      {
        h: 'I tuoi disegni restano sul tuo dispositivo',
        blocks: [
          { t: 'p', html: "Tutto ciò che disegni in KulmanLab CAD viene salvato nella memoria locale del tuo browser (IndexedDB), sul tuo dispositivo. I disegni non vengono mai caricati, trasmessi o memorizzati su alcun server. Dopo il primo caricamento l'app funziona completamente offline — nessun server è coinvolto nell'apertura, modifica o salvataggio dei tuoi file." },
          { t: 'p', html: 'Poiché i tuoi file esistono solo nel tuo browser, ne hai il pieno controllo. Puoi eliminare i singoli disegni dal <a href="/it/docs/commands/files/">pannello File</a>, cancellare tutto in una volta con il comando <a href="/it/docs/commands/wipestorage/">wipestorage</a>, oppure cancellare i dati del sito nelle impostazioni del browser. Non possiamo accedere ai tuoi file, ripristinarli o eliminarli per te — non li abbiamo mai.' },
        ],
      },
      {
        h: 'Nessun account, nessun dato personale',
        blocks: [
          { t: 'p', html: 'KulmanLab non ha login, registrazione né raccolta di e-mail. Non raccogliamo il tuo nome, il tuo indirizzo e-mail né alcuna altra informazione che ti identifichi personalmente, e non abbiamo nulla da vendere o condividere.' },
        ],
      },
      {
        h: 'Analisi',
        blocks: [
          { t: 'p', html: "Questo sito web (kulmanlab.com) e l'app (app.kulmanlab.com) usano <strong>Google Analytics 4</strong> per raccogliere metriche d'uso anonime. Questo ci dice, ad esempio, quante persone ci visitano, quali pagine leggono, in che Paese si trovano (approssimativo, ricavato dall'indirizzo IP — Google Analytics 4 non memorizza gli indirizzi IP) e quale browser e tipo di dispositivo usano." },
          { t: 'p', html: 'Sul sito web registriamo anche alcuni eventi di interazione anonimi:' },
          { t: 'ul', items: [
            'clic su "Avvia app" e pulsanti simili,',
            "clic sui link in uscita (l'indirizzo di destinazione del link),",
            "quanto scorri una pagina e la lingua dell'interfaccia che usi.",
          ] },
          { t: 'p', html: 'Nulla di tutto ciò include il contenuto dei tuoi disegni, i nomi dei file o qualsiasi cosa tu crei nell\'app. I dati di analisi sono trattati da Google secondo le <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Norme sulla privacy di Google</a>.' },
        ],
      },
      {
        h: 'Pubblicità',
        blocks: [
          { t: 'p', html: "L'app (app.kulmanlab.com) è gratuita ed è finanziata da annunci pubblicati tramite <strong>Google AdSense</strong>. Questo sito web (kulmanlab.com) non mostra annunci." },
          { t: 'p', html: "Fornitori terzi, incluso Google, usano cookie per pubblicare annunci in base alle tue visite precedenti a questo o ad altri siti web. L'uso dei cookie pubblicitari consente a Google e ai suoi partner di mostrarti annunci in base alle tue visite all'app e/o ad altri siti Internet. Gli annunci sono selezionati da Google — non vedono mai il contenuto dei tuoi disegni, i nomi dei file o qualsiasi cosa tu crei nell'app." },
          { t: 'p', html: 'Puoi disattivare la pubblicità personalizzata nelle <a href="https://adssettings.google.com" target="_blank" rel="noopener">Impostazioni annunci di Google</a>, oppure rifiutare più in generale i cookie pubblicitari di terze parti su <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (o <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> in Europa). Come Google usa i dati dei siti che mostrano i suoi annunci è descritto su <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookie e memoria locale',
        blocks: [
          { t: 'p', html: "Vengono usati due tipi di cookie. Google Analytics imposta <code>_ga</code> e <code>_ga_*</code> sia sul sito web sia nell'app — contengono un identificatore casuale che distingue i browser affinché le visite ripetute non vengano contate come nuovi visitatori; scadono al massimo dopo due anni e non possono essere usati per identificarti personalmente. Nell'app, Google AdSense e i suoi partner pubblicitari impostano cookie pubblicitari aggiuntivi per pubblicare e misurare gli annunci, come descritto nella sezione Pubblicità qui sopra. Non ci sono cookie di social media e il sito web in sé non imposta cookie pubblicitari." },
          { t: 'p', html: "Inoltre, il sito web ricorda la tua preferenza di lingua e l'app salva i tuoi disegni e la cronologia di annullamento nella memoria locale del browser. Questi dati non lasciano mai il tuo dispositivo." },
        ],
      },
      {
        h: 'Servizi di terze parti',
        blocks: [
          { t: 'p', html: 'Oltre a Google Analytics e Google AdSense, KulmanLab si affida a due servizi infrastrutturali:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — il font Inter viene caricato dai server di Google. Il tuo browser invia una richiesta web standard (incluso il tuo indirizzo IP) a Google per scaricare i file del font.',
            "<strong>Firebase Hosting (Google)</strong> — serve questo sito web e l'app. Come ogni server web, elabora i log standard delle richieste (indirizzo IP, URL richiesto, user agent) per consegnare le pagine.",
          ] },
        ],
      },
      {
        h: 'Le tue scelte',
        blocks: [
          { t: 'p', html: "Se preferisci non essere conteggiato nelle analisi, puoi bloccare i cookie di Google Analytics nel tuo browser, usare un content blocker o installare il <a href=\"https://tools.google.com/dlpage/gaoptout\" target=\"_blank\" rel=\"noopener\">componente aggiuntivo di disattivazione di Google Analytics</a>. Il sito web e l'app funzionano esattamente allo stesso modo senza analisi." },
          { t: 'p', html: "Per la pubblicità, puoi disattivare la personalizzazione degli annunci nelle <a href=\"https://adssettings.google.com\" target=\"_blank\" rel=\"noopener\">Impostazioni annunci di Google</a> — vedrai comunque annunci nell'app, ma non saranno basati sui tuoi interessi o sulla tua cronologia di navigazione." },
        ],
      },
      {
        h: 'Modifiche a questa informativa',
        blocks: [
          { t: 'p', html: 'Se le nostre pratiche sui dati cambiano — ad esempio se viene aggiunto un nuovo servizio di terze parti — questa pagina verrà aggiornata e la data in alto verrà rivista.' },
        ],
      },
      {
        h: 'Contatti',
        blocks: [
          { t: 'p', html: 'Domande sulla privacy? Apri una issue su <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> o chiedi nella <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">community Reddit</a>.' },
        ],
      },
    ],
  },

  pt: {
    title: 'Política de Privacidade — KulmanLab',
    desc: 'Como o KulmanLab trata seus dados: os desenhos ficam no seu dispositivo, sem contas. Google Analytics para métricas de uso anônimas; anúncios no app via Google AdSense.',
    heading: 'Política de Privacidade',
    updated: 'Última atualização: 14 de julho de 2026',
    summaryHeading: 'A versão curta',
    summary: [
      'Seus desenhos são armazenados no seu navegador e nunca saem do seu dispositivo. Todo o seu trabalho pertence a você.',
      'Não há contas, cadastro nem e-mail. Não sabemos quem você é.',
      'Usamos o Google Analytics para contar visitas e entender quais recursos são usados. Ele nunca vê o conteúdo dos seus desenhos.',
      'O app é gratuito e financiado por anúncios (Google AdSense). Seus desenhos nunca são usados para publicidade, e nunca vendemos seus dados.',
    ],
    sections: [
      {
        h: 'Seus desenhos ficam no seu dispositivo',
        blocks: [
          { t: 'p', html: 'Tudo o que você desenha no KulmanLab CAD é salvo no armazenamento local do seu navegador (IndexedDB), no seu próprio dispositivo. Os desenhos nunca são enviados, transmitidos ou armazenados em servidor algum. Após o primeiro carregamento, o app funciona totalmente offline — nenhum servidor participa da abertura, edição ou salvamento dos seus arquivos.' },
          { t: 'p', html: 'Como seus arquivos existem apenas no seu navegador, você tem controle total sobre eles. Você pode excluir desenhos individuais no <a href="/pt/docs/commands/files/">painel Arquivos</a>, apagar tudo de uma vez com o comando <a href="/pt/docs/commands/wipestorage/">wipestorage</a>, ou limpar os dados do site nas configurações do navegador. Não podemos acessar, restaurar ou excluir seus arquivos por você — nós nunca os temos.' },
        ],
      },
      {
        h: 'Sem contas, sem dados pessoais',
        blocks: [
          { t: 'p', html: 'O KulmanLab não tem login, cadastro nem coleta de e-mails. Não coletamos seu nome, seu endereço de e-mail nem qualquer outra informação que identifique você pessoalmente — e não temos nada para vender ou compartilhar.' },
        ],
      },
      {
        h: 'Análise de uso',
        blocks: [
          { t: 'p', html: 'Este site (kulmanlab.com) e o app (app.kulmanlab.com) usam o <strong>Google Analytics 4</strong> para coletar métricas de uso anônimas. Isso nos mostra, por exemplo, quantas pessoas nos visitam, quais páginas leem, em que país estão (aproximado, derivado do endereço IP — o Google Analytics 4 não armazena endereços IP) e qual navegador e tipo de dispositivo usam.' },
          { t: 'p', html: 'No site também registramos alguns eventos de interação anônimos:' },
          { t: 'ul', items: [
            'cliques em "Abrir o app" e botões semelhantes,',
            'cliques em links externos (o endereço de destino do link),',
            'até onde você rola a página e o idioma de interface que usa.',
          ] },
          { t: 'p', html: 'Nada disso inclui o conteúdo dos seus desenhos, nomes de arquivos ou qualquer coisa que você crie no app. Os dados de análise são processados pelo Google conforme a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacidade do Google</a>.' },
        ],
      },
      {
        h: 'Publicidade',
        blocks: [
          { t: 'p', html: 'O app (app.kulmanlab.com) é gratuito e é financiado por anúncios veiculados pelo <strong>Google AdSense</strong>. Este site (kulmanlab.com) não exibe anúncios.' },
          { t: 'p', html: 'Fornecedores terceiros, incluindo o Google, usam cookies para veicular anúncios com base nas suas visitas anteriores a este ou a outros sites. O uso de cookies de publicidade permite que o Google e seus parceiros exibam anúncios com base nas suas visitas ao app e/ou a outros sites da Internet. Os anúncios são selecionados pelo Google — eles nunca veem o conteúdo dos seus desenhos, nomes de arquivos ou qualquer coisa que você crie no app.' },
          { t: 'p', html: 'Você pode desativar a publicidade personalizada nas <a href="https://adssettings.google.com" target="_blank" rel="noopener">Configurações de anúncios do Google</a>, ou recusar cookies de publicidade de terceiros de forma mais ampla em <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (ou <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> na Europa). Como o Google usa dados de sites que exibem seus anúncios está descrito em <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookies e armazenamento local',
        blocks: [
          { t: 'p', html: 'Dois tipos de cookies são usados. O Google Analytics define <code>_ga</code> e <code>_ga_*</code> tanto no site quanto no app — eles contêm um identificador aleatório que distingue navegadores para que visitas repetidas não sejam contadas como novos visitantes; expiram em até dois anos e não podem ser usados para identificar você pessoalmente. No app, o Google AdSense e seus parceiros de publicidade definem cookies de publicidade adicionais para veicular e medir anúncios, como descrito na seção Publicidade acima. Não há cookies de redes sociais, e o site em si não define cookies de publicidade.' },
          { t: 'p', html: 'Além disso, o site lembra sua preferência de idioma e o app armazena seus desenhos e o histórico de desfazer no armazenamento local do navegador. Esses dados nunca saem do seu dispositivo.' },
        ],
      },
      {
        h: 'Serviços de terceiros',
        blocks: [
          { t: 'p', html: 'Além do Google Analytics e do Google AdSense, o KulmanLab depende de dois serviços de infraestrutura:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — a fonte Inter é carregada dos servidores do Google. Seu navegador envia uma solicitação web padrão (incluindo seu endereço IP) ao Google para buscar os arquivos da fonte.',
            '<strong>Firebase Hosting (Google)</strong> — serve este site e o app. Como qualquer servidor web, processa logs de solicitação padrão (endereço IP, URL solicitada, user agent) para entregar as páginas.',
          ] },
        ],
      },
      {
        h: 'Suas escolhas',
        blocks: [
          { t: 'p', html: 'Se preferir não ser contado na análise, você pode bloquear os cookies do Google Analytics no seu navegador, usar um bloqueador de conteúdo ou instalar o <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">complemento de desativação do Google Analytics</a>. O site e o app funcionam exatamente da mesma forma sem análise.' },
          { t: 'p', html: 'Quanto à publicidade, você pode desativar a personalização de anúncios nas <a href="https://adssettings.google.com" target="_blank" rel="noopener">Configurações de anúncios do Google</a> — você continuará vendo anúncios no app, mas eles não serão baseados nos seus interesses nem no seu histórico de navegação.' },
        ],
      },
      {
        h: 'Alterações nesta política',
        blocks: [
          { t: 'p', html: 'Se nossas práticas de dados mudarem — por exemplo, se um novo serviço de terceiros for adicionado — esta página será atualizada e a data no topo será revisada.' },
        ],
      },
      {
        h: 'Contato',
        blocks: [
          { t: 'p', html: 'Dúvidas sobre privacidade? Abra uma issue no <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> ou pergunte na <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">comunidade do Reddit</a>.' },
        ],
      },
    ],
  },

  uk: {
    title: 'Політика конфіденційності — KulmanLab',
    desc: 'Як KulmanLab поводиться з вашими даними: креслення залишаються на вашому пристрої, без облікових записів. Google Analytics для анонімної статистики; реклама в застосунку через Google AdSense.',
    heading: 'Політика конфіденційності',
    updated: 'Останнє оновлення: 14 липня 2026',
    summaryHeading: 'Коротко',
    summary: [
      'Ваші креслення зберігаються у вашому браузері й ніколи не залишають ваш пристрій. Уся ваша робота належить вам.',
      'Немає облікових записів, реєстрації та електронної пошти. Ми не знаємо, хто ви.',
      'Ми використовуємо Google Analytics, щоб рахувати відвідування та розуміти, які функції використовуються. Він ніколи не бачить вміст ваших креслень.',
      'Застосунок безкоштовний і фінансується рекламою (Google AdSense). Ваші креслення ніколи не використовуються для реклами, і ми ніколи не продаємо ваші дані.',
    ],
    sections: [
      {
        h: 'Ваші креслення залишаються на вашому пристрої',
        blocks: [
          { t: 'p', html: 'Усе, що ви креслите в KulmanLab CAD, зберігається в локальному сховищі вашого браузера (IndexedDB) на вашому власному пристрої. Креслення ніколи не завантажуються на сервер, не передаються й не зберігаються на жодному сервері. Після першого завантаження застосунок працює повністю офлайн — жоден сервер не бере участі у відкритті, редагуванні чи збереженні ваших файлів.' },
          { t: 'p', html: 'Оскільки ваші файли існують лише у вашому браузері, ви маєте повний контроль над ними. Ви можете видаляти окремі креслення в <a href="/uk/docs/commands/files/">панелі «Файли»</a>, стерти все одразу командою <a href="/uk/docs/commands/wipestorage/">wipestorage</a> або очистити дані сайту в налаштуваннях браузера. Ми не можемо отримати доступ до ваших файлів, відновити чи видалити їх за вас — у нас їх ніколи немає.' },
        ],
      },
      {
        h: 'Без облікових записів, без персональних даних',
        blocks: [
          { t: 'p', html: 'У KulmanLab немає входу, реєстрації та збору електронних адрес. Ми не збираємо ваше ім\'я, адресу електронної пошти чи будь-яку іншу інформацію, що ідентифікує вас особисто, — і нам нема чого продавати чи передавати.' },
        ],
      },
      {
        h: 'Аналітика',
        blocks: [
          { t: 'p', html: 'Цей сайт (kulmanlab.com) і застосунок (app.kulmanlab.com) використовують <strong>Google Analytics 4</strong> для збору анонімної статистики використання. Це показує нам, наприклад, скільки людей нас відвідує, які сторінки вони читають, у якій країні перебувають (приблизно, на основі IP-адреси — Google Analytics 4 не зберігає IP-адреси) та який браузер і тип пристрою використовують.' },
          { t: 'p', html: 'На сайті ми також фіксуємо кілька анонімних подій взаємодії:' },
          { t: 'ul', items: [
            'кліки на «Запустити застосунок» та подібні кнопки,',
            'кліки на зовнішні посилання (адреса призначення посилання),',
            'наскільки далеко ви прокручуєте сторінку та яку мову інтерфейсу використовуєте.',
          ] },
          { t: 'p', html: 'Ніщо з цього не містить вмісту ваших креслень, назв файлів чи будь-чого, що ви створюєте в застосунку. Дані аналітики обробляються Google відповідно до <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Політики конфіденційності Google</a>.' },
        ],
      },
      {
        h: 'Реклама',
        blocks: [
          { t: 'p', html: 'Застосунок (app.kulmanlab.com) безкоштовний і фінансується рекламою через <strong>Google AdSense</strong>. Цей сайт (kulmanlab.com) не показує рекламу.' },
          { t: 'p', html: 'Сторонні постачальники, зокрема Google, використовують файли cookie для показу реклами на основі ваших попередніх відвідувань цього чи інших сайтів. Використання рекламних cookie дає змогу Google та його партнерам показувати вам рекламу на основі ваших відвідувань застосунку та/або інших сайтів в Інтернеті. Рекламу добирає Google — вона ніколи не бачить вмісту ваших креслень, назв файлів чи будь-чого, що ви створюєте в застосунку.' },
          { t: 'p', html: 'Ви можете вимкнути персоналізовану рекламу в <a href="https://adssettings.google.com" target="_blank" rel="noopener">Налаштуваннях реклами Google</a> або відмовитися від сторонніх рекламних cookie загалом на <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (або <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> у Європі). Як Google використовує дані сайтів, що показують його рекламу, описано на <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookie та локальне сховище',
        blocks: [
          { t: 'p', html: 'Використовуються два види cookie. Google Analytics встановлює <code>_ga</code> і <code>_ga_*</code> і на сайті, і в застосунку — вони містять випадковий ідентифікатор, що розрізняє браузери, щоб повторні відвідування не рахувалися як нові відвідувачі; вони спливають щонайбільше через два роки й не можуть використовуватися для вашої особистої ідентифікації. У застосунку Google AdSense та його рекламні партнери встановлюють додаткові рекламні cookie для показу й вимірювання реклами, як описано в розділі «Реклама» вище. Cookie соціальних мереж немає, а сам сайт не встановлює рекламних cookie.' },
          { t: 'p', html: 'Крім того, сайт запам\'ятовує вашу мовну перевагу, а застосунок зберігає ваші креслення та історію скасування дій у локальному сховищі браузера. Ці дані ніколи не залишають ваш пристрій.' },
        ],
      },
      {
        h: 'Сторонні сервіси',
        blocks: [
          { t: 'p', html: 'Окрім Google Analytics і Google AdSense, KulmanLab використовує два інфраструктурні сервіси:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — шрифт Inter завантажується із серверів Google. Ваш браузер надсилає стандартний вебзапит (включно з вашою IP-адресою) до Google, щоб отримати файли шрифту.',
            '<strong>Firebase Hosting (Google)</strong> — обслуговує цей сайт і застосунок. Як будь-який вебсервер, він обробляє стандартні журнали запитів (IP-адреса, запитана URL-адреса, user agent), щоб доставляти сторінки.',
          ] },
        ],
      },
      {
        h: 'Ваш вибір',
        blocks: [
          { t: 'p', html: 'Якщо ви не хочете, щоб вас враховували в аналітиці, можете заблокувати cookie Google Analytics у браузері, використати блокувальник вмісту або встановити <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">додаток для вимкнення Google Analytics</a>. Сайт і застосунок працюють без аналітики точнісінько так само.' },
          { t: 'p', html: 'Щодо реклами — ви можете вимкнути персоналізацію в <a href="https://adssettings.google.com" target="_blank" rel="noopener">Налаштуваннях реклами Google</a>: ви й далі бачитимете рекламу в застосунку, але вона не ґрунтуватиметься на ваших інтересах чи історії перегляду.' },
        ],
      },
      {
        h: 'Зміни до цієї політики',
        blocks: [
          { t: 'p', html: 'Якщо наші практики роботи з даними зміняться — наприклад, буде додано новий сторонній сервіс — цю сторінку буде оновлено, а дату вгорі — змінено.' },
        ],
      },
      {
        h: 'Контакти',
        blocks: [
          { t: 'p', html: 'Питання щодо конфіденційності? Створіть issue на <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> або запитайте у <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">спільноті Reddit</a>.' },
        ],
      },
    ],
  },

  tr: {
    title: 'Gizlilik Politikası — KulmanLab',
    desc: 'KulmanLab verilerinizi nasıl işler: çizimler cihazınızda kalır, hesap yok. Anonim kullanım metrikleri için Google Analytics; uygulamada Google AdSense reklamları.',
    heading: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 14 Temmuz 2026',
    summaryHeading: 'Kısa özet',
    summary: [
      'Çizimleriniz tarayıcınızda saklanır ve cihazınızdan asla ayrılmaz. Tüm çalışmalarınız size aittir.',
      'Hesap, kayıt ve e-posta yoktur. Kim olduğunuzu bilmiyoruz.',
      'Ziyaretleri saymak ve hangi özelliklerin kullanıldığını anlamak için Google Analytics kullanıyoruz. Çizim içeriğinizi asla görmez.',
      'Uygulama ücretsizdir ve reklamlarla finanse edilir (Google AdSense). Çizimleriniz asla reklam için kullanılmaz ve verilerinizi asla satmayız.',
    ],
    sections: [
      {
        h: 'Çizimleriniz cihazınızda kalır',
        blocks: [
          { t: 'p', html: 'KulmanLab CAD\'de çizdiğiniz her şey, kendi cihazınızda tarayıcınızın yerel depolamasına (IndexedDB) kaydedilir. Çizimler hiçbir zaman yüklenmez, iletilmez veya herhangi bir sunucuda saklanmaz. İlk yüklemeden sonra uygulama tamamen çevrimdışı çalışır — dosyalarınızı açarken, düzenlerken veya kaydederken hiçbir sunucu devreye girmez.' },
          { t: 'p', html: 'Dosyalarınız yalnızca tarayıcınızda bulunduğundan, üzerlerinde tam denetim sizdedir. Tek tek çizimleri <a href="/tr/docs/commands/files/">Dosyalar panelinden</a> silebilir, <a href="/tr/docs/commands/wipestorage/">wipestorage</a> komutuyla her şeyi bir kerede temizleyebilir veya tarayıcı ayarlarından site verilerini silebilirsiniz. Dosyalarınıza erişemez, onları geri yükleyemez veya sizin adınıza silemeyiz — onlar hiçbir zaman bizde olmaz.' },
        ],
      },
      {
        h: 'Hesap yok, kişisel veri yok',
        blocks: [
          { t: 'p', html: 'KulmanLab\'de giriş, kayıt veya e-posta toplama yoktur. Adınızı, e-posta adresinizi veya sizi kişisel olarak tanımlayan başka herhangi bir bilgiyi toplamıyoruz — satacak veya paylaşacak hiçbir şeyimiz yok.' },
        ],
      },
      {
        h: 'Analitik',
        blocks: [
          { t: 'p', html: 'Bu web sitesi (kulmanlab.com) ve uygulama (app.kulmanlab.com), anonim kullanım metrikleri toplamak için <strong>Google Analytics 4</strong> kullanır. Bu bize örneğin kaç kişinin ziyaret ettiğini, hangi sayfaları okuduklarını, hangi ülkede olduklarını (yaklaşık; IP adresinden türetilir — Google Analytics 4 IP adreslerini saklamaz) ve hangi tarayıcı ile cihaz türünü kullandıklarını gösterir.' },
          { t: 'p', html: 'Web sitesinde ayrıca birkaç anonim etkileşim olayı kaydediyoruz:' },
          { t: 'ul', items: [
            '"Uygulamayı Başlat" ve benzeri düğmelere tıklamalar,',
            'dış bağlantılara tıklamalar (bağlantının hedef adresi),',
            'sayfayı ne kadar aşağı kaydırdığınız ve kullandığınız arayüz dili.',
          ] },
          { t: 'p', html: 'Bunların hiçbiri çizim içeriğinizi, dosya adlarınızı veya uygulamada oluşturduğunuz herhangi bir şeyi içermez. Analitik veriler, <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Gizlilik Politikası</a> kapsamında Google tarafından işlenir.' },
        ],
      },
      {
        h: 'Reklamlar',
        blocks: [
          { t: 'p', html: 'Uygulama (app.kulmanlab.com) ücretsizdir ve <strong>Google AdSense</strong> aracılığıyla sunulan reklamlarla finanse edilir. Bu web sitesi (kulmanlab.com) reklam göstermez.' },
          { t: 'p', html: 'Google dahil üçüncü taraf sağlayıcılar, bu siteye veya diğer web sitelerine önceki ziyaretlerinize dayanarak reklam sunmak için çerezler kullanır. Google\'ın reklam çerezlerini kullanması, Google ve iş ortaklarının uygulamaya ve/veya İnternet\'teki diğer sitelere yaptığınız ziyaretlere göre size reklam göstermesini sağlar. Reklamları Google seçer — çizim içeriğinizi, dosya adlarınızı veya uygulamada oluşturduğunuz hiçbir şeyi asla görmezler.' },
          { t: 'p', html: 'Kişiselleştirilmiş reklamları <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Reklam Ayarları</a>ndan kapatabilir veya üçüncü taraf reklam çerezlerini daha genel olarak <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (Avrupa\'da <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>) üzerinden reddedebilirsiniz. Google\'ın, reklamlarını gösteren sitelerden gelen verileri nasıl kullandığı <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a> adresinde açıklanmıştır.' },
        ],
      },
      {
        h: 'Çerezler ve yerel depolama',
        blocks: [
          { t: 'p', html: 'İki tür çerez kullanılır. Google Analytics hem web sitesinde hem uygulamada <code>_ga</code> ve <code>_ga_*</code> çerezlerini ayarlar — bunlar, tekrar ziyaretlerin yeni ziyaretçi olarak sayılmaması için tarayıcıları ayırt eden rastgele bir tanımlayıcı içerir; en fazla iki yıl sonra sona erer ve sizi kişisel olarak tanımlamak için kullanılamaz. Uygulamada, Google AdSense ve reklam ortakları, yukarıdaki Reklamlar bölümünde açıklandığı gibi reklam sunmak ve ölçmek için ek reklam çerezleri ayarlar. Sosyal medya çerezi yoktur ve web sitesinin kendisi reklam çerezi ayarlamaz.' },
          { t: 'p', html: 'Ayrıca web sitesi dil tercihinizi hatırlar; uygulama da çizimlerinizi ve geri alma geçmişinizi tarayıcının yerel depolamasında saklar. Bu veriler cihazınızdan asla ayrılmaz.' },
        ],
      },
      {
        h: 'Üçüncü taraf hizmetler',
        blocks: [
          { t: 'p', html: 'Google Analytics ve Google AdSense dışında KulmanLab iki altyapı hizmetine dayanır:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — Inter yazı tipi Google sunucularından yüklenir. Tarayıcınız, yazı tipi dosyalarını almak için Google\'a standart bir web isteği (IP adresiniz dahil) gönderir.',
            '<strong>Firebase Hosting (Google)</strong> — bu web sitesini ve uygulamayı sunar. Her web sunucusu gibi, sayfaları iletmek için standart istek günlüklerini (IP adresi, istenen URL, user agent) işler.',
          ] },
        ],
      },
      {
        h: 'Seçenekleriniz',
        blocks: [
          { t: 'p', html: 'Analitikte sayılmak istemiyorsanız, tarayıcınızda Google Analytics çerezlerini engelleyebilir, bir içerik engelleyici kullanabilir veya <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics devre dışı bırakma eklentisini</a> yükleyebilirsiniz. Web sitesi ve uygulama analitik olmadan tamamen aynı şekilde çalışır.' },
          { t: 'p', html: 'Reklamlar için, <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Reklam Ayarları</a>ndan reklam kişiselleştirmeyi kapatabilirsiniz — uygulamada yine reklam görürsünüz, ancak bunlar ilgi alanlarınıza veya gezinme geçmişinize dayanmaz.' },
        ],
      },
      {
        h: 'Bu politikadaki değişiklikler',
        blocks: [
          { t: 'p', html: 'Veri uygulamalarımız değişirse — örneğin yeni bir üçüncü taraf hizmeti eklenirse — bu sayfa güncellenir ve üstteki tarih yenilenir.' },
        ],
      },
      {
        h: 'İletişim',
        blocks: [
          { t: 'p', html: 'Gizlilikle ilgili sorularınız mı var? <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a>\'da bir issue açın veya <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit topluluğunda</a> sorun.' },
        ],
      },
    ],
  },

  zh: {
    title: '隐私政策 — KulmanLab',
    desc: 'KulmanLab 如何处理您的数据：图纸保留在您的设备上，无需账户。使用 Google Analytics 收集匿名使用指标；应用内通过 Google AdSense 展示广告。',
    heading: '隐私政策',
    updated: '最后更新：2026年7月14日',
    summaryHeading: '简要说明',
    summary: [
      '您的图纸存储在您的浏览器中，永远不会离开您的设备。您的所有作品都属于您自己。',
      '没有账户、无需注册、不收集电子邮件。我们不知道您是谁。',
      '我们使用 Google Analytics 统计访问量并了解哪些功能被使用。它永远看不到您的图纸内容。',
      '应用免费使用，靠广告维持运营（Google AdSense）。您的图纸绝不会被用于广告，我们也绝不出售您的数据。',
    ],
    sections: [
      {
        h: '您的图纸保留在您的设备上',
        blocks: [
          { t: 'p', html: '您在 KulmanLab CAD 中绘制的所有内容都保存在您自己设备上的浏览器本地存储（IndexedDB）中。图纸绝不会被上传、传输或存储到任何服务器。首次加载后，应用可完全离线运行——打开、编辑或保存文件时不涉及任何服务器。' },
          { t: 'p', html: '由于您的文件只存在于您的浏览器中，您对它们拥有完全的控制权。您可以在<a href="/zh/docs/commands/files/">文件面板</a>中删除单个图纸，使用 <a href="/zh/docs/commands/wipestorage/">wipestorage</a> 命令一次性清除全部内容，或在浏览器设置中清除站点数据。我们无法访问、恢复或替您删除文件——我们从未持有它们。' },
        ],
      },
      {
        h: '无账户，不收集个人数据',
        blocks: [
          { t: 'p', html: 'KulmanLab 没有登录、没有注册、也不收集电子邮件。我们不收集您的姓名、电子邮件地址或任何其他可识别您个人身份的信息，我们没有任何东西可出售或分享。' },
        ],
      },
      {
        h: '分析统计',
        blocks: [
          { t: 'p', html: '本网站（kulmanlab.com）和应用（app.kulmanlab.com）使用 <strong>Google Analytics 4</strong> 收集匿名使用指标。它告诉我们诸如有多少人访问、阅读了哪些页面、位于哪个国家/地区（大致位置，由 IP 地址推算——Google Analytics 4 不存储 IP 地址），以及使用何种浏览器和设备类型。' },
          { t: 'p', html: '在网站上，我们还记录少量匿名交互事件：' },
          { t: 'ul', items: [
            '点击"启动应用"及类似按钮，',
            '点击外部链接（链接的目标地址），',
            '页面滚动深度，以及您使用的界面语言。',
          ] },
          { t: 'p', html: '这些都不包含您的图纸内容、文件名或您在应用中创建的任何内容。分析数据由 Google 依据 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google 隐私权政策</a>处理。' },
        ],
      },
      {
        h: '广告',
        blocks: [
          { t: 'p', html: '应用（app.kulmanlab.com）免费使用，通过 <strong>Google AdSense</strong> 投放的广告维持运营。本网站（kulmanlab.com）不展示广告。' },
          { t: 'p', html: '包括 Google 在内的第三方供应商会使用 Cookie，根据您之前对本网站或其他网站的访问来投放广告。Google 使用广告 Cookie，使其及其合作伙伴能够根据您对本应用和/或互联网上其他网站的访问情况向您展示广告。广告由 Google 挑选——它们永远看不到您的图纸内容、文件名或您在应用中创建的任何内容。' },
          { t: 'p', html: '您可以在 <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google 广告设置</a>中停用个性化广告，或在 <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a>（欧洲用户可访问 <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>）更全面地拒绝第三方广告 Cookie。Google 如何使用展示其广告的网站中的数据，请参阅 <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>。' },
        ],
      },
      {
        h: 'Cookie 与本地存储',
        blocks: [
          { t: 'p', html: '本站使用两类 Cookie。Google Analytics 在网站和应用上都会设置 <code>_ga</code> 和 <code>_ga_*</code>——它们包含一个用于区分浏览器的随机标识符，使重复访问不被计为新访客；有效期最长两年，无法用于识别您的个人身份。在应用中，Google AdSense 及其广告合作伙伴会设置额外的广告 Cookie 来投放和衡量广告，如上文"广告"部分所述。没有社交媒体 Cookie，网站本身也不设置任何广告 Cookie。' },
          { t: 'p', html: '此外，网站会记住您的语言偏好，应用会将您的图纸和撤销历史存储在浏览器本地存储中。这些数据永远不会离开您的设备。' },
        ],
      },
      {
        h: '第三方服务',
        blocks: [
          { t: 'p', html: '除 Google Analytics 和 Google AdSense 外，KulmanLab 依赖两项基础设施服务：' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> —— Inter 字体从 Google 服务器加载。您的浏览器会向 Google 发送标准网络请求（包含您的 IP 地址）以获取字体文件。',
            '<strong>Firebase Hosting（Google）</strong> —— 托管本网站和应用。与任何 Web 服务器一样，它会处理标准请求日志（IP 地址、请求的 URL、User-Agent）以传送页面。',
          ] },
        ],
      },
      {
        h: '您的选择',
        blocks: [
          { t: 'p', html: '如果您不希望被计入分析统计，可以在浏览器中屏蔽 Google Analytics Cookie、使用内容拦截器，或安装 <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics 停用插件</a>。没有分析统计，网站和应用的运行完全不受影响。' },
          { t: 'p', html: '对于广告，您可以在 <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google 广告设置</a>中关闭广告个性化——您在应用中仍会看到广告，但它们不会基于您的兴趣或浏览历史。' },
        ],
      },
      {
        h: '政策变更',
        blocks: [
          { t: 'p', html: '如果我们的数据处理方式发生变化——例如新增第三方服务——本页面将随之更新，顶部的日期也会修改。' },
        ],
      },
      {
        h: '联系我们',
        blocks: [
          { t: 'p', html: '对隐私有疑问？请在 <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> 上提交 issue，或在 <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit 社区</a>提问。' },
        ],
      },
    ],
  },

  hi: {
    title: 'गोपनीयता नीति — KulmanLab',
    desc: 'KulmanLab आपके डेटा को कैसे संभालता है: ड्रॉइंग आपके डिवाइस पर रहती हैं, कोई खाता नहीं। अनाम उपयोग मेट्रिक्स के लिए Google Analytics; ऐप में Google AdSense के विज्ञापन।',
    heading: 'गोपनीयता नीति',
    updated: 'अंतिम अद्यतन: 14 जुलाई 2026',
    summaryHeading: 'संक्षेप में',
    summary: [
      'आपकी ड्रॉइंग आपके ब्राउज़र में संग्रहीत होती हैं और कभी आपके डिवाइस से बाहर नहीं जातीं। आपका सारा काम आपका है।',
      'कोई खाता नहीं, कोई साइन-अप नहीं, कोई ईमेल नहीं। हम नहीं जानते कि आप कौन हैं।',
      'हम विज़िट गिनने और यह समझने के लिए Google Analytics का उपयोग करते हैं कि कौन-सी सुविधाएँ उपयोग होती हैं। यह आपकी ड्रॉइंग की सामग्री कभी नहीं देखता।',
      'ऐप मुफ़्त है और विज्ञापनों (Google AdSense) से चलता है। आपकी ड्रॉइंग कभी विज्ञापन के लिए उपयोग नहीं होतीं, और हम आपका डेटा कभी नहीं बेचते।',
    ],
    sections: [
      {
        h: 'आपकी ड्रॉइंग आपके डिवाइस पर रहती हैं',
        blocks: [
          { t: 'p', html: 'KulmanLab CAD में आप जो कुछ भी बनाते हैं, वह आपके अपने डिवाइस पर ब्राउज़र के लोकल स्टोरेज (IndexedDB) में सहेजा जाता है। ड्रॉइंग कभी अपलोड, प्रसारित या किसी सर्वर पर संग्रहीत नहीं होतीं। पहली बार लोड होने के बाद ऐप पूरी तरह ऑफ़लाइन काम करता है — आपकी फ़ाइलें खोलने, संपादित करने या सहेजने में कोई सर्वर शामिल नहीं होता।' },
          { t: 'p', html: 'चूँकि आपकी फ़ाइलें केवल आपके ब्राउज़र में मौजूद हैं, उन पर पूरा नियंत्रण आपका है। आप <a href="/hi/docs/commands/files/">फ़ाइल पैनल</a> से अलग-अलग ड्रॉइंग हटा सकते हैं, <a href="/hi/docs/commands/wipestorage/">wipestorage</a> कमांड से एक साथ सब कुछ मिटा सकते हैं, या ब्राउज़र सेटिंग्स में साइट डेटा साफ़ कर सकते हैं। हम आपकी फ़ाइलों तक न पहुँच सकते हैं, न उन्हें पुनर्स्थापित कर सकते हैं, न आपकी ओर से हटा सकते हैं — वे कभी हमारे पास होती ही नहीं।' },
        ],
      },
      {
        h: 'कोई खाता नहीं, कोई व्यक्तिगत डेटा नहीं',
        blocks: [
          { t: 'p', html: 'KulmanLab में कोई लॉगिन, कोई पंजीकरण और कोई ईमेल संग्रह नहीं है। हम आपका नाम, ईमेल पता या ऐसी कोई भी जानकारी एकत्र नहीं करते जो आपकी व्यक्तिगत पहचान कराए — और हमारे पास बेचने या साझा करने के लिए कुछ भी नहीं है।' },
        ],
      },
      {
        h: 'एनालिटिक्स',
        blocks: [
          { t: 'p', html: 'यह वेबसाइट (kulmanlab.com) और ऐप (app.kulmanlab.com) अनाम उपयोग मेट्रिक्स एकत्र करने के लिए <strong>Google Analytics 4</strong> का उपयोग करते हैं। इससे हमें पता चलता है कि कितने लोग आते हैं, कौन-से पेज पढ़ते हैं, वे किस देश में हैं (अनुमानित, IP पते से निकाला गया — Google Analytics 4 IP पते संग्रहीत नहीं करता), और कौन-सा ब्राउज़र व डिवाइस प्रकार उपयोग करते हैं।' },
          { t: 'p', html: 'वेबसाइट पर हम कुछ अनाम इंटरैक्शन इवेंट भी दर्ज करते हैं:' },
          { t: 'ul', items: [
            '"ऐप लॉन्च करें" और इसी तरह के बटनों पर क्लिक,',
            'बाहरी लिंक पर क्लिक (लिंक का गंतव्य पता),',
            'आप पेज को कितना नीचे स्क्रॉल करते हैं, और कौन-सी इंटरफ़ेस भाषा उपयोग करते हैं।',
          ] },
          { t: 'p', html: 'इनमें से किसी में भी आपकी ड्रॉइंग की सामग्री, फ़ाइल नाम या ऐप में आपके द्वारा बनाई गई कोई भी चीज़ शामिल नहीं है। एनालिटिक्स डेटा को Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google गोपनीयता नीति</a> के अंतर्गत संसाधित करता है।' },
        ],
      },
      {
        h: 'विज्ञापन',
        blocks: [
          { t: 'p', html: 'ऐप (app.kulmanlab.com) उपयोग के लिए मुफ़्त है और <strong>Google AdSense</strong> के माध्यम से दिखाए गए विज्ञापनों से चलता है। यह वेबसाइट (kulmanlab.com) विज्ञापन नहीं दिखाती।' },
          { t: 'p', html: 'Google सहित तृतीय-पक्ष विक्रेता, इस या अन्य वेबसाइटों पर आपकी पिछली विज़िट के आधार पर विज्ञापन दिखाने के लिए कुकीज़ का उपयोग करते हैं। विज्ञापन कुकीज़ के उपयोग से Google और उसके भागीदार, ऐप और/या इंटरनेट की अन्य साइटों पर आपकी विज़िट के आधार पर आपको विज्ञापन दिखा पाते हैं। विज्ञापन Google चुनता है — वे आपकी ड्रॉइंग की सामग्री, फ़ाइल नाम या ऐप में बनाई गई कोई भी चीज़ कभी नहीं देखते।' },
          { t: 'p', html: 'आप <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google विज्ञापन सेटिंग</a> में वैयक्तिकृत विज्ञापन बंद कर सकते हैं, या <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (यूरोप में <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>) पर तृतीय-पक्ष विज्ञापन कुकीज़ को व्यापक रूप से अस्वीकार कर सकते हैं। Google अपने विज्ञापन दिखाने वाली साइटों के डेटा का उपयोग कैसे करता है, यह <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a> पर बताया गया है।' },
        ],
      },
      {
        h: 'कुकीज़ और लोकल स्टोरेज',
        blocks: [
          { t: 'p', html: 'दो प्रकार की कुकीज़ उपयोग होती हैं। Google Analytics वेबसाइट और ऐप दोनों पर <code>_ga</code> और <code>_ga_*</code> सेट करता है — इनमें एक यादृच्छिक पहचानकर्ता होता है जो ब्राउज़रों में अंतर करता है ताकि बार-बार की विज़िट नए आगंतुक के रूप में न गिनी जाएँ; ये अधिकतम दो साल में समाप्त हो जाती हैं और आपकी व्यक्तिगत पहचान के लिए उपयोग नहीं की जा सकतीं। ऐप में, Google AdSense और उसके विज्ञापन भागीदार विज्ञापन दिखाने और मापने के लिए अतिरिक्त विज्ञापन कुकीज़ सेट करते हैं, जैसा ऊपर विज्ञापन अनुभाग में बताया गया है। कोई सोशल-मीडिया कुकीज़ नहीं हैं, और वेबसाइट स्वयं कोई विज्ञापन कुकीज़ सेट नहीं करती।' },
          { t: 'p', html: 'इसके अलावा, वेबसाइट आपकी भाषा वरीयता याद रखती है और ऐप आपकी ड्रॉइंग तथा पूर्ववत (undo) इतिहास ब्राउज़र के लोकल स्टोरेज में रखता है। यह डेटा कभी आपके डिवाइस से बाहर नहीं जाता।' },
        ],
      },
      {
        h: 'तृतीय-पक्ष सेवाएँ',
        blocks: [
          { t: 'p', html: 'Google Analytics और Google AdSense के अलावा, KulmanLab दो इन्फ्रास्ट्रक्चर सेवाओं पर निर्भर है:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — Inter फ़ॉन्ट Google के सर्वरों से लोड होता है। फ़ॉन्ट फ़ाइलें लाने के लिए आपका ब्राउज़र Google को एक मानक वेब अनुरोध (आपके IP पते सहित) भेजता है।',
            '<strong>Firebase Hosting (Google)</strong> — यह वेबसाइट और ऐप परोसता है। किसी भी वेब सर्वर की तरह, पेज पहुँचाने के लिए यह मानक अनुरोध लॉग (IP पता, अनुरोधित URL, यूज़र एजेंट) संसाधित करता है।',
          ] },
        ],
      },
      {
        h: 'आपके विकल्प',
        blocks: [
          { t: 'p', html: 'यदि आप एनालिटिक्स में गिने जाना नहीं चाहते, तो आप ब्राउज़र में Google Analytics कुकीज़ ब्लॉक कर सकते हैं, कोई कंटेंट ब्लॉकर उपयोग कर सकते हैं, या <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics ऑप्ट-आउट ऐड-ऑन</a> इंस्टॉल कर सकते हैं। एनालिटिक्स के बिना वेबसाइट और ऐप बिल्कुल वैसे ही काम करते हैं।' },
          { t: 'p', html: 'विज्ञापनों के लिए, आप <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google विज्ञापन सेटिंग</a> में विज्ञापन वैयक्तिकरण बंद कर सकते हैं — ऐप में विज्ञापन फिर भी दिखेंगे, लेकिन वे आपकी रुचियों या ब्राउज़िंग इतिहास पर आधारित नहीं होंगे।' },
        ],
      },
      {
        h: 'इस नीति में बदलाव',
        blocks: [
          { t: 'p', html: 'यदि हमारी डेटा प्रथाएँ बदलती हैं — उदाहरण के लिए, कोई नई तृतीय-पक्ष सेवा जुड़ती है — तो यह पेज अद्यतन किया जाएगा और ऊपर की तारीख़ संशोधित होगी।' },
        ],
      },
      {
        h: 'संपर्क',
        blocks: [
          { t: 'p', html: 'गोपनीयता के बारे में प्रश्न? <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> पर issue खोलें या <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit समुदाय</a> में पूछें।' },
        ],
      },
    ],
  },

  ar: {
    title: 'سياسة الخصوصية — KulmanLab',
    desc: 'كيف يتعامل KulmanLab مع بياناتك: تبقى الرسومات على جهازك، بدون حسابات. Google Analytics لمقاييس استخدام مجهولة الهوية؛ إعلانات في التطبيق عبر Google AdSense.',
    heading: 'سياسة الخصوصية',
    updated: 'آخر تحديث: 14 يوليو 2026',
    summaryHeading: 'النسخة المختصرة',
    summary: [
      'تُخزَّن رسوماتك في متصفحك ولا تغادر جهازك أبدًا. كل عملك ملك لك.',
      'لا توجد حسابات ولا تسجيل ولا بريد إلكتروني. نحن لا نعرف من أنت.',
      'نستخدم Google Analytics لعدّ الزيارات وفهم الميزات المستخدمة. وهو لا يرى محتوى رسوماتك أبدًا.',
      'التطبيق مجاني ويموَّل بالإعلانات (Google AdSense). لا تُستخدم رسوماتك للإعلانات أبدًا، ولا نبيع بياناتك أبدًا.',
    ],
    sections: [
      {
        h: 'رسوماتك تبقى على جهازك',
        blocks: [
          { t: 'p', html: 'كل ما ترسمه في KulmanLab CAD يُحفظ في التخزين المحلي لمتصفحك (IndexedDB) على جهازك الخاص. لا تُرفَع الرسومات أبدًا ولا تُنقَل ولا تُخزَّن على أي خادم. بعد التحميل الأول يعمل التطبيق دون اتصال بالكامل — لا يشارك أي خادم في فتح ملفاتك أو تحريرها أو حفظها.' },
          { t: 'p', html: 'ولأن ملفاتك موجودة في متصفحك فقط، فأنت تتحكم فيها تحكمًا كاملًا. يمكنك حذف رسومات فردية من <a href="/ar/docs/commands/files/">لوحة الملفات</a>، أو مسح كل شيء دفعة واحدة بأمر <a href="/ar/docs/commands/wipestorage/">wipestorage</a>، أو مسح بيانات الموقع من إعدادات المتصفح. لا يمكننا الوصول إلى ملفاتك أو استعادتها أو حذفها نيابة عنك — فهي ليست لدينا أصلًا.' },
        ],
      },
      {
        h: 'لا حسابات، لا بيانات شخصية',
        blocks: [
          { t: 'p', html: 'لا يوجد في KulmanLab تسجيل دخول ولا تسجيل حساب ولا جمع للبريد الإلكتروني. نحن لا نجمع اسمك أو عنوان بريدك الإلكتروني أو أي معلومات أخرى تحدد هويتك الشخصية — وليس لدينا ما نبيعه أو نشاركه.' },
        ],
      },
      {
        h: 'التحليلات',
        blocks: [
          { t: 'p', html: 'يستخدم هذا الموقع (kulmanlab.com) والتطبيق (app.kulmanlab.com) <strong>Google Analytics 4</strong> لجمع مقاييس استخدام مجهولة الهوية. يخبرنا هذا مثلًا بعدد الزائرين، والصفحات التي يقرؤونها، والبلد الذي يوجدون فيه (تقريبي، مستنتَج من عنوان IP — لا يخزّن Google Analytics 4 عناوين IP)، ونوع المتصفح والجهاز المستخدم.' },
          { t: 'p', html: 'كما نسجّل على الموقع بعض أحداث التفاعل مجهولة الهوية:' },
          { t: 'ul', items: [
            'النقرات على زر «تشغيل التطبيق» والأزرار المشابهة،',
            'النقرات على الروابط الخارجية (عنوان وجهة الرابط)،',
            'مدى تمريرك لأسفل الصفحة، ولغة الواجهة التي تستخدمها.',
          ] },
          { t: 'p', html: 'لا يتضمن أي من ذلك محتوى رسوماتك أو أسماء ملفاتك أو أي شيء تنشئه في التطبيق. تُعالَج بيانات التحليلات بواسطة Google وفق <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">سياسة خصوصية Google</a>.' },
        ],
      },
      {
        h: 'الإعلانات',
        blocks: [
          { t: 'p', html: 'التطبيق (app.kulmanlab.com) مجاني الاستخدام ويموَّل بإعلانات تُعرَض عبر <strong>Google AdSense</strong>. هذا الموقع (kulmanlab.com) لا يعرض إعلانات.' },
          { t: 'p', html: 'يستخدم مورّدون خارجيون، ومن بينهم Google، ملفات تعريف الارتباط لعرض إعلانات استنادًا إلى زياراتك السابقة لهذا الموقع أو مواقع أخرى. ويتيح استخدام Google لملفات تعريف الارتباط الإعلانية له ولشركائه عرض إعلانات لك استنادًا إلى زياراتك للتطبيق و/أو مواقع أخرى على الإنترنت. تختار Google الإعلانات — وهي لا ترى أبدًا محتوى رسوماتك أو أسماء ملفاتك أو أي شيء تنشئه في التطبيق.' },
          { t: 'p', html: 'يمكنك إيقاف الإعلانات المخصصة من <a href="https://adssettings.google.com" target="_blank" rel="noopener">إعدادات إعلانات Google</a>، أو رفض ملفات تعريف الارتباط الإعلانية الخارجية على نطاق أوسع عبر <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (أو <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> في أوروبا). ويوضَّح كيف تستخدم Google البيانات من المواقع التي تعرض إعلاناتها على <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'ملفات تعريف الارتباط والتخزين المحلي',
        blocks: [
          { t: 'p', html: 'يُستخدَم نوعان من ملفات تعريف الارتباط. يضبط Google Analytics ملفَي <code>_ga</code> و<code>_ga_*</code> على الموقع والتطبيق معًا — وهما يحتويان على معرّف عشوائي يميّز المتصفحات كي لا تُحسب الزيارات المتكررة كزائرين جدد؛ وتنتهي صلاحيتهما خلال عامين على الأكثر ولا يمكن استخدامهما لتحديد هويتك الشخصية. وفي التطبيق، يضبط Google AdSense وشركاؤه الإعلانيون ملفات تعريف ارتباط إعلانية إضافية لعرض الإعلانات وقياسها، كما هو موضح في قسم الإعلانات أعلاه. لا توجد ملفات تعريف ارتباط لوسائل التواصل الاجتماعي، والموقع نفسه لا يضبط أي ملفات تعريف ارتباط إعلانية.' },
          { t: 'p', html: 'إضافة إلى ذلك، يتذكر الموقع تفضيل اللغة لديك، ويخزّن التطبيق رسوماتك وسجلّ التراجع في التخزين المحلي للمتصفح. هذه البيانات لا تغادر جهازك أبدًا.' },
        ],
      },
      {
        h: 'خدمات الجهات الخارجية',
        blocks: [
          { t: 'p', html: 'إلى جانب Google Analytics وGoogle AdSense، يعتمد KulmanLab على خدمتي بنية تحتية:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — يُحمَّل خط Inter من خوادم Google. يرسل متصفحك طلب ويب قياسيًا (يتضمن عنوان IP الخاص بك) إلى Google لجلب ملفات الخط.',
            '<strong>Firebase Hosting (Google)</strong> — يقدّم هذا الموقع والتطبيق. ومثل أي خادم ويب، يعالج سجلات الطلبات القياسية (عنوان IP، وعنوان URL المطلوب، ووكيل المستخدم) لتسليم الصفحات.',
          ] },
        ],
      },
      {
        h: 'خياراتك',
        blocks: [
          { t: 'p', html: 'إذا كنت تفضّل عدم احتسابك في التحليلات، يمكنك حظر ملفات تعريف ارتباط Google Analytics في متصفحك، أو استخدام مانع محتوى، أو تثبيت <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">إضافة إيقاف Google Analytics</a>. يعمل الموقع والتطبيق تمامًا بالطريقة نفسها دون تحليلات.' },
          { t: 'p', html: 'بالنسبة إلى الإعلانات، يمكنك إيقاف تخصيص الإعلانات من <a href="https://adssettings.google.com" target="_blank" rel="noopener">إعدادات إعلانات Google</a> — ستظل ترى إعلانات في التطبيق، لكنها لن تستند إلى اهتماماتك أو سجل تصفحك.' },
        ],
      },
      {
        h: 'تغييرات هذه السياسة',
        blocks: [
          { t: 'p', html: 'إذا تغيّرت ممارساتنا في التعامل مع البيانات — مثلًا عند إضافة خدمة خارجية جديدة — فسيتم تحديث هذه الصفحة ومراجعة التاريخ في الأعلى.' },
        ],
      },
      {
        h: 'التواصل',
        blocks: [
          { t: 'p', html: 'لديك أسئلة حول الخصوصية؟ افتح مشكلة (issue) على <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> أو اسأل في <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">مجتمع Reddit</a>.' },
        ],
      },
    ],
  },

  id: {
    title: 'Kebijakan Privasi — KulmanLab',
    desc: 'Cara KulmanLab menangani data Anda: gambar tetap di perangkat Anda, tanpa akun. Google Analytics untuk metrik penggunaan anonim; iklan di aplikasi melalui Google AdSense.',
    heading: 'Kebijakan Privasi',
    updated: 'Terakhir diperbarui: 14 Juli 2026',
    summaryHeading: 'Versi singkat',
    summary: [
      'Gambar Anda disimpan di browser dan tidak pernah meninggalkan perangkat Anda. Semua karya Anda adalah milik Anda.',
      'Tidak ada akun, tidak ada pendaftaran, dan tidak ada email. Kami tidak tahu siapa Anda.',
      'Kami menggunakan Google Analytics untuk menghitung kunjungan dan memahami fitur mana yang digunakan. Ia tidak pernah melihat isi gambar Anda.',
      'Aplikasi ini gratis dan didanai oleh iklan (Google AdSense). Gambar Anda tidak pernah digunakan untuk iklan, dan kami tidak pernah menjual data Anda.',
    ],
    sections: [
      {
        h: 'Gambar Anda tetap di perangkat Anda',
        blocks: [
          { t: 'p', html: 'Semua yang Anda gambar di KulmanLab CAD disimpan di penyimpanan lokal browser (IndexedDB) di perangkat Anda sendiri. Gambar tidak pernah diunggah, dikirim, atau disimpan di server mana pun. Setelah pemuatan pertama, aplikasi berjalan sepenuhnya offline — tidak ada server yang terlibat saat membuka, mengedit, atau menyimpan file Anda.' },
          { t: 'p', html: 'Karena file Anda hanya ada di browser Anda, Anda memegang kendali penuh atasnya. Anda dapat menghapus gambar satu per satu dari <a href="/id/docs/commands/files/">panel File</a>, menghapus semuanya sekaligus dengan perintah <a href="/id/docs/commands/wipestorage/">wipestorage</a>, atau membersihkan data situs di pengaturan browser. Kami tidak dapat mengakses, memulihkan, atau menghapus file Anda untuk Anda — kami tidak pernah memilikinya.' },
        ],
      },
      {
        h: 'Tanpa akun, tanpa data pribadi',
        blocks: [
          { t: 'p', html: 'KulmanLab tidak memiliki login, pendaftaran, atau pengumpulan email. Kami tidak mengumpulkan nama Anda, alamat email, atau informasi lain apa pun yang mengidentifikasi Anda secara pribadi — dan kami tidak punya apa pun untuk dijual atau dibagikan.' },
        ],
      },
      {
        h: 'Analitik',
        blocks: [
          { t: 'p', html: 'Situs web ini (kulmanlab.com) dan aplikasi (app.kulmanlab.com) menggunakan <strong>Google Analytics 4</strong> untuk mengumpulkan metrik penggunaan anonim. Ini memberi tahu kami misalnya berapa banyak orang yang berkunjung, halaman mana yang mereka baca, di negara mana mereka berada (perkiraan, diturunkan dari alamat IP — Google Analytics 4 tidak menyimpan alamat IP), serta browser dan jenis perangkat yang mereka gunakan.' },
          { t: 'p', html: 'Di situs web kami juga merekam beberapa peristiwa interaksi anonim:' },
          { t: 'ul', items: [
            'klik pada tombol "Luncurkan Aplikasi" dan tombol serupa,',
            'klik pada tautan keluar (alamat tujuan tautan),',
            'seberapa jauh Anda menggulir halaman, dan bahasa antarmuka yang Anda gunakan.',
          ] },
          { t: 'p', html: 'Tidak satu pun dari ini mencakup isi gambar Anda, nama file, atau apa pun yang Anda buat di aplikasi. Data analitik diproses oleh Google berdasarkan <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Kebijakan Privasi Google</a>.' },
        ],
      },
      {
        h: 'Iklan',
        blocks: [
          { t: 'p', html: 'Aplikasi (app.kulmanlab.com) gratis digunakan dan didanai oleh iklan yang ditayangkan melalui <strong>Google AdSense</strong>. Situs web ini (kulmanlab.com) tidak menampilkan iklan.' },
          { t: 'p', html: 'Vendor pihak ketiga, termasuk Google, menggunakan cookie untuk menayangkan iklan berdasarkan kunjungan Anda sebelumnya ke situs ini atau situs web lain. Penggunaan cookie iklan oleh Google memungkinkan Google dan mitranya menampilkan iklan kepada Anda berdasarkan kunjungan Anda ke aplikasi dan/atau situs lain di Internet. Iklan dipilih oleh Google — mereka tidak pernah melihat isi gambar Anda, nama file, atau apa pun yang Anda buat di aplikasi.' },
          { t: 'p', html: 'Anda dapat menonaktifkan iklan yang dipersonalisasi di <a href="https://adssettings.google.com" target="_blank" rel="noopener">Setelan Iklan Google</a>, atau menolak cookie iklan pihak ketiga secara lebih luas di <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (atau <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> di Eropa). Cara Google menggunakan data dari situs yang menampilkan iklannya dijelaskan di <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookie dan penyimpanan lokal',
        blocks: [
          { t: 'p', html: 'Dua jenis cookie digunakan. Google Analytics menyetel <code>_ga</code> dan <code>_ga_*</code> di situs web maupun aplikasi — keduanya berisi pengenal acak yang membedakan browser agar kunjungan berulang tidak dihitung sebagai pengunjung baru; kedaluwarsa paling lama dua tahun dan tidak dapat digunakan untuk mengidentifikasi Anda secara pribadi. Di aplikasi, Google AdSense dan mitra iklannya menyetel cookie iklan tambahan untuk menayangkan dan mengukur iklan, seperti dijelaskan di bagian Iklan di atas. Tidak ada cookie media sosial, dan situs web ini sendiri tidak menyetel cookie iklan.' },
          { t: 'p', html: 'Selain itu, situs web mengingat preferensi bahasa Anda dan aplikasi menyimpan gambar serta riwayat undo Anda di penyimpanan lokal browser. Data ini tidak pernah meninggalkan perangkat Anda.' },
        ],
      },
      {
        h: 'Layanan pihak ketiga',
        blocks: [
          { t: 'p', html: 'Selain Google Analytics dan Google AdSense, KulmanLab mengandalkan dua layanan infrastruktur:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — font Inter dimuat dari server Google. Browser Anda mengirim permintaan web standar (termasuk alamat IP Anda) ke Google untuk mengambil file font.',
            '<strong>Firebase Hosting (Google)</strong> — menyajikan situs web ini dan aplikasi. Seperti server web mana pun, ia memproses log permintaan standar (alamat IP, URL yang diminta, user agent) untuk mengirimkan halaman.',
          ] },
        ],
      },
      {
        h: 'Pilihan Anda',
        blocks: [
          { t: 'p', html: 'Jika Anda tidak ingin dihitung dalam analitik, Anda dapat memblokir cookie Google Analytics di browser, menggunakan pemblokir konten, atau memasang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">add-on penonaktifan Google Analytics</a>. Situs web dan aplikasi bekerja persis sama tanpa analitik.' },
          { t: 'p', html: 'Untuk iklan, Anda dapat mematikan personalisasi iklan di <a href="https://adssettings.google.com" target="_blank" rel="noopener">Setelan Iklan Google</a> — Anda tetap akan melihat iklan di aplikasi, tetapi iklan tersebut tidak akan didasarkan pada minat atau riwayat penjelajahan Anda.' },
        ],
      },
      {
        h: 'Perubahan kebijakan ini',
        blocks: [
          { t: 'p', html: 'Jika praktik data kami berubah — misalnya jika layanan pihak ketiga baru ditambahkan — halaman ini akan diperbarui dan tanggal di bagian atas akan direvisi.' },
        ],
      },
      {
        h: 'Kontak',
        blocks: [
          { t: 'p', html: 'Ada pertanyaan tentang privasi? Buka issue di <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> atau tanyakan di <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">komunitas Reddit</a>.' },
        ],
      },
    ],
  },

  ja: {
    title: 'プライバシーポリシー — KulmanLab',
    desc: 'KulmanLab のデータの取り扱い：図面はお使いのデバイスに保存され、アカウントは不要です。匿名の利用統計に Google Analytics を使用し、アプリ内では Google AdSense の広告を表示します。',
    heading: 'プライバシーポリシー',
    updated: '最終更新日：2026年7月14日',
    summaryHeading: '要約',
    summary: [
      '図面はブラウザ内に保存され、デバイスの外に出ることはありません。作品はすべてあなたのものです。',
      'アカウントも登録もメールアドレスも不要です。私たちはあなたが誰であるかを知りません。',
      '訪問数の集計と機能の利用状況の把握のために Google Analytics を使用しています。図面の内容が見られることはありません。',
      'アプリは無料で、広告（Google AdSense）によって運営されています。図面が広告に使われることはなく、データを販売することも決してありません。',
    ],
    sections: [
      {
        h: '図面はデバイスから出ません',
        blocks: [
          { t: 'p', html: 'KulmanLab CAD で描いたものはすべて、お使いのデバイス上のブラウザのローカルストレージ（IndexedDB）に保存されます。図面がアップロード・送信されたり、サーバーに保存されたりすることは一切ありません。初回読み込み後はアプリは完全にオフラインで動作します — ファイルの読み込み・編集・保存にサーバーは一切関与しません。' },
          { t: 'p', html: 'ファイルはブラウザ内にのみ存在するため、完全にあなたの管理下にあります。<a href="/ja/docs/commands/files/">ファイルパネル</a>から個別の図面を削除する、<a href="/ja/docs/commands/wipestorage/">wipestorage</a> コマンドで一括消去する、あるいはブラウザ設定でサイトデータを消去することができます。私たちがファイルにアクセスしたり、復元・削除を代行したりすることはできません — そもそもファイルを保持していないからです。' },
        ],
      },
      {
        h: 'アカウントなし、個人データなし',
        blocks: [
          { t: 'p', html: 'KulmanLab にはログインも登録もメールアドレスの収集もありません。氏名、メールアドレス、その他個人を特定できる情報は一切収集していません。販売・共有できるものは何もありません。' },
        ],
      },
      {
        h: 'アクセス解析',
        blocks: [
          { t: 'p', html: '当サイト（kulmanlab.com）とアプリ（app.kulmanlab.com）は、匿名の利用統計を収集するために <strong>Google Analytics 4</strong> を使用しています。これにより、訪問者数、閲覧されたページ、おおよその国（IP アドレスから推定 — Google Analytics 4 は IP アドレスを保存しません）、使用ブラウザやデバイスの種類などが分かります。' },
          { t: 'p', html: 'サイト上では、次のような匿名の操作イベントも記録しています：' },
          { t: 'ul', items: [
            '「アプリを起動」などのボタンのクリック、',
            '外部リンクのクリック（リンク先のアドレス）、',
            'ページをどこまでスクロールしたか、および使用しているインターフェース言語。',
          ] },
          { t: 'p', html: 'これらに図面の内容、ファイル名、アプリ内で作成したものが含まれることはありません。解析データは <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google プライバシーポリシー</a>に基づいて Google が処理します。' },
        ],
      },
      {
        h: '広告',
        blocks: [
          { t: 'p', html: 'アプリ（app.kulmanlab.com）は無料で利用でき、<strong>Google AdSense</strong> を通じて配信される広告によって運営されています。当サイト（kulmanlab.com）には広告は表示されません。' },
          { t: 'p', html: 'Google を含む第三者配信事業者は Cookie を使用し、当サイトや他のウェブサイトへの過去のアクセスに基づいて広告を配信します。Google が広告 Cookie を使用することで、Google とそのパートナーは、アプリやインターネット上の他のサイトへのアクセスに基づいた広告を表示できます。広告は Google が選定します — 図面の内容、ファイル名、アプリ内で作成したものが見られることは決してありません。' },
          { t: 'p', html: 'パーソナライズ広告は <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google 広告設定</a>で無効にできます。また、<a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a>（ヨーロッパでは <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>）で第三者の広告 Cookie を広く拒否することもできます。Google が広告掲載サイトのデータをどのように使用するかは <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a> に記載されています。' },
        ],
      },
      {
        h: 'Cookie とローカルストレージ',
        blocks: [
          { t: 'p', html: '使用される Cookie は2種類です。Google Analytics はサイトとアプリの両方で <code>_ga</code> と <code>_ga_*</code> を設定します — これらはブラウザを区別するためのランダムな識別子を含み、再訪問が新規訪問者として数えられないようにするものです。有効期限は最長2年で、個人の特定には使用できません。アプリ内では、上記「広告」セクションのとおり、Google AdSense とその広告パートナーが広告の配信・計測のために追加の広告 Cookie を設定します。ソーシャルメディアの Cookie はなく、当サイト自体が広告 Cookie を設定することもありません。' },
          { t: 'p', html: 'このほか、サイトは言語設定を記憶し、アプリは図面と元に戻す履歴をブラウザのローカルストレージに保存します。これらのデータがデバイスの外に出ることはありません。' },
        ],
      },
      {
        h: '第三者サービス',
        blocks: [
          { t: 'p', html: 'Google Analytics と Google AdSense のほかに、KulmanLab は2つのインフラサービスを利用しています：' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — Inter フォントは Google のサーバーから読み込まれます。フォントファイルの取得のため、ブラウザは Google に標準的なウェブリクエスト（IP アドレスを含む）を送信します。',
            '<strong>Firebase Hosting（Google）</strong> — 当サイトとアプリを配信しています。他のウェブサーバーと同様、ページ配信のために標準的なリクエストログ（IP アドレス、リクエスト URL、ユーザーエージェント）を処理します。',
          ] },
        ],
      },
      {
        h: '選択肢',
        blocks: [
          { t: 'p', html: 'アクセス解析の対象になりたくない場合は、ブラウザで Google Analytics の Cookie をブロックする、コンテンツブロッカーを使う、または <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics オプトアウト アドオン</a>をインストールしてください。解析なしでもサイトとアプリはまったく同じように動作します。' },
          { t: 'p', html: '広告については、<a href="https://adssettings.google.com" target="_blank" rel="noopener">Google 広告設定</a>で広告のパーソナライズをオフにできます — アプリ内で広告は引き続き表示されますが、興味・関心や閲覧履歴に基づくものではなくなります。' },
        ],
      },
      {
        h: 'このポリシーの変更',
        blocks: [
          { t: 'p', html: 'データの取り扱いが変わる場合 — たとえば新しい第三者サービスを追加する場合 — このページを更新し、冒頭の日付を改訂します。' },
        ],
      },
      {
        h: 'お問い合わせ',
        blocks: [
          { t: 'p', html: 'プライバシーについてのご質問は、<a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> で issue を作成するか、<a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit コミュニティ</a>でお尋ねください。' },
        ],
      },
    ],
  },

  pl: {
    title: 'Polityka prywatności — KulmanLab',
    desc: 'Jak KulmanLab obchodzi się z Twoimi danymi: rysunki pozostają na Twoim urządzeniu, bez kont. Google Analytics do anonimowych statystyk użycia; reklamy w aplikacji przez Google AdSense.',
    heading: 'Polityka prywatności',
    updated: 'Ostatnia aktualizacja: 14 lipca 2026',
    summaryHeading: 'W skrócie',
    summary: [
      'Twoje rysunki są przechowywane w przeglądarce i nigdy nie opuszczają Twojego urządzenia. Cała Twoja praca należy do Ciebie.',
      'Nie ma kont, rejestracji ani e-maila. Nie wiemy, kim jesteś.',
      'Używamy Google Analytics, aby liczyć odwiedziny i wiedzieć, które funkcje są używane. Nigdy nie widzi zawartości Twoich rysunków.',
      'Aplikacja jest darmowa i finansowana z reklam (Google AdSense). Twoje rysunki nigdy nie są wykorzystywane do reklam i nigdy nie sprzedajemy Twoich danych.',
    ],
    sections: [
      {
        h: 'Twoje rysunki pozostają na Twoim urządzeniu',
        blocks: [
          { t: 'p', html: 'Wszystko, co rysujesz w KulmanLab CAD, jest zapisywane w lokalnej pamięci przeglądarki (IndexedDB) na Twoim własnym urządzeniu. Rysunki nigdy nie są przesyłane ani przechowywane na żadnym serwerze. Po pierwszym załadowaniu aplikacja działa całkowicie offline — żaden serwer nie uczestniczy w otwieraniu, edytowaniu ani zapisywaniu Twoich plików.' },
          { t: 'p', html: 'Ponieważ Twoje pliki istnieją tylko w Twojej przeglądarce, masz nad nimi pełną kontrolę. Możesz usuwać pojedyncze rysunki w <a href="/pl/docs/commands/files/">panelu Pliki</a>, wymazać wszystko naraz poleceniem <a href="/pl/docs/commands/wipestorage/">wipestorage</a> lub wyczyścić dane witryny w ustawieniach przeglądarki. Nie możemy uzyskać dostępu do Twoich plików, przywrócić ich ani usunąć za Ciebie — nigdy ich nie mamy.' },
        ],
      },
      {
        h: 'Bez kont, bez danych osobowych',
        blocks: [
          { t: 'p', html: 'KulmanLab nie ma logowania, rejestracji ani zbierania adresów e-mail. Nie zbieramy Twojego imienia i nazwiska, adresu e-mail ani żadnych innych informacji identyfikujących Cię osobiście — i nie mamy nic do sprzedania ani udostępnienia.' },
        ],
      },
      {
        h: 'Statystyki',
        blocks: [
          { t: 'p', html: 'Ta witryna (kulmanlab.com) i aplikacja (app.kulmanlab.com) używają <strong>Google Analytics 4</strong> do zbierania anonimowych statystyk użycia. Dzięki temu wiemy np., ile osób nas odwiedza, które strony czytają, w jakim kraju się znajdują (w przybliżeniu, na podstawie adresu IP — Google Analytics 4 nie przechowuje adresów IP) oraz jakiej przeglądarki i typu urządzenia używają.' },
          { t: 'p', html: 'W witrynie rejestrujemy też kilka anonimowych zdarzeń interakcji:' },
          { t: 'ul', items: [
            'kliknięcia przycisku „Uruchom aplikację" i podobnych,',
            'kliknięcia linków wychodzących (adres docelowy linku),',
            'jak daleko przewijasz stronę i jakiego języka interfejsu używasz.',
          ] },
          { t: 'p', html: 'Nic z tego nie obejmuje zawartości Twoich rysunków, nazw plików ani niczego, co tworzysz w aplikacji. Dane statystyczne są przetwarzane przez Google zgodnie z <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Polityką prywatności Google</a>.' },
        ],
      },
      {
        h: 'Reklamy',
        blocks: [
          { t: 'p', html: 'Aplikacja (app.kulmanlab.com) jest darmowa i finansowana z reklam wyświetlanych za pośrednictwem <strong>Google AdSense</strong>. Ta witryna (kulmanlab.com) nie wyświetla reklam.' },
          { t: 'p', html: 'Zewnętrzni dostawcy, w tym Google, używają plików cookie do wyświetlania reklam na podstawie Twoich wcześniejszych odwiedzin tej lub innych witryn. Dzięki reklamowym plikom cookie Google i jego partnerzy mogą wyświetlać Ci reklamy na podstawie Twoich odwiedzin aplikacji i/lub innych stron w Internecie. Reklamy dobiera Google — nigdy nie widzą one zawartości Twoich rysunków, nazw plików ani niczego, co tworzysz w aplikacji.' },
          { t: 'p', html: 'Możesz wyłączyć reklamy spersonalizowane w <a href="https://adssettings.google.com" target="_blank" rel="noopener">Ustawieniach reklam Google</a> lub szerzej zrezygnować z reklamowych plików cookie stron trzecich na <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (lub <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> w Europie). Sposób, w jaki Google wykorzystuje dane z witryn wyświetlających jego reklamy, opisano na <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Pliki cookie i pamięć lokalna',
        blocks: [
          { t: 'p', html: 'Używane są dwa rodzaje plików cookie. Google Analytics ustawia <code>_ga</code> i <code>_ga_*</code> zarówno w witrynie, jak i w aplikacji — zawierają one losowy identyfikator rozróżniający przeglądarki, dzięki czemu powtórne odwiedziny nie są liczone jako nowi odwiedzający; wygasają najpóźniej po dwóch latach i nie mogą służyć do Twojej osobistej identyfikacji. W aplikacji Google AdSense i jego partnerzy reklamowi ustawiają dodatkowe reklamowe pliki cookie do wyświetlania i mierzenia reklam, jak opisano w sekcji Reklamy powyżej. Nie ma plików cookie mediów społecznościowych, a sama witryna nie ustawia żadnych reklamowych plików cookie.' },
          { t: 'p', html: 'Ponadto witryna zapamiętuje Twoje preferencje językowe, a aplikacja przechowuje rysunki i historię cofania w pamięci lokalnej przeglądarki. Te dane nigdy nie opuszczają Twojego urządzenia.' },
        ],
      },
      {
        h: 'Usługi zewnętrzne',
        blocks: [
          { t: 'p', html: 'Poza Google Analytics i Google AdSense KulmanLab korzysta z dwóch usług infrastrukturalnych:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — czcionka Inter jest ładowana z serwerów Google. Twoja przeglądarka wysyła do Google standardowe żądanie sieciowe (zawierające Twój adres IP), aby pobrać pliki czcionki.',
            '<strong>Firebase Hosting (Google)</strong> — serwuje tę witrynę i aplikację. Jak każdy serwer WWW przetwarza standardowe dzienniki żądań (adres IP, żądany URL, user agent), aby dostarczać strony.',
          ] },
        ],
      },
      {
        h: 'Twoje wybory',
        blocks: [
          { t: 'p', html: 'Jeśli nie chcesz być liczony w statystykach, możesz zablokować pliki cookie Google Analytics w przeglądarce, użyć blokera treści lub zainstalować <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">dodatek blokujący Google Analytics</a>. Witryna i aplikacja działają bez statystyk dokładnie tak samo.' },
          { t: 'p', html: 'Jeśli chodzi o reklamy, możesz wyłączyć personalizację w <a href="https://adssettings.google.com" target="_blank" rel="noopener">Ustawieniach reklam Google</a> — nadal będziesz widzieć reklamy w aplikacji, ale nie będą one oparte na Twoich zainteresowaniach ani historii przeglądania.' },
        ],
      },
      {
        h: 'Zmiany tej polityki',
        blocks: [
          { t: 'p', html: 'Jeśli nasze praktyki dotyczące danych się zmienią — na przykład po dodaniu nowej usługi zewnętrznej — ta strona zostanie zaktualizowana, a data u góry zmieniona.' },
        ],
      },
      {
        h: 'Kontakt',
        blocks: [
          { t: 'p', html: 'Pytania o prywatność? Otwórz zgłoszenie na <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHubie</a> lub zapytaj w <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">społeczności Reddit</a>.' },
        ],
      },
    ],
  },

  ko: {
    title: '개인정보 처리방침 — KulmanLab',
    desc: 'KulmanLab의 데이터 처리 방식: 도면은 기기에 남고 계정은 없습니다. 익명 사용 통계에 Google Analytics를 사용하며, 앱에서는 Google AdSense 광고가 표시됩니다.',
    heading: '개인정보 처리방침',
    updated: '최종 업데이트: 2026년 7월 14일',
    summaryHeading: '요약',
    summary: [
      '도면은 브라우저에 저장되며 기기를 벗어나지 않습니다. 모든 작업물은 당신의 것입니다.',
      '계정도, 가입도, 이메일도 없습니다. 우리는 당신이 누구인지 모릅니다.',
      '방문 수를 세고 어떤 기능이 사용되는지 파악하기 위해 Google Analytics를 사용합니다. 도면 내용은 절대 보지 않습니다.',
      '앱은 무료이며 광고(Google AdSense)로 운영됩니다. 도면이 광고에 사용되는 일은 없으며, 데이터를 판매하지도 않습니다.',
    ],
    sections: [
      {
        h: '도면은 기기에 남습니다',
        blocks: [
          { t: 'p', html: 'KulmanLab CAD에서 그리는 모든 것은 사용자 기기의 브라우저 로컬 저장소(IndexedDB)에 저장됩니다. 도면이 업로드되거나 전송되거나 서버에 저장되는 일은 절대 없습니다. 첫 로드 이후 앱은 완전히 오프라인으로 작동하며, 파일을 열고 편집하고 저장하는 데 어떤 서버도 관여하지 않습니다.' },
          { t: 'p', html: '파일이 브라우저에만 존재하므로 완전한 통제권은 사용자에게 있습니다. <a href="/ko/docs/commands/files/">파일 패널</a>에서 개별 도면을 삭제하거나, <a href="/ko/docs/commands/wipestorage/">wipestorage</a> 명령으로 한 번에 모두 지우거나, 브라우저 설정에서 사이트 데이터를 삭제할 수 있습니다. 우리는 파일에 접근하거나 복원하거나 대신 삭제할 수 없습니다 — 애초에 파일을 갖고 있지 않기 때문입니다.' },
        ],
      },
      {
        h: '계정 없음, 개인정보 없음',
        blocks: [
          { t: 'p', html: 'KulmanLab에는 로그인, 가입, 이메일 수집이 없습니다. 이름, 이메일 주소 등 개인을 식별할 수 있는 어떤 정보도 수집하지 않으며, 판매하거나 공유할 것 자체가 없습니다.' },
        ],
      },
      {
        h: '분석',
        blocks: [
          { t: 'p', html: '이 웹사이트(kulmanlab.com)와 앱(app.kulmanlab.com)은 익명 사용 통계를 수집하기 위해 <strong>Google Analytics 4</strong>를 사용합니다. 이를 통해 방문자 수, 읽은 페이지, 대략적인 국가(IP 주소에서 추정 — Google Analytics 4는 IP 주소를 저장하지 않습니다), 사용 브라우저와 기기 유형 등을 파악합니다.' },
          { t: 'p', html: '웹사이트에서는 다음과 같은 익명 상호작용 이벤트도 기록합니다:' },
          { t: 'ul', items: [
            '"앱 실행" 등 버튼 클릭,',
            '외부 링크 클릭(링크의 대상 주소),',
            '페이지를 얼마나 스크롤했는지, 그리고 사용 중인 인터페이스 언어.',
          ] },
          { t: 'p', html: '여기에는 도면 내용, 파일 이름, 앱에서 만든 어떤 것도 포함되지 않습니다. 분석 데이터는 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google 개인정보처리방침</a>에 따라 Google이 처리합니다.' },
        ],
      },
      {
        h: '광고',
        blocks: [
          { t: 'p', html: '앱(app.kulmanlab.com)은 무료이며 <strong>Google AdSense</strong>를 통해 게재되는 광고로 운영됩니다. 이 웹사이트(kulmanlab.com)에는 광고가 표시되지 않습니다.' },
          { t: 'p', html: 'Google을 포함한 제3자 공급업체는 쿠키를 사용해 이 사이트나 다른 웹사이트에 대한 이전 방문을 바탕으로 광고를 게재합니다. Google의 광고 쿠키 사용으로 Google과 그 파트너는 앱 및/또는 인터넷의 다른 사이트 방문 기록을 바탕으로 광고를 표시할 수 있습니다. 광고는 Google이 선택하며 — 도면 내용, 파일 이름, 앱에서 만든 어떤 것도 절대 보지 못합니다.' },
          { t: 'p', html: '<a href="https://adssettings.google.com" target="_blank" rel="noopener">Google 광고 설정</a>에서 맞춤 광고를 해제하거나, <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a>(유럽은 <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>)에서 제3자 광고 쿠키를 더 폭넓게 거부할 수 있습니다. Google이 광고를 게재하는 사이트의 데이터를 사용하는 방식은 <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>에 설명되어 있습니다.' },
        ],
      },
      {
        h: '쿠키와 로컬 저장소',
        blocks: [
          { t: 'p', html: '두 종류의 쿠키가 사용됩니다. Google Analytics는 웹사이트와 앱 모두에 <code>_ga</code>와 <code>_ga_*</code>를 설정합니다 — 브라우저를 구분하는 무작위 식별자를 담고 있어 재방문이 새 방문자로 집계되지 않게 하며, 최대 2년 후 만료되고 개인 식별에는 사용할 수 없습니다. 앱에서는 위 광고 섹션에서 설명한 대로 Google AdSense와 그 광고 파트너가 광고 게재 및 측정을 위한 추가 광고 쿠키를 설정합니다. 소셜 미디어 쿠키는 없으며, 웹사이트 자체는 광고 쿠키를 설정하지 않습니다.' },
          { t: 'p', html: '또한 웹사이트는 언어 설정을 기억하고, 앱은 도면과 실행 취소 기록을 브라우저 로컬 저장소에 보관합니다. 이 데이터는 기기를 벗어나지 않습니다.' },
        ],
      },
      {
        h: '제3자 서비스',
        blocks: [
          { t: 'p', html: 'Google Analytics와 Google AdSense 외에 KulmanLab은 두 가지 인프라 서비스를 사용합니다:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — Inter 글꼴은 Google 서버에서 로드됩니다. 글꼴 파일을 가져오기 위해 브라우저가 Google에 표준 웹 요청(IP 주소 포함)을 보냅니다.',
            '<strong>Firebase Hosting(Google)</strong> — 이 웹사이트와 앱을 제공합니다. 다른 웹 서버와 마찬가지로 페이지 전송을 위해 표준 요청 로그(IP 주소, 요청 URL, 사용자 에이전트)를 처리합니다.',
          ] },
        ],
      },
      {
        h: '선택권',
        blocks: [
          { t: 'p', html: '분석에 포함되고 싶지 않다면 브라우저에서 Google Analytics 쿠키를 차단하거나, 콘텐츠 차단기를 사용하거나, <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics 차단 부가기능</a>을 설치하면 됩니다. 분석 없이도 웹사이트와 앱은 완전히 동일하게 작동합니다.' },
          { t: 'p', html: '광고의 경우 <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google 광고 설정</a>에서 광고 맞춤설정을 끌 수 있습니다 — 앱에서 광고는 계속 표시되지만, 관심사나 검색 기록을 바탕으로 하지는 않게 됩니다.' },
        ],
      },
      {
        h: '방침 변경',
        blocks: [
          { t: 'p', html: '데이터 처리 방식이 바뀌면 — 예를 들어 새로운 제3자 서비스가 추가되면 — 이 페이지가 업데이트되고 상단의 날짜가 수정됩니다.' },
        ],
      },
      {
        h: '문의',
        blocks: [
          { t: 'p', html: '개인정보에 대한 질문이 있으신가요? <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a>에 이슈를 열거나 <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit 커뮤니티</a>에 질문해 주세요.' },
        ],
      },
    ],
  },

  vi: {
    title: 'Chính sách quyền riêng tư — KulmanLab',
    desc: 'Cách KulmanLab xử lý dữ liệu của bạn: bản vẽ ở lại trên thiết bị, không có tài khoản. Google Analytics cho số liệu sử dụng ẩn danh; quảng cáo trong ứng dụng qua Google AdSense.',
    heading: 'Chính sách quyền riêng tư',
    updated: 'Cập nhật lần cuối: 14 tháng 7, 2026',
    summaryHeading: 'Tóm tắt',
    summary: [
      'Bản vẽ của bạn được lưu trong trình duyệt và không bao giờ rời khỏi thiết bị. Mọi thành quả đều thuộc về bạn.',
      'Không có tài khoản, không đăng ký, không email. Chúng tôi không biết bạn là ai.',
      'Chúng tôi dùng Google Analytics để đếm lượt truy cập và hiểu tính năng nào được sử dụng. Nó không bao giờ thấy nội dung bản vẽ của bạn.',
      'Ứng dụng miễn phí và được duy trì bằng quảng cáo (Google AdSense). Bản vẽ của bạn không bao giờ bị dùng cho quảng cáo, và chúng tôi không bao giờ bán dữ liệu của bạn.',
    ],
    sections: [
      {
        h: 'Bản vẽ của bạn ở lại trên thiết bị',
        blocks: [
          { t: 'p', html: 'Mọi thứ bạn vẽ trong KulmanLab CAD được lưu vào bộ nhớ cục bộ của trình duyệt (IndexedDB) trên chính thiết bị của bạn. Bản vẽ không bao giờ được tải lên, truyền đi hay lưu trên bất kỳ máy chủ nào. Sau lần tải đầu tiên, ứng dụng hoạt động hoàn toàn ngoại tuyến — không máy chủ nào tham gia vào việc mở, chỉnh sửa hay lưu tệp của bạn.' },
          { t: 'p', html: 'Vì tệp của bạn chỉ tồn tại trong trình duyệt, bạn có toàn quyền kiểm soát chúng. Bạn có thể xóa từng bản vẽ trong <a href="/vi/docs/commands/files/">bảng Tệp</a>, xóa tất cả cùng lúc bằng lệnh <a href="/vi/docs/commands/wipestorage/">wipestorage</a>, hoặc xóa dữ liệu trang web trong cài đặt trình duyệt. Chúng tôi không thể truy cập, khôi phục hay xóa tệp thay bạn — chúng tôi chưa bao giờ có chúng.' },
        ],
      },
      {
        h: 'Không tài khoản, không dữ liệu cá nhân',
        blocks: [
          { t: 'p', html: 'KulmanLab không có đăng nhập, không đăng ký, không thu thập email. Chúng tôi không thu thập tên, địa chỉ email hay bất kỳ thông tin nào khác có thể nhận dạng cá nhân bạn — và chúng tôi không có gì để bán hay chia sẻ.' },
        ],
      },
      {
        h: 'Phân tích',
        blocks: [
          { t: 'p', html: 'Trang web này (kulmanlab.com) và ứng dụng (app.kulmanlab.com) dùng <strong>Google Analytics 4</strong> để thu thập số liệu sử dụng ẩn danh. Nhờ đó chúng tôi biết, chẳng hạn, có bao nhiêu người truy cập, họ đọc trang nào, họ ở quốc gia nào (ước lượng, suy ra từ địa chỉ IP — Google Analytics 4 không lưu địa chỉ IP), và họ dùng trình duyệt cùng loại thiết bị nào.' },
          { t: 'p', html: 'Trên trang web, chúng tôi cũng ghi lại một vài sự kiện tương tác ẩn danh:' },
          { t: 'ul', items: [
            'nhấp vào nút "Mở ứng dụng" và các nút tương tự,',
            'nhấp vào liên kết ra ngoài (địa chỉ đích của liên kết),',
            'bạn cuộn trang đến đâu, và ngôn ngữ giao diện bạn dùng.',
          ] },
          { t: 'p', html: 'Không dữ liệu nào trong số này bao gồm nội dung bản vẽ, tên tệp hay bất cứ thứ gì bạn tạo trong ứng dụng. Dữ liệu phân tích do Google xử lý theo <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Chính sách quyền riêng tư của Google</a>.' },
        ],
      },
      {
        h: 'Quảng cáo',
        blocks: [
          { t: 'p', html: 'Ứng dụng (app.kulmanlab.com) miễn phí sử dụng và được duy trì bằng quảng cáo phân phối qua <strong>Google AdSense</strong>. Trang web này (kulmanlab.com) không hiển thị quảng cáo.' },
          { t: 'p', html: 'Các nhà cung cấp bên thứ ba, bao gồm Google, dùng cookie để hiển thị quảng cáo dựa trên các lần truy cập trước của bạn vào trang này hoặc các trang web khác. Việc Google dùng cookie quảng cáo cho phép Google và các đối tác hiển thị quảng cáo cho bạn dựa trên lượt truy cập của bạn vào ứng dụng và/hoặc các trang khác trên Internet. Quảng cáo do Google lựa chọn — chúng không bao giờ thấy nội dung bản vẽ, tên tệp hay bất cứ thứ gì bạn tạo trong ứng dụng.' },
          { t: 'p', html: 'Bạn có thể tắt quảng cáo được cá nhân hóa trong <a href="https://adssettings.google.com" target="_blank" rel="noopener">Cài đặt quảng cáo của Google</a>, hoặc từ chối cookie quảng cáo bên thứ ba rộng hơn tại <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (hoặc <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> ở châu Âu). Cách Google dùng dữ liệu từ các trang hiển thị quảng cáo của họ được mô tả tại <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookie và bộ nhớ cục bộ',
        blocks: [
          { t: 'p', html: 'Có hai loại cookie được dùng. Google Analytics đặt <code>_ga</code> và <code>_ga_*</code> trên cả trang web lẫn ứng dụng — chúng chứa một mã định danh ngẫu nhiên để phân biệt các trình duyệt, nhờ đó các lần truy cập lặp lại không bị tính là khách mới; chúng hết hạn sau tối đa hai năm và không thể dùng để nhận dạng cá nhân bạn. Trong ứng dụng, Google AdSense và các đối tác quảng cáo đặt thêm cookie quảng cáo để phân phối và đo lường quảng cáo, như mô tả ở mục Quảng cáo phía trên. Không có cookie mạng xã hội, và bản thân trang web không đặt cookie quảng cáo nào.' },
          { t: 'p', html: 'Ngoài ra, trang web ghi nhớ ngôn ngữ bạn chọn và ứng dụng lưu bản vẽ cùng lịch sử hoàn tác trong bộ nhớ cục bộ của trình duyệt. Dữ liệu này không bao giờ rời khỏi thiết bị của bạn.' },
        ],
      },
      {
        h: 'Dịch vụ bên thứ ba',
        blocks: [
          { t: 'p', html: 'Ngoài Google Analytics và Google AdSense, KulmanLab dựa vào hai dịch vụ hạ tầng:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — phông chữ Inter được tải từ máy chủ của Google. Trình duyệt của bạn gửi một yêu cầu web tiêu chuẩn (bao gồm địa chỉ IP của bạn) đến Google để lấy các tệp phông chữ.',
            '<strong>Firebase Hosting (Google)</strong> — phục vụ trang web này và ứng dụng. Như mọi máy chủ web, nó xử lý nhật ký yêu cầu tiêu chuẩn (địa chỉ IP, URL được yêu cầu, user agent) để phân phối trang.',
          ] },
        ],
      },
      {
        h: 'Lựa chọn của bạn',
        blocks: [
          { t: 'p', html: 'Nếu không muốn bị tính trong số liệu phân tích, bạn có thể chặn cookie Google Analytics trong trình duyệt, dùng trình chặn nội dung, hoặc cài <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">tiện ích chọn không tham gia Google Analytics</a>. Trang web và ứng dụng hoạt động hoàn toàn như nhau khi không có phân tích.' },
          { t: 'p', html: 'Với quảng cáo, bạn có thể tắt cá nhân hóa quảng cáo trong <a href="https://adssettings.google.com" target="_blank" rel="noopener">Cài đặt quảng cáo của Google</a> — bạn vẫn thấy quảng cáo trong ứng dụng, nhưng chúng sẽ không dựa trên sở thích hay lịch sử duyệt web của bạn.' },
        ],
      },
      {
        h: 'Thay đổi chính sách này',
        blocks: [
          { t: 'p', html: 'Nếu cách chúng tôi xử lý dữ liệu thay đổi — ví dụ khi thêm một dịch vụ bên thứ ba mới — trang này sẽ được cập nhật và ngày ở đầu trang sẽ được sửa lại.' },
        ],
      },
      {
        h: 'Liên hệ',
        blocks: [
          { t: 'p', html: 'Có câu hỏi về quyền riêng tư? Hãy mở issue trên <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> hoặc hỏi trong <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">cộng đồng Reddit</a>.' },
        ],
      },
    ],
  },

  th: {
    title: 'นโยบายความเป็นส่วนตัว — KulmanLab',
    desc: 'KulmanLab จัดการข้อมูลของคุณอย่างไร: แบบเขียนอยู่บนอุปกรณ์ของคุณ ไม่มีบัญชี ใช้ Google Analytics เก็บสถิติการใช้งานแบบไม่ระบุตัวตน และมีโฆษณาในแอปผ่าน Google AdSense',
    heading: 'นโยบายความเป็นส่วนตัว',
    updated: 'อัปเดตล่าสุด: 14 กรกฎาคม 2026',
    summaryHeading: 'สรุปสั้น ๆ',
    summary: [
      'แบบเขียนของคุณถูกเก็บในเบราว์เซอร์และไม่มีวันออกจากอุปกรณ์ของคุณ ผลงานทั้งหมดเป็นของคุณ',
      'ไม่มีบัญชี ไม่ต้องสมัครสมาชิก ไม่ต้องใช้อีเมล เราไม่รู้ว่าคุณเป็นใคร',
      'เราใช้ Google Analytics เพื่อนับจำนวนผู้เข้าชมและดูว่าฟีเจอร์ใดถูกใช้งาน มันไม่มีวันเห็นเนื้อหาแบบเขียนของคุณ',
      'แอปใช้งานฟรีและอยู่ได้ด้วยโฆษณา (Google AdSense) แบบเขียนของคุณไม่มีวันถูกใช้เพื่อโฆษณา และเราไม่มีวันขายข้อมูลของคุณ',
    ],
    sections: [
      {
        h: 'แบบเขียนของคุณอยู่บนอุปกรณ์ของคุณ',
        blocks: [
          { t: 'p', html: 'ทุกสิ่งที่คุณเขียนใน KulmanLab CAD จะถูกบันทึกลงในพื้นที่จัดเก็บภายในของเบราว์เซอร์ (IndexedDB) บนอุปกรณ์ของคุณเอง แบบเขียนไม่มีวันถูกอัปโหลด ส่งต่อ หรือเก็บบนเซิร์ฟเวอร์ใด ๆ หลังจากโหลดครั้งแรก แอปทำงานแบบออฟไลน์ได้อย่างสมบูรณ์ — ไม่มีเซิร์ฟเวอร์ใดเกี่ยวข้องกับการเปิด แก้ไข หรือบันทึกไฟล์ของคุณ' },
          { t: 'p', html: 'เนื่องจากไฟล์ของคุณมีอยู่เฉพาะในเบราว์เซอร์ คุณจึงควบคุมมันได้เต็มที่ คุณสามารถลบแบบเขียนทีละไฟล์จาก<a href="/th/docs/commands/files/">แผงไฟล์</a> ล้างทั้งหมดในครั้งเดียวด้วยคำสั่ง <a href="/th/docs/commands/wipestorage/">wipestorage</a> หรือล้างข้อมูลเว็บไซต์ในการตั้งค่าเบราว์เซอร์ เราไม่สามารถเข้าถึง กู้คืน หรือลบไฟล์แทนคุณได้ — เราไม่เคยมีไฟล์เหล่านั้นเลย' },
        ],
      },
      {
        h: 'ไม่มีบัญชี ไม่มีข้อมูลส่วนบุคคล',
        blocks: [
          { t: 'p', html: 'KulmanLab ไม่มีการเข้าสู่ระบบ ไม่มีการลงทะเบียน และไม่เก็บอีเมล เราไม่เก็บชื่อ ที่อยู่อีเมล หรือข้อมูลอื่นใดที่ระบุตัวตนของคุณ — และเราไม่มีอะไรจะขายหรือแบ่งปัน' },
        ],
      },
      {
        h: 'การวิเคราะห์',
        blocks: [
          { t: 'p', html: 'เว็บไซต์นี้ (kulmanlab.com) และแอป (app.kulmanlab.com) ใช้ <strong>Google Analytics 4</strong> เพื่อเก็บสถิติการใช้งานแบบไม่ระบุตัวตน ข้อมูลนี้บอกเราว่ามีผู้เข้าชมกี่คน อ่านหน้าใดบ้าง อยู่ประเทศใด (โดยประมาณ คำนวณจากที่อยู่ IP — Google Analytics 4 ไม่เก็บที่อยู่ IP) และใช้เบราว์เซอร์กับอุปกรณ์ประเภทใด' },
          { t: 'p', html: 'บนเว็บไซต์ เรายังบันทึกเหตุการณ์การโต้ตอบแบบไม่ระบุตัวตนบางอย่างด้วย:' },
          { t: 'ul', items: [
            'การคลิกปุ่ม "เปิดแอป" และปุ่มที่คล้ายกัน',
            'การคลิกลิงก์ออกไปภายนอก (ที่อยู่ปลายทางของลิงก์)',
            'คุณเลื่อนหน้าลงไปลึกแค่ไหน และภาษาอินเทอร์เฟซที่คุณใช้',
          ] },
          { t: 'p', html: 'ข้อมูลเหล่านี้ไม่มีส่วนใดที่รวมเนื้อหาแบบเขียน ชื่อไฟล์ หรือสิ่งใดที่คุณสร้างในแอป ข้อมูลการวิเคราะห์ได้รับการประมวลผลโดย Google ตาม<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">นโยบายความเป็นส่วนตัวของ Google</a>' },
        ],
      },
      {
        h: 'โฆษณา',
        blocks: [
          { t: 'p', html: 'แอป (app.kulmanlab.com) ใช้งานฟรีและอยู่ได้ด้วยโฆษณาที่แสดงผ่าน <strong>Google AdSense</strong> เว็บไซต์นี้ (kulmanlab.com) ไม่แสดงโฆษณา' },
          { t: 'p', html: 'ผู้ให้บริการบุคคลที่สาม รวมถึง Google ใช้คุกกี้เพื่อแสดงโฆษณาตามการเข้าชมเว็บไซต์นี้หรือเว็บไซต์อื่นของคุณก่อนหน้านี้ การที่ Google ใช้คุกกี้โฆษณาทำให้ Google และพันธมิตรสามารถแสดงโฆษณาให้คุณตามการเข้าชมแอปและ/หรือเว็บไซต์อื่นบนอินเทอร์เน็ต โฆษณาถูกคัดเลือกโดย Google — พวกเขาไม่มีวันเห็นเนื้อหาแบบเขียน ชื่อไฟล์ หรือสิ่งใดที่คุณสร้างในแอป' },
          { t: 'p', html: 'คุณสามารถปิดโฆษณาที่ปรับตามโปรไฟล์ได้ใน<a href="https://adssettings.google.com" target="_blank" rel="noopener">การตั้งค่าโฆษณาของ Google</a> หรือปฏิเสธคุกกี้โฆษณาของบุคคลที่สามในวงกว้างที่ <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (หรือ <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> ในยุโรป) วิธีที่ Google ใช้ข้อมูลจากเว็บไซต์ที่แสดงโฆษณาของตนอธิบายไว้ที่ <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>' },
        ],
      },
      {
        h: 'คุกกี้และพื้นที่จัดเก็บภายใน',
        blocks: [
          { t: 'p', html: 'มีการใช้คุกกี้สองประเภท Google Analytics ตั้งค่า <code>_ga</code> และ <code>_ga_*</code> ทั้งบนเว็บไซต์และในแอป — คุกกี้เหล่านี้มีตัวระบุแบบสุ่มเพื่อแยกแยะเบราว์เซอร์ เพื่อไม่ให้การเข้าชมซ้ำถูกนับเป็นผู้เข้าชมใหม่ หมดอายุภายในไม่เกินสองปี และไม่สามารถใช้ระบุตัวตนของคุณได้ ในแอป Google AdSense และพันธมิตรโฆษณาจะตั้งค่าคุกกี้โฆษณาเพิ่มเติมเพื่อแสดงและวัดผลโฆษณา ตามที่อธิบายในส่วนโฆษณาด้านบน ไม่มีคุกกี้โซเชียลมีเดีย และตัวเว็บไซต์เองไม่ตั้งค่าคุกกี้โฆษณาใด ๆ' },
          { t: 'p', html: 'นอกจากนี้ เว็บไซต์จะจดจำภาษาที่คุณเลือก และแอปจะเก็บแบบเขียนกับประวัติการเลิกทำไว้ในพื้นที่จัดเก็บภายในของเบราว์เซอร์ ข้อมูลเหล่านี้ไม่มีวันออกจากอุปกรณ์ของคุณ' },
        ],
      },
      {
        h: 'บริการของบุคคลที่สาม',
        blocks: [
          { t: 'p', html: 'นอกจาก Google Analytics และ Google AdSense แล้ว KulmanLab ยังพึ่งพาบริการโครงสร้างพื้นฐานสองอย่าง:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — ฟอนต์ Inter โหลดจากเซิร์ฟเวอร์ของ Google เบราว์เซอร์ของคุณส่งคำขอเว็บมาตรฐาน (รวมถึงที่อยู่ IP ของคุณ) ไปยัง Google เพื่อดึงไฟล์ฟอนต์',
            '<strong>Firebase Hosting (Google)</strong> — ให้บริการเว็บไซต์นี้และแอป เช่นเดียวกับเว็บเซิร์ฟเวอร์ทั่วไป มันประมวลผลบันทึกคำขอมาตรฐาน (ที่อยู่ IP, URL ที่ขอ, user agent) เพื่อส่งมอบหน้าเว็บ',
          ] },
        ],
      },
      {
        h: 'ทางเลือกของคุณ',
        blocks: [
          { t: 'p', html: 'หากไม่ต้องการถูกนับในสถิติ คุณสามารถบล็อกคุกกี้ Google Analytics ในเบราว์เซอร์ ใช้ตัวบล็อกเนื้อหา หรือติดตั้ง<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">ส่วนเสริมยกเลิก Google Analytics</a> เว็บไซต์และแอปทำงานเหมือนเดิมทุกอย่างโดยไม่มีการวิเคราะห์' },
          { t: 'p', html: 'สำหรับโฆษณา คุณสามารถปิดการปรับโฆษณาตามโปรไฟล์ได้ใน<a href="https://adssettings.google.com" target="_blank" rel="noopener">การตั้งค่าโฆษณาของ Google</a> — คุณจะยังเห็นโฆษณาในแอป แต่โฆษณาจะไม่อิงตามความสนใจหรือประวัติการท่องเว็บของคุณ' },
        ],
      },
      {
        h: 'การเปลี่ยนแปลงนโยบายนี้',
        blocks: [
          { t: 'p', html: 'หากแนวปฏิบัติด้านข้อมูลของเราเปลี่ยนไป — เช่น มีการเพิ่มบริการบุคคลที่สามใหม่ — หน้านี้จะได้รับการอัปเดตและวันที่ด้านบนจะถูกแก้ไข' },
        ],
      },
      {
        h: 'ติดต่อ',
        blocks: [
          { t: 'p', html: 'มีคำถามเกี่ยวกับความเป็นส่วนตัว? เปิด issue บน <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> หรือถามใน<a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">ชุมชน Reddit</a>' },
        ],
      },
    ],
  },

  ms: {
    title: 'Dasar Privasi — KulmanLab',
    desc: 'Cara KulmanLab mengendalikan data anda: lukisan kekal pada peranti anda, tiada akaun. Google Analytics untuk metrik penggunaan tanpa nama; iklan dalam aplikasi melalui Google AdSense.',
    heading: 'Dasar Privasi',
    updated: 'Kemas kini terakhir: 14 Julai 2026',
    summaryHeading: 'Versi ringkas',
    summary: [
      'Lukisan anda disimpan dalam pelayar dan tidak pernah meninggalkan peranti anda. Semua hasil kerja anda adalah milik anda.',
      'Tiada akaun, tiada pendaftaran dan tiada e-mel. Kami tidak tahu siapa anda.',
      'Kami menggunakan Google Analytics untuk mengira lawatan dan memahami ciri yang digunakan. Ia tidak pernah melihat kandungan lukisan anda.',
      'Aplikasi ini percuma dan dibiayai oleh iklan (Google AdSense). Lukisan anda tidak pernah digunakan untuk pengiklanan, dan kami tidak pernah menjual data anda.',
    ],
    sections: [
      {
        h: 'Lukisan anda kekal pada peranti anda',
        blocks: [
          { t: 'p', html: 'Semua yang anda lukis dalam KulmanLab CAD disimpan dalam storan setempat pelayar (IndexedDB) pada peranti anda sendiri. Lukisan tidak pernah dimuat naik, dihantar atau disimpan pada mana-mana pelayan. Selepas pemuatan pertama, aplikasi berfungsi sepenuhnya di luar talian — tiada pelayan terlibat dalam membuka, mengedit atau menyimpan fail anda.' },
          { t: 'p', html: 'Oleh sebab fail anda wujud hanya dalam pelayar anda, anda mempunyai kawalan penuh ke atasnya. Anda boleh memadamkan lukisan satu persatu daripada <a href="/ms/docs/commands/files/">panel Fail</a>, memadamkan semuanya sekali gus dengan perintah <a href="/ms/docs/commands/wipestorage/">wipestorage</a>, atau mengosongkan data tapak dalam tetapan pelayar. Kami tidak boleh mengakses, memulihkan atau memadamkan fail anda bagi pihak anda — kami tidak pernah memilikinya.' },
        ],
      },
      {
        h: 'Tiada akaun, tiada data peribadi',
        blocks: [
          { t: 'p', html: 'KulmanLab tiada log masuk, tiada pendaftaran dan tiada pengumpulan e-mel. Kami tidak mengumpul nama anda, alamat e-mel anda atau apa-apa maklumat lain yang mengenal pasti anda secara peribadi — dan kami tiada apa-apa untuk dijual atau dikongsi.' },
        ],
      },
      {
        h: 'Analitik',
        blocks: [
          { t: 'p', html: 'Laman web ini (kulmanlab.com) dan aplikasi (app.kulmanlab.com) menggunakan <strong>Google Analytics 4</strong> untuk mengumpul metrik penggunaan tanpa nama. Ini memberitahu kami contohnya berapa ramai yang melawat, halaman yang mereka baca, di negara mana mereka berada (anggaran, diperoleh daripada alamat IP — Google Analytics 4 tidak menyimpan alamat IP), serta pelayar dan jenis peranti yang mereka gunakan.' },
          { t: 'p', html: 'Di laman web kami juga merekodkan beberapa peristiwa interaksi tanpa nama:' },
          { t: 'ul', items: [
            'klik pada butang "Lancarkan Aplikasi" dan butang seumpamanya,',
            'klik pada pautan keluar (alamat destinasi pautan),',
            'sejauh mana anda menatal halaman, dan bahasa antara muka yang anda gunakan.',
          ] },
          { t: 'p', html: 'Tiada satu pun daripadanya merangkumi kandungan lukisan anda, nama fail atau apa-apa yang anda cipta dalam aplikasi. Data analitik diproses oleh Google di bawah <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Dasar Privasi Google</a>.' },
        ],
      },
      {
        h: 'Pengiklanan',
        blocks: [
          { t: 'p', html: 'Aplikasi (app.kulmanlab.com) percuma untuk digunakan dan dibiayai oleh iklan yang disiarkan melalui <strong>Google AdSense</strong>. Laman web ini (kulmanlab.com) tidak memaparkan iklan.' },
          { t: 'p', html: 'Vendor pihak ketiga, termasuk Google, menggunakan kuki untuk menyiarkan iklan berdasarkan lawatan terdahulu anda ke laman ini atau laman web lain. Penggunaan kuki pengiklanan oleh Google membolehkan Google dan rakan kongsinya memaparkan iklan kepada anda berdasarkan lawatan anda ke aplikasi dan/atau laman lain di Internet. Iklan dipilih oleh Google — mereka tidak pernah melihat kandungan lukisan anda, nama fail atau apa-apa yang anda cipta dalam aplikasi.' },
          { t: 'p', html: 'Anda boleh mematikan iklan diperibadikan dalam <a href="https://adssettings.google.com" target="_blank" rel="noopener">Tetapan Iklan Google</a>, atau menolak kuki pengiklanan pihak ketiga secara lebih meluas di <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (atau <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> di Eropah). Cara Google menggunakan data daripada laman yang memaparkan iklannya diterangkan di <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Kuki dan storan setempat',
        blocks: [
          { t: 'p', html: 'Dua jenis kuki digunakan. Google Analytics menetapkan <code>_ga</code> dan <code>_ga_*</code> pada laman web dan aplikasi — ia mengandungi pengecam rawak yang membezakan pelayar supaya lawatan berulang tidak dikira sebagai pelawat baharu; ia luput selepas maksimum dua tahun dan tidak boleh digunakan untuk mengenal pasti anda secara peribadi. Dalam aplikasi, Google AdSense dan rakan kongsi pengiklanannya menetapkan kuki pengiklanan tambahan untuk menyiarkan dan mengukur iklan, seperti yang diterangkan dalam bahagian Pengiklanan di atas. Tiada kuki media sosial, dan laman web itu sendiri tidak menetapkan sebarang kuki pengiklanan.' },
          { t: 'p', html: 'Selain itu, laman web mengingati pilihan bahasa anda dan aplikasi menyimpan lukisan serta sejarah buat asal anda dalam storan setempat pelayar. Data ini tidak pernah meninggalkan peranti anda.' },
        ],
      },
      {
        h: 'Perkhidmatan pihak ketiga',
        blocks: [
          { t: 'p', html: 'Selain Google Analytics dan Google AdSense, KulmanLab bergantung pada dua perkhidmatan infrastruktur:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — fon Inter dimuatkan daripada pelayan Google. Pelayar anda menghantar permintaan web standard (termasuk alamat IP anda) kepada Google untuk mendapatkan fail fon.',
            '<strong>Firebase Hosting (Google)</strong> — menyajikan laman web ini dan aplikasi. Seperti mana-mana pelayan web, ia memproses log permintaan standard (alamat IP, URL yang diminta, ejen pengguna) untuk menghantar halaman.',
          ] },
        ],
      },
      {
        h: 'Pilihan anda',
        blocks: [
          { t: 'p', html: 'Jika anda tidak mahu dikira dalam analitik, anda boleh menyekat kuki Google Analytics dalam pelayar, menggunakan penyekat kandungan, atau memasang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">tambahan pilih keluar Google Analytics</a>. Laman web dan aplikasi berfungsi sama sahaja tanpa analitik.' },
          { t: 'p', html: 'Bagi pengiklanan, anda boleh mematikan pemperibadian iklan dalam <a href="https://adssettings.google.com" target="_blank" rel="noopener">Tetapan Iklan Google</a> — anda masih akan melihat iklan dalam aplikasi, tetapi ia tidak akan berdasarkan minat atau sejarah pelayaran anda.' },
        ],
      },
      {
        h: 'Perubahan kepada dasar ini',
        blocks: [
          { t: 'p', html: 'Jika amalan data kami berubah — contohnya jika perkhidmatan pihak ketiga baharu ditambah — halaman ini akan dikemas kini dan tarikh di atas akan disemak.' },
        ],
      },
      {
        h: 'Hubungi',
        blocks: [
          { t: 'p', html: 'Ada soalan tentang privasi? Buka isu di <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> atau tanya dalam <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">komuniti Reddit</a>.' },
        ],
      },
    ],
  },

  bn: {
    title: 'গোপনীয়তা নীতি — KulmanLab',
    desc: 'KulmanLab আপনার ডেটা কীভাবে সামলায়: অঙ্কন আপনার ডিভাইসেই থাকে, কোনো অ্যাকাউন্ট নেই। বেনামি ব্যবহার পরিসংখ্যানের জন্য Google Analytics; অ্যাপে Google AdSense-এর বিজ্ঞাপন।',
    heading: 'গোপনীয়তা নীতি',
    updated: 'সর্বশেষ আপডেট: ১৪ জুলাই ২০২৬',
    summaryHeading: 'সংক্ষেপে',
    summary: [
      'আপনার অঙ্কন আপনার ব্রাউজারে সংরক্ষিত হয় এবং কখনো আপনার ডিভাইস ছেড়ে যায় না। আপনার সব কাজ আপনারই।',
      'কোনো অ্যাকাউন্ট নেই, সাইন-আপ নেই, ইমেইল নেই। আমরা জানি না আপনি কে।',
      'ভিজিট গণনা এবং কোন ফিচার ব্যবহৃত হয় তা বোঝার জন্য আমরা Google Analytics ব্যবহার করি। এটি কখনো আপনার অঙ্কনের বিষয়বস্তু দেখে না।',
      'অ্যাপটি বিনামূল্যের এবং বিজ্ঞাপনে (Google AdSense) চলে। আপনার অঙ্কন কখনো বিজ্ঞাপনের জন্য ব্যবহৃত হয় না, এবং আমরা কখনো আপনার ডেটা বিক্রি করি না।',
    ],
    sections: [
      {
        h: 'আপনার অঙ্কন আপনার ডিভাইসেই থাকে',
        blocks: [
          { t: 'p', html: 'KulmanLab CAD-এ আপনি যা কিছু আঁকেন, তা আপনার নিজের ডিভাইসে ব্রাউজারের লোকাল স্টোরেজে (IndexedDB) সংরক্ষিত হয়। অঙ্কন কখনো আপলোড, প্রেরণ বা কোনো সার্ভারে সংরক্ষণ করা হয় না। প্রথমবার লোড হওয়ার পর অ্যাপটি সম্পূর্ণ অফলাইনে কাজ করে — আপনার ফাইল খোলা, সম্পাদনা বা সংরক্ষণে কোনো সার্ভার জড়িত নয়।' },
          { t: 'p', html: 'যেহেতু আপনার ফাইল শুধু আপনার ব্রাউজারেই আছে, সেগুলোর পূর্ণ নিয়ন্ত্রণ আপনার হাতে। আপনি <a href="/bn/docs/commands/files/">ফাইল প্যানেল</a> থেকে আলাদা আলাদা অঙ্কন মুছতে পারেন, <a href="/bn/docs/commands/wipestorage/">wipestorage</a> কমান্ড দিয়ে একবারে সব মুছে ফেলতে পারেন, অথবা ব্রাউজার সেটিংসে সাইট ডেটা পরিষ্কার করতে পারেন। আমরা আপনার ফাইলে প্রবেশ করতে, পুনরুদ্ধার করতে বা আপনার হয়ে মুছতে পারি না — সেগুলো কখনোই আমাদের কাছে থাকে না।' },
        ],
      },
      {
        h: 'কোনো অ্যাকাউন্ট নেই, কোনো ব্যক্তিগত ডেটা নেই',
        blocks: [
          { t: 'p', html: 'KulmanLab-এ কোনো লগইন, নিবন্ধন বা ইমেইল সংগ্রহ নেই। আমরা আপনার নাম, ইমেইল ঠিকানা বা আপনাকে ব্যক্তিগতভাবে শনাক্ত করে এমন কোনো তথ্য সংগ্রহ করি না — এবং আমাদের কাছে বিক্রি বা শেয়ার করার মতো কিছুই নেই।' },
        ],
      },
      {
        h: 'অ্যানালিটিক্স',
        blocks: [
          { t: 'p', html: 'এই ওয়েবসাইট (kulmanlab.com) এবং অ্যাপ (app.kulmanlab.com) বেনামি ব্যবহার পরিসংখ্যান সংগ্রহের জন্য <strong>Google Analytics 4</strong> ব্যবহার করে। এটি আমাদের জানায়, যেমন কতজন ভিজিট করেন, কোন পৃষ্ঠাগুলো পড়েন, কোন দেশে আছেন (আনুমানিক, IP ঠিকানা থেকে নির্ণীত — Google Analytics 4 IP ঠিকানা সংরক্ষণ করে না), এবং কোন ব্রাউজার ও ডিভাইস ধরন ব্যবহার করেন।' },
          { t: 'p', html: 'ওয়েবসাইটে আমরা কিছু বেনামি ইন্টারঅ্যাকশন ইভেন্টও রেকর্ড করি:' },
          { t: 'ul', items: [
            '"অ্যাপ চালু করুন" ও অনুরূপ বোতামে ক্লিক,',
            'বহির্গামী লিংকে ক্লিক (লিংকের গন্তব্য ঠিকানা),',
            'আপনি পৃষ্ঠা কতদূর স্ক্রল করেন, এবং কোন ইন্টারফেস ভাষা ব্যবহার করেন।',
          ] },
          { t: 'p', html: 'এর কোনোটিতেই আপনার অঙ্কনের বিষয়বস্তু, ফাইলের নাম বা অ্যাপে আপনার তৈরি কোনো কিছু অন্তর্ভুক্ত নয়। অ্যানালিটিক্স ডেটা Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google গোপনীয়তা নীতির</a> অধীনে প্রক্রিয়া করে।' },
        ],
      },
      {
        h: 'বিজ্ঞাপন',
        blocks: [
          { t: 'p', html: 'অ্যাপটি (app.kulmanlab.com) বিনামূল্যে ব্যবহারযোগ্য এবং <strong>Google AdSense</strong>-এর মাধ্যমে প্রদর্শিত বিজ্ঞাপনে চলে। এই ওয়েবসাইট (kulmanlab.com) কোনো বিজ্ঞাপন দেখায় না।' },
          { t: 'p', html: 'Google-সহ তৃতীয় পক্ষের বিক্রেতারা এই বা অন্যান্য ওয়েবসাইটে আপনার পূর্ববর্তী ভিজিটের ভিত্তিতে বিজ্ঞাপন দেখাতে কুকি ব্যবহার করে। বিজ্ঞাপন কুকির মাধ্যমে Google ও তার অংশীদাররা অ্যাপ এবং/অথবা ইন্টারনেটের অন্যান্য সাইটে আপনার ভিজিটের ভিত্তিতে আপনাকে বিজ্ঞাপন দেখাতে পারে। বিজ্ঞাপন Google নির্বাচন করে — তারা কখনো আপনার অঙ্কনের বিষয়বস্তু, ফাইলের নাম বা অ্যাপে তৈরি কোনো কিছু দেখে না।' },
          { t: 'p', html: 'আপনি <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google বিজ্ঞাপন সেটিংসে</a> ব্যক্তিগতকৃত বিজ্ঞাপন বন্ধ করতে পারেন, অথবা <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a>-তে (ইউরোপে <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>) তৃতীয় পক্ষের বিজ্ঞাপন কুকি আরও ব্যাপকভাবে প্রত্যাখ্যান করতে পারেন। Google তার বিজ্ঞাপন প্রদর্শনকারী সাইটের ডেটা কীভাবে ব্যবহার করে তা <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>-এ বর্ণিত আছে।' },
        ],
      },
      {
        h: 'কুকি ও লোকাল স্টোরেজ',
        blocks: [
          { t: 'p', html: 'দুই ধরনের কুকি ব্যবহৃত হয়। Google Analytics ওয়েবসাইট ও অ্যাপ উভয় জায়গায় <code>_ga</code> ও <code>_ga_*</code> সেট করে — এগুলোতে একটি এলোমেলো শনাক্তকারী থাকে যা ব্রাউজার আলাদা করে, যাতে পুনরায় ভিজিট নতুন ভিজিটর হিসেবে গণনা না হয়; এগুলো সর্বোচ্চ দুই বছরে মেয়াদোত্তীর্ণ হয় এবং আপনাকে ব্যক্তিগতভাবে শনাক্ত করতে ব্যবহার করা যায় না। অ্যাপে, উপরের বিজ্ঞাপন অংশে বর্ণিত অনুযায়ী, Google AdSense ও তার বিজ্ঞাপন অংশীদাররা বিজ্ঞাপন প্রদর্শন ও পরিমাপের জন্য অতিরিক্ত বিজ্ঞাপন কুকি সেট করে। কোনো সোশ্যাল-মিডিয়া কুকি নেই, এবং ওয়েবসাইট নিজে কোনো বিজ্ঞাপন কুকি সেট করে না।' },
          { t: 'p', html: 'এছাড়া, ওয়েবসাইট আপনার ভাষা পছন্দ মনে রাখে এবং অ্যাপ আপনার অঙ্কন ও আনডু ইতিহাস ব্রাউজারের লোকাল স্টোরেজে রাখে। এই ডেটা কখনো আপনার ডিভাইস ছেড়ে যায় না।' },
        ],
      },
      {
        h: 'তৃতীয় পক্ষের পরিষেবা',
        blocks: [
          { t: 'p', html: 'Google Analytics ও Google AdSense ছাড়াও KulmanLab দুটি অবকাঠামো পরিষেবার উপর নির্ভর করে:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — Inter ফন্ট Google-এর সার্ভার থেকে লোড হয়। ফন্ট ফাইল আনতে আপনার ব্রাউজার Google-কে একটি প্রমিত ওয়েব অনুরোধ (আপনার IP ঠিকানাসহ) পাঠায়।',
            '<strong>Firebase Hosting (Google)</strong> — এই ওয়েবসাইট ও অ্যাপ পরিবেশন করে। যেকোনো ওয়েব সার্ভারের মতো, পৃষ্ঠা পৌঁছে দিতে এটি প্রমিত অনুরোধ লগ (IP ঠিকানা, অনুরোধকৃত URL, ইউজার এজেন্ট) প্রক্রিয়া করে।',
          ] },
        ],
      },
      {
        h: 'আপনার পছন্দ',
        blocks: [
          { t: 'p', html: 'অ্যানালিটিক্সে গণ্য হতে না চাইলে আপনি ব্রাউজারে Google Analytics কুকি ব্লক করতে পারেন, কনটেন্ট ব্লকার ব্যবহার করতে পারেন, অথবা <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics অপ্ট-আউট অ্যাড-অন</a> ইনস্টল করতে পারেন। অ্যানালিটিক্স ছাড়াও ওয়েবসাইট ও অ্যাপ হুবহু একইভাবে কাজ করে।' },
          { t: 'p', html: 'বিজ্ঞাপনের ক্ষেত্রে, আপনি <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google বিজ্ঞাপন সেটিংসে</a> বিজ্ঞাপন ব্যক্তিগতকরণ বন্ধ করতে পারেন — অ্যাপে বিজ্ঞাপন তখনও দেখবেন, তবে তা আপনার আগ্রহ বা ব্রাউজিং ইতিহাসের ভিত্তিতে হবে না।' },
        ],
      },
      {
        h: 'এই নীতির পরিবর্তন',
        blocks: [
          { t: 'p', html: 'আমাদের ডেটা চর্চা বদলালে — যেমন নতুন কোনো তৃতীয় পক্ষের পরিষেবা যুক্ত হলে — এই পৃষ্ঠা আপডেট করা হবে এবং উপরের তারিখ সংশোধিত হবে।' },
        ],
      },
      {
        h: 'যোগাযোগ',
        blocks: [
          { t: 'p', html: 'গোপনীয়তা নিয়ে প্রশ্ন? <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a>-এ একটি ইস্যু খুলুন বা <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit কমিউনিটিতে</a> জিজ্ঞাসা করুন।' },
        ],
      },
    ],
  },

  sw: {
    title: 'Sera ya Faragha — KulmanLab',
    desc: 'Jinsi KulmanLab inavyoshughulikia data yako: michoro hukaa kwenye kifaa chako, hakuna akaunti. Google Analytics kwa takwimu za matumizi zisizo na utambulisho; matangazo ndani ya programu kupitia Google AdSense.',
    heading: 'Sera ya Faragha',
    updated: 'Ilisasishwa mwisho: 14 Julai 2026',
    summaryHeading: 'Toleo fupi',
    summary: [
      'Michoro yako huhifadhiwa kwenye kivinjari chako na kamwe haiondoki kwenye kifaa chako. Kazi yako yote ni mali yako.',
      'Hakuna akaunti, hakuna usajili, wala barua pepe. Hatujui wewe ni nani.',
      'Tunatumia Google Analytics kuhesabu wageni na kuelewa vipengele vinavyotumika. Kamwe haioni maudhui ya michoro yako.',
      'Programu ni ya bure na inagharamiwa na matangazo (Google AdSense). Michoro yako kamwe haitumiki kwa matangazo, na kamwe hatuuzi data yako.',
    ],
    sections: [
      {
        h: 'Michoro yako hukaa kwenye kifaa chako',
        blocks: [
          { t: 'p', html: 'Kila kitu unachochora katika KulmanLab CAD huhifadhiwa kwenye hifadhi ya ndani ya kivinjari chako (IndexedDB) kwenye kifaa chako mwenyewe. Michoro kamwe haipakiwi, haitumwi, wala kuhifadhiwa kwenye seva yoyote. Baada ya kupakia mara ya kwanza, programu hufanya kazi kikamilifu bila mtandao — hakuna seva inayohusika katika kufungua, kuhariri au kuhifadhi faili zako.' },
          { t: 'p', html: 'Kwa kuwa faili zako zipo kwenye kivinjari chako pekee, una udhibiti kamili juu yake. Unaweza kufuta michoro moja moja kutoka kwenye <a href="/sw/docs/commands/files/">paneli ya Faili</a>, kufuta yote kwa mara moja kwa amri ya <a href="/sw/docs/commands/wipestorage/">wipestorage</a>, au kufuta data ya tovuti katika mipangilio ya kivinjari. Hatuwezi kufikia, kurejesha au kufuta faili zako kwa niaba yako — kamwe hatuna faili hizo.' },
        ],
      },
      {
        h: 'Hakuna akaunti, hakuna data ya binafsi',
        blocks: [
          { t: 'p', html: 'KulmanLab haina kuingia, haina usajili, wala ukusanyaji wa barua pepe. Hatukusanyi jina lako, anwani yako ya barua pepe, wala taarifa nyingine yoyote inayokutambulisha binafsi — na hatuna chochote cha kuuza au kushiriki.' },
        ],
      },
      {
        h: 'Takwimu',
        blocks: [
          { t: 'p', html: 'Tovuti hii (kulmanlab.com) na programu (app.kulmanlab.com) hutumia <strong>Google Analytics 4</strong> kukusanya takwimu za matumizi zisizo na utambulisho. Hii hutuambia mambo kama watu wangapi wanatembelea, kurasa gani wanasoma, wako nchi gani (kwa makadirio, kutokana na anwani ya IP — Google Analytics 4 haihifadhi anwani za IP), na kivinjari na aina ya kifaa wanachotumia.' },
          { t: 'p', html: 'Kwenye tovuti pia tunarekodi matukio machache ya mwingiliano yasiyo na utambulisho:' },
          { t: 'ul', items: [
            'kubofya kitufe cha "Fungua Programu" na vitufe kama hivyo,',
            'kubofya viungo vya nje (anwani ya lengwa la kiungo),',
            'ni kiasi gani unasogeza ukurasa chini, na lugha ya kiolesura unayotumia.',
          ] },
          { t: 'p', html: 'Hakuna hata mojawapo inayojumuisha maudhui ya michoro yako, majina ya faili, au chochote unachokiunda kwenye programu. Data ya takwimu huchakatwa na Google chini ya <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Sera ya Faragha ya Google</a>.' },
        ],
      },
      {
        h: 'Matangazo',
        blocks: [
          { t: 'p', html: 'Programu (app.kulmanlab.com) ni ya bure kutumia na inagharamiwa na matangazo yanayoonyeshwa kupitia <strong>Google AdSense</strong>. Tovuti hii (kulmanlab.com) haionyeshi matangazo.' },
          { t: 'p', html: 'Wauzaji wa nje, wakiwemo Google, hutumia vidakuzi kuonyesha matangazo kulingana na ziara zako za awali kwenye tovuti hii au tovuti nyingine. Matumizi ya vidakuzi vya matangazo na Google huwezesha Google na washirika wake kukuonyesha matangazo kulingana na ziara zako kwenye programu na/au tovuti nyingine mtandaoni. Matangazo huchaguliwa na Google — kamwe hayaoni maudhui ya michoro yako, majina ya faili, au chochote unachokiunda kwenye programu.' },
          { t: 'p', html: 'Unaweza kuzima matangazo yanayokufaa binafsi katika <a href="https://adssettings.google.com" target="_blank" rel="noopener">Mipangilio ya Matangazo ya Google</a>, au kukataa vidakuzi vya matangazo vya wahusika wengine kwa upana zaidi kwenye <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (au <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> barani Ulaya). Jinsi Google inavyotumia data kutoka kwa tovuti zinazoonyesha matangazo yake imeelezwa kwenye <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Vidakuzi na hifadhi ya ndani',
        blocks: [
          { t: 'p', html: 'Aina mbili za vidakuzi hutumika. Google Analytics huweka <code>_ga</code> na <code>_ga_*</code> kwenye tovuti na programu — vina kitambulisho cha nasibu kinachotofautisha vivinjari ili ziara za marudio zisihesabiwe kama wageni wapya; huisha muda baada ya miaka miwili au chini yake na haviwezi kutumika kukutambulisha binafsi. Ndani ya programu, Google AdSense na washirika wake wa matangazo huweka vidakuzi vya ziada vya matangazo ili kuonyesha na kupima matangazo, kama ilivyoelezwa katika sehemu ya Matangazo hapo juu. Hakuna vidakuzi vya mitandao ya kijamii, na tovuti yenyewe haiweki vidakuzi vyovyote vya matangazo.' },
          { t: 'p', html: 'Zaidi ya hayo, tovuti hukumbuka lugha uliyochagua na programu huhifadhi michoro yako na historia ya kutendua kwenye hifadhi ya ndani ya kivinjari. Data hii kamwe haiondoki kwenye kifaa chako.' },
        ],
      },
      {
        h: 'Huduma za wahusika wengine',
        blocks: [
          { t: 'p', html: 'Mbali na Google Analytics na Google AdSense, KulmanLab hutegemea huduma mbili za miundombinu:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — fonti ya Inter hupakiwa kutoka kwa seva za Google. Kivinjari chako hutuma ombi la kawaida la wavuti (likijumuisha anwani yako ya IP) kwa Google ili kupata faili za fonti.',
            '<strong>Firebase Hosting (Google)</strong> — huhudumia tovuti hii na programu. Kama seva yoyote ya wavuti, huchakata kumbukumbu za maombi za kawaida (anwani ya IP, URL iliyoombwa, user agent) ili kuwasilisha kurasa.',
          ] },
        ],
      },
      {
        h: 'Chaguo zako',
        blocks: [
          { t: 'p', html: 'Ikiwa hupendi kuhesabiwa kwenye takwimu, unaweza kuzuia vidakuzi vya Google Analytics kwenye kivinjari chako, kutumia kizuizi cha maudhui, au kusakinisha <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">programu-jalizi ya kujiondoa ya Google Analytics</a>. Tovuti na programu hufanya kazi sawa kabisa bila takwimu.' },
          { t: 'p', html: 'Kwa matangazo, unaweza kuzima ubinafsishaji wa matangazo katika <a href="https://adssettings.google.com" target="_blank" rel="noopener">Mipangilio ya Matangazo ya Google</a> — bado utaona matangazo kwenye programu, lakini hayatategemea mapendezi yako au historia yako ya kuvinjari.' },
        ],
      },
      {
        h: 'Mabadiliko ya sera hii',
        blocks: [
          { t: 'p', html: 'Ikiwa mbinu zetu za data zitabadilika — kwa mfano, huduma mpya ya mhusika mwingine ikiongezwa — ukurasa huu utasasishwa na tarehe ya juu itarekebishwa.' },
        ],
      },
      {
        h: 'Mawasiliano',
        blocks: [
          { t: 'p', html: 'Una maswali kuhusu faragha? Fungua hoja (issue) kwenye <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> au uliza katika <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">jumuiya ya Reddit</a>.' },
        ],
      },
    ],
  },

  ur: {
    title: 'رازداری کی پالیسی — KulmanLab',
    desc: 'KulmanLab آپ کے ڈیٹا کو کیسے سنبھالتا ہے: ڈرائنگز آپ کے آلے پر رہتی ہیں، کوئی اکاؤنٹ نہیں۔ گمنام استعمال کے اعداد و شمار کے لیے Google Analytics؛ ایپ میں Google AdSense کے اشتہارات۔',
    heading: 'رازداری کی پالیسی',
    updated: 'آخری تازہ کاری: 14 جولائی 2026',
    summaryHeading: 'مختصر خلاصہ',
    summary: [
      'آپ کی ڈرائنگز آپ کے براؤزر میں محفوظ ہوتی ہیں اور کبھی آپ کے آلے سے باہر نہیں جاتیں۔ آپ کا سارا کام آپ کی ملکیت ہے۔',
      'نہ کوئی اکاؤنٹ ہے، نہ سائن اپ، نہ ای میل۔ ہم نہیں جانتے کہ آپ کون ہیں۔',
      'ہم وزٹ گننے اور یہ سمجھنے کے لیے کہ کون سے فیچر استعمال ہوتے ہیں Google Analytics استعمال کرتے ہیں۔ یہ آپ کی ڈرائنگ کا مواد کبھی نہیں دیکھتا۔',
      'ایپ مفت ہے اور اشتہارات (Google AdSense) سے چلتی ہے۔ آپ کی ڈرائنگز کبھی اشتہارات کے لیے استعمال نہیں ہوتیں، اور ہم آپ کا ڈیٹا کبھی نہیں بیچتے۔',
    ],
    sections: [
      {
        h: 'آپ کی ڈرائنگز آپ کے آلے پر رہتی ہیں',
        blocks: [
          { t: 'p', html: 'KulmanLab CAD میں آپ جو کچھ بھی بناتے ہیں وہ آپ کے اپنے آلے پر براؤزر کے لوکل اسٹوریج (IndexedDB) میں محفوظ ہوتا ہے۔ ڈرائنگز کبھی اپ لوڈ، منتقل یا کسی سرور پر محفوظ نہیں کی جاتیں۔ پہلی بار لوڈ ہونے کے بعد ایپ مکمل طور پر آف لائن کام کرتی ہے — آپ کی فائلیں کھولنے، ترمیم کرنے یا محفوظ کرنے میں کوئی سرور شامل نہیں ہوتا۔' },
          { t: 'p', html: 'چونکہ آپ کی فائلیں صرف آپ کے براؤزر میں موجود ہیں، ان پر مکمل اختیار آپ کا ہے۔ آپ <a href="/ur/docs/commands/files/">فائل پینل</a> سے انفرادی ڈرائنگز حذف کر سکتے ہیں، <a href="/ur/docs/commands/wipestorage/">wipestorage</a> کمانڈ سے ایک ساتھ سب کچھ مٹا سکتے ہیں، یا براؤزر کی ترتیبات میں سائٹ ڈیٹا صاف کر سکتے ہیں۔ ہم آپ کی فائلوں تک نہ رسائی حاصل کر سکتے ہیں، نہ انہیں بحال کر سکتے ہیں، نہ آپ کی طرف سے حذف کر سکتے ہیں — وہ کبھی ہمارے پاس ہوتی ہی نہیں۔' },
        ],
      },
      {
        h: 'نہ اکاؤنٹ، نہ ذاتی ڈیٹا',
        blocks: [
          { t: 'p', html: 'KulmanLab میں نہ لاگ اِن ہے، نہ رجسٹریشن، نہ ای میل جمع کرنا۔ ہم آپ کا نام، ای میل پتا یا کوئی بھی ایسی معلومات جمع نہیں کرتے جو آپ کی ذاتی شناخت کرے — اور ہمارے پاس بیچنے یا شیئر کرنے کے لیے کچھ بھی نہیں۔' },
        ],
      },
      {
        h: 'تجزیات',
        blocks: [
          { t: 'p', html: 'یہ ویب سائٹ (kulmanlab.com) اور ایپ (app.kulmanlab.com) گمنام استعمال کے اعداد و شمار جمع کرنے کے لیے <strong>Google Analytics 4</strong> استعمال کرتی ہیں۔ اس سے ہمیں مثلاً یہ پتا چلتا ہے کہ کتنے لوگ آتے ہیں، کون سے صفحات پڑھتے ہیں، کس ملک میں ہیں (تخمینی، IP پتے سے اخذ شدہ — Google Analytics 4 IP پتے محفوظ نہیں کرتا)، اور کون سا براؤزر اور آلے کی قسم استعمال کرتے ہیں۔' },
          { t: 'p', html: 'ویب سائٹ پر ہم کچھ گمنام تعاملاتی واقعات بھی ریکارڈ کرتے ہیں:' },
          { t: 'ul', items: [
            '"ایپ شروع کریں" اور اسی طرح کے بٹنوں پر کلک،',
            'بیرونی لنکس پر کلک (لنک کا منزل کا پتا)،',
            'آپ صفحہ کتنا نیچے اسکرول کرتے ہیں، اور کون سی انٹرفیس زبان استعمال کرتے ہیں۔',
          ] },
          { t: 'p', html: 'ان میں سے کسی میں بھی آپ کی ڈرائنگ کا مواد، فائلوں کے نام یا ایپ میں آپ کی بنائی ہوئی کوئی چیز شامل نہیں۔ تجزیاتی ڈیٹا کو Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google کی رازداری کی پالیسی</a> کے تحت پروسیس کرتا ہے۔' },
        ],
      },
      {
        h: 'اشتہارات',
        blocks: [
          { t: 'p', html: 'ایپ (app.kulmanlab.com) استعمال کے لیے مفت ہے اور <strong>Google AdSense</strong> کے ذریعے دکھائے جانے والے اشتہارات سے چلتی ہے۔ یہ ویب سائٹ (kulmanlab.com) اشتہارات نہیں دکھاتی۔' },
          { t: 'p', html: 'Google سمیت فریق ثالث فروش، اس یا دوسری ویب سائٹس پر آپ کے سابقہ وزٹ کی بنیاد پر اشتہارات دکھانے کے لیے کوکیز استعمال کرتے ہیں۔ اشتہاری کوکیز کے استعمال سے Google اور اس کے شراکت دار آپ کو ایپ اور/یا انٹرنیٹ کی دوسری سائٹس پر آپ کے وزٹ کی بنیاد پر اشتہارات دکھا سکتے ہیں۔ اشتہارات Google منتخب کرتا ہے — وہ کبھی آپ کی ڈرائنگ کا مواد، فائلوں کے نام یا ایپ میں بنائی ہوئی کوئی چیز نہیں دیکھتے۔' },
          { t: 'p', html: 'آپ <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google اشتہارات کی ترتیبات</a> میں ذاتی نوعیت کے اشتہارات بند کر سکتے ہیں، یا <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> پر (یورپ میں <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>) فریق ثالث کی اشتہاری کوکیز کو وسیع تر طور پر مسترد کر سکتے ہیں۔ Google اپنے اشتہارات دکھانے والی سائٹس کے ڈیٹا کو کیسے استعمال کرتا ہے، یہ <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a> پر بیان کیا گیا ہے۔' },
        ],
      },
      {
        h: 'کوکیز اور لوکل اسٹوریج',
        blocks: [
          { t: 'p', html: 'دو قسم کی کوکیز استعمال ہوتی ہیں۔ Google Analytics ویب سائٹ اور ایپ دونوں پر <code>_ga</code> اور <code>_ga_*</code> سیٹ کرتا ہے — ان میں ایک بے ترتیب شناخت کنندہ ہوتا ہے جو براؤزرز میں فرق کرتا ہے تاکہ دوبارہ وزٹ نئے وزیٹر کے طور پر نہ گنے جائیں؛ یہ زیادہ سے زیادہ دو سال میں ختم ہو جاتی ہیں اور آپ کی ذاتی شناخت کے لیے استعمال نہیں ہو سکتیں۔ ایپ میں، جیسا کہ اوپر اشتہارات کے حصے میں بیان ہوا، Google AdSense اور اس کے اشتہاری شراکت دار اشتہارات دکھانے اور ناپنے کے لیے اضافی اشتہاری کوکیز سیٹ کرتے ہیں۔ سوشل میڈیا کی کوئی کوکیز نہیں ہیں، اور ویب سائٹ خود کوئی اشتہاری کوکیز سیٹ نہیں کرتی۔' },
          { t: 'p', html: 'اس کے علاوہ، ویب سائٹ آپ کی زبان کی ترجیح یاد رکھتی ہے اور ایپ آپ کی ڈرائنگز اور انڈو کی تاریخ براؤزر کے لوکل اسٹوریج میں رکھتی ہے۔ یہ ڈیٹا کبھی آپ کے آلے سے باہر نہیں جاتا۔' },
        ],
      },
      {
        h: 'فریق ثالث کی خدمات',
        blocks: [
          { t: 'p', html: 'Google Analytics اور Google AdSense کے علاوہ KulmanLab دو بنیادی ڈھانچے کی خدمات پر انحصار کرتا ہے:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — Inter فونٹ Google کے سرورز سے لوڈ ہوتا ہے۔ فونٹ فائلیں حاصل کرنے کے لیے آپ کا براؤزر Google کو ایک معیاری ویب درخواست (آپ کے IP پتے سمیت) بھیجتا ہے۔',
            '<strong>Firebase Hosting (Google)</strong> — یہ ویب سائٹ اور ایپ فراہم کرتا ہے۔ کسی بھی ویب سرور کی طرح، صفحات پہنچانے کے لیے یہ معیاری درخواستی لاگز (IP پتا، درخواست کردہ URL، یوزر ایجنٹ) پروسیس کرتا ہے۔',
          ] },
        ],
      },
      {
        h: 'آپ کے اختیارات',
        blocks: [
          { t: 'p', html: 'اگر آپ تجزیات میں شمار نہیں ہونا چاہتے تو براؤزر میں Google Analytics کی کوکیز بلاک کر سکتے ہیں، کوئی کانٹینٹ بلاکر استعمال کر سکتے ہیں، یا <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics آپٹ آؤٹ ایڈ آن</a> انسٹال کر سکتے ہیں۔ تجزیات کے بغیر ویب سائٹ اور ایپ بالکل ویسے ہی کام کرتی ہیں۔' },
          { t: 'p', html: 'اشتہارات کے لیے، آپ <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google اشتہارات کی ترتیبات</a> میں اشتہاری ذاتی نوعیت بند کر سکتے ہیں — ایپ میں اشتہارات پھر بھی نظر آئیں گے، لیکن وہ آپ کی دلچسپیوں یا براؤزنگ کی تاریخ پر مبنی نہیں ہوں گے۔' },
        ],
      },
      {
        h: 'اس پالیسی میں تبدیلیاں',
        blocks: [
          { t: 'p', html: 'اگر ہمارے ڈیٹا کے طریقے بدلیں — مثلاً کوئی نئی فریق ثالث سروس شامل ہو — تو یہ صفحہ اپ ڈیٹ کیا جائے گا اور اوپر کی تاریخ نظرثانی ہوگی۔' },
        ],
      },
      {
        h: 'رابطہ',
        blocks: [
          { t: 'p', html: 'رازداری کے بارے میں سوالات؟ <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> پر ایک issue کھولیں یا <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit کمیونٹی</a> میں پوچھیں۔' },
        ],
      },
    ],
  },

  el: {
    title: 'Πολιτική Απορρήτου — KulmanLab',
    desc: 'Πώς το KulmanLab χειρίζεται τα δεδομένα σας: τα σχέδια μένουν στη συσκευή σας, χωρίς λογαριασμούς. Google Analytics για ανώνυμα στατιστικά χρήσης· διαφημίσεις στην εφαρμογή μέσω Google AdSense.',
    heading: 'Πολιτική Απορρήτου',
    updated: 'Τελευταία ενημέρωση: 14 Ιουλίου 2026',
    summaryHeading: 'Η σύντομη εκδοχή',
    summary: [
      'Τα σχέδιά σας αποθηκεύονται στον περιηγητή σας και δεν φεύγουν ποτέ από τη συσκευή σας. Όλη η δουλειά σας ανήκει σε εσάς.',
      'Δεν υπάρχουν λογαριασμοί, εγγραφή ή email. Δεν ξέρουμε ποιοι είστε.',
      'Χρησιμοποιούμε το Google Analytics για να μετράμε επισκέψεις και να καταλαβαίνουμε ποιες λειτουργίες χρησιμοποιούνται. Δεν βλέπει ποτέ το περιεχόμενο των σχεδίων σας.',
      'Η εφαρμογή είναι δωρεάν και χρηματοδοτείται από διαφημίσεις (Google AdSense). Τα σχέδιά σας δεν χρησιμοποιούνται ποτέ για διαφημίσεις και δεν πουλάμε ποτέ τα δεδομένα σας.',
    ],
    sections: [
      {
        h: 'Τα σχέδιά σας μένουν στη συσκευή σας',
        blocks: [
          { t: 'p', html: 'Ό,τι σχεδιάζετε στο KulmanLab CAD αποθηκεύεται στον τοπικό χώρο αποθήκευσης του περιηγητή σας (IndexedDB), στη δική σας συσκευή. Τα σχέδια δεν ανεβαίνουν, δεν μεταδίδονται και δεν αποθηκεύονται ποτέ σε κανέναν διακομιστή. Μετά την πρώτη φόρτωση, η εφαρμογή λειτουργεί πλήρως εκτός σύνδεσης — κανένας διακομιστής δεν εμπλέκεται στο άνοιγμα, την επεξεργασία ή την αποθήκευση των αρχείων σας.' },
          { t: 'p', html: 'Επειδή τα αρχεία σας υπάρχουν μόνο στον περιηγητή σας, έχετε τον πλήρη έλεγχό τους. Μπορείτε να διαγράψετε μεμονωμένα σχέδια από το <a href="/el/docs/commands/files/">πάνελ Αρχείων</a>, να τα σβήσετε όλα μαζί με την εντολή <a href="/el/docs/commands/wipestorage/">wipestorage</a>, ή να καθαρίσετε τα δεδομένα ιστότοπου στις ρυθμίσεις του περιηγητή. Δεν μπορούμε να αποκτήσουμε πρόσβαση στα αρχεία σας, να τα επαναφέρουμε ή να τα διαγράψουμε για λογαριασμό σας — δεν τα έχουμε ποτέ.' },
        ],
      },
      {
        h: 'Χωρίς λογαριασμούς, χωρίς προσωπικά δεδομένα',
        blocks: [
          { t: 'p', html: 'Το KulmanLab δεν έχει σύνδεση, εγγραφή ή συλλογή email. Δεν συλλέγουμε το όνομά σας, τη διεύθυνση email σας ή οποιαδήποτε άλλη πληροφορία που σας ταυτοποιεί προσωπικά — και δεν έχουμε τίποτα να πουλήσουμε ή να μοιραστούμε.' },
        ],
      },
      {
        h: 'Στατιστικά',
        blocks: [
          { t: 'p', html: 'Αυτός ο ιστότοπος (kulmanlab.com) και η εφαρμογή (app.kulmanlab.com) χρησιμοποιούν το <strong>Google Analytics 4</strong> για τη συλλογή ανώνυμων στατιστικών χρήσης. Έτσι μαθαίνουμε π.χ. πόσοι άνθρωποι μας επισκέπτονται, ποιες σελίδες διαβάζουν, σε ποια χώρα βρίσκονται (κατά προσέγγιση, από τη διεύθυνση IP — το Google Analytics 4 δεν αποθηκεύει διευθύνσεις IP) και ποιον περιηγητή και τύπο συσκευής χρησιμοποιούν.' },
          { t: 'p', html: 'Στον ιστότοπο καταγράφουμε επίσης μερικά ανώνυμα συμβάντα αλληλεπίδρασης:' },
          { t: 'ul', items: [
            'κλικ στο κουμπί «Εκκίνηση εφαρμογής» και σε παρόμοια κουμπιά,',
            'κλικ σε εξωτερικούς συνδέσμους (τη διεύθυνση προορισμού του συνδέσμου),',
            'πόσο κάτω κάνετε κύλιση σε μια σελίδα και ποια γλώσσα διεπαφής χρησιμοποιείτε.',
          ] },
          { t: 'p', html: 'Τίποτα από αυτά δεν περιλαμβάνει το περιεχόμενο των σχεδίων σας, ονόματα αρχείων ή οτιδήποτε δημιουργείτε στην εφαρμογή. Τα στατιστικά δεδομένα επεξεργάζεται η Google σύμφωνα με την <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Πολιτική Απορρήτου της Google</a>.' },
        ],
      },
      {
        h: 'Διαφημίσεις',
        blocks: [
          { t: 'p', html: 'Η εφαρμογή (app.kulmanlab.com) είναι δωρεάν και χρηματοδοτείται από διαφημίσεις που προβάλλονται μέσω του <strong>Google AdSense</strong>. Αυτός ο ιστότοπος (kulmanlab.com) δεν εμφανίζει διαφημίσεις.' },
          { t: 'p', html: 'Τρίτοι προμηθευτές, συμπεριλαμβανομένης της Google, χρησιμοποιούν cookies για την προβολή διαφημίσεων με βάση τις προηγούμενες επισκέψεις σας σε αυτόν ή άλλους ιστότοπους. Η χρήση διαφημιστικών cookies από την Google επιτρέπει σε αυτήν και στους συνεργάτες της να σας εμφανίζουν διαφημίσεις με βάση τις επισκέψεις σας στην εφαρμογή και/ή σε άλλους ιστότοπους στο Διαδίκτυο. Τις διαφημίσεις τις επιλέγει η Google — δεν βλέπουν ποτέ το περιεχόμενο των σχεδίων σας, ονόματα αρχείων ή οτιδήποτε δημιουργείτε στην εφαρμογή.' },
          { t: 'p', html: 'Μπορείτε να απενεργοποιήσετε τις εξατομικευμένες διαφημίσεις στις <a href="https://adssettings.google.com" target="_blank" rel="noopener">Ρυθμίσεις διαφημίσεων της Google</a>, ή να απορρίψετε ευρύτερα τα διαφημιστικά cookies τρίτων στο <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (ή στο <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> στην Ευρώπη). Ο τρόπος με τον οποίο η Google χρησιμοποιεί δεδομένα από ιστότοπους που εμφανίζουν τις διαφημίσεις της περιγράφεται στο <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookies και τοπική αποθήκευση',
        blocks: [
          { t: 'p', html: 'Χρησιμοποιούνται δύο είδη cookies. Το Google Analytics ορίζει τα <code>_ga</code> και <code>_ga_*</code> τόσο στον ιστότοπο όσο και στην εφαρμογή — περιέχουν ένα τυχαίο αναγνωριστικό που ξεχωρίζει τους περιηγητές, ώστε οι επαναλαμβανόμενες επισκέψεις να μην μετρώνται ως νέοι επισκέπτες· λήγουν το αργότερο σε δύο χρόνια και δεν μπορούν να χρησιμοποιηθούν για την προσωπική σας ταυτοποίηση. Στην εφαρμογή, το Google AdSense και οι διαφημιστικοί συνεργάτες του ορίζουν επιπλέον διαφημιστικά cookies για την προβολή και τη μέτρηση διαφημίσεων, όπως περιγράφεται στην ενότητα «Διαφημίσεις» παραπάνω. Δεν υπάρχουν cookies μέσων κοινωνικής δικτύωσης και ο ίδιος ο ιστότοπος δεν ορίζει κανένα διαφημιστικό cookie.' },
          { t: 'p', html: 'Επιπλέον, ο ιστότοπος θυμάται την προτίμηση γλώσσας σας και η εφαρμογή αποθηκεύει τα σχέδιά σας και το ιστορικό αναίρεσης στον τοπικό χώρο αποθήκευσης του περιηγητή. Αυτά τα δεδομένα δεν φεύγουν ποτέ από τη συσκευή σας.' },
        ],
      },
      {
        h: 'Υπηρεσίες τρίτων',
        blocks: [
          { t: 'p', html: 'Εκτός από τα Google Analytics και Google AdSense, το KulmanLab βασίζεται σε δύο υπηρεσίες υποδομής:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — η γραμματοσειρά Inter φορτώνεται από τους διακομιστές της Google. Ο περιηγητής σας στέλνει ένα τυπικό αίτημα ιστού (που περιλαμβάνει τη διεύθυνση IP σας) στην Google για να λάβει τα αρχεία της γραμματοσειράς.',
            '<strong>Firebase Hosting (Google)</strong> — εξυπηρετεί αυτόν τον ιστότοπο και την εφαρμογή. Όπως κάθε διακομιστής ιστού, επεξεργάζεται τυπικά αρχεία καταγραφής αιτημάτων (διεύθυνση IP, ζητούμενο URL, user agent) για την παράδοση των σελίδων.',
          ] },
        ],
      },
      {
        h: 'Οι επιλογές σας',
        blocks: [
          { t: 'p', html: 'Αν προτιμάτε να μην καταμετράστε στα στατιστικά, μπορείτε να αποκλείσετε τα cookies του Google Analytics στον περιηγητή σας, να χρησιμοποιήσετε έναν αποκλειστή περιεχομένου ή να εγκαταστήσετε το <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">πρόσθετο εξαίρεσης από το Google Analytics</a>. Ο ιστότοπος και η εφαρμογή λειτουργούν ακριβώς το ίδιο χωρίς στατιστικά.' },
          { t: 'p', html: 'Για τις διαφημίσεις, μπορείτε να απενεργοποιήσετε την εξατομίκευση στις <a href="https://adssettings.google.com" target="_blank" rel="noopener">Ρυθμίσεις διαφημίσεων της Google</a> — θα εξακολουθείτε να βλέπετε διαφημίσεις στην εφαρμογή, αλλά δεν θα βασίζονται στα ενδιαφέροντά σας ή στο ιστορικό περιήγησής σας.' },
        ],
      },
      {
        h: 'Αλλαγές σε αυτήν την πολιτική',
        blocks: [
          { t: 'p', html: 'Αν αλλάξουν οι πρακτικές μας για τα δεδομένα — για παράδειγμα, αν προστεθεί μια νέα υπηρεσία τρίτων — αυτή η σελίδα θα ενημερωθεί και η ημερομηνία στην κορυφή θα αναθεωρηθεί.' },
        ],
      },
      {
        h: 'Επικοινωνία',
        blocks: [
          { t: 'p', html: 'Ερωτήσεις για το απόρρητο; Ανοίξτε ένα issue στο <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> ή ρωτήστε στην <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">κοινότητα του Reddit</a>.' },
        ],
      },
    ],
  },

  pa: {
    title: 'ਪਰਦੇਦਾਰੀ ਨੀਤੀ — KulmanLab',
    desc: 'KulmanLab ਤੁਹਾਡੇ ਡੇਟਾ ਨੂੰ ਕਿਵੇਂ ਸੰਭਾਲਦਾ ਹੈ: ਡਰਾਇੰਗਾਂ ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਤੇ ਰਹਿੰਦੀਆਂ ਹਨ, ਕੋਈ ਖਾਤਾ ਨਹੀਂ। ਗੁਮਨਾਮ ਵਰਤੋਂ ਅੰਕੜਿਆਂ ਲਈ Google Analytics; ਐਪ ਵਿੱਚ Google AdSense ਰਾਹੀਂ ਇਸ਼ਤਿਹਾਰ।',
    heading: 'ਪਰਦੇਦਾਰੀ ਨੀਤੀ',
    updated: 'ਆਖਰੀ ਅੱਪਡੇਟ: 14 ਜੁਲਾਈ 2026',
    summaryHeading: 'ਸੰਖੇਪ ਵਿੱਚ',
    summary: [
      'ਤੁਹਾਡੀਆਂ ਡਰਾਇੰਗਾਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸਟੋਰ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ ਕਦੇ ਵੀ ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਤੋਂ ਬਾਹਰ ਨਹੀਂ ਜਾਂਦੀਆਂ। ਤੁਹਾਡਾ ਸਾਰਾ ਕੰਮ ਤੁਹਾਡਾ ਹੈ।',
      'ਕੋਈ ਖਾਤਾ ਨਹੀਂ, ਕੋਈ ਸਾਈਨ-ਅੱਪ ਨਹੀਂ, ਕੋਈ ਈਮੇਲ ਨਹੀਂ। ਸਾਨੂੰ ਨਹੀਂ ਪਤਾ ਕਿ ਤੁਸੀਂ ਕੌਣ ਹੋ।',
      'ਅਸੀਂ ਮੁਲਾਕਾਤਾਂ ਗਿਣਨ ਅਤੇ ਇਹ ਸਮਝਣ ਲਈ ਕਿ ਕਿਹੜੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ, Google Analytics ਵਰਤਦੇ ਹਾਂ। ਇਹ ਤੁਹਾਡੀ ਡਰਾਇੰਗ ਦੀ ਸਮੱਗਰੀ ਕਦੇ ਨਹੀਂ ਦੇਖਦਾ।',
      'ਐਪ ਮੁਫ਼ਤ ਹੈ ਅਤੇ ਇਸ਼ਤਿਹਾਰਾਂ (Google AdSense) ਨਾਲ ਚੱਲਦੀ ਹੈ। ਤੁਹਾਡੀਆਂ ਡਰਾਇੰਗਾਂ ਕਦੇ ਵੀ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਲਈ ਨਹੀਂ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ, ਅਤੇ ਅਸੀਂ ਤੁਹਾਡਾ ਡੇਟਾ ਕਦੇ ਨਹੀਂ ਵੇਚਦੇ।',
    ],
    sections: [
      {
        h: 'ਤੁਹਾਡੀਆਂ ਡਰਾਇੰਗਾਂ ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਤੇ ਰਹਿੰਦੀਆਂ ਹਨ',
        blocks: [
          { t: 'p', html: 'ਜੋ ਕੁਝ ਵੀ ਤੁਸੀਂ KulmanLab CAD ਵਿੱਚ ਬਣਾਉਂਦੇ ਹੋ, ਉਹ ਤੁਹਾਡੀ ਆਪਣੀ ਡਿਵਾਈਸ ਤੇ ਬ੍ਰਾਊਜ਼ਰ ਦੇ ਲੋਕਲ ਸਟੋਰੇਜ (IndexedDB) ਵਿੱਚ ਸੰਭਾਲਿਆ ਜਾਂਦਾ ਹੈ। ਡਰਾਇੰਗਾਂ ਕਦੇ ਵੀ ਅੱਪਲੋਡ, ਟ੍ਰਾਂਸਮਿਟ ਜਾਂ ਕਿਸੇ ਸਰਵਰ ਤੇ ਸਟੋਰ ਨਹੀਂ ਹੁੰਦੀਆਂ। ਪਹਿਲੀ ਵਾਰ ਲੋਡ ਹੋਣ ਤੋਂ ਬਾਅਦ ਐਪ ਪੂਰੀ ਤਰ੍ਹਾਂ ਔਫਲਾਈਨ ਕੰਮ ਕਰਦੀ ਹੈ — ਤੁਹਾਡੀਆਂ ਫਾਈਲਾਂ ਖੋਲ੍ਹਣ, ਸੋਧਣ ਜਾਂ ਸੰਭਾਲਣ ਵਿੱਚ ਕੋਈ ਸਰਵਰ ਸ਼ਾਮਲ ਨਹੀਂ ਹੁੰਦਾ।' },
          { t: 'p', html: 'ਕਿਉਂਕਿ ਤੁਹਾਡੀਆਂ ਫਾਈਲਾਂ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਹਨ, ਉਹਨਾਂ ਤੇ ਪੂਰਾ ਕੰਟਰੋਲ ਤੁਹਾਡਾ ਹੈ। ਤੁਸੀਂ <a href="/pa/docs/commands/files/">ਫਾਈਲ ਪੈਨਲ</a> ਤੋਂ ਵੱਖ-ਵੱਖ ਡਰਾਇੰਗਾਂ ਮਿਟਾ ਸਕਦੇ ਹੋ, <a href="/pa/docs/commands/wipestorage/">wipestorage</a> ਕਮਾਂਡ ਨਾਲ ਇੱਕੋ ਵਾਰ ਸਭ ਕੁਝ ਮਿਟਾ ਸਕਦੇ ਹੋ, ਜਾਂ ਬ੍ਰਾਊਜ਼ਰ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਸਾਈਟ ਡੇਟਾ ਸਾਫ਼ ਕਰ ਸਕਦੇ ਹੋ। ਅਸੀਂ ਤੁਹਾਡੀਆਂ ਫਾਈਲਾਂ ਤੱਕ ਨਾ ਪਹੁੰਚ ਸਕਦੇ ਹਾਂ, ਨਾ ਬਹਾਲ ਕਰ ਸਕਦੇ ਹਾਂ, ਨਾ ਤੁਹਾਡੀ ਥਾਂ ਮਿਟਾ ਸਕਦੇ ਹਾਂ — ਉਹ ਕਦੇ ਸਾਡੇ ਕੋਲ ਹੁੰਦੀਆਂ ਹੀ ਨਹੀਂ।' },
        ],
      },
      {
        h: 'ਕੋਈ ਖਾਤਾ ਨਹੀਂ, ਕੋਈ ਨਿੱਜੀ ਡੇਟਾ ਨਹੀਂ',
        blocks: [
          { t: 'p', html: 'KulmanLab ਵਿੱਚ ਕੋਈ ਲੌਗਇਨ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਜਾਂ ਈਮੇਲ ਇਕੱਠਾ ਕਰਨਾ ਨਹੀਂ ਹੈ। ਅਸੀਂ ਤੁਹਾਡਾ ਨਾਮ, ਈਮੇਲ ਪਤਾ ਜਾਂ ਕੋਈ ਹੋਰ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਨਹੀਂ ਕਰਦੇ ਜੋ ਤੁਹਾਡੀ ਨਿੱਜੀ ਪਛਾਣ ਕਰੇ — ਅਤੇ ਸਾਡੇ ਕੋਲ ਵੇਚਣ ਜਾਂ ਸਾਂਝਾ ਕਰਨ ਲਈ ਕੁਝ ਵੀ ਨਹੀਂ ਹੈ।' },
        ],
      },
      {
        h: 'ਵਿਸ਼ਲੇਸ਼ਣ',
        blocks: [
          { t: 'p', html: 'ਇਹ ਵੈੱਬਸਾਈਟ (kulmanlab.com) ਅਤੇ ਐਪ (app.kulmanlab.com) ਗੁਮਨਾਮ ਵਰਤੋਂ ਅੰਕੜੇ ਇਕੱਠੇ ਕਰਨ ਲਈ <strong>Google Analytics 4</strong> ਵਰਤਦੀਆਂ ਹਨ। ਇਸ ਨਾਲ ਸਾਨੂੰ ਪਤਾ ਲੱਗਦਾ ਹੈ ਕਿ ਕਿੰਨੇ ਲੋਕ ਆਉਂਦੇ ਹਨ, ਕਿਹੜੇ ਪੰਨੇ ਪੜ੍ਹਦੇ ਹਨ, ਕਿਸ ਦੇਸ਼ ਵਿੱਚ ਹਨ (ਲਗਭਗ, IP ਪਤੇ ਤੋਂ ਕੱਢਿਆ ਗਿਆ — Google Analytics 4 IP ਪਤੇ ਸਟੋਰ ਨਹੀਂ ਕਰਦਾ), ਅਤੇ ਕਿਹੜਾ ਬ੍ਰਾਊਜ਼ਰ ਤੇ ਡਿਵਾਈਸ ਕਿਸਮ ਵਰਤਦੇ ਹਨ।' },
          { t: 'p', html: 'ਵੈੱਬਸਾਈਟ ਤੇ ਅਸੀਂ ਕੁਝ ਗੁਮਨਾਮ ਇੰਟਰੈਕਸ਼ਨ ਘਟਨਾਵਾਂ ਵੀ ਰਿਕਾਰਡ ਕਰਦੇ ਹਾਂ:' },
          { t: 'ul', items: [
            '"ਐਪ ਚਲਾਓ" ਅਤੇ ਇਸ ਵਰਗੇ ਬਟਨਾਂ ਤੇ ਕਲਿੱਕ,',
            'ਬਾਹਰੀ ਲਿੰਕਾਂ ਤੇ ਕਲਿੱਕ (ਲਿੰਕ ਦਾ ਮੰਜ਼ਿਲ ਪਤਾ),',
            'ਤੁਸੀਂ ਪੰਨਾ ਕਿੰਨਾ ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰਦੇ ਹੋ, ਅਤੇ ਕਿਹੜੀ ਇੰਟਰਫੇਸ ਭਾਸ਼ਾ ਵਰਤਦੇ ਹੋ।',
          ] },
          { t: 'p', html: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਵਿੱਚ ਵੀ ਤੁਹਾਡੀ ਡਰਾਇੰਗ ਦੀ ਸਮੱਗਰੀ, ਫਾਈਲਾਂ ਦੇ ਨਾਮ ਜਾਂ ਐਪ ਵਿੱਚ ਤੁਹਾਡੀ ਬਣਾਈ ਕੋਈ ਚੀਜ਼ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ। ਵਿਸ਼ਲੇਸ਼ਣ ਡੇਟਾ ਨੂੰ Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google ਦੀ ਪਰਦੇਦਾਰੀ ਨੀਤੀ</a> ਅਧੀਨ ਪ੍ਰੋਸੈਸ ਕਰਦਾ ਹੈ।' },
        ],
      },
      {
        h: 'ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ',
        blocks: [
          { t: 'p', html: 'ਐਪ (app.kulmanlab.com) ਵਰਤਣ ਲਈ ਮੁਫ਼ਤ ਹੈ ਅਤੇ <strong>Google AdSense</strong> ਰਾਹੀਂ ਦਿਖਾਏ ਜਾਂਦੇ ਇਸ਼ਤਿਹਾਰਾਂ ਨਾਲ ਚੱਲਦੀ ਹੈ। ਇਹ ਵੈੱਬਸਾਈਟ (kulmanlab.com) ਇਸ਼ਤਿਹਾਰ ਨਹੀਂ ਦਿਖਾਉਂਦੀ।' },
          { t: 'p', html: 'Google ਸਮੇਤ ਤੀਜੀ-ਧਿਰ ਦੇ ਵਿਕਰੇਤਾ, ਇਸ ਜਾਂ ਹੋਰ ਵੈੱਬਸਾਈਟਾਂ ਤੇ ਤੁਹਾਡੀਆਂ ਪਿਛਲੀਆਂ ਮੁਲਾਕਾਤਾਂ ਦੇ ਆਧਾਰ ਤੇ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਣ ਲਈ ਕੂਕੀਜ਼ ਵਰਤਦੇ ਹਨ। ਇਸ਼ਤਿਹਾਰੀ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਨਾਲ Google ਅਤੇ ਉਸਦੇ ਸਾਥੀ ਤੁਹਾਨੂੰ ਐਪ ਅਤੇ/ਜਾਂ ਇੰਟਰਨੈੱਟ ਦੀਆਂ ਹੋਰ ਸਾਈਟਾਂ ਤੇ ਤੁਹਾਡੀਆਂ ਮੁਲਾਕਾਤਾਂ ਦੇ ਆਧਾਰ ਤੇ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾ ਸਕਦੇ ਹਨ। ਇਸ਼ਤਿਹਾਰ Google ਚੁਣਦਾ ਹੈ — ਉਹ ਕਦੇ ਵੀ ਤੁਹਾਡੀ ਡਰਾਇੰਗ ਦੀ ਸਮੱਗਰੀ, ਫਾਈਲਾਂ ਦੇ ਨਾਮ ਜਾਂ ਐਪ ਵਿੱਚ ਬਣਾਈ ਕੋਈ ਚੀਜ਼ ਨਹੀਂ ਦੇਖਦੇ।' },
          { t: 'p', html: 'ਤੁਸੀਂ <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google ਇਸ਼ਤਿਹਾਰ ਸੈਟਿੰਗਾਂ</a> ਵਿੱਚ ਵਿਅਕਤੀਗਤ ਇਸ਼ਤਿਹਾਰ ਬੰਦ ਕਰ ਸਕਦੇ ਹੋ, ਜਾਂ <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> ਤੇ (ਯੂਰਪ ਵਿੱਚ <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a>) ਤੀਜੀ-ਧਿਰ ਦੀਆਂ ਇਸ਼ਤਿਹਾਰੀ ਕੂਕੀਜ਼ ਨੂੰ ਵਿਆਪਕ ਤੌਰ ਤੇ ਠੁਕਰਾ ਸਕਦੇ ਹੋ। Google ਆਪਣੇ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਣ ਵਾਲੀਆਂ ਸਾਈਟਾਂ ਦੇ ਡੇਟਾ ਨੂੰ ਕਿਵੇਂ ਵਰਤਦਾ ਹੈ, ਇਹ <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a> ਤੇ ਦੱਸਿਆ ਗਿਆ ਹੈ।' },
        ],
      },
      {
        h: 'ਕੂਕੀਜ਼ ਅਤੇ ਲੋਕਲ ਸਟੋਰੇਜ',
        blocks: [
          { t: 'p', html: 'ਦੋ ਕਿਸਮ ਦੀਆਂ ਕੂਕੀਜ਼ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। Google Analytics ਵੈੱਬਸਾਈਟ ਅਤੇ ਐਪ ਦੋਹਾਂ ਤੇ <code>_ga</code> ਅਤੇ <code>_ga_*</code> ਸੈੱਟ ਕਰਦਾ ਹੈ — ਇਹਨਾਂ ਵਿੱਚ ਇੱਕ ਬੇਤਰਤੀਬ ਪਛਾਣਕਰਤਾ ਹੁੰਦਾ ਹੈ ਜੋ ਬ੍ਰਾਊਜ਼ਰਾਂ ਵਿੱਚ ਫ਼ਰਕ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਦੁਬਾਰਾ ਮੁਲਾਕਾਤਾਂ ਨਵੇਂ ਮਹਿਮਾਨ ਵਜੋਂ ਨਾ ਗਿਣੀਆਂ ਜਾਣ; ਇਹ ਵੱਧ ਤੋਂ ਵੱਧ ਦੋ ਸਾਲਾਂ ਵਿੱਚ ਮਿਆਦ ਪੁੱਗ ਜਾਂਦੀਆਂ ਹਨ ਅਤੇ ਤੁਹਾਡੀ ਨਿੱਜੀ ਪਛਾਣ ਲਈ ਵਰਤੀਆਂ ਨਹੀਂ ਜਾ ਸਕਦੀਆਂ। ਐਪ ਵਿੱਚ, ਜਿਵੇਂ ਉੱਪਰ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਭਾਗ ਵਿੱਚ ਦੱਸਿਆ ਗਿਆ ਹੈ, Google AdSense ਅਤੇ ਉਸਦੇ ਇਸ਼ਤਿਹਾਰੀ ਸਾਥੀ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਣ ਅਤੇ ਮਾਪਣ ਲਈ ਵਾਧੂ ਇਸ਼ਤਿਹਾਰੀ ਕੂਕੀਜ਼ ਸੈੱਟ ਕਰਦੇ ਹਨ। ਕੋਈ ਸੋਸ਼ਲ-ਮੀਡੀਆ ਕੂਕੀਜ਼ ਨਹੀਂ ਹਨ, ਅਤੇ ਵੈੱਬਸਾਈਟ ਖ਼ੁਦ ਕੋਈ ਇਸ਼ਤਿਹਾਰੀ ਕੂਕੀਜ਼ ਸੈੱਟ ਨਹੀਂ ਕਰਦੀ।' },
          { t: 'p', html: 'ਇਸ ਤੋਂ ਇਲਾਵਾ, ਵੈੱਬਸਾਈਟ ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਦੀ ਪਸੰਦ ਯਾਦ ਰੱਖਦੀ ਹੈ ਅਤੇ ਐਪ ਤੁਹਾਡੀਆਂ ਡਰਾਇੰਗਾਂ ਤੇ ਅਨਡੂ ਇਤਿਹਾਸ ਬ੍ਰਾਊਜ਼ਰ ਦੇ ਲੋਕਲ ਸਟੋਰੇਜ ਵਿੱਚ ਰੱਖਦੀ ਹੈ। ਇਹ ਡੇਟਾ ਕਦੇ ਵੀ ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਤੋਂ ਬਾਹਰ ਨਹੀਂ ਜਾਂਦਾ।' },
        ],
      },
      {
        h: 'ਤੀਜੀ-ਧਿਰ ਦੀਆਂ ਸੇਵਾਵਾਂ',
        blocks: [
          { t: 'p', html: 'Google Analytics ਅਤੇ Google AdSense ਤੋਂ ਇਲਾਵਾ, KulmanLab ਦੋ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਸੇਵਾਵਾਂ ਤੇ ਨਿਰਭਰ ਹੈ:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — Inter ਫੌਂਟ Google ਦੇ ਸਰਵਰਾਂ ਤੋਂ ਲੋਡ ਹੁੰਦਾ ਹੈ। ਫੌਂਟ ਫਾਈਲਾਂ ਲੈਣ ਲਈ ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ Google ਨੂੰ ਇੱਕ ਮਿਆਰੀ ਵੈੱਬ ਬੇਨਤੀ (ਤੁਹਾਡੇ IP ਪਤੇ ਸਮੇਤ) ਭੇਜਦਾ ਹੈ।',
            '<strong>Firebase Hosting (Google)</strong> — ਇਹ ਵੈੱਬਸਾਈਟ ਅਤੇ ਐਪ ਪਰੋਸਦਾ ਹੈ। ਕਿਸੇ ਵੀ ਵੈੱਬ ਸਰਵਰ ਵਾਂਗ, ਪੰਨੇ ਪਹੁੰਚਾਉਣ ਲਈ ਇਹ ਮਿਆਰੀ ਬੇਨਤੀ ਲੌਗ (IP ਪਤਾ, ਬੇਨਤੀ ਕੀਤਾ URL, ਯੂਜ਼ਰ ਏਜੰਟ) ਪ੍ਰੋਸੈਸ ਕਰਦਾ ਹੈ।',
          ] },
        ],
      },
      {
        h: 'ਤੁਹਾਡੇ ਵਿਕਲਪ',
        blocks: [
          { t: 'p', html: 'ਜੇ ਤੁਸੀਂ ਵਿਸ਼ਲੇਸ਼ਣ ਵਿੱਚ ਗਿਣੇ ਨਹੀਂ ਜਾਣਾ ਚਾਹੁੰਦੇ, ਤਾਂ ਤੁਸੀਂ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ Google Analytics ਕੂਕੀਜ਼ ਬਲੌਕ ਕਰ ਸਕਦੇ ਹੋ, ਕੋਈ ਕੰਟੈਂਟ ਬਲੌਕਰ ਵਰਤ ਸਕਦੇ ਹੋ, ਜਾਂ <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics ਔਪਟ-ਆਊਟ ਐਡ-ਆਨ</a> ਇੰਸਟਾਲ ਕਰ ਸਕਦੇ ਹੋ। ਵਿਸ਼ਲੇਸ਼ਣ ਤੋਂ ਬਿਨਾਂ ਵੀ ਵੈੱਬਸਾਈਟ ਅਤੇ ਐਪ ਬਿਲਕੁਲ ਉਸੇ ਤਰ੍ਹਾਂ ਕੰਮ ਕਰਦੀਆਂ ਹਨ।' },
          { t: 'p', html: 'ਇਸ਼ਤਿਹਾਰਾਂ ਲਈ, ਤੁਸੀਂ <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google ਇਸ਼ਤਿਹਾਰ ਸੈਟਿੰਗਾਂ</a> ਵਿੱਚ ਇਸ਼ਤਿਹਾਰ ਵਿਅਕਤੀਗਤਕਰਨ ਬੰਦ ਕਰ ਸਕਦੇ ਹੋ — ਐਪ ਵਿੱਚ ਇਸ਼ਤਿਹਾਰ ਫਿਰ ਵੀ ਦਿਸਣਗੇ, ਪਰ ਉਹ ਤੁਹਾਡੀਆਂ ਦਿਲਚਸਪੀਆਂ ਜਾਂ ਬ੍ਰਾਊਜ਼ਿੰਗ ਇਤਿਹਾਸ ਤੇ ਆਧਾਰਿਤ ਨਹੀਂ ਹੋਣਗੇ।' },
        ],
      },
      {
        h: 'ਇਸ ਨੀਤੀ ਵਿੱਚ ਬਦਲਾਅ',
        blocks: [
          { t: 'p', html: 'ਜੇ ਸਾਡੇ ਡੇਟਾ ਅਭਿਆਸ ਬਦਲਦੇ ਹਨ — ਮਿਸਾਲ ਵਜੋਂ, ਕੋਈ ਨਵੀਂ ਤੀਜੀ-ਧਿਰ ਸੇਵਾ ਜੁੜਦੀ ਹੈ — ਤਾਂ ਇਹ ਪੰਨਾ ਅੱਪਡੇਟ ਕੀਤਾ ਜਾਵੇਗਾ ਅਤੇ ਉੱਪਰਲੀ ਤਾਰੀਖ਼ ਸੋਧੀ ਜਾਵੇਗੀ।' },
        ],
      },
      {
        h: 'ਸੰਪਰਕ',
        blocks: [
          { t: 'p', html: 'ਪਰਦੇਦਾਰੀ ਬਾਰੇ ਸਵਾਲ? <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> ਤੇ ਇੱਕ issue ਖੋਲ੍ਹੋ ਜਾਂ <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit ਭਾਈਚਾਰੇ</a> ਵਿੱਚ ਪੁੱਛੋ।' },
        ],
      },
    ],
  },

  sv: {
    title: 'Integritetspolicy — KulmanLab',
    desc: 'Hur KulmanLab hanterar dina data: ritningar stannar på din enhet, inga konton. Google Analytics för anonym användningsstatistik; annonser i appen via Google AdSense.',
    heading: 'Integritetspolicy',
    updated: 'Senast uppdaterad: 14 juli 2026',
    summaryHeading: 'Den korta versionen',
    summary: [
      'Dina ritningar lagras i din webbläsare och lämnar aldrig din enhet. Allt ditt arbete tillhör dig.',
      'Det finns inga konton, ingen registrering och ingen e-post. Vi vet inte vem du är.',
      'Vi använder Google Analytics för att räkna besök och förstå vilka funktioner som används. Det ser aldrig innehållet i dina ritningar.',
      'Appen är gratis och finansieras av annonser (Google AdSense). Dina ritningar används aldrig för reklam, och vi säljer aldrig dina data.',
    ],
    sections: [
      {
        h: 'Dina ritningar stannar på din enhet',
        blocks: [
          { t: 'p', html: 'Allt du ritar i KulmanLab CAD sparas i webbläsarens lokala lagring (IndexedDB) på din egen enhet. Ritningar laddas aldrig upp, skickas aldrig och lagras aldrig på någon server. Efter den första inläsningen fungerar appen helt offline — ingen server är inblandad när du öppnar, redigerar eller sparar dina filer.' },
          { t: 'p', html: 'Eftersom dina filer bara finns i din webbläsare har du full kontroll över dem. Du kan ta bort enskilda ritningar i <a href="/sv/docs/commands/files/">filpanelen</a>, radera allt på en gång med kommandot <a href="/sv/docs/commands/wipestorage/">wipestorage</a>, eller rensa webbplatsdata i webbläsarens inställningar. Vi kan inte komma åt, återställa eller ta bort dina filer åt dig — vi har dem aldrig.' },
        ],
      },
      {
        h: 'Inga konton, inga personuppgifter',
        blocks: [
          { t: 'p', html: 'KulmanLab har ingen inloggning, ingen registrering och ingen insamling av e-post. Vi samlar inte in ditt namn, din e-postadress eller någon annan information som identifierar dig personligen — och vi har inget att sälja eller dela.' },
        ],
      },
      {
        h: 'Statistik',
        blocks: [
          { t: 'p', html: 'Den här webbplatsen (kulmanlab.com) och appen (app.kulmanlab.com) använder <strong>Google Analytics 4</strong> för att samla in anonym användningsstatistik. Det visar oss t.ex. hur många som besöker oss, vilka sidor de läser, vilket land de befinner sig i (ungefärligt, härlett från IP-adressen — Google Analytics 4 lagrar inte IP-adresser) och vilken webbläsare och enhetstyp de använder.' },
          { t: 'p', html: 'På webbplatsen registrerar vi också några anonyma interaktionshändelser:' },
          { t: 'ul', items: [
            'klick på "Starta appen" och liknande knappar,',
            'klick på utgående länkar (länkens måladress),',
            'hur långt ner du skrollar på en sida och vilket gränssnittsspråk du använder.',
          ] },
          { t: 'p', html: 'Inget av detta innehåller dina ritningars innehåll, filnamn eller något du skapar i appen. Statistikdata behandlas av Google enligt <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Googles integritetspolicy</a>.' },
        ],
      },
      {
        h: 'Annonser',
        blocks: [
          { t: 'p', html: 'Appen (app.kulmanlab.com) är gratis att använda och finansieras av annonser som visas via <strong>Google AdSense</strong>. Den här webbplatsen (kulmanlab.com) visar inga annonser.' },
          { t: 'p', html: 'Tredjepartsleverantörer, däribland Google, använder cookies för att visa annonser baserat på dina tidigare besök på den här eller andra webbplatser. Googles användning av annonscookies gör att Google och dess partner kan visa dig annonser baserat på dina besök i appen och/eller på andra webbplatser på Internet. Annonserna väljs av Google — de ser aldrig dina ritningars innehåll, filnamn eller något du skapar i appen.' },
          { t: 'p', html: 'Du kan stänga av personanpassade annonser i <a href="https://adssettings.google.com" target="_blank" rel="noopener">Googles annonsinställningar</a>, eller välja bort tredjeparts annonscookies mer generellt på <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (eller <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> i Europa). Hur Google använder data från webbplatser som visar dess annonser beskrivs på <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookies och lokal lagring',
        blocks: [
          { t: 'p', html: 'Två sorters cookies används. Google Analytics sätter <code>_ga</code> och <code>_ga_*</code> på både webbplatsen och i appen — de innehåller en slumpmässig identifierare som skiljer webbläsare åt så att återkommande besök inte räknas som nya besökare; de går ut efter högst två år och kan inte användas för att identifiera dig personligen. I appen sätter Google AdSense och dess annonspartner ytterligare annonscookies för att visa och mäta annonser, som beskrivs i avsnittet Annonser ovan. Det finns inga cookies från sociala medier, och webbplatsen i sig sätter inga annonscookies.' },
          { t: 'p', html: 'Dessutom kommer webbplatsen ihåg ditt språkval och appen lagrar dina ritningar och ångra-historik i webbläsarens lokala lagring. Dessa data lämnar aldrig din enhet.' },
        ],
      },
      {
        h: 'Tredjepartstjänster',
        blocks: [
          { t: 'p', html: 'Förutom Google Analytics och Google AdSense förlitar sig KulmanLab på två infrastrukturtjänster:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — typsnittet Inter läses in från Googles servrar. Din webbläsare skickar en vanlig webbförfrågan (som innehåller din IP-adress) till Google för att hämta typsnittsfilerna.',
            '<strong>Firebase Hosting (Google)</strong> — levererar den här webbplatsen och appen. Som alla webbservrar behandlar den standardloggar för förfrågningar (IP-adress, begärd URL, user agent) för att leverera sidorna.',
          ] },
        ],
      },
      {
        h: 'Dina val',
        blocks: [
          { t: 'p', html: 'Om du inte vill räknas i statistiken kan du blockera Google Analytics-cookies i din webbläsare, använda en innehållsblockerare eller installera <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Googles Analytics-avaktiveringstillägg</a>. Webbplatsen och appen fungerar exakt likadant utan statistik.' },
          { t: 'p', html: 'För annonser kan du stänga av annonsanpassning i <a href="https://adssettings.google.com" target="_blank" rel="noopener">Googles annonsinställningar</a> — du ser fortfarande annonser i appen, men de baseras inte på dina intressen eller din webbhistorik.' },
        ],
      },
      {
        h: 'Ändringar av denna policy',
        blocks: [
          { t: 'p', html: 'Om våra datarutiner ändras — till exempel om en ny tredjepartstjänst läggs till — uppdateras den här sidan och datumet högst upp revideras.' },
        ],
      },
      {
        h: 'Kontakt',
        blocks: [
          { t: 'p', html: 'Frågor om integritet? Öppna ett ärende på <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> eller fråga i <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit-communityn</a>.' },
        ],
      },
    ],
  },

  tl: {
    title: 'Patakaran sa Privacy — KulmanLab',
    desc: 'Paano hinahawakan ng KulmanLab ang iyong data: nananatili sa iyong device ang mga drawing, walang account. Google Analytics para sa anonymous na istatistika ng paggamit; mga ad sa app sa pamamagitan ng Google AdSense.',
    heading: 'Patakaran sa Privacy',
    updated: 'Huling na-update: Hulyo 14, 2026',
    summaryHeading: 'Ang maikling bersyon',
    summary: [
      'Ang iyong mga drawing ay nakaimbak sa iyong browser at hindi kailanman umaalis sa iyong device. Lahat ng iyong gawa ay pagmamay-ari mo.',
      'Walang account, walang pag-sign-up, at walang email. Hindi namin alam kung sino ka.',
      'Gumagamit kami ng Google Analytics para bilangin ang mga pagbisita at maunawaan kung aling mga feature ang ginagamit. Hindi nito kailanman nakikita ang nilalaman ng iyong mga drawing.',
      'Libre ang app at pinopondohan ng mga ad (Google AdSense). Hindi kailanman ginagamit ang iyong mga drawing para sa advertising, at hindi namin kailanman ibinebenta ang iyong data.',
    ],
    sections: [
      {
        h: 'Nananatili sa iyong device ang iyong mga drawing',
        blocks: [
          { t: 'p', html: 'Lahat ng iginuguhit mo sa KulmanLab CAD ay naka-save sa lokal na storage ng iyong browser (IndexedDB) sa sarili mong device. Hindi kailanman ina-upload, ipinapadala, o iniimbak ang mga drawing sa anumang server. Pagkatapos ng unang pag-load, ganap na gumagana ang app nang offline — walang server na kasangkot sa pagbubukas, pag-edit, o pag-save ng iyong mga file.' },
          { t: 'p', html: 'Dahil ang iyong mga file ay nasa browser mo lamang, ikaw ang may buong kontrol sa mga ito. Maaari mong burahin ang mga indibidwal na drawing mula sa <a href="/tl/docs/commands/files/">panel ng Files</a>, burahin ang lahat nang sabay-sabay gamit ang command na <a href="/tl/docs/commands/wipestorage/">wipestorage</a>, o i-clear ang data ng site sa mga setting ng browser. Hindi namin maaaring ma-access, maibalik, o mabura ang iyong mga file para sa iyo — hindi kailanman napupunta sa amin ang mga ito.' },
        ],
      },
      {
        h: 'Walang account, walang personal na data',
        blocks: [
          { t: 'p', html: 'Walang login, walang rehistrasyon, at walang pagkolekta ng email ang KulmanLab. Hindi namin kinokolekta ang iyong pangalan, email address, o anumang iba pang impormasyong makakapagpakilala sa iyo — at wala kaming anumang maibebenta o maibabahagi.' },
        ],
      },
      {
        h: 'Analytics',
        blocks: [
          { t: 'p', html: 'Ang website na ito (kulmanlab.com) at ang app (app.kulmanlab.com) ay gumagamit ng <strong>Google Analytics 4</strong> para mangolekta ng anonymous na istatistika ng paggamit. Sinasabi nito sa amin, halimbawa, kung ilang tao ang bumibisita, aling mga pahina ang binabasa nila, nasaang bansa sila (tinatantiya, hinango mula sa IP address — hindi nag-iimbak ng IP address ang Google Analytics 4), at anong browser at uri ng device ang ginagamit nila.' },
          { t: 'p', html: 'Sa website, nagtatala rin kami ng ilang anonymous na interaction event:' },
          { t: 'ul', items: [
            'mga pag-click sa "Ilunsad ang App" at katulad na mga button,',
            'mga pag-click sa palabas na link (ang patutunguhang address ng link),',
            'kung gaano kalayo ang pag-scroll mo sa pahina, at anong wika ng interface ang ginagamit mo.',
          ] },
          { t: 'p', html: 'Wala sa mga ito ang naglalaman ng nilalaman ng iyong mga drawing, mga pangalan ng file, o anumang ginawa mo sa app. Ang data ng analytics ay pinoproseso ng Google sa ilalim ng <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Patakaran sa Privacy ng Google</a>.' },
        ],
      },
      {
        h: 'Advertising',
        blocks: [
          { t: 'p', html: 'Libre ang app (app.kulmanlab.com) at pinopondohan ito ng mga ad na inihahatid sa pamamagitan ng <strong>Google AdSense</strong>. Hindi nagpapakita ng mga ad ang website na ito (kulmanlab.com).' },
          { t: 'p', html: 'Ang mga third-party vendor, kabilang ang Google, ay gumagamit ng cookies para maghatid ng mga ad batay sa iyong mga nakaraang pagbisita sa site na ito o sa ibang mga website. Ang paggamit ng Google ng advertising cookies ay nagbibigay-daan dito at sa mga partner nito na magpakita sa iyo ng mga ad batay sa iyong mga pagbisita sa app at/o sa iba pang mga site sa Internet. Ang mga ad ay pinipili ng Google — hindi nila kailanman nakikita ang nilalaman ng iyong mga drawing, mga pangalan ng file, o anumang ginawa mo sa app.' },
          { t: 'p', html: 'Maaari mong i-off ang personalized na advertising sa <a href="https://adssettings.google.com" target="_blank" rel="noopener">Mga Setting ng Ad ng Google</a>, o tanggihan ang third-party na advertising cookies nang mas malawak sa <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener">aboutads.info</a> (o <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener">youronlinechoices.eu</a> sa Europa). Kung paano ginagamit ng Google ang data mula sa mga site na nagpapakita ng mga ad nito ay inilalarawan sa <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.' },
        ],
      },
      {
        h: 'Cookies at lokal na storage',
        blocks: [
          { t: 'p', html: 'Dalawang uri ng cookies ang ginagamit. Ang Google Analytics ay nagtatakda ng <code>_ga</code> at <code>_ga_*</code> sa website at sa app — naglalaman ang mga ito ng random na identifier na nagpapaiba sa mga browser upang ang mga paulit-ulit na pagbisita ay hindi mabilang bilang mga bagong bisita; nag-e-expire ang mga ito pagkatapos ng hanggang dalawang taon at hindi magagamit para makilala ka nang personal. Sa app, ang Google AdSense at ang mga advertising partner nito ay nagtatakda ng karagdagang advertising cookies para maghatid at sumukat ng mga ad, gaya ng inilarawan sa seksyong Advertising sa itaas. Walang cookies ng social media, at ang website mismo ay hindi nagtatakda ng anumang advertising cookies.' },
          { t: 'p', html: 'Bukod pa rito, tinatandaan ng website ang iyong napiling wika at iniimbak ng app ang iyong mga drawing at undo history sa lokal na storage ng browser. Hindi kailanman umaalis sa iyong device ang data na ito.' },
        ],
      },
      {
        h: 'Mga serbisyo ng third party',
        blocks: [
          { t: 'p', html: 'Bukod sa Google Analytics at Google AdSense, umaasa ang KulmanLab sa dalawang serbisyo ng imprastraktura:' },
          { t: 'ul', items: [
            '<strong>Google Fonts</strong> — ang font na Inter ay niloload mula sa mga server ng Google. Nagpapadala ang iyong browser ng karaniwang web request (kasama ang iyong IP address) sa Google para kunin ang mga file ng font.',
            '<strong>Firebase Hosting (Google)</strong> — naghahatid ng website na ito at ng app. Tulad ng anumang web server, pinoproseso nito ang mga karaniwang log ng request (IP address, hiniling na URL, user agent) para maihatid ang mga pahina.',
          ] },
        ],
      },
      {
        h: 'Ang iyong mga pagpipilian',
        blocks: [
          { t: 'p', html: 'Kung ayaw mong mabilang sa analytics, maaari mong i-block ang mga cookie ng Google Analytics sa iyong browser, gumamit ng content blocker, o i-install ang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics opt-out add-on</a>. Eksaktong pareho ang paggana ng website at app kahit walang analytics.' },
          { t: 'p', html: 'Para sa advertising, maaari mong i-off ang ad personalization sa <a href="https://adssettings.google.com" target="_blank" rel="noopener">Mga Setting ng Ad ng Google</a> — makikita mo pa rin ang mga ad sa app, ngunit hindi na ang mga ito nakabatay sa iyong mga interes o browsing history.' },
        ],
      },
      {
        h: 'Mga pagbabago sa patakarang ito',
        blocks: [
          { t: 'p', html: 'Kung magbago ang aming mga gawi sa data — halimbawa, kung may idagdag na bagong serbisyo ng third party — ia-update ang pahinang ito at rerebisahin ang petsa sa itaas.' },
        ],
      },
      {
        h: 'Makipag-ugnayan',
        blocks: [
          { t: 'p', html: 'May mga tanong tungkol sa privacy? Magbukas ng issue sa <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> o magtanong sa <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">komunidad sa Reddit</a>.' },
        ],
      },
    ],
  },

  nl: {
    title: 'Privacybeleid — KulmanLab',
    desc: 'Hoe KulmanLab met uw gegevens omgaat: tekeningen blijven op uw apparaat, geen accounts. Google Analytics voor anonieme gebruiksstatistieken; advertenties in de app via Google AdSense.',
    heading: 'Privacybeleid',
    updated: 'Laatst bijgewerkt: 14 juli 2026',
    summaryHeading: 'De korte versie',
    summary: [
      'Uw tekeningen worden opgeslagen in uw browser en verlaten nooit uw apparaat. Al uw werk is van u.',
      'Er zijn geen accounts, geen registratie en geen e-mail. Wij weten niet wie u bent.',
      'Wij gebruiken Google Analytics om bezoeken te tellen en te begrijpen welke functies worden gebruikt. Het ziet nooit de inhoud van uw tekeningen.',
      'De app is gratis en wordt gefinancierd door advertenties (Google AdSense). Uw tekeningen worden nooit gebruikt voor reclame, en wij verkopen nooit uw gegevens.',
    ],
    sections: [
      {
        h: 'Uw tekeningen blijven op uw apparaat',
        blocks: [
          { t: 'p', html: "Alles wat u tekent in KulmanLab CAD wordt opgeslagen in de lokale opslag (IndexedDB) van uw browser, op uw eigen apparaat. Tekeningen worden nooit geüpload, verzonden of op een server opgeslagen. Na de eerste keer laden werkt de app volledig offline — er is geen server betrokken bij het openen, bewerken of opslaan van uw bestanden." },
          { t: 'p', html: 'Omdat uw bestanden alleen in uw browser bestaan, heeft u er volledige controle over. U kunt individuele tekeningen verwijderen via het <a href="/nl/docs/commands/files/">Bestanden-paneel</a>, alles in één keer wissen met het commando <a href="/nl/docs/commands/wipestorage/">wipestorage</a>, of de sitegegevens wissen in uw browserinstellingen. Wij kunnen uw bestanden niet voor u benaderen, herstellen of verwijderen — wij hebben ze nooit gehad.' },
        ],
      },
      {
        h: 'Geen accounts, geen persoonsgegevens',
        blocks: [
          { t: 'p', html: 'KulmanLab heeft geen login, geen registratie en verzamelt geen e-mailadressen. Wij verzamelen uw naam, e-mailadres of andere informatie die u persoonlijk identificeert niet, en wij hebben niets te verkopen of te delen.' },
        ],
      },
      {
        h: 'Analytics',
        blocks: [
          { t: 'p', html: 'Deze website (kulmanlab.com) en de app (app.kulmanlab.com) gebruiken <strong>Google Analytics 4</strong> om anonieme gebruiksstatistieken te verzamelen. Dit vertelt ons bijvoorbeeld hoeveel mensen ons bezoeken, welke pagina\'s ze lezen, in welk land ze zich bevinden (bij benadering, afgeleid van het IP-adres — Google Analytics 4 slaat geen IP-adressen op), en welke browser en apparaattype ze gebruiken.' },
          { t: 'p', html: 'Op de website registreren wij ook enkele anonieme interactiegebeurtenissen:' },
          { t: 'ul', items: [
            'klikken op "App starten" en soortgelijke knoppen,',
            'klikken op uitgaande links (het bestemmingsadres van de link),',
            'hoever u naar beneden scrollt op een pagina, en de interfacetaal die u gebruikt.',
          ] },
          { t: 'p', html: 'Niets hiervan omvat de inhoud van uw tekeningen, bestandsnamen, of iets anders dat u in de app maakt. Analytics-gegevens worden door Google verwerkt onder het <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacybeleid van Google</a>.' },
        ],
      },
      {
        h: 'Adverteren',
        blocks: [
          { t: 'p', html: 'De app (app.kulmanlab.com) is gratis te gebruiken en wordt gefinancierd door advertenties die via <strong>Google AdSense</strong> worden weergegeven. Deze website (kulmanlab.com) toont geen advertenties.' },
          { t: 'p', html: "Externe leveranciers, waaronder Google, gebruiken cookies om advertenties te tonen op basis van uw eerdere bezoeken aan deze of andere websites. Het gebruik van advertentiecookies door Google stelt Google en zijn partners in staat u advertenties te tonen op basis van uw bezoeken aan de app en/of andere sites op internet. Advertenties worden door Google geselecteerd — ze zien nooit de inhoud van uw tekeningen, bestandsnamen, of iets anders dat u in de app maakt." },
          { t: 'p', html: "U kunt gepersonaliseerde advertenties uitschakelen in de <a href=\"https://adssettings.google.com\" target=\"_blank\" rel=\"noopener\">advertentie-instellingen van Google</a>, of breder afzien van externe advertentiecookies via <a href=\"https://www.aboutads.info/choices\" target=\"_blank\" rel=\"noopener\">aboutads.info</a> (of <a href=\"https://www.youronlinechoices.eu\" target=\"_blank\" rel=\"noopener\">youronlinechoices.eu</a> in Europa). Hoe Google gegevens gebruikt van sites die zijn advertenties tonen, wordt beschreven op <a href=\"https://policies.google.com/technologies/partner-sites\" target=\"_blank\" rel=\"noopener\">policies.google.com/technologies/partner-sites</a>." },
        ],
      },
      {
        h: 'Cookies en lokale opslag',
        blocks: [
          { t: 'p', html: 'Er worden twee soorten cookies gebruikt. Google Analytics plaatst <code>_ga</code> en <code>_ga_*</code> op zowel de website als de app — deze bevatten een willekeurige identificatiecode die browsers onderscheidt, zodat herhaalde bezoeken niet als nieuwe bezoekers worden geteld, verlopen na maximaal twee jaar en kunnen niet worden gebruikt om u persoonlijk te identificeren. In de app plaatsen Google AdSense en zijn advertentiepartners aanvullende advertentiecookies om advertenties te tonen en te meten, zoals beschreven in de sectie Adverteren hierboven. Er zijn geen sociale-mediacookies, en de website zelf plaatst geen advertentiecookies.' },
          { t: 'p', html: 'Daarnaast onthoudt de website uw taalvoorkeur en slaat de app uw tekeningen en ongedaanmaakgeschiedenis op in de lokale opslag van de browser. Deze gegevens verlaten nooit uw apparaat.' },
        ],
      },
      {
        h: 'Diensten van derden',
        blocks: [
          { t: 'p', html: 'Naast Google Analytics en Google AdSense vertrouwt KulmanLab op twee infrastructuurdiensten:' },
          { t: 'ul', items: [
            "<strong>Google Fonts</strong> — het lettertype Inter wordt geladen vanaf de servers van Google. Uw browser stuurt een standaard webverzoek (inclusief uw IP-adres) naar Google om de lettertypebestanden op te halen.",
            '<strong>Firebase Hosting (Google)</strong> — levert deze website en de app. Zoals elke webserver verwerkt het standaard verzoeklogs (IP-adres, opgevraagde URL, user agent) om de pagina\'s te leveren.',
          ] },
        ],
      },
      {
        h: 'Uw keuzes',
        blocks: [
          { t: 'p', html: 'Als u liever niet meetelt in de statistieken, kunt u de Google Analytics-cookies in uw browser blokkeren, een contentblocker gebruiken, of de <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics-opt-outadd-on</a> installeren. De website en de app werken precies hetzelfde zonder analytics.' },
          { t: 'p', html: 'Voor advertenties kunt u advertentiepersonalisatie uitschakelen in de <a href="https://adssettings.google.com" target="_blank" rel="noopener">advertentie-instellingen van Google</a> — u ziet nog steeds advertenties in de app, maar deze zijn niet gebaseerd op uw interesses of browsegeschiedenis.' },
        ],
      },
      {
        h: 'Wijzigingen in dit beleid',
        blocks: [
          { t: 'p', html: 'Als onze gegevenspraktijken veranderen — bijvoorbeeld als er een nieuwe externe dienst wordt toegevoegd — wordt deze pagina bijgewerkt en de datum bovenaan herzien.' },
        ],
      },
      {
        h: 'Contact',
        blocks: [
          { t: 'p', html: 'Vragen over privacy? Open een issue op <a href="https://github.com/volodymyr4509/kulmanlab/issues" target="_blank" rel="noopener">GitHub</a> of vraag het in de <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">Reddit-community</a>.' },
        ],
      },
    ],
  },
};
