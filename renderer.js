// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react';
import ReactDOM from 'react-dom';

// My code
ReactDOM.render(
        React.DOM.h1({id: "First H1"}, React.DOM.span(null, React.DOM.em(null,"Hello World!"), "My first Reactjs!")),
        document.getElementById("app")
);