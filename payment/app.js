document.getElementById("homepage").addEventListener("click", paydet);
document.getElementById("choose").addEventListener("click", enter);
document.getElementById("home2").addEventListener("click", home2);
var home_body = document.getElementById("homepage");
var pay_body = document.getElementById("paysec");
var home = document.getElementById("home");
var home2 = document.getElementById("home2");
var choose_class = document.getElementById("choose");
var entr = document.getElementById("entr");


function enter() {
    var reception = document.getElementById("Reception");
    var nursery = document.getElementById("Nursery");
    var grade = document.getElementById("Grade");
    var juniorachiever = document.getElementById("Junior Achievers 1-3");
    var seniorachiever = document.getElementById("Senior Achievers 1-3");
    var junaid = document.getElementById("junaid");
    var choose_class = document.getElementById("choose");

    if(junaid.value == 'Reception') {
        reception.style.display = "block";
        nursery.style.display = "none";
        grade.style.display ="none";
        choose_class.style.display = "none";
        juniorachiever.style.display = "none";
        seniorachiever.style.display = "none";
    }
    else if(junaid.value == 'Nursery'){
        reception.style.display = "none";
        nursery.style.display = "block";
        grade.style.display ="none";
        choose_class.style.display = "none";
        juniorachiever.style.display = "none";
        seniorachiever.style.display = "none";
    }
    else if(junaid.value == 'Grade') {
        reception.style.display = "none";
        nursery.style.display = "none";
        grade.style.display ="block";
        choose_class.style.display = "none";
        juniorachiever.style.display = "none";
        seniorachiever.style.display = "none";
    }
    else if(junaid.value == 'Junior Achievers 1-3') {
        reception.style.display = "none";
        nursery.style.display = "none";
        grade.style.display ="none";
        choose_class.style.display = "none";
        juniorachiever.style.display = "block";
        seniorachiever.style.display = "none";
    }
    else if(junaid.value == 'Senior Achievers 1-3') {
        reception.style.display = "none";
        nursery.style.display = "none";
        grade.style.display ="none";
        choose_class.style.display = "none";
        juniorachiever.style.display = "none";
        seniorachiever.style.display = "block";
    }
   else{
    
   }
   return false;

}

    document.getElementById('backButton').addEventListener('click', function() {
        window.history.ent();
    });
    