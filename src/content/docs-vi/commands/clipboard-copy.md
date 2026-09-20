---
title: Lệnh ClipboardCopy — Sao chép đối tượng vào bộ nhớ tạm hệ thống
description: Lệnh ClipboardCopy ghi các đối tượng đã chọn vào bộ nhớ tạm hệ thống dưới dạng văn bản JSON, kèm theo các lớp và kiểu đường mà chúng tham chiếu, để dán vào bản vẽ khác hoặc thẻ trình duyệt khác bằng ClipboardPaste.
keywords: [sao chép bộ nhớ tạm CAD, sao chép đối tượng giữa các bản vẽ, sao chép đối tượng CAD, Ctrl+C CAD, sao chép giữa các thẻ, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Lệnh `SaoChépVàoBộNhớTạm` ghi các đối tượng đã chọn vào **bộ nhớ tạm hệ thống** của bạn dưới dạng văn bản JSON. Vì dùng bộ nhớ tạm thật chứ không phải vùng đệm trong bộ nhớ, hình học đã sao chép vẫn tồn tại bên ngoài bản vẽ: hãy dán nó vào tệp khác, một thẻ trình duyệt thứ hai, hoặc một cửa sổ bạn mở sau đó bằng [ClipboardPaste](../clipboard-paste/).

Đây chính là điểm khác với [Copy](../copy/): Copy nhân bản đối tượng ngay trong bản vẽ hiện tại chỉ bằng một thao tác, còn ClipboardCopy đặt chúng ở nơi có thể lấy lại từ một bản vẽ hoàn toàn khác.

## Hai cách bắt đầu

**Chọn trước rồi sao chép** — cách nhanh:

1. Chọn một hoặc nhiều đối tượng trên vùng vẽ.
2. Nhấn `Ctrl+C` (`Cmd+C` trên macOS), hoặc gõ `SaoChépVàoBộNhớTạm` trong dòng lệnh.
3. Các đối tượng được ghi ngay vào bộ nhớ tạm và lệnh kết thúc.

**Kích hoạt rồi chọn** — bắt đầu khi chưa chọn gì:

1. Nhấn `Ctrl+C` hoặc gõ `SaoChépVàoBộNhớTạm` khi vùng chọn trống.
2. Dòng nhắc hiển thị **pick objects to copy — Enter or Space to confirm**.
3. **Chọn đối tượng** — nhấp để thêm hoặc bớt từng đối tượng, hoặc kéo để chọn theo vùng.
4. Nhấn **Enter** hoặc **Space** để sao chép vùng chọn và thoát.

Nhấn **Enter** hoặc **Space** khi chưa chọn gì chỉ đơn giản kết thúc lệnh mà không đụng đến bộ nhớ tạm.

## Những gì được sao chép

Dữ liệu trên bộ nhớ tạm mang theo nhiều hơn hình học thuần túy, để việc dán vào một bản vẽ xa lạ vẫn hiển thị đúng:

| Thành phần | Vai trò |
|------------|---------|
| **Đối tượng** | Dạng tuần tự hóa đầy đủ của từng đối tượng đã chọn |
| **Điểm tham chiếu** | Góc dưới trái của khung bao gộp của vùng chọn — thứ mà ClipboardPaste neo vào con trỏ |
| **Lớp** | Chỉ những lớp mà các đối tượng đã sao chép thực sự tham chiếu, theo tên |
| **Kiểu đường** | Chỉ những kiểu đường mà các đối tượng đã sao chép thực sự tham chiếu, theo tên |

Chỉ những mục bảng *được tham chiếu* mới đi theo bản sao, không phải toàn bộ bảng lớp và kiểu đường của bản vẽ nguồn. Mẫu mặt cắt không hề được gói kèm và cũng không cần: bảng mẫu của một bản vẽ chính là bộ mặc định tích hợp, còn các tệp `.pat` bạn đã tải lên nằm trong kho lưu theo người dùng vốn đã dùng chung giữa các thẻ, nên mặt cắt được dán tự tìm ra mẫu của nó.

## Xác nhận

Khi thành công, dòng lệnh báo số đối tượng đã ghi:

```
3 entities copied to clipboard
```

Nếu trình duyệt từ chối quyền truy cập bộ nhớ tạm, dòng lệnh hiển thị **Copy failed: clipboard access denied** và không ghi gì cả. Đây là quyết định về quyền của trình duyệt, không phải lỗi bản vẽ — xem [Quyền truy cập bộ nhớ tạm](#quyền-truy-cập-bộ-nhớ-tạm) bên dưới.

## Chọn đối tượng trong khi chạy lệnh

| Cách | Hành vi |
|------|---------|
| **Nhấp** | Thêm hoặc bớt đối tượng dưới con trỏ khỏi vùng chọn |
| **Kéo sang phải** (nghiêm ngặt) | Thêm các đối tượng nằm trọn trong khung |
| **Kéo sang trái** (cắt qua) | Thêm các đối tượng cắt qua biên khung |
| **Enter** / **Space** | Xác nhận vùng chọn và sao chép |

## Tham chiếu bàn phím

| Phím | Hành động |
|------|-----------|
| `Ctrl+C` / `Cmd+C` | Kích hoạt ClipboardCopy |
| `Enter` / `Space` | Sao chép vùng chọn hiện tại, hoặc thoát nếu chưa chọn gì |
| `Escape` | Hủy mà không sao chép |

## Quyền truy cập bộ nhớ tạm

Ghi vào bộ nhớ tạm hệ thống cần quyền của trình duyệt. Trên thực tế, một thao tác sao chép do phím tắt kích hoạt được cấp quyền mà không hỏi trên các trình duyệt máy tính hiện nay, nhưng một trang đã mất tiêu điểm, hoặc trình duyệt có thiết lập bộ nhớ tạm nghiêm ngặt, có thể từ chối. Nếu thấy thông báo từ chối truy cập, hãy nhấp một lần lên vùng vẽ để trả tiêu điểm cho trang rồi thử lại.

Vì dữ liệu là văn bản JSON thông thường, bất cứ thứ gì bạn sao chép sau đó đều thay thế nó — một dòng chữ, một đường dẫn. Hãy sao chép lại trước khi dán nếu trong lúc đó bạn đã dùng bộ nhớ tạm cho việc khác.

## Đối tượng được hỗ trợ

ClipboardCopy hoạt động với mọi loại đối tượng. Đối tượng được tuần tự hóa bằng đúng cơ chế mà xuất `.json` gốc sử dụng, nên không mất mát gì trên đường đi.

## Xem thêm

- [ClipboardPaste](../clipboard-paste/) — đọc lại bộ nhớ tạm và đặt các đối tượng
- [Copy](../copy/) — nhân bản đối tượng trong bản vẽ hiện tại
- [Export Manager](../export-manager/) — lưu cả bản vẽ sang DXF hoặc JSON
