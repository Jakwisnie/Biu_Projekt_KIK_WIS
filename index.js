import React from 'react';
import ReactDOM from 'react-dom';
import App from "./untitled4/src/App";
import App2 from "./untitled3/src/App";
function Game(a) {

    if (a = 1)
    {    return <App />;
    }  return <App2 />;

}
ReactDOM.render(
  <React.StrictMode>
      <Game  a={1}/>
  </React.StrictMode>,
  document.getElementById('root')
);



