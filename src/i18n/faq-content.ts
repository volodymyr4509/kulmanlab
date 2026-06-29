export type FaqItem = { q: string; a: string };
export type FaqSection = { headingKey: string; items: FaqItem[] };

export const faqContent: Record<string, FaqSection[]> = {
  en: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'Is KulmanLab really free?', a: 'Yes — completely free. No subscription, no credit card, no hidden plan. The full feature set is available to everyone with no limits.' },
        { q: 'Do I need to create an account?', a: 'No. There is no login, no sign-up, and no email required. Open the app and start drawing immediately.' },
        { q: 'What browsers are supported?', a: 'Any modern desktop browser — Chrome, Firefox, Safari, and Edge all work. KulmanLab is desktop-only; mobile and tablet are not currently supported.' },
        { q: 'Does it work offline?', a: 'Yes. After the first load the app is cached and runs entirely without an internet connection. Your drawings are stored locally so nothing requires a server.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Where are my drawings stored?', a: "In your browser's localStorage — on your own device. Nothing is ever uploaded to a server. Each browser on each device has its own independent storage." },
        { q: 'What happens if I clear my browser data?', a: 'Your saved drawings will be lost. Always export a DXF copy of anything important before clearing browser storage.' },
        { q: 'Can I open .dwg files?', a: 'KulmanLab supports DXF (Drawing Exchange Format), not the proprietary DWG format. Most desktop CAD applications can export DXF, so export from your source app first.' },
        { q: 'Which export formats are available?', a: 'DXF for round-tripping with other CAD tools, and PDF or PNG/WebP for print-ready output. The print manager lets you set DPI and paper size before exporting.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Does it have a command terminal?', a: 'Yes. Type commands directly — LINE, CIRCLE, MOVE, TRIM, and 50+ others. The terminal supports history (arrow keys), autocomplete (Tab), and exact numeric input.' },
        { q: 'Is there layer support?', a: 'Full layer management: create, rename, freeze, lock, and isolate layers. Set color, linetype, and lineweight per layer. All layer data is preserved in DXF export.' },
        { q: 'What dimension types are available?', a: 'Linear, aligned, radius, diameter, angular, and continue dimensions. All stored as standard DXF DIMENSION entities compatible with other DXF-capable CAD tools.' },
        { q: 'Can I edit geometry with grips?', a: 'Yes. Select any entity to reveal grip handles at key points — endpoints, midpoints, centers, arc ends. Drag to reshape directly on the canvas, or type a value while dragging for exact placement.' },
        { q: 'Is real-time collaboration supported?', a: 'Not currently. KulmanLab is a single-user tool and drawings stay local. Cloud sync and collaboration are outside the current scope.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Are KulmanLab DXF files compatible with other CAD software?', a: 'Yes. KulmanLab reads and writes AC1032 DXF — a widely supported version. Files open correctly in LibreCAD, QCAD, BricsCAD, FreeCAD, and any other DXF-capable tool.' },
        { q: 'What is the difference between DXF and DWG?', a: 'DXF is an open, text-based exchange format designed for interoperability. DWG is a proprietary binary format. KulmanLab uses DXF, which is readable by virtually every CAD tool.' },
        { q: 'Can KulmanLab replace my desktop CAD software?', a: 'For 2D drafting — yes. KulmanLab has a full command terminal, layers, snapping, dimensions, grip editing, and DXF compatibility. It does not support 3D, blocks/xrefs, or parametric constraints.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'Does KulmanLab collect my drawing data?', a: 'No. Your drawings stay in your browser and are never sent anywhere. KulmanLab uses Google Analytics for anonymous usage metrics (page views, session counts) — no drawing content is involved.' },
        { q: 'Are cookies used?', a: 'Only the cookies set automatically by Google Analytics. No tracking beyond that, no advertising cookies, no third-party data sharing.' },
      ],
    },
  ],

  de: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'Ist KulmanLab wirklich kostenlos?', a: 'Ja — vollständig kostenlos. Kein Abonnement, keine Kreditkarte, kein versteckter Plan. Der vollständige Funktionsumfang steht jedem ohne Einschränkungen zur Verfügung.' },
        { q: 'Muss ich ein Konto erstellen?', a: 'Nein. Es gibt kein Login, keine Registrierung und keine E-Mail-Adresse erforderlich. Öffnen Sie die App und beginnen Sie sofort mit dem Zeichnen.' },
        { q: 'Welche Browser werden unterstützt?', a: 'Jeder moderne Desktop-Browser — Chrome, Firefox, Safari und Edge funktionieren alle. KulmanLab ist nur für Desktop; Mobil und Tablet werden derzeit nicht unterstützt.' },
        { q: 'Funktioniert es offline?', a: 'Ja. Nach dem ersten Laden wird die App gecacht und läuft vollständig ohne Internetverbindung. Ihre Zeichnungen werden lokal gespeichert, sodass kein Server benötigt wird.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Wo werden meine Zeichnungen gespeichert?', a: 'Im localStorage Ihres Browsers — auf Ihrem eigenen Gerät. Es wird nichts auf einen Server hochgeladen. Jeder Browser auf jedem Gerät hat seinen eigenen unabhängigen Speicher.' },
        { q: 'Was passiert, wenn ich meine Browserdaten lösche?', a: 'Ihre gespeicherten Zeichnungen gehen verloren. Exportieren Sie immer eine DXF-Kopie von allem Wichtigen, bevor Sie den Browser-Speicher leeren.' },
        { q: 'Kann ich .dwg-Dateien öffnen?', a: 'KulmanLab unterstützt DXF (Drawing Exchange Format), nicht das proprietäre DWG-Format. Die meisten Desktop-CAD-Anwendungen können DXF exportieren, exportieren Sie also zuerst aus Ihrer Quell-App.' },
        { q: 'Welche Exportformate sind verfügbar?', a: 'DXF für den Austausch mit anderen CAD-Tools sowie PDF oder PNG/WebP für druckfertige Ausgaben. Der Druckmanager ermöglicht die Einstellung von DPI und Papiergröße vor dem Export.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Hat es ein Befehlsterminal?', a: 'Ja. Geben Sie Befehle direkt ein — LINE, CIRCLE, MOVE, TRIM und über 50 weitere. Das Terminal unterstützt Verlauf (Pfeiltasten), Autovervollständigung (Tab) und exakte numerische Eingabe.' },
        { q: 'Gibt es Layer-Unterstützung?', a: 'Vollständige Layer-Verwaltung: Erstellen, Umbenennen, Einfrieren, Sperren und Isolieren von Layern. Farbe, Linientyp und Linienstärke pro Layer festlegen. Alle Layer-Daten werden beim DXF-Export erhalten.' },
        { q: 'Welche Bemaßungstypen sind verfügbar?', a: 'Linear-, Ausgerichtete, Radius-, Durchmesser-, Winkel- und Fortsetzungsmaße. Alle als standardmäßige DXF-DIMENSION-Entitäten gespeichert, kompatibel mit anderen DXF-fähigen CAD-Tools.' },
        { q: 'Kann ich Geometrie mit Griffen bearbeiten?', a: 'Ja. Wählen Sie eine Entität aus, um Griffpunkte an wichtigen Stellen anzuzeigen — Endpunkte, Mittelpunkte, Zentren, Bogenenden. Ziehen Sie direkt auf der Zeichenfläche zur Neugestaltung oder geben Sie während des Ziehens einen Wert ein.' },
        { q: 'Wird Echtzeit-Zusammenarbeit unterstützt?', a: 'Derzeit nicht. KulmanLab ist ein Einzelbenutzer-Tool und Zeichnungen bleiben lokal. Cloud-Synchronisation und Zusammenarbeit liegen außerhalb des aktuellen Umfangs.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Sind KulmanLab-DXF-Dateien mit anderer CAD-Software kompatibel?', a: 'Ja. KulmanLab liest und schreibt AC1032 DXF — eine weit verbreitete Version. Dateien öffnen sich korrekt in LibreCAD, QCAD, BricsCAD, FreeCAD und jedem anderen DXF-fähigen Tool.' },
        { q: 'Was ist der Unterschied zwischen DXF und DWG?', a: 'DXF ist ein offenes, textbasiertes Austauschformat für Interoperabilität. DWG ist ein proprietäres Binärformat. KulmanLab verwendet DXF, das von praktisch jedem CAD-Tool gelesen werden kann.' },
        { q: 'Kann KulmanLab meine Desktop-CAD-Software ersetzen?', a: 'Für 2D-Zeichnungen — ja. KulmanLab verfügt über ein vollständiges Befehlsterminal, Layer, Fangen, Bemaßungen, Griffbearbeitung und DXF-Kompatibilität. Es unterstützt kein 3D, Blöcke/Xrefs oder parametrische Einschränkungen.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'Sammelt KulmanLab meine Zeichnungsdaten?', a: 'Nein. Ihre Zeichnungen bleiben in Ihrem Browser und werden niemals irgendwo gesendet. KulmanLab verwendet Google Analytics für anonyme Nutzungsmetriken (Seitenaufrufe, Sitzungsanzahl) — kein Zeichnungsinhalt ist beteiligt.' },
        { q: 'Werden Cookies verwendet?', a: 'Nur die von Google Analytics automatisch gesetzten Cookies. Kein Tracking darüber hinaus, keine Werbe-Cookies, keine Datenweitergabe an Dritte.' },
      ],
    },
  ],

  es: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: '¿KulmanLab es realmente gratuito?', a: 'Sí — completamente gratuito. Sin suscripción, sin tarjeta de crédito, sin plan oculto. El conjunto completo de funciones está disponible para todos sin límites.' },
        { q: '¿Necesito crear una cuenta?', a: 'No. No hay inicio de sesión, ni registro, ni correo electrónico necesario. Abre la app y empieza a dibujar de inmediato.' },
        { q: '¿Qué navegadores son compatibles?', a: 'Cualquier navegador de escritorio moderno — Chrome, Firefox, Safari y Edge funcionan todos. KulmanLab es solo para escritorio; móvil y tablet no están soportados actualmente.' },
        { q: '¿Funciona sin conexión?', a: 'Sí. Tras la primera carga, la app queda en caché y funciona completamente sin conexión a internet. Tus dibujos se almacenan localmente, por lo que nada requiere un servidor.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: '¿Dónde se guardan mis dibujos?', a: 'En el localStorage de tu navegador — en tu propio dispositivo. Nada se sube jamás a un servidor. Cada navegador en cada dispositivo tiene su propio almacenamiento independiente.' },
        { q: '¿Qué pasa si borro los datos del navegador?', a: 'Tus dibujos guardados se perderán. Exporta siempre una copia DXF de todo lo importante antes de borrar el almacenamiento del navegador.' },
        { q: '¿Puedo abrir archivos .dwg?', a: 'KulmanLab admite DXF (Drawing Exchange Format), no el formato propietario DWG. La mayoría de las aplicaciones CAD de escritorio pueden exportar DXF, así que exporta primero desde tu aplicación de origen.' },
        { q: '¿Qué formatos de exportación están disponibles?', a: 'DXF para intercambio con otras herramientas CAD, y PDF o PNG/WebP para salida lista para imprimir. El gestor de impresión permite establecer DPI y tamaño de papel antes de exportar.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: '¿Tiene terminal de comandos?', a: 'Sí. Escribe comandos directamente — LINE, CIRCLE, MOVE, TRIM y más de 50 otros. El terminal admite historial (teclas de flecha), autocompletado (Tab) y entrada numérica exacta.' },
        { q: '¿Hay soporte de capas?', a: 'Gestión completa de capas: crear, renombrar, congelar, bloquear y aislar capas. Establece color, tipo de línea y grosor por capa. Todos los datos de capa se conservan en la exportación DXF.' },
        { q: '¿Qué tipos de cotas están disponibles?', a: 'Cotas lineales, alineadas, de radio, diámetro, angulares y en cadena. Todas almacenadas como entidades DIMENSION estándar de DXF, compatibles con otras herramientas CAD con soporte DXF.' },
        { q: '¿Puedo editar geometría con puntos de control?', a: 'Sí. Selecciona cualquier entidad para revelar los puntos de control en posiciones clave — extremos, puntos medios, centros, extremos de arco. Arrastra para modificar directamente en el lienzo, o escribe un valor mientras arrastras para posicionamiento exacto.' },
        { q: '¿Se admite colaboración en tiempo real?', a: 'Actualmente no. KulmanLab es una herramienta monousuario y los dibujos permanecen locales. La sincronización en la nube y la colaboración están fuera del alcance actual.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: '¿Los archivos DXF de KulmanLab son compatibles con otro software CAD?', a: 'Sí. KulmanLab lee y escribe DXF AC1032 — una versión ampliamente compatible. Los archivos se abren correctamente en LibreCAD, QCAD, BricsCAD, FreeCAD y cualquier otra herramienta con soporte DXF.' },
        { q: '¿Cuál es la diferencia entre DXF y DWG?', a: 'DXF es un formato de intercambio abierto y basado en texto diseñado para la interoperabilidad. DWG es un formato binario propietario. KulmanLab usa DXF, que puede ser leído por prácticamente cualquier herramienta CAD.' },
        { q: '¿Puede KulmanLab reemplazar mi software CAD de escritorio?', a: 'Para dibujo 2D — sí. KulmanLab tiene un terminal de comandos completo, capas, ajuste, cotas, edición con puntos de control y compatibilidad DXF. No admite 3D, bloques/referencias externas ni restricciones paramétricas.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: '¿KulmanLab recopila los datos de mis dibujos?', a: 'No. Tus dibujos permanecen en tu navegador y nunca se envían a ningún lugar. KulmanLab usa Google Analytics para métricas de uso anónimas (visitas a páginas, recuentos de sesiones) — no se involucra ningún contenido de dibujo.' },
        { q: '¿Se usan cookies?', a: 'Solo las cookies establecidas automáticamente por Google Analytics. Sin seguimiento adicional, sin cookies publicitarias, sin compartir datos con terceros.' },
      ],
    },
  ],

  fr: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab est-il vraiment gratuit ?', a: "Oui — complètement gratuit. Pas d'abonnement, pas de carte de crédit, pas de plan caché. L'ensemble complet des fonctionnalités est disponible pour tous sans limite." },
        { q: 'Faut-il créer un compte ?', a: "Non. Il n'y a pas de connexion, pas d'inscription et aucun email requis. Ouvrez l'application et commencez à dessiner immédiatement." },
        { q: 'Quels navigateurs sont pris en charge ?', a: "Tout navigateur de bureau moderne — Chrome, Firefox, Safari et Edge fonctionnent tous. KulmanLab est uniquement pour bureau ; le mobile et la tablette ne sont pas pris en charge actuellement." },
        { q: 'Fonctionne-t-il hors ligne ?', a: "Oui. Après le premier chargement, l'application est mise en cache et fonctionne entièrement sans connexion internet. Vos dessins sont stockés localement, rien ne nécessite un serveur." },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Où mes dessins sont-ils stockés ?', a: "Dans le localStorage de votre navigateur — sur votre propre appareil. Rien n'est jamais téléchargé sur un serveur. Chaque navigateur sur chaque appareil a son propre stockage indépendant." },
        { q: "Que se passe-t-il si j'efface les données de mon navigateur ?", a: "Vos dessins sauvegardés seront perdus. Exportez toujours une copie DXF de tout ce qui est important avant d'effacer le stockage du navigateur." },
        { q: 'Puis-je ouvrir des fichiers .dwg ?', a: "KulmanLab prend en charge le DXF (Drawing Exchange Format), pas le format propriétaire DWG. La plupart des applications CAO de bureau peuvent exporter en DXF, exportez donc d'abord depuis votre application source." },
        { q: "Quels formats d'export sont disponibles ?", a: "DXF pour l'échange avec d'autres outils CAO, et PDF ou PNG/WebP pour une sortie prête à imprimer. Le gestionnaire d'impression vous permet de définir la résolution et le format de papier avant l'export." },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Y a-t-il un terminal de commandes ?', a: "Oui. Tapez des commandes directement — LINE, CIRCLE, MOVE, TRIM et plus de 50 autres. Le terminal prend en charge l'historique (touches fléchées), la complétion automatique (Tab) et la saisie numérique précise." },
        { q: 'Y a-t-il une gestion des calques ?', a: "Gestion complète des calques : créer, renommer, geler, verrouiller et isoler des calques. Définissez la couleur, le type de ligne et l'épaisseur par calque. Toutes les données de calque sont préservées dans l'export DXF." },
        { q: 'Quels types de cotes sont disponibles ?', a: "Linéaires, alignées, de rayon, de diamètre, angulaires et en chaîne. Toutes stockées comme entités DIMENSION DXF standard compatibles avec d'autres outils CAO." },
        { q: 'Puis-je éditer la géométrie avec des poignées ?', a: "Oui. Sélectionnez une entité pour révéler les poignées aux points clés — extrémités, points médians, centres, extrémités d'arc. Faites glisser pour remodeler directement sur le canevas, ou tapez une valeur en faisant glisser pour un positionnement précis." },
        { q: 'La collaboration en temps réel est-elle prise en charge ?', a: "Pas actuellement. KulmanLab est un outil mono-utilisateur et les dessins restent locaux. La synchronisation cloud et la collaboration sont hors du périmètre actuel." },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: "Les fichiers DXF de KulmanLab sont-ils compatibles avec d'autres logiciels CAO ?", a: "Oui. KulmanLab lit et écrit AC1032 DXF — une version largement prise en charge. Les fichiers s'ouvrent correctement dans LibreCAD, QCAD, BricsCAD, FreeCAD et tout autre outil compatible DXF." },
        { q: 'Quelle est la différence entre DXF et DWG ?', a: "DXF est un format d'échange ouvert basé sur du texte, conçu pour l'interopérabilité. DWG est un format binaire propriétaire. KulmanLab utilise DXF, qui est lisible par pratiquement tout outil CAO." },
        { q: 'KulmanLab peut-il remplacer mon logiciel CAO de bureau ?', a: "Pour la conception 2D — oui. KulmanLab possède un terminal de commandes complet, des calques, l'accrochage, des cotes, l'édition par poignées et la compatibilité DXF. Il ne prend pas en charge la 3D, les blocs/références externes ni les contraintes paramétriques." },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab collecte-t-il mes données de dessin ?', a: "Non. Vos dessins restent dans votre navigateur et ne sont jamais envoyés nulle part. KulmanLab utilise Google Analytics pour des métriques d'utilisation anonymes (vues de pages, nombre de sessions) — aucun contenu de dessin n'est impliqué." },
        { q: 'Des cookies sont-ils utilisés ?', a: "Uniquement les cookies définis automatiquement par Google Analytics. Aucun suivi au-delà de cela, pas de cookies publicitaires, pas de partage de données avec des tiers." },
      ],
    },
  ],

  it: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab è davvero gratuito?', a: 'Sì — completamente gratuito. Nessun abbonamento, nessuna carta di credito, nessun piano nascosto. Il set completo di funzionalità è disponibile per tutti senza limiti.' },
        { q: 'Devo creare un account?', a: 'No. Non ci sono login, registrazione o email richiesti. Apri l\'app e inizia a disegnare immediatamente.' },
        { q: 'Quali browser sono supportati?', a: 'Qualsiasi browser desktop moderno — Chrome, Firefox, Safari ed Edge funzionano tutti. KulmanLab è solo per desktop; mobile e tablet non sono attualmente supportati.' },
        { q: 'Funziona offline?', a: 'Sì. Dopo il primo caricamento l\'app viene memorizzata nella cache e funziona completamente senza connessione internet. I tuoi disegni vengono archiviati localmente, nulla richiede un server.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Dove sono archiviati i miei disegni?', a: 'Nel localStorage del tuo browser — sul tuo dispositivo. Nulla viene mai caricato su un server. Ogni browser su ogni dispositivo ha il proprio archivio indipendente.' },
        { q: 'Cosa succede se cancello i dati del browser?', a: 'I tuoi disegni salvati andranno persi. Esporta sempre una copia DXF di tutto ciò che è importante prima di cancellare l\'archivio del browser.' },
        { q: 'Posso aprire file .dwg?', a: 'KulmanLab supporta DXF (Drawing Exchange Format), non il formato proprietario DWG. La maggior parte delle applicazioni CAD desktop può esportare DXF, quindi esporta prima dall\'applicazione sorgente.' },
        { q: 'Quali formati di esportazione sono disponibili?', a: 'DXF per lo scambio con altri strumenti CAD, e PDF o PNG/WebP per output pronto per la stampa. Il gestore di stampa consente di impostare DPI e formato carta prima dell\'esportazione.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'C\'è un terminale comandi?', a: 'Sì. Digita i comandi direttamente — LINE, CIRCLE, MOVE, TRIM e oltre 50 altri. Il terminale supporta la cronologia (tasti freccia), il completamento automatico (Tab) e l\'input numerico esatto.' },
        { q: 'C\'è supporto per i livelli?', a: 'Gestione completa dei livelli: crea, rinomina, congela, blocca e isola i livelli. Imposta colore, tipo di linea e spessore per livello. Tutti i dati dei livelli vengono preservati nell\'esportazione DXF.' },
        { q: 'Quali tipi di quota sono disponibili?', a: 'Lineari, allineate, raggio, diametro, angolari e continue. Tutte archiviate come entità DIMENSION DXF standard compatibili con altri strumenti CAD.' },
        { q: 'Posso modificare la geometria con i grip?', a: 'Sì. Seleziona qualsiasi entità per rivelare i grip nei punti chiave — endpoint, punti medi, centri, estremità degli archi. Trascina per ridisegnare direttamente sulla lavagna, o digita un valore mentre trascini per un posizionamento preciso.' },
        { q: 'La collaborazione in tempo reale è supportata?', a: 'Non attualmente. KulmanLab è uno strumento per utente singolo e i disegni rimangono locali. La sincronizzazione cloud e la collaborazione sono al di fuori del perimetro attuale.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'I file DXF di KulmanLab sono compatibili con altri software CAD?', a: 'Sì. KulmanLab legge e scrive AC1032 DXF — una versione ampiamente supportata. I file si aprono correttamente in LibreCAD, QCAD, BricsCAD, FreeCAD e qualsiasi altro strumento compatibile DXF.' },
        { q: 'Qual è la differenza tra DXF e DWG?', a: 'DXF è un formato di scambio aperto basato su testo progettato per l\'interoperabilità. DWG è un formato binario proprietario. KulmanLab usa DXF, leggibile da praticamente qualsiasi strumento CAD.' },
        { q: 'KulmanLab può sostituire il mio software CAD desktop?', a: 'Per il disegno 2D — sì. KulmanLab ha un terminale comandi completo, livelli, snap, quote, modifica tramite grip e compatibilità DXF. Non supporta il 3D, i blocchi/riferimenti esterni o i vincoli parametrici.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab raccoglie i miei dati di disegno?', a: 'No. I tuoi disegni rimangono nel tuo browser e non vengono mai inviati da nessuna parte. KulmanLab usa Google Analytics per metriche di utilizzo anonime (visualizzazioni di pagina, conteggi di sessioni) — nessun contenuto di disegno è coinvolto.' },
        { q: 'Vengono usati cookie?', a: 'Solo i cookie impostati automaticamente da Google Analytics. Nessun tracciamento oltre a questo, nessun cookie pubblicitario, nessuna condivisione di dati con terze parti.' },
      ],
    },
  ],

  pt: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'O KulmanLab é realmente gratuito?', a: 'Sim — completamente gratuito. Sem assinatura, sem cartão de crédito, sem plano oculto. O conjunto completo de recursos está disponível para todos sem limites.' },
        { q: 'Preciso criar uma conta?', a: 'Não. Não há login, cadastro ou e-mail necessário. Abra o app e comece a desenhar imediatamente.' },
        { q: 'Quais navegadores são suportados?', a: 'Qualquer navegador de desktop moderno — Chrome, Firefox, Safari e Edge funcionam. O KulmanLab é apenas para desktop; mobile e tablet não são suportados atualmente.' },
        { q: 'Funciona offline?', a: 'Sim. Após o primeiro carregamento, o app é armazenado em cache e funciona completamente sem conexão com a internet. Seus desenhos são armazenados localmente, nada requer um servidor.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Onde meus desenhos são armazenados?', a: 'No localStorage do seu navegador — no seu próprio dispositivo. Nada é jamais enviado para um servidor. Cada navegador em cada dispositivo tem seu próprio armazenamento independente.' },
        { q: 'O que acontece se eu limpar os dados do navegador?', a: 'Seus desenhos salvos serão perdidos. Sempre exporte uma cópia DXF de tudo que for importante antes de limpar o armazenamento do navegador.' },
        { q: 'Posso abrir arquivos .dwg?', a: 'O KulmanLab suporta DXF (Drawing Exchange Format), não o formato proprietário DWG. A maioria dos aplicativos CAD desktop pode exportar DXF, então exporte do seu aplicativo de origem primeiro.' },
        { q: 'Quais formatos de exportação estão disponíveis?', a: 'DXF para intercâmbio com outras ferramentas CAD, e PDF ou PNG/WebP para saída pronta para impressão. O gerenciador de impressão permite definir DPI e tamanho de papel antes de exportar.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Tem terminal de comandos?', a: 'Sim. Digite comandos diretamente — LINE, CIRCLE, MOVE, TRIM e mais de 50 outros. O terminal suporta histórico (teclas de seta), preenchimento automático (Tab) e entrada numérica exata.' },
        { q: 'Há suporte a camadas?', a: 'Gerenciamento completo de camadas: criar, renomear, congelar, bloquear e isolar camadas. Defina cor, tipo de linha e espessura por camada. Todos os dados de camada são preservados na exportação DXF.' },
        { q: 'Quais tipos de cota estão disponíveis?', a: 'Linear, alinhada, raio, diâmetro, angular e em série. Todas armazenadas como entidades DIMENSION DXF padrão, compatíveis com outras ferramentas CAD.' },
        { q: 'Posso editar geometria com grips?', a: 'Sim. Selecione qualquer entidade para revelar os grips nos pontos-chave — extremidades, pontos médios, centros, extremidades de arco. Arraste para remodelar diretamente na tela, ou digite um valor enquanto arrasta para posicionamento exato.' },
        { q: 'Colaboração em tempo real é suportada?', a: 'Atualmente não. O KulmanLab é uma ferramenta para usuário único e os desenhos permanecem locais. Sincronização na nuvem e colaboração estão fora do escopo atual.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Os arquivos DXF do KulmanLab são compatíveis com outros softwares CAD?', a: 'Sim. O KulmanLab lê e escreve DXF AC1032 — uma versão amplamente suportada. Os arquivos abrem corretamente no LibreCAD, QCAD, BricsCAD, FreeCAD e qualquer outra ferramenta compatível com DXF.' },
        { q: 'Qual é a diferença entre DXF e DWG?', a: 'DXF é um formato de intercâmbio aberto e baseado em texto, projetado para interoperabilidade. DWG é um formato binário proprietário. O KulmanLab usa DXF, que é legível por praticamente qualquer ferramenta CAD.' },
        { q: 'O KulmanLab pode substituir meu software CAD desktop?', a: 'Para desenho 2D — sim. O KulmanLab tem um terminal de comandos completo, camadas, snap, cotas, edição por grips e compatibilidade DXF. Não suporta 3D, blocos/referências externas ou restrições paramétricas.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'O KulmanLab coleta meus dados de desenho?', a: 'Não. Seus desenhos ficam no seu navegador e nunca são enviados a lugar nenhum. O KulmanLab usa Google Analytics para métricas de uso anônimas (visualizações de página, contagens de sessão) — nenhum conteúdo de desenho é envolvido.' },
        { q: 'São usados cookies?', a: 'Apenas os cookies definidos automaticamente pelo Google Analytics. Sem rastreamento além disso, sem cookies de publicidade, sem compartilhamento de dados com terceiros.' },
      ],
    },
  ],

  zh: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab 真的免费吗？', a: '是的——完全免费。无订阅、无信用卡、无隐藏计划。完整功能集对所有人无限制开放。' },
        { q: '我需要创建账户吗？', a: '不需要。无需登录、注册或邮箱。打开应用即可立即开始绘图。' },
        { q: '支持哪些浏览器？', a: '任何现代桌面浏览器——Chrome、Firefox、Safari 和 Edge 均可使用。KulmanLab 仅支持桌面端，目前不支持移动端和平板。' },
        { q: '可以离线使用吗？', a: '可以。首次加载后，应用会被缓存，完全无需互联网连接即可运行。您的图纸存储在本地，无需服务器。' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: '我的图纸存储在哪里？', a: '存储在您浏览器的 localStorage 中——在您自己的设备上。任何内容都不会上传到服务器。每台设备上的每个浏览器都有独立的存储空间。' },
        { q: '如果我清除浏览器数据会怎样？', a: '您保存的图纸将会丢失。在清除浏览器存储之前，请务必导出重要图纸的 DXF 副本。' },
        { q: '可以打开 .dwg 文件吗？', a: 'KulmanLab 支持 DXF（图形交换格式），不支持专有的 DWG 格式。大多数桌面 CAD 应用可以导出 DXF，请先从源应用导出。' },
        { q: '支持哪些导出格式？', a: '支持与其他 CAD 工具交换的 DXF，以及用于打印输出的 PDF 或 PNG/WebP。打印管理器允许在导出前设置 DPI 和纸张尺寸。' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: '有命令终端吗？', a: '有。直接输入命令——LINE、CIRCLE、MOVE、TRIM 等 50 多个。终端支持历史记录（方向键）、自动补全（Tab）和精确数字输入。' },
        { q: '支持图层吗？', a: '完整的图层管理：创建、重命名、冻结、锁定和隔离图层。为每个图层设置颜色、线型和线宽。所有图层数据在 DXF 导出时均会保留。' },
        { q: '支持哪些标注类型？', a: '线性、对齐、半径、直径、角度和连续标注。全部作为与其他 CAD 工具兼容的标准 DXF DIMENSION 实体存储。' },
        { q: '可以使用夹点编辑几何图形吗？', a: '可以。选择任意实体，即可在关键点——端点、中点、圆心、弧端点——显示夹点。拖动可直接在画布上重塑，或在拖动时输入数值进行精确定位。' },
        { q: '支持实时协作吗？', a: '目前不支持。KulmanLab 是单用户工具，图纸保留在本地。云同步和协作超出了当前范围。' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'KulmanLab 的 DXF 文件与其他 CAD 软件兼容吗？', a: '兼容。KulmanLab 读写 AC1032 DXF——一个广泛支持的版本。文件可在 LibreCAD、QCAD、BricsCAD、FreeCAD 及任何支持 DXF 的工具中正确打开。' },
        { q: 'DXF 和 DWG 有什么区别？', a: 'DXF 是专为互操作性设计的开放式文本交换格式。DWG 是专有二进制格式。KulmanLab 使用 DXF，几乎所有 CAD 工具都可读取。' },
        { q: 'KulmanLab 可以替代我的桌面 CAD 软件吗？', a: '用于 2D 绘图——可以。KulmanLab 拥有完整的命令终端、图层、捕捉、标注、夹点编辑和 DXF 兼容性。不支持 3D、块/外部参照或参数化约束。' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab 会收集我的图纸数据吗？', a: '不会。您的图纸保留在浏览器中，永远不会发送到任何地方。KulmanLab 使用 Google Analytics 收集匿名使用数据（页面浏览量、会话数）——不涉及任何图纸内容。' },
        { q: '使用 Cookie 吗？', a: '仅使用 Google Analytics 自动设置的 Cookie。除此之外没有跟踪，没有广告 Cookie，没有第三方数据共享。' },
      ],
    },
  ],

  tr: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab gerçekten ücretsiz mi?', a: 'Evet — tamamen ücretsiz. Abonelik yok, kredi kartı yok, gizli plan yok. Tam özellik seti herkese sınırsız olarak sunulmaktadır.' },
        { q: 'Hesap oluşturmam gerekiyor mu?', a: 'Hayır. Giriş, kayıt veya e-posta gerekmez. Uygulamayı açın ve hemen çizmeye başlayın.' },
        { q: 'Hangi tarayıcılar destekleniyor?', a: 'Herhangi bir modern masaüstü tarayıcı — Chrome, Firefox, Safari ve Edge çalışır. KulmanLab yalnızca masaüstü içindir; mobil ve tablet şu anda desteklenmemektedir.' },
        { q: 'Çevrimdışı çalışır mı?', a: 'Evet. İlk yüklemeden sonra uygulama önbelleğe alınır ve internet bağlantısı olmadan tamamen çalışır. Çizimleriniz yerel olarak saklanır, hiçbir şey sunucu gerektirmez.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Çizimlerim nerede saklanır?', a: 'Tarayıcınızın localStorage\'ında — kendi cihazınızda. Hiçbir şey hiçbir zaman bir sunucuya yüklenmez. Her cihazda her tarayıcının bağımsız depolama alanı vardır.' },
        { q: 'Tarayıcı verilerimi temizlersem ne olur?', a: 'Kayıtlı çizimleriniz kaybolur. Tarayıcı depolamasını temizlemeden önce her zaman önemli çizimlerin DXF kopyasını dışa aktarın.' },
        { q: '.dwg dosyalarını açabilir miyim?', a: 'KulmanLab, DXF (Drawing Exchange Format) formatını destekler, tescilli DWG formatını değil. Çoğu masaüstü CAD uygulaması DXF dışa aktarabilir, bu yüzden önce kaynak uygulamanızdan dışa aktarın.' },
        { q: 'Hangi dışa aktarma formatları mevcut?', a: 'Diğer CAD araçlarıyla değiş tokuş için DXF ve baskıya hazır çıktı için PDF veya PNG/WebP. Yazdırma yöneticisi dışa aktarmadan önce DPI ve kağıt boyutu ayarlamanıza olanak tanır.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Komut terminali var mı?', a: 'Evet. Komutları doğrudan yazın — LINE, CIRCLE, MOVE, TRIM ve 50\'den fazlası. Terminal geçmişi (ok tuşları), otomatik tamamlamayı (Tab) ve tam sayısal girişi destekler.' },
        { q: 'Katman desteği var mı?', a: 'Tam katman yönetimi: katman oluştur, yeniden adlandır, dondur, kilitle ve izole et. Katman başına renk, çizgi türü ve çizgi kalınlığı ayarla. Tüm katman verileri DXF dışa aktarımında korunur.' },
        { q: 'Hangi ölçü türleri mevcut?', a: 'Doğrusal, hizalı, yarıçap, çap, açısal ve zincir. Tümü diğer CAD araçlarıyla uyumlu standart DXF DIMENSION nesneleri olarak saklanır.' },
        { q: 'Tutamaçlarla geometri düzenleyebilir miyim?', a: 'Evet. Anahtar noktalarda — uç noktalar, orta noktalar, merkezler, yay uçları — tutamaçları ortaya çıkarmak için herhangi bir nesneyi seçin. Doğrudan tuvalde yeniden şekillendirmek için sürükleyin veya tam yerleşim için sürükleme sırasında bir değer yazın.' },
        { q: 'Gerçek zamanlı işbirliği destekleniyor mu?', a: 'Şu anda hayır. KulmanLab tek kullanıcılı bir araçtır ve çizimler yerel kalır. Bulut senkronizasyonu ve işbirliği mevcut kapsamın dışındadır.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'KulmanLab DXF dosyaları diğer CAD yazılımlarıyla uyumlu mu?', a: 'Evet. KulmanLab AC1032 DXF okur ve yazar — yaygın olarak desteklenen bir sürüm. Dosyalar LibreCAD, QCAD, BricsCAD, FreeCAD ve diğer DXF uyumlu araçlarda doğru açılır.' },
        { q: 'DXF ve DWG arasındaki fark nedir?', a: 'DXF, birlikte çalışabilirlik için tasarlanmış açık, metin tabanlı bir değişim formatıdır. DWG tescilli bir ikili formattır. KulmanLab, neredeyse her CAD aracı tarafından okunabilen DXF kullanır.' },
        { q: 'KulmanLab masaüstü CAD yazılımımın yerini alabilir mi?', a: '2D çizim için — evet. KulmanLab tam komut terminali, katmanlar, yakalama, ölçüler, tutamaç düzenleme ve DXF uyumluluğuna sahiptir. 3D, bloklar/dış referanslar veya parametrik kısıtlamaları desteklemiyor.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab çizim verilerimi topluyor mu?', a: 'Hayır. Çizimleriniz tarayıcınızda kalır ve hiçbir yere gönderilmez. KulmanLab anonim kullanım metrikleri (sayfa görüntülemeleri, oturum sayıları) için Google Analytics kullanır — hiçbir çizim içeriği dahil değildir.' },
        { q: 'Çerez kullanılıyor mu?', a: 'Yalnızca Google Analytics tarafından otomatik olarak ayarlanan çerezler. Bunun ötesinde takip yok, reklam çerezi yok, üçüncü taraf veri paylaşımı yok.' },
      ],
    },
  ],

  uk: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab справді безкоштовний?', a: 'Так — повністю безкоштовний. Без підписки, без кредитної картки, без прихованих планів. Повний набір функцій доступний усім без обмежень.' },
        { q: 'Чи потрібно створювати акаунт?', a: 'Ні. Немає жодного входу, реєстрації та електронної пошти. Відкрийте додаток і одразу починайте малювати.' },
        { q: 'Які браузери підтримуються?', a: 'Будь-який сучасний браузер для настільного комп\'ютера — Chrome, Firefox, Safari та Edge. KulmanLab призначений лише для настільних ПК; мобільні пристрої та планшети наразі не підтримуються.' },
        { q: 'Чи працює він офлайн?', a: 'Так. Після першого завантаження додаток кешується та працює повністю без інтернету. Ваші кресленики зберігаються локально, тому нічого не потребує сервера.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Де зберігаються мої кресленики?', a: 'У localStorage вашого браузера — на вашому пристрої. Нічого ніколи не завантажується на сервер. Кожен браузер на кожному пристрої має власне незалежне сховище.' },
        { q: 'Що станеться, якщо я очищу дані браузера?', a: 'Ваші збережені кресленики буде втрачено. Завжди експортуйте копію DXF важливих кресленнь перед очищенням сховища браузера.' },
        { q: 'Чи можна відкривати файли .dwg?', a: 'KulmanLab підтримує DXF (Drawing Exchange Format), а не власний формат DWG. Більшість настільних CAD-програм можуть експортувати DXF, тому спочатку виконайте експорт з вихідної програми.' },
        { q: 'Які формати експорту доступні?', a: 'DXF для обміну з іншими CAD-інструментами та PDF або PNG/WebP для готового до друку виводу. Менеджер друку дозволяє встановити DPI та розмір паперу перед експортом.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Чи є командний термінал?', a: 'Так. Вводьте команди безпосередньо — LINE, CIRCLE, MOVE, TRIM та понад 50 інших. Термінал підтримує історію (клавіші зі стрілками), автодоповнення (Tab) та точне числове введення.' },
        { q: 'Чи є підтримка шарів?', a: 'Повне керування шарами: створення, перейменування, заморожування, блокування та ізоляція шарів. Встановлення кольору, типу лінії та товщини для кожного шару. Усі дані шарів зберігаються при експорті DXF.' },
        { q: 'Які типи розмірів доступні?', a: 'Лінійні, паралельні, радіус, діаметр, кутові та ланцюгові. Усі зберігаються як стандартні об\'єкти DXF DIMENSION, сумісні з іншими CAD-інструментами.' },
        { q: 'Чи можна редагувати геометрію за допомогою ручок?', a: 'Так. Виділіть будь-який об\'єкт, щоб побачити ручки в ключових точках — кінцеві точки, середні точки, центри, кінці дуг. Перетягуйте для зміни форми прямо на полотні або вводьте значення під час перетягування для точного розміщення.' },
        { q: 'Чи підтримується співпраця в реальному часі?', a: 'Наразі ні. KulmanLab — інструмент для одного користувача, і кресленики залишаються локальними. Хмарна синхронізація та співпраця виходять за межі поточного обсягу.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Чи сумісні DXF файли KulmanLab з іншим CAD-програмним забезпеченням?', a: 'Так. KulmanLab читає та записує AC1032 DXF — широко підтримувана версія. Файли коректно відкриваються у LibreCAD, QCAD, BricsCAD, FreeCAD та будь-якому іншому DXF-сумісному інструменті.' },
        { q: 'Яка різниця між DXF та DWG?', a: 'DXF — це відкритий текстовий формат обміну, розроблений для сумісності. DWG — власний бінарний формат. KulmanLab використовує DXF, який підтримується практично будь-яким CAD-інструментом.' },
        { q: 'Чи може KulmanLab замінити моє настільне CAD-програмне забезпечення?', a: 'Для 2D-креслення — так. KulmanLab має повний командний термінал, шари, прив\'язку, розміри, редагування ручками та сумісність DXF. Він не підтримує 3D, блоки/зовнішні посилання або параметричні обмеження.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'Чи збирає KulmanLab дані моїх кресленнь?', a: 'Ні. Ваші кресленики залишаються у браузері та ніколи нікуди не надсилаються. KulmanLab використовує Google Analytics для анонімних показників використання (перегляди сторінок, кількість сеансів) — жодний вміст кресленнь не залучається.' },
        { q: 'Чи використовуються cookie?', a: 'Лише cookie, автоматично встановлені Google Analytics. Без додаткового відстеження, без рекламних cookie, без передачі даних третім сторонам.' },
      ],
    },
  ],

  hi: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'क्या KulmanLab वाकई मुफ़्त है?', a: 'हां — पूरी तरह मुफ़्त। कोई सदस्यता नहीं, कोई क्रेडिट कार्ड नहीं, कोई छिपी हुई योजना नहीं। पूरा फ़ीचर सेट बिना किसी सीमा के सभी के लिए उपलब्ध है।' },
        { q: 'क्या मुझे खाता बनाना होगा?', a: 'नहीं। कोई लॉगिन, साइन-अप या ईमेल की आवश्यकता नहीं है। ऐप खोलें और तुरंत ड्राइंग शुरू करें।' },
        { q: 'कौन से ब्राउज़र समर्थित हैं?', a: 'कोई भी आधुनिक डेस्कटॉप ब्राउज़र — Chrome, Firefox, Safari और Edge सभी काम करते हैं। KulmanLab केवल डेस्कटॉप के लिए है; मोबाइल और टैबलेट वर्तमान में समर्थित नहीं हैं।' },
        { q: 'क्या यह ऑफ़लाइन काम करता है?', a: 'हां। पहली लोड के बाद ऐप कैश हो जाती है और बिना इंटरनेट के पूरी तरह चलती है। आपकी ड्राइंग स्थानीय रूप से संग्रहीत होती हैं इसलिए किसी सर्वर की आवश्यकता नहीं।' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'मेरी ड्राइंग कहां संग्रहीत होती हैं?', a: 'आपके ब्राउज़र के localStorage में — आपके अपने डिवाइस पर। कुछ भी कभी सर्वर पर अपलोड नहीं होता। प्रत्येक डिवाइस पर प्रत्येक ब्राउज़र का अपना स्वतंत्र स्टोरेज होता है।' },
        { q: 'अगर मैं ब्राउज़र डेटा साफ़ करूं तो क्या होगा?', a: 'आपकी सहेजी गई ड्राइंग खो जाएंगी। ब्राउज़र स्टोरेज साफ़ करने से पहले हमेशा महत्वपूर्ण ड्राइंग की DXF कॉपी निर्यात करें।' },
        { q: 'क्या मैं .dwg फ़ाइलें खोल सकता हूं?', a: 'KulmanLab DXF (Drawing Exchange Format) का समर्थन करता है, न कि DWG प्रारूप का। अधिकांश डेस्कटॉप CAD एप्लिकेशन DXF निर्यात कर सकते हैं, इसलिए पहले अपने स्रोत ऐप से निर्यात करें।' },
        { q: 'कौन से निर्यात प्रारूप उपलब्ध हैं?', a: 'DXF अन्य CAD टूल के साथ आदान-प्रदान के लिए, और PDF या PNG/WebP प्रिंट-तैयार आउटपुट के लिए। प्रिंट मैनेजर निर्यात से पहले DPI और पेपर साइज़ सेट करने देता है।' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'क्या कमांड टर्मिनल है?', a: 'हां। सीधे कमांड टाइप करें — LINE, CIRCLE, MOVE, TRIM और 50+ अन्य। टर्मिनल इतिहास (एरो कीज़), ऑटोकम्पलीट (Tab) और सटीक संख्यात्मक इनपुट का समर्थन करता है।' },
        { q: 'क्या लेयर समर्थन है?', a: 'पूर्ण लेयर प्रबंधन: लेयर बनाएं, नाम बदलें, फ्रीज़ करें, लॉक करें और आइसोलेट करें। प्रत्येक लेयर के लिए रंग, लाइनटाइप और लाइनवेट सेट करें। DXF निर्यात में सभी लेयर डेटा संरक्षित रहता है।' },
        { q: 'कौन से माप प्रकार उपलब्ध हैं?', a: 'रैखिक, संरेखित, त्रिज्या, व्यास, कोणीय और जारी माप। सभी मानक DXF DIMENSION ऑब्जेक्ट के रूप में संग्रहीत जो अन्य CAD टूल के साथ संगत हैं।' },
        { q: 'क्या मैं ग्रिप से ज्यामिति संपादित कर सकता हूं?', a: 'हां। किसी भी ऑब्जेक्ट को चुनें तो मुख्य बिंदुओं पर ग्रिप हैंडल दिखाई देते हैं — एंडपॉइंट, मिडपॉइंट, केंद्र, आर्क एंड। सीधे कैनवास पर खींचकर आकार बदलें, या सटीक प्लेसमेंट के लिए खींचते समय मूल्य टाइप करें।' },
        { q: 'क्या रियल-टाइम सहयोग समर्थित है?', a: 'अभी नहीं। KulmanLab एकल-उपयोगकर्ता टूल है और ड्राइंग स्थानीय रहती हैं। क्लाउड सिंक और सहयोग वर्तमान दायरे से बाहर हैं।' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'क्या KulmanLab DXF फ़ाइलें अन्य CAD सॉफ़्टवेयर के साथ संगत हैं?', a: 'हां। KulmanLab AC1032 DXF पढ़ता और लिखता है — एक व्यापक रूप से समर्थित संस्करण। फ़ाइलें LibreCAD, QCAD, BricsCAD, FreeCAD और किसी भी अन्य DXF-सक्षम टूल में सही से खुलती हैं।' },
        { q: 'DXF और DWG में क्या अंतर है?', a: 'DXF एक खुला, टेक्स्ट-आधारित विनिमय प्रारूप है जो इंटरऑपरेबिलिटी के लिए डिज़ाइन किया गया है। DWG एक मालिकाना बाइनरी प्रारूप है। KulmanLab DXF का उपयोग करता है, जो लगभग हर CAD टूल द्वारा पढ़ा जा सकता है।' },
        { q: 'क्या KulmanLab मेरे डेस्कटॉप CAD सॉफ़्टवेयर की जगह ले सकता है?', a: '2D ड्राफ्टिंग के लिए — हां। KulmanLab में पूर्ण कमांड टर्मिनल, लेयर, स्नैपिंग, माप, ग्रिप एडिटिंग और DXF संगतता है। यह 3D, ब्लॉक/xref या पैरामीट्रिक कंस्ट्रेंट का समर्थन नहीं करता।' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'क्या KulmanLab मेरी ड्राइंग डेटा एकत्र करता है?', a: 'नहीं। आपकी ड्राइंग आपके ब्राउज़र में रहती हैं और कहीं नहीं भेजी जातीं। KulmanLab अनाम उपयोग मेट्रिक्स (पेज व्यू, सत्र गणना) के लिए Google Analytics का उपयोग करता है — कोई ड्राइंग सामग्री शामिल नहीं।' },
        { q: 'क्या कुकी का उपयोग होता है?', a: 'केवल Google Analytics द्वारा स्वचालित रूप से सेट की गई कुकी। इसके अलावा कोई ट्रैकिंग नहीं, कोई विज्ञापन कुकी नहीं, कोई तृतीय-पक्ष डेटा साझाकरण नहीं।' },
      ],
    },
  ],

  ar: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'هل KulmanLab مجاني حقاً؟', a: 'نعم — مجاني تماماً. بدون اشتراك، بدون بطاقة ائتمان، بدون خطط مخفية. مجموعة الميزات الكاملة متاحة للجميع بدون قيود.' },
        { q: 'هل أحتاج إلى إنشاء حساب؟', a: 'لا. لا يوجد تسجيل دخول أو تسجيل أو بريد إلكتروني مطلوب. افتح التطبيق وابدأ الرسم فوراً.' },
        { q: 'ما المتصفحات المدعومة؟', a: 'أي متصفح حديث لسطح المكتب — Chrome وFirefox وSafari وEdge تعمل جميعها. KulmanLab مخصص لسطح المكتب فقط؛ الهاتف والجهاز اللوحي غير مدعومَين حالياً.' },
        { q: 'هل يعمل دون اتصال؟', a: 'نعم. بعد التحميل الأول يُخزَّن التطبيق مؤقتاً ويعمل بالكامل دون إنترنت. رسوماتك مخزنة محلياً فلا شيء يحتاج خادماً.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'أين تُخزَّن رسوماتي؟', a: 'في localStorage المتصفح — على جهازك الخاص. لا شيء يُرفع إلى خادم أبداً. كل متصفح على كل جهاز له تخزينه المستقل.' },
        { q: 'ماذا يحدث إذا مسحت بيانات المتصفح؟', a: 'ستُفقد رسوماتك المحفوظة. صدّر دائماً نسخة DXF من أي رسم مهم قبل مسح تخزين المتصفح.' },
        { q: 'هل يمكنني فتح ملفات .dwg؟', a: 'يدعم KulmanLab تنسيق DXF (Drawing Exchange Format) وليس تنسيق DWG الخاص. معظم تطبيقات CAD لسطح المكتب تستطيع تصدير DXF، لذا صدّر من تطبيقك المصدر أولاً.' },
        { q: 'ما تنسيقات التصدير المتاحة؟', a: 'DXF للتبادل مع أدوات CAD الأخرى، وPDF أو PNG/WebP للإخراج الجاهز للطباعة. يتيح لك مدير الطباعة ضبط DPI وحجم الورق قبل التصدير.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'هل توجد محطة أوامر؟', a: 'نعم. اكتب الأوامر مباشرة — LINE وCIRCLE وMOVE وTRIM وأكثر من 50 أمراً آخر. تدعم المحطة السجل (مفاتيح الأسهم) والإكمال التلقائي (Tab) والإدخال الرقمي الدقيق.' },
        { q: 'هل هناك دعم للطبقات؟', a: 'إدارة كاملة للطبقات: إنشاء وإعادة تسمية وتجميد وقفل وعزل الطبقات. ضبط اللون ونوع الخط وعرضه لكل طبقة. تُحفظ جميع بيانات الطبقات عند تصدير DXF.' },
        { q: 'ما أنواع الأبعاد المتاحة؟', a: 'خطية ومحاذاة ونصف قطر وقطر وزاوية ومستمرة. كلها مخزنة كعناصر DXF DIMENSION قياسية متوافقة مع أدوات CAD الأخرى.' },
        { q: 'هل يمكنني تحرير الهندسة بنقاط التحكم؟', a: 'نعم. حدد أي عنصر لإظهار نقاط التحكم عند النقاط الرئيسية — النهايات والنقط الوسطى والمراكز ونهايات الأقواس. اسحب لإعادة التشكيل مباشرة على اللوحة أو اكتب قيمة أثناء السحب للتموضع الدقيق.' },
        { q: 'هل التعاون الفوري مدعوم؟', a: 'ليس حالياً. KulmanLab أداة لمستخدم واحد والرسومات تبقى محلية. المزامنة السحابية والتعاون خارج النطاق الحالي.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'هل ملفات DXF الخاصة بـ KulmanLab متوافقة مع برامج CAD الأخرى؟', a: 'نعم. يقرأ KulmanLab ويكتب DXF بتنسيق AC1032 — إصدار مدعوم على نطاق واسع. تُفتح الملفات بشكل صحيح في LibreCAD وQCAD وBricsCAD وFreeCAD وأي أداة تدعم DXF.' },
        { q: 'ما الفرق بين DXF وDWG؟', a: 'DXF تنسيق تبادل مفتوح نصي مصمم للتشغيل البيني. DWG تنسيق ثنائي خاص. يستخدم KulmanLab DXF الذي يمكن قراءته بواسطة أي أداة CAD تقريباً.' },
        { q: 'هل يمكن لـ KulmanLab أن يحل محل برنامج CAD لسطح المكتب؟', a: 'للرسم الثنائي الأبعاد — نعم. يحتوي KulmanLab على محطة أوامر كاملة وطبقات والتقاط وأبعاد وتحرير نقاط التحكم وتوافق DXF. لا يدعم ثلاثي الأبعاد أو الكتل/المراجع الخارجية أو القيود البارامترية.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'هل يجمع KulmanLab بيانات رسوماتي؟', a: 'لا. رسوماتك تبقى في متصفحك ولا تُرسل إلى أي مكان. يستخدم KulmanLab Google Analytics لمقاييس الاستخدام المجهولة (مشاهدات الصفحة وعدد الجلسات) — لا يشمل ذلك محتوى الرسومات.' },
        { q: 'هل تُستخدم ملفات تعريف الارتباط؟', a: 'فقط ملفات تعريف الارتباط التي يضعها Google Analytics تلقائياً. لا تتبع إضافي، لا ملفات تعريف ارتباط إعلانية، لا مشاركة بيانات مع أطراف ثالثة.' },
      ],
    },
  ],

  id: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'Apakah KulmanLab benar-benar gratis?', a: 'Ya — sepenuhnya gratis. Tanpa langganan, tanpa kartu kredit, tanpa paket tersembunyi. Kumpulan fitur lengkap tersedia untuk semua orang tanpa batasan.' },
        { q: 'Apakah saya perlu membuat akun?', a: 'Tidak. Tidak ada login, pendaftaran, atau email yang diperlukan. Buka aplikasi dan langsung mulai menggambar.' },
        { q: 'Browser apa yang didukung?', a: 'Browser desktop modern mana pun — Chrome, Firefox, Safari, dan Edge semuanya berfungsi. KulmanLab hanya untuk desktop; perangkat mobile dan tablet belum didukung saat ini.' },
        { q: 'Apakah berfungsi offline?', a: 'Ya. Setelah pemuatan pertama, aplikasi di-cache dan berjalan sepenuhnya tanpa koneksi internet. Gambar Anda disimpan secara lokal sehingga tidak memerlukan server.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Di mana gambar saya disimpan?', a: 'Di localStorage browser Anda — di perangkat Anda sendiri. Tidak ada yang pernah diunggah ke server. Setiap browser di setiap perangkat memiliki penyimpanan independennya sendiri.' },
        { q: 'Apa yang terjadi jika saya menghapus data browser?', a: 'Gambar tersimpan Anda akan hilang. Selalu ekspor salinan DXF dari hal penting sebelum menghapus penyimpanan browser.' },
        { q: 'Bisakah saya membuka file .dwg?', a: 'KulmanLab mendukung DXF (Drawing Exchange Format), bukan format DWG yang bersifat proprietary. Sebagian besar aplikasi CAD desktop dapat mengekspor DXF, jadi ekspor dari aplikasi sumber Anda terlebih dahulu.' },
        { q: 'Format ekspor apa yang tersedia?', a: 'DXF untuk pertukaran dengan alat CAD lain, dan PDF atau PNG/WebP untuk output siap cetak. Manajer cetak memungkinkan Anda mengatur DPI dan ukuran kertas sebelum mengekspor.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Apakah ada terminal perintah?', a: 'Ya. Ketik perintah langsung — LINE, CIRCLE, MOVE, TRIM, dan lebih dari 50 lainnya. Terminal mendukung riwayat (tombol panah), pelengkapan otomatis (Tab), dan input numerik yang tepat.' },
        { q: 'Apakah ada dukungan layer?', a: 'Manajemen layer penuh: buat, ganti nama, bekukan, kunci, dan isolasi layer. Atur warna, tipe garis, dan ketebalan garis per layer. Semua data layer dipertahankan dalam ekspor DXF.' },
        { q: 'Jenis dimensi apa yang tersedia?', a: 'Linier, sejajar, radius, diameter, sudut, dan lanjutan. Semua disimpan sebagai entitas DIMENSION DXF standar yang kompatibel dengan alat CAD lainnya.' },
        { q: 'Bisakah saya mengedit geometri dengan grip?', a: 'Ya. Pilih entitas mana pun untuk menampilkan pegangan grip di titik-titik kunci — titik akhir, titik tengah, pusat, ujung busur. Seret untuk membentuk ulang langsung di kanvas, atau ketik nilai saat menyeret untuk penempatan yang tepat.' },
        { q: 'Apakah kolaborasi real-time didukung?', a: 'Belum saat ini. KulmanLab adalah alat pengguna tunggal dan gambar tetap lokal. Sinkronisasi cloud dan kolaborasi berada di luar cakupan saat ini.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Apakah file DXF KulmanLab kompatibel dengan perangkat lunak CAD lain?', a: 'Ya. KulmanLab membaca dan menulis DXF AC1032 — versi yang didukung secara luas. File terbuka dengan benar di LibreCAD, QCAD, BricsCAD, FreeCAD, dan alat apapun yang mendukung DXF.' },
        { q: 'Apa perbedaan antara DXF dan DWG?', a: 'DXF adalah format pertukaran terbuka berbasis teks yang dirancang untuk interoperabilitas. DWG adalah format biner proprietary. KulmanLab menggunakan DXF yang dapat dibaca oleh hampir semua alat CAD.' },
        { q: 'Bisakah KulmanLab menggantikan perangkat lunak CAD desktop saya?', a: 'Untuk drafting 2D — ya. KulmanLab memiliki terminal perintah lengkap, layer, snapping, dimensi, grip editing, dan kompatibilitas DXF. Tidak mendukung 3D, blok/xref, atau batasan parametrik.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'Apakah KulmanLab mengumpulkan data gambar saya?', a: 'Tidak. Gambar Anda tetap di browser dan tidak pernah dikirim ke mana pun. KulmanLab menggunakan Google Analytics untuk metrik penggunaan anonim (tampilan halaman, jumlah sesi) — tidak ada konten gambar yang terlibat.' },
        { q: 'Apakah cookie digunakan?', a: 'Hanya cookie yang secara otomatis ditetapkan oleh Google Analytics. Tidak ada pelacakan lebih lanjut, tidak ada cookie iklan, tidak ada berbagi data pihak ketiga.' },
      ],
    },
  ],
  ja: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLabは本当に無料ですか？', a: 'はい、完全無料です。サブスクリプション、クレジットカード、隠れた料金プランは一切ありません。すべての機能を制限なくご利用いただけます。' },
        { q: 'アカウントの作成は必要ですか？', a: '不要です。ログイン、サインアップ、メールアドレスはいずれも必要ありません。アプリを開くだけですぐに作図を始められます。' },
        { q: '対応ブラウザは何ですか？', a: 'モダンなデスクトップブラウザであれば動作します。Chrome、Firefox、Safari、Edgeに対応しています。KulmanLabはデスクトップ専用です。モバイルやタブレットは現在非対応です。' },
        { q: 'オフラインでも使えますか？', a: 'はい。初回読み込み後はアプリがキャッシュされ、インターネット接続なしで動作します。図面はローカルに保存されるため、サーバーは不要です。' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: '図面はどこに保存されますか？', a: 'ブラウザのlocalStorage、つまりご自身のデバイス上に保存されます。サーバーへのアップロードは一切行われません。デバイスごと、ブラウザごとに独立したストレージが使われます。' },
        { q: 'ブラウザのデータを消去するとどうなりますか？', a: '保存済みの図面が失われます。重要なファイルはブラウザデータを消去する前に必ずDXFとしてエクスポートしておいてください。' },
        { q: '.dwgファイルは開けますか？', a: 'KulmanLabはDXF（Drawing Exchange Format）に対応しています。DWGには対応していません。多くのCADアプリからDXF形式でエクスポートできますので、先にDXFへ変換してください。' },
        { q: '出力できるファイル形式は何ですか？', a: '他のCADツールとのやり取りにはDXF、印刷用途にはPDFまたはPNG/WebPを出力できます。印刷マネージャーでDPIと用紙サイズを設定してから出力できます。' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'コマンドターミナルはありますか？', a: 'あります。LINE、CIRCLE、MOVE、TRIMなど50以上のコマンドを直接入力できます。ターミナルは履歴（矢印キー）、オートコンプリート（Tab）、数値入力に対応しています。' },
        { q: 'レイヤー機能はありますか？', a: 'フル装備のレイヤー管理機能があります。レイヤーの作成、名前変更、フリーズ、ロック、分離が可能で、色・線種・線幅をレイヤーごとに設定できます。すべてのレイヤー情報はDXFエクスポートに保持されます。' },
        { q: '使用できる寸法の種類は何ですか？', a: '水平・垂直、整列、半径、直径、角度、連続寸法に対応しています。すべて標準DXF DIMENSIONエンティティとして保存され、他のDXF対応ツールと互換性があります。' },
        { q: 'グリップで図形を編集できますか？', a: 'はい。図形を選択するとエンドポイント、中点、中心、円弧端点などにグリップハンドルが表示されます。ドラッグしてキャンバス上で直接形状を変更したり、ドラッグ中に数値を入力して正確な位置を指定できます。' },
        { q: 'リアルタイムのコラボレーションは対応していますか？', a: '現在は未対応です。KulmanLabはシングルユーザーのツールで、図面はローカルに保存されます。クラウド同期やコラボレーション機能は現時点では対象外です。' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'KulmanLabのDXFファイルは他のCADソフトと互換性がありますか？', a: 'はい。KulmanLabはAC1032 DXFを読み書きします。LibreCAD、QCAD、BricsCAD、FreeCADなど、DXF対応ツールで正常に開けます。' },
        { q: 'DXFとDWGの違いは何ですか？', a: 'DXFは相互運用性のために設計されたオープンなテキストベースの交換フォーマットです。DWGはプロプライエタリなバイナリ形式です。KulmanLabはDXFを使用しており、事実上すべてのCADツールで読み取れます。' },
        { q: 'KulmanLabはデスクトップCADの代替として使えますか？', a: '2D製図においては十分代替できます。フルコマンドターミナル、レイヤー、スナップ、寸法、グリップ編集、DXF互換性を備えています。3D、ブロック/外部参照、パラメトリック拘束には対応していません。' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLabは図面データを収集しますか？', a: '収集しません。図面はブラウザ内に保存され、どこにも送信されません。KulmanLabは匿名の利用統計（ページビュー、セッション数）にGoogle Analyticsを使用していますが、図面の内容は一切関係しません。' },
        { q: 'Cookieは使用されていますか？', a: 'Google Analyticsが自動的に設定するCookieのみです。それ以外のトラッキング、広告Cookie、第三者へのデータ共有は行っていません。' },
      ],
    },
  ],

  pl: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'Czy KulmanLab jest naprawdę bezpłatny?', a: 'Tak — całkowicie bezpłatny. Bez subskrypcji, bez karty kredytowej, bez ukrytych planów. Pełny zestaw funkcji jest dostępny dla wszystkich bez żadnych ograniczeń.' },
        { q: 'Czy muszę tworzyć konto?', a: 'Nie. Nie ma logowania, rejestracji ani wymaganego adresu e-mail. Otwórz aplikację i zacznij rysować od razu.' },
        { q: 'Jakie przeglądarki są obsługiwane?', a: 'Każda nowoczesna przeglądarka desktopowa — Chrome, Firefox, Safari i Edge działają bez problemu. KulmanLab jest przeznaczony wyłącznie na komputery stacjonarne; urządzenia mobilne i tablety nie są obecnie obsługiwane.' },
        { q: 'Czy działa offline?', a: 'Tak. Po pierwszym załadowaniu aplikacja jest buforowana i działa całkowicie bez połączenia z internetem. Twoje rysunki są przechowywane lokalnie, więc nic nie wymaga serwera.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Gdzie są przechowywane moje rysunki?', a: 'W localStorage Twojej przeglądarki — na Twoim własnym urządzeniu. Żadne dane nie są nigdy przesyłane na serwer. Każda przeglądarka na każdym urządzeniu ma własną niezależną przestrzeń przechowywania.' },
        { q: 'Co się stanie, jeśli wyczyści dane przeglądarki?', a: 'Twoje zapisane rysunki zostaną utracone. Zawsze eksportuj kopię DXF wszystkich ważnych rysunków przed wyczyszczeniem danych przeglądarki.' },
        { q: 'Czy mogę otwierać pliki .dwg?', a: 'KulmanLab obsługuje format DXF (Drawing Exchange Format), a nie własnościowy format DWG. Większość desktopowych aplikacji CAD może eksportować DXF — najpierw wyeksportuj plik ze swojej aplikacji źródłowej.' },
        { q: 'Jakie formaty eksportu są dostępne?', a: 'DXF do wymiany z innymi narzędziami CAD oraz PDF lub PNG/WebP do druku. Menedżer druku pozwala ustawić DPI i rozmiar papieru przed eksportem.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Czy jest terminal poleceń?', a: 'Tak. Wpisuj polecenia bezpośrednio — LINE, CIRCLE, MOVE, TRIM i ponad 50 innych. Terminal obsługuje historię (klawisze strzałek), autouzupełnianie (Tab) oraz dokładne wprowadzanie wartości numerycznych.' },
        { q: 'Czy jest obsługa warstw?', a: 'Pełne zarządzanie warstwami: tworzenie, zmiana nazwy, zamrażanie, blokowanie i izolowanie warstw. Ustawianie koloru, typu linii i grubości linii dla każdej warstwy. Wszystkie dane warstw są zachowywane podczas eksportu DXF.' },
        { q: 'Jakie typy wymiarów są dostępne?', a: 'Liniowe, wyrównane, promień, średnica, kątowe i ciągłe. Wszystkie zapisywane jako standardowe obiekty DXF DIMENSION, kompatybilne z innymi narzędziami CAD obsługującymi DXF.' },
        { q: 'Czy mogę edytować geometrię za pomocą uchwytów?', a: 'Tak. Wybierz dowolny obiekt, aby wyświetlić uchwyty w kluczowych punktach — punktach końcowych, środkowych, środkach okręgów, końcach łuków. Przeciągaj, aby zmieniać kształt bezpośrednio na płótnie, lub wpisz wartość podczas przeciągania dla dokładnego rozmieszczenia.' },
        { q: 'Czy obsługiwana jest współpraca w czasie rzeczywistym?', a: 'Obecnie nie. KulmanLab jest narzędziem dla jednego użytkownika, a rysunki pozostają lokalne. Synchronizacja z chmurą i współpraca wykraczają poza obecny zakres funkcji.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Czy pliki DXF z KulmanLab są kompatybilne z innym oprogramowaniem CAD?', a: 'Tak. KulmanLab odczytuje i zapisuje format AC1032 DXF — szeroko obsługiwana wersja. Pliki otwierają się poprawnie w LibreCAD, QCAD, BricsCAD, FreeCAD i każdym innym narzędziu obsługującym DXF.' },
        { q: 'Jaka jest różnica między DXF a DWG?', a: 'DXF to otwarty, tekstowy format wymiany zaprojektowany z myślą o współpracy między aplikacjami. DWG to własnościowy format binarny. KulmanLab używa DXF, który jest czytelny przez praktycznie każde narzędzie CAD.' },
        { q: 'Czy KulmanLab może zastąpić moje desktopowe oprogramowanie CAD?', a: 'Do rysowania 2D — tak. KulmanLab posiada pełny terminal poleceń, warstwy, przyciąganie, wymiary, edycję za pomocą uchwytów oraz kompatybilność z DXF. Nie obsługuje 3D, bloków/odwołań zewnętrznych ani wiązań parametrycznych.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'Czy KulmanLab zbiera dane moich rysunków?', a: 'Nie. Twoje rysunki pozostają w przeglądarce i nigdy nie są nigdzie wysyłane. KulmanLab używa Google Analytics do anonimowych statystyk użytkowania (odsłony stron, liczba sesji) — żadna zawartość rysunków nie jest zaangażowana.' },
        { q: 'Czy używane są pliki cookie?', a: 'Tylko pliki cookie ustawiane automatycznie przez Google Analytics. Żadnego dodatkowego śledzenia, żadnych reklamowych plików cookie, żadnego udostępniania danych stronom trzecim.' },
      ],
    },
  ],

  ko: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab은 정말 무료인가요?', a: '네, 완전히 무료입니다. 구독료, 신용카드, 숨겨진 요금제가 전혀 없습니다. 모든 기능을 제한 없이 누구나 이용할 수 있습니다.' },
        { q: '계정을 만들어야 하나요?', a: '아니요. 로그인, 회원가입, 이메일이 필요하지 않습니다. 앱을 열면 즉시 도면 작업을 시작할 수 있습니다.' },
        { q: '어떤 브라우저를 지원하나요?', a: '모든 최신 데스크톱 브라우저를 지원합니다. Chrome, Firefox, Safari, Edge 모두 사용 가능합니다. KulmanLab은 데스크톱 전용이며 현재 모바일과 태블릿은 지원하지 않습니다.' },
        { q: '오프라인에서도 사용할 수 있나요?', a: '네. 처음 로드한 후에는 앱이 캐시되어 인터넷 연결 없이도 완전히 동작합니다. 도면은 로컬에 저장되므로 서버가 필요하지 않습니다.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: '도면은 어디에 저장되나요?', a: '브라우저의 localStorage에 저장됩니다. 즉, 사용자의 기기에만 보관됩니다. 서버에는 아무것도 업로드되지 않습니다. 기기와 브라우저마다 독립적인 저장 공간을 사용합니다.' },
        { q: '브라우저 데이터를 삭제하면 어떻게 되나요?', a: '저장된 도면이 모두 삭제됩니다. 브라우저 저장 공간을 비우기 전에 중요한 도면의 DXF 파일을 반드시 내보내두세요.' },
        { q: '.dwg 파일을 열 수 있나요?', a: 'KulmanLab은 DXF(Drawing Exchange Format)를 지원하며 독점 형식인 DWG는 지원하지 않습니다. 대부분의 데스크톱 CAD 프로그램에서 DXF로 내보낼 수 있으므로, 원본 프로그램에서 먼저 내보내기를 하세요.' },
        { q: '어떤 내보내기 형식을 사용할 수 있나요?', a: '다른 CAD 도구와 교환하려면 DXF를, 인쇄용 출력에는 PDF 또는 PNG/WebP를 사용할 수 있습니다. 인쇄 관리자에서 내보내기 전에 DPI와 용지 크기를 설정할 수 있습니다.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: '명령 터미널이 있나요?', a: '있습니다. LINE, CIRCLE, MOVE, TRIM 등 50개 이상의 명령을 직접 입력할 수 있습니다. 터미널은 이력(화살표 키), 자동 완성(Tab), 정확한 수치 입력을 지원합니다.' },
        { q: '레이어 기능이 있나요?', a: '완전한 레이어 관리 기능을 제공합니다. 레이어 생성, 이름 변경, 고정, 잠금, 분리가 가능하며 레이어별로 색상, 선 종류, 선 두께를 설정할 수 있습니다. 모든 레이어 데이터는 DXF 내보내기 시 그대로 유지됩니다.' },
        { q: '어떤 치수 유형을 사용할 수 있나요?', a: '선형, 정렬, 반지름, 지름, 각도, 연속 치수를 지원합니다. 모두 표준 DXF DIMENSION 엔티티로 저장되어 다른 DXF 호환 CAD 도구와 호환됩니다.' },
        { q: '그립으로 도형을 편집할 수 있나요?', a: '네. 엔티티를 선택하면 끝점, 중점, 중심, 호 끝점 등 주요 위치에 그립 핸들이 표시됩니다. 드래그하여 캔버스에서 직접 형태를 변경하거나, 드래그 중에 값을 입력해 정확한 위치를 지정할 수 있습니다.' },
        { q: '실시간 협업 기능이 지원되나요?', a: '현재는 지원하지 않습니다. KulmanLab은 단일 사용자 도구이며 도면은 로컬에 저장됩니다. 클라우드 동기화와 협업 기능은 현재 지원 범위에 포함되어 있지 않습니다.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'KulmanLab의 DXF 파일이 다른 CAD 소프트웨어와 호환되나요?', a: '네. KulmanLab은 널리 지원되는 버전인 AC1032 DXF를 읽고 씁니다. LibreCAD, QCAD, BricsCAD, FreeCAD 및 DXF를 지원하는 모든 도구에서 정상적으로 파일이 열립니다.' },
        { q: 'DXF와 DWG의 차이가 무엇인가요?', a: 'DXF는 상호 운용성을 위해 설계된 개방형 텍스트 기반 교환 형식입니다. DWG는 독점 바이너리 형식입니다. KulmanLab은 DXF를 사용하며, 거의 모든 CAD 도구에서 읽을 수 있습니다.' },
        { q: 'KulmanLab이 데스크톱 CAD 소프트웨어를 대체할 수 있나요?', a: '2D 도면 작업에서는 가능합니다. KulmanLab은 완전한 명령 터미널, 레이어, 스냅, 치수, 그립 편집, DXF 호환성을 갖추고 있습니다. 3D, 블록/외부 참조, 파라메트릭 구속 조건은 지원하지 않습니다.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab이 도면 데이터를 수집하나요?', a: '아니요. 도면은 브라우저 내에 보관되며 어디에도 전송되지 않습니다. KulmanLab은 익명 이용 통계(페이지뷰, 세션 수)를 위해 Google Analytics를 사용하지만 도면 내용은 포함되지 않습니다.' },
        { q: '쿠키가 사용되나요?', a: 'Google Analytics가 자동으로 설정하는 쿠키만 사용됩니다. 그 외 추적은 없으며, 광고 쿠키도 없고, 제3자에게 데이터를 공유하지 않습니다.' },
      ],
    },
  ],

  vi: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab có thực sự miễn phí không?', a: 'Có — hoàn toàn miễn phí. Không có đăng ký, không cần thẻ tín dụng, không có gói ẩn. Toàn bộ tính năng được cung cấp cho tất cả mọi người mà không có giới hạn.' },
        { q: 'Tôi có cần tạo tài khoản không?', a: 'Không. Không cần đăng nhập, đăng ký hay email. Mở ứng dụng và bắt đầu vẽ ngay lập tức.' },
        { q: 'Những trình duyệt nào được hỗ trợ?', a: 'Bất kỳ trình duyệt máy tính để bàn hiện đại nào — Chrome, Firefox, Safari và Edge đều hoạt động. KulmanLab chỉ dành cho máy tính để bàn; thiết bị di động và máy tính bảng hiện chưa được hỗ trợ.' },
        { q: 'Có hoạt động ngoại tuyến không?', a: 'Có. Sau lần tải đầu tiên, ứng dụng được lưu vào bộ nhớ đệm và chạy hoàn toàn mà không cần kết nối internet. Các bản vẽ của bạn được lưu trữ cục bộ nên không cần máy chủ.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Bản vẽ của tôi được lưu trữ ở đâu?', a: 'Trong localStorage của trình duyệt — trên thiết bị của chính bạn. Không có gì được tải lên máy chủ. Mỗi trình duyệt trên mỗi thiết bị có bộ nhớ lưu trữ độc lập riêng.' },
        { q: 'Điều gì xảy ra nếu tôi xóa dữ liệu trình duyệt?', a: 'Các bản vẽ đã lưu của bạn sẽ bị mất. Hãy luôn xuất bản sao DXF của những bản vẽ quan trọng trước khi xóa bộ nhớ trình duyệt.' },
        { q: 'Tôi có thể mở tệp .dwg không?', a: 'KulmanLab hỗ trợ DXF (Drawing Exchange Format), không hỗ trợ định dạng DWG độc quyền. Hầu hết các ứng dụng CAD máy tính để bàn đều có thể xuất DXF, vì vậy hãy xuất từ ứng dụng nguồn của bạn trước.' },
        { q: 'Những định dạng xuất nào có sẵn?', a: 'DXF để trao đổi với các công cụ CAD khác, và PDF hoặc PNG/WebP cho đầu ra sẵn sàng in. Trình quản lý in cho phép bạn đặt DPI và kích thước giấy trước khi xuất.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Có terminal lệnh không?', a: 'Có. Nhập lệnh trực tiếp — LINE, CIRCLE, MOVE, TRIM và hơn 50 lệnh khác. Terminal hỗ trợ lịch sử (phím mũi tên), tự động hoàn thành (Tab) và nhập số chính xác.' },
        { q: 'Có hỗ trợ lớp không?', a: 'Quản lý lớp đầy đủ: tạo, đổi tên, đóng băng, khóa và cô lập các lớp. Đặt màu sắc, kiểu đường và độ dày đường theo từng lớp. Tất cả dữ liệu lớp được giữ nguyên khi xuất DXF.' },
        { q: 'Những loại kích thước nào có sẵn?', a: 'Kích thước tuyến tính, căn chỉnh, bán kính, đường kính, góc và liên tục. Tất cả được lưu dưới dạng thực thể DIMENSION DXF chuẩn, tương thích với các công cụ CAD khác.' },
        { q: 'Tôi có thể chỉnh sửa hình học bằng grip không?', a: 'Có. Chọn bất kỳ thực thể nào để hiển thị tay cầm grip tại các điểm chính — điểm cuối, điểm giữa, tâm, đầu cung. Kéo để định hình lại trực tiếp trên canvas, hoặc nhập giá trị khi kéo để định vị chính xác.' },
        { q: 'Có hỗ trợ cộng tác theo thời gian thực không?', a: 'Hiện chưa có. KulmanLab là công cụ đơn người dùng và bản vẽ được lưu cục bộ. Đồng bộ đám mây và cộng tác nằm ngoài phạm vi hiện tại.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Các tệp DXF của KulmanLab có tương thích với phần mềm CAD khác không?', a: 'Có. KulmanLab đọc và ghi DXF AC1032 — một phiên bản được hỗ trợ rộng rãi. Các tệp mở đúng cách trong LibreCAD, QCAD, BricsCAD, FreeCAD và bất kỳ công cụ nào hỗ trợ DXF.' },
        { q: 'Sự khác biệt giữa DXF và DWG là gì?', a: 'DXF là định dạng trao đổi mở, dựa trên văn bản, được thiết kế cho khả năng tương tác. DWG là định dạng nhị phân độc quyền. KulmanLab sử dụng DXF, có thể đọc bởi hầu hết mọi công cụ CAD.' },
        { q: 'KulmanLab có thể thay thế phần mềm CAD máy tính để bàn của tôi không?', a: 'Cho bản vẽ 2D — có. KulmanLab có terminal lệnh đầy đủ, các lớp, bắt điểm, kích thước, chỉnh sửa grip và tương thích DXF. Không hỗ trợ 3D, block/xref hay ràng buộc tham số.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab có thu thập dữ liệu bản vẽ của tôi không?', a: 'Không. Bản vẽ của bạn được lưu trong trình duyệt và không bao giờ được gửi đi đâu. KulmanLab sử dụng Google Analytics để thu thập số liệu sử dụng ẩn danh (lượt xem trang, số phiên) — không có nội dung bản vẽ nào liên quan.' },
        { q: 'Cookie có được sử dụng không?', a: 'Chỉ cookie được Google Analytics tự động đặt. Không có theo dõi thêm, không có cookie quảng cáo, không chia sẻ dữ liệu với bên thứ ba.' },
      ],
    },
  ],
  th: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab ฟรีจริงๆ ไหม?', a: 'ใช่ — ฟรีอย่างสมบูรณ์ ไม่มีค่าสมัครสมาชิก ไม่ต้องใช้บัตรเครดิต ไม่มีแผนซ่อนเร้น ฟีเจอร์ทั้งหมดเปิดให้ทุกคนใช้โดยไม่มีข้อจำกัด' },
        { q: 'ฉันต้องสร้างบัญชีไหม?', a: 'ไม่ ไม่มีการเข้าสู่ระบบ ไม่มีการสมัคร และไม่ต้องใช้อีเมล เปิดแอปแล้วเริ่มวาดได้ทันที' },
        { q: 'รองรับเบราว์เซอร์ใดบ้าง?', a: 'เบราว์เซอร์คอมพิวเตอร์ทุกรุ่น — Chrome, Firefox, Safari และ Edge ใช้งานได้ KulmanLab เหมาะสำหรับเดสก์ท็อปเท่านั้น ยังไม่รองรับอุปกรณ์มือถือและแท็บเล็ต' },
        { q: 'ทำงานออฟไลน์ได้ไหม?', a: 'ได้ หลังจากโหลดครั้งแรก แอปจะถูกแคชและทำงานได้โดยไม่ต้องเชื่อมต่ออินเทอร์เน็ต ไฟล์ภาพถูกเก็บในเครื่องดังนั้นไม่จำเป็นต้องใช้เซิร์ฟเวอร์' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'ไฟล์ภาพของฉันเก็บอยู่ที่ไหน?', a: 'ใน localStorage ของเบราว์เซอร์ — บนอุปกรณ์ของคุณเอง ไม่มีอะไรถูกอัปโหลดไปยังเซิร์ฟเวอร์ แต่ละเบราว์เซอร์บนแต่ละอุปกรณ์มีพื้นที่จัดเก็บอิสระของตัวเอง' },
        { q: 'เกิดอะไรขึ้นถ้าฉันล้างข้อมูลเบราว์เซอร์?', a: 'ไฟล์ภาพที่บันทึกไว้จะสูญหาย ควรส่งออกสำเนา DXF ของสิ่งสำคัญก่อนล้างหน่วยความจำเบราว์เซอร์เสมอ' },
        { q: 'ฉันสามารถเปิดไฟล์ .dwg ได้ไหม?', a: 'KulmanLab รองรับ DXF (Drawing Exchange Format) ไม่ใช่รูปแบบ DWG ที่เป็นกรรมสิทธิ์ แอปพลิเคชัน CAD บนเดสก์ท็อปส่วนใหญ่สามารถส่งออก DXF ได้ ดังนั้นให้ส่งออกจากแอปต้นทางก่อน' },
        { q: 'รูปแบบการส่งออกใดบ้างที่รองรับ?', a: 'DXF สำหรับแลกเปลี่ยนกับเครื่องมือ CAD อื่น และ PDF หรือ PNG/WebP สำหรับงานพิมพ์ ตัวจัดการการพิมพ์ให้คุณตั้งค่า DPI และขนาดกระดาษก่อนส่งออก' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'มีเทอร์มินัลคำสั่งไหม?', a: 'มี พิมพ์คำสั่งโดยตรง — LINE, CIRCLE, MOVE, TRIM และอีกกว่า 50 คำสั่ง เทอร์มินัลรองรับประวัติ (แป้นลูกศร) การเติมข้อความอัตโนมัติ (Tab) และการป้อนตัวเลขที่แม่นยำ' },
        { q: 'รองรับเลเยอร์ไหม?', a: 'รองรับการจัดการเลเยอร์อย่างสมบูรณ์ สร้าง เปลี่ยนชื่อ แช่แข็ง ล็อก และแยกเลเยอร์ ตั้งค่าสี ประเภทเส้น และน้ำหนักเส้นต่อเลเยอร์ ข้อมูลเลเยอร์ทั้งหมดถูกเก็บรักษาไว้ในการส่งออก DXF' },
        { q: 'มีประเภทขนาดใดบ้าง?', a: 'ขนาดเชิงเส้น ขนาดแนวตั้งฉาก รัศมี เส้นผ่านศูนย์กลาง มุม และต่อเนื่อง ทั้งหมดถูกบันทึกเป็นเอนทิตี DIMENSION DXF มาตรฐาน เข้ากันได้กับเครื่องมือ CAD อื่น' },
        { q: 'ฉันสามารถแก้ไขรูปทรงด้วย grip ได้ไหม?', a: 'ได้ เลือกเอนทิตีใดก็ได้เพื่อแสดงจุดจับ grip ที่จุดสำคัญ — จุดสิ้นสุด จุดกึ่งกลาง ศูนย์กลาง ปลายโค้ง ลากเพื่อเปลี่ยนรูปโดยตรงบนแคนวาส หรือพิมพ์ค่าขณะลากเพื่อวางตำแหน่งที่แม่นยำ' },
        { q: 'รองรับการทำงานร่วมกันแบบเรียลไทม์ไหม?', a: 'ยังไม่มี KulmanLab เป็นเครื่องมือสำหรับผู้ใช้คนเดียวและภาพถูกเก็บในเครื่อง การซิงค์คลาวด์และการทำงานร่วมกันอยู่นอกขอบเขตปัจจุบัน' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'ไฟล์ DXF ของ KulmanLab เข้ากันได้กับซอฟต์แวร์ CAD อื่นไหม?', a: 'ได้ KulmanLab อ่านและเขียน DXF AC1032 — เวอร์ชันที่รองรับอย่างกว้างขวาง ไฟล์เปิดได้ถูกต้องใน LibreCAD, QCAD, BricsCAD, FreeCAD และเครื่องมือใดก็ตามที่รองรับ DXF' },
        { q: 'ความแตกต่างระหว่าง DXF และ DWG คืออะไร?', a: 'DXF เป็นรูปแบบแลกเปลี่ยนแบบเปิดที่อ่านได้ออกแบบมาเพื่อความสามารถในการทำงานร่วมกัน DWG เป็นรูปแบบไบนารีที่เป็นกรรมสิทธิ์ KulmanLab ใช้ DXF ซึ่งอ่านได้โดยเครื่องมือ CAD เกือบทุกชนิด' },
        { q: 'KulmanLab สามารถทดแทนซอฟต์แวร์ CAD บนเดสก์ท็อปของฉันได้ไหม?', a: 'สำหรับการเขียนแบบ 2D — ได้ KulmanLab มีเทอร์มินัลคำสั่งเต็มรูปแบบ เลเยอร์ การจับจุด ขนาด การแก้ไข grip และความเข้ากันได้กับ DXF ไม่รองรับ 3D บล็อก/xref หรือข้อจำกัดพารามิเตอร์' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab รวบรวมข้อมูลภาพของฉันไหม?', a: 'ไม่ ภาพของคุณเก็บอยู่ในเบราว์เซอร์และไม่เคยถูกส่งไปที่ใด KulmanLab ใช้ Google Analytics สำหรับตัวชี้วัดการใช้งานแบบไม่ระบุตัวตน (การดูหน้า จำนวนเซสชัน) — ไม่มีเนื้อหาภาพที่เกี่ยวข้อง' },
        { q: 'มีการใช้คุกกี้ไหม?', a: 'เฉพาะคุกกี้ที่ Google Analytics ตั้งค่าโดยอัตโนมัติ ไม่มีการติดตามเพิ่มเติม ไม่มีคุกกี้โฆษณา ไม่มีการแบ่งปันข้อมูลกับบุคคลที่สาม' },
      ],
    },
  ],
  ms: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'Adakah KulmanLab benar-benar percuma?', a: 'Ya — percuma sepenuhnya. Tiada langganan, tiada kad kredit, tiada pelan tersembunyi. Set ciri penuh tersedia untuk semua orang tanpa had.' },
        { q: 'Perlukah saya mencipta akaun?', a: 'Tidak. Tiada log masuk, tiada pendaftaran, dan tiada e-mel diperlukan. Buka aplikasi dan mula melukis dengan segera.' },
        { q: 'Pelayar mana yang disokong?', a: 'Mana-mana pelayar desktop moden — Chrome, Firefox, Safari dan Edge semuanya berfungsi. KulmanLab adalah untuk desktop sahaja; mudah alih dan tablet tidak disokong buat masa ini.' },
        { q: 'Adakah ia berfungsi luar talian?', a: 'Ya. Selepas muat turun pertama, aplikasi disimpan dalam cache dan berjalan sepenuhnya tanpa sambungan internet. Lukisan anda disimpan secara tempatan jadi tiada yang memerlukan pelayan.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Di mana lukisan saya disimpan?', a: 'Dalam localStorage pelayar anda — pada peranti anda sendiri. Tiada apa yang dimuat naik ke pelayan. Setiap pelayar pada setiap peranti mempunyai storan bebas yang tersendiri.' },
        { q: 'Apa yang berlaku jika saya memadamkan data pelayar?', a: 'Lukisan yang disimpan akan hilang. Sentiasa eksport salinan DXF bagi sebarang perkara penting sebelum memadamkan storan pelayar.' },
        { q: 'Bolehkah saya membuka fail .dwg?', a: 'KulmanLab menyokong DXF (Drawing Exchange Format), bukan format DWG proprietari. Kebanyakan aplikasi CAD desktop boleh mengeksport DXF, jadi eksport dari aplikasi sumber anda dahulu.' },
        { q: 'Format eksport apa yang tersedia?', a: 'DXF untuk pertukaran dengan alat CAD lain, dan PDF atau PNG/WebP untuk output sedia cetak. Pengurus cetak membolehkan anda menetapkan DPI dan saiz kertas sebelum mengeksport.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Adakah ia mempunyai terminal arahan?', a: 'Ya. Taip arahan secara langsung — LINE, CIRCLE, MOVE, TRIM dan lebih 50 yang lain. Terminal menyokong sejarah (kekunci anak panah), pelengkap automatik (Tab) dan input angka tepat.' },
        { q: 'Adakah terdapat sokongan lapisan?', a: 'Pengurusan lapisan penuh: cipta, namakan semula, beku, kunci dan asingkan lapisan. Tetapkan warna, jenis garisan dan berat garisan bagi setiap lapisan. Semua data lapisan dipelihara dalam eksport DXF.' },
        { q: 'Jenis dimensi apa yang tersedia?', a: 'Dimensi linear, sejajar, jejari, diameter, sudut dan berterusan. Semuanya disimpan sebagai entiti DXF DIMENSION piawai yang serasi dengan alat CAD lain.' },
        { q: 'Bolehkah saya mengedit geometri dengan grip?', a: 'Ya. Pilih mana-mana entiti untuk mendedahkan pemegang grip di titik utama — titik akhir, titik tengah, pusat, hujung arka. Seret untuk membentuk semula terus di atas kanvas, atau taip nilai semasa menyeret untuk penempatan tepat.' },
        { q: 'Adakah kerjasama masa nyata disokong?', a: 'Tidak buat masa ini. KulmanLab adalah alat pengguna tunggal dan lukisan kekal tempatan. Penyegerakan awan dan kerjasama berada di luar skop semasa.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Adakah fail DXF KulmanLab serasi dengan perisian CAD lain?', a: 'Ya. KulmanLab membaca dan menulis DXF AC1032 — versi yang disokong secara meluas. Fail dibuka dengan betul dalam LibreCAD, QCAD, BricsCAD, FreeCAD dan mana-mana alat berkemampuan DXF.' },
        { q: 'Apakah perbezaan antara DXF dan DWG?', a: 'DXF adalah format pertukaran terbuka berasaskan teks yang direka untuk kebolehoperasian. DWG adalah format perduaan proprietari. KulmanLab menggunakan DXF, yang boleh dibaca oleh hampir semua alat CAD.' },
        { q: 'Bolehkah KulmanLab menggantikan perisian CAD desktop saya?', a: 'Untuk lakaran 2D — ya. KulmanLab mempunyai terminal arahan penuh, lapisan, snapping, dimensi, pengeditan grip dan keserasian DXF. Ia tidak menyokong 3D, blok/xref atau kekangan parametrik.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'Adakah KulmanLab mengumpul data lukisan saya?', a: 'Tidak. Lukisan anda kekal dalam pelayar dan tidak pernah dihantar ke mana-mana. KulmanLab menggunakan Google Analytics untuk metrik penggunaan tanpa nama (paparan halaman, kiraan sesi) — tiada kandungan lukisan yang terlibat.' },
        { q: 'Adakah kuki digunakan?', a: 'Hanya kuki yang ditetapkan secara automatik oleh Google Analytics. Tiada penjejakan di luar itu, tiada kuki pengiklanan, tiada perkongsian data pihak ketiga.' },
      ],
    },
  ],

  bn: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'KulmanLab কি সত্যিই বিনামূল্যে?', a: 'হ্যাঁ — সম্পূর্ণ বিনামূল্যে। কোনো সাবস্ক্রিপশন নেই, কোনো ক্রেডিট কার্ড নেই, কোনো লুকানো পরিকল্পনা নেই। সম্পূর্ণ ফিচার সেট সবার জন্য কোনো সীমা ছাড়াই পাওয়া যায়।' },
        { q: 'আমার কি অ্যাকাউন্ট তৈরি করতে হবে?', a: 'না। কোনো লগইন, সাইন-আপ বা ইমেইলের প্রয়োজন নেই। অ্যাপটি খুলুন এবং সাথে সাথে ড্রয়িং শুরু করুন।' },
        { q: 'কোন ব্রাউজারগুলো সমর্থিত?', a: 'যেকোনো আধুনিক ডেস্কটপ ব্রাউজার — Chrome, Firefox, Safari এবং Edge সবই কাজ করে। KulmanLab শুধুমাত্র ডেস্কটপের জন্য; মোবাইল এবং ট্যাবলেট বর্তমানে সমর্থিত নয়।' },
        { q: 'এটি কি অফলাইনে কাজ করে?', a: 'হ্যাঁ। প্রথম লোডের পরে অ্যাপটি ক্যাশ হয়ে যায় এবং ইন্টারনেট সংযোগ ছাড়াই সম্পূর্ণরূপে চলে। আপনার ড্রয়িংগুলো স্থানীয়ভাবে সংরক্ষিত হয় তাই কোনো সার্ভারের প্রয়োজন নেই।' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'আমার ড্রয়িংগুলো কোথায় সংরক্ষিত হয়?', a: 'আপনার ব্রাউজারের localStorage-এ — আপনার নিজের ডিভাইসে। কিছুই কখনো সার্ভারে আপলোড হয় না। প্রতিটি ডিভাইসের প্রতিটি ব্রাউজারের নিজস্ব স্বাধীন স্টোরেজ আছে।' },
        { q: 'আমি যদি ব্রাউজার ডেটা মুছে ফেলি তাহলে কী হবে?', a: 'আপনার সংরক্ষিত ড্রয়িংগুলো হারিয়ে যাবে। ব্রাউজার স্টোরেজ পরিষ্কার করার আগে সবসময় গুরুত্বপূর্ণ জিনিসগুলোর DXF কপি এক্সপোর্ট করুন।' },
        { q: 'আমি কি .dwg ফাইল খুলতে পারব?', a: 'KulmanLab DXF (Drawing Exchange Format) সমর্থন করে, মালিকানাধীন DWG ফরম্যাট নয়। বেশিরভাগ ডেস্কটপ CAD অ্যাপ্লিকেশন DXF এক্সপোর্ট করতে পারে, তাই প্রথমে আপনার সোর্স অ্যাপ থেকে এক্সপোর্ট করুন।' },
        { q: 'কোন এক্সপোর্ট ফরম্যাটগুলো পাওয়া যায়?', a: 'অন্যান্য CAD টুলের সাথে আদান-প্রদানের জন্য DXF, এবং প্রিন্ট-রেডি আউটপুটের জন্য PDF বা PNG/WebP। প্রিন্ট ম্যানেজার এক্সপোর্টের আগে DPI এবং পেপার সাইজ সেট করতে দেয়।' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'এটিতে কি কমান্ড টার্মিনাল আছে?', a: 'হ্যাঁ। সরাসরি কমান্ড টাইপ করুন — LINE, CIRCLE, MOVE, TRIM এবং ৫০টিরও বেশি। টার্মিনাল ইতিহাস (অ্যারো কি), অটোকমপ্লিট (Tab) এবং সঠিক সংখ্যাসূচক ইনপুট সমর্থন করে।' },
        { q: 'কি লেয়ার সাপোর্ট আছে?', a: 'সম্পূর্ণ লেয়ার ম্যানেজমেন্ট: লেয়ার তৈরি, নাম পরিবর্তন, ফ্রিজ, লক এবং আইসোলেট করুন। প্রতিটি লেয়ারের জন্য রঙ, লাইনটাইপ এবং লাইনওয়েট সেট করুন। DXF এক্সপোর্টে সমস্ত লেয়ার ডেটা সংরক্ষিত থাকে।' },
        { q: 'কী ধরনের মাত্রা পাওয়া যায়?', a: 'লিনিয়ার, অ্যালাইনড, রেডিয়াস, ডায়ামিটার, অ্যাঙ্গুলার এবং কন্টিনিউ মাত্রা। সবই স্ট্যান্ডার্ড DXF DIMENSION এন্টিটি হিসেবে সংরক্ষিত যা অন্যান্য DXF-সক্ষম CAD টুলের সাথে সামঞ্জস্যপূর্ণ।' },
        { q: 'আমি কি গ্রিপ দিয়ে জ্যামিতি সম্পাদনা করতে পারি?', a: 'হ্যাঁ। যেকোনো এন্টিটি সিলেক্ট করুন তো মূল পয়েন্টগুলোতে গ্রিপ হ্যান্ডেল দেখা যায় — এন্ডপয়েন্ট, মিডপয়েন্ট, কেন্দ্র, আর্ক এন্ড। সরাসরি ক্যানভাসে রিশেপ করতে টানুন, বা সঠিক প্লেসমেন্টের জন্য টানার সময় মান টাইপ করুন।' },
        { q: 'কি রিয়েল-টাইম সহযোগিতা সমর্থিত?', a: 'এখন নয়। KulmanLab একটি একক-ব্যবহারকারী টুল এবং ড্রয়িংগুলো স্থানীয়ভাবে থাকে। ক্লাউড সিঙ্ক এবং সহযোগিতা বর্তমান পরিধির বাইরে।' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'KulmanLab DXF ফাইলগুলো কি অন্যান্য CAD সফটওয়্যারের সাথে সামঞ্জস্যপূর্ণ?', a: 'হ্যাঁ। KulmanLab AC1032 DXF পড়ে এবং লেখে — একটি ব্যাপকভাবে সমর্থিত সংস্করণ। ফাইলগুলো LibreCAD, QCAD, BricsCAD, FreeCAD এবং অন্য যেকোনো DXF-সক্ষম টুলে সঠিকভাবে খোলে।' },
        { q: 'DXF এবং DWG-এর মধ্যে পার্থক্য কী?', a: 'DXF হল একটি উন্মুক্ত, টেক্সট-ভিত্তিক বিনিময় ফরম্যাট যা আন্তঃকার্যক্ষমতার জন্য ডিজাইন করা হয়েছে। DWG একটি মালিকানাধীন বাইনারি ফরম্যাট। KulmanLab DXF ব্যবহার করে, যা প্রায় প্রতিটি CAD টুল দ্বারা পঠনযোগ্য।' },
        { q: 'KulmanLab কি আমার ডেস্কটপ CAD সফটওয়্যার প্রতিস্থাপন করতে পারে?', a: '2D ড্রাফটিং-এর জন্য — হ্যাঁ। KulmanLab-এ সম্পূর্ণ কমান্ড টার্মিনাল, লেয়ার, স্ন্যাপিং, মাত্রা, গ্রিপ এডিটিং এবং DXF সামঞ্জস্যতা আছে। এটি 3D, ব্লক/xref বা প্যারামেট্রিক কনস্ট্রেইন্ট সমর্থন করে না।' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'KulmanLab কি আমার ড্রয়িং ডেটা সংগ্রহ করে?', a: 'না। আপনার ড্রয়িংগুলো আপনার ব্রাউজারে থাকে এবং কোথাও পাঠানো হয় না। KulmanLab বেনামী ব্যবহারের মেট্রিক্সের জন্য (পেজ ভিউ, সেশন কাউন্ট) Google Analytics ব্যবহার করে — কোনো ড্রয়িং বিষয়বস্তু জড়িত নয়।' },
        { q: 'কি কুকি ব্যবহার করা হয়?', a: 'শুধুমাত্র Google Analytics দ্বারা স্বয়ংক্রিয়ভাবে সেট করা কুকি। এর বাইরে কোনো ট্র্যাকিং নেই, কোনো বিজ্ঞাপন কুকি নেই, কোনো তৃতীয়-পক্ষের ডেটা শেয়ারিং নেই।' },
      ],
    },
  ],

  sw: [
    {
      headingKey: 'faq.section.start',
      items: [
        { q: 'Je, KulmanLab ni ya bure kweli kweli?', a: 'Ndiyo — bure kabisa. Hakuna usajili, hakuna kadi ya mkopo, hakuna mpango uliofichwa. Seti kamili ya vipengele inapatikana kwa kila mtu bila vikwazo.' },
        { q: 'Je, ninahitaji kuunda akaunti?', a: 'Hapana. Hakuna kuingia, hakuna kusajili, na hakuna barua pepe inayohitajika. Fungua programu na uanze kuchora mara moja.' },
        { q: 'Vivinjari vipi vinavyoungwa mkono?', a: 'Kivinjari chochote cha kisasa cha kompyuta — Chrome, Firefox, Safari na Edge vyote vinafanya kazi. KulmanLab ni kwa kompyuta tu; simu za mkononi na kompyuta ndogo hazingwa mkono kwa sasa.' },
        { q: 'Je, inafanya kazi nje ya mtandao?', a: 'Ndiyo. Baada ya upakiaji wa kwanza programu inakumbukwa na inafanya kazi kabisa bila muunganiko wa intaneti. Michoro yako inahifadhiwa ndani ya kifaa hivyo hakuna kinachohitaji seva.' },
      ],
    },
    {
      headingKey: 'faq.section.files',
      items: [
        { q: 'Michoro yangu inahifadhiwa wapi?', a: 'Katika localStorage ya kivinjari chako — kwenye kifaa chako mwenyewe. Hakuna kinachopakiwa kwenye seva. Kila kivinjari kwenye kila kifaa kina hifadhi yake huru.' },
        { q: 'Nini kinatokea nikifuta data ya kivinjari?', a: 'Michoro yako iliyohifadhiwa itapotea. Daima hamisha nakala ya DXF ya kitu chochote muhimu kabla ya kufuta hifadhi ya kivinjari.' },
        { q: 'Je, naweza kufungua faili za .dwg?', a: 'KulmanLab inaauni DXF (Drawing Exchange Format), si muundo wa DWG wa umiliki. Programu nyingi za CAD za kompyuta zinaweza kuhamisha DXF, kwa hivyo hamisha kutoka programu yako ya asili kwanza.' },
        { q: 'Miundo ipi ya uhamishaji inapatikana?', a: 'DXF kwa kubadilishana na zana zingine za CAD, na PDF au PNG/WebP kwa matokeo tayari ya uchapishaji. Kidhibiti cha uchapishaji hukuruhusu kuweka DPI na ukubwa wa karatasi kabla ya kuhamisha.' },
      ],
    },
    {
      headingKey: 'faq.section.features',
      items: [
        { q: 'Je, ina terminal ya amri?', a: 'Ndiyo. Andika amri moja kwa moja — LINE, CIRCLE, MOVE, TRIM na zaidi ya 50 zingine. Terminal inaauni historia (vitufe vya mshale), ukamilishaji otomatiki (Tab) na uingizaji sahihi wa nambari.' },
        { q: 'Je, kuna msaada wa tabaka?', a: 'Usimamizi kamili wa tabaka: unda, piga jina upya, ganda, funga na tenga tabaka. Weka rangi, aina ya mstari na uzito wa mstari kwa kila tabaka. Data yote ya tabaka inahifadhiwa katika uhamishaji wa DXF.' },
        { q: 'Aina gani za vipimo zinapatikana?', a: 'Vipimo vya mstari, vya kulingana, radi, kipenyo, pembe na vinavyoendelea. Vyote vimehifadhiwa kama vitu vya kawaida vya DXF DIMENSION vinavyolingana na zana zingine za CAD.' },
        { q: 'Je, naweza kuhariri jiometri kwa vipini?', a: 'Ndiyo. Chagua kitu chochote ili kufunua vipini vya grip katika pointi kuu — pointi za mwisho, pointi za katikati, vituo, mwisho wa arc. Buruta ili kubadilisha umbo moja kwa moja kwenye turubai, au andika thamani unapoburuta kwa uwekaji sahihi.' },
        { q: 'Je, ushirikiano wa wakati halisi unaauliwa?', a: 'Kwa sasa hapana. KulmanLab ni zana ya mtumiaji mmoja na michoro inabaki ndani ya kifaa. Usawazishaji wa wingu na ushirikiano viko nje ya upeo wa sasa.' },
      ],
    },
    {
      headingKey: 'faq.section.compat',
      items: [
        { q: 'Je, faili za DXF za KulmanLab zinalingana na programu zingine za CAD?', a: 'Ndiyo. KulmanLab inasoma na kuandika DXF ya AC1032 — toleo linaloungwa mkono kwa upana. Faili zinafunguka vizuri katika LibreCAD, QCAD, BricsCAD, FreeCAD na zana nyingine yoyote inayoweza DXF.' },
        { q: 'Tofauti kati ya DXF na DWG ni nini?', a: 'DXF ni muundo wa wazi wa ubadilishanaji wa maandishi uliobuniwa kwa uintegrability. DWG ni muundo wa binary wa umiliki. KulmanLab inatumia DXF, inayoweza kusomwa na karibu kila zana ya CAD.' },
        { q: 'Je, KulmanLab inaweza kuchukua nafasi ya programu yangu ya CAD ya kompyuta?', a: 'Kwa uandishi wa 2D — ndiyo. KulmanLab ina terminal kamili ya amri, tabaka, kupiga, vipimo, uhariri wa grip na ulinganifu wa DXF. Haiauni 3D, vitalu/xref au vikwazo vya parametriki.' },
      ],
    },
    {
      headingKey: 'faq.section.privacy',
      items: [
        { q: 'Je, KulmanLab inakusanya data ya michoro yangu?', a: 'Hapana. Michoro yako inabaki kwenye kivinjari chako na haipelekwi popote. KulmanLab inatumia Google Analytics kwa vipimo vya matumizi vya kubinafsi (mionekano ya ukurasa, idadi ya vikao) — hakuna maudhui ya mchoro yanayohusika.' },
        { q: 'Je, kuki zinatumika?', a: 'Kuki tu zilizowekwa otomatiki na Google Analytics. Hakuna ufuatiliaji zaidi ya hilo, hakuna kuki za utangazaji, hakuna kushiriki data na watu wa tatu.' },
      ],
    },
  ],
};
