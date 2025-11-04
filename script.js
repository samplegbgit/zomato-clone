const restaurants = [
  { name: "Pizza Hut", img: "https://picsum.photos/300/200?1" },
  { name: "Burger King", img: "https://picsum.photos/300/200?2" },
  { name: "Subway", img: "https://picsum.photos/300/200?3" },
  { name: "KFC", img: "https://picsum.photos/300/200?4" }
];

const list = document.querySelector(".restaurant-list");

restaurants.forEach(r => {
  list.innerHTML += `
    <div class="card">
      <img src="${r.img}">
      <h3>${r.name}</h3>
    </div>
  `;
});
