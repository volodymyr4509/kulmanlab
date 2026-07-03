---
title: Lệnh ViewportCopy — Nhân Đôi Khung Nhìn trong KulmanLab CAD
description: Lệnh ViewportCopy nhân đôi khung nhìn đã chọn đến vị trí mới trong cùng bố cục, bảo toàn tỉ lệ và cài đặt khung nhìn mô hình. Hỗ trợ nhập tọa độ chính xác, khóa góc và nhập khoảng cách đã gõ.
---

# ViewportCopy

Lệnh `ViewportCopy` sao chép một khung nhìn đến vị trí mới, bảo toàn tỉ lệ và tâm mô hình của nó. Chỉ khả dụng trong không gian bố cục.

## Sao chép khung nhìn

1. Chuyển sang tab bố cục giấy.
2. Tùy chọn nhấp khung nhìn để chọn trước.
3. Gõ `ViewportCopy` trong terminal hoặc nhấp nút **Viewport Copy** trên thanh công cụ.
4. Nếu không có khung nhìn nào được chọn trước, **nhấp khung nhìn** cần sao chép.
5. **Nhấp điểm cơ sở** — tham chiếu cho dịch chuyển. Hoặc gõ `X,Y` rồi nhấn **Enter**.
6. **Nhấp điểm đích** — khung nhìn được đặt tại khoảng lệch cơ sở→đích. Hoặc dùng nhập tọa độ / khóa góc.

Sau khi đặt, lệnh vẫn hoạt động — nhấp điểm đích khác để đặt bản sao khác của cùng khung nhìn. Nhấn **Enter**, **Space** hoặc **Escape** để kết thúc.

## Khóa góc và khoảng cách chính xác

Sau khi điểm cơ sở được đặt, lệnh bắt điểm vào các trục 45° khi con trỏ căn chỉnh. Khi bị khóa:

- Bản xem trước bắt điểm vào trục.
- Gõ khoảng cách rồi nhấn **Enter** để đặt bản sao chính xác ở khoảng lệch đó theo hướng bị khóa.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc khoảng cách khi góc bị khóa |
| `,` | Khóa X và chuyển sang nhập Y |
| `Enter` | Xác nhận tọa độ hoặc khoảng cách đã gõ |
| `Enter` / `Space` | Kết thúc (khi không có nhập liệu nào đang diễn ra) |
| `Escape` | Hủy và đặt lại |

## Ghi chú

- ViewportCopy chỉ khả dụng khi tab bố cục giấy đang hoạt động.
- Khung nhìn được sao chép kế thừa cùng tỉ lệ, tâm mô hình, trạng thái khóa và kích thước với bản gốc.
- Để tạo khung nhìn mới từ đầu, dùng [ViewportRectangle](../viewport-rectangle/).
