//cart.html만 연동되게

let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

function renderCartList() {
  const showCart = document.querySelector(".wish_list");

  let showCartList = cartList.map((item) => {
    return `
        <tr id=${item.id} class="detail_cart_list">
        <td><input type="checkbox" class="checkbox"></td>
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
  location.href = location.href;
};

deleteBtn.forEach((item) => {
  item.addEventListener("click", handleDeleteBtn);
});





//선택된 상품 
const checkboxAll = document.querySelector('.all')
const checkboxs = document.querySelectorAll('.checkbox');

//체크박스 맨 위에거 누르면 -> 전체선택
checkboxAll.addEventListener('click', ()=>{
  checkboxs.forEach(checkbox => {
      checkbox.checked = checkboxAll.checked;
  });
});

//구매하기를 위한 변수 선언, 구매할 상품 'checkedProduct'
const buyBtn = document.querySelector('.purchase_btn');
// const modal = document.querySelector('.modal');
const productModal = document.querySelector('.modal-product');
let checkedProduct = [];
let totalPrice = 0;


//체크박스 전체 선택시 구매할 상품 선택 
checkboxAll.addEventListener('change', (event) => {
  if (event.target.checked){
      checkedProduct = cartList.slice();

  } else {
      checkedProduct = [];
      totalPrice = 0;
  };
});


//체크박스 개별 선택시 구매할 상품 선택 
checkboxs.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
          checkedProduct.push(cartList[index]);
         
      } else {
          const removedIndex = checkedProduct.indexOf(cartList[index]);
          if (removedIndex !== -1) {
             
              checkedProduct.splice(removedIndex, 1);
          }
      }
  });
});


//여기서부터 모달!

function openModal() {
  const modal = document.querySelector(".purchase_modal");
  modal.showModal();
  //모달에 장바구니 리스트 뿌려주기
  const showCart = document.querySelector(".modal_product_list_wrapper");

  let showCartList = checkedProduct.map((item) => {
    return `
       <img id=${item.id} class="modal_img" src="${item.Image}" alt="${item.name
      }">
       <p>${item.name}</p>
       <p>${item.price.toLocaleString()}원</p>
      `;
  });

  //여기서 총 금액 추가
  let totalPrice = 0;

  // let modalCartList = JSON.parse(localStorage.getItem("cartList")) || [];
  let modalCartList = checkedProduct
  modalCartList.forEach((item) => {
    totalPrice += item.price;
  });

  showCart.innerHTML += showCartList.join("");
  // 모달에 구매금액 추가하기
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

//구매하기 버튼 클릭 시 (구매완료 모달을 띄운 뒤, 해당 상품은 삭제후) 장바구니 페이지로 돌아가기
const checkoutModal = document.querySelector(".purchase_button");
checkoutModal.addEventListener("click", () => {
  cartList = cartList.filter(product => !checkedProduct.includes(product));
  localStorage.setItem('cartList', JSON.stringify(cartList));
  alert('구매가 완료되었습니다.');
  location.href = location.href;
})



