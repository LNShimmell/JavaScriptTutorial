"option strict"

var technologies = [
    {Id:0, Name: "test", Difficulty: "E"}
];

function load(){
    display();
}

function add(){
    var tech = {
        Id:document.getElementById("pId").value,
        Name : document.getElementById("pName").value,
        Difficulty: document.getElementById("pDifficulty").value
    }
    technologies.push(tech);
    display();

}
function edit(){
    var tech = {
        Id:document.getElementById("pId").value,
        Name : document.getElementById("pName").value,
        Difficulty: document.getElementById("pDifficulty").value
    }

}

function display(){
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(var technology of technologies){
        var row = "";
        row += "<tr>";
        row += "<td>" + technology.Id + "</td>";
        row += "<td>" + technology.Name + "</td>";
        row += "<td>" + technology.Difficulty + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }

}

}

