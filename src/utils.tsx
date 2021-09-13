import React, {ReactElement} from 'react';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';

export const generateHtmlPage = (
  title: string,
  element: ReactElement
): string => {
  let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
  html = html.replace('<title></title>', `<title>${title}</title>`);
  html = html.replace(
    '<body></body>',
    ReactDOMServer.renderToStaticMarkup(<body>{element}</body>)
  );
  return html;
};
