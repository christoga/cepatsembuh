// Not available faskes
$('#not-available').on('click', function() {
	alert("Faskes is not available")
})

// Select faskes function
function selectFaskes(username) {
  window.location.href = 'faskes/' + username + '.html'
}

// Doctor profile using SweetAlert
function doctorProfile(nama, gambar, lulusan, tahun) {
  swal({
    title: "dr. " + nama,
    imageUrl: gambar,
    text: "Lulusan: " + lulusan + "<br>" + "Tahun: " + tahun,
    html: true
  })
  // Log input value for testing
  console.log('Nama: ' + nama);
  console.log('Gambar: ' + gambar);
  console.log('Lulusan: ' + lulusan);
  console.log('Tahun: ' + tahun);
}

function getNoAntri(tipe, username) {
  var ref = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/antrian');
  console.log('Url : ' + "https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/antrian');
  ref.on("value", function(snapshot) {
    swal({
      title: "Selamat!",
      text: "Nomor antrian: " + snapshot.val(),
      type: "success",
      confirmButtonText: "OK"
    });
  });
}
