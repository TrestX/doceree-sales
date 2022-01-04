import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect, useRef } from 'react';
import {data} from './viewproposalconst';
const ViewProposalTable = () => {

    return (
        <>
        <div >
            <div className="p-shadow-5" >
                <DataTable value={data}
                    responsiveLayout="scroll" dataKey="id" stripedRows>

                    <Column field="campaignType" header="Campaign Type" style={{fontSize:'10px'}}/>
                    <Column field="targetGroup" header="Target Group" style={{fontSize:'10px'}}/>
                    <Column field="expectedReach" header="Expected Reach" style={{fontSize:'10px'}}/>
                    <Column field="duration" header="Duration (Months)" style={{fontSize:'10px'}}/>
                    <Column field="biddingStrategy" header="Bidding Strategy" style={{fontSize:'10px'}}/>
                    <Column field="cpiRate" header="CPI Rate" style={{fontSize:'10px'}}/>
                    <Column field="targetReach" header="Target Reach Frequency/month" style={{fontSize:'10px'}}/>
                    <Column field="estimatedImpression" header="Estimated Impression" style={{fontSize:'10px'}}/>
                    <Column field="estimatedClicks" header="Estimated Clicks" style={{fontSize:'10px'}}/>
                    <Column field="targetReach" header="Target Reach Frequency/month" style={{fontSize:'10px'}}/>
                    <Column field="netCost" header="Net Cost" style={{fontSize:'10px'}}/>
                </DataTable>
            </div>
        </div>
        </>
    );
};
export default ViewProposalTable;