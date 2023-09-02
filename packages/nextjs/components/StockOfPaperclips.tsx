import React from 'react';

// class NumberOfClicks extends Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return <p className="number-of-clicks">Number of paperclips : {this.props.numberOfClicks}</p>;
//     }
// }
interface StockOfPaperclipsProps {
    stockOfPaperclips: any
    checkNumber: any
}

const StockOfPaperclips = ({stockOfPaperclips, checkNumber}: StockOfPaperclipsProps) => {

    stockOfPaperclips = checkNumber(stockOfPaperclips);

    return <p className="stockOfPaperclips data-title">Transactions Available for Validation <span className="data">{stockOfPaperclips}</span></p>;
}

export default StockOfPaperclips