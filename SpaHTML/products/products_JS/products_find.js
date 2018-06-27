function get(){
    var Id = document.getElementById("id").value;
    $.getJSON("http://localhost:49342/Products/Find/" + Id)
    .done(function (resp){
        console.log(resp.Data)
        display(resp.Data);
    });
}


function display(product){
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
        var row = "";
        row += "<tr>";
        row+= "<td>" + product.Id + "</td>";
        row+= "<td>" + product.Description + "</td>";
        row+= "<td>" + product.UnitCost + "</td>";
        row+= "<td>" + product.Stock + "</td>";
        row+= "<td>" + product.IsService + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }


