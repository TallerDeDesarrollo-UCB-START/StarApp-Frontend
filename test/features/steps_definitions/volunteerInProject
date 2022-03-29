//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();
let BaseUrl="https://dev-front-startamericas.web.app/login"

Given('I press the Medio Ambiente projects',async function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[1]/div/div/a/button/div';
    await driver.findElement(By.xpath(xpath)).click();
});

Given('I see the diferent projects of Medio Ambiente',async function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[1]/div[2]/div[1]/h3';
    await driver.findElement(By.xpath(xpath)).getText();
  });

When('I choose Proyecto de demo project',async function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[2]/div[1]';
    await driver.findElement(By.xpath(xpath)).getText();
});

When('I press the Unirme button',async function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[2]/div/div/button/span[1]/div';
    await driver.findElement(By.xpath(xpath)).click();
});

Then('I should see Participando at the right corner of the project',async function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[3]/span[1]';
    await driver.findElement(By.xpath(xpath)).getText();
    await driver.quit();
});

AfterAll(async () => {
    await driver.close();
  });
