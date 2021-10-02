//// scroll function
export function scrollTop() {
  if (window.scrollY == 0) {
    document.querySelector(".header").classList.remove("bg");
  }
}

export function scroll() {
  let scroll = window.scrollY;
  let header = document.querySelector(".header");

  window.onscroll = function () {
    if (window.innerWidth < 768) {
      header.style.top = "0%";
      header.classList.add("bg");
    } else {
      if (window.scrollY > scroll) {
        header.style.top = "-50%";
      } else if (window.scrollY < scroll) {
        header.style.top = "0%";
        header.classList.add("bg");
      }
      scroll = window.scrollY;
      if (scroll == 0) {
        header.classList.remove("bg");
      }
    }
  };
}

export function scrollImgs() {
  let imgs = document.querySelectorAll(".move__up");
  window.addEventListener("scroll", function () {
    //Images: imgs showen whene we scroll at its place
    [...imgs].forEach((img) => {
      if (img.parentElement.offsetTop - 400 <= window.pageYOffset) {
        img.classList.add("scroll_img_top");
        if (img.classList.contains("conseil__img-small")) {
          img.style.top = "50%";
          img.style.transform = "translateY(-50%)";
        }
      }
    });
  });
}
// Mobile functions
export function hiddenMobile() {
  let body = document.getElementById("body");

  //Mobile : Header Nav (hide and show content)
  let nav_mbl = document.querySelector(".header__move-navmobile");
  let icons_menu = document.querySelector(".header__menu");
  icons_menu.onclick = function (e) {
    [...icons_menu.children].forEach((icon) => {
      icon.classList.toggle("active");
    });
    if (e.target.parentElement.classList.contains("header__close")) {
      // i change bare by close and i remove !
      nav_mbl.style.left = "-100%";
      body.style.overflow = "visible";
    } else {
      nav_mbl.style.left = "0%";
      body.style.overflow = "hidden";
    }
  };
}

export function sliderMobile() {
  //Mobile : Slider Categories
  let slide_container = document.querySelector(".categories__slider");
  let mouse = false;
  let clicked;
  slide_container.addEventListener("mousedown", elempresed);
  slide_container.addEventListener("mouseup", elemup);
  slide_container.addEventListener("mousemove", elemmove);
  let translateX = 0;

  function elempresed(e) {
    mouse = true;
    clicked = e.screenX;
    console.log("clicked = " + clicked); // add
  }
  let newtrans = translateX;
  function elemmove(e) {
    if (mouse) {
      let widthSldr = parseInt(slide_container.getBoundingClientRect().width);
      let trnsX = parseInt(slide_container.getBoundingClientRect().left);
      if (e.screenX < clicked) {
        newtrans = translateX
          ? translateX + e.screenX - clicked
          : e.screenX - clicked;
        console.log(newtrans);

        newtrans < 100
          ? (slide_container.style.transform = `translateX(${newtrans}px)`)
          : false;
      } else {
        newtrans = translateX
          ? translateX + e.screenX - clicked
          : e.screenX - clicked;
        console.log(newtrans);
        newtrans > -800
          ? (slide_container.style.transform = `translateX(${newtrans}px)`)
          : false;
      }
    }
  }

  function elemup(e) {
    translateX += e.screenX - clicked;
    newtrans = translateX;
    mouse = false;
  }
}
