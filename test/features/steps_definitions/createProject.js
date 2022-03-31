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
