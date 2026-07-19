---
title: Lệnh Wipe Storage — Xóa Tất Cả Dữ Liệu Trình Duyệt
description: Lệnh wipestorage xóa vĩnh viễn tất cả tệp, lớp, kiểu đường và lịch sử hoàn tác được lưu trong trình duyệt. Yêu cầu gõ YES để xác nhận. Dùng khi đặt lại cơ sở dữ liệu cục bộ bị hỏng hoặc quá đầy.
group: file
order: 6
---

# Wipe Storage

Lệnh `wipestorage` xóa vĩnh viễn **tất cả dữ liệu được lưu trong trình duyệt** cho KulmanLab CAD — mọi tệp đã lưu, bảng lớp và kiểu đường, và lịch sử hoàn tác. Trang tự động tải lại sau đó.

:::danger Không thể hoàn tác
Hành động này không thể hoàn tác. Tất cả tệp được lưu trong trình duyệt bị xóa. Xuất bất kỳ bản vẽ nào bạn muốn giữ dưới dạng tệp `.json` hoặc `.dxf` trước khi chạy lệnh này.
:::

## Khi nào dùng

- Bộ nhớ trình duyệt bị hỏng và ứng dụng không thể tải hoặc lưu tệp.
- Bạn muốn đặt lại hoàn toàn ứng dụng về trạng thái sạch.
- Bạn đang chuyển trình duyệt hoặc thiết bị và không cần bản sao cục bộ nữa.

## Cách chạy

1. Gõ `wipestorage` trong terminal và nhấn **Enter**.
2. Terminal nhắc: *Wipe all browser local storage? Type YES to confirm*
3. Gõ `YES` (bất kỳ chữ hoa nào) và nhấn **Enter**.

Ứng dụng xóa cơ sở dữ liệu và tải lại trang. Nếu bạn gõ bất cứ thứ gì khác ngoài `YES` và nhấn **Enter**, hoặc nhấn **Escape**, lệnh bị hủy và không có gì bị xóa.

## Những gì bị xóa

| Dữ liệu | Bị xóa |
|---------|--------|
| Tất cả tệp được lưu trong trình duyệt | Có |
| Bảng lớp và kiểu đường cho mỗi tệp | Có |
| Lịch sử hoàn tác / làm lại cho mỗi tệp | Có |

Chỉ dữ liệu được lưu cục bộ trong **trình duyệt này** bị ảnh hưởng. Các tệp bạn đã xuất dưới dạng `.json` hoặc `.dxf` không bị ảnh hưởng.
