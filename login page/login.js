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
        alert("Please check your phone for OTP.");
        
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

document.querySelector('#btn-lgn').addEventListener('click',function(){
    let number=localStorage.getItem('mobile');
    localStorage.setItem('logined',number);
    window.location.reload();
})