

var hername = document.querySelector(".hername");
var hisname = document.querySelector(".hisname");
var check = document.getElementById("myform");

check.addEventListener("submit",lovescore)



function lovescore(e) {
    e.preventDefault();
    if (hername.value === '' || hisname.value === '') {
        alert("Please Enter  her name and his name Eg: her name : Lisa , his name : Karim")
    }
    else {
    var number = Math.random();
    number = number * 100
    number = Math.floor(number) + 1;
    if (number<60) {
        var answer = "Sorry your Love score is  " + number + "% 😢💔"
    } else {
        var answer = "Your score is " + number + "% 😍❤️"
    }
    var element = document.getElementById("new")
    element.classList.add("results")
    element.innerHTML = answer
    hername.value = '';
    hisname.value = '';
    
    }

    
    
}