function kiemTraRong(checkInput, idThongBao) {
    if(checkInput) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Không được để trống";
        document.getElementById(idThongBao).style.display = "block";
        return false;
    }
}

function kiemTraTaiKhoan(checkInput, idThongBao) {
    var regexTaiKhoan = /^[0-9]{4,6}$/;
    var hopLe = regexTaiKhoan.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Tài khoản tối đa 4 - 6 ký số";
        return false;
    }
}

function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Email không hợp lệ";
        return false;
    }
}

function kiemTraMatKhau(checkInput, idThongBao) {
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    var hopLe = regexPass.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
        return false;
    }
}

function kiemTraNgay(checkInput, idThongBao) {
    var regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    var hopLe = regexDate.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Ngày phải có định dạng mm/dd/yyyy";
        return false;
    }
}

function kiemTraTenNhanVien(checkInput, idThongBao) {
    var regexTenNV =  /^[\p{L} ]+$/u;
    var hopLe = regexTenNV.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Tên nhân viên phải là chữ";
        return false;
    }
}

function kiemTraLuongCB(checkInput, idThongBao) {
    var regexLuongCB = /^[1000000-20000000]*$/;
    var hopLe = regexLuongCB.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Lương cơ bản phải từ 1.000.000 - 20.000.000";
        return false;
    }
}

function kiemTraGioLam(checkInput, idThongBao) {
    var regexGioLam = /^([8-9][0-9]|10[0-9]|1[0-9][0-9]|2[0][0])$/;
    var hopLe = regexGioLam.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).style.display = "none";
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Số giờ làm trong tháng phải từ 80 - 200 giờ";
        return false;
    }
}
