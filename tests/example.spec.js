// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });


// PLAN

// import playwright with test and expect DONE
// A user visits the site,
 // set url as variable DONE
 // write a test that includes string description and async call-back DONE
 // use await page.goto to link to url DONE

 import {test, expect} from "@playwright/test"

 const url= "http://localhost:3000/"

test("testing url works", async ({page}) => {
await page.goto(url)
})



// adds a new todo to the list, 
// deletes a todo from the list,
// refreshes the page and the todos are still persisted/saved