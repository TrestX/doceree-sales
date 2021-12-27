import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import * as React from 'react';
import { CustomizedButtons } from '../../buttons/button';
import { Dropdown } from 'primereact/dropdown';
import './proposal.css';
import { Tooltip } from 'primereact/tooltip';
const BasicProposalForm = () => {
    const countries = [
        { name: 'United Kingdom', code: 'UK' },
        { name: 'India', code: 'IN' },
        { name: 'United States', code: 'US' }
    ];
    return (
        <div className="p-grid" style={{padding:'4% 10% 4% 10%'}}>
        <div className="p-col-4" style={{textAlign:'left'}}>
        <Tooltip target=".custom-target-icon-agency" />

            <span style={{fontSize:'12px',color:'grey',fontWeight:600}} >Agency <i className="custom-target-icon-agency pi pi-info-circle" data-pr-tooltip="Agency" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-8">
                <span className="p-input-icon-left" style={{width:'100%'}}>
                    <i className="pi pi-search" />
                    <InputText className="custInp" placeholder="Search" />
                </span>
            
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
        <Tooltip target=".custom-target-icon-client" />
            <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Client <i className="custom-target-icon-client pi pi-info-circle" data-pr-tooltip="Client" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-8">
        <span className="p-input-icon-left" style={{width:'100%'}}>
                    <i className="pi pi-search" />
                    <InputText className="custInp" placeholder="Search" />
                </span>
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
        <Tooltip target=".custom-target-icon-brand" />
            <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Brand <i className="custom-target-icon-brand pi pi-info-circle" data-pr-tooltip="Brand" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-8">
        <span className="p-input-icon-left" style={{width:'100%'}}>
                    <i className="pi pi-search" />
                    <InputText className="custInp" placeholder="Search" />
                </span>
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
            <Tooltip target=".custom-target-icon-business-objective"/>
            <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Business Objective <i className="custom-target-icon-business-objective pi pi-info-circle" data-pr-tooltip="Business Objective" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-8">
            <InputTextarea rows={4} style={{width:'100%'}}/>
        </div>
        <div className="p-col-4" style={{textAlign:'left'}}>
        <Tooltip target=".custom-target-icon-market"/>
            <span style={{fontSize:'12px',color:'grey',fontWeight:600}}>Market <i className="custom-target-icon-market pi pi-info-circle" data-pr-tooltip="Market" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{fontSize:'11px',marginTop:'-6px'}}></i></span>
        </div>
        <div className="p-col-8" style={{textAlign:'left'}}>
        <Dropdown  options={countries} optionLabel="name" style={{width:'12rem',fontSize:'8px',color:'gray'}}/>

        </div>
        <div className="p-col-9">

        </div>
        <div className="p-col-2">
        <CustomizedButtons label='Next' onClickHandler={() => { console.log(''); }} />
        </div>
    </div>);
};

export default BasicProposalForm ;