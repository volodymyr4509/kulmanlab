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
};
