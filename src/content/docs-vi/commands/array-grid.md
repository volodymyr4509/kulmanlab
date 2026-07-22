---
title: Lệnh Array Grid — Lặp Lại Đối Tượng Theo Hàng và Cột
description: Lệnh Array Grid tạo một lưới hình chữ nhật gồm các bản sao từ đối tượng được chọn — nhập số hàng, số cột, và khoảng cách giữa chúng trực tiếp trong terminal, không cần bấm điểm.
keywords: [lệnh array CAD, arraygrid, mảng hình chữ nhật CAD, mẫu lưới CAD, lặp lại đối tượng CAD, sao chép mảng CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Lệnh `ArrayGrid` tạo một lưới hình chữ nhật gồm các bản sao từ đối tượng được chọn — nhập số hàng, số cột, và khoảng cách giữa chúng, tất cả được nhập trong terminal. Lựa chọn ban đầu chiếm ô hàng 0, cột 0; mỗi ô khác là một bản sao đã dịch chuyển.

## Hai Cách Bắt Đầu

**Chọn trước, rồi array** — chọn đối tượng trước, sau đó kích hoạt:

1. Chọn một hoặc nhiều đối tượng trên canvas.
2. Nhập `arraygrid` trong terminal (chỉ cần `arr` là đủ — không mơ hồ) hoặc bấm nút **Array Grid** trên thanh công cụ.
3. Nhập số **hàng** và nhấn **Enter**.
4. Nhập số **cột** và nhấn **Enter**.
5. Nhập **khoảng cách giữa các hàng** và nhấn **Enter**.
6. Nhập **khoảng cách giữa các cột** và nhấn **Enter** — lưới được tạo ngay lập tức.

**Kích hoạt, rồi chọn** — bắt đầu lệnh khi không có gì được chọn:

1. Nhập `arraygrid` hoặc bấm nút thanh công cụ.
2. **Chọn đối tượng** — bấm để chuyển đổi từng đối tượng, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận chọn.
4. Tiếp tục với hàng → cột → khoảng cách hàng → khoảng cách cột như trên.

```
  2 hàng x 3 cột:

  [B] [B] [B]   <- hàng 1 (bản sao đã dịch chuyển)
  [A] [A] [A]   <- hàng 0: lựa chọn ban đầu, bản sao về bên phải
```

> Terminal chỉ cần đủ số chữ cái để không mơ hồ — gõ `arr` và nhấn **Enter** sẽ kích hoạt Array Grid trực tiếp, vì không có tên lệnh nào khác bắt đầu bằng ba chữ cái đó (Arc, Area, Align, và Angle đều tách biệt sớm hơn).

## Hàng, cột, và khoảng cách

| Yêu cầu | Chấp nhận | Ghi chú |
|---------|-----------|---------|
| Hàng | Số nguyên dương (1, 2, 3…) | Chỉ chữ số — không có dấu chấm thập phân hoặc dấu |
| Cột | Số nguyên dương (1, 2, 3…) | Chỉ chữ số — không có dấu chấm thập phân hoặc dấu |
| Khoảng cách hàng | Số thập phân có dấu (vd. `10`, `-5.5`) | Khoảng cách giữa các hàng; âm sẽ đảo ngược hướng |
| Khoảng cách cột | Số thập phân có dấu (vd. `10`, `-5.5`) | Khoảng cách giữa các cột; âm sẽ đảo ngược hướng |

Với 1 hàng và 1 cột, không có bản sao nào được tạo — lệnh kết thúc mà không thay đổi bản vẽ.

## Tham Khảo Phím Tắt

| Phím | Hành Động |
|------|-----------|
| `Enter` / `Space` | Xác nhận chọn và chuyển sang yêu cầu hàng |
| `0`–`9` | Nhập chữ số cho hàng hoặc cột |
| `0`–`9`, `.`, `-` | Nhập chữ số cho khoảng cách hàng/cột (`-` chỉ là ký tự đầu tiên) |
| `Backspace` | Xóa ký tự cuối cùng đã nhập của yêu cầu hiện tại |
| `Enter` | Xác nhận yêu cầu hiện tại và chuyển sang yêu cầu tiếp theo |
| `Escape` | Xóa các giá trị hàng/cột/khoảng cách đã nhập và quay lại giai đoạn chọn |

## Chọn Trong Lệnh

| Phương Pháp | Hành Vi |
|-------------|---------|
| **Bấm** | Chuyển đổi đối tượng dưới con trỏ vào/ra khỏi chọn |
| **Kéo phải** (nghiêm ngặt) | Thêm đối tượng hoàn toàn bên trong hộp |
| **Kéo trái** (cắt ngang) | Thêm đối tượng giao với ranh giới hộp |
| **Enter** / **Space** | Xác nhận chọn và chuyển sang yêu cầu hàng |

## Sau khi array

Các bản sao mới được thêm vào bản vẽ và lệnh kết thúc — lựa chọn ban đầu bị xóa. Chạy lại **Array Grid**, hoặc bắt đầu một lệnh mới.

## Array Grid so với Copy

| | Array Grid | Copy |
|---|-----------|------|
| Chọn điểm | Không có — hàng, cột và khoảng cách được nhập | Điểm cơ sở và điểm đích được bấm (hoặc nhập) |
| Bản sao được tạo | Hàng × Cột − 1 | Chính xác 1 cho mỗi lần sao chép |
| Bố cục | Lưới hình chữ nhật đều đặn | Ở bất kỳ đâu, với bất kỳ khoảng offset nào |
| Tốt nhất cho | Lặp lại một đơn vị theo mẫu đều đặn (lỗ, gạch, phụ kiện) | Một bản sao duy nhất ở vị trí tùy ý |

## Thực Thể Được Hỗ Trợ

Array Grid hoạt động trên mọi loại thực thể. Tất cả thực thể đều triển khai `translate(dx, dy)` bên trong — cùng thao tác mà [Copy](../copy/) và [Move](../move/) sử dụng — nên không có ngoại lệ.
