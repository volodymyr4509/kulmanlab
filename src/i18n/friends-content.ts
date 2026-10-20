import type { AboutContent, AboutSection } from './about-content';

export type FriendSection = AboutSection & { icon: string };
export type FriendsContent = Omit<AboutContent, 'sections'> & { sections: FriendSection[] };

// Friends: other small apps worth a look. Paragraphs may contain <a>, styled by the page wrapper.
export const friendsContent: Record<string, FriendsContent> = {
  en: {
    title: "Friends of KulmanLab — apps we like",
    desc: "Other small apps from friends of KulmanLab: Screenshot Bro for App Store screenshots and Captions Bro for video captions.",
    heading: "Friends",
    subtitle: "Other apps from friends of KulmanLab, worth a look.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["A native app for Mac, iPad and iPhone that creates App Store and Google Play screenshots, localizes them into 81 languages and exports every device size — for app developers who would rather not redo screenshots by hand.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["A video editor for iPhone, iPad and Mac that transcribes speech on the device and adds animated karaoke-style captions, with a multi-track timeline and a teleprompter — made for short-form creators on TikTok, Instagram Reels and YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  ar: {
    title: "أصدقاء KulmanLab — تطبيقات نحبها",
    desc: "تطبيقات صغيرة أخرى من أصدقاء KulmanLab: Screenshot Bro للقطات شاشة App Store وCaptions Bro لترجمات الفيديو.",
    heading: "أصدقاء",
    subtitle: "تطبيقات أخرى من أصدقاء KulmanLab تستحق النظر.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["تطبيق أصلي لأجهزة Mac وiPad وiPhone يُنشئ لقطات شاشة App Store وGoogle Play ويترجمها إلى 81 لغة ويصدّر كل أحجام الأجهزة — لمطوري التطبيقات الذين يفضلون ألا يعيدوا اللقطات يدويًا.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["محرر فيديو لأجهزة iPhone وiPad وMac ينسخ الكلام على الجهاز ويضيف ترجمات متحركة بأسلوب الكاريوكي، مع مخطط زمني متعدد المسارات وملقّن نصي — مصمم لصنّاع المحتوى القصير على TikTok وInstagram Reels وYouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  bn: {
    title: "KulmanLab-এর বন্ধুরা — যে অ্যাপগুলো আমাদের ভালো লাগে",
    desc: "KulmanLab-এর বন্ধুদের আরও ছোট অ্যাপ: App Store স্ক্রিনশটের জন্য Screenshot Bro এবং ভিডিও ক্যাপশনের জন্য Captions Bro।",
    heading: "বন্ধুরা",
    subtitle: "KulmanLab-এর বন্ধুদের অন্যান্য অ্যাপ, দেখার মতো।",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Mac, iPad ও iPhone-এর একটি নেটিভ অ্যাপ যা App Store ও Google Play স্ক্রিনশট বানায়, ৮১টি ভাষায় লোকালাইজ করে এবং প্রতিটি ডিভাইস সাইজ এক্সপোর্ট করে — যে অ্যাপ ডেভেলপাররা হাতে স্ক্রিনশট আবার বানাতে চান না তাদের জন্য।", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhone, iPad ও Mac-এর একটি ভিডিও এডিটর যা ডিভাইসেই কথা ট্রান্সক্রাইব করে এবং অ্যানিমেটেড কারাওকে-স্টাইল ক্যাপশন যোগ করে, সঙ্গে মাল্টি-ট্র্যাক টাইমলাইন ও টেলিপ্রম্পটার — TikTok, Instagram Reels ও YouTube Shorts-এর শর্ট-ফর্ম ক্রিয়েটরদের জন্য।", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  cs: {
    title: "Přátelé KulmanLab — aplikace, které se nám líbí",
    desc: "Další malé aplikace od přátel KulmanLab: Screenshot Bro pro snímky obrazovky App Store a Captions Bro pro titulky videí.",
    heading: "Přátelé",
    subtitle: "Další aplikace od přátel KulmanLab, za pohled stojí.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Nativní aplikace pro Mac, iPad a iPhone, která vytváří snímky obrazovky pro App Store a Google Play, lokalizuje je do 81 jazyků a exportuje každou velikost zařízení — pro vývojáře aplikací, kteří nechtějí snímky předělávat ručně.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Video editor pro iPhone, iPad a Mac, který přepisuje řeč přímo v zařízení a přidává animované titulky ve stylu karaoke, s vícestopou časovou osou a teleprompterem — pro tvůrce krátkých videí na TikToku, Instagram Reels a YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  da: {
    title: "KulmanLabs venner — apps vi kan lide",
    desc: "Andre små apps fra venner af KulmanLab: Screenshot Bro til App Store-skærmbilleder og Captions Bro til videountertekster.",
    heading: "Venner",
    subtitle: "Andre apps fra venner af KulmanLab, værd at kigge på.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["En native app til Mac, iPad og iPhone, der laver App Store- og Google Play-skærmbilleder, lokaliserer dem til 81 sprog og eksporterer alle enhedsstørrelser — til app-udviklere, der helst ikke vil lave skærmbilleder om i hånden.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["En videoeditor til iPhone, iPad og Mac, der transskriberer tale på enheden og tilføjer animerede karaoke-agtige undertekster, med en tidslinje med flere spor og en teleprompter — lavet til skabere af korte videoer på TikTok, Instagram Reels og YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  de: {
    title: "Freunde von KulmanLab — Apps, die wir mögen",
    desc: "Weitere kleine Apps von Freunden von KulmanLab: Screenshot Bro für App-Store-Screenshots und Captions Bro für Video-Untertitel.",
    heading: "Freunde",
    subtitle: "Weitere Apps von Freunden von KulmanLab, einen Blick wert.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Eine native App für Mac, iPad und iPhone, die App-Store- und Google-Play-Screenshots erstellt, in 81 Sprachen lokalisiert und jede Gerätegröße exportiert — für App-Entwickler, die Screenshots nicht von Hand neu machen möchten.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Ein Videoeditor für iPhone, iPad und Mac, der Sprache auf dem Gerät transkribiert und animierte Karaoke-Untertitel hinzufügt, mit Mehrspur-Zeitleiste und Teleprompter — gemacht für Kurzvideo-Creator auf TikTok, Instagram Reels und YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  el: {
    title: "Φίλοι του KulmanLab — εφαρμογές που μας αρέσουν",
    desc: "Άλλες μικρές εφαρμογές από φίλους του KulmanLab: το Screenshot Bro για στιγμιότυπα App Store και το Captions Bro για υπότιτλους βίντεο.",
    heading: "Φίλοι",
    subtitle: "Άλλες εφαρμογές από φίλους του KulmanLab, που αξίζει να δείτε.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Μια εγγενής εφαρμογή για Mac, iPad και iPhone που δημιουργεί στιγμιότυπα για App Store και Google Play, τα προσαρμόζει σε 81 γλώσσες και εξάγει κάθε μέγεθος συσκευής — για προγραμματιστές εφαρμογών που προτιμούν να μην ξαναφτιάχνουν στιγμιότυπα με το χέρι.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Ένας επεξεργαστής βίντεο για iPhone, iPad και Mac που μεταγράφει την ομιλία στη συσκευή και προσθέτει κινούμενους υπότιτλους τύπου καραόκε, με χρονοδιάγραμμα πολλαπλών κομματιών και τηλεπρομπτέρ — για δημιουργούς σύντομων βίντεο σε TikTok, Instagram Reels και YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  es: {
    title: "Amigos de KulmanLab — apps que nos gustan",
    desc: "Otras apps pequeñas de amigos de KulmanLab: Screenshot Bro para capturas del App Store y Captions Bro para subtítulos de vídeo.",
    heading: "Amigos",
    subtitle: "Otras apps de amigos de KulmanLab que merece la pena ver.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Una app nativa para Mac, iPad y iPhone que crea capturas para App Store y Google Play, las localiza en 81 idiomas y exporta cada tamaño de dispositivo — para desarrolladores que prefieren no rehacer las capturas a mano.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Un editor de vídeo para iPhone, iPad y Mac que transcribe el habla en el dispositivo y añade subtítulos animados al estilo karaoke, con línea de tiempo multipista y teleprompter — pensado para creadores de vídeos cortos en TikTok, Instagram Reels y YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  fi: {
    title: "KulmanLabin ystävät — sovelluksia, joista pidämme",
    desc: "Muita pieniä sovelluksia KulmanLabin ystäviltä: Screenshot Bro App Store -kuvakaappauksiin ja Captions Bro videotekstityksiin.",
    heading: "Ystävät",
    subtitle: "Muita KulmanLabin ystävien sovelluksia, jotka kannattaa katsoa.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Macille, iPadille ja iPhonelle tehty natiivisovellus, joka luo App Storen ja Google Playn kuvakaappaukset, lokalisoi ne 81 kielelle ja vie jokaisen laitekoon — sovelluskehittäjille, jotka eivät halua tehdä kuvakaappauksia käsin uudelleen.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhonelle, iPadille ja Macille tehty videoeditori, joka litteroi puheen laitteella ja lisää animoidut karaokemaiset tekstitykset, monikanavaisella aikajanalla ja kehotinlaitteella — tehty lyhytvideoiden tekijöille TikTokissa, Instagram Reelsissä ja YouTube Shortsissa.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  fr: {
    title: "Les amis de KulmanLab — des applis que nous aimons",
    desc: "D’autres petites applis d’amis de KulmanLab : Screenshot Bro pour les captures App Store et Captions Bro pour les sous-titres vidéo.",
    heading: "Amis",
    subtitle: "D’autres applis d’amis de KulmanLab, qui valent le coup d’œil.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Une appli native pour Mac, iPad et iPhone qui crée des captures pour l’App Store et Google Play, les localise en 81 langues et exporte chaque taille d’appareil — pour les développeurs d’applis qui préfèrent ne pas refaire leurs captures à la main.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Un éditeur vidéo pour iPhone, iPad et Mac qui transcrit la parole sur l’appareil et ajoute des sous-titres animés façon karaoké, avec une timeline multipiste et un téléprompteur — conçu pour les créateurs de vidéos courtes sur TikTok, Instagram Reels et YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  ha: {
    title: "Abokan KulmanLab — manhajoji da muke so",
    desc: "Wasu ƙananan manhajoji daga abokan KulmanLab: Screenshot Bro don hotunan allo na App Store da Captions Bro don rubutun bidiyo.",
    heading: "Abokai",
    subtitle: "Wasu manhajoji daga abokan KulmanLab, masu darajar dubawa.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Manhaja ta asali ga Mac, iPad da iPhone da ke ƙirƙirar hotunan allo na App Store da Google Play, tana fassara su zuwa harsuna 81 kuma tana fitar da kowane girman na'ura — ga masu haɓaka manhaja da ba sa son sake yin hotunan allo da hannu.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Editan bidiyo ga iPhone, iPad da Mac wanda ke rubuta magana a cikin na'ura kuma yana ƙara rubutu masu motsi irin na karaoke, tare da lokacin aiki mai waƙoƙi da yawa da teleprompter — an yi shi don masu ƙirƙirar gajerun bidiyo a TikTok, Instagram Reels da YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  he: {
    title: "חברי KulmanLab — אפליקציות שאנחנו אוהבים",
    desc: "אפליקציות קטנות נוספות מחברי KulmanLab: Screenshot Bro לצילומי מסך של App Store ו-Captions Bro לכתוביות וידאו.",
    heading: "חברים",
    subtitle: "אפליקציות נוספות מחברי KulmanLab ששווה להציץ בהן.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["אפליקציה מקורית ל-Mac, iPad ו-iPhone שיוצרת צילומי מסך ל-App Store ול-Google Play, מתרגמת אותם ל-81 שפות ומייצאת כל גודל מכשיר — למפתחי אפליקציות שמעדיפים לא לעשות צילומי מסך מחדש ביד.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["עורך וידאו ל-iPhone, iPad ו-Mac שמתמלל דיבור במכשיר ומוסיף כתוביות מונפשות בסגנון קריוקי, עם ציר זמן רב-ערוצי וטלפרומפטר — מיועד ליוצרי סרטונים קצרים ב-TikTok, Instagram Reels ו-YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  hi: {
    title: "KulmanLab के दोस्त — वे ऐप जो हमें पसंद हैं",
    desc: "KulmanLab के दोस्तों के और छोटे ऐप: App Store स्क्रीनशॉट के लिए Screenshot Bro और वीडियो कैप्शन के लिए Captions Bro।",
    heading: "दोस्त",
    subtitle: "KulmanLab के दोस्तों के अन्य ऐप, देखने लायक।",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Mac, iPad और iPhone के लिए एक नेटिव ऐप जो App Store और Google Play स्क्रीनशॉट बनाता है, उन्हें 81 भाषाओं में लोकलाइज़ करता है और हर डिवाइस साइज़ एक्सपोर्ट करता है — उन ऐप डेवलपर्स के लिए जो स्क्रीनशॉट हाथ से दोबारा नहीं बनाना चाहते।", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhone, iPad और Mac के लिए एक वीडियो एडिटर जो डिवाइस पर ही बोली को ट्रांसक्राइब करता है और एनिमेटेड कराओके-शैली के कैप्शन जोड़ता है, मल्टी-ट्रैक टाइमलाइन और टेलीप्रॉम्प्टर के साथ — TikTok, Instagram Reels और YouTube Shorts पर छोटे वीडियो बनाने वालों के लिए।", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  id: {
    title: "Teman KulmanLab — aplikasi yang kami suka",
    desc: "Aplikasi kecil lain dari teman KulmanLab: Screenshot Bro untuk tangkapan layar App Store dan Captions Bro untuk teks video.",
    heading: "Teman",
    subtitle: "Aplikasi lain dari teman KulmanLab yang layak dilihat.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Aplikasi native untuk Mac, iPad, dan iPhone yang membuat tangkapan layar App Store dan Google Play, melokalkannya ke 81 bahasa, dan mengekspor setiap ukuran perangkat — untuk pengembang aplikasi yang tidak ingin membuat ulang tangkapan layar secara manual.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Editor video untuk iPhone, iPad, dan Mac yang mentranskripsikan ucapan di perangkat dan menambahkan teks animasi bergaya karaoke, dengan lini masa multi-trek dan teleprompter — dibuat untuk kreator video pendek di TikTok, Instagram Reels, dan YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  it: {
    title: "Gli amici di KulmanLab — app che ci piacciono",
    desc: "Altre piccole app di amici di KulmanLab: Screenshot Bro per gli screenshot dell’App Store e Captions Bro per i sottotitoli dei video.",
    heading: "Amici",
    subtitle: "Altre app di amici di KulmanLab che vale la pena guardare.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Un’app nativa per Mac, iPad e iPhone che crea screenshot per App Store e Google Play, li localizza in 81 lingue ed esporta ogni dimensione di dispositivo — per sviluppatori di app che preferiscono non rifare gli screenshot a mano.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Un editor video per iPhone, iPad e Mac che trascrive il parlato sul dispositivo e aggiunge sottotitoli animati in stile karaoke, con timeline multitraccia e teleprompter — pensato per i creator di video brevi su TikTok, Instagram Reels e YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  ja: {
    title: "KulmanLab の友人たち — 私たちが気に入っているアプリ",
    desc: "KulmanLab の友人によるほかの小さなアプリ：App Store のスクリーンショット用の Screenshot Bro と、動画キャプション用の Captions Bro。",
    heading: "友人",
    subtitle: "KulmanLab の友人によるほかのアプリ、ぜひ見てみてください。",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Mac、iPad、iPhone 向けのネイティブアプリで、App Store と Google Play のスクリーンショットを作成し、81 言語にローカライズして、すべてのデバイスサイズを書き出します。スクリーンショットを手作業で作り直したくないアプリ開発者向けです。", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhone、iPad、Mac 向けの動画編集アプリで、音声をデバイス上で文字起こしし、カラオケ風のアニメーションキャプションを追加します。マルチトラックのタイムラインとテレプロンプターも備え、TikTok、Instagram Reels、YouTube Shorts のショート動画クリエイター向けです。", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  ko: {
    title: "KulmanLab의 친구들 — 우리가 좋아하는 앱",
    desc: "KulmanLab 친구들의 다른 작은 앱들: App Store 스크린샷용 Screenshot Bro와 영상 자막용 Captions Bro.",
    heading: "친구",
    subtitle: "KulmanLab 친구들의 다른 앱, 한번 살펴볼 만합니다.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Mac, iPad, iPhone용 네이티브 앱으로, App Store와 Google Play 스크린샷을 만들고 81개 언어로 현지화해 모든 기기 크기로 내보냅니다. 스크린샷을 손으로 다시 만들고 싶지 않은 앱 개발자를 위한 앱입니다.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhone, iPad, Mac용 영상 편집기로, 기기에서 음성을 받아 적고 노래방 스타일의 애니메이션 자막을 추가합니다. 멀티트랙 타임라인과 텔레프롬프터도 갖추고 있으며, TikTok, Instagram Reels, YouTube Shorts의 숏폼 크리에이터를 위해 만들어졌습니다.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  lt: {
    title: "KulmanLab draugai — programėlės, kurios mums patinka",
    desc: "Kitos mažos KulmanLab draugų programėlės: Screenshot Bro App Store ekrano nuotraukoms ir Captions Bro vaizdo įrašų subtitrams.",
    heading: "Draugai",
    subtitle: "Kitos KulmanLab draugų programėlės, vertos dėmesio.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Gimtoji programa, skirta „Mac“, „iPad“ ir „iPhone“, kuri kuria App Store ir Google Play ekrano nuotraukas, lokalizuoja jas į 81 kalbą ir eksportuoja kiekvieną įrenginio dydį — programų kūrėjams, kurie nenori ekrano nuotraukų perdaryti ranka.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Vaizdo įrašų redaktorius, skirtas „iPhone“, „iPad“ ir „Mac“, kuris įrenginyje transkribuoja kalbą ir prideda animuotus karaoke stiliaus subtitrus, su daugiakele laiko juosta ir teleprompteriu — sukurtas trumpų vaizdo įrašų kūrėjams „TikTok“, „Instagram Reels“ ir „YouTube Shorts“.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  ms: {
    title: "Rakan KulmanLab — aplikasi yang kami suka",
    desc: "Aplikasi kecil lain daripada rakan KulmanLab: Screenshot Bro untuk tangkapan skrin App Store dan Captions Bro untuk sari kata video.",
    heading: "Rakan",
    subtitle: "Aplikasi lain daripada rakan KulmanLab yang berbaloi dilihat.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Aplikasi natif untuk Mac, iPad dan iPhone yang mencipta tangkapan skrin App Store dan Google Play, menyetempatkannya ke 81 bahasa dan mengeksport setiap saiz peranti — untuk pembangun aplikasi yang tidak mahu membuat semula tangkapan skrin secara manual.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Penyunting video untuk iPhone, iPad dan Mac yang menyalin pertuturan pada peranti dan menambah sari kata beranimasi gaya karaoke, dengan garis masa berbilang trek dan teleprompter — dibuat untuk pencipta video pendek di TikTok, Instagram Reels dan YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  nl: {
    title: "Vrienden van KulmanLab — apps die we leuk vinden",
    desc: "Andere kleine apps van vrienden van KulmanLab: Screenshot Bro voor App Store-screenshots en Captions Bro voor videoondertitels.",
    heading: "Vrienden",
    subtitle: "Andere apps van vrienden van KulmanLab, het bekijken waard.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Een native app voor Mac, iPad en iPhone die App Store- en Google Play-screenshots maakt, in 81 talen lokaliseert en elk apparaatformaat exporteert — voor app-ontwikkelaars die screenshots liever niet met de hand opnieuw maken.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Een video-editor voor iPhone, iPad en Mac die spraak op het apparaat transcribeert en geanimeerde ondertitels in karaokestijl toevoegt, met een meersporen-tijdlijn en een teleprompter — gemaakt voor makers van korte video's op TikTok, Instagram Reels en YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  no: {
    title: "KulmanLabs venner — apper vi liker",
    desc: "Andre små apper fra venner av KulmanLab: Screenshot Bro for App Store-skjermbilder og Captions Bro for videountertekster.",
    heading: "Venner",
    subtitle: "Andre apper fra venner av KulmanLab, verdt å se på.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["En native app for Mac, iPad og iPhone som lager App Store- og Google Play-skjermbilder, lokaliserer dem til 81 språk og eksporterer alle enhetsstørrelser — for apputviklere som helst slipper å lage skjermbilder om for hånd.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["En videoredigerer for iPhone, iPad og Mac som transkriberer tale på enheten og legger til animerte karaokeaktige undertekster, med en tidslinje med flere spor og en teleprompter — laget for skapere av korte videoer på TikTok, Instagram Reels og YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  pa: {
    title: "KulmanLab ਦੇ ਦੋਸਤ — ਉਹ ਐਪਾਂ ਜੋ ਸਾਨੂੰ ਪਸੰਦ ਹਨ",
    desc: "KulmanLab ਦੇ ਦੋਸਤਾਂ ਦੀਆਂ ਹੋਰ ਛੋਟੀਆਂ ਐਪਾਂ: App Store ਸਕ੍ਰੀਨਸ਼ਾਟਾਂ ਲਈ Screenshot Bro ਅਤੇ ਵੀਡੀਓ ਕੈਪਸ਼ਨਾਂ ਲਈ Captions Bro।",
    heading: "ਦੋਸਤ",
    subtitle: "KulmanLab ਦੇ ਦੋਸਤਾਂ ਦੀਆਂ ਹੋਰ ਐਪਾਂ, ਵੇਖਣ ਯੋਗ।",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Mac, iPad ਅਤੇ iPhone ਲਈ ਇੱਕ ਨੇਟਿਵ ਐਪ ਜੋ App Store ਅਤੇ Google Play ਸਕ੍ਰੀਨਸ਼ਾਟ ਬਣਾਉਂਦੀ ਹੈ, ਉਹਨਾਂ ਨੂੰ 81 ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਲੋਕਲਾਈਜ਼ ਕਰਦੀ ਹੈ ਅਤੇ ਹਰ ਡਿਵਾਈਸ ਸਾਈਜ਼ ਐਕਸਪੋਰਟ ਕਰਦੀ ਹੈ — ਉਹਨਾਂ ਐਪ ਡਿਵੈਲਪਰਾਂ ਲਈ ਜੋ ਸਕ੍ਰੀਨਸ਼ਾਟ ਹੱਥੀਂ ਦੁਬਾਰਾ ਨਹੀਂ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ।", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhone, iPad ਅਤੇ Mac ਲਈ ਇੱਕ ਵੀਡੀਓ ਐਡੀਟਰ ਜੋ ਡਿਵਾਈਸ 'ਤੇ ਹੀ ਬੋਲੀ ਨੂੰ ਟ੍ਰਾਂਸਕ੍ਰਾਈਬ ਕਰਦਾ ਹੈ ਅਤੇ ਐਨੀਮੇਟਡ ਕਰਾਓਕੇ-ਸ਼ੈਲੀ ਦੇ ਕੈਪਸ਼ਨ ਜੋੜਦਾ ਹੈ, ਮਲਟੀ-ਟ੍ਰੈਕ ਟਾਈਮਲਾਈਨ ਅਤੇ ਟੈਲੀਪ੍ਰੌਂਪਟਰ ਨਾਲ — TikTok, Instagram Reels ਅਤੇ YouTube Shorts 'ਤੇ ਛੋਟੇ ਵੀਡੀਓ ਬਣਾਉਣ ਵਾਲਿਆਂ ਲਈ।", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  pl: {
    title: "Przyjaciele KulmanLab — aplikacje, które lubimy",
    desc: "Inne małe aplikacje przyjaciół KulmanLab: Screenshot Bro do zrzutów ekranu App Store i Captions Bro do napisów w wideo.",
    heading: "Przyjaciele",
    subtitle: "Inne aplikacje przyjaciół KulmanLab, warte uwagi.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Natywna aplikacja na Maca, iPada i iPhone’a, która tworzy zrzuty ekranu dla App Store i Google Play, lokalizuje je na 81 języków i eksportuje każdy rozmiar urządzenia — dla twórców aplikacji, którzy wolą nie robić zrzutów od nowa ręcznie.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Edytor wideo na iPhone’a, iPada i Maca, który transkrybuje mowę na urządzeniu i dodaje animowane napisy w stylu karaoke, z wielościeżkową osią czasu i teleprompterem — stworzony dla twórców krótkich filmów na TikToku, Instagram Reels i YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  pt: {
    title: "Amigos do KulmanLab — apps de que gostamos",
    desc: "Outros pequenos apps de amigos do KulmanLab: Screenshot Bro para capturas de tela da App Store e Captions Bro para legendas de vídeo.",
    heading: "Amigos",
    subtitle: "Outros apps de amigos do KulmanLab que vale a pena conhecer.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Um app nativo para Mac, iPad e iPhone que cria capturas de tela para App Store e Google Play, localiza-as em 81 idiomas e exporta cada tamanho de dispositivo — para desenvolvedores de apps que preferem não refazer as capturas à mão.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Um editor de vídeo para iPhone, iPad e Mac que transcreve a fala no dispositivo e adiciona legendas animadas no estilo karaokê, com linha do tempo multifaixa e teleprompter — feito para criadores de vídeos curtos no TikTok, Instagram Reels e YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  sv: {
    title: "KulmanLabs vänner — appar vi gillar",
    desc: "Andra små appar från vänner till KulmanLab: Screenshot Bro för App Store-skärmbilder och Captions Bro för videountertexter.",
    heading: "Vänner",
    subtitle: "Andra appar från vänner till KulmanLab, värda en titt.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["En inbyggd app för Mac, iPad och iPhone som skapar App Store- och Google Play-skärmbilder, lokaliserar dem till 81 språk och exporterar varje enhetsstorlek — för apputvecklare som helst slipper göra om skärmbilder för hand.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["En videoredigerare för iPhone, iPad och Mac som transkriberar tal på enheten och lägger till animerade karaokeliknande undertexter, med en tidslinje med flera spår och en teleprompter — gjord för skapare av korta videor på TikTok, Instagram Reels och YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  sw: {
    title: "Marafiki wa KulmanLab — programu tunazozipenda",
    desc: "Programu ndogo nyingine kutoka kwa marafiki wa KulmanLab: Screenshot Bro kwa picha za skrini za App Store na Captions Bro kwa manukuu ya video.",
    heading: "Marafiki",
    subtitle: "Programu nyingine kutoka kwa marafiki wa KulmanLab, zinazostahili kutazamwa.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Programu asilia ya Mac, iPad na iPhone inayounda picha za skrini za App Store na Google Play, kuzitafsiri kwa lugha 81 na kusafirisha kila ukubwa wa kifaa — kwa watengenezaji wa programu wasiopenda kutengeneza picha za skrini upya kwa mkono.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Kihariri cha video cha iPhone, iPad na Mac kinachonakili usemi kwenye kifaa na kuongeza manukuu yanayosogea ya mtindo wa karaoke, kikiwa na ratiba ya nyimbo nyingi na teleprompter — kimetengenezwa kwa waundaji wa video fupi kwenye TikTok, Instagram Reels na YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  th: {
    title: "เพื่อนของ KulmanLab — แอปที่เราชอบ",
    desc: "แอปเล็ก ๆ อื่นจากเพื่อนของ KulmanLab: Screenshot Bro สำหรับภาพหน้าจอ App Store และ Captions Bro สำหรับคำบรรยายวิดีโอ",
    heading: "เพื่อน",
    subtitle: "แอปอื่นจากเพื่อนของ KulmanLab ที่น่าลอง",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["แอปเนทีฟสำหรับ Mac, iPad และ iPhone ที่สร้างภาพหน้าจอ App Store และ Google Play แปลเป็น 81 ภาษา และส่งออกทุกขนาดอุปกรณ์ — สำหรับนักพัฒนาแอปที่ไม่อยากทำภาพหน้าจอใหม่ด้วยมือ", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["โปรแกรมตัดต่อวิดีโอสำหรับ iPhone, iPad และ Mac ที่ถอดเสียงพูดบนอุปกรณ์และเพิ่มคำบรรยายเคลื่อนไหวสไตล์คาราโอเกะ พร้อมไทม์ไลน์หลายแทร็กและเทเลพรอมเตอร์ — สร้างมาสำหรับครีเอเตอร์วิดีโอสั้นบน TikTok, Instagram Reels และ YouTube Shorts", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  tl: {
    title: "Mga kaibigan ng KulmanLab — mga app na gusto namin",
    desc: "Iba pang maliliit na app mula sa mga kaibigan ng KulmanLab: Screenshot Bro para sa mga screenshot ng App Store at Captions Bro para sa mga caption ng video.",
    heading: "Mga Kaibigan",
    subtitle: "Iba pang app mula sa mga kaibigan ng KulmanLab, sulit tingnan.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Isang native na app para sa Mac, iPad at iPhone na gumagawa ng mga screenshot ng App Store at Google Play, nilo-localize ang mga ito sa 81 wika at ine-export ang bawat laki ng device — para sa mga app developer na ayaw nang gawing muli ang mga screenshot nang mano-mano.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Isang video editor para sa iPhone, iPad at Mac na nagta-transcribe ng pagsasalita sa device at nagdaragdag ng animated na karaoke-style na mga caption, may multi-track na timeline at teleprompter — ginawa para sa mga gumagawa ng maiikling video sa TikTok, Instagram Reels at YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  tr: {
    title: "KulmanLab'ın dostları — sevdiğimiz uygulamalar",
    desc: "KulmanLab'ın dostlarından başka küçük uygulamalar: App Store ekran görüntüleri için Screenshot Bro ve video altyazıları için Captions Bro.",
    heading: "Dostlar",
    subtitle: "KulmanLab'ın dostlarından, göz atmaya değer başka uygulamalar.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Mac, iPad ve iPhone için App Store ve Google Play ekran görüntüleri oluşturan, bunları 81 dile yerelleştiren ve her cihaz boyutunu dışa aktaran yerel bir uygulama — ekran görüntülerini elle yeniden yapmak istemeyen uygulama geliştiricileri için.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhone, iPad ve Mac için konuşmayı cihaz üzerinde yazıya döken ve karaoke tarzı animasyonlu altyazılar ekleyen, çok kanallı zaman çizelgesi ve teleprompter içeren bir video düzenleyici — TikTok, Instagram Reels ve YouTube Shorts'ta kısa video üreten içerik üreticileri için.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  uk: {
    title: "Друзі KulmanLab — застосунки, які нам подобаються",
    desc: "Інші невеликі застосунки від друзів KulmanLab: Screenshot Bro для скриншотів App Store і Captions Bro для субтитрів до відео.",
    heading: "Друзі",
    subtitle: "Інші застосунки від друзів KulmanLab, на які варто глянути.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Рідний застосунок для Mac, iPad та iPhone, що створює скриншоти для App Store і Google Play, локалізує їх 81 мовою та експортує кожен розмір пристрою — для розробників застосунків, які не хочуть переробляти скриншоти вручну.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Відеоредактор для iPhone, iPad і Mac, що розпізнає мовлення на пристрої та додає анімовані субтитри в стилі караоке, з багатодоріжковою монтажною лінійкою і телесуфлером — створений для авторів коротких відео в TikTok, Instagram Reels і YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  ur: {
    title: "KulmanLab کے دوست — وہ ایپس جو ہمیں پسند ہیں",
    desc: "KulmanLab کے دوستوں کی دیگر چھوٹی ایپس: App Store اسکرین شاٹس کے لیے Screenshot Bro اور ویڈیو کیپشنز کے لیے Captions Bro۔",
    heading: "دوست",
    subtitle: "KulmanLab کے دوستوں کی دیگر ایپس، دیکھنے کے قابل۔",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Mac، iPad اور iPhone کے لیے ایک نیٹیو ایپ جو App Store اور Google Play اسکرین شاٹس بناتی ہے، انہیں 81 زبانوں میں لوکلائز کرتی ہے اور ہر ڈیوائس سائز ایکسپورٹ کرتی ہے — ان ایپ ڈویلپرز کے لیے جو اسکرین شاٹس ہاتھ سے دوبارہ نہیں بنانا چاہتے۔", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["iPhone، iPad اور Mac کے لیے ایک ویڈیو ایڈیٹر جو ڈیوائس پر ہی تقریر کو ٹرانسکرائب کرتا ہے اور اینیمیٹڈ کراؤکے طرز کے کیپشنز شامل کرتا ہے، ملٹی ٹریک ٹائم لائن اور ٹیلی پرامپٹر کے ساتھ — TikTok، Instagram Reels اور YouTube Shorts پر مختصر ویڈیوز بنانے والوں کے لیے۔", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  vi: {
    title: "Bạn bè của KulmanLab — những ứng dụng chúng tôi thích",
    desc: "Những ứng dụng nhỏ khác từ bạn bè của KulmanLab: Screenshot Bro cho ảnh chụp màn hình App Store và Captions Bro cho phụ đề video.",
    heading: "Bạn bè",
    subtitle: "Những ứng dụng khác từ bạn bè của KulmanLab, đáng để xem.",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["Ứng dụng gốc cho Mac, iPad và iPhone tạo ảnh chụp màn hình App Store và Google Play, bản địa hóa sang 81 ngôn ngữ và xuất mọi kích thước thiết bị — dành cho nhà phát triển ứng dụng không muốn làm lại ảnh chụp màn hình bằng tay.", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["Trình chỉnh sửa video cho iPhone, iPad và Mac, phiên âm giọng nói ngay trên thiết bị và thêm phụ đề hoạt hình kiểu karaoke, với dòng thời gian đa track và teleprompter — dành cho người làm video ngắn trên TikTok, Instagram Reels và YouTube Shorts.", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
  zh: {
    title: "KulmanLab 的朋友们 — 我们喜欢的应用",
    desc: "KulmanLab 朋友们的其他小应用：用于 App Store 截图的 Screenshot Bro，以及用于视频字幕的 Captions Bro。",
    heading: "朋友",
    subtitle: "KulmanLab 朋友们的其他应用，值得一看。",
    sections: [
      { h: 'Screenshot Bro', icon: '/images/friends/screenshot-bro.png', ps: ["一款适用于 Mac、iPad 和 iPhone 的原生应用，可制作 App Store 和 Google Play 截图，将其本地化为 81 种语言，并导出每种设备尺寸——适合不想手动重做截图的应用开发者。", "<a href=\"https://screenshotbro.app/\" target=\"_blank\" rel=\"noopener\">screenshotbro.app</a> · <a href=\"https://apps.apple.com/us/app/screenshot-bro-mockup-maker/id6760177675\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
      { h: 'Captions Bro', icon: '/images/friends/captions-bro.png', ps: ["一款适用于 iPhone、iPad 和 Mac 的视频编辑器，在设备上将语音转为文字，并添加卡拉 OK 风格的动态字幕，配有多轨时间线和提词器——专为 TikTok、Instagram Reels 和 YouTube Shorts 的短视频创作者打造。", "<a href=\"https://captionsbro.app/\" target=\"_blank\" rel=\"noopener\">captionsbro.app</a> · <a href=\"https://apps.apple.com/us/app/captions-bro-auto-subtitles/id6770987720\" target=\"_blank\" rel=\"noopener\">App Store</a>"] },
    ],
  },
};
