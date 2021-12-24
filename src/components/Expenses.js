import { useState } from 'react';
import data from '../extra';
import './Expenses.css';
import Newexpense from './NewExpense/Newexpense';
import Getallexpenses from './renderexpenses';
import Expensefilter from './ExpenseFilter.js';
import Charcomponent from './Chart/Chart.js';
const da = data();
console.log(da);

function Allexpense() {
    const [data1, gotdata] = useState(da);
    const [currentdate, filterdate] = useState(2020);

    const funtogetdatafromform = (dataobject) => {

        console.log(dataobject);
        gotdata([dataobject, ...data1]);
    }

    function getfiltereddate(choosedyear) {
        filterdate(parseInt(choosedyear));

    }

    return (
        <div>
            <Newexpense getdatafromform={funtogetdatafromform}></Newexpense>

            <div className="expenses">
            <Charcomponent dforcharts={data1}></Charcomponent>

                <Expensefilter callchoosedyearfun={getfiltereddate}></Expensefilter>


                <Getallexpenses dat={data1} year={currentdate}></Getallexpenses>

            </div>


        </div>


    );


}

export default Allexpense;