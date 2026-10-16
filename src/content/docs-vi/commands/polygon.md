---
title: "Lệnh Polygon — vẽ đa giác đều từ tâm hoặc cạnh trong KulmanLab CAD"
description: "Lệnh Polygon vẽ đa giác đều có từ 3 đến 1024 cạnh từ tâm và bán kính, hoặc từ một cạnh. Kết quả là một LWPOLYLINE đóng, nên mọi lệnh chỉnh sửa polyline đều áp dụng được."
keywords: ["lệnh đa giác CAD", "vẽ đa giác đều CAD", "lục giác bát giác ngũ giác CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Lệnh `ĐaGiác` vẽ đa giác đều — mọi cạnh và góc bằng nhau — có từ 3 đến 1024 cạnh. Gõ `ĐaGiác` trong terminal. Kết quả là một **`LWPOLYLINE` đóng**, nên sau khi đặt nó hoạt động như mọi [Polyline](../polyline/) khác và mọi chỉnh sửa polyline đều áp dụng.

## Vẽ đa giác

1. Gõ `ĐaGiác` trong terminal và nhập **số cạnh** — số nguyên từ 3 đến 1024 — rồi nhấn **Enter** hoặc **Space**. Lời nhắc được điền sẵn số lần trước bạn dùng (lần đầu là 4); bắt đầu gõ để thay thế. Giá trị khác bị từ chối và ở lại trong lời nhắc để sửa.
2. **Nhấp vào tâm**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác. Nhấn `E` trước để bắt đầu từ một cạnh thay vào đó (xem bên dưới).
3. **Nhấp để chọn bán kính** — đa giác xem trước trực tiếp — hoặc gõ bán kính rồi nhấn **Enter** hoặc **Space**.
4. Đa giác được đặt và lệnh kết thúc.

## Tùy chọn

| Tùy chọn | Phím | Tác dụng |
|---|---|---|
| Edge | `E` | Điểm đầu tiên trở thành một đầu của cạnh thay vì tâm. Chọn đầu thứ hai; các đỉnh còn lại được dựng ngược chiều kim đồng hồ, bên trái cạnh đi từ đầu thứ nhất đến đầu thứ hai. Nhấn `E` lần nữa để quay lại tâm. |
| Inside | `I` | Bật theo mặc định và được giữ từ đa giác này sang đa giác sau. Bật: các đỉnh nằm trên đường tròn có bán kính đã cho. Tắt: đa giác nằm ngoài đường tròn đó, với trung điểm mỗi cạnh nằm trên nó. |

- Một lần nhấp đặt một đỉnh (Inside bật) hoặc trung điểm của một cạnh (Inside tắt) đúng nơi con trỏ đang ở, nên con trỏ cũng quyết định hướng.
- Bán kính đã gõ không có hướng để ngắm, nên đa giác được đặt với cạnh thấp nhất nằm ngang — trừ khi khóa góc đang bật, khi đó nó theo góc đã khóa.
- Mỗi tùy chọn được đưa ra ở bước riêng và có thể bật tắt ngay cả khi đang gõ một số.

## Tham khảo phím

| Phím | Hành động |
|---|---|
| `0`–`9`, `.` | Gõ số cạnh, bán kính, tọa độ hoặc độ dài |
| `E` | Bật hoặc tắt Edge (bước điểm đầu tiên) |
| `I` | Bật hoặc tắt Inside (bước bán kính) |
| `Enter` / `Space` | Xác nhận số cạnh hoặc bán kính |
| `Escape` | Hủy |

## DXF — thực thể LWPOLYLINE

Đa giác được lưu dưới dạng `LWPOLYLINE` đóng với một đỉnh cho mỗi góc; DXF không có kiểu đa giác riêng. Mọi thuộc tính — tọa độ đỉnh, màu, layer, kiểu đường, tỉ lệ kiểu đường và độ dày — được giữ nguyên không mất mát, và mọi trình xem DXF đều đọc nó như một polyline đóng.
