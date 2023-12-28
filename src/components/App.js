
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
const [text,setText]=useState("");
function catchChnage(event){
  setText(event.target.value);
}

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" value={text} onChange={catchChnage} />
        {
        text && (
          <p>Hello {text}!</p>
        )
}
    </div>
  )
}

export default App
