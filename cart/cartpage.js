
let products = JSON.parse(localStorage.getItem("womenSlonArr")) 


let cartTotal = products.reduce(function(sum,elem){
    return sum + Number(elem.price);
},0)
console.log(cartTotal)








    document.getElementById("provalue").innerText = cartTotal;
//window.location.reload();
//console.log(products)


 function append(elem){

    products.forEach(function(elem){
        console.log(elem)
        let btn = document.getElementById("remove").addEventListener("click",sub)
        let btn1 = document.getElementById("add").addEventListener("click",add)
        // let div = document.createElement("div")
        
        let image = document.createElement("img")
        image.src=elem.image;
        console.log(image)

        // let price = document.createElement("p")
        // price.innerText = elem.price;

        // div.append(image,price)

        // document.getElementById("box").append(div)
    
        //document.getElementById("provalue").innerText = "₹"+elem.price;
        //document.getElementById("strikevalue").innerText = "₹"+elem.price;

        function sub(){
           document.getElementById("provalue").innerText = `₹${cartTotal - Number(299)}`;
        //console.log(elem.price)
        }
        function add(){
            document.getElementById("provalue").innerText = `₹${cartTotal - Number(199)}`;
         //console.log(elem.price)
         }
         
        
    })
}
        append()
    
    
// ------------savings value section -------------

document.getElementById("two").addEventListener("click",twofun)
document.getElementById("four").addEventListener("click",fourfun)
document.getElementById("six").addEventListener("click",sixfun)
document.getElementById("eight").addEventListener("click",eightfun)
document.getElementById("ten").addEventListener("click",tenfun)
document.getElementById("twelve").addEventListener("click",twelvefun)


function twofun() {
var value = document.getElementById("savingscost").innerText= "₹"+Number(144*2);
}
function fourfun() {
var value = document.getElementById("savingscost").innerText= "₹"+Number(144*4);
}
function sixfun() {
var value = document.getElementById("savingscost").innerText="₹"+Number(144*6);
}
function eightfun() {
var value = document.getElementById("savingscost").innerText="₹"+Number(144*8);
}
function tenfun() {
var value = document.getElementById("savingscost").innerText="₹"+Number(144*10);
}
function twelvefun() {
var value = document.getElementById("savingscost").innerText="₹"+Number(144*12);
}


// function addimage(){
//     let image = document.getElementById("image").value;
//     let imagearr = JSON.parse(localStorage.getItem("images")) || [];
//     imagearr.push(image);
//     localStorage.setItem("images", JSON.stringify(imagearr));
//     image.value= null;
//    }
//    let id;
//    let i = 0;

//    function slideshow(){
//     let imagearr = JSON.parse(localStorage.getItem("images")) || [];
//     let container = document.getElementById("slideimages")

//     id = setInterval(function(){
//         console.log(i)
//         if(i == imagearr.length){
//             i=0;
//         }
//         let image = document.createElement("img")
//         image.src= imagearr[i];
//         container.innerHTML = null;
//         container.append(image);
//         i++;
//     },1000)
// }
// function pause(){
//         clearInterval(id)
//     }


//console.log(btn)








