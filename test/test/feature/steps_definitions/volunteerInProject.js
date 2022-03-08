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

Given('I press the Medio Ambiente projects', function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[1]/div/div/a/button/div';
    driver.findElement(By.xpath(xpath)).click();
});

Given('I see the diferent projects of Medio Ambiente', function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[1]/div[2]/div[1]/h3';
    driver.findElement(By.xpath(xpath)).getText();
  });

When('I choose Proyecto de demo project', function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[2]/div[1]';
    driver.findElement(By.xpath(xpath)).getText();
});

When('I press the Unirme button', function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[2]/div/div/button/span[1]/div';
    driver.findElement(By.xpath(xpath)).click();
});

Then('I should see Participando at the right corner of the project', function () {
    let xpath = '/html/body/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[3]/span[1]';
    driver.findElement(By.xpath(xpath)).getText();
    driver.quit();
});
