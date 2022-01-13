import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'primereact/menu';
import '../manage_proposals/managetable.css';
import { data, ellipiseitems, ellipiseitemsToDo } from '../manage_proposals/managetableconst';
import { Dialog } from 'primereact/dialog';
import { ManageProposalDialogCon } from '../../dialog/primedialog';
import { brandBodyTemplate, campaignsBodyTemplate, clientNameBodyTemplate, createdBodyTemplate, dataProductBodyTemplate, durationBodyTemplate, estimateBudgetBodyTemplate, proposalNumbBodyTemplate, proposalNumbVBodyTemplate, saleRepBodyTemplate } from '../commonmangaetablestyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faCheckCircle, faChevronCircleRight, faEllipsisH, faEye, faExclamationCircle, faList, faPause, faPercent, faPercentage } from '@fortawesome/free-solid-svg-icons';
const ActivationTable = () => {
    const [expandedRows, setExpandedRows] = useState(null);
    const [approvedD, setApprovedD] = useState(false);
    const menu = useRef(null);
    const [dateRange, setDateRange] = useState<Date | Date[] | undefined>(undefined);
    const menu1 = useRef(null);
    const items = [
        {
            label: 'Approved',
            icon: 'pi pi-check',
            command: () => {
                setApprovedD(true);
            }
        },
    ];


    const proposalStatBodyTemplate = (rowData) => {

        return <>
            {/* <Menu model={items} popup ref={menu1} id="popup_menu" style={{fontSize:'10px',color:'gray',borderRadius:'14px',maxWidth:'160px'}}/> */}
            <span className={`${rowData && rowData.proposalStatus && rowData.proposalStatus.replace(/ /g, '').toLowerCase()}`} style={{ fontSize: '11px', textAlign: 'center' }}>
                {rowData.proposalStatus === 'Approved' && <FontAwesomeIcon icon={faCheck} size={'lg'} color='green' style={{
                    backgroundColor: 'green', color: 'white',
                    borderRadius: '50%',
                    padding: '3px'
                }} />}
                {rowData.proposalStatus === 'Reply awaited' && <FontAwesomeIcon icon={faPause} size={'lg'} color='white' style={{
                    backgroundColor: '#2952e5', color: 'white',
                    borderRadius: '50%',
                    padding: '3px'
                }} />}
                {rowData.proposalStatus === 'Rejected' && <FontAwesomeIcon icon={faExclamationCircle} size={'lg'} color='red' />}
                {rowData.proposalStatus === 'To Do' && <FontAwesomeIcon icon={faBars} size={'lg'} color='white' style={{
                    backgroundColor: 'purple', color: 'white',
                    borderRadius: '50%',
                    padding: '3px'
                }} />}
                {rowData.proposalStatus === 'Submitted' && <FontAwesomeIcon icon={faChevronCircleRight} size={'lg'} color='#892af7' />}
                {rowData.proposalStatus === 'Draft' && <FontAwesomeIcon icon={faEllipsisH} size={'lg'} color='white' style={{
                    backgroundColor: '#fcbf07', color: 'white',
                    borderRadius: '50%',
                    padding: '3px'
                }} />}
                {rowData.proposalStatus === 'In Review' && <FontAwesomeIcon icon={faEye} size={'lg'} color='white' style={{
                    backgroundColor: '#e5a629', color: 'white',
                    borderRadius: '50%',
                    padding: '3px'
                }} />}
                {rowData.proposalStatus === 'Discount' && <FontAwesomeIcon icon={faPercentage} size={'lg'} color='white' style={{
                    backgroundColor: '#00ddff', color: 'white',
                    borderRadius: '50%',
                    padding: '3px'
                }} />}
                &nbsp;{rowData.proposalStatus}</span></>;
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
                    <Column style={{ width: '1em' }} body={actionBodyTemplate} />
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

    return (
        <>
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
                        <Column style={{ width: '1em' }} body={actionBodyTemplate} />
                    </DataTable>
                </div>
            </div>
            <Dialog header="" visible={approvedD} style={{ width: '40vw', borderRadius: '19px' }} onHide={() => setApprovedD(false)}>
                <ManageProposalDialogCon dateR={dateRange} setDate={setDateRange} />
            </Dialog>

        </>
    );
};
export default ActivationTable;