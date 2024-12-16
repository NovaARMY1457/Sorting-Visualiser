async function selectionSortFunc() {
  // console.log('In selectionSortFunc()');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    // console.log('In ith loop');
    let min_index = i;
    // Change color of the position to swap with the next min
    ele[min_index].style.background = SELECTED;
    for (let j = i + 1; j < ele.length; j++) {
      // console.log('In jth loop');
      // Change color for the current comparision (in consideration for min_index)
      ele[j].style.background = COMPARE;

      await waitforme(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        // console.log('In if condition height comparision');
        // if(min_index !== i){
        // new min_index is found so change prev min_index color back to normal
        ele[min_index].style.background = UNSORTED;
        // }
        min_index = j;
        ele[min_index].style.background = SELECTED;
      } else {
        // if the currnent comparision is more than min_index change is back to normal
        ele[j].style.background = UNSORTED;
      }
    }
    await waitforme(delay);
    if (min_index !== i) {
      ele[i].style.background = COMPARE;
      ele[min_index].style.background = COMPARE;
      await waitforme(delay);

      swap(ele[min_index], ele[i]);
      await waitforme(delay);
    }
    // swap(ele[min_index], ele[i]);
    // change the min element index back to normal as it is swapped
    ele[min_index].style.background = UNSORTED;
    // change the sorted elements color to mediumspringgreen
    ele[i].style.background = SORTED;
  }
}

const selectionSortbtn = document.querySelector(".selectionSort");

selectionSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  selectionSortbtn.classList.add("active");
  await selectionSortFunc();
  selectionSortbtn.classList.remove("active");
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
