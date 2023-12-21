
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
        <input type="text" onChange={catchChnage} />
        {
        text && (
          <p>Hello {text}!</p>
        )
}
    </div>
  )
}

export default App
