---
title: LayerManager — Quản Lý Tất Cả Lớp trong Một Bảng
description: Lệnh LayerManager mở một bảng liệt kê mọi lớp trong bản vẽ, cho phép thêm lớp, xóa những lớp không dùng đến và chỉnh ngay tại chỗ chế độ đóng băng, khóa, in, màu, bề dày nét và kiểu nét của từng lớp.
group: layer
order: 1
---

# LayerManager

Lệnh `QuảnLýLớp` mở một bảng liệt kê mọi lớp trong bản vẽ, với các thiết lập **Freeze**, **Lock**, **Plot**, **Màu**, **Bề dày nét** và **Kiểu nét** chỉnh được ngay trong hàng. Đây là nơi trung tâm để thêm lớp, xóa những lớp không dùng đến và điều chỉnh cách các lớp hiện có hoạt động — những lệnh lớp còn lại ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) mỗi lệnh làm đúng một việc mà không cần mở nó.

## Mở Layer Manager

- Gõ `QuảnLýLớp` trong terminal, **hoặc**
- Nhấp nút **Layer Manager** trên bảng lớp.

Hộp thoại mở dưới dạng bảng nổi; không cần chọn gì trước.

## Bảng lớp

| Cột | Điều khiển gì |
|-----|------------------|
| Name | Tên lớp, hiển thị chỉ đọc trong bảng (đặt một lần, khi tạo) |
| Freeze | Ẩn các thực thể của lớp và loại chúng khỏi lựa chọn cho đến khi bỏ đóng băng |
| Lock | Ngăn chỉnh sửa các thực thể trên lớp, mà không ẩn chúng |
| Plot | Liệu các thực thể của lớp có được đưa vào khi in hoặc xuất PDF hay không |
| Color | Màu ACI của lớp — nhấp vào mẫu màu để mở bộ chọn màu |
| Lineweight | Độ dày đường của lớp — nhấp vào chip để mở bộ chọn độ dày |
| Linetype | Kiểu nét đứt của lớp — nhấp vào chip để mở bộ chọn kiểu đường |
| ✕ | Xóa lớp khi không có gì đang dùng đến nó — xem [Xóa một lớp](#xóa-một-lớp) |

Bật/tắt Freeze, Lock hoặc Plot có hiệu lực ngay lập tức — không có bước lưu riêng. Các thực thể được đặt thành **ByLayer** cho màu sắc, độ dày đường hoặc kiểu đường (giá trị mặc định) sẽ theo những gì bạn đặt ở đây; các thực thể có ghi đè riêng của chúng không bị ảnh hưởng.

## Thêm một lớp

1. Nhấp **+ Add Layer** ở cuối bảng.
2. Gõ tên và nhấn **Enter** để xác nhận, hoặc **Escape** để hủy.

Tên lớp có thể chứa chữ cái, số, khoảng trắng và `_`, `-`, `$`. Tên trống, đã được sử dụng, hoặc chứa ký tự khác sẽ bị từ chối với lỗi hiển thị ngay tại chỗ, và hàng vẫn mở để thử lại.

Lớp mới bắt đầu ở trạng thái **không đóng băng, không khóa, có thể in**, với màu 7 (trắng/đen), độ dày đường Default và kiểu đường Continuous — cùng các giá trị mặc định mà [Import](../import/) gán cho lớp `0` trong một bản vẽ trống.

## Xóa một lớp

Mỗi hàng kết thúc bằng nút **✕** để gỡ lớp khỏi bản vẽ. Việc xóa diễn ra ngay lập tức — không có bước xác nhận — nhưng chỉ được cung cấp cho những lớp mà không gì phụ thuộc vào:

| Tình huống | Trạng thái nút |
|------------|----------------|
| Lớp trống | Bật — *Delete layer* |
| Lớp được gán cho ít nhất một đối tượng | Tắt — *Cannot delete: assigned to at least one entity* |
| Lớp `0` | Không có nút nào cả |

**"Đang dùng" tính trên toàn bộ bản vẽ**, không chỉ phần bạn đang nhìn. Một đối tượng nằm trên bố cục (không gian giấy) được tính hệt như một đối tượng trong không gian mô hình, nên một lớp có thể trông trống trên màn hình mà vẫn từ chối bị xóa. Lớp bị đóng băng cũng không khác: đóng băng chỉ ẩn đối tượng chứ không gỡ bỏ việc gán, vì vậy một lớp đóng băng đang chứa đối tượng vẫn không xóa được.

Lớp `0` không bao giờ xóa được. Đó là lớp dự phòng mà mọi bản vẽ chắc chắn có, nên nút thậm chí không được vẽ ra cho nó thay vì hiển thị dạng bị tắt.

### "…is now in use and can't be deleted"

Thỉnh thoảng dấu ✕ trông như dùng được nhưng cú nhấp bị từ chối bằng một dải thông báo ở đầu bảng:

```
"WALLS" is now in use and can't be deleted
```

Đây không phải mâu thuẫn. Việc xác định lớp nào đang được dùng đòi hỏi duyệt qua mọi đối tượng trong bản vẽ, nên kết quả được lưu đệm và chỉ dựng lại khi số lượng đối tượng thay đổi — rẻ với hàng trăm đối tượng, không rẻ với hàng trăm nghìn. Chuyển một đối tượng sẵn có sang lớp khác không làm số lượng thay đổi, nên trạng thái tắt của hàng có thể lỗi thời trong chốc lát. Cú nhấp sẽ kiểm tra lại từ đầu trước khi xóa bất cứ thứ gì, và đó là lý do việc từ chối xảy ra ngay lúc nhấp thay vì để lớp biến mất khi vẫn còn thứ tham chiếu đến nó.

Đóng dải thông báo bằng dấu **✕** của chính nó. Lớp vẫn nguyên vẹn.

## Những gì không làm được ở đây

Bảng không cho biết lớp nào đang là lớp *hiện hành*; điều đó được đặt từ danh sách thả xuống của bảng lớp hoặc bằng [LayerMakeCurrent](../layer-make-current/), chứ không phải từ hộp thoại này. Tên lớp cũng cố định ngay khi tạo — một lớp có thể bị xóa rồi tạo lại, nhưng không thể đổi tên.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` | Xác nhận tên của lớp mới (trong khi thêm) |
| `Escape` | Hủy việc thêm lớp, hoặc đóng hộp thoại |

## Các lệnh liên quan

| Lệnh | Chức năng |
|------|-----------|
| [LayerMakeCurrent](../layer-make-current/) | Đặt lớp hiện tại theo lớp của đối tượng được bấm |
| [LayerMatch](../layer-match/) | Gán lại các đối tượng được chọn về lớp của đối tượng nguồn |
| [LayerIsolate](../layer-isolate/) | Đóng băng tất cả các lớp trừ những lớp của đối tượng được chọn |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Bỏ đóng băng tất cả các lớp trong một bước |
