import React from 'react';
import ReactDomServer from 'react-dom/server';
import Catalog from './src/Catalog'

const render = (products) => {
  return ReactDomServer.renderToString(<Catalog products = { products }/>)
};

export default render;
