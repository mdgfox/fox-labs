# kitsune-material

> Simple sandbox playground for react components

[![NPM](https://img.shields.io/npm/v/kitsune-material.svg)](https://www.npmjs.com/package/kitsune-material) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save kitsune-material
```

## Usage

```tsx
import React, { Component } from 'react'

import FooterFire from 'kitsune-material'
import 'kitsune-material/dist/index.css'

class Example extends Component {
  render() {
      return (
          <FooterFire>Footer Content</FooterFire>
      );
  }
}
```

## JS functions performance test
```js
console.time('startTime');
console.log(() => {
    forEach([1, 2, 3, 4, 5, 6, 7, 8], (value) => {
        console.log(value);
    });
});
console.timeEnd('endTime');
```

## License

MIT © [mdgfox](https://github.com/mdgfox)
