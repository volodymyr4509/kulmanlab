---
title: Lệnh Move — Dịch Chuyển Thực Thể Đã Chọn Theo Điểm Cơ Sở trong KulmanLab CAD
description: Lệnh Move dịch chuyển một hoặc nhiều thực thể đã chọn theo điểm cơ sở và điểm đích. Hỗ trợ chọn trước, khóa góc và nhập khoảng cách chính xác. Sau khi di chuyển, thực thể vẫn được chọn tại vị trí mới. Mọi loại thực thể đều được hỗ trợ.
group: edit
order: 1
---

# Move

Lệnh `move` dịch chuyển các thực thể đã chọn từ điểm cơ sở đến điểm đích. Vector dịch chuyển từ cơ sở đến đích được áp dụng cho mọi thực thể đã chọn. Sau khi di chuyển, tất cả thực thể vẫn được chọn tại vị trí mới.

## Hai cách bắt đầu

**Chọn trước, sau đó di chuyển** — chọn thực thể trước, rồi kích hoạt:

1. Chọn một hoặc nhiều thực thể trên canvas.
2. Gõ `move` trong terminal hoặc nhấp nút **Move** trên thanh công cụ.
3. **Nhấp điểm cơ sở**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
4. **Nhấp điểm đích** — tất cả thực thể đã chọn dịch chuyển theo vector cơ sở→đích.

**Kích hoạt, sau đó chọn** — bắt đầu lệnh khi không có gì được chọn:

1. Gõ `move` hoặc nhấp nút thanh công cụ.
2. **Chọn đối tượng** — nhấp để bật/tắt thực thể, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận lựa chọn.
4. **Nhấp điểm cơ sở**, sau đó **nhấp điểm đích**.

## Khóa góc và khoảng cách chính xác

Sau khi đặt điểm cơ sở, lệnh theo dõi trục bắt điểm 45°. Khi bị khóa:
- Bản xem trước bóng bắt điểm vào trục.
- Gõ khoảng cách rồi nhấn **Enter** để di chuyển chính xác theo hướng bị khóa.

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.` | Thêm vào giá trị khoảng cách |
| `-` | Khoảng cách âm — đảo ngược hướng dọc theo trục |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Áp dụng di chuyển tại khoảng cách đã gõ |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn và chuyển sang giai đoạn điểm cơ sở |
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc khoảng cách khi góc bị khóa |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ hoặc áp dụng di chuyển |
| `Escape` | Hủy và đặt lại |

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Vị trí ban đầu | Bị bỏ trống — thực thể không còn ở đó | Được giữ lại — bản gốc vẫn ở chỗ cũ |
| Số lượng kết quả | Cùng số lượng thực thể | Thêm một bộ cho mỗi thao tác |
| Tốt nhất cho | Định vị lại hình học | Nhân đôi hình học |
