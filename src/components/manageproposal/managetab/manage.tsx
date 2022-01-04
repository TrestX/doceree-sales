import * as React from 'react';
import { CustomPrimeInputTextFieldLeftIcon } from '../../textfields/textfield';
import { CustomizedButtons } from '../../buttons/button';
import ManageColTable from '../../tables/manage_proposals/managetable';
import ActivationTable from '../../tables/activation_table/activationTable';
import CommercialeColTable from '../../tables/commertial_table/commercialtable';
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
        <ManageHeaderForm />

        <div>
            <CommercialeColTable />
        </div>

    </>);
};
export const Activation = () => {
    return (<>
        <ManageHeaderForm />

        <div>
            <ActivationTable />
        </div>

    </>);
};
