import { loading, scrollTop, scrollImgs, scroll, hiddenMobile, sliderMobile} from "./script.js"; 
import { loading2, scrollTop2} from "./boutique.js";
import { createProducts, goSgProduct } from "./products.js";
import { productConfirm} from "./productDetails.js";
import  PanierProduct from "./panier.js";
let path = window.location.pathname;
// Globale functions : works at all pages
hiddenMobile(); 
scrollTop();
scroll();
PanierProduct.counterPanierNbr();
if (path == "/index.html") {
    loading();
    scrollImgs();
    sliderMobile();

}else if(path == "/pages/boutique.html") {
    loading2(); 
    scrollTop2(); 
    
}else if(path == "/pages/histoire.html") {
    loading2(); 
    scrollTop2(); 
    scrollImgs();
    
}else if(path == "/pages/login.html") { 
    loading();
    
}else if(path == "/pages/panier.html") {
    loading();  
    let panier = new PanierProduct();
    console.log(panier);

}else if(path == "/pages/productDetails.html") {
    loading2();  
    scrollImgs();
    productConfirm();
}else if(path == "/pages/products.html") {
    loading2(); 
    scrollTop2(); 
    createProducts();
    goSgProduct();
}else if(path == "/pages/signUp.html") {
    loading();
}


