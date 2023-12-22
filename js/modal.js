let backdrop = document.querySelector(".backdrop");
let openModalButton = document.querySelector(".open-modal-button");
let closeModalButton = document.querySelector(".close-modal-button");

const clickOnButton = () => backdrop.classList.toggle("hidden");

openModalButton.addEventListener("click", clickOnButton);
closeModalButton.addEventListener("click", clickOnButton);
