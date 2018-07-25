## selenium-webdriver throws without capturing the stacktrace

`yarn` or `npm install`

`yarn test` or `npm test`

##
The result is that the error won't be cought here, nor will it jest.  
https://github.com/corevo/webdriver-async-failure/blob/master/async.test.js#L12  
It will cause jest to unexpectedly exit, before even giving time to quit the drivers correctly.
