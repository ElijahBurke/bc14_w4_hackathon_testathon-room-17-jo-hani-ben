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
/*
 import {test, expect} from "@playwright/test"

 const url= "http://localhost:55868"

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

 test("Refresh page and retain inputs", async ({page}) => {
  await page.goto(url);

  await page.reload();

 });
*/





//--------------------------------------------------------------------------------------------

 import {test, expect} from "@playwright/test"

 const url= "http://localhost:55435"


// Create a suite of tests for the todo app.
test.describe('todo tests', () => {

  // Declare a variable to store the page object.
  test.beforeEach(async ({ page }) => {

    // Go to the todo app before each test.
    await page.goto(url);

  });

  // Test to check the input field 
  test("input field", async ({page}) => {

    // Get the input field.
    const input = page.getByRole("textbox", { name: "task" });
    // Check that the input field is empty.
    await expect(input).toBeEmpty();
  });


  // Test to add text to input field
  test("add text to input field", async ({page}) => {
    // Get the input field.
    const input = page.getByRole("textbox", { name: "task" });
    // Fill the input field with the text "wash the cat"
    await input.fill("wash the cat");
    // Check that the input field contains the text.
    await expect(input).toHaveValue("wash the cat");
  });

  // Check date field is empty 
  test("date field is empty", async ({page}) => {
    // Get the date field and store in a variable called dateBox
    const dateBox = page.getByLabel("Completion date");
    // Check that the value of dateBox is empty
    await expect(dateBox).toBeEmpty();
  });

  // Input a date into the date field
  test("choose date", async ({page}) => {
    // Variable dateBox assigned to page locator that targets an 'INPUT' element with a 'TYPE' of 'DATE'
    const dateBox = page.locator('input[type="date"]');
    // Choose a date
    const chosenDate = "2023-04-10";
    // Fill the date field with the chosen date
    await dateBox.fill(chosenDate);
    // Check that the date field contains the chosen date
    await expect(dateBox).toHaveValue(chosenDate);
  });

  // Test Add button works without input in todo or date fields
  test("test of create button", async ({page}) => {
    await page.getByTitle("Create a new todo").click();

    await expect(page.getByRole("list")).toBeEmpty();

  });

  // Test successful creation of todo item if text and date are added
  test("create new todo", async ({page}) => {
    // Select input field and add text
    await page.getByRole("textbox", { name: "task" }).fill("creosote the rhinoceros");
    // Select date field and choose date
    await page.fill("[type=date]", "2023-04-15");
    // click button to add to list
    await page.getByTitle("Create a new todo").click();
    // Assert that list item has text "creosote the rhinoceros" as regex
    await expect(page.getByRole("list")).toHaveText(/creosote the rhinoceros/);
    // Assert that time displays "15/04/2023" - Format we amended in the js files
    await expect(page.getByRole("time")).toHaveText("15/04/2023");
  });

  

});