// @ts-nocheck

import React, { Component, useEffect, useState } from 'react';
import ButtonSubContent from './buttonSubContent';

interface ButtonProps {
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
    machineProductivity: any
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
    lang: Array<string>
    createAndRemoveGraphicEffect(textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string): void
    onClickProp(cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string): void
}

const Button = (props: ButtonProps) => {
    const [hover, setHover] = useState<boolean>()

    useEffect(() => {

        if (props.containsAnimation) {
            const mainButton = document.getElementById(props.id);

            mainButton?.addEventListener('click', () => {
                if (props.money >= props.cost) {
                    props.createAndRemoveGraphicEffect(props.textAnimation, props.animationIdTarget, props.animationTypeOfElementCreated, props.animationCSSClass);
                }
            });
        }
    }, [props.containsAnimation])

    useEffect(() => {
        if (props.containsAnimation) {
            var mainButton = document?.getElementById(props?.id);

            mainButton?.removeEventListener('click', () => {
                if (props.money >= props.cost) {
                    props.createAndRemoveGraphicEffect(props.textAnimation, props.animationIdTarget, props.animationTypeOfElementCreated, props.animationCSSClass);

                }
            })

        }
    }, [])


    function toggleHover() {
        setHover(hover => !hover)
    }

    function handleClick() {
        props.onClickProp(props.cost, props.machineProductivity, props.isManual, props.machineType, props.machineQuantity, props.currency);
    }

    const styleButton = {
        backgroundImage: `url(` + props.picture + `)`,
    };


    var className = props.classNameButton;
    if (props.money < props.cost || props.salesman >= props.maximumSalesHirable || props.cost > props.totalComputationalPowerAccumulated) {
        className += " disabled";
    }

    return (
        <button
            style={styleButton}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={handleClick}
            id={props.id}
            className={className}>
            <ButtonSubContent classNameChild={props.classNameChild} contentChild={props.contentChild} onHover={hover} cost={props.cost} name={props.name} money={props.money} salesman={props.salesman} maximumSalesHirable={props.maximumSalesHirable} currency={props.currency} lang={props.lang} text={props.text} />
        </button>);
}


export default Button