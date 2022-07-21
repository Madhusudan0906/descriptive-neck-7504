var data = [
    
    {
   title:"Deep clean AC service(window)",
   rating: "4.81/5(74.8k)",
    price: 499,
   desc: "Recommended for ACs serviced more than 6 months ago",
   image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1616302301647-bb9cc7.png"
},

{
    title:"Deep clean AC service(split",
    rating: "4.70/5(3.0k)",
    price: 549,
    desc: "Recommended for ACs serviced more than 6 months ago",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1644497430157-9e48ba.png"
 },

 {
    title:"Life AC service (split)",
    rating: "4.70/5(3.0k)",
    price: 499,
    desc: "Recommended for ACs serviced more than 6 months ago",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1644497796549-8b7e81.png"
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
    window.location.href = "./detailsAC.html"
    
}
let addEle = (el)=>{
   // console.log(el)
    slonArr.push(el)
    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


// second


var data1 = [
   {
      title:"AC repair(window/split)",
      rating: "4.79/5(4.9k)",
       price: 299,
      desc: "Visit Charges 299 add in Final bill",
      image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1644498042167-558d12.png"
   },
   
   {
    title:"Gas leak fixing and refil(window,split)",
    rating: "4.79/5(4.9k)",
     price: 2499,
    desc: "Visit Charges 299 add in Final bill",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1654684963322-32268a.jpeg"
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
   window.location.href = "./detailsAC.html"
   
}
let addle = (el)=>{
  // console.log(el)
   slonArr.push(el)
   localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
}


var data7 = [

    {
       title:"Installation",
       rating: "4.75/5(64.8k)",
       price: 739,
       desc: "Includes free gas checking....",
       image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1607329286904-14e1ed.png"
    },
    
 
    
 ]
 
 
 
 var section_3 = document.getElementById("section3")
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
    section_3.append(div6)
 
   })
 }
 
 
 let haddffun = ()=>{
    window.location.href = "./detailsAC.html"
    
 }
 let haddele = (el)=>{
   // console.log(el)
    slonArr.push(el)
    localStorage.setItem("womenSlonArr",JSON.stringify(slonArr))
 }
 

