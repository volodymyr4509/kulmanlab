---
title: Lệnh Line — Vẽ, Nối Tiếp, Cắt và Kéo Dài Đường Thẳng trong KulmanLab CAD
description: Lệnh Line vẽ các đoạn đường thẳng riêng lẻ có thể nối tiếp đầu cuối. Đường thẳng là loại thực thể duy nhất mà Cắt và Kéo Dài hoạt động. Hỗ trợ DXF đầy đủ dưới dạng thực thể LINE.
---

# Line

Lệnh `line` vẽ các đoạn đường thẳng riêng lẻ được lưu dưới dạng thực thể `LINE` riêng biệt trong mô hình DXF. Sau mỗi đoạn, lệnh vẫn hoạt động và tái sử dụng điểm cuối làm điểm bắt đầu mới, vì vậy bạn có thể xây dựng các đường nối tiếp từng đoạn một. Không giống như [Polyline](../polyline/), các đường thẳng nối tiếp vẫn là thực thể độc lập — mỗi cái có thể được cắt, kéo dài hoặc xóa mà không ảnh hưởng đến các đường lân cận.

## Vẽ đường thẳng

1. Gõ `line` trong terminal hoặc nhấp nút **Line** trên thanh công cụ.
2. **Nhấp điểm bắt đầu**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. **Nhấp điểm cuối** — đoạn được đặt và điểm cuối trở thành điểm bắt đầu mới. Có thể nhập tọa độ tương tự.
4. Tiếp tục nhấp (hoặc gõ) để nối thêm đoạn.
5. Nhấn **Enter** hoặc **Escape** để dừng.

## Khóa góc và nhập độ dài chính xác

Lệnh theo dõi trục bắt điểm 45° (0°, 45°, 90°, 135°, …). Khi bị khóa, bản xem trước bắt điểm vào trục và bạn có thể nhập độ dài chính xác:

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.` | Thêm chữ số vào giá trị độ dài |
| `-` | Độ dài âm — đảo ngược hướng dọc theo trục |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Đặt điểm cuối tại khoảng cách đã gõ |

## Chỉnh sửa điểm kéo — kéo dài điểm cuối

| Điểm kéo | Vị trí | Tác dụng |
|----------|--------|---------|
| **Bắt đầu** | Điểm cuối đầu tiên | Kéo để định vị lại — điểm cuối vẫn cố định |
| **Điểm giữa** | Trung tâm đường thẳng | Kích hoạt **Move** cho toàn bộ đường thẳng |
| **Cuối** | Điểm cuối thứ hai | Kéo để định vị lại — điểm bắt đầu vẫn cố định |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc khoảng cách khi góc bị khóa |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ hoặc độ dài, hoặc kết thúc chuỗi |
| `Escape` | Kết thúc chuỗi và thoát |

## Các lệnh chỉnh sửa được hỗ trợ

Đường thẳng là thực thể **duy nhất** mà [Trim](../trim/) và [Extend](../extend/) hoạt động:

| Lệnh | Tác dụng với đường thẳng |
|------|------------------------|
| [Move](../move/) | Dịch chuyển cả hai điểm cuối |
| [Copy](../copy/) | Tạo đường thẳng giống hệt tại vị trí mới |
| [Rotate](../rotate/) | Xoay cả hai điểm cuối quanh điểm cơ sở |
| [Mirror](../mirror/) | Phản chiếu cả hai điểm cuối qua trục |
| [Scale](../scale/) | Chia tỉ lệ cả hai điểm cuối đồng đều |
| [Offset](../offset/) | Tạo đường thẳng song song ở khoảng cách cố định |
| [Trim](../trim/) | Cắt đường thẳng tại giao điểm |
| [Extend](../extend/) | Kéo dài điểm cuối gần nhất đến ranh giới |
| [Delete](../delete/) | Xóa đường thẳng khỏi bản vẽ |

## DXF — thực thể LINE

Đường thẳng được lưu dưới dạng thực thể `LINE` trong tệp DXF. Mỗi thuộc tính — tọa độ bắt đầu/cuối, màu sắc, lớp, kiểu đường, tỉ lệ kiểu đường và độ dày — được lưu trữ đầy đủ và không bị mất.
