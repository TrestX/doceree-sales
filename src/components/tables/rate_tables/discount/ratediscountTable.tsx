import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import '../../manage_proposals/managetable.css';
import { data } from './ratediscountConst';
import { actionBodyTemplate, disBodyTemplate, distypBodyTemplate, valBodyTemplate, } from '../../commonmangaetablestyle';
const RateDiscountTable = () => {
    const action1BodyTemplate = () => {
        return <>
            <i className="pi pi-pencil" style={{ fontSize: '12px', color: '#6B42F6' }}></i>
            <i className="pi pi-trash" style={{ fontSize: '12px', color: '#6B42F6', marginLeft: '30px' }}></i>
        </>;
    };
    return (
        <>
            <div >
                <div >
                    <DataTable value={data}
                        responsiveLayout="scroll" dataKey="id" stripedRows paginator rows={10}>
                        <Column field="distyp" header="Discount Type" style={{ minWidth: '12rem' }} body={distypBodyTemplate} sortable />
                        <Column field="val" header="Value" style={{ minWidth: '12rem' }} body={valBodyTemplate} sortable />
                        <Column field="dis" header="Discount" style={{ minWidth: '12rem' }} body={disBodyTemplate} sortable />
                        <Column field="action" header="Action" style={{ minWidth: '12rem' }} body={actionBodyTemplate} />
                        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'admin' && <Column body={action1BodyTemplate} style={{ minWidth: '12rem' }}></Column>}
                    </DataTable>
                </div>
            </div>
        </>
    );
};
export default RateDiscountTable;
