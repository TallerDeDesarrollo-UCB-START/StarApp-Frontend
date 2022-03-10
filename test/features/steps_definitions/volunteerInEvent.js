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

When('I press the button of Participar in the test event',async function () {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div/button[1]';
    await driver.findElement(By.xpath(xpath)).click();
});

Then('I should see the Dejar de Participar button',async function () {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/div/button[1]';
    await driver.findElement(By.xpath(xpath)).getText();
});

AfterAll(async () => {
    await driver.close();
  });
