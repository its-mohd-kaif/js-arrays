var data = [
  {
    Company: "Samsung",
    Model: "Galaxy",
    Memory: 64,
    Price: 15000,
    Quantity: 40,
  },
  {
    Company: "Nokia",
    Model: "S730",
    Memory: 128,
    Price: 22000,
    Quantity: 40,
  },
  {
    Company: "Xiaomi",
    Model: "Note",
    Memory: 32,
    Price: 12000,
    Quantity: 40,
  },
  {
    Company: "Motoroala",
    Model: "G10",
    Memory: 32,
    Price: 15000,
    Quantity: 40,
  },
  {
    Company: "Apple",
    Model: "S12",
    Memory: 64,
    Price: 25000,
    Quantity: 40,
  },
];

function tbl() {
  let table =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Quantity</th>";
  document.getElementById("output").innerHTML = table;
  data.forEach((element) => {
    table +=
      "<tr><td id='tds'>" +
      element.Company +
      "</td id='tds'><td id='tds'>" +
      element.Model +
      "</td> <td id='tds'>" +
      element.Memory +
      "</td> <td id='tds'>" +
      element.Price +
      "</td> <td id='tds'> " +
      element.Quantity;
    ("</td></tr>");
    document.getElementById("output").innerHTML = table;
  });

  table += "</div></table>";
}

function add() {
  let tdata = document.getElementById("tdata").value;
  let quan = document.getElementById("quan").value;

  

  if (tdata == "Samsung") {
    data[0].Quantity = quan;
  } else if (tdata == "Nokia") {
    data[1].Quantity = quan;
  } else if (tdata == "Xiaomi") {
    data[2].Quantity = quan;
  } else if (tdata == "Motoroala") {
    data[3].Quantity = quan;
  } else if (tdata == "Apple") {
    data[4].Quantity = quan;
  }

  let table =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Quantity</th>";
  document.getElementById("res").innerHTML = table;
  data.forEach((element) => {
    table +=
      "<tr><td id='tds'>" +
      element.Company +
      "</td id='tds'><td id='tds'>" +
      element.Model +
      "</td> <td id='tds'>" +
      element.Memory +
      "</td> <td id='tds'>" +
      element.Price +
      "</td> <td id='tds'> " +
      element.Quantity;
    ("</td></tr>");
    document.getElementById("res").innerHTML = table;
  });

  table += "</div></table>";
}
