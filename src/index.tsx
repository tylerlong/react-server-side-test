import React from 'react';
import ReactDomServer from 'react-dom/server';
import Fastify from 'fastify';

const element = <h1>Hello</h1>;

const html = ReactDomServer.renderToString(element);
console.log(html);
const html2 = ReactDomServer.renderToStaticMarkup(element);
console.log(html2);

const fastify = Fastify();

fastify.get('/', (request, reply) => {
  reply.type('text/html').send(html);
});

fastify.listen(8080, '127.0.0.1', (error, address) => {
  if (error) {
    throw error;
  }
  console.log(address);
});
