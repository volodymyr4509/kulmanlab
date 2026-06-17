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
};
