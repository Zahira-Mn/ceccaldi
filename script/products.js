import {products} from "./getProduct.js";
export function createProducts() {
  const items = document.querySelector(".items__products");
async function newProduct(){
  let allProduct = await products.getData();
let template = allProduct.map((product)=>{
  return `<div class="atelier__item items__product">
      <a href="productDetails.html" data-id="${product.id}" class="atelier__link items__product-link"> 
          <img src="../images/products/${product.image}" alt="img" class="atelier__img"/>
          <div class="test">
              <h4 class="atelier__title">${product.title}</h4>
          </div>
      </a>
      <p class="atelier__price">${product.new_price}€</p>
  </div>`
});
items.innerHTML = template.join(""); 
}
newProduct();
}

export function goSgProduct() {
const items = document.querySelector(".items__products");
// set id of product il localStorage
items.addEventListener("click", setIdProduct);

function setIdProduct(e){
  if(e.target.classList.contains("items__product-link")){
    localStorage.setItem('test', e.target.dataset.id);
    console.log(e);
  } 
}
} 