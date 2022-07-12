const puppeteer = require("puppeteer");

describe("Datecheck", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      slowMo: 10,
      headless: false,
    });
    page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 720,
    });
    page.setDefaultTimeout(80000);
  });

  beforeEach(async () => {
    await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
  }, 60000);
  afterAll(async () => {
    await browser.close();
  });
  // test("1-[Day=null,Month=null,Year=null] null/null/null [empty] ", async () => {
  //   await page.waitForSelector("#day");
  //   element = await page.$("#day");
  //   let day = await page.evaluate((el) => el.innerHTML, element);
  //   await page.waitForSelector("#month");
  //   element = await page.$("#month");
  //   let month = await page.evaluate((el) => el.innerHTML, element);
  //   await page.waitForSelector("#year");
  //   element = await page.$("#year");
  //   let year = await page.evaluate((el) => el.innerHTML, element);
  //   await page.click("#check");
  //   await page.waitForSelector("#check");
  //   element = await page.$("result");
  //   let result = await page.evaluate((el) => el.innerHTML, element);
  //   let expected = "Please fill in the empty field";
  //   expect(result).toBe(expected);
  // });
  test("1-[validDay,month=2]27-02-2000(normal case) [valid]", async () => {
    // conost browser = await puppeteer.launch({ headless: false });
    // cont page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "27");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is valid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("2-[day=28,month=2;leapYear=true]28-02-2000(boudary case) [valid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "28");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is valid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("3-[day=29,month=2;leapYear=true]29-02-2000(boudary case) [valid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "29");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is valid!!";
    expect(result).toBe(expected);
  }, 60030);
  test("4-[day=30,month=2;leapYear=true]30-02-2000(boudary case) [invalid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "30");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is invalid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("5-[day=0,month=2,leapYear=true]0-02-2000(boudary case) [invalid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "0");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is invalid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("6-[day<0,month=2,leapYear=true](-)1-02-2000(boudary case) [invalid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "-1");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is invalid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("7-[month=2,leapYear=true]null-02-2000(normal case) [empty]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    // await page.type("#day", " ");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.textContent, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = "Please fill in the empty field";
    expect(result).toBe(expected);
  }, 60000);
  test("8-[day=char,month=2,leapYear=true]character/special signs-02-2000(normal case) [invalid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "s");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is invalid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("9-[validDay,month=2,leapYear=null] validDay-02-null(normal case) [empty]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "1");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.textContent, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("2");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    // await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = "Please fill in the empty field";
    expect(result).toBe(expected);
  }, 60000);
  test("10-[day=31,month%2==0,leapYear=true] 31-4-2000(boundary) [valid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "31");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("4");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is invalid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("11-[day=30,month%2==0,leapYear=true] 31-4-2000(boundary) [valid]", async () => {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "30");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("4");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is valid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("12-[day=0,month%2==0,leapYear=true] 0-4-2000(boundary) [invalid]", async () => {
    // co2st broer = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "0");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("4");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is invalid!!";
    expect(result).toBe(expected);
  }, 60000);
  test("13-[day=-1,month%2==0,leapYear=true] -(1)-4-2000(boundary) [invalid]", async () => {
    // co2st broer = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // page.setViewport({ width: 1280, height: 720 });
    // await page.goto("C:/Users/WIN/Desktop/checkDate/index.html");
    //Day input
    await page.type("#day", "-1");
    await page.waitForSelector("#day");
    let element = await page.$("#day");
    let day = await page.evaluate((el) => el.value, element);
    //
    //Month input
    await page.click("#month");
    await page.keyboard.type("4");
    await page.waitForSelector("#month");
    element = await page.$("#month");
    let month = await page.evaluate((el) => el.value, element);
    //
    //Year input
    await page.click("#year");
    await page.keyboard.type("2000");
    await page.waitForSelector("#year");
    element = await page.$("#year");
    //
    let year = await page.evaluate((el) => el.value, element);
    await page.click("#check");

    await page.waitForSelector("#check");

    element = await page.$("#result");
    let result = await page.evaluate((el) => el.textContent, element);
    const expected = day + "/" + month + "/" + year + " is invalid!!";
    expect(result).toBe(expected);
  }, 60000);
});
