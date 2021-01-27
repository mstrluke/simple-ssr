require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const express = require('express');
const path = require('path');
const htmlTemplate = require('./htmlTemplate').default;
const { collectFileContent } = require('file-content-reader');


const app = express();

app.use(express.static(path.resolve(process.cwd() + '/build')));
app.get('/*', (req, res) => {
  const data = collectFileContent(path.resolve(process.cwd() + '/src'), ['.css'], 'utf8');
  const html = htmlTemplate(res, req, data.css);
  res.send(html);
});
app.listen(3000, console.log('Started on http://localhost:3000'));
