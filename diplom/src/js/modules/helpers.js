function show (elem, type='block') {
  // show element
  elem.style.display = type;
}

function hide(elem) {
  // hide element
  elem.style.display = 'none';
}

function range(start, count) {
  // get sequence of integers
  return Array.apply(0, Array(count))
    .map((_, index) => index + start);
}

function slice(elements, start, end) {
  // get slice of elements
  return Array.prototype.slice.call(elements, start, end);
}

// Slider functions
function addSliderElements(parent, sex, className) {
  /* Add slider elements */
  let nums, elem;
  if (sex == "Мужской") {
    nums = range(1, 3);
  } else if (sex == "Женский") {
    nums = range(4, 3);
  } else {
    throw("Unknown sex");
  }

  for (let i of nums) {
    elem = document.createElement('div');
    elem.className = className + i;
    parent.insertBefore(elem, slice(parent.children, -1)[0]);
  }

}

function removeSliderElements(parent, className) {
  // remove all slides
  let elems = parent.querySelectorAll('.' + className);
  for (let e of elems) {
    parent.removeChild(e);
  }
}

export {show, hide, range, slice, addSliderElements, removeSliderElements};