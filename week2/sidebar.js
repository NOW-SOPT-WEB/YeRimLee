//햄버거바 클릭시 모달을 뜨게 함, x버튼 누르면 닫힘.
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".modal_closeBtn");
const modal = document.querySelector(".modal");

function init() {
  open.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
  close.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}

init();
