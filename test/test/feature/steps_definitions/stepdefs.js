//Cucumber
const assert= require("assert");
const {Given, When,Then}= require("cucumber");
let example=require("../../function/examplefunctions")
//Selenium
const {By,Key,until,WebDriver} =require("selenium-webdriver")
let driver= WebDriver;
//import {By,Key,until,WebDriver} from 'selenium-webdriver'


Given('print hello', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.greet="Hi";
  });

  When('I want to print in console', function () {
    // Write code here that turns the phrase above into concrete actions
    this.greetings=example.greetings(this.greet);      
  });

  Then('I write code {string}', function (code) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.greetings,code);
  });
