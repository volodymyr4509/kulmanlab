---
title: Lệnh ViewportRectangle — Tạo Khung Nhìn Trong Bố Cục trong KulmanLab CAD
description: Lệnh ViewportRectangle tạo khung nhìn trong bố cục giấy bằng cách chọn hai góc đối diện. Khung nhìn hiển thị các thực thể không gian mô hình theo tỉ lệ mặc định của bố cục.
---

# ViewportRectangle

Lệnh `ViewportRectangle` tạo một khung nhìn mới trong bố cục giấy đang hoạt động bằng cách chọn hai góc đối diện. Chỉ khả dụng trong không gian bố cục.

## Tạo khung nhìn

1. Chuyển sang bố cục giấy bằng tab ở dưới cùng của màn hình.
2. Gõ `ViewportRectangle` trong terminal hoặc nhấp nút **Viewport Rectangle** trên thanh công cụ.
3. **Nhấp góc đầu tiên**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
4. **Nhấp góc đối diện** — khung nhìn được đặt ngay lập tức.

Khung nhìn mới hiển thị toàn bộ mô hình theo tỉ lệ mặc định của bố cục. Dùng bánh xe cuộn bên trong khung nhìn để phóng to, hoặc kéo chuột giữa để di chuyển màn hình khung nhìn mô hình.

## Chỉnh sửa khung nhìn

Sau khi đặt khung nhìn, nhấp để chọn nó:

- **Kéo các cạnh hoặc góc** để thay đổi kích thước.
- **Kéo điểm kéo trung tâm** để di chuyển nó.
- Dùng **bộ chọn tỉ lệ** trong thanh điều khiển để đặt tỉ lệ chính xác (ví dụ: 1:50). Để nhập tỉ lệ không có trong danh sách, gõ trực tiếp vào trường nhập — chấp nhận định dạng tỉ lệ (`1:200`, `5:1`) hoặc số thập phân đơn giản (`0.005`), sau đó nhấn **Enter**.
- Nhấp chuột phải vào khung nhìn và dùng **Lock** để ngăn thay đổi vô tình.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Enter` | Xác nhận tọa độ đã gõ |
| `Escape` | Hủy |

## Ghi chú

- ViewportRectangle chỉ khả dụng khi tab bố cục giấy đang hoạt động. Chạy trong không gian mô hình hiển thị thông báo lỗi và thoát.
- Để sao chép khung nhìn hiện có, dùng [ViewportCopy](../viewport-copy/).
