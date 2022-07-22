var data = [
    
    {
   title:"Ceiling fan regulator replacement",
   rating: "4.81/5(2.8k)",
    price: 79,
   desc: "replacement of one ceiling fan regulator",
   image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639995505867-8b32bd.png"
},

{
    title:"Decorative ceiling fan instalation",
    rating: "4.70/5(30k)",
    price: 429,
    desc: "instalation of fan with in-built light,music etc..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1655884661064-2d1308.png"
 },

 {
    title:"Ceiling fan instalation ",
    rating: "4.78/5(23.8k)",
    price: 149,
    desc: "instalation of fan with in-built light,music etc..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640008611215-b93a9c.png"
 },
 
 {
    title:"Fan repair",
    rating: "4.81/5(4.8k)",
    price: 189,
    desc: "repair oof ceiling,wall or exhaust fan",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640067309934-db4a2e.png"
 },
 
 {
    title:"Fan Replacement",
    rating: "4.71/5(3.8k)",
    price: 199,
    desc: "replace of all type of fan..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639994525978-aa7354.png"
 },
 
 {
    title:"Fan Uninstallation",
    rating: "4.71/5(3.8k)",
    price: 149,
    desc: "replace of all type of fan..",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639994523464-65acf2.png"
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
      title:"Blub holder installaion",
      rating: "4.79/5(49.8k)",
       price: 119,
      desc: "Installation upto one holder..",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640070639107-8d4afe.png"
   },
   
   {
       title:"False ceiling light",
       rating: "4.80/5(20k)",
       price: 169,
       desc: "Installation upto one false ceiling light ..",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640067297083-55423b.png"
    },
   
    {
       title:"Tubelight installation/Repair ",
       rating: "4.76/5(43.8k)",
       price: 119,
       desc: "Installation upto one Tubelight..",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640069913579-5855d8.png",
    },
    {
       title:"Replace CFL to LED ",
       rating: "4.89/5(13.8k)",
       price: 169,
       desc: "Replace of a CFL bulb/tube light to led bulb/tube light",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639728462653-4f65e2.png"
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
      title:"3 Phase changeover switch installation",
      rating: "4.59/5(49.8k)",
       price: 399,
      desc: "Replace or repair all type of MCB and Sub meter...",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640067302146-9ea50e.png"
   },
   
   {
       title:"MCB Fuse replacement",
       rating: "4.71/5(19k)",
       price: 100,
       desc: "Replace or repair all type of MCB and Sub meter...",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640067302146-9ea50e.png"
    },
   
    {
       title:"Single pole MCB Installation",
       rating: "4.71/5(33.8k)",
       price: 119,
       desc: "Replace or repair all type of MCB and Sub meter...",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639995516032-77a650.png"
    },
    
    {
       title:"Sub meter installation",
       rating: "4.89/5(13.8k)",
       price: 279,
       desc: "Replace or repair all type of MCB and Sub meter...",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640067307688-80945e.png"
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
      title:"Single battery inverter installation",
      rating: "4.59/5(49.8k)",
       price: 499,
      desc: "Quick & basic grooming session with a wide range of nail hands",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640067308350-b11851.png"
   },
   
   {
       title:"Dubble battery inverter installation",
       rating: "4.71/5(19k)",
       price: 509,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639743632132-bbf9af.png"
    },
   
    {
       title:"Inverter fuse replacement",
       rating: "4.71/5(33.8k)",
       price: 299,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639735363220-eb55d7.png"
    },
    
    {
       title:"stabulizer installation",
       rating: "4.89/5(13.8k)",
       price: 179,
       desc: "Quick & basic grooming session with a wide range of nail hands",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640067285680-d7bee4.png"
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
      title:"TV installation ",
      rating: "4.76/5(33.8k)",
      price: 599,
      desc: "UP to all size",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640076769042-a4ce67.png"
   },
   
   {
      title:"Room heater repair",
      rating: "4.89/5(510k)",
      price: 279,
      desc: "replacement of heater's glass road and other heater issues",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640237829235-a01d16.png"
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
      title:"New internal wiring(per 5m)",
      rating: "4.75/5(54.8k)",
      price: 219,
      desc: "Spare parts and wires are procured at an additional cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639738565631-307f88.png"
   },
   
   {
      title:"New wiring with casing(per 5m)",
      rating: "4.79/5(80k)",
      price: 249,
      desc: "Spare parts and wires are procured at an additional cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640070547359-582347.png"
   },
   
   {
    title:"New wiring without casing(per 5m)",
    rating: "4.79/5(80k)",
    price: 149,
    desc: "Spare parts and wires are procured at an additional cost",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1640070547359-582347.png"
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
      title:"Door bell installation",
      rating: "4.75/5(64.8k)",
      price: 99,
      desc: "One doorbell cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639739258650-ef1de9.png"
   },
   
   {
      title:"Door bell replacement",
      rating: "4.63/5(1.1k)",
      price: 1249,
      desc: "One doorbell cost",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1639739258650-ef1de9.png"
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
