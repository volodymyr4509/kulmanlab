---
title: Lệnh HatchAdd — tải lên tệp mẫu .pat từ terminal
description: Lệnh HatchAdd mở hộp chọn tệp để tải lên tệp mẫu .pat mà không cần mở Hatch Manager trước. Tất cả mẫu mà tệp định nghĩa đều được thêm cùng lúc.
keywords: [lệnh hatch add, lệnh hatchadd, tải tệp pat từ terminal, mẫu mặt cắt tùy chỉnh CAD, acad.pat, thư viện mẫu mặt cắt, kulmanlab]
group: style
order: 5
---

# HatchAdd

Lệnh `HatchAdd` mở hộp chọn tệp của hệ thống để tải lên tệp mẫu mặt cắt `.pat`, mà không cần mở hộp thoại [Hatch Manager](../hatch-manager/) trước. Đây chính là thao tác tải lên mà nút **Add .pat File** trong Hatch Manager kích hoạt — HatchAdd chỉ là lối đi thẳng tới đó từ terminal.

## Tải lên một tệp mẫu

1. Gõ `HatchAdd` trong terminal, hoặc bấm **Add .pat File** ở cuối hộp thoại [Hatch Manager](../hatch-manager/).
2. Chọn một tệp `.pat` trong hộp chọn của hệ thống. Chỉ chấp nhận định dạng mẫu mặt cắt tiêu chuẩn.

Lệnh kết thúc ngay khi hộp chọn tệp mở ra — không còn nhắc nhở, cú bấm hay nhập liệu nào ở terminal nữa. Các mẫu được đăng ký và xuất hiện trong nhóm **User** ngay khi tệp được chọn.

## Điều gì xảy ra khi tải lên

- **Tệp `.pat` là một vật chứa, không phải một mẫu đơn lẻ.** Một tệp thường định nghĩa nhiều mẫu có tên, và tất cả được thêm cùng nhau. Đây là chỗ HatchAdd khác [FontAdd](../font-add/), nơi một `.ttf` là một phông chữ.
- **Bản thân tệp không được giữ lại.** Nó được đọc một lần, tách thành các mẫu, và mỗi mẫu được lưu riêng dưới tên của nó. Vì thế bạn có thể gỡ một mẫu về sau mà không động đến những mẫu đã đến cùng nó — và vì thế nhóm **User** liệt kê chúng theo thứ tự bảng chữ cái của tên chứ không theo tệp gốc.
- **Mẫu trùng tên với mẫu sẵn có sẽ thay thế mẫu đó.** Đây là cách được hỗ trợ để đặt các định nghĩa chính thức lên trên phần xấp xỉ của KulmanLab: tải lên một `acad.pat` thật, và các phiên bản `ANSI31` cùng những tên tiêu chuẩn khác của nó sẽ tiếp quản.
- **Mẫu được lưu theo người dùng, không theo bản vẽ.** Chúng nằm trong trình duyệt (IndexedDB), tự tải lại vào lần sau bạn mở KulmanLab CAD, và dùng được trong mọi bản vẽ.
- **Tệp không chứa định nghĩa mẫu hợp lệ sẽ không thêm gì.** Thư viện giữ nguyên như cũ.

## Tham khảo phím tắt

HatchAdd không có tương tác bàn phím riêng — toàn bộ lệnh chính là hộp thoại chọn tệp gốc của trình duyệt. Hủy hộp thoại đó (hoặc không chọn tệp nào) sẽ để thư viện mẫu nguyên vẹn.

## Các lệnh liên quan

| Lệnh | Chức năng |
|------|-----------|
| [Hatch Manager](../hatch-manager/) | Duyệt thư viện mẫu với xem trước trực tiếp, và gỡ các mẫu đã tải lên |
| [Hatch](../hatch/) | Tô một vùng khép kín bằng mẫu từ thư viện |
| [FontAdd](../font-add/) | Cùng lối tắt tải lên trực tiếp dành cho phông `.ttf` |
