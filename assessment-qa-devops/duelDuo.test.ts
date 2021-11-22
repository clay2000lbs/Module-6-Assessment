
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the Draw button displays the div with id = choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const choicesDiv = await driver.findElement(By.id('choices'))
    const displayed = await choicesDiv.isDisplayed()
    expect(displayed).toBe(true)
})