---
title: Print Manager — Xuất Bản Vẽ Dưới Dạng PNG, JPEG, WebP hoặc PDF
description: Lệnh PrintManager mở Print Manager — cửa sổ xuất chuyên dụng với bản xem trước trực tiếp khớp chính xác với tệp được xuất, cài đặt Chất lượng/DPI, bộ chọn định dạng, kiểu in Default/Monochrome/Blueprint và chọn vùng tùy chọn. Hỗ trợ PNG, JPEG, WebP và PDF.
keywords: [CAD xuất PNG, CAD xuất PDF, in bản vẽ CAD, print manager, chất lượng in DPI, xuất đơn sắc, kiểu in blueprint, kulmanlab export]
group: file
order: 4
---

# Print Manager

Lệnh `QuảnLýIn` mở **Print Manager** — cửa sổ xuất chuyên dụng với canvas xem trước trực tiếp, bộ chọn định dạng (PNG / JPEG / WebP / PDF), bộ chọn Style (Default / Monochrome / Blueprint) và cắt vùng tùy chọn. Không có gì được gửi đến máy in vật lý; đầu ra được tải xuống dưới dạng tệp.

## Mở Print Manager

Nhấp nút **Print** trên thanh công cụ hoặc gõ `QuảnLýIn` trong terminal. Print Manager mở ngay lập tức hiển thị bản xem trước của khung nhìn hiện tại.

Bản xem trước được kết xuất qua chính xác cùng một đường dẫn mã, ở chính xác cùng độ phân giải pixel, như tệp mà cuối cùng bạn sẽ xuất — thay đổi Quality, Style, hoặc vùng xuất sẽ kết xuất lại bản xem trước ngay lập tức, vì vậy những gì bạn thấy chính là những gì được tải xuống, không phải một ước lượng gần đúng.

## Bố cục Print Manager

Cửa sổ có hai bảng:
- **Thanh bên trái** — tất cả điều khiển xuất.
- **Bảng phải** — canvas xem trước trực tiếp cập nhật khi bạn thay đổi cài đặt.

### Điều khiển thanh bên

| Điều khiển | Mô tả |
|-----------|-------|
| **Change Area** | Cắt đến hình chữ nhật tùy chỉnh trên canvas (xem bên dưới) — thực sự cắt hình ảnh được xuất, kể cả trên layout có không gian giấy, không chỉ bản xem trước trên màn hình |
| Dropdown **Quality** | Đặt độ phân giải xuất (xem bên dưới) |
| Dropdown **Style** | Default, Monochrome, hoặc Blueprint — xem *Kiểu in* bên dưới. Monochrome theo mặc định để có kết quả in sạch |
| Dropdown **Format** | PNG, JPEG, WebP hoặc PDF |
| Nút **Export** | Tạo và tải xuống tệp |

## Kiểu in

Dropdown **Style** điều khiển cả màu mực dùng để vẽ các đối tượng lẫn nền trang:

| Style | Mực | Nền trang |
|-------|-----|-----------|
| **Default** | Màu riêng của mỗi đối tượng | Trắng |
| **Monochrome** *(mặc định)* | Đen đặc, bất kể màu đối tượng/lớp | Trắng |
| **Blueprint** | Trắng đặc, bất kể màu đối tượng/lớp | Xanh Phổ đậm, với lưới tham chiếu mờ nhạt |

Blueprint tái hiện diện mạo của bản in kiến trúc cyanotype truyền thống — nét vẽ trắng trên nền giấy xanh đậm. Lưới tham chiếu của nó có kích thước tương đối theo kích thước trang chứ không theo DPI, vì vậy trông có cùng mật độ ở bất kỳ cài đặt Quality nào thay vì dày đặc hơn khi độ phân giải tăng.

## Chất lượng và độ phân giải

Menu thả xuống **Quality** đặt DPI mà bản xuất được kết xuất:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(mặc định)* | 150 |
| Presentation | 300 |
| Max | 600 |

Quality cao hơn tạo ra hình ảnh lớn hơn, sắc nét hơn ở cùng kích thước vật lý — độ dày đường thay đổi theo độ phân giải, vì vậy một đường giữ nguyên độ dày *vật lý* trên giấy ở bất kỳ cài đặt Quality nào, thay vì trông mỏng hơn khi DPI tăng. Ngoại lệ duy nhất là đường tóc (độ dày đường `0`), thường được định nghĩa là "đường mỏng nhất mà thiết bị xuất có thể vẽ" — nó vẫn giữ chiều rộng cố định 1 pixel ở mọi mức Quality, đúng như cách nó hoạt động trên canvas trực tiếp.

Thay đổi Quality sẽ kết xuất lại bản xem trước ngay lập tức, để bạn thấy độ sắc nét thực tế (và sự đánh đổi về kích thước tệp) trước khi xuất.

## Chọn vùng xuất tùy chỉnh

Theo mặc định, bản xem trước hiển thị hộp bao của tất cả đối tượng trong không gian Model — cùng phạm vi mà [Fit](../fit/) thu phóng tới — hoặc toàn bộ khổ giấy trên một layout. Để xuất một vùng cụ thể:

1. Nhấp **Change Area** — Print Manager ẩn và canvas trở nên tương tác.
2. **Nhấp góc đầu tiên** của hình chữ nhật xuất.
3. **Nhấp góc đối diện** — Print Manager mở lại với vùng đã chọn trong bản xem trước.

Nhấn `Escape` trong quá trình chọn vùng để hủy và khôi phục vùng trước đó.

Canvas xem trước tự động thay đổi kích thước để khớp với **tỷ lệ khung hình chính xác** của vùng đã chọn, vì vậy bản xem trước chính xác đến từng pixel.

Vùng đã chọn được ghi nhớ riêng cho không gian Model và cho từng layout cho đến khi bạn tải lại trang — xem [ChangePrintArea](../change-print-area/).

## Định dạng xuất

| Định dạng | Tốt nhất cho | Ghi chú |
|-----------|-------------|---------|
| **PNG** | Không mất dữ liệu, đường sắc nét | Nền trang của Style được tích hợp, không trong suốt |
| **JPEG** | Tệp nhỏ hơn để chia sẻ | Chất lượng 95%, hơi nén |
| **WebP** | Tệp nhỏ nhất cho web | Cùng chất lượng 95%, nén tốt hơn JPEG |
| **PDF** | Tài liệu sẵn sàng in | Hình ảnh nhúng trong thùng chứa PDF ở DPI của Quality đã chọn, có kích thước để trang được in theo đúng tỷ lệ vật lý thực |

Tệp được xuất có tên `kulman-<timestamp>.<phần mở rộng>` và tự động tải xuống.

## Độ phân giải và nền xuất

- **Xuất model space / viewport**: giới hạn ở 2000 × 2000 pixel ở Quality Normal mặc định (150 DPI), chia tỉ lệ theo tỉ lệ của vùng đã chọn; giới hạn này cũng thay đổi theo Quality — Draft thấp hơn, Presentation và Max cao hơn (lên đến 8000 × 8000 ở Max/600 DPI).
- **Xuất layout (không gian giấy)**: có kích thước trực tiếp từ kích thước giấy của layout ở DPI đã chọn — ví dụ tờ A4 (210 × 297 mm) ở Quality Normal xuất ra khoảng 1240 × 1754 px — nên không bị giới hạn 2000 px của viewport.
- Nền theo **Style** in đã chọn — trắng cho Default và Monochrome, xanh Phổ đậm cho Blueprint (xem *Kiểu in* ở trên).
- Các lớp được đánh dấu là **không in** bị loại trừ khỏi xuất.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` (trong khi chọn vùng) | Hủy chọn vùng, khôi phục vùng trước |
| `Escape` (trong Print Manager) | Đóng Print Manager |
