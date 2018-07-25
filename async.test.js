/**
 * @jest-environment selenium
 */

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

test('will async-ly fail', async () => {
  await driver.get((new URL('/wiki/Legislation', 'https://en.wikipedia.org/')).href);
  await driver.wait(until.elementLocated(By.linkText(`enacted`)), configuration.timeout);
  const element = await driver.findElement(By.linkText(`enacted`));
  await driver.actions().click(element).perform().catch(() => {});
});

afterEach(async () => {
  await setTimeoutPromise(3000);
  console.log('heyy');
  //await cleanup();
});
