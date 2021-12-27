import * as React from 'react';
import Card1basic from './card1basic';
const BasicCardForm = ({title}: { title: string}) => {
    return (
    <div className="p-grid">
        <div className="p-col-12">
            <div style={{padding:'10px',background: 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)',borderRadius:'7px 7px 0px 0px',textAlign:'left',color:'white',fontWeight:600,fontSize:'14px',}}>
                <span style={{marginLeft:'10px'}}>{title}</span>
            </div>
            <div className="p-card" style={{borderRadius:'0px 0px 7px 7px',marginTop:'4px'}}>
            <Card1basic/>
            </div>

        </div>
    </div>);
};

export default BasicCardForm;