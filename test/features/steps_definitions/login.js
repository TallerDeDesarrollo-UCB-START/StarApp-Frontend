//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
//capabilities.set('chromeOptions', { "w3c": false });
capabilities.set("goog:chromeOptions", {"args": ["--headless", "--no-sandbox", "--disable-dev-shm-usage","--disable-gpu","--window-size=2560,2468"]});  
const driver = new Builder().withCapabilities(capabilities).build();
let BaseUrl="http://localhost:3000/login"

Given('I have browsed to the Start Americas Together login page',{timeout: 10*1000}, async ()=> {
    await driver.get(BaseUrl);
    await driver.manage().window().maximize();
  });
Given('I have entered {string} into the email field',async (email)=> {
    await driver.findElement(By.name('email')).sendKeys(email);
});
Given('I have entered {string} into the password field', async  (password)=> {
    await driver.findElement(By.name('password')).sendKeys(password);
});
When('I press the {string} button',{timeout:50*1000},async (code)=> {
    let xpath=`/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button/span[1]`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
  });
When('the welcome message should be dispayed on the screen',async ()=> {
  var xpath = '//*[@id="root"]/div[2]/header/div[2]/div/button[1]/span/span';
  await sleep(1000);
  let AuxWebElement= driver.findElement(By.xpath(xpath));
  let AuxText=await driver.wait(until.elementIsVisible(AuxWebElement),50*1000).getText();
  expect(AuxText).to.be.equal("Inicio");
});

AfterAll(async () => {
  await driver.close();
});

module.exports = driver;