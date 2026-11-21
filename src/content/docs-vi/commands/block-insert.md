---
title: "Lệnh BlockInsert — Đặt một khối từ các khối của bản vẽ"
description: "Lệnh BlockInsert mở bảng màu xem trước các khối của bản vẽ. Chọn một khối, đặt tỉ lệ và góc xoay, rồi nhấp hoặc gõ một điểm để đặt, một lần hoặc nhiều lần."
keywords: ["chèn khối CAD", "bảng khối CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Lệnh `ChènKhối` mở bảng xem trước mọi khối trong bản vẽ và đặt khối bạn chọn. Tạo khối bằng [Block Create](../block-create/), hoặc mở tệp DXF có chứa khối.

## Đặt một khối

1. Gõ `ChènKhối` hoặc nhấp **Chèn khối** trong bảng **Khối**. Bảng màu dính vào bên trái với mỗi khối một ô xem trước, mười hai ô mỗi trang; các mũi tên dưới ô để lật trang.
2. Gõ vào **Tìm khối** để thu hẹp các ô theo tên.
3. Đặt **Tỷ lệ** (phải lớn hơn 0) và **Xoay** theo độ. **Lặp lại đặt** mặc định bật.
4. Nhấp vào ô của một khối. Khối đi theo con trỏ: nhấp để đặt theo điểm gốc của nó, hoặc gõ X,Y cho vị trí chính xác. Khi con trỏ bị khóa theo một góc, bạn có thể gõ một độ dài.
5. Khi **Lặp lại đặt** bật, khối tiếp tục đi theo con trỏ cho bản sao tiếp theo cho đến khi bạn nhấn **Escape**. Khi tắt, lệnh kết thúc sau một bản sao.

## Nên biết

- Để xóa một khối, nhấp thùng rác trên ô của nó và xác nhận. Khối có tham chiếu trong bản vẽ không thể xóa: ô của nó ghi **Đang được dùng, không thể xóa**.
- Bản vẽ không có khối hiển thị **Bản vẽ này không có khối** trong bảng.
- **Escape** đóng bảng khi không có gì đang được đặt. Nó là một trong các bảng dính, và bên trái chỉ hiển thị một bảng mỗi lần.

---

*Liên quan: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
