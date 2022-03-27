//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set("goog:chromeOptions", {"args": ["--headless", "--no-sandbox", "--disable-dev-shm-usage","--disable-gpu","--window-size=1280,720"]});  
const driver = new Builder().withCapabilities(capabilities).build();
let BaseUrl="https://dev-front-startamericas.web.app/login"


Given('I see the Start Americas Together home page',async ()=>{
  var xpath =  `//*[@id="root"]/div[2]/header/div[2]/div/button[1]`;
  await sleep(1000);
  let AuxWebElement= driver.findElement(By.xpath(xpath));
  let AuxText=await driver.wait(until.elementIsVisible(AuxWebElement),50*1000).getText();
  expect(AuxText).to.be.equal("Inicio");
});


Given('I click on the Explorar Eventos button',{timeout:50*1000},async ()=> {
  let xpath=`//*[@id="root"]/div[2]/div[1]/section/div[1]/div[1]/div/button/span[1]`;
  let button= driver.findElement(By.xpath(xpath));
  await driver.wait(until.elementIsVisible(button)).click();
});

Given('I should see the events page',async ()=> {
  var xpath =  `//*[@id="root"]/div[2]/div[1]/div/div[1]/div[1]/div[2]/h1[1]/h3`;
  await sleep(1000);
  let AuxWebElement= driver.findElement(By.xpath(xpath));
  let AuxText=await driver.wait(until.elementIsVisible(AuxWebElement),50*1000).getText();
  expect(AuxText).to.be.equal("EVENTOS VIGENTES");
});

When('I press the button of Participar in the test event',{timeout:50*1000},async ()=> {
  let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/div/button[1]`;
  let button= driver.findElement(By.xpath(xpath));
  await driver.wait(until.elementIsVisible(button)).click();
});


Then('I should see the Dejar de Participar button',async ()=>{
  var xpath =  `//*[@id="root"]/div[2]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/div/button[1]`;
  await sleep(1000);
  let AuxWebElement= driver.findElement(By.xpath(xpath));
  let AuxText=await driver.wait(until.elementIsVisible(AuxWebElement),50*1000).getText();
  expect(AuxText).to.be.equal("Dejar de Participar");
});

AfterAll(async () => {
  await driver.close();
});