import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'primereact/menu';
import './managetable.css';
import { data } from './managetableconst';
import { Dialog } from 'primereact/dialog';
import { ManageProposalActivationDialogCon, ManageProposalDialogCon, ManageProposalRejectDialogCon } from '../../dialog/primedialog';
import { brandBodyTemplate, campaignsBodyTemplate, clientNameBodyTemplate, createdBodyTemplate, dataProductBodyTemplate, durationBodyTemplate, estimateBudgetBodyTemplate, proposalNumbBodyTemplate, proposalNumbVBodyTemplate, saleRepBodyTemplate } from '../commonmangaetablestyle';
import { Toast } from 'primereact/toast';
import { ViewProposal } from '../../viewmodal/proposalmodal';
import { CustomizedPrimeButtonCustomPadding } from '../../buttons/pbutton';
const ManageColTable = () => {
    const toast = useRef(null);
    const [dateRange, setDateRange] = useState<Date | Date[] | undefined>(undefined);
    const [expandedRows, setExpandedRows] = useState(null);
    const [approvedD, setApprovedD] = useState(false);
    const [rejectedD, setRejectedD] = useState(false);
    const [submitD, setSubmitD] = useState(false);
    const [viewProp, setViewProp] = useState(false);
    const menu = useRef(null);
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const items = [
        {
            label: 'Approved',
            icon: 'pi pi-check-circle',
            command: () => {
                setApprovedD(true);
            }
        },
        {
            label: 'Reply awaited',
            icon: 'pi pi-pause',
            command: () => {
                setSubmitD(true);
            }
        },
        {
            label: 'Rejected',
            icon: 'pi pi-exclamation-circle',
            command: () => {
                setRejectedD(true);
            }
        },
    ];
    const itemsInReview = [
        {
            label: 'Submitted',
            icon: 'pi pi-upload',
            command: () => {
                setApprovedD(true);
            }
        },
    ];
    const ellipiseitems = [
        {
            label: 'View',
            icon: 'pi pi-eye',
            command: () => {
                setViewProp(true);
            }
        },
        {
            label: 'Create Version',
            icon: 'pi pi-plus',

        },
        {
            label: 'Download',
            icon: 'pi pi-arrow-down',
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
        },
    ];

    const ellipiseitemsToDo = [
        {
            label: 'View/Edit',
            icon: 'pi pi-eye',
            command: () => {
                setViewProp(true);
            }
        },
        {
            label: 'Create Version',
            icon: 'pi pi-plus',

        },
        {
            label: 'Download',
            icon: 'pi pi-arrow-down',
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
        },
    ];

    const proposalStatBodyTemplate = (rowData) => {
        let menu = <Menu model={itemsInReview} popup ref={menu1} id="popup_menu" style={{ fontSize: '10px', color: 'gray', borderRadius: '14px', maxWidth: '160px' }} />;
        if (rowData.proposalStatus.includes('Submitted')) {
            menu = <Menu model={items} popup ref={menu2} id="popup_menu" style={{ fontSize: '10px', color: 'gray', borderRadius: '14px', maxWidth: '160px' }} />;
        }


        return <>
            {menu}
            <span className={`${rowData && rowData.proposalStatus && rowData.proposalStatus.replace(/ /g, '').toLowerCase()}`} style={{ fontSize: '11px', textAlign: 'center' }}>
                {rowData.proposalStatus === 'Approved' && <i className="pi pi-check" style={{ color: 'white', fontSize: '8.5px',fontWeight:700, marginRight: '5px',backgroundColor:'green',padding:'3px 2px 1.5px 3px',borderRadius:'50%' }}></i>}
                {rowData.proposalStatus === 'Reply awaited' && <i className="pi pi-pause" style={{ backgroundColor: '#2952e5', color: 'white', fontSize: '8.5px',fontWeight:700, marginRight: '5px',padding:'3px 3px 1.5px 3px',borderRadius:'50%'  }}></i>}
                {rowData.proposalStatus === 'Rejected' && <i className="pi pi-exclamation-circle" style={{ color: '#bc1a1a', fontSize: '11.5px',fontWeight:700, marginRight: '5px' }}></i>}
                {rowData.proposalStatus === 'To Do' && <i className="pi pi-align-justify" style={{ backgroundColor: '#6d1368',color: 'white', fontSize: '8.5px',fontWeight:700, marginRight: '5px',padding:'3px 3px 1.5px 3px',borderRadius:'50%' }}></i>}
                {rowData.proposalStatus === 'Submitted' && <i className="pi pi-chevron-right" style={{ backgroundColor: '#892af7', color: 'white', fontSize: '8.5px',fontWeight:700, marginRight: '5px',padding:'3px 3px 1.5px 3px',borderRadius:'50%' }}></i>}
                {rowData.proposalStatus === 'Draft' && <i className="pi pi-ellipsis-h" style={{ backgroundColor: '#fcbf07', color: 'white', fontSize: '8.5px',fontWeight:700, marginRight: '5px',padding:'3px 3px 1.5px 3px',borderRadius:'50%'  }}></i>}
                {rowData.proposalStatus === 'In Review' && <i className="pi pi-wifi" style={{ backgroundColor: '#e5a629', color: 'white', fontSize: '8.5px',fontWeight:700, marginRight: '5px',padding:'3px 3px 1.5px 3px',borderRadius:'50%'  }}></i>}
                {rowData.proposalStatus === 'Discount' && <i className="pi pi-percentage" style={{ backgroundColor: '#00ddff', color: 'white', fontSize: '8.5px',fontWeight:700, marginRight: '5px',padding:'3px 3px 1.5px 3px',borderRadius:'50%'  }}></i>}
                {rowData.proposalStatus} {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') !== 'admin' && (rowData.proposalStatus === 'Submitted' || rowData.proposalStatus === 'In Review') && <i className="pi pi-chevron-down" style={{ fontSize: '11px', marginLeft: '6px', marginTop: '5px', cursor: 'pointer' }} onClick={(event) => rowData.proposalStatus !== 'Submitted' ? menu1.current.toggle(event) : menu2.current.toggle(event)} aria-controls="popup_menu" aria-haspopup ></i>}</span></>;
    };

    const rowExpansionTemplate = (daa) => {
        return (
            <div className="p-card" style={{ borderRadius: '18px' }}>
                <DataTable value={data} responsiveLayout="scroll">
                    <Column field="proposalNumber" header="Proposal Version" body={proposalNumbVBodyTemplate} />
                    <Column field="clientName" header="Client Name" body={clientNameBodyTemplate} />
                    <Column field="brand" header="Brand" body={brandBodyTemplate} />
                    <Column field="duration" header="Duration" body={durationBodyTemplate} />
                    <Column field="estimatedBudget" header="Estimated Budget" body={estimateBudgetBodyTemplate} sortable />
                    <Column field="dataProduct" header="DataProduct" body={dataProductBodyTemplate} />
                    <Column field="proposalStatus" header="Proposal Status" body={proposalStatBodyTemplate} />
                    <Column field="campaigns" header="Campaigns" body={campaignsBodyTemplate} sortable />
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
                        <Column field="estimatedBudget" header="Estimated Budget" body={estimateBudgetBodyTemplate} sortable />
                        <Column field="dataProduct" header="DataProduct" body={dataProductBodyTemplate} />
                        <Column field="proposalStatus" header="Proposal Status" body={proposalStatBodyTemplate} />
                        <Column field="campaigns" header="Campaigns" body={campaignsBodyTemplate} sortable />
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
            <Dialog header="" visible={rejectedD} style={{ width: '30vw', borderRadius: '19px' }} onHide={() => setRejectedD(false)}>
                <ManageProposalRejectDialogCon toas={toast} />
            </Dialog>
            <Dialog header="" visible={submitD} style={{ width: '45vw', borderRadius: '19px' }} onHide={() => setSubmitD(false)}>
                <ManageProposalActivationDialogCon />
            </Dialog>
            <Dialog header={<div style={{ display: 'grid', top: '0px', justifyContent: 'center', marginTop: '-44px' }}>
                <CustomizedPrimeButtonCustomPadding label={'Proposal'} fw={800} background={'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)'} onClickHandler={undefined} brad={'0px 0px 12px 12px'} padding={'7px 80px 7px 80px'} color={'white'} fs={'22px'} />
            </div>} visible={viewProp} style={{ width: '90vw', borderRadius: '7px', height: '100vh' }} onHide={() => setViewProp(false)}>
                <ViewProposal />
            </Dialog>

        </>
    );
};
export default ManageColTable;