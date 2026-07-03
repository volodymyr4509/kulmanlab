---
title: Lệnh Thu Nhỏ — Giảm Phóng To Khung Nhìn 1.5× Mỗi Bước trong KulmanLab CAD
description: Lệnh Zoom Out chia mức phóng to hiện tại cho 1.5× và thoát ngay lập tức. Được căn giữa theo giữa khung nhìn. Dùng bánh xe cuộn để thu nhỏ hướng con trỏ để kiểm soát tốt hơn.
---

# Thu Nhỏ

Lệnh `zoomout` chia mức phóng to hiện tại cho **1.5×** (tương đương nhân với ~0.667) và thoát ngay lập tức, được căn giữa theo giữa khung nhìn. Đây là nghịch đảo của [Phóng To](../zoom-in/).

## Thu nhỏ

Nhấp nút **Zoom Out** trên thanh công cụ hoặc gõ `zoomout` trong terminal. Phóng to được áp dụng ngay lập tức và lệnh thoát — không cần nhấp trên canvas.

## Cách bước 1.5× hoạt động

| Phóng to hiện tại | Sau một lần Thu Nhỏ |
|------------------|---------------------|
| 1.50× | 1.00× |
| 2.25× | 1.50× |
| 10.00× | 6.67× |
| 0.015× | 0.01× (giới hạn dưới) |

Mức phóng to luôn hiển thị ở **góc dưới bên phải** của canvas. Giới hạn dưới là **0.01×**; các bước tiếp theo không có tác dụng.

## Nút thu nhỏ thanh công cụ vs bánh xe cuộn

| | Nút Thu Nhỏ | Bánh xe cuộn |
|---|------|------|
| Tâm phóng to | Giữa khung nhìn | Vị trí con trỏ |
| Bước | 1.5× mỗi lần nhấp | ~1.1× mỗi nhấp |
| Yêu cầu kích hoạt | Không | Không — hoạt động luôn |
| Tốt nhất cho | Lùi ra để xem nhiều bối cảnh hơn | Thu nhỏ mượt mà neo vào con trỏ |

## Các lệnh khung nhìn liên quan

| Lệnh | Tác dụng |
|------|---------|
| [Phóng To](../zoom-in/) | Nhân phóng to 1.5× mỗi bước |
| [Vừa Khung](../fit/) | Đặt lại phóng to để hiển thị tất cả thực thể |
| [Di Chuyển Màn Hình](../pan/) | Dịch chuyển khung nhìn mà không phóng to |
