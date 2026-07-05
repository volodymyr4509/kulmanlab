---
title: Bộ Chọn Độ Dày Đường Trên Thanh Công Cụ — Kiểm Soát Độ Rộng Nét Vẽ trong KulmanLab CAD
description: Bộ chọn độ dày đường trong thanh công cụ KulmanLab CAD đặt độ rộng nét vẽ áp dụng cho tất cả thực thể mới được vẽ. Hỗ trợ các giá trị độ dày đường DXF tiêu chuẩn từ 0,00 mm đến 2,11 mm cộng với chế độ ByLayer và Default.
---

# Độ Dày Đường

Chip **độ dày đường** trong thanh công cụ kiểm soát độ rộng nét vẽ được gán cho mỗi thực thể mới bạn vẽ. Nhấp để mở dropdown bộ chọn.

## Các tùy chọn

| Giá trị | Ý nghĩa |
|---------|---------|
| **From Layer** | Thực thể kế thừa độ dày đường được định nghĩa trên lớp của nó. |
| **Default** | Dùng độ rộng mặc định của ứng dụng — được hiển thị là đường mỏng (1 px). |
| **0,00 mm – 2,11 mm** | Độ rộng cố định rõ ràng. Thực thể mang giá trị này bất kể cài đặt độ dày đường của lớp. |

Các giá trị độ dày đường DXF tiêu chuẩn có sẵn: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 và 2,11 mm.

## Cách áp dụng

Độ dày đường được chọn được áp dụng cho mọi thực thể được tạo sau khi thay đổi. Nó không hồi tố ảnh hưởng đến các thực thể hiện có.

Để thay đổi độ dày đường của các thực thể hiện có, chọn chúng và chỉnh sửa trường **Lineweight** trong bảng thuộc tính, hoặc dùng [MatchProperties](../../commands/match-properties/) để sao chép nó từ thực thể khác.

## Hiển thị

Độ dày đường được hiển thị ở tỉ lệ **3,78 px mỗi mm** (96 dpi). Đường 0,25 mm xấp xỉ rộng 1 px trên màn hình; đường 1,00 mm xấp xỉ 4 px. Các giá trị rất mỏng (0,00 mm và âm) luôn được hiển thị ít nhất 0,5 px để chúng vẫn hiển thị ở mọi mức phóng to.

## Tương thích DXF

Giá trị độ dày đường được lưu dưới dạng số nguyên tính bằng phần trăm milimét (ví dụ: 25 = 0,25 mm) trong các bản ghi thực thể DXF. **From Layer** được lưu là `-1` và **Default** là `-3`, khớp với thông số kỹ thuật DXF. Các tệp không bị mất khi xuất nhập trong bất kỳ ứng dụng tương thích DXF nào.
