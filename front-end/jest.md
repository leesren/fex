# jest unit test 
##  ES6 project
* install `babel-cli` and `preset`
```shell
npm install --save-dev babel-cli babel-preset-env
```
* create `.babelrc` file
```
{
  "presets": ["env"]
}
```
* install `jest` 
```shell
npm install --save-dev jest
```
* install `babel-jest` and `regenerator-runtime`
```shell
npm install babel-jest regenerator-runtime --save-dev
```
> Explicitly installing `regenerator-runtime` is not needed if you use `npm` 3 or 4 or `Yarn`
* config `jest`
more detial see [configuration](https://facebook.github.io/jest/docs/configuration.html#content),
add the config to  `package.json` 
```json
{
  "name": "jest",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "babel-cli": "^6.24.1",
    "babel-jest": "^19.0.0",
    "babel-preset-env": "^1.4.0",
    "jest": "^19.0.2"
  },
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "jsdom"
  }
}
```

## start 
create `__test__` folder and name your test files with a `.spec.js` or `.test.js` extension 

1. test your `.js` file, `sum.js`
```javascript
const sum = (a, b) =>{
  return a + b;
}
export default sum;
```
2. write test file `sum.test.js`
```javascript
import sum from './sum';
test('test sum plus',()=>{
    expect(sum(3,4)).toBe(7);
})
```
3. run test unit 
```shell
npm run test
# or
npm t
```