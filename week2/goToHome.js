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

//일단 클릭하면 리스트의 내용들이 새로운 배열에 담기고
//그 배열이 로컬스토리지에 푸시되면
//그 로컬 스토리지를 받아서 테이블에 구현
//로컬스토리지를 이용해서 장바구니 담기 관련 로직 추가
//로컬 스토리지를 통해서 담고, 뿌리기해야함
//무엇을 선택하든, .secition 선택자로 선택해서 무엇을 고르든 담기기에 해야겠지?

//로컬스토리지에 담기
