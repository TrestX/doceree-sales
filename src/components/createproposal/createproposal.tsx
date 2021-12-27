import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import './createproposal.css';
import BasicCardForm from './basiccardform';
import MaterialStepper from '../stepper/materialStepper';
const CreateProposal = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const items = [
        {
            label: 'Basic',
        },
        {
            label: 'Proposal Builder',
        },
    ];

    return (
        <>
            <div style={{ marginTop: '40px', marginLeft: '100px', float: 'left', minWidth: '100%', width: '100%' }}>
                {/* <h1 style={{ fontSize: '25px', fontWeight: 700, color: '#5e5d5d', textAlign: 'left' }}>Create Proposal</h1>
                <div className="p-grid">
                    <div className="p-col-8">
                        <div className="p-grid">
                            <div className="p-col-1">
                                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => { setActiveIndex(e.index); }} readOnly={true} style={{}} />
                            </div>
                            <div className="p-col-11" style={{ marginTop: '23px' }}>
                                {activeIndex === 0 ? <BasicCardForm title={'Basic'} /> : <BasicCardForm title={'Proposal Builder'} />}

                            </div>
                        </div>


                    </div>
                    <div className="p-col-4">
                        <div className="p-card">

                        </div>
                    </div>
                </div> */}            <MaterialStepper />


            </div>
            <MaterialStepper />
        </>
    );
};

export default CreateProposal;