function piramidaTerbalik(tinggi) {
  var counter = 0;
  var tmp = "";
  for (var i = 1; i <= tinggi; i++) {
    if (i != 1) {
      for (var x = 1; x <= tinggi * 2; x++) {
        if (i > counter || i > tinggi * 2 - counter) {
          tmp += " ";
        } else if (i == counter || i == tinggi * 2 - counter) {
          tmp += "*";
        } else {
          tmp += " ";
        }
        counter++;
      }
    } else {
      for (let i = 0; i < tinggi * 2; i++) {
        if (i != 0) {
          tmp += "*";
        } else {
          tmp += " ";
        }
      }
    }

    counter = 0;
    tmp += "\n";
  }
  return tmp;
}

var pre = document.getElementById("pre");

// Cara pemakaian

pre.innerHTML = piramidaTerbalik(8);
