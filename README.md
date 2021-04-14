## Function
* Example response:
    ```JS
    const sec2human = require('sec2human');

    console.log(sec2human(8941));
    // 02:29:01

    console.log(sec2human('41'));
    // 00:41

    console.log(sec2human(92));
    // 01:32

    console.log(sec2human(0));
    // undefined

    console.log(sec2human(true));
    // undefined

    console.log(sec2human('xx'));
    // undefined
    ```
## Installation
* `npm i sec2human --save`