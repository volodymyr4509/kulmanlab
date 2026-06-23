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
};
