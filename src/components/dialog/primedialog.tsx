import React, { useState,useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import './dialogcont.css';
import {CustomizedButtons} from '../buttons/button';
import { Calendar } from 'primereact/calendar';
import { FileUpload } from 'primereact/fileupload';
export function ManageProposalDialogCon({dateR,setDate}:{dateR:Date | Date[] | undefined,setDate:React.Dispatch<React.SetStateAction<Date | Date[]>>}) {
    return (
            <div className="p-grid">
                <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey'}}>Upload IO</span>
                </div>
                <div className="p-col-8">
                    <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} auto chooseLabel='' style={{width:'100%',}}/>
                    <InputText style={{minWidth:'100% !important',maxWidth:'100% !important',cursor:'pointer',position:'relative',top:'-40px'}} placeholder="File Should be PDF, JPEG" disabled/>
                </div>
                <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey'}}>IO Number</span>
                </div>
                <div className="p-col-8">
                    <InputText />
                </div>
                <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey'}}>IO Budget</span>
                </div>
                <div className="p-col-8">
                    <InputText />
                </div>
                <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey'}}>Run Dates</span>
                </div>
                <div className="p-col-8">
                    <Calendar id="range" value={dateR} onChange={(e) => setDate(e.value)} selectionMode="range" readOnlyInput style={{minWidth:'100%',width:'100%'}}/>
                </div>
                <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey'}}>Additional Comment</span>
                </div>
                <div className="p-col-8">
                    <InputTextarea rows={4}/>
                </div>
                <div className="p-col-9">

                </div>
                <div className="p-col-3">
                <CustomizedButtons label='Submit' onClickHandler={() => { console.log(''); }} />
                </div>
            </div>
    );
}


export function ManageProposalRejectDialogCon(toas:any) {
    return (
        <>
            <div className="p-grid">
                <div className="p-col-12">
                    <span style={{fontSize:'12px',color:'grey'}}>Reasoning</span>
                </div>
                <div className="p-col-12">
                    <InputTextarea rows={6} autoResize style={{maxHeight:'100% !important',minHeight:'100% !important',height:'140px'}}/>
                </div>
                <div className="p-col-8">

                </div>
                <div className="p-col-4">
                <CustomizedButtons label='Submit' onClickHandler={() => {toas.current.show({severity:'success', summary: 'Request rejected', detail:'Discount request rejected', life: 3000}); }} />
                </div>
            </div>
            </>
    );
}

export function ManageProposalActivationDialogCon() {
    return (
        <div className="p-grid">
        <div className="p-col-4">
            <span style={{fontSize:'12px',color:'grey'}}>Upload Order Details</span>
        </div>
        <div className="p-col-8">
            <InputText style={{width:'90%'}}/><span><i className="pi pi-plus-circle" style={{marginLeft:'10px',fontSize:'21px',color:'#6B42F6'}}></i></span>
        </div>
        <div className="p-col-4">
            <span style={{fontSize:'12px',color:'grey'}}>Creative/Tags</span>
        </div>
        <div className="p-col-8">
        <InputText style={{width:'90%'}}/><span><i className="pi pi-plus-circle" style={{marginLeft:'10px',fontSize:'21px',color:'#6B42F6'}}></i></span>
        </div>
        <div className="p-col-4">
            <span style={{fontSize:'12px',color:'grey'}}>Audience/Business Rules</span>
        </div>
        <div className="p-col-8">
        <InputText style={{width:'90%'}}/><span><i className="pi pi-plus-circle" style={{marginLeft:'10px',fontSize:'21px',color:'#6B42F6'}}></i></span>
        </div>
        <div className="p-col-4">
            <span style={{fontSize:'12px',color:'grey'}}>Additional Supporting Docs</span>
        </div>
        <div className="p-col-8">
        <InputText style={{width:'90%'}}/><span><i className="pi pi-plus-circle" style={{marginLeft:'10px',fontSize:'21px',color:'#6B42F6'}}></i></span>
        </div>
        <div className="p-col-4">
            <span style={{fontSize:'12px',color:'grey'}}>Additional Comment</span>
        </div>
        <div className="p-col-8">
            <InputTextarea rows={4}/>
        </div>
        <div className="p-col-8">

        </div>
        <div className="p-col-4">
        <CustomizedButtons label='Send for Activation' onClickHandler={() => { console.log(''); }} />
        </div>
    </div>
    );
}

export function CampaignName() {
    return (
        <>
            <div className="p-grid">
                <div className="p-col-12">
                    <span style={{fontSize:'12px',color:'grey'}}>Campaign Name</span>
                </div>
                <div className="p-col-12">
                <InputText style={{width:'100%'}}/>
                </div>
                <div className="p-col-9">

                </div>
                <div className="p-col-3">
                <CustomizedButtons label='Save' onClickHandler={() => {console.log('e');}} />
                </div>
            </div>
            </>
    );
}

export function ReqDiscount() {
    return (
        <div className="p-grid">
        <div className="p-col-4">
            
        </div>
        <div className="p-col-8">
        <h1 style={{fontSize:'12px',color:'grey'}}>Discount Component</h1>
            <InputText style={{width:'100%'}}/>
        </div>
        <div className="p-col-4">

        </div>
        <div className="p-col-8">
        <h1 style={{fontSize:'12px',color:'grey'}}>Type of Discount</h1>
        <InputText style={{width:'100%'}}/>
        </div>
        <div className="p-col-4">
<img src={'assets/graph.png'} style={{width:'100px',display:'block'}}/>
        </div>
        <div className="p-col-8">
        <h1 style={{fontSize:'12px',color:'grey'}}>Discount %</h1>
        <InputText style={{width:'100%'}}/>
        </div>
        <div className="p-col-4">
        </div>
        <div className="p-col-8">
        <h1 style={{fontSize:'12px',color:'grey'}}>Reasoning</h1>
        <InputTextarea rows={6}/>
        </div>
        <div className="p-col-4">
            
        </div>
        <div className="p-col-8" style={{marginTop:'25px'}}>
        <h1 style={{fontSize:'12px',color:'grey'}}>Final Est. Budget</h1>
        <InputText style={{width:'100%'}}/>
        </div>
        <div className="p-col-8">

        </div>
        <div className="p-col-4">
        <CustomizedButtons label='Send for Approval' onClickHandler={() => { console.log(''); }} />
        </div>
    </div>
    );
}