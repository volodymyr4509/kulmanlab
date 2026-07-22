---
title: Trình Soạn Thảo Văn Bản — Chế Độ Phong Phú và Đơn Giản
description: Trình soạn thảo văn bản KulmanLab CAD có hai chế độ — phong phú (định dạng theo ký tự, nhiều dòng, tự động xuống dòng cho Văn Bản và Đường Dẫn Đa) và đơn giản (kiểu thống nhất, một dòng cho các thực thể kích thước). Chip chế độ trong tiêu đề hiển thị chế độ nào đang hoạt động.
group: interface
order: 5
---

# Trình Soạn Thảo Văn Bản

Trình soạn thảo văn bản mở khi bạn đặt hoặc nhấp đúp vào thực thể có thể chỉnh sửa. Một **chip chế độ** nhỏ trong tiêu đề — **rich** (màu nhấn) hoặc **simple** (màu tắt) — hiển thị chế độ nào đang hoạt động cho thực thể hiện tại.

## Chế độ trình soạn thảo

### Chế độ phong phú

Sử dụng bởi: **Text** (nhãn MTEXT) và chú thích **Leader**.

| Tính năng | Hành vi |
|-----------|---------|
| Bold / Italic / Strikethrough | Theo ký tự (áp dụng cho lựa chọn, hoặc toàn bộ thực thể nếu không có lựa chọn) |
| Font và Height | Ghi đè theo ký tự, hoặc mặc định toàn thực thể |
| Alignment (Left / Center / Right / Justify) | **Chỉ văn bản** — không khả dụng cho Leader |
| `Enter` | Chèn ngắt dòng cứng |
| `Shift+←/→` | Mở rộng hoặc thu hẹp lựa chọn văn bản |
| `Home` / `End` | Nhảy đến đầu/cuối dòng cứng hiện tại |
| Xuống dòng tự động | Được hỗ trợ qua các điểm kéo thay đổi chiều rộng tham chiếu |

### Chế độ đơn giản

Sử dụng bởi: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Trình soạn thảo được điền sẵn nhãn hiển thị hiện tại của kích thước để bạn có thể đặt con trỏ và chỉnh sửa giá trị trực tiếp.

| Tính năng | Hành vi |
|-----------|---------|
| Bold / Italic / Font / Height | Có thể dùng — áp dụng cho **toàn bộ nhãn** cùng một lúc |
| Định dạng theo ký tự | Không được hỗ trợ |
| `Enter` | **Xác nhận** giá trị và đóng trình soạn thảo (không ngắt dòng) |
| Nhiều dòng | Không được hỗ trợ |
| Xuống dòng tự động | Không được hỗ trợ |

## Mở trình soạn thảo

| Hành động | Kết quả |
|-----------|---------|
| Lệnh `text` → nhấp vị trí | Tạo thực thể văn bản mới và mở trình soạn thảo (**phong phú**) |
| Nhấp đúp thực thể **Text** hiện có | Mở lại trình soạn thảo ở chế độ **phong phú** |
| Nhấp đúp **Leader** hiện có | Mở trình soạn thảo ở chế độ **phong phú** |
| Nhấp đúp thực thể **kích thước** | Mở trình soạn thảo ở chế độ **đơn giản** |
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

Dropdown nhóm các phông chữ khả dụng thành **Default** (phông chữ sans-serif tích hợp sẵn), **User** (phông chữ bạn tự tải lên, nếu có), **Free** (một bộ Google Fonts đi kèm), và **System** (các phông chữ hệ điều hành thông dụng như Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console và Impact).

- **Với lựa chọn** — ghi đè phông chữ chỉ cho các ký tự được chọn.
- **Không có lựa chọn** — áp dụng phông chữ cho toàn bộ thực thể.

Không chỉ giới hạn ở danh sách tích hợp sẵn — nhấp nút **Font Manager** trên thanh công cụ để tải lên tệp `.ttf` của riêng bạn và thêm vào nhóm **User**. Xem [Font Manager](../../commands/font-manager/) để biết chi tiết.

### Chiều cao

Trường số đặt **chiều cao chữ hoa** (chiều cao của chữ hoa) theo đơn vị bản vẽ.

- **Với lựa chọn** — ghi đè chiều cao cho các ký tự được chọn.
- **Không có lựa chọn** — thay đổi chiều cao cơ sở của thực thể.

### Căn Chỉnh

Bốn nút — **Align Left**, **Align Center**, **Align Right**, **Justify** — đặt canh chỉnh đoạn văn. Chỉ khả dụng cho thực thể **Text**; nhãn Leader và kích thước không hiển thị các nút này.

- Nhấp vào một nút sẽ canh chỉnh lại từng dòng trong hộp bao hiện có của thực thể — không di chuyển điểm chèn hoặc thay đổi kích thước hộp.
- Nhấp vào nút đã hoạt động sẽ xóa ghi đè, quay lại cột được ngụ ý bởi điểm gắn của thực thể.
- **Justify** kéo giãn khoảng cách giữa các từ để mỗi dòng lấp đầy toàn bộ chiều rộng dòng.

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

## Sao chép, cắt và dán

| Phím | Hành động |
|------|-----------|
| `Ctrl+C` / `Cmd+C` | Sao chép văn bản đã chọn |
| `Ctrl+X` / `Cmd+X` | Cắt văn bản đã chọn |
| `Ctrl+V` / `Cmd+V` | Dán tại con trỏ |

Sao chép và cắt yêu cầu có lựa chọn văn bản đang hoạt động. Văn bản được dán luôn là văn bản thuần — nó nhận định dạng (in đậm, in nghiêng, phông chữ, chiều cao) đã có sẵn tại con trỏ thay vì giữ định dạng mà nó có khi được sao chép.

Ở **Chế độ phong phú**, các ngắt dòng trong văn bản được dán sẽ được giữ nguyên. Ở **Chế độ đơn giản**, các ngắt dòng bị loại bỏ vì nhãn kích thước chỉ có một dòng.

## Xuống dòng tự động

Khi thực thể văn bản có **chiều rộng tham chiếu** được đặt, các dòng dài sẽ tự động xuống dòng tại ranh giới từ để vừa với chiều rộng đó.

Để đặt hoặc thay đổi chiều rộng tham chiếu trong khi thực thể được chọn, kéo **các điểm kéo thay đổi kích thước** — các hình chữ nhật mỏng ở cạnh trái và phải của hộp bao nét đứt. Nội dung tự động sắp xếp lại khi bạn kéo.

## Văn bản nhiều dòng

Nhấn `Enter` để chèn ngắt dòng cứng. Mỗi dòng cứng là độc lập — `Home` và `End` điều hướng trong dòng cứng hiện tại.

## Tương thích DXF

Thực thể văn bản được lưu dưới dạng **MTEXT** trong tệp DXF. In đậm và in nghiêng được mã hóa bằng `\L`, `\K`, `\O` và các chuyển phông chữ nội tuyến (`\f`). Chiều cao theo ký tự được mã hóa là `\H`. Tất cả định dạng được bảo toàn khi xuất và đọc được bởi LibreCAD, FreeCAD và các ứng dụng tương thích DXF khác.
