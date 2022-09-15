var data = [
  {
    Company: "Samsung",
    Model: "Galaxy",
    Memory: 64,
    Price: 15000,
    Rating: "",
  },
  {
    Company: "Nokia",
    Model: "S730",
    Memory: 128,
    Price: 22000,
    Rating: "",
  },
  {
    Company: "Xiaomi",
    Model: "Note",
    Memory: 32,
    Price: 12000,
    Rating: "",
  },
  {
    Company: "Motoroala",
    Model: "G10",
    Memory: 32,
    Price: 15000,
    Rating: "",
  },
  {
    Company: "Apple",
    Model: "S12",
    Memory: 64,
    Price: 25000,
    Rating: "",
  },
];

function tbl() {
  let table =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Rating</th>";
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
      element.Rating;
    ("</td></tr>");
    document.getElementById("output").innerHTML = table;
  });

  table += "</div></table>";
}

function add() {
  let tdata = document.getElementById("tdata").value;
  let trate = document.getElementById("trate").value;

  if (tdata == "Samsung") {
    data[0].Rating = trate;
  } else if (tdata == "Nokia") {
    data[1].Rating = trate;
  } else if (tdata == "Xiaomi") {
    data[2].Rating = trate;
  } else if (tdata == "Motoroala") {
    data[3].Rating = trate;
  } else if (tdata == "Apple") {
    data[4].Rating = trate;
  }

  let table =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Rating</th>";
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
      element.Rating;
    ("</td></tr>");
    document.getElementById("res").innerHTML = table;
  });

  table += "</div></table>";
}
