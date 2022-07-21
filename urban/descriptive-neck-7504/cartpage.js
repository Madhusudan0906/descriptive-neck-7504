
// let items = JSON.parse(localStorage.getItem("items")) || [];
    

//     function append(){
//         items.forEach(function(elem){
//             let div = document.createElement("div")
            
//             let image = document.createElement("img")
//             image.src=elem.image;

//             let price = document.createElement("p")
//             price.innerText = elem.price;

//             div.append(image,price)

//             document.getElementById("box").append(div)
//         })
//         console.log(items)
//     }
   
//     append()

import append from "./components.js"

document.getElementById("box").innerHTML = append;


document.getElementById("two").addEventListener("click",twofun)
document.getElementById("four").addEventListener("click",fourfun)
document.getElementById("six").addEventListener("click",sixfun)
document.getElementById("eight").addEventListener("click",eightfun)
document.getElementById("ten").addEventListener("click",tenfun)
document.getElementById("twelve").addEventListener("click",twelvefun)


function twofun() {
    var value = document.getElementById("savingscost").innerText=Number(144*2);
}
function fourfun() {
    var value = document.getElementById("savingscost").innerText=Number(144*4);
}
function sixfun() {
    var value = document.getElementById("savingscost").innerText=Number(144*6);
}
function eightfun() {
    var value = document.getElementById("savingscost").innerText=Number(144*8);
}
function tenfun() {
    var value = document.getElementById("savingscost").innerText=Number(144*10);
}
function twelvefun() {
    var value = document.getElementById("savingscost").innerText=Number(144*12);
}



