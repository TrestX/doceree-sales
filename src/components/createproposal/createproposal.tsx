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
                <MaterialStepper />
            </div>
        </>
    );
};

export default CreateProposal;