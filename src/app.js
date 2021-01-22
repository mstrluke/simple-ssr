import React from 'react';
import Child from './component';
import './app.css';

export default () => {
  
  React.useEffect(() => {
    const serverCss = document.querySelectorAll('#server-side-css');
    if (serverCss.length) {
      serverCss.forEach(css => {
        css.parentElement.removeChild(css);
      })
    }
  }, []);


  return [
    <div>
      Hello, world !!!
    </div>,
    <Child />
  ]
};
