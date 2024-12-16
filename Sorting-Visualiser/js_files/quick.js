async function partitionFunc(ele, l, r) {
  // console.log('In partitionFunc()');
  let i = l - 1;
  // color pivot element
  ele[r].style.background = SELECTED;
  for (let j = l; j <= r - 1; j++) {
    // console.log('In partitionFunc for j');
    // color current element
    ele[j].style.background = COMPARE;
    // pauseChamp
    await waitforme(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      // console.log('In partitionFunc for j if');
      i++;
      swap(ele[i], ele[j]);
      // color
      ele[i].style.background = LEFT;
      if (i != j) ele[j].style.background = RIGHT;
      // pauseChamp
      await waitforme(delay);
    } else {
      // color if not less than pivot
      ele[j].style.background = RIGHT;
    }
  }
  i++;
  // pauseChamp
  await waitforme(delay);
  swap(ele[i], ele[r]); // pivot height one
  // console.log(`i = ${i}`, typeof(i));
  // color
  ele[r].style.background = RIGHT;
  ele[i].style.background = SORTED;

  // pauseChamp
  await waitforme(delay);

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "mediumspringgreen")
      ele[k].style.background = UNSORTED;
  }

  return i;
}

async function quickSortFunc(ele, l, r) {
  // console.log('In quickSortFunc()', `l=${l} r=${r}`, typeof(l), typeof(r));
  if (l < r) {
    let pivot_index = await partitionFunc(ele, l, r);
    await quickSortFunc(ele, l, pivot_index - 1);
    await quickSortFunc(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = SORTED;
      ele[l].style.background = SORTED;
    }
  }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = ele.length - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  quickSortbtn.classList.add("active");
  await quickSortFunc(ele, l, r);
  quickSortbtn.classList.remove("active");
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
