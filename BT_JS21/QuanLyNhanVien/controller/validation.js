function kiemTraRong(checkInput, idThongBao) {
    if(checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Không được để trống";
        // document.getElementById(idThongBao).style.display = "block";
        return false;
    }
}

function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Email không hợp lệ";
        document.getElementById(idThongBao).style.display = "block";
        return false;
    }
}

function kiemTraMatKhau(checkInput, idThongBao) {
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    var hopLe = regexPass.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
        return false;
    }
}

function kiemTraTenNhanVien(checkInput, idThongBao) {
    var regexTenNV = /^[a-zA-Z ]*$/;
    var hopLe = regexTenNV.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Tên nhân viên phải là chữ";
        return false;
    }
}

function kiemTraLuongCB(checkInput, idThongBao) {
    var regexLuongCB = /^[1000000-20000000]*$/;
    var hopLe = regexLuongCB.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Lương cơ bản 1.000.000 - 20.000.000";
        return false;
    }
}

function kiemTraGioLam(checkInput, idThongBao) {
    var regexLuongCB = /^[80-200]*$/;
    var hopLe = regexLuongCB.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Số giờ làm trong tháng 80 - 200 giờ";
        return false;
    }
}
