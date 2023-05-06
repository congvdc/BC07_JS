// BT1: Tìm số nguyên dương nhỏ nhất
function tinhTongTimSoNguyenDuongNhoNhat() {
    var ketQua = 0;
    var bienBuocNhayMoi = 0;

    while (ketQua < 10000) {
        bienBuocNhayMoi++;
        ketQua = ketQua + bienBuocNhayMoi;
    }
    document.querySelector(".bg-success").innerHTML = "Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: " + bienBuocNhayMoi;
}


// BT2: Tính tổng, nhập vào x, n
function tinhTongHaiSo() {
    var soXBatKi = document.getElementById("soX").value * 1;
    var soNBatKi = document.getElementById("soN").value * 1;

    var luyThua = 1;
    var tongCacKySo = 0;
    
    for (var i = 1; i <= soNBatKi; i++) {
        luyThua = luyThua * soXBatKi;
        tongCacKySo = tongCacKySo + luyThua
    }
    document.querySelector(".bg-secondary").innerHTML = "Tổng là " + tongCacKySo;
}


// BT3: Tính giai thừa
function tinhGiaiThua() {
    var soN = document.getElementById("soNBatKy").value * 1;
    var giaiThua = 1;

    for (var i = 1; i <= soN; i++) {
        giaiThua = giaiThua * i;
    }
    document.querySelector(".bg-primary").innerHTML = "Giai thừa là " + giaiThua;
}


//BT4: DIV chẵn lẻ
function inTheDiv() {
    for(var i = 1; i <= 10; i++){
        if (i % 2 == 0){
            document.querySelector(".bg-warning").innerHTML += '<div class="bg-danger bg-opacity-75 p-2 text-white mt-3">Chẵn</div>';
        } else {
            document.querySelector(".bg-warning").innerHTML += '<div class="bg-primary bg-opacity-75 p-2 text-white mt-3">Lẻ</div>';
        }
    }
}


// BT5: In số nguyên tố
function inSoNguyenTo(){
    var soABatKi = +document.getElementById("soA").value;
    var result = "";
    
    for (var i = 0; i <= soABatKi; i++) {
        var dem = 0;
    
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                dem = 1;
                break;
            }
        }
        if (i > 1 && dem == 0) {
            result += i; 
        }
        document.querySelector(".bg-dark").innerHTML +=  result;
    }
}