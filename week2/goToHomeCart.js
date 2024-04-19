//홈버튼 클릭 시, 홈으로 이동
const tohome = document.querySelector(".tohome");
const tohomeClickHandler = () => {
  const gotoHome = "index.html";
  location.href = gotoHome;
};
tohome.addEventListener("click", tohomeClickHandler);
//홈이동
const home = document.querySelector(".fa-heart-circle-plus");
const homeClickHandler = () => {
  const goHome = "index.html";
  location.href = goHome;
};
home.addEventListener("click", homeClickHandler);
