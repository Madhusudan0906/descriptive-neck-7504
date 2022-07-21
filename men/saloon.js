var data = [
    
    {
   title:"Haircut + Beard Grooming + Massage",
   rating: "4.81/5(74.8k)",
    price: 549,
   desc: "Men's Haircut + face & neck Detan Pack + head Massage....",
   image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1629192918292-196558.jpeg"
},

{
    title:"Haircut + Face Care ",
    rating: "4.70/5(3.0k)",
    price: 649,
    desc: "Men's Haircut + face & neck Detan Pack + head Massage....",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651666576469-ed8a95.png"
 },

 {
    title:"Haircut + Massage",
    rating: "4.78/5(2.8k)",
    price: 449,
    desc: "Men's Haircut + face & neck Detan Pack + head Massage....",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651660884996-1c3ba4.png"
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
    window.location.href = "./detailsHair.html"
}
let addEle = (el)=>{
   // console.log(el)
    slonArr.push(el)
    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


// second


var data1 = [
   {
      title:"Hair cut For Men",
      rating: "4.79/5(4.9k)",
       price: 249,
      desc: "Good and Clean Equipment used by Professional",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651735873259-9ad829.png"
   },
   
   {
       title:"Haircut For 2",
       rating: "4.80/5(20k)",
       price: 449,
       desc: "Good and Clean Equipment used by Professional",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1621322855950-9b5a1d.jpeg"
    },
   
    {
       title:"Kid's Haircut ",
       rating: "4.76/5(43.8k)",
       price: 449,
       desc: "Good and Clean Equipment used by Professional",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1616494759820-956198.jpeg"
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



let addfun = ()=>{
   window.location.href = "./detailsHair.html"
}
let addle = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data2 =  [
   {
      title:"Hair color with Product",
      rating: "4.59/5(49.8k)",
       price: 299,
      desc:"Amonia Free product for best Results",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1655295307011-10fa33.jpeg"
   },
   
   {
       title:"Hair color - Application Only",
       rating: "4.71/5(19k)",
       price: 149,
       desc: "Amonia Free product for best Results",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1615976235101-6d6cc1.jpeg"
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



let addffun = ()=>{
   window.location.href = "./detailsHair.html"
}
let addele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}

var data3 =  [
   {
      title:"Clean Shave/Mousstache Grooming",
      rating: "4.59/5(49.8k)",
       price: 149,
      desc: "Good and Coustmizable pack",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651660889736-7c3f9d.png"
   },
   
   {
       title:"Beard Shaping And Styling",
       rating: "4.71/5(19k)",
       price: 199,
       desc: "Good and Coustmizable pack",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1629192918292-196558.jpeg"
    },

    {
      title:"Beard Color With Product",
      rating: "4.71/5(19k)",
      price: 249,
      desc: "Good and Coustmizable pack",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1640852398247-6bb793.png"
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
   window.location.href = "./detailsHair.html"
}
let Paddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data5 = [

   {
      title:"Instant Tan Reduction",
      rating: "4.76/5(33.8k)",
      price: 149,
      desc: "Remove tan,dust and extra oil on Face",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1630674559521-c6b735.jpeg"
   },
   
   {
      title:"Instant Oil Reduction",
      rating: "4.89/5(510k)",
      price: 149,
      desc: "Remove tan,dust and extra oil on Face",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1630655011480-773d1d.jpeg"
   },
   {
      title:"Refreshing Face Massage",
      rating: "4.76/5(33.8k)",
      price: 149,
      desc: "Remove tan,dust and extra oil on Face",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631537594939-9d661d.jpeg"
   },
   
   {
      title:"Anti-pollution Cleanup",
      rating: "4.89/5(510k)",
      price: 699,
      desc: "Remove tan,dust and extra oil on Face",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1606455920469-0f25d3.jpeg"   },
   
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
   window.location.href = "./detailsHair.html"
}
let Taddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data6 = [

    {
        title:"Relaxing Head Massage",
        rating: "4.79/5(4.9k)",
         price: 99,
        desc: "Promise to Give Relaxing Massage",
        image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1651660884996-1c3ba4.png"
     },
     
     {
         title:"Neck & Sholder Massage",
         rating: "4.80/5(20k)",
         price: 199,
         desc: "Promise to Give Relaxing Massage",
         image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1609925335989-eccf3c.jpeg"
      },
     
      {
         title:"Anti Dendruff - Head Massage",
         rating: "4.76/5(43.8k)",
         price: 449,
         desc: "Promise to Give Relaxing Massage",
         image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631336215990-e722e8.jpeg"
      },
      
      {
         title:"Head,neck & Sholder Massage",
         rating: "4.89/5(13.8k)",
         price: 499,
         desc: "Promise to Give Relaxing Massage - 40 min",
         image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_f7d85a20.jpeg"
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
   window.location.href = "./detailsHair.html"
}
let Baddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data7 = [

   {
      title:"Deep Cleansee Pedicure",
      rating: "4.75/5(64.8k)",
      price: 749,
      desc: "Promise Hygiene Mantain",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631931646822-21bf6f.jpeg"
   },
   {
      title:"Express Pedicure",
      rating: "4.75/5(64.8k)",
      price: 499,
      desc: "Promise Hygiene Mantain",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1635509939358-77d147.jpeg"
   },
   {
      title:"Experess Manicure",
      rating: "4.75/5(64.8k)",
      price: 899,
      desc: "Promise Hygiene Mantain",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_d3262550.png"
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
   window.location.href = "./detailsMensaloon.html"
}
let haddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}
