// function remove
function remove1(){
    return document.getElementsByClassName("item")[0].style.display = "none";
}
function remove2(){
    return document.getElementsByClassName("item")[1].style.display = "none";
}
function remove3(){
    return document.getElementsByClassName("item")[2].style.display = "none";
}

// function like

function like1(){
    return document.getElementsByClassName("fas fa-heart")[0].style.color = "red";
}
function like2(){
    return document.getElementsByClassName("fas fa-heart")[1].style.color = "red";
}
function like3(){
    return document.getElementsByClassName("fas fa-heart")[2].style.color = "red";
}

// increment
var qte = 0; var result = 0; 
document.getElementsByClassName("btn")[0].addEventListener("click" , ()=>{
    qte++ ;
    result += 250 ;
    document.getElementsByClassName("number")[0].innerHTML = qte ;
    document.getElementsByClassName("res")[0].innerHTML = result ;
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML + 250 ;
});
// decrement
document.getElementsByClassName("btn")[1].addEventListener("click" , ()=>{
    document.getElementsByClassName("number")[0].innerHTML == 0 ?(
    document.getElementsByClassName("number")[0].innerHTML = document.getElementsByClassName("number")[0].innerHTML ,
    document.getElementsByClassName("res")[0].innerHTML = document.getElementsByClassName("res")[0].innerHTML 
    )  : (
    qte-- ,
    result -= 250 ,
    document.getElementsByClassName("number")[0].innerHTML = qte ,
    document.getElementsByClassName("res")[0].innerHTML = result,
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML - 250 );
}); 

// increment2
var qte1 = 0; var result1 = 0;
document.getElementsByClassName("btn")[2].addEventListener("click" , ()=>{
    qte1++ ;
    result1 += 250 ;
    document.getElementsByClassName("number")[1].innerHTML = qte1 ;
    document.getElementsByClassName("res")[1].innerHTML = result1 ;
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML + 250 ;
});

// decrement2
document.getElementsByClassName("btn")[3].addEventListener("click" , ()=>{
    document.getElementsByClassName("number")[1].innerHTML == 0 ?(
    document.getElementsByClassName("number")[1].innerHTML = document.getElementsByClassName("number")[1].innerHTML ,
    document.getElementsByClassName("res")[1].innerHTML = document.getElementsByClassName("res")[1].innerHTML 
    )  : (
    qte1-- ,
    result1 -= 250 ,
    document.getElementsByClassName("number")[1].innerHTML = qte1 ,
    document.getElementsByClassName("res")[1].innerHTML = result1 ,
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML - 250 );
}); 

// increment3

var qte2 = 0; var result2 = 0;
document.getElementsByClassName("btn")[4].addEventListener("click" , ()=>{
    qte2++ ;
    result2 += 250 ;
    document.getElementsByClassName("number")[2].innerHTML = qte2 ;
    document.getElementsByClassName("res")[2].innerHTML = result2 ;
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML + 250 ;
});

// decrement3
document.getElementsByClassName("btn")[5].addEventListener("click" , ()=>{
    document.getElementsByClassName("number")[2].innerHTML == 0 ?(
    document.getElementsByClassName("number")[2].innerHTML = document.getElementsByClassName("number")[2].innerHTML ,
    document.getElementsByClassName("res")[2].innerHTML = document.getElementsByClassName("res")[2].innerHTML 
    )  : (
    qte2-- ,
    result2 -= 250 ,
    document.getElementsByClassName("number")[2].innerHTML = qte2 ,
    document.getElementsByClassName("res")[2].innerHTML = result2 ,
    document.getElementById("total").innerHTML =+ document.getElementById("total").innerHTML - 250) ;
}); 

