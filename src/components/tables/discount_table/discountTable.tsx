import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import '../manage_proposals/managetable.css';
import { data } from './discountTableConst';
import { CustomizedPButtonsNI } from '../../buttons/pbutton';
import { clientNameBodyTemplate, disCompBodyTemplate, distypBodyTemplate, plannedBudgetBodyTemplate, proposalNumbBodyTemplate, reasonBodyTemplate, reqDisBodyTemplate, saleRepBodyTemplate, statBodyTemplate } from '../commonmangaetablestyle';
import { Dialog } from 'primereact/dialog';
import { ManageProposalRejectDialogCon } from '../../dialog/primedialog';
import { Toast } from 'primereact/toast';
const DiscountTable = () => {
    const toast = useRef(null);
    const [rejectedD, setRejectedD] = useState(false);
    const actionBodyTemplate = () => {
        return <>
            <CustomizedPButtonsNI label={'Reject'} fw={600} background={'#ffe2d6'} color={'#f26824'} border={'none'} fs={'10px'} onClickHandler={() => setRejectedD(true)} />
            <CustomizedPButtonsNI label={'Ask for Revision'} fw={600} background={'#e2debc'} color={'#494948'} border={'none'} fs={'10px'} onClickHandler={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <CustomizedPButtonsNI label={'Approve'} fw={600} background={'#d1e8c5'} color={'green'} border={'none'} fs={'10px'} onClickHandler={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </>;
    };
    return (
        <>
            <Toast ref={toast} />
            <div >
                <div style={{ border: '2px solid lightgrey', borderRadius: '10px' }}>
                    <DataTable value={data}
                        responsiveLayout="scroll" dataKey="id" stripedRows rows={10}>
                        <Column field="proposalNumber" header="Proposal number" body={proposalNumbBodyTemplate} />
                        <Column field="clientName" header="Client" body={clientNameBodyTemplate} />
                        <Column field="plannedBudget" header="Planned Budget" body={plannedBudgetBodyTemplate} />
                        <Column field="disComp" header="Discount Component" body={disCompBodyTemplate} />
                        <Column field="distyp" header="Type of Discount" body={distypBodyTemplate} />
                        <Column field="reqDis" header="Requested Discount" body={reqDisBodyTemplate} />
                        <Column field="reason" header="Reason" body={reasonBodyTemplate} />
                        <Column field="stat" header="Status" body={statBodyTemplate} />
                        <Column field="saleRep" header="Sales Rep" body={saleRepBodyTemplate} />

                        <Column header="Actions" style={{ width: '21rem' }} body={actionBodyTemplate} />
                    </DataTable>
                </div>
            </div>
            <Dialog header="" visible={rejectedD} style={{ width: '30vw', borderRadius: '19px' }} onHide={() => setRejectedD(false)}>
                <ManageProposalRejectDialogCon toas={toast} />
            </Dialog>
        </>
    );
};
export default DiscountTable;