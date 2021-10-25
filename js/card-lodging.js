import {
  getLodging,
  getLodgingByCategory
} from "./helper.js";

const categoryLodging = document.querySelector(".card-lodging");
const displayLodgingCard = (items) => {
let displayLodging = items.map(
  (lodging) => `
  <a href = "10-artikel.html?post_id=${lodging.id}&post_category=${lodging.category}""> 
    <div class="rounded overflow-hidden shadow-lgg ani-card bg-cover bg-center" style="background-image: url(${lodging.picLink})">
      <div class="pt-40 dark-linear">
          <div class="px-5 py-4">
              <div class="pb-1 flex items-center">
                  <svg class="w-5 h-5" fill="#0fd497" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="w-5 h-5" fill="#0fd497" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="w-5 h-5" fill="#0fd497" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="w-5 h-5" fill="#0fd497" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg class="w-5 h-5" fill="#6B7280" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div class="font-bold text-gray-50 text-mb mb-2">${lodging.title}</div>
              <p class="pb-2 text-gray-400 text-xs">
                ${lodging.description}
              </p>
          </div>
      </div>
    </div>
  </a>
  `
);
displayLodging = displayLodging.join("");
  if (categoryLodging) {
    categoryLodging.innerHTML = displayLodging;
  }
};

window.onload = myMain;

let villas = document.getElementById('villas');
let hotels = document.getElementById('hotels');
let resorts = document.getElementById('resorts');
let all = document.getElementById('all');

async function initAll() {
  if (all.classList.contains('bg-pink-500')) {
      const article = await getLodging();
      displayLodgingCard(article);
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
          const article = await getLodging();
          displayLodgingCard(article);
          all.classList.add("bg-pink-500");
          all.classList.remove("hover:bg-salman-dark");
          villas.classList.remove("bg-pink-500");
          resorts.classList.remove("bg-pink-500");
          hotels.classList.remove("bg-pink-500");
      }
      else if(e.target.id == "hotels"){ 
          hotels.classList.add("bg-pink-500");
          hotels.classList.remove("hover:bg-salman-dark");
          villas.classList.remove("bg-pink-500");
          resorts.classList.remove("bg-pink-500");
          all.classList.remove("bg-pink-500");
      }
      else if(e.target.id == "villas"){
          villas.classList.add("bg-pink-500");
          villas.classList.remove("hover:bg-salman-dark");
          hotels.classList.remove("bg-pink-500");
          resorts.classList.remove("bg-pink-500");
          all.classList.remove("bg-pink-500");
      }
      else if(e.target.id == "resorts"){
          resorts.classList.add("bg-pink-500");
          resorts.classList.remove("hover:bg-salman-dark");
          hotels.classList.remove("bg-pink-500");
          villas.classList.remove("bg-pink-500");
          all.classList.remove("bg-pink-500");
      }
  }
  let select = e.target.id;
  console.log(select);
  if (!all.classList.contains('bg-pink-500')) {
      const article = await getLodgingByCategory(select);
      displayLodgingCard(article);
  }
}