const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const cleanText = (text) => {
  const regex = /[a-z0-9]+/gi;
  return text.match(regex)?.join("").toLowerCase();
};

const splitInHalf = (cleanedText) => {
  const length = cleanedText?.length;
  const middleIndex = Math.floor(length / 2);
  const firstHalf = cleanedText?.substring(0, middleIndex);
  const secondHalf = cleanedText?.substring(
    length % 2 === 0 ? middleIndex : middleIndex + 1
  );
  return firstHalf === secondHalf?.split("").reverse().join("");
};

const checkText = () => {
  const text = textInput.value;
  const cleanedText = cleanText(text);
  const result = splitInHalf(cleanedText);
  if (text === "") {
    alert("Please input a value");
  } else if (cleanedText.length === 1) {
    resultDiv.classList.remove("hide");
    resultDiv.innerHTML = `<p><b>${text}</b> is a palindrome</p>`;
  } else {
    if (result) {
      resultDiv.classList.remove("hide");
      resultDiv.innerHTML = `<p><b>${text}</b> is a palindrome</p>`;
    } else {
      resultDiv.classList.remove("hide");
      resultDiv.innerHTML = `<p><b>${text}</b> is not a palindrome</p>`;
    }
  }
};

checkButton.addEventListener("click", checkText);
