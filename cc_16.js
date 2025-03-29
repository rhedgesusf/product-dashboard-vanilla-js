/////////////////////////////////////////
// Task 2: Fetch Products with .then() //
/////////////////////////////////////////


function fetchProductsThen() {

  // fetch products from URL destination
  fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => {
      // throw error if error retrieving products
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((products) => {
      // loop through products and log product name
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      handleError(error);
    });
}


/////////////////////////////////////////////
// Task 3: Fetch products with async/await //
/////////////////////////////////////////////

async function fetchProductsAsync() {
  try {
      // fetch products from URL destination
    const response = await fetch("https://www.course-api.com/javascript-store-products");

    // throw error if error retrieving products
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();

    // display products in webpage
    displayProducts(products);

  } catch (error) {
    handleError(error);
  }
}

//////////////////////////////////
// Task 5: Display the Products //
//////////////////////////////////

function displayProducts(products) {

  // get the container HTML element
  const container = document.getElementById("product-container");

  // display first 5 products
  products.slice(0, 5).forEach(product => { 
    // create div container for card
    const card = document.createElement("div");

    // set class
    card.setAttribute("class", "product-card");

    // set the card details
    card.innerHTML = `<div><h3>${product.fields.name}</h3>
      <p>$${product.fields.price}</p>
      <img src='${product.fields.image[0].url}' height='150'></img>
      </div>`;

    // add the card to the container
    container.appendChild(card);
  });
}

////////////////////////////////////
// Task 5: Reusable Error Handler //
////////////////////////////////////

function handleError(error) {
  console.error("An error occured: ", error.message);
}

///////////////////////////////////////
// Task 6: Call Your Fetch Functions //
///////////////////////////////////////

fetchProductsThen();
fetchProductsAsync();