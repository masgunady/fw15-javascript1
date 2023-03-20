const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69.3;

let nilaiUN = [mtk, bahasaIndonesia, bahasaInggris, ipa];

let total = 0;
for (let i = 0; i < nilaiUN.length; i++) {
    if (nilaiUN[i] === '') {
        console.log("Nilai Harus diisi")
        return;
    } else {

        total += parseFloat(nilaiUN[i]);
        var hasil = total / nilaiUN.length;
    }
}
nilaiForGrading = hasil;
if (nilaiForGrading <= 59) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade E`)
} else if (nilaiForGrading >= 60 && nilaiForGrading <= 69) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade D`)
} else if (nilaiForGrading >= 70 && nilaiForGrading <= 79) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade C`)
} else if (nilaiForGrading >= 80 && nilaiForGrading <= 89) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade B`)
} else if (nilaiForGrading >= 90 && nilaiForGrading <= 100) {
    console.log(`Rata-rata = ${nilaiForGrading}`);
    console.log(`Grade A`)
} else {
    console.log("Format invalid");
}