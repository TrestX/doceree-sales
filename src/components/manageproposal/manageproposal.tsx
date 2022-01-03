import * as React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { PrimeHeaderTabs } from '../headers/headersTabs';
import './manageproposal.css';
import {Manage,Commercial,Activation} from './managetab/manage';
const ManageProposal = () => {
    const tabList = ['Manage', 'Commercial', 'Activation'];
    return (<>
        <div style={{ marginTop: '40px', marginLeft: '100px', float: 'left' }}>
            <h1 style={{ fontSize: '25px', fontWeight: 700, color: '#5e5d5d',textAlign:'left' }}>Manage Proposal</h1>
            <TabView>
                <TabPanel header='Manage'>
                    <Manage/>
                </TabPanel>
                <TabPanel header='Commercial'>
                    <Commercial/>
                </TabPanel>
                <TabPanel header='Activation'>
                    <Activation/>
                </TabPanel>
            </TabView>
        </div>

    </>);
};
export default ManageProposal;