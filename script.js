// Property Details Page
if (window.screen.width < 420) {
  document.querySelector(".search-row").classList.add("mob");
} else {
  document.querySelector(".search-row").classList.remove("mob");
}
let seeAllBtn = document.querySelector(".see-all-btn");
let seeAllCloseBtn = document.querySelector(".carousel-div .close");
seeAllBtn.addEventListener("click", () => {
  document.querySelector(".carousel-div").classList.add("show");
  document.documentElement.style.overflow = "hidden";
});
seeAllCloseBtn.addEventListener("click", () => {
  document.querySelector(".carousel-div").classList.remove("show");
  document.documentElement.style.overflowY = "scroll";
});
let innerMenu = $(".inner-menu-wrapper");
let innerMenuPosition = innerMenu.position().top;
let isInnerMenuSticky = false;
let currentScroll = window.scrollY;
if (currentScroll == innerMenuPosition || currentScroll > innerMenuPosition) {
  if (!isInnerMenuSticky) {
    innerMenu.addClass("sticky");
    isInnerMenuSticky = true;
  }
}
window.onscroll = function (e) {
  currentScroll = window.scrollY;
  if (currentScroll == innerMenuPosition || currentScroll > innerMenuPosition) {
    if (!isInnerMenuSticky) {
      innerMenu.addClass("sticky");
      isInnerMenuSticky = true;
    }
  } else {
    if (isInnerMenuSticky) {
      innerMenu.removeClass("sticky");
      isInnerMenuSticky = false;
    }
  }
};

let innerMenu1 = $(".search-row.mob");
let innerMenuPosition1 = innerMenu1.position().top;
let isInnerMenuSticky1 = false;
let currentScroll1 = window.scrollY;
if (
  currentScroll1 == innerMenuPosition1 ||
  currentScroll1 > innerMenuPosition1
) {
  if (!isInnerMenuSticky1) {
    innerMenu1.addClass("sticky");
    isInnerMenuSticky1 = true;
  }
}
window.onscroll = function (e) {
  console.log(currentScroll1);
  currentScroll1 = window.scrollY;
  if (
    currentScroll1 == innerMenuPosition1 ||
    currentScroll1 > innerMenuPosition1
  ) {
    if (!isInnerMenuSticky1) {
      innerMenu1.addClass("sticky");
      isInnerMenuSticky1 = true;
    }
  } else {
    if (isInnerMenuSticky1) {
      innerMenu1.removeClass("sticky");
      isInnerMenuSticky1 = false;
    }
  }
};
let showMoreBtn1 = document.querySelector("#select-room-div .show-more-less");
let showMoreBtn1Flag = false;
showMoreBtn1.addEventListener("click", () => {
  if (!showMoreBtn1Flag) {
    $(".part-2").slideDown("fast");
    $("#select-room-div .show-more-less").html(
      '<span class="arrow"></span>Show less'
    );
    $("#select-room-div .show-more-less .arrow").css(
      "transform",
      "rotate(180deg)"
    );
    showMoreBtn1Flag = true;
  } else {
    $(".part-2").slideUp("slow");
    $("#select-room-div .show-more-less").html(
      '<span class="arrow"></span>Show more'
    );
    showMoreBtn1Flag = false;
  }
});
let shareBtn = document.querySelector(".share-btn");
let shareBtnFlag = false;
shareBtn.addEventListener("click", () => {
  if (!shareBtnFlag) {
    document.querySelector(".share-dropdown").classList.add("show");
    shareBtnFlag = true;
  } else {
    document.querySelector(".share-dropdown").classList.remove("show");
    shareBtnFlag = false;
  }
});
let shareDropDownElements = document.querySelectorAll(".share-dropdown li");
shareDropDownElements.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".share-dropdown").classList.remove("show");
    shareBtnFlag = false;
  });
});
var smallDes = document.querySelectorAll(".room-item-small");
var bigDes = document.querySelectorAll(".room-item-big .up");
var showDesFlag = false;
let desId, smallClass, bigClass;
smallDes.forEach((smallD) => {
  smallD.addEventListener("click", () => {
    desId = smallD.classList[2];
    smallClass = ".small-" + desId;
    bigClass = ".big-" + desId;
    if (!showDesFlag) {
      document.querySelector(smallClass).classList.add("hide");
      document.querySelector(bigClass).classList.remove("hide");
      document.querySelector(".mobile-booking-div").classList.remove("hide");
      document.querySelector(".mobile-booking-div").classList.add("show");
      showDesFlag = true;
    } else {
      document.querySelector(smallClass).classList.remove("hide");
      document.querySelector(bigClass).classList.add("hide");
      document.querySelector(".mobile-booking-div").classList.add("hide");
      document.querySelector(".mobile-booking-div").classList.remove("show");
      showDesFlag = false;
    }
  });
});
bigDes.forEach((bigD) => {
  // console.log(bigD.classList);
  bigD.addEventListener("click", () => {
    if (showDesFlag) {
      document.querySelector(smallClass).classList.remove("hide");
      document.querySelector(bigClass).classList.add("hide");
      document.querySelector(".mobile-booking-div").classList.add("hide");
      document.querySelector(".mobile-booking-div").classList.remove("show");
      showDesFlag = false;
    }
  });
});
// smallDes.addEventListener("click", () => {
//   if (!showDesFlag) {
//     document.querySelector(".room-item-small").classList.add("hide");
//     document.querySelector(".room-item-big").classList.remove("hide");
//     document.querySelector(".mobile-booking-div").classList.remove("hide");
//     document.querySelector(".mobile-booking-div").classList.add("show");
//     showDesFlag = true;
//   } else {
//     document.querySelector(".room-item-small").classList.remove("hide");
//     document.querySelector(".room-item-big").classList.add("hide");
//     document.querySelector(".mobile-booking-div").classList.add("hide");
//     document.querySelector(".mobile-booking-div").classList.remove("show");
//     showDesFlag = false;
//   }
// });
// console.log(document.querySelectorAll(".share-dropdown li"));
// document
//   .querySelectorAll(".share-dropdown li")
//   .addEventListener("click", () => {
//     document.querySelector(".share-dropdown").classList.remove("show");
//     shareBtnFlag = false;
//   });
let hamburgerMenuFlag = false;
document.querySelector("#menu").addEventListener("click", () => {
  if (!hamburgerMenuFlag) {
    document.querySelector(".mobile-menu").classList.remove("hide");
    document.querySelector(".mobile-menu").classList.add("show-block");
    document.querySelector("body").classList.add("no-overflow");
    hamburgerMenuFlag = true;
  } else {
    document.querySelector(".mobile-menu").classList.add("hide");
    document.querySelector(".mobile-menu").classList.remove("show-block");
    document.querySelector("body").classList.remove("no-overflow");
    hamburgerMenuFlag = false;
  }
});
document.querySelector(".mobile-menu #close").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.add("hide");
  document.querySelector(".mobile-menu").classList.remove("show-block");
  document.querySelector("body").classList.remove("no-overflow");
  hamburgerMenuFlag = false;
});
let currentTab = document.querySelectorAll(".currency");
let currencyDropDown = document.querySelector(".currency-dropdown");
// console.log(currentTab);
currentTab[1].addEventListener("mouseover", () => {
  currencyDropDown.classList.remove("hide");
  currencyDropDown.classList.add("show");
  document.querySelector(".main-header .container").classList.add("visible");
});
currentTab[1].addEventListener("mouseleave", () => {
  currencyDropDown.classList.add("hide");
  currencyDropDown.classList.remove("show");
  document.querySelector(".main-header .container").classList.remove("visible");
});
currencyDropDown.addEventListener("click", () => {
  currencyDropDown.classList.add("hide");
  currencyDropDown.classList.remove("show");
  document.querySelector(".main-header .container").classList.remove("visible");
});

let filterBtn = document.querySelector(".filters-btn");
let arrow = document.querySelector(".filters-btn-arrow");
let saveBtn = document.querySelector(".toggle-filter-options .btn-row .save");
let closeBtn = document.querySelector(".toggle-filter-options .btn-row .close");
let dropDown = document.querySelector(".toggle-filter-options");
let fitlerDropDownFlag = false;
filterBtn.addEventListener("click", () => {
  if (!fitlerDropDownFlag) {
    fitlerDropDownFlag = true;
    dropDown.classList.remove("hide");
    dropDown.classList.add("show");
    document.querySelector(".search-row .container").classList.add("visible");
    arrow.style.transform = "translateY(-50%) rotate(180deg)";
  } else {
    fitlerDropDownFlag = false;
    dropDown.classList.add("hide");
    dropDown.classList.remove("show");
    document
      .querySelector(".search-row .container")
      .classList.remove("visible");
    arrow.style.transform = "translateY(-50%) rotate(0deg)";
  }
});
saveBtn.addEventListener("click", () => {
  fitlerDropDownFlag = false;
  dropDown.classList.add("hide");
  dropDown.classList.remove("show");
  document.querySelector(".search-row .container").classList.remove("visible");
  arrow.style.transform = "translateY(-50%) rotate(0deg)";
  //   arrow.style.top = "41%";
});
closeBtn.addEventListener("click", () => {
  fitlerDropDownFlag = false;
  dropDown.classList.add("hide");
  dropDown.classList.remove("show");
  document.querySelector(".search-row .container").classList.remove("visible");
  arrow.style.transform = "translateY(-50%) rotate(0deg)";
  //   arrow.style.top = "41%";
});
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 1000],
    slide: function (event, ui) {
      $("#min").html("$" + ui.values[0]);
      $("#max").html("$" + ui.values[1]);
      //   console.log("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});
$(function () {
  $("#slider-range-mobile").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 1000],
    slide: function (event, ui) {
      $("#min-mobile").html("$" + ui.values[0]);
      $("#max-mobile").html("$" + ui.values[1]);
      //   console.log("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range-mobile").slider("values", 0) +
      " - $" +
      $("#slider-range-mobile").slider("values", 1)
  );
});
let showMobileMap = false;
document.querySelector("#show-map-btn").addEventListener("click", () => {
  if (showMobileFilters) {
    showMobileFilters = false;
    document.querySelector(".main-data").classList.remove("hide");
    document.querySelector(".filters-mobile").classList.remove("show-block");
    document.querySelector(".mobile-footer").classList.remove("hide");
  }
  if (!showMobileMap) {
    showMobileMap = true;
    document.querySelector(".main-data").classList.add("hide");
    document.querySelector(".map-main").classList.add("show-block");
    document.querySelector("#show-map-btn").classList.add("active");
    document.querySelector("#show-map-btn").innerHTML = "Hide map";
  } else {
    showMobileMap = false;
    document.querySelector(".main-data").classList.remove("hide");
    document.querySelector(".map-main").classList.remove("show-block");
    document.querySelector("#show-map-btn").classList.remove("active");
    document.querySelector("#show-map-btn").innerHTML = "Show map";
  }
});
let showMobileFilters = false;
document.querySelector("#show-filters-btn").addEventListener("click", () => {
  if (showMobileMap) {
    document.querySelector(".main-data").classList.remove("hide");
    document.querySelector(".map-main").classList.remove("show-block");
    document.querySelector("#show-map-btn").classList.remove("active");
    document.querySelector("#show-map-btn").innerHTML = "Show map";
  }
  if (!showMobileFilters) {
    showMobileFilters = true;
    document.querySelector(".main-data").classList.add("hide");
    document.querySelector(".filters-mobile").classList.add("show-block");
    document.querySelector(".mobile-footer").classList.add("hide");
    // document.querySelector("#show-filters-btn").classList.add("active");
    // document.querySelector("#show-filters-btn").innerHTML = "Hide Filters";
  } else {
    showMobileFilters = false;
    document.querySelector(".main-data").classList.remove("hide");
    document.querySelector(".filters-mobile").classList.remove("show-block");
    document.querySelector(".mobile-footer").classList.remove("hide");
    // document.querySelector("#show-filters-btn").classList.remove("active");
    // document.querySelector("#show-filters-btn").innerHTML = "Filters";
  }
});
document.querySelector(".save-mobile").addEventListener("click", () => {
  showMobileFilters = false;
  document.querySelector(".main-data").classList.remove("hide");
  document.querySelector(".filters-mobile").classList.remove("show-block");
  document.querySelector(".mobile-footer").classList.remove("hide");
});
document.querySelector(".close-mobile").addEventListener("click", () => {
  showMobileFilters = false;
  document.querySelector(".main-data").classList.remove("hide");
  document.querySelector(".filters-mobile").classList.remove("show-block");
  document.querySelector(".mobile-footer").classList.remove("hide");
});
let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("hide");
    document.querySelector(".mobile-menu").classList.remove("show-block");
    document.querySelector("body").classList.remove("no-overflow");
    hamburgerMenuFlag = false;
  });
});
document.querySelector(".nav-item").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.add("hide");
  document.querySelector(".mobile-menu").classList.remove("show-block");
  document.querySelector("body").classList.remove("no-overflow");
  hamburgerMenuFlag = false;
});

document.querySelector(".bottom-arrow-mobile").addEventListener("click", () => {
  document
    .querySelector(".currency-dropdown-mobile-container")
    .classList.remove("hide");
  document
    .querySelector(".currency-dropdown-mobile-container")
    .classList.add("show-block");
});
document
  .querySelector(".currency-dropdown-mobile-container #close")
  .addEventListener("click", () => {
    document
      .querySelector(".currency-dropdown-mobile-container")
      .classList.add("hide");
    document
      .querySelector(".currency-dropdown-mobile-container")
      .classList.remove("show-block");
  });
