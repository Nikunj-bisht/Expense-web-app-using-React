import { useState } from 'react';


import './Newexpenseform.css';

const Expenseform = (props) => {

const [usertitle , titlestate] =  useState('');
const [useramount , amountstate] = useState('');
const [userdate , datestate] = useState('');

function titlechanged(event){
titlestate(event.target.value);
}

function amountchanged(event){
    amountstate(event.target.value);
}

function datechanged(event){
    datestate(event.target.value);
}

const submitdata = (event) => {
    event.preventDefault();
const expensedataobj = {
    title : usertitle,
    amount : useramount,
    date : userdate
}
expensedataobj['id'] = Math.random().toString();
props.getdataobj(expensedataobj);
}

return (
<form onSubmit={submitdata}>

<div className="new-expense__controls">

<div className="new-expense__control">
    
<label>Title</label>
<input type="text" onChange={titlechanged}></input>
</div>
<div className="new-expense__control">
    
<label>Amount</label>
<input type="text" onChange={amountchanged}></input>
</div>


<div className="new-expense__control">
    
<label>Date</label>
<input type="date" onChange={datechanged}></input>
</div>


</div>
<div className="new-expense__actions">
    <button type="submit">Add expense</button>
</div>
</form>

);

}

export default Expenseform;