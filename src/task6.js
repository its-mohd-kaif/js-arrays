var data1 = {
  company: "samsung",
  model: "galaxy",
  memory: 64,
  price: 15000,
  pos: "<input type='checkbox' id='d1'  value='box'> ",
};
var data2 = {
  company: "nokia",
  model: "S730",
  memory: 128,
  price: 22000,
  pos: "<input type='checkbox' id='d2'  value='box'> ",
};
var data3 = {
  company: "xiaomi",
  model: "note",
  memory: 32,
  price: 12000,
  pos: "<input type='checkbox' id='d3'  value='box'> ",
};
var data4 = {
  company: "motoroala",
  model: "g10",
  memory: 32,
  price: 15000,
  pos: "<input type='checkbox' id='d4'  value='box'> ",
};
var data5 = {
  company: "apple",
  model: "s12",
  memory: 64,
  price: 25000,
  pos: "<input type='checkbox' id='d5'  value='box'> ",
};

var arr = [data1, data2, data3, data4, data5];
function tbl() {
  var table =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Action</th>";
  document.getElementById("res").innerHTML = table;
  arr.forEach((element) => {
    table +=
      "<tr><td id='tds'>" +
      element.company +
      "</td id='tds'><td id='tds'>" +
      element.model +
      "</td> <td id='tds'>" +
      element.memory +
      "</td> <td id='tds'>" +
      element.price +
      "</td> <td id='tds'> " +
      element.pos;
    ("</td></tr>");
    document.getElementById("res").innerHTML = table;
  });

  table += "</div></table>";
}

function show() {
  var ch1 = document.getElementById("d1").checked;
  var ch2 = document.getElementById("d2").checked;
  var ch3 = document.getElementById("d3").checked;
  var ch4 = document.getElementById("d4").checked;
  var ch5 = document.getElementById("d5").checked;

  console.log(ch1);
  if (ch1 == true) {
    delete arr[0];
  }
  if (ch2 == true) {
    delete arr[1];
  }
  if (ch3 == true) {
    delete arr[2];
  }
  if (ch4 == true) {
    delete arr[3];
  }
  if (ch5 == true) {
    delete arr[4];
  }

  let table =
    "<table border=1px><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
  arr.forEach((val) => {
    table +=
      "<tr><td>" +
      val.company +
      "<td>" +
      val.model +
      "</td><td>" +
      val.memory +
      "</td><td>" +
      val.price +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

