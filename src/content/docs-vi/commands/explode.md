---
title: "Lệnh Explode — tách polyline hoặc khối thành các phần"
description: "Lệnh Explode tách một polyline thành các thực thể Line và Arc, hoặc một tham chiếu khối thành các thực thể mà khối của nó vẽ, ngay tại chỗ. Các phần trông y hệt bản gốc."
keywords: [lệnh explode CAD, tách polyline CAD, tách polyline thành các đường thẳng, chuyển polyline thành line và arc, kulmanlab]
group: edit
order: 19
---

# Explode

Lệnh `PhânRã` tách một [Polyline](../polyline/) thành các thực thể [Line](../line/) và [Arc](../arc/) riêng lẻ — mỗi đoạn một thực thể, đúng tại vị trí các đỉnh của polyline. Các mảnh thay thế polyline tại chỗ và giữ nguyên độ dày nét, màu sắc, lớp và kiểu đường của nó.

Explode áp dụng cho thực thể **Polyline** và **tham chiếu khối**.

## Sử dụng explode

Hai cách để chạy lệnh này, cùng mẫu với [Delete](../delete/):

**Chọn trước, rồi explode** — cách nhanh nhất:

1. Chọn một hoặc nhiều polyline trên canvas.
2. Gõ `PhânRã` trong terminal, hoặc chọn **Explode** từ menu thả xuống trong bảng Edit.

Các polyline đã chọn được tách ngay lập tức — không có bước xác nhận riêng, vì đã có thứ được chọn sẵn.

**Kích hoạt, rồi chọn**:

1. Gõ `PhânRã` hoặc chọn **Explode** từ menu thả xuống khi chưa chọn gì.
2. **Chọn polyline hoặc tham chiếu khối** — nhấp để bật/tắt, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Phím cách** để xác nhận và tách các polyline đã chọn.

Khi chọn, chỉ polyline và tham chiếu khối được lấy — nhấp vào Line, Circle hay thực thể khác không có tác dụng, và kéo vùng bỏ qua mọi thứ khác nằm trong hoặc cắt qua.

## Kết quả nhận được

Mỗi đoạn của polyline trở thành một thực thể riêng:

- Một **đoạn thẳng** trở thành một **Line**.
- Một **đoạn cung** (từ [tùy chọn Arc](../polyline/) của Polyline) trở thành một **Arc**, khớp chính xác với tâm, bán kính và góc quét của đường cong gốc.

Mỗi Line và Arc kết quả kế thừa **độ dày nét, màu sắc, lớp, kiểu đường và tỷ lệ kiểu đường** của polyline gốc — hình dạng hình học không thay đổi gì cả, chỉ là giờ đây nó trở thành nhiều thực thể độc lập thay vì một polyline liền mạch.

Một **tham chiếu khối** trở thành các thực thể mà khối của nó vẽ, đặt đúng chỗ tham chiếu từng hiển thị. Các thực thể mà khối giữ ẩn — các trạng thái khác của khối động — bị bỏ qua; mỗi thuộc tính trở thành một Text thường mang giá trị của nó; các phần vẽ ByBlock lấy màu của tham chiếu, còn các phần trên layer 0 lấy layer của nó. Một khối lồng bên trong trở thành tham chiếu khối riêng, bạn có thể tách tiếp. Tham chiếu có tỉ lệ X và Y khác nhau không được lấy, vì các đường tròn của nó sẽ phải thành elip.

Thao tác explode có thể hoàn tác trong một bước bằng [Undo](../undo/), giống như bất kỳ chỉnh sửa nào khác.

## Lựa chọn trong khi thực hiện lệnh

| Phương thức | Hành vi |
|-------------|---------|
| **Nhấp** | Thêm hoặc bỏ polyline hay tham chiếu khối dưới con trỏ khỏi vùng chọn; nhấp vào thực thể khác không có tác dụng |
| **Kéo sang phải** (chặt) | Chỉ chọn polyline và tham chiếu khối nằm hoàn toàn trong hộp |
| **Kéo sang trái** (cắt qua) | Chọn polyline và tham chiếu khối cắt biên hộp |
| **Enter** / **Space** | Xác nhận và tách vùng chọn |

## Thực Thể Được Hỗ Trợ

| Thực Thể | Hỗ Trợ |
|----------|---------|
| Polyline / Rectangle | Có |
| Tham chiếu khối | Có, trừ khi tỉ lệ X và Y khác nhau |
| Line, Arc, Circle, Ellipse | Không — không có gì để tách |
| Text, Spline, Dimension, Leader, Hatch | Không |
