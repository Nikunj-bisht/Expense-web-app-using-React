import './Chartbar.css';

const Singlebar = (props) =>{

     const {singlemonth} = props;
     return (
         <div className="chart-bar">
             <div className='chart-bar__inner'>
<div className='chart-bar__fill' style={{height:'2%'}}></div>
             </div>
<div className='chart-bar__label'>{singlemonth.mon}</div>
         </div>
     )


}

export default Singlebar;