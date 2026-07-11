---
title: KulmanLab CAD — コマンドリファレンス
description: KulmanLab CAD コマンドリファレンス — 図形描画・編集・マークアップ・レイヤー・計測・ファイル操作のすべてのコマンドを網羅したガイド。
keywords: [KulmanLab, KulmanLab CAD, CADコマンド, 無料ブラウザCAD, DXFエディタ オンライン, 描画コマンド, kulmanlab コマンド]
group: overview
order: 1
---

# KulmanLab CAD — コマンドリファレンス

**KulmanLab CAD** コマンドリファレンスへようこそ。[KulmanLab CAD](https://kulmanlab.com) はインストール不要で DXF ファイルの作図・編集・エクスポートができる、無料のブラウザ型 CAD ツールです。サイドバーからパネルごとにコマンドを参照できます。

## 図形

| コマンド | 機能 |
|---------|------|
| [Line](./commands/line/) | 2 点間に直線を描く |
| [Polyline](./commands/polyline/) | 複数セグメントの開いたパスを描く |
| [Rectangle](./commands/rectangle/) | 軸平行な長方形を描く |
| [Circle](./commands/circle/) | 中心と半径で円を描く |
| [Arc](./commands/arc/) | 3 点を通る円弧を描く |
| [Ellipse](./commands/ellipse/) | 中心と 2 軸で楕円を描く |
| [Text](./commands/text/) | キャンバスにテキストラベルを配置する |
| [Spline CV](./commands/spline-cv/) | コントロール頂点を配置してスプラインを描く |
| [Spline Fit](./commands/spline-fit/) | クリック点を通過するスプラインを描く |

## 編集

| コマンド | 機能 |
|---------|------|
| [Move](./commands/move/) | 選択エンティティを新しい位置に移動する |
| [Copy](./commands/copy/) | 選択エンティティを新しい位置に複製する |
| [Rotate](./commands/rotate/) | 基点を中心に選択エンティティを回転する |
| [Mirror](./commands/mirror/) | 軸を基準に選択エンティティを鏡像複製する |
| [Scale](./commands/scale/) | 基点を中心に選択エンティティを拡大縮小する |
| [Align](./commands/align/) | 点のペアを使ってエンティティを移動・回転・任意で拡大縮小する |
| [Delete](./commands/delete/) | 選択エンティティを図面から削除する |
| [Trim](./commands/trim/) | 交点で直線セグメントをトリムする |
| [Extend](./commands/extend/) | 直線を最近傍の境界交点まで延長する |
| [Offset](./commands/offset/) | 指定距離で平行コピーを作成する |
| [Fillet](./commands/fillet/) | 2 直線の角を接線円弧で丸める |
| [Chamfer](./commands/chamfer/) | 2 直線またはポリラインの角を斜め直線で切り取る |
| [Undo](./commands/undo/) | 直前の操作を取り消す |
| [Redo](./commands/redo/) | 取り消した操作をやり直す |

## マークアップ

| コマンド | 機能 |
|---------|------|
| [Leader](./commands/leader/) | 矢印とテキストを持つ引出線注釈を描く |
| [Leader+](./commands/leader-add/) | 既存の引出線にアームを追加する |
| [Leader−](./commands/leader-remove/) | 既存の引出線からアームを削除する |
| [Dimension Linear](./commands/dim-linear/) | 水平または垂直寸法を追加する |
| [Dimension Aligned](./commands/dim-aligned/) | 2 点に整列した寸法を追加する |
| [Dimension Continue](./commands/dim-continue/) | 直前の寸法から連続寸法を追加する |
| [Dimension Radius](./commands/dim-radius/) | 円または円弧に半径寸法を追加する |
| [Dimension Diameter](./commands/dim-diameter/) | 円に直径寸法を追加する |
| [Dimension Angular](./commands/dim-angular/) | 2 直線・円弧・円に角度寸法を追加する |

## レイヤー

| コマンド | 機能 |
|---------|------|
| [LayerMakeCurrent](./commands/layer-make-current/) | クリックしたエンティティのレイヤーをカレントレイヤーに設定する |
| [LayerMatch](./commands/layer-match/) | 選択エンティティをソースエンティティのレイヤーに合わせて変更する |
| [LayerIsolate](./commands/layer-isolate/) | 選択エンティティのレイヤー以外をすべてフリーズする |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | すべてのレイヤーを一括でフリーズ解除する |

## レイアウト

| コマンド | 機能 |
|---------|------|
| [ViewportRectangle](./commands/viewport-rectangle/) | 2 点を指定してペーパーレイアウトにビューポートを作成する |
| [ViewportCopy](./commands/viewport-copy/) | ビューポートを新しい位置に複製する |
| [PageManager](./commands/page-manager/) | アクティブなレイアウトの用紙サイズと尺度を編集する |

## ナビゲーション

| コマンド | 機能 |
|---------|------|
| [Pan](./commands/pan/) | クリックしてドラッグしてビューポートを移動する |
| [Zoom In](./commands/zoom-in/) | ビューポートを拡大する |
| [Zoom Out](./commands/zoom-out/) | ビューポートを縮小する |
| [Fit](./commands/fit/) | すべてのエンティティをビューポートに収める |

## 計測

| コマンド | 機能 |
|---------|------|
| [Distance](./commands/distance/) | 2 点間の距離を計測する |
| [Angle](./commands/angle/) | 3 点間の角度を計測する |
| [Area](./commands/area/) | 多角形の面積と周長を計測する |

## スタイル

| コマンド | 機能 |
|---------|------|
| [Match Properties](./commands/match-properties/) | 色・レイヤーなどのプロパティをエンティティ間でコピーする |
| [Font Manager](./commands/font-manager/) | フォントを閲覧・選択し、カスタム TTF フォントをアップロードする |

## ファイル

| コマンド | 機能 |
|---------|------|
| [Import](./commands/import/) | DXF または JSON 図面ファイルを開く |
| [New File](./commands/new-file/) | 空白の新しい図面を開始する |
| [Files](./commands/files/) | 最近の図面を参照して復元する |
| [Print](./commands/print/) | 図面エリアを画像または PDF としてエクスポートする |
| [Export](./commands/export/) | 図面を DXF または JSON でダウンロードする |
| [WipeStorage](./commands/wipestorage/) | ブラウザストレージからすべての図面を削除する |

## 復旧

非常に大きな座標で作業した後など、起動のたびにアプリがクラッシュする場合は、URL に `?reset` を追加してすべてのローカルデータを消去できます:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

このコマンドはブラウザのローカルデータベースからすべてのデータを削除し、空白の新しい図面を開始します。`?reset` パラメータは自動的に URL から削除されます。アプリが全く起動しないために [WipeStorage](./commands/wipestorage/) に到達できない場合の最終手段として使用してください。

## コマンドの仕組み

すべてのコマンドは同じパターンに従います:

1. **起動** — ツールバーボタンをクリックするか、画面下部のターミナルにコマンド名を入力します。
2. **プロンプトに従う** — ターミナルに次に必要な入力が表示されます。
3. **完了またはキャンセル** — ほとんどのコマンドは最後の入力後に自動的に終了します。いつでも **Escape** を押してキャンセルできます。

## オブジェクトの選択

複数の編集コマンド（Move、Copy、Rotate、Mirror、Scale、Delete）は同じ選択動作を共有します:

- エンティティを**クリック**して選択/選択解除します。
- **右方向にドラッグ**（左から右）すると厳密選択 — ボックス内に完全に入っているエンティティのみが選択されます。
- **左方向にドラッグ**（右から左）すると交差選択 — ボックスと交差するエンティティが選択されます。
- **Enter** または **Space** を押して選択を確定し、次のステップに進みます。
