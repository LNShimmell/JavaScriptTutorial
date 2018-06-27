"option strict"
function get(){
    var Id = document.getElementById("id").value;
    $.getJSON("http://localhost:49342/Employees/Find/" + Id)
    .done(function (resp){
        console.log(resp.Data)
        display(resp.Data);
    });

    function display(employee){
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