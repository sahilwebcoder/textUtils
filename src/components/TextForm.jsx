import { useState } from "react";
import "./TextForm.css";

const TextForm = (prop) => {
  const [text, setText] = useState("");
  function handleOnChange(event) {
    setText(event.target.value);
  }
  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert('Text converted to Uppercase');
  }
  function handleLoClick() {
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert('Text converted to Lowercase');
  }

  function handleJustifyClick() {
    let justify = text
      .split(" ")
      .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
      .join(" ");
    setText(justify);
    prop.showAlert('Text Justify');
  }
  const handleClearClick = () => {
    setText('');
    prop.showAlert('Text has been cleared');
  }
  let countWord = 0;

  return (
    <>
      <div className="textForm-container">
        <h1 style={{color: prop.mode.color === 'white'? 'white' : 'black'}}>{prop.title}</h1>
        <textarea name="text" value={text} onChange={handleOnChange} style={{backgroundColor: 'white'}}></textarea>
        <button onClick={handleUpClick}>Convert To Uppercase</button>
        <button onClick={handleLoClick}>Convert To Lowercase</button>
        <button onClick={handleJustifyClick}>Justify Text</button>
        <button onClick={handleClearClick}>Clear Text</button>
       </div>
      <div className="textForm-container" style={{color: prop.mode.color === 'white'? 'white' : 'black'}}>
        <h1>Text Summary</h1>
        <p>
          <b> {text=== ''? countWord : text.split(" ").length - 1} </b> Words
          <b> {text.length} </b> Character
        </p>
      </div>
    </>
  );
};

export default TextForm;
