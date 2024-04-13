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

const itemSection = document.querySelector(".section");

const allItem = function () {
  const itemCards = ITEMS_LIST.map((item) => {
    return `
        <article class="item">
            <img src="${item.Image}" alt="${item.name}">
            <button class="fa-solid fa-heart" type="button"></button>
            <h3>${item.name}</h3>
            <p>${item.price}원</p>
        </article>
        `;
  });
  itemSection.innerHTML = itemCards.join("");
};

allItem();
