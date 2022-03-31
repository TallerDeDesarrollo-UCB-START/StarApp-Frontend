//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');
const driver = require('../steps_definitions/login.js')
require("chromedriver");

When('click on the eventos button', async ()=> {
    let xpath = '/html/body/div[1]/div[2]/header/div[2]/div/button[3]';
    await driver.findElement(By.xpath(xpath)).click();
    await sleep(2000);
});

When('the EVENTOS VIGENTES message should appear on the screen', async ()=> {
    let xpath = '//*[@id="root"]/div[2]/div[1]/div/div[1]/div[1]/div[2]/h1[1]/h3';
    await sleep(1000);
    let AuxText1= await driver.findElement(By.xpath(xpath)).getText();
    expect(AuxText1).to.be.equal("EVENTOS VIGENTES");
});

When('click on the CREAR EVENTO', async ()=> {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div[1]/div[3]/div[2]/button[1]';
    await driver.findElement(By.xpath(xpath)).click();
    await sleep(2000);
});

Then('insert Data',{timeout: 10*1000}, async ()=> {
    driver.findElement(By.name('nombre_evento')).sendKeys('Esto es una prueba :)');
    driver.findElement(By.name('descripcion_evento')).sendKeys('es una pruebita');
    driver.findElement(By.name('lugar_evento')).sendKeys('Plaza de la Revolución');
    driver.findElement(By.name('fecha_evento')).sendKeys('05-08-2022');
    driver.findElement(By.name('hora_inicio')).sendKeys('10:30AM');
    driver.findElement(By.name('hora_fin')).sendKeys('12:00PM');
    let xpath = '//*[@id="ModalFormCrearEvento"]/div/form/div[11]/button[1]';
    await driver.findElement(By.xpath(xpath)).click();
    await sleep(2000);
});
