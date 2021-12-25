
import Singlebar from './Singlecharcomp.js';
import './Chart.css';

const Charcomponent = (props) =>{

    const {dforcharts , currrd} = props;
console.log('chart ran');
const mondata = [
    {mon:'Jan',value:0,yr:2022},{mon:'Feb',value:0,yr:2022},{mon:'Mar',value:0,yr:2022},
    {mon:'Apr',value:0,yr:2022},{mon:'May',value:0,yr:2021},{mon:'Jun',value:0,yr:2022},
    {mon:'Jul',value:0,yr:2022},{mon:'Aug',value:0,yr:2022},{mon:'Sep',value:0,yr:2020},
    {mon:'Oct',value:0,yr:2022},{mon:'Nov',value:0,yr:2021},{mon:'Dec',value:0,yr:2020}

];
  
 dforcharts.forEach(element => {
     
if(element.date.getFullYear() === currrd){

    const monthnumber = element.date.getMonth();
    mondata[monthnumber].value += element.amount;
   
}
 });

 return (
<div className='chart'>
{
mondata.map(ele=>{

    return <Singlebar mon={ele.mon}  amount = {ele.value}></Singlebar>



})
}
</div>
  
 )
  



}

export default Charcomponent;