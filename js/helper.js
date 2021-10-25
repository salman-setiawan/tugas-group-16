//TOURISM
export const getTourism = async() => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.tourism;
    let result = article.filter(obj => {
      return obj.category === "tourism"
    })
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getTourismById = async(post_id) => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.tourism[post_id];
    return article;
    } catch (err) {
      console.log(err);
    }
  };

//CULINARY
  
export const getCulinary = async() => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.culinary;
    return article;
  } catch (err) {
    console.log(err);
  }
};

export const getCulinaryByCategory = async(category) => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.culinary;
    let result = article.filter(obj => {
      return obj.category == category;
    })
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getCulinaryById = async(post_id) => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.culinary[post_id];
    return article;
  } catch (err) {
    console.log(err);
  }
};

//LODGING

export const getLodging = async() => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.lodging;
    return article;
  } catch (err) {
    console.log(err);
  }
};

export const getLodgingById = async(post_id) => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.lodging[post_id];
    return article;
  } catch (err) {
    console.log(err);
  }
};

export const getLodgingByCategory = async(category) => {
  try {
    const results = await fetch("/json/article.json");
    const data = await results.json();
    const article = data.lodging;
    let result = article.filter(obj => {
      return obj.category == category;
    })
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};