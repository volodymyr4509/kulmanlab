---
title: Lệnh FontAdd — Tải Lên Phông Chữ TTF Tùy Chỉnh Từ Terminal
description: Lệnh FontAdd mở hộp thoại chọn tệp của hệ thống để tải lên phông chữ .ttf, mà không cần mở hộp thoại Font Manager trước. Đây chính là thao tác tải lên mà nút "Add Font" trong Font Manager kích hoạt, ở đây được cung cấp như một lệnh terminal độc lập.
group: style
order: 3
---

# FontAdd

Lệnh `ThêmPhôngChữ` mở hộp thoại chọn tệp của hệ thống để tải lên phông chữ `.ttf` tùy chỉnh, mà không cần mở hộp thoại [Font Manager](../font-manager/) trước. Đây chính là thao tác tải lên mà nút **Add Font** trong Font Manager kích hoạt — FontAdd chỉ là một lối đi trực tiếp đến đó từ terminal.

## Tải lên phông chữ

1. Gõ `ThêmPhôngChữ` trong terminal, hoặc nhấp **Add Font** ở cuối hộp thoại [Font Manager](../font-manager/).
2. Chọn một tệp `.ttf` trong hộp thoại chọn tệp của hệ thống. Chỉ hỗ trợ phông chữ TrueType — `.otf` và `.woff`/`.woff2` không được hỗ trợ.

Lệnh kết thúc ngay khi hộp thoại chọn tệp mở ra — không có thao tác nhấp chuột hay nhập terminal nào tiếp theo. Phông chữ được đăng ký và xuất hiện trong nhóm **User** ngay khi tệp được chọn.

## Điều gì xảy ra khi tải lên

- Tên tệp (không có phần mở rộng) trở thành tên phông chữ. Tải lên `MyFont.ttf` sẽ thêm một phông chữ tên là `MyFont`.
- Tải lên một tệp có tên trùng với một phông chữ tùy chỉnh hiện có sẽ **thay thế** phông chữ đó.
- Phông chữ được lưu vĩnh viễn trong trình duyệt (IndexedDB) và tự động tải lại vào lần tiếp theo bạn mở KulmanLab CAD — nó không gắn với bản vẽ hiện tại.

## Tham khảo phím tắt

FontAdd không có thao tác bàn phím riêng — toàn bộ lệnh chỉ là hộp thoại chọn tệp gốc của trình duyệt. Hủy hộp thoại đó (hoặc không chọn tệp nào) sẽ giữ nguyên danh sách phông chữ.

## Các lệnh liên quan

| Lệnh | Chức năng |
|------|-----------|
| [Font Manager](../font-manager/) | Duyệt, xem trước, chọn và xóa phông chữ, bao gồm cả những phông chữ bạn đã tải lên |
| [Text](../text/) | Đặt các nhãn văn bản mà lựa chọn phông chữ áp dụng vào |
