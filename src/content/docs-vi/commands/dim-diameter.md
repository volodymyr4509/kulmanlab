---
title: Lệnh Dimension Diameter — Ghi Chú Đường Kính Hình Tròn và Cung trong KulmanLab CAD
description: Lệnh Dimension Diameter đặt kích thước đường kính (có tiền tố ký hiệu đường kính) qua tâm của cung hoặc hình tròn. Di chuyển con trỏ để xoay đường kích thước theo bất kỳ góc nào. Hỗ trợ DXF đầy đủ dưới dạng thực thể DIMENSION đường kính.
group: markup
order: 8
---

# Dimension Diameter

Lệnh `dimdiameter` đặt kích thước đường kính lên một cung hoặc hình tròn. Đường kích thước trải qua toàn bộ đường kính — đi qua tâm giữa hai điểm đối diện trên cung — và được ghi nhãn `⌀ <giá trị>`. Để chỉ ghi chú bán kính từ tâm đến một cạnh, dùng [Dimension Radius](../dim-radius/).

## Cấu trúc kích thước đường kính

- **Đường kích thước** — trải qua toàn bộ đường kính, với mũi tên ở cả hai điểm trên cung.
- **Điểm cung gần** — điểm trên chu vi phía con trỏ (nơi nhãn văn bản đặt).
- **Điểm cung xa** — điểm đối diện trực kính.
- **Nhãn** — `⌀` theo sau là giá trị đường kính.

## Đặt kích thước đường kính

1. Gõ `dimdiameter` trong terminal hoặc nhấp nút **Dimension Diameter** trên thanh công cụ.
2. **Nhấp một cung hoặc hình tròn** để chọn nó.
3. **Di chuyển con trỏ** để xoay đường kích thước theo góc mong muốn.
4. **Nhấp** để đặt kích thước.

Chỉ các thực thể **Cung** và **Hình tròn** mới có thể được chọn.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` | Hủy |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|------|------|
| Đo | Đường kính đầy đủ (2 × bán kính) | Bán kính (tâm đến cạnh) |
| Đường kích thước | Cạnh → cạnh qua tâm | Tâm → cạnh |
| Tiền tố nhãn | `⌀` | `R` |
| Mũi tên | Hai (ở cả hai điểm cung) | Một (ở điểm cung) |
| Tốt nhất cho | Kích thước lỗ tròn hoặc trục đầy đủ | Ghi chú một mặt của đặc điểm cong |

## Chỉnh sửa nhãn — chế độ đơn giản

**Nhấp đúp** vào kích thước đường kính đã đặt để mở trình soạn thảo văn bản ở chế độ **đơn giản**. Trình soạn thảo được điền sẵn giá trị hiển thị hiện tại (ví dụ: `⌀ 10.00`) để bạn có thể đặt con trỏ và chỉnh sửa trực tiếp.

| Tính năng | Hành vi |
|-----------|---------|
| Bold / Italic / Font / Height | Áp dụng cho **toàn bộ nhãn** cùng một lúc |
| Định dạng theo ký tự | Không được hỗ trợ |
| `Enter` | Xác nhận giá trị và đóng trình soạn thảo |
| Nhiều dòng | Không được hỗ trợ |

Xem [Trình Soạn Thảo Văn Bản — chế độ đơn giản](../../interface/text-editor/#simple-mode) để tham khảo đầy đủ.

## DXF — thực thể DIMENSION đường kính

Kích thước đường kính được lưu dưới dạng thực thể `DIMENSION` với hình học loại đường kính, lưu trữ cả hai vị trí điểm cung và giá trị đường kính đo được (2 × bán kính). Tất cả thuộc tính được lưu trữ đầy đủ và không bị mất khi xuất nhập DXF.
