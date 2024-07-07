const passBox = document.getElementById("password");
const generatebtn = document.getElementById("generatebtn");
const copyBtn = document.getElementById("copyBtn");
const copiedBtn = document.getElementById("copiedBtn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$_-";

const allChar = upperCase + lowerCase + numbers + symbols;

function copyPassword() {
    passBox.select();
    document.execCommand("copy");
}


function createPass() {
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChar.length);
        password = password + allChar[randomIndex];
    }
    console.log(password);

    passBox.value = password;

}

generatebtn.addEventListener('click', () => {
    copiedBtn.style.display = "none";
    copyBtn.style.display = "block";
    createPass();
    copyBtn.addEventListener('click', () => {
        copyPassword();
        copyBtn.style.display = "none";
        copiedBtn.style.display = "block";
    })
})

