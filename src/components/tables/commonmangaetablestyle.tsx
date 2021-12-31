import React from 'react';

export const proposalNumbBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',}}>{rowData.proposalNumber}</span>;
};
export const proposalNumbVBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',}}>{rowData.proposalNumberV}</span>;
};
export const clientNameBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.clientName}</span>;
};
export const brandBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.brand}</span>;
};
export const durationBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.duration}</span>;
};
export const estimateBudgetBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.estimatedBudget}</span>;
};
export const dataProductBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.dataProduct}</span>;
};

export const campaignsBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.campaigns}</span>;
};
export const createdBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.created}</span>;
};
export const saleRepBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.saleRep}</span>;
};
export const targetReachBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.targetReach}</span>;
};
export const bidBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.bid}</span>;
};
export const freqBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.freq}</span>;
};
export const estBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.est}</span>;
};
export const netBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.net}</span>;
};
export const estMBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.estMedi}</span>;
};
export const mngdBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.mngd}</span>;
};
export const techBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.tech}</span>;
};
export const disBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.dis}</span>;
};
export const totalBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.total}</span>;
};
export const agencyBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.agency}</span>;
};
export const objectiveBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.objective}</span>;
};
export const productBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.product}</span>;
};
export const targetAudBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.targetAud}</span>;
};

export const plannedBudgetBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.plannedBudget}</span>;
};
export const disCompBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.disComp}</span>;
};
export const distypBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.distyp}</span>;
};
export const reqDisBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.reqDis}</span>;
};
export const reasonBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.reason}</span>;
};
export const statBodyTemplate = (rowData) => {
    if (rowData.stat==='Approved'){
        return <img src="https://img.icons8.com/office/16/000000/checked--v1.png" style={{fontSize:'11px',color:'green',textAlign:'center'}}/> ;
    }else{
        return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.stat}</span>;
    }
};

export const networkBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.networkType}</span>;
};
export const adForBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.adFormat}</span>;
};

export const measurementBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.measurement}</span>;
};
export const specialityBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.speciality}</span>;
};
export const demographicsBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.demographics}</span>;
};
export const cpmBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.baseCPM}</span>;
};
export const cpcBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.baseCPC}</span>;
};
export const cpvBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.baseCPV}</span>;
};
export const tafBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.taf}</span>;
};
export const msfBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.msf}</span>;
};
export const valBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.val}</span>;
};
export const actionBodyTemplate = (rowData) => {
    return <span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.action}</span>;
};