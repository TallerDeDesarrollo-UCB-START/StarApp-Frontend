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

When('I press the button of Participar in the test event', function () {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div/button[1]';
    driver.findElement(By.xpath(xpath)).click();
});

Then('I should see the Dejar de Participar button', function () {
    let xpath = '/html/body/div[1]/div[2]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/div/button[1]';
    driver.findElement(By.xpath(xpath)).getText();
});
