export default class PanierProduct {
  
  constructor(){
    this.setTemplate();
    this.qteCounter();
    this.votreCommand();
    this.modification();
    
  }

  setTemplate(){
  let ProductsPanier = JSON.parse(localStorage.getItem("ProductsPanier"));
    let panierTemplate = ProductsPanier.products.map(item => {
      return `<div class="panier__product"> 
      <div class="panier__info">
          <div class="panier__img">
              <img src="../images/products/${item.image}" alt="">
          </div>
          <div class="panier__content">
              <h3 class="panier__title">${item.title}</h3>
              <p class="panier__description">${item.categorie}</p>
              <span class="panier__price">${item.new_price.toFixed(2)} $</span> 
          </div>
      </div>
      <div class="panier__confirm">
          <button class="panier__delete" data-id = ${item.id}>supprimer</button>
          <div class="counter">
              <div class="counter__btn counter__btn--mins" data-id = ${item.id}>-</div>
              <div class="counter__nbr">${item.quantity}</div>
              <div class="counter__btn counter__btn--plus" data-id = ${item.id}>+</div>
          </div>
          <span class="panier__price panier__price--qte">${(item.new_price * item.quantity).toFixed(2)} $</span>
      </div>
  </div>`
    });
    document.querySelector(".panier__products").innerHTML = panierTemplate;

  }

  static counterPanierNbr(){
    const panier__nbr = document.querySelector(".header__item--pne"); 

    let products__nbr = JSON.parse(localStorage.getItem("ProductsPanier")) || [];
    console.log(products__nbr);
    
    let nbr_panier = null; 

    if(products__nbr.length == 0) {
      return nbr_panier = 0;
    }
     nbr_panier = products__nbr.products.reduce((a,b) => { 
      return a + b.quantity;
    },0);

    panier__nbr.setAttribute("data-qte",nbr_panier); 
    
  }

  qteCounter(){
    const counter = document.querySelector(".panier__products");

       let count = (e) => { 
        if(e.target.classList.contains("counter__btn--mins")){
          let nbr = e.target.nextElementSibling; 
          
            if(nbr.textContent <2){
                return;
            }
            
            nbr.textContent = +nbr.textContent -1;
    let products__nbr = JSON.parse(localStorage.getItem("ProductsPanier")).products;

          let newProducts = products__nbr.filter(item => e.target.dataset.id == item.id); 
          let restProducts = products__nbr.filter(item => e.target.dataset.id != item.id); 
          
          
          let quantity = parseInt(nbr.textContent);
          let prodQuantity = [{...newProducts[0],quantity}]; // khassna ta homa nmodifiyiw lihom l qte
          
           let objProduct = { products: [...prodQuantity, ...restProducts]} 
           console.log(objProduct);
          localStorage.setItem('ProductsPanier', JSON.stringify(objProduct));
          this.constructor.counterPanierNbr();
          this.votreCommand();
        }
        else if(e.target.classList.contains("counter__btn--plus")){
    let products__nbr = JSON.parse(localStorage.getItem("ProductsPanier")).products;

          let nbr = e.target.previousElementSibling; 
          nbr.textContent = +nbr.textContent +1;
          let newProducts = products__nbr.filter(item => e.target.dataset.id == item.id); 
          let restProducts = products__nbr.filter(item => e.target.dataset.id != item.id); 
          
          
          let quantity = parseInt(nbr.textContent);
          let prodQuantity = [{...newProducts[0],quantity}]; 
          
           let objProduct = { products: [...prodQuantity, ...restProducts]} 
           console.log(objProduct);
          localStorage.setItem('ProductsPanier', JSON.stringify(objProduct));
          this.constructor.counterPanierNbr();
          this.votreCommand();
      }
      }
      counter.addEventListener("click", count); 
    
  } 
  
  votreCommand(){
    const panier__nbr = document.querySelector(".header__item--pne"); 

    let products__nbr = JSON.parse(localStorage.getItem("ProductsPanier"));

    let livraison = parseInt(document.querySelector(".command__priceLivraison").textContent);

    document.querySelector(".command__nbrArticle").textContent = panier__nbr.getAttribute("data-qte"); 

    let priceProducts = document.querySelector(".command__priceArticle").textContent = products__nbr.products.reduce((a,b) => { 
      return a + (b.new_price * b.quantity);
    },0).toFixed(2) + " $";

    document.querySelector(".command__priceTotal").textContent = (livraison + parseInt(priceProducts)).toFixed(2) + " $";
    }

    modification(){
      const confirm = document.querySelector('.panier__products'); 
      confirm.addEventListener('click', (e) => {
        if(e.target.classList.contains('panier__delete')){
          let products__nbr = JSON.parse(localStorage.getItem("ProductsPanier")).products;
          let newProducts = products__nbr.filter(item => e.target.dataset.id != item.id); 
          let objProduct = { products: [...newProducts]}
          localStorage.setItem('ProductsPanier', JSON.stringify(objProduct));

          this.setTemplate();
          this.constructor.counterPanierNbr();
          this.votreCommand();
          
        }
        
      })
      
    }

    
}



