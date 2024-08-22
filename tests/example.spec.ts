import test from "@playwright/test";
import { expect } from "@playwright/test";
import { text } from 'stream/consumers';

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.screenshot({ path: "screenshots/screenshot.png", fullPage: true });
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("go to home page", async ({ page }) => {
  await page.goto("https://lightning-js.github.io/solid-demo-app/#/");
});

test("go to todo page", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  await page.screenshot({ path: "screenshots/screenshot.png", fullPage: true });
  // await expect(page).toHaveScreenshot({ maxDiffPixels: 10 });
  const newTodo = page.getByPlaceholder("What needs to be done?");
  await newTodo.fill("EAT ORANGE");
  await newTodo.press("Enter");
  await expect(page).toHaveScreenshot({ maxDiffPixels: 10 });
  await expect(page.getByTestId("todo-title")).toHaveText(["EAT GRAPEFRUIT"]);
});

test("enter key press", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  const newTodo = page.getByPlaceholder("What needs to be done?");
  await newTodo.fill("EAT GRAPE");
  await newTodo.press("Enter");
  await expect(page.getByTestId("todo-title")).toHaveText(["EAT GRAPE"]);
});

test('testing bounding box',async ({page}) =>{
  await page.goto("https://demo.playwright.dev/todomvc");
  const newTodo = await page.getByPlaceholder("What needs to be done?").boundingBox();
  console.log(newTodo)
})

test('test properties of component using evaluate',async ({page})=>{
  await page.goto("https://demo.playwright.dev/todomvc");
  const title = await page.getByRole("heading",{name:'todos'})
 // console.log(title)
  await title.evaluate((ele)=>{
      console.log(ele.textContent)
  })
})

test('testing color',async ({page})=>{
  await page.goto("https://playwright.dev/");
  const title = await page.getByRole('link', { name: '.NET' })
  await expect(title).toHaveCSS("color", "#45BA4B")
})

test('grab all text elements',async ({page})=>{
  await page.goto("https://playwright.dev/");
const textItems = await page.getByText('Playwright').all()
console.log(textItems)
})

test('grab all elements on a page',async ({page})=>{
  await page.goto("https://demo.playwright.dev/todomvc");
const result = await page.content()
console.log(result)
})

test('testing video playback',async ({page})=>{
  await page.goto("https://maitv-vod.lab.eyevinn.technology/VINN.mp4/master.m3u8")
  const videolocator = page.locator('video')
  console.log(videolocator)
})

test('screenshot of specific element',async ({page})=>{
  await page.goto("https://demo.playwright.dev/todomvc");
  await expect(page.locator)
  
})


