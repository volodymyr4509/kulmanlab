---
title: "Lệnh Point — đặt điểm lên bản vẽ trong KulmanLab CAD"
description: "Lệnh Point đặt một điểm ở mỗi lần nhấp, X,Y đã gõ hoặc khoảng cách dọc một hướng đã khóa, cho đến khi nhấn Enter, Space hoặc Escape. Điểm được vẽ như một chấm, mang layer và màu hiện tại, và đi qua lại như thực thể DXF POINT."
keywords: ["lệnh điểm CAD", "đặt điểm CAD", "thực thể DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Lệnh `Điểm` đặt một điểm ở mỗi lần chọn và vẫn hoạt động cho đến khi bạn nhấn Enter, Space hoặc Escape. Điểm là một vị trí không có kích thước: nó được vẽ như một chấm nhỏ và mang layer cùng màu hiện tại. Nó được lưu như thực thể `POINT`.

## Đặt điểm

1. Gõ `Điểm` trong terminal hoặc nhấp **Point**, nút cuối cùng trong bảng Shapes.
2. **Nhấp** vào nơi điểm sẽ nằm, hoặc gõ `X,Y` rồi nhấn **Enter** để có vị trí chính xác. Mỗi lần chọn đặt một điểm và terminal ghi lại tọa độ của nó; lệnh vẫn hoạt động cho điểm tiếp theo.
3. Hoặc khóa một hướng từ [ghim vector](../../interface/vector-pins/) và gõ một khoảng cách — điểm rơi đúng khoảng cách đó dọc theo hướng.
4. Nhấn **Enter**, **Space** hoặc **Escape** để kết thúc. Enter và Space chỉ kết thúc khi không có gì đang được gõ.

## Điểm trông thế nào

Điểm được vẽ như một chấm bán kính 1,5 px ở mọi mức thu phóng, nên vẫn thấy được khi thu nhỏ và không to ra khi phóng to. Kiểu điểm của bản vẽ (`$PDMODE` và `$PDSIZE`) chưa được đọc, nên mọi điểm đều là một chấm, dù DXF nói gì.

## Chỉnh sửa điểm

Điểm được chọn có một tay nắm để di chuyển nó. Chọn bằng khung lấy một điểm khi nó nằm trong khung, theo bất kỳ hướng kéo nào.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) và [Scale](../scale/) hoạt động trên điểm như trên mọi thực thể khác. Cửa sổ thuộc tính hiển thị Position X và Position Y, cùng màu và layer.

## DXF — thực thể POINT

Điểm được đọc từ và ghi vào DXF như thực thể `POINT` với vị trí, màu và layer (mã nhóm 10/20, 62 và 8), và cũng đi qua JSON đã lưu. Trước đây chúng bị bỏ qua khi nhập. [Export Manager](../export-manager/) liệt kê Points ở một hàng riêng, nên bạn có thể loại chúng khỏi bản xuất.

---

*Liên quan: [Line](../line/) cho cùng cách nhập tọa độ, và [Vector Pins](../../interface/vector-pins/) để đặt điểm ở khoảng cách cố định dọc theo một hướng.*
