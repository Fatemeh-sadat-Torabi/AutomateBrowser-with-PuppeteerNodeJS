const puppeteer = require('puppeteer');
( async()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://iq.inrix.com/?l=1");
    await page.waitForSelector("#landing-hero > div.landing-hero__form-container > div > form");
    
    await page.type("#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > div.v-input.form-email-field.field-input-box.v-input--hide-details.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.form-text-field > div > div > div > input", "username" , {delay:100} );
    await page.type("#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > div.v-input.form-password-field__text-icon.field-input-box.v-input--hide-details.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.form-text-field > div > div > div.v-text-field__slot > input", "password" , {delay:100});
    page.evaluate(_ => {
        window.scrollBy({top: 250, behavior: "instant"});
    });
    await page.waitForSelector("#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > button.inrix-button.btn.button.landing-hero__button.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--light.v-size--default.ignore");
    await page.click("#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > button.inrix-button.btn.button.landing-hero__button.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--light.v-size--default.ignore",{clickCount:2});
    await page.waitForSelector("#app > div > div > main > div > div > div > div > div > div.grid-layout__container > div:nth-child(2)");
    await page.click("#app > div > div > main > div > div > div > div > div > div.grid-layout__container > div:nth-child(2)");
    await page.waitForSelector("#locationTypes > div:nth-child(2) > label > input");
    await page.click("#locationTypes > div:nth-child(2) > label > input");
    await page.waitForSelector("#studyLocations > div > button");
    await page.click("#studyLocations > div > button");
    let startDate = "2022-04-15";
    let endDate = "2022-04-18";
    for(let i=1;i<=32;i++){
        await new Promise(resolve=>setTimeout(resolve,5000));
        await page.waitForSelector("#searchRegions > form > div > div.dropdownFields > div:nth-child(2) > div > div > input:not([disabled])");
        await page.click("#searchRegions > form > div > div.dropdownFields > div:nth-child(2) > div > div > input");
        await page.waitForSelector("#searchRegions > form > div > div.dropdownFields > div:nth-child(2) > div > div > ul > li:nth-child(6) > a ");
        await page.click("#searchRegions > form > div > div.dropdownFields > div:nth-child(2) > div > div > ul > li:nth-child(6) > a");
        await page.waitForSelector("#searchRegions > form > div > div.dropdownFields > div:nth-child(3) > div > div > input");
        await page.click("#searchRegions > form > div > div.dropdownFields > div:nth-child(3) > div > div > input");
        await page.waitForSelector("#searchRegions > form > div > div.dropdownFields > div:nth-child(3) > div > div > ul");
        await page.waitForSelector(`#searchRegions > form > div > div.dropdownFields > div:nth-child(3) > div > div > ul > li:nth-child(${i})`);
        let element = await page.waitForSelector(`#searchRegions > form > div > div.dropdownFields > div:nth-child(3) > div > div > ul > li:nth-child(${i}) >a`); // select the element
        let value = await element.evaluate(el => el.textContent);
        console.log(value);
        await page.click(`#searchRegions > form > div > div.dropdownFields > div:nth-child(3) > div > div > ul > li:nth-child(${i})`);
        await page.waitForSelector("#searchRegions > form > div > div.col-md-6 > div > div > span > div > button:not([disabled])");
        await page.click("#searchRegions > form > div > div.col-md-6 > div > div > span > div > button");
        await page.waitForSelector("#searchRegions > form > div > div.col-md-6 > div > div > span > div > ul");
        await page.waitForSelector("#searchRegions > form > div > div.col-md-6 > div > div > span > div > ul > li:nth-child(4)");
        await page.click("#searchRegions > form > div > div.col-md-6 > div > div > span > div > ul > li:nth-child(4)");
        await page.waitForSelector("#searchRegions > form > div > div.col-md-6 > div > div > span > div > ul > li:nth-child(5)");
        await page.click("#searchRegions > form > div > div.col-md-6 > div > div > span > div > ul > li:nth-child(5)");
        await page.waitForSelector("#submitSearch");
        await page.click("#submitSearch");
        await page.waitForSelector("#wrapper > header.active-view-header--expanded.study-location");
        await page.waitForSelector("#wrapper > header.active-view-header--expanded.study-location > div > button.ix-button.ix-button--primary:not([disabled])");
        await page.click("#wrapper > header.active-view-header--expanded.study-location > div > button.ix-button.ix-button--primary");
        await page.waitForSelector("#saveStudyLocationModal");
        await page.waitForSelector("#saveStudyLocationModal > div");
        await page.waitForSelector("#saveStudyLocationModal > div > div > form");
        await page.waitForSelector("#studyLocationName");
        await page.type("#studyLocationName",`${value}`);
        await page.waitForSelector("#addStudyLocation");
        await page.click("#addStudyLocation");
        // #add-date-parameters-container > div.pull-right > button
        //await page.waitForSelector("#add-date-parameters-container > div.pull-right > button > span");
        // #studyDates > div > button
        if (i===1){
            await page.waitForSelector("#studyDates > div > button:not([disabled])");
            await page.click("#studyDates > div > button");
            await page.waitForSelector("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input");
            await page.click("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input");
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.type("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input",`${startDate}`);
            await page.waitForSelector("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input");
            await page.click("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input");
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.type("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input",`${endDate}`);
            await page.waitForSelector("#modal > div > div > div.modal-footer > div");
            await page.click("#modal > div > div > div.modal-footer > div");
            await page.waitForSelector("#modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary");
            await page.click("#modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary");
        }
        else{
            await page.waitForSelector("#add-date-parameters-container > div.pull-right > button:not([disabled])");
            await page.click("#add-date-parameters-container > div.pull-right > button");
            await page.waitForSelector("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input");
            await page.click("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input");
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.type("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input",`${startDate}`);
            await page.waitForSelector("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input");
            await page.click("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input");
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.type("#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input",`${endDate}`);
            await page.waitForSelector("#modal > div > div > div.modal-footer > div");
            await page.click("#modal > div > div > div.modal-footer > div");
            await page.waitForSelector("#modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary");
            await page.click("#modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary");
            //#modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary
        }
        await page.waitForSelector("#granularities > button:nth-child(2)");
        await page.click("#granularities > button:nth-child(2)");
        await page.waitForSelector("#overview-save-study");
        await page.click("#overview-save-study");
        await page.waitForSelector("#modal > div > div");
        if(i===1){
            await page.waitForSelector("#modal input[type=text]");
            await page.type("#modal input[type=text]",`${value}`);
            await page.waitForSelector("#modal > div > div > form > div.modal-footer > div > button.ix-button.ix-button--primary:not([disabled])");
            await page.click("#modal > div > div > form > div.modal-footer > div > button.ix-button.ix-button--primary");
        }
        else{
            await page.waitForSelector("#modal > div > div > form > div.modal-footer > div > button:nth-child(1)");
            await page.click("#modal > div > div > form > div.modal-footer > div > button:nth-child(1)");
            await page.waitForSelector("#studyName");
            await page.click("#studyName");
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await page.type("#studyName",`${value}`);
            await page.waitForSelector("#modal > div > div > form > div.modal-footer > div > button.ix-button.ix-button--primary:not([disabled])");
            await page.click("#modal > div > div > form > div.modal-footer > div > button.ix-button.ix-button--primary");

        }
        await page.waitForSelector("#wrapper > ul");
        await page.waitForSelector("#wrapper > ul > li:nth-child(3) > a");
        await page.click("#wrapper > ul > li:nth-child(3) > a");
        await page.waitForSelector("#generateBottleneckReport");
        await page.click("#generateBottleneckReport");
        // to download main data with blue button:
        // await page.waitForSelector("#wrapper > ul > a");
        // await page.click("#wrapper > ul > a");
        // await page.waitForSelector("#modal > div > div");
        // await page.waitForSelector("#modal > div > div > form > div.modal-footer > button.ix-button.ix-button--primary.run-report");
        // await page.click("#modal > div > div > form > div.modal-footer > button.ix-button.ix-button--primary.run-report");
        // await page.waitForSelector("#wrapper > div.ix-sidenav > aside > ul > li:nth-child(2) > a > i");
        // await page.click("#wrapper > div.ix-sidenav > aside > ul > li:nth-child(2) > a > i");
        // await page.waitForSelector("#ReportsDataTable > tbody > tr:nth-child(1)");
        // await page.click("#ReportsDataTable > tbody > tr:nth-child(1)");
        // await page.keyboard.press('Tab');
        // await page.waitForSelector("#ReportsDataTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > a:nth-child(1) > span");
        // await page.click("#ReportsDataTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > a:nth-child(1) > span");
        
        // to download other way:
        await page.waitForSelector("#summaryTable");
        await page.waitForSelector("#summaryTable > tbody > tr.selected-row");
        await page.waitForSelector("#downloadBottleneckSummary:not([disabled])");
        await page.click("#downloadBottleneckSummary",{clickCount:2});
        await page.goBack();
        

    }
    

})()


// #landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > div.v-input.form-email-field.field-input-box.v-input--hide-details.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.form-text-field > div > div > div
// #landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > button.inrix-button.btn.button.landing-hero__button.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--light.v-size--default.ignore > span > span
// #landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > button.inrix-button.btn.button.landing-hero__button.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--light.v-size--default.ignore
// #onetrust-banner-sdk