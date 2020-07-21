const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

jest.setTimeout(30000);
test("Should output name and age", () => {
    const text = generateText("Max", 29);
    expect(text).toBe("Max (29 years old)");
});

test("Should generate a valid text output", () => {
    const text = checkAndGenerate("Max", 29);
    expect(text).toBe("Max (29 years old)");
});
test("Should create an element with text and correct class", async(done) => {
    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();

    await page.goto("https://google.com");
    const title = await page.title();
    // console.log("Title:", await title);
    done();
}, 30000);