const { setWorldConstructor } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");


class test{
    constructor(){
        this.driver= null;
    }
    async openChromer(url){
        if(!this.driver){
            this.driver= await new Builder().forBrowser('chrome').build();
        }
        await this.driver.get(url);
    }
    async closeChromer(url){
        if(!this.driver){
            this.driver.quit();
        }
    }
};

setWorldConstructor(test)