---
title: Lệnh Polyline — Vẽ Đường Dẫn Nhiều Đoạn Thành Một Thực Thể
description: Lệnh Polyline vẽ bất kỳ số lượng đoạn thẳng hoặc đoạn cung nối nhau được lưu dưới dạng một thực thể LWPOLYLINE. Bật chế độ Arc bằng phím A để vẽ đoạn cung tiếp tuyến liên tục. Điểm kéo đỉnh và điểm giữa đoạn cho phép định hình lại bất kỳ phần nào của đường dẫn sau khi tạo.
group: shapes
order: 2
---

# Polyline

Lệnh `ĐaTuyến` vẽ một đường dẫn liên kết gồm bất kỳ số lượng đoạn thẳng hoặc đoạn cung nào, tất cả được lưu dưới dạng một thực thể `LWPOLYLINE` duy nhất. Vì toàn bộ đường dẫn là một đối tượng, chọn nó sẽ chọn mọi đoạn cùng lúc — di chuyển, xoay hoặc chia tỉ lệ toàn bộ hình dạng trong một thao tác. Đây là điểm khác biệt chính so với [Line](../line/) nối tiếp, nơi mỗi đoạn là thực thể độc lập.

## Vẽ đường đa đoạn

1. Gõ `ĐaTuyến` trong terminal hoặc nhấp nút **Polyline** trên thanh công cụ.
2. **Nhấp điểm đầu tiên**, hoặc gõ `X,Y` rồi nhấn **Enter**.
3. **Nhấp từng điểm tiếp theo** — mỗi lần nhấp thêm một đoạn. Có thể nhập tọa độ ở mỗi bước.
4. Nhấn **Enter** hoặc **Space** để kết thúc (yêu cầu ít nhất 2 điểm đã đặt).

Nhấn **Escape** bất kỳ lúc nào để loại bỏ tất cả điểm đã đặt và thoát lệnh.

## Vẽ một đoạn cung

Nhấn **A** bất kỳ lúc nào sau đỉnh đầu tiên để bật/tắt chế độ Arc — cùng kiểu tùy chọn nội tuyến mà tùy chọn Copy của Rotate sử dụng. Lời nhắc hiển thị trạng thái hiện tại là `[Arc=true]` / `[Arc=false]`; nhấn **A** lần nữa sẽ chuyển nó trở lại, để đoạn thẳng và đoạn cung có thể tự do trộn lẫn trong một đường đa đoạn.

Khi chế độ Arc bật, mỗi đoạn mới là một cung tiếp tuyến liên tục — nó bắt đầu tiếp tuyến với đoạn ngay trước đó (hướng của đoạn thẳng trước, hoặc tiếp tuyến cuối của cung trước); đoạn đầu tiên mặc định hướng về phía đông, vì không có gì để tiếp tuyến với nó.

## Chỉnh sửa điểm kéo — đỉnh và điểm giữa đoạn

Một đường đa đoạn được chọn có hai loại điểm kéo:

| Điểm kéo | Vị trí | Tác dụng |
|----------|--------|---------|
| **Đỉnh** | Tại mỗi điểm đã đặt | Kéo để định vị lại đỉnh đó; tất cả đoạn nối tiếp kéo dài theo |
| **Điểm giữa đoạn** | Trung tâm của mỗi đoạn | Kéo để dịch chuyển **cả hai** điểm cuối của đoạn đó cùng nhau |

Điểm kéo điểm giữa đoạn là duy nhất đối với đường đa đoạn — nó cho phép bạn trượt một đoạn riêng lẻ sang bên mà không thay đổi độ dài của nó.

## Các lệnh chỉnh sửa được hỗ trợ

Đường đa đoạn hỗ trợ mọi phép biến đổi chung, cùng với offset, trim, extend, fillet và chamfer (với chamfer, chỉ đoạn thẳng mới được tính):

| Lệnh | Tác dụng với đường đa đoạn |
|------|---------------------------|
| [Fillet](../fillet/) | Bo tròn góc giữa hai đoạn **liền kề**, thẳng hoặc cung, bằng một cung tiếp tuyến được chèn vào polyline như một đoạn bulge mới |
| [Chamfer](../chamfer/) | Vát góc giữa hai đoạn thẳng liền kề |
| [Explode](../explode/) | Tách polyline thành các thực thể đường thẳng và cung độc lập, mỗi đoạn một thực thể |
| [Delete](../delete/) | Xóa polyline khỏi bản vẽ |

Fillet một đoạn polyline với thứ gì đó khác ngoài đoạn liền kề của chính nó sẽ không còn là một chỉnh sửa đơn giản tại chỗ nữa — xem [Fillet](../fillet/) để biết kết quả (hợp nhất thành một polyline mới, được nối bằng cung fillet).

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc độ dài đoạn khi góc bị khóa |
| `A` | Bật/tắt chế độ Arc cho đoạn tiếp theo (sau đỉnh đầu tiên, không có nhập liệu đang chờ) |
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
| Đoạn cung | Có, theo từng đoạn qua tùy chọn `Arc` | Không — cần một thực thể [Arc](../arc/) riêng |
| Trim / Extend | Có | Có — từng đoạn |
| Tốt nhất cho | Đường viền, vật thể bạn giữ nguyên | Đường xây dựng, hình học bạn sẽ cắt |

## DXF — thực thể LWPOLYLINE

Đường đa đoạn được lưu dưới dạng thực thể `LWPOLYLINE` trong tệp DXF. Tất cả thuộc tính — tọa độ đỉnh, cờ đóng, màu sắc, lớp, kiểu đường, tỉ lệ kiểu đường và độ dày — được lưu trữ đầy đủ và không bị mất.
