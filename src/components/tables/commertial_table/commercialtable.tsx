import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'primereact/menu';
import '../manage_proposals/managetable.css';
import { data, ellipiseitems, ellipiseitemsToDo } from '../manage_proposals/managetableconst';
import { Dialog } from 'primereact/dialog';
import { ManageProposalDialogCon, ManageProposalRejectDialogCon } from '../../dialog/primedialog';
import { brandBodyTemplate, campaignsBodyTemplate, clientNameBodyTemplate, createdBodyTemplate, dataProductBodyTemplate, durationBodyTemplate, estimateBudgetBodyTemplate, proposalNumbBodyTemplate, proposalNumbVBodyTemplate, saleRepBodyTemplate } from '../commonmangaetablestyle';

import { Toast } from 'primereact/toast';
import { CustomizedPButtonsNI } from '../../../components/buttons/pbutton';

const CommercialeColTable = () => {
    const toast = useRef(null);
    const [dateRange, setDateRange] = useState<Date | Date[] | undefined>(undefined);
    const [expandedRows, setExpandedRows] = useState(null);
    const [approvedD, setApprovedD] = useState(false);
    const [rejectedD, setRejectedD] = useState(false);
    const menu = useRef(null);
    const menu1 = useRef(null);
    // const items = [
    //     {
    //         label: 'In Review',
    //         icon: 'pi pi-clock',

    //     },
    //     {
    //         label: 'Approved',
    //         icon: 'pi pi-check',
    //         command:()=>{
    //             setApprovedD(true);
    //         }
    //     },
    //     {
    //         label: 'Rejected',
    //         icon: 'pi pi-exclamation-circle',
    //         command:()=>{
    //             setRejectedD(true);
    //         }
    //     },
    //     {
    //         label: 'To-Do',
    //         icon: 'pi pi-list',
    //     },
    // ];

    const proposalStatBodyTemplate = (rowData) => {

        return <>
            {/* <Menu model={items} popup ref={menu1} id="popup_menu" style={{fontSize:'10px',color:'gray',borderRadius:'14px',maxWidth:'160px'}}/> */}
            <span className={`${rowData && rowData.proposalStatus && rowData.proposalStatus.replace(/ /g, '').toLowerCase()}`} style={{ fontSize: '11px', textAlign: 'center' }}>
                {rowData.proposalStatus === 'Approved' && <i className="pi pi-check" style={{ color: 'white', fontSize: '7px', fontWeight: 700, marginRight: '5px', backgroundColor: 'green', padding: '5px', borderRadius: '50%' }}></i>}
                {rowData.proposalStatus === 'Reply awaited' && <i className="pi pi-pause" style={{ backgroundColor: '#2952e5', color: 'white', fontSize: '7px', fontWeight: 700, marginRight: '5px', padding: '5px', borderRadius: '50%' }}></i>}
                {rowData.proposalStatus === 'Rejected' && <i className="pi pi-exclamation-circle" style={{ color: '#bc1a1a', fontSize: '11.5px', fontWeight: 700, marginRight: '5px' }}></i>}
                {rowData.proposalStatus === 'To Do' && <i className="pi pi-align-justify" style={{ backgroundColor: '#6d1368', color: 'white', fontSize: '7px', fontWeight: 700, marginRight: '5px', padding: '5px', borderRadius: '50%' }}></i>}
                {rowData.proposalStatus === 'Submitted' && <i className="pi pi-chevron-right" style={{ backgroundColor: '#892af7', color: 'white', fontSize: '7px', fontWeight: 700, marginRight: '5px', padding: '5px', borderRadius: '50%' }}></i>}
                {rowData.proposalStatus === 'Draft' && <i className="pi pi-ellipsis-h" style={{ backgroundColor: '#fcbf07', color: 'white', fontSize: '7px', fontWeight: 700, marginRight: '5px', padding: '5px', borderRadius: '50%' }}></i>}
                {rowData.proposalStatus === 'In Review' && <i className="pi pi-wifi" style={{ backgroundColor: '#e5a629', color: 'white', fontSize: '7px', fontWeight: 700, marginRight: '5px', padding: '5px', borderRadius: '50%' }}></i>}
                {rowData.proposalStatus === 'Discount' && <i className="pi pi-percentage" style={{ backgroundColor: '#00ddff', color: 'white', fontSize: '7px', fontWeight: 700, marginRight: '5px', padding: '5px', borderRadius: '50%' }}></i>}
                {rowData.proposalStatus}</span></>;
    };
    const rowExpansionTemplate = (daa) => {
        return (
            <div className="p-card" style={{ borderRadius: '18px' }}>
                <DataTable value={data} responsiveLayout="scroll">
                    <Column field="proposalNumber" header="Proposal Version" body={proposalNumbVBodyTemplate} />
                    <Column field="clientName" header="Client Name" body={clientNameBodyTemplate} />
                    <Column field="brand" header="Brand" body={brandBodyTemplate} />
                    <Column field="duration" header="Duration" body={durationBodyTemplate} />
                    <Column field="estimatedBudget" header="Estimated Budget" body={estimateBudgetBodyTemplate} />
                    <Column field="dataProduct" header="DataProduct" body={dataProductBodyTemplate} />
                    <Column field="proposalStatus" header="Proposal Status" body={proposalStatBodyTemplate} />
                    <Column field="campaigns" header="Campaigns" body={campaignsBodyTemplate} />
                    <Column field="created" header="Created" body={createdBodyTemplate} />
                    {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'admin' && <Column field="saleRep" header="Sales Rep" body={saleRepBodyTemplate} />}

                </DataTable>
            </div>
        );
    };
    const actionBodyTemplate = (rowData) => {
        if (rowData.proposalStatus === 'To Do' || rowData.proposalStatus === 'In Review') {
            return <><Menu model={ellipiseitemsToDo} popup ref={menu} id="popup_menu" style={{ fontSize: '10px', color: 'gray', borderRadius: '14px', maxWidth: '150px' }} /><i className="pi pi-ellipsis-h" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup ></i></>;
        } else {
            return <><Menu model={ellipiseitems} popup ref={menu} id="popup_menu" style={{ fontSize: '10px', color: 'gray', borderRadius: '14px', maxWidth: '150px' }} /><i className="pi pi-ellipsis-h" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup ></i></>;
        }
    };
    const actionListBodyTemplate = (rowData) => {
        return <><CustomizedPButtonsNI label={'View'} fw={600} background={'#e2debc'} color={'#494948'} border={'none'} fs={'10px'} onClickHandler={() => setRejectedD(true)} />
            <CustomizedPButtonsNI label={'Reject with reasoning​'} fw={600} background={'#ffe2d6'} color={'#f26824'} border={'none'} fs={'10px'} onClickHandler={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <CustomizedPButtonsNI label={'Approve'} fw={600} background={'#d1e8c5'} color={'green'} border={'none'} fs={'10px'} onClickHandler={function (): void {
                throw new Error('Function not implemented.');
            }} /></>;

    };

    return (
        <>
            <Toast ref={toast} />
            <div >
                <div >
                    <DataTable value={data} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                        responsiveLayout="scroll"
                        rowExpansionTemplate={rowExpansionTemplate} dataKey="id" stripedRows rows={5} style={{ borderRadius: '20px', border: '1px solid lightgrey', backgroundColor: 'white' }}>

                        <Column field="proposalNumber" header="Proposal number" body={proposalNumbBodyTemplate} />
                        <Column field="clientName" header="Client Name" body={clientNameBodyTemplate} />
                        <Column field="brand" header="Brand" body={brandBodyTemplate} />
                        <Column field="duration" header="Duration" body={durationBodyTemplate} />
                        <Column field="estimatedBudget" header="Estimated Budget" body={estimateBudgetBodyTemplate} />
                        <Column field="dataProduct" header="DataProduct" body={dataProductBodyTemplate} />
                        <Column field="proposalStatus" header="Proposal Status" body={proposalStatBodyTemplate} />
                        <Column field="campaigns" header="Campaigns" body={campaignsBodyTemplate} />
                        <Column field="created" header="Created" body={createdBodyTemplate} />
                        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'admin' && <Column field="saleRep" header="Sales Rep" body={saleRepBodyTemplate} />}
                        <Column expander style={{ width: '1em' }} />
                        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') !== 'finance' ? <Column style={{ width: '1em' }} body={actionBodyTemplate} /> : <Column header="Actions" style={{ width: '21rem' }} body={actionListBodyTemplate} />}
                    </DataTable>
                </div>
            </div>
            <Dialog header="" visible={approvedD} style={{ width: '40vw', borderRadius: '19px' }} onHide={() => setApprovedD(false)}>
                <ManageProposalDialogCon dateR={dateRange} setDate={setDateRange} />
            </Dialog>
            <Dialog header="" visible={rejectedD} style={{ width: '30vw', borderRadius: '19px' }} onHide={() => setRejectedD(false)}>
                <ManageProposalRejectDialogCon toas={toast} />
            </Dialog>

        </>
    );
};
export default CommercialeColTable;