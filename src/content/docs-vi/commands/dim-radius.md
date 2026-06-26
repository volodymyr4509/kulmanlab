---
title: Lệnh Kích Thước Bán Kính — Ghi Chú Bán Kính Cung và Hình Tròn trong KulmanLab CAD
description: Lệnh Dimension Radius đặt kích thước bán kính có tiền tố R lên một cung hoặc hình tròn. Nhấp thực thể, sau đó di chuyển con trỏ để định hướng đường kích thước từ tâm đến chu vi. Hỗ trợ DXF đầy đủ dưới dạng thực thể DIMENSION bán kính.
---

# Kích Thước Bán Kính

Lệnh `dimradius` đặt kích thước bán kính lên một cung hoặc hình tròn. Đường kích thước chạy từ tâm đến một điểm trên chu vi theo hướng con trỏ, được ghi nhãn `R <giá trị>`. Để ghi chú toàn bộ đường kính thay thế, dùng [Kích Thước Đường Kính](./dim-diameter).

## Cấu trúc kích thước bán kính

- **Đường kích thước** — từ tâm qua điểm cung về phía con trỏ, với mũi tên ở điểm cung.
- **Nhãn** — `R` theo sau là giá trị bán kính.

## Đặt kích thước bán kính

1. Gõ `dimradius` trong terminal hoặc nhấp nút **Dimension Radius** trên thanh công cụ.
2. **Nhấp một cung hoặc hình tròn** để chọn nó.
3. **Di chuyển con trỏ** để định hướng đường kích thước — điểm cung theo dõi hướng con trỏ từ tâm.
4. **Nhấp** để đặt kích thước.

Chỉ các thực thể **Cung** và **Hình tròn** mới có thể được chọn. Nhấp vào bất kỳ loại thực thể nào khác sẽ không có hiệu lực.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` | Hủy |

## Kích Thước Bán Kính vs Kích Thước Đường Kính

| | Kích Thước Bán Kính | Kích Thước Đường Kính |
|---|------|------|
| Đo | Bán kính (tâm đến cạnh) | Đường kính (cạnh đến cạnh qua tâm) |
| Đường kích thước | Tâm → điểm cung | Điểm cung → điểm cung (qua tâm) |
| Tiền tố nhãn | `R` | `⌀` |
| Mũi tên | Một (ở điểm cung) | Hai (ở cả hai điểm cung) |
| Tốt nhất cho | Ghi chú một mặt của đặc điểm cong | Ghi chú kích thước tròn đầy đủ |

## DXF — thực thể DIMENSION bán kính

Kích thước bán kính được lưu dưới dạng thực thể `DIMENSION` với hình học loại bán kính, lưu trữ tọa độ tâm, vị trí điểm cung và giá trị bán kính đo được. Tất cả thuộc tính được lưu trữ đầy đủ và không bị mất.
