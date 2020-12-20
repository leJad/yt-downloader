let URLi = document.querySelector(".Urlin");
let Bttn = document.querySelector(".btn");

Bttn.addEventListener("click", function () {
  console.log(`URL: ${URLi.value}`);
  sURL(URLi.value);
});

let sURL = (URL) => {
  window.location.href = `http://localhost:5500/install/?URL=${URL}`;
}
