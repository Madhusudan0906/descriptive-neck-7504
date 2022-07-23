let header = () => {
  let logined=localStorage.getItem('logined')||false;
  let loginData;
  if(logined){
    loginData=`<a id="booking" href="./booking page/booking.html">Booking page</a>&nbsp;&nbsp;<a onclick="logout()">logout</a>`;
  }else{
    loginData='<a id="login" onclick="toggleLogin()">Login</a><a id="signup">Sign Up</a>'
  }
  return `      <div id="navbar">
        <div id="logodiv">
          <a href=""
            ><img
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              alt="company logo"
          /></a>
        </div>
        <div id="loginSignupdiv">
          <a href="">Blog</a>
          <a href=""><u>Register As A Professional</u></a>
          <div>
            ${loginData}
          </div>
        </div>
      </div>`;
};

function login(){
  return `
  <button onclick="toggleLogin()" id="x">x</button>
  <p id="lhb">Please login to continue</p>
  <div id="line"></div>
  <div id="form">
      <div><img src="./login page/india.png" width="32px" height="32px"><p>+91</p> <div id="down-arrw"></div></div>
      <input type="number" placeholder="Your phone number" id="mob_no" required>
  </div>
  <div id="btn-cntnu" onclick="loginContinue()">
      Continue
  </div>
`;
}

function otpbar(){
  return `<button onclick="toggleOTP()" id="backarrow"><-</button>
  <p id="lhb">Please login to continue</p>
  <div id="line"></div>

  <div id="text-cntr">
      <h3>Enter your Verification code</h3>
      <p id="mno">We have sent you a 4 digit OTP on <span></span><a onclick="toggleOTP()" id="link">Edit</a></p>
  </div>
  <div id="OTP-fields">
      <input id="boxi" required><input id="boxi" required><input id="boxi" required><input id="boxi" required>
  </div>
  <div id="count-down">

  </div>
  <div id="btn-lgn" onclick="logindo()">
      Login
  </div>`;
}

export { header, login,otpbar};