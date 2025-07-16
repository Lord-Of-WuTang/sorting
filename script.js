// === Utility Functions ===
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array.from({ length: 5 }, generateElement);
}

function generateContainer() {
  return document.createElement('div');
}

function fillArrContainer(element, array) {
  element.innerHTML = '';
  array.forEach(num => {
    const span = document.createElement('span');
    span.textContent = num;
    element.appendChild(span);
  });
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
  }
}

function highlightCurrentEls(element, index) {
  const children = element.children;
  if (children[index]) {
    children[index].style.border = '2px dashed red';
  }
  if (children[index + 1]) {
    children[index + 1].style.border = '2px dashed red';
  }
}

// === DOM References ===
const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const startingArray = document.getElementById('starting-array');
const arrayContainer = document.getElementById('array-container');

// === Event Handlers ===
generateBtn.addEventListener('click', () => {
  const arr = generateArray();
  fillArrContainer(startingArray, arr);
  arrayContainer.innerHTML = ''; // 🧹 Clear previous steps if any
  highlightCurrentEls(startingArray, 0); // Highlight first comparison
});

sortBtn.addEventListener('click', () => {
  const spanEls = startingArray.querySelectorAll('span');
  let arr = Array.from(spanEls).map(span => parseInt(span.textContent));
  arrayContainer.innerHTML = ''; // Reset container

  const steps = [];
  steps.push([...arr]); // Initial array state

  let didSwap;
  do {
    didSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const tempArr = [...arr];
      steps.push(tempArr);

      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        didSwap = true;
      }
    }
  } while (didSwap);

  steps.push([...arr]); // Final sorted state

  // 🧠 Visualize each step
  steps.forEach((stepArr, stepIndex) => {
    const container = generateContainer();
    fillArrContainer(container, stepArr);

    if (stepIndex < steps.length - 1) {
      const i = stepIndex % (arr.length - 1);
      highlightCurrentEls(container, i);
    }

    arrayContainer.appendChild(container);
  });

  // ✅ Highlight first comparison in the original array
  highlightCurrentEls(startingArray, 0);
});
