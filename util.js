const generateText = (name, age) => {
    // Returns output text
    return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
    // Validate user input with two pre-defined rules
    if (!text) {
        return false;
    }
    if (notEmpty && text.trim().length === 0) {
        return false;
    }
    if (isNumber && +text === NaN) {
        return false;
    }
    return true;
};

exports.checkAndGenerate = (name, age) => {
    if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
        return;
    }
    return generateText(name, age);
};

exports.generateText = generateText;
exports.validateInput = validateInput;
const puppeteer = require("puppeteer");

(async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        devtools: true,
    });

    const page = await browser.newPage();

    await page.goto("https://google.com");
    const title = await page.title();
    console.log("Title:", title);
})();

//9924852896
//ragpay-chibuike2