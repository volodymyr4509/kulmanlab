---
title: Lệnh Rectangle — Vẽ Hình Chữ Nhật Căn Chỉnh Trục trong KulmanLab CAD
description: Lệnh Rectangle tạo một hình chữ nhật căn chỉnh trục từ hai góc đối diện. Kết quả là một LWPOLYLINE đóng với bốn đỉnh — giống hệt với bất kỳ đường đa đoạn nào khác sau khi đặt, vì vậy mọi lệnh chỉnh sửa đường đa đoạn đều áp dụng được.
group: shapes
order: 3
---

# Rectangle

Lệnh `rectangle` vẽ một hình chữ nhật căn chỉnh trục được xác định bởi hai lần nhấp góc đối diện. Kết quả được lưu dưới dạng **`LWPOLYLINE` đóng** với bốn đỉnh — một ở mỗi góc. Không có loại thực thể hình chữ nhật riêng biệt: sau khi tạo, hình dạng hoạt động chính xác như bất kỳ [Polyline](../polyline/) nào khác và mọi lệnh chỉnh sửa đường đa đoạn đều áp dụng cho nó.

## Vẽ hình chữ nhật

1. Gõ `rectangle` trong terminal hoặc nhấp nút **Rectangle** trên thanh công cụ.
2. **Nhấp góc đầu tiên**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. **Nhấp góc đối diện** — hình chữ nhật được đặt ngay lập tức và lệnh kết thúc.

## Chỉnh sửa điểm kéo — định hình lại sau khi tạo

| Điểm kéo | Vị trí | Tác dụng |
|----------|--------|---------|
| **Góc** | Mỗi trong 4 đỉnh | Kéo để di chuyển đỉnh đó; hai cạnh liền kề kéo dài theo — góc đối diện vẫn cố định |
| **Điểm giữa cạnh** | Trung tâm của mỗi trong 4 cạnh | Kéo để dịch chuyển cả hai điểm cuối của cạnh đó cùng nhau |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Enter` | Xác nhận tọa độ đã gõ |
| `Escape` | Hủy |

## Các lệnh chỉnh sửa được hỗ trợ

| Lệnh | Tác dụng với hình chữ nhật |
|------|--------------------------|
| [Move](../move/) | Dịch chuyển tất cả bốn đỉnh |
| [Copy](../copy/) | Tạo hình chữ nhật giống hệt tại vị trí mới |
| [Rotate](../rotate/) | Xoay tất cả bốn đỉnh quanh điểm cơ sở |
| [Mirror](../mirror/) | Phản chiếu tất cả bốn đỉnh qua trục |
| [Scale](../scale/) | Chia tỉ lệ tất cả bốn đỉnh đồng đều |
| [Offset](../offset/) | Tạo hình chữ nhật song song (thu nhỏ hoặc mở rộng) |
| [Delete](../delete/) | Xóa hình chữ nhật |

## DXF — thực thể LWPOLYLINE

Hình chữ nhật được lưu dưới dạng thực thể `LWPOLYLINE` đóng với bốn đỉnh. Không có loại `RECTANGLE` riêng biệt trong DXF. Tất cả thuộc tính được lưu trữ đầy đủ và không bị mất.
