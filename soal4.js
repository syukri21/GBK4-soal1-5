function parseDate(dateString) {
  dateString = dateString.replace(/[-]*/gm, "");
  var year = dateString.substring(0, 4);
  var month = dateString.substring(4, 6);
  var day = dateString.substring(6, 8);

  return new Date(year, month - 1, day);
}
function yyyymmdd(tanggal) {
  var y = tanggal.getFullYear().toString();
  var m = (tanggal.getMonth() + 1).toString();
  var d = tanggal.getDate().toString();
  d.length == 1 && (d = "0" + d);
  m.length == 1 && (m = "0" + m);
  var yyyymmdd = y + "-" + m + "-" + d;
  return yyyymmdd;
}

var beetwenDays = (tanggalAwal, tanggalTujuan) => {
  tanggalAwal = parseDate(tanggalAwal);
  tanggalTujuan = parseDate(tanggalTujuan);

  var hasil = [];
  var counter = 0;

  while (tanggalAwal.getTime() != tanggalTujuan.getTime()) {
    tanggalAwal = new Date(tanggalAwal.setDate(tanggalAwal.getDate() + 1));
    hasil[counter] = yyyymmdd(tanggalAwal);
    counter++;
  }

  return hasil;
};

console.log(beetwenDays("2018-11-03", "2018-11-8"));
