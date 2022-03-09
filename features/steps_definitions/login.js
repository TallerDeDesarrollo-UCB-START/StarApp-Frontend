/*const assert= require("assert");
const {Given, When,Then}= require("@cucumber/cucumber")
//Selenium
const chrome = require('selenium-webdriver/chrome');

var webdriver =require("selenium-webdriver"), 
    By=webdriver.By,
    until=webdriver.until;
let options = new chrome.Options()
//let driver= new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
let driver= new webdriver.Builder().forBrowser('chrome').build();
let BaseUrl="https://dev-front-startamericas.web.app/login";

Given('I have browsed to the Start Americas Together login page',async function(){
    await driver.get(BaseUrl);
    await driver.manage().window().maximize();
  });
Given('I have entered {string} into the email field',async function (email) {
    await driver.findElement(By.name('email')).sendKeys(email);
  });
Given('I have entered {string} into the password field',async function(password){
    await driver.findElement(By.name('password')).sendKeys(password);
});
When('I press the {string} button', async (code)=> {
    let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button`;
    await driver.findElement(By.xpath(xpath)).click();
  });
Then('the welcome message should be dispayed on the screen', async()=> {
  //let xpath = '//*[@id="root"]/div[2]/header/div[1]/div[3]/div/div/span[2]';
  //driver.findElement(By.xpath(xpath)).getText();
  await driver.quit();
});*/
