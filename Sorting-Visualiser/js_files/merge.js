// let delay = 30;
async function mergeTwoSortedArrayFunc(ele, low, mid, high) {
  // console.log('In mergeTwoSortedArrayFunc()');
  // console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  // console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);
  await waitforme(delay);
  for (let i = 0; i < n1; i++) {
    // await waitforme(delay);
    // console.log('In mergeTwoSortedArrayFunc left loop');
    // console.log(ele[low + i].style.height + ' at ' + (low+i));
    // color
    ele[low + i].style.background = LEFT;
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    // await waitforme(delay);
    // console.log('In mergeTwoSortedArrayFunc right loop');
    // console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
    // color
    ele[mid + 1 + i].style.background = RIGHT;
    right[i] = ele[mid + 1 + i].style.height;
  }
  await waitforme(delay);
  // await waitforme(delay);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    // console.log('In mergeTwoSortedArrayFunc while loop');
    // console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // console.log('In mergeTwoSortedArrayFunc while loop if');
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = SORTED;
      } else {
        ele[k].style.background = PARTIALSORTED;
      }

      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      // console.log('In mergeTwoSortedArrayFunc while loop else');
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = SORTED;
      } else {
        ele[k].style.background = PARTIALSORTED;
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    // console.log("In while if n1 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = SORTED;
    } else {
      ele[k].style.background = PARTIALSORTED;
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    // console.log("In while if n2 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = SORTED;
    } else {
      ele[k].style.background = PARTIALSORTED;
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSortFunc(ele, l, r) {
  // console.log('In mergeSortFunc()');
  if (l >= r) {
    // console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  // console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
  await mergeSortFunc(ele, l, m);
  await mergeSortFunc(ele, m + 1, r);
  await mergeTwoSortedArrayFunc(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  mergeSortbtn.classList.add("active");
  await mergeSortFunc(ele, l, r);
  mergeSortbtn.classList.remove("active");
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
