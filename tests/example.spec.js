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

 const url= "http://localhost:3000"

test("testing url works", async ({page}) => {
await page.goto(url)
});


// Test to check the placeholder text
test ('has an input', async ({page})=> {
  await page.goto(url);

  const input = page.getByRole("textbox", {name:"task"});

  await expect(input).toHaveAttribute('placeholder', 'Enter a task...');
 });

 // adds a new todo to the list,
 // navigate to the text box element 
 // enter a todo
 // press the button using .click 
 
test("add a new todo to list", async ({page}) => {
  await page.goto(url);

  const inputBox = page.getByRole("textbox", {name:"task"});
  await inputBox.type("wash the cat");

  const dateBox = page.getByText("Completion date", {type:"date"});
  await dateBox.type("07042023");


 const addButton = page.getByRole("button");
 await addButton.click();

})


// deletes a todo from the list,

test("Delete a todo from the list", async ({page}) => {
  await page.goto(url);

  const inputBox = page.getByRole("textbox", {name:"task"});
  await inputBox.type("wash the cat");

  const dateBox = page.getByText("Completion date", {type:"date"});
  await dateBox.type("07042023");

  const addButton = page.getByRole("button");
  await addButton.click();

  const delButton = page.getByTitle("Delete this todo");
  await delButton.click();

});



// refreshes the page and the todos are still persisted/saved
 // could use 

 test("Refresh page and retain inputs", async ({page}) => {
  await page.goto(url);

  await page.reload();

 });