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

Given('I have browsed to the Start Americas Together login page', ()=> {
    driver.get(BaseUrl);
    driver.manage().window().maximize();
  });
Given('I have entered {string} into the email field', (email)=> {
    driver.findElement(By.name('email')).sendKeys(email);
});
Given('I have entered {string} into the password field',  (password)=> {
    driver.findElement(By.name('password')).sendKeys(password);
});
When('I press the {string} button', (code)=> {
    let xpath=`//*[@id="root"]/div[2]/div[1]/div/div[2]/div[2]/div/form/div/button`;
    driver.findElement(By.xpath(xpath)).click();
  });
Then('the welcome message should be dispayed on the screen',()=> {
  let xpath = '/html/body/div/div[2]/header';
  driver.findElement(By.xpath(xpath)).getText();
  driver.quit();
});