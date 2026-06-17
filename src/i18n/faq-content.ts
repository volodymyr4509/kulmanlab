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
};
