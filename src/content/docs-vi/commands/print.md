---
title: Lệnh In — Xuất Bản Vẽ Dưới Dạng PNG, JPEG, WebP hoặc PDF trong KulmanLab CAD
description: Lệnh Print mở Print Manager — cửa sổ xuất chuyên dụng với bản xem trước trực tiếp, bộ chọn định dạng, nút chuyển đổi đơn sắc và chọn vùng tùy chọn. Xuất tối đa 2000×2000 px. Hỗ trợ PNG, JPEG, WebP và PDF.
---

# In

Lệnh `print` mở **Print Manager** — cửa sổ xuất chuyên dụng với canvas xem trước trực tiếp, bộ chọn định dạng (PNG / JPEG / WebP / PDF), nút chuyển đổi đơn sắc và cắt vùng tùy chọn. Không có gì được gửi đến máy in vật lý; đầu ra được tải xuống dưới dạng tệp.

## Mở Print Manager

Nhấp nút **Print** trên thanh công cụ hoặc gõ `print` trong terminal. Print Manager mở ngay lập tức hiển thị bản xem trước của khung nhìn hiện tại.

## Bố cục Print Manager

Cửa sổ có hai bảng:
- **Thanh bên trái** — tất cả điều khiển xuất.
- **Bảng phải** — canvas xem trước trực tiếp cập nhật khi bạn thay đổi cài đặt.

### Điều khiển thanh bên

| Điều khiển | Mô tả |
|-----------|-------|
| **Change Area** | Cắt đến hình chữ nhật tùy chỉnh trên canvas |
| Nút chuyển **Monochrome** | Chuyển đổi tất cả đường màu thành màu đen — mặc định bật để in sạch |
| Dropdown **Format** | PNG, JPEG, WebP hoặc PDF |
| Nút **Export** | Tạo và tải xuống tệp |

## Chọn vùng xuất tùy chỉnh

Mặc định, bản xem trước hiển thị chính xác những gì hiển thị trên canvas khi bạn mở Print Manager. Để xuất một vùng cụ thể:

1. Nhấp **Change Area** — Print Manager ẩn và canvas trở nên tương tác.
2. **Nhấp góc đầu tiên** của hình chữ nhật xuất.
3. **Nhấp góc đối diện** — Print Manager mở lại với vùng đã chọn trong bản xem trước.

Nhấn `Escape` trong quá trình chọn vùng để hủy.

## Định dạng xuất

| Định dạng | Tốt nhất cho | Ghi chú |
|-----------|-------------|---------|
| **PNG** | Không mất dữ liệu, đường sắc nét | Nền trắng, không trong suốt |
| **JPEG** | Tệp nhỏ hơn để chia sẻ | Chất lượng 95%, hơi nén |
| **WebP** | Tệp nhỏ nhất cho web | Cùng chất lượng 95%, nén tốt hơn JPEG |
| **PDF** | Tài liệu sẵn sàng in | Hình ảnh nhúng ở 150 DPI trong thùng chứa PDF |

## Độ phân giải và nền xuất

- Độ phân giải tối đa: **2000 × 2000 pixel**, chia tỉ lệ theo tỉ lệ của vùng đã chọn.
- Nền luôn là **trắng**.
- Các lớp được đánh dấu là **không in** bị loại trừ khỏi xuất.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` (trong khi chọn vùng) | Hủy chọn vùng, khôi phục vùng trước |
| `Escape` (trong Print Manager) | Đóng Print Manager |
