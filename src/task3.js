function sorting() {
    var data =[

     {
        company: "samsung",
        model: "galaxy",
        memory: 64,
        price: 15000,
      },
       {
        company: "nokia",
        model: "S730",
        memory: 128,
        price: 22000,
      },
        {
        company: "xiaomi",
        model: "note",
        memory: 32,
        price: 12000,
      },
       {
        company: "motoroala",
        model: "g10",
        memory: 32,
        price: 15000,
      },
      {
        company: "apple",
        model: "s12",
        memory: 64,
        price: 25000,
      },
    ];

    // console.log(data.price);
    // var pri=data.price;

    var tsort=document.getElementById("sort").value;
    var tdata=document.getElementById("sort-by").value;
    // if(tsort=="Asceding"){
    //     console.log(pri.sort(function(a, b){return a - b}));
    // }

    console.log(tsort);

    if(tsort=="Ascending" && tdata=="Memory"){
        data.sort(function(a, b){return a.memory - b.memory}
        );
    }else if(tsort=="Descending" && tdata=="Memory"){
        data.sort(function(a, b){return b.memory - a.memory}
        );
    }
    else if(tsort=="Ascending" && tdata=="Price"){
        data.sort(function(a, b){return a.price - b.price}
        );
    }
    else if(tsort=="Descending" && tdata=="Price"){
        data.sort(function(a, b){return b.price - a.price}
        );
    }
    else if(tsort=="Ascending" && tdata=="Model"){
        data.sort(function(a, b){return a.model - b.model}
        );
    }
   


 
       
    

    document.getElementById("output").innerHTML=JSON.stringify(data);
}