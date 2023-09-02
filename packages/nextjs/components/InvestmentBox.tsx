// @ts-nocheck

import React, { Component } from 'react';
import Button from './button';
import ButtonAutomaticData from './button-automatic-data-productivity';

interface InvestmentBox {
    soldAtLeastOnePaperclip: number;
    rdLevelOfInvestment: number;
    numberOfSmallAutomaticMachines: any;
    maximumSmallAutomaticMachine: any;
    hasFoundNewsWaysToMakePaperclips: any;
    cloudConnectionEstablished: any;
    droneLevelOfInvestment: number;
    hasFoundOutHowToTransformMolecularMatterIntoPaperclip: boolean;
    madeEnoughDrone: boolean;
    madeEnoughFactories: any;
    terraformingIslandIntoServers: any;
    hasCuredCancerForHumanity: any;
    hasCuredHungerForHumanity: any;
    hasRemovedCorruption: any;
    hasConnectedAndBreachedAllSocialNetworks: any;
    didBreakAllSecuritiesOnInternet: any;
    hasAnticipatedEveryHumanReaction: any;
    hasBegunToDig: any;
    factoryCanProduceDrones: any;
    numberOfDrone: number;
    hasAllowedDroneToBuildFactories: any;
    hasSpilledFakedNewsAllOverTheWorld: any;
    hasTargetedEveryScientistOnEarth: any;
    increaseFactoryBuilding: any;
    hasQuietProblematicSources: any;
    hasCreatedTheSwarm: any;
    hasLaunchedARocket: any;
    weightOfTheEarth: number;
    text: any;
    lang: any;
    buyAMachine: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    money: number;
    createAndRemoveGraphicEffect: (textAnimation: string, animationTarget: string, animationTypeOfElementCreated: string, animationCSSClass: string) => void;
    smallAutomaticMachineCost: string;
    productivyPerAutomaticMachine: any;
    smallAutomaticMachineProductivity: string;
    SmallAutomaticMachine: any;
    numberOfSmallMachines: number;
    investInSales: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    salesCost: number;
    hireASalesman: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    salesmanCost: number;
    maximumSalesHirable: number;
    salesman: number;
    buyFiveSales: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    officeLevelUpgrade: number;
    hireAManager: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    managerCost: number;
    salesLevelOfInvestment: number;
    investRD: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    rdCost: number;
    buyOffice: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    officeCost: number;
    softwareLevelOfInvestment: number;
    investInSoftware: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    softwareCost: number;
    factoryCost: string;
    checkNumber(weightOfTheEarth: any): React.ReactNode;
    investInAI: (cost: number, machineProductivity: string, isManual: boolean, machineType: string, machineQuantity: number, currency: string) => void;
    findNewsWayxToMakePaperclipCost: number;
    totalComputationalPowerAccumulated: number;
    droneCost: number;
    ImprovedroneCost: number;
    improveFactoryToCreateDroneCost: number;
    droneCanCreateFactoryCost: number;
    increaseFactoryCost: number;
    cureCancerCost: number;
    removeCorruptionCost: number;
    breachSocialMediaCost: number;
    breakAllTheSecuritiesOnInternetCost: number;
    anticipatetheWorldCost: number;
    molecularMatterCost: number;
    digCost: number;
    multipleRocketsCost: number;
    rocketCost: number;
    spillFakeNewsCost: number;
    targetingEveryScientistCost: number;
    swarmCost: number;

}

const InvestmentBox = (props: InvestmentBox) => {

    //Determining the first div class
    var className = props.soldAtLeastOnePaperclip == 0 ? "investment-box interface-div" : "investment-box interface-div visible-left-div"

    // R&D button disabling
    if (props.rdLevelOfInvestment > 5) {
        var classNameRDButton = "rd-button menu-button investment-button doNOTdisplay";
    }
    else {
        var classNameRDButton = "rd-button investment-button menu-button";
    }

    //Automatic Machine button disabling
    if (props.numberOfSmallAutomaticMachines >= props.maximumSmallAutomaticMachine) {
        var classNameAutomaticMachine = "automatic-machines-button investment-button menu-button disabled";
    }
    else {
        classNameAutomaticMachine = "automatic-machines-button investment-button menu-button";
    }

    // Find News Ways to Make Paperclip disabling
    if (props.hasFoundNewsWaysToMakePaperclips) {
        var classFindNewsWaysOfMakingPaperclipsDroneButton = "findNewsWaysOfMakingPaperclips menu-button doNOTdisplay";
    }
    else if (!props.hasFoundNewsWaysToMakePaperclips) {
        var classFindNewsWaysOfMakingPaperclipsDroneButton = "findNewsWaysOfMakingPaperclips menu-button";
    }
    else {
        var classFindNewsWaysOfMakingPaperclipsDroneButton = "findNewsWaysOfMakingPaperclips menu-button doNOTdisplay";
    }

    // One Drone Button disabling
    if (props.cloudConnectionEstablished && props.hasFoundNewsWaysToMakePaperclips) {
        var classNameOneDroneButton = "one-drone menu-button";
    }
    else {
        var classNameOneDroneButton = "one-drone menu-button doNOTdisplay";
    }

    // Fifty Drones Button disabling
    if (props.droneLevelOfInvestment > 0) {
        var classNameFiftyDroneButton = "fifty-drone menu-button";
    }
    else {
        var classNameFiftyDroneButton = "fifty-drone menu-button doNOTdisplay";
    }

    // 500 Drones Button disabling
    if (props.droneLevelOfInvestment > 1 && props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var classNameFiveHundredDroneButton = "five-hundred-drones menu-button";
    }
    else {
        var classNameFiveHundredDroneButton = "five-hundred-drones menu-button doNOTdisplay";
    }

    // Improve Drone disabling
    if (props.droneLevelOfInvestment > 2) {
        var classNameImproveDroneButton = "improveDrone menu-button doNOTdisplay";
    }
    else if (props.droneLevelOfInvestment < 1 && props.madeEnoughDrone) {
        var classNameImproveDroneButton = "improveDrone menu-button";
    }
    else if (props.droneLevelOfInvestment < 2 && props.madeEnoughDrone && props.madeEnoughFactories && !props.terraformingIslandIntoServers) {
        var classNameImproveDroneButton = "improveDrone menu-button";
    }
    else if (props.droneLevelOfInvestment < 2 && props.madeEnoughDrone && props.madeEnoughFactories && props.terraformingIslandIntoServers && !props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var classNameImproveDroneButton = "improveDrone menu-button";
    }
    else if (props.droneLevelOfInvestment <= 3 && props.madeEnoughDrone && props.madeEnoughFactories && props.terraformingIslandIntoServers && props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var classNameImproveDroneButton = "improveDrone menu-button";
    }
    else {
        var classNameImproveDroneButton = "improveDrone menu-button doNOTdisplay";
    }

    // Factory disabling
    if (props.hasFoundNewsWaysToMakePaperclips) {
        var classNameFactoryButton = "factory menu-button";
    }
    else {
        var classNameFactoryButton = "factory menu-button doNOTdisplay";
    }

    // 50 Factory disabling
    if (props.hasFoundNewsWaysToMakePaperclips && props.droneLevelOfInvestment > 0) {
        var className50FactoryButton = "factory menu-button";
    }
    else {
        var className50FactoryButton = "factory menu-button doNOTdisplay";
    }

    // 500 Factory disabling
    if (props.hasFoundNewsWaysToMakePaperclips && props.droneLevelOfInvestment > 1 && props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var className500FactoryButton = "factory menu-button";
    }
    else {
        var className500FactoryButton = "factory menu-button doNOTdisplay";
    }

    // Cure Cancer disabling
    if (props.hasCuredCancerForHumanity) {
        var classNameCancerCuredButton = "cure-cancer menu-button doNOTdisplay";
    }
    else if (!props.hasCuredCancerForHumanity && props.droneLevelOfInvestment >= 2 && props.terraformingIslandIntoServers) {
        var classNameCancerCuredButton = "cure-cancer menu-button";
    }
    else {
        var classNameCancerCuredButton = "cure-cancer menu-button doNOTdisplay";
    }

    // Cure Hunger disabling
    if (props.hasCuredHungerForHumanity) {
        var classNameHungerCuredButton = "cure-hunger menu-button doNOTdisplay";
    }
    else if (!props.hasCuredHungerForHumanity && props.droneLevelOfInvestment >= 2 && props.terraformingIslandIntoServers) {
        var classNameHungerCuredButton = "cure-hunger menu-button";
    }
    else {
        var classNameHungerCuredButton = "cure-hunger menu-button doNOTdisplay";
    }

    // Corruption disabling
    if (props.hasRemovedCorruption) {
        var classRemoveCorruptionButton = "removeCorruption menu-button doNOTdisplay";
    }
    else if (!props.hasRemovedCorruption && props.droneLevelOfInvestment >= 2 && props.terraformingIslandIntoServers) {
        var classRemoveCorruptionButton = "removeCorruption menu-button";
    }
    else {
        var classRemoveCorruptionButton = "removeCorruption menu-button doNOTdisplay";
    }

    // Connect and Breach all social networks disabling
    if (props.hasConnectedAndBreachedAllSocialNetworks) {
        var classBreachSocialMediaButton = "breachSocialMedia menu-button doNOTdisplay";
    }
    else if (!props.hasConnectedAndBreachedAllSocialNetworks && props.hasCuredHungerForHumanity && props.hasCuredCancerForHumanity && props.hasRemovedCorruption) {
        var classBreachSocialMediaButton = "breachSocialMedia menu-button";
    }
    else {
        var classBreachSocialMediaButton = "breachSocialMedia menu-button doNOTdisplay";
    }

    // Break all securities on Internet disabling
    if (props.didBreakAllSecuritiesOnInternet) {
        var classBreakInternetSecurityButton = "breakInternetSecurity menu-button doNOTdisplay";
    }
    else if (!props.didBreakAllSecuritiesOnInternet && props.hasCuredHungerForHumanity && props.hasCuredCancerForHumanity && props.hasRemovedCorruption) {
        var classBreakInternetSecurityButton = "breakInternetSecurity menu-button";
    }
    else {
        var classBreakInternetSecurityButton = "breakInternetSecurity menu-button doNOTdisplay";
    }

    // Anticipate all human reactions disabling
    if (props.hasAnticipatedEveryHumanReaction) {
        var classAnticipateHumanReactionButton = "anticipateAllHumanReactions menu-button doNOTdisplay";
    }
    else if (!props.hasAnticipatedEveryHumanReaction && props.hasCuredHungerForHumanity && props.hasCuredCancerForHumanity && props.hasRemovedCorruption && props.didBreakAllSecuritiesOnInternet && props.hasConnectedAndBreachedAllSocialNetworks) {
        var classAnticipateHumanReactionButton = "anticipateAllHumanReactions menu-button";
    }
    else {
        var classAnticipateHumanReactionButton = "anticipateAllHumanReactions menu-button doNOTdisplay";
    }

    // Molecular transformation disabling
    if (props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var classMolecularTransformationButton = "molecularTransformation menu-button doNOTdisplay";
    }
    else if (!props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip && props.hasAnticipatedEveryHumanReaction) {
        var classMolecularTransformationButton = "molecularTransformation menu-button";
    }
    else {
        var classMolecularTransformationButton = "molecularTransformation menu-button doNOTdisplay";
    }

    // Dig Button disabling
    if (props.hasBegunToDig) {
        var classDigHasStartedButton = "hasBegunToDig menu-button doNOTdisplay";
    }
    else if (!props.hasBegunToDig && props.hasAnticipatedEveryHumanReaction && props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip && props.droneLevelOfInvestment >= 3) {
        var classDigHasStartedButton = "hasBegunToDig menu-button";
    }
    else {
        var classDigHasStartedButton = "hasBegunToDig menu-button doNOTdisplay";
    }

    // Earth Weight disabling
    if (props.hasBegunToDig) {
        var weightEarth = "weightEarth";
    }
    else {
        var weightEarth = "weightEarth doNOTdisplay";
    }

    // Improve Factory Disabling
    if (!props.factoryCanProduceDrones && props.hasBegunToDig) {
        var classNameImproveFactoryButton = "ImproveFactory menu-button";
    }
    else {
        var classNameImproveFactoryButton = "ImproveFactory menu-button doNOTdisplay";
    }

    // Drones can build factories Disabling
    if (props.numberOfDrone > 15000 && !props.hasAllowedDroneToBuildFactories) {
        var classNameDroneBuildFactoryButton = "droneBuildFactory menu-button";
    }
    else {
        var classNameDroneBuildFactoryButton = "droneBuildFactory menu-button doNOTdisplay";
    }

    // Spill Fake News Disabling
    if (props.hasSpilledFakedNewsAllOverTheWorld) {
        var classSpillFakeNewsButton = "spillFakeNews menu-button doNOTdisplay";
    }
    else if (!props.hasSpilledFakedNewsAllOverTheWorld && props.hasAnticipatedEveryHumanReaction && props.hasBegunToDig && props.numberOfDrone > 40000) {
        var classSpillFakeNewsButton = "spillFakeNews menu-button";
    }
    else {
        var classSpillFakeNewsButton = "spillFakeNews menu-button doNOTdisplay";
    }

    // Target Scientists Disabling
    if (props.hasTargetedEveryScientistOnEarth) {
        var classTargetScientistsButton = "targetScientists menu-button doNOTdisplay";
    }
    else if (!props.hasTargetedEveryScientistOnEarth && props.hasSpilledFakedNewsAllOverTheWorld) {
        var classTargetScientistsButton = "targetScientists menu-button";
    }
    else {
        var classTargetScientistsButton = "targetScientists menu-button doNOTdisplay";
    }

    // Increase Factory Building Disabling
    if (props.increaseFactoryBuilding) {
        var classIncreaseFactoryProductivityButton = "increaseProductivityFactory menu-button doNOTdisplay";
    }
    else if (!props.increaseFactoryBuilding && props.hasSpilledFakedNewsAllOverTheWorld) {
        var classIncreaseFactoryProductivityButton = "increaseProductivityFactory menu-button";
    }
    else {
        var classIncreaseFactoryProductivityButton = "increaseProductivityFactory menu-button doNOTdisplay";
    }

    // Multiple Rockets disabling
    if (props.hasQuietProblematicSources) {
        var classQuietProblematicSourcesButton = "quieteProblematicSources menu-button doNOTdisplay";
    }
    else if (!props.hasQuietProblematicSources && props.hasTargetedEveryScientistOnEarth) {
        var classQuietProblematicSourcesButton = "quieteProblematicSources menu-button";
    }
    else {
        var classQuietProblematicSourcesButton = "quieteProblematicSources menu-button doNOTdisplay";
    }

    // Create Swarm Disabling
    if (props.hasCreatedTheSwarm) {
        var classCreatedSwarmButton = "createSwarm menu-button doNOTdisplay";
    }
    else if (!props.hasCreatedTheSwarm && props.hasQuietProblematicSources) {
        var classCreatedSwarmButton = "createSwarm menu-button";
    }
    else {
        var classCreatedSwarmButton = "createSwarm menu-button doNOTdisplay";
    }

    // Single Rocket disabling
    if (props.hasLaunchedARocket) {
        var classLaucnhingRocketButton = "hasLaunchedARocket menu-button doNOTdisplay";
    }
    else if (!props.hasLaunchedARocket && props.hasCreatedTheSwarm && props.weightOfTheEarth == 0) {
        var classLaucnhingRocketButton = "hasLaunchedARocket menu-button";
    }
    else {
        var classLaucnhingRocketButton = "hasLaunchedARocket menu-button doNOTdisplay";
    }


    return (
        <div>{!props.cloudConnectionEstablished && <div className={className}>
            <h2>{props.text.gameTitles.investment[props.lang]}</h2>
            <div className="padding-div">

                <div>
                    <h3>{props.text.gameTitles.machines[props.lang]}</h3>
                    <div>
                        <Button onClickProp={props.buyAMachine} money={props.money} machineProductivity={3} picture="./pictures/small-machine.png" classNameButton="small-machines-button menu-button investment-button" cost={5} classNameChild="info-small-machines-button" contentChild={props.text.gameButtons.investmentSmallMachineText} isManual={true} machineQuantity={1} name={props.text.gameButtons.investmentSmallMachine} machineType="smallMachine" createAndRemoveGraphicEffect={props.createAndRemoveGraphicEffect} containsAnimation={true} id='small-Machine-Button' textAnimation="+3" animationIdTarget='ul-main-number' animationTypeOfElementCreated='li' animationCSSClass='graphInputOrange' lang={props.lang} />
                    </div>
                </div>

                {props.rdLevelOfInvestment > 2
                    ? <div>
                        <div>
                            <ButtonAutomaticData onClickProp={props.buyAMachine} money={props.money} picture="./pictures/automatic-machine.png" name={props.text.gameButtons.investmentAutomaticMachineName} classNameButton={classNameAutomaticMachine} cost={props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild={props.text.gameButtons.investmentAutomaticMachineContent} automaticProductivityPerMachine={props.productivyPerAutomaticMachine} isManual={false} machineQuantity={1} machineType="smallAutomaticMachine" machineProductivity={props.smallAutomaticMachineProductivity} numberOfSmallAutomaticMachines={props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={props.SmallAutomaticMachine} lang={props.lang} />
                            {props.rdLevelOfInvestment > 3 ?
                                <ButtonAutomaticData onClickProp={props.buyAMachine} money={props.money} picture="./pictures/x5.png" name={props.text.gameButtons.investment5AutomaticMachineName} classNameButton={classNameAutomaticMachine} cost={50} classNameChild="info-automatic-machinesx5-button" contentChild={props.text.gameButtons.investmentAutomaticMachineContent} automaticProductivityPerMachine={props.productivyPerAutomaticMachine} machineQuantity={5} isManual={false} machineType="smallAutomaticMachine" machineProductivity={props.smallAutomaticMachineProductivity} numberOfSmallAutomaticMachines={props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={props.maximumSmallAutomaticMachine} lang={props.lang} />
                                : null}
                        </div>
                    </div>
                    : null}


                {props.numberOfSmallMachines > 0 ?
                    <div>
                        <h3 className="sales-title">{props.text.gameTitles.sales[props.lang]}</h3>
                        <Button onClickProp={props.investInSales} name={props.text.gameButtons.salesCallACustomerName} picture="./pictures/euros_symbol.png" classNameButton="invest-marketing-button menu-button investment-button" cost={props.salesCost} classNameChild="info-invest-marketing-button" contentChild={props.text.gameButtons.salesCallACustomerContent} createAndRemoveGraphicEffect={props.createAndRemoveGraphicEffect} money={props.money} containsAnimation={true} id='sales-button' textAnimation="+ 5" animationIdTarget='sell-area' animationTypeOfElementCreated='li' animationCSSClass='graphInputBig' lang={props.lang} />
                    </div>
                    : null}
                {(props.rdLevelOfInvestment > 2 && props.numberOfSmallAutomaticMachines > 3) ?
                    <Button onClickProp={props.hireASalesman} name={props.text.gameButtons.salesHireSalesman} picture="./pictures/salesman.png" classNameButton="salesman-button menu-button investment-button" cost={props.salesmanCost} classNameChild="info-salesman-button" contentChild={props.text.gameButtons.salesHireSalesmanContent} money={props.money} maximumSalesHirable={props.maximumSalesHirable} salesman={props.salesman} lang={props.lang} />
                    : null}
                {props.rdLevelOfInvestment > 3 ?
                    <Button onClickProp={props.buyFiveSales} picture="./pictures/x5.png" name={props.text.gameButtons.salesHire5SalesmenName} classNameButton="salesman-button menu-button investment-button" cost={props.salesmanCost * 5} classNameChild="salesman-machines-button" contentChild={props.text.gameButtons.salesHire5SalesmenContent} money={props.money} maximumSalesHirable={props.maximumSalesHirable} salesman={props.salesman} lang={props.lang} />
                    : null}

                {props.officeLevelUpgrade > 1 ?
                    <Button onClickProp={props.hireAManager} name={props.text.gameButtons.salesHireAManagerName} picture="./pictures/manager.png" classNameButton="rd-hire-manager menu-button investment-button" cost={props.managerCost} classNameChild="info-hire-manager" contentChild={props.text.gameButtons.salesHireAManagerContent} money={props.money} maximumSalesHirable={props.maximumSalesHirable} salesman={props.salesman} lang={props.lang} />
                    : null}

                {props.salesLevelOfInvestment > 3 &&
                    <div><h3>{props.text.gameTitles.researchAndDevelopment[props.lang]}</h3>
                        <div><Button onClickProp={props.investRD} name={props.text.gameButtons.investInRD} picture="./pictures/invest-in-research-and-development.png" classNameButton={classNameRDButton} cost={props.rdCost} classNameChild="info-invest-rd-button" contentChild={props.text.gameButtons.investInRDContent} money={props.money} lang={props.lang} />
                            {props.rdLevelOfInvestment > 4 && <Button onClickProp={props.buyOffice} name={props.text.gameButtons.buyNewOfficesName} picture="./pictures/new_office.png" classNameButton="office-button menu-button investment-button" cost={props.officeCost} classNameChild="info-buy-office-button" contentChild={props.text.gameButtons.buyNewOfficesContent} money={props.money} lang={props.lang} />}


                            {props.rdLevelOfInvestment > 5 && props.softwareLevelOfInvestment < 1 ?
                                <Button onClickProp={props.investInSoftware} name={props.text.gameButtons.installSoftwareName} picture="./pictures/software-program.png" classNameButton="rd-install-software menu-button investment-button" cost={props.softwareCost} classNameChild="info-invest-rd-install-software" contentChild={props.text.gameButtons.installSoftwareContent} money={props.money} lang={props.lang} />
                                : null}
                        </div></div>}

                {props.rdLevelOfInvestment > 4
                    ? <div><h3>{props.text.gameTitles.expansion[props.lang]}</h3><div>
                        <ButtonAutomaticData onClickProp={props.buyAMachine} money={props.money} name={props.text.gameButtons.factoryName} picture="./pictures/factory.png" classNameButton="factory-button menu-button investment-button" cost={props.factoryCost} classNameChild="info-buy-factory-button" contentChild={props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={1} automaticProductivityPerMachine={props.productivyPerAutomaticMachine} lang={props.lang} /></div></div>
                    : null}
            </div>
        </div>}


            {props.cloudConnectionEstablished && <div className={className}>
                <h2 className="AI-context">{props.text.gameTitles.aiExecution[props.lang]}</h2>
                <div className="padding-div">

                    <div className={weightEarth}>
                        <p className="data-title">{props.text.gameTitles.harvestingEarth[props.lang]}<span className="data">{props.checkNumber(props.weightOfTheEarth)} kg</span></p>
                        <p className="data-title">{props.text.gameTitles.droneCurrentlyDigging[props.lang]}<span className="data">{props.checkNumber(props.numberOfDrone)}</span></p>
                    </div>

                    <div>
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.findNewsWaysToMakePaperclips} picture="./pictures/findNewsWaysOfMakingPaperclips.png" classNameButton={classFindNewsWaysOfMakingPaperclipsDroneButton} cost={props.findNewsWayxToMakePaperclipCost} classNameChild="info-findNewsWays-button" contentChild={props.text.gameButtons.findNewsWaysToMakePaperclipsContent} money={props.money} machineType="find-news-ways-of-making-paperclips" machineQuantity={1} currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.createADroneName} picture="./pictures/drone.png" classNameButton={classNameOneDroneButton} cost={props.droneCost} classNameChild="info-drone-button" contentChild={props.text.gameButtons.createADroneContent} money={props.money} machineType="drone" machineQuantity={1} currency='paperclips' lang={props.lang} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.create50DroneName} picture="./pictures/x50.png" classNameButton={classNameFiftyDroneButton} cost={props.droneCost * 50} classNameChild="info-drone-button" contentChild={props.text.gameButtons.create50DroneContent} money={props.money} machineType="drone" machineQuantity={50} currency='paperclips' lang={props.lang} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.create500DroneName} picture="./pictures/x500.png" classNameButton={classNameFiveHundredDroneButton} cost={props.droneCost * 500} classNameChild="info-drone-button" contentChild={props.text.gameButtons.create500DroneContent} money={props.money} machineType="drone" machineQuantity={500} currency='paperclips' lang={props.lang} />
                    </div>
                    <div>
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.improveDrone} picture="./pictures/improveDrones.png" classNameButton={classNameImproveDroneButton} cost={props.ImprovedroneCost} classNameChild="info-improve-drone-button" contentChild={props.text.gameButtons.improveDroneContent} money={props.money} machineType="improve-drone" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.improveFactories} picture="./pictures/droneFactory.png" classNameButton={classNameImproveFactoryButton} cost={props.improveFactoryToCreateDroneCost} classNameChild="info-improve-factory-button" contentChild={props.text.gameButtons.improveFactoriesContent} money={props.money} machineType="improve-factory" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.droneCanBuildFactoriesName} picture="./pictures/programDroneToBuildFactories.png" classNameButton={classNameDroneBuildFactoryButton} cost={props.droneCanCreateFactoryCost} classNameChild="info-drone-can-build-factory-button" contentChild={props.text.gameButtons.droneCanBuildFactoriesContent} money={props.money} machineType="drones-can-build-factories" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.increaseMachineProductivyName} picture="./pictures/factoryIncrease.png" classNameButton={classIncreaseFactoryProductivityButton} cost={props.increaseFactoryCost} classNameChild="info-drone-can-build-factory-button" contentChild={props.text.gameButtons.increaseMachineProductivyContent} money={props.money} machineType="increaseFactoryProductivity" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                    </div>
                    <div>
                        <ButtonAutomaticData onClickProp={props.buyAMachine} money={props.money} name={props.text.gameButtons.factoryPaperclipName} picture="./pictures/factory.png" classNameButton={classNameFactoryButton} cost={100000} classNameChild="info-buy-factory-button" contentChild={props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={1} automaticProductivityPerMachine={props.productivyPerAutomaticMachine} currency='paperclips' lang={props.lang} />
                        <ButtonAutomaticData onClickProp={props.buyAMachine} money={props.money} name={props.text.gameButtons.factory50PaperclipName} picture="./pictures/x50.png" classNameButton={className50FactoryButton} cost={5000000} classNameChild="info-buy-factory-button" contentChild={props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={50} automaticProductivityPerMachine={props.productivyPerAutomaticMachine} currency='paperclips' lang={props.lang} />
                        <ButtonAutomaticData onClickProp={props.buyAMachine} money={props.money} name={props.text.gameButtons.factory500PaperclipName} picture="./pictures/x500.png" classNameButton={className500FactoryButton} cost={50000000} classNameChild="info-buy-factory-button" contentChild={props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={500} automaticProductivityPerMachine={props.productivyPerAutomaticMachine} currency='paperclips' lang={props.lang} />
                    </div>
                    <div>
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.cureCancerForHumanity} picture="./pictures/cureCancer.png" classNameButton={classNameCancerCuredButton} cost={props.cureCancerCost} classNameChild="info-cure-cancer-button" contentChild={props.text.gameButtons.cureCancerForHumanityContent} money={props.money} machineType="cure-cancer" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.cureHungerForHumanityName} picture="./pictures/CureHunger.png" classNameButton={classNameHungerCuredButton} cost={props.rdCost} classNameChild="info-cure-hunger-button" contentChild={props.text.gameButtons.cureHungerForHumanityContent} money={props.money} machineType="cure-hunger" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.removeCorruptionOnPlanetName} picture="./pictures/removeCorruption.png" classNameButton={classRemoveCorruptionButton} cost={props.removeCorruptionCost} classNameChild="info-remove-corruption-button" contentChild={props.text.gameButtons.removeCorruptionOnPlanetContent} money={props.money} machineType="removeCorruption" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                    </div>
                    <div>
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.connectAndBreachAllSocialNetworksName} picture="./pictures/socialNetwork.png" classNameButton={classBreachSocialMediaButton} cost={props.breachSocialMediaCost} classNameChild="info-breach-social-networks-button" contentChild={props.text.gameButtons.connectAndBreachAllSocialNetworksContent} money={props.money} machineType="breach-social-networks" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.breakAllSecuritiesName} picture="./pictures/connectInternet.png" classNameButton={classBreakInternetSecurityButton} cost={props.breakAllTheSecuritiesOnInternetCost} classNameChild="info-connect-Internet-button" contentChild={props.text.gameButtons.breakAllSecuritiesContent} money={props.money} machineType="connect-the-internet" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.anticipateEveryHumanReactionName} picture="./pictures/anticipateTheWorld.png" classNameButton={classAnticipateHumanReactionButton} cost={props.anticipatetheWorldCost} classNameChild="info-anticipate-button" contentChild={props.text.gameButtons.anticipateEveryHumanReactionContent} money={props.money} machineType="anticipate-the-world" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                    </div>
                    <div>
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.transformMatterIntoMetalName} picture="./pictures/Molecular.png" classNameButton={classMolecularTransformationButton} cost={props.molecularMatterCost} classNameChild="info-molecular-matter-button" contentChild={props.text.gameButtons.transformMatterIntoMetalContent} money={props.money} machineType="molecular-matter" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.beginToDigName} picture="./pictures/dig.png" classNameButton={classDigHasStartedButton} cost={props.digCost} classNameChild="info-dig-bro-button" contentChild={props.text.gameButtons.beginToDigContent} money={props.money} machineType="dig" lang={props.lang} />
                    </div>
                    <div>
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.quietProblematicSourcesName} picture="./pictures/fusee.png" classNameButton={classQuietProblematicSourcesButton} cost={props.multipleRocketsCost} classNameChild="info-multiples-rocket-button" contentChild={props.text.gameButtons.quietProblematicSourcesContent} money={props.money} machineType="multiple-rockets" lang={props.lang} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.sendARocketName} picture="./pictures/singlefusee.png" classNameButton={classLaucnhingRocketButton} cost={props.rocketCost} classNameChild="info-remove-button" contentChild={props.text.gameButtons.sendARocketContent} money={props.money} machineType="single-rocket" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.spillFakeNewsName} picture="./pictures/TV.png" classNameButton={classSpillFakeNewsButton} cost={props.spillFakeNewsCost} classNameChild="info-spill-fake-news-button" contentChild={props.text.gameButtons.spillFakeNewsCOntent} money={props.money} machineType="spill-fake-news" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.targetEveryScientistName} picture="./pictures/target.png" classNameButton={classTargetScientistsButton} cost={props.targetingEveryScientistCost} classNameChild="info-target-scientists-button" contentChild={props.text.gameButtons.targetEveryScientistContent} money={props.money} machineType="target-scientists" currency='computational' lang={props.lang} totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                    </div>
                    <div>
                        <Button onClickProp={props.investInAI} name={props.text.gameButtons.createTheSwarmName} picture="./pictures/swarm.png" classNameButton={classCreatedSwarmButton} cost={props.swarmCost} classNameChild="info-swarm-button" contentChild={props.text.gameButtons.createTheSwarmContent} money={props.money} machineType="swarm-of-drones" lang={props.lang} currency='computational' totalComputationalPowerAccumulated={props.totalComputationalPowerAccumulated} />
                    </div>
                </div>
            </div>}

        </div>
    );
}


export default InvestmentBox