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

    return targetProductId !== item.id.toString(); //toString
  });

  localStorage.setItem("cartList", JSON.stringify(filterCart));
  location.href = location.reload();
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
       <img id=${item.id} class="modal_img" src="${item.Image}" alt="${item.name
      }">
       <p>${item.name}</p>
       <p>${item.price.toLocaleString()}원</p>
      `;
  });
  //여기서 총 금액 추가
  let totalPrice = 0;

  let modalCartList = JSON.parse(localStorage.getItem("cartList")) || [];
  modalCartList.forEach((item) => {
    totalPrice += item.price;
  });

  showCart.innerHTML += showCartList.join("");
  //모달에 구매금액 추가하기
  const modal_totalPrice = document.createElement("p");
  modal_totalPrice.textContent = "구매금액:" + totalPrice.toLocaleString();
  const modal_box = document.querySelector(".modal_product_list_wrapper");
  modal_box.appendChild(modal_totalPrice);
}

const purchaseBtn = document.querySelector(".purchase_btn");
purchaseBtn.addEventListener("click", openModal);

//모달에 구매하기 버튼 추가하기
const modal_purchaseBtn = document.createElement("button");
modal_purchaseBtn.className = "purchase_button";
modal_purchaseBtn.textContent = "구매하기";
const modal_page = document.querySelector(".purchase_modal");
modal_page.appendChild(modal_purchaseBtn);

//구매하기 버튼 클릭 시 장바구니 페이지로 돌아가기
const checkoutModal = document.querySelector(".purchase_button");
const modalBtnClickHandler = () => {
  alert("구매가 완료되었습니다.");
  window.location.href = "cart.html";
};
checkoutModal.addEventListener("click", modalBtnClickHandler);
