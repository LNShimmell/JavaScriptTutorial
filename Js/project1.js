"option strict"
var students = [ {id: 0, Name:"test", SAT: 1000, GPA: 3.5, Year:"FR"}];






var users = [
    { id:1, username:"sa", password:"sa", lastname:"admin", isAdmin:true, active: true },
    { id:2, username:"aa", password:"aa", lastname:"Amos", isAdmin:false, active: true },
    { id:3, username:"bb", password:"bb", lastname:"Badin", isAdmin:true, active: false },
    { id:4, username:"cc", password:"cc", lastname:"Cory", isAdmin:false, active: false },
    { id:5, username:"dd", password:"dd", lastname:"Dugan", isAdmin:true, active: true }
];

function loadfirst(){
    
    var tbody = document.getElementById("Insert")
    for(var idx = 0; idx< users.length; idx++){
    var row = "";
    row+="<tr><td>" + users[idx].id + "</td><td>" + users[idx].username + "</td><td>" + users[idx].lastname + "</td><td>" + users[idx].isAdmin + "</td><td>"+ users[idx].active + "</td></tr>";
    tbody.innerHTML+= row;
    }
}

function loaded(){
    display();
}

function add(){
    var id = document.getElementById("pId").value;
    var Name = document.getElementById("pName").value;
    var GPA = document.getElementById("pGPA").value;
    var SAT = document.getElementById("pSAT").value;
    var Year = document.getElementById("pYear").value;
        var stud = {
            id: id,
            Name: Name,
            GPA: GPA,
            SAT: SAT,
            Year: Year
        }
        students.push(stud);
        display();


}
function edit(){
    
}

function display(){
    var tbody = document.getElementById("tbody");
    tbody.innerHTML= "";
    for(var student of students){
        var row = '';
        row += "<tr>";
        row += "<td>"+ student.id + "</td>";
        row += "<td>" + student.Name + "</td>";
        row += "<td>" + student.GPA + "</td>";
        row += "<td>" + student.SAT + "</td>";
        row += "<td>" + student.Year + "</td>";
        row +="</tr>";
        tbody.innerHTML  += row;
        
    }
}




//document.getElementById("pId").value = student.id;
      //  document.getElementById("pName").value = student.Name;
        //document.getElementById("pGPA").value = student.GPA;
        //document.getElementById("pSAT").value = student.SAT;
        //document.getElementById("pYear").value = student.Year;