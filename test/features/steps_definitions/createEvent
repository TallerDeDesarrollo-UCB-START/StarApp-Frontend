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

Given('I am logged in the Start Americas Together page',async function () {
    await driver.get(BaseUrl);
    await driver.manage().window().maximize();
    await driver.findElement(By.name('email')).sendKeys('lider.auxiliar@start.auxiliar.com');
    await driver.findElement(By.name('password')).sendKeys('lideraux1');
    let xpath ='/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button/span[1]';
    await driver.findElement(By.xpath(xpath)).click();
});

Given('I see the Start Americas Together page and events title',async function () {
    let xpath='/html/body/div/div[2]/div[1]/section/div[1]/div[1]/h2';
    await driver.findElement(By.xpath(xpath)).getText();
});

Given('I scroll the page',async function () {
    await driver.executeScript("window.scrollBy(0,1000)");
});

When('I click on the Explorar Eventos button', async function () {
    let xpath='/html/body/div/div[2]/div[1]/section/div[1]/div[1]/div/button';
    await driver.findElement(By.xpath(xpath)).click();
});

Then('I should see the events page',async function () {
    let xpath='/html/body/div[1]/div[2]/div[1]/div/div[1]/div[1]/div[2]/h1[1]/h3';
    await driver.findElement(By.xpath(xpath)).getText();
});

Then('I click on Crear Evento Button',async function () {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div[1]/div[3]/div[2]/button[1]';
    await driver.findElement(By.xpath(xpath)).getText();
  });

  Then('I fill {string}, {string},{string} and {string} in the event card',async function (name, description, place, date) {
    await driver.findElement(By.name('nombre_evento')).sendKeys(name);
    await driver.findElement(By.name('descripcion_evento')).sendKeys(description);
    await driver.findElement(By.name('lugar_evento')).sendKeys(place);
    await driver.findElement(By.name('fecha_evento')).sendKeys(date);
  });

  Then('I click on Guardar Evento',async function () {
    let xpath = '/html/body/div[5]/div/div[1]/div/div/form/div[11]/button[1]';
    await driver.findElement(By.xpath(xpath)).click();
  });

  Then('I can see the event created on the Eventos page',async function () {
    await driver.quit();
  });

  AfterAll(async () => {
    await driver.close();
  });