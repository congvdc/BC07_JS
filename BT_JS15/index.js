// BT 1: Quản lý tuyển sinh

const KHU_VUC_X = "x";
const KHU_VUC_A = "a";
const KHU_VUC_B = "b";
const KHU_VUC_C = "c";

function diemKhuVuc(loaiKhuVuc) {
    switch (loaiKhuVuc) {
        case KHU_VUC_X:
            return 0;

        case KHU_VUC_A:
            return 2;

        case KHU_VUC_B:
            return 1;

        case KHU_VUC_C:
            return 0.5;

        default:
            break;
    }
}

const DOI_TUONG_0 = "0";
const DOI_TUONG_1 = "1";
const DOI_TUONG_2 = "2";
const DOI_TUONG_3 = "3";

function diemDoiTuong(loaiDoiTuong) {
    switch (loaiDoiTuong) {
        case DOI_TUONG_0:
            return 0;

        case DOI_TUONG_1:
            return 2.5;

        case DOI_TUONG_2:
            return 1.5;

        case DOI_TUONG_3:
            return 1;

        default:
            break;
    }
}

function tinhKetQua() {
    var loaiKhuVuc = document.querySelector("input[name='khuVuc']:checked").value;
    var loaiDoiTuong = document.querySelector("input[name='doiTuong']:checked").value;

    var diemMon1 = document.getElementById("diem1").value * 1;
    var diemMon2 = document.getElementById("diem2").value * 1;
    var diemMon3 = document.getElementById("diem3").value * 1;

    var diemChuan = document.getElementById("diemChuan").value * 1;
    var diemCongKhuVuc = diemKhuVuc(loaiKhuVuc);
    var diemCongDoiTuong = diemDoiTuong(loaiDoiTuong);
    var diemTongKet = (diemMon1 + diemMon2 + diemMon3) + diemCongKhuVuc + diemCongDoiTuong;

    if (diemChuan > 0 && diemMon1 >= 0 && diemMon2 >= 0 && diemMon3 >= 0) {
        if (diemTongKet >= diemChuan) {
            document.getElementById("hienThiKetQua").innerHTML = "Đậu. Tổng điểm: " + diemTongKet;
        } else {
            document.getElementById("hienThiKetQua").innerHTML = "Rớt"
        }
    } else {
        alert("Nhập sai định dạng")
    }
}

// Bài tập 2
const bac1 = 500;
const bac2 = 650;
const bac3 = 850;
const bac4 = 1100;
const bac5 = 1300;

function thongTinTieuThuDien(ten, soKW) {
    var tienDien = 0;
    var tenNguoi = "";
    tenNguoi = ten;
    if (soKW > 1) {
        if (soKW <= 50) {
            tienDien = soKW * bac1;
        } else if (soKW <= 100) {
            tienDien = 50 * bac1 + ((soKW - 50) * bac2);
        } else if (soKW <= 200) {
            tienDien = 50 * bac1 + (50 * bac2) + ((soKW - 100) * bac3);
        } else if (soKW <= 350) {
            tienDien = 50 * bac1 + (50 * bac2) + (100 * bac3) + ((soKW - 200) * bac4);
        } else if (soKW > 350) {
            tienDien = 50 * bac1 + (50 * bac2) + (100 * bac3) + (150 * bac4) + ((soKW - 350) * bac5);
        }
    }
    var quyDoiNgoaiTe = tienDien.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    document.getElementById("hienThiKetQuaBT2").innerHTML = "Họ tên: " + tenNguoi + ";Tiền điện:" + quyDoiNgoaiTe;
    console.log(tienDien);
    console.log(tenNguoi);
}

function tinhTien() {
    var ten = document.getElementById("tenNguoiDung").value;
    console.log(ten)
    var soDienTieuDung = +document.getElementById("soDien").value;
    console.log(soDienTieuDung)
    thongTinTieuThuDien(ten, soDienTieuDung)
}
document.getElementById("tinhTienDien").onclick = tinhTien;

//Bài tập 3
const muc1 = 0.05;
const muc2 = 0.1;
const muc3 = 0.15;
const muc4 = 0.2;
const muc5 = 0.25;
const muc6 = 0.3;
const muc7 = 0.35;

function thongTinDongThue(tenNNT, thuNhap, nguoiPT) {
    var tienThue = 0;
    var thuNhapChiuThue = 0;
    var tenNguoi = "";
    var soNguoiPhuThuoc = 0;
    tenNguoi = tenNNT;
    soNguoiPhuThuoc = nguoiPT;
    tienThue = thuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    if (thuNhap > 1) {
        if (tienThue <= 60000000) {
            thuNhapChiuThue = tienThue * muc1;
        } else if (tienThue <= 120000000) {
            thuNhapChiuThue = tienThue * muc2;
        } else if (tienThue <= 210000000) {
            thuNhapChiuThue = tienThue * muc3;
        } else if (tienThue <= 384000000) {
            thuNhapChiuThue = tienThue * muc4;
        } else if (tienThue <= 624000000) {
            thuNhapChiuThue = tienThue * muc5;
        } else if (tienThue <= 960000000) {
            thuNhapChiuThue = tienThue * muc6;
        } else if (tienThue > 960000000) {
            thuNhapChiuThue = tienThue * muc7;
        }
    }
    var quyDoiNgoaiTe = thuNhapChiuThue.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    document.getElementById("hienThiKetQuaBT3").innerHTML = "Họ tên: " + tenNguoi + ";Tiền thuế thu nhập cá nhân: " + quyDoiNgoaiTe;
    console.log(thuNhapChiuThue);
    console.log(tenNguoi);
}

function tinhTienThueThuNhap() {
    var ten = document.getElementById("tenNguoiNopThue").value;
    console.log(ten)
    var soTienThuNhapNam = +document.getElementById("thuNhapNam").value;
    console.log(soTienThuNhapNam)
    var soNguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;
    thongTinDongThue(ten, soTienThuNhapNam, soNguoiPhuThuoc)
}
document.getElementById("tinhTienThue").onclick = tinhTienThueThuNhap;

// Bài tập 4
function myFunction() {
    var x = document.getElementById("loaiKhachHang").value;
    console.log(x)
    if (x == 2) {
        document.getElementById("innerKetNoi").innerHTML = `<label for="soNgay" class="form-label">Nhập Số Kết Nối</label>
            <input type="text" class="form-control" id="soKetNoi">` ;
    } else {
        document.getElementById("innerKetNoi").innerHTML = ``;
    }
}

function tienCap(maKH, loaiKH, ketNoi, kenhCaoCap) {
    var soKetNoi = 0;
    var soKenhCaoCap = 0;
    var tongTienHoaDon = 0;
    soKetNoi = ketNoi;
    soKenhCaoCap = kenhCaoCap;
    switch (loaiKH) {
        case 1:
            console.log("dan");
            var phiXuLyHoaDon = 4.5;
            console.log(phiXuLyHoaDon)
            var phiDichVuCoBan = 20.5;
            console.log(phiDichVuCoBan)
            var phiKenhCaoCap = 7.5 * soKenhCaoCap;
            console.log(phiKenhCaoCap)
            tongTienHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;
            console.log(tongTienHoaDon);
            document.getElementById("hienThiKetQuaBT4").innerHTML = "Mã khách hàng: " + maKH + "; Tổng tiền: $" + tongTienHoaDon;
            break;
        case 2:
            console.log("doanh nghiep");
            var phiXuLyHoaDon = 15;
            console.log(phiXuLyHoaDon)
            if (soKetNoi <= 10) {
                var phiDichVuCoBan = 75;
            } else {
                var phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
            }
            console.log(phiDichVuCoBan)
            var phiKenhCaoCap = 50 * soKenhCaoCap;
            console.log(phiKenhCaoCap);
            tongTienHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;
            console.log(tongTienHoaDon);
            document.getElementById("hienThiKetQuaBT4").innerHTML = "Mã khách hàng: " + maKH + "; Tổng tiền: $" + tongTienHoaDon;
            break;
        default:
            break;
    }
}
function tinhTienCap() {
    var elementExists = document.getElementById("soKetNoi");
    var maKH = document.getElementById("maKhachHang").value;
    console.log(maKH)
    var loaiKH = +document.getElementById("loaiKhachHang").value;
    console.log(loaiKH)
    if (elementExists != null) {
        var newKetNoi = +document.getElementById("soKetNoi").value;
        console.log(newKetNoi)
    } else {
        newKetNoi = 0;
    }

    var kenhCaoCap = +document.getElementById("soKenhCaoCap").value;
    console.log(kenhCaoCap)
    tienCap(maKH, loaiKH, newKetNoi, kenhCaoCap)
}
document.getElementById("tinhTienHoaDonCap").onclick = tinhTienCap;