import React, {ReactElement} from 'react';
import ReactDOMServer from 'react-dom/server';
import Fastify from 'fastify';
import fs from 'fs';
import path from 'path';

import {App} from './components';

const generateHtmlPage = (title: string, element: ReactElement): string => {
  let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
  html = html.replace('<title></title>', `<title>${title}</title>`);
  html = html.replace(
    '<body></body>',
    ReactDOMServer.renderToStaticMarkup(<body>{element}</body>)
  );
  return html;
};

const fastify = Fastify();

fastify.get('/', (request, reply) => {
  reply
    .type('text/html')
    .send(generateHtmlPage('React Server Side Test', <App />));
});

fastify.listen(8080, '127.0.0.1', (error, address) => {
  if (error) {
    throw error;
  }
  console.log(address);
});
