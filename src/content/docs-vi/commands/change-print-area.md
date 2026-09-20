---
title: Lệnh ChangePrintArea — Cắt xuất của Print Manager thành hình chữ nhật
description: Lệnh ChangePrintArea chọn hai góc đối diện trên canvas để đặt vùng mà Print Manager xuất ra. Hỗ trợ nhập tọa độ X,Y và bắt điểm, đồng thời ghi nhớ vùng riêng cho không gian Model và cho từng layout.
keywords: [vùng in CAD, cắt xuất CAD, lệnh change print area, cắt print manager, vùng xuất CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Lệnh `ĐổiVùngIn` đặt vùng hình chữ nhật mà [Print Manager](../print-manager/) xuất ra. Lệnh chạy trên canvas trống khi Print Manager đang ẩn và nhận hai góc đối diện — cùng hai lần nhấp như [Rectangle](../rectangle/), nên tọa độ nhập và bắt điểm hoạt động y hệt.

## Chọn một vùng

1. Gõ `ĐổiVùngIn` trong terminal, hoặc nhấp **Change Area** ở thanh bên của Print Manager. Print Manager ẩn đi và canvas trở nên tương tác được.
2. **Nhấp góc thứ nhất**, hoặc gõ `X,Y` rồi nhấn **Enter** để có tọa độ chính xác.
3. **Nhấp góc đối diện**, hoặc gõ `X,Y` lần nữa.

Print Manager mở lại với vùng mới trong bản xem trước, và bản xem trước đổi kích thước theo đúng tỉ lệ khung hình của vùng đó.

Các góc bắt vào grip và giao điểm như mọi lần chọn điểm khác, nên bạn có thể cắt theo hình học đã vẽ thay vì ước lượng bằng mắt. Thứ tự hai góc không quan trọng: hai góc đối diện xác định cùng một hình chữ nhật.

Nhấn `Escape` để hủy. Không có gì được ghi, nên Print Manager mở lại với vùng nó đã có.

## Vùng được ghi nhớ ở đâu

Lựa chọn được lưu theo từng ngữ cảnh, không dùng chung:

| Ngữ cảnh | Ô lưu |
|---|---|
| Không gian model | Một ô lưu dùng chung |
| Mỗi layout | Ô lưu riêng, giữ tách biệt |

Mở lại Print Manager trên cùng layout — hoặc trên Model — khôi phục vùng cắt gần nhất của ngữ cảnh đó thay vì đặt lại, và chuyển giữa các layout vẫn giữ nguyên vùng của từng layout.

Dữ liệu này chỉ nằm trong bộ nhớ. Tải lại trang sẽ xóa mọi vùng đã lưu và Print Manager quay về các giá trị mặc định bên dưới.

## Vùng mặc định

Khi chưa có gì được lưu cho ngữ cảnh hiện tại, Print Manager mở ở:

| Ngữ cảnh | Mặc định |
|---|---|
| Không gian model | Hộp bao của tất cả đối tượng — cùng phạm vi mà [Fit](../fit/) thu phóng tới |
| Mỗi layout | Toàn bộ khổ giấy |

## Lệnh liên quan

| Lệnh | Chức năng |
|---|---|
| [Print Manager](../print-manager/) | Cửa sổ xuất mà vùng này áp dụng |
| [Rectangle](../rectangle/) | Cùng cách chọn hai góc, nhưng vẽ ra một polyline |
| [Fit](../fit/) | Thu phóng tới phạm vi mà không gian Model dùng làm mặc định |
