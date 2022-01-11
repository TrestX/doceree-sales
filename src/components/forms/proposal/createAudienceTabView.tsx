import { Calendar } from 'primereact/calendar';
import * as React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import {  CustomizedPTButtons } from '../../../components/buttons/pbutton';
import { TabPanel, TabView } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
const CreateAudienceTabView = () => {
    return (<>
 
 <div style={{ marginLeft: '12px'}}>
                            <h1 style={{ fontSize: '12px', color: 'black', fontWeight: 700 }}>Specialization</h1>
                            <div className="p-grid" style={{ maxWidth: '30vw' }}>
                                <div className="p-col-6">
                                    <Dropdown options={[]} optionLabel="name" style={{ width: '100%', height: '50px' }} placeholder="Includes" />
                                </div>
                                <div className="p-col-6">
                                    <Dropdown options={[]} optionLabel="name" style={{ width: '100%', height: '50px' }} placeholder="All" />
                                </div>
                            </div>
                            <br />
                            <h1 style={{ fontSize: '12px', color: 'black', fontWeight: 700 }}>Location</h1>
                            <TabView>
                                <TabPanel header='Geo Fencing'>
                                    <div className="p-grid" style={{ marginLeft: '12px', maxWidth: '27vw' }}>
                                        <div className="p-col-6">
                                            <Dropdown options={[]} optionLabel="name" style={{ width: '100%', height: '50px' }} placeholder="Includes" />
                                        </div>
                                        <div className="p-col-6">
                                            <Dropdown options={[]} optionLabel="name" style={{ width: '100%', height: '50px' }} placeholder="All" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel header='Postal/Zip Code'>
                                    <div className="p-grid" style={{ marginLeft: '12px', maxWidth: '27vw' }}>
                                        <div className="p-col-6">
                                            <Dropdown options={[]} optionLabel="name" style={{ width: '100%', height: '50px' }} placeholder="Includes" />
                                        </div>
                                        <div className="p-col-6 spech">
                                            <InputText style={{ height: '55px !important', maxHeight: '55px !important' }} placeholder="Postal/Zip Code" />
                                        </div>
                                        <div className="p-col-6">
                                            <div style={{ marginTop: '5px' }}>
                                                <CustomizedPTButtons label='Upload file' onClickHandler={() => { console.log(''); }} icon={'plus-circle'} />
                                            </div>
                                        </div>
                                        <div className="p-col-6 spech">
                                            <h1 style={{ cursor: 'pointer', fontSize: '12px', color: 'grey' }}>Download Template</h1>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabView>

                        </div>

    </>);
};

export default CreateAudienceTabView;
