---
title: Lệnh Explode — Tách Polyline thành các Thực thể Line và Arc
description: Lệnh Explode tách một polyline ngay tại chỗ thành các thực thể Line và Arc riêng lẻ, mỗi đoạn một thực thể. Mỗi mảnh giữ nguyên độ dày nét, màu sắc, lớp và kiểu đường của polyline gốc. Chỉ hoạt động trên các thực thể Polyline.
keywords: [lệnh explode CAD, tách polyline CAD, tách polyline thành các đường thẳng, chuyển polyline thành line và arc, kulmanlab]
group: edit
order: 16
---

# Explode

Lệnh `PhânRã` tách một [Polyline](../polyline/) thành các thực thể [Line](../line/) và [Arc](../arc/) riêng lẻ — mỗi đoạn một thực thể, đúng tại vị trí các đỉnh của polyline. Các mảnh thay thế polyline tại chỗ và giữ nguyên độ dày nét, màu sắc, lớp và kiểu đường của nó.

Explode chỉ hoạt động trên các thực thể **Polyline**.

## Sử dụng explode

Hai cách để chạy lệnh này, cùng mẫu với [Delete](../delete/):

**Chọn trước, rồi explode** — cách nhanh nhất:

1. Chọn một hoặc nhiều polyline trên canvas.
2. Gõ `PhânRã` trong terminal, hoặc nhấp nút **Explode** trong bảng Edit.

Các polyline đã chọn được tách ngay lập tức — không có bước xác nhận riêng, vì đã có thứ được chọn sẵn.

**Kích hoạt, rồi chọn**:

1. Gõ `PhânRã` hoặc nhấp nút thanh công cụ khi chưa chọn gì.
2. **Chọn các polyline** — nhấp để bật/tắt, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Phím cách** để xác nhận và tách các polyline đã chọn.

Trong quá trình chọn, chỉ có polyline được lấy — nhấp vào một Line, Circle hoặc thực thể khác sẽ không có tác dụng gì, và thao tác kéo vùng sẽ bỏ qua mọi thứ trừ các polyline nằm trong hoặc cắt qua vùng đó.

## Kết quả nhận được

Mỗi đoạn của polyline trở thành một thực thể riêng:

- Một **đoạn thẳng** trở thành một **Line**.
- Một **đoạn cung** (từ [tùy chọn Arc](../polyline/) của Polyline) trở thành một **Arc**, khớp chính xác với tâm, bán kính và góc quét của đường cong gốc.

Mỗi Line và Arc kết quả kế thừa **độ dày nét, màu sắc, lớp, kiểu đường và tỷ lệ kiểu đường** của polyline gốc — hình dạng hình học không thay đổi gì cả, chỉ là giờ đây nó trở thành nhiều thực thể độc lập thay vì một polyline liền mạch.

Thao tác explode có thể hoàn tác trong một bước bằng [Undo](../undo/), giống như bất kỳ chỉnh sửa nào khác.

## Lựa chọn trong khi thực hiện lệnh

| Phương thức | Hành vi |
|-------------|---------|
| **Nhấp** | Bật/tắt polyline dưới con trỏ trong/ngoài vùng chọn; nhấp vào thực thể không phải polyline sẽ không có tác dụng gì |
| **Kéo sang phải** (nghiêm ngặt) | Chỉ chọn các polyline nằm hoàn toàn trong hộp |
| **Kéo sang trái** (giao cắt) | Chọn các polyline cắt qua ranh giới hộp |
| **Enter** / **Phím cách** | Xác nhận và tách các polyline đã chọn |

## Thực Thể Được Hỗ Trợ

| Thực Thể | Hỗ Trợ |
|----------|---------|
| Polyline / Rectangle | Có |
| Line, Arc, Circle, Ellipse | Không — không có gì để tách |
| Text, Spline, Dimension, Leader, Hatch | Không |
