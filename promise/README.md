https://8thlight.com/blog/eric-smith/2011/10/27/thats-not-yours.html

---

1. Put all the tests in place
2. Run only `./promise/index.spec.js` test file

```
 npm test -- ./promise/index.spec.js --watch
 .only
```

3. Run only first test

```
 .only
```

4. Promisify first test
5. Promisify production code
6. Refactor test: Adds .catch to it and nock
7. Refactor production code: `Promise.all`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

8. Refactor test code: Jest syntax sugar

https://jestjs.io/docs/en/asynchronous

---

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment