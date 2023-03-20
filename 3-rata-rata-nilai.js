const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let nilaiUN = [mtk, bahasaIndonesia, bahasaInggris, ipa];

let total = 0;
for (let i = 0; i < nilaiUN.length; i++) {
    if (nilaiUN[i] === '') {
        return console.log("Format invalid! \nSilahkan lengkapi semua inputan nilai UN");

    } else if (nilaiUN[i] > 100) {
        return console.log("Format invalid! \nSilahkan lengkapi semua inputan nilai UN dengan range 0 - 100");
    } else {
        total += parseFloat(nilaiUN[i]);
        var hasil = total / nilaiUN.length;
    }
}
nilaiForGrading = hasil;
if (nilaiForGrading > 100) {
    console.log("Format invalid! \nSilahkan lengkapi semua inputan nilai UN dengan range 0 - 100");
} else if (nilaiForGrading >= 90) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade A`)
} else if (nilaiForGrading >= 80) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade B`)
} else if (nilaiForGrading >= 70) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade C`)
} else if (nilaiForGrading >= 60) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade D`)
} else {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade E`)
}