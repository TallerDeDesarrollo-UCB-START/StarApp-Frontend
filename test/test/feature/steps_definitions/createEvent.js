//cucumber

const assert= require("assert");
const {Given, When,Then,And}= require("cucumber");
let example=require("../../function/examplefunctions")
//Selenium
var webdriver =require("selenium-webdriver"), 
    By=webdriver.By,
    until=webdriver.until;

var driver= new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    
const cucumber = require("cucumber");
let BaseUrl="https://dev-front-startamericas.web.app/login"

Given('I am logged in the Start Americas Together page', function () {
    driver.get(BaseUrl);
    driver.manage().window().maximize();
    driver.findElement(By.name('email')).sendKeys('lider.auxiliar@start.auxiliar.com');
    driver.findElement(By.name('password')).sendKeys('lideraux1');
    let xpath='/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button/span[1]';
    driver.findElement(By.xpath(xpath)).click();
});

Given('I see the Start Americas Together page and events title', function () {
    let xpath='/html/body/div/div[2]/div[1]/section/div[1]/div[1]/h2';
    driver.findElement(By.xpath(xpath)).getText();
});

Given('I scroll the page', function () {
    driver.executeScript("window.scrollBy(0,1000)");
});

When('I click on the Explorar Eventos button', function () {
    let xpath='/html/body/div/div[2]/div[1]/section/div[1]/div[1]/div/button';
    driver.findElement(By.xpath(xpath)).click();
});

Then('I should see the events page', function () {
    let xpath='/html/body/div[1]/div[2]/div[1]/div/div[1]/div[1]/div[2]/h1[1]/h3';
    driver.findElement(By.xpath(xpath)).getText();
});

Then('I click on Crear Evento Button', function () {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div[1]/div[3]/div[2]/button[1]';
    driver.findElement(By.xpath(xpath)).getText();
  });

  Then('I fill {string}, {string},{string} and {string} in the event card', function (name, description, place, date) {
    driver.findElement(By.name('nombre_evento')).sendKeys(name);
    driver.findElement(By.name('descripcion_evento')).sendKeys(description);
    driver.findElement(By.name('lugar_evento')).sendKeys(place);
    driver.findElement(By.name('fecha_evento')).sendKeys(date);
  });

  Then('I click on Guardar Evento', function () {
    let xpath = '/html/body/div[5]/div/div[1]/div/div/form/div[11]/button[1]';
    driver.findElement(By.xpath(xpath)).click();
  });

  Then('I can see the event created on the Eventos page', function () {
    driver.quit();
  });