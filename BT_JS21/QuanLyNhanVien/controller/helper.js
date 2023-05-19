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
    var taiKhoanNhanVien = document.getElementById("tknv").value;
    var tenNhanVien = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCoBan = document.getElementById("luongCB").value * 1;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value * 1;

    var nhanVien = new NhanVien(
        taiKhoanNhanVien,
        tenNhanVien,
        email,
        pass,
        ngayLam,
        luongCoBan,
        chucVu,
        gioLam
    );
    return nhanVien;
}