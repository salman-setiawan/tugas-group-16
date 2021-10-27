import {
  getTourism,
} from "./helper.js";

const categoryTourism = document.querySelector(".card-tourism");
const displayTourismCard = (items) => {
  let displayTourism = items.map(
    (tourism) => `
    <a href = "10-artikel.html?post_id=${tourism.id}&post_category=${tourism.category}"> 
        <div class="rounded overflow-hidden shadow-lgg ani-card bg-cover bg-center" style="background-image: url(${tourism.picLink})" >
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

const cardContainer = document.getElementById("card-container")
const searchResult = document.getElementById("search-input")
const buttonSearch = document.getElementById("button-search")
const article = await getTourism();

buttonSearch.addEventListener("click", Search)
searchResult.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    Search(article);
  }
});

function Search(article){
  cardContainer.innerHTML=""
  const searchResultValue = searchResult.value
  const emptyWord = document.getElementById("card-container"); 
  const pattern = new RegExp(`${searchResultValue}` , "i")
  const result = article.filter(card => card.title.match(pattern))
  
  if(result.length == 0){
    emptyWord.innerHTML = "Search Not Found"
  }
  result.forEach(card=>{
      const insertCard = `

      <a href = "10-artikel.html?post_id=${card.id}&post_category=${card.category}""> 
        <div class="rounded overflow-hidden shadow-lgg ani-card bg-cover bg-center" style="background-image: url(${card.picLink})">
          <div class="pt-40 dark-linear">
            <div class="px-5 py-4">
              <div class="pb-1 flex items-center">
                  <svg class="w-6 h-6" fill="none" stroke="#0fd497" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="ml-2 mt-2 text-xs text-gray-400 mb-2">${card.time}</span>
              </div>
              <div class="font-bold text-gray-50 text-mb mb-2">${card.title}</div>
              <p class="pb-2 text-gray-400 text-xs">
                ${card.description}
              </p>
            </div>
          </div>
        </div>
      </a>
    `
    cardContainer.insertAdjacentHTML("beforeend", insertCard)
  })
}