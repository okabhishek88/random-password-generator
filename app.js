let resultEL = document.getElementById("result");
let generateEL = document.getElementById("generate");
const lengthEL = document.querySelector("#length");
const uppercaseEL = document.querySelector("#uppercase");
const lowercaseEL = document.querySelector("#lowercase");
const numberEL = document.querySelector("#numbers");
const symbolEL = document.querySelector("#symbols");
const copyButton = document.querySelector(".copy");

const lowerchars = "abcdefghijklmnopqrstuvwxyz";
const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

let all = lowerchars + upperchars + numbers + symbols;

generateEL.addEventListener("click", () => {
    generatePassword();
});

function generatePassword() {
    password = "";
    let length = +lengthEL.value;
    password += lowerchars[Math.floor(Math.random() * lowerchars.length)];
    password += upperchars[Math.floor(Math.random() * upperchars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    resultEL.innerText = password;
}

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(resultEL.innerText)
        .then(() => {
            resultEL.innerText = "Copied to clipboard!";
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
        });
});
