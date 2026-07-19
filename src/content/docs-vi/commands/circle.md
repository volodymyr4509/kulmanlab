---
title: Lệnh Circle — Vẽ Hình Tròn Theo Tâm và Bán Kính
description: Lệnh Circle đặt hình tròn bằng cách bấm điểm tâm rồi bấm hoặc nhập bán kính. Bốn điểm kéo hướng chính cho phép thay đổi kích thước bán kính bằng cách kéo mà không cần chạy lại lệnh. Lưu DXF đầy đủ dưới dạng thực thể CIRCLE.
keywords: [lệnh circle CAD, vẽ hình tròn CAD, nhập bán kính hình tròn, thay đổi kích thước hình tròn điểm kéo, thực thể CIRCLE DXF, kulmanlab]
group: shapes
order: 4
---

# Circle

Lệnh `circle` vẽ hình tròn được xác định bởi điểm tâm và bán kính. Sau khi tâm được bấm, bạn có thể đặt bán kính bằng cách bấm điểm thứ hai trên canvas hoặc nhập số chính xác — cả hai tùy chọn đều hoạt động đồng thời.

## Vẽ Hình Tròn

1. Nhập `circle` trong terminal hoặc bấm nút **Circle** trên thanh công cụ.
2. **Bấm điểm tâm**, hoặc nhập `X,Y` và nhấn **Enter** cho tọa độ chính xác.
3. Đặt bán kính — bằng cách:
   - **Bấm bất kỳ điểm** nào trên canvas — khoảng cách từ tâm trở thành bán kính, hoặc
   - **Nhập bán kính** và nhấn **Enter** cho giá trị chính xác.

Hình tròn được đặt ngay lập tức và lệnh kết thúc.

```
  tâm ●
       \  xem trước đường bán kính
        \
         ● ← bấm ở đây, hoặc nhập một số
```

## Nhập Tọa Độ Tâm

Thay vì bấm, bạn có thể nhập vị trí tâm:

1. Nhập giá trị X.
2. Nhấn `,` — terminal hiển thị `[X], [Y{con trỏ}]`.
3. Nhập giá trị Y.
4. Nhấn **Enter** để đặt tâm và chuyển sang nhập bán kính.

## Nhập Bán Kính Bằng Bàn Phím

Sau khi tâm được đặt, nhập ngay lập tức để tạo giá trị bán kính:

| Phím | Hành Động |
|------|-----------|
| `0`–`9`, `.` | Thêm chữ số vào giá trị bán kính |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Đặt hình tròn ở bán kính đã nhập |

## Tham Khảo Phím Tắt

| Phím | Hành Động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X (giai đoạn tâm), hoặc chữ số bán kính |
| `,` | Khóa X và chuyển sang nhập Y (giai đoạn tâm) |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Xác nhận tọa độ đã nhập hoặc bán kính |
| `Escape` | Hủy và đặt lại |

## Chỉnh Sửa Điểm Kéo — Thay Đổi Kích Thước Bán Kính

Hình tròn được chọn có năm điểm kéo:

| Điểm Kéo | Vị Trí | Chức Năng |
|----------|--------|-----------|
| **Tâm** | Điểm tâm | Di chuyển toàn bộ hình tròn; bán kính không thay đổi |
| **Trái** | Điểm ngoài cùng bên trái | Kéo để đặt bán kính mới = khoảng cách đến tâm |
| **Phải** | Điểm ngoài cùng bên phải | Kéo để đặt bán kính mới = khoảng cách đến tâm |
| **Trên** | Điểm cao nhất | Kéo để đặt bán kính mới = khoảng cách đến tâm |
| **Dưới** | Điểm thấp nhất | Kéo để đặt bán kính mới = khoảng cách đến tâm |

Tất cả bốn điểm kéo hướng chính hoạt động giống nhau — bán kính mới bằng khoảng cách từ tâm đến vị trí kéo. Tâm giữ nguyên.

## Chọn Hình Tròn

| Phương Pháp | Hành Vi |
|-------------|---------|
| **Bấm** | Chọn nếu bấm gần đường chu vi |
| **Kéo phải** (nghiêm ngặt) | Toàn bộ hộp giới hạn (tâm ± bán kính) phải nằm trong hộp |
| **Kéo trái** (cắt ngang) | Bất kỳ phần nào của chu vi giao với hoặc tiếp xúc ranh giới hộp |

## Lệnh Chỉnh Sửa Được Hỗ Trợ

| Lệnh | Tác Động Lên Hình Tròn |
|------|------------------------|
| [Move](../move/) | Dịch chuyển tâm; bán kính không thay đổi |
| [Copy](../copy/) | Tạo hình tròn giống hệt ở tâm mới |
| [Rotate](../rotate/) | Xoay tâm quanh điểm cơ sở; bán kính không thay đổi |
| [Mirror](../mirror/) | Phản chiếu tâm qua trục đối xứng; bán kính không thay đổi |
| [Scale](../scale/) | Thay đổi tỉ lệ vị trí tâm và nhân bán kính với hệ số tỉ lệ |
| [Offset](../offset/) | Tạo hình tròn đồng tâm ở bán kính lớn hơn hoặc nhỏ hơn |
| [Delete](../delete/) | Xóa hình tròn |

## Thuộc Tính

**Chung**

| Thuộc Tính | Mặc Định | Ý Nghĩa |
|-----------|----------|---------|
| Color | 256 (ByLayer) | Chỉ số màu ACI |
| Layer | `0` | Gán lớp |
| Linetype | ByLayer | Kiểu đường nét có tên |
| Linetype Scale | 1 | Hệ số tỉ lệ trên kiểu đường nét |
| Thickness | 0 | Độ dày đùn |

**Hình Học**

| Thuộc Tính | Ý Nghĩa |
|-----------|---------|
| Center X / Center Y | Tọa độ điểm tâm |
| Radius | Bán kính hình tròn theo đơn vị bản vẽ |

## Circle vs Arc — Khi Nào Dùng Cái Nào

| | Circle | Arc |
|---|--------|-----|
| Khoảng | Đầy đủ 360° | Một phần — xác định bởi góc bắt đầu và kết thúc |
| Cách vẽ | Tâm + bán kính | Ba điểm trên đường cong |
| Nhập bằng bàn phím | Giá trị bán kính | Không — chỉ bấm |
| Điểm kéo thay đổi kích thước | 4 điểm hướng chính | Điểm đầu và cuối |
| Tốt nhất cho | Lỗ tròn đầy đủ, đặc điểm tròn | Bo góc, đường cong một phần |

## DXF — Thực Thể CIRCLE

Hình tròn được lưu dưới dạng thực thể `CIRCLE` trong tệp DXF. Tọa độ tâm, bán kính, màu sắc, lớp, kiểu đường, tỉ lệ kiểu đường và độ dày đều truyền đầy đủ không mất mát.
