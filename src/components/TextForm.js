import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };

  const handleDwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  };

  const handleRmClick = () => {
    setText("");
    props.showAlert("Removed successfully", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCpClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copyed successfully", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3 ">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(14 41 63)",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            placeholder="Enter text here"
            rows="8"
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-3"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-3 my-3 ml-0"
            onClick={handleDwClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-0 my-3"
            onClick={handleCpClick}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-3 my-3"
            onClick={handleRmClick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>your text summary here.</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          Mintues read.
        </p>
        <h2>Text preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
