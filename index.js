import { footer } from "./component/footer.js";
document.querySelector("#footer").innerHTML = footer();

import { header } from "./component/navbar.js";
document.querySelector("#header").innerHTML = header();

import { login,otpbar } from "./component/navbar.js";


document.querySelector('#login-bar').innerHTML=login();


document.querySelector('#otp-bar').innerHTML=otpbar();