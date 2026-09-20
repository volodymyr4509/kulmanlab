---
title: File Manager — Lưới Thu Nhỏ, Đổi Tên & Xóa trong KulmanLab CAD
description: Lệnh File Manager mở một lưới hình thu nhỏ của mọi bản vẽ đã lưu — nhấp vào hình thu nhỏ để mở, đổi tên tại chỗ, hoặc xóa với xác nhận.
keywords: [file manager CAD, tệp gần đây CAD, đổi tên bản vẽ, xóa bản vẽ, lưới hình thu nhỏ CAD, khôi phục bản vẽ, mở lại DXF, bộ nhớ trình duyệt CAD, tệp KulmanLab, bản vẽ đã lưu, IndexedDB CAD, sao lưu bản vẽ CAD]
group: file
order: 3
---

# File Manager

Lệnh `QuảnLýTệp` mở một **lưới hình thu nhỏ** của mọi bản vẽ đã được lưu vào bộ nhớ cục bộ của trình duyệt, sắp xếp theo thời điểm lưu gần nhất. Dùng nó để mở lại một bản vẽ trước đó, đổi tên, hoặc xóa nó.

## Mở File Manager

- Nhập `QuảnLýTệp` trong terminal, **hoặc**
- Nhấp nút **File Manager** trên thanh công cụ (biểu tượng lịch sử) trong bảng File ở đầu màn hình.

Bảng mở ở phía bên trái canvas, và tự động đóng ngay khi bạn bắt đầu một lệnh khác hoặc [nhập](../import/) một tệp — vì vậy nó không bao giờ còn đọng lại trên một bản vẽ mà nó chưa liệt kê. Nó mở lại với danh sách mới mỗi lần.

## Lưới hình thu nhỏ

Mỗi bản vẽ đã lưu là một thẻ hiển thị hình thu nhỏ được render trực tiếp, tên của nó, và thời điểm cập nhật gần nhất. Hình thu nhỏ được tạo ngay tại chỗ mỗi lần bảng mở ra — không có gì được render sẵn hay lưu trữ trước — nên một thẻ sẽ hiển thị biểu tượng giữ chỗ trong giây lát trong khi hình thu nhỏ của nó đang được vẽ. Biểu tượng giữ chỗ tương tự cũng xuất hiện nếu việc tạo hình thất bại, hoặc nếu bản vẽ thực sự chưa có thực thể nào.

| Hành động | Cách thực hiện |
|--------|-----|
| **Mở** một bản vẽ | Nhấp vào hình thu nhỏ của nó — thay thế nội dung canvas hiện tại |
| **Đổi tên** | Nhấp biểu tượng bút chì, hoặc nhấp đúp vào tên |
| **Xóa** | Nhấp biểu tượng thùng rác, sau đó xác nhận |

Nếu chưa có tệp nào được lưu, bảng hiển thị "No files saved". Khi có nhiều tệp hơn số lượng vừa một màn hình, các nút điều khiển **Page 1 of N** xuất hiện bên dưới lưới.

Thẻ của tệp hiện đang mở trong trình soạn thảo được đánh dấu bằng một vòng màu nhấn, và **không có nút xóa** — xóa tệp đang mở sẽ xóa sạch dữ liệu đã lưu của nó trong khi canvas vẫn đang hiển thị nó, và lần chỉnh sửa tiếp theo sẽ chỉ lưu nó trở lại ngay lập tức. Việc đổi tên vẫn khả dụng.

## Xóa một tệp

Nhấp biểu tượng thùng rác không xóa ngay lập tức — nó kích hoạt một lớp phủ xác nhận trên thẻ đó ("Delete this file?" cùng các nút **Delete** / **Cancel**), vì việc xóa là vĩnh viễn và không thể hoàn tác. Nhấp **Cancel**, nhấp biểu tượng thùng rác của một thẻ khác, hoặc nhấp vào nơi khác trên thẻ đều hủy bỏ xác nhận đang chờ mà không xóa gì cả.

## Đổi tên một tệp

Nhấp biểu tượng bút chì (hoặc nhấp đúp vào tên tệp) để chỉnh sửa tại chỗ, sau đó nhấn **Enter** để xác nhận hoặc **Escape** để hủy. Việc đổi tên sẽ bị từ chối nếu tên mới:

- rỗng, hoặc dài hơn 100 ký tự,
- đã được dùng bởi một tệp đã lưu khác (không phân biệt hoa thường),
- kết thúc bằng dấu chấm, hoặc
- là tên thiết bị dành riêng của Windows như `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, hoặc `LPT1`–`LPT9`.

Các ký tự không hợp lệ trong tên tệp (`\ / : * ? " < > |`) sẽ tự động bị loại bỏ khi bạn gõ. Đổi tên chỉ thay đổi nhãn hiển thị — không ảnh hưởng đến vị trí của bản vẽ trong lưới, vì lưới được sắp xếp theo thời điểm lưu gần nhất, không phải theo tên.

## Sao lưu công việc của bạn — bộ nhớ trình duyệt không phải là vĩnh viễn

KulmanLab lưu bản vẽ vào **IndexedDB**, một cơ sở dữ liệu được tích hợp sẵn trong trình duyệt của bạn:

- Tệp chỉ được lưu **cục bộ trên thiết bị của bạn** — không có gì được tải lên máy chủ.
- Mỗi trình duyệt và thiết bị có bộ lưu trữ độc lập riêng. Một bản vẽ được lưu trong Chrome trên một máy tính sẽ không xuất hiện trong Firefox, hay trên một máy khác.
- Bộ lưu trữ này **có thể bị xóa mà không có cảnh báo** — do xóa dữ liệu trang web hoặc lịch sử duyệt web, hết dung lượng ổ đĩa, dùng cửa sổ riêng tư/ẩn danh, cài lại trình duyệt hoặc hệ điều hành, hoặc chuyển sang thiết bị khác. Không có trường hợp nào trong số này cho bạn cơ hội khôi phục lại những gì đã có.

**Cách duy nhất đáng tin cậy để giữ an toàn cho một bản vẽ là [export](../export-manager/) nó ra bộ nhớ riêng của bạn.** Dùng `.json` (định dạng gốc của KulmanLab) khi có thể — nó lưu giữ chính xác mọi thực thể; dùng `.dxf` khi bạn cần tương thích với các công cụ CAD khác. Hãy làm điều này với bất kỳ thứ gì bạn sẽ tiếc nếu mất, và trước khi xóa dữ liệu trình duyệt, chuyển trình duyệt hoặc thiết bị, hay cất máy đi một thời gian.

## Tự động tải tệp khi khởi động

Khi bạn mở KulmanLab CAD, ứng dụng tự động tải **tệp được sửa đổi gần đây nhất** từ bộ lưu trữ. Bạn không cần phải mở nó thủ công từ File Manager mỗi lần.

## Quản lý bộ lưu trữ

Không có giới hạn cố định về số lượng bản vẽ bạn có thể lưu, nhưng bộ nhớ trình duyệt là hữu hạn. Nếu bạn thấy cảnh báo về bộ nhớ, hãy xóa các tệp cũ hơn từ File Manager — hoặc tốt hơn, export chúng trước để không mất gì cả.

Để xóa tất cả bản vẽ đã lưu cùng lúc, dùng lệnh [WipeStorage](../wipestorage/).

## Tên tệp

Tệp mới và tệp được nhập vào nhận một tên đơn giản — không có dấu thời gian được gắn kèm. Nếu tên đó đã được dùng, một hậu tố kiểu Finder/Explorer sẽ được tự động thêm vào (`plan (2)`, `plan (3)`, …) để không có gì bị ghi đè. Bạn luôn có thể đặt cho tệp một tên rõ ràng hơn sau đó bằng cách [đổi tên](#doi-ten-mot-tep).

## Các lệnh liên quan

- [Import](../import/) — tải một bản vẽ từ hệ thống tệp của bạn vào bộ nhớ trình duyệt
- [Export Manager](../export-manager/) — tải một bản vẽ xuống hệ thống tệp của bạn
- [New File](../new-file/) — bắt đầu một bản vẽ trắng (cũng được lưu tự động)
- [WipeStorage](../wipestorage/) — xóa tất cả tệp đã lưu khỏi bộ nhớ trình duyệt
</content>
