---
title: Lệnh ClipboardPaste — Dán đối tượng từ bộ nhớ tạm hệ thống
description: Lệnh ClipboardPaste đọc từ bộ nhớ tạm hệ thống các đối tượng đã được ClipboardCopy ghi trước đó và đặt chúng tại điểm chèn bạn chọn, đồng thời bổ sung những lớp và kiểu đường mà bản vẽ đích còn thiếu.
keywords: [dán bộ nhớ tạm CAD, dán đối tượng giữa các bản vẽ, dán đối tượng CAD, Ctrl+V CAD, dán giữa các thẻ, hợp nhất lớp khi dán, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Lệnh `ClipboardPaste` đọc các đối tượng mà [ClipboardCopy](../clipboard-copy/) đã ghi vào **bộ nhớ tạm hệ thống** và đặt chúng vào bản vẽ hiện tại tại điểm bạn chọn. Vì đây là bộ nhớ tạm thật của hệ thống, nguồn có thể là một bản vẽ khác, một thẻ trình duyệt khác, hoặc một phiên làm việc từ đầu ngày.

## Cách dán

1. Nhấn `Ctrl+V` (`Cmd+V` trên macOS), hoặc gõ `ClipboardPaste` trong dòng lệnh.
2. Dòng nhắc hiển thị **reading clipboard…** trong lúc trình duyệt bàn giao văn bản từ bộ nhớ tạm.
3. Khi đã tải xong, dòng nhắc chuyển thành **pick insertion point** và bản xem trước của hình học đi theo con trỏ.
4. **Nhấp** để đặt các đối tượng. Chúng được thêm vào bản vẽ và vẫn ở trạng thái được chọn.

Bản xem trước được neo bằng **điểm tham chiếu** của bản sao — góc dưới trái của khung bao gộp của vùng chọn ban đầu. Góc đó nằm ngay dưới con trỏ, nên cách sắp xếp tương đối giữa các đối tượng đã sao chép được giữ nguyên chính xác.

## Điều gì xảy ra khi dán

| Bước | Hành vi |
|------|---------|
| **Định danh mới** | Mỗi đối tượng được dán nhận một id mới, nên dán hai lần sẽ cho hai bộ độc lập |
| **Tịnh tiến** | Các đối tượng được dời đi một khoảng bằng con trỏ − điểm tham chiếu |
| **Hợp nhất lớp** | Mọi lớp được tham chiếu mà bản vẽ đích còn thiếu sẽ được thêm theo tên |
| **Hợp nhất kiểu đường** | Mọi kiểu đường được tham chiếu mà bản vẽ đích còn thiếu sẽ được thêm theo tên |
| **Vùng chọn** | Vùng chọn trước đó bị xóa và các đối tượng vừa dán trở thành vùng chọn |

### Hợp nhất lớp và kiểu đường

Những mục bảng còn thiếu sẽ được thêm; **những mục đã có được giữ nguyên**. Nếu bộ nhớ tạm mang theo một lớp tên `WALLS` màu đỏ mà bản vẽ đích đã có lớp `WALLS` màu xanh, thì định nghĩa của bản vẽ đích thắng và các đối tượng được dán gia nhập lớp đó — chúng sẽ có màu xanh. Việc dán không định nghĩa lại bất cứ thứ gì trong bản vẽ đích.

Điều này quan trọng khi sao chép giữa các bản vẽ có quy ước lớp khác nhau: hãy kiểm tra [Layer Manager](../layer-manager/) sau khi dán giữa các bản vẽ nếu màu sắc không như bạn mong đợi.

## Khi bộ nhớ tạm không có gì để dán

ClipboardPaste chỉ chấp nhận dữ liệu do ClipboardCopy tạo ra. Mọi thứ khác trên bộ nhớ tạm — văn bản thuần, một đường dẫn, một hình ảnh, JSON từ ứng dụng khác — đều bị từ chối và dòng lệnh báo:

```
Clipboard has no copied entities
```

Nếu trình duyệt từ chối hoàn toàn quyền truy cập bộ nhớ tạm, thông báo sẽ là **Clipboard access denied**. Cả hai đều kết thúc lệnh mà không thay đổi bản vẽ.

## Tham chiếu bàn phím

| Phím | Hành động |
|------|-----------|
| `Ctrl+V` / `Cmd+V` | Kích hoạt ClipboardPaste |
| `Escape` | Hủy — các đối tượng bị bỏ đi và không có gì được thêm vào |

Hủy trong giai đoạn đọc là an toàn: nếu bộ nhớ tạm phản hồi sau khi bạn đã hủy hoặc đã bắt đầu lệnh khác, kết quả đến muộn sẽ bị bỏ qua thay vì làm gián đoạn thứ đang chạy lúc đó.

## Sao chép giữa các thẻ

Quy trình điển hình giữa các bản vẽ:

1. Mở bản vẽ nguồn, chọn hình học, nhấn `Ctrl+C`.
2. Chuyển sang thẻ kia — hoặc mở thẻ thứ hai của ứng dụng và nạp một tệp khác.
3. Nhấn `Ctrl+V` rồi nhấp vào điểm chèn.

Cả hai thẻ cùng nguồn gốc và dùng chung bộ nhớ tạm hệ thống, nên không có gì được tải lên và không máy chủ nào tham gia. Dữ liệu luôn là văn bản JSON nằm trên bộ nhớ tạm của chính bạn.

## Đối tượng được hỗ trợ

Mọi loại đối tượng mà ClipboardCopy ghi được thì ClipboardPaste đọc lại được — với cùng cách tuần tự hóa mà định dạng `.json` gốc sử dụng.

## Xem thêm

- [ClipboardCopy](../clipboard-copy/) — ghi vùng chọn vào bộ nhớ tạm
- [Copy](../copy/) — nhân bản đối tượng trong bản vẽ hiện tại
- [Layer Manager](../layer-manager/) — xem các lớp mà thao tác dán mang vào
