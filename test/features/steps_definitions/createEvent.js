//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');
const driver = require('../steps_definitions/login.js')
require("chromedriver");

When('click on the eventos button', async ()=> {
    await sleep(2000);
    let xpath = '/html/body/div[1]/div[2]/header/div[2]/div/button[3]';
    await driver.findElement(By.xpath(xpath)).click();
    await sleep(2000);
});

When('the EVENTOS VIGENTES message should appear on the screen', async ()=> {
    await sleep(1000);
    let AuxText1= await driver.findElement(By.name('eventosVigentes')).getText();
    expect(AuxText1).to.be.equal("EVENTOS VIGENTES");
});

When('click on the CREAR EVENTO', async ()=> {
    await driver.findElement(By.name('crear_evento')).click();
    await sleep(2000);
});

When('insert Data',{timeout: 10*1000}, async ()=> {
    driver.findElement(By.name('nombre_evento')).sendKeys('Esto_es_una_prueba');
    driver.findElement(By.name('descripcion_evento')).sendKeys('es una pruebita');
    driver.findElement(By.name('lugar_evento')).sendKeys('Plaza de la Revolución');
    driver.findElement(By.name('fecha_evento')).sendKeys('05-08-2023');
    driver.findElement(By.name('hora_inicio')).sendKeys('10:30AM');
    driver.findElement(By.name('hora_fin')).sendKeys('12:00PM');
    await driver.findElement(By.name('GuardarEvento')).click();
    await sleep(2000);
});


When('check the new event is created', async()=>{
    await sleep(3000);
    let AuxText1= await driver.findElement(By.name('Lugar_Esto_es_una_prueba')).getText();
    expect(AuxText1).to.be.equal("Lugar: Plaza de la Revolución");
});

When('delete the event', async()=>{
    await driver.findElement(By.name('Eliminar_Esto_es_una_prueba')).click();
    await sleep(3000);
});

Then('click button', async()=>{
    await sleep(3000);
    await driver.findElement(By.name('eliminareventoEsto_es_una_prueba')).click();
    await sleep(1000);
});

 