import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Catalog from './src/Catalog'

const render = (products) => {
  return ReactDOMServer.renderToString(<Catalog products = { products }/>)
};

export default render;
