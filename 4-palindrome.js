// Program untuk mengecek kata palindrome
// Menggunakan metode perbandingan string asli dengan reverse string
function palindrom(teks) {
    if (teks.length <= 2) {
        console.log('Teks harus lebih dari 2 huruf !');
        return;
    }

    let hasil = '';
    for (var i = teks.length - 1; i >= 0; i--) {
        hasil += teks[i];
    }

    if (hasil === teks) {
        console.log('Palindrome');
    } else {
        console.log('Bukan Palindrome');
    }
}

palindrom('kakak');



console.log('----------------');

// Program untuk mengecek kata palindrome
// Menggunakan metode perbandingan index awal dan indeks akhir
function palindrome(teks) {
    if (teks.length <= 2) {
        console.log('Teks harus lebih dari 2 huruf !');
        return;
    }
    for (var i = 0; i < teks.length / 2; i++) {
        var indexAwal = teks[i];
        var indexAkhir = teks[teks.length - 1 - i];
        if (indexAwal !== indexAkhir) {
            console.log('Bukan Palindrome');
            return;
        }
    }
    console.log('Palindrome');

}

palindrome('kakak');