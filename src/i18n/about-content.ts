export type AboutSection = { h?: string; ps: string[] };
export type AboutContent = {
  title: string;
  desc: string;
  heading: string;
  subtitle: string;
  sections: AboutSection[];
};

// Paragraph strings may contain <a> and <em> — styled by the About page wrapper.
export const aboutContent: Record<string, AboutContent> = {
  en: {
    title: 'About KulmanLab — the story behind the free browser CAD',
    desc: 'KulmanLab is a one-person project: a civil engineer turned backend developer building the fast, free 2D CAD he always wanted. No accounts, no uploads, no servers.',
    heading: 'About KulmanLab',
    subtitle: 'A one-person project, built the slow way.',
    sections: [
      {
        ps: [
          "Hi, I'm Volodymyr, and I live in Ukraine. I'm a civil engineer by education — I spent years at the drafting board and in desktop CAD software before switching careers to backend software development. The engineering itch never went away, though. It eventually led me down the rabbit hole of CNC machines, and to building my own CO₂ laser cutter from scratch.",
          "That's where KulmanLab comes from: I kept needing a quick way to open a DXF file, clean it up, adjust a few lines, and send it to the machine — without launching heavyweight CAD software or signing up for yet another cloud service. So I started building my own tool. That was in 2023; it has been an evenings-and-weekends project ever since.",
        ],
      },
      {
        h: 'The name',
        ps: [
          'A <em>kulman</em> is what the classic drafting machine — the Kuhlmann drawing board — is called in the part of the world I come from. Generations of engineers learned to draw on one. KulmanLab is my attempt to keep that spirit in the browser.',
        ],
      },
      {
        h: 'What I believe a CAD tool should be',
        ps: [
          'Free, instant, and private. KulmanLab has no accounts, no uploads, and no server behind it — your drawings are processed and stored entirely on your own device, and the app keeps working offline. Nothing to install, nothing to subscribe to, nothing to hand over. The details are in the <a href="/privacy/">privacy policy</a>, which is short because there is genuinely little to tell.',
          'It is deliberately a focused tool: fast 2D drafting with a command terminal, layers, dimensions, and honest DXF import/export — not a replacement for a full desktop CAD suite. If you cut things on CNC or laser machines, or need quick technical sketches for a lab report, it was built with you in mind.',
        ],
      },
      {
        h: 'Under the hood',
        ps: [
          'KulmanLab is written in Angular on top of HTML5 Canvas, and comfortably handles drawings with 100,000+ objects. By far the hardest part has been the DXF format itself — parsing it is easy, writing files that every CAD editor will accept is a minefield of reverse-engineered splines and group codes.',
        ],
      },
      {
        h: 'Say hello',
        ps: [
          'Found a bug, missing a feature, or just want to show what you made? Open an issue on <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, join <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>, or write to me at <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. I read everything.',
        ],
      },
    ],
  },

  de: {
    title: 'Über KulmanLab — die Geschichte des kostenlosen CAD',
    desc: 'KulmanLab ist ein Ein-Personen-Projekt: ein Bauingenieur, der Backend-Entwickler wurde und das schnelle, kostenlose 2D-CAD baut, das er sich immer gewünscht hat. Keine Konten, keine Uploads, keine Server.',
    heading: 'Über KulmanLab',
    subtitle: 'Ein Ein-Personen-Projekt, in Ruhe gebaut.',
    sections: [
      {
        ps: [
          'Hallo, ich bin Volodymyr und lebe in der Ukraine. Ich bin Bauingenieur von der Ausbildung her — ich habe Jahre am Zeichenbrett und in Desktop-CAD-Software verbracht, bevor ich beruflich in die Backend-Softwareentwicklung gewechselt bin. Das Ingenieur-Fieber ist aber nie verschwunden. Es führte mich schließlich in den Kaninchenbau der CNC-Maschinen — und dazu, meinen eigenen CO₂-Lasercutter von Grund auf zu bauen.',
          'Daher kommt KulmanLab: Ich brauchte immer wieder einen schnellen Weg, eine DXF-Datei zu öffnen, aufzuräumen, ein paar Linien anzupassen und sie an die Maschine zu schicken — ohne schwergewichtige CAD-Software zu starten oder mich bei noch einem Cloud-Dienst zu registrieren. Also begann ich, mein eigenes Werkzeug zu bauen. Das war 2023; seitdem ist es ein Abende-und-Wochenenden-Projekt.',
        ],
      },
      {
        h: 'Der Name',
        ps: [
          'Ein <em>Kulman</em> — so nennt man die klassische Zeichenmaschine, das Kuhlmann-Zeichenbrett, in der Gegend, aus der ich komme. Generationen von Ingenieuren haben daran das Zeichnen gelernt. KulmanLab ist mein Versuch, diesen Geist im Browser zu bewahren.',
        ],
      },
      {
        h: 'Was ein CAD-Werkzeug meiner Meinung nach sein sollte',
        ps: [
          'Kostenlos, sofort verfügbar und privat. KulmanLab hat keine Konten, keine Uploads und keinen Server dahinter — Ihre Zeichnungen werden vollständig auf Ihrem eigenen Gerät verarbeitet und gespeichert, und die App funktioniert auch offline. Nichts zu installieren, nichts zu abonnieren, nichts herzugeben. Die Details stehen in der <a href="/de/privacy/">Datenschutzerklärung</a> — sie ist kurz, weil es wirklich wenig zu erzählen gibt.',
          'Es ist bewusst ein fokussiertes Werkzeug: schnelles 2D-Zeichnen mit Befehlsterminal, Ebenen, Bemaßungen und ehrlichem DXF-Import/-Export — kein Ersatz für eine vollständige Desktop-CAD-Suite. Wenn Sie Dinge auf CNC- oder Lasermaschinen schneiden oder schnelle technische Skizzen für einen Laborbericht brauchen, wurde es für Sie gebaut.',
        ],
      },
      {
        h: 'Unter der Haube',
        ps: [
          'KulmanLab ist in Angular auf Basis von HTML5 Canvas geschrieben und verarbeitet problemlos Zeichnungen mit über 100.000 Objekten. Der mit Abstand schwierigste Teil war das DXF-Format selbst — das Einlesen ist einfach, aber Dateien zu schreiben, die jeder CAD-Editor akzeptiert, ist ein Minenfeld aus reverse-engineerten Splines und Gruppencodes.',
        ],
      },
      {
        h: 'Sagen Sie Hallo',
        ps: [
          'Einen Fehler gefunden, ein Feature vermisst oder einfach Lust zu zeigen, was Sie gebaut haben? Öffnen Sie ein Issue auf <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, kommen Sie zu <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> oder schreiben Sie mir an <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Ich lese alles.',
        ],
      },
    ],
  },

  es: {
    title: 'Acerca de KulmanLab — la historia del CAD gratuito',
    desc: 'KulmanLab es un proyecto de una sola persona: un ingeniero civil convertido en desarrollador backend que construye el CAD 2D rápido y gratuito que siempre quiso. Sin cuentas, sin subidas, sin servidores.',
    heading: 'Acerca de KulmanLab',
    subtitle: 'Un proyecto de una sola persona, construido sin prisa.',
    sections: [
      {
        ps: [
          'Hola, soy Volodymyr y vivo en Ucrania. Soy ingeniero civil de formación: pasé años en el tablero de dibujo y en software CAD de escritorio antes de cambiar de carrera al desarrollo de software backend. Pero el gusanillo de la ingeniería nunca desapareció. Con el tiempo me llevó al mundo de las máquinas CNC y a construir mi propia cortadora láser de CO₂ desde cero.',
          'De ahí viene KulmanLab: necesitaba una y otra vez una forma rápida de abrir un archivo DXF, limpiarlo, ajustar unas líneas y enviarlo a la máquina — sin arrancar software CAD pesado ni registrarme en otro servicio en la nube más. Así que empecé a construir mi propia herramienta. Eso fue en 2023; desde entonces es un proyecto de tardes y fines de semana.',
        ],
      },
      {
        h: 'El nombre',
        ps: [
          'Un <em>kulman</em> es como se llama a la máquina de dibujo clásica — el tablero Kuhlmann — en la parte del mundo de la que vengo. Generaciones de ingenieros aprendieron a dibujar en uno. KulmanLab es mi intento de mantener ese espíritu en el navegador.',
        ],
      },
      {
        h: 'Lo que creo que debe ser una herramienta CAD',
        ps: [
          'Gratuita, instantánea y privada. KulmanLab no tiene cuentas, ni subidas, ni servidor detrás: tus dibujos se procesan y almacenan por completo en tu propio dispositivo, y la app sigue funcionando sin conexión. Nada que instalar, nada a lo que suscribirse, nada que entregar. Los detalles están en la <a href="/es/privacy/">política de privacidad</a>, que es corta porque realmente hay poco que contar.',
          'Es deliberadamente una herramienta enfocada: dibujo 2D rápido con terminal de comandos, capas, cotas e importación/exportación DXF honesta — no un sustituto de una suite CAD de escritorio completa. Si cortas piezas en máquinas CNC o láser, o necesitas bocetos técnicos rápidos para un informe de laboratorio, se construyó pensando en ti.',
        ],
      },
      {
        h: 'Por dentro',
        ps: [
          'KulmanLab está escrito en Angular sobre HTML5 Canvas y maneja con soltura dibujos con más de 100 000 objetos. Con diferencia, lo más difícil ha sido el propio formato DXF: analizarlo es fácil, pero escribir archivos que cualquier editor CAD acepte es un campo minado de splines y códigos de grupo obtenidos por ingeniería inversa.',
        ],
      },
      {
        h: 'Saluda',
        ps: [
          '¿Encontraste un error, echas de menos una función o simplemente quieres enseñar lo que hiciste? Abre un issue en <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, únete a <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> o escríbeme a <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Lo leo todo.',
        ],
      },
    ],
  },

  fr: {
    title: 'À propos de KulmanLab — l\'histoire de la CAO gratuite',
    desc: 'KulmanLab est le projet d\'une seule personne : un ingénieur civil devenu développeur backend qui construit la CAO 2D rapide et gratuite dont il a toujours rêvé. Pas de comptes, pas de téléversements, pas de serveurs.',
    heading: 'À propos de KulmanLab',
    subtitle: 'Le projet d\'une seule personne, construit sans se presser.',
    sections: [
      {
        ps: [
          'Bonjour, je m\'appelle Volodymyr et je vis en Ukraine. Je suis ingénieur civil de formation — j\'ai passé des années à la planche à dessin et dans les logiciels de CAO de bureau avant de me reconvertir dans le développement backend. Mais le virus de l\'ingénierie n\'a jamais disparu. Il m\'a fini par m\'entraîner dans l\'univers des machines CNC, jusqu\'à construire ma propre découpeuse laser CO₂ de zéro.',
          'C\'est de là que vient KulmanLab : j\'avais sans cesse besoin d\'un moyen rapide d\'ouvrir un fichier DXF, de le nettoyer, d\'ajuster quelques lignes et de l\'envoyer à la machine — sans lancer un logiciel de CAO lourd ni m\'inscrire à un énième service cloud. Alors j\'ai commencé à construire mon propre outil. C\'était en 2023 ; depuis, c\'est un projet de soirées et de week-ends.',
        ],
      },
      {
        h: 'Le nom',
        ps: [
          'Un <em>kulman</em>, c\'est ainsi qu\'on appelle la machine à dessiner classique — la planche Kuhlmann — dans la région du monde d\'où je viens. Des générations d\'ingénieurs y ont appris à dessiner. KulmanLab est ma tentative de garder cet esprit dans le navigateur.',
        ],
      },
      {
        h: 'Ce qu\'un outil de CAO devrait être, selon moi',
        ps: [
          'Gratuit, instantané et privé. KulmanLab n\'a ni comptes, ni téléversements, ni serveur derrière : vos dessins sont traités et stockés entièrement sur votre propre appareil, et l\'application continue de fonctionner hors ligne. Rien à installer, rien à souscrire, rien à céder. Les détails sont dans la <a href="/fr/privacy/">politique de confidentialité</a>, qui est courte parce qu\'il y a vraiment peu à dire.',
          'C\'est délibérément un outil ciblé : du dessin 2D rapide avec un terminal de commandes, des calques, des cotations et un import/export DXF honnête — pas un remplaçant d\'une suite CAO de bureau complète. Si vous découpez des pièces sur des machines CNC ou laser, ou s\'il vous faut des croquis techniques rapides pour un rapport de TP, il a été construit pour vous.',
        ],
      },
      {
        h: 'Sous le capot',
        ps: [
          'KulmanLab est écrit en Angular sur HTML5 Canvas et gère sans peine des dessins de plus de 100 000 objets. Le plus difficile, de loin, a été le format DXF lui-même — l\'analyser est facile, mais écrire des fichiers que tout éditeur CAO acceptera est un champ de mines de splines et de codes de groupe reconstitués par rétro-ingénierie.',
        ],
      },
      {
        h: 'Dites bonjour',
        ps: [
          'Un bug, une fonctionnalité manquante, ou simplement envie de montrer ce que vous avez fabriqué ? Ouvrez un ticket sur <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, rejoignez <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> ou écrivez-moi à <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Je lis tout.',
        ],
      },
    ],
  },

  it: {
    title: 'Informazioni su KulmanLab — la storia del CAD gratuito',
    desc: 'KulmanLab è il progetto di una sola persona: un ingegnere civile diventato sviluppatore backend che costruisce il CAD 2D veloce e gratuito che ha sempre desiderato. Niente account, niente upload, niente server.',
    heading: 'Informazioni su KulmanLab',
    subtitle: 'Il progetto di una sola persona, costruito con calma.',
    sections: [
      {
        ps: [
          'Ciao, sono Volodymyr e vivo in Ucraina. Sono ingegnere civile di formazione — ho passato anni al tecnigrafo e nei software CAD desktop prima di cambiare carriera e dedicarmi allo sviluppo backend. La passione per l\'ingegneria, però, non è mai sparita. Col tempo mi ha portato nel mondo delle macchine CNC, fino a costruire da zero la mia tagliatrice laser CO₂.',
          'È da lì che nasce KulmanLab: mi serviva di continuo un modo rapido per aprire un file DXF, ripulirlo, sistemare qualche linea e mandarlo alla macchina — senza avviare software CAD pesanti né registrarmi all\'ennesimo servizio cloud. Così ho iniziato a costruire il mio strumento. Era il 2023; da allora è un progetto di sere e weekend.',
        ],
      },
      {
        h: 'Il nome',
        ps: [
          'Un <em>kulman</em> è come si chiama la classica macchina da disegno — il tecnigrafo Kuhlmann — nella parte del mondo da cui provengo. Generazioni di ingegneri hanno imparato a disegnare su uno di essi. KulmanLab è il mio tentativo di mantenere quello spirito nel browser.',
        ],
      },
      {
        h: 'Come credo debba essere uno strumento CAD',
        ps: [
          'Gratuito, immediato e privato. KulmanLab non ha account, né upload, né un server dietro: i tuoi disegni vengono elaborati e salvati interamente sul tuo dispositivo, e l\'app continua a funzionare offline. Niente da installare, niente abbonamenti, niente da consegnare. I dettagli sono nell\'<a href="/it/privacy/">informativa sulla privacy</a>, che è breve perché c\'è davvero poco da raccontare.',
          'È volutamente uno strumento mirato: disegno 2D veloce con terminale dei comandi, layer, quote e un import/export DXF onesto — non un sostituto di una suite CAD desktop completa. Se tagli pezzi con macchine CNC o laser, o ti servono schizzi tecnici rapidi per una relazione di laboratorio, è stato costruito pensando a te.',
        ],
      },
      {
        h: 'Sotto il cofano',
        ps: [
          'KulmanLab è scritto in Angular su HTML5 Canvas e gestisce senza problemi disegni con oltre 100.000 oggetti. La parte di gran lunga più difficile è stata il formato DXF stesso — leggerlo è facile, ma scrivere file che ogni editor CAD accetti è un campo minato di spline e codici di gruppo ricavati per reverse engineering.',
        ],
      },
      {
        h: 'Saluta',
        ps: [
          'Hai trovato un bug, ti manca una funzione o vuoi solo mostrare cosa hai realizzato? Apri una issue su <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, unisciti a <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> o scrivimi a <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Leggo tutto.',
        ],
      },
    ],
  },

  pt: {
    title: 'Sobre o KulmanLab — a história do CAD gratuito',
    desc: 'O KulmanLab é um projeto de uma pessoa só: um engenheiro civil que virou desenvolvedor backend e constrói o CAD 2D rápido e gratuito que sempre quis. Sem contas, sem uploads, sem servidores.',
    heading: 'Sobre o KulmanLab',
    subtitle: 'Um projeto de uma pessoa só, construído sem pressa.',
    sections: [
      {
        ps: [
          'Olá, sou o Volodymyr e moro na Ucrânia. Sou engenheiro civil de formação — passei anos na prancheta e em software CAD de desktop antes de mudar de carreira para o desenvolvimento backend. Mas a paixão pela engenharia nunca foi embora. Com o tempo, ela me levou ao mundo das máquinas CNC e à construção da minha própria cortadora a laser de CO₂ do zero.',
          'É daí que vem o KulmanLab: eu precisava toda hora de um jeito rápido de abrir um arquivo DXF, limpá-lo, ajustar algumas linhas e mandá-lo para a máquina — sem abrir um software CAD pesado nem me cadastrar em mais um serviço na nuvem. Então comecei a construir minha própria ferramenta. Isso foi em 2023; desde então é um projeto de noites e fins de semana.',
        ],
      },
      {
        h: 'O nome',
        ps: [
          'Um <em>kulman</em> é como se chama a clássica máquina de desenho — a prancheta Kuhlmann — na parte do mundo de onde venho. Gerações de engenheiros aprenderam a desenhar em uma. O KulmanLab é a minha tentativa de manter esse espírito no navegador.',
        ],
      },
      {
        h: 'O que acredito que uma ferramenta CAD deve ser',
        ps: [
          'Gratuita, instantânea e privada. O KulmanLab não tem contas, nem uploads, nem servidor por trás: seus desenhos são processados e armazenados inteiramente no seu próprio dispositivo, e o app continua funcionando offline. Nada para instalar, nada para assinar, nada para entregar. Os detalhes estão na <a href="/pt/privacy/">política de privacidade</a>, que é curta porque realmente há pouco a contar.',
          'É deliberadamente uma ferramenta focada: desenho 2D rápido com terminal de comandos, camadas, cotas e importação/exportação DXF honesta — não um substituto de uma suíte CAD de desktop completa. Se você corta peças em máquinas CNC ou a laser, ou precisa de esboços técnicos rápidos para um relatório de laboratório, ele foi feito pensando em você.',
        ],
      },
      {
        h: 'Por dentro',
        ps: [
          'O KulmanLab é escrito em Angular sobre HTML5 Canvas e lida tranquilamente com desenhos de mais de 100.000 objetos. De longe, a parte mais difícil foi o próprio formato DXF — ler é fácil, mas escrever arquivos que qualquer editor CAD aceite é um campo minado de splines e códigos de grupo obtidos por engenharia reversa.',
        ],
      },
      {
        h: 'Diga olá',
        ps: [
          'Achou um bug, sente falta de um recurso ou só quer mostrar o que você fez? Abra uma issue no <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, entre no <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> ou escreva para <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Eu leio tudo.',
        ],
      },
    ],
  },

  uk: {
    title: 'Про KulmanLab — історія безкоштовного CAD у браузері',
    desc: 'KulmanLab — проєкт однієї людини: інженер-будівельник, що став бекенд-розробником і створює швидкий безкоштовний 2D CAD, про який завжди мріяв. Без облікових записів, без завантажень, без серверів.',
    heading: 'Про KulmanLab',
    subtitle: 'Проєкт однієї людини, створений без поспіху.',
    sections: [
      {
        ps: [
          'Привіт, я Володимир, живу в Україні. За освітою я інженер-будівельник — багато років провів за кресленнями та в настільних CAD-програмах, перш ніж змінити професію на бекенд-розробку. Але інженерна жилка нікуди не зникла. Зрештою вона привела мене у світ верстатів з ЧПК — і до того, що я з нуля зібрав власний CO₂-лазерний різак.',
          'Звідси й з\'явився KulmanLab: мені постійно був потрібен швидкий спосіб відкрити DXF-файл, почистити його, підправити кілька ліній і надіслати на верстат — без запуску важкої CAD-програми та реєстрації в черговому хмарному сервісі. Тож я почав робити власний інструмент. Це було у 2023 році; відтоді це проєкт вечорів і вихідних.',
        ],
      },
      {
        h: 'Назва',
        ps: [
          '<em>Кульман</em> — так у нас називають класичну креслярську машину, дошку Кульмана. За нею вчилися креслити покоління інженерів. KulmanLab — моя спроба зберегти цей дух у браузері.',
        ],
      },
      {
        h: 'Яким, на мою думку, має бути CAD-інструмент',
        ps: [
          'Безкоштовним, миттєвим і приватним. У KulmanLab немає облікових записів, завантажень на сервер і самого сервера — ваші креслення обробляються та зберігаються цілком на вашому пристрої, а застосунок працює й офлайн. Нічого встановлювати, ні на що підписуватися, нічого віддавати. Деталі — у <a href="/uk/privacy/">політиці конфіденційності</a>, яка коротка, бо розповідати справді майже нічого.',
          'Це свідомо сфокусований інструмент: швидке 2D-креслення з командним терміналом, шарами, розмірами та чесним імпортом/експортом DXF — не заміна повноцінного настільного CAD-пакета. Якщо ви ріжете деталі на верстатах з ЧПК чи лазерних верстатах або вам потрібні швидкі технічні ескізи для лабораторної роботи — він створений саме для вас.',
        ],
      },
      {
        h: 'Під капотом',
        ps: [
          'KulmanLab написано на Angular поверх HTML5 Canvas, і він спокійно працює з кресленнями на понад 100 000 об\'єктів. Найскладнішою частиною був сам формат DXF — читати його легко, а от записувати файли, які прийме будь-який CAD-редактор, — це мінне поле зі сплайнів і групових кодів, розібраних методом зворотної розробки.',
        ],
      },
      {
        h: 'Напишіть мені',
        ps: [
          'Знайшли помилку, бракує функції чи просто хочете показати, що ви зробили? Створіть issue на <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, приєднуйтеся до <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> або напишіть мені на <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Я читаю все.',
        ],
      },
    ],
  },

  tr: {
    title: 'KulmanLab Hakkında — ücretsiz tarayıcı CAD\'in hikâyesi',
    desc: 'KulmanLab tek kişilik bir proje: backend geliştiricisi olan bir inşaat mühendisinin her zaman istediği hızlı, ücretsiz 2D CAD. Hesap yok, yükleme yok, sunucu yok.',
    heading: 'KulmanLab Hakkında',
    subtitle: 'Tek kişilik, acele etmeden geliştirilen bir proje.',
    sections: [
      {
        ps: [
          'Merhaba, ben Volodymyr; Ukrayna\'da yaşıyorum. Eğitimim inşaat mühendisliği — kariyerimi backend yazılım geliştirmeye çevirmeden önce yıllarımı çizim masasında ve masaüstü CAD yazılımlarında geçirdim. Ama mühendislik merakı hiç geçmedi. Sonunda beni CNC makineleri dünyasına, hatta kendi CO₂ lazer kesicimi sıfırdan yapmaya kadar götürdü.',
          'KulmanLab da buradan doğdu: Bir DXF dosyasını açıp temizlemenin, birkaç çizgiyi düzeltip makineye göndermenin hızlı bir yoluna sürekli ihtiyaç duyuyordum — ağır CAD yazılımı başlatmadan ya da bir bulut hizmetine daha kaydolmadan. Ben de kendi aracımı yapmaya başladım. 2023\'tü; o günden beri akşamları ve hafta sonları süren bir proje.',
        ],
      },
      {
        h: 'İsim',
        ps: [
          '<em>Kulman</em>, geldiğim coğrafyada klasik çizim makinesine — Kuhlmann çizim masasına — verilen addır. Nesiller boyu mühendisler çizmeyi onun başında öğrendi. KulmanLab, o ruhu tarayıcıda yaşatma çabam.',
        ],
      },
      {
        h: 'Bence bir CAD aracı nasıl olmalı',
        ps: [
          'Ücretsiz, anında ve gizliliğe saygılı. KulmanLab\'de hesap, yükleme ve arkasında sunucu yok — çizimleriniz tamamen kendi cihazınızda işlenir ve saklanır, uygulama çevrimdışı da çalışmaya devam eder. Kurulacak bir şey yok, abone olunacak bir şey yok, teslim edilecek bir şey yok. Ayrıntılar <a href="/tr/privacy/">gizlilik politikasında</a> — kısa, çünkü anlatılacak gerçekten az şey var.',
          'Bilinçli olarak odaklı bir araç: komut terminali, katmanlar, ölçülendirme ve dürüst DXF içe/dışa aktarma ile hızlı 2D çizim — tam bir masaüstü CAD paketinin yerine geçmez. CNC veya lazer makinelerinde parça kesiyorsanız ya da laboratuvar raporu için hızlı teknik eskizlere ihtiyacınız varsa, sizin için yapıldı.',
        ],
      },
      {
        h: 'Kaputun altında',
        ps: [
          'KulmanLab, HTML5 Canvas üzerinde Angular ile yazıldı ve 100.000\'den fazla nesneli çizimleri rahatça işliyor. Açık ara en zor kısım DXF formatının kendisiydi — okumak kolay, ama her CAD editörünün kabul edeceği dosyalar yazmak, tersine mühendislikle çözülmüş spline\'lar ve grup kodlarından oluşan bir mayın tarlası.',
        ],
      },
      {
        h: 'Merhaba deyin',
        ps: [
          'Bir hata mı buldunuz, bir özellik mi eksik, yoksa yaptığınızı göstermek mi istiyorsunuz? <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>\'da bir issue açın, <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>\'e katılın veya <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a> adresinden bana yazın. Hepsini okuyorum.',
        ],
      },
    ],
  },

  zh: {
    title: '关于 KulmanLab — 免费浏览器 CAD 背后的故事',
    desc: 'KulmanLab 是一个单人项目：一位转行做后端开发的土木工程师，打造他一直想要的快速、免费的 2D CAD。无账户、无上传、无服务器。',
    heading: '关于 KulmanLab',
    subtitle: '一个人的项目，慢慢打磨。',
    sections: [
      {
        ps: [
          '你好，我是 Volodymyr，住在乌克兰。我是土木工程专业出身——在转行做后端软件开发之前，我在绘图板和桌面 CAD 软件前度过了多年时光。但对工程的热情从未消失。它最终把我带进了 CNC 机床的世界，甚至从零造出了自己的 CO₂ 激光切割机。',
          'KulmanLab 就源于此：我总是需要一种快速的方式来打开 DXF 文件、清理它、调整几条线，然后发送到机器上——不必启动笨重的 CAD 软件，也不必再注册一个云服务。于是我开始打造自己的工具。那是 2023 年；从那以后，它一直是一个利用晚上和周末推进的项目。',
        ],
      },
      {
        h: '名字的由来',
        ps: [
          '在我来自的那片土地上，人们把经典的绘图机——Kuhlmann 绘图板——称作 <em>kulman</em>（库尔曼）。一代又一代工程师在它上面学会了制图。KulmanLab 是我把这种精神延续到浏览器里的尝试。',
        ],
      },
      {
        h: '我心目中的 CAD 工具',
        ps: [
          '免费、即开即用、尊重隐私。KulmanLab 没有账户、没有上传、背后也没有服务器——你的图纸完全在你自己的设备上处理和存储，应用离线也能照常工作。无需安装，无需订阅，无需交出任何东西。详情见<a href="/zh/privacy/">隐私政策</a>——它很短，因为真的没什么可讲的。',
          '它有意做成一个专注的工具：带命令终端、图层、标注和可靠 DXF 导入/导出的快速 2D 制图——而不是完整桌面 CAD 套件的替代品。如果你用 CNC 或激光机床切割零件，或者需要为实验报告快速画技术草图，它就是为你打造的。',
        ],
      },
      {
        h: '技术内幕',
        ps: [
          'KulmanLab 用 Angular 写成，基于 HTML5 Canvas，可以流畅处理超过 100,000 个对象的图纸。迄今最难的部分是 DXF 格式本身——解析它很容易，但要写出每个 CAD 编辑器都能接受的文件，就是一片由逆向工程得来的样条曲线和组码组成的雷区。',
        ],
      },
      {
        h: '打个招呼',
        ps: [
          '发现了 bug、缺少某个功能，或者只是想展示你的作品？在 <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a> 上提交 issue，加入 <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>，或写信给我：<a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>。我会读每一条。',
        ],
      },
    ],
  },

  hi: {
    title: 'KulmanLab के बारे में — मुफ़्त ब्राउज़र CAD के पीछे की कहानी',
    desc: 'KulmanLab एक व्यक्ति का प्रोजेक्ट है: बैकएंड डेवलपर बने एक सिविल इंजीनियर का, जो वह तेज़, मुफ़्त 2D CAD बना रहा है जो उसे हमेशा चाहिए था। न खाते, न अपलोड, न सर्वर।',
    heading: 'KulmanLab के बारे में',
    subtitle: 'एक व्यक्ति का प्रोजेक्ट, बिना जल्दबाज़ी के बनाया गया।',
    sections: [
      {
        ps: [
          'नमस्ते, मैं Volodymyr हूँ और यूक्रेन में रहता हूँ। शिक्षा से मैं सिविल इंजीनियर हूँ — बैकएंड सॉफ़्टवेयर डेवलपमेंट में करियर बदलने से पहले मैंने वर्षों ड्राफ़्टिंग बोर्ड और डेस्कटॉप CAD सॉफ़्टवेयर पर बिताए। लेकिन इंजीनियरिंग का जुनून कभी गया नहीं। वह आख़िरकार मुझे CNC मशीनों की दुनिया में ले गया — यहाँ तक कि मैंने शून्य से अपना CO₂ लेज़र कटर बना डाला।',
          'यहीं से KulmanLab आया: मुझे बार-बार एक तेज़ तरीक़ा चाहिए था — DXF फ़ाइल खोलने, उसे साफ़ करने, कुछ लाइनें ठीक करने और मशीन को भेजने का — बिना भारी-भरकम CAD सॉफ़्टवेयर चलाए या एक और क्लाउड सेवा में पंजीकरण किए। तो मैंने अपना टूल बनाना शुरू किया। वह 2023 की बात है; तब से यह शामों और सप्ताहांतों का प्रोजेक्ट है।',
        ],
      },
      {
        h: 'नाम',
        ps: [
          '<em>कुलमन</em> — मेरे इलाक़े में क्लासिक ड्राफ़्टिंग मशीन, यानी Kuhlmann ड्रॉइंग बोर्ड, को इसी नाम से जाना जाता है। इंजीनियरों की पीढ़ियों ने उसी पर चित्र बनाना सीखा। KulmanLab उसी भावना को ब्राउज़र में ज़िंदा रखने की मेरी कोशिश है।',
        ],
      },
      {
        h: 'मेरी नज़र में CAD टूल कैसा होना चाहिए',
        ps: [
          'मुफ़्त, तुरंत उपलब्ध और निजी। KulmanLab में न खाते हैं, न अपलोड, न पीछे कोई सर्वर — आपकी ड्रॉइंग पूरी तरह आपके अपने डिवाइस पर प्रोसेस और सेव होती हैं, और ऐप ऑफ़लाइन भी चलता रहता है। कुछ इंस्टॉल नहीं करना, किसी सदस्यता की ज़रूरत नहीं, कुछ सौंपना नहीं। विवरण <a href="/hi/privacy/">गोपनीयता नीति</a> में हैं — वह छोटी है, क्योंकि बताने को सचमुच बहुत कम है।',
          'यह जान-बूझकर एक केंद्रित टूल है: कमांड टर्मिनल, लेयर, डाइमेंशन और ईमानदार DXF आयात/निर्यात के साथ तेज़ 2D ड्राफ़्टिंग — किसी पूर्ण डेस्कटॉप CAD सुइट का विकल्प नहीं। अगर आप CNC या लेज़र मशीनों पर चीज़ें काटते हैं, या लैब रिपोर्ट के लिए झटपट तकनीकी स्केच चाहिए, तो यह आपके लिए ही बना है।',
        ],
      },
      {
        h: 'अंदर की बात',
        ps: [
          'KulmanLab, HTML5 Canvas पर Angular में लिखा गया है और 100,000 से अधिक ऑब्जेक्ट वाली ड्रॉइंग आराम से सँभालता है। अब तक का सबसे कठिन हिस्सा ख़ुद DXF फ़ॉर्मैट रहा — उसे पढ़ना आसान है, पर ऐसी फ़ाइलें लिखना जिन्हें हर CAD संपादक स्वीकार करे, रिवर्स-इंजीनियर किए गए स्प्लाइनों और ग्रुप कोडों की एक बारूदी सुरंग है।',
        ],
      },
      {
        h: 'संपर्क करें',
        ps: [
          'कोई बग मिला, कोई सुविधा चाहिए, या बस दिखाना चाहते हैं कि आपने क्या बनाया? <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a> पर issue खोलें, <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> से जुड़ें, या मुझे <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a> पर लिखें। मैं सब पढ़ता हूँ।',
        ],
      },
    ],
  },

  ar: {
    title: 'حول KulmanLab — القصة وراء برنامج CAD المجاني في المتصفح',
    desc: 'KulmanLab مشروع شخص واحد: مهندس مدني تحوّل إلى مطوّر خلفي يبني برنامج CAD ثنائي الأبعاد السريع والمجاني الذي طالما أراده. بلا حسابات، بلا رفع ملفات، بلا خوادم.',
    heading: 'حول KulmanLab',
    subtitle: 'مشروع شخص واحد، بُني على مهل.',
    sections: [
      {
        ps: [
          'مرحبًا، أنا فولوديمير وأعيش في أوكرانيا. أنا مهندس مدني بحكم الدراسة — أمضيت سنوات على لوحة الرسم وفي برامج CAD المكتبية قبل أن أغيّر مساري المهني إلى تطوير البرمجيات الخلفية. لكن شغف الهندسة لم يفارقني قط. قادني في النهاية إلى عالم ماكينات CNC، وإلى بناء قاطعة ليزر CO₂ خاصة بي من الصفر.',
          'من هنا جاء KulmanLab: كنت أحتاج مرارًا إلى طريقة سريعة لفتح ملف DXF وتنظيفه وتعديل بضعة خطوط وإرساله إلى الماكينة — دون تشغيل برنامج CAD ثقيل أو التسجيل في خدمة سحابية أخرى. فبدأت ببناء أداتي الخاصة. كان ذلك في عام 2023؛ ومنذ ذلك الحين وهو مشروع أمسيات وعطلات نهاية الأسبوع.',
        ],
      },
      {
        h: 'الاسم',
        ps: [
          '<em>كولمان</em> هو الاسم الذي تُعرف به آلة الرسم الهندسي الكلاسيكية — لوحة كولمان (Kuhlmann) — في المنطقة التي أنحدر منها. أجيال من المهندسين تعلّموا الرسم عليها. وKulmanLab هو محاولتي لإبقاء تلك الروح حيّة في المتصفح.',
        ],
      },
      {
        h: 'كيف يجب أن تكون أداة CAD برأيي',
        ps: [
          'مجانية وفورية وخاصة. لا حسابات في KulmanLab ولا رفع ملفات ولا خادم خلفه — رسوماتك تُعالَج وتُخزَّن بالكامل على جهازك، والتطبيق يواصل العمل دون اتصال. لا شيء للتثبيت، ولا اشتراكات، ولا شيء تسلّمه لأحد. التفاصيل في <a href="/ar/privacy/">سياسة الخصوصية</a> — وهي قصيرة لأنه لا يوجد فعلًا الكثير ليُقال.',
          'هي عن قصد أداة مركّزة: رسم ثنائي الأبعاد سريع مع طرفية أوامر وطبقات وأبعاد واستيراد/تصدير DXF أمين — لا بديلًا عن حزمة CAD مكتبية كاملة. إن كنت تقطع القطع على ماكينات CNC أو الليزر، أو تحتاج إلى رسومات تقنية سريعة لتقرير مختبر، فقد بُنيت من أجلك.',
        ],
      },
      {
        h: 'تحت الغطاء',
        ps: [
          'كُتب KulmanLab بإطار Angular فوق HTML5 Canvas، ويتعامل بسلاسة مع رسومات تتجاوز 100,000 عنصر. أصعب جزء على الإطلاق كان تنسيق DXF نفسه — قراءته سهلة، أما كتابة ملفات يقبلها كل محرر CAD فهي حقل ألغام من المنحنيات (splines) ورموز المجموعات المستخرجة بالهندسة العكسية.',
        ],
      },
      {
        h: 'قل مرحبًا',
        ps: [
          'وجدت خطأ، أو تفتقد ميزة، أو تريد فقط أن تُري ما صنعت؟ افتح مشكلة على <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>، أو انضم إلى <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>، أو راسلني على <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. أقرأ كل شيء.',
        ],
      },
    ],
  },

  id: {
    title: 'Tentang KulmanLab — kisah di balik CAD gratis di browser',
    desc: 'KulmanLab adalah proyek satu orang: insinyur sipil yang menjadi pengembang backend dan membangun CAD 2D cepat dan gratis yang selalu ia inginkan. Tanpa akun, tanpa unggahan, tanpa server.',
    heading: 'Tentang KulmanLab',
    subtitle: 'Proyek satu orang, dibangun tanpa terburu-buru.',
    sections: [
      {
        ps: [
          'Halo, saya Volodymyr, dan saya tinggal di Ukraina. Saya insinyur sipil dari pendidikan — bertahun-tahun saya habiskan di meja gambar dan perangkat lunak CAD desktop sebelum beralih karier ke pengembangan perangkat lunak backend. Tapi hasrat teknik itu tak pernah hilang. Ia akhirnya membawa saya ke dunia mesin CNC, sampai membangun sendiri pemotong laser CO₂ dari nol.',
          'Dari situlah KulmanLab lahir: saya terus-menerus butuh cara cepat untuk membuka file DXF, membersihkannya, menyesuaikan beberapa garis, lalu mengirimnya ke mesin — tanpa menjalankan perangkat lunak CAD yang berat atau mendaftar ke satu lagi layanan cloud. Maka saya mulai membangun alat saya sendiri. Itu tahun 2023; sejak itu proyek ini dikerjakan di malam hari dan akhir pekan.',
        ],
      },
      {
        h: 'Nama',
        ps: [
          '<em>Kulman</em> adalah sebutan untuk mesin gambar klasik — papan gambar Kuhlmann — di daerah asal saya. Generasi demi generasi insinyur belajar menggambar di atasnya. KulmanLab adalah upaya saya menjaga semangat itu tetap hidup di browser.',
        ],
      },
      {
        h: 'Seperti apa seharusnya alat CAD menurut saya',
        ps: [
          'Gratis, instan, dan privat. KulmanLab tidak punya akun, tidak ada unggahan, dan tidak ada server di baliknya — gambar Anda diproses dan disimpan sepenuhnya di perangkat Anda sendiri, dan aplikasi tetap bekerja secara offline. Tidak ada yang diinstal, tidak ada langganan, tidak ada yang diserahkan. Detailnya ada di <a href="/id/privacy/">kebijakan privasi</a>, yang singkat karena memang hampir tidak ada yang perlu diceritakan.',
          'Ini sengaja dibuat sebagai alat yang fokus: penggambaran 2D cepat dengan terminal perintah, layer, dimensi, dan impor/ekspor DXF yang jujur — bukan pengganti paket CAD desktop lengkap. Jika Anda memotong benda dengan mesin CNC atau laser, atau butuh sketsa teknis cepat untuk laporan praktikum, alat ini dibuat untuk Anda.',
        ],
      },
      {
        h: 'Di balik layar',
        ps: [
          'KulmanLab ditulis dengan Angular di atas HTML5 Canvas, dan dengan nyaman menangani gambar dengan 100.000+ objek. Bagian tersulit sejauh ini adalah format DXF itu sendiri — mem-parse-nya mudah, tetapi menulis file yang diterima semua editor CAD adalah ladang ranjau berisi spline dan kode grup hasil rekayasa balik.',
        ],
      },
      {
        h: 'Sapa saya',
        ps: [
          'Menemukan bug, kurang satu fitur, atau sekadar ingin memamerkan karya Anda? Buka issue di <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, bergabunglah dengan <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>, atau tulis ke saya di <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Saya membaca semuanya.',
        ],
      },
    ],
  },

  ja: {
    title: 'KulmanLab について — 無料ブラウザ CAD の背景にある物語',
    desc: 'KulmanLab は個人プロジェクトです。バックエンド開発者に転身した土木エンジニアが、ずっと欲しかった高速・無料の 2D CAD を作っています。アカウント不要、アップロードなし、サーバーなし。',
    heading: 'KulmanLab について',
    subtitle: 'ひとりで、じっくり作っているプロジェクト。',
    sections: [
      {
        ps: [
          'こんにちは、Volodymyr です。ウクライナに住んでいます。学んだのは土木工学で、バックエンド開発に転身するまで、製図板とデスクトップ CAD ソフトの前で何年も過ごしました。それでもエンジニアリングへの情熱は消えず、やがて CNC マシンの世界にのめり込み、ついには CO₂ レーザーカッターを一から自作するまでになりました。',
          'KulmanLab はそこから生まれました。DXF ファイルを開いて、整理して、数本の線を直して、マシンに送る——重い CAD ソフトを立ち上げることも、また新たなクラウドサービスに登録することもなく、それを素早くやる方法がずっと欲しかったのです。そこで自分のツールを作り始めました。2023 年のことです。以来、平日の夜と週末に進めるプロジェクトになっています。',
        ],
      },
      {
        h: '名前の由来',
        ps: [
          '<em>クールマン（kulman）</em>とは、私の故郷のあたりで、クラシックな製図機——Kuhlmann 製図板——を指す呼び名です。何世代ものエンジニアがその上で製図を学びました。KulmanLab は、その精神をブラウザの中に残そうとする私の試みです。',
        ],
      },
      {
        h: 'CAD ツールはこうあるべきだと思う',
        ps: [
          '無料で、すぐ使えて、プライベートであること。KulmanLab にはアカウントもアップロードも、背後のサーバーもありません。図面はすべてあなたのデバイス上で処理・保存され、アプリはオフラインでも動き続けます。インストールするものも、購読するものも、差し出すものもありません。詳しくは<a href="/ja/privacy/">プライバシーポリシー</a>を——本当に語ることが少ないので、短い文書です。',
          '意図的に的を絞ったツールです。コマンドターミナル、レイヤー、寸法、誠実な DXF 入出力を備えた高速な 2D 製図——フル機能のデスクトップ CAD スイートの代替ではありません。CNC やレーザー加工機で部品を切り出す人、実験レポート用に技術スケッチを手早く描きたい人のために作られています。',
        ],
      },
      {
        h: '内部のしくみ',
        ps: [
          'KulmanLab は HTML5 Canvas の上に Angular で書かれており、100,000 個を超えるオブジェクトの図面も快適に扱えます。圧倒的に難しかったのは DXF フォーマットそのものです。読み込みは簡単ですが、あらゆる CAD エディタが受け入れるファイルを書き出すのは、リバースエンジニアリングで解明したスプラインとグループコードの地雷原でした。',
        ],
      },
      {
        h: 'ごあいさつ',
        ps: [
          'バグを見つけた、欲しい機能がある、作ったものを見せたい——そんなときは <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a> で issue を作成するか、<a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> に参加するか、<a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a> までメールをください。すべて読んでいます。',
        ],
      },
    ],
  },

  pl: {
    title: 'O KulmanLab — historia darmowego CAD-a w przeglądarce',
    desc: 'KulmanLab to projekt jednej osoby: inżyniera budownictwa, który został programistą backendu i buduje szybki, darmowy CAD 2D, o jakim zawsze marzył. Bez kont, bez wysyłania plików, bez serwerów.',
    heading: 'O KulmanLab',
    subtitle: 'Projekt jednej osoby, budowany bez pośpiechu.',
    sections: [
      {
        ps: [
          'Cześć, jestem Volodymyr i mieszkam w Ukrainie. Z wykształcenia jestem inżynierem budownictwa — spędziłem lata przy desce kreślarskiej i w desktopowych programach CAD, zanim zmieniłem zawód na programistę backendu. Ale inżynierska pasja nigdy nie zniknęła. W końcu zaprowadziła mnie w świat maszyn CNC — aż po zbudowanie od zera własnej wycinarki laserowej CO₂.',
          'Stąd właśnie wziął się KulmanLab: ciągle potrzebowałem szybkiego sposobu, żeby otworzyć plik DXF, uporządkować go, poprawić kilka linii i wysłać do maszyny — bez uruchamiania ciężkiego oprogramowania CAD i bez rejestrowania się w kolejnej usłudze chmurowej. Zacząłem więc budować własne narzędzie. Był rok 2023; od tamtej pory to projekt wieczorów i weekendów.',
        ],
      },
      {
        h: 'Nazwa',
        ps: [
          '<em>Kulman</em> — tak w moich stronach nazywa się klasyczną maszynę kreślarską, deskę Kuhlmanna. Uczyły się na niej rysować całe pokolenia inżynierów. KulmanLab to moja próba zachowania tego ducha w przeglądarce.',
        ],
      },
      {
        h: 'Jakie moim zdaniem powinno być narzędzie CAD',
        ps: [
          'Darmowe, natychmiastowe i prywatne. KulmanLab nie ma kont, wysyłania plików ani serwera — Twoje rysunki są przetwarzane i przechowywane w całości na Twoim urządzeniu, a aplikacja działa także offline. Nic do instalowania, żadnych subskrypcji, niczego nie trzeba oddawać. Szczegóły znajdziesz w <a href="/pl/privacy/">polityce prywatności</a> — jest krótka, bo naprawdę niewiele jest do opowiedzenia.',
          'To celowo wyspecjalizowane narzędzie: szybkie kreślenie 2D z terminalem poleceń, warstwami, wymiarami i uczciwym importem/eksportem DXF — a nie zamiennik pełnego desktopowego pakietu CAD. Jeśli wycinasz elementy na maszynach CNC lub laserowych albo potrzebujesz szybkich szkiców technicznych do sprawozdania z laboratorium, powstało z myślą o Tobie.',
        ],
      },
      {
        h: 'Pod maską',
        ps: [
          'KulmanLab jest napisany w Angularze na HTML5 Canvas i bez trudu radzi sobie z rysunkami liczącymi ponad 100 000 obiektów. Zdecydowanie najtrudniejszy okazał się sam format DXF — parsowanie jest proste, ale zapisywanie plików, które przyjmie każdy edytor CAD, to pole minowe splajnów i kodów grup rozpracowanych metodą inżynierii wstecznej.',
        ],
      },
      {
        h: 'Przywitaj się',
        ps: [
          'Znalazłeś błąd, brakuje Ci funkcji, a może chcesz po prostu pokazać, co zrobiłeś? Otwórz zgłoszenie na <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHubie</a>, dołącz do <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> albo napisz do mnie na <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Czytam wszystko.',
        ],
      },
    ],
  },

  ko: {
    title: 'KulmanLab 소개 — 무료 브라우저 CAD 뒤에 숨은 이야기',
    desc: 'KulmanLab은 1인 프로젝트입니다. 백엔드 개발자가 된 토목 엔지니어가 늘 원하던 빠르고 무료인 2D CAD를 만들고 있습니다. 계정 없음, 업로드 없음, 서버 없음.',
    heading: 'KulmanLab 소개',
    subtitle: '한 사람이 서두르지 않고 만들어 가는 프로젝트.',
    sections: [
      {
        ps: [
          '안녕하세요, 저는 우크라이나에 사는 Volodymyr입니다. 전공은 토목공학으로, 백엔드 소프트웨어 개발로 진로를 바꾸기 전까지 제도판과 데스크톱 CAD 소프트웨어 앞에서 여러 해를 보냈습니다. 하지만 엔지니어링에 대한 열정은 사라지지 않았습니다. 결국 CNC 기계의 세계에 빠져들었고, CO₂ 레이저 커터를 처음부터 직접 만들기까지 했습니다.',
          'KulmanLab은 거기서 시작됐습니다. DXF 파일을 열어 정리하고, 선 몇 개를 손본 뒤 기계로 보내는 빠른 방법이 늘 필요했습니다 — 무거운 CAD 소프트웨어를 켜거나 또 하나의 클라우드 서비스에 가입하지 않고서요. 그래서 직접 도구를 만들기 시작했습니다. 2023년의 일이고, 그 뒤로 저녁과 주말에 진행하는 프로젝트가 되었습니다.',
        ],
      },
      {
        h: '이름의 유래',
        ps: [
          '<em>쿨만(kulman)</em>은 제가 자란 지역에서 클래식 제도기 — Kuhlmann 제도판 — 를 부르는 이름입니다. 여러 세대의 엔지니어가 그 위에서 제도를 배웠습니다. KulmanLab은 그 정신을 브라우저 안에 이어가려는 저의 시도입니다.',
        ],
      },
      {
        h: '제가 생각하는 CAD 도구의 모습',
        ps: [
          '무료이고, 즉시 쓸 수 있고, 프라이버시를 지키는 것. KulmanLab에는 계정도, 업로드도, 뒤에서 돌아가는 서버도 없습니다. 도면은 전부 사용자 기기에서 처리되고 저장되며, 앱은 오프라인에서도 계속 작동합니다. 설치할 것도, 구독할 것도, 넘겨줄 것도 없습니다. 자세한 내용은 <a href="/ko/privacy/">개인정보 처리방침</a>에 있습니다 — 정말로 말할 게 별로 없어서 짧습니다.',
          '의도적으로 집중된 도구입니다. 명령 터미널, 레이어, 치수, 정직한 DXF 가져오기/내보내기를 갖춘 빠른 2D 제도 — 완전한 데스크톱 CAD 제품군의 대체재가 아닙니다. CNC나 레이저 가공기로 부품을 자르거나, 실험 보고서용 기술 스케치를 빠르게 그려야 한다면, 바로 당신을 위해 만들어졌습니다.',
        ],
      },
      {
        h: '내부 구조',
        ps: [
          'KulmanLab은 HTML5 Canvas 위에 Angular로 작성되었고, 100,000개가 넘는 객체가 있는 도면도 무리 없이 처리합니다. 단연코 가장 어려웠던 부분은 DXF 포맷 자체였습니다. 파싱은 쉽지만, 모든 CAD 편집기가 받아들이는 파일을 쓰는 일은 리버스 엔지니어링으로 알아낸 스플라인과 그룹 코드로 가득한 지뢰밭이었습니다.',
        ],
      },
      {
        h: '인사를 남겨 주세요',
        ps: [
          '버그를 발견했거나, 필요한 기능이 있거나, 만든 것을 보여 주고 싶으신가요? <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>에 이슈를 열거나, <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>에 참여하거나, <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>으로 메일을 보내 주세요. 전부 읽습니다.',
        ],
      },
    ],
  },

  vi: {
    title: 'Về KulmanLab — câu chuyện đằng sau CAD miễn phí trên trình duyệt',
    desc: 'KulmanLab là dự án của một người: một kỹ sư xây dựng chuyển nghề làm lập trình viên backend, xây dựng công cụ CAD 2D nhanh, miễn phí mà anh luôn mong muốn. Không tài khoản, không tải lên, không máy chủ.',
    heading: 'Về KulmanLab',
    subtitle: 'Dự án của một người, được xây dựng không vội vàng.',
    sections: [
      {
        ps: [
          'Xin chào, tôi là Volodymyr, sống ở Ukraina. Tôi học ngành kỹ sư xây dựng — đã dành nhiều năm bên bàn vẽ và các phần mềm CAD trên máy tính trước khi chuyển nghề sang phát triển phần mềm backend. Nhưng niềm đam mê kỹ thuật chưa bao giờ tắt. Nó dần đưa tôi đến với thế giới máy CNC, thậm chí tự chế tạo từ đầu chiếc máy cắt laser CO₂ của riêng mình.',
          'KulmanLab ra đời từ đó: tôi liên tục cần một cách nhanh chóng để mở tệp DXF, dọn dẹp nó, chỉnh vài đường nét rồi gửi sang máy — mà không phải khởi động phần mềm CAD nặng nề hay đăng ký thêm một dịch vụ đám mây nữa. Vậy là tôi bắt đầu tự xây công cụ của mình. Đó là năm 2023; từ đó đến nay nó là dự án của những buổi tối và cuối tuần.',
        ],
      },
      {
        h: 'Cái tên',
        ps: [
          '<em>Kulman</em> là tên gọi của chiếc máy vẽ kỹ thuật cổ điển — bàn vẽ Kuhlmann — ở vùng đất nơi tôi sinh ra. Bao thế hệ kỹ sư đã học vẽ trên nó. KulmanLab là nỗ lực của tôi để giữ tinh thần ấy trong trình duyệt.',
        ],
      },
      {
        h: 'Tôi tin một công cụ CAD nên như thế nào',
        ps: [
          'Miễn phí, tức thì và riêng tư. KulmanLab không có tài khoản, không tải lên, không máy chủ phía sau — bản vẽ của bạn được xử lý và lưu trữ hoàn toàn trên thiết bị của bạn, và ứng dụng vẫn hoạt động khi ngoại tuyến. Không phải cài gì, không phải đăng ký gì, không phải giao nộp gì. Chi tiết nằm trong <a href="/vi/privacy/">chính sách quyền riêng tư</a> — nó ngắn vì thật sự chẳng có mấy điều để kể.',
          'Đây là công cụ có chủ đích tập trung: vẽ 2D nhanh với terminal lệnh, lớp (layer), kích thước và nhập/xuất DXF trung thực — không phải sản phẩm thay thế cho một bộ CAD đầy đủ trên máy tính. Nếu bạn cắt vật liệu bằng máy CNC hay laser, hoặc cần phác thảo kỹ thuật nhanh cho báo cáo thí nghiệm, nó được làm ra dành cho bạn.',
        ],
      },
      {
        h: 'Bên trong',
        ps: [
          'KulmanLab được viết bằng Angular trên nền HTML5 Canvas, xử lý thoải mái các bản vẽ với hơn 100.000 đối tượng. Phần khó nhất cho đến nay chính là định dạng DXF — đọc nó thì dễ, nhưng ghi ra những tệp mà mọi trình biên tập CAD đều chấp nhận lại là một bãi mìn của spline và mã nhóm phải dịch ngược mới hiểu nổi.',
        ],
      },
      {
        h: 'Chào hỏi',
        ps: [
          'Tìm thấy lỗi, thiếu tính năng, hay chỉ muốn khoe thứ bạn vừa làm? Hãy mở issue trên <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, tham gia <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>, hoặc viết cho tôi qua <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Tôi đọc tất cả.',
        ],
      },
    ],
  },

  th: {
    title: 'เกี่ยวกับ KulmanLab — เรื่องราวเบื้องหลัง CAD ฟรีในเบราว์เซอร์',
    desc: 'KulmanLab คือโปรเจกต์ของคนคนเดียว: วิศวกรโยธาที่ผันตัวมาเป็นนักพัฒนา backend และกำลังสร้าง CAD 2D ที่รวดเร็วและฟรีอย่างที่เขาต้องการมาตลอด ไม่มีบัญชี ไม่มีการอัปโหลด ไม่มีเซิร์ฟเวอร์',
    heading: 'เกี่ยวกับ KulmanLab',
    subtitle: 'โปรเจกต์ของคนคนเดียว ค่อย ๆ สร้างอย่างไม่รีบร้อน',
    sections: [
      {
        ps: [
          'สวัสดีครับ ผมชื่อ Volodymyr อาศัยอยู่ในยูเครน ผมเรียนจบวิศวกรรมโยธา — ใช้เวลาหลายปีอยู่กับโต๊ะเขียนแบบและซอฟต์แวร์ CAD บนเดสก์ท็อป ก่อนจะเปลี่ยนสายอาชีพมาเป็นนักพัฒนาซอฟต์แวร์ backend แต่ความหลงใหลในงานวิศวกรรมไม่เคยหายไป มันพาผมดำดิ่งสู่โลกของเครื่อง CNC จนถึงขั้นสร้างเครื่องตัดเลเซอร์ CO₂ ของตัวเองขึ้นมาจากศูนย์',
          'KulmanLab เกิดขึ้นจากตรงนั้น: ผมต้องการวิธีที่รวดเร็วในการเปิดไฟล์ DXF จัดระเบียบ แก้เส้นสองสามเส้น แล้วส่งไปยังเครื่องจักรอยู่เสมอ — โดยไม่ต้องเปิดซอฟต์แวร์ CAD ตัวหนัก ๆ หรือสมัครบริการคลาวด์เพิ่มอีกเจ้า ผมจึงเริ่มสร้างเครื่องมือของตัวเอง นั่นคือปี 2023 และตั้งแต่นั้นมามันก็เป็นโปรเจกต์ยามค่ำคืนและวันหยุดสุดสัปดาห์',
        ],
      },
      {
        h: 'ที่มาของชื่อ',
        ps: [
          '<em>คูลมัน (kulman)</em> คือชื่อที่ผู้คนในบ้านเกิดของผมใช้เรียกเครื่องเขียนแบบคลาสสิก — กระดานเขียนแบบ Kuhlmann วิศวกรหลายรุ่นเรียนรู้การเขียนแบบบนมัน KulmanLab คือความพยายามของผมที่จะรักษาจิตวิญญาณนั้นไว้ในเบราว์เซอร์',
        ],
      },
      {
        h: 'เครื่องมือ CAD ควรเป็นอย่างไรในความคิดของผม',
        ps: [
          'ฟรี ใช้ได้ทันที และเป็นส่วนตัว KulmanLab ไม่มีบัญชี ไม่มีการอัปโหลด และไม่มีเซิร์ฟเวอร์อยู่เบื้องหลัง — แบบเขียนของคุณถูกประมวลผลและจัดเก็บทั้งหมดบนอุปกรณ์ของคุณเอง และแอปยังทำงานแบบออฟไลน์ได้ ไม่ต้องติดตั้งอะไร ไม่ต้องสมัครสมาชิกอะไร ไม่ต้องมอบอะไรให้ใคร รายละเอียดอยู่ใน<a href="/th/privacy/">นโยบายความเป็นส่วนตัว</a> ซึ่งสั้นมากเพราะแทบไม่มีอะไรต้องเล่าจริง ๆ',
          'มันตั้งใจให้เป็นเครื่องมือที่โฟกัส: เขียนแบบ 2D อย่างรวดเร็วด้วยเทอร์มินัลคำสั่ง เลเยอร์ เส้นบอกขนาด และการนำเข้า/ส่งออก DXF ที่ตรงไปตรงมา — ไม่ใช่สิ่งทดแทนชุดซอฟต์แวร์ CAD เดสก์ท็อปเต็มรูปแบบ ถ้าคุณตัดชิ้นงานด้วยเครื่อง CNC หรือเลเซอร์ หรือต้องการภาพร่างทางเทคนิคอย่างรวดเร็วสำหรับรายงานแล็บ มันถูกสร้างมาเพื่อคุณ',
        ],
      },
      {
        h: 'เบื้องหลังการทำงาน',
        ps: [
          'KulmanLab เขียนด้วย Angular บน HTML5 Canvas และรองรับแบบเขียนที่มีวัตถุมากกว่า 100,000 ชิ้นได้อย่างสบาย ส่วนที่ยากที่สุดคือรูปแบบไฟล์ DXF เอง — การอ่านมันง่าย แต่การเขียนไฟล์ที่โปรแกรมแก้ไข CAD ทุกตัวยอมรับคือทุ่งกับระเบิดของ spline และ group code ที่ต้องแกะด้วยวิศวกรรมย้อนกลับ',
        ],
      },
      {
        h: 'ทักทายกัน',
        ps: [
          'พบบั๊ก อยากได้ฟีเจอร์ หรือแค่อยากอวดสิ่งที่คุณทำ? เปิด issue บน <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a> เข้าร่วม <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> หรือเขียนถึงผมที่ <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a> ผมอ่านทุกข้อความ',
        ],
      },
    ],
  },

  ms: {
    title: 'Perihal KulmanLab — kisah di sebalik CAD percuma dalam pelayar',
    desc: 'KulmanLab ialah projek seorang diri: jurutera awam yang menjadi pembangun backend, membina CAD 2D yang pantas dan percuma yang selama ini diimpikannya. Tiada akaun, tiada muat naik, tiada pelayan.',
    heading: 'Perihal KulmanLab',
    subtitle: 'Projek seorang diri, dibina tanpa tergesa-gesa.',
    sections: [
      {
        ps: [
          'Hai, saya Volodymyr dan saya tinggal di Ukraine. Saya jurutera awam dari segi pendidikan — bertahun-tahun saya habiskan di meja lukisan dan dalam perisian CAD desktop sebelum bertukar kerjaya ke pembangunan perisian backend. Namun minat kejuruteraan itu tidak pernah hilang. Ia akhirnya membawa saya ke dunia mesin CNC, sehingga membina sendiri pemotong laser CO₂ dari kosong.',
          'Dari situlah KulmanLab lahir: saya sentiasa memerlukan cara pantas untuk membuka fail DXF, mengemasnya, membetulkan beberapa garisan dan menghantarnya ke mesin — tanpa melancarkan perisian CAD yang berat atau mendaftar untuk satu lagi perkhidmatan awan. Maka saya mula membina alat saya sendiri. Itu pada tahun 2023; sejak itu ia menjadi projek waktu malam dan hujung minggu.',
        ],
      },
      {
        h: 'Nama',
        ps: [
          '<em>Kulman</em> ialah panggilan untuk mesin lukisan klasik — papan lukisan Kuhlmann — di tempat asal saya. Generasi demi generasi jurutera belajar melukis di atasnya. KulmanLab ialah usaha saya untuk mengekalkan semangat itu dalam pelayar.',
        ],
      },
      {
        h: 'Bagaimana alat CAD sepatutnya, pada pendapat saya',
        ps: [
          'Percuma, serta-merta dan peribadi. KulmanLab tiada akaun, tiada muat naik dan tiada pelayan di belakangnya — lukisan anda diproses dan disimpan sepenuhnya pada peranti anda sendiri, dan aplikasi terus berfungsi di luar talian. Tiada apa yang perlu dipasang, tiada langganan, tiada apa yang perlu diserahkan. Butirannya ada dalam <a href="/ms/privacy/">dasar privasi</a>, yang ringkas kerana memang tidak banyak yang perlu diceritakan.',
          'Ia sengaja dibuat sebagai alat yang fokus: lukisan 2D pantas dengan terminal perintah, lapisan, dimensi dan import/eksport DXF yang jujur — bukan pengganti suite CAD desktop yang lengkap. Jika anda memotong bahan dengan mesin CNC atau laser, atau memerlukan lakaran teknikal pantas untuk laporan makmal, ia dibina untuk anda.',
        ],
      },
      {
        h: 'Di sebalik tabir',
        ps: [
          'KulmanLab ditulis dalam Angular di atas HTML5 Canvas, dan selesa mengendalikan lukisan dengan 100,000+ objek. Bahagian paling sukar setakat ini ialah format DXF itu sendiri — membacanya mudah, tetapi menulis fail yang diterima oleh setiap editor CAD ialah padang periuk api spline dan kod kumpulan yang dirungkai melalui kejuruteraan songsang.',
        ],
      },
      {
        h: 'Tegur saya',
        ps: [
          'Jumpa pepijat, kekurangan ciri, atau sekadar mahu menunjukkan hasil kerja anda? Buka isu di <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, sertai <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>, atau tulis kepada saya di <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Saya baca semuanya.',
        ],
      },
    ],
  },

  bn: {
    title: 'KulmanLab সম্পর্কে — ব্রাউজারের বিনামূল্যের CAD-এর পেছনের গল্প',
    desc: 'KulmanLab এক ব্যক্তির প্রকল্প: ব্যাকএন্ড ডেভেলপার হয়ে ওঠা এক পুরকৌশলী, যিনি সেই দ্রুত, বিনামূল্যের 2D CAD তৈরি করছেন যা তিনি সবসময় চেয়েছিলেন। কোনো অ্যাকাউন্ট নেই, আপলোড নেই, সার্ভার নেই।',
    heading: 'KulmanLab সম্পর্কে',
    subtitle: 'এক ব্যক্তির প্রকল্প, ধীরে-সুস্থে গড়ে তোলা।',
    sections: [
      {
        ps: [
          'নমস্কার, আমি Volodymyr, থাকি ইউক্রেনে। পড়াশোনায় আমি পুরকৌশলী — ব্যাকএন্ড সফটওয়্যার ডেভেলপমেন্টে পেশা বদলের আগে বহু বছর কাটিয়েছি ড্রাফটিং বোর্ড আর ডেস্কটপ CAD সফটওয়্যারে। কিন্তু প্রকৌশলের নেশা কখনো যায়নি। শেষমেশ তা আমাকে টেনে নিয়ে যায় CNC মেশিনের জগতে — এমনকি শূন্য থেকে নিজের CO₂ লেজার কাটার বানানো পর্যন্ত।',
          'KulmanLab-এর জন্ম সেখান থেকেই: আমার বারবার দরকার হতো একটা দ্রুত উপায় — DXF ফাইল খোলা, পরিষ্কার করা, কয়েকটা লাইন ঠিক করা আর মেশিনে পাঠানো — ভারী CAD সফটওয়্যার চালু না করে কিংবা আরেকটা ক্লাউড সেবায় নিবন্ধন না করে। তাই নিজের টুল বানানো শুরু করলাম। সেটা ২০২৩ সাল; তারপর থেকে এটি সন্ধ্যা আর সাপ্তাহিক ছুটির দিনের প্রকল্প।',
        ],
      },
      {
        h: 'নামটির উৎস',
        ps: [
          '<em>কুলমান</em> — আমার দেশের দিকে ক্লাসিক ড্রাফটিং মেশিন, অর্থাৎ Kuhlmann ড্রয়িং বোর্ডকে এই নামেই ডাকা হয়। প্রজন্মের পর প্রজন্ম প্রকৌশলীরা এতে আঁকতে শিখেছেন। KulmanLab হলো সেই চেতনাটুকু ব্রাউজারে ধরে রাখার আমার প্রচেষ্টা।',
        ],
      },
      {
        h: 'আমার মতে CAD টুল যেমন হওয়া উচিত',
        ps: [
          'বিনামূল্যের, তাৎক্ষণিক এবং গোপনীয়তা-বান্ধব। KulmanLab-এ অ্যাকাউন্ট নেই, আপলোড নেই, পেছনে সার্ভারও নেই — আপনার অঙ্কন সম্পূর্ণ আপনার নিজের ডিভাইসে প্রক্রিয়া ও সংরক্ষণ হয়, আর অ্যাপটি অফলাইনেও চলতে থাকে। ইনস্টল করার কিছু নেই, সাবস্ক্রাইব করার কিছু নেই, কাউকে কিছু দেওয়ারও নেই। বিস্তারিত <a href="/bn/privacy/">গোপনীয়তা নীতিতে</a> — সেটি ছোট, কারণ বলার মতো সত্যিই বেশি কিছু নেই।',
          'এটি ইচ্ছাকৃতভাবে একটি ফোকাসড টুল: কমান্ড টার্মিনাল, লেয়ার, ডাইমেনশন আর সৎ DXF আমদানি/রপ্তানিসহ দ্রুত 2D ড্রাফটিং — কোনো পূর্ণাঙ্গ ডেস্কটপ CAD স্যুটের বিকল্প নয়। আপনি যদি CNC বা লেজার মেশিনে জিনিস কাটেন, কিংবা ল্যাব রিপোর্টের জন্য দ্রুত প্রযুক্তিগত স্কেচ দরকার হয়, এটি আপনার কথা ভেবেই তৈরি।',
        ],
      },
      {
        h: 'ভেতরের কথা',
        ps: [
          'KulmanLab লেখা হয়েছে HTML5 Canvas-এর ওপরে Angular দিয়ে, এবং এটি ১,০০,০০০-এর বেশি অবজেক্টের অঙ্কন স্বাচ্ছন্দ্যে সামলায়। এ পর্যন্ত সবচেয়ে কঠিন অংশ ছিল DXF ফরম্যাট নিজেই — পড়া সহজ, কিন্তু এমন ফাইল লেখা যা প্রতিটি CAD সম্পাদক গ্রহণ করবে — তা রিভার্স-ইঞ্জিনিয়ার করা স্প্লাইন আর গ্রুপ কোডের এক মাইনফিল্ড।',
        ],
      },
      {
        h: 'শুভেচ্ছা জানান',
        ps: [
          'বাগ পেয়েছেন, কোনো ফিচার দরকার, বা শুধু দেখাতে চান কী বানিয়েছেন? <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>-এ একটি ইস্যু খুলুন, <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>-এ যোগ দিন, অথবা আমাকে লিখুন <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>-এ। আমি সবকিছু পড়ি।',
        ],
      },
    ],
  },

  sw: {
    title: 'Kuhusu KulmanLab — hadithi nyuma ya CAD ya bure kwenye kivinjari',
    desc: 'KulmanLab ni mradi wa mtu mmoja: mhandisi wa ujenzi aliyegeuka mtengenezaji wa backend, akijenga CAD ya 2D ya haraka na ya bure aliyoitamani siku zote. Hakuna akaunti, hakuna kupakia, hakuna seva.',
    heading: 'Kuhusu KulmanLab',
    subtitle: 'Mradi wa mtu mmoja, uliojengwa bila haraka.',
    sections: [
      {
        ps: [
          'Habari, mimi ni Volodymyr, na ninaishi Ukraini. Kwa elimu ni mhandisi wa ujenzi — nilitumia miaka mingi kwenye ubao wa kuchora na katika programu za CAD za kompyuta kabla ya kubadilisha taaluma kwenda kwenye utengenezaji wa programu za backend. Lakini shauku ya uhandisi haikuisha kamwe. Hatimaye ilinipeleka kwenye ulimwengu wa mashine za CNC — hadi kujenga mwenyewe kikata-leza cha CO₂ kuanzia mwanzo.',
          'Hapo ndipo KulmanLab ilipotoka: nilihitaji tena na tena njia ya haraka ya kufungua faili ya DXF, kuisafisha, kurekebisha mistari michache na kuituma kwenye mashine — bila kufungua programu nzito ya CAD wala kujisajili kwenye huduma nyingine ya wingu. Basi nikaanza kujenga chombo changu mwenyewe. Ilikuwa mwaka 2023; tangu hapo ni mradi wa jioni na wikendi.',
        ],
      },
      {
        h: 'Jina',
        ps: [
          '<em>Kulman</em> ndivyo mashine ya kuchora ya kitamaduni — ubao wa kuchora wa Kuhlmann — inavyoitwa sehemu ninayotoka. Vizazi vya wahandisi vilijifunza kuchora juu yake. KulmanLab ni jaribio langu la kudumisha roho hiyo ndani ya kivinjari.',
        ],
      },
      {
        h: 'Ninavyoamini chombo cha CAD kinapaswa kuwa',
        ps: [
          'Bure, cha papo hapo, na cha faragha. KulmanLab haina akaunti, haina upakiaji, wala seva nyuma yake — michoro yako inachakatwa na kuhifadhiwa kikamilifu kwenye kifaa chako mwenyewe, na programu inaendelea kufanya kazi bila mtandao. Hakuna cha kusakinisha, hakuna cha kujiunga, hakuna cha kukabidhi. Maelezo yako katika <a href="/sw/privacy/">sera ya faragha</a>, ambayo ni fupi kwa sababu kwa kweli hakuna mengi ya kusimulia.',
          'Ni chombo kilicholengwa kwa makusudi: uchoraji wa 2D wa haraka wenye terminali ya amri, tabaka, vipimo, na uingizaji/utoaji wa DXF wa uaminifu — si mbadala wa kifurushi kamili cha CAD cha kompyuta. Ikiwa unakata vitu kwa mashine za CNC au leza, au unahitaji michoro ya kiufundi ya haraka kwa ripoti ya maabara, kilijengwa kwa ajili yako.',
        ],
      },
      {
        h: 'Ndani ya injini',
        ps: [
          'KulmanLab imeandikwa kwa Angular juu ya HTML5 Canvas, na inashughulikia kwa urahisi michoro yenye vitu zaidi ya 100,000. Sehemu ngumu zaidi kwa mbali imekuwa muundo wa DXF wenyewe — kuusoma ni rahisi, lakini kuandika faili ambazo kila kihariri cha CAD kitakubali ni uwanja wa mabomu wa spline na misimbo ya vikundi iliyofumbuliwa kwa uhandisi-nyuma.',
        ],
      },
      {
        h: 'Sema habari',
        ps: [
          'Umepata hitilafu, unakosa kipengele, au unataka tu kuonyesha ulichotengeneza? Fungua hoja kwenye <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, jiunge na <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>, au niandikie kwa <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Ninasoma kila kitu.',
        ],
      },
    ],
  },

  ur: {
    title: 'KulmanLab کا تعارف — براؤزر کے مفت CAD کے پیچھے کی کہانی',
    desc: 'KulmanLab ایک فرد کا منصوبہ ہے: ایک سول انجینئر جو بیک اینڈ ڈیویلپر بنا اور وہ تیز، مفت 2D CAD بنا رہا ہے جس کی اسے ہمیشہ خواہش تھی۔ نہ اکاؤنٹ، نہ اپ لوڈ، نہ سرور۔',
    heading: 'KulmanLab کا تعارف',
    subtitle: 'ایک فرد کا منصوبہ، بغیر جلد بازی کے بنایا گیا۔',
    sections: [
      {
        ps: [
          'السلام علیکم، میں Volodymyr ہوں اور یوکرین میں رہتا ہوں۔ تعلیم کے لحاظ سے میں سول انجینئر ہوں — بیک اینڈ سافٹ ویئر ڈیویلپمنٹ میں کیریئر بدلنے سے پہلے میں نے برسوں ڈرافٹنگ بورڈ اور ڈیسک ٹاپ CAD سافٹ ویئر پر گزارے۔ لیکن انجینئرنگ کا شوق کبھی ختم نہیں ہوا۔ آخرکار وہ مجھے CNC مشینوں کی دنیا میں لے گیا — یہاں تک کہ میں نے صفر سے اپنا CO₂ لیزر کٹر بنا ڈالا۔',
          'KulmanLab یہیں سے آیا: مجھے بار بار ایک تیز طریقہ درکار ہوتا تھا — DXF فائل کھولنے، اسے صاف کرنے، چند لکیریں درست کرنے اور مشین کو بھیجنے کا — بھاری بھرکم CAD سافٹ ویئر چلائے بغیر یا کسی اور کلاؤڈ سروس میں رجسٹر ہوئے بغیر۔ چنانچہ میں نے اپنا اوزار بنانا شروع کیا۔ یہ 2023 کی بات ہے؛ تب سے یہ شاموں اور ویک اینڈز کا منصوبہ ہے۔',
        ],
      },
      {
        h: 'نام',
        ps: [
          '<em>کولمان</em> — میرے علاقے میں کلاسیکی ڈرافٹنگ مشین، یعنی Kuhlmann ڈرائنگ بورڈ، کو اسی نام سے پکارا جاتا ہے۔ انجینئروں کی نسلوں نے اسی پر ڈرائنگ سیکھی۔ KulmanLab اسی روح کو براؤزر میں زندہ رکھنے کی میری کوشش ہے۔',
        ],
      },
      {
        h: 'میرے خیال میں CAD ٹول کیسا ہونا چاہیے',
        ps: [
          'مفت، فوری اور نجی۔ KulmanLab میں نہ اکاؤنٹ ہیں، نہ اپ لوڈ، نہ پیچھے کوئی سرور — آپ کی ڈرائنگز مکمل طور پر آپ کے اپنے آلے پر پروسیس اور محفوظ ہوتی ہیں، اور ایپ آف لائن بھی چلتی رہتی ہے۔ نہ کچھ انسٹال کرنا، نہ کسی سبسکرپشن کی ضرورت، نہ کچھ حوالے کرنا۔ تفصیلات <a href="/ur/privacy/">رازداری کی پالیسی</a> میں ہیں — وہ مختصر ہے، کیونکہ بتانے کو واقعی بہت کم ہے۔',
          'یہ جان بوجھ کر ایک مرکوز اوزار ہے: کمانڈ ٹرمینل، لیئرز، ڈائمینشنز اور ایمان دار DXF درآمد/برآمد کے ساتھ تیز 2D ڈرافٹنگ — کسی مکمل ڈیسک ٹاپ CAD سوٹ کا متبادل نہیں۔ اگر آپ CNC یا لیزر مشینوں پر چیزیں کاٹتے ہیں، یا لیب رپورٹ کے لیے جلدی تکنیکی خاکے چاہییں، تو یہ آپ ہی کے لیے بنایا گیا ہے۔',
        ],
      },
      {
        h: 'اندر کی بات',
        ps: [
          'KulmanLab، HTML5 Canvas پر Angular میں لکھا گیا ہے اور 100,000 سے زائد اشیاء والی ڈرائنگز آرام سے سنبھالتا ہے۔ اب تک کا سب سے مشکل حصہ خود DXF فارمیٹ رہا — اسے پڑھنا آسان ہے، مگر ایسی فائلیں لکھنا جنہیں ہر CAD ایڈیٹر قبول کرے، ریورس انجینئر کیے گئے اسپلائنز اور گروپ کوڈز کی بارودی سرنگوں کا میدان ہے۔',
        ],
      },
      {
        h: 'رابطہ کریں',
        ps: [
          'کوئی خرابی ملی، کوئی فیچر چاہیے، یا بس دکھانا چاہتے ہیں کہ آپ نے کیا بنایا؟ <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a> پر issue کھولیں، <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> میں شامل ہوں، یا مجھے <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a> پر لکھیں۔ میں سب کچھ پڑھتا ہوں۔',
        ],
      },
    ],
  },

  el: {
    title: 'Σχετικά με το KulmanLab — η ιστορία του δωρεάν CAD',
    desc: 'Το KulmanLab είναι έργο ενός ανθρώπου: ενός πολιτικού μηχανικού που έγινε backend developer και φτιάχνει το γρήγορο, δωρεάν 2D CAD που πάντα ήθελε. Χωρίς λογαριασμούς, χωρίς μεταφορτώσεις, χωρίς διακομιστές.',
    heading: 'Σχετικά με το KulmanLab',
    subtitle: 'Έργο ενός ανθρώπου, χτισμένο χωρίς βιασύνη.',
    sections: [
      {
        ps: [
          'Γεια σας, είμαι ο Volodymyr και ζω στην Ουκρανία. Είμαι πολιτικός μηχανικός στην εκπαίδευση — πέρασα χρόνια στο σχεδιαστήριο και σε προγράμματα CAD υπολογιστή πριν αλλάξω καριέρα προς την ανάπτυξη λογισμικού backend. Το μικρόβιο της μηχανικής όμως δεν έφυγε ποτέ. Με οδήγησε τελικά στον κόσμο των μηχανών CNC — μέχρι και στο να φτιάξω από το μηδέν τον δικό μου κόφτη λέιζερ CO₂.',
          'Από εκεί προέκυψε το KulmanLab: χρειαζόμουν συνέχεια έναν γρήγορο τρόπο να ανοίξω ένα αρχείο DXF, να το καθαρίσω, να διορθώσω μερικές γραμμές και να το στείλω στη μηχανή — χωρίς να εκκινώ βαρύ λογισμικό CAD ή να γράφομαι σε άλλη μία υπηρεσία cloud. Έτσι άρχισα να φτιάχνω το δικό μου εργαλείο. Ήταν το 2023· από τότε είναι ένα έργο για βράδια και σαββατοκύριακα.',
        ],
      },
      {
        h: 'Το όνομα',
        ps: [
          '<em>Κούλμαν (kulman)</em> λέγεται η κλασική σχεδιαστική μηχανή — το σχεδιαστήριο Kuhlmann — στα μέρη από όπου κατάγομαι. Γενιές μηχανικών έμαθαν να σχεδιάζουν πάνω της. Το KulmanLab είναι η προσπάθειά μου να κρατήσω αυτό το πνεύμα ζωντανό στον περιηγητή.',
        ],
      },
      {
        h: 'Πώς πιστεύω ότι πρέπει να είναι ένα εργαλείο CAD',
        ps: [
          'Δωρεάν, άμεσο και ιδιωτικό. Το KulmanLab δεν έχει λογαριασμούς, μεταφορτώσεις ούτε διακομιστή από πίσω — τα σχέδιά σας επεξεργάζονται και αποθηκεύονται εξ ολοκλήρου στη δική σας συσκευή, και η εφαρμογή συνεχίζει να λειτουργεί εκτός σύνδεσης. Τίποτα για εγκατάσταση, τίποτα για συνδρομή, τίποτα να παραδώσετε. Οι λεπτομέρειες βρίσκονται στην <a href="/el/privacy/">πολιτική απορρήτου</a>, που είναι σύντομη επειδή ειλικρινά δεν υπάρχουν πολλά να πούμε.',
          'Είναι σκόπιμα ένα εστιασμένο εργαλείο: γρήγορη 2D σχεδίαση με τερματικό εντολών, επίπεδα, διαστάσεις και έντιμη εισαγωγή/εξαγωγή DXF — όχι αντικαταστάτης μιας πλήρους σουίτας CAD υπολογιστή. Αν κόβετε κομμάτια σε μηχανές CNC ή λέιζερ, ή χρειάζεστε γρήγορα τεχνικά σκίτσα για μια εργαστηριακή αναφορά, φτιάχτηκε για εσάς.',
        ],
      },
      {
        h: 'Κάτω από το καπό',
        ps: [
          'Το KulmanLab είναι γραμμένο σε Angular πάνω σε HTML5 Canvas και χειρίζεται άνετα σχέδια με 100.000+ αντικείμενα. Το δυσκολότερο κομμάτι μακράν ήταν η ίδια η μορφή DXF — η ανάγνωσή της είναι εύκολη, αλλά το να γράφεις αρχεία που θα δεχτεί κάθε επεξεργαστής CAD είναι ναρκοπέδιο από splines και κωδικούς ομάδων βγαλμένους με αντίστροφη μηχανική.',
        ],
      },
      {
        h: 'Πείτε ένα γεια',
        ps: [
          'Βρήκατε σφάλμα, σας λείπει μια λειτουργία ή απλώς θέλετε να δείξετε τι φτιάξατε; Ανοίξτε ένα issue στο <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, ελάτε στο <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> ή γράψτε μου στο <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Τα διαβάζω όλα.',
        ],
      },
    ],
  },

  pa: {
    title: 'KulmanLab ਬਾਰੇ — ਮੁਫ਼ਤ ਬ੍ਰਾਊਜ਼ਰ CAD ਦੇ ਪਿੱਛੇ ਦੀ ਕਹਾਣੀ',
    desc: 'KulmanLab ਇੱਕ ਵਿਅਕਤੀ ਦਾ ਪ੍ਰੋਜੈਕਟ ਹੈ: ਬੈਕਐਂਡ ਡਿਵੈਲਪਰ ਬਣਿਆ ਇੱਕ ਸਿਵਲ ਇੰਜੀਨੀਅਰ, ਜੋ ਉਹ ਤੇਜ਼, ਮੁਫ਼ਤ 2D CAD ਬਣਾ ਰਿਹਾ ਹੈ ਜੋ ਉਸਨੂੰ ਹਮੇਸ਼ਾ ਚਾਹੀਦਾ ਸੀ। ਨਾ ਖਾਤੇ, ਨਾ ਅੱਪਲੋਡ, ਨਾ ਸਰਵਰ।',
    heading: 'KulmanLab ਬਾਰੇ',
    subtitle: 'ਇੱਕ ਵਿਅਕਤੀ ਦਾ ਪ੍ਰੋਜੈਕਟ, ਬਿਨਾਂ ਕਾਹਲੀ ਦੇ ਬਣਾਇਆ ਗਿਆ।',
    sections: [
      {
        ps: [
          'ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ Volodymyr ਹਾਂ ਅਤੇ ਯੂਕਰੇਨ ਵਿੱਚ ਰਹਿੰਦਾ ਹਾਂ। ਪੜ੍ਹਾਈ ਪੱਖੋਂ ਮੈਂ ਸਿਵਲ ਇੰਜੀਨੀਅਰ ਹਾਂ — ਬੈਕਐਂਡ ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਮੈਂਟ ਵੱਲ ਕਰੀਅਰ ਬਦਲਣ ਤੋਂ ਪਹਿਲਾਂ ਮੈਂ ਕਈ ਸਾਲ ਡਰਾਫਟਿੰਗ ਬੋਰਡ ਅਤੇ ਡੈਸਕਟਾਪ CAD ਸਾਫਟਵੇਅਰ ਤੇ ਗੁਜ਼ਾਰੇ। ਪਰ ਇੰਜੀਨੀਅਰਿੰਗ ਦਾ ਸ਼ੌਕ ਕਦੇ ਨਹੀਂ ਗਿਆ। ਆਖ਼ਰਕਾਰ ਉਹ ਮੈਨੂੰ CNC ਮਸ਼ੀਨਾਂ ਦੀ ਦੁਨੀਆ ਵਿੱਚ ਲੈ ਗਿਆ — ਇੱਥੋਂ ਤੱਕ ਕਿ ਮੈਂ ਸਿਫ਼ਰ ਤੋਂ ਆਪਣਾ CO₂ ਲੇਜ਼ਰ ਕਟਰ ਬਣਾ ਲਿਆ।',
          'KulmanLab ਇੱਥੋਂ ਹੀ ਆਇਆ: ਮੈਨੂੰ ਵਾਰ-ਵਾਰ ਇੱਕ ਤੇਜ਼ ਤਰੀਕੇ ਦੀ ਲੋੜ ਪੈਂਦੀ ਸੀ — DXF ਫਾਈਲ ਖੋਲ੍ਹਣ, ਸਾਫ਼ ਕਰਨ, ਕੁਝ ਲਾਈਨਾਂ ਠੀਕ ਕਰਨ ਅਤੇ ਮਸ਼ੀਨ ਨੂੰ ਭੇਜਣ ਦੀ — ਭਾਰੀ CAD ਸਾਫਟਵੇਅਰ ਚਲਾਏ ਬਿਨਾਂ ਜਾਂ ਇੱਕ ਹੋਰ ਕਲਾਊਡ ਸੇਵਾ ਵਿੱਚ ਰਜਿਸਟਰ ਹੋਏ ਬਿਨਾਂ। ਇਸ ਲਈ ਮੈਂ ਆਪਣਾ ਟੂਲ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕੀਤਾ। ਇਹ 2023 ਦੀ ਗੱਲ ਹੈ; ਉਦੋਂ ਤੋਂ ਇਹ ਸ਼ਾਮਾਂ ਅਤੇ ਹਫ਼ਤੇ ਦੇ ਅਖੀਰ ਦਾ ਪ੍ਰੋਜੈਕਟ ਹੈ।',
        ],
      },
      {
        h: 'ਨਾਮ',
        ps: [
          '<em>ਕੁਲਮਾਨ</em> — ਮੇਰੇ ਇਲਾਕੇ ਵਿੱਚ ਕਲਾਸਿਕ ਡਰਾਫਟਿੰਗ ਮਸ਼ੀਨ, ਯਾਨੀ Kuhlmann ਡਰਾਇੰਗ ਬੋਰਡ, ਨੂੰ ਇਸੇ ਨਾਮ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ। ਇੰਜੀਨੀਅਰਾਂ ਦੀਆਂ ਪੀੜ੍ਹੀਆਂ ਨੇ ਉਸੇ ਤੇ ਚਿੱਤਰਕਾਰੀ ਸਿੱਖੀ। KulmanLab ਉਸੇ ਭਾਵਨਾ ਨੂੰ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਜ਼ਿੰਦਾ ਰੱਖਣ ਦੀ ਮੇਰੀ ਕੋਸ਼ਿਸ਼ ਹੈ।',
        ],
      },
      {
        h: 'ਮੇਰੇ ਖਿਆਲ ਵਿੱਚ CAD ਟੂਲ ਕਿਹੋ ਜਿਹਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ',
        ps: [
          'ਮੁਫ਼ਤ, ਤੁਰੰਤ ਅਤੇ ਨਿੱਜੀ। KulmanLab ਵਿੱਚ ਨਾ ਖਾਤੇ ਹਨ, ਨਾ ਅੱਪਲੋਡ, ਨਾ ਪਿੱਛੇ ਕੋਈ ਸਰਵਰ — ਤੁਹਾਡੀਆਂ ਡਰਾਇੰਗਾਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤੁਹਾਡੀ ਆਪਣੀ ਡਿਵਾਈਸ ਤੇ ਪ੍ਰੋਸੈਸ ਅਤੇ ਸਟੋਰ ਹੁੰਦੀਆਂ ਹਨ, ਅਤੇ ਐਪ ਔਫਲਾਈਨ ਵੀ ਚੱਲਦੀ ਰਹਿੰਦੀ ਹੈ। ਕੁਝ ਇੰਸਟਾਲ ਨਹੀਂ ਕਰਨਾ, ਕੋਈ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਨਹੀਂ, ਕੁਝ ਸੌਂਪਣਾ ਨਹੀਂ। ਵੇਰਵੇ <a href="/pa/privacy/">ਪਰਦੇਦਾਰੀ ਨੀਤੀ</a> ਵਿੱਚ ਹਨ — ਉਹ ਛੋਟੀ ਹੈ, ਕਿਉਂਕਿ ਦੱਸਣ ਲਈ ਸੱਚਮੁੱਚ ਬਹੁਤ ਘੱਟ ਹੈ।',
          'ਇਹ ਜਾਣ-ਬੁੱਝ ਕੇ ਇੱਕ ਕੇਂਦਰਿਤ ਟੂਲ ਹੈ: ਕਮਾਂਡ ਟਰਮੀਨਲ, ਲੇਅਰਾਂ, ਮਾਪਾਂ ਅਤੇ ਇਮਾਨਦਾਰ DXF ਆਯਾਤ/ਨਿਰਯਾਤ ਨਾਲ ਤੇਜ਼ 2D ਡਰਾਫਟਿੰਗ — ਕਿਸੇ ਪੂਰੇ ਡੈਸਕਟਾਪ CAD ਸੂਟ ਦਾ ਬਦਲ ਨਹੀਂ। ਜੇ ਤੁਸੀਂ CNC ਜਾਂ ਲੇਜ਼ਰ ਮਸ਼ੀਨਾਂ ਤੇ ਚੀਜ਼ਾਂ ਕੱਟਦੇ ਹੋ, ਜਾਂ ਲੈਬ ਰਿਪੋਰਟ ਲਈ ਝਟਪਟ ਤਕਨੀਕੀ ਸਕੈਚ ਚਾਹੀਦੇ ਹਨ, ਤਾਂ ਇਹ ਤੁਹਾਡੇ ਲਈ ਹੀ ਬਣਾਇਆ ਗਿਆ ਹੈ।',
        ],
      },
      {
        h: 'ਅੰਦਰ ਦੀ ਗੱਲ',
        ps: [
          'KulmanLab, HTML5 Canvas ਉੱਤੇ Angular ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ ਅਤੇ 100,000 ਤੋਂ ਵੱਧ ਆਬਜੈਕਟਾਂ ਵਾਲੀਆਂ ਡਰਾਇੰਗਾਂ ਆਰਾਮ ਨਾਲ ਸੰਭਾਲਦਾ ਹੈ। ਹੁਣ ਤੱਕ ਦਾ ਸਭ ਤੋਂ ਔਖਾ ਹਿੱਸਾ ਖ਼ੁਦ DXF ਫਾਰਮੈਟ ਰਿਹਾ — ਇਸਨੂੰ ਪੜ੍ਹਨਾ ਸੌਖਾ ਹੈ, ਪਰ ਅਜਿਹੀਆਂ ਫਾਈਲਾਂ ਲਿਖਣਾ ਜੋ ਹਰ CAD ਐਡੀਟਰ ਮਨਜ਼ੂਰ ਕਰੇ, ਰਿਵਰਸ-ਇੰਜੀਨੀਅਰ ਕੀਤੇ ਸਪਲਾਈਨਾਂ ਅਤੇ ਗਰੁੱਪ ਕੋਡਾਂ ਦਾ ਇੱਕ ਸੁਰੰਗ-ਖੇਤ ਹੈ।',
        ],
      },
      {
        h: 'ਹੈਲੋ ਕਹੋ',
        ps: [
          'ਕੋਈ ਬੱਗ ਮਿਲਿਆ, ਕੋਈ ਫੀਚਰ ਚਾਹੀਦਾ ਹੈ, ਜਾਂ ਬੱਸ ਦਿਖਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਤੁਸੀਂ ਕੀ ਬਣਾਇਆ? <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a> ਤੇ issue ਖੋਲ੍ਹੋ, <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> ਨਾਲ ਜੁੜੋ, ਜਾਂ ਮੈਨੂੰ <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a> ਤੇ ਲਿਖੋ। ਮੈਂ ਸਭ ਕੁਝ ਪੜ੍ਹਦਾ ਹਾਂ।',
        ],
      },
    ],
  },

  sv: {
    title: 'Om KulmanLab — historien bakom den kostnadsfria webbläsar-CAD:en',
    desc: 'KulmanLab är ett enmansprojekt: en civilingenjör som blev backend-utvecklare och bygger den snabba, kostnadsfria 2D-CAD han alltid velat ha. Inga konton, inga uppladdningar, inga servrar.',
    heading: 'Om KulmanLab',
    subtitle: 'Ett enmansprojekt, byggt utan brådska.',
    sections: [
      {
        ps: [
          'Hej, jag heter Volodymyr och bor i Ukraina. Jag är civilingenjör i grunden — jag tillbringade år vid ritbordet och i CAD-program på datorn innan jag bytte karriär till backend-utveckling. Men ingenjörsintresset försvann aldrig. Det ledde mig till slut ner i CNC-maskinernas kaninhål — och till att bygga min egen CO₂-laserskärare från grunden.',
          'Det är därifrån KulmanLab kommer: jag behövde ständigt ett snabbt sätt att öppna en DXF-fil, städa upp den, justera några linjer och skicka den till maskinen — utan att starta tungt CAD-program eller registrera mig för ännu en molntjänst. Så jag började bygga mitt eget verktyg. Det var 2023; sedan dess är det ett projekt för kvällar och helger.',
        ],
      },
      {
        h: 'Namnet',
        ps: [
          'En <em>kulman</em> är vad den klassiska ritmaskinen — Kuhlmann-ritbordet — kallas i den del av världen jag kommer ifrån. Generationer av ingenjörer lärde sig rita vid en. KulmanLab är mitt försök att bevara den andan i webbläsaren.',
        ],
      },
      {
        h: 'Vad jag tycker att ett CAD-verktyg ska vara',
        ps: [
          'Gratis, omedelbart och privat. KulmanLab har inga konton, inga uppladdningar och ingen server bakom sig — dina ritningar bearbetas och lagras helt på din egen enhet, och appen fortsätter fungera offline. Inget att installera, inget att prenumerera på, inget att lämna ifrån sig. Detaljerna finns i <a href="/sv/privacy/">integritetspolicyn</a>, som är kort eftersom det ärligt talat finns väldigt lite att berätta.',
          'Det är medvetet ett fokuserat verktyg: snabb 2D-ritning med kommandoterminal, lager, mått och ärlig DXF-import/-export — inte en ersättning för en komplett CAD-svit på datorn. Om du skär detaljer på CNC- eller lasermaskiner, eller behöver snabba tekniska skisser till en labbrapport, byggdes det med dig i åtanke.',
        ],
      },
      {
        h: 'Under huven',
        ps: [
          'KulmanLab är skrivet i Angular ovanpå HTML5 Canvas och hanterar bekvämt ritningar med över 100 000 objekt. Den överlägset svåraste delen har varit själva DXF-formatet — att läsa det är enkelt, men att skriva filer som varje CAD-redigerare accepterar är ett minfält av splines och gruppkoder uttydda genom reverse engineering.',
        ],
      },
      {
        h: 'Säg hej',
        ps: [
          'Hittat en bugg, saknar du en funktion eller vill du bara visa vad du gjort? Öppna ett ärende på <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, gå med i <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a> eller skriv till mig på <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Jag läser allt.',
        ],
      },
    ],
  },

  tl: {
    title: 'Tungkol sa KulmanLab — ang kuwento ng libreng CAD',
    desc: 'Ang KulmanLab ay proyekto ng isang tao: isang civil engineer na naging backend developer at gumagawa ng mabilis at libreng 2D CAD na matagal na niyang gusto. Walang account, walang upload, walang server.',
    heading: 'Tungkol sa KulmanLab',
    subtitle: 'Proyekto ng isang tao, ginawa nang dahan-dahan.',
    sections: [
      {
        ps: [
          'Kumusta, ako si Volodymyr, at nakatira ako sa Ukraine. Civil engineer ako sa pinag-aralan — gumugol ako ng maraming taon sa drafting board at sa mga desktop na CAD software bago lumipat ng karera sa backend software development. Pero hindi kailanman nawala ang hilig ko sa engineering. Dinala ako nito sa mundo ng mga CNC machine — hanggang sa makabuo ako ng sarili kong CO₂ laser cutter mula sa wala.',
          'Doon nagmula ang KulmanLab: palagi akong nangangailangan ng mabilis na paraan para buksan ang isang DXF file, linisin ito, ayusin ang ilang linya, at ipadala sa makina — nang hindi nagbubukas ng mabigat na CAD software o nagpaparehistro sa isa na namang cloud service. Kaya sinimulan kong gawin ang sarili kong tool. Noong 2023 iyon; mula noon ay proyekto na ito tuwing gabi at katapusan ng linggo.',
        ],
      },
      {
        h: 'Ang pangalan',
        ps: [
          'Ang <em>kulman</em> ang tawag sa klasikong drafting machine — ang Kuhlmann drawing board — sa parte ng mundo na pinagmulan ko. Henerasyon ng mga inhinyero ang natutong gumuhit dito. Ang KulmanLab ang pagtatangka kong panatilihin ang diwang iyon sa browser.',
        ],
      },
      {
        h: 'Kung ano dapat ang isang CAD tool, sa paniniwala ko',
        ps: [
          'Libre, agaran, at pribado. Walang account ang KulmanLab, walang upload, at walang server sa likod nito — ang iyong mga drawing ay pinoproseso at iniimbak nang buo sa sarili mong device, at patuloy na gumagana ang app kahit offline. Walang ii-install, walang sususkribihan, walang isusuko. Nasa <a href="/tl/privacy/">patakaran sa privacy</a> ang mga detalye — maikli ito dahil talagang kaunti lang ang maikukuwento.',
          'Sadya itong nakatuong tool: mabilis na 2D drafting na may command terminal, mga layer, dimensyon, at tapat na DXF import/export — hindi kapalit ng isang buong desktop na CAD suite. Kung nagpuputol ka ng mga bagay sa CNC o laser machine, o kailangan mo ng mabilis na teknikal na sketch para sa lab report, para sa iyo ito ginawa.',
        ],
      },
      {
        h: 'Sa ilalim ng makina',
        ps: [
          'Ang KulmanLab ay nakasulat sa Angular sa ibabaw ng HTML5 Canvas, at kayang-kayang hawakan ang mga drawing na may 100,000+ na object. Ang pinakamahirap na bahagi sa lahat ay ang mismong DXF format — madali itong basahin, pero ang pagsusulat ng mga file na tatanggapin ng bawat CAD editor ay minefield ng mga spline at group code na inalam sa pamamagitan ng reverse engineering.',
        ],
      },
      {
        h: 'Kumustahin ako',
        ps: [
          'May nakitang bug, may kulang na feature, o gusto mo lang ipakita ang ginawa mo? Magbukas ng issue sa <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, sumali sa <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>, o sumulat sa akin sa <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Binabasa ko lahat.',
        ],
      },
    ],
  },

  nl: {
    title: 'Over KulmanLab — het verhaal achter de gratis browser-CAD',
    desc: 'KulmanLab is een eenmansproject: een burgerlijk ingenieur die backend-ontwikkelaar werd en de snelle, gratis 2D-CAD bouwt die hij altijd wilde. Geen accounts, geen uploads, geen servers.',
    heading: 'Over KulmanLab',
    subtitle: 'Een eenmansproject, op de langzame manier gebouwd.',
    sections: [
      {
        ps: [
          'Hoi, ik ben Volodymyr en ik woon in Oekraïne. Ik ben opgeleid tot burgerlijk ingenieur — ik bracht jaren door aan de tekentafel en in desktop-CAD-software voordat ik overstapte naar backend-softwareontwikkeling. De ingenieursjeuk verdween echter nooit. Uiteindelijk bracht het me diep in de wereld van CNC-machines, en tot het zelf bouwen van een CO₂-lasersnijder vanaf nul.',
          'Daar komt KulmanLab vandaan: ik had steeds een snelle manier nodig om een DXF-bestand te openen, op te schonen, een paar lijnen aan te passen en naar de machine te sturen — zonder zware CAD-software op te starten of me aan te melden voor nog een clouddienst. Dus begon ik mijn eigen gereedschap te bouwen. Dat was in 2023; het is sindsdien een avonden-en-weekendenproject.',
        ],
      },
      {
        h: 'De naam',
        ps: [
          'Een <em>kulman</em> is hoe de klassieke tekenmachine — het Kuhlmann-tekenbord — wordt genoemd in het deel van de wereld waar ik vandaan kom. Generaties ingenieurs leerden erop tekenen. KulmanLab is mijn poging om die geest in de browser te bewaren.',
        ],
      },
      {
        h: 'Wat ik vind dat een CAD-gereedschap moet zijn',
        ps: [
          'Gratis, direct en privé. KulmanLab heeft geen accounts, geen uploads en geen server erachter — uw tekeningen worden volledig op uw eigen apparaat verwerkt en opgeslagen, en de app blijft offline werken. Niets te installeren, niets waarop u moet abonneren, niets om af te staan. De details staan in het <a href="/nl/privacy/">privacybeleid</a>, dat kort is omdat er echt weinig te vertellen valt.',
          'Het is bewust een gericht gereedschap: snel 2D-tekenwerk met een opdrachtterminal, lagen, maatvoering en eerlijke DXF-import/-export — geen vervanging voor een volledige desktop-CAD-suite. Als u dingen snijdt op CNC- of lasermachines, of snel technische schetsen nodig heeft voor een labverslag, is het met u in gedachten gebouwd.',
        ],
      },
      {
        h: 'Onder de motorkap',
        ps: [
          'KulmanLab is geschreven in Angular bovenop HTML5 Canvas, en verwerkt moeiteloos tekeningen met 100.000+ objecten. Het moeilijkste onderdeel tot nu toe is het DXF-formaat zelf — het parsen ervan is eenvoudig, maar bestanden schrijven die elke CAD-editor accepteert is een mijnenveld van reverse-engineerde splines en groepscodes.',
        ],
      },
      {
        h: 'Zeg hallo',
        ps: [
          'Een bug gevonden, een functie mist, of wilt u gewoon laten zien wat u heeft gemaakt? Open een issue op <a href="https://github.com/volodymyr4509/kulmanlab" target="_blank" rel="noopener">GitHub</a>, sluit u aan bij <a href="https://www.reddit.com/r/kulmanlab/" target="_blank" rel="noopener">r/kulmanlab</a>, of schrijf me op <a href="mailto:kulmanlab@gmail.com">kulmanlab@gmail.com</a>. Ik lees alles.',
        ],
      },
    ],
  },
};
