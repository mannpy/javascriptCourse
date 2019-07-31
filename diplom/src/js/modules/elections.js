const candidateBlocks = document.querySelectorAll('.main-cards-item'),
      firstCandidate = {
        value: 0,
        countNode: candidateBlocks[0].querySelector('.result-count'),
        progressBar: candidateBlocks[0].querySelector('.progress-bar'),
        card: candidateBlocks[0]
      },
      secondCandidate = {
        value: 0,
        countNode: candidateBlocks[1].querySelector('.result-count'),
        progressBar: candidateBlocks[1].querySelector('.progress-bar'),
        card: candidateBlocks[1]
      };

// get random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// set candidate's value
function setValue(value) {
  this.value = value;
  this.countNode.textContent = `${value}%`;
  this.progressBar.style.height = `${value}%`;
}

function getMaxValue(arr) {
  return arr.reduce((a,b) => Math.max(a, b));
}

function setActiveClass(elem) {
  elem.card.classList.add('main-cards-item-active');
}

// reset all results
function resetResults () {
  let resultCount = document.querySelectorAll('.result-count'),
      progressBar = document.querySelectorAll('.progress-bar');

  resultCount.forEach((elem) => elem.textContent = "0%");
  progressBar.forEach((elem) => elem.style.height = 0);
}

function voting(votingHolded) {
  if (!votingHolded) {
    let candidateBlocks = document.querySelectorAll('.main-cards-item'),
      customCandidate = {
        value: 0,
        countNode: candidateBlocks[1].querySelector('.result-count'),
        progressBar: candidateBlocks[1].querySelector('.progress-bar'),
        card: candidateBlocks[1]
      };

      setValue.call(firstCandidate, getRandomInt(1, 100));
      setValue.call(secondCandidate, getRandomInt(1, 100 - firstCandidate.value));
      setValue.call(customCandidate, 100 - (firstCandidate.value + secondCandidate.value));
      
      let maxValue = getMaxValue([firstCandidate.value, 
        secondCandidate.value, 
        customCandidate.value
      ]);

      let maxValueCards = [firstCandidate, secondCandidate, customCandidate].filter(
        (elem) => elem.value >= maxValue
      );

      maxValueCards.forEach((elem) => setActiveClass(elem));

      votingHolded = true;
    }
    
    return votingHolded
}



function crime(votingHolded, crimeMaked) {
  if (votingHolded && !crimeMaked) {
    let candidateBlocks = document.querySelectorAll('.main-cards-item'),
        customCandidate = {
          value: 100 - (firstCandidate.value + secondCandidate.value),
          countNode: candidateBlocks[1].querySelector('.result-count'),
          progressBar: candidateBlocks[1].querySelector('.progress-bar'),
          card: candidateBlocks[1]
        },
        newCustomValue = customCandidate.value + 25,
        newFirstValue = firstCandidate.value - 25,
        newSecondValue = secondCandidate.value - 25;
    if (newCustomValue >= 100) {
      setValue.call(firstCandidate, 0);
      setValue.call(secondCandidate, 0);
      setValue.call(customCandidate, 100);
    } else {
      setValue.call(customCandidate, newCustomValue);
      if (newFirstValue < newSecondValue) {
        if (newFirstValue < 0) {
          setValue.call(secondCandidate, secondCandidate.value + newFirstValue);
          setValue.call(firstCandidate, 0);
        } else {
          setValue.call(firstCandidate, newFirstValue);
          setValue.call(secondCandidate, 100 - (newCustomValue + newFirstValue));
        }
      } else {
        if (newSecondValue < 0) {
          setValue.call(firstCandidate, firstCandidate.value + newSecondValue);
          setValue.call(secondCandidate, 0);
        } else {
          setValue.call(firstCandidate, 100 - (newCustomValue + newSecondValue));
          setValue.call(secondCandidate, newSecondValue);
        }
      }
      
    }

    for (let elem of candidateBlocks) {
      elem.classList.remove('main-cards-item-active');
    };

    let maxValue = getMaxValue([firstCandidate.value, 
      secondCandidate.value, 
      customCandidate.value
    ]);

    let maxValueCards = [firstCandidate, secondCandidate, customCandidate].filter(
      (elem) => elem.value >= maxValue
    );

    maxValueCards.forEach((elem) => setActiveClass(elem));

    crimeMaked = true;
  }
  return crimeMaked
}

export {resetResults, voting, crime};