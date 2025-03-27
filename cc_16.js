/////////////////////////////////////////
// Task 2: Fetch Products with .then() //
/////////////////////////////////////////

function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      handleError(error);
    });
}

fetchProductsThen();

/////////////////////////////////////////////
// Task 3: Fetch products with async/await //
/////////////////////////////////////////////

async function fetchProductsAsync() {
  try {
    const response = await fetch(
      "https://www.course-api.com/javascript-store-products"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

fetchProductsAsync();

function displayProducts(products) {
  const container = document.getElementById("product-container");
  for (let i = 0; i < 5 && i < products.length; i++) {
    const card = document.createElement("div");
    // set class and id
    card.setAttribute("class", "product-card");
    card.innerHTML = `<div><h3>${products[i].fields.name}</h3>
      <p>$${products[i].fields.price}</p>
      <img src='${products[i].fields.image[0].url}' height='150'></img>
      </div>`;
    container.appendChild(card);
  }
}

function handleError(error) {
  console.error("An error occured: ", error.message);
}
