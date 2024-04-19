//홈버튼 클릭 시, 홈으로 이동
const tohome = document.querySelector(".tohome");
const tohomeClickHandler = () => {
  const gotoHome = "index.html";
  location.href = gotoHome;
};
tohome.addEventListener("click", tohomeClickHandler);
