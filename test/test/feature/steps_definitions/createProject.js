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

Given('the core team user is logged at Start Americas Together homepage', function () {
    driver.get(BaseUrl);
    driver.manage().window().maximize();
    driver.findElement(By.name('email')).sendKeys('core.team.auxiliar@star.auxiliar.com');
    driver.findElement(By.name('password')).sendKeys('coreteam1');
    let xpath='/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button/span[1]';
    driver.findElement(By.xpath(xpath)).click();
});

Given('I press the Proyectos button', function () {
   let xpath = '/html/body/div[1]/div[2]/header/div[2]/div/button[2]/span[1]';
   driver.findElement(By.xpath(xpath)).click();
});

When('I press the button to create a new proyect {string}', function (string) {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div/div[2]/button/span[1]';
    driver.findElement(By.xpath(xpath)).click();
});

When('I fill {string}, {string},{string} and {string} in the project card', function (start, end, name, desc) {
    driver.findElement(By.name('fecha_inicio')).sendKeys(start);
    driver.findElement(By.name('fecha_fin')).sendKeys(end);
    driver.findElement(By.name('titulo')).sendKeys(name);
    driver.findElement(By.name('descripcion')).sendKeys(desc);
});

When('click on Crear Proyecto button', function () {
    let xpath = '/html/body/div[3]/div[3]/form/div[2]/div[11]/input';
    driver.findElement(By.xpath(xpath)).click();
});

Then('I can see the project created in the Medio Ambiente projects', function () {
    driver.quit();
  });