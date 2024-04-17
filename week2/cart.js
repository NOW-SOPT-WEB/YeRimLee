//홈버튼 클릭 시, 홈으로 이동
const tohome = document.querySelector(".tohome");
const tohomeClickHandler = () => {
  const gotoHome = "index.html";
  location.href = gotoHome;
};
tohome.addEventListener("click", tohomeClickHandler);

//로컬스토리지를 이용해서 장바구니 담기 관련 로직 추가
//로컬 스토리지를 통해서 담고, 뿌리기해야함
//무엇을 선택하든, .secition 선택자로 선택해서 무엇을 고르든 담기기에 해야겠지?
