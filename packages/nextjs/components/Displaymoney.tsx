// @ts-ignore

import React, { Component } from 'react';

interface DisplayMoneyProps {
    money: number
    checkNumber (money: any):any
}

const DisplayMoney = (props: DisplayMoneyProps) => {



    let money = props.checkNumber(props.money) as string;

    return <p className="display-money data-title">Total Balance <span className="data">{money} ⟠</span></p>;

}

export default DisplayMoney