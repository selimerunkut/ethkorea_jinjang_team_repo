import React, { Component, MouseEventHandler, useEffect } from 'react';

interface SellButtonProps {
    count: any;
    unitsSold: any;
    createAndRemoveGraphicEffect(arg0: string, arg1: string, arg2: string, arg3: string): unknown;
    sell: MouseEventHandler<HTMLButtonElement> | undefined;
    text: any;
    lang: any;

}

const SellButton = (props: SellButtonProps) => {


    useEffect(() => {
        let sellButton = document?.getElementById('sell-button-id');

        sellButton?.addEventListener('click', () => {
            if (props.count >= props.unitsSold) {
                props.createAndRemoveGraphicEffect('+' + props.unitsSold * .25 + '€', 'sell-area', 'li', 'graphInput');
            }
            else {
                props.createAndRemoveGraphicEffect('No Stock !', 'sell-area', 'li', 'redMessage');
            }
        });

    }, [])

    useEffect(() => {
        let sellButton = document?.getElementById('sell-button-id');

        sellButton?.removeEventListener('click', () => {
            props.createAndRemoveGraphicEffect('+' + props.unitsSold * .25 + '€', 'sell-area', 'li', 'graphInput');
            props.createAndRemoveGraphicEffect('No Stock !', 'sell-area', 'li', 'graphInput');
        })

    }, [])


    var numberOfPaperclipToSell = props.unitsSold;
    if (props.unitsSold.length === 6) {
        numberOfPaperclipToSell = "100K";
    }
    else if (props.unitsSold.length === 7) {
        numberOfPaperclipToSell = "1M";
    }
    return (
        <button onClick={props.sell} className="main-button" id="sell-button-id">
            <p className="main-button-firstline">{props.text.mainButtons.sellButtonSell[props.lang]}
            </p><ul className="main-button-number" id="sell-area"><li>{numberOfPaperclipToSell}</li></ul>
            <p className="main-button-secondline">{props.unitsSold > 2 ? "Transactions" : "Transaction"}</p>
        </button>);

}

export default SellButton