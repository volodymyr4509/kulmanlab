---
title: Fit — Đóng Khung Tất Cả Thực Thể Trong Khung Nhìn Bằng Một Nhấp
description: Lệnh Fit tính hộp bao của tất cả thực thể và điều chỉnh phóng to/thu nhỏ và di chuyển để mọi thực thể đều hiển thị với một khoảng lề nhỏ. Nhấp đúp chuột giữa kích hoạt Fit mà không cần kích hoạt lệnh.
group: navigate
order: 4
---

# Fit

Lệnh `fit` tính hộp bao của tất cả thực thể trong bản vẽ và điều chỉnh cả mức phóng to và vị trí di chuyển để mọi thực thể hiển thị với một khoảng lề nhỏ. Đây là cách nhanh nhất để khôi phục khung nhìn bị mất hoặc định hướng sau khi nhập tệp DXF.

## Vừa khung nhìn

Nhấp nút **Fit** trên thanh công cụ hoặc gõ `fit` trong terminal. Khung nhìn điều chỉnh ngay lập tức và lệnh kết thúc — không cần tương tác.

**Nhấp đúp nút chuột giữa** kích hoạt cùng thao tác Fit bất kỳ lúc nào mà không cần kích hoạt lệnh.

## Cách hoạt động của hộp bao

| Trạng thái bản vẽ | Kết quả |
|-------------------|---------|
| Rộng hơn cao | Phóng to bị giới hạn bởi chiều rộng |
| Cao hơn rộng | Phóng to bị giới hạn bởi chiều cao |
| Thực thể đơn | Vừa xung quanh thực thể đó |
| Bản vẽ trống | Khung nhìn không thay đổi |

## Fit vs điều khiển phóng to thủ công

| | Fit | Zoom In / Zoom Out | Bánh xe cuộn |
|---|------|------|------|
| Tâm | Tất cả thực thể | Giữa khung nhìn | Con trỏ |
| Bước | Tự động (một lần) | 1.5× mỗi bước | ~1.1× mỗi nhấp |
| Tốt nhất cho | Khôi phục khung nhìn bị mất, sau khi nhập | Bước vào/ra từ trung tâm | Phóng to chính xác hướng con trỏ |

## Các lệnh khung nhìn liên quan

| Lệnh | Tác dụng |
|------|---------|
| [Pan](../pan/) | Dịch chuyển khung nhìn mà không phóng to |
| [Zoom In](../zoom-in/) | Nhân phóng to 1.5× mỗi bước |
| [Zoom Out](../zoom-out/) | Chia phóng to 1.5× mỗi bước |
