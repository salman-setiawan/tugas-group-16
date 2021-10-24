import {
  getTourism,
} from "./helper.js";

const categoryTourism = document.querySelector(".card-tourism");
const displayTourismCard = (items) => {
  let displayTourism = items.map(
    (tourism) => `
    <a href = "10-artikel.html?post_id=${tourism.id}&post_category=${tourism.category}"> 
        <div class="rounded overflow-hidden shadow-lgg ani-card bg-cover" style="background-image: url(${tourism.picLink})" >
            <div class="pt-40 dark-linear">
                <div class="px-5 py-4">
                    <div class="pb-1 flex items-center">
                        <svg class="w-6 h-6" fill="none" stroke="#0fd497" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="ml-2 mt-2 text-xs text-gray-400 mb-2">${tourism.time}</span>
                    </div>
                    <div class="font-bold text-gray-50 text-mb mb-2">${tourism.title}</div>
                    <p class="pb-2 text-gray-400 text-xs">${tourism.description}</p>
                </div>
            </div>
        </div>
    </a>
    `
  );
  displayTourism = displayTourism.join("");
  if (categoryTourism) {
    categoryTourism.innerHTML = displayTourism;
  }
};

window.addEventListener(
  "DOMContentLoaded",
  async function () {
    const article = await getTourism();
    console.log(article);
    displayTourismCard(article);
  }
);

// CULINARY
























// const renderPosts = async () => {
//     let article = await getTourism();
//     let data = article.tourism;
//     for(let i = 0; i < 3; i++){
//         // categoryTourism.appendChild(displayTourismCard(article[i]));
//         displayTourismCard(data[i]);
//     }
// };

// renderPosts();
