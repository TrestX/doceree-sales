
import * as React from 'react';
import { CommercialHeaderForm } from '../forms/manage_header_form/commercialheader_form';
import { PrimeHeaderTabs } from '../headers/headersTabs';
import CommercialeColTable from '../tables/commertial_table/commercialtable';
import './manageproposal.css';
const ManageCommercialProposal = () => {
    const tabList = ['Manage', 'Commercial', 'Activation'];
    return (<>
        {<div style={{ marginTop: '40px', marginLeft: '100px', float: 'left' }}>
            <h1 style={{ fontSize: '25px', fontWeight: 700, color: '#5e5d5d', textAlign: 'left' }}>Manage Commercials</h1>
            <CommercialHeaderForm />
            <div>
                <CommercialeColTable />
            </div>
        </div>}

    </>);
};
export default ManageCommercialProposal;