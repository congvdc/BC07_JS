function ganGiaTriChoInput(
    taiKhoanNhanVien,
    tenNhanVien,
    email,
    pass,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
) {
    document.getElementById("tknv").value = taiKhoanNhanVien;
    document.getElementById("name").value = tenNhanVien;
    document.getElementById("email").value = email;
    document.getElementById("password").value = pass;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luongCoBan;
    document.getElementById("chucvu").value = chucVu;
    document.getElementById("gioLam").value = gioLam;
}

function timViTriNhanVien(taiKhoanNhanVien) {
    var viTri = -1;
    arrNhanVien.forEach(function (item, index) {
        if (item.taiKhoanNhanVien == taiKhoanNhanVien) {
            viTri = index;
        }
    });
    return viTri;
}

function layGiaTriInput() {
    var _taiKhoanNhanVien = document.getElementById("tknv").value;
    var _tenNhanVien = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _pass = document.getElementById("password").value;
    var _ngayLam = document.getElementById("datepicker").value;
    var _luongCoBan = document.getElementById("tbLuongCB").value;
    var _chucVu = document.getElementById("chucvu").value;
    var _gioLam = document.getElementById("gioLam").value;

    var valid = true;
    valid =
        kiemTraRong(_taiKhoanNhanVien, "tbTKNV") & kiemTraRong(_tenNhanVien, "tbTen") &
        kiemTraRong(_email, "tbEmail") &
        kiemTraRong(_pass, "tbMatKhau") &
        kiemTraRong(_ngayLam, "tbNgay") &
        kiemTraRong(_luongCoBan, "tbLuongCB") &
        kiemTraRong(_chucVu, "tbChucVu") &
        kiemTraRong(_gioLam, "tbGiolam");

    valid &= kiemTraTaiKhoan(_taiKhoanNhanVien,
        "tbTKNV");
    valid &= kiemTraTenNhanVien(_tenNhanVien, "tbTen");
    valid &= kiemTraEmail(_email, "tbEmail");
    valid &= kiemTraMatKhau(_pass, "tbMatKhau");
    valid &= kiemTraNgay(_ngayLam, "tbNgay");
    valid &= kiemTraLuongCB(_luongCoBan, "tbLuongCB");
    valid &= kiemTraGioLam(_gioLam, "tbGiolam");

    if (!valid) {
        return;
    }


    var nhanVien = new NhanVien(
        _taiKhoanNhanVien,
        _tenNhanVien,
        _email,
        _pass,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam
    );
    return nhanVien;
}

function saveStorage(arrNhanVien) {
    localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

function getStorage() {
    var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
    if (arrNhanVienLocal != null) {
        arrNhanVien = arrNhanVienLocal;
    }
}