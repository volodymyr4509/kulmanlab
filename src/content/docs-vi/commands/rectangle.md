---
title: Lệnh Rectangle — Vẽ Hình Chữ Nhật Căn Chỉnh Trục
description: Lệnh Rectangle tạo một hình chữ nhật căn chỉnh trục từ hai góc đối diện. Kết quả là một LWPOLYLINE đóng với bốn đỉnh — giống hệt với bất kỳ đường đa đoạn nào khác sau khi đặt, vì vậy mọi lệnh chỉnh sửa đường đa đoạn đều áp dụng được.
group: shapes
order: 3
---

# Rectangle

Lệnh `HìnhChữNhật` vẽ một hình chữ nhật căn chỉnh trục được xác định bởi hai lần nhấp góc đối diện. Kết quả được lưu dưới dạng **`LWPOLYLINE` đóng** với bốn đỉnh — một ở mỗi góc. Không có loại thực thể hình chữ nhật riêng biệt: sau khi tạo, hình dạng hoạt động chính xác như bất kỳ [Polyline](../polyline/) nào khác và mọi lệnh chỉnh sửa đường đa đoạn đều áp dụng cho nó.

## Vẽ hình chữ nhật

1. Gõ `HìnhChữNhật` trong terminal hoặc nhấp nút **Rectangle** trên thanh công cụ.
2. **Nhấp góc đầu tiên**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. **Nhấp góc đối diện** — hình chữ nhật được đặt ngay lập tức và lệnh kết thúc. Hoặc nhấn `D` để thay vào đó nhập chiều rộng và chiều cao chính xác — xem [Nhập kích thước](#nhập-kích-thước) bên dưới.

## Nhập kích thước

Thay vì nhấp góc thứ hai, nhấn `D` ngay sau góc đầu tiên để chuyển sang nhập chiều rộng × chiều cao:

1. **Nhập chiều rộng** và nhấn **Enter**.
2. **Nhập chiều cao** và nhấn **Enter** — lời nhắc bây giờ yêu cầu bạn chọn hướng cho hình chữ nhật.
3. **Di chuyển con trỏ** quanh góc đầu tiên — hình chữ nhật được xem trước trực tiếp tại góc phần tư (trên-trái, trên-phải, dưới-trái, dưới-phải) mà con trỏ đang ở trên.
4. **Nhấp** để đặt nó theo hướng đó.

Nhấn `D` một lần nữa ở bước chọn hướng để nhập lại chiều rộng và chiều cao, được điền sẵn với giá trị bạn vừa gõ.

Chiều rộng và chiều cao được ghi nhớ từ hình chữ nhật cuối cùng bạn đã nhập kích thước: ở cả hai lời nhắc, giá trị trước đó xuất hiện điền sẵn và sẵn sàng để xác nhận bằng **Enter**, hoặc bạn có thể bắt đầu gõ để thay bằng số mới.

## Chỉnh sửa điểm kéo — định hình lại sau khi tạo

| Điểm kéo | Vị trí | Tác dụng |
|----------|--------|---------|
| **Góc** | Mỗi trong 4 đỉnh | Kéo để di chuyển đỉnh đó; hai cạnh liền kề kéo dài theo — góc đối diện vẫn cố định |
| **Điểm giữa cạnh** | Trung tâm của mỗi trong 4 cạnh | Kéo để dịch chuyển cả hai điểm cuối của cạnh đó cùng nhau |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc (ở chế độ Nhập kích thước) trường chiều rộng/chiều cao |
| `,` | Khóa X và chuyển sang nhập Y |
| `D` | Sau góc đầu tiên: chuyển sang Nhập kích thước; ở bước chọn hướng: nhập lại chiều rộng/chiều cao |
| `Enter` | Xác nhận tọa độ, chiều rộng hoặc chiều cao đã gõ |
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
