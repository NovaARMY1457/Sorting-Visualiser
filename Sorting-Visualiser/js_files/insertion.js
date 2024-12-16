async function insertionSortFunc() {
  // console.log('In insertionSortFunc()');
  const ele = document.querySelectorAll(".bar");
  // color
  ele[0].style.background = SORTED;
  for (let i = 1; i < ele.length; i++) {
    // console.log('In ith loop');
    let j = i - 1;
    let key = ele[i].style.height;
    // color
    ele[i].style.background = SELECTED;

    await waitforme(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      // console.log('In while loop');
      // color
      ele[j].style.background = COMPARE;
      ele[j + 1].style.background = COMPARE;
      await waitforme(delay);

      ele[j + 1].style.height = ele[j].style.height;
      j--;

      // ele[j+1].style.background = SORTED;
      await waitforme(delay);

      // color
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = SORTED;
      }
    }
    ele[j + 1].style.height = key;
    ele[j + 1].style.background = SORTED;
    await waitforme(delay);
    // color
    // ele[i].style.background = 'mediumspringgreen';
  }
}

const inSortbtn = document.querySelector(".insertionSort");

inSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  inSortbtn.classList.add("active");
  await insertionSortFunc();
  inSortbtn.classList.remove("active");
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
