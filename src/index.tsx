import React from 'react';
import Fastify from 'fastify';

import {App} from './components';
import {generateHtmlPage} from './utils';

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
