
import Singlebar from './Singlecharcomp.js';
import './Chart.css';

const Charcomponent = (props) =>{

    const {dforcharts} = props;

const mondata = [
    {mon:'Jan',value:0},{mon:'Jan',value:0},{mon:'Jan',value:0},
    {mon:'Jan',value:0},{mon:'Jan',value:0},{mon:'Jan',value:0},
    {mon:'Jan',value:0},{mon:'Jan',value:0},{mon:'Jan',value:0},
    {mon:'Jan',value:0},{mon:'Jan',value:0},{mon:'Jan',value:0}

];
  
 dforcharts.forEach(element => {
     
 const monthnumber = element.date.getMonth();
 mondata[monthnumber].value = element.amount;

 });

 return (
<div className='chart'>
{
mondata.map(ele=>{

return <Singlebar singlemonth = {ele}></Singlebar>

})
}
</div>
  
 )
  



}

export default Charcomponent;