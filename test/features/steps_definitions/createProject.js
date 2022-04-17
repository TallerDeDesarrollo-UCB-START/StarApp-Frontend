//cucumber
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai'); 
const sleep = require('../support/sleep.js');
const driver = require('../steps_definitions/login.js');
const { WhereToVoteOutlined } = require('@material-ui/icons');
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
    //let xpath = '/html/body/div/div[2]/div[1]/div/div[1]/div/div[2]/button/span[1]';
    await driver.findElement(By.name('crearProyecto')).click();
    await sleep(2000);
});

Then('insert Data of Project', async () => {
    await driver.findElement(By.name('fecha_inicio')).sendKeys('05-08-2022');
    await driver.findElement(By.name('fecha_fin')).sendKeys('05-09-2022');  
    await driver.findElement(By.name('titulo')).sendKeys('Esto_es_una_prueba');
    await driver.findElement(By.name('descripcion')).sendKeys('es una pruebita');
    //let xpath = '/html/body/div[2]/div[3]/form/div[2]/div[11]/input';
    await driver.findElement(By.name('crearProyecto1')).click();
    await sleep(2000);
});

When('press button Medio Ambiente', async () => {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[1]/div/div/a/button';
    await driver.findElement(By.xpath(xpath)).click(); 
    await sleep(2000);
    // await driver.findElement(By.name('detalleEsto_es_una_prueba')).click();
    // await sleep(2000);
});

When('click buttom detalle', async () => {
    await driver.findElement(By.name('detalleEsto_es_una_prueba')).click();
    await sleep(2000);
});

When('check the new project is created', async () => {
    await sleep(3000);
    let AuxText1= await driver.findElement(By.name('descripcionEsto_es_una_prueba')).getText();
    expect(AuxText1).to.be.equal("Descripción: es una pruebita");
});

When('delete the project', async () => {
    await driver.findElement(By.name('eliminarproyecto')).click();
    await sleep(2000);
});

Then('click delete button', async () => {
    await driver.findElement(By.name('eliminarproyecto1')).click();
    await sleep(2000);
});