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
    Company: "Motoroala",
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

function add() {
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;

  var table =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th>";
  document.getElementById("res").innerHTML = table;
  data.forEach((element) => {
    if (element.Price >= min && element.Price <= max) {
      table +=
        "<tr><td id='tds'>" +
        element.Company +
        "</td id='tds'><td id='tds'>" +
        element.Model +
        "</td> <td id='tds'>" +
        element.Memory +
        "</td> <td id='tds'>" +
        element.Price +
        "</td> </tr>";
      document.getElementById("res").innerHTML = table;
    }
  });

  table += "</div></table>";
}
function display() {}
