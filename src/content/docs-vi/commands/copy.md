---
title: Lệnh Copy — Sao Chép Đối Tượng Đến Vị Trí Mới trong KulmanLab CAD
description: Lệnh Copy tạo các bản sao dịch chuyển của các đối tượng được chọn trong khi để nguyên các bản gốc. Hỗ trợ chọn trước, khóa góc và nhập khoảng cách chính xác. Các bản sao được đặt và lệnh kết thúc; bản gốc không thay đổi.
keywords: [lệnh copy CAD, sao chép đối tượng CAD, nhân bản hình học CAD, khóa góc sao chép, khoảng cách chính xác, kulmanlab]
---

# Copy

Lệnh `copy` tạo các bản sao dịch chuyển của các đối tượng được chọn và đặt chúng offset từ điểm cơ sở đến điểm đích — các bản gốc vẫn ở đúng vị trí. Đây là sự khác biệt chính với [Move](./move): Copy thêm thực thể mới vào bản vẽ; Move di chuyển thực thể hiện có.

## Hai Cách Bắt Đầu

**Chọn trước, rồi sao chép** — chọn đối tượng trước, sau đó kích hoạt:

1. Chọn một hoặc nhiều đối tượng trên canvas.
2. Nhập `copy` trong terminal hoặc bấm nút **Copy** trên thanh công cụ.
3. **Bấm điểm cơ sở**, hoặc nhập `X,Y` và nhấn **Enter** cho tọa độ chính xác.
4. **Bấm điểm đích** — bản sao xuất hiện tại offset cơ sở→đích. Nhập tọa độ cũng được.

**Kích hoạt, rồi chọn** — bắt đầu lệnh khi không có gì được chọn:

1. Nhập `copy` hoặc bấm nút thanh công cụ.
2. **Chọn đối tượng** — bấm để chuyển đổi từng đối tượng, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận chọn.
4. **Bấm điểm cơ sở**, rồi **bấm điểm đích** (nhập tọa độ có sẵn ở cả hai bước).

```
  Trước:               Sau:
  [đối tượng A]        [đối tượng A]  ← bản gốc không thay đổi
  [đối tượng B]        [đối tượng B]
                       [bản sao A] ← thực thể mới
                       [bản sao B]
```

Xem trước bản ma của các bản sao theo con trỏ từ điểm cơ sở đến điểm đích.

## Nhập Tọa Độ

Tại bước điểm cơ sở hoặc điểm đích, nhập vị trí chính xác thay vì bấm:

1. Nhập giá trị X.
2. Nhấn `,` — terminal hiển thị `[X], [Y{con trỏ}]`.
3. Nhập giá trị Y.
4. Nhấn **Enter** để xác nhận.

## Khóa Góc và Khoảng Cách Chính Xác

Sau khi điểm cơ sở được đặt, lệnh bắt điểm vào các trục 45° (0°, 45°, 90°, 135°, …) khi con trỏ đủ xa và gần trục. Khi khóa, nhập khoảng cách và nhấn **Enter** để đặt các bản sao ở chính xác offset đó.

| Phím | Hành Động |
|------|-----------|
| `0`–`9`, `.` | Thêm vào giá trị khoảng cách |
| `-` | Khoảng cách âm — đảo ngược hướng dọc theo trục |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Đặt bản sao ở khoảng cách đã nhập |

## Tham Khảo Phím Tắt

| Phím | Hành Động |
|------|-----------|
| `Enter` / `Space` | Xác nhận chọn và chuyển sang giai đoạn điểm cơ sở |
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc khoảng cách khi khóa góc |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Xác nhận tọa độ hoặc áp dụng sao chép ở khoảng cách đã nhập |
| `Escape` | Hủy và đặt lại |

## Chọn Trong Lệnh

| Phương Pháp | Hành Vi |
|-------------|---------|
| **Bấm** | Chuyển đổi đối tượng dưới con trỏ vào/ra khỏi chọn |
| **Kéo phải** (nghiêm ngặt) | Thêm đối tượng hoàn toàn bên trong hộp |
| **Kéo trái** (cắt ngang) | Thêm đối tượng giao với ranh giới hộp |
| **Enter** / **Space** | Xác nhận chọn |

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Bản gốc | Ở nguyên vị trí | Bị xóa khỏi vị trí ban đầu |
| Số lượng kết quả | Tăng theo số đối tượng được sao chép | Không thay đổi |
| Tốt nhất cho | Lặp lại hình học, bố cục đối xứng | Di chuyển lại hình học |

## Thực Thể Được Hỗ Trợ

Copy hoạt động trên mọi loại thực thể. Tất cả thực thể đều triển khai `translate(dx, dy)` bên trong nên không có ngoại lệ.
