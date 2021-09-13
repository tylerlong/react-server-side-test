import React from 'react';
import ReactDomServer from 'react-dom/server';

const element = <h1>Hello</h1>;

const html = ReactDomServer.renderToString(element);
console.log(html);
const html2 = ReactDomServer.renderToStaticMarkup(element);
console.log(html2);
