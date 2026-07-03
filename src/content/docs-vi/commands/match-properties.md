---
title: Khớp Thuộc Tính — Sao Chép Thuộc Tính Thực Thể trong KulmanLab CAD
description: Lệnh MatchProperties sao chép màu sắc, lớp và các thuộc tính dùng chung khác từ thực thể nguồn sang một hoặc nhiều thực thể mục tiêu. Khớp thuộc tính giống như các công cụ CAD máy tính để bàn.
---

# Khớp Thuộc Tính

Lệnh `MatchProperties` sao chép **thuộc tính trực quan và lớp** từ thực thể nguồn sang một hoặc nhiều thực thể mục tiêu. Chỉ các thuộc tính được chia sẻ giữa loại thực thể nguồn và mục tiêu mới được chuyển — hình học không bao giờ bị thay đổi.

## Cách kích hoạt

Nhấp nút **Match Properties** trên thanh công cụ (biểu tượng con lăn sơn) trong bảng Style, hoặc gõ `MatchProperties` trong terminal.

## Quy trình làm việc

**Kích hoạt trước, sau đó chọn nguồn:**

1. Gõ `MatchProperties` hoặc nhấp nút thanh công cụ khi không có gì được chọn trước.
2. **Nhấp thực thể nguồn** — thực thể có thuộc tính bạn muốn sao chép.
3. **Nhấp từng thực thể mục tiêu** để áp dụng thuộc tính nguồn.
4. Nhấn **Enter** hoặc **Escape** để kết thúc.

**Chọn nguồn trước, sau đó kích hoạt:**

1. Nhấp một thực thể để chọn nó.
2. Kích hoạt `MatchProperties`. Thực thể đã chọn được dùng làm nguồn tự động.
3. Nhấp thực thể mục tiêu hoặc chọn kéo, sau đó **Enter** hoặc **Escape** để kết thúc.

## Thuộc tính được sao chép

Tối thiểu, **tất cả loại thực thể** chia sẻ các thuộc tính này:

| Thuộc tính | Mô tả |
|-----------|-------|
| **Màu sắc** | Chỉ số màu của thực thể (bao gồm "By Layer" / "By Block") |
| **Lớp** | Lớp mà thực thể thuộc về |

Đối với thực thể có văn bản (**Văn bản**, **Kích Thước**, **Đường Dẫn Đa**), chỉ chiều cao văn bản được sao chép — phông chữ, in đậm, in nghiêng và các cài đặt kiểu văn bản khác không được khớp.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn vùng hoặc kết thúc lệnh |
| `Escape` | Kết thúc áp dụng (nếu nguồn đã đặt) hoặc hủy |

## Các lệnh liên quan

- [LayerMatch](../layer-match/) — di chuyển thực thể đã chọn sang cùng lớp với nguồn (chỉ thuộc tính lớp)
- [LayerMakeCurrent](../layer-make-current/) — đặt lớp vẽ hiện tại từ thực thể được nhấp
