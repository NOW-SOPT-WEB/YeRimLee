//item 클릭시 장바구니에 담기 alert가 뜨고 yes 누르면 장바구니로 이동됨
const item = document.querySelector(".section");
const itemClickHandler = () => {
  alert("장바구니 담기");
  const cartPlus = "cart.html";
  location.href = cartPlus;
};
item.addEventListener("click", itemClickHandler);

//li 태그 만들어서 시작화면에 '전체' 추가
//const all = document.createElement("h2");
//all.textContent = "전체";

//const itemList = document.querySelector(".item_list");

//itemList.appendChild(all);

//div 태그 만들어서 시작화면에 상품 나열
//const all_list = document.createElement("div");

//const imgBox = document.querySelector(".item_box");

//imgBox.append("닥터자르트", 24000);
//html꺼 태그 삭제함
//연결 끊음
