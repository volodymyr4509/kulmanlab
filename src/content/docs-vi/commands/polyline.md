---
title: Lệnh Polyline — Vẽ Đường Dẫn Nhiều Đoạn Thành Một Thực Thể
description: Lệnh Polyline vẽ bất kỳ số lượng đoạn nối nhau được lưu dưới dạng một thực thể LWPOLYLINE. Điểm kéo đỉnh và điểm giữa đoạn cho phép định hình lại bất kỳ phần nào của đường dẫn sau khi tạo. Hỗ trợ offset; không hỗ trợ cắt hoặc kéo dài.
group: shapes
order: 2
---

# Polyline

Lệnh `polyline` vẽ một đường dẫn liên kết gồm bất kỳ số lượng đoạn thẳng nào, tất cả được lưu dưới dạng một thực thể `LWPOLYLINE` duy nhất. Vì toàn bộ đường dẫn là một đối tượng, chọn nó sẽ chọn mọi đoạn cùng lúc — di chuyển, xoay hoặc chia tỉ lệ toàn bộ hình dạng trong một thao tác. Đây là điểm khác biệt chính so với [Line](../line/) nối tiếp, nơi mỗi đoạn là thực thể độc lập.

## Vẽ đường đa đoạn

1. Gõ `polyline` trong terminal hoặc nhấp nút **Polyline** trên thanh công cụ.
2. **Nhấp điểm đầu tiên**, hoặc gõ `X,Y` rồi nhấn **Enter**.
3. **Nhấp từng điểm tiếp theo** — mỗi lần nhấp thêm một đoạn. Có thể nhập tọa độ ở mỗi bước.
4. Nhấn **Enter** hoặc **Space** để kết thúc (yêu cầu ít nhất 2 điểm đã đặt).

Nhấn **Escape** bất kỳ lúc nào để loại bỏ tất cả điểm đã đặt và thoát lệnh.

## Chỉnh sửa điểm kéo — đỉnh và điểm giữa đoạn

Một đường đa đoạn được chọn có hai loại điểm kéo:

| Điểm kéo | Vị trí | Tác dụng |
|----------|--------|---------|
| **Đỉnh** | Tại mỗi điểm đã đặt | Kéo để định vị lại đỉnh đó; tất cả đoạn nối tiếp kéo dài theo |
| **Điểm giữa đoạn** | Trung tâm của mỗi đoạn | Kéo để dịch chuyển **cả hai** điểm cuối của đoạn đó cùng nhau |

Điểm kéo điểm giữa đoạn là duy nhất đối với đường đa đoạn — nó cho phép bạn trượt một đoạn riêng lẻ sang bên mà không thay đổi độ dài của nó.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc độ dài đoạn khi góc bị khóa |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ hoặc độ dài, hoặc kết thúc đường đa đoạn nếu không có nhập liệu và ≥ 2 điểm tồn tại |
| `Space` | Kết thúc đường đa đoạn |
| `Escape` | Loại bỏ tất cả điểm và thoát |

## Polyline vs Line — khi nào dùng cái nào

| | Polyline | Line |
|---|------|------|
| Số lượng thực thể | Một `LWPOLYLINE` cho toàn bộ đường dẫn | Một `LINE` cho mỗi đoạn |
| Hình dạng đóng | Có (cờ đóng) | Không |
| Trim / Extend | Không | Có — từng đoạn |
| Tốt nhất cho | Đường viền, vật thể bạn giữ nguyên | Đường xây dựng, hình học bạn sẽ cắt |

## DXF — thực thể LWPOLYLINE

Đường đa đoạn được lưu dưới dạng thực thể `LWPOLYLINE` trong tệp DXF. Tất cả thuộc tính — tọa độ đỉnh, cờ đóng, màu sắc, lớp, kiểu đường, tỉ lệ kiểu đường và độ dày — được lưu trữ đầy đủ và không bị mất.
