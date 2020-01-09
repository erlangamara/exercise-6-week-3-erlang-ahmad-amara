function angkaPalindrome(angka){
    var hasil = 0;

    //for (j = 1; j <= 10; j++){
    
    var num = angka + 1;
    do{
        var angkaHuruf = `${num}`;
        var hasilBalik = '';
        for (i = angkaHuruf.length - 1; i >= 0; i--){
            hasilBalik += angkaHuruf[i];
        }
        angkaBalik = Number(hasilBalik);
        
        if (num === angkaBalik){
            hasil += num;
            var cek = false;
        } else if(num !== angkaBalik){
            num++;
            cek = true;
        }
    } while (cek)
          
    return hasil
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001