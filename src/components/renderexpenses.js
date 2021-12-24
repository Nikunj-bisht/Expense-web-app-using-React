
import Expenseitem  from "./Expenseitem.js";
function Getallexpenses(props){
const {dat , year} = props;

return (
<div>
{

dat.map((item,index)=>{
if(dat[index].date.getFullYear() === year){

    return <Expenseitem data1 = {dat[index]}></Expenseitem>
    
}else{
    console.log(false, dat[index].date.getFullYear());
}
    
    })
    
}

</div>
)




}

export default Getallexpenses;