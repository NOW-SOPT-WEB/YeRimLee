//cart.html만 연동되게

let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

function renderCartList() {
  const showCart = document.querySelector(".wish_list");

  let showCartList = cartList.map((item) => {
    return `
        <tr id=${item.id} class="detail_cart_list">
        <td><input type="checkbox"></td>
        <td><img id=${item.id} class="cartlist_img" src="${item.Image}"></td>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}</td>
        <td>${item.category}</td>
        <td><button type="button" class="cart_delete_btn">X</button></td>
        </tr>
        `;
  });
  showCart.innerHTML += showCartList.join("");
}

renderCartList();

//삭제 버튼 눌리면 삭제하기

const deleteBtn = document.querySelectorAll(".cart_delete_btn");
// 삭제 버튼 클릭 이벤트
const handleDeleteBtn = (event) => {
  //장바구니에 있는 카트 아이템의 아이디와 삭제 버튼을 클릭한 아이템의 아이디가 같다면 해당 아이템은 장바구니 리스트에서 삭제한 후
  //다시 카트리스트를 렌더링한다.
  const targetProduct = event.target.closest(".detail_cart_list");
  const targetProductId = targetProduct.querySelector("img").id;
  let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  const filterCart = cartList.filter((item) => {
    //foreach filter map find 등등등의 item 배열의 각 요소를 얘기한다
    return targetProductId !== item.id.toString(); //toString
  });

  localStorage.setItem("cartList", JSON.stringify(filterCart));
  location.href = location.href;
};

deleteBtn.forEach((item) => {
  item.addEventListener("click", handleDeleteBtn);
});

//여기서부터 모달!

function openModal() {
  const modal = document.querySelector(".purchase_modal");
  modal.showModal();
  //모달에 장바구니 리스트 뿌려주기
  const showCart = document.querySelector(".modal_product_list_wrapper");

  let showCartList = cartList.map((item) => {
    return `
       <img id=${item.id} class="modal_img" src="${item.Image}" alt="${item.name}">
       <h3>${item.name}</h3>
       <p>${item.price}원</p>
      `;
  });
  showCart.innerHTML += showCartList.join("");
}
const purchaseBtn = document.querySelector(".purchase_btn");
purchaseBtn.addEventListener("click", openModal);

//모달 내 구매하기 버튼 추가 -> 클릭시 완료 알림창과 함께 모달 닫기
//모달 내 총 금액 표시
// const modal_purchaseBtn = document.createElement("button");
// modal_purchaseBtn.textContent = "구매하기";
// modal_purchaseBtn.className = "purchase_item";
