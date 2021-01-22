require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const express = require('express');
const path = require('path');
const htmlTemplate = require('./htmlTemplate').default;
const fileReader = require('file-content-reader')


const app = express();

app.use(express.static(path.resolve(process.cwd() + '/build')));
app.get('/*', (req, res) => {
  const { css } = fileReader(path.resolve(process.cwd() + '/src'), ['.css', '.js']);
  const html = htmlTemplate(res, req, css);
  res.send(html);
});
app.listen(3000, console.log('Started on http://localhost:3000'));
