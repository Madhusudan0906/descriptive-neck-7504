var data = [
    
    {
   title:"Tap Repair",
   rating: "4.81/5(2.8k)",
    price: 100,
   desc: "replacement of one ceiling fan regulator",
   image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651733806484-9638b6.png"
},

{
    title:"Waste pipe leakage",
    rating: "4.70/5(30k)",
    price: 129,
    desc: "instalation of fan with in-built light,music etc..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118672958-fb2d33.png"
 },

 {
    title:"Jet Spray(installation/Repair",
    rating: "4.78/5(23.8k)",
    price: 119,
    desc: "instalation of fan with in-built light,music etc..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118671620-a338f5.png"
 },
 
 {
    title:"Flush tank repair",
    rating: "4.81/5(4.8k)",
    price: 189,
    desc: "repair oof ceiling,wall or exhaust fan",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118692620-088804.png"
 },
 
 {
    title:"Tap ReplaceMent",
    rating: "4.71/5(3.8k)",
    price: 119,
    desc: "replace of all type of fan..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118680703-3d7fb2.png"
 },
 
 {
    title:"Hot & cold water mixer repair",
    rating: "4.71/5(3.8k)",
    price: 269,
    desc: "replace of all type of fan..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1635857872746-2174a6.png"
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
div2.append(h2,h3,h4,div3,p,btn1,btn2)
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
        title:"Waste pipe leakage",
        rating: "4.70/5(30k)",
        price: 129,
        desc: "instalation of fan with in-built light,music etc..",
        image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118672958-fb2d33.png"
     },
   
   {
       title:"Wash basin blockage removal",
       rating: "4.80/5(20k)",
       price: 169,
       desc: "Installation upto one false ceiling light ..",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118674221-8ea468.png"
    },
   
    {
       title:"Tubelight installation/Repair ",
       rating: "4.76/5(43.8k)",
       price: 419,
       desc: "Wash basin installation ",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118686258-2c70b9.png",
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
div4.append(h2,h3,h4,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_2.append(div6)

  })
}


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
      title:"Bathroom tile gap filling",
      rating: "4.59/5(49.8k)",
       price: 1500,
      desc: "Replace or repair all type of MCB and Sub meter...",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1636963833042-9177e0.jpeg"
   },
   
   {
       title:"Kitchen tile gap filling",
       rating: "4.71/5(19k)",
       price: 1000,
       desc: "Replace or repair all type of MCB and Sub meter...",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1636963833042-9177e0.jpeg"
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
div4.append(h2,h3,h4,div5,p,btn1,btn2)
   div6.append(div4,img)
   section_3.append(div6)

  })
}



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
      title:"Minor fittings installation",
      rating: "4.59/5(49.8k)",
       price: 100,
      desc: "All type work done by our employees...",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640246281462-ca59b8.png"
   },
   
   {
       title:"Shower installation",
       rating: "4.71/5(19k)",
       price: 109,
       desc: "All type work done by our employees...",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118675393-956d59.png"
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
div4.append(h2,h3,h4,div5,p,btn1,btn2)
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
      title:" Flush tank repair",
      rating: "4.76/5(33.8k)",
      price: 269,
      desc: "UP to all size",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118692620-088804.png"
   },
   
   {
      title:"Wastern toilet installation/repair",
      rating: "4.89/5(510k)",
      price: 1499,
      desc: "Any repair done in this pack",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118662818-b29289.png"
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
div4.append(h2,h3,h4,div5,p,btn1,btn2)
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
      title:"Overhead tank installation(500L-2000L)",
      rating: "4.75/5(54.8k)",
      price: 1119,
      desc: "Spare parts and wires are procured at an additional cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118685735-ee2001.png"
   },
   
   {
      title:"Overhead tank Cleaning(all size)",
      rating: "4.79/5(80k)",
      price: 1049,
      desc: "Spare parts and wires are procured at an additional cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118685735-ee2001.png"
   },
   
   {
    title:"UnderGrround Tank cleaning",
    rating: "4.79/5(80k)",
    price: 1649,
    desc: "Spare parts and wires are procured at an additional cost",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634541805764-c093fa.png"
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
      title:"Motor installation",
      rating: "4.75/5(64.8k)",
      price: 419,
      desc: "One motor cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118688785-39dfc2.png"
   },
   
   {
      title:"Moter replacement",
      rating: "4.63/5(1.1k)",
      price: 449,
      desc: "One motor cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118688785-39dfc2.png"
   },
   {
    title:"Motor air cavity removal",
    rating: "4.63/5(1.1k)",
    price: 149,
    desc: "One motor cost",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634118688785-39dfc2.png"
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
div4.append(h2,h3,h4,div5,p,btn1,btn2)
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
