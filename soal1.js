var produk = function() {
  var itemID = "12341822";
  var itemName = "FGX Flannel Shirt";
  var price = 195000;
  var availableColorAndSize = [
    {
      color: "blue-black",
      size: ["M", "L", "S"]
    },
    {
      color: "black-white",
      size: "L"
    }
  ];
  var freeShiping = false;

  // masukkan dalam satu variable
  var data = {
    itemID: itemID,
    itemName: itemName,
    price: price,
    availableColorAndSize: availableColorAndSize,
    freeShiping: freeShiping
  };

  return JSON.stringify(data);
};

// Lihat di console.log

console.log(produk());
