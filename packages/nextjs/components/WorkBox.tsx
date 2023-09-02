// @ts-ignore

import React, { Component, ReactNode } from 'react';

interface WorkBoxProps {
    text: any;
    lang: any;
    numberOfSmallMachines: ReactNode;
    numberOfSmallAutomaticMachines: number;
    numberOfSalesman: number;
    maximumSalesHirable: ReactNode;
    hasBoughtAfactory: React.JSX.Element;
    checkNumber(numberOfFactory: any): React.ReactNode;
    numberOfFactory(numberOfFactory: any): React.ReactNode;
    numberOfManagers: number;
    numberOfDrone: number;

}

const WorkBox = (props: WorkBoxProps) => {

    return (<div className="work-box interface-div">
        <h2>{props.text.gameTitles.workboxTitle[props.lang]}</h2>
        <div className="padding-div">
            <p className="data-title">{props.text.gameTitles.worboxSmallMachines[props.lang]}<span className="data">{props.numberOfSmallMachines}</span></p>
            {props.numberOfSmallAutomaticMachines > 0
                ? <p className="data-title">{props.text.gameTitles.worboxAutomaticMachines[props.lang]}<span className="data">{props.numberOfSmallAutomaticMachines}</span></p>
                : null}

            {props.numberOfSalesman > 0
                ? <p className="data-title">{props.text.gameTitles.worboxSalesmen[props.lang]}<span className="data">{props.numberOfSalesman}/{props.maximumSalesHirable}</span></p>
                : null}

            {props.hasBoughtAfactory && <p className="data-title">{props.text.gameTitles.worboxFactories[props.lang]}<span className="data">{props.checkNumber(props.numberOfFactory)}</span></p>}

            {props.numberOfManagers > 0 ? <p className="data-title">{props.text.gameTitles.worboxManagers[props.lang]}<span className="data">{props.checkNumber(props.numberOfManagers)}</span></p> : null}

            {props.numberOfDrone > 0 ? <p className="data-title">{props.text.gameTitles.worboxDrones[props.lang]}<span className="data">{props.checkNumber(props.numberOfDrone)}</span></p> : null}

        </div>
    </div>);
}

export default WorkBox