//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');
const driver = require('../steps_definitions/login.js')
require("chromedriver");

// Given('I go to the Start Americas Together login page', async ()=> {
//   await sleep(5000);
//   await driver.get(BaseUrl);
// });
// Given('I entered {string} into the email field',async (email)=> {
//   await driver.findElement(By.name('email')).sendKeys(email);
// });
// Given('I entered {string} into the password field', async  (password)=> {
//   await driver.findElement(By.name('password')).sendKeys(password);
// });


// When('I have press the {string} button',{timeout:50*1000},async (code)=> {
//   let xpath=`/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button/span[1]`;
//   let button= driver.findElement(By.xpath(xpath));
//   await driver.wait(until.elementIsVisible(button)).click();
// });

Given('I see the Start Americas Together home page',async ()=>{
  await sleep(2000);
  var xpath =  `//*[@id="root"]/div[2]/header/div[2]/div/button[1]`;
  let AuxWebElement= driver.findElement(By.xpath(xpath));
  let AuxText=await driver.wait(until.elementIsVisible(AuxWebElement),50*1000).getText();
  expect(AuxText).to.be.equal("Inicio");
});


Given('I click on the Explorar Eventos button',{timeout:50*1000},async ()=> {
  let xpath=`//*[@id="root"]/div[2]/div[1]/section/div[1]/div[1]/div/button`;
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
  await sleep(3000);
});


Then('I should see the Dejar de Participar button',async ()=>{
  var xpath =  `//*[@id="root"]/div[2]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/div/button[1]`;
  let AuxWebElement= driver.findElement(By.xpath(xpath));
  let AuxText=await driver.wait(until.elementIsVisible(AuxWebElement),50*1000).getText();
  expect(AuxText).to.be.equal("Dejar de Participar");
});

Then('I should press the Dejar de Participar button', async ()=> {
  let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/div/button[1]`;
  let button= driver.findElement(By.xpath(xpath));
  await driver.wait(until.elementIsVisible(button)).click();
  await sleep(3000);
});

module.exports = driver;