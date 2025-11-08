const restaurants = [
  { name: "Pizza Hut", cuisine: "Italian", rating: 4.2, img: "https://picsum.photos/300/200?1" },
  { name: "Burger King", cuisine: "American", rating: 4.0, img: "https://picsum.photos/300/200?2" },
  { name: "Subway", cuisine: "Healthy", rating: 4.5, img: "https://picsum.photos/300/200?3" },
  { name: "KFC", cuisine: "Fried Chicken", rating: 4.3, img: "https://picsum.photos/300/200?4" },
  { name: "Barbeque Nation", cuisine: "Buffet", rating: 4.6, img: "https://picsum.photos/300/200?5" }
];

const list = document.querySelector(".restaurant-list");

function displayRestaurants(data) {
  list.innerHTML = "";
  data.forEach(r => {
    list.innerHTML += `
      <div class="card">
        <img src="${r.img}">
        <h3>${r.name}</h3>
        <p>${r.cuisine}</p>
        <p>⭐ ${r.rating}</p>
      </div>`;
  });
}

displayRestaurants(restaurants);
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(val) ||
    r.cuisine.toLowerCase().includes(val)
  );
  displayRestaurants(filtered);
});

const sortBtn = document.getElementById("sort-rating");
const topBtn = document.getElementById("filter-top");

sortBtn.addEventListener("click", () => {
  const sorted = [...restaurants].sort((a, b) => b.rating - a.rating);
  displayRestaurants(sorted);
});

topBtn.addEventListener("click", () => {
  const topRated = restaurants.filter(r => r.rating >= 4.5);
  displayRestaurants(topRated);
});
