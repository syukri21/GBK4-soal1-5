function replace(string, dari, ke) {
  var hasil = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == dari) {
      hasil += ke;
    } else {
      hasil += string[i];
    }
  }

  return hasil;
}

// contoh pemakaian
console.log(replace("matahari", "i", "j"));
