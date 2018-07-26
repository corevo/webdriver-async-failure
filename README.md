## selenium-webdriver throws without capturing the stacktrace

`yarn` or `npm install`

`yarn test` or `npm test`

The result is that the error won't be caught [here](https://github.com/corevo/webdriver-async-failure/blob/master/async.test.js#L12), nor will jest.  
It will cause jest to unexpectedly exit, before even giving time to quit the drivers correctly.

## Difference in stacktrace capturing, the test framework is able to catch the error

![image](https://user-images.githubusercontent.com/888886/43205148-5f43f03a-902b-11e8-8a22-1b472b2ebf8b.png)

## Proposed solution

A change to `perform()`.  
https://github.com/SeleniumHQ/selenium/blob/selenium-3.6.0/javascript/node/selenium-webdriver/lib/actions.js#L116

```js
perform() {
  // Make a protected copy of the scheduled actions. This will protect against
  // users defining additional commands before this sequence is actually
  // executed.
  let actions = this.actions_.concat();
  let driver = this.driver_;
  return Promise.all(actions.map((action) => {
    return driver.schedule(action.command, action.description);
  }));
}
```
