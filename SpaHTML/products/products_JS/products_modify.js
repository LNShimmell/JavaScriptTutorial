"option strict"

function modify(){
    var product = {
        Id: document.getElementById("id").value,
        Description: document.getElementById("description").value,
        UnitCost: document.getElementById("unitcost").value,
        Stock: document.getElementById("stock").value,
        IsService: document.getElementById("isservice").checked
    }

    var id = document.getElementById("id").value;
    $.post('http://localhost:49342/Products/modify', product )
    .done(function(resp){
        console.log(resp)
    });
}


function find(){
    var Id = document.getElementById("getid").value;
    $.getJSON("http://localhost:49342/Products/Find/" + Id)
    .done(function (resp){
        console.log(resp.Data)
        display(resp.Data);
    });
}

function display(product){
    console.log("Called display()",product);
    var productid = document.getElementById("id");
    var productDesc = document.getElementById("description");
    var productcost = document.getElementById("unitcost");
    var productstock = document.getElementById("stock");
    var productservice = document.getElementById("isservice");
    productid.value = product.Id;
    productDesc.value = product.Description;
    productcost.value = product.UnitCost;
    productstock.value = product.Stock;
    productservice.value = product.IsService;

    
}

function Delete(product){
    var Id = document.getElementById("id").value;
    $.getJSON("http://localhost:49342/Products/Delete/" + Id)
    .done(function (resp){
        console.log(resp.Data)
        
    });
}