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

var data = [
  {
    Company: "Samsung",
    Model: "Galaxy",
    Memory: 64,
    Price: 15000,
  },
  {
    Company: "Nokia",
    Model: "S730",
    Memory: 128,
    Price: 22000,
  },
  {
    Company: "Xiaomi",
    Model: "Note",
    Memory: 32,
    Price: 12000,
  },
  {
    Company: "Motoarala",
    Model: "G10",
    Memory: 32,
    Price: 15000,
  },
  {
    Company: "Apple",
    Model: "S12",
    Memory: 64,
    Price: 25000,
  },
];

function task2() {
  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
  let tdata = document.getElementById("tdata").value;
  let tval = document.getElementById("tval").value;

  tval = tval.toLowerCase();

  value = false;
  data.forEach((e) => {
    if (tdata == "Company") {
      if (e.Company.toLowerCase() == tval) {
        table +=
          "<tr><td>" +
          e.Company +
          "<td>" +
          e.Model +
          "</td><td>" +
          e.Memory +
          "</td><td>" +
          e.Price +
          "</td><td>";
        value = true;
      }
    } else if (tdata == "Model") {
      if (e.Model.toLowerCase() == tval) {
        table +=
          "<tr><td>" +
          e.Company +
          "<td>" +
          e.Model +
          "</td><td>" +
          e.Memory +
          "</td><td>" +
          e.Price +
          "</td><td>";
        value = true;
      }
    }
    if (tdata == "Memory") {
      if (e.Memory == tval) {
        table +=
          "<tr><td>" +
          e.Company +
          "<td>" +
          e.Model +
          "</td><td>" +
          e.Memory +
          "</td><td>" +
          e.Price +
          "</td><td>";
        value = true;
      }
    }
    if (tdata == "Price") {
      if (e.Price == tval) {
        table +=
          "<tr><td>" +
          e.Company +
          "<td>" +
          e.Model +
          "</td><td>" +
          e.Memory +
          "</td><td>" +
          e.Price +
          "</td><td>";
        value = true;
      }
    }
  });
  table += "</table>";
  if (value == false) {
    document.getElementById("output").innerHTML = "Please fill given value";
    return;
  }
  document.getElementById("output").innerHTML = table;
}
