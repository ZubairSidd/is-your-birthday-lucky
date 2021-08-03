const dateInput = document.querySelector("#datePicker");
const luckyNumber = document.querySelector("#luckyNumber");
const submitButton = document.querySelector("#submitButton");
const result = document.querySelector("#result");

const handleClick = () => {
  let dates = dateInput.value.split("-");
  let sumOfDate = 0;
  for (let date of dates) {
    sumOfDate += parseInt(date);
  }
  let isBdLucky = sumOfDate % parseInt(luckyNumber.value);
  if (isBdLucky === 0) {
    result.innerHTML = `${dates[2]} is your lucky birthday`;
  } else {
    result.innerHTML = `${dates[2]} is not your lucky birthday`;
  }
};

submitButton.addEventListener("click", handleClick);
