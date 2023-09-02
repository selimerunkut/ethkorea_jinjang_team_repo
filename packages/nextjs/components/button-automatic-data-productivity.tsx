// @ts-nocheck

import React, { Component, useState } from 'react';
import ButtonSubContentAutomaticProductivity from './buttonSubContentAutomaticProductivity';


interface ButtonAutomaticDataProps {
    cost: any
    money: any
    isManual: boolean
    machineType: any,
    machineQuantity: any
    machineProductivity: any
    currency: any
    picture: any
    classNameButton: any
    classNameChild: any
    contentChild: any
    onClickProp: (cost: string, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void
}

const ButtonAutomaticData = (props: ButtonAutomaticDataProps) => {
    const [hover, setHover] = useState<boolean>(false)

    function toggleHover() {
        setHover(hover => !hover);
    }

    function handleClick() {
        props.onClickProp(props.cost, props.machineProductivity, props.isManual, props.machineType, props.machineQuantity, props.currency);
    }

    let styleButton = {
        backgroundImage: `url(` + props.picture + `)`,
    };

    var className = props.classNameButton
    if (props.money < props.cost) {
        className += " disabled";
    }

    return (
        <button
            style={styleButton}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={handleClick}
            className={className}>
            <ButtonSubContentAutomaticProductivity classNameChild={props.classNameChild} contentChild={props.contentChild} onHover={hover} cost={props.cost} automaticProductivityPerMachine={props.automaticProductivityPerMachine} machineQuantity={props.machineQuantity} name={props.name} machineProductivity={props.machineProductivity} money={props.money} numberOfSmallAutomaticMachines={props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={props.maximumSmallAutomaticMachine} currency={props.currency} lang={props.lang} />
        </button>);

}


export default ButtonAutomaticData