---
title: Trình Soạn Thảo Văn Bản — Định Dạng Văn Bản Phong Phú trong KulmanLab CAD
description: Trình soạn thảo văn bản KulmanLab CAD cho phép bạn đặt nhãn MTEXT nhiều dòng có định dạng phong phú với in đậm, in nghiêng, gạch ngang, ghi đè phông chữ và chiều cao theo ký tự, xuống dòng tự động và điều hướng con trỏ đầy đủ.
---

# Trình Soạn Thảo Văn Bản

Trình soạn thảo văn bản mở khi bạn đặt nhãn văn bản mới bằng lệnh `text` hoặc nhấp đúp vào thực thể văn bản hiện có. Nó hỗ trợ nội dung nhiều dòng, định dạng theo ký tự và xuống dòng tự động.

## Mở trình soạn thảo

| Hành động | Kết quả |
|-----------|---------|
| Lệnh `text` → nhấp vị trí | Tạo thực thể văn bản mới và mở trình soạn thảo |
| Nhấp đúp thực thể văn bản hiện có | Mở lại trình soạn thảo cho thực thể đó |
| `Escape` bên trong trình soạn thảo | Đóng trình soạn thảo và giữ tất cả thay đổi |

## Thanh công cụ

Thanh công cụ nổi phía trên hộp bao của văn bản và neo vào thực thể khi bạn di chuyển màn hình hoặc phóng to.

### In Đậm · In Nghiêng · Gạch Ngang

| Nút | Tác dụng |
|-----|---------|
| **B** | Bật/tắt in đậm |
| *I* | Bật/tắt in nghiêng |
| ~~S~~ | Bật/tắt gạch ngang |

**Cách bật/tắt áp dụng:**

- **Với lựa chọn văn bản** — kiểu được áp dụng cho chính xác các ký tự được chọn.
- **Không có lựa chọn, con trỏ trong văn bản hiện có** — bật/tắt kiểu trên toàn bộ thực thể.
- **Văn bản trống hoặc thực thể mới** — kiểu được lưu trên đoạn trống và áp dụng cho mọi ký tự bạn gõ từ đó trở đi.

### Phông chữ

Dropdown liệt kê các bộ phông chữ đa nền tảng (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). Tùy chọn đầu **Arial** là mặc định.

- **Với lựa chọn** — ghi đè phông chữ chỉ cho các ký tự được chọn.
- **Không có lựa chọn** — áp dụng phông chữ cho toàn bộ thực thể.

### Chiều cao

Trường số đặt **chiều cao chữ hoa** (chiều cao của chữ hoa) theo đơn vị bản vẽ.

- **Với lựa chọn** — ghi đè chiều cao cho các ký tự được chọn.
- **Không có lựa chọn** — thay đổi chiều cao cơ sở của thực thể.

## Con trỏ và điều hướng

| Phím | Hành động |
|------|-----------|
| `←` / `→` | Di chuyển dấu gạch nháy một ký tự trái hoặc phải |
| `Home` | Nhảy đến đầu dòng cứng hiện tại |
| `End` | Nhảy đến cuối dòng cứng hiện tại |
| `Shift` + `←` / `→` | Mở rộng hoặc thu hẹp lựa chọn |
| `Backspace` | Xóa ký tự bên trái (hoặc lựa chọn) |
| `Delete` | Xóa ký tự bên phải (hoặc lựa chọn) |
| `Enter` | Chèn ngắt dòng |
| `Escape` | Đóng trình soạn thảo |

## Xuống dòng tự động

Khi thực thể văn bản có **chiều rộng tham chiếu** được đặt, các dòng dài sẽ tự động xuống dòng tại ranh giới từ để vừa với chiều rộng đó.

Để đặt hoặc thay đổi chiều rộng tham chiếu trong khi thực thể được chọn, kéo **các điểm kéo thay đổi kích thước** — các hình chữ nhật mỏng ở cạnh trái và phải của hộp bao nét đứt. Nội dung tự động sắp xếp lại khi bạn kéo.

## Văn bản nhiều dòng

Nhấn `Enter` để chèn ngắt dòng cứng. Mỗi dòng cứng là độc lập — `Home` và `End` điều hướng trong dòng cứng hiện tại.

## Tương thích DXF

Thực thể văn bản được lưu dưới dạng **MTEXT** trong tệp DXF. In đậm và in nghiêng được mã hóa bằng `\L`, `\K`, `\O` và các chuyển phông chữ nội tuyến (`\f`). Chiều cao theo ký tự được mã hóa là `\H`. Tất cả định dạng được bảo toàn khi xuất và đọc được bởi LibreCAD, FreeCAD và các ứng dụng tương thích DXF khác.
