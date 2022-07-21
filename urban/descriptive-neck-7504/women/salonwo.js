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
    let div3 = document.createElement("div")
    div3.setAttribute("class","class2")

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
div2.append(h2,h4,h3,div3,p,btn1,btn2)
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


// second


var data1 = [
   {
      title:"Cleanup",
      rating: "4.79/5(49.8k)",
       price: 699,
      desc: "6 step process , including 20-min massage",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634212386258-a7bdfd.png"
   },
   
   {
       title:"Classical Facial",
       rating: "4.80/5(20k)",
       price: 1099,
       desc: "6 step process , including 20-min massage",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634707058605-fd6260.png"
    },
   
    {
       title:"Signature Facial ",
       rating: "4.76/5(43.8k)",
       price: 349,
       desc: "6 step process , including 20-min massage",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634714666502-19511c.png"
    },
    
    {
       title:"speciallised facial",
       rating: "4.89/5(13.8k)",
       price: 1399,
       desc: "6 step process , including 20-min massage",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634707052569-4bc6a6.png"
    },
    

]

var facialArr = []
var section_2 = document.getElementById("section2")
fdisplayData(data1)

function fdisplayData(data1){
  data1.forEach(function(el){
    let div4 = document.createElement("div")
    let div6 = document.createElement("div")
    let div5 = document.createElement("div")
    div5.setAttribute("class","class2")

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
    addfun()
})

btn2 = document.createElement("button")
btn2.innerText = "add"
btn2.addEventListener("click",function(){
    addle(el) 
})
div4.append(h2,h4,h3,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_2.append(div6)

  })
}

// let addFun = ()=>{
//    window.location.href = "./details.html"
// }
// let addEle = (el)=>{
//   // console.log(el)
//    slonArr.push(el)
//    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
// }

let addfun = ()=>{
   window.location.href = "./details.html"
}
let addle = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data2 =  [
   {
      title:"Cut,file & polish (hands)",
      rating: "4.59/5(49.8k)",
       price: 199,
      desc: "Quick & basic grooming session with a wide range of nail hands",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657015111280-ecba9e.png"
   },
   
   {
       title:"Elysian British rose manicure",
       rating: "4.71/5(19k)",
       price: 649,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525354775-6f2f1b.png"
    },
   
    {
       title:"Elysian chocolate & vanila manicure",
       rating: "4.71/5(33.8k)",
       price: 899,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525353944-8baf5e.png"
    },
    
    {
       title:"Elysian candle spa manicure",
       rating: "4.89/5(13.8k)",
       price: 1049,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657015100590-b7efec.png"
    },
    

]


var section_3 = document.getElementById("section3")
ffdisplayData(data2)

function ffdisplayData(data2){
  data2.forEach(function(el){
    let div4 = document.createElement("div")
    let div6 = document.createElement("div")
    let div5 = document.createElement("div")
    div5.setAttribute("class","class2")

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
    addffun()
})

btn2 = document.createElement("button")
btn2.innerText = "add"
btn2.addEventListener("click",function(){
    addele(el) 
})
div4.append(h2,h4,h3,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_3.append(div6)

  })
}

// let addFun = ()=>{
//    window.location.href = "./details.html"
// }
// let addEle = (el)=>{
//   // console.log(el)
//    slonArr.push(el)
//    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
// }

let addffun = ()=>{
   window.location.href = "./details.html"
}
let addele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}

var data3 =  [
   {
      title:"Cut,file & polish (feet)",
      rating: "4.59/5(49.8k)",
       price: 199,
      desc: "Quick & basic grooming session with a wide range of nail hands",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657018447765-ef2c1f.png"
   },
   
   {
       title:"Elysian British rose manicure",
       rating: "4.71/5(19k)",
       price: 649,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525547069-568a1f.png"
    },
   
    {
       title:"Elysian chocolate & vanila manicure",
       rating: "4.71/5(33.8k)",
       price: 899,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525546356-075510.png"
    },
    
    {
       title:"Elysian candle spa manicure",
       rating: "4.89/5(13.8k)",
       price: 1049,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525546690-54cb72.png"
    },
    

]


var section_4 = document.getElementById("section4")
pdisplayData(data3)

function pdisplayData(data3){
  data3.forEach(function(el){
    let div4 = document.createElement("div")
    let div6 = document.createElement("div")
    let div5 = document.createElement("div")
    div5.setAttribute("class","class2")

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
    Paddffun()
})

btn2 = document.createElement("button")
btn2.innerText = "add"
btn2.addEventListener("click",function(){
    Paddele(el) 
})
div4.append(h2,h4,h3,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_4.append(div6)

  })
}


let Paddffun = ()=>{
   window.location.href = "./details.html"
}
let Paddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data5 = [

   {
      title:"Face wash",
      rating: "4.76/5(33.8k)",
      price: 69,
      desc: "RICA peel-off wax to remove even the tiniest and good quality services",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657523964352-5dd593.png"
   },
   
   {
      title:"Threadingn",
      rating: "4.89/5(510k)",
      price: 19,
      desc: "RICA peel-off wax to remove even the tiniest and good quality services",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524490060-23016c.png"
   },
   
]

var section_5 = document.getElementById("section5")
tdisplayData(data5)

function tdisplayData(data5){
  data5.forEach(function(el){
    let div4 = document.createElement("div")
    let div6 = document.createElement("div")
    let div5 = document.createElement("div")
    div5.setAttribute("class","class2")

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
    Taddffun()
})

btn2 = document.createElement("button")
btn2.innerText = "add"
btn2.addEventListener("click",function(){
    Taddele(el) 
})
div4.append(h2,h4,h3,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_5.append(div6)

  })
}


let Taddffun = ()=>{
   window.location.href = "./details.html"
}
let Taddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data6 = [

   {
      title:"Bleach",
      rating: "4.75/5(54.8k)",
      price: 299,
      desc: "Not suitable for sensetive skin",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657520810954-691bb1.png"
   },
   
   {
      title:"Detan",
      rating: "4.79/5(80k)",
      price: 349,
      desc: "Not suitable for sensetive skin",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657523167667-d1f1eb.png"
   },
   
]


var section_6 = document.getElementById("section6")
bdisplayData(data6)

function bdisplayData(data6){
  data6.forEach(function(el){
    let div4 = document.createElement("div")
    let div6 = document.createElement("div")
    let div5 = document.createElement("div")
    div5.setAttribute("class","class2")

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
    Baddffun()
})

btn2 = document.createElement("button")
btn2.innerText = "add"
btn2.addEventListener("click",function(){
    Baddele(el) 
})
div4.append(h2,h4,h3,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_6.append(div6)

  })
}


let Baddffun = ()=>{
   window.location.href = "./details.html"
}
let Baddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data7 = [

   {
      title:"Head Massage",
      rating: "4.75/5(64.8k)",
      price: 299,
      desc: "Relaxing oil massage & nourised hair",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524725157-0eea37.png"
   },
   
   {
      title:"Loreal Hair Spa",
      rating: "4.63/5(1.1k)",
      price: 1249,
      desc: "Relaxing oil massage & nourised hair",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524725660-93d095.png"
   },
   
]



var section_7 = document.getElementById("section7")
hdisplayData(data7)

function hdisplayData(data7){
  data7.forEach(function(el){
    let div4 = document.createElement("div")
    let div6 = document.createElement("div")
    let div5 = document.createElement("div")
    div5.setAttribute("class","class2")

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
    haddffun()
})

btn2 = document.createElement("button")
btn2.innerText = "add"
btn2.addEventListener("click",function(){
    haddele(el) 
})
div4.append(h2,h4,h3,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_7.append(div6)

  })
}


let haddffun = ()=>{
   window.location.href = "./details.html"
}
let haddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}
