---
title: Lệnh Phóng To — Phóng To Khung Nhìn 1.5× Mỗi Bước trong KulmanLab CAD
description: Lệnh Zoom In nhân mức phóng to hiện tại lên 1.5× và thoát ngay lập tức. Được căn giữa theo giữa khung nhìn. Phạm vi phóng to 0.01–10.000. Dùng bánh xe cuộn để phóng to hướng con trỏ thay thế.
---

# Phóng To

Lệnh `zoomin` nhân mức phóng to hiện tại lên **1.5×** và thoát ngay lập tức, được căn giữa theo giữa khung nhìn. Đây là tương đương thanh công cụ của một nhấp bánh xe cuộn hướng về giữa màn hình thay vì con trỏ.

## Phóng to

Nhấp nút **Zoom In** trên thanh công cụ hoặc gõ `zoomin` trong terminal. Phóng to được áp dụng ngay lập tức và lệnh thoát — không cần nhấp trên canvas.

## Cách bước 1.5× hoạt động

| Phóng to hiện tại | Sau một lần Phóng To |
|------------------|---------------------|
| 1.00× | 1.50× |
| 1.50× | 2.25× |
| 10.00× | 15.00× |
| 6,667× | 10,000× (giới hạn trên) |

Mức phóng to luôn hiển thị ở **góc dưới bên phải** của canvas. Giới hạn trên là **10,000×**; các bước tiếp theo không có tác dụng.

## Nút phóng to thanh công cụ vs bánh xe cuộn

| | Nút Phóng To | Bánh xe cuộn |
|---|------|------|
| Tâm phóng to | Giữa khung nhìn | Vị trí con trỏ |
| Bước | 1.5× mỗi lần nhấp | ~1.1× mỗi nhấp |
| Yêu cầu kích hoạt | Không | Không — hoạt động luôn |
| Tốt nhất cho | Điều hướng thô | Phóng to chính xác hướng con trỏ |

## Các lệnh khung nhìn liên quan

| Lệnh | Tác dụng |
|------|---------|
| [Thu Nhỏ](./zoom-out) | Chia phóng to 1.5× mỗi bước |
| [Vừa Khung](./fit) | Đặt lại phóng to để hiển thị tất cả thực thể |
| [Di Chuyển Màn Hình](./pan) | Dịch chuyển khung nhìn mà không phóng to |
