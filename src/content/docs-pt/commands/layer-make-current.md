---
title: LayerMakeCurrent — Definir a Camada de uma Entidade como Atual no KulmanLab CAD
description: O comando LayerMakeCurrent define a camada de desenho atual para corresponder à camada da entidade clicada.
keywords: [layer make current, definir camada atual CAD, kulmanlab gerenciamento de camadas]
group: layer
order: 1
---

# LayerMakeCurrent

O comando `LayerMakeCurrent` define a **camada de desenho atual** para a camada à qual a entidade clicada pertence. As novas entidades serão então desenhadas automaticamente nessa camada.

## Uso

1. Digite `LayerMakeCurrent` no terminal ou clique no botão **Make Current** na barra de ferramentas (ícone de conta-gotas).
2. **Clique em qualquer entidade** no canvas.
3. A camada atual é atualizada para corresponder à camada dessa entidade. O comando termina imediatamente.

## Detalhes de comportamento

- Se você clicar no canvas vazio (nenhuma entidade encontrada), o terminal mostra `nenhum objeto encontrado` e o comando permanece ativo para que você possa tentar novamente.
- Apenas a configuração da camada atual é alterada — nenhuma entidade é modificada.
- A camada atualizada é refletida no seletor de camadas na barra de ferramentas.
