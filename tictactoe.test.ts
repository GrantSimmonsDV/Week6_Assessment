import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterEach(async() => {
    driver.navigate().refresh()
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(3000)
});

test ('Click of upper left square adds an X', async () => {
    let upperLeft = await driver.findElement(By.id('cell-0'))
    await upperLeft.click()
    await driver.sleep(2000)
})

test ('Click of middle left square after clicking upper left square adds an X', async () => {
    let upperLeft = await driver.findElement(By.id('cell-0'))
    await upperLeft.click()
    await driver.sleep(2000)
    let middleLeft = await driver.findElement(By.id('cell-3'))
    await middleLeft.click()
    await driver.sleep(4000)
})

test('X is changes to an O in middle far left sqaure', async () => {
    let upperLeft = await driver.findElement(By.id('cell-0'))
    await upperLeft.click()
    await driver.sleep(2000)
    let middleLeft = await driver.findElement(By.id('cell-3'))
    await middleLeft.click()
    await driver.sleep(4000)
    let center = await driver.findElement(By.id('cell-4'))
    await center.click()
    await driver.sleep(3000)
})


