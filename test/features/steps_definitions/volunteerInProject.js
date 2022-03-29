//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');
const driver = require('../steps_definitions/login.js')
require("chromedriver");
  
Given('I press the Proyectos button',{timeout:50*1000},async ()=> {
    let xpath=`//*[@id="root"]/div[2]/header/div[2]/div/button[2]/span[1]`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
    await sleep(3000);
  });

Given('I press the Animales projects',{timeout:50*1000},async ()=> {
    let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[2]/div/div[5]/div/div/a/button/div`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
  });

When('I choose a demo project',async function () {
    let xpath = '//*[@id="root"]/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[1]/p[1]';
    await sleep(1000);
    let AuxText= await driver.findElement(By.xpath(xpath)).getText();
    expect(AuxText).to.be.equal("ha eliminar12");
});

When('I press the Unirme button',{timeout:50*1000},async ()=> {
    let xpath=`/html/body/div[1]/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[2]/div/div/button`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
    await sleep(3000);
  });

  Then('I click on Ver Detalles of the project',{timeout:50*1000},async ()=> {
    let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[2]/a`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
    await sleep(3000);
  });
  Then('I press Dejar Proyecto button',{timeout:50*1000},async ()=>  {
    let xpath=`/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div[1]/button/span[1]`;
    let button= driver.findElement(By.xpath(xpath));
    await driver.wait(until.elementIsVisible(button)).click();
    await sleep(3000);
  });


module.exports = driver;