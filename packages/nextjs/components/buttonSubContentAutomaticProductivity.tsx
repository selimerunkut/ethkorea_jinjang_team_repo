// @ts-nocheck

import React, { Component, useState } from 'react';

interface ButtonSubContentProps {
    containsAnimation: boolean
    id: string
    money: number
    cost: number
    currency: string
    classNameButton: string
    picture: string
    textAnimation: string
    animationIdTarget: string,
    animationtType: string
    animationTypeOfElementCreated: string
    animationCSSClass: string
    machineProductivity: string
    isManual: boolean
    machineType: string
    machineQuantity: number
    salesman: number
    maximumSalesHirable: number
    totalComputationalPowerAccumulated: number
    classNameChild: string
    name: string
    contentChild: string
    text: {}
    lang: {
        fr: string
        en: string
    }
    numberOfSmallAutomaticMachines: number
    maximumSmallAutomaticMachine: number

}

const ButtonSubContentAutomaticProductivity = (props: ButtonSubContentProps) => {
    const [hover, setHover] = useState(false)

    const [subContent, setsubState] = useState({
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
        setHover(hover => !hover)
    }

    // @ts-ignore
    function checkNumber(number) {
        if (number <= Math.pow(10, 6)) {
            number = new Intl.NumberFormat().format(number);
        }
        else if (number >= Math.pow(10, 6) && number < Math.pow(10, 9)) {
            // @ts-ignore
            number = formateNumber(number, Math.pow(10, 6), subContent.gameTitles.unitDisplayMillions[props.lang]);
        }
        else if (number >= Math.pow(10, 9) && number < Math.pow(10, 12)) {
            // @ts-ignore
            number =formateNumber(number, Math.pow(10, 9), subContent.gameTitles.unitDisplayBillions[props.lang]);
        }
        else if (number >= Math.pow(10, 12) && number < Math.pow(10, 15)) {
            // @ts-ignore
            number =formateNumber(number, Math.pow(10, 12), subContent.gameTitles.unitDisplayQuadrillion[props.lang]);
        }
        else if (number >= Math.pow(10, 15) && number < Math.pow(10, 18)) {
            // @ts-ignore
            number =formateNumber(number, Math.pow(10, 15), subContent.gameTitles.unitDisplayQuintillion[props.lang]);
        }
        else if (number >= Math.pow(10, 18) && number < Math.pow(10, 21)) {
            // @ts-ignore
            number =formateNumber(number, Math.pow(10, 18), subContent.gameTitles.unitDisplaySextillion[props.lang]);
        }
        else if (number >= Math.pow(10, 21) && number < Math.pow(10, 24)) {
            // @ts-ignore
            number =formateNumber(number, Math.pow(10, 21), subContent.gameTitles.unitDisplaySeptillion[props.lang]);
        }
        else if (number >= Math.pow(10, 24)) {
            // @ts-ignore
            number = formateNumber(number, Math.pow(10, 24), subContent.gameTitles.unitDisplayZillion[props.lang]);
        }
        return number;
    }

    // @ts-ignore
    function formateNumber(number, divider, unit) {
        number = number / divider;
        number = number.toString();
        number += '.0'
        let subnumbers = number.split('.')
        if (subnumbers[0] === '1' && subnumbers[1][0] != 0) {
            number = subnumbers[0] + '.' + subnumbers[1][0] + unit
        }
        else if (subnumbers[0] === '1' && subnumbers[1][0] == 0) {
            number = subnumbers[0] + unit
        }
        else if (subnumbers[0] > 1 && subnumbers[0] < 10 && subnumbers[1][0] == 0) {
            number = subnumbers[0] + unit + 's'
        }
        else {
            number = subnumbers[0] + '.' + subnumbers[1][0] + unit + 's'
        }
        return number
    }


    let styleButton = { display: 'none' };
    // @ts-ignore
    if (props.onHover) {
        styleButton = {
            display: 'block',
            // @ts-ignore
            width: '100px',
            zIndex: 4,
            position: 'absolute',
            backgroundColor: 'white',
            border: '1px solid black',
            top: '15%',
            left: '250%',
            transform: 'translate(-50%, -50%)'
        }
    }

    let contentCantBuy: string = ""
    //Adding explication to blocked button
    // @ts-ignore
    if (props.money < props.cost) {
        // @ts-ignore
        if (props.lang == "en") {
            contentCantBuy = "You can't afford this for now.";
        }
        // @ts-ignore
        else if (props.lang == "fr") {
            contentCantBuy = "Vous n'avez pas les moyens pour l'instant.";
        }

    }
    // @ts-ignore
    else if (props.salesman >= props.maximumSalesHirable) {
        // @ts-ignore
        if (props.lang == "en") {
            contentCantBuy = "Maximum sales reached.";
        }
        // @ts-ignore
        else if (props.lang == "fr") {
            contentCantBuy = "Maximum de vendeurs atteint.";
        }
    }

    //Displaying the right currency (euros or computationnal power)
    let currency: string = "";
    // @ts-ignore
    if (props.currency === undefined) {
        currency = " €";
    }
    // @ts-ignore
    else if (props.currency == 'computational') {
        // @ts-ignore
        if (props.lang == 'en') {
            currency = " Memory";
        }
        // @ts-ignore
        else if (props.lang == 'fr') {
            currency = " Mémoire"
        }

    }
    // @ts-ignore
    else if (props.currency == 'paperclips') {
        // @ts-ignore
        if (props.lang == 'en') {
            currency = " Paperclips";
        }
        // @ts-ignore
        else if (props.lang == 'fr') {
            currency = " Trombones";
        }
    }
    // @ts-ignore
    const freePrice = props.lang == "en" ? "Free" : "Gratuit";

    return (
        <div
            className={props.classNameChild}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            // @ts-ignore
            style={styleButton}><span className="hover-name">{props.name[props.lang]}</span><br />
            {
                // @ts-ignore
                props.cost > 0 ? checkNumber(props.cost) + currency : <strong>{freePrice}</strong>}<br />+ {props.machineProductivity * props.automaticProductivityPerMachine * props.machineQuantity}<br />{props.contentChild[props.lang]}
            {(props.money < props.cost || props.numberOfSmallAutomaticMachines >= props.maximumSmallAutomaticMachine) ? <p className="cantAfford">{contentCantBuy}</p> : null}
        </div>
    )
}


export default ButtonSubContentAutomaticProductivity