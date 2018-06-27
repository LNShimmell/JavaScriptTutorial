"option strict"

function create(){
    var product = {
        Id:0,
        Description: document.getElementById("description").value,
        UnitCost: document.getElementById("unitcost").value,
        Stock: document.getElementById("stock").value,
        IsService: document.getElementById("isservice").checked
    }

    var id = document.getElementById("id").value;
    $.post('http://localhost:49342/Products/new', product )
    .done(function(resp){
        console.log(resp)
    });
}