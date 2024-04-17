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

//사이드바에서 장바구니 클릭시, 장바구니 페이지로 이동
//const sdCart = document.querySelector(".cart");
//const sdCartClickHandler = () => {
//sd: 사이드 카트
//const goCart = "cart.html";
//location.href = goCart;
//};
//sdCart.addEventListener("click", sdCartClickHandler);
//a href 로 구현해서 일단 주석처리..
