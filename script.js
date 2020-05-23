let currentTab = document.querySelectorAll(".currency");
console.log(currentTab);
let currencyDropDown = document.querySelector(".currency-dropdown");
// console.log(currentTab);
currentTab[1].addEventListener("mouseover", () => {
  console.log("hi");
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
    // arrow.style.top = "27%";
  } else {
    fitlerDropDownFlag = false;
    dropDown.classList.add("hide");
    dropDown.classList.remove("show");
    document
      .querySelector(".search-row .container")
      .classList.remove("visible");
    arrow.style.transform = "translateY(-50%) rotate(0deg)";
    // arrow.style.top = "41%";
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
let navItems = document.querySelectorAll(".nav-item");
console.log(navItems);
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
