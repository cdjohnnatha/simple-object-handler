# Simple Object Handler

## Table of Contents

<!-- vscode-markdown-toc -->
1. [Intro](#Intro)
2. [Why should you use](#Why)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [Tests](#Tests)
6. [License](#License)


## 1. <a name='Intro'></a>Intro

The idea of Simple Object Handler it came with a necessity of make simple functions in a manner of be easier to read and easily handle objects in a way which hasn't as a native functions in JavaScript. It would be possible with these functions to handle objects such as check is empty or not, a lenght of keys or params, clean/remove all empty params (considering empty string, null or undefined), get an array of all keys or params values and much more.

## 2. 🚀 <a name='why'></a>Why should you use ?

1.  Create a better readable code;
2.  Dry your code and avoid reuse many ifs or long Object functions from JavaScript.
3.  Light library.
4.  Easy to install.


## 3. 📦 <a name='Installation'></a>Installation

```
  npm install simple-object-handler
```

## 4. 📖 <a name='Usage'></a>Usage

You can find at simple-object-handler the functions:

* isObjectEmpty 
* isObjectNotEmpty 
* objectKeys 
* objectValues 
* countObjectKeys 
* countObjectValues 
* isObject 
* isParamEmpty 
* removeEmptyFieldsFromObject 


```
  // You can use simply desconstructor way
  const {
    isObjectEmpty
    isObjectNotEmpty
    objectKeys
    objectValues
    countObjectKeys
    countObjectValues
    isObject
    isParamEmpty
    removeEmptyFieldsFromObject
    } = require('simple-object-handler');
```

Would you like to know an example in how to use those functions ? Take a look at the wiki, there you can find an example of all that list of functions.

## 5. 📄 <a name='Tests'></a>Tests

#### You can find more examples how to use the library in test folder.

You can run the applications tests with

```
  npm test
```

## 6. 📄 <a name='License'></a>License
Simple Object Handler is [MIT licensed](./LICENSE).