---
title: Bộ lọc lựa chọn — Thu hẹp lựa chọn nhiều đối tượng theo thuộc tính
description: Khi có nhiều đối tượng được chọn, biểu tượng bộ lọc trên đầu bảng thuộc tính sẽ mở một cửa sổ với các danh sách đánh dấu trực tiếp cho Loại, Lớp, Màu, Bề dày nét và Kiểu nét, được dựng từ những gì thực sự có trong vùng chọn, nhờ đó một lựa chọn lớn và hỗn tạp có thể được thu hẹp trước khi chỉnh sửa hàng loạt.
keywords: [bộ lọc lựa chọn, lọc vùng chọn CAD, bộ lọc theo khía cạnh, thu hẹp vùng chọn, chỉnh sửa hàng loạt CAD, bộ lọc bảng thuộc tính, kulmanlab]
group: interface
order: 7
---

# Bộ lọc lựa chọn

Chọn cùng lúc nhiều đối tượng sẽ mở bảng thuộc tính ở chế độ xem nhiều lựa chọn ("Selection (N)"). Một **biểu tượng bộ lọc** cạnh nút đóng cho phép bạn thu hẹp vùng chọn đó theo thuộc tính trước khi chỉnh sửa hàng loạt.

## Mở bộ lọc

1. Chọn vài đối tượng — kéo một khung chọn, nhấp giữ Shift, hoặc nhấn Ctrl+A.
2. Nhấp vào **biểu tượng bộ lọc** (hình phễu) trên đầu bảng thuộc tính.
3. Một cửa sổ mở ra bên dưới nút, với danh sách đánh dấu cho từng thuộc tính thực sự có sự khác biệt trong vùng chọn.

## Các khía cạnh

Cửa sổ có thể hiển thị tối đa năm khía cạnh, mỗi khía cạnh được dựng trực tiếp từ vùng chọn hiện tại:

| Khía cạnh | Giá trị hiển thị |
|-----------|------------------|
| **Loại** | Tên loại đối tượng (Line, Circle, Hatch, …) |
| **Lớp** | Tên lớp, kèm ô màu tương ứng với lớp đó |
| **Màu** | Chỉ số màu ACI |
| **Bề dày nét** | Giá trị bề dày nét |
| **Kiểu nét** | Tên kiểu nét |

Một khía cạnh chỉ xuất hiện nếu vùng chọn thực sự chứa nhiều hơn một giá trị khác nhau cho nó — chọn mười đường thẳng cùng nằm trên một lớp sẽ không hiện khía cạnh Lớp, vì đánh dấu ở đó chẳng thu hẹp được gì. Những đối tượng hoàn toàn không mang một thuộc tính nào đó (chẳng hạn Hatch và Text không có bề dày nét lẫn kiểu nét) đơn giản là không được tính vào khía cạnh ấy — và cũng không bao giờ bị nó loại ra.

## Thu hẹp vùng chọn

Đánh dấu một hoặc nhiều giá trị ở bất kỳ khía cạnh nào để thu hẹp vùng chọn xuống những đối tượng thỏa **tất cả** các khía cạnh đã đánh dấu (một đối tượng phải khớp ít nhất một giá trị đã đánh dấu ở *mỗi* khía cạnh bạn đã chạm tới, chứ không chỉ một). Ô đánh dấu và số đếm của từng khía cạnh phản ánh những gì các khía cạnh *khác* đã đánh dấu thu hẹp lại, nên một khía cạnh không bao giờ giấu đi chính các mục đã được đánh dấu của nó — đúng như cách tìm kiếm theo khía cạnh vẫn hoạt động.

Số lượng kết quả cập nhật tức thì khi bạn đánh dấu và bỏ đánh dấu, và chính vùng chọn trên bản vẽ cũng thu hẹp theo — đây không phải bộ lọc chỉ để hiển thị: những đối tượng không còn khớp sẽ thực sự bị bỏ chọn, sẵn sàng để bạn chỉnh sửa hàng loạt đúng tập con vừa lọc ra.

## Xóa bộ lọc

Dùng nút đặt lại trong cửa sổ để bỏ hết các dấu chọn và quay về toàn bộ vùng chọn ban đầu, hoặc đóng cửa sổ (lần sau khi bạn nhấp biểu tượng bộ lọc trên một vùng chọn khác, nó sẽ mở lại với nền tảng mới).

## Liên quan

- [Match Properties](../../commands/match-properties/) — sao chép thuộc tính từ một đối tượng sang các đối tượng khác, sau khi đã thu hẹp được là những cái nào
- [LayerIsolate](../../commands/layer-isolate/) — một lựa chọn thay thế ở mức lớp khi bạn chỉ muốn cô lập theo lớp, không phụ thuộc vào những gì đang được chọn
