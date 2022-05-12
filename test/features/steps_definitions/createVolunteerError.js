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
let BaseUrl="https://dev-front-startamericas.web.app/register"


Given('I have browsed to the Start Americas Together register page',{timeout: 10*1000}, async ()=> {
    await driver.get(BaseUrl);
    await driver.manage().window().maximize();
  });

When('Insert the data in the form', async ()=> {
    driver.findElement(By.name('username')).sendKeys('Juan');
    driver.findElement(By.name('lastname')).sendKeys('Perez');
    driver.findElement(By.name('email')).sendKeys('juanperezgmail.com');
    driver.findElement(By.name('phone')).sendKeys('');
    driver.findElement(By.name('password')).sendKeys('123456');
    driver.findElement(By.name('confirmPassword')).sendKeys('123456');
    await sleep(2000);
});

Then('Verify is correct data', async ()=> {
    await sleep(3000);
    let xpath = '/html/body/div/div[2]/div[1]/div/div/div[2]/div[3]/form/div[3]/p';
    let AuxText1= await driver.findElement(By.xpath(xpath)).getText();
    expect(AuxText1).to.be.equal("Correo debe tener formato 'email@email.com'");
});
