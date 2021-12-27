import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'primereact/menu';
import './managetable.css';
import {data,ellipiseitems} from './managetableconst';
import { Dialog } from 'primereact/dialog';
import {ManageProposalDialogCon, ManageProposalRejectDialogCon} from '../dialog/primedialog';
import { brandBodyTemplate, campaignsBodyTemplate, clientNameBodyTemplate, createdBodyTemplate, dataProductBodyTemplate, durationBodyTemplate, estimateBudgetBodyTemplate, proposalNumbBodyTemplate, proposalNumbVBodyTemplate, saleRepBodyTemplate } from './commonmangaetablestyle';
const CommercialeColTable = () => {
    const [expandedRows, setExpandedRows] = useState(null);
    const [approvedD,setApprovedD] = useState(false);
    const [rejectedD,setRejectedD] = useState(false);
    const menu = useRef(null);
    const menu1 = useRef(null);
    const items = [
        {
            label: 'In Review',
            icon: 'pi pi-clock',
    
        },
        {
            label: 'Approved',
            icon: 'pi pi-check',
            command:()=>{
                setApprovedD(true);
            }
        },
        {
            label: 'Rejected',
            icon: 'pi pi-exclamation-circle',
            command:()=>{
                setRejectedD(true);
            }
        },
        {
            label: 'To-Do',
            icon: 'pi pi-list',
        },
    ];


   const proposalStatBodyTemplate = (rowData) => {
    
        return <><Menu model={items} popup ref={menu1} id="popup_menu" style={{fontSize:'10px',color:'gray',borderRadius:'14px',maxWidth:'160px'}}/><span style={{fontSize:'11px',color:'gray',textAlign:'center'}}>{rowData.proposalStatus} <i className="pi pi-chevron-down" style={{fontSize:'11px',marginLeft:'6px',marginTop:'5px',cursor:'pointer'}} onClick={(event) => menu1.current.toggle(event)} aria-controls="popup_menu" aria-haspopup ></i></span></>;
    };
    
    const rowExpansionTemplate = (daa) => {
        return (
            <div className="p-card" style={{borderRadius:'18px'}}>
                <DataTable value={data} responsiveLayout="scroll">
                    <Column field="proposalNumber" header="Proposal Version"  body={proposalNumbVBodyTemplate}/>
                    <Column field="clientName" header="Client Name" body={clientNameBodyTemplate}/>
                    <Column field="brand" header="Brand" body={brandBodyTemplate}/>
                    <Column field="duration" header="Duration"  body={durationBodyTemplate}/>
                    <Column field="estimatedBudget" header="Estimated Budget" body={estimateBudgetBodyTemplate}/>
                    <Column field="dataProduct" header="DataProduct" body={dataProductBodyTemplate}/>
                    <Column field="proposalStatus" header="Proposal Status" body={proposalStatBodyTemplate}/>
                    <Column field="campaigns" header="Campaigns"  body={campaignsBodyTemplate}/>
                    <Column field="created" header="Created" body={createdBodyTemplate}/>
                    <Column field="saleRep" header="Sales Rep" body={saleRepBodyTemplate}/>
                    <Column style={{ width: '1em'}} body={actionBodyTemplate}/>
                </DataTable>
            </div>
        );
    };
    const actionBodyTemplate = ()=>{

        return <><Menu model={ellipiseitems} popup ref={menu} id="popup_menu" style={{fontSize:'10px',color:'gray',borderRadius:'14px',maxWidth:'150px'}}/><i className="pi pi-ellipsis-h" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup ></i></>;
    };

    return (
        <>
        <div >
            <div className="p-shadow-5" >
                <DataTable value={data} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    responsiveLayout="scroll"
                    rowExpansionTemplate={rowExpansionTemplate} dataKey="id" stripedRows paginator rows={5}>

                    <Column field="proposalNumber" header="Proposal number"  body={proposalNumbBodyTemplate}/>
                    <Column field="clientName" header="Client Name" body={clientNameBodyTemplate}/>
                    <Column field="brand" header="Brand" body={brandBodyTemplate}/>
                    <Column field="duration" header="Duration"  body={durationBodyTemplate}/>
                    <Column field="estimatedBudget" header="Estimated Budget" body={estimateBudgetBodyTemplate}/>
                    <Column field="dataProduct" header="DataProduct" body={dataProductBodyTemplate}/>
                    <Column field="proposalStatus" header="Proposal Status" body={proposalStatBodyTemplate}/>
                    <Column field="campaigns" header="Campaigns"  body={campaignsBodyTemplate}/>
                    <Column field="created" header="Created" body={createdBodyTemplate}/>
                    <Column field="saleRep" header="Sales Rep" body={saleRepBodyTemplate}/>
                    <Column expander style={{ width: '1em'}}/>
                    <Column style={{ width: '1em'}} body={actionBodyTemplate}/>
                </DataTable>
            </div>
        </div>
        <Dialog header="" visible={approvedD} style={{ width: '40vw',borderRadius:'19px' }} onHide={() => setApprovedD(false)}>
            <ManageProposalDialogCon/>
        </Dialog>
        <Dialog header="" visible={rejectedD} style={{ width: '30vw',borderRadius:'19px' }} onHide={() => setRejectedD(false)}>
            <ManageProposalRejectDialogCon/>
        </Dialog>
        
        </>
    );
};
export default CommercialeColTable;