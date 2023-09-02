import React, { Component, MouseEventHandler, useEffect } from 'react';

interface MainButtonProps {
    createAndRemoveGraphicEffect(arg0: string, arg1: string, arg2: string, arg3: string): unknown;
    productivity: string;
    increase: MouseEventHandler<HTMLButtonElement> | undefined;
    text: any;
    lang: any;
    firstMachine: any;

}

const MainButton = (props: MainButtonProps) => {

    useEffect(() => {
        let mainButton = document?.getElementById('main-button-id');

        mainButton?.addEventListener('click', () => {
            props.createAndRemoveGraphicEffect('+' + props.productivity, 'ul-main-number', 'li', 'graphInput');
        });

    }, [])


    return (
        <button onClick={props.increase} className="main-button" id="main-button-id">
            <p className="main-button-firstline">{props.text.mainButtons.mainButtonCreate[props.lang]}</p> <ul className="main-button-number" id="ul-main-number">
                <li>{props.productivity}</li>
            </ul><p className="main-button-secondline">{props.firstMachine ? props.text.mainButtons.mainButtonPaperclipMultiple[props.lang] : props.text.mainButtons.mainButtonPaperclipSingle[props.lang]}</p>
        </button>);
}

export default MainButton