## selenium-webdriver throws without capturing the stacktrace

`yarn` or `npm install`

`yarn test` or `npm test`

The result is that the error won't be cought [here](https://github.com/corevo/webdriver-async-failure/blob/master/async.test.js#L12), nor will jest.  
It will cause jest to unexpectedly exit, before even giving time to quit the drivers correctly.

![image](https://user-images.githubusercontent.com/888886/43205148-5f43f03a-902b-11e8-8a22-1b472b2ebf8b.png)
