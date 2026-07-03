---
title: Lệnh Hình Elip — Vẽ Hình Elip Xoay Theo Tâm và Hai Trục trong KulmanLab CAD
description: Lệnh Ellipse vẽ hình elip bằng ba lần nhấp — tâm, điểm cuối trục đầu tiên (theo bất kỳ hướng nào), sau đó độ dài trục thứ hai. Hai trục luôn vuông góc. Mỗi bán trục có điểm kéo riêng để thay đổi kích thước độc lập sau khi đặt. Hỗ trợ DXF đầy đủ dưới dạng thực thể ELLIPSE.
---

# Hình Elip

Lệnh `ellipse` vẽ một hình elip sử dụng ba lần nhấp: điểm tâm, điểm cuối của bán trục đầu tiên (lớn) theo bất kỳ góc nào, và độ dài của bán trục thứ hai (nhỏ). Hai trục luôn vuông góc với nhau — hướng trục thứ hai được tự động suy ra từ trục đầu tiên.

## Vẽ hình elip

1. Gõ `ellipse` trong terminal hoặc nhấp nút **Ellipse** trên thanh công cụ.
2. **Nhấp điểm tâm**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. **Nhấp điểm cuối trục đầu tiên** — đặt cả hướng và độ dài của bán trục đầu tiên.
4. **Đặt độ dài trục thứ hai** — di chuyển con trỏ vuông góc với trục đầu tiên, sau đó nhấp hoặc gõ độ dài.

Hình elip được đặt sau bước 4 và lệnh kết thúc.

## Chỉnh sửa điểm kéo — thay đổi kích thước trục độc lập

Một hình elip được chọn có năm điểm kéo:

| Điểm kéo | Số lượng | Tác dụng |
|----------|----------|---------|
| **Tâm** | 1 | Di chuyển toàn bộ hình elip; cả hai trục không đổi |
| **Điểm cuối trục lớn** | 2 (hai đầu đối diện của trục dài hơn) | Kéo để thay đổi kích thước bán trục lớn |
| **Điểm cuối trục nhỏ** | 2 (hai đầu đối diện của trục ngắn hơn) | Kéo để thay đổi kích thước bán trục nhỏ |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X (giai đoạn tâm/trục đầu tiên) |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ hoặc độ dài |
| `Escape` | Hủy và đặt lại |

## Các lệnh chỉnh sửa được hỗ trợ

| Lệnh | Tác dụng với hình elip |
|------|----------------------|
| [Di Chuyển](../move/) | Dịch chuyển tâm; cả hai trục không đổi |
| [Sao Chép](../copy/) | Tạo hình elip giống hệt tại tâm mới |
| [Xoay](../rotate/) | Xoay vị trí tâm và vector trục lớn theo cùng góc |
| [Đối Xứng](../mirror/) | Phản chiếu tâm và tính lại hướng trục lớn |
| [Tỉ Lệ](../scale/) | Chia tỉ lệ vị trí tâm và nhân cả hai bán trục |
| [Offset](../offset/) | Tạo hình elip đồng tâm lệch ra ngoài hoặc vào trong |
| [Xóa](../delete/) | Xóa hình elip |

## DXF — thực thể ELLIPSE

Hình elip được lưu dưới dạng thực thể `ELLIPSE` trong tệp DXF. Định dạng lưu trữ điểm tâm, vector trục lớn đầy đủ (hướng + độ dài), và tỉ lệ trục. Xoay, hình dạng và tất cả thuộc tính kiểu dáng được lưu trữ đầy đủ.
