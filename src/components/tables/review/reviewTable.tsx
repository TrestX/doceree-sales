import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import '../manage_proposals/managetable.css';
import { data } from './reviewtableconst';
import { agencyBodyTemplate, bidBodyTemplate, brandBodyTemplate, campaignsBodyTemplate, clientNameBodyTemplate, disBodyTemplate, durationBodyTemplate, estBodyTemplate, estMBodyTemplate, freqBodyTemplate, mngdBodyTemplate, netBodyTemplate, objectiveBodyTemplate, productBodyTemplate, proposalNumbBodyTemplate, targetAudBodyTemplate, targetReachBodyTemplate, techBodyTemplate, totalBodyTemplate } from '../commonmangaetablestyle';
const ReviewTable = () => {

    return (
        <>
            <div >
                <div className="p-shadow-5" >
                    <DataTable value={data}
                        responsiveLayout="scroll" dataKey="id" stripedRows paginator rows={10}>

                        <Column field="proposalNumber" header="Proposal number" body={proposalNumbBodyTemplate} />
                        <Column field="agency" header="Agency" body={agencyBodyTemplate} />
                        <Column field="clientName" header="Client Name" body={clientNameBodyTemplate} />
                        <Column field="brand" header="Brand" body={brandBodyTemplate} />
                        <Column field="objective" header="Objective" body={objectiveBodyTemplate} />
                        <Column field="campaigns" header="Campaign" body={campaignsBodyTemplate} />
                        <Column field="product" header="Product" body={productBodyTemplate} />
                        <Column field="targetAud" header="Target Audience" body={targetAudBodyTemplate} />
                        <Column field="duration" header="Duration" body={durationBodyTemplate} />
                        <Column field="targetReach" header="Target Reach" body={targetReachBodyTemplate} />
                        <Column field="bid" header="Bid Str" body={bidBodyTemplate} />
                        <Column field="freq" header="Frequ" body={freqBodyTemplate} />
                        <Column field="est" header="Est. Im" body={estBodyTemplate} />
                        <Column field="net" header="Net" body={netBodyTemplate} />
                        <Column field="estMedi" header="Est. Medi" body={estMBodyTemplate} />
                        <Column field="mngd" header="Mngd. Se" body={mngdBodyTemplate} />
                        <Column field="tech" header="Tech Acc" body={techBodyTemplate} />
                        <Column field="dis" header="Discount" body={disBodyTemplate} />
                        <Column field="total" header="Total" body={totalBodyTemplate} />
                    </DataTable>
                </div>
            </div>
        </>
    );
};
export default ReviewTable;