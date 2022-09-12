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
    Company: "Motorala",
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

function fun() {
  var v1 = document.getElementById("tsort").value;
  var v2 = document.getElementById("tdata").value;
  if (v1 === "ascending" && v2 === "company") {
    data.sort((a, b) =>
      a.Company > b.Company ? 1 : b.Company > a.Company ? -1 : 0
    );

   
  } else if (v1 === "descending" && v2 === "company") {
    data.sort((a, b) =>
      a.Company < b.Company ? 1 : b.Company < a.Company ? -1 : 0
    );
   
  } else if (v1 === "ascending" && v2 === "model") {
    data.sort((a, b) => (a.Model > b.Model ? 1 : b.Model > a.Model ? -1 : 0));
   
  } else if (v1 === "descending" && v2 === "model") {
    data.sort((a, b) => (a.Model < b.Model ? 1 : b.Model < a.Model ? -1 : 0));
    
  } else if (v1 === "ascending" && v2 === "memory") {
    data.sort(function (a, b) {
      return a.Memory - b.Memory;
    });
   
  } else if (v1 === "descending" && v2 === "memory") {
    data.sort(function (a, b) {
      return b.Memory - a.Memory;
    });
 
  } else if (v1 === "ascending" && v2 === "price") {
    data.sort(function (a, b) {
      return a.Price - b.Price;
    });
   
  } else if (v1 === "descending" && v2 === "price") {
    data.sort(function (a, b) {
      return b.Price - a.Price;
    });

  }

  let table =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
  data.forEach((val) => {
    table +=
      "<tr><td>" +
      val.Company +
      "<td>" +
      val.Model +
      "</td><td>" +
      val.Memory +
      "</td><td>" +
      val.Price +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}