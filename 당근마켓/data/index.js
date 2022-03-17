const $dropdownBtn = document.querySelector(".dropdown__btn");
const $dropdownList = document.querySelector(".dropdown__list");
$dropdownBtn.addEventListener("click", (e) => {
  $dropdownList.classList.toggle("active");
});

const $inputSerch = document.querySelector(".header__form--input--serch");
const $inputSerchBox = document.querySelector(".header__form--input--box");

$inputSerch.addEventListener("focus", (e) => {
  $inputSerchBox.classList.toggle("focus");
});

document.body.addEventListener("click", (e) => {
  if ($inputSerchBox.contains(e.target)) {
    $inputSerchBox.classList.add("focus");
  } else {
    $inputSerchBox.classList.remove("focus");
  }
});
