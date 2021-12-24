import {useState} from 'react';
import './Expenseitem.css';
import Datecomponent from './Datecomponent';

const Expenseitem = (props)=>{
    console.log(props);
const {data1} = props;

const [title , changetitle] = useState();
const buttonclick = ()=>{
    changetitle("Clicked");
}
return (

<div className="expense-item">
    <Datecomponent dat = {'dd'}></Datecomponent>
<div className="expense-item__description">

<h2>{title}</h2>
<div className="expense-item__price">{data1.amount}</div>
</div>
<button onClick = {buttonclick}>Change title</button>
</div>

);


}

export default Expenseitem;