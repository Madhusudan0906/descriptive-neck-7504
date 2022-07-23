function cartpage(){
    window.location.href='cartpage.html';
}
let data=JSON.parse(localStorage.getItem('womenSlonArr'));
let total=0;
data.forEach((el)=>{
    let pr1=document.createElement('div');
    pr1.setAttribute('class','prodd')
    let d1=document.createElement('div');
    d1.setAttribute('class','head-line');
    let p1=document.createElement('p');
    p1.innerHTML=el.title;
    let d2=document.createElement('div');
    d2.setAttribute('class','btn-range');
    let p2=document.createElement('p');
    p2.innerHTML='-'
    let p3=document.createElement('p');
    p3.innerHTML='1';
    let p4=document.createElement('p');
    p4.innerHTML='+';
    d2.append(p2,p3,p4);
    let d4=document.createElement('div');
    d4.innerHTML=el.price;
    d1.append(p1,d4);
    let d3=document.createElement('div');
    d3.setAttribute('id','line');
    
    let d5=document.createElement('div');
    d5.setAttribute('class','desc');
    let ul1=document.createElement('p');
    ul1.innerHTML=el.desc;
    d5.append(ul1);
    pr1.append(d1,d3,d5);
    document.querySelector('#prod-list').append(pr1);

    
    total+=el.price;

});
document.querySelector('#total').innerHTML=`&#8377;${total}`;

document.querySelector('#final-total').innerHTML=`&#8377;${total-150+49}`;
function showAdd() {
document.querySelector('#data-sum').style.opacity='0.3';
let a = document.querySelector("#address");
let box = getComputedStyle(a);
if (box.display == "none") {
a.style.display = "grid";
}
}
function closeAdd() {
document.querySelector('#data-sum').style.opacity='1';
let a = document.querySelector("#address");
let box = getComputedStyle(a);
if (box.display !== "none") {
a.style.display = "none";
}
}
function closeTslot(){
document.querySelector('#data-sum').style.opacity='1';
let a = document.querySelector('#time-slot');
let box = getComputedStyle(a);
if(box.display!=="none"){
    a.style.display="none";
}
}
function openTslot(){
document.querySelector('#data-sum').style.opacity='0.5';
let address="";
let house=document.querySelector('#house').value;
let landmark = document.querySelector('#landmark').value;
let other = document.querySelector('#other-add').value;
address+=house;
if(landmark!==null){
        address+=" "+landmark;
}
if(other!==null){
    address+=" "+other;
}

localStorage.setItem('address',address);
localStorage.setItem('date','Sun 24');
let a = document.querySelector('#time-slot');
let box = getComputedStyle(a);
if(box.display=="none"){
    closeAdd();
    a.style.display="block";
    document.querySelector('#top-time-add').innerHTML=`<img width="16px" height="16px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///+AAIB9AH2kWKR7AHumbqZ4AHi2gbaTMJObQ5v89/yCAIJ2AHaLKov7+Pv//f/27fbm0ubSsNLy5/Lp1+m+jb6GD4aoZaju3+7Yudjbv9uTNpPfxt/FnMW0e7Tx5fGvcq/LpMukXKTJocmcS5yTOpO/kL+mW6abTpvEoMSLLIuxdLGLHYvjy+OcR5yraKs5ihKGAAAH8klEQVR4nO2d6XbiMAyFwfWYFsJOWbtQus6Utu//dgPdiIQdyc5mztH9OR0Hf9i5lmQnNBoikUgkEolEIpFIJBKJRCKRSBSdevP5crSYz9s+jdoZKqujgVrO/jXNXqq7GTE717987GboYVRul7101zFKNb+ljHrqMRq1u+a3jU0qeS2940xNVgZ1zkyv6GYt3OpIybD8znM0UsdDocw11ay/zRzBvXSriv6TurQPhVkT7dodCrCpzqoAINTfuOaaucg2nN5pEA5W2t2/7Tyr6WkQDjPvJdXJ8puTIBxpwiyy/OYUCC8Tso/J2tk6fsLejFzP9qP44vKb6AkHj26PSUv/c/hN7IQTyzLv6Ka2+03khKTHpGXubJeIm9ARxzgRbyzXiJrQGcc4EV/6RxeJmDArjnFJT2/xZeIlHE49bsFDZztvp0Joy5VYiBr5TayEnh6TloHZXpyEvDjGiQjimygJB+f+HpOW7o7jJpyQHkP+PeU3ERKOsktjO+l3aoyV+S0RxkdIe4y+bixIp01+/CY2wj7pMUrtI2x6JptNL0ZCOo75iVrorEqvbuMjHHbIkTmsBB/0aA9jI6RzJZA9XJN37N5vYiKkPSa5Bw0WpOuay4gI+8/krGviLJ7hN2fR1LzHtHN0jysxA3Jl1N1pHIR0rmQerNW0D6rUyEhRqiBckB7j3OR7oqupERDSNV9972xMxze1E9K50lcccxDc0ZwHVQMqJGTEMWh36TqBRbXBY550snRCRhyDPGY35Br+U3+dC7FcQs84Zjdg3f2Qqw4c1qc8iKUSsnKltH6WFdVcgn8PrVyVTNhnRM/QY1Ig5gn8ZULO9hoIx4xcaQxatNLLitmACnebuUtVIaFXrvTJgMr8+mIALhhaoSuLkOExMI6ZH5Xg1BSujIFV1pIIafdLoMe8WUJMpeGhtEUStBVQCuGZb650b4/sEljhpvOpigjpKouCuVL/xnliaAbu1cGFv9+UQMjJlYCJtB/cQ6674L+6T09VSMjwmDVokB1bqybcUfOObwonZORK0GPI/Ajt4PvGNwUTthm5EgzIGGOCYlfP3dViCRmV3OkEtGDlDSg2oKOl0giH5ARCuRJ3N19v4fdCRrwlEdIeg+ox/PkWMLdLIKSPXKNThl6eEdy2MEJ6pcLjQH8jEPEDtKYj+4IJx+Tetd6C0zD9jGXecYFzGCcw7+GCCN986zHzgHxPQb+hM+wCCTn1GJDQXgXl7ErBZINx+rYgQsZjHdAn7sh9Jdd1LsF16P2pQgg5+0rQY27Ca/VmBp4VYqw36jkvIKMeA3OlAZk9Zl5sBYo7Y3J/qrk9Ou/nJ0au9A488Hab78SQ6oDiRo9epY7O+3lpRFYW0Dq2DL0FD0pgskHXb4x754eUd65Eb88zhI7v0fFNYjtfzJH/vlK+LYgDIkw2GJXLs6CnSekzeGoKPCa8rIult2O/nuhugN/QuZL2/ar5wkEuPZsczzNkiJ79qOabZ3vFdnV4g9P5FD5fTMk7jsm1RWYTKm7Qpx6tzzO4xFiF4DSiAx9/6Uew0DLO39hPfNhExzHoycivnc+ipTog2WBUibKf1zyIkSvBp1vf8h43cEipBZgotN+gCNkhesYna5Ar3RXrMWkZmGzQEQgnvmnRV4EekyOVoGXOwJfJqIatCT6Ox4Cpky+VoKUfwVpO3xCE39AVTgVrvvNSPAZ+IMgdGNlclt8wIkC4OX1V3i34q9TZ/b38q34pMVZVmCtdl3kLHoR2Ur2jkV8xnAocEsl5mslDKHdgRJRrGyA9+gaMfvu9KsCjZGNCnjzVx34zJi0D5Uo5TvkECGWiDEeEARHHY/QL8JiCUwlacBXmZOdLv/6iOCbHM4ahQrmDX4XF251yPWMYKvMO/YZfJesxzseAEb/N+YxhqFC0wah0fiVg9LMEqguvXKnHgI5oEDEyev6520PaknmEs8PnXQlFC/oNI76ZthtL6o5FcYzzgFM1MhvoN1RvzF3jLzGE6Fvz3vksWmgnlVoF9F+CEOVK84B3JRQttQU7G0RFYkd4lTVLURwTtvNZtNBOana9eJ+YvLt7jVYgxyHK6oWSjYzVWW13gcrYuazACL3/WvcteBA6tpnhN5/r3NAxyjBXGtTuMWnpf6C44VrBzLeLjGyzD+VKuR9QKlhKgeKGfZflUKqzjDLyGM6hgYoFC4e2fCq9kn/gPxuYKxW+K1GEYLJxfDJUp99a1LuAQ5R8gFypsnKFn9BOKsqn1BQM0gCsdMhjakolaKFbCfqNRkXFyeGPKFeitzHqEwq50vmUOSopLn5mIjpf9hafx6QFj4kf6sW2F05+uwmKbButWKfol9QDpPhete3bpTdGK41ypfgJ8bm21ifFzAa4m5Cvm9ejVyufGmFjeDNbex1bODlCbwlhzRJCIRTC+iWEQiiE9UsIhVAI65cQCqEQMnpA67QJp+8XpOjXP0ZMqFaMT3jOM4q1E54zPuFMCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIVQCIWQrVGuXwktnVC36A8glPn+mvoJ4Ysxw0T/vnmdhDroffNQ1jefxEKIXjQcqE2415RNqM579PVptVfBZlMyoYYv98ih/bsIgqQ5hA8m7OIq8EcfrBre/AkT5133l4HX/uP9cwgikUgkEolEIpFIJBKJRCKRSJSh/5PDt/6ndPQ4AAAAAElFTkSuQmCC">
        ${address}`;
}

}
document.querySelector('#home-btn').addEventListener('click',function(){
this.style.backgroundColor='rgba(202, 201, 201, 0.856)';
this.style.borderColor="black";
let other=document.querySelector('#other-btn');
other.style.backgroundColor="transparent";
other.style.borderColor="rgb(199, 199, 199)";
document.querySelector('#other-inp>input').style.display="none";
});
document.querySelector('#other-btn').addEventListener('click',function(){
this.style.backgroundColor='rgba(202, 201, 201, 0.856)';
this.style.borderColor="black";
let home=document.querySelector('#home-btn');
home.style.backgroundColor="transparent";
home.style.borderColor="rgb(199, 199, 199)";

document.querySelector('#other-inp>input').style.display="block";
})

let id;
function debounce(func,delay){
if(id){
    clearInterval(id);
}
id = setInterval(function (){
    func();
},delay);
}

document.querySelector('#house').addEventListener('input',debounce(addAddress,1000));


function addAddress(){
let house=document.querySelector('#house').value;
let btn=document.querySelector('#bottom-add-slot>button');
if(house.length>4){
    btn.style.backgroundColor='purple';
    btn.style.color="white";
    btn.style.pointerEvents="all";
}else{
    btn.style.backgroundColor='rgb(224, 224, 224)';
    btn.style.color="grey";
    btn.style.pointerEvents="none"
}
}

document.querySelector('#dates>.one').addEventListener('click',function(){
this.style.borderColor='purple';
this.style.color="purple";
document.querySelector('#dates>.two').style.borderColor="rgb(199,199,199)";
document.querySelector('#dates>.three').style.borderColor="rgb(199,199,199)";
document.querySelector('#dates>.two').style.color="rgb(199,199,199)";
document.querySelector('#dates>.three').style.color="rgb(199,199,199)";
date=this.innerText;
localStorage.setItem('date',date);
})
document.querySelector('#dates>.two').addEventListener('click',function(){
this.style.borderColor='purple';
this.style.color="purple";
document.querySelector('#dates>.one').style.borderColor="rgb(199,199,199)";
document.querySelector('#dates>.three').style.borderColor="rgb(199,199,199)";
document.querySelector('#dates>.one').style.color="rgb(199,199,199)";
document.querySelector('#dates>.three').style.color="rgb(199,199,199)";
date=this.innerText;
localStorage.setItem('date',date);
})
document.querySelector('#dates>.three').addEventListener('click',function(){
this.style.borderColor='purple';
this.style.color="purple";
document.querySelector('#dates>.two').style.borderColor="rgb(199,199,199)";
document.querySelector('#dates>.one').style.borderColor="rgb(199,199,199)";
document.querySelector('#dates>.two').style.color="rgb(199,199,199)";
document.querySelector('#dates>.one').style.color="rgb(199,199,199)";
date=this.innerText;
localStorage.setItem('date',date);
})

function addTimeslot(n){
let timeslot=document.querySelector(`#timess>div:nth-child(${n})`).innerHTML;
localStorage.setItem('timeslot',timeslot);
document.querySelector('#bottom-time-slot>button').style.backgroundColor="purple";
document.querySelector('#bottom-time-slot>button').style.color="white";
document.querySelector('#bottom-time-slot>button').style.pointerEvents="all";
}

function proceedtocheckout(){
    localStorage.setItem('pay',total-150+49);
    window.location.href="../payment page/payments.html";
}