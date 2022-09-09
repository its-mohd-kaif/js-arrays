// ****************************Make Table with the help of 2D Array******************************
var arr = [
  ["Samsung", "Galaxy", 64, 15000],
  ["Nokia", "S730", 128, 22000],
  ["Xiaomi", "Note", 32, 12000],
  ["Motoroala", "G10", 32, 15000],
  ["Apple", "S12", 64, 25000],
];
document.write("<h2>Task 1</h2>");
document.write("<table border = 1px> ");
document.write("<thead> <tr>");
document.write(
  "<th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th>"
);
for (var a = 0; a < arr.length; a++) {
  document.write("<tr>");
  for (var b = 0; b < arr[a].length; b++) {
    document.write("<td>" + arr[a][b] + "</td>");
  }
  document.write("</tr>");
}
document.write("</tr> </thead>");
document.write("</table>");


// ***Task (2) Add a dropdown and a textbox with search button ***

function task2() {
  var samsung = {
    company: "samsung",
    model: "galaxy",
    memory: 64,
    price: 15000,
  };
  var nokia = {
    company: "nokia",
    model: "S730",
    memory: 128,
    price: 22000,
  };
  var xiaomi = {
    company: "xiaomi",
    model: "note",
    memory: 32,
    price: 12000,
  };
  var motoroala = {
    company: "motoroala",
    model: "g10",
    memory: 32,
    price: 15000,
  };
  var apple = {
    company: "apple",
    model: "s12",
    memory: 64,
    price: 25000,
  };

  var get = document.getElementById("txtValue").value;
  get = get.toLowerCase();

  var check;
  if (get == "apple" || get == "s12") {
    check =
      "Company\b" +
      apple.company +
      "<br>Model\b\b" +
      apple.model +
      "<br>Memory\b\b" +
      apple.memory +
      "<br>Price\b\b" +
      apple.price;
  } else if (get == "samsung" || get == "galaxy") {
    check =
      "Company\b" +
      samsung.company +
      "<br>Model\b\b" +
      samsung.model +
      "<br>Memory\b\b" +
      samsung.memory +
      "<br>Price\b\b" +
      samsung.price;
  } else if (get == "nokia" || get == "s730") {
    check =
      "Company\b" +
      nokia.company +
      "<br>Model\b\b" +
      nokia.model +
      "<br>Memory\b\b" +
      nokia.memory +
      "<br>Price\b\b" +
      nokia.price;
  } else if (get == "xiaomi" || get == "note") {
    check =
      "Company\b" +
      xiaomi.company +
      "<br>Model\b\b" +
      xiaomi.model +
      "<br>Memory\b\b" +
      xiaomi.memory +
      "<br>Price\b\b" +
      xiaomi.price;
  } else if (get == "motoroala" || get == "g10") {
    check =
      "Company\b" +
      motoroala.company +
      "<br>Model\b\b" +
      motoroala.model +
      "<br>Memory\b\b" +
      motoroala.memory +
      "<br>Price\b\b" +
      motoroala.price;
  } else {
    document.write("Please fill given data");
  }

  document.getElementById("output").innerHTML = check;
}
