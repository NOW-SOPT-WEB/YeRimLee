//초기 리스트
const ITEMS_LIST = [
  {
    id: 1,
    Image: "img/1.jpg",
    name: "닥터자르트",
    price: 24000,
    category: "base",
  },
  {
    id: 2,
    Image: "img/2.jpg",
    name: "어뮤즈쿠션",
    price: 34000,
    category: "base",
  },
  {
    id: 3,
    Image: "img/3.jpg",
    name: "에스쁘아파데",
    price: 42000,
    category: "base",
  },
  {
    id: 4,
    Image: "img/4.jpg",
    name: "파우더",
    price: 24000,
    category: "base",
  },
  {
    id: 5,
    Image: "img/5.jpg",
    name: "아르마니파데",
    price: 74000,
    category: "base",
  },
  {
    id: 6,
    Image: "img/6.jpg",
    name: "팩트",
    price: 42000,
    category: "base",
  },
  {
    id: 7,
    Image: "img/7.jpg",
    name: "팟타입",
    price: 20000,
    category: "eye",
  },
  {
    id: 8,
    Image: "img/8.jpg",
    name: "붓펜",
    price: 18000,
    category: "eye",
  },
  {
    id: 9,
    Image: "img/9.jpg",
    name: "아이브로우",
    price: 22000,
    category: "eye",
  },
  {
    id: 10,
    Image: "img/10.jpg",
    name: "아이섀도우",
    price: 38000,
    category: "color",
  },
  {
    id: 11,
    Image: "img/11.jpg",
    name: "립스틱",
    price: 16000,
    category: "color",
  },
  {
    id: 12,
    Image: "img/12.jpg",
    name: "립글로스",
    price: 23000,
    category: "color",
  },
];

//전체회면에 표시

const allItem = function () {
  const itemSection = document.querySelector(".section");
  const itemCards = ITEMS_LIST.map((item) => {
    return `
           <article class="item">
            <img id=${item.id} src="${item.Image}" alt="${item.name}">
            <button class="fa-solid fa-heart" type="button"></button>
            <h3>${item.name}</h3>
            <p>${item.price.toLocaleString()}원</p>
          </article>
        `;
  });
  itemSection.innerHTML = itemCards.join("");
};

function all_item_info() {
  return `
        <tr>
          <td><input type="checkbox"></td>
            <td>
              <div class="item_name">
                <img id="${item.id}" src="${item.Image}" alt="${item.name}">
                <h3>${item.name}</h3>
              </div>
            </td>
            <td>
                <div class="item_price">${(item.price.toLocaleString())}원</div>
            </td>
            <td>
                <div class="item_category"></div>
            </td>
            <td>
                <div class="item_delete"><button>삭제</button></div>
            </td>`;
}
allItem();
//필터링
const filterItems = function (category) {
  const section = document.querySelector(".section");
  const filteredList = ITEMS_LIST.filter((item) => item.category === category);

  const filteredListInfo = filteredList.map((item) => {
    return `  
      <article class="item">  
        <img src="${item.Image}" alt="${item.name}">  
        <button class="fa-solid fa-heart" type="button"></button>  
        <h3>${item.name}</h3>  
        <p>${item.price.toLocaleString()}원</p>  
      </article>  
    `;
  });
  section.innerHTML = filteredListInfo.join("");
};

const navBtnAll = document.querySelector(".nav_all");
const navBtnBase = document.querySelector(".nav_base");
const navBtnEye = document.querySelector(".nav_eye");
const navBtnColor = document.querySelector(".nav_color");

navBtnAll.addEventListener("click", () => {
  filterItems("all");
});
navBtnBase.addEventListener("click", () => {
  filterItems("base");
});

navBtnEye.addEventListener("click", () => {
  filterItems("eye");
});

navBtnColor.addEventListener("click", () => {
  filterItems("color");
});

//여기서부터는 장바구니리스트에 담기!
//상품에 클릭이 인식되면, 카트에 추가
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("click", addCart);
});
//상품에 추가 하는 로직 + 추가하시겠습니까? alert
function addCart(event) {
  const addCheck = confirm("장바구니에 추가하시겠습니까?");
  if (addCheck) {
    const cartPlus = "cart.html";
    location.href = cartPlus; //여기가 이동!
    const targetProduct = event.target.closest(".item");
    const targetProductId = targetProduct.querySelector("img").id;
    const selectedItem = ITEMS_LIST.find(
      (item) => item.id.toString() === targetProductId
    );
    let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    cartList.push(selectedItem);
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }
}
