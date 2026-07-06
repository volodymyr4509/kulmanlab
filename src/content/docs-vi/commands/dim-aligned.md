---
title: Lệnh Dimension Aligned — Ghi Kích Thước Theo Bất Kỳ Góc Nào trong KulmanLab CAD
description: Lệnh Dimension Aligned đo khoảng cách thực sự giữa hai điểm. Đường kích thước chạy song song với đường p1→p2 theo bất kỳ góc nào — khác với Dimension Linear chỉ theo chiều ngang hoặc dọc. Hỗ trợ DXF đầy đủ dưới dạng thực thể DIMENSION.
---

# Dimension Aligned

Lệnh `dimaligned` đặt một kích thước đo **khoảng cách thực sự** giữa hai điểm. Đường kích thước chạy song song với đường nối hai điểm, có thể nghiêng theo bất kỳ góc nào. Đây là điểm khác biệt chính so với [Dimension Linear](../dim-linear/), chỉ hoạt động theo chiều ngang hoặc dọc.

## Cấu trúc kích thước căn chỉnh

- **Đường gióng** — vuông góc với đường kích thước, vẽ từ mỗi điểm đo.
- **Đường kích thước** — song song với p1→p2, lệch sang một bên theo vị trí con trỏ.
- **Giá trị** — khoảng cách Euclid thực sự `|p1 – p2|`.

## Đặt kích thước căn chỉnh

1. Gõ `dimaligned` trong terminal hoặc nhấn nút **Dimension Aligned** trên thanh công cụ.
2. **Nhấp điểm gốc gióng thứ nhất** (p1), hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. **Nhấp điểm gốc gióng thứ hai** (p2). Có thể nhập tọa độ tương tự.
4. **Di chuyển con trỏ** sang một bên để đặt khoảng lệch vuông góc của đường kích thước.
5. **Nhấp** để đặt, hoặc gõ khoảng cách lệch rồi nhấn **Enter** để đặt chính xác.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X (giai đoạn p1/p2), hoặc khoảng cách lệch (giai đoạn đặt) |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` / `Space` | Xác nhận tọa độ hoặc khoảng lệch |
| `Escape` | Hủy |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------|------|
| Góc đường kích thước | Song song với p1→p2 — bất kỳ góc nào | Luôn ngang hoặc dọc |
| Đo | Khoảng cách Euclid thực sự | Chỉ thành phần X hoặc Y |
| Tốt nhất cho | Đặc điểm đường chéo, vết cắt nghiêng | Bố cục trực giao, chi tiết theo lưới |

## Chỉnh sửa nhãn — chế độ đơn giản

**Nhấp đúp** vào kích thước căn chỉnh đã đặt để mở trình soạn thảo văn bản ở chế độ **đơn giản**. Trình soạn thảo được điền sẵn giá trị hiển thị hiện tại để bạn có thể đặt con trỏ và chỉnh sửa trực tiếp.

| Tính năng | Hành vi |
|-----------|---------|
| Bold / Italic / Font / Height | Áp dụng cho **toàn bộ nhãn** cùng một lúc |
| Định dạng theo ký tự | Không được hỗ trợ |
| `Enter` | Xác nhận giá trị và đóng trình soạn thảo |
| Nhiều dòng | Không được hỗ trợ |

Xem [Trình Soạn Thảo Văn Bản — chế độ đơn giản](../../interface/text-editor/#simple-mode) để tham khảo đầy đủ.

## Nối tiếp kích thước

Để thêm các kích thước tiếp tục từ đường gióng thứ hai của kích thước này, dùng [Dimension Continue](../dim-continue/) — nó khóa theo cùng góc đo với kích thước căn chỉnh này.

## DXF — thực thể DIMENSION (loại căn chỉnh)

Kích thước căn chỉnh được lưu dưới dạng thực thể `DIMENSION` với `dimType = 1` (căn chỉnh). Tất cả thuộc tính được lưu trữ đầy đủ và không bị mất khi xuất nhập DXF.
