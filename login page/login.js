
// function otpgenerator() {
//     let min = Math.ceil(1111);
//     let max = Math.floor(9999);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(otpgenerator());

function toggleLogin(){
    let a=document.querySelector('#login-bar');
    const abc = getComputedStyle(a);
    
    // console.log(abc.display);
    if(abc.display=="none"){
        a.style.display='block';
    }else{
        a.style.display='none';
    }
}
function toggleOTP(){
    let b=document.querySelector('#otp-bar');
    const abc = getComputedStyle(b);
    let nob=document.querySelector('#mob_no').value;
        document.querySelector('#mno>span').innerHTML=nob;
        localStorage.setItem('mobile',nob);
        // console.log(nob);
    // console.log(abc.display);
    if(abc.display=="none"){
        b.style.display='block';
    }else{
        b.style.display='none';
    }
}



function loginContinue(){
    let a=check();
    if(a){
        toggleOTP();
        alert("OTP is 1234.");
        
    }else{
        alert("please enter correct number");
    }
}

function check(){
    let no=document.querySelector('#mob_no').value;
    if(no.length==10){
        return true;
    }
    return false;
}
function logindo(){
    let typo="";
    typo+=document.querySelector('#OTP-fields>input:nth-child(1)').value;
    typo+=document.querySelector('#OTP-fields>input:nth-child(2)').value;
    typo+=document.querySelector('#OTP-fields>input:nth-child(3)').value;
    typo+=document.querySelector('#OTP-fields>input:nth-child(4)').value;
    if(typo=='1234'){
    let number=localStorage.getItem('mobile');
    localStorage.setItem('logined',number);
    localStorage.removeItem('mobile');
    window.location.reload();
    }
    else{
        alert('you entered wrong otp.');
    }
}
function logout(){
    localStorage.removeItem('logined');
    window.location.reload();
}
// document.querySelector('#btn-lgn').addEventListener('click',function(){
//     let number=localStorage.getItem('mobile');
//     localStorage.setItem('logined',number);
//     window.location.reload();
// })


