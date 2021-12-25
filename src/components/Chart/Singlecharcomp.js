import './Chartbar.css';

const Singlebar = (props) =>{

     const {mon,amount} = props;
     const barHeight = Math.round(amount * 100)+'%';
     return (
         <div className="chart-bar">
             <div className='chart-bar__inner'>
<div className='chart-bar__fill' style={{height:barHeight}}></div>
             </div>
<div className='chart-bar__label'>{mon}</div>
         </div>
     )


}

export default Singlebar;