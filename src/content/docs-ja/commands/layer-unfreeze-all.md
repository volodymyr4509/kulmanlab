---
sidebar_position: 1
title: LayerUnfreezeAll コマンド — すべてのレイヤーのフリーズを解除（KulmanLab CAD）
description: LayerUnfreezeAll コマンドは図面内のすべてのレイヤーのフリーズフラグを 1 ステップでクリアします。
keywords: [レイヤーフリーズ解除, 全レイヤー解除 CAD, kulmanlab レイヤー管理]
---

# LayerUnfreezeAll

`LayerUnfreezeAll` コマンドは図面内の**すべてのレイヤー**のフリーズフラグを即座にクリアします。選択や確認は不要です — 実行して 1 ステップで完了します。

## 使用手順

ターミナルに `LayerUnfreezeAll` と入力するか、**Unfreeze All** ツールバーボタン（太陽アイコン）をクリックします。フリーズされていたすべてのレイヤーが即座に表示されます。

## 使用するタイミング

通常は [LayerIsolate](./layer-isolate) の後に使用して、すべてのレイヤーを通常の表示状態に戻します。

## 動作の詳細

- 現在の状態に関係なく、すべてのレイヤーに適用されます。
- ロックフラグやプロットフラグには影響しません — フリーズフラグのみが変更されます。
- コマンドはプロンプトなしに即座に終了します。
