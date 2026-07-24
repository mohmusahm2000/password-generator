let characters = []

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbolsArr = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

const symbols = document.getElementById("symbols")
const numbers = document.getElementById("numbers")

const genPassBtn = document.getElementById("gen-pass-btn")

const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")

const passwordLengthEl = document.getElementById("password-length")



let password1
let password2

function randomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function renderPasswords() {
    password1El.textContent = password1
    password2El.textContent = password2
}

genPassBtn.addEventListener("click", function() {
    
    characters = alphabet

    if (symbols.checked) {
        characters = [...characters, ...symbolsArr]
    }

    if (numbers.checked) {
        characters = [...characters, ...numbersArr]
    }
    
    password1 = ""
    password2 = ""

    let passwordLength = passwordLengthEl.value === "" ? 15 : Number(passwordLengthEl.value)

    if (passwordLength < 2) {
        passwordLength = 2
    } else if (passwordLength > 20) {
        passwordLength = 20
    }
    
    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[randomIndex()]
        password2 += characters[randomIndex()]
    }

    renderPasswords()
})

function copyToClipboard(element) {
    const textToCopy = element.textContent

    navigator.clipboard.writeText(textToCopy)
}

password1El.addEventListener("click", function() {
    copyToClipboard(password1El)
})

password2El.addEventListener("click", function() {
    copyToClipboard(password2El)
})