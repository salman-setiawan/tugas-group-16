//FETCH ARTICLE ID DARI CARD-CARD.JS
import { getTourism, getTourismById, getCulinaryById, getLodgingById } from "./helper.js";

const params = new URLSearchParams(window.location.search);

const elArticleContent = document.querySelector(".article-content");
const elInformation = document.querySelector(".information");
const elTitleSection = document.querySelector(".title-page");

console.log("Connect");

const createPostElement = (post) => {
  const paraOne = elArticleContent.querySelector(".para-1");
  const paraTwo = elArticleContent.querySelector(".para-2");
  const paraThree = elArticleContent.querySelector(".para-3");

  const addressContent = elInformation.querySelector(".address");
  const timeContent = elInformation.querySelector(".time");
  const contactContent = elInformation.querySelector(".contact");

  const titleContent = elTitleSection.querySelector(".title");
  const categoryContent = elTitleSection.querySelector(".category");
  const mainPicContent = elTitleSection.querySelector(".article-pic");

  function capitalize(s)
  {
    return s[0].toUpperCase() + s.slice(1);
  }
  let category = capitalize(post.category);
  categoryContent.innerHTML = category;
  titleContent.innerHTML = post.title;
  document.getElementById("image-main").style.backgroundImage = "url("+ post.picLink +")";
  //categoryContent.classList.add("invisible");

  paraOne.innerHTML = post.paragraph_1;
  paraTwo.innerHTML = post.paragraph_2;
  paraThree.innerHTML = post.paragraph_3;

  addressContent.innerHTML = post.address;
  timeContent.innerHTML = post.time;
  contactContent.innerHTML = post.contact;

  // EDIT HERE
  // elCardTitle.innerHTML = post.title;
  // elCardImg.setAttribute('src', thumbnail);
  // elCardBtn.setAttribute('href', '/post.html?post_id=' + post.id);
};

const renderPosts = async () => {
  // let article = await getTourism();
  let category = params.get("post_category");
  console.log(category)
  let id = params.get("post_id");

  if(category === "tourism"){
    let post = await getTourismById(id);
    createPostElement(post);
  }
  else if(category === "hotels" || category === "resorts" || category === "villas"){
    console.log("Masuk");
    let post = await getLodgingById(id);
    createPostElement(post);
  }
  else if(category === "street-food" || category === "restaurant" || category === "coffee shop"){
    let post = await getCulinaryById(id);
    createPostElement(post);
  }
};

renderPosts();