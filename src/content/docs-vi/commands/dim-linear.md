---
title: Lệnh Kích Thước Tuyến Tính — Kích Thước Ngang và Dọc trong KulmanLab CAD
description: Lệnh Dimension Linear đo khoảng cách ngang hoặc dọc giữa hai điểm. Đường kích thước luôn căn chỉnh theo trục — nhấn H hoặc V để khóa hướng, hoặc để vị trí con trỏ tự động xác định. Hỗ trợ DXF đầy đủ dưới dạng thực thể DIMENSION.
---

# Kích Thước Tuyến Tính

Lệnh `dimlinear` đặt kích thước ngang hoặc dọc giữa hai điểm gốc gióng. Đường kích thước luôn chạy hoàn toàn ngang hoặc dọc — không thể đặt theo góc tùy ý. Dùng [Kích Thước Căn Chỉnh](./dim-aligned) khi cần kích thước song song với đường chéo.

## Cấu trúc kích thước tuyến tính

- **Đường gióng** — thả từ mỗi điểm đo vuông góc với đường kích thước.
- **Đường kích thước** — ngang (đo khoảng cách X) hoặc dọc (đo khoảng cách Y).
- **Giá trị** — khoảng cách chiếu dọc theo trục đã chọn, không phải khoảng cách thực giữa hai điểm.

## Đặt kích thước tuyến tính

1. Gõ `dimlinear` trong terminal hoặc nhấp nút **Dimension Linear** trên thanh công cụ.
2. **Nhấp điểm gốc gióng đầu tiên** (p1), hoặc gõ `X,Y` rồi nhấn **Enter**.
3. **Nhấp điểm gốc gióng thứ hai** (p2). Có thể nhập tọa độ tương tự.
4. **Di chuyển con trỏ** để định vị đường kích thước. Hướng được phát hiện tự động từ vị trí con trỏ.
5. **Nhấp** để đặt, hoặc gõ khoảng cách lệch rồi nhấn **Enter**.

## Phát hiện hướng tự động

| Vị trí con trỏ | Hướng phát hiện | Đo gì |
|----------------|-----------------|-------|
| Trên hoặc dưới các điểm | Ngang | Δ X giữa p1 và p2 |
| Trái hoặc phải các điểm | Dọc | Δ Y giữa p1 và p2 |

Nhấn **H** để khóa ngang hoặc **V** để khóa dọc bất kỳ lúc nào trong giai đoạn đặt.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X (giai đoạn p1/p2), hoặc khoảng lệch (giai đoạn đặt) |
| `,` | Khóa X và chuyển sang nhập Y |
| `H` | Khóa hướng ngang (chỉ giai đoạn đặt) |
| `V` | Khóa hướng dọc (chỉ giai đoạn đặt) |
| `Backspace` | Xóa ký tự cuối |
| `Enter` / `Space` | Xác nhận tọa độ hoặc khoảng lệch |
| `Escape` | Hủy |

## Kích Thước Tuyến Tính vs Kích Thước Căn Chỉnh

| | Kích Thước Tuyến Tính | Kích Thước Căn Chỉnh |
|---|------|------|
| Trục | Luôn H hoặc V | Song song với đường đo |
| Đo | Chỉ thành phần X hoặc Y | Khoảng cách Euclid thực sự |
| Phím H/V | Có — khóa hướng | Không — luôn theo p1→p2 |
| Tốt nhất cho | Bố cục trực giao, mặt bằng | Đặc điểm đường chéo, vết cắt nghiêng |

## Chỉnh sửa nhãn — chế độ đơn giản

**Nhấp đúp** vào kích thước tuyến tính đã đặt để mở trình soạn thảo văn bản ở chế độ **đơn giản**. Trình soạn thảo được điền sẵn giá trị hiển thị hiện tại để bạn có thể đặt con trỏ và chỉnh sửa trực tiếp.

| Tính năng | Hành vi |
|-----------|---------|
| Bold / Italic / Font / Height | Áp dụng cho **toàn bộ nhãn** cùng một lúc |
| Định dạng theo ký tự | Không được hỗ trợ |
| `Enter` | Xác nhận giá trị và đóng trình soạn thảo |
| Nhiều dòng | Không được hỗ trợ |

Xem [Trình Soạn Thảo Văn Bản — chế độ đơn giản](../interface/text-editor#simple-mode) để tham khảo đầy đủ.

## Nối tiếp kích thước

Để thêm các kích thước tiếp tục từ đường gióng cuối cùng, dùng [Kích Thước Tiếp Tục](./dim-continue) ngay sau khi đặt kích thước này.

## DXF — thực thể DIMENSION

Kích thước tuyến tính được lưu dưới dạng thực thể `DIMENSION` với `rotationDeg` được đặt là `0` (ngang) hoặc `90` (dọc). Tất cả thuộc tính được lưu trữ đầy đủ và không bị mất.
