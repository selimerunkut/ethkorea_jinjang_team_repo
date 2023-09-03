// @ts-nocheck

import React, { Component } from 'react';
import StockOfPaperclips from './StockOfPaperclips';
import DisplayMoney from './Displaymoney';

// @todo: migrate to actual types
interface DashboardProps {
    checkNumber(arg0: number): unknown;
    automaticProduction: any;
    productivyPerAutomaticMachine: any;
    salesman: any;
    salesmanEfficiency: any;
    websiteSellingPower: number;
    softwareBonusSales: any;
    numberOfdrones: any;
    droneSalesEfficiency: any;
    WeakAIbonusSales: any;
    text: any;
    lang: any;
    stockOfPaperclips: any;
    money: number;
    boughtAnAutomaticMachine: React.JSX.Element;
    hasHiredaSalesman: React.JSX.Element;

}
const Dashboard = (props: DashboardProps) => {


    let automaticProduction = props.checkNumber(props.automaticProduction * props.productivyPerAutomaticMachine);
    let automaticSales = props.checkNumber(props.salesman * props.salesmanEfficiency + props.websiteSellingPower + props.softwareBonusSales + props.numberOfdrones * props.droneSalesEfficiency + props.WeakAIbonusSales);

    return (<div>

        <h2>{props.text.gameTitles.dashboard[props.lang]}</h2>
        <div className="dashboard-datas">
            <StockOfPaperclips stockOfPaperclips={props.stockOfPaperclips} checkNumber={props.checkNumber} />
            <DisplayMoney money={props.money} checkNumber={props.checkNumber} />
            {props.boughtAnAutomaticMachine && <p className="data-title temporary-class-to-adjust-display" id="paragraphToUpdate"> Transaction Flow to ETH Nodes <span className="data">{automaticProduction} Tx</span></p>}
            {props.hasHiredaSalesman && <p className="data-title">{props.text.gameTitles.sales[props.lang]}<span className="data">{automaticSales} blocks</span></p>}
        </div>
    </div>
    );
}


export default Dashboard