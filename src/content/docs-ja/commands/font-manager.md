---
title: Font Manager コマンド — カスタム TTF フォントのアップロードと管理（KulmanLab CAD）
description: Font Manager コマンドは、フォントの閲覧・プレビュー・選択と、独自の .ttf ファイルのアップロードを行うダイアログを開きます。アップロードしたフォントはブラウザに保存され、DXF エクスポートに名前で埋め込まれます。
keywords: [フォントマネージャー, カスタムフォント CAD, TTF アップロード, カスタム書体 CAD, Google Fonts CAD, テキストフォント CAD, kulmanlab]
group: style
order: 2
---

# Font Manager（フォントマネージャー）

`FontManager` コマンドは、フォントを閲覧・選択し、[Text](../text/) や [Multileader](../leader/) エンティティで使用する独自の `.ttf` ファイルをアップロードするためのダイアログを開きます。

## Font Manager を開く

- ターミナルに `FontManager` と入力する、**または**
- [テキストエディター](../../interface/text-editor/) ツールバーの **Font Manager** ボタンをクリックします。

## フォントグループ

| グループ | 内容 |
|---------|------|
| **Default** | 組み込みのサンセリフフォント — 常に利用可能 |
| **User** | あなたがアップロードした `.ttf` フォント（1 つ追加すると表示されます） |
| **Free** | 同梱の Google Fonts 15 種類（EB Garamond、Fira Code、Inter、Lato、Merriweather、Montserrat、Nunito、Open Sans、Oswald、Playfair Display、Poppins、Raleway、Roboto、Roboto Condensed、Source Code Pro） |
| **System** | 一般的な OS フォント（Courier New、Georgia、Helvetica、Impact、Lucida Console、Tahoma、Times New Roman、Trebuchet MS、Verdana） |

リストの任意のフォントをクリックすると、右側にプレビューが表示されます — 名前、アルファベットサンプル、パングラム、数字。

## カスタムフォントをアップロードする

1. ダイアログ下部の **Add Font** をクリックします（または、ターミナルに `Font+` と入力するとファイル選択ダイアログが直接開きます）。
2. `.ttf` ファイルを選択します。対応しているのは TrueType フォントのみです — `.otf` や `.woff`/`.woff2` には対応していません。
3. ファイル名（拡張子を除く）が **User** グループでのフォント名になります。例えば `MyFont.ttf` をアップロードすると、`MyFont` という名前のフォントが追加されます。

アップロードしたフォントはブラウザ（IndexedDB）に永続的に保存され、次回 KulmanLab CAD を開いたときに自動的に再読み込みされます。

## カスタムフォントを削除する

**User** グループ内のフォントにカーソルを合わせ、隣に表示される **×** ボタンをクリックします。組み込みフォント（Default、Free、System）は削除できません。

## キーボードリファレンス

| キー | 操作 |
|-----|------|
| `↑` / `↓` | フォントリスト内で選択を上下に移動 |
| `Escape` | Font Manager を閉じる |

## DXF 互換性

フォント名はエクスポートされる **MTEXT** エンティティにインラインの書式コードとして埋め込まれるため、KulmanLab CAD を経由してラウンドトリップした DXF もフォント指定を保持します。カスタムフォントの*ファイル*自体は DXF に埋め込まれません — 埋め込まれるのはフォント*名*のみです。このデバイスにアップロードしていないカスタムフォントを参照する図面を再インポートすると、同じ名前のフォントをアップロードするまで、テキストはデフォルトのフォントで表示されます。

## 関連コマンド

- [Text](../text/) — フォント選択の対象となるテキストラベルを配置します
- [Match Properties](../match-properties/) — エンティティ間でテキスト高さをコピーします（フォントはコピーされません）
