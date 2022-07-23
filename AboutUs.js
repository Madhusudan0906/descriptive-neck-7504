import { footer } from "./component/footer.js";
import { header } from "./component/navbar.js";

document.querySelector("#footer").innerHTML = footer();
document.querySelector("#header").innerHTML = header();