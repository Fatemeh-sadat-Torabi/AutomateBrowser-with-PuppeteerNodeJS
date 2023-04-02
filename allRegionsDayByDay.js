const puppeteer = require("puppeteer");
 // Import filesystem module
const fs = require('fs');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // defaultViewport: null,
    // args: ['--start-maximized'],
    downloadsPath: './downloaded',
  });
  const context = await browser.createIncognitoBrowserContext();
  const page = await browser.newPage();
  let newNames = [];
  await page.goto("https://iq.inrix.com/?l=1");
  await page.waitForSelector(
    "#landing-hero > div.landing-hero__form-container > div > form"
  );
  await page.type(
    "#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > div.v-input.form-email-field.field-input-box.v-input--hide-details.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.form-text-field > div > div > div > input",
    "userName",
    { delay: 200 }
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await page.type(
    "#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > div.v-input.form-password-field__text-icon.field-input-box.v-input--hide-details.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.form-text-field > div > div > div.v-text-field__slot > input",
    "Password",
    { delay: 200 }
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  page.evaluate((_) => {
    window.scrollBy({ top: 250, behavior: "instant" });
  });
  await page.waitForSelector(
    "#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > button.inrix-button.btn.button.landing-hero__button.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--light.v-size--default.ignore"
  );
  await page.click(
    "#landing-hero > div.landing-hero__form-container > div > form > div.content-card__form-content > button.inrix-button.btn.button.landing-hero__button.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--light.v-size--default.ignore",
    { clickCount: 2 }
  );
  await new Promise((resolve) => setTimeout(resolve, 10000));
  await page.waitForSelector(
    "#app > div > div > main > div > div > div > div > div > div.grid-layout__container > div:nth-child(2)"
  );
  await page.click(
    "#app > div > div > main > div > div > div > div > div > div.grid-layout__container > div:nth-child(2)"
  );
//  
  let sDate = ["2022-04-16"];
  let eDate = ["2022-04-20"];
  let startParts = sDate[0].split("-");
  let endParts = eDate[0].split("-");
  let startYear = parseInt(startParts[0]);
  let startMonth = parseInt(startParts[1]);
  let startDay = parseInt(startParts[2]);
  let endYear = parseInt(endParts[0]);
  let endMonth = parseInt(endParts[1]);
  let endDay = parseInt(endParts[2]);
  let j = startDay;
  let days = (endMonth - startMonth) * 31 + (endDay - startDay);
  let thisMonth = startMonth;
  let thisDay = startDay; 
  for (let day = 0; day <= days - 1; day++) {
      if (thisDay + day === 32) {
        thisMonth += 1;
        thisDay = 1;
        days = days - day;
        day = 0;
      }
      console.log(`${startYear}-${thisMonth}-${thisDay+day}`);
      // let dateReport = `${startYear}-${thisMonth}-${thisDay + day}`;
      let dateReport = `${thisDay +day}/${thisMonth}/${startYear}`;
      newNames.push(`${thisDay +day}-${thisMonth}-${startYear}`);
      await page.waitForSelector("#add-study-location-container");
      page.evaluate((_) => {
      window.scrollBy({ top: 750, behavior: "instant" });
      });
      await new Promise((resolve) => setTimeout(resolve, 6000));
      // title = allRegions                             
      // let tdList = await page.$x('table td[title ^= "allRegio"]');
      // console.log(tdList);
      // await page.waitForSelector(tdList[0]);
      // await page.click(tdList[0],{clickCount:2});
      await page.waitForSelector("#pagedStudiesTable > tbody > tr:nth-child(1)");
      await page.click("#pagedStudiesTable > tbody > tr:nth-child(1)",{clickCount:2});

      page.evaluate((_) => {
        window.scrollBy({ top: 20, behavior: "instant" });
      });
      await new Promise((resolve) => setTimeout(resolve, 10000));
      await page.waitForSelector("#studyDates > ul > li");
      await page.waitForSelector("#studyDates > ul > li > div > div.pull-right > a:nth-child(2)");
      await page.click("#studyDates > ul > li > div > div.pull-right > a:nth-child(2)",{clickCount:2});
      await new Promise((resolve) => setTimeout(resolve, 10000));
      await page.waitForSelector("#studyDates > div > button");
      await page.click("#studyDates > div > button");
      await page.waitForSelector("#modal > div > div > div.modal-body");
      await new Promise((resolve) => setTimeout(resolve, 6000));
      await page.waitForSelector(
        "#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input"
      );
      // #modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input
      await page.click(
        "#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input",
        {clickCount:2}
      );
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.type(
        "#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(1) > div > div > input",
        `${dateReport}`
      );
      await page.waitForSelector(
        "#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input"
      );
      await page.click(
        "#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input",
        {clickCount:2}
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.type(
        "#modal > div > div > div.modal-body > div.row.date-picker-fields > div > div > div:nth-child(2) > div > div > input",
        `${dateReport}`
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await page.waitForSelector("#modal > div > div > div.modal-footer > div");
      await page.click("#modal > div > div > div.modal-footer > div");
      await page.waitForSelector(
        "#modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary"
      );
      // #modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary
      await page.click(
        "#modal > div > div > div.modal-footer > div > button.ix-button.ix-button--primary"
      );
      page.evaluate((_) => {
        window.scrollBy({ top: 0, behavior: "instant" });
      });
      await page.waitForSelector("#overview-save-study:not([disabled])",{timeout:60000});
      await page.click("#overview-save-study");
    //   await new Promise((resolve) => setTimeout(resolve, 60000));
      await page.waitForSelector("#modal > div > div > form");
      await page.waitForSelector("#modal > div > div > form > div.modal-footer > div > button:nth-child(2)");
      await page.click("#modal > div > div > form > div.modal-footer > div > button:nth-child(2)");
    //   await new Promise((resolve) => setTimeout(resolve, 60000));
      await page.waitForSelector("#wrapper > ul")
      await page.waitForSelector("#wrapper > ul > li:nth-child(3) > a");
      await page.click("#wrapper > ul > li:nth-child(3) > a");
      // await new Promise((resolve) => setTimeout(resolve, 180000));
      await page.waitForSelector("#generateBottleneckReport:not([disabled])");
      console.log('111');
      await page.click("#generateBottleneckReport",{clickCount:2});
      console.log('112');
      await page.waitForSelector("#summaryTable");
      await page.waitForSelector("#summaryTable > tbody > tr.selected-row");
      await page.waitForSelector("#downloadBottleneckSummary:not([disabled])");
      await page.click("#downloadBottleneckSummary", { clickCount: 2 });
      await page.goBack();
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await page.goBack();
      await new Promise((resolve) => setTimeout(resolve, 15000));
       
      }

      console.log(newNames);
      
      for(let k=1;k<newNames.length;k++){
        console.log("downloaded file is renamed to:",newNames[k]);
        // BOTTLENECK (1)
        let fileName = `BOTTLENECK (${k}).zip`;
        let filePath = path.join(__dirname,'../../Downloads', fileName);

        let newFileName = `Bottleneck`+`-${newNames[k]}.zip`;
        let newFilePath = path.join(__dirname,'../../Downloads',newFileName);
        await fs.promises.rename(filePath, newFilePath);
      }

})();