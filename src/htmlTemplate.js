import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';

export default (res, req, styles = []) => {
  const content = renderToString(<App />);
  const styleTags = styles.map(({name, content}) => {
    return `
      <style id="server-side-css" data-name="${name}">
        ${content}
      </style>
    `
  }).join('');

  return `
    <html>
      <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>EJS App</title>
        ${styleTags}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `;
};