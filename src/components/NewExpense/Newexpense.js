import './Newexpense.css';
import Expenseform from './Expenseform';

const Newexpense = (props) =>{

const getfromform = (data2)=>{
    props.getdatafromform(data2);
}

return <div className="new-expense">

 <Expenseform getdataobj = {getfromform}></Expenseform>

</div>         

}

export default Newexpense;