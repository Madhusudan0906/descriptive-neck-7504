var data = [
    
    {
   title:"Hair Cut and Basic",
   rating: "4.81/5(74.8k)",
    price: 649,
   desc: "Choose from a renge of haircut and layers,bangs.....",
   image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650711648402-3502ab.jpeg"
},

{
    title:"Girls Haircut ",
    rating: "4.70/5(3.0k)",
    price: 649,
    desc: "Choose from a renge of haircut and layers,bangs.....",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1644151475715-26a85e.jpeg"
 },

 {
    title:"Mom and Daughter Pack",
    rating: "4.78/5(2.8k)",
    price: 1049,
    desc: "Choose from a renge of haircut and layers,bangs.....",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1637643281048-3b4e78.png"
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
      title:"Blowdry: In Curl / Out Curl",
      rating: "4.79/5(4.9k)",
       price: 399,
      desc: "gives bouncy looking long last few hours",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650710728185-13cb5e.jpeg"
   },
   
   {
       title:"Straightening",
       rating: "4.80/5(20k)",
       price: 499,
       desc: "long lastic sleek,smooth and straight hair",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650712577621-7ce491.jpeg"
    },
   
    {
       title:"Curls & Waves ",
       rating: "4.76/5(43.8k)",
       price: 449,
       desc: "long lastic",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650712585125-72cb41.jpeg"
    },
    
    {
       title:"Weding reeady Group Styling Package ",
       rating: "4.89/5(13.8k)",
       price: 1999,
       desc: "Pakages At least 3 styling service",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650635192529-1c7ebd.jpeg"
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
//    window.location.href = "./detailsHair.html"
// }
// let addEle = (el)=>{
//   // console.log(el)
//    slonArr.push(el)
//    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
// }

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
      title:"Roots : Only Application",
      rating: "4.59/5(49.8k)",
       price: 399,
      desc: "Up to 4 inches coverage from root",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1637646873120-9c2c72.png"
   },
   
   {
       title:"Roots : color And Application",
       rating: "4.71/5(19k)",
       price: 849,
       desc: "Any color which you selected",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639397627725-b8ee0b.png"
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
//    window.location.href = "./detailsHair.html"
// }
// let addEle = (el)=>{
//   // console.log(el)
//    slonArr.push(el)
//    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
// }

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
      title:"L'Oreal Nourishing Hair Spa",
      rating: "4.59/5(49.8k)",
       price: 1399,
      desc: "Provided maximum Nurisument for Gorgeous bouncy hair",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639396832039-ac31ba.png"
   },
   
   {
       title:"Relaxing Head Oil Massage",
       rating: "4.71/5(19k)",
       price: 349,
       desc: "Provided maximum Nurisument for Gorgeous bouncy hair",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639397192787-73f069.png"
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
      title:"L'Oreal Signature Highlights/Streaks",
      rating: "4.76/5(33.8k)",
      price: 3149,
      desc: "Provided maximum Nurisument for Gorgeous bouncy hair",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639398010862-53633e.png"
   },
   
   {
      title:"Balayage / Ombre",
      rating: "4.89/5(510k)",
      price: 3449,
      desc: "Provided maximum Nurisument for Gorgeous bouncy hair",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639398073123-02f47c.png"
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
   window.location.href = "./detailsHair.html"
}
let Taddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data6 = [

    {
        title:"Blowdry: In Curl / Out Curl",
        rating: "4.79/5(4.9k)",
         price: 399,
        desc: "gives bouncy looking long last few hours",
        image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650710728185-13cb5e.jpeg"
     },
     
     {
         title:"Straightening",
         rating: "4.80/5(20k)",
         price: 499,
         desc: "long lastic sleek,smooth and straight hair",
         image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650712577621-7ce491.jpeg"
      },
     
      {
         title:"Curls & Waves ",
         rating: "4.76/5(43.8k)",
         price: 449,
         desc: "long lastic",
         image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650712585125-72cb41.jpeg"
      },
      
      {
         title:"Weding reeady Group Styling Package ",
         rating: "4.89/5(13.8k)",
         price: 1999,
         desc: "Pakages At least 3 styling service",
         image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650635192529-1c7ebd.jpeg"
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
      title:"ragular hair trim",
      rating: "4.75/5(64.8k)",
      price: 899,
      desc: "Relaxing oil massage & nourised hair",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1650711648402-3502ab.jpeg"
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
   window.location.href = "./detailsHair.html"
}
let haddele = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}
