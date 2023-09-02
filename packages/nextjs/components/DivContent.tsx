// @ts-nocheck

import React, { Component } from 'react';

interface DivContentProps {
    // @todo: migrate to correct types
    text: any
    lang: any
}

const DivContent = (props: DivContentProps) => {



    // function closeDiv() {
    //     // @ts-ignore
    //     document.querySelector('.absolute-content-div').className = "doNOTdisplay absolute-content-div"
    //     // @ts-ignore
    //     document?.querySelector('.black-overlay').className = 'doNOTdisplay black-overlay';
    // }


    var className = "doNOTdisplay absolute-content-div"


    return (
        <div className={className}>
            <span className="closing_cross" onClick={() => {}}><img src="./pictures/closing_picture.png"></img></span>
            <h2 className="final-title">

                {props.text.mainTitle[props.lang]}
            </h2>
            <p>{props.text.firstParagraph[props.lang]}</p>
            <h3>{props.text.firstTitle[props.lang]}</h3>
            <p>{props.text.secondParagraph[props.lang]}</p>
            <h3>{props.text.secondTitle[props.lang]}</h3>
            <p>{props.text.thirdParagraph[props.lang]}</p>
            <p>{props.text.fourthParagraph[props.lang]}</p>
            <p>{props.text.conclusion[props.lang]}</p>
        </div>
    );
}


export default DivContent