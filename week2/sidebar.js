//햄버거바 클릭시 모달을 뜨게 함, x버튼 누르면 닫힘.
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".modal_closeBtn");
const modal = document.querySelector(".modal-section");


const showModal = () => {
  modal.classList.remove("hide-modal");
  modal.classList.add("show-modal");
}

const hideModal = () => {
  modal.classList.remove("show-modal");
  modal.classList.add("hide-modal");
}
open.addEventListener('click', showModal);

close.addEventListener('click', hideModal);