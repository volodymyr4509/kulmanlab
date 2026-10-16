---
title: "Lệnh ArrayPolar — sao chép đối tượng quanh một tâm trong KulmanLab CAD"
description: "Lệnh ArrayPolar sao chép các đối tượng đã chọn quanh một điểm tâm — một số mục nhất định trải trên một vòng đầy đủ hoặc một phần của nó, với các bản sao xoay theo khi đi quanh hoặc giữ hướng riêng."
keywords: ["mảng cực CAD", "mẫu hình tròn CAD", "sao chép đối tượng quanh một điểm CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Lệnh `ArrayPolar` tạo các bản sao của đối tượng đã chọn quanh một điểm tâm, trải đều trên một vòng đầy đủ hoặc một phần của nó. Bản gốc là mục đầu tiên; mọi mục khác là một bản sao xoay quanh tâm — hoặc chỉ di chuyển quanh tâm, nếu bạn tắt Rotate.

## Tạo mảng cực

1. Chọn các đối tượng, rồi gõ `MảngTròn` trong terminal hoặc nhấp nút **Array Polar** trên thanh công cụ. Nếu bắt đầu mà chưa chọn gì, lệnh sẽ yêu cầu bạn chọn trước — nhấn **Enter** hoặc **Space** để xác nhận.
2. **Nhấp vào tâm** mà các bản sao đi quanh, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. Xem lại mảng. Tất cả bản sao được xem trước trực tiếp, và terminal hiển thị `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — nhấn chữ cái của một tùy chọn để thay đổi.
4. Nhấn **Enter** hoặc **Space** để tạo các bản sao. Bản gốc vẫn ở nguyên chỗ và vùng chọn được xóa.

## Tùy chọn

| Tùy chọn | Phím | Tác dụng |
|---|---|---|
| Items | `I` | Có bao nhiêu mục, kể cả bản gốc — số nguyên từ 2 đến 1024. Bắt đầu từ 6. |
| Angle | `A` | Số độ từ mục này sang mục kế tiếp, ngược chiều kim đồng hồ; góc âm đi theo chiều kim đồng hồ. Tối đa 180°. |
| Fill | `F` | Số độ từ mục đầu đến mục cuối. 360 (mặc định) là một vòng đầy đủ; số nhỏ hơn trải các mục trên một phần của vòng. Âm đi theo chiều kim đồng hồ. Tối đa 360°. |
| Rotate | `R` | Bật (mặc định): mỗi bản sao xoay khi đi quanh. Tắt: mỗi bản sao được di chuyển đến vị trí của nó và hướng giống bản gốc. Chuyển đổi ngay — không có số để gõ. |

- Angle và Fill là hai cách nói cùng một điều, nên đổi cái này thì cái kia được diễn đạt lại. Trên một vòng đầy đủ, mục cuối dừng cách mục đầu một bước; trên một phần vòng, nó rơi đúng vào góc điền.
- Để đổi một số, nhấn chữ cái của tùy chọn đó. Lời nhắc được điền sẵn giá trị hiện tại — gõ để thay thế, rồi nhấn **Enter** hoặc **Space**; xác nhận mà không đổi sẽ giữ mảng như cũ.
- Items chỉ nhận số nguyên; Angle và Fill nhận số thập phân và dấu `-` ở đầu cho chiều kim đồng hồ. Góc hoặc Fill bằng 0 bị từ chối, góc trên 180° hoặc Fill trên 360° cũng vậy — terminal nêu lý do.
- Angle quá nhỏ để chứa mọi mục sẽ bỏ những mục không còn chỗ, và terminal báo số lượng mới.
- Hoạt động với mọi loại thực thể: mỗi bản sao là bản gốc xoay quanh tâm, hoặc di chuyển, đúng như [Rotate](../rotate/) và [Move](../move/) sẽ làm.

## Tham khảo phím

| Phím | Hành động |
|---|---|
| `Enter` / `Space` | Xác nhận vùng chọn, mảng hoặc số đã gõ |
| `I` `A` `F` `R` | Đổi Items, Angle hoặc Fill bằng cách gõ số; bật tắt Rotate |
| `0`–`9`, `.`, `-` | Gõ số (`.` và `-` chỉ cho Angle và Fill, `-` đứng đầu) |
| `Backspace` | Xóa ký tự vừa gõ |
| `Escape` | Hủy |
