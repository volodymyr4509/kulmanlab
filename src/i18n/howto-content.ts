export type HowToGuide = {
  title: string;
  intro: string;
  steps: string[]; // may contain <code>, <strong>, <a>
  links: Array<{ label: string; slug: string }>; // slug is appended to the locale docs root
};
export type HowToContent = {
  title: string;
  desc: string;
  heading: string;
  subtitle: string;
  docsLabel: string;
  outroTitle: string;
  outroHtml: string; // full html, links included
  guides: HowToGuide[];
};

export const howtoContent: Record<string, HowToContent> = {
  en: {
    title: 'How to Use KulmanLab — Guides for Common CAD Tasks',
    desc: 'Step-by-step guides for KulmanLab CAD: open DXF files, draw with exact dimensions, use layers, add dimensions, prepare laser-cutting files, print, and back up your drawings.',
    heading: 'How to',
    subtitle: 'Step-by-step guides for the most common tasks in KulmanLab CAD.',
    docsLabel: 'Docs:',
    outroTitle: 'Looking for a specific command?',
    outroHtml: 'The <a href="/docs/">command reference</a> documents all 50+ commands, and the <a href="/faq/">FAQ</a> covers storage, formats, and compatibility.',
    guides: [
      {
        title: 'Open a DXF file',
        intro: 'KulmanLab reads DXF — the exchange format every CAD tool can produce. Files open straight from your disk and never leave your device.',
        steps: [
          'Open <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Click the <strong>Import</strong> button in the File panel, or type <code>import</code> in the terminal.',
          'Pick a <code>.dxf</code> (or KulmanLab <code>.json</code>) file from your computer.',
          'The drawing loads onto the canvas and is auto-saved to your browser storage, so it will still be there next time.',
        ],
        links: [
          { label: 'Import command', slug: 'commands/import' },
          { label: 'Recent files panel', slug: 'commands/files' },
        ],
      },
      {
        title: 'Draw with exact dimensions',
        intro: 'Every drawing command accepts typed input, so you never have to eyeball a length or coordinate.',
        steps: [
          'Start a command — click <strong>Line</strong> or type <code>line</code> and press <strong>Enter</strong>.',
          'Type a start point as <code>x,y</code> (for example <code>0,0</code>) and press <strong>Enter</strong>.',
          'Move the cursor in the direction you want, then type a length (for example <code>250</code>) and press <strong>Enter</strong> — the segment is drawn exactly that long.',
          'Turn on angle lock in the control bar (or hold the configured increment) to keep segments at exact angles like 30°, 45°, or 90°.',
        ],
        links: [
          { label: 'Line command', slug: 'commands/line' },
          { label: 'Grid & snap', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Organize a drawing with layers',
        intro: 'Layers keep construction lines, geometry, and annotations separate — and they survive DXF export.',
        steps: [
          'Open the <strong>Layers</strong> panel in the toolbar and create a layer for each kind of content (outline, dimensions, notes…).',
          'Set color, linetype, and lineweight per layer so entities pick up sensible defaults.',
          'Make a layer current with <code>layer-make-current</code> before drawing, or move selected entities with <code>layer-match</code>.',
          'Use <code>layer-isolate</code> to hide everything except the layer you are working on, and <code>layer-unfreeze-all</code> to bring it all back.',
        ],
        links: [
          { label: 'Layer isolate', slug: 'commands/layer-isolate' },
          { label: 'Linetype', slug: 'interface/linetype' },
          { label: 'Lineweight', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Add dimensions',
        intro: 'Dimensions are real DXF DIMENSION entities, so they round-trip to any other CAD tool.',
        steps: [
          'Type <code>dim-linear</code> (horizontal/vertical) or <code>dim-aligned</code> (parallel to the measured edge) in the terminal.',
          'Pick the two points you want to measure, then place the dimension line with a third click.',
          'Chain a row of measurements with <code>dim-continue</code> — each new dimension starts where the last one ended.',
          'For circles and arcs, use <code>dim-radius</code>, <code>dim-diameter</code>, or <code>dim-angular</code>.',
          'Double-click any dimension label to edit its text.',
        ],
        links: [
          { label: 'Linear dimension', slug: 'commands/dim-linear' },
          { label: 'Continue dimension', slug: 'commands/dim-continue' },
          { label: 'Text editor', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Measure distance, angle, and area',
        intro: 'Quick measurements without creating any geometry — results stay on screen until you press Escape.',
        steps: [
          'Type <code>distance</code> and pick two points to read a length.',
          'Type <code>angle</code> and pick two lines (or three points) to read the angle between them.',
          'Type <code>area</code> and click three or more points, then press <strong>Enter</strong> — the enclosed area and perimeter are shown.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Prepare a file for laser cutting or CNC',
        intro: 'The workflow KulmanLab was originally built for: check a file, clean it up, send it to the machine.',
        steps: [
          'Import the DXF and look it over — <code>fit</code> zooms the whole drawing into view.',
          'Delete anything the machine should not cut: construction lines, notes, dimensions. <code>layer-isolate</code> helps find strays.',
          'Tidy the geometry: <code>trim</code> overhanging ends, close gaps, and check sizes with <code>distance</code>.',
          'Export as DXF and load it into your machine software. Cut paths survive exactly as drawn — KulmanLab writes plain AC1032 DXF.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Fit view', slug: 'commands/fit' },
          { label: 'Export', slug: 'commands/export' },
        ],
      },
      {
        title: 'Set up a paper layout with viewports',
        intro: 'Layouts are paper-space sheets — compose one or more scaled views of your model on a page, ready for printing.',
        steps: [
          'Click a <strong>layout tab</strong> at the bottom of the screen to switch from model space to paper space. The <strong>+</strong> button in the tab bar adds a new layout.',
          '<strong>Right-click a layout tab</strong> to rename or delete it, or to open the <strong>Page Manager</strong> — there you set the paper format (A4, A3, Letter…), orientation, and the drawing-units-per-mm scale.',
          'Type <code>viewport-rectangle</code> and click two opposite corners to place a viewport — a window showing your model on the paper.',
          'Click a viewport to select it: drag its edges or corners to resize, drag the center grip to move it, and pick an exact scale (e.g. <code>1:50</code>) from the scale selector in the control bar.',
          'Scroll inside a viewport to zoom the model view, middle-drag to pan it. When it looks right, <strong>right-click the viewport</strong> and choose <strong>Lock</strong> to protect it from accidental changes.',
          'Need the same view twice? <code>viewport-copy</code> duplicates a viewport with its scale and model view preserved.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Print or save as PDF / PNG',
        intro: 'The print manager renders your drawing to a paper-ready image, with live preview.',
        steps: [
          'Type <code>print</code> or click the Print button in the File panel.',
          'Choose the output format: PDF for documents, PNG/JPEG/WebP for images.',
          'Optionally crop to an area of the drawing and toggle monochrome output for clean line prints.',
          'Click <strong>Print</strong> — the file downloads to your computer.',
        ],
        links: [
          { label: 'Print command', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Back up and manage saved drawings',
        intro: 'Drawings live in your browser storage — private, offline, and yours to manage.',
        steps: [
          'Open the <strong>Files</strong> panel to see every drawing saved in this browser; restore or delete any of them.',
          'Before clearing browser data or switching machines, export anything important — <code>.json</code> keeps full fidelity, <code>.dxf</code> maximizes compatibility.',
          'To reset the app completely, type <code>wipestorage</code> and confirm with <code>YES</code> — this permanently deletes all locally saved drawings.',
        ],
        links: [
          { label: 'Files panel', slug: 'commands/files' },
          { label: 'Export', slug: 'commands/export' },
          { label: 'Wipe storage', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  de: {
    title: 'KulmanLab-Anleitungen — häufige CAD-Aufgaben Schritt für Schritt',
    desc: 'Schritt-für-Schritt-Anleitungen für KulmanLab CAD: DXF-Dateien öffnen, mit exakten Maßen zeichnen, Ebenen nutzen, bemaßen, Laserschnitt-Dateien vorbereiten, drucken und Zeichnungen sichern.',
    heading: 'Anleitungen',
    subtitle: 'Schritt-für-Schritt-Anleitungen für die häufigsten Aufgaben in KulmanLab CAD.',
    docsLabel: 'Doku:',
    outroTitle: 'Sie suchen einen bestimmten Befehl?',
    outroHtml: 'Die <a href="/de/docs/">Befehlsreferenz</a> dokumentiert alle 50+ Befehle, und die <a href="/de/faq/">FAQ</a> behandelt Speicherung, Formate und Kompatibilität.',
    guides: [
      {
        title: 'Eine DXF-Datei öffnen',
        intro: 'KulmanLab liest DXF — das Austauschformat, das jedes CAD-Programm erzeugen kann. Dateien öffnen sich direkt von Ihrer Festplatte und verlassen nie Ihr Gerät.',
        steps: [
          'Öffnen Sie <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Klicken Sie auf <strong>Import</strong> im Datei-Panel oder tippen Sie <code>import</code> im Terminal.',
          'Wählen Sie eine <code>.dxf</code>- (oder KulmanLab-<code>.json</code>-) Datei von Ihrem Computer.',
          'Die Zeichnung wird auf die Zeichenfläche geladen und automatisch im Browserspeicher gesichert — sie ist beim nächsten Mal also noch da.',
        ],
        links: [
          { label: 'Import-Befehl', slug: 'commands/import' },
          { label: 'Dateien-Panel', slug: 'commands/files' },
        ],
      },
      {
        title: 'Mit exakten Maßen zeichnen',
        intro: 'Jeder Zeichenbefehl akzeptiert Tastatureingaben — Längen und Koordinaten müssen Sie nie nach Augenmaß setzen.',
        steps: [
          'Starten Sie einen Befehl — klicken Sie auf <strong>Line</strong> oder tippen Sie <code>line</code> und drücken Sie <strong>Enter</strong>.',
          'Geben Sie den Startpunkt als <code>x,y</code> ein (zum Beispiel <code>0,0</code>) und drücken Sie <strong>Enter</strong>.',
          'Bewegen Sie den Cursor in die gewünschte Richtung, tippen Sie dann eine Länge (zum Beispiel <code>250</code>) und drücken Sie <strong>Enter</strong> — das Segment wird exakt so lang gezeichnet.',
          'Aktivieren Sie die Winkelsperre in der Kontrollleiste, um Segmente auf exakten Winkeln wie 30°, 45° oder 90° zu halten.',
        ],
        links: [
          { label: 'Line-Befehl', slug: 'commands/line' },
          { label: 'Raster & Fang', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Eine Zeichnung mit Ebenen organisieren',
        intro: 'Ebenen halten Konstruktionslinien, Geometrie und Beschriftungen getrennt — und überstehen den DXF-Export.',
        steps: [
          'Öffnen Sie das <strong>Ebenen</strong>-Panel in der Symbolleiste und legen Sie für jede Inhaltsart eine Ebene an (Umriss, Bemaßung, Notizen…).',
          'Setzen Sie Farbe, Linientyp und Linienstärke pro Ebene, damit Objekte sinnvolle Vorgaben übernehmen.',
          'Machen Sie eine Ebene mit <code>layer-make-current</code> aktuell, bevor Sie zeichnen, oder verschieben Sie ausgewählte Objekte mit <code>layer-match</code>.',
          'Mit <code>layer-isolate</code> blenden Sie alles außer der aktuellen Ebene aus, mit <code>layer-unfreeze-all</code> holen Sie alles zurück.',
        ],
        links: [
          { label: 'Ebene isolieren', slug: 'commands/layer-isolate' },
          { label: 'Linientyp', slug: 'interface/linetype' },
          { label: 'Linienstärke', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Bemaßungen hinzufügen',
        intro: 'Bemaßungen sind echte DXF-DIMENSION-Objekte und lassen sich verlustfrei mit jedem anderen CAD-Programm austauschen.',
        steps: [
          'Tippen Sie <code>dim-linear</code> (horizontal/vertikal) oder <code>dim-aligned</code> (parallel zur gemessenen Kante) im Terminal.',
          'Wählen Sie die zwei zu messenden Punkte und platzieren Sie die Maßlinie mit einem dritten Klick.',
          'Reihen Sie Messungen mit <code>dim-continue</code> aneinander — jede neue Bemaßung beginnt, wo die letzte endete.',
          'Für Kreise und Bögen nutzen Sie <code>dim-radius</code>, <code>dim-diameter</code> oder <code>dim-angular</code>.',
          'Doppelklicken Sie auf eine Maßzahl, um ihren Text zu bearbeiten.',
        ],
        links: [
          { label: 'Lineare Bemaßung', slug: 'commands/dim-linear' },
          { label: 'Bemaßung fortsetzen', slug: 'commands/dim-continue' },
          { label: 'Texteditor', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Abstand, Winkel und Fläche messen',
        intro: 'Schnelle Messungen ohne neue Geometrie — die Ergebnisse bleiben bis zum Drücken von Escape sichtbar.',
        steps: [
          'Tippen Sie <code>distance</code> und wählen Sie zwei Punkte, um eine Länge abzulesen.',
          'Tippen Sie <code>angle</code> und wählen Sie zwei Linien (oder drei Punkte), um den Winkel dazwischen abzulesen.',
          'Tippen Sie <code>area</code>, klicken Sie drei oder mehr Punkte und drücken Sie <strong>Enter</strong> — Fläche und Umfang werden angezeigt.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Eine Datei für Laserschnitt oder CNC vorbereiten',
        intro: 'Der Arbeitsablauf, für den KulmanLab ursprünglich gebaut wurde: Datei prüfen, aufräumen, an die Maschine schicken.',
        steps: [
          'Importieren Sie die DXF und verschaffen Sie sich einen Überblick — <code>fit</code> zoomt die ganze Zeichnung ins Bild.',
          'Löschen Sie alles, was die Maschine nicht schneiden soll: Konstruktionslinien, Notizen, Bemaßungen. <code>layer-isolate</code> hilft, Streuner zu finden.',
          'Bereinigen Sie die Geometrie: <code>trim</code> für überstehende Enden, Lücken schließen, Maße mit <code>distance</code> prüfen.',
          'Exportieren Sie als DXF und laden Sie die Datei in Ihre Maschinensoftware. Schnittpfade bleiben exakt wie gezeichnet — KulmanLab schreibt reines AC1032-DXF.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Ansicht einpassen', slug: 'commands/fit' },
          { label: 'Export', slug: 'commands/export' },
        ],
      },
      {
        title: 'Ein Papierlayout mit Viewports einrichten',
        intro: 'Layouts sind Papierbögen — stellen Sie eine oder mehrere maßstäbliche Ansichten Ihres Modells auf einer Seite zusammen, druckfertig.',
        steps: [
          'Klicken Sie auf einen <strong>Layout-Tab</strong> am unteren Bildschirmrand, um vom Modellbereich in den Papierbereich zu wechseln. Der <strong>+</strong>-Knopf in der Tab-Leiste fügt ein neues Layout hinzu.',
          '<strong>Rechtsklicken Sie einen Layout-Tab</strong>, um ihn umzubenennen, zu löschen oder den <strong>Page Manager</strong> zu öffnen — dort stellen Sie Papierformat (A4, A3, Letter…), Ausrichtung und den Maßstab Zeichnungseinheiten pro mm ein.',
          'Tippen Sie <code>viewport-rectangle</code> und klicken Sie zwei gegenüberliegende Ecken, um einen Viewport zu platzieren — ein Fenster, das Ihr Modell auf dem Papier zeigt.',
          'Klicken Sie einen Viewport an, um ihn auszuwählen: Kanten oder Ecken ziehen zum Skalieren, Mittelgriff ziehen zum Verschieben, exakten Maßstab (z. B. <code>1:50</code>) über die Maßstabsauswahl in der Kontrollleiste setzen.',
          'Scrollen Sie im Viewport, um die Modellansicht zu zoomen, ziehen Sie mit der mittleren Maustaste zum Schwenken. Wenn alles passt: <strong>Rechtsklick auf den Viewport</strong> und <strong>Lock</strong> wählen, um ihn vor versehentlichen Änderungen zu schützen.',
          'Dieselbe Ansicht zweimal? <code>viewport-copy</code> dupliziert einen Viewport samt Maßstab und Modellansicht.',
        ],
        links: [
          { label: 'Page Manager', slug: 'commands/page-manager' },
          { label: 'Viewport Rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport Copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Drucken oder als PDF / PNG speichern',
        intro: 'Der Druckmanager rendert Ihre Zeichnung mit Live-Vorschau in ein druckfertiges Bild.',
        steps: [
          'Tippen Sie <code>print</code> oder klicken Sie den Druck-Knopf im Datei-Panel.',
          'Wählen Sie das Ausgabeformat: PDF für Dokumente, PNG/JPEG/WebP für Bilder.',
          'Optional: auf einen Zeichnungsbereich zuschneiden und Monochrom-Ausgabe für saubere Liniendrucke aktivieren.',
          'Klicken Sie auf <strong>Print</strong> — die Datei wird auf Ihren Computer heruntergeladen.',
        ],
        links: [
          { label: 'Print-Befehl', slug: 'commands/print' },
          { label: 'Page Manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Zeichnungen sichern und verwalten',
        intro: 'Zeichnungen leben in Ihrem Browserspeicher — privat, offline und ganz in Ihrer Hand.',
        steps: [
          'Öffnen Sie das <strong>Dateien</strong>-Panel, um jede in diesem Browser gespeicherte Zeichnung zu sehen — wiederherstellen oder löschen nach Bedarf.',
          'Exportieren Sie Wichtiges, bevor Sie Browserdaten löschen oder den Rechner wechseln — <code>.json</code> erhält alle Details, <code>.dxf</code> maximiert die Kompatibilität.',
          'Zum vollständigen Zurücksetzen tippen Sie <code>wipestorage</code> und bestätigen mit <code>YES</code> — das löscht alle lokal gespeicherten Zeichnungen unwiderruflich.',
        ],
        links: [
          { label: 'Dateien-Panel', slug: 'commands/files' },
          { label: 'Export', slug: 'commands/export' },
          { label: 'Speicher löschen', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  es: {
    title: 'Cómo usar KulmanLab — Guías para tareas CAD habituales',
    desc: 'Guías paso a paso para KulmanLab CAD: abrir archivos DXF, dibujar con medidas exactas, usar capas, acotar, preparar archivos para corte láser, imprimir y respaldar tus dibujos.',
    heading: 'Guías',
    subtitle: 'Guías paso a paso para las tareas más habituales en KulmanLab CAD.',
    docsLabel: 'Docs:',
    outroTitle: '¿Buscas un comando concreto?',
    outroHtml: 'La <a href="/es/docs/">referencia de comandos</a> documenta los más de 50 comandos, y las <a href="/es/faq/">preguntas frecuentes</a> cubren almacenamiento, formatos y compatibilidad.',
    guides: [
      {
        title: 'Abrir un archivo DXF',
        intro: 'KulmanLab lee DXF, el formato de intercambio que cualquier herramienta CAD puede producir. Los archivos se abren directamente desde tu disco y nunca salen de tu dispositivo.',
        steps: [
          'Abre <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Haz clic en el botón <strong>Import</strong> del panel Archivo, o escribe <code>import</code> en el terminal.',
          'Elige un archivo <code>.dxf</code> (o <code>.json</code> de KulmanLab) de tu equipo.',
          'El dibujo se carga en el lienzo y se guarda automáticamente en el almacenamiento del navegador, así que seguirá ahí la próxima vez.',
        ],
        links: [
          { label: 'Comando Import', slug: 'commands/import' },
          { label: 'Panel de archivos', slug: 'commands/files' },
        ],
      },
      {
        title: 'Dibujar con medidas exactas',
        intro: 'Todos los comandos de dibujo aceptan entrada por teclado: nunca tendrás que poner una longitud o coordenada a ojo.',
        steps: [
          'Inicia un comando: haz clic en <strong>Line</strong> o escribe <code>line</code> y pulsa <strong>Enter</strong>.',
          'Escribe el punto inicial como <code>x,y</code> (por ejemplo <code>0,0</code>) y pulsa <strong>Enter</strong>.',
          'Mueve el cursor en la dirección deseada, escribe una longitud (por ejemplo <code>250</code>) y pulsa <strong>Enter</strong>: el segmento se dibuja exactamente con esa longitud.',
          'Activa el bloqueo de ángulo en la barra de control para mantener los segmentos en ángulos exactos como 30°, 45° o 90°.',
        ],
        links: [
          { label: 'Comando Line', slug: 'commands/line' },
          { label: 'Rejilla y ajuste', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Organizar un dibujo con capas',
        intro: 'Las capas mantienen separadas las líneas auxiliares, la geometría y las anotaciones, y sobreviven a la exportación DXF.',
        steps: [
          'Abre el panel <strong>Capas</strong> en la barra de herramientas y crea una capa para cada tipo de contenido (contorno, cotas, notas…).',
          'Define color, tipo de línea y grosor por capa para que las entidades hereden valores sensatos.',
          'Haz actual una capa con <code>layer-make-current</code> antes de dibujar, o mueve entidades seleccionadas con <code>layer-match</code>.',
          'Usa <code>layer-isolate</code> para ocultar todo excepto la capa en la que trabajas, y <code>layer-unfreeze-all</code> para recuperarlo todo.',
        ],
        links: [
          { label: 'Aislar capa', slug: 'commands/layer-isolate' },
          { label: 'Tipo de línea', slug: 'interface/linetype' },
          { label: 'Grosor de línea', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Añadir cotas',
        intro: 'Las cotas son entidades DXF DIMENSION reales, por lo que viajan sin pérdidas a cualquier otra herramienta CAD.',
        steps: [
          'Escribe <code>dim-linear</code> (horizontal/vertical) o <code>dim-aligned</code> (paralela al borde medido) en el terminal.',
          'Elige los dos puntos a medir y coloca la línea de cota con un tercer clic.',
          'Encadena una fila de medidas con <code>dim-continue</code>: cada nueva cota empieza donde terminó la anterior.',
          'Para círculos y arcos usa <code>dim-radius</code>, <code>dim-diameter</code> o <code>dim-angular</code>.',
          'Haz doble clic en cualquier etiqueta de cota para editar su texto.',
        ],
        links: [
          { label: 'Cota lineal', slug: 'commands/dim-linear' },
          { label: 'Cota continua', slug: 'commands/dim-continue' },
          { label: 'Editor de texto', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Medir distancia, ángulo y área',
        intro: 'Mediciones rápidas sin crear geometría: los resultados permanecen en pantalla hasta que pulses Escape.',
        steps: [
          'Escribe <code>distance</code> y elige dos puntos para leer una longitud.',
          'Escribe <code>angle</code> y elige dos líneas (o tres puntos) para leer el ángulo entre ellas.',
          'Escribe <code>area</code>, haz clic en tres o más puntos y pulsa <strong>Enter</strong>: se muestran el área encerrada y el perímetro.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Preparar un archivo para corte láser o CNC',
        intro: 'El flujo de trabajo para el que KulmanLab fue creado: revisar un archivo, limpiarlo y enviarlo a la máquina.',
        steps: [
          'Importa el DXF y revísalo: <code>fit</code> encuadra todo el dibujo en pantalla.',
          'Borra lo que la máquina no deba cortar: líneas auxiliares, notas, cotas. <code>layer-isolate</code> ayuda a encontrar elementos sueltos.',
          'Ordena la geometría: recorta extremos sobrantes con <code>trim</code>, cierra huecos y comprueba medidas con <code>distance</code>.',
          'Exporta como DXF y cárgalo en el software de tu máquina. Las trayectorias de corte se conservan tal cual: KulmanLab escribe DXF AC1032 puro.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Encuadrar vista', slug: 'commands/fit' },
          { label: 'Exportar', slug: 'commands/export' },
        ],
      },
      {
        title: 'Configurar un layout de papel con viewports',
        intro: 'Los layouts son hojas de espacio papel: compón una o varias vistas a escala de tu modelo en una página, listas para imprimir.',
        steps: [
          'Haz clic en una <strong>pestaña de layout</strong> en la parte inferior de la pantalla para pasar del espacio modelo al espacio papel. El botón <strong>+</strong> de la barra de pestañas añade un layout nuevo.',
          '<strong>Haz clic derecho en una pestaña de layout</strong> para renombrarla, borrarla o abrir el <strong>Page Manager</strong>, donde defines el formato de papel (A4, A3, Carta…), la orientación y la escala de unidades de dibujo por mm.',
          'Escribe <code>viewport-rectangle</code> y haz clic en dos esquinas opuestas para colocar un viewport: una ventana que muestra tu modelo sobre el papel.',
          'Haz clic en un viewport para seleccionarlo: arrastra sus bordes o esquinas para redimensionarlo, arrastra el grip central para moverlo y elige una escala exacta (p. ej. <code>1:50</code>) en el selector de la barra de control.',
          'Desplázate dentro del viewport para hacer zoom en la vista del modelo y arrastra con el botón central para panear. Cuando esté bien, <strong>haz clic derecho en el viewport</strong> y elige <strong>Lock</strong> para protegerlo de cambios accidentales.',
          '¿Necesitas la misma vista dos veces? <code>viewport-copy</code> duplica un viewport conservando su escala y su vista del modelo.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Imprimir o guardar como PDF / PNG',
        intro: 'El gestor de impresión convierte tu dibujo en una imagen lista para papel, con vista previa en vivo.',
        steps: [
          'Escribe <code>print</code> o haz clic en el botón Imprimir del panel Archivo.',
          'Elige el formato de salida: PDF para documentos, PNG/JPEG/WebP para imágenes.',
          'Opcionalmente recorta a un área del dibujo y activa la salida monocroma para impresiones de líneas limpias.',
          'Haz clic en <strong>Print</strong>: el archivo se descarga a tu equipo.',
        ],
        links: [
          { label: 'Comando Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Respaldar y gestionar los dibujos guardados',
        intro: 'Los dibujos viven en el almacenamiento de tu navegador: privados, sin conexión y bajo tu control.',
        steps: [
          'Abre el panel <strong>Archivos</strong> para ver todos los dibujos guardados en este navegador; restaura o borra el que quieras.',
          'Antes de limpiar los datos del navegador o cambiar de equipo, exporta lo importante: <code>.json</code> conserva toda la fidelidad, <code>.dxf</code> maximiza la compatibilidad.',
          'Para restablecer la app por completo, escribe <code>wipestorage</code> y confirma con <code>YES</code>: se borran de forma permanente todos los dibujos guardados localmente.',
        ],
        links: [
          { label: 'Panel de archivos', slug: 'commands/files' },
          { label: 'Exportar', slug: 'commands/export' },
          { label: 'Borrar almacenamiento', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  fr: {
    title: 'Utiliser KulmanLab — Guides pour les tâches CAO courantes',
    desc: 'Guides pas à pas pour KulmanLab CAO : ouvrir des fichiers DXF, dessiner avec des cotes exactes, utiliser les calques, coter, préparer des fichiers de découpe laser, imprimer et sauvegarder vos dessins.',
    heading: 'Guides',
    subtitle: 'Des guides pas à pas pour les tâches les plus courantes dans KulmanLab CAO.',
    docsLabel: 'Docs :',
    outroTitle: 'Vous cherchez une commande précise ?',
    outroHtml: 'La <a href="/fr/docs/">référence des commandes</a> documente les 50+ commandes, et la <a href="/fr/faq/">FAQ</a> couvre le stockage, les formats et la compatibilité.',
    guides: [
      {
        title: 'Ouvrir un fichier DXF',
        intro: 'KulmanLab lit le DXF — le format d\'échange que tout outil de CAO sait produire. Les fichiers s\'ouvrent directement depuis votre disque et ne quittent jamais votre appareil.',
        steps: [
          'Ouvrez <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Cliquez sur le bouton <strong>Import</strong> du panneau Fichier, ou tapez <code>import</code> dans le terminal.',
          'Choisissez un fichier <code>.dxf</code> (ou <code>.json</code> KulmanLab) sur votre ordinateur.',
          'Le dessin se charge sur le canevas et est enregistré automatiquement dans le stockage du navigateur — il sera encore là la prochaine fois.',
        ],
        links: [
          { label: 'Commande Import', slug: 'commands/import' },
          { label: 'Panneau des fichiers', slug: 'commands/files' },
        ],
      },
      {
        title: 'Dessiner avec des cotes exactes',
        intro: 'Chaque commande de dessin accepte la saisie clavier : plus jamais de longueur ou de coordonnée « au jugé ».',
        steps: [
          'Lancez une commande : cliquez sur <strong>Line</strong> ou tapez <code>line</code> puis <strong>Entrée</strong>.',
          'Saisissez le point de départ sous la forme <code>x,y</code> (par exemple <code>0,0</code>) puis <strong>Entrée</strong>.',
          'Déplacez le curseur dans la direction voulue, tapez une longueur (par exemple <code>250</code>) puis <strong>Entrée</strong> — le segment est tracé exactement à cette longueur.',
          'Activez le verrouillage d\'angle dans la barre de contrôle pour maintenir les segments à des angles exacts comme 30°, 45° ou 90°.',
        ],
        links: [
          { label: 'Commande Line', slug: 'commands/line' },
          { label: 'Grille et accrochage', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Organiser un dessin avec des calques',
        intro: 'Les calques séparent lignes de construction, géométrie et annotations — et survivent à l\'export DXF.',
        steps: [
          'Ouvrez le panneau <strong>Calques</strong> dans la barre d\'outils et créez un calque par type de contenu (contour, cotations, notes…).',
          'Définissez couleur, type de ligne et épaisseur par calque pour que les entités héritent de valeurs par défaut sensées.',
          'Rendez un calque courant avec <code>layer-make-current</code> avant de dessiner, ou déplacez les entités sélectionnées avec <code>layer-match</code>.',
          'Avec <code>layer-isolate</code>, masquez tout sauf le calque en cours ; <code>layer-unfreeze-all</code> réaffiche tout.',
        ],
        links: [
          { label: 'Isoler un calque', slug: 'commands/layer-isolate' },
          { label: 'Type de ligne', slug: 'interface/linetype' },
          { label: 'Épaisseur de ligne', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Ajouter des cotations',
        intro: 'Les cotations sont de vraies entités DXF DIMENSION : elles voyagent sans perte vers tout autre outil de CAO.',
        steps: [
          'Tapez <code>dim-linear</code> (horizontal/vertical) ou <code>dim-aligned</code> (parallèle au bord mesuré) dans le terminal.',
          'Choisissez les deux points à mesurer, puis placez la ligne de cote d\'un troisième clic.',
          'Enchaînez une série de mesures avec <code>dim-continue</code> — chaque nouvelle cote commence où la précédente s\'arrête.',
          'Pour les cercles et les arcs, utilisez <code>dim-radius</code>, <code>dim-diameter</code> ou <code>dim-angular</code>.',
          'Double-cliquez sur une étiquette de cote pour en modifier le texte.',
        ],
        links: [
          { label: 'Cotation linéaire', slug: 'commands/dim-linear' },
          { label: 'Cotation continue', slug: 'commands/dim-continue' },
          { label: 'Éditeur de texte', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Mesurer distance, angle et aire',
        intro: 'Des mesures rapides sans créer de géométrie — les résultats restent affichés jusqu\'à Échap.',
        steps: [
          'Tapez <code>distance</code> et choisissez deux points pour lire une longueur.',
          'Tapez <code>angle</code> et choisissez deux lignes (ou trois points) pour lire l\'angle entre elles.',
          'Tapez <code>area</code>, cliquez trois points ou plus, puis <strong>Entrée</strong> — l\'aire délimitée et le périmètre s\'affichent.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Préparer un fichier pour la découpe laser ou CNC',
        intro: 'Le flux de travail pour lequel KulmanLab a été créé : vérifier un fichier, le nettoyer, l\'envoyer à la machine.',
        steps: [
          'Importez le DXF et examinez-le — <code>fit</code> cadre tout le dessin à l\'écran.',
          'Supprimez ce que la machine ne doit pas découper : lignes de construction, notes, cotations. <code>layer-isolate</code> aide à repérer les éléments égarés.',
          'Nettoyez la géométrie : <code>trim</code> pour les extrémités qui dépassent, fermez les écarts, vérifiez les dimensions avec <code>distance</code>.',
          'Exportez en DXF et chargez le fichier dans le logiciel de votre machine. Les trajectoires de coupe restent exactement telles que dessinées — KulmanLab écrit du DXF AC1032 pur.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Cadrer la vue', slug: 'commands/fit' },
          { label: 'Exporter', slug: 'commands/export' },
        ],
      },
      {
        title: 'Créer une mise en page papier avec des viewports',
        intro: 'Les layouts sont des feuilles en espace papier : composez une ou plusieurs vues à l\'échelle de votre modèle sur une page, prêtes à imprimer.',
        steps: [
          'Cliquez sur un <strong>onglet de layout</strong> en bas de l\'écran pour passer de l\'espace modèle à l\'espace papier. Le bouton <strong>+</strong> de la barre d\'onglets ajoute un nouveau layout.',
          '<strong>Clic droit sur un onglet de layout</strong> pour le renommer, le supprimer ou ouvrir le <strong>Page Manager</strong> — vous y réglez le format de papier (A4, A3, Letter…), l\'orientation et l\'échelle unités de dessin par mm.',
          'Tapez <code>viewport-rectangle</code> et cliquez deux coins opposés pour placer un viewport — une fenêtre qui montre votre modèle sur le papier.',
          'Cliquez sur un viewport pour le sélectionner : faites glisser ses bords ou coins pour le redimensionner, le grip central pour le déplacer, et choisissez une échelle exacte (ex. <code>1:50</code>) dans le sélecteur de la barre de contrôle.',
          'Molette dans le viewport pour zoomer la vue du modèle, glisser au bouton du milieu pour la déplacer. Quand tout est bon, <strong>clic droit sur le viewport</strong> puis <strong>Lock</strong> pour le protéger des modifications accidentelles.',
          'Besoin de la même vue deux fois ? <code>viewport-copy</code> duplique un viewport en conservant échelle et vue du modèle.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Imprimer ou enregistrer en PDF / PNG',
        intro: 'Le gestionnaire d\'impression convertit votre dessin en image prête pour le papier, avec aperçu en direct.',
        steps: [
          'Tapez <code>print</code> ou cliquez sur le bouton Imprimer du panneau Fichier.',
          'Choisissez le format de sortie : PDF pour les documents, PNG/JPEG/WebP pour les images.',
          'En option, recadrez sur une zone du dessin et activez la sortie monochrome pour des tracés nets.',
          'Cliquez sur <strong>Print</strong> — le fichier se télécharge sur votre ordinateur.',
        ],
        links: [
          { label: 'Commande Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Sauvegarder et gérer les dessins enregistrés',
        intro: 'Vos dessins vivent dans le stockage du navigateur — privés, hors ligne, et sous votre contrôle.',
        steps: [
          'Ouvrez le panneau <strong>Fichiers</strong> pour voir tous les dessins enregistrés dans ce navigateur ; restaurez ou supprimez ceux que vous voulez.',
          'Avant d\'effacer les données du navigateur ou de changer de machine, exportez l\'important — <code>.json</code> garde toute la fidélité, <code>.dxf</code> maximise la compatibilité.',
          'Pour réinitialiser complètement l\'app, tapez <code>wipestorage</code> et confirmez avec <code>YES</code> — tous les dessins enregistrés localement sont supprimés définitivement.',
        ],
        links: [
          { label: 'Panneau des fichiers', slug: 'commands/files' },
          { label: 'Exporter', slug: 'commands/export' },
          { label: 'Effacer le stockage', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  it: {
    title: 'Come usare KulmanLab — Guide alle attività CAD più comuni',
    desc: 'Guide passo-passo per KulmanLab CAD: aprire file DXF, disegnare con misure esatte, usare i layer, quotare, preparare file per il taglio laser, stampare e fare backup dei disegni.',
    heading: 'Guide',
    subtitle: 'Guide passo-passo per le attività più comuni in KulmanLab CAD.',
    docsLabel: 'Docs:',
    outroTitle: 'Cerchi un comando specifico?',
    outroHtml: 'La <a href="/it/docs/">guida ai comandi</a> documenta tutti gli oltre 50 comandi, e le <a href="/it/faq/">FAQ</a> coprono archiviazione, formati e compatibilità.',
    guides: [
      {
        title: 'Aprire un file DXF',
        intro: 'KulmanLab legge il DXF — il formato di scambio che ogni strumento CAD sa produrre. I file si aprono direttamente dal tuo disco e non lasciano mai il tuo dispositivo.',
        steps: [
          'Apri <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Fai clic sul pulsante <strong>Import</strong> nel pannello File, oppure digita <code>import</code> nel terminale.',
          'Scegli un file <code>.dxf</code> (o <code>.json</code> di KulmanLab) dal tuo computer.',
          'Il disegno viene caricato sulla tela e salvato automaticamente nella memoria del browser: lo ritroverai la prossima volta.',
        ],
        links: [
          { label: 'Comando Import', slug: 'commands/import' },
          { label: 'Pannello file', slug: 'commands/files' },
        ],
      },
      {
        title: 'Disegnare con misure esatte',
        intro: 'Ogni comando di disegno accetta l\'input da tastiera: nessuna lunghezza o coordinata a occhio.',
        steps: [
          'Avvia un comando: fai clic su <strong>Line</strong> o digita <code>line</code> e premi <strong>Invio</strong>.',
          'Digita il punto iniziale come <code>x,y</code> (ad esempio <code>0,0</code>) e premi <strong>Invio</strong>.',
          'Muovi il cursore nella direzione desiderata, digita una lunghezza (ad esempio <code>250</code>) e premi <strong>Invio</strong>: il segmento viene tracciato esattamente di quella lunghezza.',
          'Attiva il blocco angolare nella barra di controllo per mantenere i segmenti su angoli esatti come 30°, 45° o 90°.',
        ],
        links: [
          { label: 'Comando Line', slug: 'commands/line' },
          { label: 'Griglia e snap', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Organizzare un disegno con i layer',
        intro: 'I layer tengono separate linee di costruzione, geometria e annotazioni — e sopravvivono all\'export DXF.',
        steps: [
          'Apri il pannello <strong>Layer</strong> nella barra degli strumenti e crea un layer per ogni tipo di contenuto (contorno, quote, note…).',
          'Imposta colore, tipo di linea e spessore per layer, così le entità ereditano valori predefiniti sensati.',
          'Rendi corrente un layer con <code>layer-make-current</code> prima di disegnare, oppure sposta le entità selezionate con <code>layer-match</code>.',
          'Usa <code>layer-isolate</code> per nascondere tutto tranne il layer su cui lavori, e <code>layer-unfreeze-all</code> per far riapparire tutto.',
        ],
        links: [
          { label: 'Isola layer', slug: 'commands/layer-isolate' },
          { label: 'Tipo di linea', slug: 'interface/linetype' },
          { label: 'Spessore linea', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Aggiungere le quote',
        intro: 'Le quote sono vere entità DXF DIMENSION: viaggiano senza perdite verso qualsiasi altro strumento CAD.',
        steps: [
          'Digita <code>dim-linear</code> (orizzontale/verticale) o <code>dim-aligned</code> (parallela al bordo misurato) nel terminale.',
          'Scegli i due punti da misurare, poi posiziona la linea di quota con un terzo clic.',
          'Concatena una serie di misure con <code>dim-continue</code>: ogni nuova quota inizia dove finiva la precedente.',
          'Per cerchi e archi usa <code>dim-radius</code>, <code>dim-diameter</code> o <code>dim-angular</code>.',
          'Fai doppio clic su un\'etichetta di quota per modificarne il testo.',
        ],
        links: [
          { label: 'Quota lineare', slug: 'commands/dim-linear' },
          { label: 'Quota continua', slug: 'commands/dim-continue' },
          { label: 'Editor di testo', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Misurare distanza, angolo e area',
        intro: 'Misurazioni rapide senza creare geometria: i risultati restano visibili finché non premi Esc.',
        steps: [
          'Digita <code>distance</code> e scegli due punti per leggere una lunghezza.',
          'Digita <code>angle</code> e scegli due linee (o tre punti) per leggere l\'angolo compreso.',
          'Digita <code>area</code>, fai clic su tre o più punti e premi <strong>Invio</strong>: vengono mostrati area racchiusa e perimetro.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Preparare un file per taglio laser o CNC',
        intro: 'Il flusso di lavoro per cui KulmanLab è nato: controllare un file, ripulirlo, mandarlo alla macchina.',
        steps: [
          'Importa il DXF e dagli un\'occhiata: <code>fit</code> inquadra l\'intero disegno.',
          'Elimina ciò che la macchina non deve tagliare: linee di costruzione, note, quote. <code>layer-isolate</code> aiuta a trovare gli elementi sparsi.',
          'Sistema la geometria: <code>trim</code> per le estremità sporgenti, chiudi i varchi e verifica le misure con <code>distance</code>.',
          'Esporta in DXF e caricalo nel software della macchina. I percorsi di taglio restano esattamente come disegnati: KulmanLab scrive DXF AC1032 puro.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Inquadra vista', slug: 'commands/fit' },
          { label: 'Esporta', slug: 'commands/export' },
        ],
      },
      {
        title: 'Impostare un layout carta con viewport',
        intro: 'I layout sono fogli in spazio carta: componi una o più viste in scala del modello su una pagina, pronte per la stampa.',
        steps: [
          'Fai clic su una <strong>scheda layout</strong> in fondo allo schermo per passare dallo spazio modello allo spazio carta. Il pulsante <strong>+</strong> nella barra delle schede aggiunge un nuovo layout.',
          '<strong>Clic destro su una scheda layout</strong> per rinominarla, eliminarla o aprire il <strong>Page Manager</strong>: lì imposti formato carta (A4, A3, Letter…), orientamento e scala unità di disegno per mm.',
          'Digita <code>viewport-rectangle</code> e fai clic su due angoli opposti per posizionare un viewport: una finestra che mostra il modello sulla carta.',
          'Fai clic su un viewport per selezionarlo: trascina bordi o angoli per ridimensionarlo, il grip centrale per spostarlo, e scegli una scala esatta (es. <code>1:50</code>) dal selettore nella barra di controllo.',
          'Scorri dentro il viewport per zoomare la vista del modello, trascina col tasto centrale per spostarla. Quando va bene, <strong>clic destro sul viewport</strong> e scegli <strong>Lock</strong> per proteggerlo da modifiche accidentali.',
          'Serve la stessa vista due volte? <code>viewport-copy</code> duplica un viewport conservando scala e vista del modello.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Stampare o salvare come PDF / PNG',
        intro: 'Il gestore di stampa trasforma il disegno in un\'immagine pronta per la carta, con anteprima dal vivo.',
        steps: [
          'Digita <code>print</code> o fai clic sul pulsante Stampa nel pannello File.',
          'Scegli il formato di output: PDF per i documenti, PNG/JPEG/WebP per le immagini.',
          'Facoltativamente ritaglia un\'area del disegno e attiva l\'output monocromatico per stampe di linee pulite.',
          'Fai clic su <strong>Print</strong>: il file viene scaricato sul tuo computer.',
        ],
        links: [
          { label: 'Comando Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Backup e gestione dei disegni salvati',
        intro: 'I disegni vivono nella memoria del tuo browser: privati, offline e sotto il tuo controllo.',
        steps: [
          'Apri il pannello <strong>File</strong> per vedere ogni disegno salvato in questo browser; ripristina o elimina quelli che vuoi.',
          'Prima di cancellare i dati del browser o cambiare macchina, esporta ciò che conta: <code>.json</code> conserva tutta la fedeltà, <code>.dxf</code> massimizza la compatibilità.',
          'Per azzerare completamente l\'app, digita <code>wipestorage</code> e conferma con <code>YES</code>: tutti i disegni salvati localmente vengono eliminati per sempre.',
        ],
        links: [
          { label: 'Pannello file', slug: 'commands/files' },
          { label: 'Esporta', slug: 'commands/export' },
          { label: 'Svuota memoria', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  pt: {
    title: 'Como usar o KulmanLab — Guias para tarefas comuns de CAD',
    desc: 'Guias passo a passo para o KulmanLab CAD: abrir arquivos DXF, desenhar com medidas exatas, usar camadas, cotar, preparar arquivos para corte a laser, imprimir e fazer backup dos desenhos.',
    heading: 'Guias',
    subtitle: 'Guias passo a passo para as tarefas mais comuns no KulmanLab CAD.',
    docsLabel: 'Docs:',
    outroTitle: 'Procurando um comando específico?',
    outroHtml: 'A <a href="/pt/docs/">referência de comandos</a> documenta os mais de 50 comandos, e o <a href="/pt/faq/">FAQ</a> cobre armazenamento, formatos e compatibilidade.',
    guides: [
      {
        title: 'Abrir um arquivo DXF',
        intro: 'O KulmanLab lê DXF — o formato de intercâmbio que qualquer ferramenta CAD sabe produzir. Os arquivos abrem direto do seu disco e nunca saem do seu dispositivo.',
        steps: [
          'Abra <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Clique no botão <strong>Import</strong> no painel Arquivo, ou digite <code>import</code> no terminal.',
          'Escolha um arquivo <code>.dxf</code> (ou <code>.json</code> do KulmanLab) do seu computador.',
          'O desenho carrega no canvas e é salvo automaticamente no armazenamento do navegador — estará lá na próxima vez.',
        ],
        links: [
          { label: 'Comando Import', slug: 'commands/import' },
          { label: 'Painel de arquivos', slug: 'commands/files' },
        ],
      },
      {
        title: 'Desenhar com medidas exatas',
        intro: 'Todo comando de desenho aceita entrada pelo teclado — você nunca precisa chutar um comprimento ou coordenada.',
        steps: [
          'Inicie um comando: clique em <strong>Line</strong> ou digite <code>line</code> e pressione <strong>Enter</strong>.',
          'Digite o ponto inicial como <code>x,y</code> (por exemplo <code>0,0</code>) e pressione <strong>Enter</strong>.',
          'Mova o cursor na direção desejada, digite um comprimento (por exemplo <code>250</code>) e pressione <strong>Enter</strong> — o segmento é desenhado exatamente com esse tamanho.',
          'Ative a trava de ângulo na barra de controle para manter os segmentos em ângulos exatos como 30°, 45° ou 90°.',
        ],
        links: [
          { label: 'Comando Line', slug: 'commands/line' },
          { label: 'Grade e snap', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Organizar um desenho com camadas',
        intro: 'Camadas mantêm linhas de construção, geometria e anotações separadas — e sobrevivem à exportação DXF.',
        steps: [
          'Abra o painel <strong>Camadas</strong> na barra de ferramentas e crie uma camada para cada tipo de conteúdo (contorno, cotas, notas…).',
          'Defina cor, tipo de linha e espessura por camada para que as entidades herdem padrões sensatos.',
          'Torne uma camada atual com <code>layer-make-current</code> antes de desenhar, ou mova entidades selecionadas com <code>layer-match</code>.',
          'Use <code>layer-isolate</code> para ocultar tudo exceto a camada em que trabalha, e <code>layer-unfreeze-all</code> para trazer tudo de volta.',
        ],
        links: [
          { label: 'Isolar camada', slug: 'commands/layer-isolate' },
          { label: 'Tipo de linha', slug: 'interface/linetype' },
          { label: 'Espessura de linha', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Adicionar cotas',
        intro: 'Cotas são entidades DXF DIMENSION reais — viajam sem perdas para qualquer outra ferramenta CAD.',
        steps: [
          'Digite <code>dim-linear</code> (horizontal/vertical) ou <code>dim-aligned</code> (paralela à aresta medida) no terminal.',
          'Escolha os dois pontos a medir e posicione a linha de cota com um terceiro clique.',
          'Encadeie uma sequência de medidas com <code>dim-continue</code> — cada nova cota começa onde a anterior terminou.',
          'Para círculos e arcos, use <code>dim-radius</code>, <code>dim-diameter</code> ou <code>dim-angular</code>.',
          'Dê um duplo clique em qualquer rótulo de cota para editar o texto.',
        ],
        links: [
          { label: 'Cota linear', slug: 'commands/dim-linear' },
          { label: 'Cota contínua', slug: 'commands/dim-continue' },
          { label: 'Editor de texto', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Medir distância, ângulo e área',
        intro: 'Medições rápidas sem criar geometria — os resultados ficam na tela até você pressionar Escape.',
        steps: [
          'Digite <code>distance</code> e escolha dois pontos para ler um comprimento.',
          'Digite <code>angle</code> e escolha duas linhas (ou três pontos) para ler o ângulo entre elas.',
          'Digite <code>area</code>, clique em três ou mais pontos e pressione <strong>Enter</strong> — a área delimitada e o perímetro são exibidos.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Preparar um arquivo para corte a laser ou CNC',
        intro: 'O fluxo de trabalho para o qual o KulmanLab foi criado: conferir um arquivo, limpá-lo e mandá-lo para a máquina.',
        steps: [
          'Importe o DXF e examine-o — <code>fit</code> enquadra o desenho inteiro na tela.',
          'Apague o que a máquina não deve cortar: linhas de construção, notas, cotas. <code>layer-isolate</code> ajuda a achar elementos perdidos.',
          'Arrume a geometria: apare pontas sobrando com <code>trim</code>, feche folgas e confira medidas com <code>distance</code>.',
          'Exporte como DXF e carregue no software da máquina. Os caminhos de corte permanecem exatamente como desenhados — o KulmanLab grava DXF AC1032 puro.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Enquadrar vista', slug: 'commands/fit' },
          { label: 'Exportar', slug: 'commands/export' },
        ],
      },
      {
        title: 'Montar um layout de papel com viewports',
        intro: 'Layouts são folhas de espaço papel — componha uma ou mais vistas em escala do seu modelo numa página, prontas para imprimir.',
        steps: [
          'Clique numa <strong>aba de layout</strong> na parte de baixo da tela para sair do espaço modelo e entrar no espaço papel. O botão <strong>+</strong> na barra de abas adiciona um novo layout.',
          '<strong>Clique com o botão direito numa aba de layout</strong> para renomeá-la, excluí-la ou abrir o <strong>Page Manager</strong> — lá você define formato do papel (A4, A3, Carta…), orientação e a escala de unidades de desenho por mm.',
          'Digite <code>viewport-rectangle</code> e clique em dois cantos opostos para posicionar um viewport — uma janela que mostra seu modelo no papel.',
          'Clique num viewport para selecioná-lo: arraste bordas ou cantos para redimensionar, arraste o grip central para mover e escolha uma escala exata (ex. <code>1:50</code>) no seletor da barra de controle.',
          'Role dentro do viewport para dar zoom na vista do modelo, arraste com o botão do meio para deslocá-la. Quando estiver bom, <strong>clique com o botão direito no viewport</strong> e escolha <strong>Lock</strong> para protegê-lo de alterações acidentais.',
          'Precisa da mesma vista duas vezes? <code>viewport-copy</code> duplica um viewport preservando escala e vista do modelo.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Imprimir ou salvar como PDF / PNG',
        intro: 'O gerenciador de impressão converte seu desenho numa imagem pronta para o papel, com pré-visualização ao vivo.',
        steps: [
          'Digite <code>print</code> ou clique no botão Imprimir no painel Arquivo.',
          'Escolha o formato de saída: PDF para documentos, PNG/JPEG/WebP para imagens.',
          'Opcionalmente recorte uma área do desenho e ative a saída monocromática para impressões de linhas limpas.',
          'Clique em <strong>Print</strong> — o arquivo é baixado para o seu computador.',
        ],
        links: [
          { label: 'Comando Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Fazer backup e gerenciar desenhos salvos',
        intro: 'Os desenhos vivem no armazenamento do seu navegador — privados, offline e sob seu controle.',
        steps: [
          'Abra o painel <strong>Arquivos</strong> para ver todos os desenhos salvos neste navegador; restaure ou exclua qualquer um.',
          'Antes de limpar os dados do navegador ou trocar de máquina, exporte o que importa — <code>.json</code> mantém fidelidade total, <code>.dxf</code> maximiza a compatibilidade.',
          'Para zerar o app por completo, digite <code>wipestorage</code> e confirme com <code>YES</code> — todos os desenhos salvos localmente são apagados em definitivo.',
        ],
        links: [
          { label: 'Painel de arquivos', slug: 'commands/files' },
          { label: 'Exportar', slug: 'commands/export' },
          { label: 'Limpar armazenamento', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  uk: {
    title: 'Як користуватися KulmanLab — інструкції для типових CAD-задач',
    desc: 'Покрокові інструкції для KulmanLab CAD: відкривання DXF-файлів, креслення з точними розмірами, шари, розміри, підготовка файлів для лазерного різання, друк і резервне копіювання.',
    heading: 'Інструкції',
    subtitle: 'Покрокові інструкції для найтиповіших задач у KulmanLab CAD.',
    docsLabel: 'Документація:',
    outroTitle: 'Шукаєте конкретну команду?',
    outroHtml: '<a href="/uk/docs/">Довідник команд</a> описує всі 50+ команд, а <a href="/uk/faq/">FAQ</a> охоплює зберігання, формати та сумісність.',
    guides: [
      {
        title: 'Відкрити DXF-файл',
        intro: 'KulmanLab читає DXF — формат обміну, який вміє створювати будь-який CAD-інструмент. Файли відкриваються просто з вашого диска й ніколи не залишають пристрій.',
        steps: [
          'Відкрийте <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Натисніть кнопку <strong>Import</strong> у панелі «Файл» або введіть <code>import</code> у терміналі.',
          'Виберіть файл <code>.dxf</code> (або <code>.json</code> KulmanLab) на своєму комп\'ютері.',
          'Креслення завантажується на полотно й автоматично зберігається у сховищі браузера — наступного разу воно буде на місці.',
        ],
        links: [
          { label: 'Команда Import', slug: 'commands/import' },
          { label: 'Панель файлів', slug: 'commands/files' },
        ],
      },
      {
        title: 'Креслити з точними розмірами',
        intro: 'Кожна команда креслення приймає введення з клавіатури — довжини та координати не доведеться ставити «на око».',
        steps: [
          'Запустіть команду: натисніть <strong>Line</strong> або введіть <code>line</code> і натисніть <strong>Enter</strong>.',
          'Введіть початкову точку як <code>x,y</code> (наприклад <code>0,0</code>) і натисніть <strong>Enter</strong>.',
          'Поведіть курсор у потрібному напрямку, введіть довжину (наприклад <code>250</code>) і натисніть <strong>Enter</strong> — відрізок буде накреслено саме такої довжини.',
          'Увімкніть фіксацію кута в панелі керування, щоб тримати відрізки на точних кутах на кшталт 30°, 45° чи 90°.',
        ],
        links: [
          { label: 'Команда Line', slug: 'commands/line' },
          { label: 'Сітка та прив\'язка', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Організувати креслення шарами',
        intro: 'Шари відділяють допоміжні лінії, геометрію та примітки — і зберігаються під час експорту в DXF.',
        steps: [
          'Відкрийте панель <strong>Шари</strong> на панелі інструментів і створіть шар для кожного типу вмісту (контур, розміри, нотатки…).',
          'Задайте колір, тип і товщину лінії для кожного шару, щоб об\'єкти отримували розумні значення за замовчуванням.',
          'Зробіть шар поточним командою <code>layer-make-current</code> перед кресленням або перенесіть вибрані об\'єкти командою <code>layer-match</code>.',
          'Команда <code>layer-isolate</code> ховає все, крім робочого шару, а <code>layer-unfreeze-all</code> повертає все назад.',
        ],
        links: [
          { label: 'Ізолювати шар', slug: 'commands/layer-isolate' },
          { label: 'Тип лінії', slug: 'interface/linetype' },
          { label: 'Товщина лінії', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Додати розміри',
        intro: 'Розміри — це справжні DXF-об\'єкти DIMENSION, тож вони без втрат переносяться в будь-який інший CAD-інструмент.',
        steps: [
          'Введіть у терміналі <code>dim-linear</code> (горизонтальний/вертикальний) або <code>dim-aligned</code> (паралельний виміряній грані).',
          'Виберіть дві точки для вимірювання й розмістіть розмірну лінію третім кліком.',
          'З\'єднуйте низку вимірювань командою <code>dim-continue</code> — кожен новий розмір починається там, де закінчився попередній.',
          'Для кіл і дуг використовуйте <code>dim-radius</code>, <code>dim-diameter</code> або <code>dim-angular</code>.',
          'Двічі клацніть будь-який розмірний напис, щоб відредагувати його текст.',
        ],
        links: [
          { label: 'Лінійний розмір', slug: 'commands/dim-linear' },
          { label: 'Продовжити розмір', slug: 'commands/dim-continue' },
          { label: 'Текстовий редактор', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Виміряти відстань, кут і площу',
        intro: 'Швидкі вимірювання без створення геометрії — результати лишаються на екрані, доки не натиснете Escape.',
        steps: [
          'Введіть <code>distance</code> і виберіть дві точки, щоб дізнатися довжину.',
          'Введіть <code>angle</code> і виберіть дві лінії (або три точки), щоб дізнатися кут між ними.',
          'Введіть <code>area</code>, клацніть три чи більше точок і натисніть <strong>Enter</strong> — буде показано площу та периметр.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Підготувати файл для лазерного різання чи ЧПК',
        intro: 'Робочий процес, заради якого KulmanLab і створювався: перевірити файл, почистити його, надіслати на верстат.',
        steps: [
          'Імпортуйте DXF і роздивіться його — <code>fit</code> вписує все креслення в екран.',
          'Видаліть усе, чого верстат не має різати: допоміжні лінії, нотатки, розміри. <code>layer-isolate</code> допомагає знайти зайве.',
          'Приберіть геометрію: обріжте виступні кінці командою <code>trim</code>, закрийте розриви й перевірте розміри командою <code>distance</code>.',
          'Експортуйте як DXF і завантажте у програму верстата. Траєкторії різання лишаються точно як накреслені — KulmanLab записує чистий DXF AC1032.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Вписати вид', slug: 'commands/fit' },
          { label: 'Експорт', slug: 'commands/export' },
        ],
      },
      {
        title: 'Налаштувати паперовий макет із в\'юпортами',
        intro: 'Макети — це аркуші паперового простору: скомпонуйте один чи кілька масштабованих видів моделі на сторінці, готовій до друку.',
        steps: [
          'Клацніть <strong>вкладку макета</strong> внизу екрана, щоб перейти з простору моделі в паперовий простір. Кнопка <strong>+</strong> на панелі вкладок додає новий макет.',
          '<strong>Клацніть вкладку макета правою кнопкою</strong>, щоб перейменувати чи видалити її або відкрити <strong>Page Manager</strong> — там задаються формат паперу (A4, A3, Letter…), орієнтація та масштаб одиниць креслення на мм.',
          'Введіть <code>viewport-rectangle</code> і клацніть два протилежні кути, щоб розмістити в\'юпорт — вікно, яке показує вашу модель на папері.',
          'Клацніть в\'юпорт, щоб вибрати його: тягніть краї чи кути для зміни розміру, центральний маркер — для переміщення, а точний масштаб (напр. <code>1:50</code>) виберіть у селекторі на панелі керування.',
          'Прокручуйте всередині в\'юпорта, щоб масштабувати вид моделі, тягніть середньою кнопкою, щоб панорамувати. Коли все готово — <strong>клацніть в\'юпорт правою кнопкою</strong> і виберіть <strong>Lock</strong>, щоб захистити його від випадкових змін.',
          'Потрібен той самий вид двічі? <code>viewport-copy</code> дублює в\'юпорт зі збереженням масштабу та виду моделі.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Надрукувати або зберегти як PDF / PNG',
        intro: 'Менеджер друку перетворює креслення на готове до паперу зображення з живим попереднім переглядом.',
        steps: [
          'Введіть <code>print</code> або натисніть кнопку друку в панелі «Файл».',
          'Виберіть формат виводу: PDF для документів, PNG/JPEG/WebP для зображень.',
          'За бажанням обріжте до потрібної ділянки креслення та ввімкніть монохромний вивід для чистих лінійних роздруківок.',
          'Натисніть <strong>Print</strong> — файл завантажиться на ваш комп\'ютер.',
        ],
        links: [
          { label: 'Команда Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Резервне копіювання та керування кресленнями',
        intro: 'Креслення живуть у сховищі вашого браузера — приватно, офлайн і повністю під вашим контролем.',
        steps: [
          'Відкрийте панель <strong>Файли</strong>, щоб побачити всі креслення, збережені в цьому браузері; відновлюйте чи видаляйте будь-які з них.',
          'Перш ніж чистити дані браузера чи міняти комп\'ютер, експортуйте важливе — <code>.json</code> зберігає все без втрат, <code>.dxf</code> дає максимальну сумісність.',
          'Щоб повністю скинути застосунок, введіть <code>wipestorage</code> і підтвердьте, набравши <code>YES</code> — усі локально збережені креслення буде видалено назавжди.',
        ],
        links: [
          { label: 'Панель файлів', slug: 'commands/files' },
          { label: 'Експорт', slug: 'commands/export' },
          { label: 'Очистити сховище', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  tr: {
    title: 'KulmanLab Nasıl Kullanılır — Yaygın CAD Görevleri İçin Rehberler',
    desc: 'KulmanLab CAD için adım adım rehberler: DXF dosyalarını açma, tam ölçülerle çizim, katmanlar, ölçülendirme, lazer kesim dosyası hazırlama, yazdırma ve çizimleri yedekleme.',
    heading: 'Nasıl yapılır',
    subtitle: 'KulmanLab CAD\'deki en yaygın görevler için adım adım rehberler.',
    docsLabel: 'Belgeler:',
    outroTitle: 'Belirli bir komut mu arıyorsunuz?',
    outroHtml: '<a href="/tr/docs/">Komut referansı</a> 50\'den fazla komutun tamamını belgeler; <a href="/tr/faq/">SSS</a> ise depolama, formatlar ve uyumluluğu kapsar.',
    guides: [
      {
        title: 'Bir DXF dosyası açmak',
        intro: 'KulmanLab, her CAD aracının üretebildiği değişim formatı olan DXF\'i okur. Dosyalar doğrudan diskinizden açılır ve cihazınızdan asla ayrılmaz.',
        steps: [
          '<a href="https://app.kulmanlab.com">app.kulmanlab.com</a> adresini açın.',
          'Dosya panelindeki <strong>Import</strong> düğmesine tıklayın veya terminale <code>import</code> yazın.',
          'Bilgisayarınızdan bir <code>.dxf</code> (veya KulmanLab <code>.json</code>) dosyası seçin.',
          'Çizim tuvale yüklenir ve tarayıcı depolamasına otomatik kaydedilir — bir dahaki sefere yerinde olur.',
        ],
        links: [
          { label: 'Import komutu', slug: 'commands/import' },
          { label: 'Dosyalar paneli', slug: 'commands/files' },
        ],
      },
      {
        title: 'Tam ölçülerle çizmek',
        intro: 'Her çizim komutu klavye girişi kabul eder — uzunlukları ya da koordinatları asla göz kararı vermeniz gerekmez.',
        steps: [
          'Bir komut başlatın: <strong>Line</strong>\'a tıklayın veya <code>line</code> yazıp <strong>Enter</strong>\'a basın.',
          'Başlangıç noktasını <code>x,y</code> biçiminde yazın (örneğin <code>0,0</code>) ve <strong>Enter</strong>\'a basın.',
          'İmleci istediğiniz yöne götürün, bir uzunluk yazın (örneğin <code>250</code>) ve <strong>Enter</strong>\'a basın — parça tam o uzunlukta çizilir.',
          'Parçaları 30°, 45° veya 90° gibi tam açılarda tutmak için kontrol çubuğundaki açı kilidini açın.',
        ],
        links: [
          { label: 'Line komutu', slug: 'commands/line' },
          { label: 'Izgara ve yakalama', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Çizimi katmanlarla düzenlemek',
        intro: 'Katmanlar yardımcı çizgileri, geometriyi ve notları ayrı tutar — ve DXF dışa aktarımında korunur.',
        steps: [
          'Araç çubuğundan <strong>Katmanlar</strong> panelini açın ve her içerik türü için bir katman oluşturun (kontur, ölçüler, notlar…).',
          'Nesnelerin mantıklı varsayılanlar almasını sağlamak için katman başına renk, çizgi tipi ve çizgi kalınlığı ayarlayın.',
          'Çizmeden önce <code>layer-make-current</code> ile bir katmanı geçerli yapın veya seçili nesneleri <code>layer-match</code> ile taşıyın.',
          '<code>layer-isolate</code> üzerinde çalıştığınız katman dışındaki her şeyi gizler; <code>layer-unfreeze-all</code> hepsini geri getirir.',
        ],
        links: [
          { label: 'Katmanı yalıt', slug: 'commands/layer-isolate' },
          { label: 'Çizgi tipi', slug: 'interface/linetype' },
          { label: 'Çizgi kalınlığı', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Ölçü eklemek',
        intro: 'Ölçüler gerçek DXF DIMENSION nesneleridir; başka herhangi bir CAD aracına kayıpsız aktarılır.',
        steps: [
          'Terminale <code>dim-linear</code> (yatay/dikey) veya <code>dim-aligned</code> (ölçülen kenara paralel) yazın.',
          'Ölçmek istediğiniz iki noktayı seçin, üçüncü tıklamayla ölçü çizgisini yerleştirin.',
          '<code>dim-continue</code> ile ölçüleri zincirleyin — her yeni ölçü, öncekinin bittiği yerden başlar.',
          'Daireler ve yaylar için <code>dim-radius</code>, <code>dim-diameter</code> veya <code>dim-angular</code> kullanın.',
          'Metnini düzenlemek için herhangi bir ölçü etiketine çift tıklayın.',
        ],
        links: [
          { label: 'Doğrusal ölçü', slug: 'commands/dim-linear' },
          { label: 'Ölçüyü sürdür', slug: 'commands/dim-continue' },
          { label: 'Metin düzenleyici', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Mesafe, açı ve alan ölçmek',
        intro: 'Geometri oluşturmadan hızlı ölçümler — sonuçlar Escape\'e basana kadar ekranda kalır.',
        steps: [
          '<code>distance</code> yazın ve uzunluğu okumak için iki nokta seçin.',
          '<code>angle</code> yazın ve aralarındaki açıyı okumak için iki çizgi (veya üç nokta) seçin.',
          '<code>area</code> yazın, üç veya daha fazla noktaya tıklayın ve <strong>Enter</strong>\'a basın — çevrelenen alan ve çevre gösterilir.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Lazer kesim veya CNC için dosya hazırlamak',
        intro: 'KulmanLab\'in aslında bunun için yapıldığı iş akışı: dosyayı kontrol et, temizle, makineye gönder.',
        steps: [
          'DXF\'i içe aktarın ve gözden geçirin — <code>fit</code> tüm çizimi ekrana sığdırır.',
          'Makinenin kesmemesi gerekenleri silin: yardımcı çizgiler, notlar, ölçüler. <code>layer-isolate</code> başıboş öğeleri bulmaya yardım eder.',
          'Geometriyi toparlayın: taşan uçları <code>trim</code> ile kırpın, boşlukları kapatın, ölçüleri <code>distance</code> ile doğrulayın.',
          'DXF olarak dışa aktarın ve makine yazılımınıza yükleyin. Kesim yolları tam çizildiği gibi kalır — KulmanLab saf AC1032 DXF yazar.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Görünümü sığdır', slug: 'commands/fit' },
          { label: 'Dışa aktar', slug: 'commands/export' },
        ],
      },
      {
        title: 'Viewport\'larla kâğıt yerleşimi kurmak',
        intro: 'Layout\'lar kâğıt alanı sayfalarıdır — modelinizin bir veya birden çok ölçekli görünümünü yazdırmaya hazır bir sayfada birleştirin.',
        steps: [
          'Model alanından kâğıt alanına geçmek için ekranın altındaki bir <strong>layout sekmesine</strong> tıklayın. Sekme çubuğundaki <strong>+</strong> düğmesi yeni bir layout ekler.',
          'Yeniden adlandırmak, silmek veya <strong>Page Manager</strong>\'ı açmak için <strong>bir layout sekmesine sağ tıklayın</strong> — orada kâğıt formatını (A4, A3, Letter…), yönünü ve mm başına çizim birimi ölçeğini ayarlarsınız.',
          '<code>viewport-rectangle</code> yazın ve bir viewport yerleştirmek için iki karşıt köşeye tıklayın — modelinizi kâğıt üzerinde gösteren bir pencere.',
          'Seçmek için bir viewport\'a tıklayın: boyutlandırmak için kenarlarını veya köşelerini, taşımak için ortadaki tutamacı sürükleyin; kontrol çubuğundaki ölçek seçiciden tam bir ölçek (örn. <code>1:50</code>) seçin.',
          'Model görünümünü yakınlaştırmak için viewport içinde kaydırın, kaydırmak için orta tuşla sürükleyin. Her şey yerindeyken <strong>viewport\'a sağ tıklayıp</strong> <strong>Lock</strong>\'u seçin — yanlışlıkla değişmesin.',
          'Aynı görünüm iki kez mi lazım? <code>viewport-copy</code> bir viewport\'u ölçeğini ve model görünümünü koruyarak çoğaltır.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Yazdırmak veya PDF / PNG olarak kaydetmek',
        intro: 'Yazdırma yöneticisi, canlı önizlemeyle çiziminizi kâğıda hazır bir görüntüye dönüştürür.',
        steps: [
          '<code>print</code> yazın veya Dosya panelindeki Yazdır düğmesine tıklayın.',
          'Çıktı formatını seçin: belgeler için PDF, görüntüler için PNG/JPEG/WebP.',
          'İsteğe bağlı olarak çizimin bir bölgesine kırpın ve temiz çizgi baskıları için tek renkli çıktıyı açın.',
          '<strong>Print</strong>\'e tıklayın — dosya bilgisayarınıza indirilir.',
        ],
        links: [
          { label: 'Print komutu', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Kayıtlı çizimleri yedeklemek ve yönetmek',
        intro: 'Çizimler tarayıcı depolamanızda yaşar — özel, çevrimdışı ve tamamen sizin kontrolünüzde.',
        steps: [
          'Bu tarayıcıda kayıtlı her çizimi görmek için <strong>Dosyalar</strong> panelini açın; istediğinizi geri yükleyin veya silin.',
          'Tarayıcı verilerini temizlemeden ya da makine değiştirmeden önce önemli olanları dışa aktarın — <code>.json</code> tam doğruluğu korur, <code>.dxf</code> uyumluluğu en üst düzeye çıkarır.',
          'Uygulamayı tamamen sıfırlamak için <code>wipestorage</code> yazın ve <code>YES</code> ile onaylayın — yerelde kayıtlı tüm çizimler kalıcı olarak silinir.',
        ],
        links: [
          { label: 'Dosyalar paneli', slug: 'commands/files' },
          { label: 'Dışa aktar', slug: 'commands/export' },
          { label: 'Depolamayı temizle', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  zh: {
    title: 'KulmanLab 使用指南 — 常见 CAD 任务分步教程',
    desc: 'KulmanLab CAD 分步指南：打开 DXF 文件、精确尺寸绘图、使用图层、标注尺寸、准备激光切割文件、打印以及备份图纸。',
    heading: '使用指南',
    subtitle: 'KulmanLab CAD 最常见任务的分步指南。',
    docsLabel: '文档：',
    outroTitle: '在找某个具体命令？',
    outroHtml: '<a href="/zh/docs/">命令参考</a>收录了全部 50 多个命令的文档，<a href="/zh/faq/">常见问题</a>涵盖存储、格式与兼容性。',
    guides: [
      {
        title: '打开 DXF 文件',
        intro: 'KulmanLab 读取 DXF——任何 CAD 工具都能导出的交换格式。文件直接从你的磁盘打开，永远不会离开你的设备。',
        steps: [
          '打开 <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>。',
          '点击文件面板中的 <strong>Import</strong> 按钮，或在终端输入 <code>import</code>。',
          '从电脑中选择一个 <code>.dxf</code>（或 KulmanLab 的 <code>.json</code>）文件。',
          '图纸加载到画布上，并自动保存到浏览器存储——下次打开时仍然在。',
        ],
        links: [
          { label: 'Import 命令', slug: 'commands/import' },
          { label: '文件面板', slug: 'commands/files' },
        ],
      },
      {
        title: '按精确尺寸绘图',
        intro: '所有绘图命令都支持键盘输入，长度和坐标从不需要凭感觉估。',
        steps: [
          '启动命令：点击 <strong>Line</strong>，或输入 <code>line</code> 并按 <strong>Enter</strong>。',
          '以 <code>x,y</code> 形式输入起点（例如 <code>0,0</code>），按 <strong>Enter</strong>。',
          '将光标移向目标方向，输入长度（例如 <code>250</code>）并按 <strong>Enter</strong>——线段将精确按该长度绘制。',
          '在控制栏开启角度锁定，可将线段保持在 30°、45°、90° 等精确角度。',
        ],
        links: [
          { label: 'Line 命令', slug: 'commands/line' },
          { label: '网格与捕捉', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: '用图层组织图纸',
        intro: '图层将辅助线、几何图形和标注分开管理——并在 DXF 导出时完整保留。',
        steps: [
          '在工具栏打开<strong>图层</strong>面板，为每类内容建一个图层（轮廓、尺寸、注释等）。',
          '为每个图层设置颜色、线型和线宽，让对象自动继承合理的默认值。',
          '绘图前用 <code>layer-make-current</code> 将某图层设为当前图层，或用 <code>layer-match</code> 移动选中对象。',
          '用 <code>layer-isolate</code> 隐藏当前图层以外的一切，用 <code>layer-unfreeze-all</code> 恢复全部显示。',
        ],
        links: [
          { label: '隔离图层', slug: 'commands/layer-isolate' },
          { label: '线型', slug: 'interface/linetype' },
          { label: '线宽', slug: 'interface/lineweight' },
        ],
      },
      {
        title: '添加尺寸标注',
        intro: '尺寸标注是真正的 DXF DIMENSION 实体，可无损地传递到任何其他 CAD 工具。',
        steps: [
          '在终端输入 <code>dim-linear</code>（水平/垂直）或 <code>dim-aligned</code>（平行于被测边）。',
          '选择要测量的两个点，第三次点击放置尺寸线。',
          '用 <code>dim-continue</code> 连续标注——每个新尺寸从上一个结束处开始。',
          '圆和圆弧使用 <code>dim-radius</code>、<code>dim-diameter</code> 或 <code>dim-angular</code>。',
          '双击任意尺寸标签即可编辑其文字。',
        ],
        links: [
          { label: '线性标注', slug: 'commands/dim-linear' },
          { label: '连续标注', slug: 'commands/dim-continue' },
          { label: '文本编辑器', slug: 'interface/text-editor' },
        ],
      },
      {
        title: '测量距离、角度和面积',
        intro: '不创建任何几何图形的快速测量——结果会一直显示在屏幕上，直到按 Escape。',
        steps: [
          '输入 <code>distance</code>，选两个点读取长度。',
          '输入 <code>angle</code>，选两条线（或三个点）读取夹角。',
          '输入 <code>area</code>，点击三个或更多点后按 <strong>Enter</strong>——显示围合面积和周长。',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: '为激光切割或 CNC 准备文件',
        intro: 'KulmanLab 最初就是为这个工作流而生：检查文件、清理干净、发给机器。',
        steps: [
          '导入 DXF 并整体查看——<code>fit</code> 将整个图纸缩放到视野内。',
          '删除机器不应切割的内容：辅助线、注释、尺寸标注。<code>layer-isolate</code> 有助于找出散落元素。',
          '整理几何图形：用 <code>trim</code> 修剪出头的线端，闭合缺口，用 <code>distance</code> 核对尺寸。',
          '导出为 DXF 并载入机器软件。切割路径与绘制的完全一致——KulmanLab 输出纯净的 AC1032 DXF。',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: '适配视图', slug: 'commands/fit' },
          { label: '导出', slug: 'commands/export' },
        ],
      },
      {
        title: '用视口搭建图纸布局',
        intro: '布局是图纸空间的页面——在一页上组合一个或多个按比例的模型视图，随时可打印。',
        steps: [
          '点击屏幕底部的<strong>布局标签页</strong>，从模型空间切换到图纸空间。标签栏的 <strong>+</strong> 按钮可新建布局。',
          '<strong>右键点击布局标签页</strong>可重命名、删除，或打开 <strong>Page Manager</strong>——在那里设置纸张规格（A4、A3、Letter 等）、方向和每毫米绘图单位比例。',
          '输入 <code>viewport-rectangle</code>，点击两个对角放置一个视口——在纸面上显示模型的窗口。',
          '点击视口以选中它：拖动边或角调整大小，拖动中心夹点移动位置，并在控制栏的比例选择器中设定精确比例（如 <code>1:50</code>）。',
          '在视口内滚动可缩放模型视图，按住中键拖动可平移。调整好后<strong>右键点击视口</strong>选择 <strong>Lock</strong>，防止误改。',
          '同一视图要用两次？<code>viewport-copy</code> 可复制视口，比例和模型视图原样保留。',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: '打印或保存为 PDF / PNG',
        intro: '打印管理器将图纸渲染为可直接上纸的图像，带实时预览。',
        steps: [
          '输入 <code>print</code>，或点击文件面板中的打印按钮。',
          '选择输出格式：文档用 PDF，图像用 PNG/JPEG/WebP。',
          '可选：裁剪到图纸的某个区域，并开启单色输出以获得干净的线条图。',
          '点击 <strong>Print</strong>——文件将下载到你的电脑。',
        ],
        links: [
          { label: 'Print 命令', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: '备份和管理已保存的图纸',
        intro: '图纸保存在你的浏览器存储中——私密、离线，完全由你掌控。',
        steps: [
          '打开<strong>文件</strong>面板查看此浏览器中保存的所有图纸；可随意恢复或删除。',
          '清除浏览器数据或换电脑前，先导出重要图纸——<code>.json</code> 保留全部细节，<code>.dxf</code> 兼容性最强。',
          '要彻底重置应用，输入 <code>wipestorage</code> 并输入 <code>YES</code> 确认——所有本地保存的图纸将被永久删除。',
        ],
        links: [
          { label: '文件面板', slug: 'commands/files' },
          { label: '导出', slug: 'commands/export' },
          { label: '清空存储', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  hi: {
    title: 'KulmanLab कैसे उपयोग करें — सामान्य CAD कार्यों की गाइड',
    desc: 'KulmanLab CAD की चरण-दर-चरण गाइड: DXF फ़ाइलें खोलना, सटीक मापों से चित्र बनाना, लेयर, डाइमेंशन, लेज़र कटिंग फ़ाइलें तैयार करना, प्रिंट करना और ड्रॉइंग का बैकअप।',
    heading: 'गाइड',
    subtitle: 'KulmanLab CAD के सबसे सामान्य कार्यों की चरण-दर-चरण गाइड।',
    docsLabel: 'दस्तावेज़:',
    outroTitle: 'कोई खास कमांड खोज रहे हैं?',
    outroHtml: '<a href="/hi/docs/">कमांड संदर्भ</a> में सभी 50+ कमांड दर्ज हैं, और <a href="/hi/faq/">सामान्य प्रश्न</a> स्टोरेज, फ़ॉर्मैट और संगतता कवर करते हैं।',
    guides: [
      {
        title: 'DXF फ़ाइल खोलें',
        intro: 'KulmanLab DXF पढ़ता है — वह विनिमय फ़ॉर्मैट जो हर CAD टूल बना सकता है। फ़ाइलें सीधे आपकी डिस्क से खुलती हैं और कभी आपके डिवाइस से बाहर नहीं जातीं।',
        steps: [
          '<a href="https://app.kulmanlab.com">app.kulmanlab.com</a> खोलें।',
          'फ़ाइल पैनल में <strong>Import</strong> बटन क्लिक करें, या टर्मिनल में <code>import</code> टाइप करें।',
          'अपने कंप्यूटर से एक <code>.dxf</code> (या KulmanLab की <code>.json</code>) फ़ाइल चुनें।',
          'ड्रॉइंग कैनवास पर लोड होती है और ब्राउज़र स्टोरेज में स्वतः सहेज ली जाती है — अगली बार भी वहीं मिलेगी।',
        ],
        links: [
          { label: 'Import कमांड', slug: 'commands/import' },
          { label: 'फ़ाइल पैनल', slug: 'commands/files' },
        ],
      },
      {
        title: 'सटीक मापों से चित्र बनाएं',
        intro: 'हर ड्रॉइंग कमांड कीबोर्ड इनपुट स्वीकार करती है — लंबाई या निर्देशांक कभी अंदाज़े से नहीं रखने पड़ते।',
        steps: [
          'कोई कमांड शुरू करें — <strong>Line</strong> क्लिक करें या <code>line</code> टाइप कर <strong>Enter</strong> दबाएँ।',
          'शुरुआती बिंदु <code>x,y</code> रूप में टाइप करें (जैसे <code>0,0</code>) और <strong>Enter</strong> दबाएँ।',
          'कर्सर को इच्छित दिशा में ले जाएँ, फिर लंबाई टाइप करें (जैसे <code>250</code>) और <strong>Enter</strong> दबाएँ — खंड ठीक उतना ही लंबा बनेगा।',
          'खंडों को 30°, 45° या 90° जैसे सटीक कोणों पर रखने के लिए कंट्रोल बार में एंगल लॉक चालू करें।',
        ],
        links: [
          { label: 'Line कमांड', slug: 'commands/line' },
          { label: 'ग्रिड और स्नैप', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'लेयरों से ड्रॉइंग व्यवस्थित करें',
        intro: 'लेयरें निर्माण रेखाओं, ज्यामिति और एनोटेशन को अलग रखती हैं — और DXF निर्यात में सुरक्षित रहती हैं।',
        steps: [
          'टूलबार में <strong>लेयर</strong> पैनल खोलें और हर तरह की सामग्री के लिए एक लेयर बनाएं (आउटलाइन, डाइमेंशन, नोट्स…)।',
          'प्रत्येक लेयर के लिए रंग, लाइनटाइप और लाइनवेट सेट करें ताकि इकाइयाँ समझदार डिफ़ॉल्ट अपनाएँ।',
          'चित्र बनाने से पहले <code>layer-make-current</code> से लेयर को वर्तमान बनाएं, या चुनी इकाइयाँ <code>layer-match</code> से स्थानांतरित करें।',
          '<code>layer-isolate</code> से कार्यरत लेयर के अलावा सब छिपाएँ, और <code>layer-unfreeze-all</code> से सब वापस लाएँ।',
        ],
        links: [
          { label: 'लेयर आइसोलेट', slug: 'commands/layer-isolate' },
          { label: 'लाइनटाइप', slug: 'interface/linetype' },
          { label: 'लाइनवेट', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'डाइमेंशन जोड़ें',
        intro: 'डाइमेंशन असली DXF DIMENSION इकाइयाँ हैं — किसी भी अन्य CAD टूल में बिना नुकसान जाती हैं।',
        steps: [
          'टर्मिनल में <code>dim-linear</code> (क्षैतिज/ऊर्ध्वाधर) या <code>dim-aligned</code> (मापी गई कोर के समानांतर) टाइप करें।',
          'मापने के दो बिंदु चुनें, फिर तीसरे क्लिक से डाइमेंशन रेखा रखें।',
          '<code>dim-continue</code> से मापों की शृंखला बनाएं — हर नया डाइमेंशन वहीं शुरू होता है जहाँ पिछला खत्म हुआ।',
          'वृत्तों और चापों के लिए <code>dim-radius</code>, <code>dim-diameter</code> या <code>dim-angular</code> उपयोग करें।',
          'किसी भी डाइमेंशन लेबल पर डबल-क्लिक कर उसका टेक्स्ट संपादित करें।',
        ],
        links: [
          { label: 'रैखिक डाइमेंशन', slug: 'commands/dim-linear' },
          { label: 'निरंतर डाइमेंशन', slug: 'commands/dim-continue' },
          { label: 'टेक्स्ट संपादक', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'दूरी, कोण और क्षेत्रफल मापें',
        intro: 'बिना कोई ज्यामिति बनाए त्वरित माप — परिणाम Escape दबाने तक स्क्रीन पर बने रहते हैं।',
        steps: [
          '<code>distance</code> टाइप करें और लंबाई जानने के लिए दो बिंदु चुनें।',
          '<code>angle</code> टाइप करें और बीच का कोण जानने के लिए दो रेखाएँ (या तीन बिंदु) चुनें।',
          '<code>area</code> टाइप करें, तीन या अधिक बिंदु क्लिक करें और <strong>Enter</strong> दबाएँ — घिरा क्षेत्रफल और परिधि दिखेंगे।',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'लेज़र कटिंग या CNC के लिए फ़ाइल तैयार करें',
        intro: 'वही वर्कफ़्लो जिसके लिए KulmanLab मूलतः बना था: फ़ाइल जाँचें, साफ़ करें, मशीन को भेजें।',
        steps: [
          'DXF आयात करें और देखें — <code>fit</code> पूरी ड्रॉइंग को दृश्य में समेट देता है।',
          'जो मशीन को नहीं काटना है वह हटाएँ: निर्माण रेखाएँ, नोट्स, डाइमेंशन। <code>layer-isolate</code> बिखरे तत्व ढूँढने में मदद करता है।',
          'ज्यामिति सँवारें: <code>trim</code> से बाहर निकले सिरे काटें, अंतराल बंद करें और <code>distance</code> से माप जाँचें।',
          'DXF रूप में निर्यात करें और मशीन सॉफ़्टवेयर में लोड करें। कट पथ बिल्कुल वैसे ही रहते हैं — KulmanLab शुद्ध AC1032 DXF लिखता है।',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'दृश्य फ़िट करें', slug: 'commands/fit' },
          { label: 'निर्यात', slug: 'commands/export' },
        ],
      },
      {
        title: 'व्यूपोर्ट के साथ पेपर लेआउट बनाएं',
        intro: 'लेआउट कागज़ी स्पेस की शीट हैं — मॉडल के एक या कई स्केल किए दृश्य एक पृष्ठ पर सजाएँ, प्रिंट के लिए तैयार।',
        steps: [
          'मॉडल स्पेस से पेपर स्पेस में जाने के लिए स्क्रीन के नीचे <strong>लेआउट टैब</strong> क्लिक करें। टैब बार का <strong>+</strong> बटन नया लेआउट जोड़ता है।',
          'नाम बदलने, हटाने या <strong>Page Manager</strong> खोलने के लिए <strong>लेआउट टैब पर राइट-क्लिक करें</strong> — वहाँ काग़ज़ का आकार (A4, A3, Letter…), दिशा और प्रति मिमी ड्रॉइंग इकाई का स्केल सेट होता है।',
          '<code>viewport-rectangle</code> टाइप करें और दो विपरीत कोने क्लिक कर व्यूपोर्ट रखें — कागज़ पर आपका मॉडल दिखाने वाली खिड़की।',
          'चुनने के लिए व्यूपोर्ट क्लिक करें: आकार बदलने के लिए किनारे/कोने खींचें, हिलाने के लिए बीच का ग्रिप, और कंट्रोल बार के स्केल चयनकर्ता से सटीक स्केल (जैसे <code>1:50</code>) चुनें।',
          'मॉडल दृश्य ज़ूम करने के लिए व्यूपोर्ट के अंदर स्क्रॉल करें, पैन के लिए मिडल-ड्रैग करें। सब ठीक लगे तो <strong>व्यूपोर्ट पर राइट-क्लिक</strong> कर <strong>Lock</strong> चुनें — अनचाहे बदलावों से सुरक्षा।',
          'वही दृश्य दो बार चाहिए? <code>viewport-copy</code> स्केल और मॉडल दृश्य सहित व्यूपोर्ट की प्रति बनाता है।',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'प्रिंट करें या PDF / PNG रूप में सहेजें',
        intro: 'प्रिंट मैनेजर लाइव पूर्वावलोकन के साथ आपकी ड्रॉइंग को कागज़-तैयार छवि में बदलता है।',
        steps: [
          '<code>print</code> टाइप करें या फ़ाइल पैनल में प्रिंट बटन क्लिक करें।',
          'आउटपुट फ़ॉर्मैट चुनें: दस्तावेज़ों के लिए PDF, छवियों के लिए PNG/JPEG/WebP।',
          'वैकल्पिक रूप से ड्रॉइंग के किसी क्षेत्र तक क्रॉप करें और साफ़ रेखा प्रिंट के लिए मोनोक्रोम आउटपुट चालू करें।',
          '<strong>Print</strong> क्लिक करें — फ़ाइल आपके कंप्यूटर में डाउनलोड हो जाती है।',
        ],
        links: [
          { label: 'Print कमांड', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'सहेजी गई ड्रॉइंग का बैकअप और प्रबंधन',
        intro: 'ड्रॉइंग आपके ब्राउज़र स्टोरेज में रहती हैं — निजी, ऑफ़लाइन और पूरी तरह आपके नियंत्रण में।',
        steps: [
          'इस ब्राउज़र में सहेजी हर ड्रॉइंग देखने के लिए <strong>फ़ाइलें</strong> पैनल खोलें; किसी को भी बहाल करें या हटाएँ।',
          'ब्राउज़र डेटा साफ़ करने या मशीन बदलने से पहले महत्वपूर्ण चीज़ें निर्यात करें — <code>.json</code> पूरी सटीकता रखता है, <code>.dxf</code> अधिकतम संगत है।',
          'ऐप को पूरी तरह रीसेट करने के लिए <code>wipestorage</code> टाइप करें और <code>YES</code> से पुष्टि करें — स्थानीय रूप से सहेजी सभी ड्रॉइंग स्थायी रूप से मिट जाती हैं।',
        ],
        links: [
          { label: 'फ़ाइल पैनल', slug: 'commands/files' },
          { label: 'निर्यात', slug: 'commands/export' },
          { label: 'स्टोरेज मिटाएँ', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  ar: {
    title: 'كيفية استخدام KulmanLab — أدلة لمهام CAD الشائعة',
    desc: 'أدلة خطوة بخطوة لـ KulmanLab CAD: فتح ملفات DXF، والرسم بمقاسات دقيقة، واستخدام الطبقات، وإضافة الأبعاد، وتحضير ملفات القطع بالليزر، والطباعة، والنسخ الاحتياطي للرسومات.',
    heading: 'أدلة الاستخدام',
    subtitle: 'أدلة خطوة بخطوة لأكثر المهام شيوعًا في KulmanLab CAD.',
    docsLabel: 'الوثائق:',
    outroTitle: 'تبحث عن أمر بعينه؟',
    outroHtml: 'يوثّق <a href="/ar/docs/">مرجع الأوامر</a> جميع الأوامر التي تتجاوز 50 أمرًا، وتغطي <a href="/ar/faq/">الأسئلة الشائعة</a> التخزين والصيغ والتوافق.',
    guides: [
      {
        title: 'فتح ملف DXF',
        intro: 'يقرأ KulmanLab صيغة DXF — صيغة التبادل التي يمكن لأي أداة CAD إنتاجها. تُفتح الملفات مباشرة من قرصك ولا تغادر جهازك أبدًا.',
        steps: [
          'افتح <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'انقر زر <strong>Import</strong> في لوحة الملفات، أو اكتب <code>import</code> في الطرفية.',
          'اختر ملف <code>.dxf</code> (أو <code>.json</code> الخاص بـ KulmanLab) من حاسوبك.',
          'يُحمَّل الرسم على اللوحة ويُحفظ تلقائيًا في تخزين المتصفح — ستجده في المرة القادمة.',
        ],
        links: [
          { label: 'أمر Import', slug: 'commands/import' },
          { label: 'لوحة الملفات', slug: 'commands/files' },
        ],
      },
      {
        title: 'الرسم بمقاسات دقيقة',
        intro: 'كل أوامر الرسم تقبل الإدخال من لوحة المفاتيح — لن تضطر أبدًا لتقدير طول أو إحداثيات بالعين.',
        steps: [
          'ابدأ أمرًا: انقر <strong>Line</strong> أو اكتب <code>line</code> واضغط <strong>Enter</strong>.',
          'اكتب نقطة البداية بصيغة <code>x,y</code> (مثلًا <code>0,0</code>) واضغط <strong>Enter</strong>.',
          'حرّك المؤشر في الاتجاه المطلوب، ثم اكتب طولًا (مثلًا <code>250</code>) واضغط <strong>Enter</strong> — يُرسم المقطع بهذا الطول تمامًا.',
          'فعّل قفل الزاوية في شريط التحكم لإبقاء المقاطع على زوايا دقيقة مثل 30° أو 45° أو 90°.',
        ],
        links: [
          { label: 'أمر Line', slug: 'commands/line' },
          { label: 'الشبكة والالتقاط', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'تنظيم الرسم بالطبقات',
        intro: 'تُبقي الطبقات خطوط الإنشاء والهندسة والتعليقات منفصلة — وتبقى سليمة عند التصدير إلى DXF.',
        steps: [
          'افتح لوحة <strong>الطبقات</strong> في شريط الأدوات وأنشئ طبقة لكل نوع محتوى (الحدود، الأبعاد، الملاحظات…).',
          'حدّد اللون ونوع الخط وسماكته لكل طبقة كي ترث العناصر إعدادات افتراضية معقولة.',
          'اجعل طبقةً هي الحالية بالأمر <code>layer-make-current</code> قبل الرسم، أو انقل العناصر المحددة بالأمر <code>layer-match</code>.',
          'استخدم <code>layer-isolate</code> لإخفاء كل شيء عدا الطبقة التي تعمل عليها، و<code>layer-unfreeze-all</code> لإعادة كل شيء.',
        ],
        links: [
          { label: 'عزل الطبقة', slug: 'commands/layer-isolate' },
          { label: 'نوع الخط', slug: 'interface/linetype' },
          { label: 'سماكة الخط', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'إضافة الأبعاد',
        intro: 'الأبعاد عناصر DXF DIMENSION حقيقية، فتنتقل دون فقد إلى أي أداة CAD أخرى.',
        steps: [
          'اكتب في الطرفية <code>dim-linear</code> (أفقي/عمودي) أو <code>dim-aligned</code> (موازٍ للحافة المقاسة).',
          'اختر النقطتين المراد قياسهما، ثم ضع خط البُعد بنقرة ثالثة.',
          'اربط سلسلة قياسات بالأمر <code>dim-continue</code> — يبدأ كل بُعد جديد حيث انتهى السابق.',
          'للدوائر والأقواس استخدم <code>dim-radius</code> أو <code>dim-diameter</code> أو <code>dim-angular</code>.',
          'انقر نقرًا مزدوجًا على أي تسمية بُعد لتحرير نصها.',
        ],
        links: [
          { label: 'بُعد خطي', slug: 'commands/dim-linear' },
          { label: 'متابعة الأبعاد', slug: 'commands/dim-continue' },
          { label: 'محرر النص', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'قياس المسافة والزاوية والمساحة',
        intro: 'قياسات سريعة دون إنشاء أي هندسة — تبقى النتائج على الشاشة حتى تضغط Escape.',
        steps: [
          'اكتب <code>distance</code> واختر نقطتين لقراءة الطول.',
          'اكتب <code>angle</code> واختر خطين (أو ثلاث نقاط) لقراءة الزاوية بينهما.',
          'اكتب <code>area</code> وانقر ثلاث نقاط أو أكثر ثم اضغط <strong>Enter</strong> — تظهر المساحة المحاطة والمحيط.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'تحضير ملف للقطع بالليزر أو CNC',
        intro: 'سير العمل الذي بُني KulmanLab لأجله أصلًا: افحص الملف، ونظّفه، وأرسله إلى الماكينة.',
        steps: [
          'استورد ملف DXF وتفقده — الأمر <code>fit</code> يُظهر الرسم كاملًا في الشاشة.',
          'احذف كل ما لا يجب أن تقطعه الماكينة: خطوط الإنشاء والملاحظات والأبعاد. يساعدك <code>layer-isolate</code> في العثور على العناصر الشاردة.',
          'رتّب الهندسة: شذّب الأطراف الزائدة بـ <code>trim</code>، وأغلق الفجوات، وتحقق من المقاسات بـ <code>distance</code>.',
          'صدّر بصيغة DXF وحمّله في برنامج الماكينة. تبقى مسارات القطع تمامًا كما رُسمت — يكتب KulmanLab صيغة AC1032 DXF نقية.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'ملاءمة العرض', slug: 'commands/fit' },
          { label: 'تصدير', slug: 'commands/export' },
        ],
      },
      {
        title: 'إعداد مخطط ورقي بمنافذ عرض',
        intro: 'المخططات صفحات في فضاء الورق — ركّب واحدًا أو أكثر من العروض المقاسة لنموذجك على صفحة جاهزة للطباعة.',
        steps: [
          'انقر <strong>تبويب مخطط</strong> أسفل الشاشة للانتقال من فضاء النموذج إلى فضاء الورق. زر <strong>+</strong> في شريط التبويبات يضيف مخططًا جديدًا.',
          '<strong>انقر بزر الفأرة الأيمن على تبويب المخطط</strong> لإعادة تسميته أو حذفه أو فتح <strong>Page Manager</strong> — هناك تضبط مقاس الورق (A4، A3، Letter…) والاتجاه ومقياس وحدات الرسم لكل مم.',
          'اكتب <code>viewport-rectangle</code> وانقر زاويتين متقابلتين لوضع منفذ عرض — نافذة تعرض نموذجك على الورقة.',
          'انقر منفذ العرض لتحديده: اسحب حوافه أو زواياه لتغيير حجمه، واسحب المقبض الأوسط لنقله، واختر مقياسًا دقيقًا (مثل <code>1:50</code>) من محدد المقياس في شريط التحكم.',
          'مرر عجلة الفأرة داخل منفذ العرض لتكبير عرض النموذج، واسحب بالزر الأوسط لتحريكه. حين يستقر كل شيء، <strong>انقر بزر الفأرة الأيمن على منفذ العرض</strong> واختر <strong>Lock</strong> لحمايته من التغييرات العرضية.',
          'تحتاج العرض نفسه مرتين؟ <code>viewport-copy</code> يستنسخ منفذ العرض محافظًا على مقياسه وعرض النموذج.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'الطباعة أو الحفظ بصيغة PDF / PNG',
        intro: 'يحوّل مدير الطباعة رسمك إلى صورة جاهزة للورق مع معاينة حية.',
        steps: [
          'اكتب <code>print</code> أو انقر زر الطباعة في لوحة الملفات.',
          'اختر صيغة الإخراج: PDF للمستندات، وPNG/JPEG/WebP للصور.',
          'اختياريًا: اقتص منطقة من الرسم وفعّل الإخراج أحادي اللون لطباعة خطوط نظيفة.',
          'انقر <strong>Print</strong> — يُنزَّل الملف إلى حاسوبك.',
        ],
        links: [
          { label: 'أمر Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'النسخ الاحتياطي للرسومات المحفوظة وإدارتها',
        intro: 'تعيش رسوماتك في تخزين متصفحك — خاصة، دون اتصال، وتحت تصرفك بالكامل.',
        steps: [
          'افتح لوحة <strong>الملفات</strong> لرؤية كل رسم محفوظ في هذا المتصفح؛ استعد أو احذف أيًا منها.',
          'قبل مسح بيانات المتصفح أو تغيير الجهاز، صدّر المهم — <code>.json</code> يحفظ كامل التفاصيل، و<code>.dxf</code> يمنح أقصى توافق.',
          'لإعادة ضبط التطبيق كليًا، اكتب <code>wipestorage</code> وأكّد بكتابة <code>YES</code> — تُحذف كل الرسومات المحفوظة محليًا نهائيًا.',
        ],
        links: [
          { label: 'لوحة الملفات', slug: 'commands/files' },
          { label: 'تصدير', slug: 'commands/export' },
          { label: 'مسح التخزين', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  id: {
    title: 'Cara Menggunakan KulmanLab — Panduan Tugas CAD Umum',
    desc: 'Panduan langkah demi langkah untuk KulmanLab CAD: membuka file DXF, menggambar dengan ukuran presisi, memakai layer, menambah dimensi, menyiapkan file potong laser, mencetak, dan mencadangkan gambar.',
    heading: 'Panduan',
    subtitle: 'Panduan langkah demi langkah untuk tugas paling umum di KulmanLab CAD.',
    docsLabel: 'Dokumen:',
    outroTitle: 'Mencari perintah tertentu?',
    outroHtml: '<a href="/id/docs/">Referensi perintah</a> mendokumentasikan 50+ perintah, dan <a href="/id/faq/">FAQ</a> membahas penyimpanan, format, dan kompatibilitas.',
    guides: [
      {
        title: 'Membuka file DXF',
        intro: 'KulmanLab membaca DXF — format pertukaran yang bisa dihasilkan semua alat CAD. File terbuka langsung dari disk Anda dan tidak pernah meninggalkan perangkat.',
        steps: [
          'Buka <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Klik tombol <strong>Import</strong> di panel File, atau ketik <code>import</code> di terminal.',
          'Pilih file <code>.dxf</code> (atau <code>.json</code> KulmanLab) dari komputer Anda.',
          'Gambar dimuat ke kanvas dan otomatis tersimpan di penyimpanan browser — masih ada saat Anda kembali.',
        ],
        links: [
          { label: 'Perintah Import', slug: 'commands/import' },
          { label: 'Panel file', slug: 'commands/files' },
        ],
      },
      {
        title: 'Menggambar dengan ukuran presisi',
        intro: 'Semua perintah gambar menerima input keyboard — panjang dan koordinat tidak pernah dikira-kira.',
        steps: [
          'Mulai perintah: klik <strong>Line</strong> atau ketik <code>line</code> lalu tekan <strong>Enter</strong>.',
          'Ketik titik awal dalam format <code>x,y</code> (misalnya <code>0,0</code>) lalu tekan <strong>Enter</strong>.',
          'Gerakkan kursor ke arah yang diinginkan, ketik panjang (misalnya <code>250</code>) lalu tekan <strong>Enter</strong> — segmen digambar persis sepanjang itu.',
          'Aktifkan kunci sudut di bilah kontrol agar segmen tetap pada sudut presisi seperti 30°, 45°, atau 90°.',
        ],
        links: [
          { label: 'Perintah Line', slug: 'commands/line' },
          { label: 'Grid & snap', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Merapikan gambar dengan layer',
        intro: 'Layer memisahkan garis bantu, geometri, dan anotasi — dan tetap utuh saat ekspor DXF.',
        steps: [
          'Buka panel <strong>Layer</strong> di toolbar dan buat layer untuk tiap jenis konten (garis luar, dimensi, catatan…).',
          'Atur warna, jenis garis, dan tebal garis per layer agar entitas mewarisi default yang masuk akal.',
          'Jadikan layer aktif dengan <code>layer-make-current</code> sebelum menggambar, atau pindahkan entitas terpilih dengan <code>layer-match</code>.',
          'Gunakan <code>layer-isolate</code> untuk menyembunyikan semuanya kecuali layer yang sedang dikerjakan, dan <code>layer-unfreeze-all</code> untuk mengembalikannya.',
        ],
        links: [
          { label: 'Isolasi layer', slug: 'commands/layer-isolate' },
          { label: 'Jenis garis', slug: 'interface/linetype' },
          { label: 'Tebal garis', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Menambahkan dimensi',
        intro: 'Dimensi adalah entitas DXF DIMENSION asli — berpindah tanpa cacat ke alat CAD lain mana pun.',
        steps: [
          'Ketik <code>dim-linear</code> (horizontal/vertikal) atau <code>dim-aligned</code> (sejajar tepi yang diukur) di terminal.',
          'Pilih dua titik yang ingin diukur, lalu tempatkan garis dimensi dengan klik ketiga.',
          'Rangkai deretan pengukuran dengan <code>dim-continue</code> — setiap dimensi baru mulai di tempat yang sebelumnya berakhir.',
          'Untuk lingkaran dan busur, gunakan <code>dim-radius</code>, <code>dim-diameter</code>, atau <code>dim-angular</code>.',
          'Klik dua kali label dimensi mana pun untuk mengedit teksnya.',
        ],
        links: [
          { label: 'Dimensi linear', slug: 'commands/dim-linear' },
          { label: 'Dimensi lanjutan', slug: 'commands/dim-continue' },
          { label: 'Editor teks', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Mengukur jarak, sudut, dan luas',
        intro: 'Pengukuran cepat tanpa membuat geometri — hasil tetap di layar sampai Anda menekan Escape.',
        steps: [
          'Ketik <code>distance</code> dan pilih dua titik untuk membaca panjang.',
          'Ketik <code>angle</code> dan pilih dua garis (atau tiga titik) untuk membaca sudut di antaranya.',
          'Ketik <code>area</code>, klik tiga titik atau lebih, lalu tekan <strong>Enter</strong> — luas yang dikelilingi dan kelilingnya ditampilkan.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Menyiapkan file untuk potong laser atau CNC',
        intro: 'Alur kerja yang menjadi alasan KulmanLab dibuat: periksa file, bersihkan, kirim ke mesin.',
        steps: [
          'Impor DXF dan periksa — <code>fit</code> memuat seluruh gambar ke layar.',
          'Hapus semua yang tidak boleh dipotong mesin: garis bantu, catatan, dimensi. <code>layer-isolate</code> membantu menemukan elemen tercecer.',
          'Rapikan geometri: pangkas ujung berlebih dengan <code>trim</code>, tutup celah, dan cek ukuran dengan <code>distance</code>.',
          'Ekspor sebagai DXF dan muat ke perangkat lunak mesin Anda. Jalur potong tetap persis seperti digambar — KulmanLab menulis DXF AC1032 murni.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Muat tampilan', slug: 'commands/fit' },
          { label: 'Ekspor', slug: 'commands/export' },
        ],
      },
      {
        title: 'Menyusun layout kertas dengan viewport',
        intro: 'Layout adalah lembar ruang kertas — susun satu atau beberapa tampilan berskala dari model Anda di satu halaman, siap cetak.',
        steps: [
          'Klik <strong>tab layout</strong> di bagian bawah layar untuk berpindah dari ruang model ke ruang kertas. Tombol <strong>+</strong> di bilah tab menambah layout baru.',
          '<strong>Klik kanan tab layout</strong> untuk mengganti nama, menghapus, atau membuka <strong>Page Manager</strong> — di sana Anda mengatur format kertas (A4, A3, Letter…), orientasi, dan skala satuan gambar per mm.',
          'Ketik <code>viewport-rectangle</code> dan klik dua sudut berlawanan untuk menempatkan viewport — jendela yang menampilkan model Anda di atas kertas.',
          'Klik viewport untuk memilihnya: seret tepi atau sudutnya untuk mengubah ukuran, seret grip tengah untuk memindahkan, dan pilih skala presisi (mis. <code>1:50</code>) dari pemilih skala di bilah kontrol.',
          'Gulir di dalam viewport untuk memperbesar tampilan model, seret dengan tombol tengah untuk menggesernya. Jika sudah pas, <strong>klik kanan viewport</strong> dan pilih <strong>Lock</strong> agar terlindung dari perubahan tak sengaja.',
          'Butuh tampilan yang sama dua kali? <code>viewport-copy</code> menggandakan viewport dengan skala dan tampilan model tetap terjaga.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Mencetak atau menyimpan sebagai PDF / PNG',
        intro: 'Pengelola cetak mengubah gambar Anda menjadi citra siap cetak, dengan pratinjau langsung.',
        steps: [
          'Ketik <code>print</code> atau klik tombol Cetak di panel File.',
          'Pilih format keluaran: PDF untuk dokumen, PNG/JPEG/WebP untuk gambar.',
          'Opsional: pangkas ke area tertentu dan aktifkan keluaran monokrom untuk cetakan garis yang bersih.',
          'Klik <strong>Print</strong> — file terunduh ke komputer Anda.',
        ],
        links: [
          { label: 'Perintah Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Mencadangkan dan mengelola gambar tersimpan',
        intro: 'Gambar hidup di penyimpanan browser Anda — privat, offline, dan sepenuhnya dalam kendali Anda.',
        steps: [
          'Buka panel <strong>File</strong> untuk melihat semua gambar yang tersimpan di browser ini; pulihkan atau hapus yang mana pun.',
          'Sebelum membersihkan data browser atau berganti komputer, ekspor yang penting — <code>.json</code> menjaga detail penuh, <code>.dxf</code> memaksimalkan kompatibilitas.',
          'Untuk mereset aplikasi sepenuhnya, ketik <code>wipestorage</code> dan konfirmasi dengan <code>YES</code> — semua gambar yang tersimpan lokal dihapus permanen.',
        ],
        links: [
          { label: 'Panel file', slug: 'commands/files' },
          { label: 'Ekspor', slug: 'commands/export' },
          { label: 'Hapus penyimpanan', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  ja: {
    title: 'KulmanLab の使い方 — よくある CAD 作業のガイド',
    desc: 'KulmanLab CAD のステップバイステップガイド：DXF ファイルを開く、正確な寸法で作図、レイヤー活用、寸法記入、レーザー加工用ファイルの準備、印刷、図面のバックアップ。',
    heading: '使い方',
    subtitle: 'KulmanLab CAD でよくある作業のステップバイステップガイド。',
    docsLabel: 'ドキュメント：',
    outroTitle: '特定のコマンドをお探しですか？',
    outroHtml: '<a href="/ja/docs/">コマンドリファレンス</a>には 50 以上の全コマンドが掲載され、<a href="/ja/faq/">よくある質問</a>では保存・形式・互換性を扱っています。',
    guides: [
      {
        title: 'DXF ファイルを開く',
        intro: 'KulmanLab はどの CAD ツールでも出力できる交換形式 DXF を読み込みます。ファイルはディスクから直接開かれ、デバイスの外に出ることはありません。',
        steps: [
          '<a href="https://app.kulmanlab.com">app.kulmanlab.com</a> を開きます。',
          'ファイルパネルの <strong>Import</strong> ボタンをクリックするか、ターミナルに <code>import</code> と入力します。',
          'コンピューターから <code>.dxf</code>（または KulmanLab の <code>.json</code>）ファイルを選びます。',
          '図面がキャンバスに読み込まれ、ブラウザストレージに自動保存されます — 次回開いたときもそのまま残っています。',
        ],
        links: [
          { label: 'Import コマンド', slug: 'commands/import' },
          { label: 'ファイルパネル', slug: 'commands/files' },
        ],
      },
      {
        title: '正確な寸法で作図する',
        intro: 'すべての作図コマンドはキーボード入力に対応 — 長さや座標を目分量で決める必要はありません。',
        steps: [
          'コマンドを開始：<strong>Line</strong> をクリックするか、<code>line</code> と入力して <strong>Enter</strong>。',
          '始点を <code>x,y</code> 形式で入力し（例：<code>0,0</code>）、<strong>Enter</strong> を押します。',
          'カーソルを目的の方向へ動かし、長さを入力して（例：<code>250</code>）<strong>Enter</strong> — 線分はちょうどその長さで引かれます。',
          'コントロールバーの角度ロックを有効にすると、線分を 30°・45°・90° などの正確な角度に保てます。',
        ],
        links: [
          { label: 'Line コマンド', slug: 'commands/line' },
          { label: 'グリッドとスナップ', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'レイヤーで図面を整理する',
        intro: 'レイヤーは補助線・形状・注記を分けて管理でき、DXF エクスポート後もそのまま保持されます。',
        steps: [
          'ツールバーの<strong>レイヤー</strong>パネルを開き、内容の種類ごとにレイヤーを作成します（輪郭、寸法、メモなど）。',
          'レイヤーごとに色・線種・線幅を設定し、オブジェクトが適切な既定値を継承するようにします。',
          '作図前に <code>layer-make-current</code> でレイヤーをカレントにするか、選択オブジェクトを <code>layer-match</code> で移します。',
          '<code>layer-isolate</code> で作業中レイヤー以外を非表示にし、<code>layer-unfreeze-all</code> で全部戻します。',
        ],
        links: [
          { label: 'レイヤー分離', slug: 'commands/layer-isolate' },
          { label: '線種', slug: 'interface/linetype' },
          { label: '線幅', slug: 'interface/lineweight' },
        ],
      },
      {
        title: '寸法を記入する',
        intro: '寸法は正真正銘の DXF DIMENSION エンティティ — 他のどの CAD ツールにも損失なく渡せます。',
        steps: [
          'ターミナルに <code>dim-linear</code>（水平/垂直）または <code>dim-aligned</code>（測定辺に平行）と入力します。',
          '測りたい 2 点を選び、3 回目のクリックで寸法線を配置します。',
          '<code>dim-continue</code> で寸法を連続記入 — 新しい寸法は前の寸法の終わりから始まります。',
          '円と円弧には <code>dim-radius</code>・<code>dim-diameter</code>・<code>dim-angular</code> を使います。',
          '寸法ラベルをダブルクリックすると文字を編集できます。',
        ],
        links: [
          { label: '長さ寸法', slug: 'commands/dim-linear' },
          { label: '連続寸法', slug: 'commands/dim-continue' },
          { label: 'テキストエディタ', slug: 'interface/text-editor' },
        ],
      },
      {
        title: '距離・角度・面積を測る',
        intro: '形状を作らずにすばやく計測 — 結果は Escape を押すまで画面に残ります。',
        steps: [
          '<code>distance</code> と入力し、2 点を選んで長さを読み取ります。',
          '<code>angle</code> と入力し、2 本の線（または 3 点）を選んで間の角度を読み取ります。',
          '<code>area</code> と入力し、3 点以上をクリックして <strong>Enter</strong> — 囲まれた面積と周長が表示されます。',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'レーザー加工・CNC 用のファイルを準備する',
        intro: 'KulmanLab がもともと作られた目的のワークフロー：ファイルを確認し、整えて、マシンへ送る。',
        steps: [
          'DXF をインポートして確認 — <code>fit</code> で図面全体が画面に収まります。',
          'マシンが切るべきでないものを削除：補助線、メモ、寸法。<code>layer-isolate</code> がはぐれた要素の発見に役立ちます。',
          '形状を整える：はみ出た端を <code>trim</code> で切り、隙間を閉じ、<code>distance</code> で寸法を確認します。',
          'DXF でエクスポートしてマシンのソフトに読み込みます。カットパスは描いたとおりに保たれます — KulmanLab は純粋な AC1032 DXF を書き出します。',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'ビューを全体表示', slug: 'commands/fit' },
          { label: 'エクスポート', slug: 'commands/export' },
        ],
      },
      {
        title: 'ビューポート付きの用紙レイアウトを作る',
        intro: 'レイアウトはペーパー空間のシート — モデルの縮尺ビューを 1 ページに 1 つ以上並べ、印刷できる状態にします。',
        steps: [
          '画面下部の<strong>レイアウトタブ</strong>をクリックしてモデル空間からペーパー空間へ切り替えます。タブバーの <strong>+</strong> ボタンで新しいレイアウトを追加。',
          '<strong>レイアウトタブを右クリック</strong>すると、名前の変更・削除、または <strong>Page Manager</strong> を開けます — そこで用紙サイズ（A4、A3、Letter など）、向き、mm あたりの図面単位の縮尺を設定します。',
          '<code>viewport-rectangle</code> と入力し、対角の 2 点をクリックしてビューポート — 用紙上にモデルを映す窓 — を配置します。',
          'ビューポートをクリックして選択：辺や角をドラッグしてサイズ変更、中央グリップで移動、コントロールバーの縮尺セレクタで正確な縮尺（例：<code>1:50</code>）を設定します。',
          'ビューポート内でスクロールするとモデルビューをズーム、中ボタンドラッグでパン。決まったら<strong>ビューポートを右クリック</strong>して <strong>Lock</strong> を選び、誤操作から保護します。',
          '同じビューが 2 つ必要？ <code>viewport-copy</code> は縮尺とモデルビューを保ったままビューポートを複製します。',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: '印刷または PDF / PNG で保存する',
        intro: '印刷マネージャーはライブプレビュー付きで、図面を紙に出せる画像へ変換します。',
        steps: [
          '<code>print</code> と入力するか、ファイルパネルの印刷ボタンをクリックします。',
          '出力形式を選択：文書には PDF、画像には PNG/JPEG/WebP。',
          '必要に応じて図面の一部を切り出し、モノクロ出力を有効にしてきれいな線画にします。',
          '<strong>Print</strong> をクリック — ファイルがコンピューターにダウンロードされます。',
        ],
        links: [
          { label: 'Print コマンド', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: '保存済み図面のバックアップと管理',
        intro: '図面はブラウザストレージの中に — プライベートで、オフラインで、すべてあなたの管理下にあります。',
        steps: [
          '<strong>ファイル</strong>パネルを開くと、このブラウザに保存された図面が一覧できます。復元も削除も自由です。',
          'ブラウザデータの消去や PC の乗り換えの前に、大事なものをエクスポート — <code>.json</code> は完全な忠実度を保ち、<code>.dxf</code> は互換性を最大化します。',
          'アプリを完全リセットするには <code>wipestorage</code> と入力し <code>YES</code> で確定 — ローカル保存された図面はすべて完全に削除されます。',
        ],
        links: [
          { label: 'ファイルパネル', slug: 'commands/files' },
          { label: 'エクスポート', slug: 'commands/export' },
          { label: 'ストレージ消去', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  pl: {
    title: 'Jak korzystać z KulmanLab — poradniki do typowych zadań CAD',
    desc: 'Poradniki krok po kroku dla KulmanLab CAD: otwieranie plików DXF, rysowanie z dokładnymi wymiarami, warstwy, wymiarowanie, przygotowanie plików do cięcia laserem, drukowanie i kopie zapasowe.',
    heading: 'Poradniki',
    subtitle: 'Poradniki krok po kroku do najczęstszych zadań w KulmanLab CAD.',
    docsLabel: 'Dokumentacja:',
    outroTitle: 'Szukasz konkretnego polecenia?',
    outroHtml: '<a href="/pl/docs/">Spis poleceń</a> dokumentuje wszystkie ponad 50 poleceń, a <a href="/pl/faq/">FAQ</a> obejmuje przechowywanie, formaty i zgodność.',
    guides: [
      {
        title: 'Otwieranie pliku DXF',
        intro: 'KulmanLab czyta DXF — format wymiany, który potrafi wygenerować każde narzędzie CAD. Pliki otwierają się prosto z dysku i nigdy nie opuszczają Twojego urządzenia.',
        steps: [
          'Otwórz <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Kliknij przycisk <strong>Import</strong> w panelu Plik albo wpisz <code>import</code> w terminalu.',
          'Wybierz plik <code>.dxf</code> (lub <code>.json</code> KulmanLab) ze swojego komputera.',
          'Rysunek ładuje się na płótno i zapisuje automatycznie w pamięci przeglądarki — następnym razem nadal tam będzie.',
        ],
        links: [
          { label: 'Polecenie Import', slug: 'commands/import' },
          { label: 'Panel plików', slug: 'commands/files' },
        ],
      },
      {
        title: 'Rysowanie z dokładnymi wymiarami',
        intro: 'Każde polecenie rysunkowe przyjmuje dane z klawiatury — długości ani współrzędnych nigdy nie trzeba ustawiać „na oko".',
        steps: [
          'Uruchom polecenie — kliknij <strong>Line</strong> albo wpisz <code>line</code> i naciśnij <strong>Enter</strong>.',
          'Wpisz punkt początkowy jako <code>x,y</code> (na przykład <code>0,0</code>) i naciśnij <strong>Enter</strong>.',
          'Przesuń kursor w wybranym kierunku, wpisz długość (na przykład <code>250</code>) i naciśnij <strong>Enter</strong> — odcinek zostanie narysowany dokładnie tej długości.',
          'Włącz blokadę kąta na pasku sterowania, aby utrzymać odcinki pod dokładnymi kątami, np. 30°, 45° czy 90°.',
        ],
        links: [
          { label: 'Polecenie Line', slug: 'commands/line' },
          { label: 'Siatka i przyciąganie', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Porządkowanie rysunku warstwami',
        intro: 'Warstwy oddzielają linie konstrukcyjne, geometrię i adnotacje — i przeżywają eksport do DXF.',
        steps: [
          'Otwórz panel <strong>Warstwy</strong> na pasku narzędzi i utwórz warstwę dla każdego rodzaju treści (obrys, wymiary, notatki…).',
          'Ustaw kolor, rodzaj i grubość linii dla każdej warstwy, aby obiekty dziedziczyły sensowne wartości domyślne.',
          'Przed rysowaniem ustaw warstwę jako bieżącą poleceniem <code>layer-make-current</code> albo przenieś zaznaczone obiekty poleceniem <code>layer-match</code>.',
          'Polecenie <code>layer-isolate</code> ukrywa wszystko poza bieżącą warstwą, a <code>layer-unfreeze-all</code> przywraca całość.',
        ],
        links: [
          { label: 'Izolowanie warstwy', slug: 'commands/layer-isolate' },
          { label: 'Rodzaj linii', slug: 'interface/linetype' },
          { label: 'Grubość linii', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Dodawanie wymiarów',
        intro: 'Wymiary to prawdziwe encje DXF DIMENSION — przechodzą bezstratnie do każdego innego narzędzia CAD.',
        steps: [
          'Wpisz w terminalu <code>dim-linear</code> (poziomo/pionowo) lub <code>dim-aligned</code> (równolegle do mierzonej krawędzi).',
          'Wskaż dwa punkty do zmierzenia, a trzecim kliknięciem umieść linię wymiarową.',
          'Łącz serie pomiarów poleceniem <code>dim-continue</code> — każdy nowy wymiar zaczyna się tam, gdzie skończył poprzedni.',
          'Do okręgów i łuków służą <code>dim-radius</code>, <code>dim-diameter</code> i <code>dim-angular</code>.',
          'Kliknij dwukrotnie etykietę wymiaru, aby edytować jej tekst.',
        ],
        links: [
          { label: 'Wymiar liniowy', slug: 'commands/dim-linear' },
          { label: 'Wymiar kontynuowany', slug: 'commands/dim-continue' },
          { label: 'Edytor tekstu', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Mierzenie odległości, kąta i pola',
        intro: 'Szybkie pomiary bez tworzenia geometrii — wyniki zostają na ekranie aż do wciśnięcia Escape.',
        steps: [
          'Wpisz <code>distance</code> i wskaż dwa punkty, aby odczytać długość.',
          'Wpisz <code>angle</code> i wskaż dwie linie (lub trzy punkty), aby odczytać kąt między nimi.',
          'Wpisz <code>area</code>, kliknij trzy lub więcej punktów i naciśnij <strong>Enter</strong> — pokażą się pole zamknięte i obwód.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Przygotowanie pliku do cięcia laserem lub CNC',
        intro: 'Przepływ pracy, dla którego KulmanLab pierwotnie powstał: sprawdzić plik, uporządkować, wysłać na maszynę.',
        steps: [
          'Zaimportuj DXF i obejrzyj go — <code>fit</code> wpasowuje cały rysunek w ekran.',
          'Usuń wszystko, czego maszyna nie ma ciąć: linie konstrukcyjne, notatki, wymiary. <code>layer-isolate</code> pomaga znaleźć zabłąkane elementy.',
          'Uporządkuj geometrię: przytnij wystające końce poleceniem <code>trim</code>, domknij przerwy i sprawdź wymiary poleceniem <code>distance</code>.',
          'Wyeksportuj jako DXF i wczytaj do oprogramowania maszyny. Ścieżki cięcia pozostają dokładnie takie, jak narysowane — KulmanLab zapisuje czysty DXF AC1032.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Dopasuj widok', slug: 'commands/fit' },
          { label: 'Eksport', slug: 'commands/export' },
        ],
      },
      {
        title: 'Tworzenie arkusza papieru z rzutniami',
        intro: 'Layouty to arkusze przestrzeni papieru — skomponuj jeden lub kilka widoków modelu w skali na stronie gotowej do druku.',
        steps: [
          'Kliknij <strong>kartę layoutu</strong> na dole ekranu, aby przejść z przestrzeni modelu do przestrzeni papieru. Przycisk <strong>+</strong> na pasku kart dodaje nowy layout.',
          '<strong>Kliknij kartę layoutu prawym przyciskiem</strong>, aby zmienić jej nazwę, usunąć ją albo otworzyć <strong>Page Manager</strong> — tam ustawisz format papieru (A4, A3, Letter…), orientację i skalę jednostek rysunku na mm.',
          'Wpisz <code>viewport-rectangle</code> i kliknij dwa przeciwległe narożniki, aby umieścić rzutnię — okno pokazujące model na papierze.',
          'Kliknij rzutnię, aby ją zaznaczyć: przeciągaj krawędzie lub narożniki, by zmienić rozmiar, środkowy uchwyt, by ją przesunąć, a dokładną skalę (np. <code>1:50</code>) wybierz w selektorze na pasku sterowania.',
          'Przewijaj wewnątrz rzutni, aby przybliżać widok modelu; przeciągaj środkowym przyciskiem, aby go przesuwać. Gdy wszystko pasuje, <strong>kliknij rzutnię prawym przyciskiem</strong> i wybierz <strong>Lock</strong>, aby uchronić ją przed przypadkowymi zmianami.',
          'Potrzebujesz tego samego widoku dwa razy? <code>viewport-copy</code> powiela rzutnię z zachowaniem skali i widoku modelu.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Drukowanie lub zapis do PDF / PNG',
        intro: 'Menedżer wydruku zamienia rysunek w obraz gotowy na papier, z podglądem na żywo.',
        steps: [
          'Wpisz <code>print</code> albo kliknij przycisk drukowania w panelu Plik.',
          'Wybierz format wyjściowy: PDF do dokumentów, PNG/JPEG/WebP do obrazów.',
          'Opcjonalnie przytnij do fragmentu rysunku i włącz wyjście monochromatyczne dla czystych wydruków liniowych.',
          'Kliknij <strong>Print</strong> — plik pobierze się na Twój komputer.',
        ],
        links: [
          { label: 'Polecenie Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Kopie zapasowe i zarządzanie zapisanymi rysunkami',
        intro: 'Rysunki mieszkają w pamięci Twojej przeglądarki — prywatnie, offline i w pełni pod Twoją kontrolą.',
        steps: [
          'Otwórz panel <strong>Pliki</strong>, aby zobaczyć każdy rysunek zapisany w tej przeglądarce; przywracaj lub usuwaj dowolne z nich.',
          'Przed czyszczeniem danych przeglądarki lub zmianą komputera wyeksportuj to, co ważne — <code>.json</code> zachowuje pełną wierność, <code>.dxf</code> maksymalizuje zgodność.',
          'Aby całkowicie zresetować aplikację, wpisz <code>wipestorage</code> i potwierdź, wpisując <code>YES</code> — wszystkie lokalnie zapisane rysunki zostaną trwale usunięte.',
        ],
        links: [
          { label: 'Panel plików', slug: 'commands/files' },
          { label: 'Eksport', slug: 'commands/export' },
          { label: 'Czyszczenie pamięci', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  ko: {
    title: 'KulmanLab 사용법 — 흔한 CAD 작업 가이드',
    desc: 'KulmanLab CAD 단계별 가이드: DXF 파일 열기, 정확한 치수로 그리기, 레이어 활용, 치수 기입, 레이저 커팅 파일 준비, 인쇄, 도면 백업.',
    heading: '사용법',
    subtitle: 'KulmanLab CAD에서 가장 흔한 작업을 위한 단계별 가이드.',
    docsLabel: '문서:',
    outroTitle: '특정 명령을 찾고 계신가요?',
    outroHtml: '<a href="/ko/docs/">명령 레퍼런스</a>에 50개 이상의 전체 명령이 정리되어 있고, <a href="/ko/faq/">FAQ</a>는 저장, 형식, 호환성을 다룹니다.',
    guides: [
      {
        title: 'DXF 파일 열기',
        intro: 'KulmanLab은 모든 CAD 도구가 만들 수 있는 교환 형식인 DXF를 읽습니다. 파일은 디스크에서 바로 열리며 기기 밖으로 나가지 않습니다.',
        steps: [
          '<a href="https://app.kulmanlab.com">app.kulmanlab.com</a>을 엽니다.',
          '파일 패널의 <strong>Import</strong> 버튼을 클릭하거나 터미널에 <code>import</code>를 입력합니다.',
          '컴퓨터에서 <code>.dxf</code>(또는 KulmanLab <code>.json</code>) 파일을 선택합니다.',
          '도면이 캔버스에 로드되고 브라우저 저장소에 자동 저장됩니다 — 다음에도 그대로 남아 있습니다.',
        ],
        links: [
          { label: 'Import 명령', slug: 'commands/import' },
          { label: '파일 패널', slug: 'commands/files' },
        ],
      },
      {
        title: '정확한 치수로 그리기',
        intro: '모든 그리기 명령이 키보드 입력을 지원합니다 — 길이나 좌표를 눈대중으로 정할 일이 없습니다.',
        steps: [
          '명령 시작: <strong>Line</strong>을 클릭하거나 <code>line</code>을 입력하고 <strong>Enter</strong>를 누릅니다.',
          '시작점을 <code>x,y</code> 형식으로 입력하고(예: <code>0,0</code>) <strong>Enter</strong>를 누릅니다.',
          '커서를 원하는 방향으로 움직인 뒤 길이를 입력하고(예: <code>250</code>) <strong>Enter</strong> — 선분이 정확히 그 길이로 그려집니다.',
          '컨트롤 바의 각도 잠금을 켜면 선분을 30°, 45°, 90° 같은 정확한 각도로 유지할 수 있습니다.',
        ],
        links: [
          { label: 'Line 명령', slug: 'commands/line' },
          { label: '그리드와 스냅', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: '레이어로 도면 정리하기',
        intro: '레이어는 보조선, 도형, 주석을 분리해 관리하며 DXF 내보내기 후에도 유지됩니다.',
        steps: [
          '툴바에서 <strong>레이어</strong> 패널을 열고 내용 종류별로 레이어를 만듭니다(외곽선, 치수, 메모…).',
          '레이어마다 색, 선 종류, 선 굵기를 설정해 객체가 합리적인 기본값을 물려받게 합니다.',
          '그리기 전에 <code>layer-make-current</code>로 레이어를 현재로 만들거나, 선택한 객체를 <code>layer-match</code>로 옮깁니다.',
          '<code>layer-isolate</code>는 작업 중인 레이어만 남기고 모두 숨기며, <code>layer-unfreeze-all</code>은 전부 되돌립니다.',
        ],
        links: [
          { label: '레이어 분리', slug: 'commands/layer-isolate' },
          { label: '선 종류', slug: 'interface/linetype' },
          { label: '선 굵기', slug: 'interface/lineweight' },
        ],
      },
      {
        title: '치수 기입하기',
        intro: '치수는 진짜 DXF DIMENSION 엔티티라서 다른 어떤 CAD 도구로도 손실 없이 전달됩니다.',
        steps: [
          '터미널에 <code>dim-linear</code>(수평/수직) 또는 <code>dim-aligned</code>(측정 변에 평행)를 입력합니다.',
          '측정할 두 점을 선택한 뒤 세 번째 클릭으로 치수선을 배치합니다.',
          '<code>dim-continue</code>로 측정을 이어 갑니다 — 새 치수는 이전 치수가 끝난 지점에서 시작합니다.',
          '원과 호에는 <code>dim-radius</code>, <code>dim-diameter</code>, <code>dim-angular</code>를 사용합니다.',
          '치수 라벨을 더블 클릭하면 텍스트를 편집할 수 있습니다.',
        ],
        links: [
          { label: '선형 치수', slug: 'commands/dim-linear' },
          { label: '연속 치수', slug: 'commands/dim-continue' },
          { label: '텍스트 편집기', slug: 'interface/text-editor' },
        ],
      },
      {
        title: '거리·각도·면적 측정하기',
        intro: '도형을 만들지 않는 빠른 측정 — 결과는 Escape를 누를 때까지 화면에 남습니다.',
        steps: [
          '<code>distance</code>를 입력하고 두 점을 선택해 길이를 읽습니다.',
          '<code>angle</code>을 입력하고 두 선(또는 세 점)을 선택해 사이 각도를 읽습니다.',
          '<code>area</code>를 입력하고 세 점 이상을 클릭한 뒤 <strong>Enter</strong> — 둘러싸인 면적과 둘레가 표시됩니다.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: '레이저 커팅·CNC용 파일 준비하기',
        intro: 'KulmanLab이 애초에 만들어진 워크플로: 파일을 확인하고, 정리하고, 기계로 보냅니다.',
        steps: [
          'DXF를 가져와 살펴봅니다 — <code>fit</code>이 도면 전체를 화면에 맞춥니다.',
          '기계가 잘라선 안 되는 것을 삭제합니다: 보조선, 메모, 치수. <code>layer-isolate</code>가 흩어진 요소를 찾는 데 도움이 됩니다.',
          '도형을 정리합니다: 튀어나온 끝은 <code>trim</code>으로 자르고, 틈을 메우고, <code>distance</code>로 치수를 확인합니다.',
          'DXF로 내보내 기계 소프트웨어에 불러옵니다. 절단 경로는 그린 그대로 유지됩니다 — KulmanLab은 순수한 AC1032 DXF를 기록합니다.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: '뷰 맞춤', slug: 'commands/fit' },
          { label: '내보내기', slug: 'commands/export' },
        ],
      },
      {
        title: '뷰포트로 용지 레이아웃 구성하기',
        intro: '레이아웃은 종이 공간의 시트입니다 — 모델의 축척 뷰를 한 페이지에 하나 이상 배치해 인쇄 준비를 마칩니다.',
        steps: [
          '화면 아래 <strong>레이아웃 탭</strong>을 클릭해 모델 공간에서 종이 공간으로 전환합니다. 탭 바의 <strong>+</strong> 버튼이 새 레이아웃을 추가합니다.',
          '<strong>레이아웃 탭을 우클릭</strong>하면 이름 변경·삭제 또는 <strong>Page Manager</strong> 열기가 가능합니다 — 거기서 용지 규격(A4, A3, Letter…), 방향, mm당 도면 단위 축척을 설정합니다.',
          '<code>viewport-rectangle</code>을 입력하고 마주 보는 두 모서리를 클릭해 뷰포트 — 종이 위에 모델을 보여주는 창 — 를 배치합니다.',
          '뷰포트를 클릭해 선택합니다: 가장자리나 모서리를 끌어 크기 조절, 중앙 그립을 끌어 이동, 컨트롤 바의 축척 선택기에서 정확한 축척(예: <code>1:50</code>)을 지정합니다.',
          '뷰포트 안에서 스크롤하면 모델 뷰가 확대·축소되고, 가운데 버튼 드래그로 이동합니다. 다 됐으면 <strong>뷰포트를 우클릭</strong>하고 <strong>Lock</strong>을 선택해 실수로 바뀌지 않게 보호하세요.',
          '같은 뷰가 두 번 필요하다면? <code>viewport-copy</code>가 축척과 모델 뷰를 그대로 유지한 채 뷰포트를 복제합니다.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: '인쇄하거나 PDF / PNG로 저장하기',
        intro: '인쇄 관리자는 실시간 미리보기와 함께 도면을 종이에 바로 쓸 이미지로 렌더링합니다.',
        steps: [
          '<code>print</code>를 입력하거나 파일 패널의 인쇄 버튼을 클릭합니다.',
          '출력 형식을 선택합니다: 문서는 PDF, 이미지는 PNG/JPEG/WebP.',
          '필요하면 도면의 일부 영역만 잘라내고, 깔끔한 선 인쇄를 위해 흑백 출력을 켭니다.',
          '<strong>Print</strong>를 클릭하면 파일이 컴퓨터로 다운로드됩니다.',
        ],
        links: [
          { label: 'Print 명령', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: '저장된 도면 백업·관리하기',
        intro: '도면은 브라우저 저장소에 삽니다 — 프라이빗하고, 오프라인이며, 온전히 당신의 것입니다.',
        steps: [
          '<strong>파일</strong> 패널을 열면 이 브라우저에 저장된 모든 도면이 보입니다. 원하는 것을 복원하거나 삭제하세요.',
          '브라우저 데이터를 지우거나 컴퓨터를 바꾸기 전에 중요한 것을 내보내세요 — <code>.json</code>은 완전한 충실도를, <code>.dxf</code>는 최대 호환성을 보장합니다.',
          '앱을 완전히 초기화하려면 <code>wipestorage</code>를 입력하고 <code>YES</code>로 확인합니다 — 로컬에 저장된 모든 도면이 영구 삭제됩니다.',
        ],
        links: [
          { label: '파일 패널', slug: 'commands/files' },
          { label: '내보내기', slug: 'commands/export' },
          { label: '저장소 비우기', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  vi: {
    title: 'Cách dùng KulmanLab — Hướng dẫn các tác vụ CAD thường gặp',
    desc: 'Hướng dẫn từng bước cho KulmanLab CAD: mở tệp DXF, vẽ với kích thước chính xác, dùng layer, ghi kích thước, chuẩn bị tệp cắt laser, in ấn và sao lưu bản vẽ.',
    heading: 'Hướng dẫn',
    subtitle: 'Hướng dẫn từng bước cho những tác vụ thường gặp nhất trong KulmanLab CAD.',
    docsLabel: 'Tài liệu:',
    outroTitle: 'Đang tìm một lệnh cụ thể?',
    outroHtml: '<a href="/vi/docs/">Tài liệu lệnh</a> mô tả đầy đủ hơn 50 lệnh, còn <a href="/vi/faq/">FAQ</a> bao quát lưu trữ, định dạng và tính tương thích.',
    guides: [
      {
        title: 'Mở tệp DXF',
        intro: 'KulmanLab đọc DXF — định dạng trao đổi mà mọi công cụ CAD đều xuất được. Tệp mở thẳng từ ổ đĩa và không bao giờ rời khỏi thiết bị của bạn.',
        steps: [
          'Mở <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Nhấp nút <strong>Import</strong> trong bảng Tệp, hoặc gõ <code>import</code> vào terminal.',
          'Chọn một tệp <code>.dxf</code> (hoặc <code>.json</code> của KulmanLab) từ máy tính.',
          'Bản vẽ được tải lên canvas và tự động lưu vào bộ nhớ trình duyệt — lần sau vẫn còn nguyên.',
        ],
        links: [
          { label: 'Lệnh Import', slug: 'commands/import' },
          { label: 'Bảng tệp', slug: 'commands/files' },
        ],
      },
      {
        title: 'Vẽ với kích thước chính xác',
        intro: 'Mọi lệnh vẽ đều nhận nhập liệu từ bàn phím — không bao giờ phải ước lượng chiều dài hay tọa độ bằng mắt.',
        steps: [
          'Bắt đầu một lệnh: nhấp <strong>Line</strong> hoặc gõ <code>line</code> rồi nhấn <strong>Enter</strong>.',
          'Gõ điểm bắt đầu dạng <code>x,y</code> (ví dụ <code>0,0</code>) rồi nhấn <strong>Enter</strong>.',
          'Di con trỏ theo hướng mong muốn, gõ chiều dài (ví dụ <code>250</code>) rồi nhấn <strong>Enter</strong> — đoạn thẳng được vẽ đúng chiều dài đó.',
          'Bật khóa góc trên thanh điều khiển để giữ các đoạn ở góc chính xác như 30°, 45° hay 90°.',
        ],
        links: [
          { label: 'Lệnh Line', slug: 'commands/line' },
          { label: 'Lưới & bắt điểm', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Sắp xếp bản vẽ bằng layer',
        intro: 'Layer tách riêng đường dựng hình, hình học và chú thích — và được giữ nguyên khi xuất DXF.',
        steps: [
          'Mở bảng <strong>Layer</strong> trên thanh công cụ và tạo một layer cho mỗi loại nội dung (đường bao, kích thước, ghi chú…).',
          'Đặt màu, kiểu nét và độ dày nét cho từng layer để các đối tượng thừa hưởng giá trị mặc định hợp lý.',
          'Đặt layer hiện hành bằng <code>layer-make-current</code> trước khi vẽ, hoặc chuyển các đối tượng đã chọn bằng <code>layer-match</code>.',
          'Dùng <code>layer-isolate</code> để ẩn mọi thứ trừ layer đang làm việc, và <code>layer-unfreeze-all</code> để hiện lại tất cả.',
        ],
        links: [
          { label: 'Cô lập layer', slug: 'commands/layer-isolate' },
          { label: 'Kiểu nét', slug: 'interface/linetype' },
          { label: 'Độ dày nét', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Ghi kích thước',
        intro: 'Kích thước là thực thể DXF DIMENSION thật sự — chuyển sang mọi công cụ CAD khác mà không mất mát.',
        steps: [
          'Gõ <code>dim-linear</code> (ngang/dọc) hoặc <code>dim-aligned</code> (song song cạnh đo) vào terminal.',
          'Chọn hai điểm cần đo, rồi đặt đường kích thước bằng cú nhấp thứ ba.',
          'Nối chuỗi các phép đo bằng <code>dim-continue</code> — mỗi kích thước mới bắt đầu nơi kích thước trước kết thúc.',
          'Với đường tròn và cung, dùng <code>dim-radius</code>, <code>dim-diameter</code> hoặc <code>dim-angular</code>.',
          'Nhấp đúp vào nhãn kích thước bất kỳ để sửa nội dung chữ.',
        ],
        links: [
          { label: 'Kích thước thẳng', slug: 'commands/dim-linear' },
          { label: 'Kích thước nối tiếp', slug: 'commands/dim-continue' },
          { label: 'Trình soạn văn bản', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Đo khoảng cách, góc và diện tích',
        intro: 'Đo nhanh mà không tạo hình học — kết quả hiển thị trên màn hình cho đến khi nhấn Escape.',
        steps: [
          'Gõ <code>distance</code> và chọn hai điểm để đọc chiều dài.',
          'Gõ <code>angle</code> và chọn hai đường (hoặc ba điểm) để đọc góc giữa chúng.',
          'Gõ <code>area</code>, nhấp ba điểm trở lên rồi nhấn <strong>Enter</strong> — diện tích bao quanh và chu vi được hiển thị.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Chuẩn bị tệp cho cắt laser hoặc CNC',
        intro: 'Quy trình mà KulmanLab vốn được tạo ra để phục vụ: kiểm tra tệp, dọn sạch, gửi sang máy.',
        steps: [
          'Nhập DXF và xem tổng thể — <code>fit</code> thu toàn bộ bản vẽ vào khung nhìn.',
          'Xóa những gì máy không được cắt: đường dựng hình, ghi chú, kích thước. <code>layer-isolate</code> giúp tìm các phần tử lạc.',
          'Dọn hình học: cắt phần thừa bằng <code>trim</code>, khép các khe hở và kiểm tra kích thước bằng <code>distance</code>.',
          'Xuất ra DXF và nạp vào phần mềm máy. Đường cắt giữ nguyên như đã vẽ — KulmanLab ghi DXF AC1032 thuần.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Vừa khung nhìn', slug: 'commands/fit' },
          { label: 'Xuất', slug: 'commands/export' },
        ],
      },
      {
        title: 'Dựng layout giấy với viewport',
        intro: 'Layout là các trang không gian giấy — ghép một hoặc nhiều khung nhìn theo tỷ lệ của mô hình lên một trang, sẵn sàng in.',
        steps: [
          'Nhấp một <strong>tab layout</strong> ở cuối màn hình để chuyển từ không gian mô hình sang không gian giấy. Nút <strong>+</strong> trên thanh tab thêm layout mới.',
          '<strong>Nhấp chuột phải vào tab layout</strong> để đổi tên, xóa, hoặc mở <strong>Page Manager</strong> — nơi bạn đặt khổ giấy (A4, A3, Letter…), hướng giấy và tỷ lệ đơn vị vẽ trên mỗi mm.',
          'Gõ <code>viewport-rectangle</code> rồi nhấp hai góc đối diện để đặt một viewport — cửa sổ hiển thị mô hình trên giấy.',
          'Nhấp viewport để chọn: kéo cạnh hoặc góc để đổi cỡ, kéo grip giữa để di chuyển, và chọn tỷ lệ chính xác (vd. <code>1:50</code>) từ bộ chọn tỷ lệ trên thanh điều khiển.',
          'Cuộn bên trong viewport để thu phóng khung nhìn mô hình, kéo bằng nút giữa để dịch chuyển. Khi ưng ý, <strong>nhấp chuột phải vào viewport</strong> và chọn <strong>Lock</strong> để tránh thay đổi ngoài ý muốn.',
          'Cần cùng một khung nhìn hai lần? <code>viewport-copy</code> nhân bản viewport, giữ nguyên tỷ lệ và khung nhìn mô hình.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'In hoặc lưu thành PDF / PNG',
        intro: 'Trình quản lý in kết xuất bản vẽ thành hình ảnh sẵn sàng lên giấy, có xem trước trực tiếp.',
        steps: [
          'Gõ <code>print</code> hoặc nhấp nút In trong bảng Tệp.',
          'Chọn định dạng đầu ra: PDF cho tài liệu, PNG/JPEG/WebP cho hình ảnh.',
          'Tùy chọn: cắt theo một vùng bản vẽ và bật chế độ đơn sắc để bản in nét sạch sẽ.',
          'Nhấp <strong>Print</strong> — tệp được tải về máy tính của bạn.',
        ],
        links: [
          { label: 'Lệnh Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Sao lưu và quản lý bản vẽ đã lưu',
        intro: 'Bản vẽ sống trong bộ nhớ trình duyệt của bạn — riêng tư, ngoại tuyến và hoàn toàn do bạn kiểm soát.',
        steps: [
          'Mở bảng <strong>Tệp</strong> để xem mọi bản vẽ lưu trong trình duyệt này; khôi phục hoặc xóa tùy ý.',
          'Trước khi xóa dữ liệu trình duyệt hay đổi máy, hãy xuất những gì quan trọng — <code>.json</code> giữ trọn vẹn chi tiết, <code>.dxf</code> tương thích rộng nhất.',
          'Để đặt lại ứng dụng hoàn toàn, gõ <code>wipestorage</code> và xác nhận bằng <code>YES</code> — mọi bản vẽ lưu cục bộ sẽ bị xóa vĩnh viễn.',
        ],
        links: [
          { label: 'Bảng tệp', slug: 'commands/files' },
          { label: 'Xuất', slug: 'commands/export' },
          { label: 'Xóa bộ nhớ', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  th: {
    title: 'วิธีใช้ KulmanLab — คู่มืองาน CAD ที่พบบ่อย',
    desc: 'คู่มือทีละขั้นตอนสำหรับ KulmanLab CAD: เปิดไฟล์ DXF วาดด้วยขนาดที่แม่นยำ ใช้เลเยอร์ ใส่เส้นบอกขนาด เตรียมไฟล์ตัดเลเซอร์ พิมพ์ และสำรองแบบเขียน',
    heading: 'วิธีใช้',
    subtitle: 'คู่มือทีละขั้นตอนสำหรับงานที่พบบ่อยที่สุดใน KulmanLab CAD',
    docsLabel: 'เอกสาร:',
    outroTitle: 'กำลังหาคำสั่งใดคำสั่งหนึ่งอยู่?',
    outroHtml: '<a href="/th/docs/">คู่มือคำสั่ง</a>รวบรวมคำสั่งทั้งหมดกว่า 50 คำสั่ง และ<a href="/th/faq/">คำถามที่พบบ่อย</a>ครอบคลุมเรื่องการจัดเก็บ รูปแบบไฟล์ และความเข้ากันได้',
    guides: [
      {
        title: 'เปิดไฟล์ DXF',
        intro: 'KulmanLab อ่าน DXF — รูปแบบแลกเปลี่ยนที่เครื่องมือ CAD ทุกตัวสร้างได้ ไฟล์เปิดตรงจากดิสก์ของคุณและไม่มีวันออกจากอุปกรณ์',
        steps: [
          'เปิด <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>',
          'คลิกปุ่ม <strong>Import</strong> ในแผงไฟล์ หรือพิมพ์ <code>import</code> ในเทอร์มินัล',
          'เลือกไฟล์ <code>.dxf</code> (หรือ <code>.json</code> ของ KulmanLab) จากคอมพิวเตอร์',
          'แบบเขียนโหลดขึ้นผืนผ้าใบและบันทึกอัตโนมัติลงพื้นที่จัดเก็บของเบราว์เซอร์ — ครั้งหน้าก็ยังอยู่ที่เดิม',
        ],
        links: [
          { label: 'คำสั่ง Import', slug: 'commands/import' },
          { label: 'แผงไฟล์', slug: 'commands/files' },
        ],
      },
      {
        title: 'วาดด้วยขนาดที่แม่นยำ',
        intro: 'ทุกคำสั่งวาดรับค่าจากคีย์บอร์ด — ไม่ต้องกะความยาวหรือพิกัดด้วยสายตาอีกต่อไป',
        steps: [
          'เริ่มคำสั่ง: คลิก <strong>Line</strong> หรือพิมพ์ <code>line</code> แล้วกด <strong>Enter</strong>',
          'พิมพ์จุดเริ่มต้นในรูปแบบ <code>x,y</code> (เช่น <code>0,0</code>) แล้วกด <strong>Enter</strong>',
          'เลื่อนเคอร์เซอร์ไปทิศที่ต้องการ พิมพ์ความยาว (เช่น <code>250</code>) แล้วกด <strong>Enter</strong> — เส้นจะถูกวาดยาวเท่านั้นพอดี',
          'เปิดล็อกมุมในแถบควบคุมเพื่อคงเส้นไว้ที่มุมแม่นยำอย่าง 30°, 45° หรือ 90°',
        ],
        links: [
          { label: 'คำสั่ง Line', slug: 'commands/line' },
          { label: 'กริดและสแนป', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'จัดระเบียบแบบเขียนด้วยเลเยอร์',
        intro: 'เลเยอร์แยกเส้นช่วยเขียน รูปทรง และคำอธิบายออกจากกัน — และคงอยู่ครบเมื่อส่งออก DXF',
        steps: [
          'เปิดแผง<strong>เลเยอร์</strong>ในแถบเครื่องมือ แล้วสร้างเลเยอร์สำหรับเนื้อหาแต่ละชนิด (เส้นขอบ ขนาด บันทึก…)',
          'ตั้งสี ชนิดเส้น และความหนาเส้นต่อเลเยอร์ เพื่อให้วัตถุรับค่าเริ่มต้นที่เหมาะสม',
          'ตั้งเลเยอร์ปัจจุบันด้วย <code>layer-make-current</code> ก่อนวาด หรือย้ายวัตถุที่เลือกด้วย <code>layer-match</code>',
          'ใช้ <code>layer-isolate</code> ซ่อนทุกอย่างยกเว้นเลเยอร์ที่กำลังทำงาน และ <code>layer-unfreeze-all</code> เพื่อเรียกทั้งหมดกลับมา',
        ],
        links: [
          { label: 'แยกเลเยอร์', slug: 'commands/layer-isolate' },
          { label: 'ชนิดเส้น', slug: 'interface/linetype' },
          { label: 'ความหนาเส้น', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'ใส่เส้นบอกขนาด',
        intro: 'เส้นบอกขนาดเป็นเอนทิตี DXF DIMENSION ของแท้ จึงส่งต่อไปยังเครื่องมือ CAD อื่นได้โดยไม่สูญเสียข้อมูล',
        steps: [
          'พิมพ์ <code>dim-linear</code> (แนวนอน/แนวตั้ง) หรือ <code>dim-aligned</code> (ขนานกับขอบที่วัด) ในเทอร์มินัล',
          'เลือกจุดสองจุดที่ต้องการวัด แล้ววางเส้นบอกขนาดด้วยคลิกที่สาม',
          'ต่อชุดการวัดด้วย <code>dim-continue</code> — ขนาดใหม่แต่ละอันเริ่มตรงที่อันก่อนหน้าจบ',
          'สำหรับวงกลมและส่วนโค้ง ใช้ <code>dim-radius</code>, <code>dim-diameter</code> หรือ <code>dim-angular</code>',
          'ดับเบิลคลิกป้ายขนาดใดก็ได้เพื่อแก้ไขข้อความ',
        ],
        links: [
          { label: 'ขนาดเชิงเส้น', slug: 'commands/dim-linear' },
          { label: 'ขนาดต่อเนื่อง', slug: 'commands/dim-continue' },
          { label: 'ตัวแก้ไขข้อความ', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'วัดระยะทาง มุม และพื้นที่',
        intro: 'วัดอย่างรวดเร็วโดยไม่สร้างรูปทรงใด ๆ — ผลลัพธ์อยู่บนจอจนกว่าจะกด Escape',
        steps: [
          'พิมพ์ <code>distance</code> แล้วเลือกสองจุดเพื่ออ่านความยาว',
          'พิมพ์ <code>angle</code> แล้วเลือกสองเส้น (หรือสามจุด) เพื่ออ่านมุมระหว่างกัน',
          'พิมพ์ <code>area</code> คลิกสามจุดขึ้นไปแล้วกด <strong>Enter</strong> — แสดงพื้นที่ที่ล้อมรอบและเส้นรอบรูป',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'เตรียมไฟล์สำหรับตัดเลเซอร์หรือ CNC',
        intro: 'เวิร์กโฟลว์ที่ KulmanLab ถูกสร้างขึ้นมาเพื่อสิ่งนี้แต่แรก: ตรวจไฟล์ เก็บกวาด แล้วส่งเข้าเครื่อง',
        steps: [
          'นำเข้า DXF แล้วตรวจดู — <code>fit</code> ซูมทั้งแบบเขียนให้พอดีจอ',
          'ลบสิ่งที่เครื่องไม่ควรตัด: เส้นช่วยเขียน บันทึก เส้นบอกขนาด — <code>layer-isolate</code> ช่วยหาชิ้นส่วนหลงเหลือ',
          'จัดระเบียบรูปทรง: เล็มปลายที่ยื่นเกินด้วย <code>trim</code> ปิดช่องว่าง และตรวจขนาดด้วย <code>distance</code>',
          'ส่งออกเป็น DXF แล้วโหลดเข้าซอฟต์แวร์ของเครื่อง เส้นทางตัดคงอยู่ตรงตามที่วาด — KulmanLab เขียน AC1032 DXF ล้วน ๆ',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'พอดีมุมมอง', slug: 'commands/fit' },
          { label: 'ส่งออก', slug: 'commands/export' },
        ],
      },
      {
        title: 'จัดเลย์เอาต์กระดาษด้วยวิวพอร์ต',
        intro: 'เลย์เอาต์คือแผ่นกระดาษเสมือน — จัดวางมุมมองตามมาตราส่วนของโมเดลหนึ่งหรือหลายมุมบนหน้าเดียว พร้อมพิมพ์',
        steps: [
          'คลิก<strong>แท็บเลย์เอาต์</strong>ด้านล่างของจอเพื่อสลับจากพื้นที่โมเดลไปพื้นที่กระดาษ ปุ่ม <strong>+</strong> บนแถบแท็บใช้เพิ่มเลย์เอาต์ใหม่',
          '<strong>คลิกขวาที่แท็บเลย์เอาต์</strong>เพื่อเปลี่ยนชื่อ ลบ หรือเปิด <strong>Page Manager</strong> — ที่นั่นตั้งขนาดกระดาษ (A4, A3, Letter…) แนวกระดาษ และมาตราส่วนหน่วยเขียนต่อมม.',
          'พิมพ์ <code>viewport-rectangle</code> แล้วคลิกมุมตรงข้ามสองมุมเพื่อวางวิวพอร์ต — หน้าต่างที่แสดงโมเดลบนกระดาษ',
          'คลิกวิวพอร์ตเพื่อเลือก: ลากขอบหรือมุมเพื่อปรับขนาด ลากกริปกลางเพื่อย้าย และเลือกมาตราส่วนที่แน่นอน (เช่น <code>1:50</code>) จากตัวเลือกมาตราส่วนในแถบควบคุม',
          'สกรอลล์ภายในวิวพอร์ตเพื่อซูมมุมมองโมเดล ลากด้วยปุ่มกลางเพื่อแพน เมื่อลงตัวแล้ว <strong>คลิกขวาที่วิวพอร์ต</strong>แล้วเลือก <strong>Lock</strong> เพื่อกันการแก้ไขโดยไม่ตั้งใจ',
          'ต้องการมุมมองเดิมซ้ำอีก? <code>viewport-copy</code> คัดลอกวิวพอร์ตโดยคงมาตราส่วนและมุมมองโมเดลไว้ครบ',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'พิมพ์หรือบันทึกเป็น PDF / PNG',
        intro: 'ตัวจัดการงานพิมพ์แปลงแบบเขียนเป็นภาพพร้อมพิมพ์ พร้อมพรีวิวแบบสด',
        steps: [
          'พิมพ์ <code>print</code> หรือคลิกปุ่มพิมพ์ในแผงไฟล์',
          'เลือกรูปแบบผลลัพธ์: PDF สำหรับเอกสาร, PNG/JPEG/WebP สำหรับรูปภาพ',
          'จะครอปเฉพาะบางบริเวณของแบบเขียน และเปิดโหมดขาวดำเพื่อให้เส้นพิมพ์ออกมาคมชัดก็ได้',
          'คลิก <strong>Print</strong> — ไฟล์จะดาวน์โหลดลงคอมพิวเตอร์ของคุณ',
        ],
        links: [
          { label: 'คำสั่ง Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'สำรองและจัดการแบบเขียนที่บันทึกไว้',
        intro: 'แบบเขียนอยู่ในพื้นที่จัดเก็บของเบราว์เซอร์ — เป็นส่วนตัว ออฟไลน์ และอยู่ในมือคุณทั้งหมด',
        steps: [
          'เปิดแผง<strong>ไฟล์</strong>เพื่อดูแบบเขียนทุกชิ้นที่บันทึกในเบราว์เซอร์นี้ จะกู้คืนหรือลบอันไหนก็ได้',
          'ก่อนล้างข้อมูลเบราว์เซอร์หรือย้ายเครื่อง ให้ส่งออกงานสำคัญ — <code>.json</code> เก็บรายละเอียดครบถ้วน, <code>.dxf</code> เข้ากันได้กว้างที่สุด',
          'หากต้องการรีเซ็ตแอปทั้งหมด พิมพ์ <code>wipestorage</code> แล้วยืนยันด้วย <code>YES</code> — แบบเขียนที่บันทึกในเครื่องทั้งหมดจะถูกลบถาวร',
        ],
        links: [
          { label: 'แผงไฟล์', slug: 'commands/files' },
          { label: 'ส่งออก', slug: 'commands/export' },
          { label: 'ล้างพื้นที่จัดเก็บ', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  ms: {
    title: 'Cara Menggunakan KulmanLab — Panduan Tugas CAD Biasa',
    desc: 'Panduan langkah demi langkah untuk KulmanLab CAD: membuka fail DXF, melukis dengan ukuran tepat, menggunakan lapisan, menambah dimensi, menyediakan fail pemotongan laser, mencetak dan menyandarkan lukisan.',
    heading: 'Panduan',
    subtitle: 'Panduan langkah demi langkah untuk tugas paling biasa dalam KulmanLab CAD.',
    docsLabel: 'Dokumen:',
    outroTitle: 'Mencari perintah tertentu?',
    outroHtml: '<a href="/ms/docs/">Rujukan perintah</a> mendokumentasikan kesemua 50+ perintah, dan <a href="/ms/faq/">Soalan Lazim</a> merangkumi storan, format dan keserasian.',
    guides: [
      {
        title: 'Membuka fail DXF',
        intro: 'KulmanLab membaca DXF — format pertukaran yang boleh dihasilkan oleh setiap alat CAD. Fail dibuka terus dari cakera anda dan tidak pernah meninggalkan peranti.',
        steps: [
          'Buka <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Klik butang <strong>Import</strong> dalam panel Fail, atau taip <code>import</code> dalam terminal.',
          'Pilih fail <code>.dxf</code> (atau <code>.json</code> KulmanLab) daripada komputer anda.',
          'Lukisan dimuatkan ke kanvas dan disimpan secara automatik dalam storan pelayar — masih ada apabila anda kembali.',
        ],
        links: [
          { label: 'Perintah Import', slug: 'commands/import' },
          { label: 'Panel fail', slug: 'commands/files' },
        ],
      },
      {
        title: 'Melukis dengan ukuran tepat',
        intro: 'Setiap perintah lukisan menerima input papan kekunci — panjang dan koordinat tidak perlu diagak-agak.',
        steps: [
          'Mulakan perintah: klik <strong>Line</strong> atau taip <code>line</code> dan tekan <strong>Enter</strong>.',
          'Taip titik mula dalam bentuk <code>x,y</code> (contohnya <code>0,0</code>) dan tekan <strong>Enter</strong>.',
          'Gerakkan kursor ke arah yang dikehendaki, taip panjang (contohnya <code>250</code>) dan tekan <strong>Enter</strong> — segmen dilukis tepat sepanjang itu.',
          'Hidupkan kunci sudut pada bar kawalan untuk mengekalkan segmen pada sudut tepat seperti 30°, 45° atau 90°.',
        ],
        links: [
          { label: 'Perintah Line', slug: 'commands/line' },
          { label: 'Grid & snap', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Menyusun lukisan dengan lapisan',
        intro: 'Lapisan memisahkan garisan binaan, geometri dan anotasi — dan kekal utuh selepas eksport DXF.',
        steps: [
          'Buka panel <strong>Lapisan</strong> pada bar alat dan cipta satu lapisan bagi setiap jenis kandungan (garis luar, dimensi, nota…).',
          'Tetapkan warna, jenis garisan dan ketebalan garisan bagi setiap lapisan supaya entiti mewarisi nilai lalai yang wajar.',
          'Jadikan lapisan semasa dengan <code>layer-make-current</code> sebelum melukis, atau pindahkan entiti terpilih dengan <code>layer-match</code>.',
          'Gunakan <code>layer-isolate</code> untuk menyembunyikan semuanya kecuali lapisan yang sedang diusahakan, dan <code>layer-unfreeze-all</code> untuk mengembalikan semuanya.',
        ],
        links: [
          { label: 'Asingkan lapisan', slug: 'commands/layer-isolate' },
          { label: 'Jenis garisan', slug: 'interface/linetype' },
          { label: 'Ketebalan garisan', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Menambah dimensi',
        intro: 'Dimensi ialah entiti DXF DIMENSION sebenar — berpindah tanpa kehilangan ke mana-mana alat CAD lain.',
        steps: [
          'Taip <code>dim-linear</code> (mendatar/menegak) atau <code>dim-aligned</code> (selari dengan tepi yang diukur) dalam terminal.',
          'Pilih dua titik yang hendak diukur, kemudian letakkan garis dimensi dengan klik ketiga.',
          'Rangkaikan siri ukuran dengan <code>dim-continue</code> — setiap dimensi baharu bermula di tempat yang sebelumnya berakhir.',
          'Untuk bulatan dan lengkok, gunakan <code>dim-radius</code>, <code>dim-diameter</code> atau <code>dim-angular</code>.',
          'Klik dua kali mana-mana label dimensi untuk mengedit teksnya.',
        ],
        links: [
          { label: 'Dimensi linear', slug: 'commands/dim-linear' },
          { label: 'Dimensi bersambung', slug: 'commands/dim-continue' },
          { label: 'Editor teks', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Mengukur jarak, sudut dan luas',
        intro: 'Ukuran pantas tanpa mencipta geometri — keputusan kekal pada skrin sehingga anda menekan Escape.',
        steps: [
          'Taip <code>distance</code> dan pilih dua titik untuk membaca panjang.',
          'Taip <code>angle</code> dan pilih dua garisan (atau tiga titik) untuk membaca sudut antaranya.',
          'Taip <code>area</code>, klik tiga titik atau lebih dan tekan <strong>Enter</strong> — luas yang dilingkungi dan perimeter dipaparkan.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Menyediakan fail untuk pemotongan laser atau CNC',
        intro: 'Aliran kerja yang menjadi tujuan asal KulmanLab dibina: semak fail, kemaskan, hantar ke mesin.',
        steps: [
          'Import DXF dan periksa — <code>fit</code> memuatkan seluruh lukisan ke skrin.',
          'Padamkan apa-apa yang tidak patut dipotong mesin: garisan binaan, nota, dimensi. <code>layer-isolate</code> membantu mencari elemen tersasar.',
          'Kemaskan geometri: cantas hujung terlebih dengan <code>trim</code>, tutup celahan dan semak ukuran dengan <code>distance</code>.',
          'Eksport sebagai DXF dan muatkan dalam perisian mesin anda. Laluan pemotongan kekal tepat seperti yang dilukis — KulmanLab menulis DXF AC1032 tulen.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Muat paparan', slug: 'commands/fit' },
          { label: 'Eksport', slug: 'commands/export' },
        ],
      },
      {
        title: 'Menyediakan layout kertas dengan viewport',
        intro: 'Layout ialah helaian ruang kertas — susun satu atau lebih pandangan berskala model anda pada satu halaman, sedia untuk dicetak.',
        steps: [
          'Klik <strong>tab layout</strong> di bahagian bawah skrin untuk beralih daripada ruang model ke ruang kertas. Butang <strong>+</strong> pada bar tab menambah layout baharu.',
          '<strong>Klik kanan tab layout</strong> untuk menamakannya semula, memadamkannya, atau membuka <strong>Page Manager</strong> — di situ anda menetapkan format kertas (A4, A3, Letter…), orientasi dan skala unit lukisan per mm.',
          'Taip <code>viewport-rectangle</code> dan klik dua bucu bertentangan untuk meletakkan viewport — tetingkap yang memaparkan model anda di atas kertas.',
          'Klik viewport untuk memilihnya: seret tepi atau bucunya untuk mengubah saiz, seret grip tengah untuk mengalihkannya, dan pilih skala tepat (cth. <code>1:50</code>) daripada pemilih skala pada bar kawalan.',
          'Tatal dalam viewport untuk mengezum pandangan model, seret dengan butang tengah untuk menganjaknya. Apabila sudah kena, <strong>klik kanan viewport</strong> dan pilih <strong>Lock</strong> untuk melindunginya daripada perubahan tidak sengaja.',
          'Perlukan pandangan yang sama dua kali? <code>viewport-copy</code> menduplikasi viewport dengan skala dan pandangan model terpelihara.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Mencetak atau menyimpan sebagai PDF / PNG',
        intro: 'Pengurus cetakan menukar lukisan anda kepada imej sedia cetak, dengan pratonton langsung.',
        steps: [
          'Taip <code>print</code> atau klik butang Cetak dalam panel Fail.',
          'Pilih format output: PDF untuk dokumen, PNG/JPEG/WebP untuk imej.',
          'Secara pilihan, pangkas ke satu kawasan lukisan dan hidupkan output monokrom untuk cetakan garisan yang bersih.',
          'Klik <strong>Print</strong> — fail dimuat turun ke komputer anda.',
        ],
        links: [
          { label: 'Perintah Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Menyandarkan dan mengurus lukisan tersimpan',
        intro: 'Lukisan tinggal dalam storan pelayar anda — peribadi, luar talian dan sepenuhnya milik anda.',
        steps: [
          'Buka panel <strong>Fail</strong> untuk melihat setiap lukisan yang disimpan dalam pelayar ini; pulihkan atau padamkan mana-mana.',
          'Sebelum mengosongkan data pelayar atau menukar mesin, eksport yang penting — <code>.json</code> mengekalkan ketepatan penuh, <code>.dxf</code> memaksimumkan keserasian.',
          'Untuk menetapkan semula aplikasi sepenuhnya, taip <code>wipestorage</code> dan sahkan dengan <code>YES</code> — semua lukisan tersimpan setempat dipadamkan secara kekal.',
        ],
        links: [
          { label: 'Panel fail', slug: 'commands/files' },
          { label: 'Eksport', slug: 'commands/export' },
          { label: 'Kosongkan storan', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  bn: {
    title: 'KulmanLab যেভাবে ব্যবহার করবেন — সাধারণ CAD কাজের গাইড',
    desc: 'KulmanLab CAD-এর ধাপে ধাপে গাইড: DXF ফাইল খোলা, নিখুঁত মাপে আঁকা, লেয়ার ব্যবহার, ডাইমেনশন যোগ, লেজার কাটিং ফাইল তৈরি, প্রিন্ট এবং অঙ্কনের ব্যাকআপ।',
    heading: 'গাইড',
    subtitle: 'KulmanLab CAD-এর সবচেয়ে সাধারণ কাজগুলোর ধাপে ধাপে গাইড।',
    docsLabel: 'ডকুমেন্টেশন:',
    outroTitle: 'নির্দিষ্ট কোনো কমান্ড খুঁজছেন?',
    outroHtml: '<a href="/bn/docs/">কমান্ড রেফারেন্সে</a> ৫০+ কমান্ডের সবগুলো নথিভুক্ত আছে, আর <a href="/bn/faq/">সাধারণ প্রশ্নাবলি</a> স্টোরেজ, ফরম্যাট ও সামঞ্জস্য নিয়ে আলোচনা করে।',
    guides: [
      {
        title: 'DXF ফাইল খোলা',
        intro: 'KulmanLab DXF পড়ে — সেই বিনিময় ফরম্যাট যা প্রতিটি CAD টুল তৈরি করতে পারে। ফাইল সরাসরি আপনার ডিস্ক থেকে খোলে এবং কখনো ডিভাইস ছেড়ে যায় না।',
        steps: [
          '<a href="https://app.kulmanlab.com">app.kulmanlab.com</a> খুলুন।',
          'ফাইল প্যানেলে <strong>Import</strong> বোতামে ক্লিক করুন, বা টার্মিনালে <code>import</code> লিখুন।',
          'কম্পিউটার থেকে একটি <code>.dxf</code> (বা KulmanLab-এর <code>.json</code>) ফাইল বেছে নিন।',
          'অঙ্কনটি ক্যানভাসে লোড হয় এবং ব্রাউজার স্টোরেজে স্বয়ংক্রিয়ভাবে সংরক্ষিত হয় — পরের বারও সেখানেই থাকবে।',
        ],
        links: [
          { label: 'Import কমান্ড', slug: 'commands/import' },
          { label: 'ফাইল প্যানেল', slug: 'commands/files' },
        ],
      },
      {
        title: 'নিখুঁত মাপে আঁকা',
        intro: 'প্রতিটি অঙ্কন কমান্ড কীবোর্ড ইনপুট নেয় — দৈর্ঘ্য বা স্থানাঙ্ক কখনো চোখের আন্দাজে বসাতে হয় না।',
        steps: [
          'কমান্ড শুরু করুন — <strong>Line</strong>-এ ক্লিক করুন বা <code>line</code> লিখে <strong>Enter</strong> চাপুন।',
          'শুরুর বিন্দু <code>x,y</code> আকারে লিখুন (যেমন <code>0,0</code>) এবং <strong>Enter</strong> চাপুন।',
          'কার্সর কাঙ্ক্ষিত দিকে নিন, একটি দৈর্ঘ্য লিখুন (যেমন <code>250</code>) এবং <strong>Enter</strong> চাপুন — রেখাংশ ঠিক ততটাই লম্বা হবে।',
          'রেখাংশগুলো ৩০°, ৪৫° বা ৯০°-এর মতো নিখুঁত কোণে রাখতে কন্ট্রোল বারে অ্যাঙ্গেল লক চালু করুন।',
        ],
        links: [
          { label: 'Line কমান্ড', slug: 'commands/line' },
          { label: 'গ্রিড ও স্ন্যাপ', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'লেয়ার দিয়ে অঙ্কন গোছানো',
        intro: 'লেয়ার নির্মাণ রেখা, জ্যামিতি ও টীকা আলাদা রাখে — এবং DXF রপ্তানির পরও অক্ষত থাকে।',
        steps: [
          'টুলবারে <strong>লেয়ার</strong> প্যানেল খুলুন এবং প্রতিটি ধরনের বিষয়বস্তুর জন্য একটি লেয়ার তৈরি করুন (আউটলাইন, ডাইমেনশন, নোট…)।',
          'প্রতিটি লেয়ারে রং, লাইনটাইপ ও লাইনওয়েট নির্ধারণ করুন যাতে বস্তুগুলো যুক্তিসঙ্গত ডিফল্ট পায়।',
          'আঁকার আগে <code>layer-make-current</code> দিয়ে একটি লেয়ারকে বর্তমান করুন, বা নির্বাচিত বস্তু <code>layer-match</code> দিয়ে সরান।',
          'যে লেয়ারে কাজ করছেন সেটি ছাড়া সব লুকাতে <code>layer-isolate</code> ব্যবহার করুন, আর সব ফিরিয়ে আনতে <code>layer-unfreeze-all</code>।',
        ],
        links: [
          { label: 'লেয়ার আইসোলেট', slug: 'commands/layer-isolate' },
          { label: 'লাইনটাইপ', slug: 'interface/linetype' },
          { label: 'লাইনওয়েট', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'ডাইমেনশন যোগ করা',
        intro: 'ডাইমেনশনগুলো আসল DXF DIMENSION সত্তা — অন্য যেকোনো CAD টুলে অক্ষত অবস্থায় যায়।',
        steps: [
          'টার্মিনালে <code>dim-linear</code> (অনুভূমিক/উল্লম্ব) বা <code>dim-aligned</code> (মাপা প্রান্তের সমান্তরাল) লিখুন।',
          'যে দুটি বিন্দু মাপতে চান সেগুলো বেছে নিন, তারপর তৃতীয় ক্লিকে ডাইমেনশন রেখা বসান।',
          '<code>dim-continue</code> দিয়ে মাপের ধারা তৈরি করুন — প্রতিটি নতুন ডাইমেনশন আগেরটির শেষ থেকে শুরু হয়।',
          'বৃত্ত ও চাপের জন্য <code>dim-radius</code>, <code>dim-diameter</code> বা <code>dim-angular</code> ব্যবহার করুন।',
          'যেকোনো ডাইমেনশন লেবেলে ডাবল-ক্লিক করে তার লেখা সম্পাদনা করুন।',
        ],
        links: [
          { label: 'রৈখিক ডাইমেনশন', slug: 'commands/dim-linear' },
          { label: 'ধারাবাহিক ডাইমেনশন', slug: 'commands/dim-continue' },
          { label: 'টেক্সট এডিটর', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'দূরত্ব, কোণ ও ক্ষেত্রফল মাপা',
        intro: 'কোনো জ্যামিতি তৈরি না করেই দ্রুত মাপজোখ — Escape চাপা পর্যন্ত ফলাফল পর্দায় থাকে।',
        steps: [
          '<code>distance</code> লিখুন এবং দৈর্ঘ্য জানতে দুটি বিন্দু বেছে নিন।',
          '<code>angle</code> লিখুন এবং মাঝের কোণ জানতে দুটি রেখা (বা তিনটি বিন্দু) বেছে নিন।',
          '<code>area</code> লিখুন, তিন বা ততোধিক বিন্দুতে ক্লিক করে <strong>Enter</strong> চাপুন — ঘেরা ক্ষেত্রফল ও পরিসীমা দেখানো হবে।',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'লেজার কাটিং বা CNC-এর জন্য ফাইল প্রস্তুত করা',
        intro: 'যে ওয়ার্কফ্লোর জন্য KulmanLab মূলত তৈরি: ফাইল যাচাই করুন, পরিষ্কার করুন, মেশিনে পাঠান।',
        steps: [
          'DXF আমদানি করে দেখে নিন — <code>fit</code> পুরো অঙ্কনটিকে পর্দায় আনে।',
          'মেশিনের যা কাটা উচিত নয় তা মুছুন: নির্মাণ রেখা, নোট, ডাইমেনশন। <code>layer-isolate</code> ছাড়া-ছাড়া উপাদান খুঁজতে সাহায্য করে।',
          'জ্যামিতি গুছিয়ে নিন: <code>trim</code> দিয়ে বেরিয়ে থাকা প্রান্ত ছাঁটুন, ফাঁক বন্ধ করুন, <code>distance</code> দিয়ে মাপ যাচাই করুন।',
          'DXF হিসেবে রপ্তানি করে মেশিনের সফটওয়্যারে লোড করুন। কাটার পথ ঠিক আঁকার মতোই থাকে — KulmanLab বিশুদ্ধ AC1032 DXF লেখে।',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'ভিউ ফিট', slug: 'commands/fit' },
          { label: 'রপ্তানি', slug: 'commands/export' },
        ],
      },
      {
        title: 'ভিউপোর্টসহ কাগজের লেআউট সাজানো',
        intro: 'লেআউট হলো কাগজ-স্পেসের পাতা — মডেলের এক বা একাধিক স্কেল করা দৃশ্য এক পৃষ্ঠায় সাজান, প্রিন্টের জন্য প্রস্তুত।',
        steps: [
          'মডেল স্পেস থেকে কাগজ স্পেসে যেতে পর্দার নিচের <strong>লেআউট ট্যাবে</strong> ক্লিক করুন। ট্যাব বারের <strong>+</strong> বোতাম নতুন লেআউট যোগ করে।',
          'নাম বদলাতে, মুছতে বা <strong>Page Manager</strong> খুলতে <strong>লেআউট ট্যাবে ডান-ক্লিক করুন</strong> — সেখানে কাগজের মাপ (A4, A3, Letter…), অভিমুখ এবং প্রতি মিমি অঙ্কন এককের স্কেল ঠিক করবেন।',
          '<code>viewport-rectangle</code> লিখে দুটি বিপরীত কোণে ক্লিক করে ভিউপোর্ট বসান — কাগজের ওপর আপনার মডেল দেখানোর জানালা।',
          'নির্বাচন করতে ভিউপোর্টে ক্লিক করুন: আকার বদলাতে ধার বা কোণ টানুন, সরাতে মাঝের গ্রিপ টানুন, আর কন্ট্রোল বারের স্কেল নির্বাচক থেকে নিখুঁত স্কেল (যেমন <code>1:50</code>) বেছে নিন।',
          'মডেল দৃশ্য জুম করতে ভিউপোর্টের ভেতরে স্ক্রল করুন, প্যান করতে মাঝের বোতাম চেপে টানুন। সব ঠিক হলে <strong>ভিউপোর্টে ডান-ক্লিক</strong> করে <strong>Lock</strong> বেছে নিন — অনিচ্ছাকৃত বদল থেকে রক্ষা পাবে।',
          'একই দৃশ্য দুবার দরকার? <code>viewport-copy</code> স্কেল ও মডেল দৃশ্য বজায় রেখে ভিউপোর্টের নকল বানায়।',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'প্রিন্ট বা PDF / PNG হিসেবে সংরক্ষণ',
        intro: 'প্রিন্ট ম্যানেজার লাইভ প্রিভিউসহ আপনার অঙ্কনকে কাগজে ছাপার উপযোগী ছবিতে রূপ দেয়।',
        steps: [
          '<code>print</code> লিখুন বা ফাইল প্যানেলের প্রিন্ট বোতামে ক্লিক করুন।',
          'আউটপুট ফরম্যাট বেছে নিন: নথির জন্য PDF, ছবির জন্য PNG/JPEG/WebP।',
          'চাইলে অঙ্কনের নির্দিষ্ট অংশে ক্রপ করুন এবং পরিচ্ছন্ন রেখার ছাপার জন্য মনোক্রোম আউটপুট চালু করুন।',
          '<strong>Print</strong>-এ ক্লিক করুন — ফাইলটি আপনার কম্পিউটারে ডাউনলোড হবে।',
        ],
        links: [
          { label: 'Print কমান্ড', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'সংরক্ষিত অঙ্কনের ব্যাকআপ ও ব্যবস্থাপনা',
        intro: 'অঙ্কনগুলো আপনার ব্রাউজার স্টোরেজে থাকে — ব্যক্তিগত, অফলাইন এবং সম্পূর্ণ আপনার নিয়ন্ত্রণে।',
        steps: [
          'এই ব্রাউজারে সংরক্ষিত সব অঙ্কন দেখতে <strong>ফাইল</strong> প্যানেল খুলুন; যেকোনোটি পুনরুদ্ধার বা মুছে ফেলুন।',
          'ব্রাউজার ডেটা মোছা বা কম্পিউটার বদলের আগে গুরুত্বপূর্ণগুলো রপ্তানি করুন — <code>.json</code> পূর্ণ বিশ্বস্ততা রাখে, <code>.dxf</code> সর্বোচ্চ সামঞ্জস্য দেয়।',
          'অ্যাপ সম্পূর্ণ রিসেট করতে <code>wipestorage</code> লিখে <code>YES</code> দিয়ে নিশ্চিত করুন — স্থানীয়ভাবে সংরক্ষিত সব অঙ্কন স্থায়ীভাবে মুছে যায়।',
        ],
        links: [
          { label: 'ফাইল প্যানেল', slug: 'commands/files' },
          { label: 'রপ্তানি', slug: 'commands/export' },
          { label: 'স্টোরেজ মোছা', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  sw: {
    title: 'Jinsi ya Kutumia KulmanLab — Miongozo ya Kazi za Kawaida za CAD',
    desc: 'Miongozo ya hatua kwa hatua ya KulmanLab CAD: kufungua faili za DXF, kuchora kwa vipimo kamili, kutumia tabaka, kuongeza vipimo, kuandaa faili za kukata kwa leza, kuchapisha na kuhifadhi nakala za michoro.',
    heading: 'Miongozo',
    subtitle: 'Miongozo ya hatua kwa hatua ya kazi za kawaida zaidi katika KulmanLab CAD.',
    docsLabel: 'Nyaraka:',
    outroTitle: 'Unatafuta amri mahususi?',
    outroHtml: '<a href="/sw/docs/">Marejeo ya amri</a> yanaandika amri zote 50+, na <a href="/sw/faq/">Maswali</a> yanashughulikia uhifadhi, miundo na ulinganifu.',
    guides: [
      {
        title: 'Kufungua faili ya DXF',
        intro: 'KulmanLab husoma DXF — muundo wa kubadilishana ambao kila zana ya CAD inaweza kuutoa. Faili hufunguliwa moja kwa moja kutoka kwenye diski yako na kamwe haziondoki kwenye kifaa chako.',
        steps: [
          'Fungua <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Bofya kitufe cha <strong>Import</strong> kwenye paneli ya Faili, au andika <code>import</code> kwenye terminali.',
          'Chagua faili ya <code>.dxf</code> (au <code>.json</code> ya KulmanLab) kutoka kwenye kompyuta yako.',
          'Mchoro hupakiwa kwenye turubai na kuhifadhiwa kiotomatiki kwenye hifadhi ya kivinjari — utaupata tena wakati ujao.',
        ],
        links: [
          { label: 'Amri ya Import', slug: 'commands/import' },
          { label: 'Paneli ya faili', slug: 'commands/files' },
        ],
      },
      {
        title: 'Kuchora kwa vipimo kamili',
        intro: 'Kila amri ya kuchora inapokea maandishi ya kibodi — hutawahi kukisia urefu au kuratibu kwa macho.',
        steps: [
          'Anzisha amri: bofya <strong>Line</strong> au andika <code>line</code> kisha ubonyeze <strong>Enter</strong>.',
          'Andika nukta ya kuanzia kwa umbo la <code>x,y</code> (mfano <code>0,0</code>) kisha ubonyeze <strong>Enter</strong>.',
          'Sogeza kishale upande unaotaka, andika urefu (mfano <code>250</code>) kisha ubonyeze <strong>Enter</strong> — sehemu inachorwa kwa urefu huo kamili.',
          'Washa kufuli ya pembe kwenye upau wa udhibiti ili kuweka sehemu kwenye pembe kamili kama 30°, 45° au 90°.',
        ],
        links: [
          { label: 'Amri ya Line', slug: 'commands/line' },
          { label: 'Gridi na mnaso', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Kupanga mchoro kwa tabaka',
        intro: 'Tabaka huweka mistari ya ujenzi, jiometri na maelezo tofauti — na hubaki salama baada ya kuhamisha DXF.',
        steps: [
          'Fungua paneli ya <strong>Tabaka</strong> kwenye upau wa zana na uunde tabaka kwa kila aina ya maudhui (mstari wa nje, vipimo, maelezo…).',
          'Weka rangi, aina ya mstari na unene wa mstari kwa kila tabaka ili vitu virithi chaguo-msingi zenye maana.',
          'Fanya tabaka kuwa la sasa kwa <code>layer-make-current</code> kabla ya kuchora, au hamisha vitu vilivyochaguliwa kwa <code>layer-match</code>.',
          'Tumia <code>layer-isolate</code> kuficha kila kitu isipokuwa tabaka unalofanyia kazi, na <code>layer-unfreeze-all</code> kurudisha vyote.',
        ],
        links: [
          { label: 'Tenga tabaka', slug: 'commands/layer-isolate' },
          { label: 'Aina ya mstari', slug: 'interface/linetype' },
          { label: 'Unene wa mstari', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Kuongeza vipimo',
        intro: 'Vipimo ni vitu halisi vya DXF DIMENSION — huenda bila hasara kwenye zana nyingine yoyote ya CAD.',
        steps: [
          'Andika <code>dim-linear</code> (mlalo/wima) au <code>dim-aligned</code> (sambamba na ukingo unaopimwa) kwenye terminali.',
          'Chagua nukta mbili unazotaka kupima, kisha weka mstari wa kipimo kwa kubofya mara ya tatu.',
          'Unganisha mfululizo wa vipimo kwa <code>dim-continue</code> — kila kipimo kipya huanzia pale kilichotangulia kilipoishia.',
          'Kwa duara na tao, tumia <code>dim-radius</code>, <code>dim-diameter</code> au <code>dim-angular</code>.',
          'Bofya mara mbili lebo yoyote ya kipimo ili kuhariri maandishi yake.',
        ],
        links: [
          { label: 'Kipimo cha mstari', slug: 'commands/dim-linear' },
          { label: 'Kipimo endelezi', slug: 'commands/dim-continue' },
          { label: 'Kihariri cha maandishi', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Kupima umbali, pembe na eneo',
        intro: 'Vipimo vya haraka bila kuunda jiometri yoyote — matokeo hubaki kwenye skrini hadi ubonyeze Escape.',
        steps: [
          'Andika <code>distance</code> na uchague nukta mbili kusoma urefu.',
          'Andika <code>angle</code> na uchague mistari miwili (au nukta tatu) kusoma pembe kati yao.',
          'Andika <code>area</code>, bofya nukta tatu au zaidi kisha ubonyeze <strong>Enter</strong> — eneo lililozungukwa na mzunguko huonyeshwa.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Kuandaa faili kwa ukataji wa leza au CNC',
        intro: 'Mtiririko wa kazi ambao KulmanLab ilijengwa kwa ajili yake: kagua faili, isafishe, ipeleke kwenye mashine.',
        steps: [
          'Ingiza DXF na uikague — <code>fit</code> huleta mchoro mzima kwenye skrini.',
          'Futa chochote ambacho mashine haipaswi kukata: mistari ya ujenzi, maelezo, vipimo. <code>layer-isolate</code> husaidia kupata vipande vilivyopotea.',
          'Safisha jiometri: kata ncha zilizozidi kwa <code>trim</code>, funga mianya na uhakiki vipimo kwa <code>distance</code>.',
          'Hamisha kama DXF na uipakie kwenye programu ya mashine yako. Njia za kukata hubaki kama zilivyochorwa — KulmanLab huandika DXF safi ya AC1032.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Panga mwonekano', slug: 'commands/fit' },
          { label: 'Hamisha', slug: 'commands/export' },
        ],
      },
      {
        title: 'Kuandaa mpangilio wa karatasi wenye viwambo',
        intro: 'Mipangilio ni kurasa za nafasi ya karatasi — panga mwonekano mmoja au zaidi wa modeli yako kwa vipimo kwenye ukurasa mmoja, tayari kuchapishwa.',
        steps: [
          'Bofya <strong>kichupo cha mpangilio</strong> chini ya skrini kubadilisha kutoka nafasi ya modeli hadi nafasi ya karatasi. Kitufe cha <strong>+</strong> kwenye upau wa vichupo huongeza mpangilio mpya.',
          '<strong>Bofya-kulia kichupo cha mpangilio</strong> ili kukibadilisha jina, kukifuta, au kufungua <strong>Page Manager</strong> — hapo unaweka ukubwa wa karatasi (A4, A3, Letter…), mwelekeo na uwiano wa vizio vya mchoro kwa mm.',
          'Andika <code>viewport-rectangle</code> na ubofye pembe mbili zinazokabiliana kuweka kiwambo — dirisha linaloonyesha modeli yako kwenye karatasi.',
          'Bofya kiwambo ili kukichagua: buruta kingo au pembe zake kubadilisha ukubwa, buruta mshiko wa katikati kukisogeza, na uchague uwiano kamili (mf. <code>1:50</code>) kutoka kwa kichaguzi cha uwiano kwenye upau wa udhibiti.',
          'Sogeza gurudumu ndani ya kiwambo kukuza mwonekano wa modeli, buruta kwa kitufe cha kati kuusogeza. Kila kitu kikiwa sawa, <strong>bofya-kulia kiwambo</strong> na uchague <strong>Lock</strong> kukilinda dhidi ya mabadiliko ya bahati mbaya.',
          'Unahitaji mwonekano uleule mara mbili? <code>viewport-copy</code> hunakili kiwambo huku uwiano na mwonekano wa modeli vikibaki salama.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Kuchapisha au kuhifadhi kama PDF / PNG',
        intro: 'Msimamizi wa uchapishaji hubadilisha mchoro wako kuwa picha tayari kwa karatasi, na onyesho la moja kwa moja.',
        steps: [
          'Andika <code>print</code> au bofya kitufe cha Chapisha kwenye paneli ya Faili.',
          'Chagua muundo wa matokeo: PDF kwa nyaraka, PNG/JPEG/WebP kwa picha.',
          'Kwa hiari, kata sehemu ya mchoro na uwashe matokeo ya rangi moja kwa michapo safi ya mistari.',
          'Bofya <strong>Print</strong> — faili hupakuliwa kwenye kompyuta yako.',
        ],
        links: [
          { label: 'Amri ya Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Kuhifadhi nakala na kusimamia michoro iliyohifadhiwa',
        intro: 'Michoro huishi kwenye hifadhi ya kivinjari chako — ya faragha, nje ya mtandao, na chini ya udhibiti wako kamili.',
        steps: [
          'Fungua paneli ya <strong>Faili</strong> kuona kila mchoro uliohifadhiwa kwenye kivinjari hiki; rejesha au futa wowote.',
          'Kabla ya kufuta data ya kivinjari au kubadilisha kompyuta, hamisha vilivyo muhimu — <code>.json</code> huhifadhi undani wote, <code>.dxf</code> huongeza ulinganifu.',
          'Kuweka upya programu kabisa, andika <code>wipestorage</code> na uthibitishe kwa <code>YES</code> — michoro yote iliyohifadhiwa ndani hufutwa kabisa.',
        ],
        links: [
          { label: 'Paneli ya faili', slug: 'commands/files' },
          { label: 'Hamisha', slug: 'commands/export' },
          { label: 'Futa hifadhi', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  ur: {
    title: 'KulmanLab کیسے استعمال کریں — عام CAD کاموں کی رہنما ہدایات',
    desc: 'KulmanLab CAD کی مرحلہ وار رہنما ہدایات: DXF فائلیں کھولنا، درست پیمائشوں سے ڈرائنگ، لیئرز کا استعمال، ڈائمینشن لگانا، لیزر کٹنگ فائلیں تیار کرنا، پرنٹ اور ڈرائنگز کا بیک اپ۔',
    heading: 'رہنما ہدایات',
    subtitle: 'KulmanLab CAD کے عام ترین کاموں کی مرحلہ وار رہنما ہدایات۔',
    docsLabel: 'دستاویزات:',
    outroTitle: 'کوئی خاص کمانڈ تلاش کر رہے ہیں؟',
    outroHtml: '<a href="/ur/docs/">کمانڈ ریفرنس</a> میں 50 سے زائد تمام کمانڈز درج ہیں، اور <a href="/ur/faq/">عمومی سوالات</a> اسٹوریج، فارمیٹس اور مطابقت کا احاطہ کرتے ہیں۔',
    guides: [
      {
        title: 'DXF فائل کھولنا',
        intro: 'KulmanLab وہ DXF پڑھتا ہے جو ہر CAD ٹول بنا سکتا ہے۔ فائلیں سیدھی آپ کی ڈسک سے کھلتی ہیں اور کبھی آپ کے آلے سے باہر نہیں جاتیں۔',
        steps: [
          '<a href="https://app.kulmanlab.com">app.kulmanlab.com</a> کھولیں۔',
          'فائل پینل میں <strong>Import</strong> بٹن دبائیں، یا ٹرمینل میں <code>import</code> لکھیں۔',
          'اپنے کمپیوٹر سے کوئی <code>.dxf</code> (یا KulmanLab کی <code>.json</code>) فائل منتخب کریں۔',
          'ڈرائنگ کینوس پر لوڈ ہو جاتی ہے اور براؤزر اسٹوریج میں خود بخود محفوظ ہو جاتی ہے — اگلی بار بھی وہیں ملے گی۔',
        ],
        links: [
          { label: 'Import کمانڈ', slug: 'commands/import' },
          { label: 'فائل پینل', slug: 'commands/files' },
        ],
      },
      {
        title: 'درست پیمائشوں سے ڈرائنگ',
        intro: 'ہر ڈرائنگ کمانڈ کی بورڈ سے ان پٹ لیتی ہے — لمبائی یا کوآرڈینیٹ کبھی اندازے سے نہیں رکھنے پڑتے۔',
        steps: [
          'کمانڈ شروع کریں: <strong>Line</strong> پر کلک کریں یا <code>line</code> لکھ کر <strong>Enter</strong> دبائیں۔',
          'شروعاتی نقطہ <code>x,y</code> کی صورت میں لکھیں (مثلاً <code>0,0</code>) اور <strong>Enter</strong> دبائیں۔',
          'کرسر کو مطلوبہ سمت لے جائیں، لمبائی لکھیں (مثلاً <code>250</code>) اور <strong>Enter</strong> دبائیں — لکیر بالکل اتنی ہی لمبی بنے گی۔',
          'لکیروں کو 30°، 45° یا 90° جیسے درست زاویوں پر رکھنے کے لیے کنٹرول بار میں اینگل لاک آن کریں۔',
        ],
        links: [
          { label: 'Line کمانڈ', slug: 'commands/line' },
          { label: 'گرڈ اور اسنیپ', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'لیئرز سے ڈرائنگ منظم کرنا',
        intro: 'لیئرز تعمیری لکیروں، جیومیٹری اور تشریحات کو الگ رکھتی ہیں — اور DXF ایکسپورٹ میں محفوظ رہتی ہیں۔',
        steps: [
          'ٹول بار میں <strong>لیئرز</strong> پینل کھولیں اور ہر قسم کے مواد کے لیے ایک لیئر بنائیں (خاکہ، ڈائمینشن، نوٹس…)۔',
          'ہر لیئر کے لیے رنگ، لائن ٹائپ اور لائن ویٹ مقرر کریں تاکہ اشیاء مناسب ڈیفالٹ اپنائیں۔',
          'ڈرائنگ سے پہلے <code>layer-make-current</code> سے کسی لیئر کو موجودہ بنائیں، یا منتخب اشیاء <code>layer-match</code> سے منتقل کریں۔',
          '<code>layer-isolate</code> زیرِ کار لیئر کے سوا سب چھپا دیتا ہے، اور <code>layer-unfreeze-all</code> سب واپس لے آتا ہے۔',
        ],
        links: [
          { label: 'لیئر الگ کریں', slug: 'commands/layer-isolate' },
          { label: 'لائن ٹائپ', slug: 'interface/linetype' },
          { label: 'لائن ویٹ', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'ڈائمینشن لگانا',
        intro: 'ڈائمینشن اصل DXF DIMENSION اشیاء ہیں — کسی بھی دوسرے CAD ٹول میں بغیر نقصان جاتی ہیں۔',
        steps: [
          'ٹرمینل میں <code>dim-linear</code> (افقی/عمودی) یا <code>dim-aligned</code> (ماپی گئی کور کے متوازی) لکھیں۔',
          'ماپنے کے دو نقطے منتخب کریں، پھر تیسرے کلک سے ڈائمینشن لائن رکھیں۔',
          '<code>dim-continue</code> سے پیمائشوں کا سلسلہ بنائیں — ہر نئی ڈائمینشن وہیں سے شروع ہوتی ہے جہاں پچھلی ختم ہوئی۔',
          'دائروں اور قوسوں کے لیے <code>dim-radius</code>، <code>dim-diameter</code> یا <code>dim-angular</code> استعمال کریں۔',
          'کسی بھی ڈائمینشن لیبل پر ڈبل کلک کر کے اس کا متن بدلیں۔',
        ],
        links: [
          { label: 'لکیری ڈائمینشن', slug: 'commands/dim-linear' },
          { label: 'مسلسل ڈائمینشن', slug: 'commands/dim-continue' },
          { label: 'ٹیکسٹ ایڈیٹر', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'فاصلہ، زاویہ اور رقبہ ماپنا',
        intro: 'کوئی جیومیٹری بنائے بغیر فوری پیمائش — نتائج Escape دبانے تک اسکرین پر رہتے ہیں۔',
        steps: [
          '<code>distance</code> لکھیں اور لمبائی جاننے کے لیے دو نقطے منتخب کریں۔',
          '<code>angle</code> لکھیں اور درمیانی زاویہ جاننے کے لیے دو لکیریں (یا تین نقطے) منتخب کریں۔',
          '<code>area</code> لکھیں، تین یا زیادہ نقطوں پر کلک کر کے <strong>Enter</strong> دبائیں — گھرا ہوا رقبہ اور احاطہ دکھایا جائے گا۔',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'لیزر کٹنگ یا CNC کے لیے فائل تیار کرنا',
        intro: 'وہی ورک فلو جس کے لیے KulmanLab اصلاً بنا تھا: فائل جانچیں، صاف کریں، مشین کو بھیجیں۔',
        steps: [
          'DXF درآمد کر کے جائزہ لیں — <code>fit</code> پوری ڈرائنگ کو اسکرین میں سمو دیتا ہے۔',
          'جو مشین کو نہیں کاٹنا وہ حذف کریں: تعمیری لکیریں، نوٹس، ڈائمینشن۔ <code>layer-isolate</code> بھٹکے عناصر ڈھونڈنے میں مدد دیتا ہے۔',
          'جیومیٹری سنواریں: باہر نکلے سرے <code>trim</code> سے تراشیں، خلا بند کریں اور <code>distance</code> سے پیمائشیں جانچیں۔',
          'DXF کے طور پر برآمد کر کے مشین کے سافٹ ویئر میں لوڈ کریں۔ کٹ پاتھ بالکل ویسے ہی رہتے ہیں — KulmanLab خالص AC1032 DXF لکھتا ہے۔',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'منظر فٹ کریں', slug: 'commands/fit' },
          { label: 'برآمد', slug: 'commands/export' },
        ],
      },
      {
        title: 'ویو پورٹس کے ساتھ کاغذی لے آؤٹ بنانا',
        intro: 'لے آؤٹ کاغذی اسپیس کی شیٹیں ہیں — ماڈل کے ایک یا زیادہ اسکیل شدہ منظر ایک صفحے پر سجائیں، پرنٹ کے لیے تیار۔',
        steps: [
          'ماڈل اسپیس سے کاغذی اسپیس میں جانے کے لیے اسکرین کے نیچے <strong>لے آؤٹ ٹیب</strong> پر کلک کریں۔ ٹیب بار کا <strong>+</strong> بٹن نیا لے آؤٹ جوڑتا ہے۔',
          'نام بدلنے، حذف کرنے یا <strong>Page Manager</strong> کھولنے کے لیے <strong>لے آؤٹ ٹیب پر دایاں کلک کریں</strong> — وہاں کاغذ کا سائز (A4، A3، Letter…)، رخ اور فی ملی میٹر ڈرائنگ اکائیوں کا اسکیل طے ہوتا ہے۔',
          '<code>viewport-rectangle</code> لکھیں اور دو مقابل کونوں پر کلک کر کے ویو پورٹ رکھیں — ایک کھڑکی جو کاغذ پر آپ کا ماڈل دکھاتی ہے۔',
          'منتخب کرنے کے لیے ویو پورٹ پر کلک کریں: سائز بدلنے کو کنارے یا کونے گھسیٹیں، ہلانے کو درمیانی گرپ، اور کنٹرول بار کے اسکیل منتخب کنندہ سے درست اسکیل (مثلاً <code>1:50</code>) چنیں۔',
          'ماڈل منظر زوم کرنے کے لیے ویو پورٹ کے اندر اسکرول کریں، پین کے لیے درمیانے بٹن سے گھسیٹیں۔ سب ٹھیک ہو جائے تو <strong>ویو پورٹ پر دایاں کلک</strong> کر کے <strong>Lock</strong> منتخب کریں — غیر ارادی تبدیلیوں سے حفاظت۔',
          'وہی منظر دو بار چاہیے؟ <code>viewport-copy</code> اسکیل اور ماڈل منظر برقرار رکھتے ہوئے ویو پورٹ کی نقل بناتا ہے۔',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'پرنٹ یا PDF / PNG کے طور پر محفوظ کرنا',
        intro: 'پرنٹ مینیجر لائیو پیش منظر کے ساتھ آپ کی ڈرائنگ کو کاغذ کے لیے تیار تصویر میں ڈھالتا ہے۔',
        steps: [
          '<code>print</code> لکھیں یا فائل پینل میں پرنٹ بٹن دبائیں۔',
          'آؤٹ پٹ فارمیٹ چنیں: دستاویزات کے لیے PDF، تصویروں کے لیے PNG/JPEG/WebP۔',
          'چاہیں تو ڈرائنگ کے کسی حصے تک کراپ کریں اور صاف لکیری پرنٹ کے لیے یک رنگی آؤٹ پٹ آن کریں۔',
          '<strong>Print</strong> دبائیں — فائل آپ کے کمپیوٹر میں ڈاؤن لوڈ ہو جائے گی۔',
        ],
        links: [
          { label: 'Print کمانڈ', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'محفوظ ڈرائنگز کا بیک اپ اور انتظام',
        intro: 'ڈرائنگز آپ کے براؤزر اسٹوریج میں رہتی ہیں — نجی، آف لائن اور مکمل طور پر آپ کے اختیار میں۔',
        steps: [
          'اس براؤزر میں محفوظ ہر ڈرائنگ دیکھنے کے لیے <strong>فائلیں</strong> پینل کھولیں؛ جو چاہیں بحال کریں یا حذف کریں۔',
          'براؤزر ڈیٹا صاف کرنے یا کمپیوٹر بدلنے سے پہلے اہم چیزیں برآمد کریں — <code>.json</code> مکمل تفصیل رکھتا ہے، <code>.dxf</code> سب سے زیادہ مطابقت دیتا ہے۔',
          'ایپ کو مکمل ری سیٹ کرنے کے لیے <code>wipestorage</code> لکھیں اور <code>YES</code> سے تصدیق کریں — مقامی طور پر محفوظ تمام ڈرائنگز مستقل حذف ہو جاتی ہیں۔',
        ],
        links: [
          { label: 'فائل پینل', slug: 'commands/files' },
          { label: 'برآمد', slug: 'commands/export' },
          { label: 'اسٹوریج صاف کریں', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  el: {
    title: 'Οδηγοί KulmanLab — συνήθεις εργασίες CAD βήμα-βήμα',
    desc: 'Οδηγοί βήμα-βήμα για το KulmanLab CAD: άνοιγμα αρχείων DXF, σχεδίαση με ακριβείς διαστάσεις, χρήση επιπέδων, διαστασιολόγηση, προετοιμασία αρχείων κοπής λέιζερ, εκτύπωση και αντίγραφα ασφαλείας.',
    heading: 'Οδηγοί',
    subtitle: 'Οδηγοί βήμα-βήμα για τις πιο συνηθισμένες εργασίες στο KulmanLab CAD.',
    docsLabel: 'Τεκμηρίωση:',
    outroTitle: 'Ψάχνετε μια συγκεκριμένη εντολή;',
    outroHtml: 'Η <a href="/el/docs/">αναφορά εντολών</a> τεκμηριώνει και τις 50+ εντολές, ενώ οι <a href="/el/faq/">συχνές ερωτήσεις</a> καλύπτουν αποθήκευση, μορφές και συμβατότητα.',
    guides: [
      {
        title: 'Άνοιγμα αρχείου DXF',
        intro: 'Το KulmanLab διαβάζει DXF — τη μορφή ανταλλαγής που παράγει κάθε εργαλείο CAD. Τα αρχεία ανοίγουν απευθείας από τον δίσκο σας και δεν φεύγουν ποτέ από τη συσκευή σας.',
        steps: [
          'Ανοίξτε το <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Κάντε κλικ στο κουμπί <strong>Import</strong> στο πάνελ αρχείων ή πληκτρολογήστε <code>import</code> στο τερματικό.',
          'Επιλέξτε ένα αρχείο <code>.dxf</code> (ή <code>.json</code> του KulmanLab) από τον υπολογιστή σας.',
          'Το σχέδιο φορτώνεται στον καμβά και αποθηκεύεται αυτόματα στον χώρο του περιηγητή — θα είναι εκεί και την επόμενη φορά.',
        ],
        links: [
          { label: 'Εντολή Import', slug: 'commands/import' },
          { label: 'Πάνελ αρχείων', slug: 'commands/files' },
        ],
      },
      {
        title: 'Σχεδίαση με ακριβείς διαστάσεις',
        intro: 'Κάθε εντολή σχεδίασης δέχεται πληκτρολόγηση — δεν χρειάζεται ποτέ να βάζετε μήκη ή συντεταγμένες «με το μάτι».',
        steps: [
          'Ξεκινήστε μια εντολή: κάντε κλικ στο <strong>Line</strong> ή πληκτρολογήστε <code>line</code> και πατήστε <strong>Enter</strong>.',
          'Πληκτρολογήστε το σημείο εκκίνησης ως <code>x,y</code> (π.χ. <code>0,0</code>) και πατήστε <strong>Enter</strong>.',
          'Μετακινήστε τον δρομέα προς την επιθυμητή κατεύθυνση, πληκτρολογήστε ένα μήκος (π.χ. <code>250</code>) και πατήστε <strong>Enter</strong> — το τμήμα σχεδιάζεται ακριβώς τόσο.',
          'Ενεργοποιήστε το κλείδωμα γωνίας στη γραμμή ελέγχου για να κρατάτε τα τμήματα σε ακριβείς γωνίες όπως 30°, 45° ή 90°.',
        ],
        links: [
          { label: 'Εντολή Line', slug: 'commands/line' },
          { label: 'Πλέγμα και έλξη', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Οργάνωση σχεδίου με επίπεδα',
        intro: 'Τα επίπεδα κρατούν χωριστά τις βοηθητικές γραμμές, τη γεωμετρία και τις σημειώσεις — και επιβιώνουν στην εξαγωγή DXF.',
        steps: [
          'Ανοίξτε το πάνελ <strong>Επίπεδα</strong> στη γραμμή εργαλείων και δημιουργήστε ένα επίπεδο για κάθε είδος περιεχομένου (περίγραμμα, διαστάσεις, σημειώσεις…).',
          'Ορίστε χρώμα, τύπο και πάχος γραμμής ανά επίπεδο, ώστε οι οντότητες να κληρονομούν λογικές προεπιλογές.',
          'Κάντε ένα επίπεδο τρέχον με <code>layer-make-current</code> πριν σχεδιάσετε, ή μεταφέρετε επιλεγμένες οντότητες με <code>layer-match</code>.',
          'Με το <code>layer-isolate</code> κρύβετε τα πάντα εκτός από το επίπεδο εργασίας, και με το <code>layer-unfreeze-all</code> τα επαναφέρετε όλα.',
        ],
        links: [
          { label: 'Απομόνωση επιπέδου', slug: 'commands/layer-isolate' },
          { label: 'Τύπος γραμμής', slug: 'interface/linetype' },
          { label: 'Πάχος γραμμής', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Προσθήκη διαστάσεων',
        intro: 'Οι διαστάσεις είναι πραγματικές οντότητες DXF DIMENSION — μεταφέρονται χωρίς απώλειες σε κάθε άλλο εργαλείο CAD.',
        steps: [
          'Πληκτρολογήστε <code>dim-linear</code> (οριζόντια/κατακόρυφα) ή <code>dim-aligned</code> (παράλληλα στη μετρούμενη ακμή) στο τερματικό.',
          'Επιλέξτε τα δύο σημεία που θέλετε να μετρήσετε και τοποθετήστε τη γραμμή διάστασης με τρίτο κλικ.',
          'Συνδέστε σειρά μετρήσεων με <code>dim-continue</code> — κάθε νέα διάσταση ξεκινά εκεί όπου τελείωσε η προηγούμενη.',
          'Για κύκλους και τόξα χρησιμοποιήστε <code>dim-radius</code>, <code>dim-diameter</code> ή <code>dim-angular</code>.',
          'Κάντε διπλό κλικ σε οποιαδήποτε ετικέτα διάστασης για να επεξεργαστείτε το κείμενό της.',
        ],
        links: [
          { label: 'Γραμμική διάσταση', slug: 'commands/dim-linear' },
          { label: 'Συνεχής διάσταση', slug: 'commands/dim-continue' },
          { label: 'Επεξεργαστής κειμένου', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Μέτρηση απόστασης, γωνίας και εμβαδού',
        intro: 'Γρήγορες μετρήσεις χωρίς δημιουργία γεωμετρίας — τα αποτελέσματα μένουν στην οθόνη μέχρι να πατήσετε Escape.',
        steps: [
          'Πληκτρολογήστε <code>distance</code> και επιλέξτε δύο σημεία για να διαβάσετε ένα μήκος.',
          'Πληκτρολογήστε <code>angle</code> και επιλέξτε δύο γραμμές (ή τρία σημεία) για να διαβάσετε τη γωνία μεταξύ τους.',
          'Πληκτρολογήστε <code>area</code>, κάντε κλικ σε τρία ή περισσότερα σημεία και πατήστε <strong>Enter</strong> — εμφανίζονται το εμβαδόν και η περίμετρος.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Προετοιμασία αρχείου για κοπή λέιζερ ή CNC',
        intro: 'Η ροή εργασίας για την οποία φτιάχτηκε αρχικά το KulmanLab: ελέγξτε το αρχείο, καθαρίστε το, στείλτε το στη μηχανή.',
        steps: [
          'Εισαγάγετε το DXF και ρίξτε του μια ματιά — το <code>fit</code> χωράει όλο το σχέδιο στην οθόνη.',
          'Διαγράψτε ό,τι δεν πρέπει να κόψει η μηχανή: βοηθητικές γραμμές, σημειώσεις, διαστάσεις. Το <code>layer-isolate</code> βοηθά να βρείτε ξεχασμένα στοιχεία.',
          'Τακτοποιήστε τη γεωμετρία: κόψτε άκρα που προεξέχουν με <code>trim</code>, κλείστε κενά και ελέγξτε μεγέθη με <code>distance</code>.',
          'Εξαγάγετε ως DXF και φορτώστε το στο λογισμικό της μηχανής σας. Οι διαδρομές κοπής μένουν ακριβώς όπως σχεδιάστηκαν — το KulmanLab γράφει καθαρό AC1032 DXF.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Προσαρμογή προβολής', slug: 'commands/fit' },
          { label: 'Εξαγωγή', slug: 'commands/export' },
        ],
      },
      {
        title: 'Δημιουργία διάταξης χαρτιού με viewports',
        intro: 'Οι διατάξεις είναι φύλλα χώρου χαρτιού — συνθέστε μία ή περισσότερες κλιμακωτές όψεις του μοντέλου σας σε μια σελίδα, έτοιμη για εκτύπωση.',
        steps: [
          'Κάντε κλικ σε μια <strong>καρτέλα διάταξης</strong> στο κάτω μέρος της οθόνης για να περάσετε από τον χώρο μοντέλου στον χώρο χαρτιού. Το κουμπί <strong>+</strong> στη γραμμή καρτελών προσθέτει νέα διάταξη.',
          '<strong>Κάντε δεξί κλικ σε καρτέλα διάταξης</strong> για μετονομασία, διαγραφή ή άνοιγμα του <strong>Page Manager</strong> — εκεί ορίζετε μέγεθος χαρτιού (A4, A3, Letter…), προσανατολισμό και κλίμακα μονάδων σχεδίου ανά mm.',
          'Πληκτρολογήστε <code>viewport-rectangle</code> και κάντε κλικ σε δύο απέναντι γωνίες για να τοποθετήσετε ένα viewport — ένα παράθυρο που δείχνει το μοντέλο σας πάνω στο χαρτί.',
          'Κάντε κλικ σε ένα viewport για να το επιλέξετε: σύρετε ακμές ή γωνίες για αλλαγή μεγέθους, το κεντρικό grip για μετακίνηση, και ορίστε ακριβή κλίμακα (π.χ. <code>1:50</code>) από τον επιλογέα της γραμμής ελέγχου.',
          'Κάντε κύλιση μέσα στο viewport για ζουμ στην όψη του μοντέλου, σύρετε με το μεσαίο κουμπί για μετατόπιση. Όταν όλα είναι εντάξει, <strong>κάντε δεξί κλικ στο viewport</strong> και επιλέξτε <strong>Lock</strong> για προστασία από κατά λάθος αλλαγές.',
          'Θέλετε την ίδια όψη δύο φορές; Το <code>viewport-copy</code> αντιγράφει ένα viewport διατηρώντας κλίμακα και όψη μοντέλου.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Εκτύπωση ή αποθήκευση ως PDF / PNG',
        intro: 'Ο διαχειριστής εκτύπωσης μετατρέπει το σχέδιό σας σε εικόνα έτοιμη για χαρτί, με ζωντανή προεπισκόπηση.',
        steps: [
          'Πληκτρολογήστε <code>print</code> ή κάντε κλικ στο κουμπί εκτύπωσης στο πάνελ αρχείων.',
          'Επιλέξτε μορφή εξόδου: PDF για έγγραφα, PNG/JPEG/WebP για εικόνες.',
          'Προαιρετικά περικόψτε σε μια περιοχή του σχεδίου και ενεργοποιήστε μονόχρωμη έξοδο για καθαρές γραμμικές εκτυπώσεις.',
          'Κάντε κλικ στο <strong>Print</strong> — το αρχείο κατεβαίνει στον υπολογιστή σας.',
        ],
        links: [
          { label: 'Εντολή Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Αντίγραφα ασφαλείας και διαχείριση σχεδίων',
        intro: 'Τα σχέδια ζουν στον αποθηκευτικό χώρο του περιηγητή σας — ιδιωτικά, εκτός σύνδεσης και απόλυτα δικά σας.',
        steps: [
          'Ανοίξτε το πάνελ <strong>Αρχεία</strong> για να δείτε κάθε σχέδιο που είναι αποθηκευμένο σε αυτόν τον περιηγητή· επαναφέρετε ή διαγράψτε όποιο θέλετε.',
          'Πριν καθαρίσετε δεδομένα περιηγητή ή αλλάξετε υπολογιστή, εξαγάγετε ό,τι είναι σημαντικό — το <code>.json</code> κρατά πλήρη πιστότητα, το <code>.dxf</code> μεγιστοποιεί τη συμβατότητα.',
          'Για πλήρη επαναφορά της εφαρμογής, πληκτρολογήστε <code>wipestorage</code> και επιβεβαιώστε με <code>YES</code> — όλα τα τοπικά αποθηκευμένα σχέδια διαγράφονται οριστικά.',
        ],
        links: [
          { label: 'Πάνελ αρχείων', slug: 'commands/files' },
          { label: 'Εξαγωγή', slug: 'commands/export' },
          { label: 'Καθαρισμός χώρου', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  pa: {
    title: 'KulmanLab ਕਿਵੇਂ ਵਰਤੀਏ — ਆਮ CAD ਕੰਮਾਂ ਦੀਆਂ ਗਾਈਡਾਂ',
    desc: 'KulmanLab CAD ਦੀਆਂ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡਾਂ: DXF ਫਾਈਲਾਂ ਖੋਲ੍ਹਣਾ, ਸਟੀਕ ਮਾਪਾਂ ਨਾਲ ਚਿੱਤਰਕਾਰੀ, ਲੇਅਰਾਂ ਦੀ ਵਰਤੋਂ, ਡਾਇਮੈਨਸ਼ਨ, ਲੇਜ਼ਰ ਕਟਿੰਗ ਫਾਈਲਾਂ ਤਿਆਰ ਕਰਨਾ, ਪ੍ਰਿੰਟ ਅਤੇ ਬੈਕਅੱਪ।',
    heading: 'ਗਾਈਡਾਂ',
    subtitle: 'KulmanLab CAD ਦੇ ਸਭ ਤੋਂ ਆਮ ਕੰਮਾਂ ਦੀਆਂ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡਾਂ।',
    docsLabel: 'ਦਸਤਾਵੇਜ਼:',
    outroTitle: 'ਕੋਈ ਖ਼ਾਸ ਕਮਾਂਡ ਲੱਭ ਰਹੇ ਹੋ?',
    outroHtml: '<a href="/pa/docs/">ਕਮਾਂਡ ਰੈਫਰੈਂਸ</a> ਵਿੱਚ ਸਾਰੀਆਂ 50+ ਕਮਾਂਡਾਂ ਦਰਜ ਹਨ, ਅਤੇ <a href="/pa/faq/">ਅਕਸਰ ਪੁੱਛੇ ਸਵਾਲ</a> ਸਟੋਰੇਜ, ਫਾਰਮੈਟ ਅਤੇ ਅਨੁਕੂਲਤਾ ਨੂੰ ਕਵਰ ਕਰਦੇ ਹਨ।',
    guides: [
      {
        title: 'DXF ਫਾਈਲ ਖੋਲ੍ਹਣਾ',
        intro: 'KulmanLab DXF ਪੜ੍ਹਦਾ ਹੈ — ਉਹ ਐਕਸਚੇਂਜ ਫਾਰਮੈਟ ਜੋ ਹਰ CAD ਟੂਲ ਬਣਾ ਸਕਦਾ ਹੈ। ਫਾਈਲਾਂ ਸਿੱਧੀਆਂ ਤੁਹਾਡੀ ਡਿਸਕ ਤੋਂ ਖੁੱਲ੍ਹਦੀਆਂ ਹਨ ਅਤੇ ਕਦੇ ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਤੋਂ ਬਾਹਰ ਨਹੀਂ ਜਾਂਦੀਆਂ।',
        steps: [
          '<a href="https://app.kulmanlab.com">app.kulmanlab.com</a> ਖੋਲ੍ਹੋ।',
          'ਫਾਈਲ ਪੈਨਲ ਵਿੱਚ <strong>Import</strong> ਬਟਨ ਦਬਾਓ, ਜਾਂ ਟਰਮੀਨਲ ਵਿੱਚ <code>import</code> ਲਿਖੋ।',
          'ਆਪਣੇ ਕੰਪਿਊਟਰ ਤੋਂ ਕੋਈ <code>.dxf</code> (ਜਾਂ KulmanLab ਦੀ <code>.json</code>) ਫਾਈਲ ਚੁਣੋ।',
          'ਡਰਾਇੰਗ ਕੈਨਵਸ ਤੇ ਲੋਡ ਹੁੰਦੀ ਹੈ ਅਤੇ ਬ੍ਰਾਊਜ਼ਰ ਸਟੋਰੇਜ ਵਿੱਚ ਆਪਣੇ ਆਪ ਸੰਭਲ ਜਾਂਦੀ ਹੈ — ਅਗਲੀ ਵਾਰ ਵੀ ਉੱਥੇ ਹੀ ਮਿਲੇਗੀ।',
        ],
        links: [
          { label: 'Import ਕਮਾਂਡ', slug: 'commands/import' },
          { label: 'ਫਾਈਲ ਪੈਨਲ', slug: 'commands/files' },
        ],
      },
      {
        title: 'ਸਟੀਕ ਮਾਪਾਂ ਨਾਲ ਚਿੱਤਰਕਾਰੀ',
        intro: 'ਹਰ ਡਰਾਇੰਗ ਕਮਾਂਡ ਕੀਬੋਰਡ ਇਨਪੁੱਟ ਲੈਂਦੀ ਹੈ — ਲੰਬਾਈ ਜਾਂ ਕੋਆਰਡੀਨੇਟ ਕਦੇ ਅੰਦਾਜ਼ੇ ਨਾਲ ਨਹੀਂ ਰੱਖਣੇ ਪੈਂਦੇ।',
        steps: [
          'ਕਮਾਂਡ ਸ਼ੁਰੂ ਕਰੋ — <strong>Line</strong> ਤੇ ਕਲਿੱਕ ਕਰੋ ਜਾਂ <code>line</code> ਲਿਖ ਕੇ <strong>Enter</strong> ਦਬਾਓ।',
          'ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ <code>x,y</code> ਰੂਪ ਵਿੱਚ ਲਿਖੋ (ਜਿਵੇਂ <code>0,0</code>) ਅਤੇ <strong>Enter</strong> ਦਬਾਓ।',
          'ਕਰਸਰ ਨੂੰ ਲੋੜੀਂਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਲੈ ਜਾਓ, ਲੰਬਾਈ ਲਿਖੋ (ਜਿਵੇਂ <code>250</code>) ਅਤੇ <strong>Enter</strong> ਦਬਾਓ — ਖੰਡ ਬਿਲਕੁਲ ਓਨਾ ਹੀ ਲੰਬਾ ਬਣੇਗਾ।',
          'ਖੰਡਾਂ ਨੂੰ 30°, 45° ਜਾਂ 90° ਵਰਗੇ ਸਟੀਕ ਕੋਣਾਂ ਤੇ ਰੱਖਣ ਲਈ ਕੰਟਰੋਲ ਬਾਰ ਵਿੱਚ ਐਂਗਲ ਲਾਕ ਚਾਲੂ ਕਰੋ।',
        ],
        links: [
          { label: 'Line ਕਮਾਂਡ', slug: 'commands/line' },
          { label: 'ਗਰਿੱਡ ਅਤੇ ਸਨੈਪ', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'ਲੇਅਰਾਂ ਨਾਲ ਡਰਾਇੰਗ ਸੰਗਠਿਤ ਕਰਨਾ',
        intro: 'ਲੇਅਰਾਂ ਨਿਰਮਾਣ ਰੇਖਾਵਾਂ, ਜਿਓਮੈਟਰੀ ਅਤੇ ਟਿੱਪਣੀਆਂ ਨੂੰ ਵੱਖ ਰੱਖਦੀਆਂ ਹਨ — ਅਤੇ DXF ਐਕਸਪੋਰਟ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੀਆਂ ਹਨ।',
        steps: [
          'ਟੂਲਬਾਰ ਵਿੱਚ <strong>ਲੇਅਰ</strong> ਪੈਨਲ ਖੋਲ੍ਹੋ ਅਤੇ ਹਰ ਕਿਸਮ ਦੀ ਸਮੱਗਰੀ ਲਈ ਲੇਅਰ ਬਣਾਓ (ਖਾਕਾ, ਡਾਇਮੈਨਸ਼ਨ, ਨੋਟ…)।',
          'ਹਰ ਲੇਅਰ ਲਈ ਰੰਗ, ਲਾਈਨਟਾਈਪ ਅਤੇ ਲਾਈਨਵੇਟ ਸੈੱਟ ਕਰੋ ਤਾਂ ਜੋ ਵਸਤੂਆਂ ਸਮਝਦਾਰ ਡਿਫਾਲਟ ਲੈਣ।',
          'ਚਿੱਤਰ ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ <code>layer-make-current</code> ਨਾਲ ਲੇਅਰ ਨੂੰ ਮੌਜੂਦਾ ਬਣਾਓ, ਜਾਂ ਚੁਣੀਆਂ ਵਸਤੂਆਂ <code>layer-match</code> ਨਾਲ ਭੇਜੋ।',
          'ਕੰਮ ਵਾਲੀ ਲੇਅਰ ਤੋਂ ਇਲਾਵਾ ਸਭ ਲੁਕਾਉਣ ਲਈ <code>layer-isolate</code> ਵਰਤੋ, ਅਤੇ ਸਭ ਵਾਪਸ ਲਿਆਉਣ ਲਈ <code>layer-unfreeze-all</code>।',
        ],
        links: [
          { label: 'ਲੇਅਰ ਅਲੱਗ ਕਰੋ', slug: 'commands/layer-isolate' },
          { label: 'ਲਾਈਨਟਾਈਪ', slug: 'interface/linetype' },
          { label: 'ਲਾਈਨਵੇਟ', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'ਡਾਇਮੈਨਸ਼ਨ ਜੋੜਨਾ',
        intro: 'ਡਾਇਮੈਨਸ਼ਨ ਅਸਲੀ DXF DIMENSION ਵਸਤੂਆਂ ਹਨ — ਕਿਸੇ ਵੀ ਹੋਰ CAD ਟੂਲ ਵਿੱਚ ਬਿਨਾਂ ਨੁਕਸਾਨ ਜਾਂਦੀਆਂ ਹਨ।',
        steps: [
          'ਟਰਮੀਨਲ ਵਿੱਚ <code>dim-linear</code> (ਖਿਤਿਜੀ/ਲੰਬਕਾਰੀ) ਜਾਂ <code>dim-aligned</code> (ਮਾਪੀ ਕੰਢੀ ਦੇ ਸਮਾਨਾਂਤਰ) ਲਿਖੋ।',
          'ਮਾਪਣ ਵਾਲੇ ਦੋ ਬਿੰਦੂ ਚੁਣੋ, ਫਿਰ ਤੀਜੇ ਕਲਿੱਕ ਨਾਲ ਡਾਇਮੈਨਸ਼ਨ ਰੇਖਾ ਰੱਖੋ।',
          '<code>dim-continue</code> ਨਾਲ ਮਾਪਾਂ ਦੀ ਲੜੀ ਬਣਾਓ — ਹਰ ਨਵੀਂ ਡਾਇਮੈਨਸ਼ਨ ਉੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ ਜਿੱਥੇ ਪਿਛਲੀ ਖ਼ਤਮ ਹੋਈ।',
          'ਗੋਲਿਆਂ ਅਤੇ ਚਾਪਾਂ ਲਈ <code>dim-radius</code>, <code>dim-diameter</code> ਜਾਂ <code>dim-angular</code> ਵਰਤੋ।',
          'ਕਿਸੇ ਵੀ ਡਾਇਮੈਨਸ਼ਨ ਲੇਬਲ ਤੇ ਡਬਲ-ਕਲਿੱਕ ਕਰਕੇ ਉਸਦਾ ਟੈਕਸਟ ਸੋਧੋ।',
        ],
        links: [
          { label: 'ਰੇਖਿਕ ਡਾਇਮੈਨਸ਼ਨ', slug: 'commands/dim-linear' },
          { label: 'ਲਗਾਤਾਰ ਡਾਇਮੈਨਸ਼ਨ', slug: 'commands/dim-continue' },
          { label: 'ਟੈਕਸਟ ਐਡੀਟਰ', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'ਦੂਰੀ, ਕੋਣ ਅਤੇ ਖੇਤਰਫਲ ਮਾਪਣਾ',
        intro: 'ਬਿਨਾਂ ਕੋਈ ਜਿਓਮੈਟਰੀ ਬਣਾਏ ਤੇਜ਼ ਮਾਪ — ਨਤੀਜੇ Escape ਦਬਾਉਣ ਤੱਕ ਸਕ੍ਰੀਨ ਤੇ ਰਹਿੰਦੇ ਹਨ।',
        steps: [
          '<code>distance</code> ਲਿਖੋ ਅਤੇ ਲੰਬਾਈ ਜਾਣਨ ਲਈ ਦੋ ਬਿੰਦੂ ਚੁਣੋ।',
          '<code>angle</code> ਲਿਖੋ ਅਤੇ ਵਿਚਕਾਰਲਾ ਕੋਣ ਜਾਣਨ ਲਈ ਦੋ ਰੇਖਾਵਾਂ (ਜਾਂ ਤਿੰਨ ਬਿੰਦੂ) ਚੁਣੋ।',
          '<code>area</code> ਲਿਖੋ, ਤਿੰਨ ਜਾਂ ਵੱਧ ਬਿੰਦੂਆਂ ਤੇ ਕਲਿੱਕ ਕਰਕੇ <strong>Enter</strong> ਦਬਾਓ — ਘਿਰਿਆ ਖੇਤਰਫਲ ਅਤੇ ਘੇਰਾ ਦਿਖਾਇਆ ਜਾਵੇਗਾ।',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'ਲੇਜ਼ਰ ਕਟਿੰਗ ਜਾਂ CNC ਲਈ ਫਾਈਲ ਤਿਆਰ ਕਰਨਾ',
        intro: 'ਉਹੀ ਵਰਕਫਲੋ ਜਿਸ ਲਈ KulmanLab ਅਸਲ ਵਿੱਚ ਬਣਿਆ ਸੀ: ਫਾਈਲ ਜਾਂਚੋ, ਸਾਫ਼ ਕਰੋ, ਮਸ਼ੀਨ ਨੂੰ ਭੇਜੋ।',
        steps: [
          'DXF ਇੰਪੋਰਟ ਕਰਕੇ ਜਾਇਜ਼ਾ ਲਓ — <code>fit</code> ਪੂਰੀ ਡਰਾਇੰਗ ਨੂੰ ਸਕ੍ਰੀਨ ਵਿੱਚ ਲੈ ਆਉਂਦਾ ਹੈ।',
          'ਜੋ ਮਸ਼ੀਨ ਨੇ ਨਹੀਂ ਕੱਟਣਾ ਉਹ ਮਿਟਾਓ: ਨਿਰਮਾਣ ਰੇਖਾਵਾਂ, ਨੋਟ, ਡਾਇਮੈਨਸ਼ਨ। <code>layer-isolate</code> ਖਿੱਲਰੇ ਤੱਤ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।',
          'ਜਿਓਮੈਟਰੀ ਸੰਵਾਰੋ: ਬਾਹਰ ਨਿਕਲੇ ਸਿਰੇ <code>trim</code> ਨਾਲ ਕੱਟੋ, ਖੱਪੇ ਬੰਦ ਕਰੋ ਅਤੇ <code>distance</code> ਨਾਲ ਮਾਪ ਜਾਂਚੋ।',
          'DXF ਵਜੋਂ ਐਕਸਪੋਰਟ ਕਰਕੇ ਮਸ਼ੀਨ ਦੇ ਸਾਫਟਵੇਅਰ ਵਿੱਚ ਲੋਡ ਕਰੋ। ਕੱਟ ਰਸਤੇ ਬਿਲਕੁਲ ਉਵੇਂ ਹੀ ਰਹਿੰਦੇ ਹਨ — KulmanLab ਖ਼ਾਲਸ AC1032 DXF ਲਿਖਦਾ ਹੈ।',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'ਵਿਊ ਫਿੱਟ ਕਰੋ', slug: 'commands/fit' },
          { label: 'ਐਕਸਪੋਰਟ', slug: 'commands/export' },
        ],
      },
      {
        title: 'ਵਿਊਪੋਰਟਾਂ ਨਾਲ ਕਾਗਜ਼ੀ ਲੇਆਉਟ ਬਣਾਉਣਾ',
        intro: 'ਲੇਆਉਟ ਕਾਗਜ਼ੀ ਸਪੇਸ ਦੀਆਂ ਸ਼ੀਟਾਂ ਹਨ — ਮਾਡਲ ਦੇ ਇੱਕ ਜਾਂ ਵੱਧ ਸਕੇਲ ਕੀਤੇ ਦ੍ਰਿਸ਼ ਇੱਕ ਪੰਨੇ ਤੇ ਸਜਾਓ, ਪ੍ਰਿੰਟ ਲਈ ਤਿਆਰ।',
        steps: [
          'ਮਾਡਲ ਸਪੇਸ ਤੋਂ ਕਾਗਜ਼ੀ ਸਪੇਸ ਵਿੱਚ ਜਾਣ ਲਈ ਸਕ੍ਰੀਨ ਦੇ ਹੇਠਾਂ <strong>ਲੇਆਉਟ ਟੈਬ</strong> ਤੇ ਕਲਿੱਕ ਕਰੋ। ਟੈਬ ਬਾਰ ਦਾ <strong>+</strong> ਬਟਨ ਨਵਾਂ ਲੇਆਉਟ ਜੋੜਦਾ ਹੈ।',
          'ਨਾਮ ਬਦਲਣ, ਮਿਟਾਉਣ ਜਾਂ <strong>Page Manager</strong> ਖੋਲ੍ਹਣ ਲਈ <strong>ਲੇਆਉਟ ਟੈਬ ਤੇ ਸੱਜਾ-ਕਲਿੱਕ ਕਰੋ</strong> — ਉੱਥੇ ਕਾਗਜ਼ ਦਾ ਆਕਾਰ (A4, A3, Letter…), ਦਿਸ਼ਾ ਅਤੇ ਪ੍ਰਤੀ ਮਿਮੀ ਡਰਾਇੰਗ ਇਕਾਈ ਸਕੇਲ ਸੈੱਟ ਹੁੰਦੇ ਹਨ।',
          '<code>viewport-rectangle</code> ਲਿਖੋ ਅਤੇ ਦੋ ਸਾਹਮਣੇ ਵਾਲੇ ਕੋਨਿਆਂ ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਵਿਊਪੋਰਟ ਰੱਖੋ — ਕਾਗਜ਼ ਤੇ ਤੁਹਾਡਾ ਮਾਡਲ ਦਿਖਾਉਣ ਵਾਲੀ ਖਿੜਕੀ।',
          'ਚੁਣਨ ਲਈ ਵਿਊਪੋਰਟ ਤੇ ਕਲਿੱਕ ਕਰੋ: ਆਕਾਰ ਬਦਲਣ ਲਈ ਕੰਢੇ ਜਾਂ ਕੋਨੇ ਖਿੱਚੋ, ਹਿਲਾਉਣ ਲਈ ਵਿਚਕਾਰਲਾ ਗਰਿੱਪ, ਅਤੇ ਕੰਟਰੋਲ ਬਾਰ ਦੇ ਸਕੇਲ ਚੋਣਕਾਰ ਤੋਂ ਸਟੀਕ ਸਕੇਲ (ਜਿਵੇਂ <code>1:50</code>) ਚੁਣੋ।',
          'ਮਾਡਲ ਦ੍ਰਿਸ਼ ਜ਼ੂਮ ਕਰਨ ਲਈ ਵਿਊਪੋਰਟ ਅੰਦਰ ਸਕ੍ਰੋਲ ਕਰੋ, ਪੈਨ ਲਈ ਵਿਚਕਾਰਲੇ ਬਟਨ ਨਾਲ ਖਿੱਚੋ। ਸਭ ਠੀਕ ਹੋਵੇ ਤਾਂ <strong>ਵਿਊਪੋਰਟ ਤੇ ਸੱਜਾ-ਕਲਿੱਕ</strong> ਕਰਕੇ <strong>Lock</strong> ਚੁਣੋ — ਅਣਚਾਹੇ ਬਦਲਾਵਾਂ ਤੋਂ ਬਚਾਅ।',
          'ਉਹੀ ਦ੍ਰਿਸ਼ ਦੋ ਵਾਰ ਚਾਹੀਦਾ ਹੈ? <code>viewport-copy</code> ਸਕੇਲ ਅਤੇ ਮਾਡਲ ਦ੍ਰਿਸ਼ ਸਮੇਤ ਵਿਊਪੋਰਟ ਦੀ ਨਕਲ ਬਣਾਉਂਦਾ ਹੈ।',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'ਪ੍ਰਿੰਟ ਜਾਂ PDF / PNG ਵਜੋਂ ਸੰਭਾਲੋ',
        intro: 'ਪ੍ਰਿੰਟ ਮੈਨੇਜਰ ਲਾਈਵ ਪ੍ਰੀਵਿਊ ਨਾਲ ਤੁਹਾਡੀ ਡਰਾਇੰਗ ਨੂੰ ਕਾਗਜ਼-ਤਿਆਰ ਤਸਵੀਰ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
        steps: [
          '<code>print</code> ਲਿਖੋ ਜਾਂ ਫਾਈਲ ਪੈਨਲ ਵਿੱਚ ਪ੍ਰਿੰਟ ਬਟਨ ਦਬਾਓ।',
          'ਆਊਟਪੁੱਟ ਫਾਰਮੈਟ ਚੁਣੋ: ਦਸਤਾਵੇਜ਼ਾਂ ਲਈ PDF, ਤਸਵੀਰਾਂ ਲਈ PNG/JPEG/WebP।',
          'ਚਾਹੋ ਤਾਂ ਡਰਾਇੰਗ ਦੇ ਕਿਸੇ ਹਿੱਸੇ ਤੱਕ ਕਰੌਪ ਕਰੋ ਅਤੇ ਸਾਫ਼ ਰੇਖਾ ਪ੍ਰਿੰਟ ਲਈ ਇੱਕ-ਰੰਗੀ ਆਊਟਪੁੱਟ ਚਾਲੂ ਕਰੋ।',
          '<strong>Print</strong> ਦਬਾਓ — ਫਾਈਲ ਤੁਹਾਡੇ ਕੰਪਿਊਟਰ ਵਿੱਚ ਡਾਊਨਲੋਡ ਹੋ ਜਾਵੇਗੀ।',
        ],
        links: [
          { label: 'Print ਕਮਾਂਡ', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'ਸੰਭਾਲੀਆਂ ਡਰਾਇੰਗਾਂ ਦਾ ਬੈਕਅੱਪ ਅਤੇ ਪ੍ਰਬੰਧਨ',
        intro: 'ਡਰਾਇੰਗਾਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਸਟੋਰੇਜ ਵਿੱਚ ਰਹਿੰਦੀਆਂ ਹਨ — ਨਿੱਜੀ, ਔਫਲਾਈਨ ਅਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤੁਹਾਡੇ ਕੰਟਰੋਲ ਵਿੱਚ।',
        steps: [
          'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੰਭਾਲੀ ਹਰ ਡਰਾਇੰਗ ਦੇਖਣ ਲਈ <strong>ਫਾਈਲਾਂ</strong> ਪੈਨਲ ਖੋਲ੍ਹੋ; ਜੋ ਮਰਜ਼ੀ ਬਹਾਲ ਕਰੋ ਜਾਂ ਮਿਟਾਓ।',
          'ਬ੍ਰਾਊਜ਼ਰ ਡਾਟਾ ਸਾਫ਼ ਕਰਨ ਜਾਂ ਕੰਪਿਊਟਰ ਬਦਲਣ ਤੋਂ ਪਹਿਲਾਂ ਜ਼ਰੂਰੀ ਚੀਜ਼ਾਂ ਐਕਸਪੋਰਟ ਕਰੋ — <code>.json</code> ਪੂਰੀ ਵਫ਼ਾਦਾਰੀ ਰੱਖਦਾ ਹੈ, <code>.dxf</code> ਵੱਧ ਤੋਂ ਵੱਧ ਅਨੁਕੂਲ ਹੈ।',
          'ਐਪ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੀਸੈੱਟ ਕਰਨ ਲਈ <code>wipestorage</code> ਲਿਖ ਕੇ <code>YES</code> ਨਾਲ ਪੁਸ਼ਟੀ ਕਰੋ — ਸਥਾਨਕ ਸੰਭਾਲੀਆਂ ਸਾਰੀਆਂ ਡਰਾਇੰਗਾਂ ਪੱਕੇ ਤੌਰ ਤੇ ਮਿਟ ਜਾਂਦੀਆਂ ਹਨ।',
        ],
        links: [
          { label: 'ਫਾਈਲ ਪੈਨਲ', slug: 'commands/files' },
          { label: 'ਐਕਸਪੋਰਟ', slug: 'commands/export' },
          { label: 'ਸਟੋਰੇਜ ਮਿਟਾਓ', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  sv: {
    title: 'Så använder du KulmanLab — guider för vanliga CAD-uppgifter',
    desc: 'Steg-för-steg-guider för KulmanLab CAD: öppna DXF-filer, rita med exakta mått, använda lager, måttsätta, förbereda laserskärningsfiler, skriva ut och säkerhetskopiera ritningar.',
    heading: 'Guider',
    subtitle: 'Steg-för-steg-guider för de vanligaste uppgifterna i KulmanLab CAD.',
    docsLabel: 'Dokumentation:',
    outroTitle: 'Letar du efter ett visst kommando?',
    outroHtml: '<a href="/sv/docs/">Kommandoreferensen</a> dokumenterar alla 50+ kommandon, och <a href="/sv/faq/">FAQ</a> täcker lagring, format och kompatibilitet.',
    guides: [
      {
        title: 'Öppna en DXF-fil',
        intro: 'KulmanLab läser DXF — utbytesformatet som alla CAD-verktyg kan producera. Filer öppnas direkt från din disk och lämnar aldrig din enhet.',
        steps: [
          'Öppna <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'Klicka på knappen <strong>Import</strong> i filpanelen eller skriv <code>import</code> i terminalen.',
          'Välj en <code>.dxf</code>-fil (eller KulmanLabs <code>.json</code>) från din dator.',
          'Ritningen läses in på ritytan och sparas automatiskt i webbläsarens lagring — den finns kvar nästa gång.',
        ],
        links: [
          { label: 'Kommandot Import', slug: 'commands/import' },
          { label: 'Filpanelen', slug: 'commands/files' },
        ],
      },
      {
        title: 'Rita med exakta mått',
        intro: 'Alla ritkommandon tar emot tangentbordsinmatning — du behöver aldrig gissa en längd eller koordinat på fri hand.',
        steps: [
          'Starta ett kommando — klicka på <strong>Line</strong> eller skriv <code>line</code> och tryck på <strong>Enter</strong>.',
          'Skriv startpunkten som <code>x,y</code> (till exempel <code>0,0</code>) och tryck på <strong>Enter</strong>.',
          'För markören i önskad riktning, skriv en längd (till exempel <code>250</code>) och tryck på <strong>Enter</strong> — segmentet ritas exakt så långt.',
          'Aktivera vinkellåset i kontrollfältet för att hålla segment i exakta vinklar som 30°, 45° eller 90°.',
        ],
        links: [
          { label: 'Kommandot Line', slug: 'commands/line' },
          { label: 'Rutnät & snäpp', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Organisera en ritning med lager',
        intro: 'Lager håller konstruktionslinjer, geometri och anteckningar åtskilda — och överlever DXF-export.',
        steps: [
          'Öppna panelen <strong>Lager</strong> i verktygsfältet och skapa ett lager för varje typ av innehåll (kontur, mått, anteckningar…).',
          'Ställ in färg, linjetyp och linjetjocklek per lager så att objekt ärver rimliga standardvärden.',
          'Gör ett lager aktuellt med <code>layer-make-current</code> innan du ritar, eller flytta markerade objekt med <code>layer-match</code>.',
          'Använd <code>layer-isolate</code> för att dölja allt utom lagret du arbetar i, och <code>layer-unfreeze-all</code> för att få tillbaka allt.',
        ],
        links: [
          { label: 'Isolera lager', slug: 'commands/layer-isolate' },
          { label: 'Linjetyp', slug: 'interface/linetype' },
          { label: 'Linjetjocklek', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Lägga till mått',
        intro: 'Måtten är riktiga DXF DIMENSION-objekt och överförs förlustfritt till vilket annat CAD-verktyg som helst.',
        steps: [
          'Skriv <code>dim-linear</code> (horisontellt/vertikalt) eller <code>dim-aligned</code> (parallellt med den mätta kanten) i terminalen.',
          'Välj de två punkter du vill mäta och placera måttlinjen med ett tredje klick.',
          'Kedja en rad mätningar med <code>dim-continue</code> — varje nytt mått börjar där det förra slutade.',
          'För cirklar och bågar använder du <code>dim-radius</code>, <code>dim-diameter</code> eller <code>dim-angular</code>.',
          'Dubbelklicka på valfri måttetikett för att redigera dess text.',
        ],
        links: [
          { label: 'Linjärt mått', slug: 'commands/dim-linear' },
          { label: 'Fortsatt mått', slug: 'commands/dim-continue' },
          { label: 'Textredigerare', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Mäta avstånd, vinkel och area',
        intro: 'Snabba mätningar utan att skapa geometri — resultaten stannar på skärmen tills du trycker på Escape.',
        steps: [
          'Skriv <code>distance</code> och välj två punkter för att läsa av en längd.',
          'Skriv <code>angle</code> och välj två linjer (eller tre punkter) för att läsa av vinkeln mellan dem.',
          'Skriv <code>area</code>, klicka på tre eller fler punkter och tryck på <strong>Enter</strong> — den inneslutna arean och omkretsen visas.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Förbereda en fil för laserskärning eller CNC',
        intro: 'Arbetsflödet som KulmanLab ursprungligen byggdes för: kontrollera en fil, städa upp den, skicka den till maskinen.',
        steps: [
          'Importera DXF-filen och se över den — <code>fit</code> zoomar in hela ritningen i vyn.',
          'Radera allt maskinen inte ska skära: konstruktionslinjer, anteckningar, mått. <code>layer-isolate</code> hjälper dig hitta vilsna element.',
          'Städa geometrin: klipp överskjutande ändar med <code>trim</code>, slut luckor och kontrollera mått med <code>distance</code>.',
          'Exportera som DXF och läs in i maskinens programvara. Skärbanorna förblir exakt som ritade — KulmanLab skriver ren AC1032 DXF.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Anpassa vy', slug: 'commands/fit' },
          { label: 'Export', slug: 'commands/export' },
        ],
      },
      {
        title: 'Skapa en papperslayout med vyfönster',
        intro: 'Layouter är ark i pappersrymden — komponera en eller flera skalenliga vyer av din modell på en sida, redo att skrivas ut.',
        steps: [
          'Klicka på en <strong>layoutflik</strong> längst ner på skärmen för att växla från modellrymd till pappersrymd. Knappen <strong>+</strong> i flikraden lägger till en ny layout.',
          '<strong>Högerklicka på en layoutflik</strong> för att byta namn, ta bort den eller öppna <strong>Page Manager</strong> — där ställer du in pappersformat (A4, A3, Letter…), orientering och skalan ritenheter per mm.',
          'Skriv <code>viewport-rectangle</code> och klicka på två motstående hörn för att placera ett vyfönster — ett fönster som visar din modell på papperet.',
          'Klicka på ett vyfönster för att markera det: dra i kanter eller hörn för att ändra storlek, dra i mittgreppet för att flytta, och välj en exakt skala (t.ex. <code>1:50</code>) i skalväljaren i kontrollfältet.',
          'Skrolla inuti vyfönstret för att zooma modellvyn, dra med mittenknappen för att panorera. När allt stämmer: <strong>högerklicka på vyfönstret</strong> och välj <strong>Lock</strong> för att skydda det mot oavsiktliga ändringar.',
          'Behöver du samma vy två gånger? <code>viewport-copy</code> duplicerar ett vyfönster med skala och modellvy bevarade.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Skriva ut eller spara som PDF / PNG',
        intro: 'Utskriftshanteraren omvandlar din ritning till en tryckfärdig bild, med förhandsvisning i realtid.',
        steps: [
          'Skriv <code>print</code> eller klicka på utskriftsknappen i filpanelen.',
          'Välj utdataformat: PDF för dokument, PNG/JPEG/WebP för bilder.',
          'Beskär eventuellt till ett område av ritningen och slå på monokrom utskrift för rena linjeutskrifter.',
          'Klicka på <strong>Print</strong> — filen laddas ner till din dator.',
        ],
        links: [
          { label: 'Kommandot Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Säkerhetskopiera och hantera sparade ritningar',
        intro: 'Ritningarna bor i din webbläsares lagring — privata, offline och helt i dina händer.',
        steps: [
          'Öppna panelen <strong>Filer</strong> för att se varje ritning som sparats i den här webbläsaren; återställ eller ta bort vilka du vill.',
          'Innan du rensar webbläsardata eller byter dator, exportera det viktiga — <code>.json</code> behåller full trohet, <code>.dxf</code> maximerar kompatibiliteten.',
          'För att nollställa appen helt, skriv <code>wipestorage</code> och bekräfta med <code>YES</code> — alla lokalt sparade ritningar raderas permanent.',
        ],
        links: [
          { label: 'Filpanelen', slug: 'commands/files' },
          { label: 'Export', slug: 'commands/export' },
          { label: 'Rensa lagring', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },

  tl: {
    title: 'Paano Gamitin ang KulmanLab — Mga Gabay sa Gawain sa CAD',
    desc: 'Mga step-by-step na gabay para sa KulmanLab CAD: pagbubukas ng DXF file, pagguhit nang may eksaktong sukat, paggamit ng layer, pagdaragdag ng dimensyon, paghahanda ng file para sa laser cutting, pag-print, at pag-backup ng mga drawing.',
    heading: 'Mga Gabay',
    subtitle: 'Mga step-by-step na gabay sa pinakakaraniwang gawain sa KulmanLab CAD.',
    docsLabel: 'Docs:',
    outroTitle: 'May hinahanap na partikular na command?',
    outroHtml: 'Ang <a href="/tl/docs/">command reference</a> ay nagdodokumento ng lahat ng 50+ command, at ang <a href="/tl/faq/">FAQ</a> ay sumasaklaw sa storage, mga format, at compatibility.',
    guides: [
      {
        title: 'Pagbubukas ng DXF file',
        intro: 'Binabasa ng KulmanLab ang DXF — ang exchange format na kayang gawin ng bawat CAD tool. Direktang bumubukas ang mga file mula sa iyong disk at hindi kailanman umaalis sa iyong device.',
        steps: [
          'Buksan ang <a href="https://app.kulmanlab.com">app.kulmanlab.com</a>.',
          'I-click ang button na <strong>Import</strong> sa panel ng File, o i-type ang <code>import</code> sa terminal.',
          'Pumili ng <code>.dxf</code> (o <code>.json</code> ng KulmanLab) na file mula sa iyong computer.',
          'Nailo-load ang drawing sa canvas at awtomatikong nase-save sa storage ng browser — nandoon pa rin ito sa susunod.',
        ],
        links: [
          { label: 'Command na Import', slug: 'commands/import' },
          { label: 'Panel ng mga file', slug: 'commands/files' },
        ],
      },
      {
        title: 'Pagguhit nang may eksaktong sukat',
        intro: 'Lahat ng drawing command ay tumatanggap ng keyboard input — hindi mo na kailangang tantiyahin ang haba o coordinate.',
        steps: [
          'Magsimula ng command — i-click ang <strong>Line</strong> o i-type ang <code>line</code> at pindutin ang <strong>Enter</strong>.',
          'I-type ang panimulang punto bilang <code>x,y</code> (halimbawa <code>0,0</code>) at pindutin ang <strong>Enter</strong>.',
          'Igalaw ang cursor sa gustong direksyon, mag-type ng haba (halimbawa <code>250</code>) at pindutin ang <strong>Enter</strong> — iguguhit ang segment nang eksaktong ganoon kahaba.',
          'I-on ang angle lock sa control bar para panatilihin ang mga segment sa eksaktong anggulo tulad ng 30°, 45°, o 90°.',
        ],
        links: [
          { label: 'Command na Line', slug: 'commands/line' },
          { label: 'Grid at snap', slug: 'interface/grid-snap' },
        ],
      },
      {
        title: 'Pag-aayos ng drawing gamit ang mga layer',
        intro: 'Pinaghihiwalay ng mga layer ang construction line, geometry, at anotasyon — at nananatili ang mga ito sa DXF export.',
        steps: [
          'Buksan ang panel na <strong>Layers</strong> sa toolbar at gumawa ng layer para sa bawat uri ng nilalaman (outline, dimensyon, tala…).',
          'Itakda ang kulay, linetype, at lineweight bawat layer para magmana ang mga entity ng makatuwirang default.',
          'Gawing kasalukuyan ang isang layer gamit ang <code>layer-make-current</code> bago gumuhit, o ilipat ang mga napiling entity gamit ang <code>layer-match</code>.',
          'Gamitin ang <code>layer-isolate</code> para itago ang lahat maliban sa layer na ginagamit, at <code>layer-unfreeze-all</code> para ibalik lahat.',
        ],
        links: [
          { label: 'Layer isolate', slug: 'commands/layer-isolate' },
          { label: 'Linetype', slug: 'interface/linetype' },
          { label: 'Lineweight', slug: 'interface/lineweight' },
        ],
      },
      {
        title: 'Pagdaragdag ng mga dimensyon',
        intro: 'Ang mga dimensyon ay tunay na DXF DIMENSION entity — lumilipat nang walang nawawala sa alinmang CAD tool.',
        steps: [
          'I-type ang <code>dim-linear</code> (pahalang/patayo) o <code>dim-aligned</code> (kahanay ng sinusukat na gilid) sa terminal.',
          'Piliin ang dalawang puntong susukatin, pagkatapos ay ilagay ang dimension line sa pangatlong click.',
          'Pagdugtung-dugtungin ang mga sukat gamit ang <code>dim-continue</code> — nagsisimula ang bawat bagong dimensyon kung saan nagtapos ang nauna.',
          'Para sa mga bilog at arc, gamitin ang <code>dim-radius</code>, <code>dim-diameter</code>, o <code>dim-angular</code>.',
          'I-double-click ang anumang dimension label para i-edit ang teksto nito.',
        ],
        links: [
          { label: 'Linear na dimensyon', slug: 'commands/dim-linear' },
          { label: 'Continue na dimensyon', slug: 'commands/dim-continue' },
          { label: 'Text editor', slug: 'interface/text-editor' },
        ],
      },
      {
        title: 'Pagsukat ng distansya, anggulo, at area',
        intro: 'Mabilis na pagsukat nang hindi gumagawa ng geometry — nananatili sa screen ang mga resulta hanggang pindutin ang Escape.',
        steps: [
          'I-type ang <code>distance</code> at pumili ng dalawang punto para basahin ang haba.',
          'I-type ang <code>angle</code> at pumili ng dalawang linya (o tatlong punto) para basahin ang anggulo sa pagitan nila.',
          'I-type ang <code>area</code>, mag-click ng tatlo o higit pang punto, at pindutin ang <strong>Enter</strong> — ipapakita ang nasasakupang area at perimeter.',
        ],
        links: [
          { label: 'Distance', slug: 'commands/distance' },
          { label: 'Angle', slug: 'commands/angle' },
          { label: 'Area', slug: 'commands/area' },
        ],
      },
      {
        title: 'Paghahanda ng file para sa laser cutting o CNC',
        intro: 'Ang workflow na pinag-ugatan ng KulmanLab: suriin ang file, linisin, ipadala sa makina.',
        steps: [
          'I-import ang DXF at silipin — isinusukat ng <code>fit</code> ang buong drawing sa screen.',
          'Burahin ang anumang hindi dapat putulin ng makina: construction lines, tala, dimensyon. Nakakatulong ang <code>layer-isolate</code> sa paghahanap ng mga ligaw na elemento.',
          'Ayusin ang geometry: gupitin ang mga nakausling dulo gamit ang <code>trim</code>, isara ang mga puwang, at suriin ang mga sukat gamit ang <code>distance</code>.',
          'I-export bilang DXF at i-load sa software ng iyong makina. Nananatili ang mga cut path nang eksaktong tulad ng iginuhit — sumusulat ang KulmanLab ng purong AC1032 DXF.',
        ],
        links: [
          { label: 'Trim', slug: 'commands/trim' },
          { label: 'Fit view', slug: 'commands/fit' },
          { label: 'Export', slug: 'commands/export' },
        ],
      },
      {
        title: 'Pag-set up ng paper layout na may mga viewport',
        intro: 'Ang mga layout ay mga sheet sa paper space — pagsama-samahin ang isa o higit pang naka-scale na view ng iyong modelo sa isang pahina, handa nang i-print.',
        steps: [
          'Mag-click ng <strong>layout tab</strong> sa ibaba ng screen para lumipat mula sa model space patungo sa paper space. Ang button na <strong>+</strong> sa tab bar ay nagdaragdag ng bagong layout.',
          '<strong>I-right-click ang isang layout tab</strong> para palitan ang pangalan, burahin, o buksan ang <strong>Page Manager</strong> — doon mo itatakda ang laki ng papel (A4, A3, Letter…), oryentasyon, at scale ng drawing units bawat mm.',
          'I-type ang <code>viewport-rectangle</code> at mag-click ng dalawang magkasalungat na sulok para maglagay ng viewport — bintanang nagpapakita ng iyong modelo sa papel.',
          'I-click ang viewport para piliin ito: hilahin ang mga gilid o sulok para baguhin ang laki, hilahin ang gitnang grip para ilipat, at pumili ng eksaktong scale (hal. <code>1:50</code>) mula sa scale selector sa control bar.',
          'Mag-scroll sa loob ng viewport para i-zoom ang model view, mag-drag gamit ang gitnang button para mag-pan. Kapag tama na, <strong>i-right-click ang viewport</strong> at piliin ang <strong>Lock</strong> para protektahan ito sa aksidenteng pagbabago.',
          'Kailangan ang parehong view nang dalawang beses? Kinokopya ng <code>viewport-copy</code> ang isang viewport nang buo ang scale at model view.',
        ],
        links: [
          { label: 'Page manager', slug: 'commands/page-manager' },
          { label: 'Viewport rectangle', slug: 'commands/viewport-rectangle' },
          { label: 'Viewport copy', slug: 'commands/viewport-copy' },
        ],
      },
      {
        title: 'Pag-print o pag-save bilang PDF / PNG',
        intro: 'Ginagawa ng print manager ang iyong drawing na imaheng handa sa papel, na may live preview.',
        steps: [
          'I-type ang <code>print</code> o i-click ang Print button sa panel ng File.',
          'Piliin ang output format: PDF para sa mga dokumento, PNG/JPEG/WebP para sa mga imahe.',
          'Opsyonal, mag-crop sa isang bahagi ng drawing at i-on ang monochrome output para sa malilinis na line print.',
          'I-click ang <strong>Print</strong> — mada-download ang file sa iyong computer.',
        ],
        links: [
          { label: 'Command na Print', slug: 'commands/print' },
          { label: 'Page manager', slug: 'commands/page-manager' },
        ],
      },
      {
        title: 'Pag-backup at pamamahala ng mga naka-save na drawing',
        intro: 'Nakatira ang mga drawing sa storage ng iyong browser — pribado, offline, at ganap na sa iyo.',
        steps: [
          'Buksan ang panel na <strong>Files</strong> para makita ang bawat drawing na naka-save sa browser na ito; i-restore o burahin ang alinman.',
          'Bago mag-clear ng browser data o lumipat ng computer, i-export ang mahahalaga — pinapanatili ng <code>.json</code> ang buong katapatan, pinapalawak ng <code>.dxf</code> ang compatibility.',
          'Para ganap na i-reset ang app, i-type ang <code>wipestorage</code> at kumpirmahin gamit ang <code>YES</code> — permanenteng mabubura ang lahat ng lokal na naka-save na drawing.',
        ],
        links: [
          { label: 'Panel ng mga file', slug: 'commands/files' },
          { label: 'Export', slug: 'commands/export' },
          { label: 'Burahin ang storage', slug: 'commands/wipestorage' },
        ],
      },
    ],
  },
};
