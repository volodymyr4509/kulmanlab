---
title: Kích Thước Góc — Đo Góc Giữa Các Đường, Cung và Hình Tròn trong KulmanLab CAD
description: "Lệnh DimensionAngular đặt chú thích kích thước góc lên các đường thẳng, cung hoặc hình tròn. Hỗ trợ ba chế độ: hai đường thẳng, khoảng cung và cung tròn."
---

# Kích Thước Góc

Lệnh `DimensionAngular` đặt một **chú thích kích thước góc** dạng cung lên bản vẽ. Nó đo và ghi nhãn góc giữa hai đường thẳng, khoảng của một cung, hoặc một phần của hình tròn.

## Cách kích hoạt

Nhấp nút **Dimension Angular** trên thanh công cụ trong bảng Markup, hoặc gõ `DimensionAngular` trong terminal.

## Ba chế độ nhập

Lần nhấp đầu tiên xác định chế độ được sử dụng:

### Hai đường thẳng

1. **Nhấp đường thẳng đầu tiên.** Vị trí con trỏ xác định phía nào của đường được dùng.
2. **Nhấp đường thẳng thứ hai.** Hai đường phải giao nhau (giao điểm được tính tự động).
3. **Nhấp để đặt** cung kích thước. Di chuyển con trỏ để chọn bán kính và phần góc nào được ghi nhãn.

Các đường song song không thể tạo kích thước góc.

### Cung

1. **Nhấp một cung.** Kích thước được tạo ngay lập tức từ góc bắt đầu đến góc kết thúc của cung.
2. **Nhấp để đặt** cung kích thước theo bán kính mong muốn.

### Hình tròn

1. **Nhấp một hình tròn.** Điểm góc đầu tiên bắt điểm vào điểm gần nhất trên hình tròn.
2. **Nhấp điểm thứ hai** trên hình tròn để xác định điểm góc thứ hai.
3. **Nhấp để đặt** cung kích thước.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` | Hủy và quay lại bước chọn đầu tiên |

## Chi tiết hành vi

- Cung kích thước luôn được vẽ ở phía đỉnh nơi bạn đặt nó — di chuyển con trỏ qua đỉnh để chuyển sang góc bù.
- Góc đo hiển thị bằng độ và cập nhật trực tiếp khi bạn di chuyển con trỏ.
- Kết quả là thực thể `DimensionAngular` đầy đủ được lưu trên lớp hiện tại.
- Kích thước góc được bao gồm trong xuất JSON nhưng không được hỗ trợ bởi bộ xuất DXF.

## Các lệnh liên quan

- [Kích Thước Tuyến Tính](./dim-linear) — kích thước ngang hoặc dọc
- [Kích Thước Căn Chỉnh](./dim-aligned) — kích thước căn chỉnh theo hai điểm
- [Kích Thước Bán Kính](./dim-radius) — kích thước bán kính cho cung và hình tròn
- [Kích Thước Đường Kính](./dim-diameter) — kích thước đường kính cho hình tròn
