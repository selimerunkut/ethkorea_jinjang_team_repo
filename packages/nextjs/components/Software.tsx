// @ts-nocheck

import React, { Component } from 'react';
import Button from './button';
import ButtonAutomaticData from './button-automatic-data-productivity';

interface SoftwareProps {
    softwareLevelOfInvestment: number;
    websiteIsOnline: any;
    deepLearningHasBeenBought: boolean;
    hasBoughtSoftwareSelling: any;
    weakAiIsActivated: any;
    dataCenterLevelOfInvestment: number;
    hasBoughtCompetitors: any;
    newAiIsActivated: boolean;
    quantumComputerHasBeenBought: any;
    automaticProductionImprovment: number;
    increaseProductionLevel: number;
    hasBoughtAutomatedSellingSoftware: any;
    cloudConnectionEstablished: any;
    terraformingIslandIntoServers: any;
    droneLevelOfInvestment: number;
    computationalPowerPerSecond: any;
    numberOfDrone: any;
    text: any;
    lang: any;
    checkNumber(data: any): React.ReactNode;
    totalComputationalPowerAccumulated(totalComputationalPowerAccumulated: any): React.ReactNode;
    buytheWebsite: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    websitePrice: number;
    money: number;
    investInAI: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    deeplearningCost: number;
    softwareMarketplacePrice: number;
    improveAutomaticMachines: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    automaticProductionCost: number;
    weakAICost: number;
    automatedSellingSoftwarePrice: number;
    buyingCompetitorsCost: number;
    newAICost: number;
    increaseProductionCost: number;
    dataCenterCost: number;
    terraformingIslandIntoServersCost: number;
    quantumComputerCost: number;
    debug: boolean;

}
const Software = (props: SoftwareProps) => {

    var className = props.softwareLevelOfInvestment > 0 || props.debug == true ? "interface-div software-div visible-right-div" : "interface-div software-div";

    // Website button disabling
    if (props.websiteIsOnline) {
        var classNameWebsiteButton = "website menu-button doNOTdisplay";
    }
    else {
        var classNameWebsiteButton = "website menu-button";
    }

    // Connect to Every Marketplace
    if (props.deepLearningHasBeenBought && !props.hasBoughtSoftwareSelling || props.debug == true) {
        var classNameConnectMarketplaceButton = "software menu-button";
    }
    else {
        var classNameConnectMarketplaceButton = "software menu-button doNOTdisplay";
    }

    //Deep learning disabling
    if (props.deepLearningHasBeenBought) {
        var classNameDeepLearningButton = "deep-learning menu-button doNOTdisplay";
    }
    else if (props.websiteIsOnline && !props.deepLearningHasBeenBought) {
        var classNameDeepLearningButton = "deep-learning menu-button";
    }
    else {
        var classNameDeepLearningButton = "deep-learning menu-button doNOTdisplay";
    }

    //Weak IA disabling
    if (props.weakAiIsActivated) {
        var classNameWeakAIButton = "weak-ai menu-button doNOTdisplay";
    }
    else if (props.dataCenterLevelOfInvestment >= 3 && props.deepLearningHasBeenBought && !props.weakAiIsActivated) {
        var classNameWeakAIButton = "weak-ai menu-button";
    }
    else {
        var classNameWeakAIButton = "weak-ai menu-button doNOTdisplay";
    }

    //Bought competitors disabling
    if (props.hasBoughtCompetitors) {
        var classNameBuyCompetitorsButton = "bought-competitors menu-button doNOTdisplay";
    }
    else if (props.newAiIsActivated && !props.hasBoughtCompetitors) {
        var classNameBuyCompetitorsButton = "bought-competitors menu-button";
    }
    else {
        var classNameBuyCompetitorsButton = "bought-competitors menu-button doNOTdisplay";
    }

    //New IA disabling
    if (props.newAiIsActivated) {
        var classNameNewAIButton = "new-ai menu-button doNOTdisplay";
    }
    else if (props.quantumComputerHasBeenBought && props.weakAiIsActivated && !props.newAiIsActivated) {
        var classNameNewAIButton = "new-ai menu-button";
    }
    else {
        var classNameNewAIButton = "new-ai menu-button doNOTdisplay";
    }

    //Improve Automatic Machines disabling
    if (props.deepLearningHasBeenBought && props.automaticProductionImprovment <= 3) {
        var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button";
    }
    else if (props.automaticProductionImprovment >= 3) {
        var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button doNOTdisplay";
    }
    else {
        var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button doNOTdisplay";
    }

    //Increase Computational Power Old Way disabling
    if (props.deepLearningHasBeenBought && props.increaseProductionLevel <= 2) {
        var classNameIncreaseProductionButtonOldWay = "increase-production menu-button";
    }
    else {
        var classNameIncreaseProductionButtonOldWay = "increase-production menu-button doNOTdisplay";
    }

    //Increase Computational Power New Way disabling
    if (props.deepLearningHasBeenBought && props.increaseProductionLevel > 3 && props.increaseProductionLevel <= 5) {
        var classNameIncreaseProductionButtonNewWay = "increase-production menu-button";
    }
    else if (props.increaseProductionLevel >= 5) {
        var classNameIncreaseProductionButtonNewWay = "increase-production menu-button doNOTdisplay";
    }
    else {
        var classNameIncreaseProductionButtonNewWay = "increase-production menu-button doNOTdisplay";
    }

    //Automatic Selling Software disabling
    if (props.deepLearningHasBeenBought && !props.hasBoughtAutomatedSellingSoftware) {
        var classNameAutomatedSellingSoftwareButton = "automatic-selling-software menu-button";
    }
    else {
        var classNameAutomatedSellingSoftwareButton = "automatic-selling-software menu-button doNOTdisplay";
    }

    //Data center disabling
    if (props.increaseProductionLevel > 2 && props.dataCenterLevelOfInvestment <= 4) {
        var classNameGrowDataCenterNutton = "buy-data-center menu-button";
    }
    else if (props.dataCenterLevelOfInvestment >= 4) {
        var classNameGrowDataCenterNutton = "buy-data-center menu-button doNOTdisplay";
    }
    else {
        var classNameGrowDataCenterNutton = "buy-data-center menu-button doNOTdisplay";
    }


    // CLOUD CONNECTION disabling
    if (props.cloudConnectionEstablished) {
        var classNameCloudConnectionButton = "cloud-connection menu-button doNOTdisplay";
    }
    else if (props.newAiIsActivated && props.weakAiIsActivated && !props.cloudConnectionEstablished && props.hasBoughtCompetitors) {
        var classNameCloudConnectionButton = "cloud-connection menu-button";
    }
    else {
        var classNameCloudConnectionButton = "cloud-connection menu-button doNOTdisplay";
    }

    // QUANTUM COMPUTER disabling
    if (props.quantumComputerHasBeenBought) {
        var classNameQuantumComputerButton = "quantum-computer menu-button doNOTdisplay";
    }
    else if (props.deepLearningHasBeenBought && props.weakAiIsActivated && !props.quantumComputerHasBeenBought) {
        var classNameQuantumComputerButton = "quantum-computer menu-button";
    }
    else {
        var classNameQuantumComputerButton = "quantum-computer menu-button doNOTdisplay";
    }

    // Terraform Island disabling
    if (props.terraformingIslandIntoServers) {
        var classNameTerraformingIslandButton = "terraformingIsland menu-button doNOTdisplay";
    }
    else if (!props.terraformingIslandIntoServers && props.droneLevelOfInvestment >= 2) {
        var classNameTerraformingIslandButton = "terraformingIsland menu-button";
    }
    else {
        var classNameTerraformingIslandButton = "terraformingIsland menu-button doNOTdisplay";
    }

    // H3 Data center disabling
    if (props.terraformingIslandIntoServers) {
        var classh3datacenter = "doNOTdisplay";
    }
    else if (props.deepLearningHasBeenBought && props.dataCenterLevelOfInvestment <= 4) {
        var classh3datacenter = "";
    }
    else {
        var classh3datacenter = "doNOTdisplay";
    }

    //Computational Power update 
    var data;
    if (props.droneLevelOfInvestment == 1 || props.debug == true) {
        data = props.computationalPowerPerSecond + props.numberOfDrone;
    }
    else if (props.droneLevelOfInvestment > 1) {
        data = props.computationalPowerPerSecond + props.numberOfDrone * 5;
    }
    else {
        data = props.computationalPowerPerSecond;
    }
    //Software Div update 
    var classSoftwareGlobal;
    if (props.terraformingIslandIntoServers && props.automaticProductionImprovment >= 4) {
        classSoftwareGlobal = "doNOTdisplay"
    }
    else if (props.droneLevelOfInvestment == 2) {
        classSoftwareGlobal = ""
    }
    else if (props.cloudConnectionEstablished && props.automaticProductionImprovment >= 4 && !props.terraformingIslandIntoServers) {
        classSoftwareGlobal = "doNOTdisplay"
    }
    else if (props.softwareLevelOfInvestment >= 1) {
        classSoftwareGlobal = ""
    }
    else {
        classSoftwareGlobal = "doNOTdisplay"
    }


    return (
        <div>


            {props.deepLearningHasBeenBought &&
                <div className={className}>
                    <h2>{props.text.gameTitles.softwarePowerAndMemory[props.lang]}</h2>
                    <div className="data-software">
                        <p className="data-title">{props.text.gameTitles.softwareComputationalPower[props.lang]}<span className="data">{props.checkNumber(data)}</span></p>
                        <p className="data-title">{props.text.gameTitles.softwareMemory[props.lang]}<span className="data">{props.checkNumber(props.totalComputationalPowerAccumulated)}</span></p>
                    </div>
                </div>}
            <div className={className}>
                <div className={classSoftwareGlobal}>
                    <h2>{props.text.gameTitles.softwareTitle[props.lang]}</h2>
                    <div className="padding-div">
                        <Button onClickProp={props.buytheWebsite} name={props.text.gameButtons.developEcommerceWebsiteName} picture="./pictures/website.png" classNameButton={classNameWebsiteButton} cost={props.websitePrice} classNameChild="info-website-button" contentChild={props.text.gameButtons.developEcommerceWebsiteContent} money={props.money} lang={props.lang} containsAnimation={false} id={''} currency={''} textAnimation={''} animationIdTarget={''} animationtType={''} animationTypeOfElementCreated={''} animationCSSClass={''} machineProductivity={undefined} isManual={false} machineType={''} machineQuantity={0} salesman={0} maximumSalesHirable={0} totalComputationalPowerAccumulated={0} text={undefined} createAndRemoveGraphicEffect={function (textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string): void {
                            throw new Error('Function not implemented.');
                        }} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.softwareDeepLearningName} picture="./pictures/deepLearning.png" classNameButton={classNameDeepLearningButton} cost={props.deeplearningCost} classNameChild="info-deep-learning-button" contentChild={props.text.gameButtons.softwareDeepLearningContent} money={props.money} machineType="deep-learning" lang={props.lang} containsAnimation={false} id={''} currency={''} textAnimation={''} animationIdTarget={''} animationtType={''} animationTypeOfElementCreated={''} animationCSSClass={''} machineProductivity={undefined} isManual={false} machineQuantity={0} salesman={0} maximumSalesHirable={0} totalComputationalPowerAccumulated={0} text={undefined} createAndRemoveGraphicEffect={function (textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string): void {
                            throw new Error('Function not implemented.');
                        }} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.connectToEveryMarketPlaceName} picture="./pictures/software.png" classNameButton={classNameConnectMarketplaceButton} cost={props.softwareMarketplacePrice} classNameChild="info-software-button" contentChild={props.text.gameButtons.connectToEveryMarketPlaceContent} money={props.money} machineType="software-selling" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />

                        {props.deepLearningHasBeenBought ?
                            <Button onClickProp={props.improveAutomaticMachines} name={props.text.gameButtons.improveAutomaticMachineName} picture="./pictures/improve-automatic-machines.png" classNameButton={classNameImproveAutomaticMachinesButton} cost={props.automaticProductionCost} classNameChild="info-invest-rd-improve-button" contentChild={props.text.gameButtons.improveAutomaticMachineContent} money={props.money} currency="computational" lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                            : null}

                        <h3 className={classh3datacenter}>{props.text.gameTitles.softwareDataCenter[props.lang]}</h3>
                        <div>
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.weakAIName} picture="./pictures/narrow_ai.png" classNameButton={classNameWeakAIButton} cost={props.weakAICost} classNameChild="info-weak-ai-button" contentChild={props.text.gameButtons.weakAIContent} money={props.money} machineType="weak-ai" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.automatedSellingSoftwareName} picture="./pictures/automaticSellingSoftware.png" classNameButton={classNameAutomatedSellingSoftwareButton} cost={props.automatedSellingSoftwarePrice} classNameChild="info-automatic-selling-software-button" contentChild={props.text.gameButtons.automatedSellingSoftwareContent} money={props.money} machineType="automatic-selling-software" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.buyOurCompetitorName} picture="./pictures/buycompetitor.png" classNameButton={classNameBuyCompetitorsButton} cost={props.buyingCompetitorsCost} classNameChild="info-buy-competitors-button" contentChild={props.text.gameButtons.buyOurCompetitorContent} money={props.money} machineType="buy-competitors" lang={props.lang} containsAnimation={false} id={''} currency={''} textAnimation={''} animationIdTarget={''} animationtType={''} animationTypeOfElementCreated={''} animationCSSClass={''} machineProductivity={undefined} isManual={false} machineQuantity={0} salesman={0} maximumSalesHirable={0} totalComputationalPowerAccumulated={0} text={undefined} createAndRemoveGraphicEffect={function (textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string): void {
                                throw new Error('Function not implemented.');
                            }} />
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.developGeneralAIName} picture="./pictures/new_ai.png" classNameButton={classNameNewAIButton} cost={props.newAICost} classNameChild="info-new-ai-button" contentChild={props.text.gameButtons.developGeneralAIContent} money={props.money} machineType="new-ai" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.increaseComputationnalPowerName} picture="./pictures/increaseProduction.png" classNameButton={classNameIncreaseProductionButtonOldWay} cost={props.increaseProductionCost} classNameChild="info-increase-production-button" contentChild={props.text.gameButtons.increaseComputationnalPowerContent} money={props.money} machineType="increase-production-old-way" lang={props.lang} containsAnimation={false} id={''} currency={''} textAnimation={''} animationIdTarget={''} animationtType={''} animationTypeOfElementCreated={''} animationCSSClass={''} machineProductivity={undefined} isManual={false} machineQuantity={0} salesman={0} maximumSalesHirable={0} totalComputationalPowerAccumulated={0} text={undefined} createAndRemoveGraphicEffect={function (textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string): void {
                                throw new Error('Function not implemented.');
                            }} />
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.growDataCenterName} picture="./pictures/datacenter.png" classNameButton={classNameGrowDataCenterNutton} cost={props.dataCenterCost} classNameChild="info-data-center-button" contentChild={props.text.gameButtons.frowDataCenterContent} money={props.money} machineType="grow-the-data-center" lang={props.lang} containsAnimation={false} id={''} currency={''} textAnimation={''} animationIdTarget={''} animationtType={''} animationTypeOfElementCreated={''} animationCSSClass={''} machineProductivity={undefined} isManual={false} machineQuantity={0} salesman={0} maximumSalesHirable={0} totalComputationalPowerAccumulated={0} text={undefined} createAndRemoveGraphicEffect={function (textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string): void {
                                throw new Error('Function not implemented.');
                            }} />
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.connectAIToTheCloudName} picture="./pictures/cloud.png" classNameButton={classNameCloudConnectionButton} cost={props.newAICost} classNameChild="info-cloud-connection-button" contentChild={props.text.gameButtons.connectAIToTheCloudContent} money={props.money} machineType="cloud-connection" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                            <Button onClickProp={props.investInAI} name={props.text.gameButtons.terraformIslandIntoDataCentersName} picture="./pictures/terraformIslandIntoDataCenter.png" classNameButton={classNameTerraformingIslandButton} cost={props.terraformingIslandIntoServersCost} classNameChild="info-terraforming-button" contentChild={props.text.gameButtons.terraformIslandIntoDataCentersContent} money={props.money} machineType="terraformIsland" lang={props.lang} containsAnimation={false} id={''} currency={''} textAnimation={''} animationIdTarget={''} animationtType={''} animationTypeOfElementCreated={''} animationCSSClass={''} machineProductivity={undefined} isManual={false} machineQuantity={0} salesman={0} maximumSalesHirable={0} totalComputationalPowerAccumulated={0} text={undefined} createAndRemoveGraphicEffect={function (textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string): void {
                                throw new Error('Function not implemented.');
                            }} />
                        </div>

                        {(props.weakAiIsActivated && !props.quantumComputerHasBeenBought) ? <h3>{props.text.gameTitles.softwareLaboratory[props.lang]}</h3> : null}
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.masterQuantumComputerName} picture="./pictures/quantum_computer.png" classNameButton={classNameQuantumComputerButton} cost={props.quantumComputerCost} classNameChild="info-quantum-computer-button" contentChild={props.text.gameButtons.masterQuantumComputerContent} money={props.money} machineType="quantum-computer" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                    </div>
                </div>
            </div>
        </div>)
}


export default Software