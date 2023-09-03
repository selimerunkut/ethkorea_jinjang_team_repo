// @ts-nocheck
import React, { Component, useState } from 'react';

interface ButtonSubContentProps {
    lang: string
    currency: string
    money: number
    cost: number
    classNameChild: string
    salesman: number
    maximumSalesHirable: number
}

export interface GameState {
    gameTitles: {
        unitDisplayMillions: {
            fr: string
            en: string
        }
        unitDisplayBillions: {
            fr: string
            en: string
        }
        unitDisplayQuadrillion: {
            fr: string
            en: string
        }
        unitDisplayQuintillion: {
            fr: string
            en: string
        }
        unitDisplaySextillion: {
            fr: string
            en: string
        }
        unitDisplaySeptillion: {
            fr: string
            en: string
        }
        unitDisplayZillion: {
            fr: string
            en: string
        }

    }
}
const ButtonSubContent = (props: ButtonSubContentProps) => {
    const [hover, setToggleState] = useState<boolean>(false)

    const [gameState, setGameState] = useState<GameState>({
        gameTitles: {
            unitDisplayMillions: {
                fr: " million",
                en: " million"
            },
            unitDisplayBillions: {
                fr: " milliard",
                en: " billion"
            },
            unitDisplayQuadrillion: {
                fr: " quadrillion",
                en: " quadrillion"
            },
            unitDisplayQuintillion: {
                fr: " quintillion",
                en: " quintillion"
            },
            unitDisplaySextillion: {
                fr: " sextillion",
                en: " sextillion"
            },
            unitDisplaySeptillion: {
                fr: " septillion",
                en: " septillion"
            },
            unitDisplayZillion: {
                fr: " zillion",
                en: " zillion"
            }
        }
    })



    function toggleHover() {
        setToggleState(hover => !hover)
    }

    function checkNumber(_number: number) {
        if (_number < Math.pow(10, 6)) {
            // @ts-ignore
            _number = new Intl.NumberFormat().format(_number);
        }
        else if (_number >= Math.pow(10, 6) && _number < Math.pow(10, 9)) {
            // @ts-ignore
            _number = formateNumber(_number, Math.pow(10, 6), gameState.gameTitles.unitDisplayMillions[props.lang]);
        }
        else if (_number >= Math.pow(10, 9) && _number < Math.pow(10, 12)) {
            // @ts-ignore
            _number = formateNumber(_number, Math.pow(10, 9), gameState.gameTitles.unitDisplayBillions[props.lang]);
        }
        else if (_number >= Math.pow(10, 12) && _number < Math.pow(10, 15)) {
            // @ts-ignore
            _number = formateNumber(_number, Math.pow(10, 12), gameState.gameTitles.unitDisplayQuadrillion[props.lang]);
        }
        else if (_number >= Math.pow(10, 15) && _number < Math.pow(10, 18)) {
            // @ts-ignore
            _number = formateNumber(_number, Math.pow(10, 15), gameState.gameTitles.unitDisplayQuintillion[props.lang]);
        }
        else if (_number >= Math.pow(10, 18) && _number < Math.pow(10, 21)) {
            // @ts-ignore
            _number = formateNumber(_number, Math.pow(10, 18), gameState.gameTitles.unitDisplaySextillion[props.lang]);
        }
        else if (_number >= Math.pow(10, 21) && _number < Math.pow(10, 24)) {
            // @ts-ignore
            _number = formateNumber(_number, Math.pow(10, 21), gameState.gameTitles.unitDisplaySeptillion[props.lang]);
        }
        else if (_number >= Math.pow(10, 24)) {
            // @ts-ignore
            _number = formateNumber(_number, Math.pow(10, 24), gameState.gameTitles.unitDisplayZillion[props.lang]);
        }
        return _number;
    }

    function formateNumber(number: number, divider: number, unit: number) {
        number = number / divider;
        // @ts-ignore
        number = number.toString();
        // @ts-ignore
        number += '.0'
        // @ts-ignore

        let subnumbers = number.split('.')
        if (subnumbers[0] === '1' && subnumbers[1][0] != 0) {
            // @ts-ignore
            number = subnumbers[0] + '.' + subnumbers[1][0] + unit
        }
        else if (subnumbers[0] === '1' && subnumbers[1][0] == 0) {
            number = subnumbers[0] + unit
        }
        else if (subnumbers[0] > 1 && subnumbers[1][0] == 0) {
            // @ts-ignore
            number = subnumbers[0] + unit + 's'
        }
        else {
            // @ts-ignore
            number = subnumbers[0] + '.' + subnumbers[1][0] + unit + 's'
        }
        return number
    }

    var styleButton = { display: 'none' };
    // @ts-ignore
    if (props.onHover) {
        styleButton = {
            display: 'block',
            // @ts-ignore
            zIndex: 4,
            width: '100px',
            position: 'absolute',
            backgroundColor: 'white',
            border: '1px solid black',
            top: '15%',
            left: '250%',
            transform: 'translate(-50%, -50%)'
        }
    }

    //Adding explication to blocked button
    if (props.money < props.cost) {
        if (props.lang == "en") {
            var contentCantBuy = "You can't afford this for now.";
        }
        else if (props.lang == "fr") {
            var contentCantBuy = "Vous n'avez pas les moyens pour l'instant.";
        }

    }
    else if (props.salesman >= props.maximumSalesHirable) {
        if (props.lang == "en") {
            var contentCantBuy = "Maximum sales reached.";
        }
        else if (props.lang == "fr") {
            var contentCantBuy = "Maximum de vendeurs atteint.";
        }
    }

    //Displaying the right currency (euros or computationnal power)
    let currency: string = "";
    if (props.currency === undefined) {
        currency = " ⟠";
    }
    else if (props.currency == 'computational') {
        if (props.lang == 'en') {
            currency = " Memory";
        }
        else if (props.lang == 'fr') {
            currency = " Mémoire"
        }

    }
    else if (props.currency == 'paperclips') {
        if (props.lang == 'en') {
            currency = " Paperclips";
        }
        else if (props.lang == 'fr') {
            currency = " Trombones";
        }
    }
    var freePrice = props.lang == "en" ? "Free" : "Gratuit";

    return (
        <div
            className={props.classNameChild + " hover-button"}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            // @ts-ignore
            style={styleButton}><span className="hover-name">{props.name[props.lang]}</span><br />
            
            {
            // @ts-ignore
            props.cost > 0 ? checkNumber(props.cost) + currency : <strong>{freePrice}</strong>}<br />{props.contentChild[props.lang]}
            {
            // @ts-ignore
            (props.money < props.cost || props.salesman >= props.maximumSalesHirable) ? <p className="cantAfford">{contentCantBuy}</p> : null}
        </div>
    )
}


export default ButtonSubContent