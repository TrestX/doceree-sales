import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import './managetable.css';
import { data } from './ratetableConst';
import { adForBodyTemplate, cpcBodyTemplate, cpmBodyTemplate, cpvBodyTemplate, demographicsBodyTemplate, measurementBodyTemplate, msfBodyTemplate, dpfBodyTemplate, networkBodyTemplate, specialityBodyTemplate, tafBodyTemplate, } from './commonmangaetablestyle';
const RateTable = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const actionBodyTemplate = () => {
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
                        responsiveLayout="scroll" selectionMode="radiobutton" selection={selectedRow} onSelectionChange={e => setSelectedRow(e.value)} dataKey="id" stripedRows paginator rows={10}>
                        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'admin' && <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>}
                        <Column field="networkType" header="Network Type" body={networkBodyTemplate}></Column>
                        <Column field="adFormat" header="Ad Format" body={adForBodyTemplate}></Column>
                        <Column field="measurement" header="Measurement" body={measurementBodyTemplate}></Column>
                        <Column field="speciality" header="Speciality" body={specialityBodyTemplate}></Column>
                        <Column field="demographics" header="Demographic" body={demographicsBodyTemplate}></Column>
                        <Column field="baseCPM" header="BaseCPM" body={cpmBodyTemplate}></Column>
                        <Column field="taf" header="TAF" body={tafBodyTemplate} ></Column>
                        <Column field="msf" header="MSF" body={msfBodyTemplate}></Column>
                        <Column field="dpf" header="DPF" body={dpfBodyTemplate}></Column>
                        {sessionStorage.getItem('accountType') && sessionStorage.getItem('accountType') === 'admin' && <Column body={actionBodyTemplate} style={{ minWidth: '8rem' }}></Column>}
                    </DataTable>
                </div>
            </div>
        </>
    );
};
export default RateTable;
