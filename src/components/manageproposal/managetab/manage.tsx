import * as React from 'react';
import { CustomPrimeInputTextFieldLeftIcon } from '../../textfields/textfield';
import { CustomizedButtons } from '../../buttons/button';
import ManageColTable from '../../tables/managetable';
import ActivationTable from '../../tables/activationTable';
import CommercialeColTable from '../../tables/commercialtable';
import { ManageHeaderForm } from '../../forms/manage_header_form/manage_header_form';
export const Manage = () => {
    return (<>
        <ManageHeaderForm />
        <div>
            <ManageColTable />
        </div>

    </>);
};

export const Commercial = () => {
    return (<>
        <div className="p-grid">
            <div className="p-md-6 p-lg-7">
                <div style={{ marginTop: '8px' }}></div>
                <CustomPrimeInputTextFieldLeftIcon placeholder={'Search'} icon={'search'} width={'100'} />
            </div>
            <div className="p-md-3 p-lg-3" style={{ paddingRight: '2px' }}>
                <CustomizedButtons label='Create New Proposal' onClickHandler={() => { console.log(''); }} />
            </div>
            <div className="p-md-3 p-lg-2" style={{ paddingLeft: '2px' }}>
                <CustomizedButtons label='Filter' onClickHandler={() => { console.log(''); }} />
            </div>
        </div>
        <div>
            <CommercialeColTable />
        </div>

    </>);
};
export const Activation = () => {
    return (<>
        <div className="p-grid">
            <div className="p-col-8">
                <div style={{ marginTop: '8px' }}></div>
                <CustomPrimeInputTextFieldLeftIcon placeholder={'Search'} icon={'search'} width={'100'} />
            </div>
            <div className="p-col-2" style={{ paddingRight: '2px' }}>
                <CustomizedButtons label='Create New Proposal' onClickHandler={() => { console.log(''); }} />
            </div>
            <div className="p-col-1" style={{ paddingLeft: '2px' }}>
                <CustomizedButtons label='Filter' onClickHandler={() => { console.log(''); }} />
            </div>
        </div>
        <div>
            <ActivationTable />
        </div>

    </>);
};
