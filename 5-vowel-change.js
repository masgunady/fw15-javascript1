function ubahHurufKonsonan(teks) {
    let hasil = '';
    if (typeof teks !== 'string') {
        console.log('Input harus berupa string!');
        return;
    }

    for (let i = 0; i < teks.length; i++) {
        if (teks[i] == 'a') {
            hasil += 'o';
        } else {
            hasil += teks[i];
        }
    }

    console.log(hasil);

}
ubahHurufKonsonan('jakarta');