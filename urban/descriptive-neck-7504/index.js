let selectfeild = document.querySelector("#selectfeild");
let select_text = document.querySelector("#select_text");
let options = document.getElementsByClassName("option");
let list = document.querySelector("#list");
let arrow = document.querySelector("#arrow");

selectfeild.onclick = () => {
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
};

for (option of options) {
  option.onclick = function () {
    select_text.innerText = this.innerText;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
}
