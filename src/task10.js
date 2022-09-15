var data1 = {
  company: "samsung",
  model: "galaxy",
  memory: 64,
  price: 15000,
};
var data2 = {
  company: "nokia",
  model: "S730",
  memory: 128,
  price: 22000,
};
var data3 = {
  company: "xiaomi",
  model: "note",
  memory: 32,
  price: 12000,
};
var data4 = {
  company: "motoroala",
  model: "g10",
  memory: 32,
  price: 15000,
};
var data5 = {
  company: "apple",
  model: "s12",
  memory: 64,
  price: 25000,
};

var arr = [data1, data2, data3, data4, data5];

var a = [];

function add() {
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;
  
  if (data1.price >= min && data1.price <= max) {
    a.push(data1);
  }
  if (data2.price >= min && data2.price <= max) {
    a.push(data2);
  }
  if (data3.price >= min && data3.price <= max) {
    a.push(data3);
  }
  if (data4.price >= min && data4.price <= max) {
    a.push(data4);
  }
  if (data5.price >= min && data5.price <= max) {
    a.push(data5);
  }

  var table =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th>";
  document.getElementById("res").innerHTML = table;
  a.forEach((element) => {
    table +=
      "<tr><td id='tds'>" +
      element.company +
      "</td id='tds'><td id='tds'>" +
      element.model +
      "</td> <td id='tds'>" +
      element.memory +
      "</td> <td id='tds'>" +
      element.price +
      "</td> </tr>";
    document.getElementById("res").innerHTML = table;
  });

  table += "</div></table>";
}
