var data1 = {
    company: "samsung",
    model: "galaxy",
    memory: 64,
    price: 15000,
    quantity:20,
  };
  var data2 = {
    company: "nokia",
    model: "S730",
    memory: 128,
    price: 22000,
    quantity:20,
  };
  var data3 = {
    company: "xiaomi",
    model: "note",
    memory: 32,
    price: 12000,
    quantity:20,
  };
  var data4 = {
    company: "motoroala",
    model: "g10",
    memory: 32,
    price: 15000,
    quantity:20,
  };
  var data5 = {
    company: "apple",
    model: "s12",
    memory: 64,
    price: 25000,
    quantity:20,
  };

  var arr=[data1,data2,data3,data4,data5];

  var a=[];
 
 

  function add() {
    let tdata = document.getElementById("tdata").value;
    let quan = document.getElementById("quan").value;
  
    if (tdata === "samsung") {
      var list = {
        company: arr[0].company,
        model:arr[0].model,
        memory:arr[0].memory,
        price:arr[0].price,
        quantity:quan,
      };
      a.push(list);
  
      console.log(arr[0].Name);
    } else if (tdata === "nokia") {
      var list = {
        company: arr[1].company,
        model:arr[1].model,
        memory:arr[1].memory,
        price:arr[1].price,
        quantity:quan,
      };
      a.push(list);
      console.log(arr);
    } else if (tdata === "xiaomi") {
      var list = {
        company: arr[2].company,
        model:arr[2].model,
        memory:arr[2].memory,
        price:arr[2].price,
        quantity:quan,
      };
      a.push(list);
      console.log(arr);
    } else if (tdata === "motoroala") {
      var list = {
        company: arr[3].company,
        model:arr[3].model,
        memory:arr[3].memory,
        price:arr[3].price,
        quantity:quan,
      };
      a.push(list);
      console.log(arr);
    } else if (tdata === "apple") {
      var list = {
        company: arr[4].company,
        model:arr[4].model,
        memory:arr[4].memory,
        price:arr[4].price,
        quantity:quan,
      };
      a.push(list);
      console.log(arr);
    }

    let table =
      "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Quantity</th>";
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
        "</td> <td id='tds'> " +
        element.quantity;
      ("</td></tr>");
      document.getElementById("res").innerHTML = table;
    });
  
    table += "</div></table>";
  }

 