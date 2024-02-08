let backdrop = document.querySelector(".backdrop");
let openModalButton = document.querySelector(".modal__open-button");
let closeModalButton = document.querySelector(".modal__close-button");

const clickOnButton = () => backdrop.classList.toggle("hidden");

openModalButton.addEventListener("click", clickOnButton);
closeModalButton.addEventListener("click", clickOnButton);
