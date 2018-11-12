const express = require('express');
require('@babel/register');

const products = require('./constants/products.js').default
const render = require('./render').default;

const app = express();

app.get('/', (req, res) => {
  const response = `
    <!doctype html>
    <html>
      <head>
        <title>React, hello</title>
      </head>
      <body>
        <div id="root">${ render(products) }</div>
      </body>
    </html>
  `;

  res.send(response);
});

app.listen(3001, () => console.log('server run on 3001 port'));