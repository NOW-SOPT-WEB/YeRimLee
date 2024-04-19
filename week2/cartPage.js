//cart.html만 연동되게

let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

console.log(cartList);

function renderCartList() {
  const showCart = document.querySelector(".wish_list");
  console.log("showCart", showCart);
  let showCartList = cartList.map((item) => {
    return `
        <tr>
        <td><input type="checkbox"></td>
        <td><img class="cartlist_img" src="${item.Image}"></td>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}</td>
        <td>${item.category}</td>
        <td><button>X</button></td>
        </tr>
        `;
  });
  showCart.innerHTML += showCartList.join("");
  // console.log("showCart", showCart);
}

renderCartList();
