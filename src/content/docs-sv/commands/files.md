---
title: Files — Recent Files-panelen i KulmanLab CAD
description: Files-kommandot öppnar panelen Recent Files — bläddra bland alla ritningar som sparats i din webbläsare, återställ vilken som helst av dem till ritytan, eller ta bort de du inte längre behöver.
keywords: [senaste filer CAD, filhistorik webbläsare CAD, återställ ritning, öppna DXF igen, webbläsarlagring CAD, KulmanLab filer, sparade ritningar, IndexedDB CAD, hantera ritningar]
group: file
order: 3
---

# Files

**Files**-kommandot öppnar panelen **Recent Files** — en lista över alla ritningar som har sparats i webbläsarens lokala lagring. Använd den för att återöppna en tidigare ritning eller ta bort filer du inte längre behöver.

## Så här öppnar du panelen Recent Files

Klicka på verktygsfältsknappen **Files** (historikikon) i File-panelen högst upp på skärmen. Panelen öppnas på vänster sida av ritytan.

## Panelen Recent Files

Varje post i listan visar filnamnet och två åtgärdsknappar:

| Knapp | Åtgärd |
|--------|--------|
| ✓ **Restore** | Ladda ritningen på ritytan — ersätter det aktuella innehållet |
| ✕ **Delete** | Ta bort filen från webbläsarens lagring permanent |

Om inga filer har sparats ännu visar panelen "No files saved".

## Hur filer lagras

KulmanLab sparar ritningar i **IndexedDB** — en beständig databas i webbläsaren. Det innebär att:

- Filer överlever sidladdningar och omstarter av webbläsaren.
- Filer lagras **lokalt på din enhet** — de laddas inte upp till någon server.
- Varje webbläsare och enhet har sin egen oberoende lagring. En ritning som sparats i Chrome på en dator är inte tillgänglig i Firefox eller på en annan maskin.
- Om du rensar webbplatsens data i webbläsaren raderas alla sparade filer.

## Automatisk inläsning av filer vid uppstart

När du öppnar KulmanLab CAD laddar appen automatiskt den **senast ändrade filen** från lagringen. Du behöver inte manuellt öppna den från panelen Files varje gång.

## Hantera lagring

Det finns ingen fast gräns för antalet ritningar du kan spara, men webbläsarens lagring är begränsad. Om du märker lagringsvarningar, ta bort äldre filer från panelen Files.

För att ta bort alla sparade ritningar på en gång, använd kommandot [WipeStorage](../wipestorage/).

## Filnamn och versionshantering

Varje fil har en tidsstämpel i namnet (t.ex. `myplan_May22_14:30:00.dxf`). Denna tidsstämpel läggs till automatiskt när du [importerar](../import/) en fil, vilket säkerställer att en ny import av samma källfil skapar en ny post istället för att skriva över den föregående versionen.

## Relaterade kommandon

- [Import](../import/) — ladda en ritning från ditt filsystem till webbläsarens lagring
- [Export](../export/) — ladda ner en ritning till ditt filsystem
- [New File](../new-file/) — starta en tom ritning (sparas också automatiskt)
- [WipeStorage](../wipestorage/) — rensa alla sparade filer från webbläsarens lagring
