var data = [
  {
    Name: "Samsung Galaxy",
    Price: 15000,
  },
  {
    Name: "Nokia S730",
    Price: 22000,
  },
  {
    Name: "Xiaomi Note",
    Price: 12000,
  },
  {
    Name: "Motoroala G10",
    Price: 15000,
  },
  {
    Name: "Apple",
    Price: 25000,
  },
];

var arr = [];

function add() {
  let desc = document.getElementById("item").value;
  let quan = document.getElementById("quan").value;

  if (desc === "samsung") {
    var list = {
      Name: desc,
      Quantity: quan,
      Price: data[0].Price,
    };
    arr.push(list);

    console.log(arr[0].Name);
  } else if (desc === "nokia") {
    var list = {
      Name: desc,
      Quantity: quan,
      Price: data[1].Price,
    };
    arr.push(list);
    console.log(arr);
  } else if (desc === "xiaomi") {
    var list = {
      Name: desc,
      Quantity: quan,
      Price: data[2].Price,
    };
    arr.push(list);
    console.log(arr);
  } else if (desc === "motoroala") {
    var list = {
      Name: desc,
      Quantity: quan,
      Price: data[3].Price,
    };
    arr.push(list);
    console.log(arr);
  } else if (desc === "apple") {
    var list = {
      Name: desc,
      Quantity: quan,
      Price: data[4].Price,
    };
    arr.push(list);
    console.log(arr);
  }
}

function bill() {
  let comp = document.getElementById("item").value;
  let quan = document.getElementById("quan").value;
  var total = 0;
  var table = "<h3>Bill</h3>";
  table +=
    "<table border=1><tr><th>Description</th><th>Quantity</th><th>Price</th></tr>";
  for (let i = 0; i < arr.length; i++) {
    if (comp === "samsung") {
      total += 15000 * arr[i].Quantity;
      table +=
        "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].Quantity +
        "</td><td>15000</td></tr>";

      console.log(total + " 1");
    } else if (comp === "motoroala") {
      total += 15000 * arr[i].Quantity;
      table +=
        "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].Quantity +
        "</td><td>15000</td></tr>";
      console.log(total + " 2");
    } else if (comp === "nokia") {
      total += 22000 * arr[i].Quantity;
      table +=
        "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].Quantity +
        "</td><td>22000</td></tr>";
      console.log(total + " 2");
    } else if (comp === "xiaomi") {
      total += 12000 * arr[i].Quantity;
      table +=
        "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].Quantity +
        "</td><td>12000</td></tr>";
    } else if (comp === "apple") {
      total += 25000 * arr[i].Quantity;
      table +=
        "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].Quantity +
        "</td><td>25000</td></tr>";
    }
  }
  table += "<tr><th>Total</th><th>"+total+"</th><tr></table>";
  document.getElementById("output").innerHTML = table;
}
