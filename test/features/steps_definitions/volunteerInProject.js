//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
//capabilities.set('chromeOptions', { "w3c": false });
capabilities.set("goog:chromeOptions", {"args": ["--headless", "--no-sandbox", "--disable-dev-shm-usage","--disable-gpu","--window-size=1280,720"]});  
const driver = new Builder().withCapabilities(capabilities).build();
let BaseUrl="https://dev-front-startamericas.web.app/login"
  
Given('I press the Proyectos button',{timeout:50*1000},async ()=> {
    let xpath=`//*[@id="root"]/div[2]/header/div[2]/div/button[2]/span[1]`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
  });

Given('I press the Animales projects',{timeout:50*1000},async ()=> {
    let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[2]/div/div[5]/div/div/a/button/div`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
  });

Given('I see the diferent projects of Animales',async ()=> {
    let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[1]/div[2]/div[1]/h3`;
    await sleep(1000);
    let AuxText= await driver.findElement(By.xpath(xpath)).getText();
    expect(AuxText).to.be.equal("Proyectos Animales");
  });

When('I choose a demo project',async function () {
    let xpath = '//*[@id="root"]/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[1]/p[1]';
    await sleep(1000);
    let AuxText= await driver.findElement(By.xpath(xpath)).getText();
    expect(AuxText).to.be.equal("Pepito");
});

When('I press the Unirme button',{timeout:50*1000},async ()=> {
    let xpath=`//*[@id="474"]/button`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
  });

Then('I should see Participando at the right corner of the project',async function () {
    let xpath = '//*[@id="root"]/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[3]/span[1]';
    await sleep(1000);
    let AuxText= await driver.findElement(By.xpath(xpath)).getText();
    expect(AuxText).to.be.equal("Participando");
});

AfterAll(async () => {
    await driver.close();
  });
