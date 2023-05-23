function NhanVien(
    _taiKhoanNhanVien,
    _tenNhanVien,
    _email,
    _pass,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
    // _heSoLuongCoBan
) {
    this.taiKhoanNhanVien = _taiKhoanNhanVien;
    this.tenNhanVien = _tenNhanVien;
    this.email = _email;
    this.pass = _pass;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;


    //Tính lương
    this.tinhLuong = function () {
        heSoLuong = this.chucVu;
        if (heSoLuong == "Nhân viên") {
            heSoLuong = 1;
        } else if (heSoLuong == "Trưởng phòng") {
            heSoLuong = 2;
        } else if (heSoLuong == "Sếp") {
            heSoLuong = 3;
        } else {
            // heSoLuong = 0;
        }
        return (this.luongCoBan * heSoLuong);
    }



    this.xepHang = function () {
        var tongGioLam = this.gioLam;
        if (tongGioLam >= 192) {
            return "Nhân viên xuất sắc";
        } else if (tongGioLam >= 176 && tongGioLam < 192) {
            return "Nhân viên giỏi";
        } else if (tongGioLam >= 160 && tongGioLam < 176) {
            return "Nhân viên khá";
        } else {
            return "Nhân viên trung bình";
        }
    }
}