const incheon = document.querySelector("a.cl");

incheon.addEventListener("click", () => {
  document.querySelector("div.view").style.zIndex = 100000;
});

const seoul = document.querySelector("a.cl2");

seoul.addEventListener("click", () => {
  document.querySelector("div.view").style.zIndex = 0;
});

// function getShow() {
//   document.getElementById("incheon_view").style.visibility = "visible";
//   document.getElementById("seoul_view").style.visibility = "hidden";
// }
