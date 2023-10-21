import express from "express";

const router = express.Router();

router.get('/:biodata/:nama/:tanggal_lahir/:tempat_lahir/:jenis_kelamin/:agama/:alamat/:Telepon/:email/:hobi/:Cita_Cita', (req, res) => {
    var nama = req.params.nama;
    var tanggal_lahir = req.params.tanggal_lahir;
    var tempat_lahir = req.params.tempat_lahir;
    var jenis_kelamin = req.params.jenis_kelamin;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var Telepon = req.params.Telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var Cita_Cita = req.params.Cita_Cita;
    
    
    res.send(
        'Nama          : ' + nama + '<br>' + 
        'Tempat Lahir  : '+ tempat_lahir + '<br>' +
        'Tanggal Lahir : '+ tanggal_lahir + '<br>' +
        'Jenis Kelamin : '+ jenis_kelamin + '<br>' +
        'Agama         : ' + agama + '<br>' +
        'Alamat        : ' + alamat + '<br>' +
        'Telepon       : ' + Telepon + '<br>' +
        'Email         : ' + email + '<br>' +
        'Hobi          : ' + hobi + '<br>' +
        'Cita-Cita     : ' + Cita_Cita)
})

    router.get('/aritmatika',(req, res)=> {
        var bilangan1 = 10;
        var bilangan2 = 5;
        var bilangan3 = 6;
        var bilangan7 = 2;
        var tambah = bilangan1 + bilangan2;
        var kurang = bilangan1 - bilangan2;
        var bagi = bilangan3 / bilangan7;
        var kali = bilangan1 * bilangan2;
        res.send(
            '<h3>penjumlahan</h3>' +
            'bilangan ke 1 =' + bilangan1 +'<br>' +
            'bilangan ke 2 =' + bilangan2 +'<br>' +
            'Hasil : ' + tambah + '<hr>' +
            
            '<h3> Pengurangan <h3/> <br>' +
            'bilangan ke 1 =' + bilangan1 +'<br>' +
            'bilangan ke 2 =' + bilangan2 +'<br>' +
            'Hasil : ' + kurang + '<hr>' +

            '<h3> Pembagian <h3/> <br>' +
            'bilangan ke 1 =' +  bilangan3 +'<br>' +
            'bilangan ke 2 =' + bilangan7 + '<br>' +
            'Hasil :' + bagi + '<br>' +

            '<h3> Perkalian <h3/>' +
            'bilangan ke 1 =' +  bilangan1 +'<br>' +
            'bilangan ke 2 =' + bilangan2 + '<br>' +
            'Hasil :' + kali + '<br>' 


        )
    })
            router.get('/aritmatika2',(req, res)=> {
                var panjang = 10;
                var lebar = 5;
                var tinggi = 15;
                var sisi = 4;
                var alas = 2;
                var jari_jari = 14;
                var segitiga = 0.5;
                var phi = 3.15;
                var hasil4 = phi * jari_jari * jari_jari;
                var hasil3 = segitiga * alas * tinggi;
                var hasil2 = sisi + sisi + sisi +sisi;
                var hasil = panjang * lebar;
            res.send(
                '<h3>Persegi Panjang<h3/>'+
                'panjang :' + panjang + '<br>'+
                'Lebar :' + lebar + '<br>'+
                'Hasilnya :' + hasil + '<br>' +

                '<h3>Persegi<h3/>' +
                'sisi :' + sisi +'<br>' +
                'Hasil :' + hasil2 + '<br>' +

                '<h3>Segitiga<h3/>' +
                'Alas :' + alas + '<br>' +
                'Tinggi :' + tinggi + '<br>' +
                'Hasilnya :' + hasil3 + '<br>'+

                '<h3>Lingkaran<h3/>' +
                'Jari jari :' + jari_jari +'<br>'+
                'Hasilnya :' + hasil4

            )
            })

            router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
              var nama = req.params.nama;
              var kelas = req.params.kelas;
              var pts = parseInt(req.params.pts);
              var pas = parseInt(req.params.pas);
            
              var rapot = (pts + pas) / 2;
            
              const score = rapot;
            
              var response = 'Nama: ' + nama + '<br>' +
                            'Kelas: ' + kelas + '<br>' +
                            'Nilai PTS: ' + pts + '<br>' +
                            'Nilai PAS: ' + pas + '<br>' +
                            'Nilai Raport: ' + rapot + '<br>' +
                            'Keterangan: ';
            
              if (score >= 90 && score <= 100) {
                response += 'Grade A';
              } else if (score >= 80 && score <= 89) {
                response += 'Grade B';
              } else if (score >= 70 && score <= 79) {
                response += 'Grade C';
              } else if (score >= 60 && score <= 69) {
                response += 'Grade D';
              } else if (score >= 50 && score <= 59) {
                response += 'Grade E';
              } else if (score >= 0 && score <= 49) {
                response += 'Sing Rajin';
              } else {
                response += 'Nilai tidak valid';
              }
            
              res.send(response);
            });
            

            router.get('/nilai/:score', (req, res) => {
                const score = parseInt(req.params.score);
              
                if (score >= 90 && score <= 100) {
                  res.send('Grade A');
                } else if (score >= 80 && score <= 89) {
                  res.send('Grade B');
                } else if (score >= 70 && score <= 79) {
                  res.send('Grade C');
                } else if (score >= 60 && score <= 69) {
                  res.send('Grade D');
                } else if (score >= 50 && score <= 59) {
                  res.send('Grade E');
                } else if (score >= 0 && score <= 49) {
                  res.send('Sing Rajin');
                } else {
                  res.send('Nilai tidak valid');
                }
              });

              router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {
                var nama = req.params.nama;
                var jurusan = req.params.jurusan;
                var kelas = req.params.kelas;
              
                if (jurusan == 'RPL') {
                  if (kelas == '10 RPL') {
                    var ket = 'anda kelas 10 RPL';
                  } else if (kelas == '11 RPL') {
                    var ket = 'anda kelas 11 RPL';
                  } else if (kelas == '12 RPL') {
                    var ket = 'anda kelas 12 RPL';
                  } else {
                    var ket = 'anda kuncen asalam';
                  }
                } else if (jurusan == 'TKRO') {
                  if (kelas == '10 TKRO') {
                    var ket = 'anda kelas 10 TKRO';
                  } else if (kelas == '11 TKRO') {
                    var ket = 'anda kelas 11 TKRO';
                  } else if (kelas == '12 TKRO') {
                    var ket = 'anda kelas 12 TKRO';
                  } else {
                    var ket = 'anda kuncen asalam';
                  }
                } else if (jurusan == 'TBSM') {
                  if (kelas == '10 TBSM') {
                    var ket = 'anda kelas 10 TBSM';
                  } else if (kelas == '11 TBSM') {
                    var ket = 'anda kelas 11 TBSM';
                  } else if (kelas == '12 TBSM') {
                    var ket = 'anda kelas 12 TBSM';
                  } else {
                    var ket = 'anda kuncen asalam';
                  }
                } else {
                  var ket = 'jurusan tidak tersedia';
                }
              
                res.send(
                  'Nama: ' + nama + '<br>' +
                  'Jurusan: ' + ket
                );
              });

              router.get('/Shop/:nama/:tanggal/:jenis/:pesanan/:jumlah/',function(req,res){
                var nama = req.params.nama;
                var tanggal = req.params.tanggal;
                var jenis =  req.params.jenis;
                var pesanan =  req.params.pesanan;
                var jumlah =  parseInt(req.params.jumlah)
                //
                  if (jenis == 'makanan') {
                    if (pesanan == 'nasigoreng') {
                       var ket = 20000;
                    } else if (pesanan == 'miegoreng') {
                       var ket = 30000;
                    } else if (pesanan == 'ayamgoreng') {
                       var ket = 40000;
                    } else {
                       var ket = '-';
                    }
                }  else if (jenis == 'minuman') {
                    if (pesanan == 'airmineral') {
                       var ket = 10000;
                    } else if (pesanan == 'jus') {
                       var ket  = 20000;
                    } else if (pesanan == 'kopi') {
                       var ket  = 30000;
                    } else {
                       var ket = '-';
                    }
                }
                var diskon;
                var total = jumlah * ket;
                    if (total > 100000) {
                        diskon = total - (total * 0.5);
                    } else {
                        diskon = 0;
                    }
                    var pembayaran = total - diskon;
                res.send(
                 '<center>' + '>>>>>>>>>>Terima Kasih<<<<<<<<<<' + '<br>' +
                    'Nama Pembeli :'+nama+'<br>'+
                    'Tanggal : '+tanggal+'<br>'+
                    'Jenis :'+jenis+'<br>'+
                    'Pesanan :'+pesanan+'<br>'+
                    'Harga :'+ket+'<br>'+
                    'Jumlah :'+jumlah+'<br><hr>'+
                    'Total :'+total+'<br>'+
                    'diskon 50% :'+diskon+'<br>'+
                    'Total Pembayan :'+pembayaran + '<br>' +
                    '>>>>>>>>>>Terima Kasih<<<<<<<<<<' + '</center>'
                );
                
            });

            router.get('/sample',(req, res)=>{
              res.send(
                '<h3>Selamat Datang<h3/>'
              );
            });

            export default router;