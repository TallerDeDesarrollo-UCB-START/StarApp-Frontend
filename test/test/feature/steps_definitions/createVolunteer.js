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
let BaseUrl="https://dev-front-startamericas.web.app"

Given('I have browsed to the Start Americas Together homepage', function () {
    driver.get(BaseUrl);
    driver.manage().window().maximize();
});

When('I press the login button at the right corner', function () {
   let xpath = '/html/body/div/div[2]/header/div[1]/div[3]/button/span[1]';
   driver.findElement(By.xpath(xpath)).click();
});


When('I press the ¿No tienes cuenta? option', function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div[2]/div/form/div/div[4]/a';
    driver.findElement(By.xpath(xpath)).click();
});

When('I fill {string}, {string},{string},{string},{string} and {string} in the crear cuenta page', function (nom, apellido, correo, tel, pass, confpass) {
    driver.findElement(By.name('username')).sendKeys(nom);
    driver.findElement(By.name('lastname')).sendKeys(apellido);
    driver.findElement(By.name('email')).sendKeys(correo);
    driver.findElement(By.name('phone')).sendKeys(tel);
    driver.findElement(By.name('password')).sendKeys(pass);
    driver.findElement(By.name('confirmPassword')).sendKeys(confpass);
});

When('I press Crear Cuenta start', function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div/div[2]/div[3]/form/div[7]/button/span[1]';
    driver.findElement(By.xpath(xpath)).click();
});

Then('the user will be created and can login with my {string} and {string}', function (email, password) {
    driver.findElement(By.name('email')).sendKeys(email);
    driver.findElement(By.name('password')).sendKeys(password);
    driver.quit();
});