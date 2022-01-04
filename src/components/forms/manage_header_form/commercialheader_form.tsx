import { CustomizedButtons } from '../../../components/buttons/button';
import { CustomPrimeInputTextFieldLeftIcon } from '../../../components/textfields/textfield';
import * as React from 'react';



export function CommercialHeaderForm() {
    return (<div className="p-grid">
        <div className="p-col-8">
            <div style={{ marginTop: '8px' }}></div>
            <CustomPrimeInputTextFieldLeftIcon placeholder={'Search'} icon={'search'} width={'100'} />
        </div>
        <div className="p-col-3" style={{ paddingRight: '2px', textAlign: 'right' }}>
        </div>
        <div className="p-col-1 mr-1" style={{ paddingLeft: '0px', marginLeft: '-20px' }}>
            <CustomizedButtons label='Filter' onClickHandler={() => { console.log(''); }} />
        </div>
    </div>);
}