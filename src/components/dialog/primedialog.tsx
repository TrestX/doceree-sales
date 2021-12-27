import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import './dialogcont.css';
import {CustomizedButtons} from '../buttons/button';
export function ManageProposalDialogCon() {
    return (
            <div className="p-grid" style={{padding:'4% 10% 4% 10%'}}>
                <div className="p-col-4">
                    <span style={{fontSize:'12px',color:'grey'}}>Upload IO</span>
                </div>
                <div className="p-col-8">
                    <InputText style={{minWidth:'100% !important',maxWidth:'100% !important'}}/>
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
                    <InputText />
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


export function ManageProposalRejectDialogCon() {
    return (
            <div className="p-grid" style={{padding:'2% 8% 2% 8%'}}>
                <div className="p-col-12">
                    <span style={{fontSize:'12px',color:'grey'}}>Reasoning</span>
                </div>
                <div className="p-col-12">
                    <InputTextarea rows={4}/>
                </div>
                <div className="p-col-8">

                </div>
                <div className="p-col-4">
                <CustomizedButtons label='Submit' onClickHandler={() => { console.log(''); }} />
                </div>
            </div>
    );
}

export function ManageProposalActivationDialogCon() {
    return (
        <div className="p-grid" style={{padding:'4% 10% 4% 10%'}}>
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
        <div className="p-col-7">

        </div>
        <div className="p-col-5">
            <div style={{marginLeft:'20px'}}>
        <CustomizedButtons label='Send for Activation' onClickHandler={() => { console.log(''); }} />
        </div>
        </div>
    </div>
    );
}