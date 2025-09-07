import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter the text here');
    // setText("Tanmay Patil");

    const handleUpClick = () => {   // convet to uppercase
        console.log("UpperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success");
    }

    const handleClearClick = () => {  // clear the content
        let newText = ''
        setText(newText)
    }

    const handleLowClick = () => {    // convert to lowercase
        console.log("LowerCase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","success");
    }

    const copyText = () => {   // copy the text
        navigator.clipboard.writeText(text);  // new for me need to go in detail
    }

    const handleOnChange = (event) => {   // to enable the text typing 
        setText(event.target.value)
    }

    const removeExtraSpaces = () => {   // to remove the extra spaces in the textBox
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>
            <div>
                <form>
                    <h1>{props.name}</h1>

                    <div className="form-floating my-3" >
                        <textarea className="form-control" onChange={handleOnChange}  value={text} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    </div>

                    <button type="button" onClick={handleUpClick} className="btn-primary btn my-2 mx-2">Conver To UpperCase</button>
                    <button type="button" onClick={handleLowClick} className="btn-primary btn my-2 mx-2">Conver To LowerCase</button>
                    <button type="button" onClick={copyText} id='myCopy' className="btn-primary btn my-2 mx-2">Copy Text</button>
                    <button type="button" onClick={removeExtraSpaces} className="btn-primary btn my-2 mx-2">Remove Extra Spaces</button>
                    <button type="button" onClick={handleClearClick} className="btn-danger btn my-2 mx-2">Clear</button>

                </form>
            </div>

            <div className="container my-4">

                <h2>TextBox Summary</h2>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>Reading Time: {0.008 * (text.split(" ").length)} min</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text: "--"}</p>

            </div>
        </>
    )
}
