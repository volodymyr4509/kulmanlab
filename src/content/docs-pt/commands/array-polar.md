---
title: "Comando ArrayPolar — copiar objetos em torno de um centro no KulmanLab CAD"
description: "O comando ArrayPolar copia os objetos selecionados em torno de um ponto central — um número definido de itens distribuídos numa volta completa ou parte dela, com cópias que giram ao dar a volta ou mantêm a própria orientação."
keywords: ["matriz polar CAD", "padrão circular CAD", "copiar objetos em torno de um ponto CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

O comando `ArrayPolar` cria cópias dos objetos selecionados em torno de um ponto central, distribuídas uniformemente numa volta completa ou parte dela. O original é o primeiro item; cada outro item é uma cópia girada em torno do centro — ou apenas deslocada em torno dele, se você desativar Rotate.

## Criar uma matriz polar

1. Selecione os objetos e digite `arraypolar` no terminal ou clique no botão **Array Polar** da barra de ferramentas. Se iniciado sem seleção, primeiro pede que você os selecione — pressione **Enter** ou **Space** para confirmar.
2. **Clique no centro** em torno do qual as cópias giram, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. Revise a matriz. Todas as cópias são pré-visualizadas ao vivo e o terminal mostra `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — pressione a letra de uma opção para alterá-la.
4. Pressione **Enter** ou **Space** para criar as cópias. Os originais permanecem onde estão e a seleção é limpa.

## Opções

| Opção | Tecla | Efeito |
|---|---|---|
| Items | `I` | Quantos itens existem, incluindo o original — um inteiro de 2 a 1024. Começa em 6. |
| Angle | `A` | Graus de um item ao seguinte, no sentido anti-horário; um ângulo negativo segue o sentido horário. Até 180°. |
| Fill | `F` | Graus do primeiro item ao último. 360 (padrão) é uma volta completa; um número menor distribui os itens por parte dela. Negativo segue o sentido horário. Até 360°. |
| Rotate | `R` | Ativada (padrão): cada cópia gira ao dar a volta. Desativada: cada cópia é deslocada para o seu lugar e fica voltada como o original. Alterna na hora — não há número a digitar. |

- Angle e Fill são duas formas de dizer a mesma coisa, então alterar uma reformula a outra. Numa volta completa o último item para um passo antes do primeiro; numa parte da volta ele cai exatamente no ângulo de preenchimento.
- Para alterar um número, pressione a letra da sua opção. O prompt vem preenchido com o valor atual — digite para substituí-lo e pressione **Enter** ou **Space**; confirmá-lo sem mudança deixa a matriz como estava.
- Items aceita apenas números inteiros; Angle e Fill aceitam decimais e um `-` inicial para o sentido horário. Um ângulo ou preenchimento de 0 é recusado, assim como um ângulo acima de 180° ou um preenchimento acima de 360° — o terminal diz o motivo.
- Um Angle pequeno demais para caber todos os itens descarta os que não têm espaço, e o terminal informa a nova contagem.
- Funciona com todos os tipos de entidade: cada cópia é o original girado em torno do centro, ou deslocado, exatamente como [Rotate](../rotate/) e [Move](../move/) fariam.

## Referência de teclado

| Tecla | Ação |
|---|---|
| `Enter` / `Space` | Confirmar a seleção, a matriz ou um número digitado |
| `I` `A` `F` `R` | Alterar Items, Angle ou Fill digitando um número; alternar Rotate |
| `0`–`9`, `.`, `-` | Digitar o número (`.` e `-` apenas para Angle e Fill, com `-` primeiro) |
| `Backspace` | Apagar o último caractere digitado |
| `Escape` | Cancelar |
