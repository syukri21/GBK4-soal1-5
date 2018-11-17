var verify = password => {
  var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/g;

  return password.match(regex) ? true : false;
};

// cara pengecekan

console.log(verify("12wsd"));
