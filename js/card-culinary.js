import {
    getCulinary,
    getCulinaryByCategory
} from "./helper.js";

const categoryCulinary = document.querySelector(".card-culinary");
const displayCulinaryCard = (items) => {
  let displayCulinary = items.map(
    (culinary) => `
    <a href = "10-artikel.html?post_id=${culinary.id}&post_category=${culinary.category}""> 
      <div class="rounded overflow-hidden shadow-lgg ani-card bg-cover bg-center" style="background-image: url(${culinary.picLink})">
        <div class="pt-40 dark-linear">
          <div class="px-5 py-4">
            <div class="pb-1 flex items-center">
                <svg class="w-6 h-6" fill="none" stroke="#0fd497" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="ml-2 mt-2 text-xs text-gray-400 mb-2">${culinary.time}</span>
            </div>
            <div class="font-bold text-gray-50 text-mb mb-2">${culinary.title}</div>
            <p class="pb-2 text-gray-400 text-xs">
              ${culinary.description}
            </p>
          </div>
        </div>
      </div>
    </a>
    `
  );
  displayCulinary = displayCulinary.join("");
  if (categoryCulinary) {
    categoryCulinary.innerHTML = displayCulinary;
  }
};

window.onload = myMain;

let restaurant = document.getElementById('restaurant');
let streetFood = document.getElementById('street food');
let coffeeShop = document.getElementById('coffee shop');
let all = document.getElementById('all');

async function initAll() {
    if (all.classList.contains('bg-pink-500')) {
        const article = await getCulinary();
        displayCulinaryCard(article);
    }
}

async function myMain() {
    await initAll();
    document.getElementById("btn").onclick = buton;
}

async function buton(e) {
    if (e.target.tagName == 'BUTTON') {
    //Select which button is click
        if(e.target.id == "all"){ 
            const article = await getCulinary();
            displayCulinaryCard(article);
            all.classList.add("bg-pink-500");
            all.classList.remove("hover:bg-salman-dark");
            streetFood.classList.remove("bg-pink-500");
            coffeeShop.classList.remove("bg-pink-500");
            restaurant.classList.remove("bg-pink-500");
        }
        else if(e.target.id == "restaurant"){ 
            restaurant.classList.add("bg-pink-500");
            restaurant.classList.remove("hover:bg-salman-dark");
            streetFood.classList.remove("bg-pink-500");
            coffeeShop.classList.remove("bg-pink-500");
            all.classList.remove("bg-pink-500");
        }
        else if(e.target.id == "street food"){
            streetFood.classList.add("bg-pink-500");
            streetFood.classList.remove("hover:bg-salman-dark");
            restaurant.classList.remove("bg-pink-500");
            coffeeShop.classList.remove("bg-pink-500");
            all.classList.remove("bg-pink-500");
        }
        else if(e.target.id == "coffee shop"){
            coffeeShop.classList.add("bg-pink-500");
            coffeeShop.classList.remove("hover:bg-salman-dark");
            restaurant.classList.remove("bg-pink-500");
            streetFood.classList.remove("bg-pink-500");
            all.classList.remove("bg-pink-500");
        }
    }
    let select = e.target.id;
    console.log(select);
    if (!all.classList.contains('bg-pink-500')) {
        const article = await getCulinaryByCategory(select);
        displayCulinaryCard(article);
    }
}

// const renderPosts = async () => {
//     // EDIT HERE
//     let posts = await getPosts();
//     posts.map(async (value) => {
//       let pic = await getRandomPic();
//       elDaftarBerita.appendChild(createPostElement(pic, value));
//     });
// };
// const renderCulinaryCard = (items) => {
//   window.addEventListener(
//     "DOMContentLoaded",
//     async function () {
//       const article = await getCulinary();
//       let result = article.filter(obj => {
//         return obj.category === "Restaurant"
//       })
//       console.log(result);
//       displayCulinaryCard(result);
//     }
//   );
// }

// // If active then render by Category
// renderCulinaryCard("category");