var data = [
    
    {
   title:"Roll-on special (full arms + full lgs + underarms )",
   rating: "4.81/5(2.8k)",
    price: 849,
   desc: "we use RICA peet-off for underarms waxing",
   image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100975526-deeb14.png"
},

{
    title:"Full arms + underarms ",
    rating: "4.70/5(30k)",
    price: 309,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100969960-ef6f74.png"
 },

 {
    title:"Full legs ",
    rating: "4.78/5(23.8k)",
    price: 349,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100965594-2ddc55.png"
 },
 
 {
    title:"Full body",
    rating: "4.81/5(4.8k)",
    price: 1399,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100967218-f08380.png"
 },
 
 {
    title:"Stomach",
    rating: "4.71/5(3.8k)",
    price: 299,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100955968-c5b3f1.png"
 },
 
 {
    title:"Back",
    rating: "4.71/5(3.8k)",
    price: 449,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100988948-0b5dcc.png"
 },
 
 {
    title:"Underarms",
    rating: "4.41/5(3.9k)",
    price: 449,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655288839372-c90f8e.png"
 },
 
 {
    title:"Bikini",
    rating: "4.81/5(6.8k)",
    price: 949,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100982244-701c4a.png"
 },
 
 {
    title:"Bikini line",
    rating: "4.91/5(30.8k)",
    price: 249,
    desc: "we use RICA peet-off for underarms waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655288871618-0d6809.png"
 },

]
var slonArr = []
let section_1 = document.getElementById("section1")
displayData(data)

function displayData(data){
  data.forEach(function(el){
    let div2 = document.createElement("div")
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.image;
  
    let h2 = document.createElement("h2")
    h2.innerText = el.title
   // console.log(h1)

   let h4= document.createElement("h4")
   h4.innerText = `Price(INR) : ${el.price}`

let h3 = document.createElement("h3")
h3.innerText =`Rating : ${el.rating}`;

let p = document.createElement("p")
p.innerText = el.desc

let btn1 = document.createElement("button")
btn1.innerText = "View Details"
btn1.addEventListener("click",function(){
    addFun()
})

btn2 = document.createElement("button")
btn2.innerText = "add"
btn2.addEventListener("click",function(){
    addEle(el) 
})
div2.append(h2,h4,p,h3,btn1,btn2)
   div.append(div2,img)
   section_1.append(div)

  })
}

let addFun = ()=>{
    window.location.href = "./details.html"
}
let addEle = (el)=>{
   // console.log(el)
    slonArr.push(el)
    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}