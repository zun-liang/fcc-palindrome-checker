const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const cleanText = (text) => {
  const regex = /[a-z0-9]+/gi;
  return text.match(regex)?.join("");
};

const splitInHalf = (cleanedText) => {
  const length = cleanedText?.length;
  let firstHalf = "";
  let secondHalf = "";
  for (let i = 0; i < length / 2; i++) {
    firstHalf += cleanedText[i];
  }
  if (cleanedText?.length % 2 === 0) {
    for (let i = length / 2; i < length; i++) {
      secondHalf += cleanedText[i];
    }
  } else {
    for (let i = length / 2 + 1; i < length; i++) {
      secondHalf += cleanedText[i];
    }
  }
  return firstHalf === secondHalf.split("").reverse().join("");
};

const checkText = (e) => {
  e.preventDefault();
  const text = textInput.value;
  const cleanedText = cleanText(text);
  const result = splitInHalf(cleanedText);
  if (text === "") {
    alert("Please input a value");
  } else {
    if (result) {
      resultDiv.classList.remove("hide");
      resultDiv.innerHTML = `<p><b>${cleanedText}</b> is a palindrome</p>`;
    } else {
      resultDiv.classList.remove("hide");
      resultDiv.innerHTML = `<p><b>${text}</b> is not a palindrome</p>`;
    }
  }
};

checkButton.addEventListener("click", checkText);
