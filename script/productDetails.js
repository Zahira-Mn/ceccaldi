import {products} from "./getProduct.js"; 

//featch 
export function productConfirm() {
  const product = document.querySelector(".singleProduct__flex"); 
  async function getSingleProduct(){
    let allProduct = await products.getData();
    let singleProduct = allProduct.filter(pro => {
      return pro.id == localStorage.getItem("test");
  
    })
  
    let singleTemplate = singleProduct.map(item => {
      return `<div class="singleProduct__img"> 
      <!-- Swiper -->
      <div class="swiper-container gallery-top">
          <div class="swiper-wrapper">
              <div class="swiper-slide cursortest" style="background-image:url(../images/products/${item.image_list[0]})"></div>
              <div class="swiper-slide cursortest" style="background-image:url(../images/products/${item.image_list[0]})"></div>
              <div class="swiper-slide cursortest" style="background-image:url(../images/products/${item.image_list[0]})"></div>
              <div class="swiper-slide cursortest" style="background-image:url(../images/products/${item.image_list[0]})"></div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next swiper-button-white"></div> 
          <div class="swiper-button-prev swiper-button-white"></div>
      </div>
      <div class="swiper-container gallery-thumbs">
          <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-image:url(../images/products/${item.image_list[0]})"></div>
              <div class="swiper-slide" style="background-image:url(../images/products/${item.image_list[0]})"></div>
              <div class="swiper-slide" style="background-image:url(../images/products/${item.image_list[0]})"></div>
              <div class="swiper-slide" style="background-image:url(../images/products/${item.image_list[0]})"></div> 
          </div>
      </div>
  </div>
  <div class="singleProduct__details">
      <div class="alltitle">
          <p class="alltitle__subtitle singleProduct__subname">${item.categorie}</p>
          <h2 class="alltitle__title singleProduct__name">${item.title}</h2>
  
      </div>
      <div>
          <p class="singleProduct__dtl singleProduct__dtl--price">${item.new_price}$<span class="singleProduct__spn">ttc</span>
          </p>
          <p class="singleProduct__dtl singleProduct__dtl--price">longueur totale : <span class="singleProduct__spn">${item.long} cm</span>
          </p>
          <p class="singleProduct__dtl singleProduct__dtl--price">largeur :<span class="singleProduct__spn">${item.long} cm</span>
          </p>
          <p class="singleProduct__dtl singleProduct__dtl--price">poids :<span class="singleProduct__spn">${item.weight} gr</span>
          </p>
          <div class="dropParent">
          <div class="dropDown">
              <h5 class="dropDown__title singleProduct__dtl">
                  lame
              </h5>
              <span class="dropDown__value singleProduct__spn"><span>${item.lame[0]}</span> 
              <div class="dropDown__ul"> 
                  <ul class="dropDown__list"> 
                      <li class="dropDown__item singleProduct__spn">${item.lame[0]}</li>
                      <li class="dropDown__item singleProduct__spn">${item.lame[1]}</li>
                  </ul>
              </div>
              </span> 
              <i class="fas fa-chevron-down dropDown__icon"></i> 
          </div>
          <div class="dropDown">
              <h5 class="dropDown__title singleProduct__dtl"> 
                  manch
              </h5>
              <span class="dropDown__value singleProduct__spn"><span>${item.manche[0 ]}</span>
              
              <div class="dropDown__ul">
                  <ul class="dropDown__list">
                      <li class="dropDown__item singleProduct__spn">${item.manche[0]}</li>
                      <li class="dropDown__item singleProduct__spn">${item.manche[1]}</li>
                      <li class="dropDown__item singleProduct__spn">${item.manche[2]}</li>
                      <li class="dropDown__item singleProduct__spn">${item.manche[3]}</li>
                  </ul>
              </div>
              </span> 
              <i class="fas fa-chevron-down dropDown__icon"></i>
          </div>
          </div>
          <a href="#section" class="singleProduct__dtl singleProduct__dtl--savoir">en savoire plus</a>
          <div class="singleProduct__qte">
              <p class="singleProduct__dtl singleProduct__dtl--price">quantity :</p>
              <div class="counter">
                  <div class="counter__btn counter__btn--mins">-</div>
                  <div class="counter__nbr">${item.quantity}</div>
                  <div class="counter__btn counter__btn--plus">+</div>
              </div>
          </div>
  
          <button class="btn__black singleProduct__btn">
              <span class="btn__txt">ajouter au panier</span>
          </button>
  
      </div>
  </div>` 
    })
    product.innerHTML += singleTemplate; 
    function late(){
      const counter = document.querySelector(".counter");
  let nbr = document.querySelector(".counter .counter__nbr");
  counter.addEventListener("click", count);
  function count(e){
    if(e.target.classList.contains("counter__btn--mins")){ 
        if(nbr.textContent <2){
            return;
        }
        
        nbr.textContent = +nbr.textContent -1;
        
    }
    else if(e.target.classList.contains("counter__btn--plus")){
      nbr.textContent = +nbr.textContent +1;
      
  }
  } 
  
  
  ///////////////// drop Down ////////////////
  const dropParent = document.querySelector(".singleProduct__details"); 
  
    dropParent.addEventListener("click", function(e){
      const dpItem = e.target.querySelector(".dropDown__item");
      const dpIcon = e.target.querySelector(".dropDown__icon");
      if(e.target.classList.contains("dropDown")){
      const dpList = e.target.querySelector(".dropDown__list"); 
        if(!e.target.classList.contains("dropDown--active")){ 
          const active = document.querySelector(".dropDown--active");
         
          if(active){
            active.classList.remove("dropDown--active");
             active.querySelector(".dropDown__list").style.height = "0px";
             const icon = active.querySelector(".dropDown__icon");
             icon.style.transform = "rotate(0deg)"; 
          }
          e.target.classList.add("dropDown--active");
          dpIcon.style.transform = "rotate(-180deg)";
          dpList.style.height = dpList.children[0].getBoundingClientRect().height * dpList.children.length + "px";
        }
        else {
          e.target.classList.remove("dropDown--active"); 
          dpIcon.style.transform = "rotate(0deg)";
          dpList.style.height = "0px"  
        }
      }
      else {
        const active = document.querySelector(".dropDown--active"); 
        if(active){
          active.classList.remove("dropDown--active");
           active.querySelector(".dropDown__list").style.height = "0px"; 
           const icon = active.querySelector(".dropDown__icon");
             icon.style.transform = "rotate(0deg)"; 
        }
      }
      if(e.target.classList.contains("dropDown__item")) { 
        const dpName = e.target.closest(".dropDown").querySelector(".dropDown__value");
        dpName.querySelector("span").textContent = e.target.textContent;
      }
      
    })
  
  
  // Open & Close Pop Up
  
  const popUp = document.querySelector(".popUp");
  const closePopUp = document.querySelector(".popUp__close");
  const openPopUp = document.querySelector(".singleProduct__btn");
  if(!localStorage.getItem("ProductsPanier")){
  
  localStorage.setItem("ProductsPanier",'{"products":[]}'); // = string
  
  }
  openPopUp.addEventListener("click", function(){ 
  
    let productsPanier = JSON.parse(localStorage.getItem("ProductsPanier")); // = object?
  
    console.log(productsPanier.products);
    
    
    let uniqProduct = productsPanier.products.filter(item => {
      
      return item.id == singleProduct[0].id; 
      
    })
  
    let qt = parseInt(document.querySelector(".counter__nbr").textContent);
  
    if(!uniqProduct.length) { 
      singleProduct[0].quantity = qt;
      productsPanier.products.push(...singleProduct);
    }
    else {
      
      uniqProduct[0].quantity = +qt + +uniqProduct[0].quantity; 
      
      console.log(uniqProduct);
      
    }
    
   
  
    localStorage.setItem("ProductsPanier",JSON.stringify(productsPanier)); // = string oook
    popUp.classList.toggle("popUp--active");
    // Add Product
    let popUp__product = allProduct.filter(pro => {
      return pro.id == localStorage.getItem("test");
  
    })
    let qte = document.querySelector(".counter__nbr").textContent;
    document.querySelector(".command__nbrArticle").textContent = qte;
  
    
    let popUpTemplate = popUp__product.map(item => {
      return `<div class="popUp__img">
        <img src="../images/products/${item.image}" alt="">
      </div>
      <div class="popUp__details">
          <div class="alltitle popUp__info">
              <h2 class="alltitle__title popUp__name">${item.title}</h2>
              <p class="alltitle__subtitle popUp__subname">Lame acier carbone, Manche noyer</p>
              <span class="popUp__spn popUp__spn--price">${item.new_price} $</span>
              <span class="popUp__spn popUp__spn--qte">Quantité : ${qte}</span>
          </div>
      </div>`
    });
    document.querySelector(".popUp__product").innerHTML = popUpTemplate;
    document.querySelector(".command__priceArticle").textContent = qte * parseInt(document.querySelector(".popUp__spn--price").textContent); 
    document.querySelector(".command__priceTotal").textContent = 
    (qte * parseInt(document.querySelector(".popUp__spn--price").textContent) + parseInt(document.querySelector(".command__priceLivraison").textContent)).toFixed(2) + "$"; 
    
    
  });
  
  
  closePopUp.addEventListener("click", function(){
  
   popUp.classList.toggle("popUp--active");
  
  });
  
  // Slider + Hover
  
  const image = document.querySelector(".singleProduct");
  const cursor = document.querySelector(".cursor");
  
  image.addEventListener("mousemove", function(e){ 
    let x = e.offsetX + 35; 
    let y = e.offsetY + 90;
    if(e.target.classList.contains("cursortest")){
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.opacity = "1";
    cursor.style.visibility = "visible";
    image.style.cursor = "none"; 
    }
    else
    {
      cursor.style.opacity = "0";
      cursor.style.visibility = "hidden";
      image.style.cursor = "auto"; 
      
    }
  })
  ///  Slider 
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  
    }
    late();
  }
  getSingleProduct();

}


