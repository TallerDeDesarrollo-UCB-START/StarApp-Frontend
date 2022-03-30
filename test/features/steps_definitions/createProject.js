//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');
const driver = require('../steps_definitions/login.js')
require("chromedriver");

When('click on the Proyectos button', async () => {
    let xpath = '/html/body/div/div[2]/header/div[2]/div/button[2]';
    await driver.findElement(By.xpath(xpath)).click();
    await sleep(2000);
});

When('the PROYECTOS message should appear on the screen', async () => {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[1]/div/div[1]/h3';
    await sleep(1000);
    let AuxText1= await driver.findElement(By.xpath(xpath)).getText();
    expect(AuxText1).to.be.equal("PROYECTOS");
});

When('click on the CREAR PROYECTO', async () => {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[1]/div/div[2]/button/span[1]';
    await driver.findElement(By.xpath(xpath)).click();
    await sleep(2000);
});

Then('insert Data of Project', async () => {
    await driver.findElement(By.name('fecha_inicio')).sendKeys('05-08-2022');
    await driver.findElement(By.name('fecha_fin')).sendKeys('05-09-2022');  
    await driver.findElement(By.name('titulo')).sendKeys('Esto es una prueba :)');
    await driver.findElement(By.name('descripcion')).sendKeys('es una pruebita');
    let xpath = '/html/body/div[2]/div[3]/form/div[2]/div[11]/input';
    await driver.findElement(By.xpath(xpath)).click();
    await sleep(2000);
});


// //cucumber

// const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
// const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
// // const { expect } = require('chai');

// require("chromedriver");

// // driver setup
// const capabilities = Capabilities.chrome();
// capabilities.set('chromeOptions', { "w3c": false });
// const driver = new Builder().withCapabilities(capabilities).build();
// let BaseUrl="https://dev-front-startamericas.web.app/login"

// Given('the core team user is logged at Start Americas Together homepage',async function () {
//     await driver.get(BaseUrl);
//     await driver.manage().window().maximize();
//     await driver.findElement(By.name('email')).sendKeys('core.team.auxiliar@star.auxiliar.com');
//     await driver.findElement(By.name('password')).sendKeys('coreteam1');
//     let xpath='/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button/span[1]';
//     await driver.findElement(By.xpath(xpath)).click();
// });

// Given('I press the Proyectos button',async function () {
// let xpath = '/html/body/div[1]/div[2]/header/div[2]/div/button[2]/span[1]';
// await driver.findElement(By.xpath(xpath)).click();
// });

// When('I press the button to create a new proyect {string}',async function (string) {
//     let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div/div[2]/button/span[1]';
//     await driver.findElement(By.xpath(xpath)).click();
// });

// When('I fill {string}, {string},{string} and {string} in the project card',async function (start, end, name, desc) {
//     await driver.findElement(By.name('fecha_inicio')).sendKeys(start);
//     await driver.findElement(By.name('fecha_fin')).sendKeys(end);
//     await driver.findElement(By.name('titulo')).sendKeys(name);
//     await driver.findElement(By.name('descripcion')).sendKeys(desc);
// });

// When('click on Crear Proyecto button',async function () {
//     let xpath = '/html/body/div[3]/div[3]/form/div[2]/div[11]/input';
//     await driver.findElement(By.xpath(xpath)).click();
// });

// Then('I can see the project created in the Medio Ambiente projects',async function () {
//     await driver.quit();
// });

// AfterAll(async () => {
//     await driver.close();
//   });
