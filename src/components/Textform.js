import React, { useState } from 'react'
export default function Textform(props) {

    const handleupclick = () => {
        // console.log("Onclicked used ,Render " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClearclick = () => {
        // console.log("Onclicked used ,Render " + text);
        let newText = text.replace(text, "");
        setText(newText);
    }

    const handleCopyclick = () => {
        // var text = document.getElementById("mybox").select();
        // navigator.clipboard.writeText(text.value);

    }
    // const handleremovextraSpace = () => {
    //     let newText = text.split(/[ ]/ + /);
    //     setText(newText.join(" "));
    // }


    const handlelowerclick = () => {
        // console.log("Onclicked used ,Render " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapitalizeclick = () => {
        const arr = text.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        const Capitalize = arr.join(" ");
        setText(Capitalize);
    }

    const handletoggleclick = () => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1).toUpperCase();
        }
        const Capitalize = arr.join(" ");
        setText(Capitalize);

    }

    const onchanged = (event) => {
        // console.log("Onclicked used ,Render");
        setText(event.target.value);
    }


    const [text, setText] = useState("");

    return (
        <>
            <div>
                <hr className='head-hr mt-4 my3' />
                <b>
                    <h1 className='size-font mt-5 my-1'>{props.heading}</h1>
                    {/* in Bootstrap : t for top , l for left , r for right , x for x-axix ,y for y-axix, b for bottom */}
                </b>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onchanged} id="mybox" rows={15} > </textarea>
                </div>
                <button className="btn btn1 btn-success mx-2" onClick={handleupclick} >UPPER CASE</button>
                <button className="btn btn2 btn-success mx-2" onClick={handlelowerclick} >lower case</button>
                <button className="btn btn3 btn-success mx-2" onClick={handleCapitalizeclick} >Capitalize Word</button><button className="btn btn4 btn-success mx-2" onClick={handletoggleclick} >tOGGLE cASE</button>
                <button className="btn btn5 btn-success mx-2" onClick={handleCopyclick} >Copy Text</button>
                <button className="btn btn6 btn-success mx-2" onClick={handleClearclick} >Remove Text</button>
                <button className="btn btn1 btn-success mx-2" onClick={window.print} >Print Utiles</button>

            </div>
            <br />
            <div className="container my-3">
                <h1>Your Text Summarises as : </h1>
                <p>{(text.split(" ").length - 1)} Words and {text.length} Charcters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <p className='my-3'><b>

                    <h1 className='size-font'>Preview Your Text</h1>
                </b></p>
                <p className='my-5'>{text}</p>
            </div>
        </>

    )
}
