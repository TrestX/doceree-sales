import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import * as React from 'react';
import { CustomizedButtons } from '../buttons/button';
import { Dropdown } from 'primereact/dropdown';
import './cardbasic.css';
const Card1basic = () => {
    const countries = [
        { name: 'United Kingdom', code: 'UK' },
        { name: 'India', code: 'IN' },
        { name: 'United States', code: 'US' }
    ];
    return (
        <div className="p-grid" style={{padding:'4% 10% 4% 10%'}}>
        <div className="p-col-4" style={{textAlign:'left'}}>
            <span style={{fontSize:'12px',color:'grey'}}>Agency</span>
        </div>
        <div className="p-col-8">
                <span className="p-input-icon-left" style={{width:'100%'}}>
                    <i className="pi pi-search" />
                    <InputText style={{minWidth:'100% !important',width:'100%',maxWidth:'100% !important',maxHeight:'18px',fontSize:'12px',color:'gray'}} placeholder="Search" />
                </span>
            
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
            <span style={{fontSize:'12px',color:'grey'}}>Client</span>
        </div>
        <div className="p-col-8">
        <span className="p-input-icon-left" style={{width:'100%'}}>
                    <i className="pi pi-search" />
                    <InputText style={{minWidth:'100% !important',maxWidth:'100% !important',maxHeight:'18px',width:'100% !important',fontSize:'12px',color:'gray'}} placeholder="Search" />
                </span>
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
            <span style={{fontSize:'12px',color:'grey'}}>Brand</span>
        </div>
        <div className="p-col-8">
        <span className="p-input-icon-left" style={{width:'100%'}}>
                    <i className="pi pi-search" />
                    <InputText style={{minWidth:'100% !important',maxWidth:'100% !important',maxHeight:'18px',width:'100%',fontSize:'12px',color:'gray'}} placeholder="Search" />
                </span>
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
            <span style={{fontSize:'12px',color:'grey'}}>Business Objective</span>
        </div>
        <div className="p-col-8">
            <InputTextarea rows={4} style={{width:'100%'}}/>
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
            <span style={{fontSize:'12px',color:'grey'}}>Market</span>
        </div>
        <div className="p-col-8" style={{textAlign:'left'}}>
        <Dropdown  options={countries}optionLabel="name" placeholder="Select a Market" style={{width:'15rem',fontSize:'8px',color:'gray',padding:'0px'}}/>

        </div>
        <div className="p-col-10">

        </div>
        <div className="p-col-2">
        <CustomizedButtons label='Next' onClickHandler={() => { console.log(''); }} />
        </div>
    </div>);
};

export default Card1basic ;