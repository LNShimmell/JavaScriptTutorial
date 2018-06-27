"option strict"
function load(){
    $.getJSON("http://localhost:49342/Employees/List/")
    .done(function (resp){
        console.log(resp.Data)
        display(resp.Data);
    });

    function display(employees){
        var tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        for(var employee of employees){
        var row = "";
        row += "<tr>";
        row+= "<td>" + employee.Id + "</td>";
        row+= "<td>" + employee.FirstName + "</td>";
        row+= "<td>" + employee.LastName + "</td>";
        row+= "<td>" + employee.Phone + "</td>";
        row+= "<td>" + employee.Wage + "</td>";
        row+= "<td>" + employee.Barber + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
        }

    }
}

function get(){
    var Id = document.getElementById("GetId").value;
    $.getJSON("http://localhost:49342/Employees/Find/" + Id)
    .done(function(resp){
        display1(resp.Data);
    });

    function display1(employee){
        var tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        var row = "";
        row += "<tr>";
        row+= "<td>" + employee.Id + "</td>";
        row+= "<td>" + employee.FirstName + "</td>";
        row+= "<td>" + employee.LastName + "</td>";
        row+= "<td>" + employee.Phone + "</td>";
        row+= "<td>" + employee.Wage + "</td>";
        row+= "<td>" + employee.Barber + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
        

    }
}