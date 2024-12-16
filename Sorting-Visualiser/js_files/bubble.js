async function bubbleSortFunc() {
  // console.log('In bubbe()');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    // console.log('In ith loop');
    for (let j = 0; j < ele.length - i - 1; j++) {
      // console.log('In jth loop');
      ele[j].style.background = COMPARE;
      ele[j + 1].style.background = COMPARE;
      await waitforme(delay);
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        // console.log('In if condition');
        await waitforme(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = UNSORTED;
      ele[j + 1].style.background = UNSORTED;
    }
    ele[ele.length - 1 - i].style.background = SORTED;
  }
  ele[0].style.background = SORTED;
}

const bubSortbtn = document.querySelector(".bubbleSort");

bubSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  bubSortbtn.classList.add("active");
  await bubbleSortFunc();
  bubSortbtn.classList.remove("active");
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
