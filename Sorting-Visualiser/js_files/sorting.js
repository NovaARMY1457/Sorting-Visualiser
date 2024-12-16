let array = [];
let size = 40;
let array_container_width;
let element_width;
let element_width_max = 20;
let margin_element;

let delay = 500;

const UNSORTED = "deepskyblue";
const SORTED = "mediumspringgreen";
const PARTIALSORTED = "lightgreen";
const COMPARE = "red"; //or traverse
const SELECTED = "blueviolet";
const LEFT = "gold";
const RIGHT = "violet";

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  // console.log('In swap()');

  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
  document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
  document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
  document.querySelector("#newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
  document.querySelector("#newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

// Selecting size slider from DOM
let arraySize = document.querySelector("#arr_sz");

// Event listener to update the array-container on the UI
arraySize.addEventListener("input", function () {
  // console.log(arraySize.value, typeof(arraySize.value));
  size = parseInt(arraySize.value);
  findElementWidth();
  createNewArray();
});

// Selecting speed slider from DOM
let speed_slider = document.querySelector("#speed_input");

// Event listener to update delay time
speed_slider.addEventListener("input", function () {
  // console.log(speed_slider.value, typeof(speed_slider.value));
  delay = 1000 - 100 * parseInt(speed_slider.value);
});

function updateValues() {
  array_container_width = Math.floor(
    document.querySelector("#array-container").offsetWidth
  );
  // element_width_max = Math.floor(array_container_width / 20);
  // console.log("updateValues", screen.width);
  margin_element = 2;
  if (parseInt(screen.width) <= 800) margin_element = 1;
  else if (parseInt(screen.width) <= 1000) margin_element = 1.5;
}

function findElementWidth() {
  element_width = Math.floor(array_container_width / size);
  // element_width -= 2 * margin_element;
  // console.log("findElementWidth", element_width);
  if (element_width > element_width_max) element_width = element_width_max;
}

window.addEventListener("resize", () => {
  if (
    array_container_width !=
    Math.floor(document.querySelector("#array-container").offsetWidth)
  ) {
    updateValues();
    findElementWidth();
    for (let i = 0; i < size; i++) {
      let bar = document.querySelector(`.barNo${i}`);
      bar.style.width = `${element_width}px`;
      bar.style.marginLeft = `${margin_element}px`;
      bar.style.marginRight = `${margin_element}px`;
    }
  }
});

updateValues();
findElementWidth();
createNewArray();

// To create new array input size of array
function createNewArray() {
  // calling helper function to delete old array-container from dom
  deleteChild();

  // creating an array of random numbers
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 320) + 10);
    // array.push(element_width);
  }
  // console.log(array);

  // select the div #array-container element
  const array_container = document.querySelector("#array-container");

  // create multiple element div using loop and adding class 'bar col'
  for (let i = 0; i < size; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i]}px`;
    bar.style.width = `${element_width}px`;
    bar.style.marginLeft = `${margin_element}px`;
    bar.style.marginRight = `${margin_element}px`;
    bar.classList.add("bar");
    bar.classList.add("array-item");
    bar.classList.add(`barNo${i}`);
    array_container.appendChild(bar);
  }
}

// Helper function to delete all the previous array-container so that new can be added
function deleteChild() {
  const bar = document.querySelector("#array-container");
  bar.innerHTML = "";
}

// Selecting newarray button from DOM and adding eventlistener
// const newArray = document.querySelector("#newArray");
document.querySelector("#newArray").addEventListener("click", function () {
  // console.log("From newArray " + arraySize.value);
  // console.log("From newArray " + delay);
  // enableSortingBtn();
  // enableSizeSlider();
  createNewArray();
});
